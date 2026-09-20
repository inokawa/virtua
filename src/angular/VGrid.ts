import {
  ApplicationRef,
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  Directive,
  ElementRef,
  HostAttributeToken,
  type OnInit,
  TemplateRef,
  afterNextRender,
  afterRenderEffect,
  computed,
  contentChild,
  effect,
  inject,
  input,
  output,
  signal,
  untracked,
  viewChild,
} from "@angular/core";
import { NgTemplateOutlet } from "@angular/common";
import {
  type GridCellState,
  type GridDriver,
  type GridLayout,
  type GridRowGroupState,
  type GridRowState,
  type GridScrollToIndexOpts,
  type StateVersion,
  type GridAxis,
  type GridCell as GridCellType,
  type GridSize,
  type GridSpan,
  type VirtualStore,
  UPDATE_SCROLL_END_EVENT,
  UPDATE_SCROLL_EVENT,
  UPDATE_VIRTUAL_STATE,
  createContainerGridDriver,
  createGridLayout,
  createGridPlan,
  createVirtualStore,
  getAxisItem,
  getScrollSize,
  gridScrollBy,
  gridScrollTo,
  gridScrollToIndex,
  updateGridAxis,
} from "../core/index.js";

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
 * Context of the cell template.
 */
export type CellContext<R = number, C = number> = {
  /**
   * The item of the rows at the row of the cell, or the row index if the rows are a number. Same as `row`.
   */
  $implicit: R;
  /**
   * The item of the rows at the row of the cell, or the row index if the rows are a number.
   */
  row: R;
  /**
   * The item of the columns at the column of the cell, or the column index if the columns are a number.
   */
  col: C;
  /**
   * The row index and the column index of the cell.
   */
  cell: Readonly<GridCellType>;
};

@Directive({
  selector: "div[virtuaGridCell]",
  host: {
    "[style]": "state().$style",
    "[attr.role]": "state().$role",
    "[attr.aria-colindex]": "state().$col + 1",
    "[attr.aria-rowspan]": "state().$rowSpan",
    "[attr.aria-colspan]": "state().$colSpan",
    "[attr.aria-sort]": "state().$sort",
  },
})
export class GridCell {
  readonly state = input.required<GridCellState>();
  readonly resizer = input.required<GridDriver["$observeItem"]>();

  constructor() {
    const element: HTMLElement = inject(ElementRef).nativeElement;

    // Read through computeds, so that a new state with the same indexes is a no-op.
    const measureRowIndex = computed(() => this.state().$measureRow);
    const measureColIndex = computed(() => this.state().$measureCol);
    // afterRenderEffect instead of effect, because ResizeObserver doesn't exist on the server.
    let cleanupResizer: (() => void) | undefined;
    afterRenderEffect({
      read: () => {
        const rowIndex = measureRowIndex();
        const colIndex = measureColIndex();
        if (cleanupResizer) cleanupResizer();
        cleanupResizer =
          rowIndex == null && colIndex == null
            ? undefined
            : untracked(this.resizer)(element, rowIndex, colIndex);
      },
    });

    inject(DestroyRef).onDestroy(() => {
      if (cleanupResizer) cleanupResizer();
    });
  }
}

@Component({
  selector: "div[virtuaGridRow]",
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [GridCell, NgTemplateOutlet],
  host: {
    role: "row",
    "[attr.aria-rowindex]": "state().$row + 1",
    "[style]": "state().$style",
  },
  template: `
    @for (cell of state().$cells; track cell.$col) {
      <div virtuaGridCell [state]="cell" [resizer]="resizer()">
        <ng-container
          [ngTemplateOutlet]="template()"
          [ngTemplateOutletContext]="{
            $implicit: row(),
            row: row(),
            col: colItem(cell.$col),
            cell: { rowIndex: state().$row, colIndex: cell.$col },
          }"
        />
      </div>
    }
  `,
})
export class GridRow<R, C> {
  readonly state = input.required<GridRowState>();
  readonly template = input.required<TemplateRef<CellContext<R, C>>>();
  readonly row = input.required<R>();
  readonly cols = input.required<GridAxis<C>>();
  readonly resizer = input.required<GridDriver["$observeItem"]>();

  /** @internal */
  protected colItem(index: number): C {
    return getAxisItem(this.cols(), index);
  }
}

@Component({
  selector: "div[virtuaGridRowGroup]",
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [GridRow],
  host: {
    // https://www.w3.org/TR/wai-aria-1.2/#rowgroup
    role: "rowgroup",
    "[style]": "state().$style",
  },
  template: `
    @for (row of state().$rows; track row.$row) {
      <div
        virtuaGridRow
        [state]="row"
        [template]="template()"
        [row]="rowItem(row.$row)"
        [cols]="cols()"
        [resizer]="resizer()"
      ></div>
    }
  `,
})
export class GridRowGroup<R, C> {
  readonly state = input.required<GridRowGroupState>();
  readonly template = input.required<TemplateRef<CellContext<R, C>>>();
  readonly rows = input.required<GridAxis<R>>();
  readonly cols = input.required<GridAxis<C>>();
  readonly resizer = input.required<GridDriver["$observeItem"]>();

  /** @internal */
  protected rowItem(index: number): R {
    return getAxisItem(this.rows(), index);
  }
}

/**
 * Virtualized grid component for tabular data. See {@link VGridHandle}.
 *
 * The host element is the scrollable viewport of the grid.
 */
@Component({
  selector: "virtua-vgrid",
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [GridRowGroup, GridRow],
  host: {
    // https://www.w3.org/WAI/ARIA/apg/patterns/table/
    // https://www.w3.org/TR/wai-aria-1.2/#table
    // https://www.w3.org/TR/wai-aria-1.2/#aria-rowcount
    role: "table",
    "[attr.aria-rowcount]": "ariaRowCount ?? rowCount()",
    "[attr.aria-colcount]": "ariaColCount ?? colCount()",
  },
  template: `
    <div #container [style]="containerStyle()">
      @for (
        state of plan().$groups;
        track "$rows" in state ? state.$key : state.$row
      ) {
        @if ("$rows" in state) {
          <div
            virtuaGridRowGroup
            [state]="state"
            [template]="template()"
            [rows]="rows()"
            [cols]="cols()"
            [resizer]="driver.$observeItem"
          ></div>
        } @else {
          <div
            virtuaGridRow
            [state]="state"
            [template]="template()"
            [row]="rowItem(state.$row)"
            [cols]="cols()"
            [resizer]="driver.$observeItem"
          ></div>
        }
      }
    </div>
  `,
})
export class VGrid<R = number, C = number> implements OnInit, VGridHandle {
  /**
   * The rows of the grid. See {@link GridAxis} for the accepted values.
   */
  readonly rows = input.required<GridAxis<R>>();
  /**
   * The columns of the grid. See {@link GridAxis} for the accepted values.
   */
  readonly cols = input.required<GridAxis<C>>();
  /**
   * The heights of the rows. See {@link GridSize} for the accepted values.
   */
  readonly rowHeight = input.required<GridSize<R>>();
  /**
   * The widths of the columns. See {@link GridSize} for the accepted values.
   */
  readonly colWidth = input.required<GridSize<C>>();
  /**
   * The number of the leading rows pinned to the start, which are the column headers (`role="columnheader"`).
   *
   * **The pinned cells are rendered over the other cells, so give them an opaque background.**
   * @defaultValue 0
   */
  readonly headerRows = input<number>();
  /**
   * Indexes of the rows which start sections. A section lasts until the next section row or the footer rows, and its first row sticks below the header rows while the section is scrolled through.
   *
   * **The section rows are rendered over the other cells while they stick, so give them an opaque background.**
   */
  readonly sectionRows = input<readonly number[]>();
  /**
   * The number of the trailing rows pinned to the end.
   *
   * **The pinned cells are rendered over the other cells, so give them an opaque background.**
   * @defaultValue 0
   */
  readonly footerRows = input<number>();
  /**
   * The number of the leading columns pinned to the start, the last of which is the row header (`role="rowheader"`).
   *
   * **The pinned cells are rendered over the other cells, so give them an opaque background.**
   * @defaultValue 0
   */
  readonly headerCols = input<number>();
  /**
   * The number of the trailing columns pinned to the end.
   *
   * **The pinned cells are rendered over the other cells, so give them an opaque background.**
   * @defaultValue 0
   */
  readonly footerCols = input<number>();
  /**
   * Cells merged over multiple rows and/or columns. See {@link GridSpan} for the accepted values.
   *
   * The cell at the origin is stretched over the merged area, and the other cells in it are not rendered. Spans must not overlap each other or cross the boundaries of the pinned rows/columns or the sections. A spanning cell is not measured for `"auto"` sizes on the axes it spans, and doesn't enlarge those tracks.
   */
  readonly spans = input<readonly GridSpan[]>();
  /**
   * List of cells that should be always mounted, even when off screen.
   */
  readonly keepMounted = input<readonly GridCellType[]>();
  /**
   * Extra space in pixels to render before/after the viewport. The minimum value is 0. Lower value will give better performance but you can increase to avoid showing blank cells in fast scrolling.
   * @defaultValue 200
   */
  readonly bufferSize = input<number>();
  /**
   * The gap between the rows and the columns in pixels, which is not included in the sizes. Must not be changed after mount.
   * @defaultValue 0
   */
  readonly gap = input(0);
  /**
   * The header cell of the sorted column or row, and the sort order (`aria-sort`).
   */
  readonly ariaSort = input<
    GridCellType & { order: "ascending" | "descending" | "other" }
  >();

  /**
   * Emitted whenever the vertical scroll offset changes. The value is current scrollTop.
   */
  readonly verticalScrolled = output<number>();
  /**
   * Emitted whenever the horizontal scroll offset changes. The value is current scrollLeft, which is always positive even in RTL.
   */
  readonly horizontalScrolled = output<number>();
  /**
   * Emitted when scrolling stops.
   */
  readonly scrollEnded = output<void>();

  /** @internal */
  protected template =
    contentChild.required<TemplateRef<CellContext<R, C>>>(TemplateRef);
  // not _ prefixed, because the mangler does not rename the property name kept
  // as a string in the partial compilation output
  /** @internal */
  private container = viewChild.required<ElementRef<HTMLElement>>("container");

  /** @internal */
  private _rowStore!: VirtualStore;
  /** @internal */
  private _colStore!: VirtualStore;
  /** @internal */
  private _rowLayout!: GridLayout;
  /** @internal */
  private _colLayout!: GridLayout;
  /** @internal */
  protected driver!: GridDriver;
  /** @internal */
  private _element: HTMLElement = inject(ElementRef).nativeElement;
  /** @internal */
  private _appRef = inject(ApplicationRef);
  /** @internal */
  private _stateVersion = signal<StateVersion>(undefined!);
  // not _ prefixed, because they're read in the host bindings
  /** @internal */
  protected ariaRowCount = inject(new HostAttributeToken("aria-rowcount"), {
    optional: true,
  });
  /** @internal */
  protected ariaColCount = inject(new HostAttributeToken("aria-colcount"), {
    optional: true,
  });
  /** @internal */
  protected rowCount = computed(
    () => this._stateVersion() && this._rowStore.$getItemsLength(),
  );
  /** @internal */
  protected colCount = computed(
    () => this._stateVersion() && this._colStore.$getItemsLength(),
  );

  /** @internal */
  protected plan = computed(() => {
    // the stores are not signals, so depend on their version
    this._stateVersion();
    return createGridPlan(
      this._rowLayout,
      this._colLayout,
      this._rowStore.$getRange(this.bufferSize()),
      this._colStore.$getRange(this.bufferSize()),
      this.headerRows(),
      this.sectionRows(),
      this.footerRows(),
      this.headerCols(),
      this.footerCols(),
      this.spans(),
      this.keepMounted(),
      this.ariaSort(),
    );
  });

  /** @internal */
  protected rowItem(index: number): R {
    return getAxisItem(this.rows(), index);
  }

  /** @internal */
  protected containerStyle = computed(() => {
    this._stateVersion(); // the stores are not signals, so depend on their version
    const { $rowTemplate, $colTemplate } = this.plan();
    // A jump deferred during scrolling shifts the tracks, as it shifts the items of the lists.
    const marginTop = this._rowStore.$getItemOffset(0);
    const marginInlineStart = this._colStore.$getItemOffset(0);
    return {
      // https://github.com/inokawa/virtua/pull/775 https://github.com/inokawa/virtua/issues/800
      contain: "size style",
      "overflow-anchor": "none", // opt out browser's scroll anchoring because it will conflict to scroll anchoring of virtualizer
      flex: "none", // flex style can break layout
      display: "grid",
      "grid-template-rows": $rowTemplate,
      "grid-template-columns": $colTemplate,
      gap: this.gap() + "px",
      "margin-top": marginTop + "px",
      "margin-inline-start": marginInlineStart + "px",
      // The width is left to the viewport, so the auto columns fill it as the columns of a table.
      height: getScrollSize(this._rowStore) - marginTop + "px",
      "pointer-events":
        this._rowStore.$isScrolling() || this._colStore.$isScrolling()
          ? "none"
          : undefined,
    };
  });

  constructor() {
    // $effect.pre equivalents: component effects run before this component's template refreshes
    effect(() => {
      const rows = this.rows();
      const cols = this.cols();
      const rowHeight = this.rowHeight();
      const colWidth = this.colWidth();
      if (!this._rowStore) return;
      untracked(() => {
        updateGridAxis(this._rowStore, this._rowLayout, rows, rowHeight);
        updateGridAxis(this._colStore, this._colLayout, cols, colWidth);
      });
    });

    afterNextRender({
      read: () => {
        this.driver.$observe(this.container().nativeElement);
      },
    });

    afterRenderEffect({
      read: () => {
        this._stateVersion();
        this.driver.$effect();
      },
    });

    inject(DestroyRef).onDestroy(() => {
      this._rowStore?.$dispose();
      this._colStore?.$dispose();
      this.driver?.$dispose();
    });
  }

  ngOnInit(): void {
    // Written once because it never changes. A host style binding can't be used
    // here, because it would win over the styles set by the user.
    const element = this._element;
    element.setAttribute(
      "style",
      "display:block;overflow:auto;contain:strict;width:100%;height:100%;" +
        (element.getAttribute("style") || ""),
    );
    const gap = this.gap();
    const rowLayout = (this._rowLayout = createGridLayout(
      this.rows(),
      this.rowHeight(),
      gap,
    ));
    const colLayout = (this._colLayout = createGridLayout(
      this.cols(),
      this.colWidth(),
      gap,
    ));
    const rowStore = (this._rowStore = createVirtualStore(rowLayout));
    const colStore = (this._colStore = createVirtualStore(colLayout));
    this.driver = createContainerGridDriver(rowStore, colStore);

    const rerender = (sync?: boolean) => {
      this._stateVersion.set(
        rowStore.$getStateVersion() + colStore.$getStateVersion(),
      );
      if (sync) {
        // The store requires the DOM to be updated synchronously, otherwise
        // imperative scroll may be clamped by the stale container size.
        this._appRef.tick();
      }
    };
    rowStore.$subscribe(UPDATE_VIRTUAL_STATE, rerender);
    colStore.$subscribe(UPDATE_VIRTUAL_STATE, rerender);

    // Both stores observe both axes, so the end is notified once after both have ended.
    let scrolled = false;
    rowStore.$subscribe(UPDATE_SCROLL_EVENT, () => {
      scrolled = true;
      this.verticalScrolled.emit(rowStore.$getScrollOffset());
    });
    colStore.$subscribe(UPDATE_SCROLL_EVENT, () => {
      scrolled = true;
      this.horizontalScrolled.emit(colStore.$getScrollOffset());
    });
    const notifyScrollEnd = () => {
      if (scrolled && !rowStore.$isScrolling() && !colStore.$isScrolling()) {
        scrolled = false;
        this.scrollEnded.emit();
      }
    };
    rowStore.$subscribe(UPDATE_SCROLL_END_EVENT, notifyScrollEnd);
    colStore.$subscribe(UPDATE_SCROLL_END_EVENT, notifyScrollEnd);
    rerender();
  }

  get verticalScrollOffset(): number {
    return this._rowStore.$getScrollOffset();
  }
  get horizontalScrollOffset(): number {
    return this._colStore.$getScrollOffset();
  }
  get scrollHeight(): number {
    return getScrollSize(this._rowStore);
  }
  get scrollWidth(): number {
    return getScrollSize(this._colStore);
  }
  get viewportHeight(): number {
    return this._rowStore.$getViewportSize();
  }
  get viewportWidth(): number {
    return this._colStore.$getViewportSize();
  }
  findRowIndex(offset: number): number {
    return this._rowStore.$findItemIndex(offset);
  }
  findColIndex(offset: number): number {
    return this._colStore.$findItemIndex(offset);
  }
  getRowOffset(index: number): number {
    return this._rowStore.$getItemOffset(index);
  }
  getColOffset(index: number): number {
    return this._colStore.$getItemOffset(index);
  }
  getRowSize(index: number): number {
    return this._rowStore.$getItemSize(index);
  }
  getColSize(index: number): number {
    return this._colStore.$getItemSize(index);
  }
  scrollToIndex(opts: GridScrollToIndexOpts): void {
    gridScrollToIndex(
      this.driver,
      this._rowStore,
      this._colStore,
      this.headerRows(),
      this.sectionRows(),
      this.footerRows(),
      this.headerCols(),
      this.footerCols(),
      opts,
    );
  }
  scrollTo({
    vertical,
    horizontal,
  }: {
    vertical?: number;
    horizontal?: number;
  }): void {
    gridScrollTo(this.driver, vertical, horizontal);
  }
  scrollBy({
    vertical,
    horizontal,
  }: {
    vertical?: number;
    horizontal?: number;
  }): void {
    gridScrollBy(
      this.driver,
      this._rowStore,
      this._colStore,
      vertical,
      horizontal,
    );
  }
}
