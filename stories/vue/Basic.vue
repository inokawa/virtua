<script setup lang="ts">
import { ref } from 'vue'
import { VList } from '../../src/vue'

const heights = [20, 40, 180, 77];
const createItem = (i: number) => ({ index: i, height: heights[i % 4] + 'px' })

const data = ref(Array.from({ length: 1000 }).map((_, i) => createItem(i)));
const scrollOffset = ref(0)
const scrolling = ref(false)
const scrollTarget = ref(567)

const handle = ref<InstanceType<typeof VList>>()

const onScroll = () => {
  handle.value?.scrollToIndex(scrollTarget.value)
}
const onAppend = () => {
  data.value = [...data.value, ...Array.from({ length: 100 }).map((_, i) => createItem(i + data.value.length))]
}
</script>

<template>
  <div style="height: 100%; display: flex; flex-direction: column;">
    <div>offset: {{ scrollOffset }}</div>
    <div>scrolling: {{ scrolling }}</div>
    <div>
      <input type="number" :value="scrollTarget"
        @input="e => { scrollTarget = Number((e.target as HTMLInputElement).value) }">
      <button @click="onScroll">scrollToIndex</button>
    </div>
    <div><button @click="onAppend">append</button></div>
    <VList ref="handle" :data="data" :onScroll="(offset) => { scrollOffset = offset; scrolling = true }"
      :onScrollStop="() => { scrolling = false }">
      <template #default="item">
        <div :key="item.index" :style="{ height: item.height, background: 'white', borderBottom: 'solid 1px #ccc' }">
          {{ item.index }}
        </div>
      </template>
    </VList>
  </div>
</template>

<style scoped>
/* NOP */
</style>
