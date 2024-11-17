<script lang="ts" generics="T">
  import { onMount, onDestroy } from "svelte";
  import {
    type StateVersion,
    CHANGE_ITEM_LENGTH,
    createVirtualizer,
    FIX_SCROLL_JUMP,
    GET_ITEM_OFFSET,
    GET_JUMP_COUNT,
    GET_RANGE,
    GET_IS_SCROLLING,
    GET_SCROLL_OFFSET,
    GET_SCROLL_SIZE,
    GET_TOTAL_SIZE,
    GET_VIEWPORT_SIZE,
    IS_ITEM_HIDDEN,
    OBSERVE_ITEM_RESIZE,
    ON_MOUNT,
    ON_UN_MOUNT,
    SCROLL_BY,
    SCROLL_TO,
    SCROLL_TO_INDEX,
    CHANGE_START_MARGIN,
    GET_START_SPACER_SIZE,
    GET_ITEMS_LENGTH,
    GET_ITEM_SIZE,
    FIND_START_INDEX,
    FIND_END_INDEX,
  } from "./core";
  import { defaultGetKey, styleToString, iterRange } from "./utils";
  import ListItem from "./ListItem.svelte";
  import type { VirtualizerHandle, VirtualizerProps } from "./Virtualizer.type";

  interface Props extends VirtualizerProps<T> {}

  let {
    data,
    getKey = defaultGetKey,
    as = "div",
    item: itemAs,
    scrollRef,
    overscan,
    itemSize,
    shift = false,
    horizontal = false,
    startMargin = 0,
    children,
    onscroll,
    onscrollend,
  }: Props = $props();

  const virtualizer = createVirtualizer(
    data.length,
    itemSize,
    overscan,
    horizontal,
    (v) => {
      rerender = v;
    },
    (offset) => {
      onscroll && onscroll(offset);
    },
    () => {
      onscrollend && onscrollend();
    }
  );

  let containerRef: HTMLDivElement | undefined = $state();

  let rerender: StateVersion = $state([]);

  let range = $derived(rerender && virtualizer[GET_RANGE]());
  let isScrolling = $derived(rerender && virtualizer[GET_IS_SCROLLING]());
  let totalSize = $derived(rerender && virtualizer[GET_TOTAL_SIZE]());
  let jumpCount = $derived(rerender && virtualizer[GET_JUMP_COUNT]());

  onMount(() => {
    if (scrollRef) {
      virtualizer[ON_MOUNT](scrollRef);
    } else {
      virtualizer[ON_MOUNT](containerRef!.parentElement!);
    }
  });
  onDestroy(() => {
    virtualizer[ON_UN_MOUNT]();
  });

  $effect.pre(() => {
    if (data.length !== virtualizer[GET_ITEMS_LENGTH]()) {
      virtualizer[CHANGE_ITEM_LENGTH](data.length, shift);
    }
  });

  $effect.pre(() => {
    if (startMargin !== virtualizer[GET_START_SPACER_SIZE]()) {
      virtualizer[CHANGE_START_MARGIN](startMargin);
    }
  });

  let prevJumpCount: number | undefined;
  $effect(() => {
    if (prevJumpCount === jumpCount) return;
    prevJumpCount = jumpCount;
    virtualizer[FIX_SCROLL_JUMP]();
  });

  export const getScrollOffset = virtualizer[
    GET_SCROLL_OFFSET
  ] satisfies VirtualizerHandle["getScrollOffset"] as VirtualizerHandle["getScrollOffset"];
  export const getScrollSize = virtualizer[
    GET_SCROLL_SIZE
  ] satisfies VirtualizerHandle["getScrollSize"] as VirtualizerHandle["getScrollSize"];
  export const getViewportSize = virtualizer[
    GET_VIEWPORT_SIZE
  ] satisfies VirtualizerHandle["getViewportSize"] as VirtualizerHandle["getViewportSize"];
  export const findStartIndex = virtualizer[
    FIND_START_INDEX
  ] satisfies VirtualizerHandle["findStartIndex"] as VirtualizerHandle["findStartIndex"];
  export const findEndIndex = virtualizer[
    FIND_END_INDEX
  ] satisfies VirtualizerHandle["findEndIndex"] as VirtualizerHandle["findEndIndex"];
  export const getItemOffset = virtualizer[
    GET_ITEM_OFFSET
  ] satisfies VirtualizerHandle["getItemOffset"] as VirtualizerHandle["getItemOffset"];
  export const getItemSize = virtualizer[
    GET_ITEM_SIZE
  ] satisfies VirtualizerHandle["getItemSize"] as VirtualizerHandle["getItemSize"];
  export const scrollToIndex = virtualizer[
    SCROLL_TO_INDEX
  ] satisfies VirtualizerHandle["scrollToIndex"] as VirtualizerHandle["scrollToIndex"];
  export const scrollTo = virtualizer[
    SCROLL_TO
  ] satisfies VirtualizerHandle["scrollTo"] as VirtualizerHandle["scrollTo"];
  export const scrollBy = virtualizer[
    SCROLL_BY
  ] satisfies VirtualizerHandle["scrollBy"] as VirtualizerHandle["scrollBy"];

  let containerStyle = $derived(
    styleToString({
      // contain: "content",
      "overflow-anchor": "none", // opt out browser's scroll anchoring because it will conflict to scroll anchoring of virtualizer
      flex: "none", // flex style can break layout
      position: "relative",
      visibility: "hidden", // TODO replace with other optimization methods
      width: horizontal ? totalSize + "px" : "100%",
      height: horizontal ? "100%" : totalSize + "px",
      "pointer-events": isScrolling ? "none" : undefined,
    })
  );
</script>

<!-- 
  @component
  Customizable list virtualizer for advanced usage. See {@link VirtualizerProps} and {@link VirtualizerHandle}.
-->
<svelte:element this={as} bind:this={containerRef} style={containerStyle}>
  {#each iterRange(range) as index (getKey(data[index]!, index))}
    {@const item = data[index]!}
    <ListItem
      {children}
      {item}
      {index}
      as={itemAs}
      offset={rerender && virtualizer[GET_ITEM_OFFSET](index)}
      hide={rerender && virtualizer[IS_ITEM_HIDDEN](index)}
      {horizontal}
      resizer={virtualizer[OBSERVE_ITEM_RESIZE]}
    />
  {/each}
</svelte:element>
