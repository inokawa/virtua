import {
  type ReactElement,
  type ReactNode,
  type Ref,
  forwardRef,
  memo,
  useImperativeHandle,
  useReducer,
  useRef,
} from "react";
import {
  UPDATE_SCROLL_END_EVENT,
  UPDATE_SCROLL_EVENT,
  UPDATE_VIRTUAL_STATE,
  createContainerGridDriver,
  createGridLayout,
  createVirtualStore,
  type VGridAxis,
  type VGridCell,
  type VGridSize,
  type VGridSpan,
  getAxisItem,
  getScrollSize,
  gridScrollBy,
  gridScrollTo,
  gridScrollToIndex,
  updateGridAxis,
  type GridDriver,
  type VGridScrollOffset,
  type VGridScrollToIndexOpts,
  createGridPlan,
  type GridCellState,
  type GridRowGroupState,
  type GridRowState,
} from "../core/index.js";
import { useIsomorphicLayoutEffect } from "./useIsomorphicLayoutEffect.js";
import { refKey } from "./utils.js";
import { useStatic } from "./useStatic.js";
import { useLatestRef } from "./useLatestRef.js";
import { flushSync } from "react-dom";
import { type ViewportComponentAttributes } from "./types.js";

/**
 * Methods of {@link VGrid}.
 */
export interface VGridHandle {
  /**
   * Get current scrollTop.
   */
  readonly verticalScrollOffset: number;
  /**
   * Get current scrollLeft. Always positive even in RTL.
   */
  readonly horizontalScrollOffset: number;
  /**
   * Get current scrollHeight.
   */
  readonly scrollHeight: number;
  /**
   * Get current scrollWidth.
   */
  readonly scrollWidth: number;
  /**
   * Get current clientHeight.
   */
  readonly viewportHeight: number;
  /**
   * Get current clientWidth.
   */
  readonly viewportWidth: number;
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

/**
 * Props of {@link VGrid}.
 */
export interface VGridProps<R = number, C = number> extends Omit<
  ViewportComponentAttributes,
  "role"
> {
  /**
   * A function to create cell elements rendered by this component.
   * @param row the item of {@link VGridProps.rows} at the row of the cell, or the row index if {@link VGridProps.rows} is a number
   * @param col the item of {@link VGridProps.cols} at the column of the cell, or the column index if {@link VGridProps.cols} is a number
   * @param cell the row index and the column index of the cell
   */
  children: (row: R, col: C, cell: Readonly<VGridCell>) => ReactNode;
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
   * Cells merged over multiple rows and/or columns. See {@link VGridSpan} for the accepted values.
   *
   * The cell at the origin is stretched over the merged area, and the other cells in it are not rendered. Spans must not overlap each other or cross the boundaries of the pinned rows/columns or the sections. A spanning cell is not measured for `"auto"` sizes on the axes it spans, and doesn't enlarge those tracks.
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
   * The header cell of the sorted column or row, and the sort order (`aria-sort`).
   */
  ariaSort?: VGridCell & { order: "ascending" | "descending" | "other" };
  /**
   * Callback invoked whenever the vertical scroll offset changes.
   * @param offset Current scrollTop.
   */
  onVerticalScroll?: (offset: number) => void;
  /**
   * Callback invoked whenever the horizontal scroll offset changes.
   * @param offset Current scrollLeft. Always positive even in RTL.
   */
  onHorizontalScroll?: (offset: number) => void;
  /**
   * Callback invoked when scrolling stops.
   */
  onScrollEnd?: () => void;
}

interface GridCellProps {
  _state: GridCellState;
  _children: (
    row: unknown,
    col: unknown,
    cell: Readonly<VGridCell>,
  ) => ReactNode;
  _row: unknown;
  _col: unknown;
  _rowIndex: number;
  _resizer: GridDriver["$observeItem"];
}

const GridCell = /*#__PURE__*/ memo(
  ({
    _state: {
      $col: colIndex,
      $rowSpan: rowSpan,
      $colSpan: colSpan,
      $measureRow: measureRowIndex,
      $measureCol: measureColIndex,
      $role: role,
      $sort: sort,
      $style: style,
    },
    _children: children,
    _row: row,
    _col: col,
    _rowIndex: rowIndex,
    _resizer: resizer,
  }: GridCellProps): ReactElement => {
    const ref = useRef<HTMLDivElement>(null);

    useIsomorphicLayoutEffect(() => {
      if (measureRowIndex == null && measureColIndex == null) return;
      return resizer(ref[refKey]!, measureRowIndex, measureColIndex);
    }, [measureRowIndex, measureColIndex, resizer]);

    return (
      <div
        ref={ref}
        role={role}
        aria-colindex={colIndex + 1}
        aria-rowspan={rowSpan}
        aria-colspan={colSpan}
        aria-sort={sort}
        style={style}
      >
        {children(row, col, { rowIndex, colIndex })}
      </div>
    );
  },
);

interface GridRowProps {
  _state: GridRowState;
  _children: (
    row: unknown,
    col: unknown,
    cell: Readonly<VGridCell>,
  ) => ReactNode;
  _row: unknown;
  _cols: VGridAxis<unknown>;
  _resizer: GridDriver["$observeItem"];
}

const GridRow = /*#__PURE__*/ memo(
  ({
    _state: { $row: rowIndex, $cells: cells, $style: style },
    _children: children,
    _row: row,
    _cols: cols,
    _resizer: resizer,
  }: GridRowProps): ReactElement => (
    <div role="row" aria-rowindex={rowIndex + 1} style={style}>
      {cells.map((cell) => (
        <GridCell
          key={cell.$col}
          _state={cell}
          _children={children}
          _row={row}
          _col={getAxisItem(cols, cell.$col)}
          _rowIndex={rowIndex}
          _resizer={resizer}
        />
      ))}
    </div>
  ),
);

interface GridRowGroupProps {
  _state: GridRowGroupState;
  _children: (
    row: unknown,
    col: unknown,
    cell: Readonly<VGridCell>,
  ) => ReactNode;
  _rows: VGridAxis<unknown>;
  _cols: VGridAxis<unknown>;
  _resizer: GridDriver["$observeItem"];
}

const GridRowGroup = ({
  _state: { $rows: rowStates, $style: style },
  _children: children,
  _rows: rows,
  _cols: cols,
  _resizer: resizer,
}: GridRowGroupProps): ReactElement => (
  // https://www.w3.org/TR/wai-aria-1.2/#rowgroup
  <div role="rowgroup" style={style}>
    {rowStates.map((state) => (
      <GridRow
        key={state.$row}
        _state={state}
        _children={children}
        _row={getAxisItem(rows, state.$row)}
        _cols={cols}
        _resizer={resizer}
      />
    ))}
  </div>
);

/**
 * Virtualized grid component for tabular data. See {@link VGridProps} and {@link VGridHandle}.
 */
export const VGrid = /*#__PURE__*/ forwardRef<
  VGridHandle,
  VGridProps<unknown, unknown>
>(
  (
    {
      children,
      rows,
      cols,
      rowHeight,
      colWidth,
      headerRows,
      sectionRows,
      footerRows,
      headerCols,
      footerCols,
      spans,
      keepMounted,
      bufferSize,
      gap = 0,
      ariaSort,
      onVerticalScroll: onVerticalScrollProp,
      onHorizontalScroll: onHorizontalScrollProp,
      onScrollEnd: onScrollEndProp,
      style,
      ...attrs
    },
    ref,
  ): ReactElement => {
    const containerRef = useRef<HTMLDivElement>(null);
    const onVerticalScroll = useLatestRef(onVerticalScrollProp);
    const onHorizontalScroll = useLatestRef(onHorizontalScrollProp);
    const onScrollEnd = useLatestRef(onScrollEndProp);
    const [rowStore, colStore, rowLayout, colLayout, driver] = useStatic(() => {
      const _rowLayout = createGridLayout(rows, rowHeight, gap);
      const _colLayout = createGridLayout(cols, colWidth, gap);
      const _rowStore = createVirtualStore(_rowLayout);
      const _colStore = createVirtualStore(_colLayout);
      return [
        _rowStore,
        _colStore,
        _rowLayout,
        _colLayout,
        createContainerGridDriver(_rowStore, _colStore),
      ];
    });

    // These never request a synchronous update, so they are safe here.
    updateGridAxis(rowStore, rowLayout, rows, rowHeight);
    updateGridAxis(colStore, colLayout, cols, colWidth);

    const getStateVersion = () =>
      rowStore.$getStateVersion() + colStore.$getStateVersion();
    const [stateVersion, rerender] = useReducer(
      getStateVersion,
      undefined,
      getStateVersion,
    );

    const isScrolling = rowStore.$isScrolling() || colStore.$isScrolling();
    // A jump deferred during scrolling shifts the tracks, as it shifts the items of the lists.
    const marginTop = rowStore.$getItemOffset(0);
    const marginInlineStart = colStore.$getItemOffset(0);

    const rowCount = rowStore.$getItemsLength();
    const colCount = colStore.$getItemsLength();
    const plan = createGridPlan(
      rowLayout,
      colLayout,
      rowStore.$getRange(bufferSize),
      colStore.$getRange(bufferSize),
      headerRows,
      sectionRows,
      footerRows,
      headerCols,
      footerCols,
      spans,
      keepMounted,
      ariaSort,
    );
    const headerRowsRef = useLatestRef(headerRows);
    const sectionRowsRef = useLatestRef(sectionRows);
    const footerRowsRef = useLatestRef(footerRows);
    const headerColsRef = useLatestRef(headerCols);
    const footerColsRef = useLatestRef(footerCols);

    useIsomorphicLayoutEffect(() => {
      const onUpdate = (sync?: boolean) => {
        if (sync) {
          flushSync(rerender);
        } else {
          rerender();
        }
      };
      // store must be subscribed first because others may dispatch update on init depending on implementation
      rowStore.$subscribe(UPDATE_VIRTUAL_STATE, onUpdate);
      colStore.$subscribe(UPDATE_VIRTUAL_STATE, onUpdate);

      // Both stores observe both axes, so the end is notified once after both have ended.
      let scrolled = false;
      rowStore.$subscribe(UPDATE_SCROLL_EVENT, () => {
        scrolled = true;
        onVerticalScroll[refKey] &&
          onVerticalScroll[refKey](rowStore.$getScrollOffset());
      });
      colStore.$subscribe(UPDATE_SCROLL_EVENT, () => {
        scrolled = true;
        onHorizontalScroll[refKey] &&
          onHorizontalScroll[refKey](colStore.$getScrollOffset());
      });
      const notifyScrollEnd = () => {
        if (scrolled && !rowStore.$isScrolling() && !colStore.$isScrolling()) {
          scrolled = false;
          onScrollEnd[refKey] && onScrollEnd[refKey]();
        }
      };
      rowStore.$subscribe(UPDATE_SCROLL_END_EVENT, notifyScrollEnd);
      colStore.$subscribe(UPDATE_SCROLL_END_EVENT, notifyScrollEnd);

      driver.$observe(containerRef[refKey]!);
      return () => {
        rowStore.$dispose();
        colStore.$dispose();
        driver.$dispose();
      };
    }, []);

    useIsomorphicLayoutEffect(() => {
      driver.$effect();
    }, [stateVersion]);

    useImperativeHandle(ref, () => {
      return {
        get verticalScrollOffset() {
          return rowStore.$getScrollOffset();
        },
        get horizontalScrollOffset() {
          return colStore.$getScrollOffset();
        },
        get scrollHeight() {
          return getScrollSize(rowStore);
        },
        get scrollWidth() {
          return getScrollSize(colStore);
        },
        get viewportHeight() {
          return rowStore.$getViewportSize();
        },
        get viewportWidth() {
          return colStore.$getViewportSize();
        },
        findRowIndex: rowStore.$findItemIndex,
        findColIndex: colStore.$findItemIndex,
        getRowOffset: rowStore.$getItemOffset,
        getColOffset: colStore.$getItemOffset,
        getRowSize: rowStore.$getItemSize,
        getColSize: colStore.$getItemSize,
        scrollToIndex: (opts) =>
          gridScrollToIndex(
            driver,
            rowStore,
            colStore,
            headerRowsRef[refKey],
            sectionRowsRef[refKey],
            footerRowsRef[refKey],
            headerColsRef[refKey],
            footerColsRef[refKey],
            opts,
          ),
        scrollTo: (offset) => gridScrollTo(driver, offset),
        scrollBy: (offset) => gridScrollBy(driver, rowStore, colStore, offset),
      };
    }, []);

    return (
      <div
        // https://www.w3.org/WAI/ARIA/apg/patterns/table/
        // https://www.w3.org/TR/wai-aria-1.2/#table
        // https://www.w3.org/TR/wai-aria-1.2/#aria-rowcount
        role="table"
        aria-rowcount={rowCount}
        aria-colcount={colCount}
        {...attrs}
        style={{
          overflow: "auto",
          contain: "strict",
          width: "100%",
          height: "100%",
          ...style,
        }}
      >
        <div
          ref={containerRef}
          style={{
            contain: "size style", // https://github.com/inokawa/virtua/pull/775 https://github.com/inokawa/virtua/issues/800
            overflowAnchor: "none", // opt out browser's scroll anchoring because it will conflict to scroll anchoring of virtualizer
            flex: "none", // flex style can break layout
            display: "grid",
            gridTemplateRows: plan.$rowTemplate,
            gridTemplateColumns: plan.$colTemplate,
            gap,
            marginTop,
            marginInlineStart,
            // The width is left to the viewport, so the auto columns fill it as the columns of a table.
            height: getScrollSize(rowStore) - marginTop,
            pointerEvents: isScrolling ? "none" : undefined,
          }}
        >
          {plan.$groups.map((state) =>
            "$rows" in state ? (
              <GridRowGroup
                key={state.$key}
                _state={state}
                _children={children}
                _rows={rows}
                _cols={cols}
                _resizer={driver.$observeItem}
              />
            ) : (
              <GridRow
                key={state.$row}
                _state={state}
                _children={children}
                _row={getAxisItem(rows, state.$row)}
                _cols={cols}
                _resizer={driver.$observeItem}
              />
            ),
          )}
        </div>
      </div>
    );
  },
) as <R = number, C = number>(
  props: VGridProps<R, C> & { ref?: Ref<VGridHandle> },
) => ReactElement;
