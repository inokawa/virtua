<script lang="ts" generics="T">
  import { onMount, onDestroy } from "svelte";
  import {
    type ItemsRange,
    type StateVersion,
    UPDATE_SCROLL_END_EVENT,
    UPDATE_SCROLL_EVENT,
    UPDATE_VIRTUAL_STATE,
    createContainerDriver,
    createMasonryLayout,
    ACTION_ITEMS_LENGTH_CHANGE,
    ACTION_RELAYOUT,
    createVirtualStore,
    getScrollSize as _getScrollSize,
    scrollTo as _scrollTo,
    scrollBy as _scrollBy,
    scrollToIndex as _scrollToIndex,
  } from "../core/index.js";
  import { defaultGetKey, isSameRange, styleToString } from "./utils.js";
  import MasonryItem from "./MasonryItem.svelte";
  import type { VMasonryHandle, VMasonryProps } from "./VMasonry.type.js";

  const toCrossValue = (fraction: number, px: number): string =>
    px ? `calc(${fraction * 100}% + ${px}px)` : fraction * 100 + "%";

  interface Props extends VMasonryProps<T> {}

  let {
    data,
    getKey = defaultGetKey,
    lanes: lanesProp,
    gap: gapProp,
    itemSize,
    bufferSize,
    cache,
    children,
    onscroll,
    onscrollend,
    ...rest
  }: Props = $props();

  const layout = createMasonryLayout(
    data.length,
    lanesProp,
    gapProp,
    itemSize,
    cache,
  );
  const store = createVirtualStore(layout);
  const driver = createContainerDriver(store, false);
  store.$subscribe(UPDATE_VIRTUAL_STATE, () => {
    stateVersion = store.$getStateVersion();
  });
  store.$subscribe(UPDATE_SCROLL_EVENT, () => {
    onscroll && onscroll(store.$getScrollOffset());
  });
  store.$subscribe(UPDATE_SCROLL_END_EVENT, () => {
    onscrollend && onscrollend();
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
    const len = data.length;
    const [start, end] = range;
    const arr: number[] = [];
    for (let i = start; i <= end; i++) {
      // Guard for experimental.async: true, which runs the each block before $effect.pre
      // https://github.com/inokawa/virtua/pull/847
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
    store.$dispose();
    driver.$dispose();
  });

  $effect.pre(() => {
    if (data.length !== store.$getItemsLength()) {
      store.$update(ACTION_ITEMS_LENGTH_CHANGE, [data.length]);
    }
  });
  $effect.pre(() => {
    layout.$setOptions(lanesProp, gapProp);
    store.$update(ACTION_RELAYOUT, undefined);
  });

  let prevStateVersion: StateVersion | undefined;
  $effect(() => {
    if (prevStateVersion === stateVersion) return;
    prevStateVersion = stateVersion;
    driver.$effect();
  });

  export const getCache =
    layout.$snapshot satisfies VMasonryHandle["getCache"] as VMasonryHandle["getCache"];
  export const getScrollOffset =
    store.$getScrollOffset satisfies VMasonryHandle["getScrollOffset"] as VMasonryHandle["getScrollOffset"];
  export const getScrollSize = (() =>
    _getScrollSize(
      store,
    )) satisfies VMasonryHandle["getScrollSize"] as VMasonryHandle["getScrollSize"];
  export const getViewportSize =
    store.$getViewportSize satisfies VMasonryHandle["getViewportSize"] as VMasonryHandle["getViewportSize"];
  export const getItemOffset =
    store.$getItemOffset satisfies VMasonryHandle["getItemOffset"] as VMasonryHandle["getItemOffset"];
  export const getItemSize =
    store.$getItemSize satisfies VMasonryHandle["getItemSize"] as VMasonryHandle["getItemSize"];
  export const scrollToIndex: VMasonryHandle["scrollToIndex"] = (index, opts) =>
    _scrollToIndex(driver, store, index, opts);
  export const scrollTo: VMasonryHandle["scrollTo"] = (offset) =>
    _scrollTo(driver, offset);
  export const scrollBy: VMasonryHandle["scrollBy"] = (offset) =>
    _scrollBy(driver, store, offset);

  const viewportStyle = styleToString({
    display: "block",
    "overflow-y": "auto",
    contain: "strict",
    width: "100%",
    height: "100%",
  });
  let containerStyle = $derived(
    styleToString({
      contain: "size style", // https://github.com/inokawa/virtua/pull/775 https://github.com/inokawa/virtua/issues/800
      "overflow-anchor": "none", // opt out browser's scroll anchoring because it will conflict with scroll anchoring of virtualizer
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
  Virtualized masonry component. See {@link VMasonryProps} and {@link VMasonryHandle}.
-->
<div {...rest} style="{viewportStyle} {rest.style || ''}">
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
        hide={stateVersion && store.$isUnmeasuredItem(index)}
        resizer={driver.$observeItem}
      />
    {/each}
  </div>
</div>
