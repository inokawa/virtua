import { type InternalCacheSnapshot, type ItemsRange } from "./types";
import { clamp, max, median, min } from "./utils";

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
 * The search starts from the given initial index `i` and adjusts the search range based on whether
 * the offset at `i` is less than or equal to the target offset. If a match is found, the index of
 * the item is returned; otherwise, the function returns -1 if the item is not found.
 *
 * @param {Cache} cache - The cache object containing the data.
 * @param {number} offset - The target offset to search for within the cache.
 * @param {number} i - The initial index to start searching from.
 * @returns {number} - The index of the item closest to the offset, or -1 if not found.
 */
export const findIndex = (cache: Cache, offset: number, i: number): number => {
  let low = 0;
  let high = cache._length - 1;
  let mid, itemOffset;

  if (computeOffset(cache, i) <= offset) {
    low = i; // Start searching from initialIndex -> up
  } else {
    high = i; // Start searching from initialIndex -> down
  }

  while (low <= high) {
    mid = Math.floor((low + high) / 2);
    itemOffset = computeOffset(cache, mid);

    if (itemOffset <= offset) {
      if (itemOffset + getItemSize(cache, mid) > offset) {
        return clamp(mid, 0, cache._length - 1);
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
  prevStartIndex: number,
  viewportSize: number
): ItemsRange => {
  const start = findIndex(
    cache,
    scrollOffset,
    // Clamp because prevStartIndex may exceed the limit when children decreased a lot after scrolling
    min(prevStartIndex, cache._length - 1)
  );
  return [start, findIndex(cache, scrollOffset + viewportSize, start)];
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
  const measuredSizes = cache._sizes.filter((s, i) => {
    const isMeasured = s !== UNCACHED;
    if (isMeasured && i < startIndex) {
      measuredCountBeforeStart++;
    }
    return isMeasured;
  });
  const prevDefaultItemSize = cache._defaultItemSize;

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
