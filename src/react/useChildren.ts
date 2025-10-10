import { ReactElement, ReactNode, useMemo } from "react";
import { ItemElement, flattenChildren } from "./utils.js";

/**
 * @internal
 */
export const useChildren = <T>(
  children: ReactNode | ((data: T, i: number) => ReactElement),
  data: ArrayLike<T> | undefined
) => {
  return useMemo((): [(i: number) => ItemElement, number] => {
    if (typeof children === "function") {
      return [(i) => children(data![i]!, i), data!.length];
    }
    // Memoize element array
    const _elements = flattenChildren(children);
    return [(i) => _elements[i]!, _elements.length];
  }, [children, data]);
};
