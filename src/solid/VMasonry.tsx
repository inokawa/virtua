/**
 * @jsxImportSource @solidjs/web
 */
import {
  onSettled,
  onCleanup,
  createEffect,
  createSignal,
  createMemo,
  omit,
  For,
  type Accessor,
  untrack,
} from "solid-js";
import { isServer, type JSX } from "@solidjs/web";
import {
  UPDATE_SCROLL_EVENT,
  UPDATE_SCROLL_END_EVENT,
  UPDATE_SIZE_EVENT,
  UPDATE_VIRTUAL_STATE,
  createVirtualStore,
  getScrollSize,
  createContainerDriver,
  createMasonryLayout,
  ACTION_ITEMS_LENGTH_CHANGE,
  relayout,
  sort,
  type ItemsRange,
  type ScrollToIndexOpts,
  type CacheSnapshot,
} from "../core/index.js";
import { isSameRange } from "./utils.js";
import { type ViewportComponentAttributes } from "./types.js";
import { MasonryItem } from "./MasonryItem.js";

const toCrossValue = (fraction: number, px: number): string =>
  px ? `calc(${fraction * 100}% + ${px}px)` : fraction * 100 + "%";

/**
 * Methods of {@link VMasonry}.
 */
export interface VMasonryHandle {
  /**
   * Get current {@link CacheSnapshot}.
   */
  readonly cache: CacheSnapshot;
  /**
   * Get current scrollTop.
   */
  readonly scrollOffset: number;
  /**
   * Get current scrollHeight.
   */
  readonly scrollSize: number;
  /**
   * Get current clientHeight.
   */
  readonly viewportSize: number;
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
 * Props of {@link VMasonry}.
 */
export interface VMasonryProps<T> extends ViewportComponentAttributes {
  /**
   * Get reference to {@link VMasonryHandle}.
   */
  ref?: VMasonryHandle;
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
   * You can restore cache by passing a {@link CacheSnapshot} on mount. This is useful when you want to restore scroll position after navigation. The snapshot can be obtained from {@link VMasonryHandle.cache}.
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
 * Virtualized masonry component. See {@link VMasonryProps} and {@link VMasonryHandle}.
 */
export const VMasonry = <T,>(props: VMasonryProps<T>): JSX.Element => {
  let containerRef: HTMLDivElement | undefined;
  const ssrCount = untrack(() => props.ssrCount);
  const others = omit(
    props,
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
  );

  const layout = untrack(() =>
    createMasonryLayout(
      props.data.length,
      props.lanes,
      props.gap,
      props.itemSize,
      props.cache,
    ),
  );
  const store = createVirtualStore(layout, ssrCount);
  const driver = createContainerDriver(store, layout, false);

  // Syncs the props before the version is read, and ownedWrite allows the subscriber to write it during the sync
  const [stateVersion, setRerender] = createSignal(
    () => {
      const nextLanes = props.lanes;
      const nextGap = props.gap;
      const count = props.data.length;
      untrack(() => {
        relayout(store, layout, nextLanes, nextGap);
        store.$update(ACTION_ITEMS_LENGTH_CHANGE, count);
      });
      return store.$getStateVersion();
    },
    { ownedWrite: true },
  );

  const unsubscribe = store.$subscribe((flag) => {
    if (flag & UPDATE_VIRTUAL_STATE) {
      setRerender(store.$getStateVersion());
    }
    if (flag & UPDATE_SCROLL_EVENT) {
      props.onScroll?.(store.$getScrollOffset());
    }
    if (flag & UPDATE_SCROLL_END_EVENT) {
      props.onScrollEnd?.();
    }
    if (flag & UPDATE_SIZE_EVENT) {
      props.onResize?.();
    }
  });

  const range = createMemo(
    (): ItemsRange => {
      stateVersion();
      return store.$getRange(props.bufferSize);
    },
    { equals: isSameRange },
  );
  const isScrolling = createMemo(() => stateVersion() && store.$isScrolling());
  const totalSize = createMemo(() => stateVersion() && store.$getTotalSize());
  const lanes = createMemo(() => stateVersion() && layout.$getLanes());
  const gap = createMemo(() => stateVersion() && layout.$getGap());
  // The lanes share the width left by the gaps between them
  const crossSize = createMemo(() =>
    toCrossValue(1 / lanes(), gap() / lanes() - gap()),
  );

  // The compiler turns `ref={handle}` into a function that assigns the handle
  const ref = untrack(() => props.ref) as unknown as
    ((handle?: VMasonryHandle) => void) | undefined;
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

  onSettled(() => {
    driver.$observe(containerRef!);

    return () => {
      unsubscribe();
      driver.$dispose();
    };
  });

  createEffect(stateVersion, driver.$effect);

  const dataSlice = createMemo(() => {
    const count = props.data.length;
    const items: T[] = [];
    const indexes: number[] = [];

    if (props.keepMounted) {
      const mounted = new Set(props.keepMounted);
      for (let [i, j] = range(); i <= j; i++) {
        mounted.add(i);
      }
      for (const index of sort([...mounted])) {
        if (index >= 0 && index < count) {
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
        "overflow-y": "auto",
        contain: "strict",
        width: "100%",
        height: "100%",
        ...props.style,
      }}
    >
      <div
        ref={containerRef}
        style={{
          contain: "size style", // https://github.com/inokawa/virtua/pull/775 https://github.com/inokawa/virtua/issues/800
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
            const children = untrack(() => props.children(data, itemIndex));

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
                _children={children}
              />
            );
          }}
        </For>
      </div>
    </div>
  );
};
