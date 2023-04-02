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
} from "react";
import {
  HANDLE_SCROLL,
  UPDATE_CACHE_LENGTH,
  VirtualStore,
  UPDATE_ITEM_SIZES,
  UPDATE_VIEWPORT_SIZE,
  createVirtualStore,
} from "../core/store";
import { useIsomorphicLayoutEffect } from "./useIsomorphicLayoutEffect";
import { useSyncExternalStore } from "./useSyncExternalStore";
import { abs, debounce, max, min } from "../core/utils";

const SCROLL_STOP = 0;
const SCROLL_DOWN = 1;
const SCROLL_UP = 2;
const SCROLL_MANUAL = 3;
type ScrollDirection =
  | typeof SCROLL_STOP
  | typeof SCROLL_DOWN
  | typeof SCROLL_UP
  | typeof SCROLL_MANUAL;

const INITIAL_END_REACHED_INDEX = -1;

type ObserverHandle = {
  _initRoot: (rootElement: HTMLElement) => () => void;
  _initItem: (itemElement: HTMLElement, index: number) => () => void;
  _getScrollDirection: () => ScrollDirection;
  _updateScrollPosition: (offset: number, diff?: boolean) => void;
};

type ItemProps = {
  _children: ReactNode;
  _handle: ObserverHandle;
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
   * Scroll to the item specified by index.
   * @param index index of item
   */
  scrollToIndex(index: number): void;
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
    // memoize element count
    const rawCount = useMemo(() => {
      let i = 0;
      Children.forEach(children, (e) => {
        if (isInvalidElement(e)) {
          return;
        }
        i++;
      });
      return i;
    }, [children]);

    // https://github.com/facebook/react/issues/25191#issuecomment-1237456448
    const storeRef = useRef<VirtualStore | undefined>();
    const store =
      storeRef.current ||
      (storeRef.current = createVirtualStore(rawCount, itemSize, isHorizontal));
    const startIndex = useSyncExternalStore(
      store._subscribe,
      store._getStartIndex
    );
    const endIndex = useSyncExternalStore(store._subscribe, store._getEndIndex);
    const jump = useSyncExternalStore(store._subscribe, store._getJump);
    const scrollRef = useRef<HTMLDivElement>(null);
    const onEndReachedCalledIndex = useRef<number>(INITIAL_END_REACHED_INDEX);

    const handleRef = useRef<ObserverHandle>();
    const handle =
      handleRef.current ||
      (handleRef.current = ((): ObserverHandle => {
        // For SSR
        if (typeof ResizeObserver === "undefined") {
          return {} as any as ObserverHandle;
        }
        let prevOffset = -1;
        let scrollDirection: ScrollDirection = SCROLL_STOP;
        let resized = false;
        let isNegativeOffset: boolean | undefined;
        let rootElement: HTMLElement | undefined;
        const scrollToKey = isHorizontal ? "scrollLeft" : "scrollTop";
        const mountedIndexes = new WeakMap<Element, number>();
        const ro = new ResizeObserver((entries) => {
          const resizes: [index: number, size: number][] = [];
          for (const entry of entries) {
            if (entry.target === rootElement) {
              store._update({
                _type: UPDATE_VIEWPORT_SIZE,
                _width: entry.contentRect.width,
                _height: entry.contentRect.height,
              });
            } else {
              const index = mountedIndexes.get(entry.target);
              if (index != null) {
                resizes.push([
                  index,
                  entry.contentRect[isHorizontal ? "width" : "height"],
                ]);
              }
            }
          }

          if (resizes.length) {
            store._update({
              _type: UPDATE_ITEM_SIZES,
              _entries: resizes,
            });
            resized = true;
          }
        });

        return {
          _initRoot(root) {
            rootElement = root;

            const syncViewportToScrollPosition = () => {
              let offset = root[scrollToKey];
              if (isRtl) {
                // The scroll position may be negative value in rtl direction.
                // https://github.com/othree/jquery.rtl-scroll-type
                offset = abs(offset);
              }
              if (prevOffset === offset) {
                return;
              }
              // Skip scroll direction detection just after resizing because it may result in the opposite direction.
              // Scroll events are dispatched enough so it's ok to skip some of them.
              if (scrollDirection === SCROLL_STOP || !resized) {
                // Ignore until manual scrolling
                if (scrollDirection !== SCROLL_MANUAL) {
                  scrollDirection =
                    prevOffset > offset ? SCROLL_UP : SCROLL_DOWN;
                }
              } else {
                resized = false;
              }
              store._update({
                _type: HANDLE_SCROLL,
                _offset: (prevOffset = offset),
              });
            };

            const onScrollStopped = debounce(() => {
              // Check scroll position once just after scrolling stopped
              syncViewportToScrollPosition();
              scrollDirection = SCROLL_STOP;
            }, 300);

            const onScroll = () => {
              syncViewportToScrollPosition();
              onScrollStopped();
            };

            ro.observe(root);
            root.addEventListener("scroll", onScroll);

            return () => {
              ro.disconnect();
              root.removeEventListener("scroll", onScroll);
              onScrollStopped._cancel();
            };
          },
          _initItem(el, i) {
            mountedIndexes.set(el, i);
            ro.observe(el);
            return () => {
              mountedIndexes.delete(el);
              ro.unobserve(el);
            };
          },
          _getScrollDirection() {
            return scrollDirection;
          },
          _updateScrollPosition(offset, diff) {
            if (!rootElement) return;
            if (isRtl) {
              if (isNegativeOffset == null) {
                // Assume offset type in rtl direction.
                // The scroll position is negative in spec however its not in some browsers, for example Chrome earlier than v85.
                // https://github.com/othree/jquery.rtl-scroll-type
                const prev = rootElement[scrollToKey];
                rootElement[scrollToKey] = 1;
                isNegativeOffset = rootElement[scrollToKey] === 0;
                rootElement[scrollToKey] = prev;
              }
              if (isNegativeOffset) {
                offset *= -1;
              }
            }
            if (diff) {
              rootElement[scrollToKey] += offset;
            } else {
              rootElement[scrollToKey] = offset;
              scrollDirection = SCROLL_MANUAL;
            }
          },
        };
      })());

    // The elements length and cached items length are different just after element is added/removed.
    const count = min(rawCount, store._getItemCount());

    const startIndexWithMargin = max(startIndex - overscan, 0);
    const endIndexWithMargin = min(endIndex + overscan, count - 1);

    // So update cache length. Updating state in render will cause warn so use useEffect for now.
    useIsomorphicLayoutEffect(() => {
      store._update({
        _type: UPDATE_CACHE_LENGTH,
        _length: rawCount,
      });
    }, [rawCount]);

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
      () => ({
        scrollToIndex: async (index) => {
          const el = scrollRef.current;
          if (!el) return;

          index = max(min(index, count - 1), 0);

          const getOffset = (): number => {
            let offset = store._getItemOffset(index);
            // Use element's scrollHeight/scrollWidth instead of stored scrollSize.
            // This is because stored size may differ from the actual size, for example when a new item is added and not yet measured.
            const scrollSize = isHorizontal ? el.scrollWidth : el.scrollHeight;
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
        },
      }),
      [count]
    );

    const items = useMemo(() => {
      let i = -1;
      return Children.map(children, (e): ReactElement | null => {
        if (isInvalidElement(e)) {
          return null;
        }
        i++;
        if (i < startIndexWithMargin || i > endIndexWithMargin) {
          return null;
        }
        return (
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
    }, [children, startIndexWithMargin, endIndexWithMargin]);

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
