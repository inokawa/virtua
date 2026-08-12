import { useMemo, type OctaneNode } from "octane";
import type { OctaneElement } from "octane/jsx-runtime";
import { type ItemElement, flattenChildren } from "./utils.js";

/**
 * @internal
 */
export const useChildren = <T>(
  children: OctaneNode | ((data: T, index: number) => OctaneElement),
  data: ArrayLike<T> | undefined,
) => {
  return useMemo((): [(index: number) => ItemElement, number] => {
    if (typeof children === "function") {
      return [(index) => children(data![index]!, index), data!.length];
    }
    const elements = flattenChildren(children);
    return [(index) => elements[index]!, elements.length];
  }, [children, data]);
};
