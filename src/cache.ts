import { max, min } from "./utils";

export const UNCACHED_ITEM_SIZE = -1;

export const resolveItemSize = (
  size: number,
  defaultItemSize: number
): number => {
  return size === UNCACHED_ITEM_SIZE ? defaultItemSize : size;
};

export const calculateAllSize = (sizes: number[], itemSize: number): number => {
  return sizes.reduce((acc, c) => acc + resolveItemSize(c, itemSize), 0);
};

export const findStartIndexBefore = (
  index: number,
  distance: number,
  cache: number[],
  defaultItemSize: number
): number => {
  let sum = 0;
  let i = index;
  while (i > 0) {
    i--;
    const h = resolveItemSize(cache[i]!, defaultItemSize);
    sum += h;
    if (sum >= distance) {
      if (sum - h / 2 > distance) {
        i++;
      }
      break;
    }
  }
  return max(min(i, index), 0);
};

export const findStartIndexAfter = (
  index: number,
  distance: number,
  cache: number[],
  defaultItemSize: number
): number => {
  let sum = 0;
  let i = index;
  while (i < cache.length - 1) {
    const h = resolveItemSize(cache[i]!, defaultItemSize);
    sum += h;
    i++;
    if (sum >= distance) {
      if (sum - h / 2 > distance) {
        i--;
      }
      break;
    }
  }
  return min(max(i, index), cache.length - 1);
};

export const findEndIndex = (
  index: number,
  viewportSize: number,
  cache: number[],
  defaultItemSize: number
): number => {
  let sum = 0;
  let i = index;
  while (i < cache.length - 1) {
    const h = resolveItemSize(cache[i]!, defaultItemSize);
    sum += h;
    if (sum >= viewportSize) {
      if (sum - h / 2 > viewportSize) {
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
  defaultItemSize: number
): number => {
  const index = 0;
  let sum = 0;
  let i = index;
  while (i < cache.length - 1) {
    const h = resolveItemSize(cache[i]!, defaultItemSize);
    sum += h;
    i++;
    if (sum >= offset) {
      if (sum - h / 2 >= offset) {
        i--;
      }
      break;
    }
  }
  return min(max(i, index), cache.length - 1);
};

export const computeStartOffset = (
  index: number,
  cache: number[],
  defaultItemSize: number
): number => {
  let top = 0;
  for (let i = 0; i < cache.length; i++) {
    if (i === index) {
      break;
    }
    top += resolveItemSize(cache[i]!, defaultItemSize);
  }
  return top;
};

export const resetCache = (length: number, cache?: number[]): number[] => {
  return Array.from(
    { length },
    (_, i) => (cache && cache[i]) ?? UNCACHED_ITEM_SIZE
  );
};
