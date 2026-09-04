import {
  UPDATE_SIZE_EVENT,
  ACTION_MANUAL_SCROLL,
  ACTION_BEFORE_MANUAL_SMOOTH_SCROLL,
  ACTION_ITEM_RESIZE,
  ACTION_VIEWPORT_RESIZE,
  type VirtualStore,
} from "./store.js";
import {
  createResizeObserver,
  createScrollObserver,
  normalizeScrollOffset,
  type ScrollObserver,
} from "./observer.js";
import { type ItemResize } from "./types.js";
import {
  cancelTimeout,
  createPromise,
  max,
  microtask,
  NULL,
  timeout,
} from "./utils.js";
import { getCurrentDocument, getCurrentWindow } from "./environment.js";

type ScheduleScrollFunction = (
  getTargetOffset: () => number,
  smooth?: boolean,
) => Promise<void>;

const createScrollScheduler = (
  store: VirtualStore,
  initialized: () => Promise<boolean>,
  scroll: (offset: number, smooth?: boolean) => void,
): [scroll: ScheduleScrollFunction, cancel: () => void] => {
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
        scroll(getTargetOffset(), smooth);
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
    () => {
      cancelScroll && cancelScroll();
    },
  ];
};

export interface Driver {
  $observe(containerElement: HTMLElement, viewport?: HTMLElement): void;
  $dispose(): void;
  $observeItem(el: HTMLElement, index: number): () => void;
  $scroll(getTargetOffset: () => number, smooth?: boolean): void;
  $effect(): void;
  $getBaseOffset(): number;
}

export type DriverFactory = (
  store: VirtualStore,
  isHorizontal: boolean,
) => Driver;

export const createContainerDriver: DriverFactory = (store, isHorizontal) => {
  let viewportElement: HTMLElement | undefined;
  let scrollObserver: ScrollObserver | undefined;
  let initialized = createPromise<boolean>();
  let isRtl = false;
  const scrollOffsetKey = isHorizontal ? "scrollLeft" : "scrollTop";
  const scrollToKey = isHorizontal ? "left" : "top";
  const overflowKey = isHorizontal ? "overflowX" : "overflowY";

  const [scheduleScroll, cancelScroll] = createScrollScheduler(
    store,
    () => initialized[0],
    (offset, smooth) => {
      viewportElement!.scrollTo({
        [scrollToKey]: normalizeScrollOffset(offset, isRtl),
        behavior: smooth ? "smooth" : "instant",
      });
    },
  );

  const sizeKey = isHorizontal ? "width" : "height";
  const mountedIndexes = new WeakMap<Element, number>();

  const resizeObserver = createResizeObserver((entries) => {
    const resizes: ItemResize[] = [];
    for (const { target, contentRect } of entries) {
      // Skip zero-sized rects that may be observed under `display: none` style
      if (!(target as HTMLElement).offsetParent) continue;

      if (target === viewportElement) {
        store.$update(ACTION_VIEWPORT_RESIZE, contentRect[sizeKey]);
      } else {
        const index = mountedIndexes.get(target);
        if (index != NULL) {
          resizes.push([index, contentRect[sizeKey]]);
        }
      }
    }

    if (resizes.length) {
      store.$update(ACTION_ITEM_RESIZE, resizes);
    }
  });

  return {
    $observe(containerElement, viewport = containerElement.parentElement!) {
      resizeObserver._observe((viewportElement = viewport));

      if (isHorizontal) {
        isRtl = getComputedStyle(viewport).direction === "rtl";
      }

      scrollObserver = createScrollObserver(
        store,
        viewport,
        isHorizontal,
        () => normalizeScrollOffset(viewport[scrollOffsetKey], isRtl),
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
            viewport.scrollTo({
              [scrollToKey]: normalizeScrollOffset(target, isRtl),
              behavior: "instant",
            });
          } else {
            // Use relative position not to overwrite concurrent scrolling
            // https://github.com/inokawa/virtua/issues/898
            viewport.scrollBy({
              [scrollToKey]: normalizeScrollOffset(jump, isRtl),
              behavior: "instant",
            });
          }
          if (shift) {
            // https://github.com/inokawa/virtua/issues/357
            cancelScroll();
          }
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
    $scroll: scheduleScroll,
    $effect() {
      scrollObserver && scrollObserver._fixScrollJump();
    },
    $getBaseOffset: store.$getStartSpacerSize,
  };
};

export const createWindowDriver: DriverFactory = (store, isHorizontal) => {
  let viewportElement: HTMLElement | undefined;
  let scrollObserver: ScrollObserver | undefined;
  let cleanupOnWindowResize: (() => void) | undefined;
  let getBaseOffset: (() => number) | undefined;
  let onViewportResize: (() => void) | undefined;
  let initialized = createPromise<boolean>();
  let isRtl = false;
  const scrollOffsetKey = isHorizontal ? "scrollLeft" : "scrollTop";
  const scrollToKey = isHorizontal ? "left" : "top";

  const [scheduleScroll, cancelScroll] = createScrollScheduler(
    store,
    () => initialized[0],
    (offset, smooth) => {
      viewportElement!.scrollTo({
        [scrollToKey]: normalizeScrollOffset(offset, isRtl),
        behavior: smooth ? "smooth" : "instant",
      });
    },
  );

  const sizeKey = isHorizontal ? "width" : "height";
  const mountedIndexes = new WeakMap<Element, number>();

  const resizeObserver = createResizeObserver((entries) => {
    const resizes: ItemResize[] = [];
    for (const { target, contentRect } of entries) {
      if (target === viewportElement) {
        // Scrollbar appearance/disappearance changes client size without firing window resize events
        onViewportResize && onViewportResize();
        continue;
      }

      // Skip zero-sized rects that may be observed under `display: none` style
      if (!(target as HTMLElement).offsetParent) continue;

      const index = mountedIndexes.get(target);
      if (index != NULL) {
        resizes.push([index, contentRect[sizeKey]]);
      }
    }

    if (resizes.length) {
      store.$update(ACTION_ITEM_RESIZE, resizes);
    }
  });

  const calcOffsetToViewport = (
    node: HTMLElement,
    viewport: HTMLElement,
    until: HTMLElement,
    isHorizontal: boolean,
    offset: number = 0,
  ): number => {
    // TODO calc offset only when it changes (maybe impossible)
    const offsetKey = isHorizontal ? "offsetLeft" : "offsetTop";
    const offsetSum =
      offset +
      (isRtl
        ? viewport.clientWidth - node[offsetKey] - node.offsetWidth
        : node[offsetKey]);

    const parent = node.offsetParent;
    if (node === until || !parent) {
      return offsetSum;
    }

    return calcOffsetToViewport(
      parent as HTMLElement,
      viewport,
      until,
      isHorizontal,
      offsetSum,
    );
  };

  return {
    $observe(container) {
      const document = getCurrentDocument(container);
      const window = getCurrentWindow(document);
      const viewport = (viewportElement =
        document.scrollingElement! as HTMLElement);

      const baseOffset = (getBaseOffset = () => {
        return calcOffsetToViewport(
          container,
          viewport,
          document.body,
          isHorizontal,
        );
      });

      const onWindowResize = (onViewportResize = () => {
        store.$update(
          ACTION_VIEWPORT_RESIZE,
          viewport[isHorizontal ? "clientWidth" : "clientHeight"],
        );
      });
      window.addEventListener("resize", onWindowResize);

      // https://github.com/inokawa/virtua/issues/792
      resizeObserver._observe(viewport);

      cleanupOnWindowResize = () => {
        window.removeEventListener("resize", onWindowResize);
      };

      if (isHorizontal) {
        // Detect RTL document
        isRtl = getComputedStyle(viewport).direction === "rtl";
      }

      scrollObserver = createScrollObserver(
        store,
        window,
        isHorizontal,
        () => normalizeScrollOffset(viewport[scrollOffsetKey], isRtl),
        (jump, shift) => {
          // TODO support case two window scrollers exist in the same view
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
            viewport.scrollTo({
              [scrollToKey]: normalizeScrollOffset(target, isRtl),
              behavior: "instant",
            });
          } else {
            // Use relative position not to overwrite concurrent scrolling
            // https://github.com/inokawa/virtua/issues/898
            viewport.scrollBy({
              [scrollToKey]: normalizeScrollOffset(jump, isRtl),
              behavior: "instant",
            });
          }
          if (shift) {
            // https://github.com/inokawa/virtua/issues/357
            cancelScroll();
          }
        },
        baseOffset,
      );

      initialized[1](true);
    },
    $dispose() {
      cleanupOnWindowResize && cleanupOnWindowResize();
      resizeObserver._dispose();
      scrollObserver && scrollObserver._dispose();
      viewportElement = undefined;
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
    $scroll: scheduleScroll,
    $effect() {
      scrollObserver && scrollObserver._fixScrollJump();
    },
    $getBaseOffset() {
      // Calculate target scroll position including container's offset from document
      return getBaseOffset!();
    },
  };
};

export type GridDriver = {
  $observe(containerElement: HTMLElement, viewport?: HTMLElement): void;
  $dispose(): void;
  $observeItem(el: HTMLElement, rowIndex: number, colIndex: number): () => void;
  $resizeRows(rows: ItemResize[]): void;
  $resizeCols(cols: ItemResize[]): void;
  $scrollX(getTargetOffset: () => number, smooth?: boolean): void;
  $scrollY(getTargetOffset: () => number, smooth?: boolean): void;
  $effect(): void;
};

export type GridDriverFactory = (
  rowStore: VirtualStore,
  colStore: VirtualStore,
) => GridDriver;

export const createContainerGridDriver: GridDriverFactory = (
  rowStore,
  colStore,
): GridDriver => {
  let viewportElement: HTMLElement | undefined;
  let rowScrollObserver: ScrollObserver | undefined;
  let colScrollObserver: ScrollObserver | undefined;
  let initialized = createPromise<boolean>();
  let isRtl = false;

  const [scheduleScrollX, cancelScrollX] = createScrollScheduler(
    colStore,
    () => initialized[0],
    (offset, smooth) => {
      viewportElement!.scrollTo({
        left: normalizeScrollOffset(offset, isRtl),
        behavior: smooth ? "smooth" : "instant",
      });
    },
  );
  const [scheduleScrollY, cancelScrollY] = createScrollScheduler(
    rowStore,
    () => initialized[0],
    (offset, smooth) => {
      viewportElement!.scrollTo({
        top: offset,
        behavior: smooth ? "smooth" : "instant",
      });
    },
  );

  const mountedIndexes = new WeakMap<
    Element,
    [rowIndex: number, colIndex: number]
  >();

  type CellSize = [height: number, width: number];
  const maybeCachedRowIndexes = new Set<number>();
  const maybeCachedColIndexes = new Set<number>();
  const sizeCache = new Map<string, CellSize>();
  const getKey = (rowIndex: number, colIndex: number): string =>
    `${rowIndex}-${colIndex}`;

  const resizeObserver = createResizeObserver((entries) => {
    const resizedRows = new Set<number>();
    const resizedCols = new Set<number>();
    for (const {
      target,
      contentRect: { width, height },
    } of entries) {
      // Skip zero-sized rects that may be observed under `display: none` style
      if (!(target as HTMLElement).offsetParent) continue;

      if (target === viewportElement) {
        rowStore.$update(ACTION_VIEWPORT_RESIZE, height);
        colStore.$update(ACTION_VIEWPORT_RESIZE, width);
      } else {
        const cell = mountedIndexes.get(target);
        if (cell) {
          const [rowIndex, colIndex] = cell;
          const key = getKey(rowIndex, colIndex);
          const prevSize = sizeCache.get(key);
          let rowResized: boolean | undefined;
          let colResized: boolean | undefined;
          if (!prevSize) {
            rowResized = colResized = true;
          } else {
            if (prevSize[0] !== height) {
              rowResized = true;
            }
            if (prevSize[1] !== width) {
              colResized = true;
            }
          }
          if (rowResized) {
            resizedRows.add(rowIndex);
          }
          if (colResized) {
            resizedCols.add(colIndex);
          }
          if (rowResized || colResized) {
            sizeCache.set(key, [height, width]);
          }
        }
      }
    }

    if (resizedRows.size) {
      const heightResizes: ItemResize[] = [];
      resizedRows.forEach((rowIndex) => {
        let maxHeight = 0;
        maybeCachedColIndexes.forEach((colIndex) => {
          const size = sizeCache.get(getKey(rowIndex, colIndex));
          if (size) {
            maxHeight = max(maxHeight, size[0]);
          }
        });
        if (maxHeight) {
          heightResizes.push([rowIndex, maxHeight]);
        }
      });
      rowStore.$update(ACTION_ITEM_RESIZE, heightResizes);
    }
    if (resizedCols.size) {
      const widthResizes: ItemResize[] = [];
      resizedCols.forEach((colIndex) => {
        let maxWidth = 0;
        maybeCachedRowIndexes.forEach((rowIndex) => {
          const size = sizeCache.get(getKey(rowIndex, colIndex));
          if (size) {
            maxWidth = max(maxWidth, size[1]);
          }
        });
        if (maxWidth) {
          widthResizes.push([colIndex, maxWidth]);
        }
      });
      colStore.$update(ACTION_ITEM_RESIZE, widthResizes);
    }
  });

  const observeAxisScroll = (
    store: VirtualStore,
    isHorizontal: boolean,
    cancelScroll: () => void,
  ) => {
    const viewport = viewportElement!;
    const scrollOffsetKey = isHorizontal ? "scrollLeft" : "scrollTop";
    const overflowKey = isHorizontal ? "overflowX" : "overflowY";
    const rtl = isHorizontal && isRtl;

    return createScrollObserver(
      store,
      viewport,
      isHorizontal,
      () => normalizeScrollOffset(viewport[scrollOffsetKey], rtl),
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
          viewport.scrollTo({
            [isHorizontal ? "left" : "top"]: normalizeScrollOffset(target, rtl),
            behavior: "instant",
          });
        } else {
          // Use relative position not to overwrite concurrent scrolling
          // https://github.com/inokawa/virtua/issues/898
          viewport.scrollBy({
            [isHorizontal ? "left" : "top"]: normalizeScrollOffset(jump, rtl),
            behavior: "instant",
          });
        }
        if (shift) {
          // https://github.com/inokawa/virtua/issues/357
          cancelScroll();
        }
      },
    );
  };

  return {
    $observe(containerElement, viewport = containerElement.parentElement!) {
      resizeObserver._observe((viewportElement = viewport));

      // Detect RTL document
      isRtl = getComputedStyle(viewport).direction === "rtl";

      rowScrollObserver = observeAxisScroll(rowStore, false, cancelScrollY);
      colScrollObserver = observeAxisScroll(colStore, true, cancelScrollX);

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
      mountedIndexes.set(el, [rowIndex, colIndex]);
      maybeCachedRowIndexes.add(rowIndex);
      maybeCachedColIndexes.add(colIndex);
      resizeObserver._observe(el);
      return () => {
        mountedIndexes.delete(el);
        resizeObserver._unobserve(el);
      };
    },
    $resizeRows(rows) {
      for (const [r] of rows) {
        for (let c = 0; c < colStore.$getItemsLength(); c++) {
          sizeCache.delete(getKey(r, c));
        }
      }
      rowStore.$update(ACTION_ITEM_RESIZE, rows);
    },
    $resizeCols(cols) {
      for (const [c] of cols) {
        for (let r = 0; r < rowStore.$getItemsLength(); r++) {
          sizeCache.delete(getKey(r, c));
        }
      }
      colStore.$update(ACTION_ITEM_RESIZE, cols);
    },
    $scrollX: scheduleScrollX,
    $scrollY: scheduleScrollY,
    $effect() {
      rowScrollObserver && rowScrollObserver._fixScrollJump();
      colScrollObserver && colScrollObserver._fixScrollJump();
    },
  };
};
