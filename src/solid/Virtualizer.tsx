/**
 * @jsxImportSource solid-js
 */
import {
  onMount,
  onCleanup,
  createEffect,
  createSignal,
  createMemo,
  JSX,
  on,
  createComputed,
  type ValidComponent,
  mergeProps,
} from "solid-js";
import { Dynamic } from "solid-js/web";
import {
  SCROLL_IDLE,
  UPDATE_SCROLL_EVENT,
  UPDATE_SCROLL_END_EVENT,
  UPDATE_VIRTUAL_STATE,
  getOverscanedRange,
  createVirtualStore,
  ACTION_ITEMS_LENGTH_CHANGE,
  getScrollSize,
} from "../core/store";
import { createResizer } from "../core/resizer";
import { createScroller } from "../core/scroller";
import { ItemsRange, ScrollToIndexOpts } from "../core/types";
import { ListItem } from "./ListItem";
import { RangedFor } from "./RangedFor";
import { exists } from "../core/utils";
import { isSameRange } from "./utils";

/**
 * Methods of {@link Virtualizer}.
 */
export interface VirtualizerHandle {
  /**
   * Get current scrollTop or scrollLeft.
   */
  readonly scrollOffset: number;
  /**
   * Get current scrollHeight or scrollWidth.
   */
  readonly scrollSize: number;
  /**
   * Get current offsetHeight or offsetWidth.
   */
  readonly viewportSize: number;
  /**
   * Get item offset from start.
   * @param index index of item
   */
  getItemOffset(index: number): number;
  /**
   * Scroll to the item specified by index.
   * @param index index of item
   * @param opts options
   */
  scrollToIndex(index: number, opts?: ScrollToIndexOpts): void;
  /**
   * Scroll to the given offset.
   * @param offset offset from start
   */
  scrollTo(offset: number): void;
  /**
   * Scroll by the given offset.
   * @param offset offset from current position
   */
  scrollBy(offset: number): void;
}

/**
 * Props of {@link Virtualizer}.
 */
export interface VirtualizerProps<T> {
  /**
   * Get reference to {@link VirtualizerHandle}.
   */
  ref?: (handle?: VirtualizerHandle) => void;
  /**
   * The data items rendered by this component.
   */
  data: T[];
  /**
   * The elements renderer function.
   */
  children: (data: T, index: number) => JSX.Element;
  /**
   * Number of items to render above/below the visible bounds of the list. Lower value will give better performance but you can increase to avoid showing blank items in fast scrolling.
   * @defaultValue 4
   */
  overscan?: number;
  /**
   * Component or element type for container element.
   * @defaultValue "div"
   */
  as?: ValidComponent;
  /**
   * Component or element type for item element.
   * @defaultValue "div"
   */
  item?: ValidComponent;
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
   * Callback invoked whenever scroll offset changes.
   * @param offset Current scrollTop or scrollLeft.
   */
  onScroll?: (offset: number) => void;
  /**
   * Callback invoked when scrolling stops.
   */
  onScrollEnd?: () => void;
  /**
   * Callback invoked when visible items range changes.
   */
  onRangeChange?: (
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

/**
 * Customizable list virtualizer for advanced usage. See {@link VirtualizerProps} and {@link VirtualizerHandle}.
 */
export const Virtualizer = <T,>(props: VirtualizerProps<T>): JSX.Element => {
  let containerRef: HTMLDivElement | undefined;
  props = mergeProps<[Partial<VirtualizerProps<T>>, VirtualizerProps<T>]>(
    { as: "div", horizontal: false },
    props
  );

  const store = createVirtualStore(
    props.data.length,
    props.itemSize ?? 40,
    undefined,
    undefined,
    !props.itemSize
  );
  const resizer = createResizer(store, props.horizontal!);
  const scroller = createScroller(store, props.horizontal!);

  const [rerender, setRerender] = createSignal(store._getStateVersion());

  const unsubscribeStore = store._subscribe(UPDATE_VIRTUAL_STATE, () => {
    setRerender(store._getStateVersion());
  });

  const unsubscribeOnScroll = store._subscribe(UPDATE_SCROLL_EVENT, () => {
    props.onScroll?.(store._getScrollOffset());
  });
  const unsubscribeOnScrollEnd = store._subscribe(
    UPDATE_SCROLL_END_EVENT,
    () => {
      props.onScrollEnd?.();
    }
  );

  const range = createMemo<ItemsRange>((prev) => {
    rerender();
    const next = store._getRange();
    if (prev && isSameRange(prev, next)) {
      return prev;
    }
    return next;
  });
  const scrollDirection = createMemo(
    () => rerender() && store._getScrollDirection()
  );
  const totalSize = createMemo(() => rerender() && store._getTotalSize());

  const jumpCount = createMemo(() => rerender() && store._getJumpCount());

  const overscanedRange = createMemo<ItemsRange>((prev) => {
    const overscan = props.overscan ?? 4;
    const [startIndex, endIndex] = range();
    const next = getOverscanedRange(
      startIndex,
      endIndex,
      overscan,
      scrollDirection(),
      props.data.length
    );
    if (prev && isSameRange(prev, next)) {
      return prev;
    }
    return next;
  });

  onMount(() => {
    if (props.ref) {
      props.ref({
        get scrollOffset() {
          return store._getScrollOffset();
        },
        get scrollSize() {
          return getScrollSize(store);
        },
        get viewportSize() {
          return store._getViewportSize();
        },
        getItemOffset: store._getItemOffset,
        scrollToIndex: scroller._scrollToIndex,
        scrollTo: scroller._scrollTo,
        scrollBy: scroller._scrollBy,
      });
    }

    const scrollable = containerRef!.parentElement!;
    resizer._observeRoot(scrollable);
    scroller._observe(scrollable);

    onCleanup(() => {
      if (props.ref) {
        props.ref();
      }

      unsubscribeStore();
      unsubscribeOnScroll();
      unsubscribeOnScrollEnd();
      resizer._dispose();
      scroller._dispose();
    });
  });

  createComputed(
    on(
      () => props.data.length,
      (len, prevLen) => {
        if (exists(prevLen) && len !== prevLen) {
          store._update(ACTION_ITEMS_LENGTH_CHANGE, [len, props.shift]);
        }
      }
    )
  );

  createEffect(
    on(jumpCount, () => {
      scroller._fixScrollJump();
    })
  );

  createEffect(() => {
    const next = range();
    props.onRangeChange && props.onRangeChange(next[0], next[1]);
  });

  return (
    <Dynamic
      component={props.as}
      ref={containerRef}
      style={{
        // contain: "content",
        "overflow-anchor": "none", // opt out browser's scroll anchoring because it will conflict to scroll anchoring of virtualizer
        flex: "none", // flex style can break layout
        position: "relative",
        visibility: "hidden", // TODO replace with other optimization methods
        width: props.horizontal ? totalSize() + "px" : "100%",
        height: props.horizontal ? "100%" : totalSize() + "px",
        "pointer-events": scrollDirection() !== SCROLL_IDLE ? "none" : "auto",
      }}
    >
      <RangedFor
        _each={props.data}
        _range={overscanedRange()}
        _render={(data, index) => {
          const offset = createMemo(() => {
            rerender();
            return store._getItemOffset(index);
          });
          const hide = createMemo(() => {
            rerender();
            return store._isUnmeasuredItem(index);
          });

          return (
            <ListItem
              _as={props.item}
              _index={index}
              _resizer={resizer._observeItem}
              _offset={offset()}
              _hide={hide()}
              _children={props.children(data(), index)}
              _isHorizontal={props.horizontal!}
            />
          );
        }}
      />
    </Dynamic>
  );
};
