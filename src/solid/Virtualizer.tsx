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
  For,
  Accessor,
  untrack,
} from "solid-js";
import { Dynamic } from "solid-js/web";
import {
  UPDATE_SCROLL_EVENT,
  UPDATE_SCROLL_END_EVENT,
  UPDATE_VIRTUAL_STATE,
  createVirtualStore,
  ACTION_ITEMS_LENGTH_CHANGE,
  getScrollSize,
  ACTION_START_OFFSET_CHANGE,
  createResizer,
  createScroller,
  ItemsRange,
  ScrollToIndexOpts,
  CacheSnapshot,
  sort,
} from "../core";
import { ListItem } from "./ListItem";
import { isSameRange } from "./utils";

/**
 * Methods of {@link Virtualizer}.
 */
export interface VirtualizerHandle {
  /**
   * Get current {@link CacheSnapshot}.
   */
  readonly cache: CacheSnapshot;
  /**
   * Get current scrollTop, or scrollLeft if horizontal: true.
   */
  readonly scrollOffset: number;
  /**
   * Get current scrollHeight, or scrollWidth if horizontal: true.
   */
  readonly scrollSize: number;
  /**
   * Get current offsetHeight, or offsetWidth if horizontal: true.
   */
  readonly viewportSize: number;
  /**
   * Find the start index of visible range of items.
   */
  findStartIndex: () => number;
  /**
   * Find the end index of visible range of items.
   */
  findEndIndex: () => number;
  /**
   * Get item offset from start.
   * @param index index of item
   */
  getItemOffset(index: number): number;
  /**
   * Get item size.
   * @param index index of item
   */
  getItemSize(index: number): number;
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
  children: (data: T, index: Accessor<number>) => JSX.Element;
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
   * Reference to the scrollable element. The default will get the direct parent element of virtualizer.
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
   * List of indexes that should be always mounted, even when off screen.
   */
  keepMounted?: number[];
  /**
   * You can restore cache by passing a {@link CacheSnapshot} on mount. This is useful when you want to restore scroll position after navigation. The snapshot can be obtained from {@link VirtualizerHandle.cache}.
   *
   * **The length of items should be the same as when you take the snapshot, otherwise restoration may not work as expected.**
   */
  cache?: CacheSnapshot;
  /**
   * If you put an element before virtualizer, you have to define its height with this prop.
   */
  startMargin?: number;
  /**
   * Callback invoked whenever scroll offset changes.
   * @param offset Current scrollTop, or scrollLeft if horizontal: true.
   */
  onScroll?: (offset: number) => void;
  /**
   * Callback invoked when scrolling stops.
   */
  onScrollEnd?: () => void;
}

/**
 * Customizable list virtualizer for advanced usage. See {@link VirtualizerProps} and {@link VirtualizerHandle}.
 */
export const Virtualizer = <T,>(props: VirtualizerProps<T>): JSX.Element => {
  let containerRef: HTMLDivElement | undefined;
  const { itemSize, horizontal = false, overscan, cache } = props;
  props = mergeProps<[Partial<VirtualizerProps<T>>, VirtualizerProps<T>]>(
    { as: "div" },
    props
  );

  const store = createVirtualStore(
    props.data.length,
    itemSize,
    overscan,
    undefined,
    cache,
    !itemSize
  );
  const resizer = createResizer(store, horizontal);
  const scroller = createScroller(store, horizontal);

  const [stateVersion, setRerender] = createSignal(store.$getStateVersion());

  const unsubscribeStore = store.$subscribe(UPDATE_VIRTUAL_STATE, () => {
    setRerender(store.$getStateVersion());
  });

  const unsubscribeOnScroll = store.$subscribe(UPDATE_SCROLL_EVENT, () => {
    props.onScroll?.(store.$getScrollOffset());
  });
  const unsubscribeOnScrollEnd = store.$subscribe(
    UPDATE_SCROLL_END_EVENT,
    () => {
      props.onScrollEnd?.();
    }
  );

  const range = createMemo<ItemsRange>((prev) => {
    stateVersion();
    const next = store.$getRange();
    if (prev && isSameRange(prev, next)) {
      return prev;
    }
    return next;
  });
  const isScrolling = createMemo(() => stateVersion() && store.$isScrolling());
  const totalSize = createMemo(() => stateVersion() && store.$getTotalSize());

  onMount(() => {
    if (props.ref) {
      props.ref({
        get cache() {
          return store.$getCacheSnapshot();
        },
        get scrollOffset() {
          return store.$getScrollOffset();
        },
        get scrollSize() {
          return getScrollSize(store);
        },
        get viewportSize() {
          return store.$getViewportSize();
        },
        findStartIndex: store.$findStartIndex,
        findEndIndex: store.$findEndIndex,
        getItemOffset: store.$getItemOffset,
        getItemSize: store.$getItemSize,
        scrollToIndex: scroller.$scrollToIndex,
        scrollTo: scroller.$scrollTo,
        scrollBy: scroller.$scrollBy,
      });
    }

    const scrollable = props.scrollRef || containerRef!.parentElement!;
    resizer.$observeRoot(scrollable);
    scroller.$observe(scrollable);

    onCleanup(() => {
      if (props.ref) {
        props.ref();
      }

      unsubscribeStore();
      unsubscribeOnScroll();
      unsubscribeOnScrollEnd();
      resizer.$dispose();
      scroller.$dispose();
    });
  });

  createComputed(
    on(
      () => props.data.length,
      (count) => {
        if (count !== store.$getItemsLength()) {
          store.$update(ACTION_ITEMS_LENGTH_CHANGE, [count, props.shift]);
        }
      }
    )
  );

  createComputed(
    on(
      () => props.startMargin || 0,
      (value) => {
        if (value !== store.$getStartSpacerSize()) {
          store.$update(ACTION_START_OFFSET_CHANGE, value);
        }
      }
    )
  );

  createEffect(
    on(stateVersion, () => {
      scroller.$fixScrollJump();
    })
  );

  const dataSlice = createMemo(() => {
    const [start, end] = range();
    const items = end >= 0 ? props.data.slice(start, end + 1) : [];
    const indexes = items.map((_, index) => start + index);

    if (props.keepMounted) {
      const startItems: T[] = [];
      const startIndexes: number[] = [];
      const endItems: T[] = [];
      const endIndexes: number[] = [];
      sort(props.keepMounted).forEach((index) => {
        if (index < 0 || index >= props.data.length) return;
        if (index < start) {
          startItems.push(props.data[index]!);
          startIndexes.push(index);
        }
        if (index > end) {
          endItems.push(props.data[index]!);
          endIndexes.push(index);
        }
      });
      items.unshift(...startItems);
      indexes.unshift(...startIndexes);
      items.push(...endItems);
      indexes.push(...endIndexes);
    }

    return { _items: items, _indexes: indexes };
  });

  const renderItem = (data: T, index: Accessor<number>) => {
    const offset = createMemo(() => {
      stateVersion();
      return store.$getItemOffset(index());
    });
    const hide = createMemo(() => {
      stateVersion();
      return store.$isUnmeasuredItem(index());
    });
    const children = createMemo(() => {
      return untrack(() => props.children(data, index));
    });

    return (
      <ListItem
        _as={props.item}
        _index={index()}
        _resizer={resizer.$observeItem}
        _offset={offset()}
        _hide={hide()}
        _children={children()}
        _isHorizontal={horizontal}
      />
    );
  };

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
        width: horizontal ? totalSize() + "px" : "100%",
        height: horizontal ? "100%" : totalSize() + "px",
        "pointer-events": isScrolling() ? "none" : undefined,
      }}
    >
      <For each={dataSlice()._items}>
        {(data, index) => {
          const itemIndex = createMemo(() => dataSlice()._indexes[index()]!);
          // eslint-disable-next-line solid/reactivity
          return renderItem(data, itemIndex);
        }}
      </For>
    </Dynamic>
  );
};
