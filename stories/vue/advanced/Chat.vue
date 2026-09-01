<script setup lang="ts">
import { ref, onMounted, watch, nextTick, computed, onUnmounted } from "vue";
import { faker } from "@faker-js/faker";
import { Virtualizer } from "../../../src/vue";

interface Data {
  id: number;
  value: string;
  me?: boolean;
}

let id = 0;
const createItem = ({
  value = faker.lorem.paragraphs(1),
  me,
}: { value?: string; me?: boolean } = {}): Data => ({
  id: id++,
  value,
  me,
});

const items = ref<Data[]>(Array.from({ length: 100 }, () => createItem()));
const value = ref("Hello world!");
const handleRef = ref<InstanceType<typeof Virtualizer>>();
const shouldStickToBottom = ref(true);
const isPrepend = ref(false);
const fetching = ref(false);

const spinnerHeight = 48;

// Reset isPrepend after each update
watch(
  items,
  () => {
    isPrepend.value = false;
  },
  { flush: "post" },
);

// Auto-scroll to bottom when items change
let initial = true;
watch(
  items,
  async () => {
    if (initial) {
      // wait for ref assign
      await nextTick();
      initial = false;
    }
    if (!handleRef.value) return;
    const lastItemIndex = items.value.length - 1;
    if (shouldStickToBottom.value) {
      handleRef.value.scrollToIndex(lastItemIndex, { align: "end" });
    }
  },
  { flush: "post", immediate: true },
);

// Auto-add items timer
onMounted(() => {
  let timer: ReturnType<typeof setTimeout> | null = null;
  const setTimer = () => {
    timer = setTimeout(() => {
      items.value = [...items.value, createItem()];
      setTimer();
    }, 5000);
  };
  setTimer();
  onUnmounted(() => {
    if (timer) clearTimeout(timer);
  });
});

const handleScroll = async (offset: number) => {
  if (!handleRef.value) return;
  shouldStickToBottom.value =
    offset -
      spinnerHeight -
      handleRef.value.scrollSize +
      handleRef.value.viewportSize >=
    -1.5;
  if (offset < spinnerHeight + 100 && !fetching.value) {
    fetching.value = true;
    await new Promise((resolve) => setTimeout(resolve, 1000));
    isPrepend.value = true;
    items.value = [
      ...Array.from({ length: 100 }, () => createItem()),
      ...items.value,
    ];
    fetching.value = false;
  }
};

const disabled = computed(() => !value.value.length);

const submit = () => {
  if (disabled.value) return;
  shouldStickToBottom.value = true;
  items.value = [...items.value, createItem({ value: value.value, me: true })];
  value.value = "";
};

const handleKeyDown = (e: KeyboardEvent) => {
  if (e.code === "Enter" && (e.ctrlKey || e.metaKey)) {
    submit();
    e.preventDefault();
  }
};
</script>

<template>
  <div
    style="width: 100vw; height: 100vh; display: flex; flex-direction: column"
  >
    <div
      style="
        overflow-y: auto;
        /* opt out browser's scroll anchoring on header/footer because it will conflict to scroll anchoring of virtualizer */
        flex: 1;
        overflow-anchor: none;
        /* flex style for spacer */
        display: flex;
        flex-direction: column;
      "
    >
      <div
        style="
          /* spacer to align virtualizer to the bottom when all items are visible in the viewport */
          flex-grow: 1;
        "
      ></div>
      <div
        class="spinner"
        :style="{ visibility: fetching ? 'visible' : 'hidden' }"
      >
        <span class="loader"></span>
      </div>
      <Virtualizer
        ref="handleRef"
        :data="items"
        :shift="isPrepend"
        :start-margin="spinnerHeight"
        @scroll="handleScroll"
      >
        <template #default="{ item }" :key="item.id">
          <div
            v-if="item.me === true"
            style="
              border: solid 1px #ccc;
              background: lightyellow;
              padding: 10px;
              border-radius: 8px;
              white-space: pre-wrap;
              margin: 10px;
              margin-left: 160px;
            "
          >
            {{ item.value }}
          </div>
          <div
            v-else
            style="
              border: solid 1px #ccc;
              background: #fff;
              padding: 10px;
              border-radius: 8px;
              white-space: pre-wrap;
              margin: 10px;
              margin-right: 160px;
            "
          >
            {{ item.value }}
          </div>
        </template>
      </Virtualizer>
    </div>
    <form
      style="display: flex; flex-direction: column; margin: 10px"
      @submit.prevent.stop="submit"
    >
      <textarea
        style="flex: 1"
        rows="6"
        v-model="value"
        @keydown="handleKeyDown"
      ></textarea>
      <div
        style="
          display: flex;
          flex-direction: row;
          gap: 8px;
          justify-content: flex-end;
        "
      >
        <button type="submit" :disabled="disabled">submit</button>
      </div>
    </form>
  </div>
</template>

<style>
.spinner {
  flex: none;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.loader {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: 3px solid #ccc;
  border-top-color: transparent;
  animation: rotate 1s linear infinite;
}

@keyframes rotate {
  100% {
    transform: rotate(360deg);
  }
}
</style>
