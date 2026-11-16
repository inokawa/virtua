import { UNCACHED, fill, findIndex } from "../cache.js";
import type { Layout } from "./types.js";
import { clamp, floor, max, min, NULL, sort } from "../utils.js";

export type GridTrackSize = number | "auto";

/**
 * The rows or the columns of the grid.
 *
 * - If a number is set, the grid has that many rows/columns, and the cells receive their indexes.
 * - If an array is set, the grid has one row/column per item, and the cells receive the items.
 */
export type GridAxis<T = number> = number | readonly T[];

type GridSizeFields<T> = {
  [
    K in Extract<keyof T, string> as T[K] extends
      GridTrackSize | null | undefined
      ? K
      : never
  ]: 0;
};

export type GridSizeKey<T> = [T] extends [object]
  ? keyof GridSizeFields<T>
  : never;

/**
 * The sizes of the rows or the columns in pixels.
 *
 * - A number is used as is, and never measured.
 * - `"auto"` fits the largest rendered cell. The auto columns also share the space left in the viewport, as the columns of a table.
 * - A key reads the size, a number or `"auto"`, from the item of each row/column, and a missing size is `"auto"`.
 *
 * The form of the size, a number, `"auto"` or a key, must not be changed after mount. To switch it, remount the grid.
 */
export type GridSize<T = number> = GridTrackSize | GridSizeKey<T>;

/**
 * @internal
 */
export const getAxisLength = (axis: GridAxis<unknown>): number =>
  typeof axis === "number" ? axis : axis.length;

/**
 * @internal
 */
export const getAxisItem = <T>(axis: GridAxis<T>, index: number): T =>
  typeof axis === "number" ? (index as T) : axis[index]!;

/**
 * The sizes the items hold at the key.
 * @internal
 */
export type GridAxisSizes = readonly (GridTrackSize | null | undefined)[];

/**
 * @internal
 */
export interface GridLayout extends Layout {
  $isMeasurable(index: number): boolean;
  $setPinned(header?: number, footer?: number): void;
  $getPinnedStart(): number;
  $getTrailStart(): number;
  // The sizes the layout takes from the axis, which are read only by the layout
  $getSizes(
    axis: GridAxis<unknown>,
    size: GridTrackSize | string,
  ): GridAxisSizes | number | null;
  $relayout(sizes: GridAxisSizes | number | null): boolean;
}

/**
 * @internal
 */
export const createGridLayout = (
  axis: GridAxis<unknown>,
  size: GridTrackSize | string,
  gap: number = 0,
): GridLayout => {
  let length = getAxisLength(axis);
  const isUniform = typeof size === "number";
  const isAuto = size === "auto";
  // The sizes inside include the gap after the track, and so does the default size.
  let defaultItemSize = (isUniform ? size : 40) + gap;

  let _totalMeasuredSize = 0;
  let shouldAutoEstimateItemSize = isAuto;
  let header = 0;
  let footer = 0;
  let currentSizes: GridAxisSizes | null = NULL;

  // The tracks have their own sizes once one of them leaves the default size, so the tracks of a uniform axis never have them.
  const sizes: number[] = [];
  // A 1-indexed tree of the sizes, which offsets[0] only pads.
  // https://en.wikipedia.org/wiki/Fenwick_tree
  const offsets: number[] = [0];
  // Whether each item was auto when the axis was set, as the items may be flag after that.
  const autos: boolean[] = [];

  const isMeasurable = (index: number): boolean => isAuto || !!autos[index];

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

  const materialize = () => {
    if (!sizes.length) {
      fill(sizes, length);
      buildOffsets(1);
    }
  };

  const getSize = (index: number): number => {
    const size = sizes[index]!;
    return size === UNCACHED ? defaultItemSize : size;
  };

  const getOffset = (index: number): number => {
    if (!length) return 0;
    if (!sizes.length) {
      return index * defaultItemSize;
    }
    let sum = 0;
    for (; index > 0; index -= index & -index) {
      sum += offsets[index]!;
    }
    return sum;
  };

  const find = (offset: number): number =>
    sizes.length
      ? findIndex(getOffset, length, offset)
      : // 0 / 0 is NaN, which can cause infinite rerender
        defaultItemSize
        ? clamp(floor(offset / defaultItemSize), 0, length - 1)
        : 0;

  const getPinnedStart = (): number => min(header, length);
  const getTrailStart = (): number => max(length - footer, getPinnedStart());

  const getItemSize = (index: number): number =>
    (sizes.length ? getSize(index) : defaultItemSize) - gap;

  return {
    $getRange: (startOffset, endOffset) => {
      // The tracks pinned to the edges stick over the viewport, so the tracks behind them are never seen and the range covers only the tracks between them.
      const insetStart = getOffset(getPinnedStart());
      const insetEnd = getOffset(length) - getOffset(getTrailStart());
      // The bands of the pinned tracks don't cover the gaps after them, so the gap the insets include is given back.
      const start = startOffset + (insetStart ? insetStart - gap : 0);
      return [
        find(start),
        // The range covers one track if the pinned tracks are thicker than the viewport.
        find(max(start, endOffset - (insetEnd ? insetEnd - gap : 0))),
      ];
    },
    $findIndex: find,
    $getItemOffset: getOffset,
    $getItemSize: getItemSize,
    $setItemSizes: (resizes, viewportSize) => {
      // Update item sizes
      for (const [index, size] of resizes) {
        // A measurement may come for an item given a size after it's rendered.
        if (isMeasurable(index)) {
          materialize();
          const diff = size + gap - getSize(index);
          _totalMeasuredSize +=
            sizes[index] === UNCACHED ? size : size - getItemSize(index);
          sizes[index] = size + gap;
          for (let i = index + 1; i < offsets.length; i += i & -i) {
            offsets[i]! += diff;
          }
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
    $isSizeEqual: (index, size = UNCACHED) => {
      const cachedSize = sizes.length ? sizes[index] : UNCACHED;
      return size === UNCACHED
        ? isMeasurable(index) && cachedSize === UNCACHED
        : cachedSize === size + gap;
    },
    $getTotalSize: () => (length ? getOffset(length) - gap : 0),
    $getLength: () => length,
    $setLength: (nextLength) => {
      // Shift is not supported yet
      const diff = nextLength - length;
      length = nextLength;

      if (sizes.length) {
        if (diff >= 0) {
          // Added
          fill(sizes, diff);
        } else {
          // Removed
          sizes.splice(diff);
        }
        // offsets still ends at the old length here.
        buildOffsets(offsets.length);
      }
    },
    $isEstimating: () => shouldAutoEstimateItemSize,
    $isMeasurable: isMeasurable,
    $setPinned: (nextHeader = 0, nextFooter = 0) => {
      header = nextHeader;
      footer = nextFooter;
    },
    $getPinnedStart: getPinnedStart,
    $getTrailStart: getTrailStart,
    // The form of the size is fixed at mount, so a size of another form is ignored.
    $getSizes: (nextAxis, nextSize) =>
      typeof nextSize === "number"
        ? isUniform
          ? nextSize
          : NULL
        : isUniform || isAuto || nextSize === "auto"
          ? NULL
          : (nextAxis as readonly unknown[]).map((item) =>
              // An item may not have the key, such as a placeholder of a header row.
              item != NULL
                ? (item as Record<string, GridTrackSize | null | undefined>)[
                    nextSize
                  ]
                : NULL,
            ),
    $relayout: (nextSizes) => {
      if (nextSizes == NULL) {
        return false;
      }
      if (typeof nextSizes === "number") {
        const nextDefaultItemSize = nextSizes + gap;
        if (nextDefaultItemSize === defaultItemSize) {
          return false;
        }
        defaultItemSize = nextDefaultItemSize;
        return true;
      }
      // The sizes are made again when the items change, so the same sizes are the same.
      if (nextSizes === currentSizes && length === autos.length) {
        return false;
      }
      currentSizes = nextSizes;
      autos.length = length;
      materialize();

      let changed = false;
      for (let i = 0; i < length; i++) {
        const itemSize = nextSizes[i];
        const isAutoItem = typeof itemSize !== "number";
        // An item which was auto keeps its measured size.
        if (!isAutoItem || !autos[i]) {
          autos[i] = isAutoItem;
          const target = isAutoItem ? UNCACHED : itemSize + gap;
          if (sizes[i] !== target) {
            sizes[i] = target;
            changed = true;
          }
        }
      }
      if (changed) {
        buildOffsets(1);
      }
      return changed;
    },
  };
};
