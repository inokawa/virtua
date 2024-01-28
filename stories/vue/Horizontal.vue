<script setup lang="ts">
import { VList } from '../../src/vue'

const sizes = [40, 180, 77];
const createItem = (i: number) => ({ index: i, size: sizes[i % 3] + 'px' })

const data = Array.from({ length: 1000 }).map((_, i) => createItem(i));

</script>

<template>
  <div :style="{ padding: '10px' }">
    <VList :data="data" :style="{ width: '100%', height: '200px' }" horizontal>
      <template #default="item">
        <div :key="item.index" :style="{ width: item.size, background: 'white', borderRight: 'solid 1px #ccc' }">
          {{ item.index }}
        </div>
      </template>
    </VList>
  </div>
</template>

<style scoped>
/* NOP */
</style>
