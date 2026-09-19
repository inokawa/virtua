/** @jsxImportSource vue */
import {
  defineComponent,
  onMounted,
  onUnmounted,
  ref,
  watch,
  computed,
  type VNode,
  type PropType,
  type PublicProps,
  type StyleValue,
  watchEffect,
} from "vue";
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
  type VGridScrollToIndexOpts,
  type VGridAxis,
  type VGridCell,
  type VGridSize,
  type VGridTrackSize,
  type VGridSpan,
  createGridPlan,
  type GridCellState,
  type GridRowGroupState,
  type GridRowState,
} from "../core/index.js";

/**
 * Props of {@link VGrid}.
 */
export interface VGridProps<R = number, C = number> extends PublicProps {
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
   * @param offset the offsets. The axis whose offset is omitted is not scrolled.
   */
  scrollTo(offset: { vertical?: number; horizontal?: number }): void;
  /**
   * Scroll by the given offsets from the current position.
   * @param offset the offsets. The axis whose offset is omitted is not scrolled.
   */
  scrollBy(offset: { vertical?: number; horizontal?: number }): void;
}

interface VGridInstance<R = number, C = number> extends VGridHandle {
  $props: VGridProps<R, C>;
  $slots: {
    default: (arg: { row: R; col: C; cell: Readonly<VGridCell> }) => VNode[];
  };
}

interface GridCellProps {
  _state: GridCellState;
  _slot: (arg: {
    row: unknown;
    col: unknown;
    cell: Readonly<VGridCell>;
  }) => VNode[];
  _row: unknown;
  _col: unknown;
  _rowIndex: number;
  _resizer: GridDriver["$observeItem"];
}

const GridCell = /*#__PURE__*/ defineComponent(
  (props: GridCellProps) => {
    const elementRef = ref<HTMLDivElement>();

    watch(
      [
        elementRef,
        () => props._state.$measureRow,
        () => props._state.$measureCol,
      ],
      ([element, rowIndex, colIndex], _, onCleanup) => {
        if (!element || (rowIndex == null && colIndex == null)) return;
        onCleanup(props._resizer(element, rowIndex, colIndex));
      },
      { flush: "post" },
    );

    return () => {
      const {
        $col: colIndex,
        $rowSpan,
        $colSpan,
        $role,
        $sort,
        $style,
      } = props._state;
      return (
        <div
          ref={elementRef}
          role={$role}
          aria-colindex={colIndex + 1}
          aria-rowspan={$rowSpan}
          aria-colspan={$colSpan}
          aria-sort={$sort}
          style={$style as StyleValue}
        >
          {props._slot({
            row: props._row,
            col: props._col,
            cell: { rowIndex: props._rowIndex, colIndex },
          })}
        </div>
      );
    };
  },
  {
    // Required to split props from attrs. Object form keeps the keys manglable.
    props: {
      _state: null,
      _slot: null,
      _row: null,
      _col: null,
      _rowIndex: null,
      _resizer: null,
    } satisfies Record<keyof GridCellProps, null>,
  },
);

interface GridRowProps {
  _state: GridRowState;
  _slot: (arg: {
    row: unknown;
    col: unknown;
    cell: Readonly<VGridCell>;
  }) => VNode[];
  _row: unknown;
  _cols: VGridAxis<unknown>;
  _resizer: GridDriver["$observeItem"];
}

const GridRow = /*#__PURE__*/ defineComponent(
  (props: GridRowProps) => {
    return () => {
      const { $row: rowIndex, $cells, $style } = props._state;
      return (
        <div
          role="row"
          aria-rowindex={rowIndex + 1}
          style={$style as StyleValue}
        >
          {$cells.map((cell) => (
            <GridCell
              key={cell.$col}
              _state={cell}
              _slot={props._slot}
              _row={props._row}
              _col={getAxisItem(props._cols, cell.$col)}
              _rowIndex={rowIndex}
              _resizer={props._resizer}
            />
          ))}
        </div>
      );
    };
  },
  {
    // Required to split props from attrs. Object form keeps the keys manglable.
    props: {
      _state: null,
      _slot: null,
      _row: null,
      _cols: null,
      _resizer: null,
    } satisfies Record<keyof GridRowProps, null>,
  },
);

interface GridRowGroupProps {
  _state: GridRowGroupState;
  _slot: (props: {
    row: unknown;
    col: unknown;
    cell: Readonly<VGridCell>;
  }) => VNode[];
  _rows: VGridAxis<unknown>;
  _cols: VGridAxis<unknown>;
  _resizer: GridDriver["$observeItem"];
}

const GridRowGroup = /*#__PURE__*/ defineComponent(
  (props: GridRowGroupProps) => {
    return () => {
      const { $rows, $style } = props._state;
      return (
        // https://www.w3.org/TR/wai-aria-1.2/#rowgroup
        <div role="rowgroup" style={$style as StyleValue}>
          {$rows.map((state) => (
            <GridRow
              key={state.$row}
              _state={state}
              _slot={props._slot}
              _row={getAxisItem(props._rows, state.$row)}
              _cols={props._cols}
              _resizer={props._resizer}
            />
          ))}
        </div>
      );
    };
  },
  {
    // Required to split props from attrs. Object form keeps the keys manglable.
    props: {
      _state: null,
      _slot: null,
      _rows: null,
      _cols: null,
      _resizer: null,
    } satisfies Record<keyof GridRowGroupProps, null>,
  },
);

/**
 * Virtualized grid component for tabular data. See {@link VGridProps} and {@link VGridHandle}.
 */
export const VGrid = /*#__PURE__*/ defineComponent({
  props: {
    rows: {
      type: [Number, Array] as PropType<VGridAxis<unknown>>,
      required: true,
    },
    cols: {
      type: [Number, Array] as PropType<VGridAxis<unknown>>,
      required: true,
    },
    rowHeight: {
      type: [Number, String] as PropType<VGridTrackSize | string>,
      required: true,
    },
    colWidth: {
      type: [Number, String] as PropType<VGridTrackSize | string>,
      required: true,
    },
    headerRows: Number,
    sectionRows: Array as PropType<VGridProps["sectionRows"]>,
    footerRows: Number,
    headerCols: Number,
    footerCols: Number,
    spans: Array as PropType<VGridProps["spans"]>,
    keepMounted: Array as PropType<VGridProps["keepMounted"]>,
    bufferSize: Number,
    gap: { type: Number, default: 0 },
    ariaSort: Object as PropType<VGridProps["ariaSort"]>,
  },
  emits: ["verticalScroll", "horizontalScroll", "scrollEnd"],
  setup(props, { emit, expose, slots }) {
    const containerRef = ref<HTMLDivElement>();

    const rowLayout = createGridLayout(props.rows, props.rowHeight, props.gap);
    const colLayout = createGridLayout(props.cols, props.colWidth, props.gap);
    const rowStore = createVirtualStore(rowLayout);
    const colStore = createVirtualStore(colLayout);
    const driver = createContainerGridDriver(rowStore, colStore);

    const stateVersion = ref(
      rowStore.$getStateVersion() + colStore.$getStateVersion(),
    );
    const rerender = () => {
      stateVersion.value =
        rowStore.$getStateVersion() + colStore.$getStateVersion();
    };
    rowStore.$subscribe(UPDATE_VIRTUAL_STATE, rerender);
    colStore.$subscribe(UPDATE_VIRTUAL_STATE, rerender);

    // Both stores observe both axes, so the end is notified once after both have ended.
    let scrolled = false;
    rowStore.$subscribe(UPDATE_SCROLL_EVENT, () => {
      scrolled = true;
      emit("verticalScroll", rowStore.$getScrollOffset());
    });
    colStore.$subscribe(UPDATE_SCROLL_EVENT, () => {
      scrolled = true;
      emit("horizontalScroll", colStore.$getScrollOffset());
    });
    const notifyScrollEnd = () => {
      if (scrolled && !rowStore.$isScrolling() && !colStore.$isScrolling()) {
        scrolled = false;
        emit("scrollEnd");
      }
    };
    rowStore.$subscribe(UPDATE_SCROLL_END_EVENT, notifyScrollEnd);
    colStore.$subscribe(UPDATE_SCROLL_END_EVENT, notifyScrollEnd);

    // The sizes read from the items are tracked, so the items mutated in place are followed.
    watchEffect(() => {
      updateGridAxis(rowStore, rowLayout, props.rows, props.rowHeight, true);
    });
    watchEffect(() => {
      updateGridAxis(colStore, colLayout, props.cols, props.colWidth, true);
    });

    const rowCount = computed(
      () => stateVersion.value && rowStore.$getItemsLength(),
    );
    const colCount = computed(
      () => stateVersion.value && colStore.$getItemsLength(),
    );
    const plan = computed(() => {
      stateVersion.value;
      return createGridPlan(
        rowLayout,
        colLayout,
        rowStore.$getRange(props.bufferSize),
        colStore.$getRange(props.bufferSize),
        props.headerRows,
        props.sectionRows,
        props.footerRows,
        props.headerCols,
        props.footerCols,
        props.spans,
        props.keepMounted,
        props.ariaSort,
      );
    });
    const isScrolling = computed(
      () =>
        stateVersion.value &&
        (rowStore.$isScrolling() || colStore.$isScrolling()),
    );

    onMounted(() => {
      driver.$observe(containerRef.value!);
    });
    onUnmounted(() => {
      rowStore.$dispose();
      colStore.$dispose();
      driver.$dispose();
    });

    watch(
      [stateVersion],
      () => {
        driver.$effect();
      },
      { flush: "post" },
    );

    expose({
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
          props.headerRows,
          props.sectionRows,
          props.footerRows,
          props.headerCols,
          props.footerCols,
          opts,
        ),
      scrollTo: ({ vertical, horizontal }) =>
        gridScrollTo(driver, vertical, horizontal),
      scrollBy: ({ vertical, horizontal }) =>
        gridScrollBy(driver, rowStore, colStore, vertical, horizontal),
    } satisfies VGridHandle);

    return () => {
      const { $rowTemplate, $colTemplate, $groups } = plan.value;
      // A jump deferred during scrolling shifts the tracks, as it shifts the items of the lists.
      const marginTop = rowStore.$getItemOffset(0);
      const marginInlineStart = colStore.$getItemOffset(0);

      const containerStyle: StyleValue = {
        // https://github.com/inokawa/virtua/pull/775 https://github.com/inokawa/virtua/issues/800
        contain: "size style",
        overflowAnchor: "none", // opt out browser's scroll anchoring because it will conflict to scroll anchoring of virtualizer
        flex: "none", // flex style can break layout
        display: "grid",
        gridTemplateRows: $rowTemplate,
        gridTemplateColumns: $colTemplate,
        gap: props.gap + "px",
        marginTop: marginTop + "px",
        marginInlineStart: marginInlineStart + "px",
        // The width is left to the viewport, so the auto columns fill it as the columns of a table.
        height: getScrollSize(rowStore) - marginTop + "px",
        pointerEvents: isScrolling.value ? "none" : undefined,
      };

      return (
        <div
          // https://www.w3.org/WAI/ARIA/apg/patterns/table/
          // https://www.w3.org/TR/wai-aria-1.2/#table
          // https://www.w3.org/TR/wai-aria-1.2/#aria-rowcount
          role="table"
          aria-rowcount={rowCount.value}
          aria-colcount={colCount.value}
          style={{
            overflow: "auto",
            contain: "strict",
            width: "100%",
            height: "100%",
          }}
        >
          <div ref={containerRef} style={containerStyle}>
            {$groups.map((state) =>
              "$rows" in state ? (
                <GridRowGroup
                  key={state.$key}
                  _state={state}
                  _slot={slots["default"]!}
                  _rows={props.rows}
                  _cols={props.cols}
                  _resizer={driver.$observeItem}
                />
              ) : (
                <GridRow
                  key={state.$row}
                  _state={state}
                  _slot={slots["default"]!}
                  _row={getAxisItem(props.rows, state.$row)}
                  _cols={props.cols}
                  _resizer={driver.$observeItem}
                />
              ),
            )}
          </div>
        </div>
      );
    };
  },
}) as unknown as {
  new <R = number, C = number>(props: VGridProps<R, C>): VGridInstance<R, C>;
};
