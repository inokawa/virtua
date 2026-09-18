<script setup lang="ts">
import { VGrid } from "../../../src/vue";
</script>

<template>
  <VGrid
    :rows="1000"
    :rowHeight="40"
    :cols="500"
    :colWidth="100"
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
      }"
    >
      {{ rowIndex }} / {{ colIndex }}
    </div>
  </VGrid>
</template>

<style scoped>
/* NOP */
</style>
