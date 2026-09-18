<script setup lang="ts">
import { VGrid } from "../../../src/vue";

const ROWS = 1000;
const COLS = 500;
const PINNED_ROWS = { header: 1, footer: 1 };
const PINNED_COLS = { header: 2, footer: 1 };
const isPinnedRow = (rowIndex: number) =>
  rowIndex < PINNED_ROWS.header || rowIndex >= ROWS - PINNED_ROWS.footer;
const isPinnedCol = (colIndex: number) =>
  colIndex < PINNED_COLS.header || colIndex >= COLS - PINNED_COLS.footer;
</script>

<template>
  <VGrid
    :rows="ROWS"
    :rowHeight="40"
    :cols="COLS"
    :colWidth="100"
    :headerRows="PINNED_ROWS.header"
    :footerRows="PINNED_ROWS.footer"
    :headerCols="PINNED_COLS.header"
    :footerCols="PINNED_COLS.footer"
    :style="{
      height: '100vh',
      boxSizing: 'border-box',
      border: 'solid 1px gray',
      background: 'white',
    }"
    #default="{ row: rowIndex, col: colIndex }"
  >
    <div
      :style="{
        padding: '4px',
        borderRight: 'solid 1px gray',
        borderBottom: 'solid 1px gray',
        background: isPinnedRow(rowIndex)
          ? 'darkgray'
          : isPinnedCol(colIndex)
            ? 'lightgray'
            : undefined,
        color: isPinnedRow(rowIndex) ? 'white' : undefined,
      }"
    >
      {{ rowIndex }} / {{ colIndex }}
    </div>
  </VGrid>
</template>
