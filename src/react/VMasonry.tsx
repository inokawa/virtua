import {
  type CSSProperties,
  type ReactElement,
  type ReactNode,
  type Ref,
  forwardRef,
  memo,
  useImperativeHandle,
  useMemo,
  useReducer,
  useRef,
} from "react";
import { flushSync } from "react-dom";
import {
  UPDATE_SCROLL_EVENT,
  createVirtualStore,
  UPDATE_VIRTUAL_STATE,
  UPDATE_SCROLL_END_EVENT,
  getScrollSize,
  createContainerDriver,
  createMasonryLayout,
  ACTION_ITEMS_LENGTH_CHANGE,
  ACTION_RELAYOUT,
  scrollTo,
  scrollBy,
  scrollToIndex,
  type Driver,
  type CacheSnapshot,
  type ScrollToIndexOpts,
} from "../core/index.js";
import { useIsomorphicLayoutEffect } from "./useIsomorphicLayoutEffect.js";
import { getKey, refKey } from "./utils.js";
import { useStatic } from "./useStatic.js";
import { useLatestRef } from "./useLatestRef.js";
import { type ViewportComponentAttributes } from "./types.js";

const toCrossValue = (fraction: number, px: number): string =>
  px ? `calc(${fraction * 100}% + ${px}px)` : fraction * 100 + "%";

interface MasonryItemProps {
  _children: ReactNode;
  _resizer: Driver["$observeItem"];
  _index: number;
  _offset: number;
  _crossOffset: string;
  _crossSize: string;
  _hide: boolean;
}

const MasonryItem = /*#__PURE__*/ memo(
  ({
    _children: children,
    _resizer: resizer,
    _index: index,
    _offset: offset,
    _crossOffset: crossOffset,
    _crossSize: crossSize,
    _hide: hide,
  }: MasonryItemProps): ReactElement => {
    const ref = useRef<HTMLDivElement>(null);

    // The index may be changed if elements are inserted to or removed from the start of data
    useIsomorphicLayoutEffect(() => resizer(ref[refKey]!, index), [index]);

    const style = useMemo(
      (): CSSProperties => ({
        contain: "layout style",
        position: "absolute",
        top: offset,
        insetInlineStart: crossOffset,
        width: crossSize,
        visibility: hide ? "hidden" : undefined,
      }),
      [offset, crossOffset, crossSize, hide],
    );

    return (
      <div ref={ref} style={style}>
        {children}
      </div>
    );
  },
);

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
   * Extra item space in pixels to render before/after the viewport. The minimum value is 0. Lower value will give better performance but you can increase to avoid showing blank items in fast scrolling.
   * @defaultValue 200
   */
  bufferSize?: number;
  /**
   * You can restore cache by passing a {@link CacheSnapshot} on mount. This is useful when you want to restore scroll position after navigation. The snapshot can be obtained from {@link VMasonryHandle.cache}.
   *
   * **The length of items should be the same as when you take the snapshot, otherwise restoration may not work as expected.**
   */
  cache?: CacheSnapshot;
  /**
   * Callback invoked whenever scroll offset changes.
   * @param offset Current scrollTop.
   */
  onScroll?: (offset: number) => void;
  /**
   * Callback invoked when scrolling stops.
   */
  onScrollEnd?: () => void;
}

/**
 * Virtualized masonry component. See {@link VMasonryProps} and {@link VMasonryHandle}.
 */
export const VMasonry = /*#__PURE__*/ forwardRef<
  VMasonryHandle,
  VMasonryProps<unknown>
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
      onScroll: onScrollProp,
      onScrollEnd: onScrollEndProp,
      style,
      ...attrs
    },
    ref,
  ): ReactElement => {
    // Opted out on purpose. React Compiler has nothing to gain here for now: scrolling is bound by DOM mount/unmount and layout rather than scripting, the items are already memoized by React.memo, and the visible range and positions read from the store below change on every store update.
    // Making those reads memoizable needs an immutable snapshot per update, which costs allocation with useReducer or synchronous updates with useSyncExternalStore.
    "use no memo";

    const containerRef = useRef<HTMLDivElement>(null);

    const onScroll = useLatestRef(onScrollProp);
    const onScrollEnd = useLatestRef(onScrollEndProp);

    const [store, layout, driver] = useStatic(() => {
      const _layout = createMasonryLayout(
        data.length,
        lanesProp,
        gapProp,
        itemSize,
        cache,
      );
      const _store = createVirtualStore(_layout);
      return [_store, _layout, createContainerDriver(_store, false)];
    });

    if (data.length !== store.$getItemsLength()) {
      store.$update(ACTION_ITEMS_LENGTH_CHANGE, [data.length]);
    }
    layout.$setOptions(lanesProp, gapProp);
    store.$update(ACTION_RELAYOUT, undefined);

    const [stateVersion, rerender] = useReducer(
      store.$getStateVersion,
      undefined,
      store.$getStateVersion,
    );

    const isScrolling = store.$isScrolling();
    const totalSize = store.$getTotalSize();

    useIsomorphicLayoutEffect(() => {
      // store must be subscribed first because others may dispatch update on init depending on implementation
      store.$subscribe(UPDATE_VIRTUAL_STATE, (sync) => {
        if (sync) {
          flushSync(rerender);
        } else {
          rerender();
        }
      });
      store.$subscribe(UPDATE_SCROLL_EVENT, () => {
        onScroll[refKey] && onScroll[refKey](store.$getScrollOffset());
      });
      store.$subscribe(UPDATE_SCROLL_END_EVENT, () => {
        onScrollEnd[refKey] && onScrollEnd[refKey]();
      });

      driver.$observe(containerRef[refKey]!);

      return () => {
        store.$dispose();
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
        get scrollSize() {
          return getScrollSize(store);
        },
        get viewportSize() {
          return store.$getViewportSize();
        },
        getItemOffset: store.$getItemOffset,
        getItemSize: store.$getItemSize,
        scrollToIndex: (index, opts) =>
          scrollToIndex(driver, store, index, opts),
        scrollTo: (offset) => scrollTo(driver, offset),
        scrollBy: (offset) => scrollBy(driver, store, offset),
      };
    }, []);

    const items: ReactElement[] = [];
    const lanes = layout.$getLanes();
    const gap = layout.$getGap();
    // The lanes share the width left by the gaps between them
    const crossSize = toCrossValue(1 / lanes, gap / lanes - gap);
    const [startIndex, endIndex] = store.$getRange(bufferSize);
    for (let i = startIndex; i <= endIndex; i++) {
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
          _hide={store.$isUnmeasuredItem(i)}
          _children={e}
        />,
      );
    }

    return (
      <div
        {...attrs}
        style={{
          display: "block",
          overflowY: "auto",
          contain: "strict",
          width: "100%",
          height: "100%",
          ...style,
        }}
      >
        <div
          ref={containerRef}
          style={{
            contain: "size style", // https://github.com/inokawa/virtua/pull/775 https://github.com/inokawa/virtua/issues/800
            overflowAnchor: "none", // opt out browser's scroll anchoring because it will conflict with scroll anchoring of virtualizer
            flex: "none", // flex style can break layout
            position: "relative",
            width: "100%",
            height: totalSize,
            pointerEvents: isScrolling ? "none" : undefined,
          }}
        >
          {items}
        </div>
      </div>
    );
  },
) as <T>(
  props: VMasonryProps<T> & { ref?: Ref<VMasonryHandle> },
) => ReactElement;
