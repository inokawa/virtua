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
    const h = resolveItemHeight(cache[i]!, defaultItemHeight);
    sum += h;
    if (sum >= viewportHeight) {
      if (sum - h / 2 > viewportHeight) {
        i++;
      }
      break;
    }
    i--;
  }
  return max(min(i, index), 0);
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
    const h = resolveItemHeight(cache[i]!, defaultItemHeight);
    sum += h;
    if (sum >= viewportHeight) {
      if (sum - h / 2 > viewportHeight) {
        i--;
      }
      break;
    }
    i++;
  }
  return min(max(i, index), cache.length - 1);
};

export const findStartIndexWithOffset = (
  offset: number,
  cache: number[],
  defaultItemHeight: number
): number => {
  return findIndexAfter(0, offset, cache, defaultItemHeight);
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
