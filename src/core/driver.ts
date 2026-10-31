import { isIOSWebKit } from "./environment.js";
import {
  ACTION_SCROLL,
  type VirtualStore,
  ACTION_SCROLL_END,
  ACTION_START_OFFSET_CHANGE,
  ACTION_MANUAL_SCROLL,
  ACTION_BEFORE_MANUAL_SMOOTH_SCROLL,
  ACTION_ITEM_RESIZE,
  ACTION_VIEWPORT_RESIZE,
  UPDATE_SIZE_EVENT,
} from "./store.js";
import { type ItemResize } from "./types.js";
import type { Layout } from "./layouts/types.js";
import { type GridLayout } from "./layouts/grid.js";
import { getSectionIndex, getSectionStarts } from "./grid.js";
import {
  cancelTimeout,
  clamp,
  createPromise,
  EMPTY,
  max,
  microtask,
  min,
  NULL,
  timeout,
} from "./utils.js";

/**
 * Alignment of item in the viewport.
 *
 * - `start`: Align the item to the start.
 * - `center`: Align the item to the center.
 * - `end`: Align the item to the end.
 * - `nearest`: If the item is already completely visible, don't scroll. Otherwise scroll until it becomes visible. That is similar behavior to [`nearest` option of scrollIntoView](https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView).
 */
export type ScrollToIndexAlign = "start" | "center" | "end" | "nearest";

export interface ScrollToIndexOpts {
  /**
   * Alignment of item in the viewport. See {@link ScrollToIndexAlign} for the values.
   * @defaultValue "start"
   */
  align?: ScrollToIndexAlign;
  /**
   * If true, scrolling animates smoothly with [`behavior: smooth` of scrollTo](https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollTo#behavior).
   *
   * **Using smooth scrolling over many items can kill performance benefit of virtual scroll. Do not overuse it.**
   */
  smooth?: boolean;
  /**
   * Additional offset from the scrolled position.
   * @defaultValue 0
   */
  offset?: number;
}

/**
 * The cell to scroll to and the options of the scroll. The axis whose index is omitted is not scrolled.
 */
export interface GridScrollToIndexOpts {
  /**
   * The row index of the cell.
   */
  rowIndex?: number;
  /**
   * The column index of the cell.
   */
  colIndex?: number;
  /**
   * Alignment of the cell in the viewport, excluding the rows sticking over it. See {@link ScrollToIndexAlign} for the values.
   * @defaultValue "start"
   */
  rowAlign?: ScrollToIndexAlign;
  /**
   * Alignment of the cell in the viewport, excluding the columns sticking over it. See {@link ScrollToIndexAlign} for the values.
   * @defaultValue "start"
   */
  colAlign?: ScrollToIndexAlign;
  /**
   * Additional vertical offset from the scrolled position, or the scrollTop to scroll to if {@link GridScrollToIndexOpts.rowIndex} is omitted.
   */
  rowOffset?: number;
  /**
   * Additional horizontal offset from the scrolled position, or the scrollLeft to scroll to if {@link GridScrollToIndexOpts.colIndex} is omitted.
   */
  colOffset?: number;
}

const getGridAxisTargetOffset = (
  store: VirtualStore,
  layout: GridLayout,
  sections: readonly number[],
  index: number | undefined,
  align: ScrollToIndexAlign | undefined,
  offset: number | undefined,
): (() => number) | null => {
  if (index == NULL) {
    return offset == NULL ? NULL : () => offset!;
  }
  const count = layout.$getLength();
  const pinnedStart = layout.$getPinnedStart();
  const trailStart = layout.$getTrailStart();
  index = clamp(index, 0, count - 1);
  const starts = getSectionStarts(sections, pinnedStart, trailStart);
  const section = getSectionIndex(starts, index, trailStart);
  const sectionHeader = section < 0 ? -1 : starts[section]!;
  // Read when scrolling, as the pinned items may be measured after the call.
  // The header of the section of the item sticks under the pinned items, so the item is below it unless it's the header itself.
  const getInsetStart = (): number =>
    layout.$getItemOffset(pinnedStart) +
    (sectionHeader < 0 || sectionHeader === index
      ? 0
      : layout.$getItemOffset(sectionHeader + 1) -
        layout.$getItemOffset(sectionHeader));
  const getVisibleSize = (insetStart: number): number =>
    store.$getViewportSize() -
    insetStart -
    (layout.$getItemOffset(count) - layout.$getItemOffset(trailStart));

  if (align === "nearest") {
    if (index < pinnedStart || index >= trailStart) {
      // A pinned item is always visible
      return NULL;
    }
    const insetStart = getInsetStart();
    const scrollOffset = store.$getScrollOffset() + insetStart;
    const viewportSize = getVisibleSize(insetStart);
    const itemSize = layout.$getItemSize(index);
    let itemOffset = store.$getItemOffset(index);
    if (sectionHeader === index) {
      // A section header is where it sticks, until the end of its section pushes it out
      const lastIndex =
        (section + 1 < starts.length ? starts[section + 1]! : trailStart) - 1;
      itemOffset = max(
        itemOffset,
        min(
          scrollOffset,
          store.$getItemOffset(lastIndex) +
            layout.$getItemSize(lastIndex) -
            itemSize,
        ),
      );
    }
    if (itemOffset < scrollOffset) {
      align = "start";
    } else if (itemOffset + itemSize > scrollOffset + viewportSize) {
      align = "end";
    } else {
      return NULL;
    }
  }

  return () => {
    const insetStart = getInsetStart();
    const rest = layout.$getItemSize(index) - getVisibleSize(insetStart);
    return (
      (offset || 0) +
      store.$getItemOffset(index) -
      insetStart +
      (align === "end" ? rest : align === "center" ? rest / 2 : 0)
    );
  };
};

const createResizeObserver = (
  cb: (entries: readonly ResizeObserverEntry[]) => void,
) => {
  let ro: ResizeObserver | undefined;
  let win: Window & typeof globalThis;
  let delivering: readonly ResizeObserverEntry[] | null = NULL;

  return {
    _observe(e: HTMLElement) {
      if (!ro) {
        // Initialize ResizeObserver lazily for SSR
        // https://www.w3.org/TR/resize-observer/#intro
        // https://bugs.chromium.org/p/chromium/issues/detail?id=1491739
        win = e.ownerDocument!.defaultView!;
        ro = new win.ResizeObserver((entries) => {
          delivering = entries;
          cb(entries);
          delivering = NULL;
        });
      }
      if (delivering && !delivering.some((en) => en.target.contains(e))) {
        // https://www.w3.org/TR/resize-observer/#deliver-resize-error
        // https://www.w3.org/TR/resize-observer/#html-event-loop
        win.requestAnimationFrame(() => {
          e.isConnected && ro!.observe(e);
        });
      } else {
        ro.observe(e);
      }
    },
    _unobserve(e: HTMLElement) {
      ro!.unobserve(e);
    },
    _dispose() {
      ro && ro.disconnect();
    },
  };
};

const createScrollObserver = (
  store: VirtualStore,
  layout: Layout,
  viewport: HTMLElement | Window,
  scroller: HTMLElement,
  isHorizontal: boolean,
  isRtl: boolean,
  onMomentumJump?: (() => void) | null,
  getStartOffset?: () => number,
) => {
  let wheeling = false;
  let touching = false;
  let justTouchEnded = false;
  let stillMomentumScrolling = false;
  let cancelScroll: (() => void) | undefined;

  let scrollEndTimer: ReturnType<typeof timeout> | undefined;

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
      [scrollToKey]: offset,
      behavior: smooth ? "smooth" : "instant",
    });
  };

  // Debounce scroll end detection
  const onScrollEnd = () => {
    if (wheeling || touching) {
      wheeling = false;

      // Wait while wheeling or touching
      scheduleScrollEnd();
    } else {
      justTouchEnded = false;

      store.$update(ACTION_SCROLL_END);
    }
  };
  const scheduleScrollEnd = () => {
    cancelTimeout(scrollEndTimer);
    scrollEndTimer = timeout(onScrollEnd, 150);
  };

  const onScroll = () => {
    wheeling = false;

    if (justTouchEnded) {
      stillMomentumScrolling = true;
    }

    store.$update(
      ACTION_SCROLL,
      getScrollOffset(),
      getStartOffset && getStartOffset(),
    );

    scheduleScrollEnd();
  };

  // Infer scroll state also from wheel events
  // Sometimes scroll events do not fire when frame dropped even if the visual have been already scrolled
  const onWheel = ((e: WheelEvent) => {
    if (
      // Scroll start should be detected with scroll event
      store.$isScrolling() &&
      // Probably a pinch-to-zoom gesture
      !e.ctrlKey &&
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
  viewport.addEventListener("touchcancel", onTouchEnd, { passive: true });

  return {
    _sync: () => {
      // The offset may have changed while no scroll event could be observed: before observing, or while the viewport had no box
      // https://github.com/inokawa/virtua/issues/841
      // https://github.com/inokawa/virtua/issues/940
      // https://github.com/inokawa/virtua/issues/1007
      // https://github.com/inokawa/virtua/issues/1037
      if (getScrollOffset() !== store.$getScrollOffset()) {
        onScroll();
      } else if (getStartOffset) {
        // The start offset may have changed alone
        store.$update(ACTION_START_OFFSET_CHANGE, getStartOffset());
      }
    },
    _dispose: () => {
      viewport.removeEventListener("scroll", onScroll);
      viewport.removeEventListener("wheel", onWheel);
      viewport.removeEventListener("touchstart", onTouchStart);
      viewport.removeEventListener("touchend", onTouchEnd);
      viewport.removeEventListener("touchcancel", onTouchEnd);
      cancelTimeout(scrollEndTimer);
    },
    _fixScrollJump: () => {
      const [jump, shift] = store._flushJump();
      if (jump) {
        if (stillMomentumScrolling && onMomentumJump) {
          onMomentumJump();
        }
        stillMomentumScrolling = false;

        const from = store.$getScrollOffset();
        const to = from + jump;
        const end =
          store.$getStartSpacerSize() +
          store.$getTotalSize() -
          store.$getViewportSize();
        if (to <= 0 || to >= end || from >= end) {
          // Use absolute position at the edges not to exceed scrollable bounds
          // https://github.com/inokawa/virtua/discussions/475
          // https://github.com/inokawa/virtua/issues/983
          scrollTo(normalizeScrollOffset(to));
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
      }
      return shift;
    },
    _scroll: (
      getTargetOffset: () => number,
      smooth?: boolean,
      write = scrollTo,
    ) => {
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
            if (layout.$isSizeEqual(i)) {
              return;
            }
          }
          stop();
        }

        store.$update(ACTION_MANUAL_SCROLL);
        write(normalizeScrollOffset(getTargetOffset()), smooth);
      };

      if (smooth) {
        store.$update(ACTION_BEFORE_MANUAL_SMOOTH_SCROLL, getTargetOffset());
      }
      if (!stopped) {
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
      }
    },
  };
};

type ScrollObserver = ReturnType<typeof createScrollObserver>;

interface DriverBase {
  $observe(containerElement: HTMLElement, viewport?: HTMLElement): void;
  $dispose(): void;
  $effect(): void;
}

/**
 * @internal
 */
export interface Driver extends DriverBase {
  $observeItem(el: HTMLElement, index: number): () => void;
  $scroll(index: number | undefined, opts?: ScrollToIndexOpts): void;
}

/**
 * @internal
 */
export const createContainerDriver = (
  store: VirtualStore,
  layout: Layout,
  isHorizontal: boolean,
): Driver => {
  let viewportElement: HTMLElement | undefined;
  let scrollObserver: ScrollObserver | undefined;
  let initialized = createPromise<boolean>();
  let length = 0;

  const mountedIndexes = new Map<HTMLElement, number>();
  const reportedIndexes = new WeakMap<Element, number | undefined>();

  const resizeObserver = createResizeObserver((entries) => {
    const resizes: ItemResize[] = [];
    const reindexed: ItemResize[] = [];
    for (const {
      target,
      contentRect: { width, height },
    } of entries) {
      if (target === viewportElement) {
        // https://github.com/inokawa/virtua/issues/964
        if (width || height) {
          scrollObserver!._sync();
          store.$update(ACTION_VIEWPORT_RESIZE, isHorizontal ? width : height);
        }
        // Skip zero-sized rects that may be observed under `display: none` style
      } else if ((target as HTMLElement).offsetParent) {
        const index = mountedIndexes.get(target as HTMLElement);
        // https://github.com/inokawa/virtua/issues/417
        // https://github.com/inokawa/virtua/issues/885
        const prevIndex = reportedIndexes.get(target);
        reportedIndexes.set(target, index);
        const size = isHorizontal ? width : height;
        if (index != NULL && !layout.$isSizeEqual(index, size)) {
          (prevIndex != NULL && prevIndex !== index ? reindexed : resizes).push(
            [index, size],
          );
        }
      }
    }

    store.$update(ACTION_ITEM_RESIZE, reindexed, true);
    store.$update(ACTION_ITEM_RESIZE, resizes);
  });

  return {
    $observe(containerElement, viewport = containerElement.parentElement!) {
      resizeObserver._observe((viewportElement = viewport));

      scrollObserver = createScrollObserver(
        store,
        layout,
        viewport,
        viewport,
        isHorizontal,
        isHorizontal && getComputedStyle(viewport).direction === "rtl",
        () => {
          const overflowKey = isHorizontal ? "overflowX" : "overflowY";
          // If we update scroll position while touching on iOS, the position will be reverted.
          // However iOS WebKit fires touch events only once at the beginning of momentum scrolling.
          // That means we have no reliable way to confirm still touched or not if user touches more than once during momentum scrolling...
          // This is a hack for the suspectable situations, inspired by https://github.com/prud/ios-overflow-scroll-to-top
          const style = viewport.style;
          const prev = style[overflowKey];
          style[overflowKey] = "hidden";
          timeout(() => {
            style[overflowKey] = prev;
          });
        },
      );

      initialized[1](true);
    },
    $dispose() {
      resizeObserver._dispose();
      scrollObserver && scrollObserver._dispose();
      initialized[1](false);
      // https://github.com/inokawa/virtua/pull/765
      initialized = createPromise();
    },
    $observeItem(el, index) {
      mountedIndexes.set(el, index);
      resizeObserver._observe(el);
      return () => {
        mountedIndexes.delete(el);
        resizeObserver._unobserve(el);
      };
    },
    async $scroll(index, { align, smooth, offset = 0 } = {}) {
      if (index != NULL) {
        index = clamp(index, 0, layout.$getLength() - 1);
        if (align === "nearest") {
          const itemOffset = store.$getItemOffset(index);
          const scrollOffset = store.$getScrollOffset();
          if (itemOffset < scrollOffset) {
            align = "start";
          } else if (
            itemOffset + layout.$getItemSize(index) >
            scrollOffset + store.$getViewportSize()
          ) {
            align = "end";
          } else {
            // already completely visible
            return;
          }
        }
      }
      // Wait for element assign. The element may be undefined if scrollRef prop is used and scroll is scheduled on mount.
      // https://github.com/inokawa/virtua/pull/733
      // https://github.com/inokawa/virtua/pull/750
      if (await initialized[0]) {
        scrollObserver!._scroll(
          () =>
            index == NULL
              ? offset
              : offset +
                store.$getStartSpacerSize() +
                store.$getItemOffset(index) +
                (align === "end"
                  ? layout.$getItemSize(index) - store.$getViewportSize()
                  : align === "center"
                    ? (layout.$getItemSize(index) - store.$getViewportSize()) /
                      2
                    : 0),
          smooth,
        );
      }
    },
    $effect() {
      const isShifting = scrollObserver && scrollObserver._fixScrollJump();
      if (length !== (length = layout.$getLength()) && isShifting) {
        // https://github.com/inokawa/virtua/issues/284
        mountedIndexes.forEach((_, el) => {
          resizeObserver._unobserve(el);
          resizeObserver._observe(el);
        });
      }
    },
  };
};

/**
 * @internal
 */
export const createWindowDriver = (
  store: VirtualStore,
  layout: Layout,
  isHorizontal: boolean,
): Driver => {
  let viewportElement: HTMLElement | undefined;
  let scrollObserver: ScrollObserver | undefined;
  let currentWindow: Window | undefined;
  let getBaseOffset: (() => number) | undefined;
  let onViewportResize: (() => void) | undefined;
  let initialized = createPromise<boolean>();
  let length = 0;

  const mountedIndexes = new Map<HTMLElement, number>();
  const reportedIndexes = new WeakMap<Element, number | undefined>();

  const resizeObserver = createResizeObserver((entries) => {
    const resizes: ItemResize[] = [];
    const reindexed: ItemResize[] = [];
    for (const {
      target,
      contentRect: { width, height },
    } of entries) {
      if (target === viewportElement) {
        scrollObserver!._sync();
        // Scrollbar appearance/disappearance changes client size without firing window resize events
        onViewportResize!();
        // Skip zero-sized rects that may be observed under `display: none` style
      } else if ((target as HTMLElement).offsetParent) {
        const index = mountedIndexes.get(target as HTMLElement);
        // https://github.com/inokawa/virtua/issues/417
        // https://github.com/inokawa/virtua/issues/885
        const prevIndex = reportedIndexes.get(target);
        reportedIndexes.set(target, index);
        const size = isHorizontal ? width : height;
        if (index != NULL && !layout.$isSizeEqual(index, size)) {
          (prevIndex != NULL && prevIndex !== index ? reindexed : resizes).push(
            [index, size],
          );
        }
      }
    }

    store.$update(ACTION_ITEM_RESIZE, reindexed, true);
    store.$update(ACTION_ITEM_RESIZE, resizes);
  });

  return {
    $observe(container) {
      const document = container.ownerDocument!;
      const window = (currentWindow = document.defaultView!);
      const viewport = (viewportElement =
        document.scrollingElement! as HTMLElement);
      // Detect RTL document
      const isRtl =
        isHorizontal && getComputedStyle(viewport).direction === "rtl";

      const offsetKey = isHorizontal ? "offsetLeft" : "offsetTop";
      const body = document.body;
      const baseOffset = (getBaseOffset = () => {
        // TODO calc offset only when it changes (maybe impossible)
        let offset = 0;
        let node: HTMLElement | null = container;
        while (node) {
          offset += node[offsetKey];
          node =
            node === body ? NULL : (node.offsetParent as HTMLElement | null);
        }
        return isRtl
          ? viewport.clientWidth - offset - container.offsetWidth
          : offset;
      });

      window.addEventListener(
        "resize",
        (onViewportResize = () => {
          store.$update(
            ACTION_VIEWPORT_RESIZE,
            viewport[isHorizontal ? "clientWidth" : "clientHeight"],
          );
        }),
      );

      // https://github.com/inokawa/virtua/issues/792
      resizeObserver._observe(viewport);

      // TODO support case two window scrollers exist in the same view
      scrollObserver = createScrollObserver(
        store,
        layout,
        window,
        viewport,
        isHorizontal,
        isRtl,
        NULL,
        baseOffset,
      );

      initialized[1](true);
    },
    $dispose() {
      onViewportResize &&
        currentWindow!.removeEventListener("resize", onViewportResize);
      resizeObserver._dispose();
      scrollObserver && scrollObserver._dispose();
      initialized[1](false);
      // https://github.com/inokawa/virtua/pull/765
      initialized = createPromise();
    },
    $observeItem(el, index) {
      mountedIndexes.set(el, index);
      resizeObserver._observe(el);
      return () => {
        mountedIndexes.delete(el);
        resizeObserver._unobserve(el);
      };
    },
    async $scroll(index, { align, smooth, offset = 0 } = {}) {
      if (index != NULL) {
        index = clamp(index, 0, layout.$getLength() - 1);
        if (align === "nearest") {
          const itemOffset = store.$getItemOffset(index);
          const scrollOffset = store.$getScrollOffset();
          if (itemOffset < scrollOffset) {
            align = "start";
          } else if (
            itemOffset + layout.$getItemSize(index) >
            scrollOffset + store.$getViewportSize()
          ) {
            align = "end";
          } else {
            // already completely visible
            return;
          }
        }
      }
      // Wait for element assign. The element may be undefined if scroll is scheduled on mount.
      // https://github.com/inokawa/virtua/pull/733
      // https://github.com/inokawa/virtua/pull/750
      if (await initialized[0]) {
        scrollObserver!._scroll(
          () =>
            index == NULL
              ? offset
              : offset +
                // Calculate target scroll position including container's offset from document
                getBaseOffset!() +
                store.$getItemOffset(index) +
                (align === "end"
                  ? layout.$getItemSize(index) - store.$getViewportSize()
                  : align === "center"
                    ? (layout.$getItemSize(index) - store.$getViewportSize()) /
                      2
                    : 0),
          smooth,
        );
      }
    },
    $effect() {
      const isShifting = scrollObserver && scrollObserver._fixScrollJump();
      if (length !== (length = layout.$getLength()) && isShifting) {
        // https://github.com/inokawa/virtua/issues/284
        mountedIndexes.forEach((_, el) => {
          resizeObserver._unobserve(el);
          resizeObserver._observe(el);
        });
      }
    },
  };
};

/**
 * @internal
 */
export interface GridDriver extends DriverBase {
  $scroll(opts: GridScrollToIndexOpts, sectionRows?: readonly number[]): void;
  $observeItem(
    el: HTMLElement,
    rowIndex: number | undefined,
    colIndex: number | undefined,
  ): () => void;
}

/**
 * @internal
 */
export const createContainerGridDriver = (
  rowStore: VirtualStore,
  colStore: VirtualStore,
  rowLayout: GridLayout,
  colLayout: GridLayout,
): GridDriver => {
  let viewportElement: HTMLElement | undefined;
  let rowScrollObserver: ScrollObserver | undefined;
  let colScrollObserver: ScrollObserver | undefined;
  let initialized = createPromise<boolean>();

  const mountedRowIndexes = new WeakMap<Element, number>();
  const mountedColIndexes = new WeakMap<Element, number>();

  const resizeObserver = createResizeObserver((entries) => {
    const rowResizes: ItemResize[] = [];
    const colResizes: ItemResize[] = [];
    for (const {
      target,
      contentRect: { width, height },
    } of entries) {
      if (target === viewportElement) {
        // https://github.com/inokawa/virtua/issues/964
        if (width || height) {
          rowScrollObserver!._sync();
          colScrollObserver!._sync();
          rowStore.$update(ACTION_VIEWPORT_RESIZE, height);
          colStore.$update(ACTION_VIEWPORT_RESIZE, width);
        }
        // Skip zero-sized rects that may be observed under `display: none` style
      } else if ((target as HTMLElement).offsetParent) {
        const rowIndex = mountedRowIndexes.get(target);
        const colIndex = mountedColIndexes.get(target);
        if (rowIndex != NULL && !rowLayout.$isSizeEqual(rowIndex, height)) {
          rowResizes.push([rowIndex, height]);
        }
        if (colIndex != NULL && !colLayout.$isSizeEqual(colIndex, width)) {
          colResizes.push([colIndex, width]);
        }
      }
    }

    rowStore.$update(ACTION_ITEM_RESIZE, rowResizes);
    colStore.$update(ACTION_ITEM_RESIZE, colResizes);
  });

  return {
    async $scroll(
      { rowIndex, colIndex, rowAlign, colAlign, rowOffset, colOffset },
      sectionRows = EMPTY,
    ) {
      // TODO support smooth scroll, removed because scrolling both axes smoothly freezes their ranges and the page
      const getTargetTop = getGridAxisTargetOffset(
        rowStore,
        rowLayout,
        sectionRows,
        rowIndex,
        rowAlign,
        rowOffset,
      );
      const getTargetLeft = getGridAxisTargetOffset(
        colStore,
        colLayout,
        EMPTY,
        colIndex,
        colAlign,
        colOffset,
      );
      if (!getTargetTop && !getTargetLeft) {
        return;
      }
      // Wait for element assign. The element may be undefined if scroll is scheduled on mount.
      // https://github.com/inokawa/virtua/pull/733
      // https://github.com/inokawa/virtua/pull/750
      if (await initialized[0]) {
        const viewport = viewportElement!;
        // The observers write the targets synchronously in _scroll at first, so both axes are written with one scrollTo
        let options: ScrollToOptions | null = { behavior: "instant" };
        const write = (key: "top" | "left") => (offset: number) => {
          if (options) {
            options[key] = offset;
          } else {
            viewport.scrollTo({ [key]: offset, behavior: "instant" });
          }
        };
        if (getTargetTop) {
          rowScrollObserver!._scroll(getTargetTop, false, write("top"));
        }
        if (getTargetLeft) {
          colScrollObserver!._scroll(getTargetLeft, false, write("left"));
        }
        viewport.scrollTo(options);
        options = NULL;
      }
    },
    $observe(containerElement, viewport = containerElement.parentElement!) {
      resizeObserver._observe((viewportElement = viewport));
      const isRtl = getComputedStyle(viewport).direction === "rtl";

      const observe = (
        store: VirtualStore,
        layout: Layout,
        isHorizontal: boolean,
      ) =>
        createScrollObserver(
          store,
          layout,
          viewport,
          viewport,
          isHorizontal,
          isHorizontal && isRtl,
          () => {
            const overflowKey = isHorizontal ? "overflowX" : "overflowY";
            // If we update scroll position while touching on iOS, the position will be reverted.
            // However iOS WebKit fires touch events only once at the beginning of momentum scrolling.
            // That means we have no reliable way to confirm still touched or not if user touches more than once during momentum scrolling...
            // This is a hack for the suspectable situations, inspired by https://github.com/prud/ios-overflow-scroll-to-top
            const style = viewport.style;
            const prev = style[overflowKey];
            style[overflowKey] = "hidden";
            timeout(() => {
              style[overflowKey] = prev;
            });
          },
        );
      rowScrollObserver = observe(rowStore, rowLayout, false);
      colScrollObserver = observe(colStore, colLayout, true);

      initialized[1](true);
    },
    $dispose() {
      resizeObserver._dispose();
      rowScrollObserver && rowScrollObserver._dispose();
      colScrollObserver && colScrollObserver._dispose();
      initialized[1](false);
      // https://github.com/inokawa/virtua/pull/765
      initialized = createPromise();
    },
    $observeItem(el, rowIndex, colIndex) {
      // An undefined index skips reporting the size of that axis, for cells whose row/column size is given instead of measured.
      if (rowIndex != NULL) {
        mountedRowIndexes.set(el, rowIndex);
      }
      if (colIndex != NULL) {
        mountedColIndexes.set(el, colIndex);
      }
      resizeObserver._observe(el);
      return () => {
        mountedRowIndexes.delete(el);
        mountedColIndexes.delete(el);
        resizeObserver._unobserve(el);
      };
    },
    $effect() {
      rowScrollObserver && rowScrollObserver._fixScrollJump();
      colScrollObserver && colScrollObserver._fixScrollJump();
    },
  };
};
