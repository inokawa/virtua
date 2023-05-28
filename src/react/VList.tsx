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
import { useStore } from "./useStore";
import { exists, max, min } from "../core/utils";
import { createScroller } from "../core/scroller";
import { isInvalidElement, refKey } from "./utils";
import { useStatic } from "./useStatic";
import { useRefWithUpdate } from "./useRefWithUpdate";
import { Resizer, createResizer } from "../core/resizer";
import { WindowComponentAttributes } from "..";

export type ScrollMode = "reverse" | "rtl";

type ItemProps = {
  _children: ReactNode;
  _resizer: Resizer;
  _store: VirtualStore;
  _index: number;
  _element: "div";
  _isHorizontal: boolean;
  _isRtl: boolean;
  _isOffscreen: boolean;
};

const Item = memo(
  ({
    _children: children,
    _resizer: resizer,
    _store: store,
    _index: index,
    _element: Element,
    _isHorizontal: isHorizontal,
    _isRtl: isRtl,
    _isOffscreen: isOffscreen,
  }: ItemProps): ReactElement => {
    const ref = useRef<HTMLDivElement>(null);

    const offset = useStore(
      store,
      () => store._getItemOffset(index),
      isOffscreen
    );
    const hide = useStore(
      store,
      () => store._isUnmeasuredItem(index),
      isOffscreen
    );

    // The index may be changed if elements are inserted to or removed from the start of props.children
    useIsomorphicLayoutEffect(
      () => resizer._observeItem(ref[refKey]!, index),
      [index]
    );

    return (
      <Element
        ref={ref}
        style={useMemo((): CSSProperties => {
          const leftOrRightKey = isRtl ? "right" : "left";
          const style: CSSProperties = {
            margin: 0,
            padding: 0,
            position: "absolute",
            [isHorizontal ? "height" : "width"]: "100%",
            [isHorizontal ? "top" : leftOrRightKey]: 0,
            [isHorizontal ? leftOrRightKey : "top"]: offset,
            visibility: hide || isOffscreen ? "hidden" : "visible",
            // willChange: "transform",
          };
          if (isHorizontal) {
            style.display = "flex";
          }
          return style;
        }, [offset, hide, isOffscreen])}
      >
        {children}
      </Element>
    );
  }
);

/**
 * Props of customized scrollable component for {@link VList}.
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
  _isHorizontal: horizontal,
}: {
  _children: ReactNode;
  _ref: RefObject<HTMLDivElement>;
  _store: VirtualStore;
  _element: CustomWindowComponent;
  _scrolling: boolean;
  _attrs: WindowComponentAttributes;
  _isHorizontal: boolean;
}) => {
  const scrollSize = useStore(store, store._getScrollSize);

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
 * Props of customized item component for {@link VList}.
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
   * Scroll modes that should be set in certain situations.
   *
   * - `reverse`: This mode will Adjust some styles to be suitable for bottom-to-top scrolling.
   * - `rtl`: You have to set this mode if you use this component under `direction: rtl` style.
   */
  mode?: ScrollMode;
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
      mode,
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
    const [store, resizer, scroller, isHorizontal, isRtl] = useStatic(() => {
      const _isHorizontal = !!horizontalProp;
      const _isRtl = mode === "rtl";
      const _store = createVirtualStore(
        count,
        itemSizeProp,
        initialItemCount,
        mode === "reverse",
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

      const _resizer = createResizer(_store, _isHorizontal);
      return [
        _store,
        _resizer,
        createScroller(_store, _isHorizontal, _isRtl, _resizer._isJustResized),
        _isHorizontal,
        _isRtl,
      ];
    });
    // The elements length and cached items length are different just after element is added/removed.
    store._updateCacheLength(count);

    const [startIndex, endIndex] = useStore(store, store._getRange);
    const jump = useStore(store, store._getJump);
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
      if (!jump.length) return;

      scroller._fixScrollJump(jump, startIndex);
    }, [jump]);

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
              _resizer={resizer}
              _store={store}
              _index={i}
              _element={itemElement as "div"}
              _children={e}
              _isHorizontal={isHorizontal}
              _isRtl={isRtl}
              _isOffscreen={i < startIndexWithMargin || i > endIndexWithMargin}
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
        _isHorizontal={isHorizontal}
      />
    );
  }
);
