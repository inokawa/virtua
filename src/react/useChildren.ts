import { type ReactElement, type ReactNode, useMemo } from "react";
import { type ItemElement, flattenChildren } from "./utils.js";

/**
 * @internal
 */
export const useChildren = <T>(
  children: ReactNode | ((data: T, i: number) => ReactElement),
  data: ArrayLike<T> | undefined,
  after: ReactElement | undefined,
) => {
  return useMemo((): [(i: number) => ItemElement, number] => {
    if (typeof children === "function") {
      const length = data!.length;
      if (after) {
        return [
          (i) => (i === length ? after : children(data![i]!, i)),
          length + 1,
        ];
      }
      return [(i) => children(data![i]!, i), length];
    }
    // Memoize element array
    const _elements = flattenChildren(children);
    return [(i) => _elements[i]!, _elements.length];
  }, [children, data, after]);
};
