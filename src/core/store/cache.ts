import type { CacheSnapshot, DeepReadonly, Writeable } from "../types";
import { clamp, fill, max, median, min } from "../utils";

export const UNCACHED = -1;

const INITIAL_MEASUREMENT_INDEX = -1;

export type Cache = DeepReadonly<{
  _defaultItemSize: number;
  _length: number;
  _sizes: number[];
  _computedOffsetIndex: number;
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
  cache._computedOffsetIndex = min(index, cache._computedOffsetIndex);
  return isInitialMeasurement;
};

export const computeOffset = (
  cache: Writeable<Cache>,
  index: number
): number => {
  if (!cache._length) return 0;
  if (cache._computedOffsetIndex >= index) {
    return cache._offsets[index]!;
  }

  if (cache._computedOffsetIndex === INITIAL_MEASUREMENT_INDEX) {
    // first offset must be 0
    cache._offsets[0] = 0;
  }

  let i = max(cache._computedOffsetIndex, 0);
  let top = cache._offsets[i]!;
  while (i < index) {
    top += getItemSize(cache, i);
    cache._offsets[++i] = top;
  }
  // mark as measured
  cache._computedOffsetIndex = index;
  return top;
};

export const computeTotalSize = (cache: Writeable<Cache>): number => {
  if (!cache._length) return 0;
  return (
    computeOffset(cache, cache._length - 1) +
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
  cache: Writeable<Cache>,
  offset: number,
  initialIndex: number
): number => {
  return findIndex(
    cache,
    initialIndex,
    offset - computeOffset(cache, initialIndex)
  );
};

export const computeRange = (
  cache: Cache,
  scrollOffset: number,
  prevStartIndex: number,
  viewportSize: number
): [number, number] => {
  const start = findStartIndexWithOffset(
    cache as Writeable<Cache>,
    scrollOffset,
    // Clamp because prevStartIndex may exceed the limit when children decreased a lot after scrolling
    min(prevStartIndex, cache._length - 1)
  );
  return [start, findIndex(cache, start, viewportSize)];
};

export const hasUnmeasuredItemsInRange = (
  cache: Cache,
  startIndex: number,
  endIndex: number
): boolean => {
  return cache._sizes
    .slice(max(0, startIndex - 1), min(cache._length - 1, endIndex + 1) + 1)
    .includes(UNCACHED);
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

export const initCache = (
  length: number,
  itemSize: number,
  snapshot?: CacheSnapshot
): Cache => {
  const cache: Writeable<Cache> = snapshot
    ? {
        _defaultItemSize: snapshot.defaultSize,
        _length: snapshot.sizes.length,
        _computedOffsetIndex: INITIAL_MEASUREMENT_INDEX,
        _sizes: snapshot.sizes,
        _offsets: fill(snapshot.sizes.length, UNCACHED),
      }
    : {
        _defaultItemSize: itemSize,
        _length: length,
        _computedOffsetIndex: INITIAL_MEASUREMENT_INDEX,
        _sizes: fill(length, UNCACHED),
        _offsets: fill(length, UNCACHED),
      };

  const firstUncachedIndex = cache._sizes.indexOf(UNCACHED);
  // recover offsets
  computeOffset(
    cache,
    max(firstUncachedIndex === -1 ? cache._length - 1 : firstUncachedIndex, 0)
  );
  return cache;
};

export const updateCacheLength = (
  cache: Writeable<Cache>,
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
    cache._offsets.splice(diff);
  } else {
    // Added
    shift = cache._defaultItemSize * diff;
    cache._sizes[isShift ? "unshift" : "push"](...fill(diff, UNCACHED));
    cache._offsets.push(...fill(diff, UNCACHED));
    // first offset must be 0
    cache._offsets[0] = 0;
  }

  cache._computedOffsetIndex = isShift
    ? // Discard cache for now
      0
    : // measuredOffsetIndex shouldn't be less than 0 because it makes scrollSize NaN and cause infinite rerender.
      // https://github.com/inokawa/virtua/pull/160
      clamp(length - 1, 0, cache._computedOffsetIndex);
  cache._length = length;
  return [shift, isRemove];
};
