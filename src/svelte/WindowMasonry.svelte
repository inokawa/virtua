<script lang="ts" generics="T">
  import { onMount, onDestroy } from "svelte";
  import {
    type ItemsRange,
    type StateVersion,
    UPDATE_SCROLL_END_EVENT,
    UPDATE_SIZE_EVENT,
    UPDATE_SCROLL_EVENT,
    UPDATE_VIRTUAL_STATE,
    createWindowDriver,
    createMasonryLayout,
    ACTION_ITEMS_LENGTH_CHANGE,
    relayout,
    createVirtualStore,
    min,
  } from "../core/index.js";
  import { defaultGetKey, isSameRange, styleToString } from "./utils.js";
  import MasonryItem from "./MasonryItem.svelte";
  import type {
    WindowMasonryHandle,
    WindowMasonryProps,
  } from "./WindowMasonry.type.js";

  const toCrossValue = (fraction: number, px: number): string =>
    px ? `calc(${fraction * 100}% + ${px}px)` : fraction * 100 + "%";

  interface Props extends WindowMasonryProps<T> {}

  let {
    data,
    getKey = defaultGetKey,
    lanes: lanesProp,
    gap: gapProp,
    itemSize,
    bufferSize,
    cache,
    ssrCount,
    children,
    onscroll,
    onscrollend,
    onresize,
  }: Props = $props();

  const layout = createMasonryLayout(
    data.length,
    lanesProp,
    gapProp,
    itemSize,
    cache,
  );
  const store = createVirtualStore(layout, ssrCount);
  const driver = createWindowDriver(store, layout, false);
  const unsubscribe = store.$subscribe((flag) => {
    if (flag & UPDATE_VIRTUAL_STATE) {
      stateVersion = store.$getStateVersion();
    }
    if (flag & UPDATE_SCROLL_EVENT) {
      // https://github.com/inokawa/virtua/discussions/580
      onscroll && onscroll();
    }
    if (flag & UPDATE_SCROLL_END_EVENT) {
      onscrollend && onscrollend();
    }
    if (flag & UPDATE_SIZE_EVENT) {
      onresize && onresize();
    }
  });

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
  let lanes = $derived(stateVersion && layout.$getLanes());
  let gap = $derived(stateVersion && layout.$getGap());
  // The lanes share the width left by the gaps between them
  let crossSize = $derived(toCrossValue(1 / lanes, gap / lanes - gap));

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
    driver.$observe(containerRef!);
  });
  onDestroy(() => {
    unsubscribe();
    driver.$dispose();
  });

  $effect.pre(() => {
    store.$update(ACTION_ITEMS_LENGTH_CHANGE, data.length);
  });
  $effect.pre(() => {
    relayout(store, layout, lanesProp, gapProp);
  });

  let prevStateVersion: StateVersion | undefined;
  $effect(() => {
    if (prevStateVersion === stateVersion) return;
    prevStateVersion = stateVersion;
    driver.$effect();
  });

  export const getCache =
    layout.$snapshot satisfies WindowMasonryHandle["getCache"] as WindowMasonryHandle["getCache"];
  export const getScrollOffset =
    store.$getScrollOffset satisfies WindowMasonryHandle["getScrollOffset"] as WindowMasonryHandle["getScrollOffset"];
  export const getViewportSize =
    store.$getViewportSize satisfies WindowMasonryHandle["getViewportSize"] as WindowMasonryHandle["getViewportSize"];
  export const getItemOffset =
    store.$getItemOffset satisfies WindowMasonryHandle["getItemOffset"] as WindowMasonryHandle["getItemOffset"];
  export const getItemSize =
    layout.$getItemSize satisfies WindowMasonryHandle["getItemSize"] as WindowMasonryHandle["getItemSize"];
  export const scrollToIndex: WindowMasonryHandle["scrollToIndex"] =
    driver.$scroll;

  let containerStyle = $derived(
    styleToString({
      contain: "size style", // https://github.com/inokawa/virtua/pull/775 https://github.com/inokawa/virtua/issues/800
      flex: "none", // flex style can break layout
      position: "relative",
      width: "100%",
      height: totalSize + "px",
      "pointer-events": isScrolling ? "none" : undefined,
    }),
  );
</script>

<!--
  @component
  {@link VMasonry} controlled by the window scrolling. See {@link WindowMasonryProps} and {@link WindowMasonryHandle}.
-->
<div bind:this={containerRef} style={containerStyle}>
  {#each indexes as index (getKey(data[index]!, index))}
    {@const item = data[index]!}
    {@const lane = stateVersion && layout.$getItemLane(index)}
    <MasonryItem
      {children}
      {item}
      {index}
      offset={stateVersion && store.$getItemOffset(index)}
      crossOffset={toCrossValue(lane / lanes, (lane * gap) / lanes)}
      {crossSize}
      hide={stateVersion && layout.$isSizeEqual(index)}
      resizer={driver.$observeItem}
    />
  {/each}
</div>
