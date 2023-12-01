import {
  useRef,
  useMemo,
  ReactElement,
  ReactNode,
  useEffect,
  forwardRef,
  useImperativeHandle,
} from "react";
import {
  ACTION_ITEMS_LENGTH_CHANGE,
  UPDATE_SCROLL_STATE,
  UPDATE_SIZE_STATE,
  createVirtualStore,
  SCROLL_IDLE,
} from "../core/store";
import { useIsomorphicLayoutEffect } from "./useIsomorphicLayoutEffect";
import { exists, values } from "../core/utils";
import { createWindowScroller } from "../core/scroller";
import {
  MayHaveKey,
  clampEndIndex,
  clampStartIndex,
  emptyComponents,
  refKey,
} from "./utils";
import { useStatic } from "./useStatic";
import { useLatestRef } from "./useLatestRef";
import { createWindowResizer } from "../core/resizer";
import { CacheSnapshot } from "../core/types";
import {
  CustomViewportComponent,
  CustomViewportComponentProps,
  Viewport as DefaultViewport,
  ViewportComponentAttributes,
} from "./Viewport";
import { CustomItemComponent, ListItem } from "./ListItem";
import { Cache } from "../core/cache";
import { flushSync } from "react-dom";
import { useRerender } from "./useRerender";
import { useChildren } from "./useChildren";

type CustomItemComponentOrElement =
  | keyof JSX.IntrinsicElements
  | CustomItemComponent;

/**
 * Methods of {@link WVList}.
 */
export interface WVListHandle {
  /**
   * Get current {@link CacheSnapshot}.
   */
  readonly cache: CacheSnapshot;
}

/**
 * Props of {@link WVList}.
 */
export interface WVListProps extends ViewportComponentAttributes {
  /**
   * Elements rendered by this component.
   *
   * You can also pass a function and set {@link WVListProps.count} to create elements lazily.
   */
  children: ReactNode | ((index: number) => ReactElement);
  /**
   * If you set a function to {@link WVListProps.children}, you have to set total number of items to this prop.
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
   * While true is set, scroll position will be maintained from the end not usual start when items are shifted/unshifted. It is useful for reverse infinite scrolling.
   */
  shift?: boolean;
  /**
   * If true, rendered as a horizontally scrollable list. Otherwise rendered as a vertically scrollable list.
   */
  horizontal?: boolean;
  /**
   * You can restore cache by passing a {@link CacheSnapshot} on mount. This is useful when you want to restore scroll position after navigation. The snapshot can be obtained from {@link WVListHandle.cache}.
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
 * Virtualized list component controlled by the window scrolling. See {@link WVListProps} and {@link WVListHandle}.
 */
export const WVList = forwardRef<WVListHandle, WVListProps>(
  (
    {
      children,
      count: renderCountProp,
      overscan = 4,
      initialItemSize,
      initialItemCount,
      shift,
      horizontal: horizontalProp,
      cache,
      components: {
        Root: Viewport = DefaultViewport,
        Item: ItemElement = "div",
      } = emptyComponents as {
        Root?: undefined;
        Item?: undefined;
      },
      onScrollStop: onScrollStopProp,
      onRangeChange: onRangeChangeProp,
      ...viewportAttrs
    },
    ref
  ): ReactElement => {
    const [getElement, count] = useChildren(children, renderCountProp);

    const onScrollStop = useLatestRef(onScrollStopProp);

    const [store, resizer, scroller, isHorizontal] = useStatic(() => {
      const _isHorizontal = !!horizontalProp;
      const _store = createVirtualStore(
        count,
        initialItemSize,
        initialItemCount,
        cache as unknown as Cache | undefined,
        false,
        !initialItemSize
      );

      return [
        _store,
        createWindowResizer(_store, _isHorizontal),
        createWindowScroller(_store, _isHorizontal),
        _isHorizontal,
      ];
    });
    // The elements length and cached items length are different just after element is added/removed.
    if (count !== store._getItemsLength()) {
      store._update(ACTION_ITEMS_LENGTH_CHANGE, [count, shift]);
    }

    const rerender = useRerender();

    const [startIndex, endIndex] = store._getRange();
    const scrollDirection = store._getScrollDirection();
    const jumpCount = store._getJumpCount();
    // https://github.com/inokawa/virtua/issues/252
    const scrollSize = store._getTotalSize();

    const rootRef = useRef<HTMLDivElement>(null);
    const scrolling = scrollDirection !== SCROLL_IDLE;

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
      const cleanupResizer = resizer._observeRoot(root);
      const cleanupScroller = scroller._observe(root);
      return () => {
        unsubscribeStore();
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
      if (!scrolling) {
        onScrollStop[refKey] && onScrollStop[refKey]();
      }
    }, [scrolling]);

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
      items.push(
        <ListItem
          key={exists(key) ? key : "_" + i}
          _resizer={resizer}
          _index={i}
          _offset={store._getItemOffset(i)}
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
        scrolling={scrolling}
        attrs={useMemo(
          () => ({
            ...viewportAttrs,
            style: {
              display: isHorizontal ? "inline-block" : "block",
              width: isHorizontal ? "auto" : "100%",
              height: isHorizontal ? "100%" : "auto",
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
