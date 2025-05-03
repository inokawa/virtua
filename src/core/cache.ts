import * as bit from "./bit";
import { type InternalCacheSnapshot } from "./types";
import { clamp, max, min, sort, append } from "./utils";

type Writeable<T> = {
  -readonly [key in keyof T]: T[key];
};

/** @internal */
export const UNCACHED = -1;

/**
 * @internal
 */
export interface Cache {
  readonly _length: number;
  // sizes
  readonly _defaultItemSize: number;
  readonly _sizes: number[];
  // offsets
  readonly _offsets: bit.BIT;
}

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
  cache: Cache,
  index: number,
  size: number
): boolean => {
  const prevSize = getItemSize(cache, index);
  const isInitialMeasurement = cache._sizes[index] === UNCACHED;
  cache._sizes[index] = size;
  /*#__NOINLINE__*/ bit.add(cache._offsets, index + 1, size - prevSize);
  return isInitialMeasurement;
};

/**
 * @internal
 */
export const getItemOffset = (cache: Cache, index: number): number => {
  if (!cache._length) return 0;
  return /*#__NOINLINE__*/ bit.get(cache._offsets, index);
};

/**
 * Finds the index of an item in the cache whose computed offset is closest to the specified offset.
 *
 * @internal
 */
export const findIndex = (cache: Cache, offset: number): number => {
  return clamp(
    /*#__NOINLINE__*/ bit.lowerBound(cache._offsets, offset),
    0,
    cache._length - 1
  );
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

  // Calculate median
  const sorted = sort(measuredSizes);
  const len = sorted.length;
  const mid = (len / 2) | 0;
  const median =
    len % 2 === 0 ? (sorted[mid - 1]! + sorted[mid]!) / 2 : sorted[mid]!;

  const prevDefaultItemSize = cache._defaultItemSize;
  cache._defaultItemSize = median;

  // Discard cache for now
  cache._offsets = initOffsets(cache._sizes, cache._defaultItemSize);

  // Calculate diff of unmeasured items before start
  return (
    (cache._defaultItemSize - prevDefaultItemSize) *
    max(startIndex - measuredCountBeforeStart, 0)
  );
};

const initOffsets = (
  sizes: readonly number[],
  defaultSize: number
): bit.BIT => {
  return /*#__NOINLINE__*/ bit.init(
    sizes.map((s) => (s === UNCACHED ? defaultSize : s))
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
  const defaultSize = snapshot ? snapshot[1] : itemSize;
  const sizes =
    snapshot && snapshot[0]
      ? // https://github.com/inokawa/virtua/issues/441
        append(
          snapshot[0].slice(0, min(length, snapshot[0].length)),
          max(0, length - snapshot[0].length),
          UNCACHED
        )
      : append([], length, UNCACHED);
  return {
    _length: length,
    _defaultItemSize: defaultSize,
    _sizes: sizes,
    _offsets: initOffsets(sizes, defaultSize),
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

  cache._length = length;

  if (diff > 0) {
    // Added
    append(cache._sizes, diff, UNCACHED, isShift);

    if (isShift) {
      cache._offsets = initOffsets(cache._sizes, cache._defaultItemSize);
    } else {
      for (let i = 0; i < diff; i++) {
        /*#__NOINLINE__*/ bit.push(cache._offsets, cache._defaultItemSize);
      }
    }
    return cache._defaultItemSize * diff;
  } else {
    // Removed
    const amount = (
      isShift ? cache._sizes.splice(0, -diff) : cache._sizes.splice(diff)
    ).reduce(
      (acc, removed) =>
        acc - (removed === UNCACHED ? cache._defaultItemSize : removed),
      0
    );
    if (isShift) {
      cache._offsets = initOffsets(cache._sizes, cache._defaultItemSize);
    } else {
      for (let i = diff; i < 0; i++) {
        cache._offsets.pop();
      }
    }
    return amount;
  }
};
