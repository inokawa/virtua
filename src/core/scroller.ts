import {
  getCurrentDocument,
  getCurrentWindow,
  isIOSWebKit,
  isRTLDocument,
  isSmoothScrollSupported,
} from "./environment.js";
import {
  ACTION_SCROLL,
  type VirtualStore,
  ACTION_SCROLL_END,
  UPDATE_SIZE_EVENT,
  ACTION_MANUAL_SCROLL,
  ACTION_BEFORE_MANUAL_SMOOTH_SCROLL,
  ACTION_START_OFFSET_CHANGE,
} from "./store.js";
import { type ScrollToIndexOpts } from "./types.js";
import { clamp, createPromise, microtask, NULL } from "./utils.js";

const timeout = setTimeout;

const debounce = <T extends () => void>(fn: T, ms: number) => {
  let id: ReturnType<typeof setTimeout> | undefined | null;

  const cancel = () => {
    if (id != NULL) {
      clearTimeout(id);
    }
  };
  const debouncedFn = () => {
    cancel();
    id = timeout(() => {
      id = NULL;
      fn();
    }, ms);
  };
  debouncedFn._cancel = cancel;
  return debouncedFn;
};

/**
 * scrollLeft is negative value in rtl direction.
 *
 * left  right
 * 0     100    spec compliant (ltr)
 * -100  0      spec compliant (rtl)
 * https://github.com/othree/jquery.rtl-scroll-type
 */
const normalizeOffset = (offset: number, isHorizontal: boolean): number => {
  if (isHorizontal && isRTLDocument()) {
    return -offset;
  } else {
    return offset;
  }
};

const createScrollObserver = (
  store: VirtualStore,
  viewport: HTMLElement | Window,
  isHorizontal: boolean,
  getScrollOffset: () => number,
  updateScrollOffset: (
    value: number,
    shift: boolean,
    isMomentumScrolling: boolean
  ) => void,
  getStartOffset?: () => number
) => {
  const now = Date.now;

  let lastScrollTime = 0;
  let wheeling = false;
  let touching = false;
  let justTouchEnded = false;
  let stillMomentumScrolling = false;

  const onScrollEnd = debounce(() => {
    if (wheeling || touching) {
      wheeling = false;

      // Wait while wheeling or touching
      onScrollEnd();
      return;
    }

    justTouchEnded = false;

    store.$update(ACTION_SCROLL_END);
  }, 150);

  const onScroll = () => {
    lastScrollTime = now();

    if (justTouchEnded) {
      stillMomentumScrolling = true;
    }

    if (getStartOffset) {
      store.$update(ACTION_START_OFFSET_CHANGE, getStartOffset());
    }
    store.$update(ACTION_SCROLL, getScrollOffset());

    onScrollEnd();
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
      onScrollEnd._cancel();
    },
    _fixScrollJump: () => {
      const [jump, shift] = store._flushJump();
      if (!jump) return;
      updateScrollOffset(
        normalizeOffset(jump, isHorizontal),
        shift,
        stillMomentumScrolling
      );
      stillMomentumScrolling = false;

      if (shift && store.$getViewportSize() > store.$getTotalSize()) {
        // In this case applying jump may not cause scroll.
        // Current logic expects scroll event occurs after applying jump so we dispatch it manually.
        store.$update(ACTION_SCROLL, getScrollOffset());
      }
    },
  };
};

type ScrollObserver = ReturnType<typeof createScrollObserver>;

type ScrollScheduler = [
  scroll: (getTargetOffset: () => number, smooth?: boolean) => Promise<void>,
  cancel: () => void
];

const createScrollScheduler = (
  store: VirtualStore,
  initialized: () => Promise<boolean>,
  scroll: (offset: number, smooth?: boolean) => void
): ScrollScheduler => {
  let cancelScroll: (() => void) | undefined;

  // The given offset will be clamped by browser
  // https://drafts.csswg.org/cssom-view/#dom-element-scrolltop
  return [
    async (getTargetOffset, smooth) => {
      // Wait for element assign. The element may be undefined if scrollRef prop is used and scroll is scheduled on mount.
      // https://github.com/inokawa/virtua/pull/733
      // https://github.com/inokawa/virtua/pull/750
      if (!(await initialized())) {
        return;
      }

      if (cancelScroll) {
        // Cancel waiting scrollTo
        cancelScroll();
      }

      const waitForMeasurement = (): [Promise<boolean>, () => void] => {
        // Wait for the scroll destination items to be measured.
        // The measurement will be done asynchronously and the timing is not predictable so we use promise.
        const [promise, resolve] = createPromise<boolean>();
        cancelScroll = () => {
          resolve(false);
        };

        // Resize event may not happen when the window/tab is not visible, or during browser back in Safari.
        // We have to wait for the initial measurement to avoid failing imperative scroll on mount.
        // https://github.com/inokawa/virtua/issues/450
        if (store.$getViewportSize()) {
          // Cancel when items around scroll destination completely measured
          timeout(cancelScroll, 150);
        }
        return [
          promise,
          store.$subscribe(UPDATE_SIZE_EVENT, () => {
            resolve(true);
          }),
        ];
      };

      if (smooth && isSmoothScrollSupported()) {
        store.$update(ACTION_BEFORE_MANUAL_SMOOTH_SCROLL, getTargetOffset());

        // https://github.com/inokawa/virtua/issues/590
        microtask(async () => {
          while (true) {
            let done = true;
            for (let [i, end] = store.$getRange(); i <= end; i++) {
              if (store.$isUnmeasuredItem(i)) {
                done = false;
                break;
              }
            }
            if (done) {
              break;
            }
            const [promise, unsubscribe] = waitForMeasurement();

            try {
              if (!(await promise)) {
                // canceled
                return;
              }
            } finally {
              unsubscribe();
            }
          }

          store.$update(ACTION_MANUAL_SCROLL);
          scroll(getTargetOffset(), smooth);
        });
      } else {
        while (true) {
          const [promise, unsubscribe] = waitForMeasurement();

          try {
            store.$update(ACTION_MANUAL_SCROLL);
            scroll(getTargetOffset());

            if (!(await promise)) {
              // canceled or finished
              return;
            }
          } finally {
            unsubscribe();
          }
        }
      }
    },
    () => {
      cancelScroll && cancelScroll();
    },
  ];
};

/**
 * @internal
 */
export type Scroller = {
  $observe: (viewportElement: HTMLElement) => void;
  $dispose(): void;
  $scrollTo: (offset: number) => void;
  $scrollBy: (offset: number) => void;
  $scrollToIndex: (index: number, opts?: ScrollToIndexOpts) => void;
  $fixScrollJump: () => void;
};

/**
 * @internal
 */
export const createScroller = (
  store: VirtualStore,
  isHorizontal: boolean
): Scroller => {
  let viewportElement: HTMLElement | undefined;
  let scrollObserver: ScrollObserver | undefined;
  let initialized = createPromise<boolean>();
  const scrollOffsetKey = isHorizontal ? "scrollLeft" : "scrollTop";
  const overflowKey = isHorizontal ? "overflowX" : "overflowY";

  const [scheduleScroll, cancelScroll] = createScrollScheduler(
    store,
    () => initialized[0],
    (offset, smooth) => {
      offset = normalizeOffset(offset, isHorizontal);

      if (smooth) {
        viewportElement!.scrollTo({
          [isHorizontal ? "left" : "top"]: offset,
          behavior: "smooth",
        });
      } else {
        viewportElement![scrollOffsetKey] = offset;
      }
    }
  );

  return {
    $observe(viewport) {
      viewportElement = viewport;

      scrollObserver = createScrollObserver(
        store,
        viewport,
        isHorizontal,
        () => normalizeOffset(viewport[scrollOffsetKey], isHorizontal),
        (jump, shift, isMomentumScrolling) => {
          // If we update scroll position while touching on iOS, the position will be reverted.
          // However iOS WebKit fires touch events only once at the beginning of momentum scrolling.
          // That means we have no reliable way to confirm still touched or not if user touches more than once during momentum scrolling...
          // This is a hack for the suspectable situations, inspired by https://github.com/prud/ios-overflow-scroll-to-top
          if (isMomentumScrolling) {
            const style = viewport.style;
            const prev = style[overflowKey];
            style[overflowKey] = "hidden";
            timeout(() => {
              style[overflowKey] = prev;
            });
          }

          // Use absolute position not to exceed scrollable bounds
          // https://github.com/inokawa/virtua/discussions/475
          viewport[scrollOffsetKey] = store.$getScrollOffset() + jump;
          if (shift) {
            // https://github.com/inokawa/virtua/issues/357
            cancelScroll();
          }
        }
      );

      initialized[1](true);
    },
    $dispose() {
      scrollObserver && scrollObserver._dispose();
      initialized[1](false);
      // https://github.com/inokawa/virtua/pull/765
      initialized = createPromise();
    },
    $scrollTo(offset) {
      scheduleScroll(() => offset);
    },
    $scrollBy(offset) {
      offset += store.$getScrollOffset();
      scheduleScroll(() => offset);
    },
    $scrollToIndex(index, { align, smooth, offset = 0 } = {}) {
      index = clamp(index, 0, store.$getItemsLength() - 1);

      if (align === "nearest") {
        const itemOffset = store.$getItemOffset(index);
        const scrollOffset = store.$getScrollOffset();

        if (itemOffset < scrollOffset) {
          align = "start";
        } else if (
          itemOffset + store.$getItemSize(index) >
          scrollOffset + store.$getViewportSize()
        ) {
          align = "end";
        } else {
          // already completely visible
          return;
        }
      }

      scheduleScroll(() => {
        return (
          offset +
          store.$getStartSpacerSize() +
          store.$getItemOffset(index) +
          (align === "end"
            ? store.$getItemSize(index) - store.$getViewportSize()
            : align === "center"
            ? (store.$getItemSize(index) - store.$getViewportSize()) / 2
            : 0)
        );
      }, smooth);
    },
    $fixScrollJump: () => {
      scrollObserver && scrollObserver._fixScrollJump();
    },
  };
};

/**
 * @internal
 */
export type WindowScroller = {
  $observe(containerElement: HTMLElement): void;
  $dispose(): void;
  $scrollToIndex: (index: number, opts?: ScrollToIndexOpts) => void;
  $fixScrollJump: () => void;
};

/**
 * @internal
 */
export const createWindowScroller = (
  store: VirtualStore,
  isHorizontal: boolean
): WindowScroller => {
  let containerElement: HTMLElement | undefined;
  let scrollObserver: ScrollObserver | undefined;
  let initialized = createPromise<boolean>();
  const scrollToKey = isHorizontal ? "left" : "top";

  const [scheduleScroll] = createScrollScheduler(
    store,
    () => initialized[0],
    (offset, smooth) => {
      offset = normalizeOffset(offset, isHorizontal);

      const window = getCurrentWindow(getCurrentDocument(containerElement!));

      if (smooth) {
        window.scroll({
          [scrollToKey]: offset,
          behavior: "smooth",
        });
      } else {
        window.scroll({
          [scrollToKey]: offset,
        });
      }
    }
  );

  const calcOffsetToViewport = (
    node: HTMLElement,
    viewport: HTMLElement,
    window: Window,
    isHorizontal: boolean,
    offset: number = 0
  ): number => {
    // TODO calc offset only when it changes (maybe impossible)
    const offsetKey = isHorizontal ? "offsetLeft" : "offsetTop";
    const offsetSum =
      offset +
      (isHorizontal && isRTLDocument()
        ? window.innerWidth - node[offsetKey] - node.offsetWidth
        : node[offsetKey]);

    const parent = node.offsetParent;
    if (node === viewport || !parent) {
      return offsetSum;
    }

    return calcOffsetToViewport(
      parent as HTMLElement,
      viewport,
      window,
      isHorizontal,
      offsetSum
    );
  };

  return {
    $observe(container) {
      containerElement = container;
      const scrollOffsetKey = isHorizontal ? "scrollX" : "scrollY";

      const document = getCurrentDocument(container);
      const window = getCurrentWindow(document);

      scrollObserver = createScrollObserver(
        store,
        window,
        isHorizontal,
        () => normalizeOffset(window[scrollOffsetKey], isHorizontal),
        (jump, shift) => {
          // TODO support case two window scrollers exist in the same view
          if (shift) {
            // Use absolute position not to exceed scrollable bounds
            window.scroll({
              [scrollToKey]: store.$getScrollOffset() + jump,
            });
          } else {
            // Use window.scrollBy here, which causes less layout shift for some reason.
            window.scrollBy({
              [scrollToKey]: jump,
            });
          }
        },
        () =>
          calcOffsetToViewport(container, document.body, window, isHorizontal)
      );

      initialized[1](true);
    },
    $dispose() {
      scrollObserver && scrollObserver._dispose();
      containerElement = undefined;
      initialized[1](false);
      // https://github.com/inokawa/virtua/pull/765
      initialized = createPromise();
    },
    $fixScrollJump: () => {
      scrollObserver && scrollObserver._fixScrollJump();
    },
    $scrollToIndex(index, { align, smooth, offset = 0 } = {}) {
      if (!containerElement) return;

      index = clamp(index, 0, store.$getItemsLength() - 1);

      if (align === "nearest") {
        const itemOffset = store.$getItemOffset(index);
        const scrollOffset = store.$getScrollOffset();

        if (itemOffset < scrollOffset) {
          align = "start";
        } else if (
          itemOffset + store.$getItemSize(index) >
          scrollOffset + store.$getViewportSize()
        ) {
          align = "end";
        } else {
          return;
        }
      }

      const document = getCurrentDocument(containerElement);
      const window = getCurrentWindow(document);
      const html = document.documentElement;
      const getScrollbarSize = () =>
        store.$getViewportSize() -
        (isHorizontal ? html.clientWidth : html.clientHeight);

      scheduleScroll(() => {
        return (
          offset +
          // Calculate target scroll position including container's offset from document
          calcOffsetToViewport(
            containerElement!,
            document.body,
            window,
            isHorizontal
          ) +
          // store._getStartSpacerSize() +
          store.$getItemOffset(index) +
          (align === "end"
            ? store.$getItemSize(index) -
              (store.$getViewportSize() - getScrollbarSize())
            : align === "center"
            ? (store.$getItemSize(index) -
                (store.$getViewportSize() - getScrollbarSize())) /
              2
            : 0)
        );
      }, smooth);
    },
  };
};

/**
 * @internal
 */
export type GridScroller = {
  $observe: (viewportElement: HTMLElement) => void;
  $dispose(): void;
  $scrollTo: (offsetX: number, offsetY: number) => void;
  $scrollBy: (offsetX: number, offsetY: number) => void;
  $scrollToIndex: (indexX: number, indexY: number) => void;
  $fixScrollJump: () => void;
};

/**
 * @internal
 */
export const createGridScroller = (
  rowStore: VirtualStore,
  colStore: VirtualStore
): GridScroller => {
  const vScroller = createScroller(rowStore, false);
  const hScroller = createScroller(colStore, true);
  return {
    $observe(viewportElement) {
      vScroller.$observe(viewportElement);
      hScroller.$observe(viewportElement);
    },
    $dispose() {
      vScroller.$dispose();
      hScroller.$dispose();
    },
    $scrollTo(offsetX, offsetY) {
      vScroller.$scrollTo(offsetY);
      hScroller.$scrollTo(offsetX);
    },
    $scrollBy(offsetX, offsetY) {
      vScroller.$scrollBy(offsetY);
      hScroller.$scrollBy(offsetX);
    },
    $scrollToIndex(indexX, indexY) {
      vScroller.$scrollToIndex(indexY);
      hScroller.$scrollToIndex(indexX);
    },
    $fixScrollJump() {
      vScroller.$fixScrollJump();
      hScroller.$fixScrollJump();
    },
  };
};
