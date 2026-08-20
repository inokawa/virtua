import { UNCACHED, findIndex } from "../cache.js";
import type { Layout } from "./types.js";
import type { CacheSnapshot } from "../types.js";
import { max, min, sort } from "../utils.js";

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
export interface ListLayout extends Layout {
  $snapshot(): CacheSnapshot;
}

/**
 * @internal
 */
export const createListLayout = (
  length: number,
  defaultItemSize: number = 40,
  snapshot?: CacheSnapshot | undefined,
): ListLayout => {
  if (snapshot && snapshot[1]) {
    defaultItemSize = snapshot[1];
  }

  let computedOffsetIndex = -1;
  let prevStartIndex = 0;

  const restoredSizes = snapshot && snapshot[0];

  const sizes: number[] = restoredSizes
    ? // https://github.com/inokawa/virtua/issues/441
      fill(
        restoredSizes.slice(0, min(length, restoredSizes.length)),
        max(0, length - restoredSizes.length),
      )
    : fill([], length);
  const offsets: number[] = fill([], length + 1);

  const getSize = (index: number): number => {
    const size = sizes[index]!;
    return size === UNCACHED ? defaultItemSize : size;
  };

  const getOffset = (index: number): number => {
    if (!length) return 0;
    if (computedOffsetIndex >= index) {
      return offsets[index]!;
    }

    if (computedOffsetIndex < 0) {
      // first offset must be 0 to avoid returning NaN, which can cause infinite rerender.
      // https://github.com/inokawa/virtua/pull/160
      offsets[0] = 0;
      computedOffsetIndex = 0;
    }
    let i = computedOffsetIndex;
    let top = offsets[i]!;
    while (i < index) {
      top += getSize(i);
      offsets[++i] = top;
    }
    // mark as measured
    computedOffsetIndex = index;
    return top;
  };

  return {
    $getRange: (startOffset, endOffset) => {
      // Clamp because prevStartIndex may exceed the limit when children decreased a lot after scrolling
      prevStartIndex = min(prevStartIndex, length - 1);

      let start: number;
      let end: number;
      if (getOffset(prevStartIndex) <= startOffset) {
        // search forward
        // start <= end, prevStartIndex <= start
        end = findIndex(getOffset, length, endOffset, prevStartIndex);
        start = findIndex(getOffset, length, startOffset, prevStartIndex, end);
      } else {
        // search backward
        // start <= end, start <= prevStartIndex
        start = findIndex(
          getOffset,
          length,
          startOffset,
          undefined,
          prevStartIndex,
        );
        end = findIndex(getOffset, length, endOffset, start);
      }
      prevStartIndex = start;
      return [start, end];
    },
    $findIndex: (offset) => findIndex(getOffset, length, offset),
    $getItemOffset: getOffset,
    $getItemSize: getSize,
    $setItemSize: (index, size) => {
      const isInitialMeasurement = sizes[index] === UNCACHED;
      sizes[index] = size;
      // mark as dirty
      computedOffsetIndex = min(index, computedOffsetIndex);
      return isInitialMeasurement;
    },
    $isSizeEqual: (index, size = UNCACHED) => sizes[index] === size,
    $getTotalSize: () => getOffset(length),
    $getLength: () => length,
    $setLength: (nextLength, isShift) => {
      const diff = nextLength - length;

      computedOffsetIndex = isShift
        ? // Discard cache for now
          -1
        : min(nextLength - 1, computedOffsetIndex);
      length = nextLength;

      if (diff > 0) {
        // Added
        fill(offsets, diff);
        fill(sizes, diff, isShift);
        return defaultItemSize * diff;
      } else {
        // Removed
        offsets.splice(diff);
        return (isShift ? sizes.splice(0, -diff) : sizes.splice(diff)).reduce(
          (acc, removed) =>
            acc - (removed === UNCACHED ? defaultItemSize : removed),
          0,
        );
      }
    },
    $estimateDefaultSize: (startIndex) => {
      let measuredCountBeforeStart = 0;
      // This function will be called after measurement so measured size array must be longer than 0
      const measuredSizes: number[] = [];
      sizes.forEach((s, i) => {
        if (s !== UNCACHED) {
          measuredSizes.push(s);
          if (i < startIndex) {
            measuredCountBeforeStart++;
          }
        }
      });

      // Discard cache for now
      computedOffsetIndex = -1;

      // Calculate median
      const sorted = sort(measuredSizes);
      const len = sorted.length;
      const mid = (len / 2) | 0;
      const median =
        len % 2 === 0 ? (sorted[mid - 1]! + sorted[mid]!) / 2 : sorted[mid]!;

      const prevDefaultItemSize = defaultItemSize;

      // Calculate diff of unmeasured items before start
      return (
        ((defaultItemSize = median) - prevDefaultItemSize) *
        max(startIndex - measuredCountBeforeStart, 0)
      );
    },
    $snapshot: () => [sizes.slice(), defaultItemSize],
  };
};
