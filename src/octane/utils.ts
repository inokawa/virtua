import type { OctaneNode } from "octane";
import type { Octane } from "octane/jsx-runtime";

/**
 * @internal
 */
export const refKey = "current";

/**
 * @internal
 */
export type ItemElement = Exclude<OctaneNode, null | boolean | Array<unknown>>;

const forEach = (children: OctaneNode, elements: ItemElement[]) => {
  if (Array.isArray(children)) {
    for (const child of children) {
      forEach(child, elements);
    }
  } else if (children == null || typeof children === "boolean") {
    // Filter nullish and boolean children, matching the React adapter.
  } else {
    elements.push(children);
  }
};

/**
 * Flatten children without cloning element descriptors.
 *
 * @internal
 */
export const flattenChildren = (children: OctaneNode): ItemElement[] => {
  const elements: ItemElement[] = [];
  forEach(children, elements);
  return elements;
};

type MayHaveKey = { key?: Octane.Key };

/**
 * @internal
 */
export const getKey = (element: ItemElement, index: number): Octane.Key => {
  const key = (element as MayHaveKey).key;
  return key != null ? key : "_" + index;
};
