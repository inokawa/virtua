<script setup lang="ts">
import { ref } from 'vue'
import { WindowVirtualizer } from '../../src/vue'

const sizes = [20, 40, 180, 77];
const createItem = (i: number) => ({ index: i, size: sizes[i % 4] + 'px' })

const data = ref(Array.from({ length: 1000 }).map((_, i) => createItem(i)));

</script>

<template>
  <div :style="{ padding: '200px 100px' }">
    <div :style="{ border: 'solid 1px gray' }">
      <WindowVirtualizer :data="data">
        <template #default="item">
          <div :key="item.index" :style="{ height: item.size, background: 'white', borderBottom: 'solid 1px #ccc' }">
            {{ item.index }}
          </div>
        </template>
      </WindowVirtualizer>
    </div>
  </div>
</template>

<style scoped>
/* NOP */
</style>
