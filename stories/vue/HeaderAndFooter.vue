<script setup lang="ts">
import { Virtualizer } from '../../src/vue'

const sizes = [20, 40, 180, 77];
const createItem = (i: number) => ({ index: i, size: sizes[i % 4] + 'px' })

const data = Array.from({ length: 1000 }).map((_, i) => createItem(i));


const headerHeight = 400;
const footerHeight = 600;
</script>

<template>
  <div :style="{
    width: '100%',
    height: '100vh',
    overflowY: 'auto',
    // opt out browser's scroll anchoring on header/footer because it will conflict to scroll anchoring of virtualizer
    overflowAnchor: 'none'
  }">
    <div :style="{ backgroundColor: 'burlywood', height: headerHeight + 'px' }">
      header
    </div>
    <Virtualizer :data="data" #default="item" :startMargin="headerHeight" :endMargin="footerHeight">
      <div :key="item.index" :style="{ height: item.size, background: 'white', borderBottom: 'solid 1px #ccc' }">
        {{ item.index }}
      </div>
    </Virtualizer>
    <div :style="{ backgroundColor: 'steelblue', height: footerHeight + 'px' }">
      footer
    </div>
  </div>
</template>

<style scoped>
/* NOP */
</style>
