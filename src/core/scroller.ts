import {
  ACTION_HANDLE_SCROLL,
  ACTION_HANDLE_MANUAL_SCROLL,
  ACTION_UPDATE_ITEM_SIZES,
  ACTION_UPDATE_VIEWPORT,
  ItemResize,
  ScrollJump,
  VirtualStore,
} from "./store";
import { debounce, throttle, exists, max, min, memoizeOnce } from "./utils";

// The scroll position may be negative value in rtl direction.
// https://github.com/othree/jquery.rtl-scroll-type
const hasNegativeOffsetInRtl = memoizeOnce(
  (scrollable: HTMLElement, key: "scrollTop" | "scrollLeft") => {
    const prev = scrollable[key];
    scrollable[key] = 1;
    const isNegative = scrollable[key] === 0;
    scrollable[key] = prev;
    return isNegative;
  }
);

export const SCROLL_STOP = 0;
export const SCROLL_DOWN = 1;
export const SCROLL_UP = 2;
export const SCROLL_MANUAL = 3;
type ScrollDirection =
  | typeof SCROLL_STOP
  | typeof SCROLL_DOWN
  | typeof SCROLL_UP
  | typeof SCROLL_MANUAL;

export type Scroller = {
  _initRoot: (rootElement: HTMLElement) => () => void;
  _initItem: (itemElement: HTMLElement, index: number) => () => void;
  _getActualScrollSize: () => number;
  _scrollTo: (offset: number) => void;
  _scrollToIndex: (index: number, count: number) => void;
  _fixScrollJump: (jump: ScrollJump, startIndex: number) => void;
};

export const createScroller = (store: VirtualStore): Scroller => {
  let prevOffset = -1;
  let scrollDirection: ScrollDirection = SCROLL_STOP;
  let resized = false;
  let rootElement: HTMLElement | undefined;
  const isHorizontal = store._isHorizontal();
  const isRtl = store._isRtl();
  const scrollToKey = isHorizontal ? "scrollLeft" : "scrollTop";
  const mountedIndexes = new WeakMap<Element, number>();

  // Initialize ResizeObserver lazily for SSR
  const getResizeObserver = memoizeOnce(() => {
    return new ResizeObserver((entries) => {
      // https://www.w3.org/TR/resize-observer/#intro
      const resizes: ItemResize[] = [];
      for (const entry of entries) {
        if (entry.target === rootElement) {
          store._update(ACTION_UPDATE_VIEWPORT, {
            _width: entry.contentRect.width,
            _height: entry.contentRect.height,
          });
        } else {
          const index = mountedIndexes.get(entry.target);
          if (exists(index)) {
            resizes.push([
              index,
              entry.contentRect[isHorizontal ? "width" : "height"],
            ]);
          }
        }
      }

      if (resizes.length) {
        store._update(ACTION_UPDATE_ITEM_SIZES, resizes);
        resized = true;
      }
    });
  });
  const getActualScrollSize = (): number => {
    if (!rootElement) return 0;
    // Use element's scrollHeight/scrollWidth instead of stored scrollSize.
    // This is because stored size may differ from the actual size, for example when a new item is added and not yet measured.
    return store._isHorizontal()
      ? rootElement.scrollWidth
      : rootElement.scrollHeight;
  };
  const updateScrollPosition = (offset: number, diff?: boolean) => {
    if (!rootElement) return;
    if (isRtl) {
      if (hasNegativeOffsetInRtl(rootElement, scrollToKey)) {
        offset *= -1;
      }
    }
    if (diff) {
      rootElement[scrollToKey] += offset;
    } else {
      rootElement[scrollToKey] = offset;
      scrollDirection = SCROLL_MANUAL;
    }
  };
  const scrollTo = async (index: number, getCurrentOffset: () => number) => {
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
        store._update(ACTION_HANDLE_MANUAL_SCROLL, getOffset());
        try {
          // Wait for the scroll destination items to be measured.
          await store._waitForScrollDestinationItemsMeasured();
        } catch (e) {
          // canceled
          return;
        }
      } while (store._hasUnmeasuredItemsInRange(index));

      // Scroll with the updated value
      updateScrollPosition(getOffset());
    } else {
      const offset = getOffset();
      updateScrollPosition(offset);
      // Sync viewport to scroll destination
      store._update(ACTION_HANDLE_MANUAL_SCROLL, offset);
    }
  };

  const calcTotalJump = (jump: ScrollJump): number =>
    jump.reduce((acc, [, j]) => acc + j, 0);

  return {
    _initRoot(root) {
      rootElement = root;
      const ro = getResizeObserver();

      const syncViewportToScrollPosition = () => {
        let offset = root[scrollToKey];
        if (isRtl) {
          if (hasNegativeOffsetInRtl(root, scrollToKey)) {
            offset *= -1;
          }
        }
        if (prevOffset === offset) {
          return;
        }
        // Skip scroll direction detection just after resizing because it may result in the opposite direction.
        // Scroll events are dispatched enough so it's ok to skip some of them.
        if (scrollDirection === SCROLL_STOP || !resized) {
          // Ignore until manual scrolling
          if (scrollDirection !== SCROLL_MANUAL) {
            scrollDirection = prevOffset > offset ? SCROLL_UP : SCROLL_DOWN;
          }
        } else {
          resized = false;
        }
        store._update(ACTION_HANDLE_SCROLL, (prevOffset = offset));
      };

      const onScrollStopped = debounce(() => {
        // Check scroll position once just after scrolling stopped
        syncViewportToScrollPosition();
        scrollDirection = SCROLL_STOP;
        store._updateIsScrolling(false);
      }, 150);

      const onScroll = () => {
        const isScrollStart = scrollDirection === SCROLL_STOP;
        syncViewportToScrollPosition();
        if (isScrollStart) {
          store._updateIsScrolling(true);
        }
        onScrollStopped();
      };

      // Infer scroll state also from wheel events
      // Sometimes scroll events do not fire when frame dropped even if the visual have been already scrolled
      const onWheel = throttle((e: WheelEvent) => {
        if (scrollDirection === SCROLL_STOP) {
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
          if (
            prevOffset > 0 &&
            prevOffset < store._getScrollSize() - store._getViewportSize()
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

      scrollTo(store._getItemIndexForScrollTo(offset), () => offset);
    },
    _scrollToIndex(index, count) {
      index = max(min(index, count - 1), 0);

      scrollTo(index, () => store._getItemOffset(index));
    },
    _fixScrollJump: (jump, startIndex) => {
      // Compensate scroll jump
      if (scrollDirection === SCROLL_UP) {
        const diff = calcTotalJump(jump);
        if (diff) {
          updateScrollPosition(diff, true);
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
              updateScrollPosition(offset + allDiff);
            }
          } else {
            // Keep start at mid
            const diff = jump.reduce((acc, [index, j]) => {
              if (index < startIndex) {
                acc += j;
              }
              return acc;
            }, 0);
            if (diff) {
              updateScrollPosition(diff, true);
            }
          }
        }
      } else {
        // NOP
      }
    },
  };
};
