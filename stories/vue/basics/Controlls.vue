<script setup lang="ts">
import { ref } from "vue";
import { VList } from "../../../src/vue";

const heights = [20, 40, 180, 77];
const createItem = (i: number) => ({ index: i, height: heights[i % 4] + "px" });

const data = ref(Array.from({ length: 1000 }).map((_, i) => createItem(i)));
const scrollOffset = ref(0);
const scrolling = ref(false);
const scrollTarget = ref(567);
const prepend = ref(false);

const handle = ref<InstanceType<typeof VList>>();

const scroll = () => {
  handle.value?.scrollToIndex(scrollTarget.value);
};
const append = () => {
  const items = Array.from({ length: 100 }).map((_, i) =>
    createItem(i + data.value.length),
  );
  data.value = prepend.value
    ? [...items, ...data.value]
    : [...data.value, ...items];
};
</script>

<template>
  <div style="height: 100%; display: flex; flex-direction: column">
    <div>offset: {{ scrollOffset }}</div>
    <div>scrolling: {{ scrolling }}</div>
    <div>
      <input
        type="number"
        :value="scrollTarget"
        @input="
          (e) => {
            scrollTarget = Number((e.target as HTMLInputElement).value);
          }
        "
      />
      <button @click="scroll">scrollToIndex</button>
    </div>
    <div>
      <button @click="append">append</button>
      <label>
        <input type="checkbox" v-model="prepend" />
        prepend</label
      >
    </div>
    <VList
      ref="handle"
      :data="data"
      #default="{ item }"
      :shift="prepend"
      :onScroll="
        (offset) => {
          scrollOffset = offset;
          scrolling = true;
        }
      "
      :onScrollEnd="
        () => {
          scrolling = false;
        }
      "
    >
      <div
        :key="item.index"
        :style="{
          height: item.height,
          background: 'white',
          borderBottom: 'solid 1px #ccc',
        }"
      >
        {{ item.index }}
      </div>
    </VList>
  </div>
</template>

<style scoped>
/* NOP */
</style>
