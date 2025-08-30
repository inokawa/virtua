<script setup lang="ts">
import { VList } from '../../src/vue'

const sizes = [20, 40, 180, 77];
const data = Array.from({ length: 1000 }).map((_, i) => sizes[i % 4]!);
</script>

<template>
  <VList :data="data" :style="{ height: '100vh' }" #default="{ item, index }">
    <div :key="index" :style="{ height: item + 'px', background: 'white', borderBottom: 'solid 1px #ccc' }">
      {{ index }}
    </div>
  </VList>
</template>

<style scoped>
/* NOP */
</style>
