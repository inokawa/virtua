import * as bit from "./bit.js";
import { type InternalCacheSnapshot } from "./types.js";
import { abs, clamp, max, min, sort } from "./utils.js";

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
 * @internal
 */
export const findIndex = (cache: Cache, offset: number): number => {
  return clamp(
    /*#__NOINLINE__*/ bit.lowerBound(cache._offsets, offset),
    0,
    cache._length - 1
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

  // TODO optimize if possible
  cache._offsets = initOffsets(cache._sizes, cache._defaultItemSize);

  // Calculate diff of unmeasured items before start
  return (
    (cache._defaultItemSize - prevDefaultItemSize) *
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
  const defaultSize = snapshot ? snapshot[1] : itemSize;
  let sizes: number[];
  let uncachedLength: number;
  if (snapshot && snapshot[0]) {
    // https://github.com/inokawa/virtua/issues/441
    sizes = snapshot[0].slice(0, min(length, snapshot[0].length));
    uncachedLength = max(0, length - snapshot[0].length);
  } else {
    sizes = [];
    uncachedLength = length;
  }
  while (uncachedLength--) {
    sizes.push(UNCACHED);
  }
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
  const isAdd = diff > 0;
  cache._length = length;

  let amount = 0;
  if (diff) {
    let absDiff = abs(diff);
    while (absDiff--) {
      if (isAdd) {
        if (isShift) {
          cache._sizes.unshift(UNCACHED);
        } else {
          cache._sizes.push(UNCACHED);
          /*#__NOINLINE__*/ bit.push(cache._offsets, cache._defaultItemSize);
        }
        amount += cache._defaultItemSize;
      } else {
        let removed: number;
        if (isShift) {
          removed = cache._sizes.shift()!;
        } else {
          removed = cache._sizes.pop()!;
          cache._offsets.pop();
        }
        amount -= removed === UNCACHED ? cache._defaultItemSize : removed;
      }
    }
    if (isShift) {
      // TODO optimize if possible
      cache._offsets = initOffsets(cache._sizes, cache._defaultItemSize);
    }
  }
  return amount;
};
