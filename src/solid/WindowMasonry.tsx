/**
 * @jsxImportSource solid-js
 */
import {
  onMount,
  onCleanup,
  createEffect,
  createComputed,
  createSignal,
  createMemo,
  type JSX,
  on,
  splitProps,
  For,
  type Accessor,
  untrack,
} from "solid-js";
import { isServer } from "solid-js/web";
import {
  UPDATE_SCROLL_EVENT,
  UPDATE_SCROLL_END_EVENT,
  UPDATE_SIZE_EVENT,
  UPDATE_VIRTUAL_STATE,
  createVirtualStore,
  getScrollSize,
  createWindowDriver,
  createMasonryLayout,
  ACTION_ITEMS_LENGTH_CHANGE,
  relayout,
  sort,
  type ItemsRange,
  type ScrollToIndexOpts,
  type CacheSnapshot,
} from "../core/index.js";
import { isSameRange } from "./utils.js";
import { MasonryItem, toCrossValue } from "./VMasonry.js";
import { type ViewportComponentAttributes } from "./types.js";

/**
 * Methods of {@link WindowMasonry}.
 */
export interface WindowMasonryHandle {
  /**
   * Get current {@link CacheSnapshot}.
   */
  readonly cache: CacheSnapshot;
  /**
   * Get current scrollTop. This is the document offset.
   */
  readonly scrollOffset: number;
  /**
   * Get the masonry scroll extent, at least the viewport size. This does not include the rest of the document.
   */
  readonly scrollSize: number;
  /**
   * Get the document viewport height.
   */
  readonly viewportSize: number;
  /**
   * Get item offset from the start of the masonry.
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
   * @param offset offset from the start of the document
   */
  scrollTo(offset: number): void;
  /**
   * Scroll by the given offset.
   * @param offset offset from current position
   */
  scrollBy(offset: number): void;
}

/**
 * Props of {@link WindowMasonry}.
 */
export interface WindowMasonryProps<T> extends ViewportComponentAttributes {
  /**
   * Get reference to {@link WindowMasonryHandle}.
   */
  ref?: WindowMasonryHandle | ((handle?: WindowMasonryHandle) => void);
  /**
   * The data items rendered by this component.
   */
  data: readonly T[];
  /**
   * The elements renderer function.
   */
  children: (data: T, index: Accessor<number>) => JSX.Element;
  /**
   * The number of lanes (columns) which items are laid out into. Each item is placed into the shortest lane in order. It must be an integer and the minimum value is 1.
   */
  lanes: number;
  /**
   * The gap between the items and the lanes in pixels, which is not included in the sizes.
   * @defaultValue 0
   */
  gap?: number;
  /**
   * Item size hint for unmeasured items in pixels. It will help to reduce scroll jump when items are measured if used properly.
   *
   * - If not set, initial item sizes will be automatically estimated from measured sizes. This is recommended for most cases.
   * - If set, you can opt out estimation and use the value as initial item size.
   */
  itemSize?: number;
  /**
   * Extra space in pixels to render before/after the viewport. The default value is recommended for most cases. A smaller value gives better performance, and a larger value avoids showing blank items in fast scrolling.
   * @defaultValue 200
   */
  bufferSize?: number;
  /**
   * List of indexes that should be always mounted, even when off screen.
   */
  keepMounted?: readonly number[];
  /**
   * You can restore cache by passing a {@link CacheSnapshot} on mount. This is useful when you want to restore scroll position after navigation. The snapshot can be obtained from {@link WindowMasonryHandle.cache}.
   *
   * **The length of items should be the same as when you take the snapshot, otherwise restoration may not work as expected.**
   */
  cache?: CacheSnapshot;
  /**
   * A prop for SSR. If set, the specified amount of items will be mounted in the initial rendering regardless of the container size until hydrated. The minimum value is 0.
   *
   * **The items are hidden until they are measured in the browser, so also pass their sizes with `cache` to show them on the server.**
   */
  ssrCount?: number;
  /**
   * Callback invoked whenever scroll offset changes.
   * @param offset Current scrollTop.
   */
  onScroll?: (offset: number) => void;
  /**
   * Callback invoked when scrolling stops.
   */
  onScrollEnd?: () => void;
  /**
   * Callback invoked when the size of the viewport or the items changes.
   */
  onResize?: () => void;
}

/**
 * Virtualized masonry controlled by window scrolling. See {@link WindowMasonryProps} and {@link WindowMasonryHandle}.
 */
export const WindowMasonry = <T,>(
  props: WindowMasonryProps<T>,
): JSX.Element => {
  let containerRef: HTMLDivElement | undefined;
  const { itemSize, cache, ssrCount } = props;
  const [, others] = splitProps(props, [
    "ref",
    "data",
    "children",
    "lanes",
    "gap",
    "itemSize",
    "bufferSize",
    "keepMounted",
    "cache",
    "ssrCount",
    "onScroll",
    "onScrollEnd",
    "onResize",
    "style",
  ]);

  const layout = createMasonryLayout(
    props.data.length,
    props.lanes,
    props.gap,
    itemSize,
    cache,
  );
  const store = createVirtualStore(layout, ssrCount);
  const driver = createWindowDriver(store, layout, false);

  const [stateVersion, setRerender] = createSignal(store.$getStateVersion());

  store.$subscribe(UPDATE_VIRTUAL_STATE, () => {
    setRerender(store.$getStateVersion());
  });
  store.$subscribe(UPDATE_SCROLL_EVENT, () => {
    props.onScroll?.(store.$getScrollOffset());
  });
  store.$subscribe(UPDATE_SCROLL_END_EVENT, () => {
    props.onScrollEnd?.();
  });
  store.$subscribe(UPDATE_SIZE_EVENT, () => {
    props.onResize?.();
  });

  createComputed(() => {
    relayout(store, layout, props.lanes, props.gap);
  });

  const range = createMemo<ItemsRange>((prev) => {
    stateVersion();
    const next = store.$getRange(props.bufferSize);
    if (prev && isSameRange(prev, next)) {
      return prev;
    }
    return next;
  });
  const isScrolling = createMemo(() => stateVersion() && store.$isScrolling());
  const totalSize = createMemo(() => stateVersion() && store.$getTotalSize());
  const lanes = createMemo(() => stateVersion() && layout.$getLanes());
  const gap = createMemo(() => stateVersion() && layout.$getGap());
  // The lanes share the width left by the gaps between them
  const crossSize = createMemo(() =>
    toCrossValue(1 / lanes(), gap() / lanes() - gap()),
  );

  // eslint-disable-next-line solid/reactivity
  const ref = props.ref as Exclude<typeof props.ref, WindowMasonryHandle>;
  if (!isServer && ref) {
    ref({
      get cache() {
        return layout.$snapshot();
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
      getItemOffset: store.$getItemOffset,
      getItemSize: layout.$getItemSize,
      scrollToIndex: driver.$scroll,
      scrollTo: (offset) => driver.$scroll(undefined, { offset }),
      scrollBy: (offset) =>
        driver.$scroll(undefined, {
          offset: offset + store.$getScrollOffset(),
        }),
    });
    onCleanup(() => ref());
  }

  onMount(() => {
    driver.$observe(containerRef!);

    onCleanup(() => {
      store.$dispose();
      driver.$dispose();
    });
  });

  createEffect(
    on(stateVersion, () => {
      driver.$effect();
    }),
  );

  const dataSlice = createMemo(() => {
    const count = props.data.length;
    untrack(() => {
      store.$update(ACTION_ITEMS_LENGTH_CHANGE, count);
    });
    const items: T[] = [];
    const indexes: number[] = [];

    if (props.keepMounted) {
      const mounted = new Set(props.keepMounted);
      for (let [i, j] = range(); i <= j; i++) {
        mounted.add(i);
      }
      for (const index of sort([...mounted])) {
        if (index < count) {
          items.push(props.data[index]!);
          indexes.push(index);
        }
      }
    } else {
      for (let [i, j] = range(); i <= j; i++) {
        items.push(props.data[i]!);
        indexes.push(i);
      }
    }

    return { _items: items, _indexes: indexes };
  });

  return (
    <div
      {...others}
      style={{
        display: "block",
        width: "100%",
        ...props.style,
      }}
    >
      <div
        ref={containerRef}
        style={{
          contain: "size style", // https://github.com/inokawa/virtua/pull/775 https://github.com/inokawa/virtua/issues/800
          "overflow-anchor": "none", // opt out browser's scroll anchoring because it will conflict with scroll anchoring of virtualizer
          flex: "none", // flex style can break layout
          position: "relative",
          width: "100%",
          height: totalSize() + "px",
          "pointer-events": isScrolling() ? "none" : undefined,
        }}
      >
        <For each={dataSlice()._items}>
          {(data, index) => {
            const itemIndex = createMemo(() => dataSlice()._indexes[index()]!);
            const offset = createMemo(() => {
              stateVersion();
              return store.$getItemOffset(itemIndex());
            });
            const lane = createMemo(() => {
              stateVersion();
              return layout.$getItemLane(itemIndex());
            });
            const hide = createMemo(() => {
              stateVersion();
              return layout.$isSizeEqual(itemIndex());
            });
            const children = createMemo(() => {
              return untrack(() => props.children(data, itemIndex));
            });

            return (
              <MasonryItem
                _index={itemIndex()}
                _resizer={driver.$observeItem}
                _offset={offset()}
                _crossOffset={toCrossValue(
                  lane() / lanes(),
                  (lane() * gap()) / lanes(),
                )}
                _crossSize={crossSize()}
                _hide={hide()}
                _children={children()}
              />
            );
          }}
        </For>
      </div>
    </div>
  );
};
