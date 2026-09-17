import type { Snippet } from "svelte";
import type {
  VGridScrollOffset,
  VGridScrollToIndexOpts,
  VGridAxis,
  VGridCell,
  VGridPinned,
  VGridSize,
  VGridSpan,
} from "../core/index.js";
import type { ViewportComponentAttributes } from "./types.js";

/**
 * Props of {@link VGrid}.
 */
export interface VGridProps<R = number, C = number> extends Omit<
  ViewportComponentAttributes,
  "role"
> {
  /**
   * A snippet to create cell elements rendered by this component.
   * @param row the item of {@link VGridProps.rows} at the row of the cell, or the row index if {@link VGridProps.rows} is a number
   * @param col the item of {@link VGridProps.cols} at the column of the cell, or the column index if {@link VGridProps.cols} is a number
   * @param cell the row index and the column index of the cell
   */
  children: Snippet<[row: R, col: C, cell: Readonly<VGridCell>]>;
  /**
   * The rows of the grid. See {@link VGridAxis} for the accepted values.
   */
  rows: VGridAxis<R>;
  /**
   * The columns of the grid. See {@link VGridAxis} for the accepted values.
   */
  cols: VGridAxis<C>;
  /**
   * The heights of the rows. See {@link VGridSize} for the accepted values.
   */
  rowHeight: NoInfer<VGridSize<R>>;
  /**
   * The widths of the columns. See {@link VGridSize} for the accepted values.
   */
  colWidth: NoInfer<VGridSize<C>>;
  /**
   * The number of rows pinned to the edges of the viewport. See {@link VGridPinned} for the accepted values.
   *
   * **The pinned cells are rendered over the other cells, so give them an opaque background.**
   * @defaultValue 0
   */
  pinnedRows?: VGridPinned;
  /**
   * The number of columns pinned to the edges of the viewport. See {@link VGridPinned} for the accepted values.
   *
   * **The pinned cells are rendered over the other cells, so give them an opaque background.**
   * @defaultValue 0
   */
  pinnedCols?: VGridPinned;
  /**
   * Cells merged over multiple rows and/or columns. See {@link VGridSpan} for the accepted values.
   *
   * The cell at the origin is stretched over the merged area, and the other cells in it are not rendered. Spans must not overlap each other or cross the boundary of the pinned rows/columns. A spanning cell is not measured for `"auto"` sizes on the axes it spans, and doesn't enlarge those tracks.
   */
  spans?: readonly VGridSpan[];
  /**
   * List of cells that should be always mounted, even when off screen.
   */
  keepMounted?: readonly VGridCell[];
  /**
   * Extra space in pixels to render before/after the viewport. The minimum value is 0. Lower value will give better performance but you can increase to avoid showing blank cells in fast scrolling.
   * @defaultValue 200
   */
  bufferSize?: number;
  /**
   * The gap between the rows and the columns in pixels, which is not included in the sizes. Must not be changed after mount.
   * @defaultValue 0
   */
  gap?: number;
  /**
   * Indexes of the rows whose cells are column headers (`role="columnheader"`).
   * @defaultValue the rows pinned to the start by {@link VGridProps.pinnedRows}
   */
  ariaColumnHeader?: readonly number[];
  /**
   * Indexes of the columns whose cells are row headers (`role="rowheader"`).
   */
  ariaRowHeader?: readonly number[];
  /**
   * The header cell of the sorted column or row, and the sort order (`aria-sort`).
   */
  ariaSort?: VGridCell & { order: "ascending" | "descending" | "other" };
  /**
   * Callback invoked whenever the vertical scroll offset changes.
   * @param offset Current scrollTop.
   */
  onverticalscroll?: (offset: number) => void;
  /**
   * Callback invoked whenever the horizontal scroll offset changes.
   * @param offset Current scrollLeft. Always positive even in RTL.
   */
  onhorizontalscroll?: (offset: number) => void;
  /**
   * Callback invoked when scrolling stops.
   */
  onscrollend?: () => void;
}

/**
 * Methods of {@link VGrid}.
 */
export interface VGridHandle {
  /**
   * Get current scrollTop.
   */
  getVerticalScrollOffset(): number;
  /**
   * Get current scrollLeft. Always positive even in RTL.
   */
  getHorizontalScrollOffset(): number;
  /**
   * Get current scrollHeight.
   */
  getScrollHeight(): number;
  /**
   * Get current scrollWidth.
   */
  getScrollWidth(): number;
  /**
   * Get current clientHeight.
   */
  getViewportHeight(): number;
  /**
   * Get current clientWidth.
   */
  getViewportWidth(): number;
  /**
   * Find nearest row index from offset.
   * @param offset offset in pixels from the top of the scroll container
   */
  findRowIndex(offset: number): number;
  /**
   * Find nearest column index from offset.
   * @param offset offset in pixels from the start of the scroll container
   */
  findColIndex(offset: number): number;
  /**
   * Get offset of the row from the top.
   * @param index index of row
   */
  getRowOffset(index: number): number;
  /**
   * Get offset of the column from the start.
   * @param index index of column
   */
  getColOffset(index: number): number;
  /**
   * Get size of the row.
   * @param index index of row
   */
  getRowSize(index: number): number;
  /**
   * Get size of the column.
   * @param index index of column
   */
  getColSize(index: number): number;
  /**
   * Scroll to the cell specified by the indexes. The cell is not hidden behind the pinned cells.
   * @param opts the indexes of the cell and the options. See {@link VGridScrollToIndexOpts}.
   */
  scrollToIndex(opts: VGridScrollToIndexOpts): void;
  /**
   * Scroll to the given offsets from the top/start of the scroll container.
   * @param offset the offsets. See {@link VGridScrollOffset}.
   */
  scrollTo(offset: VGridScrollOffset): void;
  /**
   * Scroll by the given offsets from the current position.
   * @param offset the offsets. See {@link VGridScrollOffset}.
   */
  scrollBy(offset: VGridScrollOffset): void;
}
