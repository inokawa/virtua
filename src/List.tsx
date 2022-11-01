import {
  Children,
  memo,
  useState,
  useRef,
  useMemo,
  CSSProperties,
  ReactElement,
  useLayoutEffect,
  useReducer,
  forwardRef,
  useImperativeHandle,
  ReactNode,
} from "react";
import {
  computeTop,
  findIndexAfter,
  resolveItemHeight,
  UNCACHED_ITEM_HEIGHT,
} from "./cache";
import {
  HANDLE_ITEM_EXIT,
  HANDLE_SCROLL,
  init,
  reducer,
  RESET_CACHE,
  UPDATE_ITEM_HEIGHTS,
  UPDATE_VIEWPORT_HEIGHT,
} from "./state";
import { max, min } from "./utils";

const DEFAULT_ITEM_MARGIN_COUNT = 4;
const DEFAULT_ITEM_HEIGHT = 40; // 50

type ItemProps = {
  children: ReactNode;
  _handle: ObserverHandle;
  _index: number;
  _top: number;
  _hide: boolean;
};

const Item = memo(
  ({
    children,
    _handle,
    _index,
    _top: top,
    _hide: hide,
  }: ItemProps): ReactElement => {
    const ref = useRef<HTMLDivElement>(null);

    const style = useMemo<CSSProperties>(
      () => ({
        margin: "0",
        padding: "0",
        position: "absolute",
        width: "100%",
        top,
        ...(hide && {
          visibility: "hidden",
        }),
      }),
      [top, hide]
    );

    useLayoutEffect(() => _handle._observe(ref.current!, _index), []);

    return (
      <div ref={ref} style={style}>
        {children}
      </div>
    );
  }
);

type ObserverHandle = {
  _init: (rootElement: HTMLElement) => () => void;
  _observe: (itemElement: HTMLElement, index: number) => () => void;
};

export type ListHandle = {
  scrollTo(index: number): void;
};

export type ListProps = {
  children: ReactNode;
  itemHeight?: number;
  itemMargin?: number;
  style?: CSSProperties;
  innerStyle?: CSSProperties;
};

export const List = forwardRef<ListHandle, ListProps>(
  (
    {
      children,
      itemHeight: itemHeightProp = DEFAULT_ITEM_HEIGHT,
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
        _viewportHeight: viewportHeight,
        _itemHeight: itemHeight,
        _cache: cache,
        _jump: jump,
      },
      dispatch,
    ] = useReducer(reducer, [elements, itemHeightProp], init);

    const handle = useState((): ObserverHandle => {
      let ro: ResizeObserver;
      let io: IntersectionObserver;

      let viewedCount = 0;

      const mountedIndexes = new WeakMap<Element, number>();
      const viewedIndexes = new WeakMap<Element, number>();

      return {
        _init(root) {
          ro = new ResizeObserver((entries) => {
            const resizedItemHeights: number[] = [];
            const resizedItemIndexes: number[] = [];
            for (const entry of entries) {
              if (entry.target === root) {
                dispatch({
                  _type: UPDATE_VIEWPORT_HEIGHT,
                  _height: entry.contentRect.height,
                });
              } else {
                const index = mountedIndexes.get(entry.target);
                if (index != null) {
                  resizedItemHeights.push(entry.contentRect.height);
                  resizedItemIndexes.push(index);
                }
              }
            }

            if (resizedItemHeights.length) {
              dispatch({
                _type: UPDATE_ITEM_HEIGHTS,
                _heights: resizedItemHeights,
                _indexes: resizedItemIndexes,
              });
            }
          });

          io = new IntersectionObserver(
            (entries) => {
              const topExits: IntersectionObserverEntry[] = [];
              const bottomExits: IntersectionObserverEntry[] = [];

              entries.forEach((entry) => {
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
                  if (
                    entry.boundingClientRect.top +
                      entry.boundingClientRect.height / 2 <=
                    entry.rootBounds!.top + entry.rootBounds!.height / 2
                  ) {
                    // maybe scrolling down
                    // top exit
                    topExits.push(entry);
                  } else {
                    // maybe scrolling up
                    // bottom exit
                    bottomExits.push(entry);
                  }
                }
              });

              if (viewedCount === 0) {
                // all items would exit in fast scrolling
                dispatch({
                  _type: HANDLE_SCROLL,
                  _offset: root.scrollTop,
                });
                return;
              }

              if (topExits.length) {
                const entry = topExits.reduce((prev, entry) => {
                  if (!prev) return entry;
                  // take latest entry
                  if (prev.time < entry.time) {
                    return entry;
                  } else if (prev.time > entry.time) {
                    return prev;
                  }
                  // same time
                  if (
                    prev.boundingClientRect.top > entry.boundingClientRect.top
                  ) {
                    return entry;
                  } else {
                    return prev;
                  }
                });
                const index = mountedIndexes.get(entry.target);
                if (index != null) {
                  dispatch({
                    _type: HANDLE_ITEM_EXIT,
                    _index: index,
                    _isScrollingDown: true,
                    _entry: entry,
                  });
                }
              }

              if (bottomExits.length) {
                const entry = bottomExits.reduce((prev, entry) => {
                  if (!prev) return entry;
                  // take latest entry
                  if (prev.time < entry.time) {
                    return entry;
                  } else if (prev.time > entry.time) {
                    return prev;
                  }
                  // same time
                  if (
                    prev.boundingClientRect.top < entry.boundingClientRect.top
                  ) {
                    return entry;
                  } else {
                    return prev;
                  }
                });
                const index = mountedIndexes.get(entry.target);
                if (index != null) {
                  dispatch({
                    _type: HANDLE_ITEM_EXIT,
                    _index: index,
                    _isScrollingDown: false,
                    _entry: entry,
                  });
                }
              }
            },
            {
              root: root,
            }
          );

          ro.observe(root);
          return () => {
            ro.disconnect();
            io.disconnect();
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

    const scrollHeight = cache.reduce(
      (acc, c) => acc + resolveItemHeight(c, itemHeight),
      0
    );

    const items: (ReactElement | null)[] = [];
    const endIndex = useMemo(
      () => findIndexAfter(startIndex, viewportHeight, cache, itemHeight),
      [cache, startIndex, viewportHeight, itemHeight]
    );

    const startIndexWithMargin = max(startIndex - itemMargin, 0);
    const endIndexWithMargin = min(endIndex + itemMargin, cache.length - 1);

    useLayoutEffect(() => handle._init(rootRef.current!), []);

    useLayoutEffect(() => {
      dispatch({
        _type: RESET_CACHE,
        _elements: elements,
        _height: itemHeightProp,
      });
    }, [elements.length]);

    useLayoutEffect(() => {
      if (rootRef.current) {
        if (
          jump._top &&
          !(startIndex === 0 && rootRef.current.scrollTop === 0)
        ) {
          rootRef.current.scrollTop += jump._top;
        }
        if (jump._bottom && endIndex - (cache.length - 1) === 0) {
          rootRef.current.scrollTop += jump._bottom;
        }
      }
    }, [jump]);

    useImperativeHandle(ref, () => ({
      scrollTo(index) {
        if (rootRef.current) {
          let top = computeTop(index, cache, itemHeight);
          if (scrollHeight - (top + viewportHeight) <= 0) {
            top = scrollHeight - viewportHeight;
          }
          rootRef.current.scrollTop = top;
        }
      },
    }));

    let offset = useMemo(
      () => computeTop(startIndexWithMargin, cache, itemHeight),
      [cache, startIndexWithMargin, itemHeight]
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
            _top={offset}
            _hide={cache[i] === UNCACHED_ITEM_HEIGHT}
          >
            {e}
          </Item>
        ) : null
      );
      offset += resolveItemHeight(cache[i]!, itemHeight);
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
              width: "100%",
              height:
                scrollHeight >= viewportHeight ? scrollHeight : viewportHeight,
              ...innerStyleProp,
            }),
            [scrollHeight, viewportHeight, innerStyleProp]
          )}
        >
          {viewportHeight !== 0 && items}
        </div>
      </div>
    );
  }
);
