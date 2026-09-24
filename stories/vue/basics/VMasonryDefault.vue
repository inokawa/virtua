<script setup lang="ts">
import { VMasonry } from "../../../src/vue";

const heights = [80, 180, 120, 220, 160, 100, 240];
const colors = [
  "#145ec1",
  "#b52f48",
  "#067d51",
  "#733ea4",
  "#a96506",
  "#057176",
  "#413c9b",
];

const data = Array.from({ length: 1000 }).map((_, i) => i);
</script>

<template>
  <VMasonry :style="{ height: '100vh' }" :lanes="3" :data="data">
    <template #default="{ item }">
      <div
        :style="{
          height: heights[(item * 2654435761) % 7] + 'px',
          border: 'solid 1px #ccc',
          padding: '4px',
          background: colors[item % colors.length],
          color: 'white',
          textShadow: '0 0 2px rgba(0, 0, 0, 0.6)',
        }"
      >
        {{ item }}
      </div>
    </template>
  </VMasonry>
</template>

<style scoped>
/* NOP */
</style>
