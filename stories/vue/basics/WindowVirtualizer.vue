<script setup lang="ts">
import { WindowVirtualizer } from '../../../src/vue'

const sizes = [20, 40, 180, 77];
const data = Array.from({ length: 1000 }).map((_, i) => sizes[i % 4]);

</script>

<template>
  <div :style="{ padding: '200px 100px' }">
    <div :style="{ border: 'solid 1px gray' }">
      <WindowVirtualizer :data="data" #default="{ item, index }">
        <div :key="index" :style="{ height: item + 'px', background: 'white', borderBottom: 'solid 1px #ccc' }">
          {{ index }}
        </div>
      </WindowVirtualizer>
    </div>
  </div>
</template>

<style scoped>
/* NOP */
</style>
