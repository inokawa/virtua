import {
  getAxisLength,
  type GridLayout,
  type GridAxis,
  type GridTrackSize,
} from "./layouts/grid.js";
import {
  ACTION_ITEMS_LENGTH_CHANGE,
  ACTION_RELAYOUT,
  type VirtualStore,
} from "./store.js";
import { type ItemsRange } from "./types.js";
import { clamp, EMPTY, max, min, NULL, sort } from "./utils.js";

/**
 * A cell position in the grid.
 */
export interface GridCell {
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
 * {@link GridCell.rowIndex} and {@link GridCell.colIndex} point to the origin cell (top row, start column) of the merged area.
 */
export interface GridSpan extends GridCell {
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
 * @internal
 */
export const updateGridAxis = (
  store: VirtualStore,
  layout: GridLayout,
  axis: GridAxis<unknown>,
  size: GridTrackSize | string,
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

// The states of the previous plan of each grid, keyed by its row layout which is created once
const rowStatesCache = /*#__PURE__*/ new WeakMap<
  GridLayout,
  ReadonlyMap<number, GridRowState>
>();

const hasTrackIn = (
  extras: readonly number[],
  from: number,
  to: number,
  pinnedStart: number,
  start: number,
  end: number,
  trailStart: number,
): boolean => {
  if (
    from < pinnedStart ||
    max(from, start) < min(to, end + 1) ||
    trailStart < to
  ) {
    return true;
  }
  for (const i of extras) {
    if (i >= from && i < to) {
      return true;
    }
  }
  return false;
};

/**
 * The sections start at the section rows between the pinned rows.
 * @internal
 */
export const getSectionStarts = (
  sectionRows: readonly number[],
  pinnedStart: number,
  trailStart: number,
): number[] => {
  const starts: number[] = [];
  for (const rowIndex of sectionRows) {
    if (rowIndex >= pinnedStart && rowIndex < trailStart) {
      starts.push(rowIndex);
    }
  }
  return sort(starts);
};

/**
 * The index of the section of the row, or -1. The last section ends at the rows pinned to the end.
 * @internal
 */
export const getSectionIndex = (
  starts: readonly number[],
  rowIndex: number,
  trailStart: number,
): number => {
  if (rowIndex >= trailStart) {
    return -1;
  }
  let lo = 0;
  let hi = starts.length;
  while (lo < hi) {
    const mid = (lo + hi) >> 1;
    if (starts[mid]! <= rowIndex) {
      lo = mid + 1;
    } else {
      hi = mid;
    }
  }
  return lo - 1;
};

const addSectionHeader = (
  extras: number[],
  sectionStarts: readonly number[],
  rowIndex: number,
  trailStart: number,
): void => {
  const section = getSectionIndex(sectionStarts, rowIndex, trailStart);
  if (section >= 0) {
    extras.push(sectionStarts[section]!);
  }
};

const addExtras = (
  indexes: number[],
  extras: readonly number[],
  e: number,
  bound: number,
  lastRendered: number,
): number => {
  const extrasLength = extras.length;
  for (; e < extrasLength && extras[e]! < bound; e++) {
    const i = extras[e]!;
    if (i > lastRendered) {
      indexes.push(i);
      lastRendered = i;
    }
  }
  return e;
};

// The rendered tracks in order: the pinned tracks, the range, and the sorted extras which may repeat or fall in them.
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
  const e = addExtras(indexes, extras, 0, start, pinnedStart - 1);
  for (let i = start; i <= end; i++) {
    indexes.push(i);
  }
  addExtras(indexes, extras, e, trailStart, end);
  for (let i = trailStart; i < count; i++) {
    indexes.push(i);
  }
  return indexes;
};

const getSpanRowEnd = (span: Readonly<GridSpan>, rowCount: number): number =>
  min(span.rowIndex + (span.rowSpan || 1), rowCount);
const getSpanColEnd = (span: Readonly<GridSpan>, colCount: number): number =>
  min(span.colIndex + (span.colSpan || 1), colCount);

const getTemplate = (
  layout: GridLayout,
  indexes: readonly number[],
  measured: readonly (boolean | null)[],
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
  // The tracks after the last rendered one extend the scrollable overflow to the end, as the container is not sized on the inline axis.
  // https://drafts.csswg.org/css-overflow-3/#scrollable-overflow-region
  while (line < count) {
    while (c < cutsLength && sortedCuts[c]! <= line) {
      c++;
    }
    const index = i < indexesLength ? indexes[i]! : count;
    let to: number;
    let size: string;
    if (index === line) {
      to = line + 1;
      // The cells in the rows size the max-content tracks of the container.
      // https://drafts.csswg.org/css-grid-2/#subgrid-item-contribution
      // An auto track without a cell measuring it keeps the size of the layout as the min, as the spanning cells don't give the size.
      const m = measured[i];
      size =
        m == NULL
          ? layout.$getItemSize(line) + "px"
          : m
            ? measuredSize
            : "minmax(" + layout.$getItemSize(line) + "px,auto)";
      i++;
    } else {
      // The tracks without rendered cells are merged until the next rendered track or the end of a span.
      to = min(index, c < cutsLength ? sortedCuts[c]! : count);
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
  return template;
};

type GridCellRole = "cell" | "columnheader" | "rowheader";

type GridSort = GridCell & {
  order: "ascending" | "descending" | "other";
};

/**
 * The inline style of an element of the grid, whose keys are the property names in camelCase and whose lengths are in px.
 */
type GridStyle = Readonly<Record<string, string | number>>;

/**
 * @internal
 */
export const gridStyleToString = (style: GridStyle): string => {
  let css = "";
  for (const key in style) {
    css +=
      key.replace(/[A-Z]/g, (c) => "-" + c.toLowerCase()) +
      ":" +
      style[key] +
      ";";
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
  headerRows: number = 0,
  sectionRows: readonly number[] = EMPTY,
  footerRows: number = 0,
  headerCols: number = 0,
  footerCols: number = 0,
  spans: readonly Readonly<GridSpan>[] = EMPTY,
  kept: readonly Readonly<GridCell>[] = EMPTY,
  sortedCell?: Readonly<GridSort>,
): GridPlan => {
  const totalRowCount = rowLayout.$getLength();
  const totalColCount = colLayout.$getLength();
  const rowPinnedStart = min(headerRows, totalRowCount);
  const rowTrailStart = max(totalRowCount - footerRows, rowPinnedStart);
  const colPinnedStart = min(headerCols, totalColCount);
  const colTrailStart = max(totalColCount - footerCols, colPinnedStart);
  const rowRangeStart = clamp(rowRange[0], rowPinnedStart, rowTrailStart);
  const rowRangeEnd = min(rowRange[1], rowTrailStart - 1);
  const colRangeStart = clamp(colRange[0], colPinnedStart, colTrailStart);
  const colRangeEnd = min(colRange[1], colTrailStart - 1);
  const sectionStarts = getSectionStarts(
    sectionRows,
    rowPinnedStart,
    rowTrailStart,
  );
  // The header column next to the body labels the rows
  const rowHeaderCol = max(colPinnedStart - 1, 0);

  // The headers label the cells, so they are rendered even out of the ranges.
  // https://www.w3.org/TR/wai-aria-1.2/#columnheader
  // https://www.w3.org/TR/wai-aria-1.2/#rowheader
  const extraRows: number[] = [];
  const extraCols: number[] = [];
  // The cells rendered even out of the ranges, which render their rows, the headers of their sections and their columns. A kept cell is a span over itself.
  const extraCells: Readonly<GridSpan>[] = [];
  for (const cell of kept) {
    // A kept cell may be left out of the grid after the rows or the columns are removed.
    if (cell.rowIndex < totalRowCount && cell.colIndex < totalColCount) {
      extraCells.push(cell);
    }
  }
  const sectionLength = sectionStarts.length;
  if (sectionLength) {
    addSectionHeader(extraRows, sectionStarts, rowRangeStart, rowTrailStart);
    extraCols.push(rowHeaderCol);
  }
  // The spans over the rendered tracks are laid. The spans only over the headers wait for the headers rendered for the origins of the laid spans, until no span is laid.
  let waiting = spans;
  let l = 0;
  do {
    for (; l < extraCells.length; l++) {
      const { rowIndex, colIndex } = extraCells[l]!;
      extraRows.push(rowIndex);
      addSectionHeader(extraRows, sectionStarts, rowIndex, rowTrailStart);
      extraCols.push(colIndex);
    }
    const rest: Readonly<GridSpan>[] = [];
    for (const span of waiting) {
      const row = span.rowIndex;
      const col = span.colIndex;
      const rowTo = getSpanRowEnd(span, totalRowCount);
      const colTo = getSpanColEnd(span, totalColCount);
      // A span may be left out of the grid after the rows or the columns are removed.
      if (
        row < totalRowCount &&
        col < totalColCount &&
        (rowTo - row > 1 || colTo - col > 1)
      ) {
        const hasRenderedRow = hasTrackIn(
          extraRows,
          row,
          rowTo,
          rowPinnedStart,
          rowRangeStart,
          rowRangeEnd,
          rowTrailStart,
        );
        if (
          hasRenderedRow &&
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
          extraCells.push(span);
        } else if (hasRenderedRow) {
          const section = getSectionIndex(
            sectionStarts,
            rowTo - 1,
            rowTrailStart,
          );
          if (
            row < rowPinnedStart ||
            (section >= 0 && sectionStarts[section]! >= row)
          ) {
            rest.push(span);
          }
        } else if (col < colPinnedStart) {
          rest.push(span);
        }
      }
    }
    waiting = rest;
  } while (l < extraCells.length);
  // The tracks are all known now.
  sort(extraRows);
  sort(extraCols);
  const rows = getTrackIndexes(
    extraRows,
    totalRowCount,
    rowPinnedStart,
    rowRangeStart,
    rowRangeEnd,
    rowTrailStart,
  );
  const cols = getTrackIndexes(
    extraCols,
    totalColCount,
    colPinnedStart,
    colRangeStart,
    colRangeEnd,
    colTrailStart,
  );
  const rowsLength = rows.length;
  const colsLength = cols.length;

  // The spans over the cells, whose origins are the cells at their positions
  const spanCells = new Map<number, Readonly<GridSpan>>();
  // The lines at the ends of the spans and the sections are in the templates, as a missing named line is found in the implicit grid.
  // https://drafts.csswg.org/css-grid-2/#grid-placement-int
  const rowCuts: number[] = [];
  const colCuts: number[] = [];
  // The kept cells are before the spans, so a span is over the kept cells under it.
  for (const span of extraCells) {
    const rowTo = getSpanRowEnd(span, totalRowCount);
    const colTo = getSpanColEnd(span, totalColCount);
    rowCuts.push(rowTo);
    colCuts.push(colTo);
    // The tracks are in order, so the covered ones start at the origin of the span.
    const colStart = cols.indexOf(span.colIndex);
    for (
      let i = rows.indexOf(span.rowIndex);
      i < rowsLength && rows[i]! < rowTo;
      i++
    ) {
      const rowKey = rows[i]! * totalColCount;
      for (let j = colStart; j < colsLength && cols[j]! < colTo; j++) {
        spanCells.set(rowKey + cols[j]!, span);
      }
    }
  }

  // A track is measured by its first rendered cell which doesn't span over the other tracks, and is null if its size is given.
  const measuredCols: (boolean | null)[] = [];
  for (const colIndex of cols) {
    measuredCols.push(colLayout.$isMeasurable(colIndex) ? false : NULL);
  }
  const measuredRows: (boolean | null)[] = [];
  // The section headers stick where the first row after the pinned rows is laid.
  const stickyTop = rowLayout.$getItemOffset(rowPinnedStart);

  // The rows out of the pinned rows and the sections are not grouped, as Firefox on macOS keeps the stale columns of the table when the rows in a group change.
  const groups: (GridRowGroupState | GridRowState)[] = [];
  let groupRows: (GridRowGroupState | GridRowState)[] = groups;
  const prev = rowStatesCache.get(rowLayout);
  const rowStates = new Map<number, GridRowState>();
  // TODO optimize: the rows and the columns out of the ranges are crossed with each other, which is quadratic for many cells kept far away from each other.
  for (const rowIndex of rows) {
    const isPinnedTop = rowIndex < rowPinnedStart;
    const isPinnedBottom = rowIndex >= rowTrailStart;
    const isRowInRangeOrPinnedToEnd =
      isPinnedBottom || (rowIndex >= rowRangeStart && rowIndex <= rowRangeEnd);
    const section = getSectionIndex(sectionStarts, rowIndex, rowTrailStart);
    // The first row of the group of the row, or -1
    const groupStart = isPinnedTop
      ? 0
      : isPinnedBottom
        ? rowTrailStart
        : section < 0
          ? -1
          : sectionStarts[section]!;
    // A group starts at its first row, which is rendered whenever the other rows of the group are.
    if (rowIndex === groupStart) {
      const groupEnd = isPinnedTop
        ? rowPinnedStart
        : isPinnedBottom
          ? totalRowCount
          : // A section ends at the next section which may not be rendered, or at the rows pinned to the end
            section + 1 < sectionLength
            ? sectionStarts[section + 1]!
            : rowTrailStart;
      rowCuts.push(groupEnd);
      const groupedRows: GridRowState[] = [];
      groups.push({
        // The rows pinned to the end keep the key while the rows before them are added or removed
        $key: isPinnedTop ? -1 : isPinnedBottom ? -2 : -3 - groupStart,
        $rows: groupedRows,
        // The pinned rows at each edge are sticky together over the section headers and the cells of the other rows, so the cells spanning over them are stacked over the next rows as in the other rows.
        $style: getBoxStyle(
          groupStart,
          groupEnd,
          isPinnedTop || isPinnedBottom ? 0 : NULL,
          isPinnedBottom ? "bottom" : "top",
          4,
        ),
      });
      groupRows = groupedRows;
    } else if (groupStart < 0) {
      groupRows = groups;
    }
    const isSectionHeaderRow = section >= 0 && rowIndex === groupStart;
    const rowTop = isSectionHeaderRow ? stickyTop : NULL;
    const rowKey = rowIndex * totalColCount;
    const prevRow = prev && prev.get(rowIndex);
    const prevCells = prevRow && prevRow.$cells;
    const rowCells: GridCellState[] = [];
    // The cells are in the order of the columns, so the previous cell of a column is found by walking them once.
    let p = 0;
    let measuredRow = rowLayout.$isMeasurable(rowIndex) ? false : NULL;
    let rowEnd = rowIndex + 1;
    let hasChanged = false;
    for (let i = 0; i < colsLength; i++) {
      const colIndex = cols[i]!;
      const isPinnedStart = colIndex < colPinnedStart;
      const isPinnedEnd = colIndex >= colTrailStart;
      const isColInRangeOrPinnedToEnd =
        isPinnedEnd || (colIndex >= colRangeStart && colIndex <= colRangeEnd);
      const span = spanCells.get(rowKey + colIndex);
      if (
        span
          ? span.rowIndex === rowIndex && span.colIndex === colIndex
          : (isRowInRangeOrPinnedToEnd && isColInRangeOrPinnedToEnd) ||
            isPinnedTop ||
            isSectionHeaderRow ||
            isPinnedStart
      ) {
        const rowTo = span ? getSpanRowEnd(span, totalRowCount) : rowIndex + 1;
        const colTo = span ? getSpanColEnd(span, totalColCount) : colIndex + 1;
        const rowSpan = rowTo - rowIndex;
        const colSpan = colTo - colIndex;
        const isSpanningRows = rowSpan > 1;
        const isSpanningCols = colSpan > 1;
        const isSpanning = isSpanningRows || isSpanningCols;
        let measureRowIndex: number | undefined;
        let measureColIndex: number | undefined;
        rowEnd = max(rowEnd, rowTo);
        // A sticky box keeps its edges in the scrollport, so the end inset is from the end of the track.
        // https://drafts.csswg.org/css-position-3/#stickypos-insets
        // https://wpt.fyi/results/css/css-position/sticky/position-sticky-grid.html
        const stickyStart = isPinnedStart
          ? colLayout.$getItemOffset(colIndex)
          : NULL;
        // The end inset of a span is from its last column.
        const stickyEnd = isPinnedEnd
          ? colLayout.$getTotalSize() -
            colLayout.$getItemOffset(colTo - 1) -
            colLayout.$getItemSize(colTo - 1)
          : NULL;
        if (measuredRow === false && !isSpanningRows) {
          measureRowIndex = rowIndex;
          measuredRow = true;
        }
        if (measuredCols[i] === false && !isSpanningCols) {
          measureColIndex = colIndex;
          measuredCols[i] = true;
        }
        const role: GridCellRole = isPinnedTop
          ? "columnheader"
          : colIndex === rowHeaderCol && (isPinnedStart || isSectionHeaderRow)
            ? "rowheader"
            : "cell";
        // A merged cell gives both spans, 1 on the axis it doesn't span
        // https://www.w3.org/TR/wai-aria-1.2/#aria-rowspan
        // https://www.w3.org/TR/wai-aria-1.2/#aria-colspan
        const ariaRowSpan = isSpanning ? rowSpan : undefined;
        const ariaColSpan = isSpanning ? colSpan : undefined;
        // aria-sort is allowed only on the headers
        // https://www.w3.org/TR/wai-aria-1.2/#aria-sort
        const ariaSort =
          role !== "cell" &&
          sortedCell &&
          sortedCell.rowIndex === rowIndex &&
          sortedCell.colIndex === colIndex
            ? sortedCell.order
            : undefined;
        let cell: GridCellState | undefined;
        if (prevCells) {
          const prevCellsLength = prevCells.length;
          while (p < prevCellsLength && prevCells[p]!.$col < colIndex) {
            p++;
          }
          if (p < prevCellsLength && prevCells[p]!.$col === colIndex) {
            cell = prevCells[p];
          }
        }
        if (
          !cell ||
          cell.$rowSpan !== ariaRowSpan ||
          cell.$colSpan !== ariaColSpan ||
          cell.$start !== stickyStart ||
          cell.$end !== stickyEnd ||
          cell.$measureRow !== measureRowIndex ||
          cell.$measureCol !== measureColIndex ||
          cell.$role !== role ||
          cell.$sort !== ariaSort
        ) {
          let gridArea = "1/l" + colIndex;
          if (isSpanning) {
            // A span ends at the named line instead of the number of tracks, because the unrendered rows/columns are merged into one track.
            gridArea += "/l" + rowTo + "/l" + colTo;
          }
          const style: Record<string, string | number> = {
            contain: "layout style",
            display: "grid",
            gridArea,
          };
          // A spanning cell fills the tracks it spans without giving their sizes.
          // https://drafts.csswg.org/css-sizing-3/#cyclic-percentage-contribution
          // https://drafts.csswg.org/css-grid-2/#min-size-contribution
          if (isSpanningRows) {
            style["height"] = "0px";
            style["minHeight"] = "100%";
            // Over the rows it spans over, which are painted later
            // https://drafts.csswg.org/css-grid-2/#z-order
            style["zIndex"] = 1;
          }
          if (isSpanningCols) {
            style["width"] = "0px";
            style["minWidth"] = "100%";
          }
          if (isPinnedStart || isPinnedEnd) {
            style[isPinnedStart ? "insetInlineStart" : "insetInlineEnd"] =
              (isPinnedStart ? stickyStart : stickyEnd) + "px";
            style["position"] = "sticky";
            // Over the spanning cells, which may be painted later
            style["zIndex"] = 2;
          }
          cell = {
            $col: colIndex,
            $rowSpan: ariaRowSpan,
            $colSpan: ariaColSpan,
            $measureRow: measureRowIndex,
            $measureCol: measureColIndex,
            $role: role,
            $sort: ariaSort,
            $style: style,
            $start: stickyStart,
            $end: stickyEnd,
          };
          hasChanged = true;
        }
        rowCells.push(cell);
      }
    }
    // Aligned with rows for the template, so it's pushed before the rows without cells are skipped.
    measuredRows.push(measuredRow);
    if (rowCells.length) {
      // A column rendered anew has no previous cell and marks the row changed, so the lengths tell the columns are the same.
      // A change of the span end changes a cell, so the row end is not compared.
      const row: GridRowState =
        prevRow &&
        !hasChanged &&
        prevRow.$cells.length === rowCells.length &&
        prevRow.$top === rowTop
          ? prevRow
          : {
              $row: rowIndex,
              $cells: rowCells,
              // A subgrid clamps its items to its tracks, so the row spans to the end of its cells.
              // https://drafts.csswg.org/css-grid-2/#subgrid-implicit
              // A section header sticks in the box of its section over the sticky and spanning cells of the other rows, so it's pushed out at the end of the section.
              // https://drafts.csswg.org/css-position-3/#stickypos-insets
              $style: getBoxStyle(rowIndex, rowEnd, rowTop, "top", 3),
              $top: rowTop,
            };
      rowStates.set(rowIndex, row);
      groupRows.push(row);
    }
  }

  rowStatesCache.set(rowLayout, rowStates);

  return {
    $rowTemplate: getTemplate(
      rowLayout,
      rows,
      measuredRows,
      sort(rowCuts),
      "max-content",
      totalRowCount,
    ),
    $colTemplate: getTemplate(
      colLayout,
      cols,
      measuredCols,
      sort(colCuts),
      // The auto columns share the space left in the viewport, as the columns of a table.
      // https://drafts.csswg.org/css-grid-2/#algo-stretch
      "minmax(max-content,auto)",
      totalColCount,
    ),
    $groups: groups,
  };
};

// The box of a row or a group of the rows between the lines, which sticks at the inset from the edge if given
const getBoxStyle = (
  from: number,
  to: number,
  inset: number | null,
  edge: "top" | "bottom",
  zIndex: number,
): GridStyle => {
  const style: Record<string, string | number> = {
    display: "grid",
    gridTemplateRows: "subgrid",
    gridTemplateColumns: "subgrid",
    gridColumn: "1/-1",
    gridRow: "l" + from + "/l" + to,
  };
  if (inset != NULL) {
    style["position"] = "sticky";
    style[edge] = inset + "px";
    style["zIndex"] = zIndex;
  }
  return style;
};

/**
 * @internal
 */
export interface GridCellState {
  readonly $col: number;
  readonly $rowSpan: number | undefined;
  readonly $colSpan: number | undefined;
  readonly $measureRow: number | undefined;
  readonly $measureCol: number | undefined;
  readonly $role: GridCellRole;
  readonly $sort: GridSort["order"] | undefined;
  readonly $style: GridStyle;
  // The fields below are not rendered. They are in the style, and compared with the next plan to keep the state.
  readonly $start: number | null;
  readonly $end: number | null;
}

/**
 * @internal
 */
export interface GridRowState {
  readonly $row: number;
  readonly $cells: readonly GridCellState[];
  readonly $style: GridStyle;
  // The fields below are not rendered. They are in the style, and compared with the next plan to keep the state.
  readonly $top: number | null;
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
