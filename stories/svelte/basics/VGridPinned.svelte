<script lang="ts">
  import { VGrid } from "../../../src/svelte";

  const ROWS = 1000;
  const COLS = 500;
  const PINNED_ROWS = { start: 1, end: 1 };
  const PINNED_COLS = { start: 2, end: 1 };
  const isPinnedRow = (rowIndex: number) =>
    rowIndex < PINNED_ROWS.start || rowIndex >= ROWS - PINNED_ROWS.end;
  const isPinnedCol = (colIndex: number) =>
    colIndex < PINNED_COLS.start || colIndex >= COLS - PINNED_COLS.end;
</script>

<VGrid
  rows={ROWS}
  rowHeight={40}
  cols={COLS}
  colWidth={100}
  pinnedRows={PINNED_ROWS}
  pinnedCols={PINNED_COLS}
  style="height: 100vh; box-sizing: border-box; border: solid 1px gray;"
>
  {#snippet children(rowIndex, colIndex)}
    <div
      style="padding: 4px; border-right: solid 1px gray; border-bottom: solid 1px gray;"
      style:background={isPinnedRow(rowIndex)
        ? "darkgray"
        : isPinnedCol(colIndex)
          ? "lightgray"
          : "white"}
      style:color={isPinnedRow(rowIndex) ? "white" : undefined}
    >
      {rowIndex} / {colIndex}
    </div>
  {/snippet}
</VGrid>
