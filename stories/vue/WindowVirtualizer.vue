<script setup lang="ts">
import { WindowVirtualizer } from '../../src/vue'

const sizes = [20, 40, 180, 77];
const createItem = (i: number) => ({ index: i, size: sizes[i % 4] + 'px' })

const data = Array.from({ length: 1000 }).map((_, i) => createItem(i));

</script>

<template>
  <div :style="{ padding: '200px 100px' }">
    <div :style="{ border: 'solid 1px gray' }">
      <WindowVirtualizer :data="data" #default="item">
        <div :key="item.index" :style="{ height: item.size, background: 'white', borderBottom: 'solid 1px #ccc' }">
          {{ item.index }}
        </div>
      </WindowVirtualizer>
    </div>
  </div>
</template>

<style scoped>
/* NOP */
</style>
