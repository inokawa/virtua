import {
  Children,
  memo,
  useState,
  useRef,
  useMemo,
  CSSProperties,
  ReactElement,
  useLayoutEffect,
  Reducer,
  useReducer,
  forwardRef,
  useImperativeHandle,
} from "react";
import {
  computeTop,
  findIndexAfter,
  findIndexBefore,
  findStartIndexWithOffset,
  resetCache,
  resolveItemHeight,
  UNCACHED_ITEM_HEIGHT,
} from "./cache";
import { max, min } from "./utils";

const NO_SCROLL_JUMP = 0;
const DEFAULT_ITEM_MARGIN_COUNT = 4;
const DEFAULT_ITEM_HEIGHT = 40; // 50

type ItemProps = {
  children: ReactElement;
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

const RESET_CACHE = 0;
const UPDATE_ITEM_HEIGHTS = 1;
const UPDATE_VIEWPORT_HEIGHT = 2;
const HANDLE_ITEM_EXIT = 3;
const HANDLE_SCROLL = 4;

type State = {
  _startIndex: number;
  _viewportHeight: number;
  _itemHeight: number;
  _cache: number[];
  _jump: number;
};

const init = ([elements, itemHeight]: [
  elements: unknown[],
  itemHeight: number
]): State => {
  return {
    _startIndex: 0,
    _viewportHeight: 0,
    _itemHeight: itemHeight,
    _cache: resetCache(elements),
    _jump: NO_SCROLL_JUMP,
  };
};

const reducer: Reducer<
  State,
  | { _type: typeof RESET_CACHE; _elements: unknown[]; _height: number }
  | {
      _type: typeof UPDATE_ITEM_HEIGHTS;
      _indexes: number[];
      _heights: number[];
    }
  | { _type: typeof UPDATE_VIEWPORT_HEIGHT; _height: number }
  | {
      _type: typeof HANDLE_ITEM_EXIT;
      _index: number;
      _isScrollingDown: boolean;
      _entry: IntersectionObserverEntry;
    }
  | { _type: typeof HANDLE_SCROLL; _offset: number }
> = (state, action) => {
  switch (action._type) {
    case RESET_CACHE:
      return {
        ...state,
        _cache: resetCache(action._elements, state._cache),
      };
    case UPDATE_ITEM_HEIGHTS:
      const { _indexes: indexes, _heights: heights } = action;
      if (indexes.every((index, i) => state._cache[index] === heights[i]!)) {
        return state;
      }
      let prevTotal = 0;
      let total = 0;
      indexes.forEach((index, i) => {
        if (index <= state._startIndex) {
          prevTotal += resolveItemHeight(
            state._cache[index]!,
            state._itemHeight
          );
          total += heights[i]!;
        }
        state._cache[index] = heights[i]!;
      });

      let jumped = false;
      const prevJump = state._jump;
      const jump = prevTotal - total;
      if (jump !== 0 && jump !== prevJump) {
        jumped = true;
      }

      return {
        ...state,
        _jump: jumped ? jump : NO_SCROLL_JUMP,
      };
    case UPDATE_VIEWPORT_HEIGHT:
      if (state._viewportHeight === action._height) {
        return state;
      }
      return {
        ...state,
        _viewportHeight: action._height,
      };
    case HANDLE_ITEM_EXIT:
      const { boundingClientRect } = action._entry;

      let nextStartIndex: number;
      if (action._isScrollingDown) {
        // scrolling down
        nextStartIndex = findIndexAfter(
          action._index,
          max(0, -boundingClientRect.top),
          state._cache,
          state._itemHeight
        );
      } else {
        // scrolling up
        nextStartIndex = findIndexBefore(
          action._index,
          max(0, boundingClientRect.top),
          state._cache,
          state._itemHeight
        );
      }
      if (nextStartIndex === state._startIndex) {
        return state;
      }
      return {
        ...state,
        _startIndex: nextStartIndex,
      };
    case HANDLE_SCROLL:
      const startIndex = findStartIndexWithOffset(
        action._offset,
        state._cache,
        state._itemHeight
      );
      if (startIndex === state._startIndex) {
        return state;
      }
      return {
        ...state,
        _startIndex: startIndex,
      };
  }
};

export type ListHandle = {
  scrollTo(index: number): void;
};

export type ListProps = {
  children: ReactElement | ReactElement[];
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
    const wrapperRef = useRef<HTMLDivElement>(null);
    // memoize element instances
    const elements = useMemo(
      () => Children.toArray(children) as ReactElement[],
      [children]
    );

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

      let mountedCount = 0;

      const mountedIndexes = new WeakMap<HTMLElement, number>();

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
                const index = mountedIndexes.get(entry.target as HTMLElement);
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
              if (
                mountedCount === entries.length &&
                entries.every((e) => !e.isIntersecting)
              ) {
                // all items would exit in fast scrolling
                dispatch({
                  _type: HANDLE_SCROLL,
                  _offset: root.scrollTop,
                });
                return;
              }

              const topExits: IntersectionObserverEntry[] = [];
              const bottomExits: IntersectionObserverEntry[] = [];
              // const topEnters: IntersectionObserverEntry[] = [];
              // const bottomEnters: IntersectionObserverEntry[] = [];

              entries.forEach((entry) => {
                if (
                  entry.boundingClientRect.top +
                    entry.boundingClientRect.height / 2 <=
                  entry.rootBounds!.top + entry.rootBounds!.height / 2
                ) {
                  // top intersection
                  if (!entry.isIntersecting) {
                    // maybe scrolling down
                    // top exit
                    topExits.push(entry);
                  } else {
                    // maybe scrolling up
                    // top enter
                    // topEnters.push(entry);
                  }
                } else {
                  // bottom intersection
                  if (!entry.isIntersecting) {
                    // maybe scrolling up
                    // bottom exit
                    bottomExits.push(entry);
                  } else {
                    // maybe scrolling down
                    // bottom enter
                    // bottomEnters.push(entry);
                  }
                }
              });

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
                const index = mountedIndexes.get(entry.target as HTMLElement);
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
                const index = mountedIndexes.get(entry.target as HTMLElement);
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
          mountedCount++;
          mountedIndexes.set(el, i);
          ro.observe(el);
          io.observe(el);
          return () => {
            mountedCount--;
            mountedIndexes.delete(el);
            ro.unobserve(el);
            io.unobserve(el);
          };
        },
      };
    })[0];

    useLayoutEffect(() => handle._init(wrapperRef.current!), []);

    useLayoutEffect(() => {
      dispatch({
        _type: RESET_CACHE,
        _elements: elements,
        _height: itemHeightProp,
      });
    }, [elements.length]);

    useLayoutEffect(() => {
      if (jump !== NO_SCROLL_JUMP && wrapperRef.current) {
        wrapperRef.current.scrollTop -= jump;
      }
    }, [jump]);

    useImperativeHandle(ref, () => ({
      scrollTo(index) {
        if (wrapperRef.current) {
          let top = computeTop(index, cache, itemHeight);
          if (scrollHeight - (top + viewportHeight) <= 0) {
            top = scrollHeight - viewportHeight;
          }
          dispatch({
            _type: HANDLE_SCROLL,
            _offset: (wrapperRef.current.scrollTop = top),
          });
        }
      },
    }));


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
    let offset = useMemo(
      () => computeTop(startIndexWithMargin, cache, itemHeight),
      [cache, startIndexWithMargin, itemHeight]
    );
    for (let i = startIndexWithMargin; i <= endIndexWithMargin; i++) {
      const e = elements[i]!;
      items.push(
        <Item
          key={e.key || i}
          _handle={handle}
          _index={i}
          _top={offset}
          _hide={cache[i] === UNCACHED_ITEM_HEIGHT}
        >
          {e}
        </Item>
      );
      offset += resolveItemHeight(cache[i]!, itemHeight);
    }

    return (
      <div
        ref={wrapperRef}
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
