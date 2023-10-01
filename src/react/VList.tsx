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
  UPDATE_SCROLL_WITH_EVENT,
  ACTION_ITEMS_LENGTH_CHANGE,
  createVirtualStore,
  UPDATE_SIZE,
  UPDATE_JUMP,
  UPDATE_SCROLL_DIRECTION,
  UPDATE_SCROLL,
  SCROLL_IDLE,
} from "../core/store";
import { useIsomorphicLayoutEffect } from "./useIsomorphicLayoutEffect";
import { useSelector } from "./useSelector";
import { exists, values } from "../core/utils";
import { createScroller } from "../core/scroller";
import {
  MayHaveKey,
  clampEndIndex,
  clampStartIndex,
  emptyComponents,
  flattenChildren,
  refKey,
} from "./utils";
import { useStatic } from "./useStatic";
import { useLatestRef } from "./useLatestRef";
import { createResizer } from "../core/resizer";
import { ViewportComponentAttributes } from "..";
import {
  CustomViewportComponent,
  CustomViewportComponentProps,
  Viewport as DefaultViewport,
} from "./Viewport";
import { CustomItemComponent, ListItem } from "./ListItem";
import { CacheSnapshot, ScrollToIndexAlign } from "../core/types";
import { flushSync } from "react-dom";

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
   * @param align alignment of item
   */
  scrollToIndex(index: number, align?: ScrollToIndexAlign): void;
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
   * While true is set, scroll position will be maintained from the end not usual start when items are shifted/unshifted. It is useful for reverse infinite scrolling.
   */
  shift?: boolean;
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
      shift,
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

    const onScroll = useLatestRef(onScrollProp);
    const onScrollStop = useLatestRef(onScrollStopProp);

    const [store, resizer, scroller, isHorizontal, isRtl] = useStatic(() => {
      const _isHorizontal = !!horizontalProp;
      const _isRtl = mode === "rtl";
      const _store = createVirtualStore(
        flushSync,
        count,
        initialItemSize,
        initialItemCount,
        cache,
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
    if (count !== store._getItemsLength()) {
      store._update(ACTION_ITEMS_LENGTH_CHANGE, [count, shift]);
    }

    const [startIndex, endIndex] = useSelector(
      store,
      store._getRange,
      UPDATE_SCROLL + UPDATE_SIZE
    );
    const scrollDirection = useSelector(
      store,
      store._getScrollDirection,
      UPDATE_SCROLL_DIRECTION
    );
    const jumpCount = useSelector(store, store._getJumpCount, UPDATE_JUMP);
    const scrollSize = useSelector(
      store,
      store._getCorrectedScrollSize,
      UPDATE_SIZE,
      true
    );
    const rootRef = useRef<HTMLDivElement>(null);
    const scrolling = scrollDirection !== SCROLL_IDLE;

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
            return store._getCorrectedScrollSize();
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
    const items = useMemo(() => {
      const res: ReactElement[] = [];
      for (let i = overscanedStartIndex; i <= overscanedEndIndex; i++) {
        const e = elements[i]!;
        const key = (e as MayHaveKey).key;
        res.push(
          <ListItem
            key={exists(key) ? key : "_" + i}
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
              overflow: "auto",
              display: isHorizontal ? "inline-block" : "block",
              contain: "strict",
              // transform: "translate3d(0px, 0px, 0px)",
              // willChange: "scroll-position",
              // backfaceVisibility: "hidden",
              // https://github.com/bvaughn/react-window/issues/395
              // willChange: "transform",
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
