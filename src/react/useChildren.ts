import { ReactElement, ReactNode, useMemo } from "react";
import { ItemElement, flattenChildren } from "./utils.js";

/**
 * @internal
 */
export const useChildren = (
  children: ReactNode | ((i: number) => ReactElement),
  count: number | undefined
) => {
  return useMemo((): [(i: number) => ItemElement, number] => {
    if (typeof children === "function") {
      return [children, count || 0];
    }
    // Memoize element array
    const _elements = flattenChildren(children);
    return [(i) => _elements[i]!, _elements.length];
  }, [children, count]);
};
