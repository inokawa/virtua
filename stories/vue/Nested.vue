<script setup lang="ts">
import { ref } from 'vue';
import { Virtualizer } from '../../src/vue'

const sizes = [20, 40, 180, 77];
const createItem = (i: number) => ({ index: i, size: sizes[i % 4] + 'px' })

const data = Array.from({ length: 1000 }).map((_, i) => createItem(i));

const outerPadding = 40;
const innerPadding = 60;
const scrollRef = ref<HTMLElement>();  
</script>

<template>
  <div ref="scrollRef" :style="{
    width: '100%',
    height: '100vh',
    overflowY: 'auto',
    // opt out browser's scroll anchoring on header/footer because it will conflict to scroll anchoring of virtualizer
    overflowAnchor: 'none'
  }">
    <div :style="{ backgroundColor: 'burlywood', padding: outerPadding + 'px' }">
      <div :style="{ backgroundColor: 'steelblue', padding: innerPadding + 'px' }">
        <Virtualizer :data="data" #default="item" :scrollRef="scrollRef" :startMargin="outerPadding + innerPadding">
          <div :key="item.index" :style="{ height: item.size, background: 'white', borderBottom: 'solid 1px #ccc' }">
            {{ item.index }}
          </div>
        </Virtualizer>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* NOP */
</style>
