import {
  Children,
  memo,
  useRef,
  useMemo,
  CSSProperties,
  ReactElement,
  forwardRef,
  useImperativeHandle,
  ReactNode,
  useEffect,
  RefObject,
  useState,
  ReactFragment,
} from "react";
import { VirtualStore, createVirtualStore } from "../core/store";
import { useIsomorphicLayoutEffect } from "./useIsomorphicLayoutEffect";
import { useSyncExternalStore } from "./useSyncExternalStore";
import { exists, max, min } from "../core/utils";
import { createScroller, Scroller } from "../core/scroller";
import { refKey } from "./utils";
import { useStatic } from "./useStatic";
import { useRefWithUpdate } from "./useRefWithUpdate";

type ItemProps = {
  _children: ReactNode;
  _scroller: Scroller;
  _store: VirtualStore;
  _index: number;
  _element: "div";
};

const Item = memo(
  ({
    _children: children,
    _scroller: scroller,
    _store: store,
    _index: index,
    _element: Element,
  }: ItemProps): ReactElement => {
    const ref = useRef<HTMLDivElement>(null);

    const offset = useSyncExternalStore(store._subscribe, () =>
      store._getItemOffset(index)
    );
    const hide = useSyncExternalStore(store._subscribe, () =>
      store._isUnmeasuredItem(index)
    );

    // The index may be changed if elements are inserted to or removed from the start of props.children
    useIsomorphicLayoutEffect(
      () => scroller._initItem(ref[refKey]!, index),
      [index]
    );

    return (
      <Element
        ref={ref}
        style={useMemo((): CSSProperties => {
          const isHorizontal = store._isHorizontal();
          const leftOrRightKey = store._isRtl() ? "right" : "left";
          const style: CSSProperties = {
            margin: 0,
            padding: 0,
            position: "absolute",
            [isHorizontal ? "height" : "width"]: "100%",
            [isHorizontal ? "top" : leftOrRightKey]: 0,
            [isHorizontal ? leftOrRightKey : "top"]: offset,
            visibility: hide ? "hidden" : "visible",
            // willChange: "transform",
          };
          if (isHorizontal) {
            style.display = "flex";
          }
          return style;
        }, [offset, hide])}
      >
        {children}
      </Element>
    );
  }
);

const isInvalidElement = <T extends ReactNode>(
  e: T
): e is Extract<T, null | undefined | boolean> =>
  !exists(e) || typeof e === "boolean";

export type WindowComponentAttributes = Pick<
  React.HTMLAttributes<HTMLElement>,
  "className" | "style" | "id" | "role" | "tabIndex"
> &
  React.AriaAttributes;

/**
 * Props of customized scrollable component.
 */
export interface CustomWindowComponentProps {
  children: ReactNode;
  scrollSize: number;
  scrolling: boolean;
  horizontal: boolean;
  attrs: WindowComponentAttributes;
}

const DefaultWindow = forwardRef<any, CustomWindowComponentProps>(
  (
    { children, scrollSize, scrolling, horizontal, attrs },
    ref
  ): ReactElement => {
    return (
      <div ref={ref} {...attrs}>
        <div
          style={useMemo((): CSSProperties => {
            return {
              position: "relative",
              visibility: "hidden",
              width: horizontal ? scrollSize : "100%",
              height: horizontal ? "100%" : scrollSize,
              pointerEvents: scrolling ? "none" : "auto",
            };
          }, [scrollSize, scrolling])}
        >
          {children}
        </div>
      </div>
    );
  }
);

export type CustomWindowComponent = typeof DefaultWindow;

const Window = ({
  _children: children,
  _ref: ref,
  _store: store,
  _element: Element,
  _scrolling: scrolling,
  _attrs: attrs,
}: {
  _children: ReactNode;
  _ref: RefObject<HTMLDivElement>;
  _store: VirtualStore;
  _element: CustomWindowComponent;
  _scrolling: boolean;
  _attrs: WindowComponentAttributes;
}) => {
  const scrollSize = useSyncExternalStore(
    store._subscribe,
    store._getScrollSize
  );

  const horizontal = store._isHorizontal();

  return (
    <Element
      ref={ref}
      scrollSize={scrollSize}
      scrolling={scrolling}
      horizontal={horizontal}
      attrs={useMemo(
        () => ({
          ...attrs,
          style: {
            overflow: horizontal ? "auto hidden" : "hidden auto",
            contain: "strict",
            // transform: "translate3d(0px, 0px, 0px)",
            // willChange: "scroll-position",
            // backfaceVisibility: "hidden",
            width: "100%",
            height: "100%",
            padding: 0,
            margin: 0,
            ...attrs.style,
          },
        }),
        [attrs]
      )}
    >
      {children}
    </Element>
  );
};

/**
 * Props of customized item component.
 */
export interface CustomItemComponentProps {
  style: CSSProperties;
  children: ReactNode;
}

export type CustomItemComponent = React.ForwardRefExoticComponent<
  React.PropsWithoutRef<CustomItemComponentProps> & React.RefAttributes<any>
>;

type CustomItemComponentOrElement =
  | keyof JSX.IntrinsicElements
  | CustomItemComponent;

/**
 * Methods of {@link VList}.
 */
export interface VListHandle {
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
export interface VListProps extends WindowComponentAttributes {
  /**
   * Elements rendered by this component.
   */
  children: ReactNode;
  /**
   * Item size hint for unmeasured items. It's recommended to specify this prop if item sizes are fixed and known, or much larger than the defaultValue. It will help to reduce scroll jump when items are measured.
   * @defaultValue 40
   */
  itemSize?: number;
  /**
   * Number of items to render above/below the visible bounds of the list. You can increase to avoid showing blank items in fast scrolling.
   * @defaultValue 4
   */
  overscan?: number;
  /**
   * If set, the specified amount of items will be mounted in the initial rendering regardless of the container size. This prop is mostly for SSR.
   */
  initialItemCount?: number;
  /**
   * If true, rendered as a horizontally scrollable list. Otherwise rendered as a vertically scrollable list.
   */
  horizontal?: boolean;
  /**
   * You have to set true if you use this component under `direction: rtl` style.
   */
  rtl?: boolean;
  /**
   * Customized element type for scrollable element. This element will get {@link CustomWindowComponentProps} as props.
   * @defaultValue {@link DefaultWindow}
   */
  element?: CustomWindowComponent;
  /**
   * Customized element type for item element. This element will get {@link CustomItemComponentProps} as props.
   * @defaultValue "div"
   */
  itemElement?: CustomItemComponentOrElement;
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
  onRangeChange?: (payload: {
    /**
     * The start index of viewable items.
     */
    start: number;
    /**
     * The end index of viewable items.
     */
    end: number;
    /**
     * The total count of items.
     */
    count: number;
  }) => void;
}

/**
 * Virtualized list component. See {@link VListProps} and {@link VListHandle}.
 */
export const VList = forwardRef<VListHandle, VListProps>(
  (
    {
      children,
      itemSize: itemSizeProp = 40,
      overscan = 4,
      initialItemCount,
      horizontal: horizontalProp,
      rtl: rtlProp,
      element = DefaultWindow,
      itemElement = "div",
      onScroll: onScrollProp,
      onScrollStop: onScrollStopProp,
      onRangeChange: onRangeChangeProp,
      ...windowAttrs
    },
    ref
  ): ReactElement => {
    // Memoize element array
    const elements = useMemo(() => {
      const arr: (ReactElement | ReactFragment | string | number)[] = [];
      Children.forEach(children, (e) => {
        if (isInvalidElement(e)) {
          return;
        }
        arr.push(e);
      });
      return arr;
    }, [children]);
    const count = elements.length;

    const onScroll = useRefWithUpdate(onScrollProp);
    const onScrollStop = useRefWithUpdate(onScrollStopProp);

    const [mountedIndexes, reset] = useState<Set<number>>(new Set<number>());
    const [scrolling, setScrolling] = useState(false);
    // https://github.com/facebook/react/issues/25191#issuecomment-1237456448
    const [store, scroller] = useStatic(() => {
      const _store = createVirtualStore(
        count,
        itemSizeProp,
        !!horizontalProp,
        !!rtlProp,
        initialItemCount,
        (isScrolling) => {
          setScrolling(isScrolling);
          if (!isScrolling) {
            reset(new Set());
            onScrollStop[refKey] && onScrollStop[refKey]();
          }
        },
        (offset) => {
          onScroll[refKey] && onScroll[refKey](offset);
        }
      );
      return [_store, createScroller(_store)];
    });
    // The elements length and cached items length are different just after element is added/removed.
    store._updateCacheLength(count);

    const [startIndex, endIndex] = useSyncExternalStore(
      store._subscribe,
      store._getRange
    );
    const jumpCount = useSyncExternalStore(
      store._subscribeJump,
      store._getJumpCount
    );
    const rootRef = useRef<HTMLDivElement>(null);

    useIsomorphicLayoutEffect(() => scroller._initRoot(rootRef[refKey]!), []);

    useIsomorphicLayoutEffect(() => {
      const jump = store._flushJump();
      if (!jump) return;

      scroller._fixScrollJump(jump[0], jump[1], startIndex);
    }, [jumpCount]);

    useEffect(() => {
      if (!onRangeChangeProp) return;

      onRangeChangeProp({
        start: startIndex,
        end: endIndex,
        count,
      });
    }, [startIndex, endIndex]);

    useImperativeHandle(
      ref,
      () => {
        return {
          get scrollOffset() {
            return store._getScrollOffset();
          },
          get scrollSize() {
            return scroller._getActualScrollSize();
          },
          get viewportSize() {
            return store._getViewportSize();
          },
          scrollToIndex(index) {
            scroller._scrollToIndex(index, count);
          },
          scrollTo: scroller._scrollTo,
          scrollBy(offset) {
            scroller._scrollTo(store._getScrollOffset() + offset);
          },
        };
      },
      [count]
    );

    const startIndexWithMargin = max(startIndex - overscan, 0);
    const endIndexWithMargin = min(endIndex + overscan, count - 1);
    const items = useMemo(() => {
      const res: ReactElement[] = [];
      for (let i = startIndexWithMargin; i <= endIndexWithMargin; i++) {
        // https://github.com/sergi/virtual-list/commit/8e7e06dc63568334c1ab809ea83c1be36572e9ed
        mountedIndexes.add(i);
      }
      mountedIndexes.forEach((i) => {
        const e = elements[i];
        // This can be undefined when items are removed
        if (exists(e)) {
          res.push(
            <Item
              key={(e as { key?: ReactElement["key"] })?.key || i}
              _scroller={scroller}
              _store={store}
              _index={i}
              _element={itemElement as "div"}
              _children={e}
            />
          );
        }
      });
      return res;
    }, [elements, mountedIndexes, startIndexWithMargin, endIndexWithMargin]);

    return (
      <Window
        _ref={rootRef}
        _store={store}
        _element={element}
        _scrolling={scrolling}
        _children={items}
        _attrs={windowAttrs}
      />
    );
  }
);
