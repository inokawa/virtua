<script lang="ts" generics="T">
  import { styleToString } from "./utils.js";
  import Virtualizer from "./Virtualizer.svelte";
  import type { VListProps, VListHandle } from "./VList.type.js";

  interface Props extends VListProps<T> {}

  let {
    data,
    getKey,
    bufferSize,
    itemSize,
    ssrCount,
    shift,
    horizontal,
    keepMounted,
    cache,
    children,
    onscroll,
    onscrollend,
    ...rest
  }: Props = $props();

  let ref: Virtualizer<T> = $state()!;

  export const getCache = (() =>
    ref.getCache()) satisfies VListHandle["getCache"] as VListHandle["getCache"];
  export const getScrollOffset = (() =>
    ref.getScrollOffset()) satisfies VListHandle["getScrollOffset"] as VListHandle["getScrollOffset"];
  export const getScrollSize = (() =>
    ref.getScrollSize()) satisfies VListHandle["getScrollSize"] as VListHandle["getScrollSize"];
  export const getViewportSize = (() =>
    ref.getViewportSize()) satisfies VListHandle["getViewportSize"] as VListHandle["getViewportSize"];
  export const findItemIndex = ((...args) =>
    ref.findItemIndex(
      ...args,
    )) satisfies VListHandle["findItemIndex"] as VListHandle["findItemIndex"];
  export const getItemOffset = ((...args) =>
    ref.getItemOffset(
      ...args,
    )) satisfies VListHandle["getItemOffset"] as VListHandle["getItemOffset"];
  export const getItemSize = ((...args) =>
    ref.getItemSize(
      ...args,
    )) satisfies VListHandle["getItemSize"] as VListHandle["getItemSize"];
  export const scrollToIndex = ((...args) =>
    ref.scrollToIndex(
      ...args,
    )) satisfies VListHandle["scrollToIndex"] as VListHandle["scrollToIndex"];
  export const scrollTo = ((...args) =>
    ref.scrollTo(
      ...args,
    )) satisfies VListHandle["scrollTo"] as VListHandle["scrollTo"];
  export const scrollBy = ((...args) =>
    ref.scrollBy(
      ...args,
    )) satisfies VListHandle["scrollBy"] as VListHandle["scrollBy"];

  const viewportStyle = styleToString({
    display: horizontal ? "inline-block" : "block",
    [horizontal ? "overflow-x" : "overflow-y"]: "auto",
    contain: "strict",
    width: "100%",
    height: "100%",
  });
</script>

<!-- 
  @component
  Virtualized list component. See {@link VListProps} and {@link VListHandle}.
-->
<div {...rest} style="{viewportStyle} {rest.style || ''}">
  <Virtualizer
    bind:this={ref}
    {data}
    {children}
    {getKey}
    {bufferSize}
    {itemSize}
    {ssrCount}
    {shift}
    {horizontal}
    {keepMounted}
    {cache}
    {onscroll}
    {onscrollend}
  />
</div>
