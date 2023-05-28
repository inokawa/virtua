import { hasNegativeOffsetInRtl } from "./dom";
import {
  ACTION_SCROLL,
  ACTION_MANUAL_SCROLL,
  ACTION_ITEM_RESIZE,
  ACTION_WINDOW_RESIZE,
  ItemResize,
  ScrollJump,
  VirtualStore,
  SCROLL_MANUAL,
  SCROLL_STOP,
  SCROLL_UP,
  SCROLL_DOWN,
} from "./store";
import { debounce, throttle, exists, max, min, once } from "./utils";

export type Scroller = {
  _initRoot: (rootElement: HTMLElement) => () => void;
  _initItem: (itemElement: HTMLElement, index: number) => () => void;
  _getActualScrollSize: () => number;
  _scrollTo: (offset: number) => void;
  _scrollToIndex: (index: number, count: number) => void;
  _fixScrollJump: (jump: ScrollJump, startIndex: number) => void;
};

export const createScroller = (store: VirtualStore): Scroller => {
  let resized = false;
  let rootElement: HTMLElement | undefined;
  const isHorizontal = store._isHorizontal();
  const isRtl = store._isRtl();
  const scrollToKey = isHorizontal ? "scrollLeft" : "scrollTop";
  const sizeKey = isHorizontal ? "width" : "height";
  const mountedIndexes = new WeakMap<Element, number>();

  // Initialize ResizeObserver lazily for SSR
  const getResizeObserver = once(() => {
    return new ResizeObserver((entries) => {
      // https://www.w3.org/TR/resize-observer/#intro
      const resizes: ItemResize[] = [];
      for (const { target, contentRect } of entries) {
        if (target === rootElement) {
          store._update(ACTION_WINDOW_RESIZE, contentRect[sizeKey]);
        } else {
          const index = mountedIndexes.get(target);
          if (exists(index)) {
            resizes.push([index, contentRect[sizeKey]]);
          }
        }
      }

      if (resizes.length) {
        store._update(ACTION_ITEM_RESIZE, resizes);
        resized = true;
      }
    });
  });
  const getActualScrollSize = (): number => {
    if (!rootElement) return 0;
    // Use element's scrollHeight/scrollWidth instead of stored scrollSize.
    // This is because stored size may differ from the actual size, for example when a new item is added and not yet measured.
    return isHorizontal ? rootElement.scrollWidth : rootElement.scrollHeight;
  };
  const scrollTo = (offset: number, diff?: boolean) => {
    if (!rootElement) return;
    if (isHorizontal && isRtl) {
      if (hasNegativeOffsetInRtl(rootElement)) {
        offset *= -1;
      }
    }
    if (diff) {
      rootElement[scrollToKey] += offset;
    } else {
      rootElement[scrollToKey] = offset;
      store._setScrollDirection(SCROLL_MANUAL);
    }
  };
  const scrollManually = async (
    index: number,
    getCurrentOffset: () => number
  ) => {
    const getOffset = (): number => {
      let offset = getCurrentOffset();
      const scrollSize = getActualScrollSize();
      const viewportSize = store._getViewportSize();
      if (scrollSize - (offset + viewportSize) <= 0) {
        // Adjust if the offset is over the end, to get correct startIndex.
        offset = scrollSize - viewportSize;
      }
      return offset;
    };

    if (store._hasUnmeasuredItemsInRange(index)) {
      do {
        // In order to scroll to the correct position, mount the items and measure their sizes before scrolling.
        store._update(ACTION_MANUAL_SCROLL, getOffset());
        try {
          // Wait for the scroll destination items to be measured.
          await store._waitForScrollDestinationItemsMeasured();
        } catch (e) {
          // canceled
          return;
        }
      } while (store._hasUnmeasuredItemsInRange(index));

      // Scroll with the updated value
      scrollTo(getOffset());
    } else {
      const offset = getOffset();
      scrollTo(offset);
      // Sync viewport to scroll destination
      store._update(ACTION_MANUAL_SCROLL, offset);
    }
  };

  const calcTotalJump = (jump: ScrollJump): number =>
    jump.reduce((acc, [j]) => acc + j, 0);

  return {
    _initRoot(root) {
      rootElement = root;
      const ro = getResizeObserver();

      const syncViewportToScrollPosition = () => {
        let offset = root[scrollToKey];
        if (isHorizontal && isRtl) {
          if (hasNegativeOffsetInRtl(root)) {
            offset *= -1;
          }
        }
        const prevOffset = store._getScrollOffset();
        if (prevOffset === offset) {
          return;
        }
        const scrollDirection = store._getScrollDirection();
        // Skip scroll direction detection just after resizing because it may result in the opposite direction.
        // Scroll events are dispatched enough so it's ok to skip some of them.
        if (
          (scrollDirection === SCROLL_STOP || !resized) &&
          // Ignore until manual scrolling
          scrollDirection !== SCROLL_MANUAL
        ) {
          store._setScrollDirection(
            prevOffset > offset ? SCROLL_UP : SCROLL_DOWN
          );
        }
        resized = false;
        store._update(ACTION_SCROLL, offset);
      };

      const onScrollStopped = debounce(() => {
        // Check scroll position once just after scrolling stopped
        syncViewportToScrollPosition();
        store._setScrollDirection(SCROLL_STOP);
      }, 150);

      const onScroll = () => {
        syncViewportToScrollPosition();
        onScrollStopped();
      };

      // Infer scroll state also from wheel events
      // Sometimes scroll events do not fire when frame dropped even if the visual have been already scrolled
      const onWheel = throttle((e: WheelEvent) => {
        if (store._getScrollDirection() === SCROLL_STOP) {
          // Scroll start should be detected with scroll event
          return;
        }
        if (e.ctrlKey) {
          // Probably a pinch-to-zoom gesture
          return;
        }
        // Get delta before checking deltaMode for firefox behavior
        // https://github.com/w3c/uievents/issues/181#issuecomment-392648065
        // https://bugzilla.mozilla.org/show_bug.cgi?id=1392460#c34
        if (isHorizontal ? e.deltaX : e.deltaY) {
          const offset = store._getScrollOffset();
          if (
            offset > 0 &&
            offset < store._getScrollSize() - store._getViewportSize()
          ) {
            onScrollStopped();
          }
        }
      }, 50);

      ro.observe(root);
      root.addEventListener("scroll", onScroll);
      root.addEventListener("wheel", onWheel, { passive: true });

      return () => {
        ro.disconnect();
        root.removeEventListener("scroll", onScroll);
        root.removeEventListener("wheel", onWheel);
        onScrollStopped._cancel();
      };
    },
    _initItem(el, i) {
      const ro = getResizeObserver();
      mountedIndexes.set(el, i);
      ro.observe(el);
      return () => {
        mountedIndexes.delete(el);
        ro.unobserve(el);
      };
    },
    _getActualScrollSize: getActualScrollSize,
    _scrollTo(offset) {
      offset = max(offset, 0);

      scrollManually(store._getItemIndexForScrollTo(offset), () => offset);
    },
    _scrollToIndex(index, count) {
      index = max(min(index, count - 1), 0);

      scrollManually(index, () => store._getItemOffset(index));
    },
    _fixScrollJump: (jump, startIndex) => {
      const scrollDirection = store._getScrollDirection();
      // Compensate scroll jump
      if (scrollDirection === SCROLL_UP) {
        const diff = calcTotalJump(jump);
        if (diff) {
          scrollTo(diff, true);
        }
      } else if (scrollDirection === SCROLL_MANUAL) {
        const offset = store._getScrollOffset();
        if (offset === 0) {
          // Do nothing to stick to the start
        } else {
          const allDiff = calcTotalJump(jump);
          if (
            store._getScrollSize() -
              (offset + store._getViewportSize() + allDiff) <=
            0
          ) {
            // Keep end to stick to the end
            if (allDiff) {
              scrollTo(offset + allDiff);
            }
          } else {
            // Keep start at mid
            const diff = jump.reduce((acc, [j, index]) => {
              if (index < startIndex) {
                acc += j;
              }
              return acc;
            }, 0);
            if (diff) {
              scrollTo(diff, true);
            }
          }
        }
      } else {
        // NOP
      }
    },
  };
};
