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
import { useSyncExternalStore } from "use-sync-external-store/shim";
import {
  HANDLE_SCROLL,
  UPDATE_CACHE_LENGTH,
  Store,
  UPDATE_ITEM_SIZES,
  UPDATE_VIEWPORT_SIZE,
  useVirtualStore,
} from "./state";
import { useIsomorphicLayoutEffect } from "./useIsomorphicLayoutEffect";
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

    const getOffset = () => store._getItemOffset(index);
    const getHide = () => store._isUnmeasuredItem(index);

    const offset = useSyncExternalStore(store._subscribe, getOffset, getOffset);
    const hide = useSyncExternalStore(store._subscribe, getHide, getHide);

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
    store._getViewportWidth,
    store._getViewportWidth
  );
  const viewportHeight = useSyncExternalStore(
    store._subscribe,
    store._getViewportHeight,
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
    store._getScrollSize,
    store._getScrollSize
  );
  const viewportSize = useSyncExternalStore(
    store._subscribe,
    store._getViewportSize,
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

export interface ListHandle {
  scrollTo(index: number): void;
}

export interface ListProps {
  children: ReactNode;
  itemSize?: number;
  itemMargin?: number;
  horizontal?: boolean;
  endThreshold?: number;
  style?: CSSProperties;
  innerStyle?: CSSProperties;
  onEndReached?: () => void;
}

export const List = forwardRef<ListHandle, ListProps>(
  (
    {
      children,
      itemSize = 40,
      itemMargin = 6,
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
      store._getStartIndex,
      store._getStartIndex
    );
    const endIndex = useSyncExternalStore(
      store._subscribe,
      store._getEndIndex,
      store._getEndIndex
    );
    const isViewportInitialized = useSyncExternalStore(
      store._subscribe,
      store._getViewportSizeInitialized,
      store._getViewportSizeInitialized
    );
    const jump = useSyncExternalStore(
      store._subscribe,
      store._getJump,
      store._getJump
    );
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
        const mountedIndexes = new WeakMap<Element, number>();

        return {
          _init(root, wrapper) {
            const syncViewportToScrollPosition = () => {
              const offset = root[scrollToKey];
              if (prevOffset === offset) {
                return;
              }
              scrollDirection = prevOffset > offset ? SCROLL_UP : SCROLL_DOWN;
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
              const resizedItemSizes: number[] = [];
              const resizedItemIndexes: number[] = [];
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
                    resizedItemSizes.push(
                      entry.contentRect[isHorizontal ? "width" : "height"]
                    );
                    resizedItemIndexes.push(index);
                  }
                }
              }

              if (resizedItemSizes.length) {
                store._update({
                  _type: UPDATE_ITEM_SIZES,
                  _sizes: resizedItemSizes,
                  _indexes: resizedItemIndexes,
                });
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

    const startIndexWithMargin = max(startIndex - itemMargin, 0);
    const endIndexWithMargin = min(endIndex + itemMargin, count - 1);

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

    useImperativeHandle(ref, () => ({
      scrollTo: async (index) => {
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
    }));

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
