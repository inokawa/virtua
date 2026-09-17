<script setup lang="ts">
import { ref } from "vue";
import { VGrid } from "../../../src/vue";

const LENGTH = 1000;
const rowIndex = ref(567);
const colIndex = ref(567);
const vertical = ref(1000);
const horizontal = ref(1000);
const handle = ref<InstanceType<typeof VGrid>>();

const randomize = () => {
  colIndex.value = Math.floor(LENGTH * Math.random());
  rowIndex.value = Math.floor(LENGTH * Math.random());
};
</script>

<template>
  <div style="height: 100vh; display: flex; flex-direction: column">
    <div>
      <label>
        col
        <input type="number" v-model.number="colIndex" />
      </label>
      <label>
        row
        <input type="number" v-model.number="rowIndex" />
      </label>
      <button
        @click="
          handle?.scrollToIndex({
            rowIndex: rowIndex,
            colIndex: colIndex,
          })
        "
      >
        scroll to index
      </button>
      <button @click="randomize">randomize</button>
    </div>
    <div>
      <label>
        x
        <input type="number" v-model.number="horizontal" />
      </label>
      <label>
        y
        <input type="number" v-model.number="vertical" />
      </label>
      <button @click="handle?.scrollTo({ vertical, horizontal })">
        scroll to offset
      </button>
      <button @click="handle?.scrollBy({ vertical, horizontal })">
        scroll by offset
      </button>
    </div>
    <VGrid
      ref="handle"
      :rows="LENGTH"
      :rowHeight="80"
      :cols="LENGTH"
      :colWidth="160"
      :style="{ flex: 1, boxSizing: 'border-box', border: 'solid 1px gray' }"
      #default="{ row: r, col: c }"
    >
      <div
        :style="{
          background: 'white',
          padding: '4px',
          borderRight: 'solid 1px gray',
          borderBottom: 'solid 1px gray',
        }"
      >
        {{ r }} / {{ c }}
      </div>
    </VGrid>
  </div>
</template>
