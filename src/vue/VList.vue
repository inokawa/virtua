<script setup lang="ts" generic="T">
import { ref, defineEmits, defineProps, defineExpose, VNode } from "vue";
import Virtualizer from "./Virtualizer.vue";
import type { VirtualizerHandle } from "./Virtualizer.vue";
import type { ItemProps } from "./utils.js";

export interface VListHandle extends VirtualizerHandle { }

interface VListProps<T> {
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
     * A prop for SSR. If set, the specified amount of items will be mounted in the initial rendering regardless of the container size until hydrated.
     */
    ssrCount?: number;
    /**
     * A function that provides properties/attributes for item element
     *
     * **This prop will be merged into `item` prop in the future**
     */
    itemProps?: ItemProps;
    /**
     * List of indexes that should be always mounted, even when off screen.
     */
    keepMounted?: readonly number[];
}

defineSlots<{
    default: (props: { item: T, index: number }) => VNode;
}>();
const props = withDefaults(defineProps<VListProps<T>>(), { overscan: 4 });
const emit = defineEmits<{ scroll: [offset: number]; scrollEnd: [] }>();

const horizontal = !!props.horizontal;

const onScroll = (offset: number) => {
    emit("scroll", offset);
};
const onScrollEnd = () => {
    emit("scrollEnd");
};

const handle = ref<VirtualizerHandle | null>(null);

defineExpose<VListHandle>({
    get scrollOffset() {
        return handle.value!.scrollOffset
    },
    get scrollSize() {
        return handle.value!.scrollSize
    },
    get viewportSize() {
        return handle.value!.viewportSize
    },
    findStartIndex: (...args) => handle.value!.findStartIndex(...args),
    findEndIndex: (...args) => handle.value!.findEndIndex(...args),
    getItemOffset: (...args) => handle.value!.getItemOffset(...args),
    getItemSize: (...args) => handle.value!.getItemSize(...args),
    scrollToIndex: (...args) => handle.value!.scrollToIndex(...args),
    scrollTo: (...args) => handle.value!.scrollTo(...args),
    scrollBy: (...args) => handle.value!.scrollBy(...args),
});
</script>

<template>
    <div :style="{
        display: horizontal ? 'inline-block' : 'block',
        [horizontal ? 'overflowX' : 'overflowY']: 'auto',
        contain: 'strict',
        width: '100%',
        height: '100%',
    }">
        <Virtualizer ref="handle" :data="props.data" :overscan="props.overscan" :itemSize="props.itemSize"
            :itemProps="props.itemProps" :shift="props.shift" :ssrCount="props.ssrCount" :horizontal="horizontal"
            :keepMounted="props.keepMounted" @scroll="onScroll" @scrollEnd="onScrollEnd">
            <template v-slot:["default"]="slotProps">
                <slot :name="'default'" v-bind="slotProps" />
            </template>
        </Virtualizer>
    </div>
</template>
