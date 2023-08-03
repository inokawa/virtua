import type { DeepReadonly, Writeable } from "./types";
import { max, median, min } from "./utils";

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

export const computeOffset = (
  cache: Writeable<Cache>,
  index: number
): number => {
  if (!cache._length) return 0;
  if (cache._measuredOffsetIndex >= index) {
    return cache._offsets[index]!;
  }

  let i = cache._measuredOffsetIndex;
  let top = cache._offsets[i]!;
  while (i < index) {
    top += getItemSize(cache, i);
    cache._offsets[++i] = top;
  }
  // mark as measured
  cache._measuredOffsetIndex = index;
  return top;
};

export const computeTotalSize = (cache: Writeable<Cache>): number => {
  const offset = computeOffset(cache, cache._length - 1);
  if (!offset) return offset;
  return offset + getItemSize(cache, cache._length - 1);
};

export const findIndex = (
  cache: Cache,
  i: number,
  distance: number
): number => {
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

  return min(cache._length - 1, max(0, i));
};

export const findStartIndexWithOffset = (
  cache: Cache,
  offset: number,
  prevStartIndex: number,
  prevOffset: number
): number => {
  return findIndex(cache, prevStartIndex, offset - prevOffset);
};

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

const appendCache = (cache: Writeable<Cache>, length: number) => {
  for (let i = cache._length; i < length; i++) {
    cache._sizes.push(UNCACHED);
    // first offset must be 0
    cache._offsets.push(i === 0 ? 0 : UNCACHED);
  }
  cache._length = length;
};

export const initCache = (length: number, itemSize: number): Cache => {
  const cache: Cache = {
    _defaultItemSize: itemSize,
    _length: 0,
    _measuredOffsetIndex: 0,
    _sizes: [],
    _offsets: [],
  };
  appendCache(cache as Writeable<Cache>, length);
  return cache;
};

export const updateCache = (cache: Writeable<Cache>, length: number) => {
  const diff = length - cache._length;

  if (diff > 0) {
    appendCache(cache as Writeable<Cache>, length);
  } else {
    for (let i = diff; i < 0; i++) {
      cache._sizes.pop();
      cache._offsets.pop();
    }
    cache._length = length;
    cache._measuredOffsetIndex = min(cache._measuredOffsetIndex, length - 1);
  }
};
