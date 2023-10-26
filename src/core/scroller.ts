import {
  hasNegativeOffsetInRTL,
  isIOSWebKit,
  isRTLDocument,
  isSmoothScrollSupported,
} from "./environment";
import {
  ACTION_SCROLL,
  ScrollJump,
  VirtualStore,
  ACTION_SCROLL_END,
  UPDATE_SIZE_STATE,
  ACTION_MANUAL_SCROLL,
  SCROLL_IDLE,
  ACTION_BEFORE_MANUAL_SMOOTH_SCROLL,
} from "./store";
import { ScrollToIndexOpts } from "./types";
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
  _scrollToIndex: (index: number, opts?: ScrollToIndexOpts) => void;
  _fixScrollJump: (jump: ScrollJump) => void;
};

export const createScroller = (
  store: VirtualStore,
  isHorizontal: boolean
): Scroller => {
  let rootElement: HTMLElement | undefined;
  let cancelScroll: (() => void) | undefined;
  let stillMomentumScrolling = false;
  const scrollToKey = isHorizontal ? "scrollLeft" : "scrollTop";

  const normalizeOffset = (offset: number, diff?: boolean): number => {
    if (isHorizontal && isRTLDocument()) {
      return normalizeRTLOffset(rootElement!, store, offset, diff);
    }
    return offset;
  };

  const scrollManually = async (getOffset: () => number, smooth?: boolean) => {
    if (!rootElement) return;

    if (cancelScroll) {
      // Cancel waiting scrollTo
      cancelScroll();
    }

    const getTargetOffset = (): number => {
      // Adjust if the offset is over the end, to get correct startIndex.
      return clamp(getOffset(), 0, store._getScrollOffsetMax());
    };

    const waitForMeasurement = (): [Promise<void>, () => void] => {
      // Wait for the scroll destination items to be measured.
      // The measurement will be done asynchronously and the timing is not predictable so we use promise.
      // For example, ResizeObserver may not fire when window is not visible.
      let queue: (() => void) | undefined;
      return [
        new Promise<void>((resolve, reject) => {
          queue = resolve;
          // Reject when items around scroll destination completely measured
          timeout((cancelScroll = reject), 150);
        }),
        store._subscribe(UPDATE_SIZE_STATE, () => {
          queue && queue();
        }),
      ];
    };

    if (smooth && isSmoothScrollSupported()) {
      while (true) {
        store._update(ACTION_BEFORE_MANUAL_SMOOTH_SCROLL, getTargetOffset());

        if (!store._hasUnmeasuredItemsInSmoothScrollRange()) {
          break;
        }

        const [promise, unsubscribe] = waitForMeasurement();

        try {
          await promise;
        } catch (e) {
          // canceled
          return;
        } finally {
          unsubscribe();
        }
      }

      rootElement.scrollTo({
        [isHorizontal ? "left" : "top"]: normalizeOffset(getTargetOffset()),
        behavior: "smooth",
      });
    } else {
      while (true) {
        const [promise, unsubscribe] = waitForMeasurement();

        try {
          rootElement[scrollToKey] = normalizeOffset(getTargetOffset());
          store._update(ACTION_MANUAL_SCROLL);

          await promise;
        } catch (e) {
          // canceled or finished
          return;
        } finally {
          unsubscribe();
        }
      }
    }
  };

  return {
    _initRoot(root) {
      rootElement = root;

      let touching = false;
      let justTouchEnded = false;

      const onScrollStopped = debounce(() => {
        if (touching) {
          // Wait while touching
          onScrollStopped();
          return;
        }

        justTouchEnded = false;

        store._update(ACTION_SCROLL_END);
      }, 150);

      const onScroll = () => {
        if (justTouchEnded) {
          stillMomentumScrolling = true;
        }

        store._update(ACTION_SCROLL, normalizeOffset(root[scrollToKey]));
        onScrollStopped();
      };

      const onWheel = createOnWheel(store, isHorizontal, onScrollStopped);

      const onTouchStart = () => {
        touching = true;
        justTouchEnded = stillMomentumScrolling = false;
      };
      const onTouchEnd = () => {
        touching = false;
        if (isIOSWebKit()) {
          justTouchEnded = true;
        }
      };

      root.addEventListener("scroll", onScroll);
      root.addEventListener("wheel", onWheel, { passive: true });
      root.addEventListener("touchstart", onTouchStart, { passive: true });
      root.addEventListener("touchend", onTouchEnd, { passive: true });

      return () => {
        root.removeEventListener("scroll", onScroll);
        root.removeEventListener("wheel", onWheel);
        root.removeEventListener("touchstart", onTouchStart);
        root.removeEventListener("touchend", onTouchEnd);
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
    _scrollToIndex(index, { align, smooth } = {}) {
      index = clamp(index, 0, store._getItemsLength() - 1);

      scrollManually(
        align === "end"
          ? () =>
              store._getViewportPaddingStart() +
              store._getItemOffset(index) +
              store._getItemSize(index) -
              store._getViewportSize()
          : align === "center"
          ? () =>
              store._getViewportPaddingStart() +
              store._getItemOffset(index) +
              (store._getItemSize(index) - store._getViewportSize()) / 2
          : () =>
              store._getViewportPaddingStart() + store._getItemOffset(index),
        smooth
      );
    },
    _fixScrollJump: (jump) => {
      if (!rootElement) return;

      // If we update scroll position while touching on iOS, the position will be reverted.
      // However iOS WebKit fires touch events only once at the beginning of momentum scrolling.
      // That means we have no reliable way to confirm still touched or not if user touches more than once during momentum scrolling...
      // This is a hack for the suspectable situations, inspired by https://github.com/prud/ios-overflow-scroll-to-top
      if (stillMomentumScrolling) {
        const prev = rootElement.style.overflow;
        rootElement.style.overflow = "hidden";
        stillMomentumScrolling = false;
        timeout(() => {
          rootElement!.style.overflow = prev;
        });
      }

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

      const onScrollStopped = debounce(() => {
        store._update(ACTION_SCROLL_END);
      }, 150);

      const onScroll = () => {
        if (!visible) return;

        store._update(
          ACTION_SCROLL,
          normalizeOffset(window[scrollToKey]) - getOffsetToWindow(root, 0)
        );
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
