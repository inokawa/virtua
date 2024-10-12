<script setup lang="ts">
import { Virtualizer } from '../../src/vue'

const sizes = [20, 40, 180, 77];

const data = Array.from({ length: 1000 }).map((_, i) => sizes[i % 4]);

const headerHeight = 400;
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
    <Virtualizer :data="data" #default="{ item, index }" :startMargin="headerHeight">
      <div :key="index" :style="{ height: item + 'px', background: 'white', borderBottom: 'solid 1px #ccc' }">
        {{ index }}
      </div>
    </Virtualizer>
    <div :style="{ backgroundColor: 'steelblue', height: '600px' }">
      footer
    </div>
  </div>
</template>

<style scoped>
/* NOP */
</style>
