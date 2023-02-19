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
  UIEventHandler,
  useEffect,
} from "react";
import { useSyncExternalStore } from "use-sync-external-store/shim";
import { useSyncExternalStoreWithSelector } from "use-sync-external-store/shim/with-selector";
import {
  computeStartOffset,
  findEndIndex,
  resolveItemSize,
  UNCACHED_ITEM_SIZE,
} from "./cache";
import {
  HANDLE_ITEM_INTERSECTION,
  HANDLE_SCROLL,
  RESET_CACHE,
  UPDATE_ITEM_SIZES,
  UPDATE_VIEWPORT_SIZE,
  useVirtualStore,
} from "./state";
import type { ObserverHandle } from "./types";
import { useIsomorphicLayoutEffect } from "./useIsomorphicLayoutEffect";
import { debounce, max, min } from "./utils";

type ItemProps = {
  children: ReactNode;
  _handle: ObserverHandle;
  _index: number;
  _offset: number;
  _isHorizontal: boolean | undefined;
  _isReversed: boolean | undefined;
  _hide: boolean;
};

const Item = memo(
  ({
    children,
    _handle,
    _index,
    _offset: offset,
    _isHorizontal: isHorizontal,
    _isReversed: isReversed,
    _hide: hide,
  }: ItemProps): ReactElement => {
    const ref = useRef<HTMLDivElement>(null);

    useIsomorphicLayoutEffect(() => _handle._observe(ref.current!, _index), []);

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
  onScroll?: UIEventHandler<HTMLDivElement>;
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
      onScroll,
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

    const store = useVirtualStore(count, itemSize);
    const startIndex = useSyncExternalStoreWithSelector(
      store._subscribe,
      store._getStore,
      store._getStore,
      (s) => s._startIndex
    );
    const viewportWidth = useSyncExternalStoreWithSelector(
      store._subscribe,
      store._getStore,
      store._getStore,
      (s) => s._viewportWidth
    );
    const viewportHeight = useSyncExternalStoreWithSelector(
      store._subscribe,
      store._getStore,
      store._getStore,
      (s) => s._viewportHeight
    );
    const scrollSize = useSyncExternalStoreWithSelector(
      store._subscribe,
      store._getStore,
      store._getStore,
      (s) => s._scrollSize
    );
    const cache = useSyncExternalStoreWithSelector(
      store._subscribe,
      store._getStore,
      store._getStore,
      (s) => s._cache
    );
    const jump = useSyncExternalStoreWithSelector(
      store._subscribe,
      store._getStore,
      store._getStore,
      (s) => s._jump
    );
    const wrapperRef = useRef<HTMLDivElement>(null);
    const rootRef = useRef<HTMLDivElement>(null);
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
              store._update({
                _type: HANDLE_SCROLL,
                _offset: isHorizontal
                  ? reverse
                    ? -root.scrollLeft
                    : root.scrollLeft
                  : reverse
                  ? -root.scrollTop
                  : root.scrollTop,
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
                      isHorizontal
                        ? entry.contentRect.width
                        : entry.contentRect.height
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

    const sizes = cache._sizes;
    const viewportSize = isHorizontal ? viewportWidth : viewportHeight;
    const endIndex = useMemo(
      () => findEndIndex(startIndex, viewportSize, sizes, itemSize),
      [sizes, startIndex, viewportSize, itemSize]
    );

    const startIndexWithMargin = max(startIndex - itemMargin, 0);
    const endIndexWithMargin = min(endIndex + itemMargin, sizes.length - 1);

    useIsomorphicLayoutEffect(
      () => handle._init(rootRef.current!, wrapperRef.current!),
      []
    );

    useIsomorphicLayoutEffect(() => {
      store._update({
        _type: RESET_CACHE,
        _length: count,
      });
    }, [count]);

    useIsomorphicLayoutEffect(() => {
      if (rootRef.current) {
        const isStartInView = startIndex === 0;
        const isEndInView = endIndex - (sizes.length - 1) === 0;
        if (
          jump._start &&
          !(
            isStartInView &&
            (isHorizontal
              ? rootRef.current.scrollLeft
              : rootRef.current.scrollTop) === 0
          )
        ) {
          if (isHorizontal) {
            rootRef.current.scrollLeft += jump._start;
          } else {
            rootRef.current.scrollTop += jump._start;
          }
        }
        if (jump._end && !isStartInView && isEndInView) {
          if (isHorizontal) {
            rootRef.current.scrollLeft += jump._end;
          } else {
            rootRef.current.scrollTop += jump._end;
          }
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
        if (rootRef.current) {
          let offset = computeStartOffset(index, sizes, itemSize);
          if (scrollSize - (offset + viewportSize) <= 0) {
            offset = scrollSize - viewportSize;
          }
          if (reverse) {
            offset *= -1;
          }
          if (isHorizontal) {
            rootRef.current.scrollLeft = offset;
          } else {
            rootRef.current.scrollTop = offset;
          }
        }
      },
    }));

    let offset = useMemo(
      () => computeStartOffset(startIndexWithMargin, sizes, itemSize),
      [sizes, startIndexWithMargin, itemSize]
    );

    let i = -1;
    const items = Children.map(children, (e) => {
      if (isInvalidElement(e)) {
        return;
      }
      i++;
      if (i < startIndexWithMargin || i > endIndexWithMargin) {
        return;
      }
      const item =
        e != null ? (
          <Item
            key={(e as { key?: ReactElement["key"] })?.key || i}
            _handle={handle}
            _index={i}
            _offset={offset}
            _isHorizontal={isHorizontal}
            _isReversed={reverse}
            _hide={sizes[i] === UNCACHED_ITEM_SIZE}
          >
            {e}
          </Item>
        ) : null;
      offset += resolveItemSize(sizes[i]!, itemSize);
      return item;
    });

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
        <div
          ref={rootRef}
          style={useMemo<CSSProperties>(
            () => ({
              width: viewportWidth,
              height: viewportHeight,
              overflow: isHorizontal ? "auto hidden" : "hidden auto",
              position: "absolute",
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
          onScroll={onScroll}
        >
          <div
            style={useMemo<CSSProperties>(() => {
              const crampedScrollSize =
                scrollSize >= viewportSize ? scrollSize : viewportSize;
              return {
                position: "relative",
                width: isHorizontal ? crampedScrollSize : "100%",
                height: isHorizontal ? "100%" : crampedScrollSize,
                minWidth: isHorizontal ? crampedScrollSize : "100%",
                minHeight: isHorizontal ? "100%" : crampedScrollSize,
                ...innerStyleProp,
              };
            }, [scrollSize, viewportSize, innerStyleProp, isHorizontal])}
          >
            {viewportSize !== 0 && items}
          </div>
        </div>
      </div>
    );
  }
);
