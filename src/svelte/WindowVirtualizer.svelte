<script lang="ts" generics="T">
  import { onMount, onDestroy } from "svelte";
  import {
    ACTION_ITEMS_LENGTH_CHANGE,
    type ItemsRange,
    type StateVersion,
    UPDATE_SCROLL_END_EVENT,
    UPDATE_SIZE_EVENT,
    UPDATE_SCROLL_EVENT,
    UPDATE_VIRTUAL_STATE,
    createVirtualStore,
    createListLayout,
    getScrollSize as _getScrollSize,
    createWindowDriver,
    min,
  } from "../core/index.js";
  import { defaultGetKey, isSameRange, styleToString } from "./utils.js";
  import ListItem from "./ListItem.svelte";
  import type {
    WindowVirtualizerHandle,
    WindowVirtualizerProps,
  } from "./WindowVirtualizer.type.js";

  interface Props extends WindowVirtualizerProps<T> {}

  let {
    data,
    getKey = defaultGetKey,
    bufferSize,
    itemSize,
    ssrCount,
    shift = false,
    horizontal = false,
    cache,
    children,
    onscroll,
    onscrollend,
    onresize,
  }: Props = $props();

  const layout = createListLayout(data.length, itemSize, cache);
  const store = createVirtualStore(layout, ssrCount);
  const driver = createWindowDriver(store, layout, horizontal);
  store.$subscribe(UPDATE_VIRTUAL_STATE, () => {
    stateVersion = store.$getStateVersion();
  });
  store.$subscribe(UPDATE_SCROLL_EVENT, () => {
    // https://github.com/inokawa/virtua/discussions/580
    onscroll && onscroll();
  });
  store.$subscribe(UPDATE_SCROLL_END_EVENT, () => {
    onscrollend && onscrollend();
  });
  store.$subscribe(UPDATE_SIZE_EVENT, () => {
    onresize && onresize();
  });

  let isSSR = $state(!!ssrCount);

  let containerRef: HTMLDivElement | undefined = $state();

  let stateVersion: StateVersion = $state(store.$getStateVersion());

  let prevRange: ItemsRange | undefined;
  let range = $derived.by(() => {
    stateVersion;
    const next = store.$getRange(bufferSize);
    if (prevRange && isSameRange(prevRange, next)) {
      return prevRange;
    }
    return (prevRange = next);
  });
  let isScrolling = $derived(stateVersion && store.$isScrolling());
  let totalSize = $derived(stateVersion && store.$getTotalSize());

  let indexes = $derived.by(() => {
    // The each block runs before $effect.pre with experimental.async, so the store may still have the length before the update
    // https://svelte.dev/docs/svelte/await-expressions#Breaking-changes
    // https://github.com/inokawa/virtua/pull/847
    // https://github.com/inokawa/virtua/pull/1018
    const len = stateVersion && min(data.length, layout.$getLength());

    const [start, end] = range;
    const arr: number[] = [];
    for (let i = start; i <= end; i++) {
      if (i < len) {
        arr.push(i);
      }
    }
    return arr;
  });

  onMount(() => {
    isSSR = false;

    driver.$observe(containerRef!);
  });
  onDestroy(() => {
    store.$dispose();
    driver.$dispose();
  });

  $effect.pre(() => {
    store.$update(ACTION_ITEMS_LENGTH_CHANGE, data.length, shift);
  });

  let prevStateVersion: StateVersion | undefined;
  $effect(() => {
    if (prevStateVersion === stateVersion) return;
    prevStateVersion = stateVersion;
    driver.$effect();
  });

  export const getCache =
    layout.$snapshot satisfies WindowVirtualizerHandle["getCache"] as WindowVirtualizerHandle["getCache"];
  export const getScrollOffset =
    store.$getScrollOffset satisfies WindowVirtualizerHandle["getScrollOffset"] as WindowVirtualizerHandle["getScrollOffset"];
  export const getViewportSize =
    store.$getViewportSize satisfies WindowVirtualizerHandle["getViewportSize"] as WindowVirtualizerHandle["getViewportSize"];
  export const findItemIndex = ((offset) =>
    layout.$findIndex(
      offset - store.$getStartSpacerSize(),
    )) satisfies WindowVirtualizerHandle["findItemIndex"] as WindowVirtualizerHandle["findItemIndex"];
  export const getItemOffset =
    store.$getItemOffset satisfies WindowVirtualizerHandle["getItemOffset"] as WindowVirtualizerHandle["getItemOffset"];
  export const getItemSize =
    layout.$getItemSize satisfies WindowVirtualizerHandle["getItemSize"] as WindowVirtualizerHandle["getItemSize"];
  export const scrollToIndex: WindowVirtualizerHandle["scrollToIndex"] =
    driver.$scroll;

  let containerStyle = $derived(
    styleToString({
      contain: "size style", // https://github.com/inokawa/virtua/pull/775 https://github.com/inokawa/virtua/issues/800
      "overflow-anchor": "none", // opt out browser's scroll anchoring because it will conflict with scroll anchoring of virtualizer
      flex: "none", // flex style can break layout
      position: "relative",
      width: horizontal ? totalSize + "px" : "100%",
      height: horizontal ? "100%" : totalSize + "px",
      "pointer-events": isScrolling ? "none" : undefined,
    }),
  );
</script>

<!-- 
  @component
  {@link Virtualizer} controlled by the window scrolling. See {@link WindowVirtualizerProps} and {@link WindowVirtualizerHandle}.
-->
<div bind:this={containerRef} style={containerStyle}>
  {#each indexes as index (getKey(data[index]!, index))}
    {@const item = data[index]!}
    <ListItem
      {children}
      {item}
      {index}
      as="div"
      offset={stateVersion && store.$getItemOffset(index)}
      hide={stateVersion && layout.$isSizeEqual(index)}
      {horizontal}
      {isSSR}
      resizer={driver.$observeItem}
    />
  {/each}
</div>
