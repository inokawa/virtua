import {
  useRef,
  useMemo,
  ReactElement,
  forwardRef,
  useImperativeHandle,
  ReactNode,
  useEffect,
} from "react";
import {
  UPDATE_SCROLL_EVENT,
  ACTION_ITEMS_LENGTH_CHANGE,
  clampEndIndex,
  clampStartIndex,
  createVirtualStore,
  UPDATE_SIZE_STATE,
  UPDATE_SCROLL_STATE,
  SCROLL_IDLE,
  UPDATE_SCROLL_STOP_EVENT,
} from "../core/store";
import { useIsomorphicLayoutEffect } from "./useIsomorphicLayoutEffect";
import { exists, max, values } from "../core/utils";
import { createScroller } from "../core/scroller";
import { MayHaveKey, emptyComponents, refKey } from "./utils";
import { useStatic } from "./useStatic";
import { useLatestRef } from "./useLatestRef";
import { createResizer } from "../core/resizer";
import {
  CustomViewportComponent,
  CustomViewportComponentProps,
  Viewport as DefaultViewport,
  ViewportComponentAttributes,
} from "./Viewport";
import { CustomItemComponent, ListItem } from "./ListItem";
import { CacheSnapshot, ScrollToIndexOpts } from "../core/types";
import { Cache } from "../core/cache";
import { flushSync } from "react-dom";
import { useRerender } from "./useRerender";
import { useChildren } from "./useChildren";

type CustomItemComponentOrElement =
  | keyof JSX.IntrinsicElements
  | CustomItemComponent;

/**
 * Methods of {@link VList}.
 */
export interface VListHandle {
  /**
   * Get current {@link CacheSnapshot}.
   */
  readonly cache: CacheSnapshot;
  /**
   * Get current scrollTop or scrollLeft.
   */
  readonly scrollOffset: number;
  /**
   * Get current scrollHeight or scrollWidth.
   */
  readonly scrollSize: number;
  /**
   * Get current offsetHeight or offsetWidth.
   */
  readonly viewportSize: number;
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
 * Props of {@link VList}.
 */
export interface VListProps extends ViewportComponentAttributes {
  /**
   * Elements rendered by this component.
   *
   * You can also pass a function and set {@link VListProps.count} to create elements lazily.
   */
  children: ReactNode | ((index: number) => ReactElement);
  /**
   * If you set a function to {@link VListProps.children}, you have to set total number of items to this prop.
   */
  count?: number;
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
  initialItemSize?: number;
  /**
   * If set, the specified amount of items will be mounted in the initial rendering regardless of the container size. This prop is mostly for SSR.
   */
  initialItemCount?: number;
  /**
   * While true is set, scroll position will be maintained from the end not usual start when items are added to/removed from start. It's recommended to set false if you add to/remove from mid/end of the list because it can cause unexpected behavior. This prop is useful for reverse infinite scrolling.
   */
  shift?: boolean;
  /**
   * If true, rendered as a horizontally scrollable list. Otherwise rendered as a vertically scrollable list.
   */
  horizontal?: boolean;
  /**
   * If true, items are aligned to the end of the list when total size of items are smaller than viewport size. It's useful for chat like app.
   */
  reverse?: boolean;
  /**
   * You can restore cache by passing a {@link CacheSnapshot} on mount. This is useful when you want to restore scroll position after navigation. The snapshot can be obtained from {@link VListHandle.cache}.
   */
  cache?: CacheSnapshot;
  /**
   * Customized components for advanced usage.
   */
  components?: {
    /**
     * Component for scrollable element. This component will get {@link CustomViewportComponentProps} as props.
     * @defaultValue {@link DefaultViewport}
     */
    Root?: CustomViewportComponent;
    /**
     * Component or element type for item element. This component will get {@link CustomItemComponentProps} as props.
     * @defaultValue "div"
     */
    Item?: CustomItemComponentOrElement;
  };
  /**
   * Callback invoked whenever scroll offset changes.
   * @param offset Current scrollTop or scrollLeft.
   */
  onScroll?: (offset: number) => void;
  /**
   * Callback invoked when scrolling stops.
   */
  onScrollStop?: () => void;
  /**
   * Callback invoked when visible items range changes.
   */
  onRangeChange?: (
    /**
     * The start index of viewable items.
     */
    startIndex: number,
    /**
     * The end index of viewable items.
     */
    endIndex: number
  ) => void;
}

/**
 * Virtualized list component. See {@link VListProps} and {@link VListHandle}.
 */
export const VList = forwardRef<VListHandle, VListProps>(
  (
    {
      children,
      count: renderCountProp,
      overscan = 4,
      initialItemSize,
      initialItemCount,
      shift,
      horizontal: horizontalProp,
      reverse,
      cache,
      components: {
        Root: Viewport = DefaultViewport,
        Item: ItemElement = "div",
      } = emptyComponents as {
        Root?: undefined;
        Item?: undefined;
      },
      onScroll: onScrollProp,
      onScrollStop: onScrollStopProp,
      onRangeChange: onRangeChangeProp,
      ...viewportAttrs
    },
    ref
  ): ReactElement => {
    const [getElement, count] = useChildren(children, renderCountProp);

    const onScroll = useLatestRef(onScrollProp);
    const onScrollStop = useLatestRef(onScrollStopProp);

    const [store, resizer, scroller, isHorizontal] = useStatic(() => {
      const _isHorizontal = !!horizontalProp;
      const _store = createVirtualStore(
        count,
        initialItemSize,
        initialItemCount,
        cache as unknown as Cache | undefined,
        !initialItemSize
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

    const rerender = useRerender(store);

    const [startIndex, endIndex] = store._getRange();
    const scrollDirection = store._getScrollDirection();
    const jumpCount = store._getJumpCount();
    const scrollSize = store._getScrollSize();

    const rootRef = useRef<HTMLDivElement>(null);

    useIsomorphicLayoutEffect(() => {
      const root = rootRef[refKey]!;
      // store must be subscribed first because others may dispatch update on init depending on implementation
      const unsubscribeStore = store._subscribe(
        UPDATE_SCROLL_STATE + UPDATE_SIZE_STATE,
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
      const unsubscribeOnScrollStop = store._subscribe(
        UPDATE_SCROLL_STOP_EVENT,
        () => {
          onScrollStop[refKey] && onScrollStop[refKey]();
        }
      );
      const cleanupResizer = resizer._observeRoot(root);
      const cleanupScroller = scroller._observe(root);
      return () => {
        unsubscribeStore();
        unsubscribeOnScroll();
        unsubscribeOnScrollStop();
        cleanupResizer();
        cleanupScroller();
      };
    }, []);

    useIsomorphicLayoutEffect(() => {
      const jump = store._flushJump();
      if (!jump) return;

      scroller._fixScrollJump(jump);
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
            return store._getCache();
          },
          get scrollOffset() {
            return store._getScrollOffset();
          },
          get scrollSize() {
            return store._getScrollSize();
          },
          get viewportSize() {
            return store._getViewportSize();
          },
          scrollToIndex: scroller._scrollToIndex,
          scrollTo: scroller._scrollTo,
          scrollBy: scroller._scrollBy,
        };
      },
      []
    );

    const overscanedStartIndex = clampStartIndex(
      startIndex,
      overscan,
      scrollDirection
    );
    const overscanedEndIndex = clampEndIndex(
      endIndex,
      overscan,
      scrollDirection,
      count
    );

    const items: ReactElement[] = [];
    for (let i = overscanedStartIndex; i <= overscanedEndIndex; i++) {
      const e = getElement(i);
      const key = (e as MayHaveKey).key;
      let offset = store._getItemOffset(i);
      if (reverse) {
        offset += max(0, store._getViewportSize() - store._getTotalSize());
      }
      items.push(
        <ListItem
          key={exists(key) ? key : "_" + i}
          _resizer={resizer}
          _index={i}
          _offset={offset}
          _hide={store._isUnmeasuredItem(i)}
          _element={ItemElement as "div"}
          _children={e}
          _isHorizontal={isHorizontal}
        />
      );
    }

    return (
      <Viewport
        ref={rootRef}
        width={isHorizontal ? scrollSize : undefined}
        height={isHorizontal ? undefined : scrollSize}
        scrolling={scrollDirection !== SCROLL_IDLE}
        attrs={useMemo(
          () => ({
            ...viewportAttrs,
            style: {
              display: isHorizontal ? "inline-block" : "block",
              [isHorizontal ? "overflowX" : "overflowY"]: "auto",
              overflowAnchor: "none",
              contain: "strict",
              width: "100%",
              height: "100%",
              ...viewportAttrs.style,
            },
          }),
          values(viewportAttrs)
        )}
      >
        {items}
      </Viewport>
    );
  }
);
