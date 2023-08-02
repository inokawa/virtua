import {
  useRef,
  useMemo,
  ReactElement,
  forwardRef,
  useImperativeHandle,
  ReactNode,
  useEffect,
} from "react";
import { UPDATE_SCROLL_WITH_EVENT, createVirtualStore } from "../core/store";
import { useIsomorphicLayoutEffect } from "./useIsomorphicLayoutEffect";
import {
  SELECT_IS_SCROLLING,
  SELECT_JUMP_COUNT,
  SELECT_RANGE,
  SELECT_SCROLL_SIZE,
  useSelector,
} from "./useSelector";
import { exists, max, min, values } from "../core/utils";
import { createScroller } from "../core/scroller";
import { MayHaveKey, emptyComponents, flattenChildren, refKey } from "./utils";
import { useStatic } from "./useStatic";
import { useRefWithUpdate } from "./useRefWithUpdate";
import { createResizer } from "../core/resizer";
import { ViewportComponentAttributes } from "..";
import {
  CustomViewportComponent,
  CustomViewportComponentProps,
  Viewport as DefaultViewport,
} from "./Viewport";
import { CustomItemComponent, ListItem } from "./ListItem";
import { CacheSnapshot } from "../core/types";
import { Cache } from "../core/cache";

export type ScrollMode = "reverse" | "rtl";

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
   */
  scrollToIndex(index: number): void;
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
   */
  children: ReactNode;
  /**
   * Number of items to render above/below the visible bounds of the list. You can increase to avoid showing blank items in fast scrolling.
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
   * If true, rendered as a horizontally scrollable list. Otherwise rendered as a vertically scrollable list.
   */
  horizontal?: boolean;
  /**
   * Scroll modes that should be set in certain situations.
   *
   * - `reverse`: This mode will adjust some styles to be suitable for bottom-to-top scrolling.
   * - `rtl`: You have to set this mode if you use this component under `direction: rtl` style.
   */
  mode?: ScrollMode;
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
      overscan = 4,
      initialItemSize,
      initialItemCount,
      horizontal: horizontalProp,
      mode,
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
    // Memoize element array
    const elements = useMemo(() => flattenChildren(children), [children]);
    const count = elements.length;

    const onScroll = useRefWithUpdate(onScrollProp);
    const onScrollStop = useRefWithUpdate(onScrollStopProp);

    const [store, resizer, scroller, isHorizontal, isRtl] = useStatic(() => {
      const _isHorizontal = !!horizontalProp;
      const _isRtl = mode === "rtl";
      const _store = createVirtualStore(
        count,
        initialItemSize,
        initialItemCount,
        cache as unknown as Cache | undefined,
        mode === "reverse",
        !initialItemSize
      );
      return [
        _store,
        createResizer(_store, _isHorizontal),
        createScroller(_store, _isHorizontal, _isRtl),
        _isHorizontal,
        _isRtl,
      ];
    });
    // The elements length and cached items length are different just after element is added/removed.
    store._updateCacheLength(count);

    const [startIndex, endIndex] = useSelector(
      store,
      store._getRange,
      SELECT_RANGE
    );
    const scrolling = useSelector(
      store,
      store._getIsScrolling,
      SELECT_IS_SCROLLING
    );
    const jumpCount = useSelector(
      store,
      store._getJumpCount,
      SELECT_JUMP_COUNT
    );
    const scrollSize = useSelector(
      store,
      store._getCorrectedScrollSize,
      SELECT_SCROLL_SIZE,
      true
    );
    const rootRef = useRef<HTMLDivElement>(null);

    useIsomorphicLayoutEffect(() => {
      const root = rootRef[refKey]!;
      const unobserve = resizer._observeRoot(root);
      const cleanup = scroller._initRoot(root);
      const cleanupOnScroll = store._subscribe(UPDATE_SCROLL_WITH_EVENT, () => {
        onScroll[refKey] && onScroll[refKey](store._getScrollOffset());
      });
      return () => {
        unobserve();
        cleanup();
        cleanupOnScroll();
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
          get scrollOffset() {
            return store._getScrollOffset();
          },
          get scrollSize() {
            return scroller._getActualScrollSize();
          },
          get viewportSize() {
            return store._getViewportSize();
          },
          scrollToIndex: scroller._scrollToIndex,
          scrollTo: scroller._scrollTo,
          scrollBy(offset) {
            scroller._scrollTo(store._getScrollOffset() + offset);
          },
        };
      },
      []
    );

    const overscanedStartIndex = max(startIndex - overscan, 0);
    const overscanedEndIndex = min(endIndex + overscan, count - 1);
    const items = useMemo(() => {
      const res: ReactElement[] = [];
      for (let i = overscanedStartIndex; i <= overscanedEndIndex; i++) {
        const e = elements[i];
        // This can be undefined when items are removed
        if (exists(e)) {
          res.push(
            <ListItem
              key={(e as MayHaveKey).key || i}
              _resizer={resizer}
              _store={store}
              _index={i}
              _element={ItemElement as "div"}
              _children={e}
              _isHorizontal={isHorizontal}
              _isRtl={isRtl}
            />
          );
        }
      }
      return res;
    }, [elements, overscanedStartIndex, overscanedEndIndex]);

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
              overflow: isHorizontal ? "auto hidden" : "hidden auto",
              display: isHorizontal ? "inline-block" : "block",
              contain: "strict",
              // transform: "translate3d(0px, 0px, 0px)",
              // willChange: "scroll-position",
              // backfaceVisibility: "hidden",
              // https://github.com/bvaughn/react-window/issues/395
              // willChange: "transform",
              width: "100%",
              height: "100%",
              padding: 0,
              margin: 0,
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
