import { UNCACHED, fill, findIndex } from "../cache.js";
import type { Layout } from "./types.js";
import type { CacheSnapshot } from "../types.js";
import { max, min, sort } from "../utils.js";

/**
 * @internal
 */
export interface MasonryLayout extends Layout<undefined> {
  $snapshot(): CacheSnapshot;
  $setOptions(lanes: number, gap?: number): void;
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
  // Applied on relayout, which keeps the item at the scroll offset in place
  let nextLanes = lanes;
  let nextGap = gap;
  let defaultItemSize = (snapshot && snapshot[1]) || itemSize || 40;
  let computedIndex = -1;
  // The items measured in the current lanes, which the size is estimated from
  let estimatingIndexes: Set<number> | undefined = itemSize
    ? undefined
    : new Set();
  // Only the first estimation is reported, as the buffer is skipped until it ends
  let isEstimating = !itemSize;

  const restoredSizes = snapshot && snapshot[0];
  const sizes: number[] = restoredSizes
    ? // https://github.com/inokawa/virtua/issues/441
      fill(
        restoredSizes.slice(0, min(length, restoredSizes.length)),
        max(0, length - restoredSizes.length),
      )
    : fill([], length);
  const offsets: number[] = [];
  const laneIndexes: number[] = [];
  // Running maximum of the bottoms, which never decrease
  const highs: number[] = [];

  const getSize = (index: number): number => {
    const size = sizes[index]!;
    return size === UNCACHED ? defaultItemSize : size;
  };

  const compute = (index: number) => {
    index = min(index, length - 1);
    if (computedIndex >= index) return;
    // Lane bottoms aren't kept, as they go stale when an item before them is resized
    const bottoms: number[] = [];
    const lastIndexes: number[] = [];
    for (let l = 0; l < lanes; l++) {
      bottoms.push(0);
      lastIndexes.push(-1);
    }
    for (let j = computedIndex, remaining = lanes; j >= 0 && remaining; j--) {
      const l = laneIndexes[j]!;
      if (lastIndexes[l] === -1) {
        lastIndexes[l] = j;
        bottoms[l] = offsets[j]! + getSize(j);
        remaining--;
      }
    }
    while (computedIndex < index) {
      const i = ++computedIndex;
      // Break ties with the last item index to order items with equal sizes like a grid
      // https://github.com/TanStack/virtual/issues/654
      let lane = 0;
      let offset = Infinity;
      let lastIndex = Infinity;
      for (let l = 0; l < lanes; l++) {
        const candidate = bottoms[l]! + (lastIndexes[l]! >= 0 ? gap : 0);
        if (
          candidate < offset ||
          (candidate === offset && lastIndexes[l]! < lastIndex)
        ) {
          lane = l;
          offset = candidate;
          lastIndex = lastIndexes[l]!;
        }
      }
      offsets[i] = offset;
      laneIndexes[i] = lane;
      bottoms[lane] = offset + getSize(i);
      lastIndexes[lane] = i;
      highs[i] = max(i ? highs[i - 1]! : 0, bottoms[lane]!);
    }
  };

  const getOffset = (index: number): number => {
    if (index >= length) return getTotalSize();
    compute(index);
    return offsets[index]!;
  };
  const getHigh = (index: number): number => {
    compute(index);
    return highs[index]!;
  };
  const getTotalSize = (): number => (length ? getHigh(length - 1) : 0);
  // The first item which ends after the offset
  const findStart = (offset: number): number => {
    if (!length) return 0;
    const index = findIndex(getHigh, length, offset);
    return getHigh(index) <= offset ? index + 1 : index;
  };

  return {
    $getRange: (startOffset, endOffset) => {
      // The offsets never decrease, as each item is placed into the shortest lane
      const end = findIndex(getOffset, length, endOffset);
      return [min(findStart(startOffset), end), end];
    },
    $findIndex: (offset) => findIndex(getOffset, length, offset),
    $getItemOffset: getOffset,
    $getItemSize: getSize,
    $isSizeEqual: (index, size = UNCACHED) => sizes[index] === size,
    $resize: (resizes, shouldKeep, scrollOffset, viewportSize) => {
      // The jump is the displacement of the first item not to keep, as the viewport can keep only one item in place
      let anchorIndex = findStart(scrollOffset);
      while (anchorIndex > 0 && !shouldKeep(anchorIndex - 1)) {
        anchorIndex--;
      }
      while (anchorIndex < length && shouldKeep(anchorIndex)) {
        anchorIndex++;
      }
      const prevAnchorOffset = getOffset(anchorIndex);
      // Update item sizes
      for (const [index, size] of resizes) {
        sizes[index] = size;
        estimatingIndexes && estimatingIndexes.add(index);
        // mark the item as dirty too, as its running maximum includes its size
        computedIndex = min(index - 1, computedIndex);
      }
      let jump = getOffset(anchorIndex) - prevAnchorOffset;
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
          const median =
            len % 2 === 0
              ? (measuredSizes[mid - 1]! + measuredSizes[mid]!) / 2
              : measuredSizes[mid]!;

          // Keep the item at the visible offset in place, as the unmeasured items before it are laid out again with the estimated size
          const startIndex = findStart(scrollOffset + jump);
          const prevStartOffset = getOffset(startIndex);
          defaultItemSize = median;
          // Discard cache for now
          computedIndex = -1;
          jump += getOffset(startIndex) - prevStartOffset;
          estimatingIndexes = undefined;
          isEstimating = false;
        }
      }
      return jump;
    },
    $getTotalSize: getTotalSize,
    $getLength: () => length,
    $setLength: (nextLength) => {
      const diff = nextLength - length;
      computedIndex = min(nextLength - 1, computedIndex);
      length = nextLength;
      if (diff > 0) {
        fill(sizes, diff);
      } else {
        sizes.splice(diff);
      }
      // Shift is not supported
      return 0;
    },
    $relayout: (_, scrollOffset) => {
      if (nextLanes === lanes && nextGap === gap) {
        return;
      }
      const startIndex = findStart(scrollOffset);
      const prevStartOffset = getOffset(startIndex);
      lanes = nextLanes;
      gap = nextGap;
      computedIndex = -1;
      // The sizes of items, such as images keeping their aspect ratios, may depend on the width of the lanes, so estimate again from the items measured in the new lanes
      estimatingIndexes = itemSize ? undefined : new Set();
      return getOffset(startIndex) - prevStartOffset;
    },
    $setOptions: (lanes, gap = 0) => {
      nextLanes = max(lanes, 1);
      nextGap = gap;
    },
    $isEstimating: () => isEstimating,
    $snapshot: () => [sizes.slice(), defaultItemSize],
    $getLanes: () => lanes,
    $getGap: () => gap,
    $getItemLane: (index) => {
      compute(index);
      return laneIndexes[index]!;
    },
  };
};
