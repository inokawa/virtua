import { type InternalCacheSnapshot, type ItemsRange } from "./types.js";
import { clamp, floor, max, min, sort } from "./utils.js";

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
export const getItemOffset = (
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
    if (getItemOffset(cache, mid) <= offset) {
      if (getItemOffset(cache, mid + 1) > offset) {
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
  startOffset: number,
  endOffset: number,
  prevStartIndex: number
): ItemsRange => {
  // Clamp because prevStartIndex may exceed the limit when children decreased a lot after scrolling
  prevStartIndex = min(prevStartIndex, cache._length - 1);

  if (getItemOffset(cache, prevStartIndex) <= startOffset) {
    // search forward
    // start <= end, prevStartIndex <= start
    const end = findIndex(cache, endOffset, prevStartIndex);
    return [findIndex(cache, startOffset, prevStartIndex, end), end];
  } else {
    // search backward
    // start <= end, start <= prevStartIndex
    const start = findIndex(cache, startOffset, undefined, prevStartIndex);
    return [start, findIndex(cache, endOffset, start)];
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

  // Calculate median
  const sorted = sort(measuredSizes);
  const len = sorted.length;
  const mid = (len / 2) | 0;
  const median =
    len % 2 === 0 ? (sorted[mid - 1]! + sorted[mid]!) / 2 : sorted[mid]!;

  const prevDefaultItemSize = cache._defaultItemSize;

  // Calculate diff of unmeasured items before start
  return (
    ((cache._defaultItemSize = median) - prevDefaultItemSize) *
    max(startIndex - measuredCountBeforeStart, 0)
  );
};

/**
 * @internal
 */
export const initCache = (
  length: number,
  itemSize: number,
  sizes?: number[]
): Cache => {
  return {
    _defaultItemSize: itemSize,
    _sizes: sizes
      ? // https://github.com/inokawa/virtua/issues/441
        fill(
          sizes.slice(0, min(length, sizes.length)),
          max(0, length - sizes.length)
        )
      : fill([], length),
    _length: length,
    _computedOffsetIndex: -1,
    _offsets: fill([], length + 1),
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
