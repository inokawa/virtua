import {
  ACTION_ITEM_RESIZE,
  ACTION_VIEWPORT_RESIZE,
  type VirtualStore,
} from "./store.js";
import {
  createResizeObserver,
  createScrollObserver,
  type ScrollObserver,
} from "./observer.js";
import { type ItemResize } from "./types.js";
import { createPromise, max, NULL, timeout } from "./utils.js";
import { getCurrentDocument, getCurrentWindow } from "./environment.js";

/**
 * @internal
 */
export interface Driver {
  $observe(containerElement: HTMLElement, viewport?: HTMLElement): void;
  $dispose(): void;
  $observeItem(el: HTMLElement, index: number): () => void;
  $scroll(getTargetOffset: () => number, smooth?: boolean): void;
  $effect(): void;
  $getBaseOffset(): number;
}

/**
 * @internal
 */
export type DriverFactory = (
  store: VirtualStore,
  isHorizontal: boolean,
) => Driver;

/**
 * @internal
 */
export const createContainerDriver: DriverFactory = (store, isHorizontal) => {
  let viewportElement: HTMLElement | undefined;
  let scrollObserver: ScrollObserver | undefined;
  let initialized = createPromise<boolean>();

  const sizeKey = isHorizontal ? "width" : "height";
  const mountedIndexes = new WeakMap<Element, number>();

  const resizeObserver = createResizeObserver((entries) => {
    const resizes: ItemResize[] = [];
    for (const { target, contentRect } of entries) {
      // Fixed-position elements can have a null offsetParent while visible.
      if (
        !(target as HTMLElement).offsetParent &&
        !target.getClientRects().length
      )
        continue;

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

      scrollObserver = createScrollObserver(
        store,
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
    async $scroll(getTargetOffset, smooth) {
      // Wait for element assign. The element may be undefined if scrollRef prop is used and scroll is scheduled on mount.
      // https://github.com/inokawa/virtua/pull/733
      // https://github.com/inokawa/virtua/pull/750
      if (await initialized[0]) {
        scrollObserver!._scroll(getTargetOffset, smooth);
      }
    },
    $effect() {
      scrollObserver && scrollObserver._fixScrollJump();
    },
    $getBaseOffset: store.$getStartSpacerSize,
  };
};

/**
 * @internal
 */
export const createWindowDriver: DriverFactory = (store, isHorizontal) => {
  let viewportElement: HTMLElement | undefined;
  let scrollObserver: ScrollObserver | undefined;
  let cleanupOnWindowResize: (() => void) | undefined;
  let getBaseOffset: (() => number) | undefined;
  let onViewportResize: (() => void) | undefined;
  let initialized = createPromise<boolean>();

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

      // Fixed-position elements can have a null offsetParent while visible.
      if (
        !(target as HTMLElement).offsetParent &&
        !target.getClientRects().length
      )
        continue;

      const index = mountedIndexes.get(target);
      if (index != NULL) {
        resizes.push([index, contentRect[sizeKey]]);
      }
    }

    if (resizes.length) {
      store.$update(ACTION_ITEM_RESIZE, resizes);
    }
  });

  return {
    $observe(container) {
      const document = getCurrentDocument(container);
      const window = getCurrentWindow(document);
      const viewport = (viewportElement =
        document.scrollingElement! as HTMLElement);
      // Detect RTL document
      const isRtl =
        isHorizontal && getComputedStyle(viewport).direction === "rtl";

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

      // TODO support case two window scrollers exist in the same view
      scrollObserver = createScrollObserver(
        store,
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
      cleanupOnWindowResize && cleanupOnWindowResize();
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
    async $scroll(getTargetOffset, smooth) {
      // Wait for element assign. The element may be undefined if scroll is scheduled on mount.
      // https://github.com/inokawa/virtua/pull/733
      // https://github.com/inokawa/virtua/pull/750
      if (await initialized[0]) {
        scrollObserver!._scroll(getTargetOffset, smooth);
      }
    },
    $effect() {
      scrollObserver && scrollObserver._fixScrollJump();
    },
    $getBaseOffset() {
      // Calculate target scroll position including container's offset from document
      return getBaseOffset!();
    },
  };
};

/**
 * @internal
 */
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

/**
 * @internal
 */
export type GridDriverFactory = (
  rowStore: VirtualStore,
  colStore: VirtualStore,
) => GridDriver;

/**
 * @internal
 */
export const createContainerGridDriver: GridDriverFactory = (
  rowStore,
  colStore,
): GridDriver => {
  let viewportElement: HTMLElement | undefined;
  let rowScrollObserver: ScrollObserver | undefined;
  let colScrollObserver: ScrollObserver | undefined;
  let initialized = createPromise<boolean>();

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
      // Fixed-position elements can have a null offsetParent while visible.
      if (
        !(target as HTMLElement).offsetParent &&
        !target.getClientRects().length
      )
        continue;

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

  return {
    $observe(containerElement, viewport = containerElement.parentElement!) {
      resizeObserver._observe((viewportElement = viewport));

      // Detect RTL document
      const isRtl = getComputedStyle(viewport).direction === "rtl";

      const hackOverflow = (overflowKey: "overflowX" | "overflowY") => () => {
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
      };

      rowScrollObserver = createScrollObserver(
        rowStore,
        viewport,
        viewport,
        false,
        false,
        hackOverflow("overflowY"),
      );
      colScrollObserver = createScrollObserver(
        colStore,
        viewport,
        viewport,
        true,
        isRtl,
        hackOverflow("overflowX"),
      );

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
    async $scrollX(getTargetOffset, smooth) {
      if (await initialized[0]) {
        colScrollObserver!._scroll(getTargetOffset, smooth);
      }
    },
    async $scrollY(getTargetOffset, smooth) {
      if (await initialized[0]) {
        rowScrollObserver!._scroll(getTargetOffset, smooth);
      }
    },
    $effect() {
      rowScrollObserver && rowScrollObserver._fixScrollJump();
      colScrollObserver && colScrollObserver._fixScrollJump();
    },
  };
};
