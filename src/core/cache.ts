import type { DeepReadonly, Writeable } from "./types";
import { exists, max, median, min } from "./utils";

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

export const initCache = (length: number, itemSize: number): Cache => {
  const sizes: number[] = [];
  const offsets: number[] = [];
  for (let i = 0; i < length; i++) {
    sizes.push(UNCACHED);
    // first offset must be 0
    offsets.push(i === 0 ? 0 : UNCACHED);
  }

  return {
    _defaultItemSize: itemSize,
    _length: length,
    _measuredOffsetIndex: 0,
    _sizes: sizes,
    _offsets: offsets,
  };
};

export const updateCache = (cache: Writeable<Cache>, length: number) => {
  const sizes: number[] = [];
  const offsets: number[] = [];
  for (let i = 0; i < length; i++) {
    const size = cache._sizes[i];
    sizes.push(exists(size) ? size : UNCACHED);

    if (i === 0) {
      // first offset must be 0
      offsets.push(0);
    } else {
      const offset = cache._offsets[i];
      offsets.push(exists(offset) ? offset : UNCACHED);
    }
  }

  cache._length = length;
  cache._measuredOffsetIndex = min(cache._measuredOffsetIndex, length - 1);
  cache._sizes = sizes;
  cache._offsets = offsets;
};
