<script setup lang="ts">
import { CSSProperties, ref } from "vue";
import { Virtualizer, VList } from "../../../src/vue";

const sizes = [20, 40, 180, 77];
const activeIndex = ref(0);
const data = Array.from({ length: 1000 }).map((_, i) => sizes[i % 4]!);
const itemProps = ({ index }: { index: number }) => {
  if (index % 100 === 0)
    return {
      style: {
        ...(activeIndex.value === index
          ? {
              position: "sticky",
              top: 0,
            }
          : {}),
        zIndex: 1,
      } as CSSProperties,
    };
  return {};
};
const listRef = ref<InstanceType<typeof Virtualizer>>();

function onScroll() {
  if (!listRef.value) return;
  const start = listRef.value.findItemIndex(listRef.value.scrollOffset);
  const activeStickyIndex = [0, 100, 200, 300, 400, 500, 600, 700, 800, 900]
    .reverse()
    .find((index) => start >= index)!;
  activeIndex.value = activeStickyIndex;
}
</script>

<template>
  <VList
    ref="listRef"
    :data="data"
    :style="{ height: '100vh' }"
    #default="{ item, index }"
    :item-props="itemProps"
    :keep-mounted="[activeIndex]"
    @scroll="onScroll"
  >
    <div
      :key="index"
      :style="{
        height: item + 'px',
        background: 'white',
        borderBottom: 'solid 1px #ccc',
        ...(index % 100 === 0
          ? {
              background: 'yellow',
            }
          : {}),
      }"
    >
      {{ index }}
    </div>
  </VList>
</template>

<style scoped>
/* NOP */
</style>
