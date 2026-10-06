<script setup lang="ts">
import { ref, onMounted } from "vue";
import { Virtualizer } from "../../../src/vue";

const sizes = [20, 40, 80, 77];

const data = Array.from({ length: 1000 }).map((_, i) => sizes[i % 4]);

const handleRef = ref<InstanceType<typeof Virtualizer>>();

onMounted(() => {
  handleRef.value?.scrollToIndex(999);
});
</script>

<template>
  <div
    :style="{
      height: '100vh',
      overflowY: 'auto',
      // opt out browser's scroll anchoring on header/footer because it will conflict with scroll anchoring of virtualizer
      overflowAnchor: 'none',
      // flex style for spacer
      display: 'flex',
      flexDirection: 'column',
    }"
  >
    <div
      :style="{
        // spacer to align virtualizer to the bottom when all items are visible in the viewport
        flexGrow: 1,
      }"
    />
    <Virtualizer ref="handleRef" :data="data" #default="{ item, index }">
      <div
        :key="index"
        :style="{
          height: item + 'px',
          background: 'white',
          borderBottom: 'solid 1px #ccc',
        }"
      >
        {{ index }}
      </div>
    </Virtualizer>
  </div>
</template>

<style scoped>
/* NOP */
</style>
