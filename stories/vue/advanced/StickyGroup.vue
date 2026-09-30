<script setup lang="ts">
import { CSSProperties, ref } from "vue";
import { faker } from "@faker-js/faker";
import { Virtualizer, VList } from "../../../src/vue";

type Row =
  { type: "header"; letter: string } | { type: "contact"; name: string };

const data: Row[] = [];
faker.helpers
  .multiple(() => `${faker.person.firstName()} ${faker.person.lastName()}`, {
    count: 1000,
  })
  .sort((a, b) => a.localeCompare(b))
  .forEach((name) => {
    const letter = name[0]!.toUpperCase();
    const prev = data.findLast((r) => r.type === "header");
    if (!prev || prev.letter !== letter) {
      data.push({ type: "header", letter });
    }
    data.push({ type: "contact", name });
  });

const stickyItemHeight = 32;
const stickyIndexes = data.flatMap((r, i) => (r.type === "header" ? [i] : []));

const activeIndex = ref(0);
const itemProps = ({ index }: { index: number }) => {
  if (data[index]!.type === "header")
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
  const activeStickyIndex = [...stickyIndexes]
    .reverse()
    .find((index) => start >= index)!;
  activeIndex.value = activeStickyIndex;
}
</script>

<template>
  <VList
    ref="listRef"
    :data="data"
    :style="{
      height: '100vh',
      fontFamily: 'system-ui, sans-serif',
      fontSize: '14px',
    }"
    #default="{ item, index }"
    :item-props="itemProps"
    :keep-mounted="[activeIndex]"
    @scroll="onScroll"
  >
    <div
      v-if="item.type === 'header'"
      :key="`h${index}`"
      :style="{
        height: stickyItemHeight + 'px',
        display: 'flex',
        alignItems: 'center',
        padding: '0 16px',
        background: '#f3f4f6',
        borderBottom: 'solid 1px #e5e7eb',
        color: '#6b7280',
        fontSize: '13px',
        fontWeight: 600,
      }"
    >
      {{ item.letter }}
    </div>
    <div
      v-else
      :key="index"
      :style="{
        height: '48px',
        display: 'flex',
        alignItems: 'center',
        padding: '0 16px',
        borderBottom: 'solid 1px #f0f0f0',
        background: '#fff',
      }"
    >
      {{ item.name }}
    </div>
  </VList>
</template>

<style scoped>
/* NOP */
</style>
