import {
  ACTION_ITEM_RESIZE,
  ACTION_VIEWPORT_RESIZE,
  ItemResize,
  VirtualStore,
} from "./store";
import { exists, computeStyle, getStyleNumber, max, once } from "./utils";

const rootObserveOpts: ResizeObserverOptions = { box: "border-box" };

/**
 * @internal
 */
export interface ListResizer {
  _observeRoot(root: HTMLElement): () => void;
  _observeItem(el: HTMLElement, i: number): () => void;
}

/**
 * @internal
 */
export const createResizer = (
  store: VirtualStore,
  isHorizontal: boolean
): ListResizer => {
  let rootElement: HTMLElement | undefined;
  const sizeKey = isHorizontal ? "width" : "height";
  const mountedIndexes = new WeakMap<Element, number>();

  // Initialize ResizeObserver lazily for SSR
  const getResizeObserver = once(() => {
    // https://www.w3.org/TR/resize-observer/#intro
    return new ResizeObserver((entries) => {
      const resizes: ItemResize[] = [];
      for (const { target, contentRect } of entries) {
        // Skip zero-sized rects that may be observed under `display: none` style
        if (!(target as HTMLElement).offsetParent) continue;

        if (target === rootElement) {
          store._update(ACTION_VIEWPORT_RESIZE, [
            contentRect[sizeKey],
            contentRect[isHorizontal ? "left" : "top"],
            // contentRect doesn't have paddingRight/paddingBottom so get them from computed style
            // https://www.w3.org/TR/resize-observer/#css-definitions
            getStyleNumber(
              computeStyle(rootElement)[
                isHorizontal ? "paddingRight" : "paddingBottom"
              ]
            ),
          ]);
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
      ro.observe(root, rootObserveOpts);
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

/**
 * @internal
 */
export const createWindowResizer = (
  store: VirtualStore,
  isHorizontal: boolean
): ListResizer => {
  const sizeKey = isHorizontal ? "width" : "height";
  const windowSizeKey = isHorizontal ? "innerWidth" : "innerHeight";
  const mountedIndexes = new WeakMap<Element, number>();

  // Initialize ResizeObserver lazily for SSR
  const getResizeObserver = once(() => {
    // https://www.w3.org/TR/resize-observer/#intro
    return new ResizeObserver((entries) => {
      const resizes: ItemResize[] = [];
      for (const { target, contentRect } of entries) {
        // Skip zero-sized rects that may be observed under `display: none` style
        if (!(target as HTMLElement).offsetParent) continue;

        const index = mountedIndexes.get(target);
        if (exists(index)) {
          resizes.push([index, contentRect[sizeKey]]);
        }
      }

      if (resizes.length) {
        store._update(ACTION_ITEM_RESIZE, resizes);
      }
    });
  });

  return {
    _observeRoot() {
      const cb = () => {
        store._update(ACTION_VIEWPORT_RESIZE, [window[windowSizeKey], 0, 0]);
      };
      window.addEventListener("resize", cb);
      cb();
      return () => {
        window.removeEventListener("resize", cb);
        getResizeObserver().disconnect();
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

/**
 * @internal
 */
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
        // Skip zero-sized rects that may be observed under `display: none` style
        if (!(target as HTMLElement).offsetParent) continue;

        if (target === rootElement) {
          // contentRect doesn't have paddingRight/paddingBottom so get them from computed style
          // https://www.w3.org/TR/resize-observer/#css-definitions
          // TODO subtract scroll bar width/height
          // https://github.com/w3c/csswg-drafts/issues/3536
          const style = computeStyle(rootElement);
          vStore._update(ACTION_VIEWPORT_RESIZE, [
            contentRect[heightKey],
            contentRect.top,
            getStyleNumber(style.paddingBottom),
          ]);
          hStore._update(ACTION_VIEWPORT_RESIZE, [
            contentRect[widthKey],
            contentRect.left,
            getStyleNumber(style.paddingRight),
          ]);
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
      ro.observe(root, rootObserveOpts);
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

/**
 * @internal
 */
export type GridResizer = ReturnType<typeof createGridResizer>;
