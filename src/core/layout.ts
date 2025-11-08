import {
  initCache,
  getItemSize,
  UNCACHED,
  setItemSize,
  findIndex as _findIndex,
  computeRange,
  getItemOffset,
  updateCacheLength,
  estimateDefaultItemSize,
} from "./cache.js";
import type {
  CacheSnapshot,
  InternalCacheSnapshot,
  ItemsRange,
} from "./types.js";

/**
 * @internal
 */
export interface LayoutCache {
  $getRange: (startOffset: number, endOffset: number) => ItemsRange;
  $findIndex: (offset: number) => number;
  $setItemSize: (index: number, size: number) => boolean;
  $getItemSize: (index: number) => number;
  $getItemOffset: (index: number) => number;
  $getTotalSize: () => number;
  $setLength: (length: number, isShift?: boolean) => number;
  $getLength: () => number;
  $isSizeEqual: (index: number, value?: number) => boolean;
  $calcDefaultSize: (visibleOffset: number) => number;
}

interface LinearCache extends LayoutCache {
  $snapshot: () => CacheSnapshot;
}

/**
 * @internal
 */
export const createLinearCache = (
  elementsCount: number,
  itemSize: number = 40,
  cacheSnapshot?: CacheSnapshot | undefined
): LinearCache => {
  let prevStartIndex = 0;

  const cache = initCache(
    elementsCount,
    itemSize,
    cacheSnapshot as unknown as InternalCacheSnapshot | undefined
  );

  const findIndex = (offset: number) => _findIndex(cache, offset);

  return {
    $snapshot: () => {
      return [
        cache._sizes.slice(),
        cache._defaultItemSize,
      ] satisfies InternalCacheSnapshot as unknown as CacheSnapshot;
    },
    $getRange: (startOffset, endOffset) => {
      const range = computeRange(cache, startOffset, endOffset, prevStartIndex);
      prevStartIndex = range[0];
      return range;
    },
    $findIndex: findIndex,
    $setItemSize: (index, size) => setItemSize(cache, index, size),
    $getItemSize: (index) => getItemSize(cache, index),
    $getItemOffset: (index) => getItemOffset(cache, index),
    $getTotalSize: () => getItemOffset(cache, cache._length),
    $setLength: (length, isShift) => {
      return updateCacheLength(cache, length, isShift);
    },
    $getLength: () => cache._length,
    $isSizeEqual: (index, value = UNCACHED) => cache._sizes[index] === value,
    $calcDefaultSize: (offset) => {
      return estimateDefaultItemSize(cache, findIndex(offset));
    },
  };
};
