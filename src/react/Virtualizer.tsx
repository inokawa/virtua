import {
  ReactElement,
  forwardRef,
  useImperativeHandle,
  ReactNode,
  useEffect,
  useRef,
  RefObject,
} from "react";
import {
  UPDATE_SCROLL_EVENT,
  ACTION_ITEMS_LENGTH_CHANGE,
  getOverscanedRange,
  createVirtualStore,
  UPDATE_VIRTUAL_STATE,
  SCROLL_IDLE,
  UPDATE_SCROLL_END_EVENT,
  getScrollSize,
  ACTION_START_OFFSET_CHANGE,
} from "../core/store";
import { useIsomorphicLayoutEffect } from "./useIsomorphicLayoutEffect";
import { createScroller } from "../core/scroller";
import { getKey, refKey } from "./utils";
import { useStatic } from "./useStatic";
import { useLatestRef } from "./useLatestRef";
import { createResizer } from "../core/resizer";
import { ListItem } from "./ListItem";
import { CacheSnapshot, ScrollToIndexOpts } from "../core/types";
import { flushSync } from "react-dom";
import { useRerender } from "./useRerender";
import { useChildren } from "./useChildren";
import { CustomContainerComponent, CustomItemComponent } from "./types";
import { microtask, NULL, sort } from "../core/utils";

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
   * Get item offset from start.
   * @param index index of item
   */
  getItemOffset(index: number): number;
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
export interface VirtualizerProps {
  /**
   * Elements rendered by this component.
   *
   * You can also pass a function and set {@link VirtualizerProps.count} to create elements lazily.
   */
  children: ReactNode | ((index: number) => ReactElement);
  /**
   * If you set a function to {@link VirtualizerProps.children}, you have to set total number of items to this prop.
   */
  count?: number;
  /**
   * Number of items to render above/below the visible bounds of the list. Lower value will give better performance but you can increase to avoid showing blank items in fast scrolling.
   * @defaultValue 4
   */
  overscan?: number;
  /**
   * List of indexes that should be always mounted, even when off screen.
   */
  keepMounted?: number[];
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
   * A prop for SSR. If set, the specified amount of items will be mounted in the initial rendering regardless of the container size until hydrated.
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
  scrollRef?: RefObject<HTMLElement>;
  /**
   * Callback invoked whenever scroll offset changes.
   * @param offset Current scrollTop, or scrollLeft if horizontal: true.
   */
  onScroll?: (offset: number) => void;
  /**
   * Callback invoked when scrolling stops.
   */
  onScrollEnd?: () => void;
  /**
   * Callback invoked when visible items range changes.
   * @param startIndex The start index of viewable items.
   * @param endIndex The end index of viewable items.
   */
  onRangeChange?: (startIndex: number, endIndex: number) => void;
}

/**
 * Customizable list virtualizer for advanced usage. See {@link VirtualizerProps} and {@link VirtualizerHandle}.
 */
export const Virtualizer = forwardRef<VirtualizerHandle, VirtualizerProps>(
  (
    {
      children,
      count: renderCountProp,
      overscan = 4,
      keepMounted,
      itemSize,
      shift,
      horizontal: horizontalProp,
      cache,
      startMargin = 0,
      ssrCount,
      as: Element = "div",
      item: ItemElement = "div",
      scrollRef,
      onScroll: onScrollProp,
      onScrollEnd: onScrollEndProp,
      onRangeChange: onRangeChangeProp,
    },
    ref
  ): ReactElement => {
    Element = Element as "div";

    const [getElement, count] = useChildren(children, renderCountProp);

    const containerRef = useRef<HTMLDivElement>(NULL);

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
    if (count !== store._getItemsLength()) {
      store._update(ACTION_ITEMS_LENGTH_CHANGE, [count, shift]);
    }
    if (startMargin !== store._getStartSpacerSize()) {
      store._update(ACTION_START_OFFSET_CHANGE, startMargin);
    }

    const rerender = useRerender(store);

    const [startIndex, endIndex] = store._getRange();
    const scrollDirection = store._getScrollDirection();
    const jumpCount = store._getJumpCount();
    const totalSize = store._getTotalSize();

    const items: ReactElement[] = [];

    const [overscanedRangeStart, overscanedRangeEnd] = getOverscanedRange(
      startIndex,
      endIndex,
      overscan,
      scrollDirection,
      count
    );

    const getListItem = (index: number) => {
      const e = getElement(index);

      return (
        <ListItem
          key={getKey(e, index)}
          _resizer={resizer._observeItem}
          _index={index}
          _offset={store._getItemOffset(index)}
          _hide={store._isUnmeasuredItem(index)}
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
      const unsubscribeStore = store._subscribe(
        UPDATE_VIRTUAL_STATE,
        (sync) => {
          if (sync) {
            flushSync(rerender);
          } else {
            rerender();
          }
        }
      );
      const unsubscribeOnScroll = store._subscribe(UPDATE_SCROLL_EVENT, () => {
        onScroll[refKey] && onScroll[refKey](store._getScrollOffset());
      });
      const unsubscribeOnScrollEnd = store._subscribe(
        UPDATE_SCROLL_END_EVENT,
        () => {
          onScrollEnd[refKey] && onScrollEnd[refKey]();
        }
      );
      const assignScrollableElement = (e: HTMLElement) => {
        resizer._observeRoot(e);
        scroller._observe(e);
      };
      if (scrollRef) {
        // parent's ref doesn't exist when useLayoutEffect is called
        microtask(() => assignScrollableElement(scrollRef[refKey]!));
      } else {
        assignScrollableElement(containerRef[refKey]!.parentElement!);
      }

      return () => {
        unsubscribeStore();
        unsubscribeOnScroll();
        unsubscribeOnScrollEnd();
        resizer._dispose();
        scroller._dispose();
      };
    }, []);

    useIsomorphicLayoutEffect(() => {
      scroller._fixScrollJump();
    }, [jumpCount]);

    useEffect(() => {
      if (!onRangeChangeProp) return;

      onRangeChangeProp(startIndex, endIndex);
    }, [startIndex, endIndex]);

    useImperativeHandle(
      ref,
      () => {
        return {
          get cache() {
            return store._getCacheSnapshot();
          },
          get scrollOffset() {
            return store._getScrollOffset();
          },
          get scrollSize() {
            return getScrollSize(store);
          },
          get viewportSize() {
            return store._getViewportSize();
          },
          getItemOffset: store._getItemOffset,
          scrollToIndex: scroller._scrollToIndex,
          scrollTo: scroller._scrollTo,
          scrollBy: scroller._scrollBy,
        };
      },
      []
    );

    for (let i = overscanedRangeStart, j = overscanedRangeEnd; i <= j; i++) {
      items.push(getListItem(i));
    }

    if (keepMounted) {
      const startItems: ReactElement[] = [];
      const endItems: ReactElement[] = [];
      sort(keepMounted).forEach((index) => {
        if (index < overscanedRangeStart) {
          startItems.push(getListItem(index));
        }
        if (index > overscanedRangeEnd) {
          endItems.push(getListItem(index));
        }
      });

      items.unshift(...startItems);
      items.push(...endItems);
    }

    return (
      <Element
        ref={containerRef}
        style={{
          // contain: "content",
          overflowAnchor: "none", // opt out browser's scroll anchoring because it will conflict to scroll anchoring of virtualizer
          flex: "none", // flex style can break layout
          position: "relative",
          visibility: "hidden", // TODO replace with other optimization methods
          width: isHorizontal ? totalSize : "100%",
          height: isHorizontal ? "100%" : totalSize,
          pointerEvents: scrollDirection !== SCROLL_IDLE ? "none" : undefined,
        }}
      >
        {items}
      </Element>
    );
  }
);
