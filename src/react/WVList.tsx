import {
  useRef,
  useMemo,
  ReactElement,
  ReactNode,
  useEffect,
  forwardRef,
  useImperativeHandle,
} from "react";
import { createVirtualStore } from "../core/store";
import { useIsomorphicLayoutEffect } from "./useIsomorphicLayoutEffect";
import {
  SELECT_IS_SCROLLING,
  SELECT_JUMP_COUNT,
  SELECT_RANGE,
  SELECT_SCROLL_SIZE,
  useSelector,
} from "./useSelector";
import { exists, max, min, values } from "../core/utils";
import { createWindowScroller } from "../core/scroller";
import { MayHaveKey, emptyComponents, flattenChildren, refKey } from "./utils";
import { useStatic } from "./useStatic";
import { useRefWithUpdate } from "./useRefWithUpdate";
import { createWindowResizer } from "../core/resizer";
import { CacheSnapshot, ViewportComponentAttributes } from "..";
import {
  CustomViewportComponent,
  CustomViewportComponentProps,
  Viewport as DefaultViewport,
} from "./Viewport";
import { CustomItemComponent, ListItem } from "./ListItem";

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
      overscan = 4,
      initialItemSize,
      initialItemCount,
      horizontal: horizontalProp,
      cache,
      components: {
        Root: Viewport = DefaultViewport,
        Item: ItemElement = "div",
      } = emptyComponents as {
        Root?: CustomViewportComponent;
        Item?: CustomItemComponentOrElement;
      },
      onScrollStop: onScrollStopProp,
      onRangeChange: onRangeChangeProp,
      ...viewportAttrs
    },
    ref
  ): ReactElement => {
    // Memoize element array
    const elements = useMemo(() => flattenChildren(children), [children]);
    const count = elements.length;

    const onScrollStop = useRefWithUpdate(onScrollStopProp);

    const [store, resizer, scroller, isHorizontal] = useStatic(() => {
      const _isHorizontal = !!horizontalProp;
      const _store = createVirtualStore(
        count,
        initialItemSize,
        initialItemCount,
        false,
        cache
      );

      return [
        _store,
        createWindowResizer(_store, _isHorizontal),
        createWindowScroller(_store, _isHorizontal),
        _isHorizontal,
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
      return () => {
        unobserve();
        cleanup();
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
              _isRtl={false}
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
              overflow: "visible",
              display: isHorizontal ? "inline-block" : "block",
              // transform: "translate3d(0px, 0px, 0px)",
              // willChange: "scroll-position",
              // backfaceVisibility: "hidden",
              // https://github.com/bvaughn/react-window/issues/395
              // willChange: "transform",
              width: isHorizontal ? "auto" : "100%",
              height: isHorizontal ? "100%" : "auto",
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
