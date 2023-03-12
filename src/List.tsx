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
  HANDLE_ITEM_INTERSECTION,
  HANDLE_SCROLL,
  UPDATE_CACHE_LENGTH,
  Store,
  UPDATE_ITEM_SIZES,
  UPDATE_VIEWPORT_SIZE,
  useVirtualStore,
} from "./state";
import { useIsomorphicLayoutEffect } from "./useIsomorphicLayoutEffect";
import { abs, debounce, max, min } from "./utils";

type ObserverHandle = {
  _init: (rootElement: HTMLElement, wrapperElement: HTMLElement) => () => void;
  _observe: (itemElement: HTMLElement, index: number) => () => void;
};

type ItemProps = {
  _element: ReactNode;
  _handle: ObserverHandle;
  _store: Store;
  _index: number;
  _isHorizontal: boolean | undefined;
  _isReversed: boolean | undefined;
};

const Item = memo(
  ({
    _element: children,
    _handle: handle,
    _store: store,
    _index: index,
    _isHorizontal: isHorizontal,
    _isReversed: isReversed,
  }: ItemProps): ReactElement => {
    const ref = useRef<HTMLDivElement>(null);

    const getOffset = () => store._getItemOffset(index);
    const getHide = () => store._isUnmeasuredItem(index);

    const offset = useSyncExternalStore(store._subscribe, getOffset, getOffset);
    const hide = useSyncExternalStore(store._subscribe, getHide, getHide);

    useIsomorphicLayoutEffect(() => handle._observe(ref.current!, index), []);

    return (
      <div
        ref={ref}
        style={useMemo<CSSProperties>(() => {
          return {
            margin: "0",
            padding: "0",
            position: "absolute",
            ...(isHorizontal
              ? {
                  display: "flex",
                  height: "100%",
                  top: 0,
                  ...(isReversed ? { right: offset } : { left: offset }),
                }
              : {
                  width: "100%",
                  left: 0,
                  ...(isReversed ? { bottom: offset } : { top: offset }),
                }),
            ...(hide && {
              visibility: "hidden",
            }),
          };
        }, [offset, isHorizontal, isReversed, hide])}
      >
        {children}
      </div>
    );
  }
);

const isInvalidElement = <T,>(e: T) => e == null || typeof e === "boolean";

const Window = ({
  children,
  _store: store,
  _ref: ref,
  _isHorizontal: isHorizontal,
  _reverse: reverse,
}: {
  children: ReactNode;
  _store: Store;
  _ref: RefObject<HTMLDivElement>;
  _isHorizontal: boolean | undefined;
  _reverse: boolean | undefined;
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
          padding: 0,
          margin: 0,
          top: 0,
          left: 0,
          ...(reverse && {
            display: "flex",
            flexDirection: isHorizontal ? "row-reverse" : "column-reverse",
          }),
        }),
        [viewportHeight, viewportWidth, isHorizontal, reverse]
      )}
    >
      {children}
    </div>
  );
};

const Inner = ({
  children,
  _store: store,
  _style: style,
  _isHorizontal: isHorizontal,
}: {
  children: ReactNode;
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
        return {
          position: "relative",
          width: isHorizontal ? clampedScrollSize : "100%",
          height: isHorizontal ? "100%" : clampedScrollSize,
          minWidth: isHorizontal ? clampedScrollSize : "100%",
          minHeight: isHorizontal ? "100%" : clampedScrollSize,
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
  reverse?: boolean;
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
      reverse,
      endThreshold = 0,
      style: styleProp,
      innerStyle: innerStyleProp,
      onEndReached,
    },
    ref
  ): ReactElement => {
    // memoize element count
    const count = useMemo(() => {
      let i = 0;
      Children.forEach(children, (e) => {
        if (isInvalidElement(e)) {
          return;
        }
        i++;
      });
      return i;
    }, [children]);

    const store = useVirtualStore(count, itemSize, isHorizontal);
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
        let io: IntersectionObserver;

        let viewedCount = 0;

        const mountedIndexes = new WeakMap<Element, number>();
        const viewedIndexes = new WeakMap<Element, number>();

        return {
          _init(root, wrapper) {
            const syncViewportToScrollPosition = () => {
              // The scrollTop/scrollLeft may be minus in reverse scrolling
              const offset = abs(
                isHorizontal ? root.scrollLeft : root.scrollTop
              );
              store._update({
                _type: HANDLE_SCROLL,
                _offset: offset,
              });
            };

            // Estimating scroll position from intersections can fail when items were mounted outside of viewport and intersection didn't happen.
            // This situation rarely occurs in fast scrolling with scroll bar.
            // So get scroll position from element while there are no items in viewport.
            const requestSync = debounce(() => {
              if (viewedCount) return;
              syncViewportToScrollPosition();
              requestSync();
            }, 200);

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

            io = new IntersectionObserver(
              (entries) => {
                let latestEntry: IntersectionObserverEntry | undefined;
                entries.forEach((entry) => {
                  // take latest entry
                  if (
                    (!latestEntry || latestEntry.time < entry.time) &&
                    mountedIndexes.has(entry.target)
                  ) {
                    latestEntry = entry;
                  }

                  if (entry.isIntersecting) {
                    // enter
                    const index = mountedIndexes.get(entry.target);
                    if (index != null) {
                      viewedIndexes.set(entry.target, index);
                      viewedCount++;
                    }
                  } else {
                    // exit
                    if (viewedIndexes.has(entry.target)) {
                      viewedIndexes.delete(entry.target);
                      viewedCount--;
                    }
                  }
                });

                if (!viewedCount) {
                  // all items would exit in fast scrolling
                  syncViewportToScrollPosition();
                  requestSync();
                  return;
                }

                if (latestEntry) {
                  const { boundingClientRect, rootBounds, target } =
                    latestEntry;
                  store._update({
                    _type: HANDLE_ITEM_INTERSECTION,
                    _index: mountedIndexes.get(target)!,
                    _offset: isHorizontal
                      ? reverse
                        ? rootBounds!.right - boundingClientRect.right
                        : boundingClientRect.left - rootBounds!.left
                      : reverse
                      ? rootBounds!.bottom - boundingClientRect.bottom
                      : boundingClientRect.top - rootBounds!.top,
                  });
                }
              },
              {
                root: root,
                threshold: 1,
              }
            );

            ro.observe(wrapper);
            return () => {
              ro.disconnect();
              io.disconnect();
              requestSync._cancel();
            };
          },
          _observe(el, i) {
            mountedIndexes.set(el, i);
            ro.observe(el);
            io.observe(el);
            return () => {
              mountedIndexes.delete(el);
              if (viewedIndexes.has(el)) {
                viewedIndexes.delete(el);
                viewedCount--;
              }
              ro.unobserve(el);
              io.unobserve(el);
            };
          },
        };
      })());

    const startIndexWithMargin = max(startIndex - itemMargin, 0);
    const endIndexWithMargin = min(endIndex + itemMargin, count - 1);

    useIsomorphicLayoutEffect(
      () => handle._init(scrollRef.current!, wrapperRef.current!),
      []
    );

    useIsomorphicLayoutEffect(() => {
      store._update({
        _type: UPDATE_CACHE_LENGTH,
        _length: count,
      });
    }, [count]);

    useIsomorphicLayoutEffect(() => {
      if (scrollRef.current) {
        const isStartInView = startIndex === 0;
        const isEndInView = endIndex - (count - 1) === 0;
        if (
          jump._start &&
          !(
            isStartInView &&
            scrollRef.current[isHorizontal ? "scrollLeft" : "scrollTop"] === 0
          )
        ) {
          scrollRef.current[isHorizontal ? "scrollLeft" : "scrollTop"] +=
            jump._start;
        }
        if (jump._end && !isStartInView && isEndInView) {
          scrollRef.current[isHorizontal ? "scrollLeft" : "scrollTop"] +=
            jump._end;
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
      scrollTo(index) {
        const el = scrollRef.current;
        if (!el) return;

        index = max(min(index, count - 1), 0);

        let offset = store._getItemOffset(index);
        if (reverse) {
          offset *= -1;
        }
        const scrollSize = store._getScrollSize();
        const viewportSize = store._getViewportSize();
        const endReached = scrollSize - (offset + viewportSize) <= 0;
        if (endReached) {
          offset = scrollSize - viewportSize;
        }

        if (endReached && store._hasUnmeasuredItemsInRange(index)) {
          // Mount items to measure sizes before scrolling to avoid wrong calculation
          store._update({ _type: HANDLE_SCROLL, _offset: offset });
          // HACK: then scroll in next tick
          setTimeout(() => {
            el[isHorizontal ? "scrollLeft" : "scrollTop"] =
              store._getItemOffset(index);
          });
        } else {
          el[isHorizontal ? "scrollLeft" : "scrollTop"] = offset;
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
            _isReversed={reverse}
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
          _reverse={reverse}
        >
          <Inner
            _store={store}
            _style={innerStyleProp}
            _isHorizontal={isHorizontal}
          >
            {isViewportInitialized && items}
          </Inner>
        </Window>
      </div>
    );
  }
);
