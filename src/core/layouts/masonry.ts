import { UNCACHED, fill, findIndex } from "../cache.js";
import type { Layout } from "./types.js";
import type { CacheSnapshot } from "../types.js";
import { max, min, sort } from "../utils.js";

/**
 * @internal
 */
export interface MasonryLayout extends Layout {
  $snapshot(): CacheSnapshot;
  $relayout(lanes: number, gap: number | undefined): boolean;
  $getLanes(): number;
  $getGap(): number;
  $getItemLane(index: number): number;
}

/**
 * @internal
 */
export const createMasonryLayout = (
  length: number,
  lanesOpt: number,
  gap: number = 0,
  itemSize?: number | undefined,
  snapshot?: CacheSnapshot | undefined,
): MasonryLayout => {
  let lanes = max(lanesOpt, 1);
  let defaultItemSize = (snapshot && snapshot[1]) || itemSize || 40;
  let computedIndex = -1;
  // The items measured in the current lanes, which the size is estimated from
  let estimatingIndexes: Set<number> | undefined = itemSize
    ? undefined
    : new Set();
  // Only the first estimation is reported, as the buffer is skipped until it ends
  let isEstimating = !itemSize;

  const sizes: number[] = snapshot
    ? // https://github.com/inokawa/virtua/issues/441
      snapshot[0].slice(0, length)
    : [];
  fill(sizes, length - sizes.length);
  const offsets: number[] = [];
  const laneIndexes: number[] = [];
  // Running maximum of the bottoms of the items before the index, which never decrease
  const highs: number[] = [0];

  const getSize = (index: number): number => {
    const size = sizes[index]!;
    return size === UNCACHED ? defaultItemSize : size;
  };

  // The total size is read on every render, so all the items are placed at once
  const compute = () => {
    if (computedIndex >= length - 1) return;
    // The offsets of the next items in the lanes aren't kept, as they go stale when an item before them is resized
    const nextOffsets: number[] = [];
    const lastIndexes: number[] = [];
    for (let l = 0; l < lanes; l++) {
      nextOffsets.push(0);
      lastIndexes.push(-1);
    }
    for (let j = computedIndex, remaining = lanes; j >= 0 && remaining; j--) {
      const l = laneIndexes[j]!;
      if (lastIndexes[l] === -1) {
        lastIndexes[l] = j;
        nextOffsets[l] = offsets[j]! + getSize(j) + gap;
        remaining--;
      }
    }
    while (computedIndex < length - 1) {
      const i = ++computedIndex;
      // Break ties with the last item index to order items with equal sizes like a grid
      // https://github.com/TanStack/virtual/issues/654
      let lane = 0;
      let offset = Infinity;
      let lastIndex = Infinity;
      for (let l = 0; l < lanes; l++) {
        const candidate = nextOffsets[l]!;
        if (
          candidate < offset ||
          (candidate === offset && lastIndexes[l]! < lastIndex)
        ) {
          lane = l;
          offset = candidate;
          lastIndex = lastIndexes[l]!;
        }
      }
      const bottom = offset + getSize(i);
      offsets[i] = offset;
      laneIndexes[i] = lane;
      nextOffsets[lane] = bottom + gap;
      lastIndexes[lane] = i;
      highs[i + 1] = max(highs[i]!, bottom);
    }
  };

  const getOffset = (index: number): number => {
    if (index >= length) return getTotalSize();
    compute();
    return offsets[index]!;
  };
  const getHigh = (index: number): number => {
    compute();
    return highs[index]!;
  };
  const getTotalSize = (): number => getHigh(length);
  // The first item which ends after the offset
  const findStart = (offset: number): number =>
    findIndex(getHigh, length + 1, offset);

  return {
    $getRange: (startOffset, endOffset) => {
      // The offsets never decrease, as each item is placed into the shortest lane
      const end = findIndex(getOffset, length, endOffset);
      return [min(findStart(startOffset), end), end];
    },
    $findIndex: findStart,
    $getItemOffset: getOffset,
    $getItemSize: getSize,
    $isSizeEqual: (index, size = UNCACHED) => sizes[index] === size,
    $setItemSizes: (resizes, viewportSize) => {
      // Update item sizes
      for (const [index, size] of resizes) {
        sizes[index] = size;
        estimatingIndexes && estimatingIndexes.add(index);
        // mark the item as dirty too, as its running maximum includes its size
        computedIndex = min(index - 1, computedIndex);
      }
      // Estimate initial item size from measured sizes
      if (estimatingIndexes && viewportSize) {
        // This function will be called after measurement so measured size array must be longer than 0
        const measuredSizes: number[] = [];
        let totalMeasuredSize = 0;
        estimatingIndexes.forEach((index) => {
          const size = sizes[index]!;
          // https://github.com/inokawa/virtua/issues/907
          if (size > 0) {
            measuredSizes.push(size);
            // The gaps also fill the viewport
            totalMeasuredSize += size + gap;
          }
        });

        // If the total size is lower than the viewport size of all lanes in total, the item may be a empty state
        if (totalMeasuredSize > viewportSize * lanes) {
          // Calculate median
          sort(measuredSizes);
          const len = measuredSizes.length;
          const mid = (len / 2) | 0;
          defaultItemSize =
            len % 2 === 0
              ? (measuredSizes[mid - 1]! + measuredSizes[mid]!) / 2
              : measuredSizes[mid]!;
          // Discard cache for now
          computedIndex = -1;
          estimatingIndexes = undefined;
          isEstimating = false;
        }
      }
    },
    $getTotalSize: getTotalSize,
    $getLength: () => length,
    $setLength: (nextLength) => {
      // Shift is not supported yet
      const diff = nextLength - length;
      computedIndex = min(nextLength - 1, computedIndex);
      length = nextLength;
      if (diff > 0) {
        fill(sizes, diff);
      } else {
        sizes.splice(diff);
      }
    },
    $relayout: (nextLanes, nextGap = 0) => {
      nextLanes = max(nextLanes, 1);
      if (nextLanes === lanes && nextGap === gap) {
        return false;
      }
      lanes = nextLanes;
      gap = nextGap;
      computedIndex = -1;
      // The sizes of items, such as images keeping their aspect ratios, may depend on the width of the lanes, so estimate again from the items measured in the new lanes
      estimatingIndexes = itemSize ? undefined : new Set();
      return true;
    },
    $isEstimating: () => isEstimating,
    $snapshot: () => [sizes.slice(), defaultItemSize],
    $getLanes: () => lanes,
    $getGap: () => gap,
    $getItemLane: (index) => {
      compute();
      return laneIndexes[index]!;
    },
  };
};
