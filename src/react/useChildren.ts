import { ReactElement, ReactNode, useMemo } from "react";
import { ItemElement, flattenChildren } from "./utils";

/**
 * @internal
 */
export const useChildren = (
  children: ReactNode | ((i: number, placeholder: boolean) => ReactElement),
  count: number | undefined
) => {
  return useMemo((): [(i: number, placeholder: boolean) => ItemElement, number] => {
    if (typeof children === "function") {
      return [children, count || 0];
    }
    // Memoize element array
    const _elements = flattenChildren(children);
    return [(i) => _elements[i]!, _elements.length];
  }, [children, count]);
};
