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
  Accessor,
  on,
  For,
  untrack,
} from "solid-js";
import {
  UPDATE_SCROLL_END_EVENT,
  UPDATE_VIRTUAL_STATE,
  createVirtualStore,
  ACTION_ITEMS_LENGTH_CHANGE,
  UPDATE_SCROLL_EVENT,
  createWindowResizer,
  createWindowScroller,
  ItemsRange,
  ScrollToIndexOpts,
  CacheSnapshot,
} from "../core/index.js";
import { ListItem } from "./ListItem.js";
import { isSameRange } from "./utils.js";

/**
 * Methods of {@link WindowVirtualizer}.
 */
export interface WindowVirtualizerHandle {
  /**
   * Get current {@link CacheSnapshot}.
   */
  readonly cache: CacheSnapshot;
  /**
   * Find the start index of visible range of items.
   */
  findStartIndex: () => number;
  /**
   * Find the end index of visible range of items.
   */
  findEndIndex: () => number;
  /**
   * Scroll to the item specified by index.
   * @param index index of item
   * @param opts options
   */
  scrollToIndex(index: number, opts?: ScrollToIndexOpts): void;
}

/**
 * Props of {@link WindowVirtualizer}.
 */
export interface WindowVirtualizerProps<T> {
  /**
   * Get reference to {@link WindowVirtualizerHandle}.
   */
  ref?: (handle?: WindowVirtualizerHandle) => void;
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
   * You can restore cache by passing a {@link CacheSnapshot} on mount. This is useful when you want to restore scroll position after navigation. The snapshot can be obtained from {@link WindowVirtualizerHandle.cache}.
   *
   * **The length of items should be the same as when you take the snapshot, otherwise restoration may not work as expected.**
   */
  cache?: CacheSnapshot;
  /**
   * Callback invoked whenever scroll offset changes.
   */
  onScroll?: () => void;
  /**
   * Callback invoked when scrolling stops.
   */
  onScrollEnd?: () => void;
}

/**
 * {@link Virtualizer} controlled by the window scrolling. See {@link WindowVirtualizerProps} and {@link WindowVirtualizerHandle}.
 */
export const WindowVirtualizer = <T,>(
  props: WindowVirtualizerProps<T>
): JSX.Element => {
  let containerRef: HTMLDivElement | undefined;

  const {
    ref: _ref,
    data: _data,
    children: _children,
    overscan,
    itemSize,
    shift: _shift,
    horizontal = false,
    cache,
    onScrollEnd: _onScrollEnd,
  } = props;

  const store = createVirtualStore(
    props.data.length,
    itemSize,
    overscan,
    undefined,
    cache,
    !itemSize
  );
  const resizer = createWindowResizer(store, horizontal);
  const scroller = createWindowScroller(store, horizontal);

  const [stateVersion, setRerender] = createSignal(store.$getStateVersion());

  const unsubscribeStore = store.$subscribe(UPDATE_VIRTUAL_STATE, () => {
    setRerender(store.$getStateVersion());
  });

  const unsubscribeOnScroll = store.$subscribe(UPDATE_SCROLL_EVENT, () => {
    // https://github.com/inokawa/virtua/discussions/580
    props.onScroll?.();
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
        findStartIndex: store.$findStartIndex,
        findEndIndex: store.$findEndIndex,
        scrollToIndex: scroller.$scrollToIndex,
      });
    }

    resizer.$observeRoot(containerRef!);
    scroller.$observe(containerRef!);

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

  createEffect(
    on(stateVersion, () => {
      scroller.$fixScrollJump();
    })
  );

  const dataSlice = createMemo<T[]>(() => {
    const count = props.data.length;
    untrack(() => {
      if (count !== store.$getItemsLength()) {
        store.$update(ACTION_ITEMS_LENGTH_CHANGE, [count, props.shift]);
      }
    });
    const [startIndex, endIndex] = range();
    const items: T[] = [];
    for (let i = startIndex, j = endIndex; i <= j; i++) {
      items.push(props.data[i]!);
    }
    return items;
  });

  return (
    <div
      ref={containerRef}
      style={{
        contain: "strict",
        "overflow-anchor": "none", // opt out browser's scroll anchoring because it will conflict to scroll anchoring of virtualizer
        overflow: "clip", // https://github.com/inokawa/virtua/pull/485 https://github.com/inokawa/virtua/issues/717
        flex: "none", // flex style can break layout
        position: "relative",
        width: horizontal ? totalSize() + "px" : "100%",
        height: horizontal ? "100%" : totalSize() + "px",
        "pointer-events": isScrolling() ? "none" : undefined,
      }}
    >
      <For each={dataSlice()}>
        {(data, index) => {
          const itemIndex = createMemo(() => range()[0] + index());
          const offset = createMemo(() => {
            stateVersion();
            return store.$getItemOffset(itemIndex());
          });
          const hide = createMemo(() => {
            stateVersion();
            return store.$isUnmeasuredItem(itemIndex());
          });
          const children = createMemo(() => {
            return untrack(() => props.children(data, itemIndex));
          });

          return (
            <ListItem
              _index={itemIndex()}
              _resizer={resizer.$observeItem}
              _offset={offset()}
              _hide={hide()}
              _children={children()}
              _isHorizontal={horizontal}
            />
          );
        }}
      </For>
    </div>
  );
};
