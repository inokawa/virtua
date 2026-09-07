import { type ReactElement, type ReactNode, useMemo } from "react";
import { type ItemElement, flattenChildren } from "./utils.js";

/**
 * @internal
 */
export const useChildren = <T>(
  children:
    ReactNode | ((data: T, i: number, offscreen?: boolean) => ReactElement),
  data: ArrayLike<T> | undefined,
) => {
  return useMemo((): [
    (i: number, offscreen?: boolean) => ItemElement,
    number,
  ] => {
    if (typeof children === "function") {
      return [
        (i, offscreen) => children(data![i]!, i, offscreen),
        data!.length,
      ];
    }
    // Memoize element array
    const _elements = flattenChildren(children);
    return [(i) => _elements[i]!, _elements.length];
  }, [children, data]);
};
