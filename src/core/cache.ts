import type { DeepReadonly, Writeable } from "./types";
import { exists, max, median, min, range } from "./utils";

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
): boolean => {
  const isInitialMeasurement = cache._sizes[index] === UNCACHED;
  cache._sizes[index] = size;
  // mark as dirty
  cache._measuredOffsetIndex = min(index, cache._measuredOffsetIndex);
  return isInitialMeasurement;
};

const computeOffset = (
  cache: Writeable<Cache>,
  index: number,
  isTotal?: boolean
): number => {
  if (!cache._length) return 0;
  if (cache._measuredOffsetIndex >= index) {
    if (isTotal) {
      return cache._offsets[index]! + getItemSize(cache, index);
    } else {
      return cache._offsets[index]!;
    }
  }

  let i = cache._measuredOffsetIndex;
  let top = cache._offsets[i]!;
  while (i <= index) {
    cache._offsets[i] = top;
    if (i === index && !isTotal) {
      break;
    }
    top += getItemSize(cache, i);
    i++;
  }
  // mark as measured
  cache._measuredOffsetIndex = index;
  return top;
};

export const computeTotalSize = (cache: Writeable<Cache>): number => {
  return computeOffset(cache, cache._length - 1, true);
};

export const computeStartOffset = (
  cache: Writeable<Cache>,
  index: number
): number => {
  return computeOffset(cache, index);
};

const findIndex = (cache: Cache, i: number, distance: number): number => {
  let sum = 0;
  if (distance >= 0) {
    // search forward
    while (i < cache._length - 1) {
      const h = getItemSize(cache, i++);
      if ((sum += h) >= distance) {
        if (sum - h / 2 >= distance) {
          i--;
        }
        break;
      }
    }
  } else {
    // search backward
    while (i > 0) {
      const h = getItemSize(cache, --i);
      if ((sum -= h) <= distance) {
        if (sum + h / 2 < distance) {
          i++;
        }
        break;
      }
    }
  }

  return min(max(i, 0), cache._length - 1);
};

export const findStartIndexWithOffset = (
  cache: Cache,
  offset: number,
  prevStartIndex: number,
  prevOffset: number
): number => {
  return findIndex(cache, prevStartIndex, offset - prevOffset);
};

export { findIndex as findEndIndex };

export const hasUnmeasuredItemsInRange = (
  cache: Cache,
  startIndex: number,
  endIndex: number
): boolean => {
  for (let i = startIndex; i <= endIndex; i++) {
    if (cache._sizes[i] === UNCACHED) {
      return true;
    }
  }
  return false;
};

export const estimateDefaultItemSize = (cache: Writeable<Cache>) => {
  const measuredSizes = cache._sizes.filter((s) => s !== UNCACHED);
  // This function will be called after measurement so measured size array must be longer than 0
  const startItemSize = measuredSizes[0]!;

  cache._defaultItemSize = measuredSizes.every((s) => s === startItemSize)
    ? // Maybe a fixed size array
      startItemSize
    : // Maybe a variable size array
      median(measuredSizes);
};

export const resetCache = (
  length: number,
  itemSize: number,
  cache?: Cache
): Cache => {
  return {
    _defaultItemSize: cache ? cache._defaultItemSize : itemSize,
    _length: length,
    _measuredOffsetIndex: cache
      ? min(cache._measuredOffsetIndex, length - 1)
      : 0,
    _sizes: range(length, (i) => {
      const size = cache && cache._sizes[i];
      if (exists(size)) {
        return size;
      }
      return UNCACHED;
    }),
    _offsets: range(length, (i) => {
      if (i === 0) {
        // first offset must be 0
        return 0;
      }
      const offset = cache && cache._offsets[i];
      if (exists(offset)) {
        return offset;
      }
      return UNCACHED;
    }),
  };
};
