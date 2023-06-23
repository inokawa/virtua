import { hasNegativeOffsetInRtl } from "./dom";
import {
  ACTION_SCROLL,
  ACTION_MANUAL_SCROLL,
  ScrollJump,
  VirtualStore,
  SCROLL_STOP,
  calcTotalJump,
  ACTION_SCROLL_DIRECTION_CHANGE,
  SCROLL_MANUAL,
} from "./store";
import { debounce, throttle, max, min } from "./utils";

export type Scroller = {
  _initRoot: (rootElement: HTMLElement) => () => void;
  _getActualScrollSize: () => number;
  _scrollTo: (offset: number) => void;
  _scrollToIndex: (index: number, count: number) => void;
  _fixScrollJump: (jump: ScrollJump, startIndex: number) => void;
};

export const createScroller = (
  store: VirtualStore,
  isHorizontal: boolean,
  isRtl: boolean
): Scroller => {
  let rootElement: HTMLElement | undefined;
  const scrollToKey = isHorizontal ? "scrollLeft" : "scrollTop";

  const getActualScrollSize = (): number => {
    if (!rootElement) return 0;
    // Use element's scrollHeight/scrollWidth instead of stored scrollSize.
    // This is because stored size may differ from the actual size, for example when a new item is added and not yet measured.
    return isHorizontal ? rootElement.scrollWidth : rootElement.scrollHeight;
  };
  const normalizeRtlOffset = (offset: number, diff?: boolean): number => {
    if (hasNegativeOffsetInRtl(rootElement!)) {
      return -offset;
    } else {
      return diff
        ? -offset
        : store._getScrollSize() - store._getViewportSize() - offset;
    }
  };
  const scrollTo = (offset: number, diff?: boolean) => {
    if (!rootElement) return;
    if (isHorizontal && isRtl) {
      offset = normalizeRtlOffset(offset, diff);
    }
    if (diff) {
      rootElement[scrollToKey] += offset;
    } else {
      rootElement[scrollToKey] = offset;
      store._update(ACTION_SCROLL_DIRECTION_CHANGE, SCROLL_MANUAL);
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

  return {
    _initRoot(root) {
      rootElement = root;

      const syncViewportToScrollPosition = () => {
        let offset = root[scrollToKey];
        if (isHorizontal && isRtl) {
          offset = normalizeRtlOffset(offset);
        }
        store._update(ACTION_SCROLL, offset);
      };

      const onScrollStopped = debounce(() => {
        // Check scroll position once just after scrolling stopped
        syncViewportToScrollPosition();
        store._update(ACTION_SCROLL_DIRECTION_CHANGE, SCROLL_STOP);
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

      root.addEventListener("scroll", onScroll);
      root.addEventListener("wheel", onWheel, { passive: true });

      return () => {
        root.removeEventListener("scroll", onScroll);
        root.removeEventListener("wheel", onWheel);
        onScrollStopped._cancel();
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
    _fixScrollJump: ([jump, isManual], startIndex) => {
      // Compensate scroll jump
      if (isManual) {
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
        const diff = calcTotalJump(jump);
        if (diff) {
          scrollTo(diff, true);
        }
      }
    },
  };
};
