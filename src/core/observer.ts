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
} from "./store.js";
import { cancelTimeout, timeout } from "./utils.js";

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
 * scrollTop/scrollLeft can be negative value under certain styles.
 * - direction: rtl https://github.com/othree/jquery.rtl-scroll-type
 * - writing-mode   https://people.igalia.com/fwang/scrollable-elements-in-non-default-writing-modes/
 * - flex-direction: column-reverse/row-reverse
 *
 * top/left bottom/right
 * 0        100          spec compliant bottom/right overflow, or possibly top/left overflow in Chrome earlier than v85
 * -100     0            spec compliant top/left overflow
 * https://drafts.csswg.org/cssom-view/#scroll-an-element
 * @internal
 */
export const normalizeScrollOffset = (
  offset: number,
  isNegative: boolean,
): number => {
  return isNegative ? -offset : offset;
};

/**
 * @internal
 */
export const createScrollObserver = (
  store: VirtualStore,
  viewport: HTMLElement | Window,
  isHorizontal: boolean,
  getScrollOffset: () => number,
  updateScrollOffset: (
    value: number,
    shift: boolean,
    isMomentumScrolling: boolean,
  ) => void,
  getStartOffset?: () => number,
) => {
  let lastScrollTime = 0;
  let wheeling = false;
  let touching = false;
  let justTouchEnded = false;
  let stillMomentumScrolling = false;

  let scrollEndTimer: ReturnType<typeof timeout> | undefined;

  const now = Date.now;

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
      updateScrollOffset(jump, shift, stillMomentumScrolling);
      stillMomentumScrolling = false;

      if (shift && store.$getViewportSize() > store.$getTotalSize()) {
        // In this case applying jump may not cause scroll.
        // Current logic expects scroll event occurs after applying jump so we dispatch it manually.
        store.$update(ACTION_SCROLL, getScrollOffset());
      }
    },
  };
};

/**
 * @internal
 */
export type ScrollObserver = ReturnType<typeof createScrollObserver>;
