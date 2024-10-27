<script lang="ts" generics="T">
  import { type Snippet, onMount, onDestroy } from "svelte";
  import {
    SCROLL_IDLE,
    type StateVersion,
    getOverscanedRange,
    CHANGE_ITEM_LENGTH,
    createVirtualizer,
    FIX_SCROLL_JUMP,
    GET_ITEM_OFFSET,
    GET_JUMP_COUNT,
    GET_RANGE,
    GET_SCROLL_DIRECTION,
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
  } from "./core";
  import { defaultGetKey, styleToString } from "./utils";
  import ListItem from "./ListItem.svelte";
  import type { SvelteHTMLElements } from "svelte/elements";

  interface Props {
    /**
     * The data items rendered by this component.
     */
    data: T[];
    /**
     * The elements renderer snippet.
     */
    children: Snippet<[{ item: T; index: number }]>;
    /**
     * Function that returns the key of an item in the list. It's recommended to specify whenever possible for performance.
     * @default defaultGetKey (returns index of item)
     */
    getKey?: (data: T, index: number) => string | number;
    /**
     * Component or element type for container element.
     * @defaultValue "div"
     */
    as?: keyof SvelteHTMLElements;
    /**
     * Component or element type for item element.
     * @defaultValue "div"
     */
    item?: keyof SvelteHTMLElements;
    /**
     * Number of items to render above/below the visible bounds of the list. You can increase to avoid showing blank items in fast scrolling.
     * @defaultValue 4
     */
    overscan?: number;
    /**
     * Reference to the scrollable element. The default will get the parent element of virtualizer.
     */
    scrollRef?: HTMLElement;
    /**
     * Item size hint for unmeasured items. It will help to reduce scroll jump when items are measured if used properly.
     *
     * - If not set, initial item sizes will be automatically estimated from measured sizes. This is recommended for most cases.
     * - If set, you can opt out estimation and use the value as initial item size.
     */
    itemSize?: number;
    /**
     * While true is set, scroll position will be maintained from the end not usual start when items are added to/removed from start. It's recommended to set false if you add to/remove from mid/end of the list because it can cause unexpected behavior. This prop is useful for reverse infinite scrolling.
     */
    shift?: boolean;
    /**
     * If true, rendered as a horizontally scrollable list. Otherwise rendered as a vertically scrollable list.
     */
    horizontal?: boolean;
    /**
     * If you put an element before virtualizer, you have to define its height with this prop.
     */
    startMargin?: number;
    /**
     * Callback invoked whenever scroll offset changes.
     * @param offset Current scrollTop or scrollLeft.
     */
    onscroll?: (offset: number) => void;
    /**
     * Callback invoked when scrolling stops.
     */
    onscrollend?: () => void;
    /**
     * Callback invoked when visible items range changes.
     */
    onrangechange?: (
      /**
       * The start index of viewable items.
       */
      startIndex: number,
      /**
       * The end index of viewable items.
       */
      endIndex: number
    ) => void;
  }

  let {
    data,
    getKey = defaultGetKey,
    as = "div",
    item: itemAs,
    scrollRef,
    overscan = 4,
    itemSize,
    shift = false,
    horizontal = false,
    startMargin = 0,
    children,
    onscroll,
    onscrollend,
    onrangechange,
  }: Props = $props();

  let containerRef: HTMLDivElement | undefined = $state();

  let rerender: StateVersion = $state([]);

  const virtualizer = createVirtualizer(
    data.length,
    itemSize,
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

  let prevRange: typeof range | undefined;
  $effect(() => {
    if (prevRange && prevRange[0] === range[0] && prevRange[1] === range[1])
      return;
    prevRange = range;
    onrangechange && onrangechange(range[0], range[1]);
  });

  /**
   * Get current scrollTop or scrollLeft.
   */
  export const getScrollOffset = virtualizer[GET_SCROLL_OFFSET];
  /**
   * Get current scrollHeight or scrollWidth.
   */
  export const getScrollSize = virtualizer[GET_SCROLL_SIZE];
  /**
   * Get current offsetHeight or offsetWidth.
   */
  export const getViewportSize = virtualizer[GET_VIEWPORT_SIZE];
  /**
   * Scroll to the item specified by index.
   * @param index index of item
   * @param opts options
   */
  export const scrollToIndex = virtualizer[SCROLL_TO_INDEX];
  /**
   * Scroll to the given offset.
   * @param offset offset from start
   */
  export const scrollTo = virtualizer[SCROLL_TO];
  /**
   * Scroll by the given offset.
   * @param offset offset from current position
   */
  export const scrollBy = virtualizer[SCROLL_BY];

  let items = $derived.by(() => {
    const [startIndex, endIndex] = extendedRange;
    const newItems: T[] = [];
    for (let i = startIndex, j = endIndex; i <= j; i++) {
      newItems.push(data[i]!);
    }
    return newItems;
  });

  const containerStyle = styleToString({
    // contain: "content",
    "overflow-anchor": "none", // opt out browser's scroll anchoring because it will conflict to scroll anchoring of virtualizer
    flex: "none", // flex style can break layout
    position: "relative",
    visibility: "hidden", // TODO replace with other optimization methods
  });

  let dynamicContainerStyle = $derived(
    styleToString({
      width: horizontal ? totalSize + "px" : "100%",
      height: horizontal ? "100%" : totalSize + "px",
      "pointer-events": scrollDirection !== SCROLL_IDLE ? "none" : undefined,
    })
  );
</script>

<!-- 
  @component
  Customizable list virtualizer for advanced usage.
-->
<svelte:element
  this={as}
  bind:this={containerRef}
  style={`${containerStyle} ${dynamicContainerStyle}`}
>
  {#each items as item, i (getKey(item, i + extendedRange[0]))}
    {@const index = i + extendedRange[0]}
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
