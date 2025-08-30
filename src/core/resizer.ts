import { getCurrentDocument, getCurrentWindow } from "./environment";
import {
  ACTION_ITEM_RESIZE,
  ACTION_VIEWPORT_RESIZE,
  type VirtualStore,
} from "./store";
import { type ItemResize } from "./types";
import { max, NULL } from "./utils";

const createResizeObserver = (cb: ResizeObserverCallback) => {
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
export type ItemResizeObserver = (el: HTMLElement, i: number) => () => void;

interface ListResizer {
  $observeRoot(viewportElement: HTMLElement): void;
  $observeItem: ItemResizeObserver;
  $dispose(): void;
}

/**
 * @internal
 */
export const createResizer = (
  store: VirtualStore,
  isHorizontal: boolean
): ListResizer => {
  let viewportElement: HTMLElement | undefined;
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
    $observeRoot(viewport: HTMLElement) {
      resizeObserver._observe((viewportElement = viewport));
    },
    $observeItem: (el: HTMLElement, i: number) => {
      mountedIndexes.set(el, i);
      resizeObserver._observe(el);
      return () => {
        mountedIndexes.delete(el);
        resizeObserver._unobserve(el);
      };
    },
    $dispose: resizeObserver._dispose,
  };
};

interface WindowListResizer {
  $observeRoot(container: HTMLElement): void;
  $observeItem: ItemResizeObserver;
  $dispose(): void;
}

/**
 * @internal
 */
export const createWindowResizer = (
  store: VirtualStore,
  isHorizontal: boolean
): WindowListResizer => {
  const sizeKey = isHorizontal ? "width" : "height";
  const windowSizeKey = isHorizontal ? "innerWidth" : "innerHeight";
  const mountedIndexes = new WeakMap<Element, number>();

  const resizeObserver = createResizeObserver((entries) => {
    const resizes: ItemResize[] = [];
    for (const { target, contentRect } of entries) {
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

  let cleanupOnWindowResize: (() => void) | undefined;

  return {
    $observeRoot(container) {
      const window = getCurrentWindow(getCurrentDocument(container));
      const onWindowResize = () => {
        store.$update(ACTION_VIEWPORT_RESIZE, window[windowSizeKey]);
      };
      window.addEventListener("resize", onWindowResize);
      onWindowResize();

      cleanupOnWindowResize = () => {
        window.removeEventListener("resize", onWindowResize);
      };
    },
    $observeItem: (el: HTMLElement, i: number) => {
      mountedIndexes.set(el, i);
      resizeObserver._observe(el);
      return () => {
        mountedIndexes.delete(el);
        resizeObserver._unobserve(el);
      };
    },
    $dispose() {
      cleanupOnWindowResize && cleanupOnWindowResize();
      resizeObserver._dispose();
    },
  };
};

/**
 * @internal
 */
export const createGridResizer = (
  vStore: VirtualStore,
  hStore: VirtualStore
) => {
  let viewportElement: HTMLElement | undefined;

  const heightKey = "height";
  const widthKey = "width";
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
    for (const { target, contentRect } of entries) {
      // Skip zero-sized rects that may be observed under `display: none` style
      if (!(target as HTMLElement).offsetParent) continue;

      if (target === viewportElement) {
        vStore.$update(ACTION_VIEWPORT_RESIZE, contentRect[heightKey]);
        hStore.$update(ACTION_VIEWPORT_RESIZE, contentRect[widthKey]);
      } else {
        const cell = mountedIndexes.get(target);
        if (cell) {
          const [rowIndex, colIndex] = cell;
          const key = getKey(rowIndex, colIndex);
          const prevSize = sizeCache.get(key);
          const size: CellSize = [
            contentRect[heightKey],
            contentRect[widthKey],
          ];
          let rowResized: boolean | undefined;
          let colResized: boolean | undefined;
          if (!prevSize) {
            rowResized = colResized = true;
          } else {
            if (prevSize[0] !== size[0]) {
              rowResized = true;
            }
            if (prevSize[1] !== size[1]) {
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
            sizeCache.set(key, size);
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
      vStore.$update(ACTION_ITEM_RESIZE, heightResizes);
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
      hStore.$update(ACTION_ITEM_RESIZE, widthResizes);
    }
  });

  return {
    $observeRoot(viewport: HTMLElement) {
      resizeObserver._observe((viewportElement = viewport));
    },
    $observeItem(el: HTMLElement, rowIndex: number, colIndex: number) {
      mountedIndexes.set(el, [rowIndex, colIndex]);
      maybeCachedRowIndexes.add(rowIndex);
      maybeCachedColIndexes.add(colIndex);
      resizeObserver._observe(el);
      return () => {
        mountedIndexes.delete(el);
        resizeObserver._unobserve(el);
      };
    },
    $dispose: resizeObserver._dispose,
  };
};

/**
 * @internal
 */
export type GridResizer = ReturnType<typeof createGridResizer>;
