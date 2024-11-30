<script lang="ts" generics="T">
  import { onMount, onDestroy } from "svelte";
  import {
    ACTION_ITEMS_LENGTH_CHANGE,
    ACTION_START_OFFSET_CHANGE,
    type StateVersion,
    UPDATE_SCROLL_END_EVENT,
    UPDATE_SCROLL_EVENT,
    UPDATE_VIRTUAL_STATE,
    createResizer,
    createScroller,
    createVirtualStore,
    getScrollSize as _getScrollSize,
  } from "../core";
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

  const store = createVirtualStore(
    data.length,
    itemSize,
    overscan,
    undefined,
    undefined,
    !itemSize
  );
  const resizer = createResizer(store, horizontal);
  const scroller = createScroller(store, horizontal);
  const unsubscribeStore = store._subscribe(UPDATE_VIRTUAL_STATE, () => {
    rerender = store._getStateVersion();
  });
  const unsubscribeOnScroll = store._subscribe(UPDATE_SCROLL_EVENT, () => {
    onscroll && onscroll(store._getScrollOffset());
  });
  const unsubscribeOnScrollEnd = store._subscribe(
    UPDATE_SCROLL_END_EVENT,
    () => {
      onscrollend && onscrollend();
    }
  );

  let containerRef: HTMLDivElement | undefined = $state();

  let rerender: StateVersion = $state([]);

  let range = $derived(rerender && store._getRange());
  let isScrolling = $derived(rerender && store._isScrolling());
  let totalSize = $derived(rerender && store._getTotalSize());
  let jumpCount = $derived(rerender && store._getJumpCount());

  onMount(() => {
    const assignRef = (scrollable: HTMLElement) => {
      resizer._observeRoot(scrollable);
      scroller._observe(scrollable);
    };
    if (scrollRef) {
      assignRef(scrollRef);
    } else {
      assignRef(containerRef!.parentElement!);
    }
  });
  onDestroy(() => {
    unsubscribeStore();
    unsubscribeOnScroll();
    unsubscribeOnScrollEnd();
    resizer._dispose();
    scroller._dispose();
  });

  $effect.pre(() => {
    if (data.length !== store._getItemsLength()) {
      store._update(ACTION_ITEMS_LENGTH_CHANGE, [data.length, shift]);
    }
  });

  $effect.pre(() => {
    if (startMargin !== store._getStartSpacerSize()) {
      store._update(ACTION_START_OFFSET_CHANGE, startMargin);
    }
  });

  let prevJumpCount: number | undefined;
  $effect(() => {
    if (prevJumpCount === jumpCount) return;
    prevJumpCount = jumpCount;
    scroller._fixScrollJump();
  });

  export const getScrollOffset =
    store._getScrollOffset satisfies VirtualizerHandle["getScrollOffset"] as VirtualizerHandle["getScrollOffset"];
  export const getScrollSize = (() =>
    _getScrollSize(
      store
    )) satisfies VirtualizerHandle["getScrollSize"] as VirtualizerHandle["getScrollSize"];
  export const getViewportSize =
    store._getViewportSize satisfies VirtualizerHandle["getViewportSize"] as VirtualizerHandle["getViewportSize"];
  export const findStartIndex =
    store._findStartIndex satisfies VirtualizerHandle["findStartIndex"] as VirtualizerHandle["findStartIndex"];
  export const findEndIndex =
    store._findEndIndex satisfies VirtualizerHandle["findEndIndex"] as VirtualizerHandle["findEndIndex"];
  export const getItemOffset =
    store._getItemOffset satisfies VirtualizerHandle["getItemOffset"] as VirtualizerHandle["getItemOffset"];
  export const getItemSize =
    store._getItemSize satisfies VirtualizerHandle["getItemSize"] as VirtualizerHandle["getItemSize"];
  export const scrollToIndex =
    scroller._scrollToIndex satisfies VirtualizerHandle["scrollToIndex"] as VirtualizerHandle["scrollToIndex"];
  export const scrollTo =
    scroller._scrollTo satisfies VirtualizerHandle["scrollTo"] as VirtualizerHandle["scrollTo"];
  export const scrollBy =
    scroller._scrollBy satisfies VirtualizerHandle["scrollBy"] as VirtualizerHandle["scrollBy"];

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
      offset={rerender && store._getItemOffset(index)}
      hide={rerender && store._isUnmeasuredItem(index)}
      {horizontal}
      resizer={resizer._observeItem}
    />
  {/each}
</svelte:element>
