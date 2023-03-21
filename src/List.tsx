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
  Store,
  UPDATE_ITEM_SIZES,
  UPDATE_VIEWPORT_SIZE,
  useVirtualStore,
} from "./state";
import { useIsomorphicLayoutEffect } from "./useIsomorphicLayoutEffect";
import { useSyncExternalStore } from "./useSyncExternalStore";
import { debounce, max, min } from "./utils";

const SCROLL_STOP = 0;
const SCROLL_DOWN = 1;
const SCROLL_UP = 2;
type ScrollDirection =
  | typeof SCROLL_STOP
  | typeof SCROLL_DOWN
  | typeof SCROLL_UP;

type ObserverHandle = {
  _init: (rootElement: HTMLElement, wrapperElement: HTMLElement) => () => void;
  _observe: (itemElement: HTMLElement, index: number) => () => void;
  _getScrollDirection: () => ScrollDirection;
};

type ItemProps = {
  _element: ReactNode;
  _handle: ObserverHandle;
  _store: Store;
  _index: number;
  _isHorizontal: boolean | undefined;
};

const Item = memo(
  ({
    _element: children,
    _handle: handle,
    _store: store,
    _index: index,
    _isHorizontal: isHorizontal,
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
      () => handle._observe(ref.current!, index),
      [index]
    );

    return (
      <div
        ref={ref}
        style={useMemo<CSSProperties>(() => {
          const style: CSSProperties = {
            margin: "0",
            padding: "0",
            position: "absolute",
            // willChange: "transform",
          };
          if (isHorizontal) {
            style.display = "flex";
            style.height = "100%";
            style.top = 0;
            style.left = offset;
          } else {
            style.width = "100%";
            style.left = 0;
            style.top = offset;
          }
          if (hide) {
            style.visibility = "hidden";
          }
          return style;
        }, [offset, isHorizontal, hide])}
      >
        {children}
      </div>
    );
  }
);

const isInvalidElement = <T,>(e: T) => e == null || typeof e === "boolean";

const Window = ({
  _children: children,
  _store: store,
  _ref: ref,
  _isHorizontal: isHorizontal,
}: {
  _children: ReactNode;
  _store: Store;
  _ref: RefObject<HTMLDivElement>;
  _isHorizontal: boolean | undefined;
}) => {
  const viewportWidth = useSyncExternalStore(
    store._subscribe,
    store._getViewportWidth
  );
  const viewportHeight = useSyncExternalStore(
    store._subscribe,
    store._getViewportHeight
  );

  return (
    <div
      ref={ref}
      style={useMemo<CSSProperties>(
        () => ({
          width: viewportWidth,
          height: viewportHeight,
          overflow: isHorizontal ? "auto hidden" : "hidden auto",
          position: "absolute",
          // contain: "strict",
          // transform: "translate3d(0px, 0px, 0px)",
          // willChange: "scroll-position",
          // backfaceVisibility: "hidden",
          padding: 0,
          margin: 0,
          top: 0,
          left: 0,
        }),
        [viewportHeight, viewportWidth, isHorizontal]
      )}
    >
      {children}
    </div>
  );
};

const Inner = ({
  _children: children,
  _store: store,
  _style: style,
  _isHorizontal: isHorizontal,
}: {
  _children: ReactNode;
  _store: Store;
  _style: CSSProperties | undefined;
  _isHorizontal: boolean | undefined;
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
    <div
      style={useMemo<CSSProperties>(() => {
        const clampedScrollSize =
          scrollSize >= viewportSize ? scrollSize : viewportSize;
        const width = isHorizontal ? clampedScrollSize : "100%";
        const height = isHorizontal ? "100%" : clampedScrollSize;
        return {
          position: "relative",
          width,
          height,
          minWidth: width,
          minHeight: height,
          ...style,
        };
      }, [scrollSize, viewportSize, style, isHorizontal])}
    >
      {children}
    </div>
  );
};

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
   * Item size hint for unmeasured items. It's recommended to specify this prop if item sizes are fixed and known. It will help to reduce scroll jump when items are measured.
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
   * Number of items to be the margin from the end of the scroll. See also {@link onEndReached}.
   * @defaultValue 0
   */
  endThreshold?: number;
  /**
   * Inline style prop to override style of outer element.
   */
  style?: CSSProperties;
  /**
   * Inline style prop to override style of scrollable element.
   */
  innerStyle?: CSSProperties;
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
      endThreshold = 0,
      style: styleProp,
      innerStyle: innerStyleProp,
      onEndReached,
    },
    ref
  ): ReactElement => {
    const scrollToKey = isHorizontal ? "scrollLeft" : "scrollTop";
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

    const store = useVirtualStore(rawCount, itemSize, isHorizontal);
    const startIndex = useSyncExternalStore(
      store._subscribe,
      store._getStartIndex
    );
    const endIndex = useSyncExternalStore(store._subscribe, store._getEndIndex);
    const isViewportInitialized = useSyncExternalStore(
      store._subscribe,
      store._getViewportSizeInitialized
    );
    const jump = useSyncExternalStore(store._subscribe, store._getJump);
    const wrapperRef = useRef<HTMLDivElement>(null);
    const scrollRef = useRef<HTMLDivElement>(null);
    const onEndReachedCalledIndex = useRef<number>(-1);

    const handleRef = useRef<ObserverHandle>();
    const handle =
      handleRef.current ||
      (handleRef.current = ((): ObserverHandle => {
        let ro: ResizeObserver;
        let prevOffset = -1;
        let scrollDirection: ScrollDirection = SCROLL_STOP;
        let resized = false;
        const mountedIndexes = new WeakMap<Element, number>();

        return {
          _init(root, wrapper) {
            const syncViewportToScrollPosition = () => {
              const offset = root[scrollToKey];
              if (prevOffset === offset) {
                return;
              }
              // Skip scroll direction detection just after resizing because it may result in the opposite direction.
              // Scroll events are dispatched enough so it's ok to skip some of them.
              if (scrollDirection === SCROLL_STOP || !resized) {
                scrollDirection = prevOffset > offset ? SCROLL_UP : SCROLL_DOWN;
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

            ro = new ResizeObserver((entries) => {
              const resizes: [index: number, size: number][] = [];
              for (const entry of entries) {
                if (entry.target === wrapper) {
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

            ro.observe(wrapper);
            root.addEventListener("scroll", onScroll);

            return () => {
              ro.disconnect();
              root.removeEventListener("scroll", onScroll);
              onScrollStopped._cancel();
            };
          },
          _observe(el, i) {
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

    useIsomorphicLayoutEffect(
      () => handle._init(scrollRef.current!, wrapperRef.current!),
      []
    );

    useIsomorphicLayoutEffect(() => {
      if (!scrollRef.current || !jump.length) return;

      if (handle._getScrollDirection() === SCROLL_UP) {
        const diff = jump.reduce((acc, [, j]) => acc + j, 0);
        if (diff) {
          scrollRef.current[scrollToKey] += diff;
        }
      }
    }, [jump]);

    useEffect(() => {
      const endMargin = count - 1 - endIndex;
      if (
        onEndReached &&
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

          const getScrollDestination = (): number => {
            let offset = store._getItemOffset(index);
            const scrollSize = store._getScrollSize();
            const viewportSize = store._getViewportSize();
            const endReached = scrollSize - (offset + viewportSize) <= 0;
            if (endReached) {
              offset = scrollSize - viewportSize;
            }
            return offset;
          };

          if (store._hasUnmeasuredItemsInRange(index)) {
            do {
              // In order to scroll to the correct position, mount the items and measure their sizes before scrolling.
              store._update({
                _type: HANDLE_SCROLL,
                _offset: getScrollDestination(),
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
            el[scrollToKey] = getScrollDestination();
          } else {
            const offset = getScrollDestination();
            el[scrollToKey] = offset;
            // Sync viewport to scroll destination
            store._update({ _type: HANDLE_SCROLL, _offset: offset });
          }
        },
      }),
      [count]
    );

    const items = useMemo(() => {
      let i = -1;
      return Children.map(children, (e) => {
        if (isInvalidElement(e)) {
          return;
        }
        i++;
        if (i < startIndexWithMargin || i > endIndexWithMargin) {
          return;
        }
        return e != null ? (
          <Item
            key={(e as { key?: ReactElement["key"] })?.key || i}
            _handle={handle}
            _store={store}
            _element={e}
            _index={i}
            _isHorizontal={isHorizontal}
          />
        ) : null;
      });
    }, [children, startIndexWithMargin, endIndexWithMargin]);

    return (
      <div
        ref={wrapperRef}
        style={useMemo<CSSProperties>(() => {
          return {
            width: "100%",
            height: "100%",
            overflow: "hidden",
            position: "relative",
            ...styleProp,
          };
        }, [styleProp])}
      >
        <Window
          _ref={scrollRef}
          _store={store}
          _isHorizontal={isHorizontal}
          _children={
            <Inner
              _store={store}
              _style={innerStyleProp}
              _isHorizontal={isHorizontal}
              _children={isViewportInitialized && items}
            />
          }
        />
      </div>
    );
  }
);
