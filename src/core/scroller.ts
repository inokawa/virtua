import { hasNegativeOffsetInRtl } from "./dom";
import {
  ACTION_SCROLL,
  ACTION_MANUAL_SCROLL,
  ScrollJump,
  VirtualStore,
  SCROLL_IDLE,
  ACTION_SCROLL_END,
} from "./store";
import { debounce, throttle, max, min } from "./utils";

// Infer scroll state also from wheel events
// Sometimes scroll events do not fire when frame dropped even if the visual have been already scrolled
const createOnWheel = (
  store: VirtualStore,
  isHorizontal: boolean,
  onScrollStopped: () => void
) => {
  return throttle((e: WheelEvent) => {
    if (store._getScrollDirection() === SCROLL_IDLE) {
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
};

export type Scroller = {
  _initRoot: (rootElement: HTMLElement) => () => void;
  _getActualScrollSize: () => number;
  _scrollTo: (offset: number) => void;
  _scrollToIndex: (index: number, count: number) => void;
  _fixScrollJump: (jump: ScrollJump) => void;
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
  const normalizeOffset = (offset: number, diff?: boolean): number => {
    if (isHorizontal && isRtl) {
      if (hasNegativeOffsetInRtl(rootElement!)) {
        return -offset;
      } else {
        return diff
          ? -offset
          : store._getScrollSize() - store._getViewportSize() - offset;
      }
    }
    return offset;
  };

  const scrollManually = async (
    index: number,
    getCurrentOffset: () => number
  ) => {
    if (!rootElement) return;

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

    while (true) {
      // Sync viewport to scroll destination
      // In order to scroll to the correct position, mount the items and measure their sizes before scrolling.
      store._update(ACTION_MANUAL_SCROLL, getOffset());

      if (!store._hasUnmeasuredItemsInRange(index)) {
        break;
      }

      try {
        // Wait for the scroll destination items to be measured.
        await store._waitForScrollDestinationItemsMeasured();
      } catch (e) {
        // canceled
        return;
      }
    }

    // Scroll with the updated value
    rootElement[scrollToKey] = normalizeOffset(getOffset());
    store._update(ACTION_SCROLL_END, true);
  };

  return {
    _initRoot(root) {
      rootElement = root;

      const syncViewportToScrollPosition = () => {
        store._update(ACTION_SCROLL, normalizeOffset(root[scrollToKey]));
      };

      const onScrollStopped = debounce(() => {
        // Check scroll position once just after scrolling stopped
        syncViewportToScrollPosition();
        store._update(ACTION_SCROLL_END, false);
      }, 150);

      const onScroll = () => {
        syncViewportToScrollPosition();
        onScrollStopped();
      };

      const onWheel = createOnWheel(store, isHorizontal, onScrollStopped);

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
    _fixScrollJump: (jump) => {
      if (!rootElement) return;
      rootElement[scrollToKey] += normalizeOffset(jump, true);
    },
  };
};

export type WindowScroller = {
  _initRoot: (rootElement: HTMLElement) => () => void;
  _fixScrollJump: (jump: ScrollJump) => void;
};

export const createWindowScroller = (
  store: VirtualStore,
  isHorizontal: boolean
): WindowScroller => {
  const scrollToKey = isHorizontal ? "scrollX" : "scrollY";
  const offsetKey = isHorizontal ? "offsetLeft" : "offsetTop";

  return {
    _initRoot(rootElement) {
      let visible = false;

      const getOffsetToWindow = (node: HTMLElement, offset: number): number => {
        const nodeOffset = offset + node[offsetKey];

        const parent = node.offsetParent;
        if (node === document.body || !parent) {
          return nodeOffset;
        }

        return getOffsetToWindow(parent as HTMLElement, nodeOffset);
      };

      const syncViewportToScrollPosition = () => {
        if (!visible) return;
        store._update(
          ACTION_SCROLL,
          window[scrollToKey] - getOffsetToWindow(rootElement, 0)
        );
      };

      const onScrollStopped = debounce(() => {
        // Check scroll position once just after scrolling stopped
        syncViewportToScrollPosition();
        store._update(ACTION_SCROLL_END, false);
      }, 150);

      const onScroll = () => {
        syncViewportToScrollPosition();
        onScrollStopped();
      };

      const onWheel = createOnWheel(store, isHorizontal, onScrollStopped);

      const io = new IntersectionObserver(([entry]) => {
        visible = entry!.isIntersecting;
      });
      io.observe(rootElement);

      window.addEventListener("scroll", onScroll);
      window.addEventListener("wheel", onWheel, { passive: true });

      return () => {
        io.disconnect();
        window.removeEventListener("scroll", onScroll);
        window.removeEventListener("wheel", onWheel);
        onScrollStopped._cancel();
      };
    },
    _fixScrollJump: (jump) => {
      // TODO support case two window scrollers exist in the same view
      window.scrollBy(isHorizontal ? jump : 0, isHorizontal ? 0 : jump);
    },
  };
};
