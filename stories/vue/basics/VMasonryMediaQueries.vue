<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import { VMasonry } from "../../../src/vue";

const colors = [
  "#145ec1",
  "#b52f48",
  "#067d51",
  "#733ea4",
  "#a96506",
  "#057176",
  "#413c9b",
];
const aspectRatios = ["1 / 1", "3 / 4", "4 / 3", "2 / 3", "3 / 2"];

const data = Array.from({ length: 1000 }).map((_, i) => i);

// Recipe: lanes for each breakpoint of the window, like the classes of Tailwind CSS. The media queries are read synchronously, so the lanes are right from the first render on the client.
const BREAKPOINTS = [
  ["(min-width: 1536px)", 6],
  ["(min-width: 1280px)", 5],
  ["(min-width: 1024px)", 4],
  ["(min-width: 768px)", 3],
] as const;
const getLanesByMediaQuery = (): number =>
  BREAKPOINTS.find(([query]) => window.matchMedia(query).matches)?.[1] ?? 2;

const lanes = ref(getLanesByMediaQuery());

const onChange = () => {
  lanes.value = getLanesByMediaQuery();
};
const lists = BREAKPOINTS.map(([query]) => window.matchMedia(query));
onMounted(() => {
  lists.forEach((list) => list.addEventListener("change", onChange));
});
onUnmounted(() => {
  lists.forEach((list) => list.removeEventListener("change", onChange));
});
</script>

<template>
  <VMasonry :style="{ height: '100vh' }" :lanes="lanes" :gap="8" :data="data">
    <template #default="{ item }">
      <div
        :style="{
          aspectRatio: aspectRatios[(item * 2654435761) % 5],
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
