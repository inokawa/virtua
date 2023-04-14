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
} from "react";
import {
  ACTION_UPDATE_CACHE_LENGTH,
  VirtualStore,
  createVirtualStore,
} from "../core/store";
import { useIsomorphicLayoutEffect } from "./useIsomorphicLayoutEffect";
import { useSyncExternalStore } from "./useSyncExternalStore";
import { exists, max, min } from "../core/utils";
import {
  createScroller,
  Scroller,
  SCROLL_MANUAL,
  SCROLL_UP,
} from "../core/scroller";
import { refKey } from "./utils";
import { useStatic } from "./useStatic";
import { useEvent } from "./useEvent";

const INITIAL_END_REACHED_INDEX = -1;

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
            // willChange: "transform",
          };
          if (isHorizontal) {
            style.display = "flex";
          }
          if (hide) {
            style.visibility = "hidden";
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

export interface CustomWindowComponentProps {
  children: ReactNode;
  style: CSSProperties;
  scrollSize: number;
  scrolling: boolean;
  horizontal: boolean;
  rtl: boolean;
}

const DefaultWindow = forwardRef<any, CustomWindowComponentProps>(
  (
    { children, style, scrollSize, scrolling, horizontal, rtl },
    ref
  ): ReactElement => {
    return (
      <div ref={ref} style={style}>
        <div
          style={useMemo((): CSSProperties => {
            const width = horizontal ? scrollSize : "100%";
            const height = horizontal ? "100%" : scrollSize;
            return {
              position: "absolute",
              top: 0,
              [rtl ? "right" : "left"]: 0,
              width,
              height,
              minWidth: width,
              minHeight: height,
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
  _style: style,
}: {
  _children: ReactNode;
  _ref: RefObject<HTMLDivElement>;
  _store: VirtualStore;
  _element: CustomWindowComponent;
  _scrolling: boolean;
  _style: CSSProperties | undefined;
}) => {
  const scrollSize = useSyncExternalStore(
    store._subscribe,
    store._getScrollSize
  );
  const viewportSize = useSyncExternalStore(
    store._subscribe,
    store._getViewportSize
  );
  const clampedScrollSize =
    scrollSize >= viewportSize ? scrollSize : viewportSize;

  const horizontal = store._isHorizontal();
  return (
    <Element
      ref={ref}
      scrollSize={clampedScrollSize}
      scrolling={scrolling}
      horizontal={horizontal}
      rtl={store._isRtl()}
      style={useMemo(
        (): CSSProperties => ({
          overflow: horizontal ? "auto hidden" : "hidden auto",
          position: "relative",
          contain: "strict",
          // transform: "translate3d(0px, 0px, 0px)",
          // willChange: "scroll-position",
          // backfaceVisibility: "hidden",
          width: "100%",
          height: "100%",
          padding: 0,
          margin: 0,
          ...style,
        }),
        [style]
      )}
    >
      {children}
    </Element>
  );
};

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
 * Methods of {@link List}.
 */
export interface ListHandle {
  /**
   * Get current scrollTop or scrollLeft.
   */
  scrollOffset: number;
  /**
   * Get current scrollHeight or scrollWidth.
   */
  scrollSize: number;
  /**
   * Scroll to the item specified by index.
   * @param index index of item
   */
  scrollToIndex(index: number): void;
  /**
   * Scroll to the item specified by offset.
   * @param offset offset from start
   */
  scrollToOffset(offset: number): void;
}

/**
 * Props of {@link List}.
 */
export interface ListProps {
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
   * If true, rendered as a horizontally scrollable list. Otherwise rendered as a vertically scrollable list.
   */
  horizontal?: boolean;
  /**
   * You have to set true if you use this component under `direction: rtl` style.
   */
  rtl?: boolean;
  /**
   * Number of items to be the margin from the end of the scroll. See also {@link onEndReached}.
   * @defaultValue 0
   */
  endThreshold?: number;
  /**
   * Inline style prop to override style of scrollable element.
   */
  style?: CSSProperties;
  /**
   * Customized element type for scrollable element.
   * @defaultValue {@link DefaultWindow}
   */
  element?: CustomWindowComponent;
  /**
   * Customized element type for item element.
   * @defaultValue "div"
   */
  itemElement?: CustomItemComponentOrElement;
  /**
   * Callback invoked when scrolling reached to the end. The margin from the end is specified by {@link endThreshold}.
   */
  onEndReached?: () => void;
  /**
   * Callback invoked when scrolling stops.
   */
  onScrollStop?: () => void;
}

/**
 * Virtualized list component. See {@link ListProps} and {@link ListHandle}.
 */
export const List = forwardRef<ListHandle, ListProps>(
  (
    {
      children,
      itemSize: itemSizeProp = 40,
      overscan = 4,
      horizontal: horizontalProp,
      rtl: rtlProp,
      endThreshold = 0,
      style: styleProp,
      element = DefaultWindow,
      itemElement = "div",
      onEndReached,
      onScrollStop: onScrollStopProp,
    },
    ref
  ): ReactElement => {
    // Memoize element array
    const elements = useMemo(() => {
      const arr: ReactNode[] = [];
      Children.forEach(children, (e) => {
        if (isInvalidElement(e)) {
          return;
        }
        arr.push(e);
      });
      return arr;
    }, [children]);
    const elementsCount = elements.length;

    // https://github.com/facebook/react/issues/25191#issuecomment-1237456448
    const store = useStatic(() =>
      createVirtualStore(
        elementsCount,
        itemSizeProp,
        !!horizontalProp,
        !!rtlProp
      )
    );
    const [startIndex, endIndex] = useSyncExternalStore(
      store._subscribe,
      store._getRange
    );
    const jump = useSyncExternalStore(store._subscribe, store._getJump);
    const rootRef = useRef<HTMLDivElement>(null);

    const onEndReachedCalledIndex = useRef<number>(INITIAL_END_REACHED_INDEX);
    const onScrollStop = useEvent(onScrollStopProp);

    const [mountedIndexes, reset] = useState<Set<number>>(new Set<number>());
    const [scrolling, setScrolling] = useState(false);
    const scroller = useStatic(() =>
      createScroller(store, (isScrolling) => {
        setScrolling(isScrolling);
        if (!isScrolling) {
          reset(new Set());
          onScrollStop();
        }
      })
    );

    // The elements length and cached items length are different just after element is added/removed.
    const count = min(elementsCount, store._getItemCount());

    // So update cache length. Updating state in render will cause warn so use useEffect for now.
    useIsomorphicLayoutEffect(() => {
      store._update(ACTION_UPDATE_CACHE_LENGTH, elementsCount);
    }, [elementsCount]);

    useIsomorphicLayoutEffect(() => scroller._initRoot(rootRef[refKey]!), []);

    useIsomorphicLayoutEffect(() => {
      if (!jump.length) return;

      // Compensate scroll jump
      const scrollDirection = scroller._getScrollDirection();
      if (scrollDirection === SCROLL_UP) {
        const diff = jump.reduce((acc, [, j]) => acc + j, 0);
        if (diff) {
          scroller._updateScrollPosition(diff, true);
        }
      } else if (scrollDirection === SCROLL_MANUAL) {
        const isStartInView = startIndex === 0;
        const isEndInView = endIndex - (count - 1) === 0;
        const diff = jump.reduce((acc, [index, j]) => {
          if (index < startIndex) {
            // Keep start if scroll position is not stuck to the start
            if (!isStartInView) {
              acc += j;
            }
          } else {
            // Keep end if scroll position is stuck to the end
            if (!isStartInView && isEndInView) {
              acc += j;
            }
          }
          return acc;
        }, 0);
        if (diff) {
          scroller._updateScrollPosition(diff, true);
        }
      } else {
        // NOP
      }
    }, [jump]);

    useEffect(() => {
      if (!onEndReached) return;

      if (onEndReachedCalledIndex[refKey] > count) {
        // Probably items have been refreshed, so reset index
        onEndReachedCalledIndex[refKey] = INITIAL_END_REACHED_INDEX;
      }

      const endMargin = count - 1 - endIndex;
      if (
        endMargin <= endThreshold &&
        onEndReachedCalledIndex[refKey] < count
      ) {
        onEndReachedCalledIndex[refKey] = count;
        onEndReached();
      }
    }, [endIndex]);

    useImperativeHandle(
      ref,
      () => {
        return {
          get scrollOffset() {
            return scroller._getScrollPosition();
          },
          get scrollSize() {
            return scroller._getActualScrollSize();
          },
          scrollToIndex(index) {
            index = max(min(index, count - 1), 0);

            scroller._scrollTo(index, () => store._getItemOffset(index));
          },
          scrollToOffset(offset) {
            offset = max(offset, 0);

            scroller._scrollTo(
              store._getItemIndexForScrollTo(offset),
              () => offset
            );
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
      });
      return res;
    }, [elements, mountedIndexes, startIndexWithMargin, endIndexWithMargin]);

    return (
      <Window
        _ref={rootRef}
        _store={store}
        _element={element}
        _scrolling={scrolling}
        _style={styleProp}
        _children={items}
      />
    );
  }
);
