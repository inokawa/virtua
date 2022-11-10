import {
  Children,
  memo,
  useState,
  useRef,
  useMemo,
  CSSProperties,
  ReactElement,
  useLayoutEffect,
  forwardRef,
  useImperativeHandle,
  ReactNode,
} from "react";
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
  useVirtualState,
} from "./state";
import type { ObserverHandle } from "./types";
import { debounce, max, min } from "./utils";

const DEFAULT_ITEM_MARGIN_COUNT = 2;
const DEFAULT_ITEM_SIZE = 40; // 50

export type Layout = "vertical" | "horizontal";

type ItemProps = {
  children: ReactNode;
  _handle: ObserverHandle;
  _index: number;
  _offset: number;
  _isHorizontal: boolean;
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

    const style = useMemo<CSSProperties>(() => {
      const position = isHorizontal
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
          };
      return {
        margin: "0",
        padding: "0",
        position: "absolute",
        ...position,
        ...(hide && {
          visibility: "hidden",
        }),
      };
    }, [offset, isHorizontal, isReversed, hide]);

    useLayoutEffect(() => _handle._observe(ref.current!, _index), []);

    return (
      <div ref={ref} style={style}>
        {children}
      </div>
    );
  }
);

export type ListHandle = {
  scrollTo(index: number): void;
};

export type ListProps = {
  children: ReactNode;
  itemSize?: number;
  itemMargin?: number;
  layout?: Layout;
  reverse?: boolean;
  style?: CSSProperties;
  innerStyle?: CSSProperties;
};

export const List = forwardRef<ListHandle, ListProps>(
  (
    {
      children,
      itemSize = DEFAULT_ITEM_SIZE,
      itemMargin = DEFAULT_ITEM_MARGIN_COUNT,
      layout,
      reverse,
      style: styleProp,
      innerStyle: innerStyleProp,
    },
    ref
  ): ReactElement => {
    const rootRef = useRef<HTMLDivElement>(null);
    // memoize element instances
    const elements = useMemo(() => Children.toArray(children), [children]);

    const isHorizontal = layout === "horizontal";

    const [
      {
        _startIndex: startIndex,
        _viewportSize: viewportSize,
        _scrollSize: scrollSize,
        _sizes: sizes,
        _jump: jump,
      },
      dispatch,
    ] = useVirtualState(elements, itemSize);

    const handle = useState((): ObserverHandle => {
      let ro: ResizeObserver;
      let io: IntersectionObserver;

      let viewedCount = 0;

      const mountedIndexes = new WeakMap<Element, number>();
      const viewedIndexes = new WeakMap<Element, number>();

      return {
        _init(root) {
          // Estimating scroll position from intersections can fail when items were mounted outside of viewport and intersection didn't happen.
          // This situation rarely occurs in fast scrolling with scroll bar.
          // So get scroll position from element while there are no items in viewport.
          const requestSync = debounce(() => {
            if (viewedCount) return;

            dispatch({
              _type: HANDLE_SCROLL,
              _offset: isHorizontal
                ? reverse
                  ? -root.scrollLeft
                  : root.scrollLeft
                : reverse
                ? -root.scrollTop
                : root.scrollTop,
            });
            requestSync();
          }, 200);

          ro = new ResizeObserver((entries) => {
            const resizedItemSizes: number[] = [];
            const resizedItemIndexes: number[] = [];
            for (const entry of entries) {
              if (entry.target === root) {
                dispatch({
                  _type: UPDATE_VIEWPORT_SIZE,
                  _size: isHorizontal
                    ? entry.contentRect.width
                    : entry.contentRect.height,
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
              dispatch({
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
                dispatch({
                  _type: HANDLE_SCROLL,
                  _offset: isHorizontal
                    ? reverse
                      ? -root.scrollLeft
                      : root.scrollLeft
                    : reverse
                    ? -root.scrollTop
                    : root.scrollTop,
                });

                requestSync();
                return;
              }

              if (latestEntry) {
                const { boundingClientRect, rootBounds, target } = latestEntry;
                dispatch({
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

          ro.observe(root);
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
    })[0];

    const items: (ReactElement | null)[] = [];
    const endIndex = useMemo(
      () => findEndIndex(startIndex, viewportSize, sizes, itemSize),
      [sizes, startIndex, viewportSize, itemSize]
    );

    const startIndexWithMargin = max(startIndex - itemMargin, 0);
    const endIndexWithMargin = min(endIndex + itemMargin, sizes.length - 1);

    useLayoutEffect(() => handle._init(rootRef.current!), []);

    useLayoutEffect(() => {
      dispatch({
        _type: RESET_CACHE,
        _elements: elements,
      });
    }, [elements.length]);

    useLayoutEffect(() => {
      if (rootRef.current) {
        if (
          jump._start &&
          !(
            startIndex === 0 &&
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
        if (jump._end && endIndex - (sizes.length - 1) === 0) {
          if (isHorizontal) {
            rootRef.current.scrollLeft += jump._end;
          } else {
            rootRef.current.scrollTop += jump._end;
          }
        }
      }
    }, [jump]);

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
    for (let i = startIndexWithMargin; i <= endIndexWithMargin; i++) {
      // elements could be undefined when children length changed
      const e = elements[i];
      items.push(
        e ? (
          <Item
            key={(e as { key?: ReactElement["key"] }).key || i}
            _handle={handle}
            _index={i}
            _offset={offset}
            _isHorizontal={isHorizontal}
            _isReversed={reverse}
            _hide={sizes[i] === UNCACHED_ITEM_SIZE}
          >
            {e}
          </Item>
        ) : null
      );
      offset += resolveItemSize(sizes[i]!, itemSize);
    }

    return (
      <div
        ref={rootRef}
        style={useMemo<CSSProperties>(() => {
          return {
            width: "100%",
            height: "100%",
            overflow: isHorizontal ? "auto hidden" : "hidden auto",
            position: "relative",
            ...(reverse && {
              display: "flex",
              flexDirection: isHorizontal ? "row-reverse" : "column-reverse",
            }),
            ...styleProp,
          };
        }, [styleProp, isHorizontal, reverse])}
      >
        <div
          style={useMemo<CSSProperties>(() => {
            const crampedScrollSize =
              scrollSize >= viewportSize ? scrollSize : viewportSize;
            return {
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
    );
  }
);
