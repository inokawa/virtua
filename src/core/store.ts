import {
  findStartIndexWithOffset,
  resetCache,
  getItemSize,
  computeTotalSize,
  findEndIndex,
  computeStartOffset,
  Cache,
  UNCACHED,
  setItemSize,
  hasUnmeasuredItemsInRange,
} from "./cache";
import type { Writeable } from "./types";
import { abs, exists, max } from "./utils";

type ItemJump = [sizeDiff: number, index: number];
export type ScrollJump = Readonly<[jumps: ItemJump[], isManual: boolean]>;
export type ItemResize = [index: number, size: number];
type ItemsRange = [startIndex: number, endIndex: number];

export const calcTotalJump = (jump: ItemJump[]): number =>
  jump.reduce((acc, [j]) => acc + j, 0);

export const SCROLL_STOP = 0;
export const SCROLL_DOWN = 1;
export const SCROLL_UP = 2;
export const SCROLL_MANUAL = 3;
type ScrollDirection =
  | typeof SCROLL_STOP
  | typeof SCROLL_DOWN
  | typeof SCROLL_UP
  | typeof SCROLL_MANUAL;

export const ACTION_ITEM_RESIZE = 1;
export const ACTION_WINDOW_RESIZE = 2;
export const ACTION_SCROLL = 3;
export const ACTION_MANUAL_SCROLL = 4;
export const ACTION_SCROLL_DIRECTION_CHANGE = 5;

type Actions =
  | [type: typeof ACTION_ITEM_RESIZE, entries: ItemResize[]]
  | [type: typeof ACTION_WINDOW_RESIZE, size: number]
  | [type: typeof ACTION_SCROLL, offset: number]
  | [type: typeof ACTION_MANUAL_SCROLL, offset: number]
  | [type: typeof ACTION_SCROLL_DIRECTION_CHANGE, direction: ScrollDirection];

type Subscriber = (sync?: boolean) => void;

export type VirtualStore = {
  _getRange(): ItemsRange;
  _isUnmeasuredItem(index: number): boolean;
  _hasUnmeasuredItemsInRange(startIndex: number): boolean;
  _getItemOffset(index: number): number;
  _getItemSize(index: number): number;
  _getScrollOffset(): number;
  _getViewportSize(): number;
  _getScrollSize(): number;
  _getScrollableDomSize(): number;
  _getJumpCount(): number;
  _flushJump(): ScrollJump | undefined;
  _getItemIndexForScrollTo(offset: number): number;
  _waitForScrollDestinationItemsMeasured(): Promise<void>;
  _subscribe(cb: Subscriber): () => void;
  _update(...action: Actions): void;
  _getScrollDirection(): ScrollDirection;
  _updateCacheLength(length: number): void;
};

export const createVirtualStore = (
  itemCount: number,
  itemSize: number,
  initialItemCount: number = 0,
  isReverse: boolean,
  onScrollStateChange: (scrolling: boolean) => void,
  onScrollOffsetChange: (offset: number) => void
): VirtualStore => {
  let viewportSize = itemSize * max(initialItemCount - 1, 0);
  let scrollOffset = 0;
  let jumpCount = 0;
  let jump: ScrollJump | undefined;
  let cache = resetCache(itemCount, itemSize);
  let _scrollDirection: ScrollDirection = SCROLL_STOP;
  let _resized = false;
  let _prevRange: ItemsRange = [0, initialItemCount];
  let _scrollToQueue: [() => void, () => void] | undefined;

  const subscribers = new Set<Subscriber>();
  const getScrollSize = (): number =>
    computeTotalSize(cache as Writeable<Cache>);
  const flushIsJustResized = (): boolean => {
    const prev = _resized;
    _resized = false;
    return prev;
  };
  const updateScrollDirection = (dir: ScrollDirection): boolean | undefined => {
    const prev = _scrollDirection;
    _scrollDirection = dir;
    if (_scrollDirection === SCROLL_STOP) {
      return false;
    } else if (
      prev === SCROLL_STOP &&
      (_scrollDirection === SCROLL_DOWN || _scrollDirection === SCROLL_UP)
    ) {
      return true;
    }
    return;
  };

  return {
    _getRange() {
      const [prevStartIndex, prevEndIndex] = _prevRange;
      const prevOffset = computeStartOffset(
        cache as Writeable<Cache>,
        prevStartIndex
      );
      const start = findStartIndexWithOffset(
        cache,
        scrollOffset,
        prevStartIndex,
        prevOffset
      );
      const end = findEndIndex(cache, start, viewportSize);
      if (prevStartIndex === start && prevEndIndex === end) {
        return _prevRange;
      }
      return (_prevRange = [start, end]);
    },
    _isUnmeasuredItem(index) {
      return cache._sizes[index] === UNCACHED;
    },
    _hasUnmeasuredItemsInRange(startIndex) {
      return hasUnmeasuredItemsInRange(
        cache,
        startIndex,
        findEndIndex(cache, startIndex, viewportSize)
      );
    },
    _getItemOffset(index) {
      const offset = computeStartOffset(cache as Writeable<Cache>, index);
      if (isReverse) {
        return offset + max(0, viewportSize - getScrollSize());
      }
      return offset;
    },
    _getItemSize(index) {
      return getItemSize(cache, index);
    },
    _getScrollOffset() {
      return scrollOffset;
    },
    _getViewportSize() {
      return viewportSize;
    },
    _getScrollSize() {
      return getScrollSize();
    },
    _getScrollableDomSize() {
      return max(getScrollSize(), viewportSize);
    },
    _getJumpCount() {
      return jumpCount;
    },
    _flushJump() {
      const prevJump = jump;
      jump = undefined;
      return prevJump;
    },
    _getItemIndexForScrollTo(offset) {
      return findStartIndexWithOffset(cache, offset, 0, 0);
    },
    _waitForScrollDestinationItemsMeasured() {
      if (_scrollToQueue) {
        // Cancel waiting scrollTo
        _scrollToQueue[1]();
      }
      // The measurement will be done asynchronously and the timing is not predictable so we use promise.
      // For example, ResizeObserver may not fire when window is not visible.
      return new Promise((resolve, reject) => {
        _scrollToQueue = [
          () => {
            // HACK: It should be resolved in the next microtask that is after React's render
            Promise.resolve().then(() => {
              resolve();
              _scrollToQueue = undefined;
            });
          },
          reject,
        ];
      });
    },
    _subscribe(cb) {
      subscribers.add(cb);
      return () => {
        subscribers.delete(cb);
      };
    },
    _update(type, payload) {
      let shouldSync: boolean | undefined;
      let updatedScrollState: boolean | undefined;
      const mutated = ((): boolean => {
        switch (type) {
          case ACTION_ITEM_RESIZE: {
            const updated = payload.filter(
              ([index, size]) => cache._sizes[index] !== size
            );
            // Skip if all items are cached and not updated
            if (!updated.length) {
              return false;
            }

            const updatedJump: ItemJump[] = [];
            updated.forEach(([index, size]) => {
              updatedJump.push([size - getItemSize(cache, index), index]);
              setItemSize(cache as Writeable<Cache>, index, size);
            });
            if (
              _scrollDirection === SCROLL_MANUAL ||
              _scrollDirection === SCROLL_UP
            ) {
              jump = [updatedJump, _scrollDirection === SCROLL_MANUAL];
              jumpCount++;
            } else {
              // Do nothing
            }
            return (_resized = shouldSync = true);
          }
          case ACTION_WINDOW_RESIZE: {
            if (viewportSize === payload) {
              return false;
            }
            viewportSize = payload;
            return true;
          }
          case ACTION_SCROLL:
          case ACTION_MANUAL_SCROLL: {
            // Skip if offset is not changed
            if (scrollOffset === payload) {
              return false;
            }

            if (type === ACTION_SCROLL) {
              // Skip scroll direction detection just after resizing because it may result in the opposite direction.
              // Scroll events are dispatched enough so it's ok to skip some of them.
              const isJustResized = flushIsJustResized();
              if (
                (_scrollDirection === SCROLL_STOP || !isJustResized) &&
                // Ignore until manual scrolling
                _scrollDirection !== SCROLL_MANUAL
              ) {
                updatedScrollState = updateScrollDirection(
                  scrollOffset > payload ? SCROLL_UP : SCROLL_DOWN
                );
              }

              // Ignore manual scroll because it may be called in useEffect/useLayoutEffect and cause the warn below.
              // Warning: flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task.
              //
              // Update synchronously if scrolled a lot
              shouldSync = abs(scrollOffset - payload) > viewportSize;
            }

            scrollOffset = payload;
            return true;
          }
          case ACTION_SCROLL_DIRECTION_CHANGE: {
            updatedScrollState = updateScrollDirection(payload);
            return false;
          }
        }
      })();

      if (mutated) {
        subscribers.forEach((cb) => {
          cb(shouldSync);
        });

        if (type === ACTION_SCROLL) {
          onScrollOffsetChange(scrollOffset);
        } else if (_scrollToQueue && type === ACTION_ITEM_RESIZE) {
          _scrollToQueue[0]();
        }
      }
      if (exists(updatedScrollState)) {
        onScrollStateChange(updatedScrollState);
      }
    },
    _getScrollDirection() {
      return _scrollDirection;
    },
    _updateCacheLength(length) {
      // It's ok to be updated in render because states should be calculated consistently regardless cache length
      if (cache._length === length) return;
      cache = resetCache(length, itemSize, cache);
    },
  };
};
