<script setup lang="ts">
import { ref, } from 'vue';
import { Virtualizer } from '../../../src/vue'

const COLUMN_WIDTHS = [100, 200, 300, 100, 200, 300, 100, 300, 400, 200];

const data = Array.from({ length: 10000 }).map((_, i) => i);

const headerHeight = 40;

const scrollRef = ref<HTMLElement>();  
</script>

<template>
  <div :style="{
    height: '500px',
    overflow: 'auto'
  }" ref="scrollRef">
    <table>
      <thead>
        <tr :style="{ height: headerHeight + 'px' }">
          <th v-for="(width, index) in COLUMN_WIDTHS" :style="{ width: `${width}px` }">Header{{ index }}</th>
        </tr>
      </thead>
      <Virtualizer :scrollRef="scrollRef" :data="data" #default="{ item }" :startMargin="headerHeight" as="tbody"
        item="tr">
        <th v-for="(width, index) in COLUMN_WIDTHS" :style="{ width: `${width}px` }">{{ item }} {{ index }}</th>
      </Virtualizer>
    </table>
  </div>
</template>

<style scoped>
/* NOP */
</style>
