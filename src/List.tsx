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
} from "react";

const min = Math.min;
const max = Math.max;

const debounce = <T extends (...args: any[]) => void>(fn: T, ms: number) => {
  let id: NodeJS.Timeout | null = null;
  const cancel = () => {
    if (id !== null) {
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

const DEFAULT_ITEM_HEIGHT = 40; // 50

const findBeforeIndex = (
  caches: Cache[],
  index: number,
  viewportHeight: number
): number => {
  let sum = 0;
  let i = index;
  while (i > 0) {
    sum += caches[i]!._height;
    if (sum >= viewportHeight) {
      break;
    }
    i--;
  }
  return max(i, 0);
};

const findAfterIndex = (
  caches: Cache[],
  index: number,
  viewportHeight: number
): number => {
  let sum = 0;
  let i = index;
  while (i < caches.length - 1) {
    sum += caches[i]!._height;
    if (sum >= viewportHeight) {
      break;
    }
    i++;
  }
  return min(i, caches.length - 1);
};

const computeTop = (heights: number[], index: number): number => {
  let top = 0;
  for (let i = 0; i < heights.length; i++) {
    if (i === index) {
      break;
    }
    top += heights[i]!;
  }
  return top;
};

interface ScrollerProps {
  _scrollRef: RefObject<HTMLDivElement>;
  _style: CSSProperties;
  _innerStyle?: CSSProperties;
  children: ReactNode;
  _totalHeight: number;
  _handle: Handle;
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
        <div style={this.props._innerStyle}>{this.props.children}</div>
      </div>
    );
  }
}

type ItemProps = {
  children: ReactElement;
  _handle: Handle;
  _index: number;
  _top: number;
};

const Item = memo(
  ({ children, _handle, _index, _top: top }: ItemProps): ReactElement => {
    const ref = useRef<HTMLDivElement>(null);

    const style = useMemo<CSSProperties>(
      () => ({
        margin: "0",
        padding: "0",
        position: "absolute",
        width: "100%",
        top,
      }),
      [top]
    );

    useLayoutEffect(() => _handle._observe(ref.current!, _index), []);

    return (
      <div ref={ref} style={style}>
        {children}
      </div>
    );
  }
);

type Handle = {
  _init: (rootElement: HTMLElement) => () => void;
  _observe: (itemElement: HTMLElement, index: number) => () => void;
  _isScrollingUp: boolean;
};

type Cache = {
  _height: number;
  _offset: number;
  _isMeasuredHeight: boolean;
};

const resetCaches = (
  array: unknown[],
  caches: Cache[],
  itemHeight: number
): Cache[] => {
  return array.reduce<Cache[]>((acc, _, i) => {
    const c = caches[i];
    const height = c?._height ?? itemHeight;
    acc.push({
      _height: height,
      _offset: (acc.length ? acc[acc.length - 1]!._offset : 0) + height,
      _isMeasuredHeight: c?._isMeasuredHeight ?? false,
    });
    return acc;
  }, []);
};

const RESET_CACHE = 0;
const UPDATE_ITEM_HEIGHT = 1;
const UPDATE_VIEWPORT_HEIGHT = 2;
const HANDLE_ITEM_EXIT = 3;

type State = {
  _startIndex: number;
  _viewportHeight: number;
  _caches: Cache[];
};
const init = ([elements, height]: [
  _elements: unknown[],
  _height: number
]): State => {
  return {
    _startIndex: 0,
    _viewportHeight: 0,
    _caches: resetCaches(elements, [], height),
  };
};
const reducer: Reducer<
  State,
  | { _type: typeof RESET_CACHE; _elements: unknown[]; _height: number }
  | { _type: typeof UPDATE_ITEM_HEIGHT; _index: number; _height: number }
  | { _type: typeof UPDATE_VIEWPORT_HEIGHT; _height: number }
  | {
      _type: typeof HANDLE_ITEM_EXIT;
      _index: number;
      _isScrollingDown: boolean;
      _entry: IntersectionObserverEntry;
    }
> = (state, action) => {
  switch (action._type) {
    case RESET_CACHE:
      return {
        ...state,
        _caches: resetCaches(action._elements, state._caches, action._height),
      };
    case UPDATE_ITEM_HEIGHT:
      const { _index: index, _height: height } = action;
      const prevCache = state._caches[index];
      if (!prevCache || prevCache._height === height) {
        return state;
      }
      state._caches[index] = { ...prevCache, _height: height };

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
        nextStartIndex = findAfterIndex(
          state._caches,
          action._index,
          max(0, -boundingClientRect.top)
        );
      } else {
        // scrolling up
        nextStartIndex = findBeforeIndex(
          state._caches,
          action._index,
          max(0, boundingClientRect.top)
        );
      }
      if (nextStartIndex === state._startIndex) {
        return state;
      }
      return {
        ...state,
        _startIndex: nextStartIndex,
      };
  }
};

export type ListProps = {
  children: ReactElement | ReactElement[];
  itemHeight?: number;
  style?: CSSProperties;
  innerStyle?: CSSProperties;
};

export const List = ({
  children,
  itemHeight = DEFAULT_ITEM_HEIGHT,
  style: styleProp,
  innerStyle: innerStyleProp,
}: ListProps): ReactElement => {
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
      _caches: caches,
    },
    dispatch,
  ] = useReducer(reducer, [elements, itemHeight], init);

  const handle = useState((): Handle => {
    let ro: ResizeObserver;
    let io: IntersectionObserver;

    let isScrollingUp = false;

    const onScrollEnd = debounce(() => {
      isScrollingUp = false;
    }, 200);

    const mountedIndexes = new WeakMap<HTMLElement, number>();

    return {
      _init(root) {
        ro = new ResizeObserver((entries) => {
          for (const entry of entries) {
            if (entry.target === root) {
              dispatch({
                _type: UPDATE_VIEWPORT_HEIGHT,
                _height: entry.contentRect.height,
              });
            } else {
              const index = mountedIndexes.get(entry.target as HTMLElement);
              if (index != null) {
                dispatch({
                  _type: UPDATE_ITEM_HEIGHT,
                  _height: entry.contentRect.height,
                  _index: index,
                });
              }
            }
          }
        });
        io = new IntersectionObserver(
          (entries) => {
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
        mountedIndexes.set(el, i);
        ro.observe(el);
        io.observe(el);
        return () => {
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
      _height: itemHeight,
    });
  }, [elements.length]);

  const scrollHeight = caches.reduce((acc, c) => acc + c._height, 0); // TODO get from cache

  const items: (ReactElement | null)[] = [];
  const endIndex = findAfterIndex(caches, startIndex, viewportHeight);
  let offset = computeTop(
    caches.map((c) => c._height),
    max(0, startIndex)
  ); // TODO get from cache
  for (let i = startIndex; i <= endIndex; i++) {
    const e = elements[i]!;
    items.push(
      caches[i] ? (
        <Item key={e.key || i} _handle={handle} _index={i} _top={offset}>
          {e}
        </Item>
      ) : null
    );
    offset += caches[i]!._height;
  }

  return (
    <Scroller
      _scrollRef={wrapperRef}
      _style={useMemo<CSSProperties>(
        () => ({
          width: "100%",
          height: "100%",
          maxHeight: "100%",
          overflowY: "scroll",
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
    >
      {viewportHeight !== 0 && items}
    </Scroller>
  );
};
