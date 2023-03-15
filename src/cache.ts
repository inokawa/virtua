import type { DeepReadonly, Writeable } from "./types";
import { max, min, range } from "./utils";

export const UNCACHED = -1;

export type Cache = DeepReadonly<{
  _defaultItemSize: number;
  _length: number;
  _sizes: number[];
  _measuredOffsetIndex: number;
  _offsets: number[];
}>;

export const getItemSize = (cache: Cache, index: number): number => {
  const size = cache._sizes[index]!;
  return size === UNCACHED ? cache._defaultItemSize : size;
};

export const setItemSize = (
  cache: Writeable<Cache>,
  index: number,
  size: number
) => {
  cache._sizes[index] = size;
  cache._measuredOffsetIndex = min(index, cache._measuredOffsetIndex);
};

export const computeTotalSize = (cache: Writeable<Cache>): number => {
  const lastIndex = cache._length - 1;
  if (cache._measuredOffsetIndex >= lastIndex) {
    return cache._offsets[lastIndex]! + getItemSize(cache, lastIndex);
  }

  let top = cache._offsets[cache._measuredOffsetIndex]!;
  for (let i = cache._measuredOffsetIndex; i <= lastIndex; i++) {
    cache._offsets[i] = top;
    top += getItemSize(cache, i);
  }

  cache._measuredOffsetIndex = lastIndex;
  return top;
};

export const findStartIndexBefore = (
  index: number,
  distance: number,
  cache: Cache
): number => {
  let sum = 0;
  let i = index;
  while (i > 0) {
    i--;
    const h = getItemSize(cache, i);
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
  cache: Cache
): number => {
  let sum = 0;
  let i = index;
  while (i < cache._length - 1) {
    const h = getItemSize(cache, i);
    sum += h;
    i++;
    if (sum >= distance) {
      if (sum - h / 2 > distance) {
        i--;
      }
      break;
    }
  }
  return min(max(i, index), cache._length - 1);
};

export const findEndIndex = (
  index: number,
  viewportSize: number,
  cache: Cache
): number => {
  let sum = 0;
  let i = index;
  while (i < cache._length - 1) {
    const h = getItemSize(cache, i);
    sum += h;
    if (sum >= viewportSize) {
      if (sum - h / 2 > viewportSize) {
        i--;
      }
      break;
    }
    i++;
  }
  return min(max(i, index), cache._length - 1);
};

export const findStartIndexWithOffset = (
  offset: number,
  cache: Cache,
  prevStartIndex: number,
  prevOffset: number
): number => {
  let sum = prevOffset;
  let i = prevStartIndex;
  if (offset > prevOffset) {
    while (i < cache._length - 1) {
      const h = getItemSize(cache, i);
      sum += h;
      i++;
      if (sum >= offset) {
        if (sum - h / 2 >= offset) {
          i--;
        }
        break;
      }
    }
  } else {
    while (i > 0) {
      i--;
      const h = getItemSize(cache, i);
      sum -= h;
      if (sum <= offset) {
        if (sum + h / 2 <= offset) {
          i++;
        }
        break;
      }
    }
  }

  return min(max(i, 0), cache._length - 1);
};

export const hasUnmeasuredItemsInRange = (
  startIndex: number,
  endIndex: number,
  cache: Cache
): boolean => {
  for (let i = startIndex; i <= endIndex; i++) {
    if (cache._sizes[i] === UNCACHED) {
      return true;
    }
  }
  return false;
};

export const computeStartOffset = (
  index: number,
  cache: Writeable<Cache>
): number => {
  if (cache._measuredOffsetIndex >= index) {
    return cache._offsets[index]!;
  }

  let top = cache._offsets[cache._measuredOffsetIndex]!;
  for (let i = cache._measuredOffsetIndex; i <= index; i++) {
    cache._offsets[i] = top;
    if (i === index) {
      break;
    }
    top += getItemSize(cache, i);
  }
  cache._measuredOffsetIndex = index;
  return top;
};

export const resetCache = (
  length: number,
  itemSize: number,
  cache?: Cache
): Cache => {
  return {
    _defaultItemSize: itemSize,
    _length: length,
    _measuredOffsetIndex:
      (cache && min(cache._measuredOffsetIndex, length - 1)) ?? 0,
    _sizes: range(length, (i) => (cache && cache._sizes[i]) ?? UNCACHED),
    _offsets: range(length, (i) =>
      i === 0
        ? 0 // first offset must be 0
        : (cache && cache._offsets[i]) ?? UNCACHED
    ),
  };
};
