import { type ReactNode } from "react";

/**
 * @internal
 */
export const refKey = "current";

/**
 * @internal
 */
export type ItemElement = Exclude<ReactNode, null | boolean | Array<any>>;

const forEach = (children: ReactNode, elements: ItemElement[]) => {
  if (Array.isArray(children)) {
    for (const c of children) {
      forEach(c, elements);
    }
  } else if (children == null || typeof children === "boolean") {
    // filter out, that is the same as React.Children.toArray
  } else {
    elements.push(children);
  }
};

/**
 * Replace React.Children.forEach with our tiny implementation.
 * In our usage, just flatten children array keeping element instances and their keys, React.Children is redundant and slow.
 *
 * - React.Children.toArray is slow because it clones element instance.
 * - React.Children.map is slow because it clones element instance.
 * - React.Children.forEach is slow because it escapes and modifies keys even if they are unused.
 *
 * And React.Children seems to be in maintenance mode so it's unlikely it would be improved and ported to older versions.
 * https://github.com/reactjs/rfcs/pull/61#issuecomment-584402735
 *
 * @internal
 */
export const flattenChildren = (children: ReactNode): ItemElement[] => {
  const elements: ItemElement[] = [];
  forEach(children, elements);
  return elements;
};

type MayHaveKey = { key?: React.Key };

/**
 * @internal
 */
export const getKey = (e: ItemElement, i: number): React.Key => {
  const key = (e as MayHaveKey).key;
  return key != null ? key : "_" + i;
};
