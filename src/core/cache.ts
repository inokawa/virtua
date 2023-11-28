import type { DeepReadonly, Writeable } from "./types";
import { clamp, median, min } from "./utils";

/** @internal */
export const UNCACHED = -1;

/**
 * @internal
 */
export type Cache = DeepReadonly<{
  _defaultItemSize: number;
  _length: number;
  _sizes: number[];
  _computedOffsetIndex: number;
  _offsets: number[];
}>;

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
export const computeTotalSize = (cache: Writeable<Cache>): number => {
  if (!cache._length) return 0;
  return (
    computeOffset(cache, cache._length - 1) +
    getItemSize(cache, cache._length - 1)
  );
};

/**
 * @internal
 */
export const findIndex = (
  cache: Writeable<Cache>,
  offset: number,
  i: number
): number => {
  let sum = computeOffset(cache, i);
  while (i >= 0 && i < cache._length) {
    if (sum <= offset) {
      const next = getItemSize(cache, i);
      if (sum + next > offset) {
        break;
      } else {
        sum += next;
        i++;
      }
    } else {
      sum -= getItemSize(cache, --i);
    }
  }
  return clamp(i, 0, cache._length - 1);
};

/**
 * @internal
 */
export const computeRange = (
  cache: Writeable<Cache>,
  scrollOffset: number,
  prevStartIndex: number,
  viewportSize: number
): [number, number] => {
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

const appendCache = (
  cache: Writeable<Cache>,
  length: number,
  prepend?: boolean
) => {
  const key = prepend ? "unshift" : "push";
  for (let i = cache._length; i < length; i++) {
    cache._sizes[key](UNCACHED);
    // first offset must be 0
    cache._offsets.push(i === 0 ? 0 : UNCACHED);
  }
  cache._length = length;
};

/**
 * @internal
 */
export const initCache = (length: number, itemSize: number): Cache => {
  const cache: Cache = {
    _defaultItemSize: itemSize,
    _length: 0,
    _computedOffsetIndex: 0,
    _sizes: [],
    _offsets: [],
  };
  appendCache(cache as Writeable<Cache>, length);
  return cache;
};

/**
 * @internal
 */
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
    appendCache(cache, cache._length + diff, isShift);
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
