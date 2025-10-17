<script setup lang="ts" generic="T">
import {
  ref,
  onMounted,
  onUnmounted,
  watch,
  NativeElements,
  computed,
  defineEmits,
  defineProps,
  useSlots,
  defineExpose,
  VNode,
} from "vue";
import {
  UPDATE_SCROLL_END_EVENT,
  UPDATE_VIRTUAL_STATE,
  createVirtualStore,
  ACTION_ITEMS_LENGTH_CHANGE,
  UPDATE_SCROLL_EVENT,
  createWindowResizer,
  createWindowScroller,
  ItemsRange,
  ScrollToIndexOpts,
} from "../core/index.js";
import { default as ListItem } from "./ListItem.vue";
import { getKey, isSameRange } from "./utils.js";

export interface WindowVirtualizerHandle {
  /**
   * Find the start index of visible range of items.
   */
  findStartIndex: () => number;
  /**
   * Find the end index of visible range of items.
   */
  findEndIndex: () => number;
  /**
   * Scroll to the item specified by index.
   * @param index index of item
   * @param opts options
   */
  scrollToIndex(index: number, opts?: ScrollToIndexOpts): void;
}

interface WindowVirtualizerProps<T> {
  /**
   * The data items rendered by this component.
   */
  data: T[];
  /**
   * Number of items to render above/below the visible bounds of the list. You can increase to avoid showing blank items in fast scrolling.
   * @defaultValue 4
   */
  overscan?: number;
  /**
   * Item size hint for unmeasured items in pixels. It will help to reduce scroll jump when items are measured if used properly.
   *
   * - If not set, initial item sizes will be automatically estimated from measured sizes. This is recommended for most cases.
   * - If set, you can opt out estimation and use the value as initial item size.
   */
  itemSize?: number;
  /**
   * While true is set, scroll position will be maintained from the end not usual start when items are added to/removed from start. It's recommended to set false if you add to/remove from mid/end of the list because it can cause unexpected behavior. This prop is useful for reverse infinite scrolling.
   */
  shift?: boolean;
  /**
   * If true, rendered as a horizontally scrollable list. Otherwise rendered as a vertically scrollable list.
   */
  horizontal?: boolean;
  /**
   * Component or element type for container element.
   * @defaultValue "div"
   */
  as?: keyof NativeElements;
  /**
   * Component or element type for item element.
   * @defaultValue "div"
   */
  item?: keyof NativeElements;
}

defineSlots<{
  default: (props: { item: T, index: number }) => VNode;
}>();

const props = withDefaults(defineProps<WindowVirtualizerProps<T>>(), { overscan: 4, as: 'div', item: 'div' });
const emit = defineEmits<{ scroll: []; scrollEnd: [] }>();
const slots = useSlots();

const isHorizontal = !!props.horizontal;
const containerRef = ref<HTMLDivElement>();
const store = createVirtualStore(
  props.data.length,
  props.itemSize,
  props.overscan,
  undefined,
  undefined,
  !props.itemSize
);
const resizer = createWindowResizer(store, isHorizontal);
const scroller = createWindowScroller(store, isHorizontal);

const stateVersion = ref(store.$getStateVersion());
const unsubscribeStore = store.$subscribe(UPDATE_VIRTUAL_STATE, () => {
  stateVersion.value = store.$getStateVersion();
});
const unsubscribeOnScroll = store.$subscribe(UPDATE_SCROLL_EVENT, () => {
  // https://github.com/inokawa/virtua/discussions/580
  emit("scroll");
});
const unsubscribeOnScrollEnd = store.$subscribe(
  UPDATE_SCROLL_END_EVENT,
  () => {
    emit("scrollEnd");
  }
);

const range = computed<ItemsRange>((prev) => {
  stateVersion.value;
  const next = store.$getRange();
  if (prev && isSameRange(prev, next)) {
    return prev;
  }
  return next;
});
const isScrolling = computed(() => stateVersion.value && store.$isScrolling());
const totalSize = computed(() => stateVersion.value && store.$getTotalSize());

onMounted(() => {
  const el = containerRef.value;
  if (!el) return;
  resizer.$observeRoot(el);
  scroller.$observe(el);
});
onUnmounted(() => {
  unsubscribeStore();
  unsubscribeOnScroll();
  unsubscribeOnScrollEnd();
  resizer.$dispose();
  scroller.$dispose();
});

watch(
  () => props.data.length,
  (count) => {
    store.$update(ACTION_ITEMS_LENGTH_CHANGE, [count, props.shift]);
  }
);
watch(
  [stateVersion],
  () => {
    scroller.$fixScrollJump();
  },
  { flush: "post" }
);

defineExpose<WindowVirtualizerHandle>({
  findStartIndex: store.$findStartIndex,
  findEndIndex: store.$findEndIndex,
  scrollToIndex: scroller.$scrollToIndex,
});

const style = computed(() => {
  const total = totalSize.value
  return {
    contain: 'size paint style',// https://github.com/inokawa/virtua/pull/775
    overflowAnchor: "none", // opt out browser's scroll anchoring because it will conflict to scroll anchoring of virtualizer
    overflow: "clip", // https://github.com/inokawa/virtua/pull/485 https://github.com/inokawa/virtua/issues/717
    flex: "none", // flex style can break layout
    position: 'relative',
    width: isHorizontal ? total + 'px' : '100%',
    height: isHorizontal ? '100%' : total + 'px',
    pointerEvents: isScrolling.value ? 'none' : undefined,
  }
});


const getSlot = (index: number) => {
  return slots["default"]?.({ item: props.data?.[index], index })?.[0] ?? null;
}
const getKeyForItem = (index: number) => {
  const slot = getSlot(index);
  return slot ? getKey(slot, index) : index;
}

const rangeArray = computed(() => {
  const indexes: number[] = [];
  for (let [i, j] = range.value; i <= j; i++) {
    indexes.push(i);
  }

  return indexes
});
</script>

<template>
  <component :is="props.as" ref="containerRef" :style="style">
    <template v-for="index in rangeArray" :is="props.item" :key="getKeyForItem(index)" v-bind="getItemProps(index)">
      <ListItem :_stateVersion="stateVersion" :_store="store" :_resizer="resizer.$observeItem" :_index="index"
        :_children="getSlot(index)" :_isHorizontal="isHorizontal" :_isSSR="isSSR" :_as="props.item"
        :_itemProps="props.itemProps?.({ item: props.data[index], index })" />
    </template>
  </component>
</template>
