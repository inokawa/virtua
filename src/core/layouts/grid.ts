import { UNCACHED } from "../cache.js";
import { createListLayout } from "./list.js";
import type { Layout } from "./types.js";
import { clamp, floor, NULL } from "../utils.js";

export type GridTrackSize = number | "auto";

/**
 * The rows or the columns of the grid.
 *
 * - If a number is set, the grid has that many rows/columns, and the cells receive their indexes.
 * - If an array is set, the grid has one row/column per item, and the cells receive the items.
 */
export type GridAxis<T = number> = number | readonly T[];

export type GridSizeKey<T> = [T] extends [object]
  ? {
      [K in keyof T]-?: K extends string
        ? T[K] extends GridTrackSize | null | undefined
          ? K
          : never
        : never;
    }[keyof T]
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
 * @internal
 */
export interface GridLayout extends Layout {
  $isMeasurable(index: number): boolean;
  $setAxis(
    axis: GridAxis<unknown>,
    size: GridTrackSize | string,
    scrollOffset: number,
    mutable?: boolean,
  ): number | undefined;
}

/**
 * @internal
 */
export const createGridLayout = (
  axis: GridAxis<unknown>,
  size: GridTrackSize | string,
  gap = 0,
): GridLayout => {
  if (typeof size === "number") {
    let length = getAxisLength(axis);
    let itemSize = size;
    const findIndex = (offset: number): number =>
      // 0 / 0 is NaN, which can cause infinite rerender
      itemSize + gap
        ? clamp(floor(offset / (itemSize + gap)), 0, length - 1)
        : 0;

    return {
      $getRange: (startOffset, endOffset) => [
        findIndex(startOffset),
        findIndex(endOffset),
      ],
      $findIndex: findIndex,
      $getItemOffset: (index) => index * (itemSize + gap),
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
      $setAxis: (_axis, nextSize, scrollOffset) => {
        if (typeof nextSize !== "number" || nextSize === itemSize) {
          return;
        }
        const jump = findIndex(scrollOffset) * (nextSize - itemSize);
        itemSize = nextSize;
        return jump;
      },
    };
  }
  const isAuto = size === "auto";
  let currentAxis: GridAxis<unknown> | undefined;
  let currentSize: GridTrackSize | string = size;
  const length = getAxisLength(axis);

  // Whether each item was auto when the axis was set, as the items may be mutated after that.
  const autos: boolean[] = [];
  // The sizes inside include the gap after the track, and so does the default size.
  // The default size is given as a snapshot, because a size given to the layout would fix it and drop the estimation.
  const inner = createListLayout(length, undefined, [[], 40 + gap]);

  const isMeasurable = (index: number): boolean => isAuto || !!autos[index];

  const layout: GridLayout = {
    $getRange: inner.$getRange,
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
    $setAxis: (nextAxis, requestedSize, scrollOffset, mutable) => {
      if (isAuto) {
        return;
      }
      // The form of the size is fixed at mount, so a size of another form is ignored.
      const nextSize =
        typeof requestedSize === "number" || requestedSize === "auto"
          ? currentSize
          : requestedSize;
      const length = inner.$getLength();
      // The items of the same axis are the same, unless they may be mutated in place.
      if (
        !mutable &&
        nextAxis === currentAxis &&
        nextSize === currentSize &&
        length === autos.length
      ) {
        return;
      }
      currentAxis = nextAxis;
      currentSize = nextSize;
      autos.length = length;

      const anchorIndex = inner.$findIndex(scrollOffset);
      const prevOffset = inner.$getItemOffset(anchorIndex);
      let changed: boolean | undefined;
      for (let i = 0; i < length; i++) {
        const item = (nextAxis as readonly unknown[])[i];
        // An item which isn't an object, such as a placeholder of a header row, has no size.
        const itemSize =
          item !== NULL && typeof item === "object"
            ? (item as Record<string, GridTrackSize | null | undefined>)[
                nextSize as string
              ]
            : NULL;
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
  layout.$setAxis(axis, size, 0);
  return layout;
};
