<script lang="ts" generics="T">
  import { onMount, onDestroy, tick } from "svelte";
  import {
    ACTION_ITEMS_LENGTH_CHANGE,
    ACTION_START_OFFSET_CHANGE,
    type StateVersion,
    UPDATE_SCROLL_END_EVENT,
    UPDATE_SCROLL_EVENT,
    UPDATE_VIRTUAL_STATE,
    createContainerDriver,
    scrollTo as _scrollTo,
    scrollBy as _scrollBy,
    scrollToIndex as _scrollToIndex,
    createVirtualStore,
    createListLayout,
    getScrollSize as _getScrollSize,
    sort,
  } from "../core/index.js";
  import { defaultGetKey, styleToString } from "./utils.js";
  import ListItem from "./ListItem.svelte";
  import type {
    VirtualizerHandle,
    VirtualizerProps,
  } from "./Virtualizer.type.js";

  interface Props extends VirtualizerProps<T> {}

  let {
    data,
    getKey = defaultGetKey,
    as = "div",
    item: itemAs,
    itemProps,
    scrollRef,
    bufferSize,
    itemSize,
    ssrCount,
    shift = false,
    horizontal = false,
    keepMounted,
    cache,
    startMargin = 0,
    children,
    onscroll,
    onscrollend,
  }: Props = $props();

  const layout = createListLayout(data.length, itemSize, cache);
  const store = createVirtualStore(layout, ssrCount, !itemSize);
  const driver = createContainerDriver(store, horizontal);
  store.$subscribe(UPDATE_VIRTUAL_STATE, () => {
    stateVersion = store.$getStateVersion();
  });
  store.$subscribe(UPDATE_SCROLL_EVENT, () => {
    onscroll && onscroll(store.$getScrollOffset());
  });
  store.$subscribe(UPDATE_SCROLL_END_EVENT, () => {
    onscrollend && onscrollend();
  });

  let isSSR = $state(!!ssrCount);

  let containerRef: HTMLDivElement | undefined = $state();

  let stateVersion: StateVersion = $state(store.$getStateVersion());

  let range = $derived(stateVersion && store.$getRange(bufferSize));
  let isScrolling = $derived(stateVersion && store.$isScrolling());
  let totalSize = $derived(stateVersion && store.$getTotalSize());
  let negative = $derived(stateVersion && driver.$isNegative());

  let indexes = $derived.by(() => {
    // https://github.com/inokawa/virtua/pull/847
    const len = data.length;

    const [start, end] = range;
    const arr: number[] = [];
    if (keepMounted) {
      const mounted = new Set(keepMounted);
      for (let i = start; i <= end; i++) {
        mounted.add(i);
      }
      for (const index of sort([...mounted])) {
        if (index < len) {
          arr.push(index);
        }
      }
    } else {
      for (let i = start; i <= end; i++) {
        if (i < len) {
          arr.push(i);
        }
      }
    }
    return arr;
  });

  onMount(() => {
    isSSR = false;

    let unmounted = false;
    const container = containerRef!;
    // parent's ref may not exist on mount https://github.com/inokawa/virtua/issues/603 https://github.com/inokawa/virtua/issues/690
    tick().then(() => {
      // https://github.com/inokawa/virtua/pull/914
      if (unmounted) return;
      driver.$observe(container, scrollRef);
    });
    return () => {
      unmounted = true;
    };
  });
  onDestroy(() => {
    store.$dispose();
    driver.$dispose();
  });

  $effect.pre(() => {
    if (data.length !== store.$getItemsLength()) {
      store.$update(ACTION_ITEMS_LENGTH_CHANGE, [data.length, shift]);
    }
  });

  $effect.pre(() => {
    if (startMargin !== store.$getStartSpacerSize()) {
      store.$update(ACTION_START_OFFSET_CHANGE, startMargin);
    }
  });

  let prevStateVersion: StateVersion | undefined;
  $effect(() => {
    if (prevStateVersion === stateVersion) return;
    prevStateVersion = stateVersion;
    driver.$fixScrollJump();
  });

  export const getCache =
    layout.$snapshot satisfies VirtualizerHandle["getCache"] as VirtualizerHandle["getCache"];
  export const getScrollOffset =
    store.$getScrollOffset satisfies VirtualizerHandle["getScrollOffset"] as VirtualizerHandle["getScrollOffset"];
  export const getScrollSize = (() =>
    _getScrollSize(
      store,
    )) satisfies VirtualizerHandle["getScrollSize"] as VirtualizerHandle["getScrollSize"];
  export const getViewportSize =
    store.$getViewportSize satisfies VirtualizerHandle["getViewportSize"] as VirtualizerHandle["getViewportSize"];
  export const findItemIndex =
    store.$findItemIndex satisfies VirtualizerHandle["findItemIndex"] as VirtualizerHandle["findItemIndex"];
  export const getItemOffset =
    store.$getItemOffset satisfies VirtualizerHandle["getItemOffset"] as VirtualizerHandle["getItemOffset"];
  export const getItemSize =
    store.$getItemSize satisfies VirtualizerHandle["getItemSize"] as VirtualizerHandle["getItemSize"];
  export const scrollToIndex: VirtualizerHandle["scrollToIndex"] = (
    index,
    opts,
  ) => _scrollToIndex(driver, store, index, opts);
  export const scrollTo: VirtualizerHandle["scrollTo"] = (offset) =>
    _scrollTo(driver, offset);
  export const scrollBy: VirtualizerHandle["scrollBy"] = (offset) =>
    _scrollBy(driver, store, offset);

  let containerStyle = $derived(
    styleToString({
      contain: "size style", // https://github.com/inokawa/virtua/pull/775 https://github.com/inokawa/virtua/issues/800
      "overflow-anchor": "none", // opt out browser's scroll anchoring because it will conflict to scroll anchoring of virtualizer
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
  Customizable list virtualizer for advanced usage. See {@link VirtualizerProps} and {@link VirtualizerHandle}.
-->
<svelte:element this={as} bind:this={containerRef} style={containerStyle}>
  {#each indexes as index (getKey(data[index]!, index))}
    {@const item = data[index]!}
    <ListItem
      {children}
      {item}
      {index}
      as={itemAs}
      offset={stateVersion && store.$getItemOffset(index, negative)}
      hide={stateVersion && store.$isUnmeasuredItem(index)}
      {horizontal}
      {isSSR}
      resizer={driver.$observeItem}
      itemProps={itemProps?.({ item, index })}
    />
  {/each}
</svelte:element>
