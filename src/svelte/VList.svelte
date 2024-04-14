<script lang="ts" generics="T">
  import { onMount, onDestroy, createEventDispatcher } from "svelte";
  import type { HTMLAttributes } from "svelte/elements";
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
  } from "./core";
  import {
    effect,
    type UnwrapCustomEvents,
    defaultGetKey,
    styleToString,
  } from "./utils";
  import ListItem from "./ListItem.svelte";

  // https://github.com/sveltejs/rfcs/pull/38
  interface $$Props extends HTMLAttributes<HTMLDivElement> {
    /**
     * The data items rendered by this component.
     */
    data: T[];
    /**
     * Function that returns the key of an item in the list. It's recommended to specify whenever possible for performance.
     * @default defaultGetKey (returns index of item)
     */
    getKey?: (data: T, index: number) => string | number;
    /**
     * Number of items to render above/below the visible bounds of the list. You can increase to avoid showing blank items in fast scrolling.
     * @defaultValue 4
     */
    overscan?: number;
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
  }

  // https://github.com/kitschpatrol/svelte-tweakpane-ui/blob/248fd7c24926af1e485a0676b6a8c053177e92db/src/lib/control/Button.svelte#L50-L51
  interface $$Events {
    /**
     * Callback invoked whenever scroll offset changes.
     * @param offset Current scrollTop or scrollLeft.
     */
    scroll: CustomEvent<number>;
    /**
     * Callback invoked when scrolling stops.
     */
    scrollEnd: CustomEvent<void>;
    /**
     * Callback invoked when visible items range changes.
     */
    rangeChange: CustomEvent<[start: number, end: number]>;
  }

  export let data: $$Props["data"];
  export let getKey: NonNullable<$$Props["getKey"]> = defaultGetKey;
  export let overscan: NonNullable<$$Props["overscan"]> = 4;
  export let itemSize: $$Props["itemSize"] = undefined;
  export let shift: NonNullable<$$Props["shift"]> = false;
  export let horizontal: NonNullable<$$Props["horizontal"]> = false;

  let containerRef: HTMLDivElement;

  let rerender: StateVersion = [];

  const dispatchEvent = createEventDispatcher<UnwrapCustomEvents<$$Events>>();

  const virtualizer = createVirtualizer(
    data.length,
    itemSize,
    horizontal,
    (v) => {
      rerender = v;
    },
    (offset) => {
      dispatchEvent("scroll", offset);
    },
    () => {
      dispatchEvent("scrollEnd");
    }
  );

  $: range = rerender && virtualizer[GET_RANGE]();
  $: scrollDirection = rerender && virtualizer[GET_SCROLL_DIRECTION]();
  $: totalSize = rerender && virtualizer[GET_TOTAL_SIZE]();
  $: jumpCount = rerender && virtualizer[GET_JUMP_COUNT]();
  $: extendedRange = getOverscanedRange(
    range[0],
    range[1],
    overscan,
    scrollDirection,
    data.length
  );

  onMount(() => {
    const root = containerRef.parentElement!;
    virtualizer[ON_MOUNT](root);
  });
  onDestroy(() => {
    virtualizer[ON_UN_MOUNT]();
  });

  let prevLength = data.length;
  effect(() => {
    if (prevLength === data.length) return;
    virtualizer[CHANGE_ITEM_LENGTH]((prevLength = data.length), shift);
  }, true);

  let prevJumpCount: number | undefined;
  effect(() => {
    if (prevJumpCount === jumpCount) return;
    prevJumpCount = jumpCount;
    virtualizer[FIX_SCROLL_JUMP]();
  });

  let prevRange: typeof range | undefined;
  effect(() => {
    if (prevRange && prevRange[0] === range[0] && prevRange[1] === range[1])
      return;
    prevRange = range;
    dispatchEvent("rangeChange", [range[0], range[1]]);
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

  let items: T[];
  $: {
    const [startIndex, endIndex] = extendedRange;
    const newItems: T[] = [];
    for (let i = startIndex, j = endIndex; i <= j; i++) {
      newItems.push(data[i]!);
    }
    items = newItems;
  }

  const viewportStyle = styleToString({
    display: horizontal ? "inline-block" : "block",
    [horizontal ? "overflow-x" : "overflow-y"]: "auto",
    contain: "strict",
    width: "100%",
    height: "100%",
  });

  const containerStyle = styleToString({
    // contain: "content",
    "overflow-anchor": "none", // opt out browser's scroll anchoring because it will conflict to scroll anchoring of virtualizer
    flex: "none", // flex style can break layout
    position: "relative",
    visibility: "hidden",
  });

  $: dynamicContainerStyle = styleToString({
    width: horizontal ? totalSize + "px" : "100%",
    height: horizontal ? "100%" : totalSize + "px",
    "pointer-events": scrollDirection !== SCROLL_IDLE ? "none" : "auto",
  });
</script>

<!-- 
  @component
  Virtualized list component.
-->
<div {...$$restProps} style={`${viewportStyle} ${$$restProps["style"] || ""}`}>
  <div
    bind:this={containerRef}
    style={`${containerStyle} ${dynamicContainerStyle}`}
  >
    {#each items as item, index (getKey(item, index + extendedRange[0]))}
      <ListItem
        index={index + extendedRange[0]}
        offset={rerender &&
          virtualizer[GET_ITEM_OFFSET](index + extendedRange[0])}
        hide={rerender && virtualizer[IS_ITEM_HIDDEN](index + extendedRange[0])}
        {horizontal}
        resizer={virtualizer[OBSERVE_ITEM_RESIZE]}
      >
        <slot {item} />
      </ListItem>
    {/each}
  </div>
</div>
