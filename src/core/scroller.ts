import { hasNegativeOffsetInRTL, isRTLDocument } from "./environment";
import {
  ACTION_SCROLL,
  ACTION_BEFORE_MANUAL_SCROLL,
  ScrollJump,
  VirtualStore,
  ACTION_SCROLL_END,
  UPDATE_SIZE,
  ACTION_MANUAL_SCROLL,
  SCROLL_IDLE,
} from "./store";
import { ScrollToIndexAlign } from "./types";
import { debounce, throttle, timeout, clamp } from "./utils";

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
      if (offset > 0 && offset < store._getScrollOffsetMax()) {
        onScrollStopped();
      }
    }
  }, 50);
};

const normalizeRTLOffset = (
  rootElement: HTMLElement,
  store: VirtualStore,
  offset: number,
  diff?: boolean
): number => {
  if (hasNegativeOffsetInRTL(rootElement)) {
    return -offset;
  } else {
    return diff ? -offset : store._getScrollOffsetMax() - offset;
  }
};

export type Scroller = {
  _initRoot: (rootElement: HTMLElement) => () => void;
  _scrollTo: (offset: number) => void;
  _scrollBy: (offset: number) => void;
  _scrollToIndex: (index: number, align?: ScrollToIndexAlign) => void;
  _fixScrollJump: (jump: ScrollJump) => void;
};

export const createScroller = (
  store: VirtualStore,
  isHorizontal: boolean
): Scroller => {
  let rootElement: HTMLElement | undefined;
  let scrollToQueue: [() => void, () => void] | undefined;
  const scrollToKey = isHorizontal ? "scrollLeft" : "scrollTop";

  const normalizeOffset = (offset: number, diff?: boolean): number => {
    if (isHorizontal && isRTLDocument()) {
      return normalizeRTLOffset(rootElement!, store, offset, diff);
    }
    return offset;
  };

  const scrollManually = async (getOffset: () => number) => {
    if (!rootElement) return;

    const getTargetOffset = (): number => {
      // Adjust if the offset is over the end, to get correct startIndex.
      return clamp(getOffset(), 0, store._getScrollOffsetMax());
    };

    while (true) {
      // Sync viewport to scroll destination
      // In order to scroll to the correct position, mount the items and measure their sizes before scrolling.
      const targetOffset = getTargetOffset();
      store._update(ACTION_BEFORE_MANUAL_SCROLL, targetOffset);

      if (!store._hasUnmeasuredItemsInTargetViewport(targetOffset)) {
        break;
      }

      if (scrollToQueue) {
        // Cancel waiting scrollTo
        scrollToQueue[1]();
      }

      // Wait for the scroll destination items to be measured.
      const unsubscribe = store._subscribe(UPDATE_SIZE, () => {
        scrollToQueue && scrollToQueue[0]();
      });
      try {
        // The measurement will be done asynchronously and the timing is not predictable so we use promise.
        // For example, ResizeObserver may not fire when window is not visible.
        await new Promise<void>((resolve, reject) => {
          let resolved = false;

          const resolveQueue = () => {
            if (resolved) return;
            resolved = true;
            resolve();
            scrollToQueue = undefined;
          };
          scrollToQueue = [resolveQueue, reject];

          // In some specific situation with VGrid, the promise never resolved so we resolve it if timed out.
          timeout(resolveQueue, 250);
        });
      } catch (e) {
        // canceled
        return;
      } finally {
        unsubscribe();
      }
    }

    // Scroll with the updated value
    rootElement[scrollToKey] = normalizeOffset(getTargetOffset());
    store._update(ACTION_MANUAL_SCROLL);
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
        store._update(ACTION_SCROLL_END);
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
    _scrollTo(offset) {
      scrollManually(() => offset);
    },
    _scrollBy(offset) {
      offset += store._getScrollOffset();
      scrollManually(() => offset);
    },
    _scrollToIndex(index, align) {
      index = clamp(index, 0, store._getItemsLength() - 1);

      scrollManually(
        align === "end"
          ? () =>
              store._getItemOffset(index) +
              store._getItemSize(index) -
              store._getViewportSize()
          : () => store._getItemOffset(index)
      );
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
  let rootElement: HTMLElement | undefined;
  const scrollToKey = isHorizontal ? "scrollX" : "scrollY";
  const offsetKey = isHorizontal ? "offsetLeft" : "offsetTop";

  const normalizeOffset = (offset: number, diff?: boolean): number => {
    if (isHorizontal && isRTLDocument()) {
      return normalizeRTLOffset(rootElement!, store, offset, diff);
    }
    return offset;
  };

  return {
    _initRoot(root) {
      rootElement = root;
      let visible = false;

      // TODO calc offset only when it changes (maybe impossible)
      const getOffsetToWindow = (node: HTMLElement, offset: number): number => {
        const nodeOffset =
          offset +
          (isHorizontal && isRTLDocument()
            ? window.innerWidth - node[offsetKey] - node.offsetWidth
            : node[offsetKey]);

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
          normalizeOffset(window[scrollToKey]) - getOffsetToWindow(root, 0)
        );
      };

      const onScrollStopped = debounce(() => {
        // Check scroll position once just after scrolling stopped
        syncViewportToScrollPosition();
        store._update(ACTION_SCROLL_END);
      }, 150);

      const onScroll = () => {
        syncViewportToScrollPosition();
        onScrollStopped();
      };

      const onWheel = createOnWheel(store, isHorizontal, onScrollStopped);

      const io = new IntersectionObserver(([entry]) => {
        visible = entry!.isIntersecting;
      });
      io.observe(root);

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
      window.scrollBy(
        isHorizontal ? normalizeOffset(jump, true) : 0,
        isHorizontal ? 0 : jump
      );
    },
  };
};
