<script lang="ts" generics="T">
  import { onMount, onDestroy } from "svelte";
  import {
    SCROLL_IDLE,
    type StateVersion,
    getOverscanedRange,
    CHANGE_ITEM_LENGTH,
    createWindowVirtualizer,
    FIX_SCROLL_JUMP,
    GET_ITEM_OFFSET,
    GET_JUMP_COUNT,
    GET_RANGE,
    GET_SCROLL_DIRECTION,
    GET_TOTAL_SIZE,
    IS_ITEM_HIDDEN,
    OBSERVE_ITEM_RESIZE,
    ON_MOUNT,
    ON_UN_MOUNT,
    GET_ITEMS_LENGTH,
  } from "./core";
  import { defaultGetKey, styleToString } from "./utils";
  import ListItem from "./ListItem.svelte";
  import type { WindowVirtualizerProps } from "./WindowVirtualizer.type";

  interface Props extends WindowVirtualizerProps<T> {}

  let {
    data,
    getKey = defaultGetKey,
    overscan = 4,
    itemSize,
    shift = false,
    horizontal = false,
    children,
    onscrollend,
    onrangechange,
  }: Props = $props();

  const virtualizer = createWindowVirtualizer(
    data.length,
    itemSize,
    horizontal,
    (v) => {
      rerender = v;
    },
    () => {
      onscrollend && onscrollend();
    }
  );

  let containerRef: HTMLDivElement | undefined = $state();

  let rerender: StateVersion = $state([]);

  let range = $derived(rerender && virtualizer[GET_RANGE]());
  let scrollDirection = $derived(
    rerender && virtualizer[GET_SCROLL_DIRECTION]()
  );
  let totalSize = $derived(rerender && virtualizer[GET_TOTAL_SIZE]());
  let jumpCount = $derived(rerender && virtualizer[GET_JUMP_COUNT]());
  let extendedRange = $derived(
    getOverscanedRange(
      range[0],
      range[1],
      overscan,
      scrollDirection,
      data.length
    )
  );

  onMount(() => {
    virtualizer[ON_MOUNT](containerRef!);
  });
  onDestroy(() => {
    virtualizer[ON_UN_MOUNT]();
  });

  $effect.pre(() => {
    if (data.length !== virtualizer[GET_ITEMS_LENGTH]()) {
      virtualizer[CHANGE_ITEM_LENGTH](data.length, shift);
    }
  });

  let prevJumpCount: number | undefined;
  $effect(() => {
    if (prevJumpCount === jumpCount) return;
    prevJumpCount = jumpCount;
    virtualizer[FIX_SCROLL_JUMP]();
  });

  let prevRange: typeof range | undefined;
  $effect(() => {
    if (prevRange && prevRange[0] === range[0] && prevRange[1] === range[1])
      return;
    prevRange = range;
    onrangechange && onrangechange(range[0], range[1]);
  });

  let items = $derived.by(() => {
    const [startIndex, endIndex] = extendedRange;
    const newItems: T[] = [];
    for (let i = startIndex, j = endIndex; i <= j; i++) {
      newItems.push(data[i]!);
    }
    return newItems;
  });

  let containerStyle = $derived(
    styleToString({
      // contain: "content",
      "overflow-anchor": "none", // opt out browser's scroll anchoring because it will conflict to scroll anchoring of virtualizer
      flex: "none", // flex style can break layout
      position: "relative",
      visibility: "hidden", // TODO replace with other optimization methods
      width: horizontal ? totalSize + "px" : "100%",
      height: horizontal ? "100%" : totalSize + "px",
      "pointer-events": scrollDirection !== SCROLL_IDLE ? "none" : undefined,
    })
  );
</script>

<!-- 
  @component
  {@link Virtualizer} controlled by the window scrolling. See {@link WindowVirtualizerProps} and {@link WindowVirtualizerHandle}.
-->
<div bind:this={containerRef} style={containerStyle}>
  {#each items as item, i (getKey(item, i + extendedRange[0]))}
    {@const index = i + extendedRange[0]}
    <ListItem
      {children}
      {item}
      {index}
      as={"div"}
      offset={rerender && virtualizer[GET_ITEM_OFFSET](index)}
      hide={rerender && virtualizer[IS_ITEM_HIDDEN](index)}
      {horizontal}
      resizer={virtualizer[OBSERVE_ITEM_RESIZE]}
    />
  {/each}
</div>
