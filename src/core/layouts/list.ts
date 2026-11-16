import { UNCACHED, fill, findIndex } from "../cache.js";
import type { Layout } from "./types.js";
import type { CacheSnapshot } from "../types.js";
import { sort } from "../utils.js";
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
  itemSize?: number | undefined,
  snapshot?: CacheSnapshot | undefined,
): ListLayout => {
  let defaultItemSize = (snapshot && snapshot[1]) || itemSize || 40;

  let _totalMeasuredSize = 0;
  let shouldAutoEstimateItemSize = !itemSize;

  const sizes: number[] = snapshot
    ? // https://github.com/inokawa/virtua/issues/441
      snapshot[0].slice(0, length)
    : [];
  fill(sizes, length - sizes.length);
  // A 1-indexed tree of the sizes, which offsets[0] only pads.
  // https://en.wikipedia.org/wiki/Fenwick_tree
  const offsets: number[] = [0];

  const buildOffsets = (start: number) => {
    const end = sizes.length + 1;
    // The nodes before the start are kept, as a node depends only on the items up to it.
    for (let i = start; i < end; i++) {
      let sum = sizes[i - 1]!;
      if (sum === UNCACHED) {
        sum = defaultItemSize;
      }
      for (let j = 1; j < (i & -i); j <<= 1) {
        sum += offsets[i - j]!;
      }
      offsets[i] = sum;
    }
    // Truncated after the loop, as growing by setting at the length keeps the array packed.
    offsets.length = end;
  };
  buildOffsets(1);

  const getSize = (index: number): number => {
    const size = sizes[index]!;
    return size === UNCACHED ? defaultItemSize : size;
  };

  const getOffset = (index: number): number => {
    if (!length) return 0;
    let sum = 0;
    for (; index > 0; index -= index & -index) {
      sum += offsets[index]!;
    }
    return sum;
  };

  const find = (offset: number): number => findIndex(getOffset, length, offset);

  return {
    $getRange: (startOffset, endOffset) => [find(startOffset), find(endOffset)],
    $findIndex: find,
    $getItemOffset: getOffset,
    $getItemSize: getSize,
    $isSizeEqual: (index, size = UNCACHED) => sizes[index] === size,
    $setItemSizes: (resizes, viewportSize) => {
      // Update item sizes
      for (const [index, size] of resizes) {
        const diff = size - getSize(index);
        _totalMeasuredSize += sizes[index] === UNCACHED ? size : diff;
        sizes[index] = size;
        for (let i = index + 1; i < offsets.length; i += i & -i) {
          offsets[i]! += diff;
        }
      }
      // Estimate initial item size from measured sizes
      if (
        shouldAutoEstimateItemSize &&
        viewportSize &&
        // If the total size is lower than the viewport, the item may be a empty state
        _totalMeasuredSize > viewportSize
      ) {
        // This function will be called after measurement so measured size array must be longer than 0
        const measuredSizes = sort(
          // https://github.com/inokawa/virtua/issues/907
          sizes.filter((s) => s !== UNCACHED && s),
        );

        // Calculate median
        const len = measuredSizes.length;
        const mid = (len / 2) | 0;
        defaultItemSize =
          len % 2 === 0
            ? (measuredSizes[mid - 1]! + measuredSizes[mid]!) / 2
            : measuredSizes[mid]!;
        // The unmeasured items take the new default size.
        buildOffsets(1);
        shouldAutoEstimateItemSize = false;
      }
    },
    $getTotalSize: () => getOffset(length),
    $getLength: () => length,
    $setLength: (nextLength, isShift) => {
      const diff = nextLength - length;
      length = nextLength;

      if (diff >= 0) {
        // Added
        fill(sizes, diff, isShift);
      } else {
        // Removed
        sizes.splice(isShift ? 0 : diff, -diff);
      }
      // offsets still ends at the old length here, and a shift moves all the items.
      buildOffsets(isShift ? 1 : offsets.length);
    },
    $isEstimating: () => shouldAutoEstimateItemSize,
    $snapshot: () => [sizes.slice(), defaultItemSize],
  };
};
