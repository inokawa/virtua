<script lang="ts" generics="T">
  import { onMount, onDestroy } from "svelte";
  import {
    ACTION_ITEMS_LENGTH_CHANGE,
    type StateVersion,
    UPDATE_SCROLL_END_EVENT,
    UPDATE_SCROLL_EVENT,
    UPDATE_VIRTUAL_STATE,
    createVirtualStore,
    getScrollSize as _getScrollSize,
    createWindowResizer,
    createWindowScroller,
  } from "../core/index.js";
  import { defaultGetKey, styleToString } from "./utils.js";
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
    shift = false,
    horizontal = false,
    cache,
    children,
    onscroll,
    onscrollend,
  }: Props = $props();

  const store = createVirtualStore(
    data.length,
    itemSize,
    undefined,
    cache,
    !itemSize
  );
  const resizer = createWindowResizer(store, horizontal);
  const scroller = createWindowScroller(store, horizontal);
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

  let containerRef: HTMLDivElement | undefined = $state();

  let stateVersion: StateVersion = $state(store.$getStateVersion());

  let range = $derived(stateVersion && store.$getRange(bufferSize));
  let isScrolling = $derived(stateVersion && store.$isScrolling());
  let totalSize = $derived(stateVersion && store.$getTotalSize());
  let negative = $derived(stateVersion && scroller.$isNegative());

  let indexes = $derived.by(() => {
    const [start, end] = range;
    const pushKey = !horizontal && negative ? "unshift" : "push";
    const arr: number[] = [];
    for (let i = start; i <= end; i++) {
      arr[pushKey](i);
    }
    return arr;
  });

  onMount(() => {
    resizer.$observeRoot(containerRef!);
    scroller.$observe(containerRef!);
  });
  onDestroy(() => {
    store.$dispose();
    resizer.$dispose();
    scroller.$dispose();
  });

  $effect.pre(() => {
    if (data.length !== store.$getItemsLength()) {
      store.$update(ACTION_ITEMS_LENGTH_CHANGE, [data.length, shift]);
    }
  });

  let prevStateVersion: StateVersion | undefined;
  $effect(() => {
    if (prevStateVersion === stateVersion) return;
    prevStateVersion = stateVersion;
    scroller.$fixScrollJump();
  });

  export const getCache =
    store.$getCacheSnapshot satisfies WindowVirtualizerHandle["getCache"] as WindowVirtualizerHandle["getCache"];
  export const getScrollOffset =
    store.$getScrollOffset satisfies WindowVirtualizerHandle["getScrollOffset"] as WindowVirtualizerHandle["getScrollOffset"];
  export const getViewportSize =
    store.$getViewportSize satisfies WindowVirtualizerHandle["getViewportSize"] as WindowVirtualizerHandle["getViewportSize"];
  export const findItemIndex =
    store.$findItemIndex satisfies WindowVirtualizerHandle["findItemIndex"] as WindowVirtualizerHandle["findItemIndex"];
  export const getItemOffset =
    store.$getItemOffset satisfies WindowVirtualizerHandle["getItemOffset"] as WindowVirtualizerHandle["getItemOffset"];
  export const getItemSize =
    store.$getItemSize satisfies WindowVirtualizerHandle["getItemSize"] as WindowVirtualizerHandle["getItemSize"];
  export const scrollToIndex =
    scroller.$scrollToIndex satisfies WindowVirtualizerHandle["scrollToIndex"] as WindowVirtualizerHandle["scrollToIndex"];

  let containerStyle = $derived(
    styleToString({
      contain: "size style", // https://github.com/inokawa/virtua/pull/775 https://github.com/inokawa/virtua/issues/800
      "overflow-anchor": "none", // opt out browser's scroll anchoring because it will conflict to scroll anchoring of virtualizer
      flex: "none", // flex style can break layout
      position: "relative",
      width: horizontal ? totalSize + "px" : "100%",
      height: horizontal ? "100%" : totalSize + "px",
      "pointer-events": isScrolling ? "none" : undefined,
    })
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
      offset={stateVersion && store.$getItemOffset(index, negative)}
      hide={stateVersion && store.$isUnmeasuredItem(index)}
      {horizontal}
      resizer={resizer.$observeItem}
    />
  {/each}
</div>
