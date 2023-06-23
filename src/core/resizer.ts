import {
  ACTION_ITEM_RESIZE,
  ACTION_WINDOW_RESIZE,
  ItemResize,
  VirtualStore,
} from "./store";
import { exists, max, once } from "./utils";

export const createResizer = (store: VirtualStore, isHorizontal: boolean) => {
  let rootElement: HTMLElement | undefined;
  const sizeKey = isHorizontal ? "width" : "height";
  const mountedIndexes = new WeakMap<Element, number>();

  // Initialize ResizeObserver lazily for SSR
  const getResizeObserver = once(() => {
    // https://www.w3.org/TR/resize-observer/#intro
    return new ResizeObserver((entries) => {
      const resizes: ItemResize[] = [];
      for (const { target, contentRect } of entries) {
        if (target === rootElement) {
          store._update(ACTION_WINDOW_RESIZE, contentRect[sizeKey]);
        } else {
          const index = mountedIndexes.get(target);
          if (exists(index)) {
            resizes.push([index, contentRect[sizeKey]]);
          }
        }
      }

      if (resizes.length) {
        store._update(ACTION_ITEM_RESIZE, resizes);
      }
    });
  });

  return {
    _observeRoot(root: HTMLElement) {
      rootElement = root;
      const ro = getResizeObserver();
      ro.observe(root);
      return () => {
        ro.disconnect();
      };
    },
    _observeItem(el: HTMLElement, i: number) {
      const ro = getResizeObserver();
      mountedIndexes.set(el, i);
      ro.observe(el);
      return () => {
        mountedIndexes.delete(el);
        ro.unobserve(el);
      };
    },
  };
};

export type Resizer = ReturnType<typeof createResizer>;

export const createGridResizer = (
  vStore: VirtualStore,
  hStore: VirtualStore
) => {
  let rootElement: HTMLElement | undefined;

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

  // Initialize ResizeObserver lazily for SSR
  const getResizeObserver = once(() => {
    // https://www.w3.org/TR/resize-observer/#intro
    return new ResizeObserver((entries) => {
      const resizedRows = new Set<number>();
      const resizedCols = new Set<number>();
      for (const { target, contentRect } of entries) {
        if (target === rootElement) {
          vStore._update(ACTION_WINDOW_RESIZE, contentRect[heightKey]);
          hStore._update(ACTION_WINDOW_RESIZE, contentRect[widthKey]);
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
        vStore._update(ACTION_ITEM_RESIZE, heightResizes);
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
        hStore._update(ACTION_ITEM_RESIZE, widthResizes);
      }
    });
  });

  return {
    _observeRoot(root: HTMLElement) {
      rootElement = root;
      const ro = getResizeObserver();
      ro.observe(root);
      return () => {
        ro.disconnect();
      };
    },
    _observeItem(el: HTMLElement, rowIndex: number, colIndex: number) {
      const ro = getResizeObserver();
      mountedIndexes.set(el, [rowIndex, colIndex]);
      maybeCachedRowIndexes.add(rowIndex);
      maybeCachedColIndexes.add(colIndex);
      ro.observe(el);
      return () => {
        mountedIndexes.delete(el);
        ro.unobserve(el);
      };
    },
  };
};

export type GridResizer = ReturnType<typeof createGridResizer>;
