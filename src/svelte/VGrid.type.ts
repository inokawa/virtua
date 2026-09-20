import type { Snippet } from "svelte";
import type {
  GridScrollToIndexOpts,
  GridAxis,
  GridCell,
  GridSize,
  GridSpan,
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
  children: Snippet<[row: R, col: C, cell: Readonly<GridCell>]>;
  /**
   * The rows of the grid. See {@link GridAxis} for the accepted values.
   */
  rows: GridAxis<R>;
  /**
   * The columns of the grid. See {@link GridAxis} for the accepted values.
   */
  cols: GridAxis<C>;
  /**
   * The heights of the rows. See {@link GridSize} for the accepted values.
   */
  rowHeight: GridSize<R>;
  /**
   * The widths of the columns. See {@link GridSize} for the accepted values.
   */
  colWidth: GridSize<C>;
  /**
   * The number of the leading rows pinned to the start, which are the column headers (`role="columnheader"`).
   *
   * **The pinned cells are rendered over the other cells, so give them an opaque background.**
   * @defaultValue 0
   */
  headerRows?: number;
  /**
   * Indexes of the rows which start sections. A section lasts until the next section row or the footer rows, and its first row sticks below the header rows while the section is scrolled through.
   *
   * **The section rows are rendered over the other cells while they stick, so give them an opaque background.**
   */
  sectionRows?: readonly number[];
  /**
   * The number of the trailing rows pinned to the end.
   *
   * **The pinned cells are rendered over the other cells, so give them an opaque background.**
   * @defaultValue 0
   */
  footerRows?: number;
  /**
   * The number of the leading columns pinned to the start, the last of which is the row header (`role="rowheader"`).
   *
   * **The pinned cells are rendered over the other cells, so give them an opaque background.**
   * @defaultValue 0
   */
  headerCols?: number;
  /**
   * The number of the trailing columns pinned to the end.
   *
   * **The pinned cells are rendered over the other cells, so give them an opaque background.**
   * @defaultValue 0
   */
  footerCols?: number;
  /**
   * Cells merged over multiple rows and/or columns. See {@link GridSpan} for the accepted values.
   *
   * The cell at the origin is stretched over the merged area, and the other cells in it are not rendered. Spans must not overlap each other or cross the boundaries of the pinned rows/columns or the sections. A spanning cell is not measured for `"auto"` sizes on the axes it spans, and doesn't enlarge those tracks.
   */
  spans?: readonly GridSpan[];
  /**
   * List of cells that should be always mounted, even when off screen.
   */
  keepMounted?: readonly GridCell[];
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
   * The header cell of the sorted column or row, and the sort order (`aria-sort`).
   */
  ariaSort?: GridCell & { order: "ascending" | "descending" | "other" };
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
   * Scroll to the cell specified by the indexes. The cell is not hidden behind the rows and the columns sticking over it.
   * @param opts the indexes of the cell and the options. See {@link GridScrollToIndexOpts}.
   */
  scrollToIndex(opts: GridScrollToIndexOpts): void;
  /**
   * Scroll to the given offsets from the top/start of the scroll container.
   * @param offset the offsets. The axis whose offset is omitted is not scrolled.
   */
  scrollTo(offset: { vertical?: number; horizontal?: number }): void;
  /**
   * Scroll by the given offsets from the current position.
   * @param offset the offsets. The axis whose offset is omitted is not scrolled.
   */
  scrollBy(offset: { vertical?: number; horizontal?: number }): void;
}
