import {
  PureComponent,
  Children,
  memo,
  useState,
  useRef,
  useMemo,
  RefObject,
  CSSProperties,
  ReactNode,
  ReactElement,
  useLayoutEffect,
  Reducer,
  useReducer,
  forwardRef,
  useImperativeHandle,
} from "react";

const min = Math.min;
const max = Math.max;

const debounce = <T extends (...args: any[]) => void>(fn: T, ms: number) => {
  let id: NodeJS.Timeout | null = null;
  const cancel = () => {
    if (id != null) {
      clearTimeout(id);
    }
  };
  const debouncedFn = (...args: Parameters<T>) => {
    cancel();
    id = setTimeout(() => {
      id = null;
      fn(...args);
    }, ms);
  };
  return debouncedFn;
};

const UNCACHED_ITEM_HEIGHT = -1;
const DEFAULT_ITEM_MARGIN_COUNT = 4;
const DEFAULT_ITEM_HEIGHT = 40; // 50

const resolveItemHeight = (
  height: number,
  defaultItemHeight: number
): number => {
  return height === UNCACHED_ITEM_HEIGHT ? defaultItemHeight : height;
};

const findIndexBefore = (
  index: number,
  viewportHeight: number,
  cache: number[],
  defaultItemHeight: number
): number => {
  let sum = 0;
  let i = index;
  while (i > 0) {
    sum += resolveItemHeight(cache[i]!, defaultItemHeight);
    if (sum >= viewportHeight) {
      break;
    }
    i--;
  }
  return max(i, 0);
};

const findIndexAfter = (
  index: number,
  viewportHeight: number,
  cache: number[],
  defaultItemHeight: number
): number => {
  let sum = 0;
  let i = index;
  while (i < cache.length - 1) {
    sum += resolveItemHeight(cache[i]!, defaultItemHeight);
    if (sum >= viewportHeight) {
      break;
    }
    i++;
  }
  return min(i, cache.length - 1);
};

const computeTop = (
  cache: number[],
  index: number,
  defaultItemHeight: number
): number => {
  let top = 0;
  for (let i = 0; i < cache.length; i++) {
    if (i === index) {
      break;
    }
    top += resolveItemHeight(cache[i]!, defaultItemHeight);
  }
  return top;
};

interface ScrollerProps {
  _scrollRef: RefObject<HTMLDivElement>;
  _style: CSSProperties;
  _innerStyle?: CSSProperties;
  _items: ReactNode;
  _totalHeight: number;
  _handle: ObserverHandle;
}

interface ScrollerState {}

const FromTop = 0;
const FromBottom = 1;
type From = typeof FromTop | typeof FromBottom;

type ScrollerSnapshot = [from: From, offset: number] | null;

class Scroller extends PureComponent<ScrollerProps, ScrollerState> {
  private _ref: RefObject<HTMLDivElement>;

  constructor(props: ScrollerProps) {
    super(props);
    this._ref = props._scrollRef;
  }

  getSnapshotBeforeUpdate(prevProps: ScrollerProps): ScrollerSnapshot {
    if (
      prevProps._totalHeight !== this.props._totalHeight &&
      this._ref.current &&
      this.props._handle._isScrollingUp
    ) {
      return [
        FromBottom,
        this._ref.current.scrollHeight - this._ref.current.scrollTop,
      ];
    }
    return null;
  }

  componentDidUpdate(
    _prevProps: ScrollerProps,
    _prevState: ScrollerState,
    snapshot: ScrollerSnapshot
  ) {
    if (snapshot && this._ref.current) {
      if (snapshot[0] === FromTop) {
        this._ref.current.scrollTop = snapshot[1];
      } else {
        this._ref.current.scrollTop =
          this._ref.current.scrollHeight - snapshot[1];
      }
    }
  }

  render() {
    return (
      <div ref={this._ref} style={this.props._style}>
        <div style={this.props._innerStyle}>{this.props._items}</div>
      </div>
    );
  }
}

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
  _isScrollingUp: boolean;
};

const resetCache = (array: unknown[], cache?: number[]): number[] => {
  return array.map((_, i) => (cache && cache[i]) ?? UNCACHED_ITEM_HEIGHT);
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
      indexes.forEach((index, i) => {
        state._cache[index] = heights[i]!;
      });

      return {
        ...state,
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
      const startIndex = findIndexAfter(
        0,
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
      },
      dispatch,
    ] = useReducer(reducer, [elements, itemHeightProp], init);

    const handle = useState((): ObserverHandle => {
      let ro: ResizeObserver;
      let io: IntersectionObserver;

      let mountedCount = 0;
      let isScrollingUp = false;

      const onScrollEnd = debounce(() => {
        isScrollingUp = false;
      }, 200);

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
              const topEnters: IntersectionObserverEntry[] = [];
              const bottomEnters: IntersectionObserverEntry[] = [];

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
                    topEnters.push(entry);
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
                    bottomEnters.push(entry);
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
              if (
                bottomExits.length + topEnters.length >
                bottomEnters.length + topExits.length
              ) {
                isScrollingUp = true;
                onScrollEnd();
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
        get _isScrollingUp() {
          return isScrollingUp;
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

    useImperativeHandle(
      ref,
      () => ({
        scrollTo(index) {
          if (wrapperRef.current) {
            wrapperRef.current.scrollTop = computeTop(cache, index, itemHeight);
          }
        },
      }),
      [ref, cache, itemHeight]
    );

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
      () => computeTop(cache, startIndexWithMargin, itemHeight),
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
      <Scroller
        _scrollRef={wrapperRef}
        _style={useMemo<CSSProperties>(
          () => ({
            width: "100%",
            height: "100%",
            overflowY: "auto",
            ...styleProp,
          }),
          [styleProp]
        )}
        _innerStyle={useMemo<CSSProperties>(
          () => ({
            position: "relative",
            height:
              scrollHeight >= viewportHeight ? scrollHeight : viewportHeight,
            ...innerStyleProp,
          }),
          [scrollHeight, viewportHeight, innerStyleProp]
        )}
        _totalHeight={scrollHeight}
        _handle={handle}
        _items={viewportHeight !== 0 && items}
      />
    );
  }
);
