import { UNCACHED } from "../cache.js";
import { createListLayout } from "./list.js";
import type { Layout } from "./types.js";
import type { ItemsRange } from "../types.js";
import { clamp, floor, max, min, NULL } from "../utils.js";

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
export interface GridLayout<
  S extends GridAxisSizes | number | null = GridAxisSizes | number | null,
> extends Layout {
  $isMeasurable(index: number): boolean;
  $setPinned(header?: number, footer?: number): void;
  $getPinnedStart(): number;
  $getTrailStart(): number;
  // The sizes the layout takes from the axis, which are read only by the layout
  $getSizes(axis: GridAxis<unknown>, size: GridTrackSize | string): S;
  $setAxis(sizes: S, scrollOffset: number): number | undefined;
}

/**
 * @internal
 */
export const createGridLayout = (
  axis: GridAxis<unknown>,
  size: GridTrackSize | string,
  gap: number = 0,
): GridLayout => {
  let header = 0;
  let footer = 0;
  const setPinned = (nextHeader: number = 0, nextFooter: number = 0) => {
    header = nextHeader;
    footer = nextFooter;
  };
  const getPinnedStart = (length: number): number => min(header, length);
  const getTrailStart = (length: number): number =>
    max(length - footer, getPinnedStart(length));
  const pinRange = (
    getRange: Layout["$getRange"],
    getOffset: Layout["$getItemOffset"],
    length: number,
    startOffset: number,
    endOffset: number,
  ): ItemsRange => {
    // The tracks pinned to the edges stick over the viewport, so the tracks behind them are never seen and the range covers only the tracks between them.
    const insetStart = getOffset(getPinnedStart(length));
    const insetEnd = getOffset(length) - getOffset(getTrailStart(length));
    // The bands of the pinned tracks don't cover the gaps after them, so the gap the insets include is given back.
    const start = startOffset + (insetStart ? insetStart - gap : 0);
    return getRange(
      start,
      // The range covers one track if the pinned tracks are thicker than the viewport.
      max(start, endOffset - (insetEnd ? insetEnd - gap : 0)),
    );
  };

  if (typeof size === "number") {
    let length = getAxisLength(axis);
    let itemSize = size;
    const findIndex = (offset: number): number =>
      // 0 / 0 is NaN, which can cause infinite rerender
      itemSize + gap
        ? clamp(floor(offset / (itemSize + gap)), 0, length - 1)
        : 0;
    const getItemOffset = (index: number): number => index * (itemSize + gap);
    const findRange: Layout["$getRange"] = (startOffset, endOffset) => [
      findIndex(startOffset),
      findIndex(endOffset),
    ];
    return {
      $getRange: (startOffset, endOffset) =>
        pinRange(findRange, getItemOffset, length, startOffset, endOffset),
      $findIndex: findIndex,
      $getItemOffset: getItemOffset,
      $getItemSize: () => itemSize,
      // The cells of a uniform axis are not measured
      $setItemSize: () => false,
      $isSizeEqual: () => false,
      $getTotalSize: () => (length ? length * (itemSize + gap) - gap : 0),
      $getLength: () => length,
      $setLength: (nextLength) => {
        length = nextLength;
        // The grid doesn't shift the items
        return 0;
      },
      $isMeasurable: () => false,
      $setPinned: setPinned,
      $getPinnedStart: () => getPinnedStart(length),
      $getTrailStart: () => getTrailStart(length),
      $getSizes: (_axis, nextSize) =>
        typeof nextSize === "number" ? nextSize : NULL,
      $setAxis: (nextSize: number | null, scrollOffset) => {
        if (nextSize == NULL || nextSize === itemSize) {
          return;
        }
        const jump = findIndex(scrollOffset) * (nextSize - itemSize);
        itemSize = nextSize;
        return jump;
      },
    };
  }
  const isAuto = size === "auto";
  let currentSizes: GridAxisSizes | null = NULL;

  // Whether each item was auto when the axis was set, as the items may be mutated after that.
  const autos: boolean[] = [];
  // The sizes inside include the gap after the track, and so does the default size.
  // The default size is given as a snapshot, because a size given to the layout would fix it and drop the estimation.
  const inner = createListLayout(getAxisLength(axis), undefined, [
    [],
    40 + gap,
  ]);

  const isMeasurable = (index: number): boolean => isAuto || !!autos[index];
  return {
    $getRange: (startOffset, endOffset) =>
      pinRange(
        inner.$getRange,
        inner.$getItemOffset,
        inner.$getLength(),
        startOffset,
        endOffset,
      ),
    $findIndex: inner.$findIndex,
    $getItemOffset: inner.$getItemOffset,
    $getItemSize: (index) => inner.$getItemSize(index) - gap,
    // A measurement may come for an item given a size after it's rendered.
    $setItemSize: (index, s) =>
      isMeasurable(index) && inner.$setItemSize(index, s + gap),
    $isSizeEqual: (index, s) => inner.$isSizeEqual(index, s! + gap),
    $getTotalSize: () => (inner.$getLength() ? inner.$getTotalSize() - gap : 0),
    $getLength: inner.$getLength,
    $setLength: inner.$setLength,
    $estimateDefaultSize: isAuto ? inner.$estimateDefaultSize : undefined,
    $isMeasurable: isMeasurable,
    $setPinned: setPinned,
    $getPinnedStart: () => getPinnedStart(inner.$getLength()),
    $getTrailStart: () => getTrailStart(inner.$getLength()),
    // The form of the size is fixed at mount, so a size of another form is ignored.
    $getSizes: (nextAxis, nextSize) =>
      isAuto || typeof nextSize !== "string" || nextSize === "auto"
        ? NULL
        : (nextAxis as readonly unknown[]).map((item) =>
            // An item may not have the key, such as a placeholder of a header row.
            item != NULL
              ? (item as Record<string, GridTrackSize | null | undefined>)[
                  nextSize
                ]
              : NULL,
          ),
    $setAxis: (nextSizes: GridAxisSizes | null, scrollOffset) => {
      if (!nextSizes) {
        return;
      }
      const length = inner.$getLength();
      // The sizes are made again when the items change, so the same sizes are the same.
      if (nextSizes === currentSizes && length === autos.length) {
        return;
      }
      currentSizes = nextSizes;
      autos.length = length;

      const anchorIndex = inner.$findIndex(scrollOffset);
      const prevOffset = inner.$getItemOffset(anchorIndex);
      let changed: boolean | undefined;
      for (let i = 0; i < length; i++) {
        const itemSize = nextSizes[i];
        const isAutoItem = typeof itemSize !== "number";
        // An item which was auto keeps its measured size.
        if (!isAutoItem || !autos[i]) {
          autos[i] = isAutoItem;
          const target = isAutoItem ? UNCACHED : itemSize + gap;
          if (!inner.$isSizeEqual(i, target)) {
            inner.$setItemSize(i, target);
            changed = true;
          }
        }
      }
      if (!changed) {
        return;
      }
      return inner.$getItemOffset(anchorIndex) - prevOffset;
    },
  };
};
