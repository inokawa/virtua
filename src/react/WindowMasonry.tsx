import {
  type ReactElement,
  type Ref,
  forwardRef,
  useImperativeHandle,
  useReducer,
  useRef,
} from "react";
import { flushSync } from "react-dom";
import {
  UPDATE_SCROLL_EVENT,
  createVirtualStore,
  UPDATE_VIRTUAL_STATE,
  UPDATE_SCROLL_END_EVENT,
  UPDATE_SIZE_EVENT,
  createWindowDriver,
  createMasonryLayout,
  ACTION_ITEMS_LENGTH_CHANGE,
  relayout,
  type CacheSnapshot,
  type ScrollToIndexOpts,
} from "../core/index.js";
import { useIsomorphicLayoutEffect } from "./useIsomorphicLayoutEffect.js";
import { getKey } from "./utils.js";
import { useStatic } from "./useStatic.js";
import { useLatestRef } from "./useLatestRef.js";
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
   * The elements renderer function.
   */
  children: (data: T, index: number) => ReactElement;
  /**
   * The data items rendered by this component.
   */
  data: ArrayLike<T>;
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
export const WindowMasonry = /*#__PURE__*/ forwardRef<
  WindowMasonryHandle,
  WindowMasonryProps<unknown>
>(
  (
    {
      children,
      data,
      lanes: lanesProp,
      gap: gapProp,
      itemSize,
      bufferSize,
      cache,
      ssrCount,
      onScroll: onScrollProp,
      onScrollEnd: onScrollEndProp,
      onResize: onResizeProp,
    },
    ref,
  ): ReactElement => {
    // Opted out on purpose. React Compiler has nothing to gain here for now: scrolling is bound by DOM mount/unmount and layout rather than scripting, the items are already memoized by React.memo, and the visible range and positions read from the store below change on every store update.
    // Making those reads memoizable needs an immutable snapshot per update, which costs allocation with useReducer or synchronous updates with useSyncExternalStore.
    "use no memo";

    const containerRef = useRef<HTMLDivElement>(null);

    const onScroll = useLatestRef(onScrollProp);
    const onScrollEnd = useLatestRef(onScrollEndProp);
    const onResize = useLatestRef(onResizeProp);

    // https://github.com/inokawa/virtua/issues/1030
    const count = data.length;

    const [store, layout, driver] = useStatic(() => {
      const _layout = createMasonryLayout(
        count,
        lanesProp,
        gapProp,
        itemSize,
        cache,
      );
      const _store = createVirtualStore(_layout, ssrCount);
      return [_store, _layout, createWindowDriver(_store, _layout, false)];
    });

    store.$update(ACTION_ITEMS_LENGTH_CHANGE, count);
    relayout(store, layout, lanesProp, gapProp);

    const [stateVersion, rerender] = useReducer(
      store.$getStateVersion,
      undefined,
      store.$getStateVersion,
    );

    const isScrolling = store.$isScrolling();
    const totalSize = store.$getTotalSize();

    useIsomorphicLayoutEffect(() => {
      // store must be subscribed first because others may dispatch update on init depending on implementation
      const unsubscribe = store.$subscribe((flag, sync) => {
        if (flag & UPDATE_VIRTUAL_STATE) {
          if (sync) {
            flushSync(rerender);
          } else {
            rerender();
          }
        }
        if (flag & UPDATE_SCROLL_EVENT) {
          // https://github.com/inokawa/virtua/discussions/580
          onScroll.current && onScroll.current();
        }
        if (flag & UPDATE_SCROLL_END_EVENT) {
          onScrollEnd.current && onScrollEnd.current();
        }
        if (flag & UPDATE_SIZE_EVENT) {
          onResize.current && onResize.current();
        }
      });

      driver.$observe(containerRef.current!);

      return () => {
        unsubscribe();
        driver.$dispose();
      };
    }, []);

    useIsomorphicLayoutEffect(() => {
      driver.$effect();
    }, [stateVersion]);

    useImperativeHandle(ref, () => {
      return {
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
      };
    }, []);

    const items: ReactElement[] = [];
    const lanes = layout.$getLanes();
    const gap = layout.$getGap();
    // The lanes share the width left by the gaps between them
    const crossSize = toCrossValue(1 / lanes, gap / lanes - gap);

    for (let [i, j] = store.$getRange(bufferSize); i <= j; i++) {
      const e = children(data[i]!, i);
      const lane = layout.$getItemLane(i);
      items.push(
        <MasonryItem
          key={getKey(e, i)}
          _resizer={driver.$observeItem}
          _index={i}
          _offset={store.$getItemOffset(i)}
          _crossOffset={toCrossValue(lane / lanes, (lane * gap) / lanes)}
          _crossSize={crossSize}
          _hide={layout.$isSizeEqual(i)}
          _children={e}
        />,
      );
    }

    return (
      <div
        ref={containerRef}
        style={{
          contain: "size style", // https://github.com/inokawa/virtua/pull/775 https://github.com/inokawa/virtua/issues/800
          flex: "none", // flex style can break layout
          position: "relative",
          width: "100%",
          height: totalSize,
          pointerEvents: isScrolling ? "none" : undefined,
        }}
      >
        {items}
      </div>
    );
  },
) as <T>(
  props: WindowMasonryProps<T> & { ref?: Ref<WindowMasonryHandle> },
) => ReactElement;
