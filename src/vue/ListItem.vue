<script setup lang="ts">
import {
    ref,
    watch,
    NativeElements,
    computed,
    Ref,
} from "vue";
import {
    ItemResizeObserver,
    isRTLDocument,
    StateVersion,
    VirtualStore,
} from "../core/index.js";
import type { ItemProps } from "./utils.js";

const props = defineProps<{
    _stateVersion: number,
    _store: VirtualStore,
    _children: VNode,
    _resizer: ItemResizeObserver,
    _index: number,
    _isHorizontal: boolean,
    _isSSR: boolean;
    _as: keyof NativeElements,
    _itemProps: ReturnType<ItemProps>
}>();

const elementRef = ref<HTMLDivElement>();

const offset = computed(() =>
    props._stateVersion && props._store.$getItemOffset(props._index)
);
const hide = computed(() =>
    props._stateVersion && props._store.$isUnmeasuredItem(props._index)
);

// The index may be changed if elements are inserted to or removed from the start of props.children
watch(
    () => elementRef.value && props._index,
    (_, __, onCleanup) => {
        onCleanup(props._resizer(elementRef.value!, props._index));
    },
    {
        flush: "post",
    }
);
</script>

<template>
    <component :is="props._as" ref="elementRef" :style="{
        contain: 'layout style',
        position: hide && props._isSSR ? undefined : 'absolute',
        [props._isHorizontal ? 'height' : 'width']: '100%',
        [props._isHorizontal ? 'top' : 'left']: '0px',
        [props._isHorizontal ? (isRTLDocument() ? 'right' : 'left') : 'top']: offset + 'px',
        visibility: !hide || props._isSSR ? 'visible' : 'hidden',
        ...(props._itemProps?.style ?? {}),
        display: props._isHorizontal ? 'inline-flex' : undefined,
    }" v-bind="props._itemProps">
        <component :is="props._children" />
    </component>
</template>
