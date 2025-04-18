import {
  JSX,
  ReactElement,
  ReactNode,
  forwardRef,
  useImperativeHandle,
  useReducer,
  useRef,
} from "react";
import {
  ACTION_ITEMS_LENGTH_CHANGE,
  UPDATE_VIRTUAL_STATE,
  createVirtualStore,
  UPDATE_SCROLL_END_EVENT,
  UPDATE_SCROLL_EVENT,
  createWindowScroller,
  createWindowResizer,
  CacheSnapshot,
  ScrollToIndexOpts,
} from "../core";
import { useIsomorphicLayoutEffect } from "./useIsomorphicLayoutEffect";
import { getKey, refKey } from "./utils";
import { useStatic } from "./useStatic";
import { useLatestRef } from "./useLatestRef";
import { CustomContainerComponent, CustomItemComponent } from "./types";
import { ListItem } from "./ListItem";
import { flushSync } from "react-dom";
import { useChildren } from "./useChildren";

/**
 * Methods of {@link WindowVirtualizer}.
 */
export interface WindowVirtualizerHandle {
  /**
   * Get current {@link CacheSnapshot}.
   */
  readonly cache: CacheSnapshot;
  /**
   * Find the start index of visible range of items.
   */
  findStartIndex: () => number;
  /**
   * Find the end index of visible range of items.
   */
  findEndIndex: () => number;
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
export interface WindowVirtualizerProps {
  /**
   * Elements rendered by this component.
   *
   * You can also pass a function and set {@link WindowVirtualizerProps.count} to create elements lazily.
   */
  children: ReactNode | ((index: number) => ReactElement);
  /**
   * If you set a function to {@link WindowVirtualizerProps.children}, you have to set total number of items to this prop.
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
export const WindowVirtualizer = forwardRef<
  WindowVirtualizerHandle,
  WindowVirtualizerProps
>(
  (
    {
      children,
      count: renderCountProp,
      overscan,
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
    ref
  ): ReactElement => {
    Element = Element as "div";

    const [getElement, count] = useChildren(children, renderCountProp);

    const containerRef = useRef<HTMLDivElement>(null);

    const onScroll = useLatestRef(onScrollProp);
    const onScrollEnd = useLatestRef(onScrollEndProp);

    const isSSR = useRef(!!ssrCount);

    const [store, resizer, scroller, isHorizontal] = useStatic(() => {
      const _isHorizontal = !!horizontalProp;
      const _store = createVirtualStore(
        count,
        itemSize,
        overscan,
        ssrCount,
        cache,
        !itemSize
      );

      return [
        _store,
        createWindowResizer(_store, _isHorizontal),
        createWindowScroller(_store, _isHorizontal),
        _isHorizontal,
      ];
    });
    // The elements length and cached items length are different just after element is added/removed.
    if (count !== store.$getItemsLength()) {
      store.$update(ACTION_ITEMS_LENGTH_CHANGE, [count, shift]);
    }

    const [stateVersion, rerender] = useReducer(
      store.$getStateVersion,
      undefined,
      store.$getStateVersion
    );

    const [startIndex, endIndex] = store.$getRange();
    const isScrolling = store.$isScrolling();
    const totalSize = store.$getTotalSize();

    const items: ReactElement[] = [];

    useIsomorphicLayoutEffect(() => {
      isSSR[refKey] = false;

      // store must be subscribed first because others may dispatch update on init depending on implementation
      const unsubscribeStore = store.$subscribe(
        UPDATE_VIRTUAL_STATE,
        (sync) => {
          if (sync) {
            flushSync(rerender);
          } else {
            rerender();
          }
        }
      );
      const unsubscribeOnScroll = store.$subscribe(UPDATE_SCROLL_EVENT, () => {
        // https://github.com/inokawa/virtua/discussions/580
        onScroll[refKey] && onScroll[refKey]();
      });
      const unsubscribeOnScrollEnd = store.$subscribe(
        UPDATE_SCROLL_END_EVENT,
        () => {
          onScrollEnd[refKey] && onScrollEnd[refKey]();
        }
      );

      const el = containerRef[refKey]!;
      resizer.$observeRoot(el);
      scroller.$observe(el);
      return () => {
        unsubscribeStore();
        unsubscribeOnScroll();
        unsubscribeOnScrollEnd();
        resizer.$dispose();
        scroller.$dispose();
      };
    }, []);

    useIsomorphicLayoutEffect(() => {
      scroller.$fixScrollJump();
    }, [stateVersion]);

    useImperativeHandle(ref, () => {
      return {
        get cache() {
          return store.$getCacheSnapshot();
        },
        findStartIndex: store.$findStartIndex,
        findEndIndex: store.$findEndIndex,
        scrollToIndex: scroller.$scrollToIndex,
      };
    }, []);

    for (let i = startIndex, j = endIndex; i <= j; i++) {
      const e = getElement(i);
      items.push(
        <ListItem
          key={getKey(e, i)}
          _resizer={resizer.$observeItem}
          _index={i}
          _offset={store.$getItemOffset(i)}
          _hide={store.$isUnmeasuredItem(i)}
          _as={ItemElement as "div"}
          _children={e}
          _isHorizontal={isHorizontal}
          _isSSR={isSSR[refKey]}
        />
      );
    }

    return (
      <Element
        ref={containerRef}
        style={{
          // contain: "content",
          flex: "none", // flex style can break layout
          position: "relative",
          visibility: "hidden", // TODO replace with other optimization methods
          width: isHorizontal ? totalSize : "100%",
          height: isHorizontal ? "100%" : totalSize,
          pointerEvents: isScrolling ? "none" : undefined,
        }}
      >
        {items}
      </Element>
    );
  }
);
