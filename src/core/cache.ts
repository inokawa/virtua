import { type InternalCacheSnapshot, type ItemsRange } from "./types";
import { clamp, floor, max, median, min } from "./utils";

type Writeable<T> = {
  -readonly [key in keyof T]: Writeable<T[key]>;
};

/** @internal */
export const UNCACHED = -1;

/**
 * @internal
 */
export type Cache = {
  readonly _length: number;
  // sizes
  readonly _sizes: number[];
  readonly _defaultItemSize: number;
  // offsets
  readonly _computedOffsetIndex: number;
  readonly _offsets: number[];
};

const fill = (array: number[], length: number, prepend?: boolean): number[] => {
  const key = prepend ? "unshift" : "push";
  for (let i = 0; i < length; i++) {
    array[key](UNCACHED);
  }
  return array;
};

/**
 * @internal
 */
export const getItemSize = (cache: Cache, index: number): number => {
  const size = cache._sizes[index]!;
  return size === UNCACHED ? cache._defaultItemSize : size;
};

/**
 * @internal
 */
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

/**
 * @internal
 */
export const computeOffset = (
  cache: Writeable<Cache>,
  index: number
): number => {
  if (!cache._length) return 0;
  if (cache._computedOffsetIndex >= index) {
    return cache._offsets[index]!;
  }

  if (cache._computedOffsetIndex < 0) {
    // first offset must be 0 to avoid returning NaN, which can cause infinite rerender.
    // https://github.com/inokawa/virtua/pull/160
    cache._offsets[0] = 0;
    cache._computedOffsetIndex = 0;
  }
  let i = cache._computedOffsetIndex;
  let top = cache._offsets[i]!;
  while (i < index) {
    top += getItemSize(cache, i);
    cache._offsets[++i] = top;
  }
  // mark as measured
  cache._computedOffsetIndex = index;
  return top;
};

/**
 * @internal
 */
export const computeTotalSize = (cache: Cache): number => {
  if (!cache._length) return 0;
  return (
    computeOffset(cache, cache._length - 1) +
    getItemSize(cache, cache._length - 1)
  );
};

/**
 * Finds the index of an item in the cache whose computed offset is closest to the specified offset.
 *
 * @internal
 */
export const findIndex = (
  cache: Cache,
  offset: number,
  low: number = 0,
  high: number = cache._length - 1
): number => {
  // Find with binary search
  while (low <= high) {
    const mid = floor((low + high) / 2);
    const itemOffset = computeOffset(cache, mid);
    if (itemOffset <= offset) {
      if (itemOffset + getItemSize(cache, mid) > offset) {
        return mid;
      }
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return clamp(low, 0, cache._length - 1);
};

/**
 * @internal
 */
export const computeRange = (
  cache: Cache,
  scrollOffset: number,
  viewportSize: number,
  prevStartIndex: number
): ItemsRange => {
  // Clamp because prevStartIndex may exceed the limit when children decreased a lot after scrolling
  prevStartIndex = min(prevStartIndex, cache._length - 1);

  if (computeOffset(cache, prevStartIndex) <= scrollOffset) {
    // search forward
    // start <= end, prevStartIndex <= start
    const end = findIndex(cache, scrollOffset + viewportSize, prevStartIndex);
    return [findIndex(cache, scrollOffset, prevStartIndex, end), end];
  } else {
    // search backward
    // start <= end, start <= prevStartIndex
    const start = findIndex(cache, scrollOffset, undefined, prevStartIndex);
    return [start, findIndex(cache, scrollOffset + viewportSize, start)];
  }
};

/**
 * @internal
 */
export const estimateDefaultItemSize = (
  cache: Writeable<Cache>,
  startIndex: number
): number => {
  let measuredCountBeforeStart = 0;
  // This function will be called after measurement so measured size array must be longer than 0
  const prevDefaultItemSize = cache._defaultItemSize;
  const measuredSizes: number[] = [];
  cache._sizes.forEach((s, i) => {
    if (s !== UNCACHED) {
      measuredSizes.push(s);
      if (i < startIndex) {
        measuredCountBeforeStart++;
      }
    }
  });

  // Discard cache for now
  cache._computedOffsetIndex = -1;

  // Calculate diff of unmeasured items before start
  return (
    ((cache._defaultItemSize = median(measuredSizes)) - prevDefaultItemSize) *
    max(startIndex - measuredCountBeforeStart, 0)
  );
};

/**
 * @internal
 */
export const initCache = (
  length: number,
  itemSize: number,
  snapshot?: InternalCacheSnapshot
): Cache => {
  return {
    _defaultItemSize: snapshot ? snapshot[1] : itemSize,
    _sizes:
      snapshot && snapshot[0]
        ? // https://github.com/inokawa/virtua/issues/441
          fill(
            snapshot[0].slice(0, min(length, snapshot[0].length)),
            max(0, length - snapshot[0].length)
          )
        : fill([], length),
    _length: length,
    _computedOffsetIndex: -1,
    _offsets: fill([], length),
  };
};

/**
 * @internal
 */
export const takeCacheSnapshot = (cache: Cache): InternalCacheSnapshot => {
  return [cache._sizes.slice(), cache._defaultItemSize];
};

/**
 * @internal
 */
export const updateCacheLength = (
  cache: Writeable<Cache>,
  length: number,
  isShift?: boolean
): number => {
  const diff = length - cache._length;

  cache._computedOffsetIndex = isShift
    ? // Discard cache for now
      -1
    : min(length - 1, cache._computedOffsetIndex);
  cache._length = length;

  if (diff > 0) {
    // Added
    fill(cache._offsets, diff);
    fill(cache._sizes, diff, isShift);
    return cache._defaultItemSize * diff;
  } else {
    // Removed
    cache._offsets.splice(diff);
    return (
      isShift ? cache._sizes.splice(0, -diff) : cache._sizes.splice(diff)
    ).reduce(
      (acc, removed) =>
        acc - (removed === UNCACHED ? cache._defaultItemSize : removed),
      0
    );
  }
};
