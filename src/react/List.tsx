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
  HANDLE_SCROLL,
  UPDATE_CACHE_LENGTH,
  VirtualStore,
  createVirtualStore,
} from "../core/store";
import { useIsomorphicLayoutEffect } from "./useIsomorphicLayoutEffect";
import { useSyncExternalStore } from "./useSyncExternalStore";
import { max, min } from "../core/utils";
import {
  createScroller,
  Scroller,
  SCROLL_MANUAL,
  SCROLL_UP,
} from "../core/scroller";

const INITIAL_END_REACHED_INDEX = -1;

type ItemProps = {
  _children: ReactNode;
  _handle: Scroller;
  _store: VirtualStore;
  _index: number;
  _element: "div";
  _isHorizontal: boolean | undefined;
  _isRtl: boolean | undefined;
};

const Item = memo(
  ({
    _children: children,
    _handle: handle,
    _store: store,
    _index: index,
    _element: Element,
    _isHorizontal: isHorizontal,
    _isRtl: isRtl,
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
      () => handle._initItem(ref.current!, index),
      [index]
    );

    return (
      <Element
        ref={ref}
        style={useMemo<CSSProperties>(() => {
          const style: CSSProperties = {
            margin: "0",
            padding: "0",
            position: "absolute",
            [isHorizontal ? "height" : "width"]: "100%",
            [isHorizontal ? "top" : isRtl ? "right" : "left"]: 0,
            [isHorizontal ? (isRtl ? "right" : "left") : "top"]: offset,
            // willChange: "transform",
          };
          if (isHorizontal) {
            style.display = "flex";
          }
          if (hide) {
            style.visibility = "hidden";
          }
          return style;
        }, [offset, isHorizontal, isRtl, hide])}
      >
        {children}
      </Element>
    );
  }
);

const isInvalidElement = <T extends ReactNode>(
  e: T
): e is Extract<T, null | undefined | boolean> =>
  e == null || typeof e === "boolean";

const Window = ({
  _children: children,
  _ref: ref,
  _element: Element,
  _style: style,
  _isHorizontal: isHorizontal,
}: {
  _children: ReactNode;
  _ref: RefObject<HTMLDivElement>;
  _element: "div";
  _style: CSSProperties | undefined;
  _isHorizontal: boolean | undefined;
}) => {
  return (
    <Element
      ref={ref}
      style={useMemo<CSSProperties>(
        () => ({
          overflow: isHorizontal ? "auto hidden" : "hidden auto",
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
        [isHorizontal, style]
      )}
    >
      {children}
    </Element>
  );
};

const Inner = ({
  _children: children,
  _store: store,
  _element: Element,
  _style: style,
  _isHorizontal: isHorizontal,
  _isRtl: isRtl,
}: {
  _children: ReactNode;
  _store: VirtualStore;
  _element: "div";
  _style: CSSProperties | undefined;
  _isHorizontal: boolean | undefined;
  _isRtl: boolean | undefined;
}) => {
  const scrollSize = useSyncExternalStore(
    store._subscribe,
    store._getScrollSize
  );
  const viewportSize = useSyncExternalStore(
    store._subscribe,
    store._getViewportSize
  );

  return (
    <Element
      style={useMemo<CSSProperties>(() => {
        const clampedScrollSize =
          scrollSize >= viewportSize ? scrollSize : viewportSize;
        const width = isHorizontal ? clampedScrollSize : "100%";
        const height = isHorizontal ? "100%" : clampedScrollSize;
        return {
          position: "absolute",
          top: 0,
          [isRtl ? "right" : "left"]: 0,
          width,
          height,
          minWidth: width,
          minHeight: height,
          ...style,
        };
      }, [scrollSize, viewportSize, style, isHorizontal, isRtl])}
    >
      {children}
    </Element>
  );
};

export interface CustomComponentProps {
  style: CSSProperties;
  children: ReactNode;
}

export type CustomComponent = React.ForwardRefExoticComponent<
  React.PropsWithoutRef<CustomComponentProps> & React.RefAttributes<any>
>;

type CustomElementType = keyof JSX.IntrinsicElements | CustomComponent;

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
   * @defaultValue 6
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
   * Inline style prop to override style of inner element.
   */
  innerStyle?: CSSProperties;
  /**
   * Customized element type for scrollable element.
   * @defaultValue "div"
   */
  element?: CustomElementType;
  /**
   * Customized element type for inner element.
   * @defaultValue "div"
   */
  innerElement?: CustomElementType;
  /**
   * Customized element type for item element.
   * @defaultValue "div"
   */
  itemElement?: CustomElementType;
  /**
   * Callback invoked when scrolling reached to the end. The margin from the end is specified by {@link endThreshold}.
   */
  onEndReached?: () => void;
}

/**
 * Virtualized list component. See {@link ListProps} and {@link ListHandle}.
 */
export const List = forwardRef<ListHandle, ListProps>(
  (
    {
      children,
      itemSize = 40,
      overscan = 6,
      horizontal: isHorizontal,
      rtl: isRtl,
      endThreshold = 0,
      style: styleProp,
      innerStyle: innerStyleProp,
      element = "div",
      innerElement = "div",
      itemElement = "div",
      onEndReached,
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
    const storeRef = useRef<VirtualStore | undefined>();
    const store =
      storeRef.current ||
      (storeRef.current = createVirtualStore(
        elementsCount,
        itemSize,
        isHorizontal
      ));
    const startIndex = useSyncExternalStore(
      store._subscribe,
      store._getStartIndex
    );
    const endIndex = useSyncExternalStore(store._subscribe, store._getEndIndex);
    const jump = useSyncExternalStore(store._subscribe, store._getJump);
    const scrollRef = useRef<HTMLDivElement>(null);
    const onEndReachedCalledIndex = useRef<number>(INITIAL_END_REACHED_INDEX);

    const [mountedIndexes, reset] = useState<Set<number>>(new Set<number>());
    const handleRef = useRef<Scroller>();
    const handle =
      handleRef.current ||
      (handleRef.current = createScroller(store, isHorizontal, isRtl, () => {
        reset(new Set());
      }));

    // The elements length and cached items length are different just after element is added/removed.
    const count = min(elementsCount, store._getItemCount());

    // So update cache length. Updating state in render will cause warn so use useEffect for now.
    useIsomorphicLayoutEffect(() => {
      store._update({
        _type: UPDATE_CACHE_LENGTH,
        _length: elementsCount,
      });
    }, [elementsCount]);

    useIsomorphicLayoutEffect(() => handle._initRoot(scrollRef.current!), []);

    useIsomorphicLayoutEffect(() => {
      if (!jump.length) return;

      // Compensate scroll jump
      const scrollDirection = handle._getScrollDirection();
      if (scrollDirection === SCROLL_UP) {
        const diff = jump.reduce((acc, [, j]) => acc + j, 0);
        if (diff) {
          handle._updateScrollPosition(diff, true);
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
          handle._updateScrollPosition(diff, true);
        }
      } else {
        // NOP
      }
    }, [jump]);

    useEffect(() => {
      if (!onEndReached) return;

      if (onEndReachedCalledIndex.current > count) {
        // Probably items have been refreshed, so reset index
        onEndReachedCalledIndex.current = INITIAL_END_REACHED_INDEX;
      }

      const endMargin = count - 1 - endIndex;
      if (
        endMargin <= endThreshold &&
        onEndReachedCalledIndex.current < count
      ) {
        onEndReachedCalledIndex.current = count;
        onEndReached();
      }
    }, [endIndex]);

    useImperativeHandle(
      ref,
      () => {
        const getScrollSize = (): number => {
          const el = scrollRef.current;
          if (!el) return 0;
          // Use element's scrollHeight/scrollWidth instead of stored scrollSize.
          // This is because stored size may differ from the actual size, for example when a new item is added and not yet measured.
          return isHorizontal ? el.scrollWidth : el.scrollHeight;
        };
        const scrollTo = async (
          index: number,
          getCurrentOffset: () => number
        ) => {
          const getOffset = (): number => {
            let offset = getCurrentOffset();
            const scrollSize = getScrollSize();
            const viewportSize = store._getViewportSize();
            if (scrollSize - (offset + viewportSize) <= 0) {
              // Adjust if the offset is over the end, to get correct startIndex.
              offset = scrollSize - viewportSize;
            }
            return offset;
          };

          if (store._hasUnmeasuredItemsInRange(index)) {
            do {
              // In order to scroll to the correct position, mount the items and measure their sizes before scrolling.
              store._update({
                _type: HANDLE_SCROLL,
                _offset: getOffset(),
              });
              try {
                // Wait for the scroll destination items to be measured.
                await store._waitForScrollDestinationItemsMeasured();
              } catch (e) {
                // canceled
                return;
              }
            } while (store._hasUnmeasuredItemsInRange(index));

            // Scroll with the updated value
            handle._updateScrollPosition(getOffset());
          } else {
            const offset = getOffset();
            handle._updateScrollPosition(offset);
            // Sync viewport to scroll destination
            store._update({ _type: HANDLE_SCROLL, _offset: offset });
          }
        };

        return {
          get scrollOffset() {
            return handle._getScrollPosition();
          },
          get scrollSize() {
            return getScrollSize();
          },
          scrollToIndex(index) {
            index = max(min(index, count - 1), 0);

            scrollTo(index, () => store._getItemOffset(index));
          },
          scrollToOffset(offset) {
            offset = max(offset, 0);

            scrollTo(store._getItemIndexForScrollTo(offset), () => offset);
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
            _handle={handle}
            _store={store}
            _index={i}
            _element={itemElement as "div"}
            _isHorizontal={isHorizontal}
            _isRtl={isRtl}
            _children={e}
          />
        );
      });
      return res;
    }, [elements, mountedIndexes, startIndexWithMargin, endIndexWithMargin]);

    return (
      <Window
        _ref={scrollRef}
        _isHorizontal={isHorizontal}
        _element={element as "div"}
        _style={styleProp}
        _children={
          <Inner
            _store={store}
            _element={innerElement as "div"}
            _style={innerStyleProp}
            _isHorizontal={isHorizontal}
            _isRtl={isRtl}
            _children={items}
          />
        }
      />
    );
  }
);
