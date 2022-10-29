import { max, min } from "./utils";

export const UNCACHED_ITEM_HEIGHT = -1;

export const resolveItemHeight = (
  height: number,
  defaultItemHeight: number
): number => {
  return height === UNCACHED_ITEM_HEIGHT ? defaultItemHeight : height;
};

export const findIndexBefore = (
  index: number,
  viewportHeight: number,
  cache: number[],
  defaultItemHeight: number
): number => {
  let sum = 0;
  let i = index;
  while (i > 0) {
    sum += resolveItemHeight(cache[i]!, defaultItemHeight);
    if (sum >= viewportHeight) {
      break;
    }
    i--;
  }
  return max(i, 0);
};

export const findIndexAfter = (
  index: number,
  viewportHeight: number,
  cache: number[],
  defaultItemHeight: number
): number => {
  let sum = 0;
  let i = index;
  while (i < cache.length - 1) {
    sum += resolveItemHeight(cache[i]!, defaultItemHeight);
    if (sum >= viewportHeight) {
      break;
    }
    i++;
  }
  return min(i, cache.length - 1);
};

export const findStartIndexWithOffset = (
  offset: number,
  cache: number[],
  defaultItemHeight: number
): number => {
  const startIndex = findIndexAfter(0, offset, cache, defaultItemHeight);
  return startIndex;
};

export const computeTop = (
  index: number,
  cache: number[],
  defaultItemHeight: number
): number => {
  let top = 0;
  for (let i = 0; i < cache.length; i++) {
    if (i === index) {
      break;
    }
    top += resolveItemHeight(cache[i]!, defaultItemHeight);
  }
  return top;
};

export const resetCache = (array: unknown[], cache?: number[]): number[] => {
  return array.map((_, i) => (cache && cache[i]) ?? UNCACHED_ITEM_HEIGHT);
};
