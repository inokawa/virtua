import {
  getCurrentDocument,
  getCurrentWindow,
  isIOSWebKit,
} from "./environment.js";
import {
  ACTION_SCROLL,
  type VirtualStore,
  ACTION_SCROLL_END,
  ACTION_START_OFFSET_CHANGE,
  ACTION_MANUAL_SCROLL,
  ACTION_BEFORE_MANUAL_SMOOTH_SCROLL,
  UPDATE_SIZE_EVENT,
} from "./store.js";
import { cancelTimeout, microtask, timeout } from "./utils.js";

/**
 * @internal
 */
export const createResizeObserver = (cb: ResizeObserverCallback) => {
  let ro: ResizeObserver | undefined;

  return {
    _observe(e: HTMLElement) {
      // Initialize ResizeObserver lazily for SSR
      // https://www.w3.org/TR/resize-observer/#intro
      (
        ro ||
        // https://bugs.chromium.org/p/chromium/issues/detail?id=1491739
        (ro = new (getCurrentWindow(getCurrentDocument(e)).ResizeObserver)(cb))
      ).observe(e);
    },
    _unobserve(e: HTMLElement) {
      ro!.unobserve(e);
    },
    _dispose() {
      ro && ro.disconnect();
    },
  };
};

/**
 * @internal
 */
export const createScrollObserver = (
  store: VirtualStore,
  viewport: HTMLElement | Window,
  scroller: HTMLElement,
  isHorizontal: boolean,
  isRtl: boolean,
  onMomentumJump?: (() => void) | null,
  getStartOffset?: () => number,
) => {
  let lastScrollTime = 0;
  let wheeling = false;
  let touching = false;
  let justTouchEnded = false;
  let stillMomentumScrolling = false;
  let cancelScroll: (() => void) | undefined;

  let scrollEndTimer: ReturnType<typeof timeout> | undefined;

  const now = Date.now;
  const scrollOffsetKey = isHorizontal ? "scrollLeft" : "scrollTop";
  const scrollToKey = isHorizontal ? "left" : "top";

  /**
   * scrollTop/scrollLeft can be negative value under certain styles.
   * - direction: rtl https://github.com/othree/jquery.rtl-scroll-type
   * - writing-mode   https://people.igalia.com/fwang/scrollable-elements-in-non-default-writing-modes/
   * - flex-direction: column-reverse/row-reverse
   *
   * top/left bottom/right
   * 0        100          spec compliant bottom/right overflow, or possibly top/left overflow in Chrome earlier than v85
   * -100     0            spec compliant top/left overflow
   * https://drafts.csswg.org/cssom-view/#scroll-an-element
   */
  const normalizeScrollOffset = (offset: number): number => {
    return isRtl ? -offset : offset;
  };

  const getScrollOffset = () =>
    normalizeScrollOffset(scroller[scrollOffsetKey]);

  // The given offset will be clamped by browser
  // https://drafts.csswg.org/cssom-view/#dom-element-scrolltop
  const scrollTo = (offset: number, smooth?: boolean) => {
    scroller.scrollTo({
      [scrollToKey]: normalizeScrollOffset(offset),
      behavior: smooth ? "smooth" : "instant",
    });
  };

  // Debounce scroll end detection
  const onScrollEnd = () => {
    if (wheeling || touching) {
      wheeling = false;

      // Wait while wheeling or touching
      scheduleScrollEnd();
      return;
    }

    justTouchEnded = false;

    store.$update(ACTION_SCROLL_END);
  };
  const scheduleScrollEnd = () => {
    cancelTimeout(scrollEndTimer);
    scrollEndTimer = timeout(onScrollEnd, 150);
  };

  const onScroll = () => {
    lastScrollTime = now();

    if (justTouchEnded) {
      stillMomentumScrolling = true;
    }

    if (getStartOffset) {
      store.$update(ACTION_START_OFFSET_CHANGE, getStartOffset());
    }
    store.$update(ACTION_SCROLL, getScrollOffset());

    scheduleScrollEnd();
  };

  // Infer scroll state also from wheel events
  // Sometimes scroll events do not fire when frame dropped even if the visual have been already scrolled
  const onWheel = ((e: WheelEvent) => {
    if (
      wheeling ||
      // Scroll start should be detected with scroll event
      !store.$isScrolling() ||
      // Probably a pinch-to-zoom gesture
      e.ctrlKey
    ) {
      return;
    }

    const timeDelta = now() - lastScrollTime;
    if (
      // Check if wheel event occurs some time after scrolling
      150 > timeDelta &&
      50 < timeDelta &&
      // Get delta before checking deltaMode for firefox behavior
      // https://github.com/w3c/uievents/issues/181#issuecomment-392648065
      // https://bugzilla.mozilla.org/show_bug.cgi?id=1392460#c34
      (isHorizontal ? e.deltaX : e.deltaY)
    ) {
      wheeling = true;
    }
  }) as (e: Event) => void; // FIXME type error. why only here?

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

  viewport.addEventListener("scroll", onScroll);
  viewport.addEventListener("wheel", onWheel, { passive: true });
  viewport.addEventListener("touchstart", onTouchStart, { passive: true });
  viewport.addEventListener("touchend", onTouchEnd, { passive: true });

  return {
    _dispose: () => {
      viewport.removeEventListener("scroll", onScroll);
      viewport.removeEventListener("wheel", onWheel);
      viewport.removeEventListener("touchstart", onTouchStart);
      viewport.removeEventListener("touchend", onTouchEnd);
      cancelTimeout(scrollEndTimer);
    },
    _fixScrollJump: () => {
      const [jump, shift] = store._flushJump();
      if (!jump) return;

      if (stillMomentumScrolling && onMomentumJump) {
        onMomentumJump();
      }
      stillMomentumScrolling = false;

      const target = store.$getScrollOffset() + jump;
      if (
        target <= 0 ||
        target >=
          store.$getStartSpacerSize() +
            store.$getTotalSize() -
            store.$getViewportSize()
      ) {
        // Use absolute position at the edges not to exceed scrollable bounds
        // https://github.com/inokawa/virtua/discussions/475
        scrollTo(target);
      } else {
        // Use relative position not to overwrite concurrent scrolling
        // https://github.com/inokawa/virtua/issues/898
        scroller.scrollBy({
          [scrollToKey]: normalizeScrollOffset(jump),
          behavior: "instant",
        });
      }

      if (shift) {
        // https://github.com/inokawa/virtua/issues/357
        cancelScroll && cancelScroll();

        if (store.$getViewportSize() > store.$getTotalSize()) {
          // In this case applying jump may not cause scroll.
          // Current logic expects scroll event occurs after applying jump so we dispatch it manually.
          store.$update(ACTION_SCROLL, getScrollOffset());
        }
      }
    },
    _scroll: (getTargetOffset: () => number, smooth?: boolean) => {
      if (cancelScroll) {
        // Cancel waiting scrollTo
        cancelScroll();
      }

      let stopped: boolean | undefined;
      let timerId: ReturnType<typeof timeout> | undefined;
      let unsubscribe: (() => void) | undefined;

      // Stopping is kept as a state, not delivered as an event, so it can never be missed by a race with measurement
      // https://github.com/inokawa/virtua/issues/715
      const stop = (cancelScroll = () => {
        stopped = true;
        cancelTimeout(timerId);
        unsubscribe && unsubscribe();
      });

      // The scroll destination is not fixed until the items on the way are measured and the timing is not predictable
      const onMeasured = () => {
        if (stopped) {
          return;
        }

        // Resize event may not happen when the window/tab is not visible, or during browser back in Safari.
        // We have to wait for the initial measurement to avoid failing imperative scroll on mount.
        // https://github.com/inokawa/virtua/issues/450
        if (store.$getViewportSize()) {
          // Stop when items around scroll destination completely measured
          cancelTimeout(timerId);
          timerId = timeout(stop, 150);
        }

        if (smooth) {
          // Smooth scrolling can be started only once, so wait for all the items on the way to be measured.
          for (let [i, end] = store.$getRange(0); i <= end; i++) {
            if (store.$isUnmeasuredItem(i)) {
              return;
            }
          }
          stop();
        }

        store.$update(ACTION_MANUAL_SCROLL);
        scrollTo(getTargetOffset(), smooth);
      };

      const start = () => {
        if (stopped) {
          return;
        }
        // Batch the measurements in the same task to scroll only once
        let queued: boolean | undefined;
        unsubscribe = store.$subscribe(UPDATE_SIZE_EVENT, () => {
          if (queued) {
            return;
          }
          queued = true;
          microtask(() => {
            queued = false;
            onMeasured();
          });
        });
        onMeasured();
      };

      if (smooth) {
        store.$update(ACTION_BEFORE_MANUAL_SMOOTH_SCROLL, getTargetOffset());
        // https://github.com/inokawa/virtua/issues/590
        microtask(start);
      } else {
        start();
      }
    },
  };
};

/**
 * @internal
 */
export type ScrollObserver = ReturnType<typeof createScrollObserver>;
