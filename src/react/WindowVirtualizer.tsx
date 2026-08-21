import {
  type JSX,
  type ReactElement,
  type ReactNode,
  type Ref,
  forwardRef,
  useImperativeHandle,
  useReducer,
  useRef,
} from "react";
import {
  ACTION_ITEMS_LENGTH_CHANGE,
  UPDATE_VIRTUAL_STATE,
  createVirtualStore,
  createListLayout,
  UPDATE_SCROLL_END_EVENT,
  UPDATE_SCROLL_EVENT,
  createWindowDriver,
  scrollToIndex,
  type CacheSnapshot,
  type ScrollToIndexOpts,
} from "../core/index.js";
import { useIsomorphicLayoutEffect } from "./useIsomorphicLayoutEffect.js";
import { getKey, refKey } from "./utils.js";
import { useStatic } from "./useStatic.js";
import { useLatestRef } from "./useLatestRef.js";
import {
  type CustomContainerComponent,
  type CustomItemComponent,
} from "./types.js";
import { ListItem } from "./ListItem.js";
import { flushSync } from "react-dom";
import { useChildren } from "./useChildren.js";

/**
 * Methods of {@link WindowVirtualizer}.
 */
export interface WindowVirtualizerHandle {
  /**
   * Get current {@link CacheSnapshot}.
   */
  readonly cache: CacheSnapshot;
  /**
   * Get current scrollTop, or scrollLeft if horizontal: true.
   */
  readonly scrollOffset: number;
  /**
   * Get current offsetHeight, or offsetWidth if horizontal: true.
   */
  readonly viewportSize: number;
  /**
   * Find nearest item index from offset.
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
export interface WindowVirtualizerProps<T = unknown> {
  /**
   * Elements rendered by this component.
   *
   * You can also pass a function and set {@link WindowVirtualizerProps.data} to create elements lazily.
   */
  children: ReactNode | ((data: T, index: number) => ReactElement);
  /**
   * The data items rendered by this component. If you set a function to {@link WindowVirtualizerProps.children}, you have to set this prop.
   */
  data?: ArrayLike<T>;
  /**
   * Extra item space in pixels to render before/after the viewport. The minimum value is 0. Lower value will give better performance but you can increase to avoid showing blank items in fast scrolling.
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
   * A prop for SSR. If set, the specified amount of items will be mounted in the initial rendering regardless of the container size until hydrated. The minimum value is 0.
   */
  ssrCount?: number;
  /**
   * Component or element type for container element.
   * @defaultValue "div"
   */
  as?: keyof JSX.IntrinsicElements | CustomContainerComponent;
  /**
   * Component or element type for item element. This component will get {@link CustomItemComponentProps} as props.
   * @defaultValue "div"
   */
  item?: keyof JSX.IntrinsicElements | CustomItemComponent;
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
export const WindowVirtualizer = /*#__PURE__*/ forwardRef<
  WindowVirtualizerHandle,
  WindowVirtualizerProps
>(
  (
    {
      children,
      data,
      bufferSize,
      itemSize,
      shift,
      horizontal: horizontalProp,
      cache,
      ssrCount,
      as: Element = "div",
      item: ItemElement = "div",
      onScroll: onScrollProp,
      onScrollEnd: onScrollEndProp,
    },
    ref,
  ): ReactElement => {
    Element = Element as "div";

    const [renderElement, count] = useChildren(children, data);

    const containerRef = useRef<HTMLDivElement>(null);

    const onScroll = useLatestRef(onScrollProp);
    const onScrollEnd = useLatestRef(onScrollEndProp);

    const isSSR = useRef(!!ssrCount);

    const [store, layout, driver, isHorizontal] = useStatic(() => {
      const _isHorizontal = !!horizontalProp;
      const _layout = createListLayout(count, itemSize, cache);
      const _store = createVirtualStore(_layout, ssrCount);

      return [
        _store,
        _layout,
        createWindowDriver(_store, _isHorizontal),
        _isHorizontal,
      ];
    });
    const [stateVersion, rerender] = useReducer(
      store.$getStateVersion,
      undefined,
      store.$getStateVersion,
    );

    const isScrolling = store.$isScrolling();
    const totalSize = store.$getTotalSize();

    const isNegative = driver.$isNegative();

    const items: ReactElement[] = [];

    useIsomorphicLayoutEffect(() => {
      isSSR[refKey] = false;

      // store must be subscribed first because others may dispatch update on init depending on implementation
      store.$subscribe(UPDATE_VIRTUAL_STATE, (sync) => {
        if (sync) {
          flushSync(rerender);
        } else {
          rerender();
        }
      });
      store.$subscribe(UPDATE_SCROLL_EVENT, () => {
        // https://github.com/inokawa/virtua/discussions/580
        onScroll[refKey] && onScroll[refKey]();
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

    // Props must update the store after the render is committed. Updating it
    // during render leaves the cache mutated when a concurrent render aborts.
    useIsomorphicLayoutEffect(() => {
      if (count !== store.$getItemsLength()) {
        store.$update(ACTION_ITEMS_LENGTH_CHANGE, [count, shift]);
      }
    }, [count, shift, store]);

    useIsomorphicLayoutEffect(() => {
      driver.$fixScrollJump();
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
        findItemIndex: store.$findItemIndex,
        getItemOffset: store.$getItemOffset,
        getItemSize: store.$getItemSize,
        scrollToIndex: (index, opts) =>
          scrollToIndex(driver, store, index, opts),
      };
    }, []);

    const [rangeStart, rangeEnd] = store.$getRange(bufferSize);
    const lastIndex = Math.min(rangeEnd, count - 1);
    for (let i = rangeStart; i <= lastIndex; i++) {
      const e = renderElement(i);
      items.push(
        <ListItem
          key={getKey(e, i)}
          _resizer={driver.$observeItem}
          _index={i}
          _offset={store.$getItemOffset(i, isNegative)}
          _hide={store.$isUnmeasuredItem(i)}
          _as={ItemElement as "div"}
          _children={e}
          _isHorizontal={isHorizontal}
          _isSSR={isSSR[refKey]}
        />,
      );
    }

    return (
      <Element
        ref={containerRef}
        style={{
          contain: "size style", // https://github.com/inokawa/virtua/pull/775 https://github.com/inokawa/virtua/issues/800
          overflowAnchor: "none", // opt out browser's scroll anchoring because it will conflict to scroll anchoring of virtualizer
          flex: "none", // flex style can break layout
          position: "relative",
          width: isHorizontal ? totalSize : "100%",
          height: isHorizontal ? "100%" : totalSize,
          pointerEvents: isScrolling ? "none" : undefined,
        }}
      >
        {items}
      </Element>
    );
  },
) as <T>(
  props: WindowVirtualizerProps<T> & { ref?: Ref<WindowVirtualizerHandle> },
) => ReactElement;
