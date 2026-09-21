/**
 * @jsxImportSource solid-js
 */
import {
  For,
  mergeProps,
  createComputed,
  createMemo,
  createSignal,
  onCleanup,
  onMount,
  createEffect,
  on,
  splitProps,
  untrack,
  type JSX,
} from "solid-js";
import { isServer } from "solid-js/web";
import {
  UPDATE_SCROLL_END_EVENT,
  UPDATE_SCROLL_EVENT,
  UPDATE_VIRTUAL_STATE,
  createContainerGridDriver,
  createGridLayout,
  createVirtualStore,
  getAxisItem,
  getScrollSize,
  gridScrollBy,
  gridScrollTo,
  gridScrollToIndex,
  updateGridAxis,
  type GridDriver,
  type GridScrollToIndexOpts,
  type GridAxis,
  type GridCell as GridCellType,
  type GridSize,
  type GridSpan,
  createGridPlan,
  type GridCellState,
  type GridRowGroupState,
  type GridRowState,
  gridStyleToString,
} from "../core/index.js";
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

/**
 * Props of {@link VGrid}.
 */
export interface VGridProps<R = number, C = number> extends Omit<
  ViewportComponentAttributes,
  "role"
> {
  /**
   * Get reference to {@link VGridHandle}.
   */
  ref?: VGridHandle | ((handle?: VGridHandle) => void);
  /**
   * A function to create cell elements rendered by this component.
   * @param row the item of {@link VGridProps.rows} at the row of the cell, or the row index if {@link VGridProps.rows} is a number
   * @param col the item of {@link VGridProps.cols} at the column of the cell, or the column index if {@link VGridProps.cols} is a number
   * @param cell the row index and the column index of the cell
   */
  children: (row: R, col: C, cell: Readonly<GridCellType>) => JSX.Element;
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
  keepMounted?: readonly GridCellType[];
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
  ariaSort?: GridCellType & { order: "ascending" | "descending" | "other" };
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

interface GridCellProps<R, C> {
  _state: GridCellState;
  _children: (row: R, col: C, cell: Readonly<GridCellType>) => JSX.Element;
  _row: R;
  _col: C;
  _rowIndex: number;
  _resizer: GridDriver["$observeItem"];
}

const GridCell = <R, C>(props: GridCellProps<R, C>): JSX.Element => {
  let elementRef: HTMLDivElement | undefined;

  // Written only when the state changes, so that the computations of the cell are not checked for every plan.
  const [state, setState] = createSignal<GridCellState>(undefined!);
  createComputed(() => setState(props._state));
  const measureRowIndex = createMemo(() => state().$measureRow);
  const measureColIndex = createMemo(() => state().$measureCol);
  const row = createMemo(() => props._row);
  const col = createMemo(() => props._col);
  // Rendered again only when the items change, like VList.
  const children = createMemo(() => {
    const r = row();
    const c = col();
    return untrack(() =>
      props._children(r, c, {
        rowIndex: props._rowIndex,
        colIndex: state().$col,
      }),
    );
  });

  createEffect(
    on([measureRowIndex, measureColIndex], ([rowIndex, colIndex]) => {
      if (!elementRef || (rowIndex == null && colIndex == null)) return;
      onCleanup(props._resizer(elementRef, rowIndex, colIndex));
    }),
  );

  const style = createMemo(() => gridStyleToString(state().$style));

  return (
    <div
      ref={elementRef}
      role={state().$role}
      aria-colindex={state().$col + 1}
      aria-rowspan={state().$rowSpan}
      aria-colspan={state().$colSpan}
      aria-sort={state().$sort}
      style={style()}
    >
      {children()}
    </div>
  );
};

interface GridRowProps<R, C> {
  _state: GridRowState;
  _children: (row: R, col: C, cell: Readonly<GridCellType>) => JSX.Element;
  _row: R;
  _cols: GridAxis<C>;
  _resizer: GridDriver["$observeItem"];
}

const GridRow = <R, C>(props: GridRowProps<R, C>): JSX.Element => {
  const state = createMemo(() => props._state);
  // The cells are keyed by their columns, as For keys the items by identity.
  const cols = createMemo(() => state().$cells.map((cell) => cell.$col));
  const style = createMemo(() => gridStyleToString(state().$style));

  return (
    <div role="row" aria-rowindex={state().$row + 1} style={style()}>
      <For each={cols()}>
        {(colIndex, i) => (
          <GridCell
            _state={state().$cells[i()]!}
            _children={props._children}
            _row={props._row}
            _col={getAxisItem(props._cols, colIndex)}
            _rowIndex={state().$row}
            _resizer={props._resizer}
          />
        )}
      </For>
    </div>
  );
};

interface GridRowGroupProps<R, C> {
  _state: GridRowGroupState;
  _children: (row: R, col: C, cell: Readonly<GridCellType>) => JSX.Element;
  _rows: GridAxis<R>;
  _cols: GridAxis<C>;
  _resizer: GridDriver["$observeItem"];
}

const GridRowGroup = <R, C>(props: GridRowGroupProps<R, C>): JSX.Element => {
  // The rows are keyed by their indexes, as For keys the items by identity.
  const rows = createMemo(() => props._state.$rows.map((row) => row.$row));
  const style = createMemo(() => gridStyleToString(props._state.$style));
  return (
    // https://www.w3.org/TR/wai-aria-1.2/#rowgroup
    <div role="rowgroup" style={style()}>
      <For each={rows()}>
        {(rowIndex, i) => (
          <GridRow
            _state={props._state.$rows[i()]!}
            _children={props._children}
            _row={getAxisItem(props._rows, rowIndex)}
            _cols={props._cols}
            _resizer={props._resizer}
          />
        )}
      </For>
    </div>
  );
};

/**
 * Virtualized grid component for tabular data. See {@link VGridProps} and {@link VGridHandle}.
 */
export const VGrid = <R = number, C = number>(
  props: VGridProps<R, C>,
): JSX.Element => {
  let containerRef: HTMLDivElement | undefined;
  const withDefaults = mergeProps({ gap: 0 }, props);
  const { rows, cols, rowHeight, colWidth, gap } = withDefaults;
  const [, others] = splitProps(props, [
    "ref",
    "children",
    "rows",
    "cols",
    "rowHeight",
    "colWidth",
    "headerRows",
    "sectionRows",
    "footerRows",
    "headerCols",
    "footerCols",
    "spans",
    "keepMounted",
    "bufferSize",
    "gap",
    "ariaSort",
    "onVerticalScroll",
    "onHorizontalScroll",
    "onScrollEnd",
    "style",
  ]);

  const rowLayout = createGridLayout(rows, rowHeight, gap);
  const colLayout = createGridLayout(cols, colWidth, gap);
  const rowStore = createVirtualStore(rowLayout);
  const colStore = createVirtualStore(colLayout);
  const driver = createContainerGridDriver(rowStore, colStore);

  const getStateVersion = () =>
    rowStore.$getStateVersion() + colStore.$getStateVersion();
  const [stateVersion, setRerender] = createSignal(getStateVersion());
  const rerender = () => setRerender(getStateVersion());
  rowStore.$subscribe(UPDATE_VIRTUAL_STATE, rerender);
  colStore.$subscribe(UPDATE_VIRTUAL_STATE, rerender);

  // Both stores observe both axes, so the end is notified once after both have ended.
  let scrolled = false;
  rowStore.$subscribe(UPDATE_SCROLL_EVENT, () => {
    scrolled = true;
    props.onVerticalScroll &&
      props.onVerticalScroll(rowStore.$getScrollOffset());
  });
  colStore.$subscribe(UPDATE_SCROLL_EVENT, () => {
    scrolled = true;
    props.onHorizontalScroll &&
      props.onHorizontalScroll(colStore.$getScrollOffset());
  });
  const notifyScrollEnd = () => {
    if (scrolled && !rowStore.$isScrolling() && !colStore.$isScrolling()) {
      scrolled = false;
      props.onScrollEnd && props.onScrollEnd();
    }
  };
  rowStore.$subscribe(UPDATE_SCROLL_END_EVENT, notifyScrollEnd);
  colStore.$subscribe(UPDATE_SCROLL_END_EVENT, notifyScrollEnd);

  // The sizes read from the items are tracked, so the items mutated in place are followed.
  createComputed(() => {
    updateGridAxis(
      rowStore,
      rowLayout,
      props.rows,
      props.rowHeight,
      props.headerRows,
      props.footerRows,
      true,
    );
  });
  createComputed(() => {
    updateGridAxis(
      colStore,
      colLayout,
      props.cols,
      props.colWidth,
      props.headerCols,
      props.footerCols,
      true,
    );
  });

  const rowCount = createMemo(
    () => stateVersion() && rowStore.$getItemsLength(),
  );
  const colCount = createMemo(
    () => stateVersion() && colStore.$getItemsLength(),
  );
  const plan = createMemo(() => {
    stateVersion();
    return createGridPlan(
      rowLayout,
      colLayout,
      rowStore.$getRange(props.bufferSize),
      colStore.$getRange(props.bufferSize),
      props.sectionRows,
      props.spans,
      props.keepMounted,
      props.ariaSort,
    );
  });
  // The groups and the rows are keyed, as For keys the items by identity.
  const keys = createMemo(() =>
    plan().$groups.map((state) => ("$rows" in state ? state.$key : state.$row)),
  );
  const isScrolling = createMemo(
    () =>
      stateVersion() && (rowStore.$isScrolling() || colStore.$isScrolling()),
  );

  const containerStyle = createMemo((): JSX.CSSProperties => {
    const { $rowTemplate, $colTemplate } = plan();
    // A jump deferred during scrolling shifts the tracks, as it shifts the items of the lists.
    const marginTop = rowStore.$getItemOffset(0);
    const marginInlineStart = colStore.$getItemOffset(0);
    return {
      // https://github.com/inokawa/virtua/pull/775 https://github.com/inokawa/virtua/issues/800
      contain: "size style",
      "overflow-anchor": "none", // opt out browser's scroll anchoring because it will conflict to scroll anchoring of virtualizer
      flex: "none", // flex style can break layout
      display: "grid",
      "grid-template-rows": $rowTemplate,
      "grid-template-columns": $colTemplate,
      gap: withDefaults.gap + "px",
      "margin-top": marginTop + "px",
      "margin-inline-start": marginInlineStart + "px",
      // The width is left to the viewport, so the auto columns fill it as the columns of a table.
      height: getScrollSize(rowStore) - marginTop + "px",
      "pointer-events": isScrolling() ? "none" : undefined,
    };
  });

  // eslint-disable-next-line solid/reactivity
  const ref = props.ref as Exclude<typeof props.ref, VGridHandle>;
  if (!isServer && ref) {
    ref({
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
          rowLayout,
          colLayout,
          props.sectionRows,
          opts,
        ),
      scrollTo: ({ vertical, horizontal }) =>
        gridScrollTo(driver, vertical, horizontal),
      scrollBy: ({ vertical, horizontal }) =>
        gridScrollBy(driver, rowStore, colStore, vertical, horizontal),
    });
    onCleanup(() => ref());
  }

  onMount(() => {
    driver.$observe(containerRef!);

    onCleanup(() => {
      rowStore.$dispose();
      colStore.$dispose();
      driver.$dispose();
    });
  });

  createEffect(
    on(stateVersion, () => {
      driver.$effect();
    }),
  );

  return (
    <div
      // https://www.w3.org/WAI/ARIA/apg/patterns/table/
      // https://www.w3.org/TR/wai-aria-1.2/#table
      // https://www.w3.org/TR/wai-aria-1.2/#aria-rowcount
      role="table"
      aria-rowcount={rowCount()}
      aria-colcount={colCount()}
      {...others}
      style={{
        overflow: "auto",
        contain: "strict",
        width: "100%",
        height: "100%",
        ...props.style,
      }}
    >
      <div ref={containerRef} style={containerStyle()}>
        <For each={keys()}>
          {(key, i) =>
            key < 0 ? (
              <GridRowGroup
                _state={plan().$groups[i()] as GridRowGroupState}
                _children={props.children}
                _rows={props.rows}
                _cols={props.cols}
                _resizer={driver.$observeItem}
              />
            ) : (
              <GridRow
                _state={plan().$groups[i()] as GridRowState}
                _children={props.children}
                _row={getAxisItem(props.rows, key)}
                _cols={props.cols}
                _resizer={driver.$observeItem}
              />
            )
          }
        </For>
      </div>
    </div>
  );
};
