import {
  HANDLE_SCROLL,
  UPDATE_ITEM_SIZES,
  UPDATE_VIEWPORT_SIZE,
  VirtualStore,
} from "./store";
import { abs, debounce } from "./utils";

export const SCROLL_STOP = 0;
export const SCROLL_DOWN = 1;
export const SCROLL_UP = 2;
export const SCROLL_MANUAL = 3;
type ScrollDirection =
  | typeof SCROLL_STOP
  | typeof SCROLL_DOWN
  | typeof SCROLL_UP
  | typeof SCROLL_MANUAL;

export type Scroller = {
  _initRoot: (rootElement: HTMLElement) => () => void;
  _initItem: (itemElement: HTMLElement, index: number) => () => void;
  _getScrollDirection: () => ScrollDirection;
  _updateScrollPosition: (offset: number, diff?: boolean) => void;
};

export const createScroller = (
  store: VirtualStore,
  isHorizontal: boolean | undefined,
  isRtl: boolean | undefined
): Scroller => {
  let prevOffset = -1;
  let scrollDirection: ScrollDirection = SCROLL_STOP;
  let resized = false;
  let isNegativeOffset: boolean | undefined;
  let rootElement: HTMLElement | undefined;
  let _ro: ResizeObserver | undefined;
  const scrollToKey = isHorizontal ? "scrollLeft" : "scrollTop";
  const mountedIndexes = new WeakMap<Element, number>();
  const getResizeObserver = (): ResizeObserver => {
    // Initialize ResizeObserver lazily for SSR
    return (
      _ro ||
      (_ro = new ResizeObserver((entries) => {
        // https://www.w3.org/TR/resize-observer/#intro
        const resizes: [index: number, size: number][] = [];
        for (const entry of entries) {
          if (entry.target === rootElement) {
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
      }))
    );
  };

  return {
    _initRoot(root) {
      rootElement = root;
      const ro = getResizeObserver();

      const syncViewportToScrollPosition = () => {
        let offset = root[scrollToKey];
        if (isRtl) {
          // The scroll position may be negative value in rtl direction.
          // https://github.com/othree/jquery.rtl-scroll-type
          offset = abs(offset);
        }
        if (prevOffset === offset) {
          return;
        }
        // Skip scroll direction detection just after resizing because it may result in the opposite direction.
        // Scroll events are dispatched enough so it's ok to skip some of them.
        if (scrollDirection === SCROLL_STOP || !resized) {
          // Ignore until manual scrolling
          if (scrollDirection !== SCROLL_MANUAL) {
            scrollDirection = prevOffset > offset ? SCROLL_UP : SCROLL_DOWN;
          }
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

      ro.observe(root);
      root.addEventListener("scroll", onScroll);

      return () => {
        ro.disconnect();
        root.removeEventListener("scroll", onScroll);
        onScrollStopped._cancel();
      };
    },
    _initItem(el, i) {
      const ro = getResizeObserver();
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
    _updateScrollPosition(offset, diff) {
      if (!rootElement) return;
      if (isRtl) {
        if (isNegativeOffset == null) {
          // Assume offset type in rtl direction.
          // The scroll position is negative in spec however its not in some browsers, for example Chrome earlier than v85.
          // https://github.com/othree/jquery.rtl-scroll-type
          const prev = rootElement[scrollToKey];
          rootElement[scrollToKey] = 1;
          isNegativeOffset = rootElement[scrollToKey] === 0;
          rootElement[scrollToKey] = prev;
        }
        if (isNegativeOffset) {
          offset *= -1;
        }
      }
      if (diff) {
        rootElement[scrollToKey] += offset;
      } else {
        rootElement[scrollToKey] = offset;
        scrollDirection = SCROLL_MANUAL;
      }
    },
  };
};
