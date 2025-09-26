import { ReactElement, ReactNode, useMemo } from "react";
import { ItemElement, createCacheArray, flattenChildren } from "./utils.js";

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
  enableRenderCache: boolean | undefined
): UseChildrenHookReturnT => {
  return useMemo(() => {
    if (typeof children === "function") {
      if (!data) {
        throw new Error(
          "No data provided. Data is required when using the renderer."
        );
      }

      const { cache, clearCacheRange } = createCacheArray<ItemElement>(
        data.length
      );

      const renderElement = (i: number) => {
        if (enableRenderCache) {
          return cache[i] ?? (cache[i] = children(data[i]!, i));
        } else {
          return children(data[i]!, i);
        }
      };

      return [renderElement, data.length, clearCacheRange];
    }
    // Memoize element array
    const _elements = flattenChildren(children);
    return [(i) => _elements[i]!, _elements.length, undefined];
  }, [children, data, enableRenderCache]);
};
