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
  $setAxis(
    sizes: GridAxisSizes | number | null,
    scrollOffset: number,
  ): number | undefined;
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

  let computedOffsetIndex = -1;
  let header = 0;
  let footer = 0;
  let currentSizes: GridAxisSizes | null = NULL;

  // The tracks have their own sizes once one of them leaves the default size, so the tracks of a uniform axis never have them.
  const sizes: number[] = [];
  // The offsets are filled as far as they are computed.
  const offsets: number[] = [];
  // Whether each item was auto when the axis was set, as the items may be mutated after that.
  const autos: boolean[] = [];

  const isMeasurable = (index: number): boolean => isAuto || !!autos[index];

  const materialize = () => {
    if (!sizes.length) {
      fill(sizes, length);
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

  const setSize = (index: number, size: number) => {
    sizes[index] = size;
    // mark as dirty
    computedOffsetIndex = min(index, computedOffsetIndex);
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
    $getItemSize: (index) =>
      (sizes.length ? getSize(index) : defaultItemSize) - gap,
    // A measurement may come for an item given a size after it's rendered.
    $setItemSize: (index, size) => {
      if (!isMeasurable(index)) {
        return false;
      }
      materialize();
      const isInitialMeasurement = sizes[index] === UNCACHED;
      setSize(index, size + gap);
      return isInitialMeasurement;
    },
    $isSizeEqual: (index, size) =>
      (sizes.length ? sizes[index] : UNCACHED) === size! + gap,
    $getTotalSize: () => (length ? getOffset(length) - gap : 0),
    $getLength: () => length,
    $setLength: (nextLength) => {
      const diff = nextLength - length;

      computedOffsetIndex = min(nextLength - 1, computedOffsetIndex);
      length = nextLength;

      if (sizes.length) {
        if (diff > 0) {
          // Added
          fill(sizes, diff);
        } else {
          // Removed
          sizes.splice(diff);
        }
      }
      // The grid doesn't shift the items
      return 0;
    },
    $estimateDefaultSize: isAuto
      ? (startIndex) => {
          let measuredCountBeforeStart = 0;
          // This function will be called after measurement so measured size array must be longer than 0
          const measuredSizes: number[] = [];
          sizes.forEach((s, i) => {
            if (s !== UNCACHED) {
              // https://github.com/inokawa/virtua/issues/907
              if (s) {
                measuredSizes.push(s);
              }
              if (i < startIndex) {
                measuredCountBeforeStart++;
              }
            }
          });

          // Discard cache for now
          computedOffsetIndex = -1;

          // Calculate median
          sort(measuredSizes);
          const len = measuredSizes.length;
          const mid = (len / 2) | 0;
          const median =
            len % 2 === 0
              ? (measuredSizes[mid - 1]! + measuredSizes[mid]!) / 2
              : measuredSizes[mid]!;

          const prevDefaultItemSize = defaultItemSize;

          // Calculate diff of unmeasured items before start
          return (
            ((defaultItemSize = median) - prevDefaultItemSize) *
            max(startIndex - measuredCountBeforeStart, 0)
          );
        }
      : undefined,
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
    $setAxis: (nextSizes, scrollOffset) => {
      if (nextSizes == NULL) {
        return;
      }
      if (typeof nextSizes === "number") {
        const nextDefaultItemSize = nextSizes + gap;
        if (nextDefaultItemSize === defaultItemSize) {
          return;
        }
        const jump =
          find(scrollOffset) * (nextDefaultItemSize - defaultItemSize);
        defaultItemSize = nextDefaultItemSize;
        return jump;
      }
      // The sizes are made again when the items change, so the same sizes are the same.
      if (nextSizes === currentSizes && length === autos.length) {
        return;
      }
      currentSizes = nextSizes;
      autos.length = length;
      materialize();

      const anchorIndex = find(scrollOffset);
      const prevOffset = getOffset(anchorIndex);
      let changed: boolean | undefined;
      for (let i = 0; i < length; i++) {
        const itemSize = nextSizes[i];
        const isAutoItem = typeof itemSize !== "number";
        // An item which was auto keeps its measured size.
        if (!isAutoItem || !autos[i]) {
          autos[i] = isAutoItem;
          const target = isAutoItem ? UNCACHED : itemSize + gap;
          if (sizes[i] !== target) {
            setSize(i, target);
            changed = true;
          }
        }
      }
      if (!changed) {
        return;
      }
      return getOffset(anchorIndex) - prevOffset;
    },
  };
};
