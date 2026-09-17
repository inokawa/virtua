<script setup lang="ts">
import { VGrid } from "../../../src/vue";

const ROWS = 1000;
const COLS = 500;
const PINNED_ROWS = { start: 1, end: 1 };
const PINNED_COLS = { start: 2, end: 1 };
const isPinnedRow = (rowIndex: number) =>
  rowIndex < PINNED_ROWS.start || rowIndex >= ROWS - PINNED_ROWS.end;
const isPinnedCol = (colIndex: number) =>
  colIndex < PINNED_COLS.start || colIndex >= COLS - PINNED_COLS.end;
</script>

<template>
  <VGrid
    :rows="ROWS"
    :rowHeight="40"
    :cols="COLS"
    :colWidth="100"
    :pinnedRows="PINNED_ROWS"
    :pinnedCols="PINNED_COLS"
    :style="{
      height: '100vh',
      boxSizing: 'border-box',
      border: 'solid 1px gray',
    }"
    #default="{ row: rowIndex, col: colIndex }"
  >
    <div
      :style="{
        background: isPinnedRow(rowIndex)
          ? 'darkgray'
          : isPinnedCol(colIndex)
            ? 'lightgray'
            : 'white',
        color: isPinnedRow(rowIndex) ? 'white' : undefined,
        padding: '4px',
        borderRight: 'solid 1px gray',
        borderBottom: 'solid 1px gray',
      }"
    >
      {{ rowIndex }} / {{ colIndex }}
    </div>
  </VGrid>
</template>
