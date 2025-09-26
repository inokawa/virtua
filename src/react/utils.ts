import { ReactNode } from "react";

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

export const createCacheArray = <T>(
  length: number
): {
  cache: Array<T>;
  clearCacheRange: (
    startIndex?: number | undefined,
    endIndex?: number | undefined
  ) => void;
} => {
  // Using a sparse array instead of a Map enables faster cleanup of a specific
  // range. A sparse array also uses a hash map internally, it doesn't allocate
  // slots for all elements, so we can take advantage of the performance
  // benefits of both an array and a hash map.
  const cache = new Array(length);

  const clearCacheRange = (
    startIndex: number | undefined = 0,
    endIndex: number | undefined = length
  ) => {
    for (const indexStr in cache) {
      const index = Number(indexStr);
      if (index >= startIndex || index < endIndex) {
        delete cache[index];
      }

      if (index >= endIndex) {
        break;
      }
    }
  };

  return { cache, clearCacheRange };
};
