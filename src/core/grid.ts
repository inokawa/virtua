import { type GridLayout } from "./layouts/grid.js";
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

// The states of the previous plan of each grid, keyed by its row layout which is created once
const rowStatesCache = /*#__PURE__*/ new WeakMap<
  GridLayout,
  ReadonlyMap<number, GridRowState>
>();

// The spans at each of the rows they cover
type GridSpanIndex = ReadonlyMap<number, readonly Readonly<GridSpan>[]>;

/**
 * @internal
 */
export const createGridSpanIndex = (
  spans: readonly Readonly<GridSpan>[] = EMPTY,
): GridSpanIndex => {
  const index = new Map<number, Readonly<GridSpan>[]>();
  for (const span of spans) {
    const rowTo = span.rowIndex + (span.rowSpan || 1);
    for (let rowIndex = span.rowIndex; rowIndex < rowTo; rowIndex++) {
      const rowSpans = index.get(rowIndex);
      if (rowSpans) {
        rowSpans.push(span);
      } else {
        index.set(rowIndex, [span]);
      }
    }
  }
  return index;
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
  rowLayout: GridLayout,
  colLayout: GridLayout,
  [rowRangeStart, rowRangeEnd]: ItemsRange,
  [colRangeStart, colRangeEnd]: ItemsRange,
  spanIndex: GridSpanIndex,
  sectionRows: readonly number[] = EMPTY,
  kept: readonly Readonly<GridCell>[] = EMPTY,
  sortedCell?: Readonly<GridSort>,
): GridPlan => {
  const totalRowCount = rowLayout.$getLength();
  const totalColCount = colLayout.$getLength();
  const rowPinnedStart = rowLayout.$getPinnedStart();
  const rowTrailStart = rowLayout.$getTrailStart();
  const colPinnedStart = colLayout.$getPinnedStart();
  const colTrailStart = colLayout.$getTrailStart();

  rowRangeStart = clamp(rowRangeStart, rowPinnedStart, rowTrailStart);
  rowRangeEnd = min(rowRangeEnd, rowTrailStart - 1);
  colRangeStart = clamp(colRangeStart, colPinnedStart, colTrailStart);
  colRangeEnd = min(colRangeEnd, colTrailStart - 1);

  const sectionStarts = getSectionStarts(
    sectionRows,
    rowPinnedStart,
    rowTrailStart,
  );
  // The header column next to the body labels the rows
  const rowHeaderCol = max(colPinnedStart - 1, 0);

  const extraRows: number[] = [];
  const extraCols: number[] = [];
  // The cells rendered even out of the ranges, which render their rows, the headers of their sections and their columns. A kept cell is a span over itself.
  const extraCells: Readonly<GridSpan>[] = [];
  for (const cell of kept) {
    // A kept cell may be left out of the grid after the rows or the columns are removed.
    if (cell.rowIndex < totalRowCount && cell.colIndex < totalColCount) {
      extraCells.push(cell);
      extraRows.push(cell.rowIndex);
    }
  }
  const keptLength = extraCells.length;
  // The header of the section of the first row in the range may be sticking under the pinned rows, so it's taken as seen.
  const firstSection = getSectionIndex(
    sectionStarts,
    rowRangeStart,
    rowTrailStart,
  );
  const firstSectionStart =
    firstSection < 0 ? -1 : sectionStarts[firstSection]!;
  if (firstSectionStart >= 0) {
    extraRows.push(firstSectionStart);
  }
  // The spans are found at the rows rendered before them.
  const seenRows = getTrackIndexes(
    sort(extraRows),
    totalRowCount,
    rowPinnedStart,
    rowRangeStart,
    rowRangeEnd,
    rowTrailStart,
  );
  for (let s = 0; s < seenRows.length; s++) {
    for (const span of spanIndex.get(seenRows[s]!) || EMPTY) {
      const { rowIndex, colIndex } = span;
      const rowTo = getSpanRowEnd(span, totalRowCount);
      const colTo = getSpanColEnd(span, totalColCount);
      // A span is found at each of the seen rows it covers, so it's taken at the first of them. It may be left out of the grid after the columns are removed.
      if (
        (s < 1 || seenRows[s - 1]! < rowIndex) &&
        colIndex < totalColCount &&
        (rowTo - rowIndex > 1 || colTo - colIndex > 1)
      ) {
        // A span is laid if one of its cells is rendered: in a visible row and a visible column, or a kept cell.
        let isLaid =
          (rowIndex < rowPinnedStart ||
            max(rowIndex, rowRangeStart) < min(rowTo, rowRangeEnd + 1) ||
            rowTrailStart < rowTo ||
            (firstSectionStart >= rowIndex && firstSectionStart < rowTo)) &&
          (colIndex < colPinnedStart ||
            max(colIndex, colRangeStart) < min(colTo, colRangeEnd + 1) ||
            colTrailStart < colTo);
        for (let k = 0; !isLaid && k < keptLength; k++) {
          const cell = extraCells[k]!;
          isLaid =
            cell.rowIndex >= rowIndex &&
            cell.rowIndex < rowTo &&
            cell.colIndex >= colIndex &&
            cell.colIndex < colTo;
        }
        if (isLaid) {
          extraCells.push(span);
        }
      }
    }
  }
  for (const { rowIndex, colIndex } of extraCells) {
    const section = getSectionIndex(sectionStarts, rowIndex, rowTrailStart);
    extraRows.push(rowIndex);
    if (section >= 0) {
      extraRows.push(sectionStarts[section]!);
    }
    extraCols.push(colIndex);
  }
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
  const sectionHeaderTop = rowLayout.$getItemOffset(rowPinnedStart);

  // The rows out of the pinned rows and the sections are not grouped, as Firefox on macOS keeps the stale columns of the table when the rows in a group change.
  const groups: (GridRowGroupState | GridRowState)[] = [];
  let groupRows: (GridRowGroupState | GridRowState)[] = groups;
  const prev = rowStatesCache.get(rowLayout);
  const rowStates = new Map<number, GridRowState>();
  // TODO optimize: the rows and the columns out of the ranges are crossed with each other, which is quadratic for many cells kept far away from each other.
  for (const rowIndex of rows) {
    const isRowPinnedStart = rowIndex < rowPinnedStart;
    const isRowPinnedEnd = rowIndex >= rowTrailStart;
    const section = getSectionIndex(sectionStarts, rowIndex, rowTrailStart);
    // The first row of the group of the row, or -1
    const groupStart = isRowPinnedStart
      ? 0
      : isRowPinnedEnd
        ? rowTrailStart
        : section < 0
          ? -1
          : sectionStarts[section]!;
    // A group starts at its first row, which is rendered whenever the other rows of the group are.
    if (rowIndex === groupStart) {
      const groupEnd = isRowPinnedStart
        ? rowPinnedStart
        : isRowPinnedEnd
          ? totalRowCount
          : // A section ends at the next section which may not be rendered, or at the rows pinned to the end
            section + 1 < sectionStarts.length
            ? sectionStarts[section + 1]!
            : rowTrailStart;
      rowCuts.push(groupEnd);
      const groupedRows: GridRowState[] = [];
      groups.push({
        // The rows pinned to the end keep the key while the rows before them are added or removed
        $key: isRowPinnedStart ? -1 : isRowPinnedEnd ? -2 : -3 - groupStart,
        $rows: groupedRows,
        // The pinned rows at each edge are sticky together over the section headers and the cells of the other rows, so the cells spanning over them are stacked over the next rows as in the other rows.
        $style: getBoxStyle(
          groupStart,
          groupEnd,
          isRowPinnedStart || isRowPinnedEnd ? 0 : NULL,
          isRowPinnedEnd ? "bottom" : "top",
          4,
        ),
      });
      groupRows = groupedRows;
    } else if (groupStart < 0) {
      groupRows = groups;
    }
    const isSectionHeaderRow = section >= 0 && rowIndex === groupStart;
    const isRowVisible =
      isRowPinnedStart ||
      isRowPinnedEnd ||
      rowIndex === firstSectionStart ||
      (rowIndex >= rowRangeStart && rowIndex <= rowRangeEnd);
    const rowTop = isSectionHeaderRow ? sectionHeaderTop : NULL;
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
      const isColPinnedStart = colIndex < colPinnedStart;
      const isColPinnedEnd = colIndex >= colTrailStart;
      const isColVisible =
        isColPinnedStart ||
        isColPinnedEnd ||
        (colIndex >= colRangeStart && colIndex <= colRangeEnd);
      const span = spanCells.get(rowKey + colIndex);
      // The headers aren't rendered either unless they're seen or kept.
      if (
        span
          ? span.rowIndex === rowIndex && span.colIndex === colIndex
          : isRowVisible && isColVisible
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
        const stickyStart = isColPinnedStart
          ? colLayout.$getItemOffset(colIndex)
          : NULL;
        const stickyEnd = isColPinnedEnd
          ? colLayout.$getItemOffset(totalColCount) -
            colLayout.$getItemOffset(colTo)
          : NULL;
        if (measuredRow === false && !isSpanningRows) {
          measureRowIndex = rowIndex;
          measuredRow = true;
        }
        if (measuredCols[i] === false && !isSpanningCols) {
          measureColIndex = colIndex;
          measuredCols[i] = true;
        }
        // https://www.w3.org/TR/wai-aria-1.2/#columnheader
        // https://www.w3.org/TR/wai-aria-1.2/#rowheader
        const role: GridCellRole = isRowPinnedStart
          ? "columnheader"
          : colIndex === rowHeaderCol &&
              (isColPinnedStart || isSectionHeaderRow)
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
          if (isColPinnedStart || isColPinnedEnd) {
            style[isColPinnedStart ? "insetInlineStart" : "insetInlineEnd"] =
              (isColPinnedStart ? stickyStart : stickyEnd) + "px";
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
