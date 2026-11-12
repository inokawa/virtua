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
  createWindowDriver,
  createMasonryLayout,
  ACTION_ITEMS_LENGTH_CHANGE,
  relayout,
  type ItemsRange,
  type ScrollToIndexOpts,
  type CacheSnapshot,
} from "../core/index.js";
import { isSameRange } from "./utils.js";
import { MasonryItem } from "./MasonryItem.js";

const toCrossValue = (fraction: number, px: number): string =>
  px ? `calc(${fraction * 100}% + ${px}px)` : fraction * 100 + "%";

/**
 * Methods of {@link WindowMasonry}.
 */
export interface WindowMasonryHandle {
  /**
   * Get current {@link CacheSnapshot}.
   */
  readonly cache: CacheSnapshot;
  /**
   * Get current scrollTop.
   */
  readonly scrollOffset: number;
  /**
   * Get current clientHeight of the document.
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
}

/**
 * Props of {@link WindowMasonry}.
 */
export interface WindowMasonryProps<T> {
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
   */
  onScroll?: () => void;
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
 * {@link VMasonry} controlled by the window scrolling. See {@link WindowMasonryProps} and {@link WindowMasonryHandle}.
 */
export const WindowMasonry = <T,>(
  props: WindowMasonryProps<T>,
): JSX.Element => {
  let containerRef: HTMLDivElement | undefined;
  const { itemSize, cache, ssrCount } = props;

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

  const unsubscribe = store.$subscribe((flag) => {
    if (flag & UPDATE_VIRTUAL_STATE) {
      setRerender(store.$getStateVersion());
    }
    if (flag & UPDATE_SCROLL_EVENT) {
      // https://github.com/inokawa/virtua/discussions/580
      props.onScroll?.();
    }
    if (flag & UPDATE_SCROLL_END_EVENT) {
      props.onScrollEnd?.();
    }
    if (flag & UPDATE_SIZE_EVENT) {
      props.onResize?.();
    }
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
      get viewportSize() {
        return store.$getViewportSize();
      },
      getItemOffset: store.$getItemOffset,
      getItemSize: layout.$getItemSize,
      scrollToIndex: driver.$scroll,
    });
    onCleanup(() => ref());
  }

  onMount(() => {
    driver.$observe(containerRef!);

    onCleanup(() => {
      unsubscribe();
      driver.$dispose();
    });
  });

  createEffect(
    on(stateVersion, () => {
      driver.$effect();
    }),
  );

  const dataSlice = createMemo<T[]>(() => {
    const count = props.data.length;
    untrack(() => {
      store.$update(ACTION_ITEMS_LENGTH_CHANGE, count);
    });
    const items: T[] = [];
    for (let [i, j] = range(); i <= j; i++) {
      items.push(props.data[i]!);
    }
    return items;
  });

  return (
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
      <For each={dataSlice()}>
        {(data, index) => {
          const itemIndex = createMemo(() => range()[0] + index());
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
  );
};
