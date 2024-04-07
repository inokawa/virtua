import { type ReactElement, type ReactNode, useMemo } from "react";
import { type ItemElement, flattenChildren } from "./utils";

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
