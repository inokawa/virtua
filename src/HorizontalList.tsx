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

type ItemProps = {
  children: ReactNode;
  _handle: ObserverHandle;
  _index: number;
  _left: number;
  _hide: boolean;
};

const Item = memo(
  ({
    children,
    _handle,
    _index,
    _left: left,
    _hide: hide,
  }: ItemProps): ReactElement => {
    const ref = useRef<HTMLDivElement>(null);

    const style = useMemo<CSSProperties>(
      () => ({
        margin: "0",
        padding: "0",
        position: "absolute",
        display: "flex",
        height: "100%",
        left,
        ...(hide && {
          visibility: "hidden",
        }),
      }),
      [left, hide]
    );

    useLayoutEffect(() => _handle._observe(ref.current!, _index), []);

    return (
      <div ref={ref} style={style}>
        {children}
      </div>
    );
  }
);

export type HorizontalListHandle = {
  scrollTo(index: number): void;
};

export type HorizontalListProps = {
  children: ReactNode;
  itemWidth?: number;
  itemMargin?: number;
  style?: CSSProperties;
  innerStyle?: CSSProperties;
};

export const HorizontalList = forwardRef<
  HorizontalListHandle,
  HorizontalListProps
>(
  (
    {
      children,
      itemWidth = DEFAULT_ITEM_SIZE,
      itemMargin = DEFAULT_ITEM_MARGIN_COUNT,
      style: styleProp,
      innerStyle: innerStyleProp,
    },
    ref
  ): ReactElement => {
    const rootRef = useRef<HTMLDivElement>(null);
    // memoize element instances
    const elements = useMemo(() => Children.toArray(children), [children]);

    const [
      {
        _startIndex: startIndex,
        _viewportSize: viewportWidth,
        _cache: cache,
        _jump: jump,
      },
      dispatch,
    ] = useVirtualState(elements, itemWidth);

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
              _offset: root.scrollLeft,
            });
            requestSync();
          }, 200);

          ro = new ResizeObserver((entries) => {
            const resizedItemWidths: number[] = [];
            const resizedItemIndexes: number[] = [];
            for (const entry of entries) {
              if (entry.target === root) {
                dispatch({
                  _type: UPDATE_VIEWPORT_SIZE,
                  _size: entry.contentRect.width,
                });
              } else {
                const index = mountedIndexes.get(entry.target);
                if (index != null) {
                  resizedItemWidths.push(entry.contentRect.width);
                  resizedItemIndexes.push(index);
                }
              }
            }

            if (resizedItemWidths.length) {
              dispatch({
                _type: UPDATE_ITEM_SIZES,
                _sizes: resizedItemWidths,
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
                  _offset: root.scrollLeft,
                });

                requestSync();
                return;
              }

              if (latestEntry) {
                dispatch({
                  _type: HANDLE_ITEM_INTERSECTION,
                  _index: mountedIndexes.get(latestEntry.target)!,
                  _offset:
                    latestEntry.boundingClientRect.left -
                    latestEntry.rootBounds!.left,
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

    const scrollWidth = cache.reduce(
      (acc, c) => acc + resolveItemSize(c, itemWidth),
      0
    );

    const items: (ReactElement | null)[] = [];
    const endIndex = useMemo(
      () => findEndIndex(startIndex, viewportWidth, cache, itemWidth),
      [cache, startIndex, viewportWidth, itemWidth]
    );

    const startIndexWithMargin = max(startIndex - itemMargin, 0);
    const endIndexWithMargin = min(endIndex + itemMargin, cache.length - 1);

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
          !(startIndex === 0 && rootRef.current.scrollLeft === 0)
        ) {
          rootRef.current.scrollLeft += jump._start;
        }
        if (jump._end && endIndex - (cache.length - 1) === 0) {
          rootRef.current.scrollLeft += jump._end;
        }
      }
    }, [jump]);

    useImperativeHandle(ref, () => ({
      scrollTo(index) {
        if (rootRef.current) {
          let top = computeStartOffset(index, cache, itemWidth);
          if (scrollWidth - (top + viewportWidth) <= 0) {
            top = scrollWidth - viewportWidth;
          }
          rootRef.current.scrollLeft = top;
        }
      },
    }));

    let offset = useMemo(
      () => computeStartOffset(startIndexWithMargin, cache, itemWidth),
      [cache, startIndexWithMargin, itemWidth]
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
            _left={offset}
            _hide={cache[i] === UNCACHED_ITEM_SIZE}
          >
            {e}
          </Item>
        ) : null
      );
      offset += resolveItemSize(cache[i]!, itemWidth);
    }

    return (
      <div
        ref={rootRef}
        style={useMemo<CSSProperties>(
          () => ({
            width: "100%",
            height: "100%",
            overflowY: "auto",
            ...styleProp,
          }),
          [styleProp]
        )}
      >
        <div
          style={useMemo<CSSProperties>(
            () => ({
              position: "relative",
              height: "100%",
              width: scrollWidth >= viewportWidth ? scrollWidth : viewportWidth,
              ...innerStyleProp,
            }),
            [scrollWidth, viewportWidth, innerStyleProp]
          )}
        >
          {viewportWidth !== 0 && items}
        </div>
      </div>
    );
  }
);
