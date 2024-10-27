<script lang="ts" generics="T">
  import type { ComponentProps } from "svelte";
  import { styleToString } from "./utils";
  import type { ViewportComponentAttributes } from "./types";
  import Virtualizer from "./Virtualizer.svelte";

  interface Props
    extends Pick<
        ComponentProps<Virtualizer<T>>,
        | "data"
        | "getKey"
        | "overscan"
        | "itemSize"
        | "shift"
        | "horizontal"
        | "children"
        | "onscroll"
        | "onscrollend"
        | "onrangechange"
      >,
      ViewportComponentAttributes {}

  let {
    data,
    getKey,
    overscan,
    itemSize,
    shift,
    horizontal,
    children,
    onscroll,
    onscrollend,
    onrangechange,
    ...rest
  }: Props = $props();

  let ref: Virtualizer<T> = $state()!;

  /**
   * Get current scrollTop or scrollLeft.
   */
  export const getScrollOffset = () => ref.getScrollOffset();
  /**
   * Get current scrollHeight or scrollWidth.
   */
  export const getScrollSize = () => ref.getScrollSize();
  /**
   * Get current offsetHeight or offsetWidth.
   */
  export const getViewportSize = () => ref.getViewportSize();
  /**
   * Scroll to the item specified by index.
   * @param index index of item
   * @param opts options
   */
  export const scrollToIndex = ((...args) =>
    ref.scrollToIndex(...args)) as typeof ref.scrollToIndex;
  /**
   * Scroll to the given offset.
   * @param offset offset from start
   */
  export const scrollTo = ((...args) =>
    ref.scrollTo(...args)) as typeof ref.scrollTo;
  /**
   * Scroll by the given offset.
   * @param offset offset from current position
   */
  export const scrollBy = ((...args) =>
    ref.scrollBy(...args)) as typeof ref.scrollBy;

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
  Virtualized list component.
-->
<div {...rest} style={`${viewportStyle} ${rest["style"] || ""}`}>
  <Virtualizer
    bind:this={ref}
    {data}
    {children}
    {getKey}
    {overscan}
    {itemSize}
    {shift}
    {horizontal}
    {onscroll}
    {onscrollend}
    {onrangechange}
  />
</div>
