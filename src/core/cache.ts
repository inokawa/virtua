import { clamp, floor } from "./utils.js";

/** @internal */
export const UNCACHED = -1;

/**
 * Finds the index of an item in the cache whose computed offset is closest to the specified offset.
 *
 * @internal
 */
export const findIndex = (
  getOffset: (index: number) => number,
  length: number,
  offset: number,
  low: number = 0,
  high: number = length - 1,
): number => {
  // Find with binary search
  let found: number = low;
  while (low <= high) {
    const mid = floor((low + high) / 2);
    if (getOffset(mid) <= offset) {
      found = mid;
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return clamp(found, 0, length - 1);
};
