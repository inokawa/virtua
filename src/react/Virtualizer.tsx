import {
  type JSX,
  type ReactElement,
  forwardRef,
  useImperativeHandle,
  type ReactNode,
  useRef,
  type RefObject,
  useReducer,
  type Ref,
} from "react";
import {
  UPDATE_SCROLL_EVENT,
  ACTION_ITEMS_LENGTH_CHANGE,
  createVirtualStore,
  UPDATE_VIRTUAL_STATE,
  UPDATE_SCROLL_END_EVENT,
  getScrollSize,
  ACTION_START_OFFSET_CHANGE,
  createScroller,
  createResizer,
  type CacheSnapshot,
  type ScrollToIndexOpts,
  microtask,
  sort,
} from "../core/index.js";
import { useIsomorphicLayoutEffect } from "./useIsomorphicLayoutEffect.js";
import { getKey, refKey } from "./utils.js";
import { useStatic } from "./useStatic.js";
import { useLatestRef } from "./useLatestRef.js";
import { ListItem } from "./ListItem.js";
import { flushSync } from "react-dom";
import { useChildren } from "./useChildren.js";
import {
  type CustomContainerComponent,
  type CustomItemComponent,
} from "./types.js";

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
export interface VirtualizerProps<T = unknown> {
  /**
   * Elements rendered by this component.
   *
   * You can also pass a function and set {@link VirtualizerProps.data} to create elements lazily.
   */
  children: ReactNode | ((data: T, index: number) => ReactElement);
  /**
   * The data items rendered by this component. If you set a function to {@link VirtualizerProps.children}, you have to set this prop.
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
   * List of indexes that should be always mounted, even when off screen.
   */
  keepMounted?: readonly number[];
  /**
   * You can restore cache by passing a {@link CacheSnapshot} on mount. This is useful when you want to restore scroll position after navigation. The snapshot can be obtained from {@link VirtualizerHandle.cache}.
   *
   * **The length of items should be the same as when you take the snapshot, otherwise restoration may not work as expected.**
   */
  cache?: CacheSnapshot;
  /**
   * The offset to the scrollable parent before virtualizer in pixels. If you put an element before virtualizer, you have to set its height to this prop.
   */
  startMargin?: number;
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
   * Reference to the scrollable element. The default will get the direct parent element of virtualizer.
   */
  scrollRef?: RefObject<HTMLElement | null>;
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
export const Virtualizer = forwardRef<VirtualizerHandle, VirtualizerProps>(
  (
    {
      children,
      data,
      bufferSize,
      itemSize,
      shift,
      horizontal: horizontalProp,
      keepMounted,
      cache,
      startMargin = 0,
      ssrCount,
      as: Element = "div",
      item: ItemElement = "div",
      scrollRef,
      onScroll: onScrollProp,
      onScrollEnd: onScrollEndProp,
    },
    ref
  ): ReactElement => {
    Element = Element as "div";

    const [renderElement, count] = useChildren(children, data);

    const containerRef = useRef<HTMLDivElement>(null);

    const isSSR = useRef(!!ssrCount);

    const onScroll = useLatestRef(onScrollProp);
    const onScrollEnd = useLatestRef(onScrollEndProp);

    const [store, resizer, scroller, isHorizontal] = useStatic(() => {
      const _isHorizontal = !!horizontalProp;
      const _store = createVirtualStore(
        count,
        itemSize,
        ssrCount,
        cache,
        !itemSize
      );
      return [
        _store,
        createResizer(_store, _isHorizontal),
        createScroller(_store, _isHorizontal),
        _isHorizontal,
      ];
    });

    // The elements length and cached items length are different just after element is added/removed.
    if (count !== store.$getItemsLength()) {
      store.$update(ACTION_ITEMS_LENGTH_CHANGE, [count, shift]);
    }
    if (startMargin !== store.$getStartSpacerSize()) {
      store.$update(ACTION_START_OFFSET_CHANGE, startMargin);
    }

    const [stateVersion, rerender] = useReducer(
      store.$getStateVersion,
      undefined,
      store.$getStateVersion
    );

    const isScrolling = store.$isScrolling();
    const totalSize = store.$getTotalSize();

    const items: ReactElement[] = [];

    const renderItem = (index: number) => {
      const e = renderElement(index);

      return (
        <ListItem
          key={getKey(e, index)}
          _resizer={resizer.$observeItem}
          _index={index}
          _offset={store.$getItemOffset(index)}
          _hide={store.$isUnmeasuredItem(index)}
          _as={ItemElement as "div"}
          _children={e}
          _isHorizontal={isHorizontal}
          _isSSR={isSSR[refKey]}
        />
      );
    };

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
        onScroll[refKey] && onScroll[refKey](store.$getScrollOffset());
      });
      store.$subscribe(UPDATE_SCROLL_END_EVENT, () => {
        onScrollEnd[refKey] && onScrollEnd[refKey]();
      });
      const assignScrollableElement = (e: HTMLElement) => {
        resizer.$observeRoot(e);
        scroller.$observe(e);
      };
      if (scrollRef) {
        // parent's ref doesn't exist when useLayoutEffect is called
        microtask(() => {
          // https://github.com/inokawa/virtua/pull/733
          if (scrollRef[refKey]) {
            assignScrollableElement(scrollRef[refKey]);
          }
        });
      } else {
        assignScrollableElement(containerRef[refKey]!.parentElement!);
      }

      return () => {
        store.$dispose();
        resizer.$dispose();
        scroller.$dispose();
      };
    }, []);

    useIsomorphicLayoutEffect(() => {
      scroller.$fixScrollJump();
    }, [stateVersion]);

    useImperativeHandle(
      ref,
      () => {
        return {
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
          findItemIndex: store.$findItemIndex,
          getItemOffset: store.$getItemOffset,
          getItemSize: store.$getItemSize,
          scrollToIndex: scroller.$scrollToIndex,
          scrollTo: scroller.$scrollTo,
          scrollBy: scroller.$scrollBy,
        };
      },
      []
    );

    if (keepMounted) {
      const mounted = new Set(keepMounted);
      for (let [i, j] = store.$getRange(bufferSize); i <= j; i++) {
        mounted.add(i);
      }
      sort([...mounted]).forEach((index) => {
        items.push(renderItem(index));
      });
    } else {
      for (let [i, j] = store.$getRange(bufferSize); i <= j; i++) {
        items.push(renderItem(i));
      }
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
  }
) as <T>(
  props: VirtualizerProps<T> & { ref?: Ref<VirtualizerHandle> }
) => ReactElement;
