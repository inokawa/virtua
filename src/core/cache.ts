import { floor } from "./utils.js";

/** @internal */
export const UNCACHED = -1;

/**
 * @internal
 */
export const fill = (
  array: number[],
  length: number,
  prepend?: boolean,
): number[] => {
  const key = prepend ? "unshift" : "push";
  for (let i = 0; i < length; i++) {
    array[key](UNCACHED);
  }
  return array;
};

/**
 * Finds the index of an item in the cache whose computed offset is closest to the specified offset.
 *
 * @internal
 */
export const findIndex = (
  getOffset: (index: number) => number,
  length: number,
  offset: number,
): number => {
  // Find with binary search
  let low = 0;
  let high = length - 1;
  let found = 0;
  while (low <= high) {
    const mid = floor((low + high) / 2);
    if (getOffset(mid) <= offset) {
      found = mid;
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return found;
};
