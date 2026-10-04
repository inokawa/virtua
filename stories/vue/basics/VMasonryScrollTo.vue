<script setup lang="ts">
import { ref } from "vue";
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

const LENGTH = 1000;
const data = Array.from({ length: LENGTH }).map((_, i) => i);

const scrollIndex = ref(567);
const aligns = ["start", "center", "end", "nearest"] as const;
const scrollIndexAlign = ref<(typeof aligns)[number]>("start");
const smooth = ref(false);
const handle = ref<InstanceType<typeof VMasonry>>();

const randomize = () => {
  scrollIndex.value = Math.round(LENGTH * Math.random());
};
</script>

<template>
  <div style="height: 100vh; display: flex; flex-direction: column">
    <div>
      <input type="number" v-model.number="scrollIndex" />
      <button
        @click="
          handle?.scrollToIndex(scrollIndex, {
            align: scrollIndexAlign,
            smooth: smooth,
          })
        "
      >
        scroll to index
      </button>
      <button @click="randomize">randomize</button>
      <label v-for="align in aligns" :key="align" style="margin-left: 4px">
        <input type="radio" :value="align" v-model="scrollIndexAlign" />
        {{ align }}
      </label>
      <label style="margin-left: 4px">
        <input type="checkbox" v-model="smooth" />
        smooth
      </label>
    </div>
    <VMasonry ref="handle" :style="{ flex: 1 }" :lanes="4" :data="data">
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
  </div>
</template>

<style scoped>
/* NOP */
</style>
