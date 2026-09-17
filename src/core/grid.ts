import {
  getAxisLength,
  type GridLayout,
  type VGridAxis,
  type VGridTrackSize,
} from "./layouts/grid.js";
import {
  ACTION_ITEMS_LENGTH_CHANGE,
  ACTION_RELAYOUT,
  type VirtualStore,
} from "./store.js";
import { type ItemsRange, type ScrollToIndexAlign } from "./types.js";
import { max, min, NULL, sort } from "./utils.js";

/**
 * The number of rows or columns pinned to the edges of the viewport.
 *
 * A number pins that many leading rows/columns, and an object pins `start` at the start edge and `end` at the end edge.
 */
export type VGridPinned = number | { start?: number; end?: number };

/**
 * A cell position in the grid.
 */
export interface VGridCell {
  /**
   * The row index of the cell.
   */
  rowIndex: number;
  /**
   * The column index of the cell.
   */
  colIndex: number;
}

/**
 * A cell merged over multiple rows and/or columns in the grid.
 *
 * {@link VGridCell.rowIndex} and {@link VGridCell.colIndex} point to the origin cell (top row, start column) of the merged area.
 */
export interface VGridSpan extends VGridCell {
  /**
   * The number of rows the cell spans.
   * @defaultValue 1
   */
  rowSpan?: number;
  /**
   * The number of columns the cell spans.
   * @defaultValue 1
   */
  colSpan?: number;
}

/**
 * The cell to scroll to and the options of the scroll. The axis whose index is omitted is not scrolled.
 */
export interface VGridScrollToIndexOpts {
  /**
   * The row index of the cell.
   */
  rowIndex?: number;
  /**
   * The column index of the cell.
   */
  colIndex?: number;
  /**
   * Alignment of the cell in the area between the pinned rows.
   *
   * - `start`: Align the cell to the start of the area.
   * - `center`: Align the cell to the center of the area.
   * - `end`: Align the cell to the end of the area.
   * - `nearest`: If the cell is already completely visible, don't scroll. Otherwise scroll until it becomes visible. That is similar behavior to [`nearest` option of scrollIntoView](https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView).
   *
   * @defaultValue "start"
   */
  rowAlign?: ScrollToIndexAlign;
  /**
   * Alignment of the cell in the area between the pinned columns. See {@link VGridScrollToIndexOpts.rowAlign} for the values.
   * @defaultValue "start"
   */
  colAlign?: ScrollToIndexAlign;
}

/**
 * The scroll offsets of the grid in pixels. The axis whose offset is omitted is not scrolled.
 */
export interface VGridScrollOffset {
  /**
   * The vertical offset.
   */
  vertical?: number;
  /**
   * The horizontal offset.
   */
  horizontal?: number;
}

/**
 * @internal
 */
export const updateGridAxis = (
  store: VirtualStore,
  layout: GridLayout,
  axis: VGridAxis<unknown>,
  size: VGridTrackSize | string,
  mutable?: boolean,
) => {
  const length = getAxisLength(axis);
  if (length !== store.$getItemsLength()) {
    store.$update(ACTION_ITEMS_LENGTH_CHANGE, [length]);
  }
  // The tracks are shifted by the jump deferred during scrolling, which the layout doesn't include.
  const jump = layout.$setAxis(
    axis,
    size,
    store.$getScrollOffset() - store.$getItemOffset(0),
    mutable,
  );
  // undefined means nothing changed, and 0 means the tracks changed without a jump.
  if (jump != NULL) {
    store.$update(ACTION_RELAYOUT, jump);
  }
};

const EMPTY: readonly never[] = [];
// The states of the previous plan of each grid, keyed by its row layout which is created once
const rowStatesCache = /*#__PURE__*/ new WeakMap<
  GridLayout,
  ReadonlyMap<number, GridRowState>
>();

/**
 * @internal
 */
export const getPinnedStart = (
  pinned: VGridPinned | undefined,
  count: number,
): number =>
  min(
    (typeof pinned === "number" ? pinned : pinned && pinned.start) || 0,
    count,
  );

/**
 * @internal
 */
export const getTrailStart = (
  pinned: VGridPinned | undefined,
  count: number,
  pinnedStart: number,
): number =>
  count -
  min(
    (typeof pinned !== "number" && pinned && pinned.end) || 0,
    count - pinnedStart,
  );

type SpanArea = readonly [
  row: number,
  col: number,
  rowTo: number,
  colTo: number,
];

const hasIndexIn = (
  indexes: readonly number[],
  from: number,
  to: number,
): boolean => {
  for (const i of indexes) {
    if (i >= from && i < to) {
      return true;
    }
  }
  return false;
};

const hasTrackIn = (
  extras: readonly number[],
  from: number,
  to: number,
  pinnedStart: number,
  start: number,
  end: number,
  trailStart: number,
): boolean =>
  from < pinnedStart ||
  max(from, start) < min(to, end + 1) ||
  trailStart < to ||
  hasIndexIn(extras, from, to);

// The rendered tracks in order, whose extras are sorted.
const getTrackIndexes = (
  extras: readonly number[],
  count: number,
  pinnedStart: number,
  start: number,
  end: number,
  trailStart: number,
): number[] => {
  const indexes: number[] = [];
  for (let i = 0; i < pinnedStart; i++) {
    indexes.push(i);
  }
  // The extras are out of the pinned tracks and the range, so they are before or after the range.
  const extrasLength = extras.length;
  let e = 0;
  for (; e < extrasLength; e++) {
    const i = extras[e]!;
    if (i > end) {
      break;
    }
    indexes.push(i);
  }
  for (let i = start; i <= end; i++) {
    indexes.push(i);
  }
  for (; e < extrasLength; e++) {
    indexes.push(extras[e]!);
  }
  for (let i = trailStart; i < count; i++) {
    indexes.push(i);
  }
  return indexes;
};

// An index out of the grid is after the start of the tracks pinned to the end, so it's taken as rendered and never added.
const addTrack = (
  extras: number[],
  index: number,
  pinnedStart: number,
  start: number,
  end: number,
  trailStart: number,
): void => {
  if (
    !hasTrackIn(extras, index, index + 1, pinnedStart, start, end, trailStart)
  ) {
    extras.push(index);
  }
};

const getEndInset = (layout: GridLayout, index: number): number =>
  layout.$getTotalSize() -
  layout.$getItemOffset(index) -
  layout.$getItemSize(index);

const getTemplate = (
  layout: GridLayout,
  indexes: readonly number[],
  measured: readonly (boolean | undefined)[],
  sortedCuts: readonly number[],
  measuredSize: string,
  count: number,
): string => {
  const indexesLength = indexes.length;
  const cutsLength = sortedCuts.length;
  // The lines are named by the index, so the cells keep their grid-area while the range moves.
  // https://drafts.csswg.org/css-grid-2/#subgrid-line-name-inheritance
  let template = "[l0]";
  let line = 0;
  let i = 0;
  let c = 0;
  while (i < indexesLength || c < cutsLength) {
    const index = indexes[i];
    const cut = sortedCuts[c];
    if (cut != NULL && cut <= line) {
      c++;
      continue;
    }
    let to: number;
    let size: string;
    if (index === line) {
      to = line + 1;
      // The cells in the rows size the max-content tracks of the container.
      // https://drafts.csswg.org/css-grid-2/#subgrid-item-contribution
      // An auto track without a cell measuring it keeps the size of the layout as the min, as the spanning cells don't give the size.
      size =
        measured[i] == NULL
          ? layout.$getItemSize(line) + "px"
          : measured[i]
            ? measuredSize
            : "minmax(" + layout.$getItemSize(line) + "px,auto)";
      i++;
    } else {
      // The tracks without rendered cells are merged until the next rendered track or the end of a span.
      to = cut == NULL || (index != NULL && index < cut) ? index! : cut;
      // A fixed track this large makes WebKit misplace the cells after one of them is focused, so the size is given as the min.
      size =
        "minmax(" +
        (layout.$getItemOffset(to - 1) +
          layout.$getItemSize(to - 1) -
          layout.$getItemOffset(line)) +
        "px,auto)";
    }
    template += " " + size + " [l" + to + "]";
    line = to;
  }
  // The tracks after the last rendered one extend the scrollable overflow to the end, as the container is not sized on the inline axis.
  // https://drafts.csswg.org/css-overflow-3/#scrollable-overflow-region
  if (line < count) {
    template +=
      " minmax(" +
      (layout.$getTotalSize() - layout.$getItemOffset(line)) +
      "px,auto) [l" +
      count +
      "]";
  }
  return template;
};

type GridRole = "cell" | "columnheader" | "rowheader";

type GridSort = VGridCell & {
  order: "ascending" | "descending" | "other";
};

/**
 * The inline style of an element of the grid, whose keys are the property names in camelCase and whose lengths are in px.
 */
type GridStyle = Readonly<Record<string, string | number | undefined>>;

/**
 * @internal
 */
export const gridStyleToString = (style: GridStyle): string => {
  let css = "";
  for (const key in style) {
    const value = style[key];
    if (value != NULL) {
      css +=
        key.replace(/[A-Z]/g, (c) => "-" + c.toLowerCase()) + ":" + value + ";";
    }
  }
  return css;
};

/**
 * @internal
 */
export interface GridPlan {
  readonly $rowTemplate: string;
  readonly $colTemplate: string;
  readonly $groups: readonly (GridRowGroupState | GridRowState)[];
}

/**
 * Creates the templates and the states of the rendered rows and cells. The rows and the cells whose values are unchanged keep the states of the previous plan of the grid, so the components skip them by identity.
 * @internal
 */
export const createGridPlan = (
  rowLayout: Readonly<GridLayout>,
  colLayout: Readonly<GridLayout>,
  rowRange: Readonly<ItemsRange>,
  colRange: Readonly<ItemsRange>,
  pinnedRows: Readonly<VGridPinned> | undefined,
  pinnedCols: Readonly<VGridPinned> | undefined,
  spans: readonly Readonly<VGridSpan>[] = EMPTY,
  kept: readonly Readonly<VGridCell>[] = EMPTY,
  // undefined means the rows pinned to the start, which are rendered anyway
  columnHeaderRows?: readonly number[],
  rowHeaderCols: readonly number[] = EMPTY,
  sortedCell?: Readonly<GridSort>,
): GridPlan => {
  const rowCount = rowLayout.$getLength();
  const colCount = colLayout.$getLength();
  const rowPinnedStart = getPinnedStart(pinnedRows, rowCount);
  const rowTrailStart = getTrailStart(pinnedRows, rowCount, rowPinnedStart);
  const colPinnedStart = getPinnedStart(pinnedCols, colCount);
  const colTrailStart = getTrailStart(pinnedCols, colCount, colPinnedStart);
  const rowRangeStart = max(rowRange[0], rowPinnedStart);
  const rowRangeEnd = min(rowRange[1], rowTrailStart - 1);
  const colRangeStart = max(colRange[0], colPinnedStart);
  const colRangeEnd = min(colRange[1], colTrailStart - 1);
  const keptKeys = new Set<number>();
  const extraRows: number[] = [];
  const extraCols: number[] = [];
  // The spans over the cells rendered for the ranges, the kept cells and the headers.
  const laid: SpanArea[] = [];

  for (const { rowIndex, colIndex } of kept) {
    // A kept cell may be left out of the grid after the rows or the columns are removed.
    if (rowIndex >= rowCount || colIndex >= colCount) {
      continue;
    }
    addTrack(
      extraRows,
      rowIndex,
      rowPinnedStart,
      rowRangeStart,
      rowRangeEnd,
      rowTrailStart,
    );
    addTrack(
      extraCols,
      colIndex,
      colPinnedStart,
      colRangeStart,
      colRangeEnd,
      colTrailStart,
    );
    keptKeys.add(rowIndex * colCount + colIndex);
  }
  // The headers label the cells, so they are rendered even out of the ranges.
  // https://www.w3.org/TR/wai-aria-1.2/#columnheader
  // https://www.w3.org/TR/wai-aria-1.2/#rowheader
  if (columnHeaderRows) {
    for (const rowIndex of columnHeaderRows) {
      addTrack(
        extraRows,
        rowIndex,
        rowPinnedStart,
        rowRangeStart,
        rowRangeEnd,
        rowTrailStart,
      );
    }
  }
  for (const colIndex of rowHeaderCols) {
    addTrack(
      extraCols,
      colIndex,
      colPinnedStart,
      colRangeStart,
      colRangeEnd,
      colTrailStart,
    );
  }
  // The spans only over the headers, which are also rendered at the origins of the other spans.
  let overHeaders: SpanArea[] = [];
  for (const span of spans) {
    const row = span.rowIndex;
    const col = span.colIndex;
    // A span may be left out of the grid after the rows or the columns are removed.
    if (row >= rowCount || col >= colCount) {
      continue;
    }
    const rowTo = min(row + (span.rowSpan || 1), rowCount);
    const colTo = min(col + (span.colSpan || 1), colCount);
    if (rowTo - row < 2 && colTo - col < 2) {
      continue;
    }
    const hasRowTrack = hasTrackIn(
      extraRows,
      row,
      rowTo,
      rowPinnedStart,
      rowRangeStart,
      rowRangeEnd,
      rowTrailStart,
    );
    if (
      hasRowTrack &&
      hasTrackIn(
        extraCols,
        col,
        colTo,
        colPinnedStart,
        colRangeStart,
        colRangeEnd,
        colTrailStart,
      )
    ) {
      laid.push([row, col, rowTo, colTo]);
    } else if (
      hasRowTrack
        ? columnHeaderRows
          ? hasIndexIn(columnHeaderRows, row, rowTo)
          : row < rowPinnedStart
        : hasIndexIn(rowHeaderCols, col, colTo)
    ) {
      overHeaders.push([row, col, rowTo, colTo]);
    }
  }
  // The origins are rendered, and the spans over the headers rendered for them are laid until no span is laid.
  for (let laidIndex = 0; laidIndex < laid.length;) {
    for (; laidIndex < laid.length; laidIndex++) {
      const [row, col] = laid[laidIndex]!;
      addTrack(
        extraRows,
        row,
        rowPinnedStart,
        rowRangeStart,
        rowRangeEnd,
        rowTrailStart,
      );
      addTrack(
        extraCols,
        col,
        colPinnedStart,
        colRangeStart,
        colRangeEnd,
        colTrailStart,
      );
    }
    const rest: SpanArea[] = [];
    for (const area of overHeaders) {
      (hasTrackIn(
        extraRows,
        area[0],
        area[2],
        rowPinnedStart,
        rowRangeStart,
        rowRangeEnd,
        rowTrailStart,
      ) &&
      hasTrackIn(
        extraCols,
        area[1],
        area[3],
        colPinnedStart,
        colRangeStart,
        colRangeEnd,
        colTrailStart,
      )
        ? laid
        : rest
      ).push(area);
    }
    overHeaders = rest;
  }
  // The tracks are all known now.
  sort(extraRows);
  sort(extraCols);
  const rowIndexes = getTrackIndexes(
    extraRows,
    rowCount,
    rowPinnedStart,
    rowRangeStart,
    rowRangeEnd,
    rowTrailStart,
  );
  const cols = getTrackIndexes(
    extraCols,
    colCount,
    colPinnedStart,
    colRangeStart,
    colRangeEnd,
    colTrailStart,
  );
  const colLength = cols.length;

  // The spans of the cells: the numbers of the rows and the columns at the origins, and null at the covered cells.
  const spanCells = new Map<
    number,
    readonly [rowSpan: number, colSpan: number] | null
  >();
  const rowCuts: number[] = [];
  const colCuts: number[] = [];
  for (const [row, col, rowTo, colTo] of laid) {
    // The lines at the ends of the spans are in the templates, as a missing named line is found in the implicit grid.
    // https://drafts.csswg.org/css-grid-2/#grid-placement-int
    rowCuts.push(rowTo);
    colCuts.push(colTo);
    // The columns are in order, so the covered ones start at the column of the span.
    let colStart = 0;
    while (cols[colStart]! < col) {
      colStart++;
    }
    for (const r of rowIndexes) {
      if (r >= rowTo) {
        break;
      }
      if (r >= row) {
        const rowKey = r * colCount;
        for (let k = colStart; k < colLength; k++) {
          const c = cols[k]!;
          if (c >= colTo) {
            break;
          }
          spanCells.set(rowKey + c, NULL);
        }
      }
    }
    spanCells.set(row * colCount + col, [rowTo - row, colTo - col]);
  }
  sort(rowCuts);
  sort(colCuts);

  // A track is measured by its first rendered cell which doesn't span over the other tracks, and is undefined if its size is given.
  const measuredCols: (boolean | undefined)[] = [];
  const extraColFlags: boolean[] = [];
  const rowHeaderColFlags: boolean[] = [];
  const stickyStarts: (number | undefined)[] = [];
  const stickyEnds: (number | undefined)[] = [];
  for (const colIndex of cols) {
    const startPinned = colIndex < colPinnedStart;
    const endPinned = colIndex >= colTrailStart;
    measuredCols.push(colLayout.$isMeasurable(colIndex) ? false : undefined);
    extraColFlags.push(
      !startPinned &&
        !endPinned &&
        (colIndex < colRangeStart || colIndex > colRangeEnd),
    );
    rowHeaderColFlags.push(rowHeaderCols.includes(colIndex));
    stickyStarts.push(
      startPinned ? colLayout.$getItemOffset(colIndex) : undefined,
    );
    // A sticky box keeps its edges in the scrollport, so the end inset is from the end of the track.
    // https://drafts.csswg.org/css-position-3/#stickypos-insets
    // https://wpt.fyi/results/css/css-position/sticky/position-sticky-grid.html
    stickyEnds.push(endPinned ? getEndInset(colLayout, colIndex) : undefined);
  }

  // TODO optimize: the rows and the columns out of the ranges are crossed with each other, which is quadratic for many cells kept far away from each other.
  const startRows: GridRowState[] = [];
  // The rows which are not pinned are not grouped, as Firefox on macOS keeps the stale columns of the table when the rows in a group change.
  const groups: (GridRowGroupState | GridRowState)[] = [];
  const endRows: GridRowState[] = [];
  const measuredRows: (boolean | undefined)[] = [];
  const prev = rowStatesCache.get(rowLayout);
  const rowStates = new Map<number, GridRowState>();
  for (const rowIndex of rowIndexes) {
    const pinnedTop = rowIndex < rowPinnedStart;
    const pinnedBottom = rowIndex >= rowTrailStart;
    const pinned = pinnedTop || pinnedBottom;
    const rowExtra =
      !pinned && (rowIndex < rowRangeStart || rowIndex > rowRangeEnd);
    const isHeaderRow = columnHeaderRows
      ? columnHeaderRows.includes(rowIndex)
      : pinnedTop;
    const rowKey = rowIndex * colCount;
    const prevRow = prev && prev.get(rowIndex);
    const prevCells = prevRow && prevRow.$cells;
    const rowCells: GridCellState[] = [];
    // The cells are in the order of the columns, so the previous cell of a column is found by walking them once.
    let p = 0;
    let measuredRow = rowLayout.$isMeasurable(rowIndex) ? false : undefined;
    let rowEnd = rowIndex + 1;
    let changed = false;
    for (let k = 0; k < colLength; k++) {
      const colIndex = cols[k]!;
      const key = rowKey + colIndex;
      const span = spanCells.get(key);
      if (
        span === NULL ||
        (!span &&
          (rowExtra || extraColFlags[k]) &&
          !isHeaderRow &&
          !rowHeaderColFlags[k] &&
          !keptKeys.has(key))
      ) {
        continue;
      }
      let rowSpan: number | undefined;
      let colSpan: number | undefined;
      let stickyEnd = stickyEnds[k];
      let measureRowIndex: number | undefined;
      let measureColIndex: number | undefined;
      if (span) {
        rowSpan = span[0];
        colSpan = span[1];
        rowEnd = max(rowEnd, rowIndex + rowSpan);
        // The end inset of a span is from its last column.
        if (stickyEnd != NULL) {
          stickyEnd = getEndInset(colLayout, colIndex + colSpan - 1);
        }
      }
      if (measuredRow === false && (!rowSpan || rowSpan < 2)) {
        measureRowIndex = rowIndex;
        measuredRow = true;
      }
      if (measuredCols[k] === false && (!colSpan || colSpan < 2)) {
        measureColIndex = colIndex;
        measuredCols[k] = true;
      }
      const stickyStart = stickyStarts[k];
      const role: GridRole = isHeaderRow
        ? "columnheader"
        : rowHeaderColFlags[k]
          ? "rowheader"
          : "cell";
      // aria-sort is allowed only on the headers
      // https://www.w3.org/TR/wai-aria-1.2/#aria-sort
      const sortOrder =
        sortedCell &&
        sortedCell.rowIndex === rowIndex &&
        sortedCell.colIndex === colIndex &&
        role !== "cell"
          ? sortedCell.order
          : undefined;
      let cell: GridCellState | undefined;
      if (prevCells) {
        while (p < prevCells.length && prevCells[p]!.$col < colIndex) {
          p++;
        }
        cell = prevCells[p];
      }
      if (
        !cell ||
        cell.$col !== colIndex ||
        cell.$rowSpan !== rowSpan ||
        cell.$colSpan !== colSpan ||
        cell.$start !== stickyStart ||
        cell.$end !== stickyEnd ||
        cell.$measureRow !== measureRowIndex ||
        cell.$measureCol !== measureColIndex ||
        cell.$role !== role ||
        cell.$sort !== sortOrder
      ) {
        const style: {
          contain: string;
          display: string;
          gridArea: string;
          height?: string;
          minHeight?: string;
          width?: string;
          minWidth?: string;
          zIndex?: number;
          position?: string;
          insetInlineStart?: string;
          insetInlineEnd?: string;
        } = {
          contain: "layout style",
          display: "grid",
          // A span ends at the named line instead of the number of tracks, because the unrendered rows/columns are merged into one track.
          gridArea: rowSpan
            ? "1/l" +
              colIndex +
              "/l" +
              (rowIndex + rowSpan) +
              "/l" +
              (colIndex + colSpan!)
            : "1/l" + colIndex,
        };
        // A spanning cell fills the tracks it spans without giving their sizes.
        // https://drafts.csswg.org/css-sizing-3/#cyclic-percentage-contribution
        // https://drafts.csswg.org/css-grid-2/#min-size-contribution
        if (rowSpan && rowSpan > 1) {
          style.height = "0px";
          style.minHeight = "100%";
          // Over the rows it spans over, which are painted later
          // https://drafts.csswg.org/css-grid-2/#z-order
          style.zIndex = 1;
        }
        if (colSpan && colSpan > 1) {
          style.width = "0px";
          style.minWidth = "100%";
        }
        if (stickyStart != NULL) {
          style.insetInlineStart = stickyStart + "px";
        } else if (stickyEnd != NULL) {
          style.insetInlineEnd = stickyEnd + "px";
        }
        if (stickyStart != NULL || stickyEnd != NULL) {
          style.position = "sticky";
          // Over the spanning cells, which may be painted later
          style.zIndex = 2;
        }
        cell = {
          $col: colIndex,
          $rowSpan: rowSpan,
          $colSpan: colSpan,
          $start: stickyStart,
          $end: stickyEnd,
          $measureRow: measureRowIndex,
          $measureCol: measureColIndex,
          $role: role,
          $sort: sortOrder,
          $style: style,
        };
        changed = true;
      }
      rowCells.push(cell);
    }
    // Aligned with rowIndexes for the template, so it's pushed before the rows without cells are skipped.
    measuredRows.push(measuredRow);
    if (!rowCells.length) {
      continue;
    }
    // A column rendered anew has no previous cell and marks the row changed, so the lengths tell the columns are the same.
    // A change of the span end changes a cell, so the row end is not compared.
    const row: GridRowState =
      prevRow && !changed && prevCells!.length === rowCells.length
        ? prevRow
        : {
            $row: rowIndex,
            $cells: rowCells,
            $style: {
              display: "grid",
              gridTemplateRows: "subgrid",
              gridTemplateColumns: "subgrid",
              gridColumn: "1/-1",
              // A subgrid clamps its items to its tracks, so the row spans to the end of its cells.
              // https://drafts.csswg.org/css-grid-2/#subgrid-implicit
              gridRow: "l" + rowIndex + "/l" + rowEnd,
            },
          };
    rowStates.set(rowIndex, row);
    (pinnedTop ? startRows : pinnedBottom ? endRows : groups).push(row);
  }

  rowStatesCache.set(rowLayout, rowStates);

  // The pinned rows at each edge are sticky together, so the cells spanning over them are stacked over the next rows as in the other rows.
  if (startRows.length) {
    groups.unshift({
      $key: -1,
      $rows: startRows,
      $style: getPinnedGroupStyle("l0/l" + rowPinnedStart, "top"),
    });
  }
  if (endRows.length) {
    groups.push({
      $key: -2,
      $rows: endRows,
      $style: getPinnedGroupStyle(
        "l" + rowTrailStart + "/l" + rowCount,
        "bottom",
      ),
    });
  }

  return {
    $rowTemplate: getTemplate(
      rowLayout,
      rowIndexes,
      measuredRows,
      rowCuts,
      "max-content",
      rowCount,
    ),
    // The auto columns share the space left in the viewport, as the columns of a table.
    // https://drafts.csswg.org/css-grid-2/#algo-stretch
    $colTemplate: getTemplate(
      colLayout,
      cols,
      measuredCols,
      colCuts,
      "minmax(max-content,auto)",
      colCount,
    ),
    $groups: groups,
  };
};

const getPinnedGroupStyle = (
  gridRow: string,
  edge: "top" | "bottom",
): GridStyle => ({
  display: "grid",
  gridTemplateRows: "subgrid",
  gridTemplateColumns: "subgrid",
  gridColumn: "1/-1",
  gridRow,
  position: "sticky",
  [edge]: "0px",
  // Over the sticky and spanning cells of the other rows
  zIndex: 3,
});

/**
 * @internal
 */
export interface GridCellState {
  readonly $col: number;
  readonly $rowSpan: number | undefined;
  readonly $colSpan: number | undefined;
  readonly $start: number | undefined;
  readonly $end: number | undefined;
  readonly $measureRow: number | undefined;
  readonly $measureCol: number | undefined;
  readonly $role: GridRole;
  readonly $sort: GridSort["order"] | undefined;
  readonly $style: GridStyle;
}

/**
 * @internal
 */
export interface GridRowState {
  readonly $row: number;
  readonly $cells: readonly GridCellState[];
  readonly $style: GridStyle;
}

/**
 * @internal
 */
export interface GridRowGroupState {
  // Negative, not to collide with the indexes keying the rows beside the groups
  readonly $key: number;
  readonly $rows: readonly GridRowState[];
  readonly $style: GridStyle;
}
