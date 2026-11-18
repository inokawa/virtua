/**
 * @jsxImportSource @solidjs/web
 */
import {
  onSettled,
  onCleanup,
  createEffect,
  createSignal,
  createMemo,
  type Accessor,
  For,
  untrack,
} from "solid-js";
import { isServer, type JSX } from "@solidjs/web";
import {
  UPDATE_SCROLL_END_EVENT,
  UPDATE_SIZE_EVENT,
  UPDATE_VIRTUAL_STATE,
  createVirtualStore,
  createListLayout,
  ACTION_ITEMS_LENGTH_CHANGE,
  UPDATE_SCROLL_EVENT,
  createWindowDriver,
  type ItemsRange,
  type ScrollToIndexOpts,
  type CacheSnapshot,
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
   * Get current scrollTop, or scrollLeft if horizontal: true. Always positive even in RTL.
   */
  readonly scrollOffset: number;
  /**
   * Get current clientHeight of the document, or clientWidth if horizontal: true.
   */
  readonly viewportSize: number;
  /**
   * Find nearest item index from offset, which is 0 if there are no items.
   * @param offset offset in pixels from the start of the scroll container
   */
  findItemIndex(offset: number): number;
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
 * Props of {@link WindowVirtualizer}.
 */
export interface WindowVirtualizerProps<T> {
  /**
   * Get reference to {@link WindowVirtualizerHandle}.
   */
  ref?: WindowVirtualizerHandle;
  /**
   * The data items rendered by this component.
   */
  data: readonly T[];
  /**
   * The elements renderer function.
   */
  children: (data: T, index: Accessor<number>) => JSX.Element;
  /**
   * Extra space in pixels to render before/after the viewport. The default value is recommended for most cases. A smaller value gives better performance, and a larger value avoids showing blank items in fast scrolling.
   * @defaultValue 200
   */
  bufferSize?: number;
  /**
   * Item size hint for unmeasured items in pixels. It will help to reduce scroll jump when items are measured if used properly.
   *
   * - If not set, initial item sizes will be automatically estimated from measured sizes. This is recommended for most cases.
   * - If set, you can opt out estimation and use the value as initial item size.
   */
  itemSize?: number;
  /**
   * A prop for SSR. If set, the specified amount of items will be mounted in the initial rendering regardless of the container size until hydrated. The minimum value is 0.
   */
  ssrCount?: number;
  /**
   * Set true only when items are added to or removed from the start of the list, such as when older items are loaded in reverse infinite scrolling. In that case, the scroll position is maintained from the end of the list instead of the start.
   *
   * **Do not set true in any other case, as it can cause unexpected behavior.**
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
  /**
   * Callback invoked when the size of the viewport or the items changes.
   */
  onResize?: () => void;
}

/**
 * {@link Virtualizer} controlled by the window scrolling. See {@link WindowVirtualizerProps} and {@link WindowVirtualizerHandle}.
 */
export const WindowVirtualizer = <T,>(
  props: WindowVirtualizerProps<T>,
): JSX.Element => {
  let containerRef: HTMLDivElement | undefined;

  const horizontal = untrack(() => props.horizontal ?? false);
  const ssrCount = untrack(() => props.ssrCount);

  const [isSSR, setIsSSR] = createSignal(!!ssrCount);

  const layout = untrack(() =>
    createListLayout(props.data.length, props.itemSize, props.cache),
  );
  const store = createVirtualStore(layout, ssrCount);
  const driver = createWindowDriver(store, layout, horizontal);

  // Syncs the props before the version is read, and ownedWrite allows the subscriber to write it during the sync
  const [stateVersion, setRerender] = createSignal(
    () => {
      const count = props.data.length;
      untrack(() => {
        store.$update(ACTION_ITEMS_LENGTH_CHANGE, count, props.shift);
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

  const range = createMemo(
    (): ItemsRange => {
      stateVersion();
      return store.$getRange(props.bufferSize);
    },
    { equals: isSameRange },
  );
  const isScrolling = createMemo(() => stateVersion() && store.$isScrolling());
  const totalSize = createMemo(() => stateVersion() && store.$getTotalSize());

  // The compiler turns `ref={handle}` into a function that assigns the handle
  const ref = untrack(() => props.ref) as unknown as
    ((handle?: WindowVirtualizerHandle) => void) | undefined;
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
      findItemIndex: (offset) =>
        layout.$findIndex(offset - store.$getBaseOffset()),
      getItemOffset: store.$getItemOffset,
      getItemSize: layout.$getItemSize,
      scrollToIndex: driver.$scroll,
    });
    onCleanup(() => ref());
  }

  onSettled(() => {
    setIsSSR(false);

    driver.$observe(containerRef!);

    return () => {
      unsubscribe();
      driver.$dispose();
    };
  });

  createEffect(stateVersion, driver.$effect);

  const dataSlice = createMemo<T[]>(() => {
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
            return layout.$isSizeEqual(itemIndex());
          });
          const children = untrack(() => props.children(data, itemIndex));

          return (
            <ListItem
              _as="div"
              _index={itemIndex()}
              _resizer={driver.$observeItem}
              _offset={offset()}
              _hide={hide()}
              _children={children}
              _isHorizontal={horizontal}
              _isSSR={isSSR()}
            />
          );
        }}
      </For>
    </div>
  );
};
