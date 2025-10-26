import { ReactElement, ReactNode, useMemo } from "react";
import { IndexedCache, ItemElement, flattenChildren } from "./utils.js";

type ElementRendererT = (i: number) => ItemElement;
type ClearCacheRangeHandlerT = (
  startIndex?: number | undefined,
  endIndex?: number | undefined
) => void;
type UseChildrenHookReturnT = [
  ElementRendererT,
  number,
  ClearCacheRangeHandlerT | undefined
];

/**
 * @internal
 */
export const useChildren = <T>(
  children: ReactNode | ((data: T, i: number) => ReactElement),
  data: ArrayLike<T> | undefined,
  enableRenderCache: boolean | undefined,
  maxCacheSize: number | undefined | null
): UseChildrenHookReturnT => {
  return useMemo(() => {
    if (typeof children === "function") {
      if (!data) {
        throw new Error(
          "No data provided. Data is required when using the renderer."
        );
      }

      const cache = enableRenderCache
        ? new IndexedCache<ItemElement>(data.length, maxCacheSize)
        : undefined;

      const renderElement = (i: number) => {
        if (cache) {
          const cacheItem = cache.get(i);
          if (cacheItem) return cacheItem;

          const renderedItem = children(data[i]!, i);
          cache.set(i, renderedItem);
          return renderedItem;
        } else {
          return children(data[i]!, i);
        }
      };

      const clearRange =
        cache &&
        ((startIndex?: number | undefined, endIndex?: number | undefined) => {
          cache.clearRange(startIndex, endIndex);
        });

      return [renderElement, data.length, clearRange];
    }
    // Memoize element array
    const _elements = flattenChildren(children);
    return [(i) => _elements[i]!, _elements.length, undefined];
  }, [children, data, enableRenderCache, maxCacheSize]);
};
