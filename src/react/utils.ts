import { ReactElement, ReactFragment, ReactNode } from "react";
import { exists, max, min, isArray } from "../core/utils";
import { SCROLL_DOWN, SCROLL_UP, ScrollDirection } from "../core/store";

export const refKey = "current";

export const emptyComponents = {};

type ItemElement = ReactElement | ReactFragment | string | number;

const forEach = (children: ReactNode, elements: ItemElement[]) => {
  if (isArray(children)) {
    for (const c of children) {
      forEach(c, elements);
    }
  } else if (!exists(children) || typeof children === "boolean") {
    // filter out, that is the same as React.Children.toArray
  } else {
    elements.push(children);
  }
};

// Replace React.Children.forEach with our tiny implementation.
// In our usage, just flatten children array keeping element instances and their keys, React.Children is redundant and slow.
//
// - React.Children.toArray is slow because it clones element instance.
// - React.Children.map is slow because it clones element instance.
// - React.Children.forEach is slow because it escapes and modifies keys even if they are unused.
//
// And React.Children seems to be in maintenance mode so it's unlikely it would be improved and ported to older versions.
// https://github.com/reactjs/rfcs/pull/61#issuecomment-584402735
export const flattenChildren = (children: ReactNode): ItemElement[] => {
  const elements: ItemElement[] = [];
  forEach(children, elements);
  return elements;
};

export type MayHaveKey = { key?: React.Key };

export const clampStartIndex = (
  startIndex: number,
  overscan: number,
  scrollDirection: ScrollDirection
): number => {
  return max(
    startIndex - (scrollDirection === SCROLL_DOWN ? 1 : max(1, overscan)),
    0
  );
};

export const clampEndIndex = (
  endIndex: number,
  overscan: number,
  scrollDirection: ScrollDirection,
  count: number
): number => {
  return min(
    endIndex + (scrollDirection === SCROLL_UP ? 1 : max(1, overscan)),
    count - 1
  );
};
