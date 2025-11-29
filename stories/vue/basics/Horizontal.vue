<script setup lang="ts">
import { VList } from '../../../src/vue'

const sizes = [40, 180, 77];
const data = Array.from({ length: 1000 }).map((_, i) => sizes[i % 3]);
</script>

<template>
  <div :style="{ padding: '10px' }">
    <VList :data="data" :style="{ width: '100%', height: '200px' }" horizontal #default="{ item, index }">
      <div :key="index" :style="{ width: item + 'px', background: 'white', borderRight: 'solid 1px #ccc' }">
        {{ index }}
      </div>
    </VList>
  </div>
</template>

<style scoped>
/* NOP */
</style>
