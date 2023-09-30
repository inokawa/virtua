import type { DeepReadonly, Writeable } from "../types";
import { clamp, median, min } from "../utils";

export const UNCACHED = -1;

export type Cache = DeepReadonly<{
  _defaultItemSize: number;
  _length: number;
  _sizes: number[];
}>;

export type InstanceCache = {
  _measuredOffsetIndex: number;
  _offsets: number[];
};

export const getItemSize = (cache: Cache, index: number): number => {
  const size = cache._sizes[index]!;
  return size === UNCACHED ? cache._defaultItemSize : size;
};

export const setItemSize = (
  cache: Writeable<Cache>,
  inst: InstanceCache,
  index: number,
  size: number
): boolean => {
  const isInitialMeasurement = cache._sizes[index] === UNCACHED;
  cache._sizes[index] = size;
  // mark as dirty
  inst._measuredOffsetIndex = min(index, inst._measuredOffsetIndex);
  return isInitialMeasurement;
};

export const computeOffset = (
  cache: Cache,
  inst: InstanceCache,
  index: number
): number => {
  if (!cache._length) return 0;
  if (inst._measuredOffsetIndex >= index) {
    return inst._offsets[index]!;
  }

  let i = inst._measuredOffsetIndex;
  let top = inst._offsets[i]!;
  while (i < index) {
    top += getItemSize(cache, i);
    inst._offsets[++i] = top;
  }
  // mark as measured
  inst._measuredOffsetIndex = index;
  return top;
};

export const computeTotalSize = (cache: Cache, inst: InstanceCache): number => {
  if (!cache._length) return 0;
  return (
    computeOffset(cache, inst, cache._length - 1) +
    getItemSize(cache, cache._length - 1)
  );
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

  return clamp(i, 0, cache._length - 1);
};

export const findStartIndexWithOffset = (
  cache: Cache,
  inst: InstanceCache,
  offset: number,
  initialIndex: number
): number => {
  return findIndex(
    cache,
    initialIndex,
    offset - computeOffset(cache, inst, initialIndex)
  );
};

export const hasUnmeasuredItemsInRange = (
  cache: Cache,
  startIndex: number,
  endIndex: number
): boolean => {
  return cache._sizes.slice(startIndex, endIndex + 1).includes(UNCACHED);
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

export const initializeCache = (
  cache: Writeable<Cache>,
  inst: InstanceCache,
  length: number,
  prepend?: boolean
) => {
  const key = prepend ? "unshift" : "push";
  for (let i = cache._length; i < length; i++) {
    cache._sizes[key](UNCACHED);
    // first offset must be 0
    inst._offsets.push(i === 0 ? 0 : UNCACHED);
  }
  cache._length = length;
};

export const updateCacheLength = (
  cache: Writeable<Cache>,
  inst: InstanceCache,
  length: number,
  isShift?: boolean
): [number, boolean] => {
  const diff = length - cache._length;

  const isRemove = diff < 0;
  let shift: number;
  if (isRemove) {
    // Removed
    shift = (
      isShift ? cache._sizes.splice(0, -diff) : cache._sizes.splice(diff)
    ).reduce(
      (acc, removed) =>
        acc + (removed === UNCACHED ? cache._defaultItemSize : removed),
      0
    );
    inst._offsets.splice(diff);
  } else {
    // Added
    shift = cache._defaultItemSize * diff;
    initializeCache(cache, inst, cache._length + diff, isShift);
  }

  inst._measuredOffsetIndex = isShift
    ? // Discard cache for now
      0
    : // measuredOffsetIndex shouldn't be less than 0 because it makes scrollSize NaN and cause infinite rerender.
      // https://github.com/inokawa/virtua/pull/160
      clamp(length - 1, 0, inst._measuredOffsetIndex);
  cache._length = length;
  return [shift, isRemove];
};
