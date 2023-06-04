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
import { max } from "./utils";

type ItemJump = [sizeDiff: number, index: number];
export type ScrollJump = Readonly<ItemJump[]>;
export type ItemResize = [index: number, size: number];
type ItemsRange = [startIndex: number, endIndex: number];

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

type Actions =
  | [type: typeof ACTION_ITEM_RESIZE, entries: ItemResize[]]
  | [type: typeof ACTION_WINDOW_RESIZE, size: number]
  | [type: typeof ACTION_SCROLL, offset: number]
  | [type: typeof ACTION_MANUAL_SCROLL, offset: number];

export type VirtualStore = {
  _getRange(): ItemsRange;
  _isUnmeasuredItem(index: number): boolean;
  _hasUnmeasuredItemsInRange(startIndex: number): boolean;
  _getItemOffset(index: number): number;
  _getItemSize(index: number): number;
  _getScrollOffset(): number;
  _getViewportSize(): number;
  _getScrollSize(): number;
  _getJump(): ScrollJump;
  _isHorizontal(): boolean;
  _isRtl(): boolean;
  _getItemIndexForScrollTo(offset: number): number;
  _waitForScrollDestinationItemsMeasured(): Promise<void>;
  _subscribe(cb: () => void): () => void;
  _update(...action: Actions): void;
  _getScrollDirection(): ScrollDirection;
  _setScrollDirection(direction: ScrollDirection): void;
  _updateCacheLength(length: number): void;
};

export const createVirtualStore = (
  itemCount: number,
  itemSize: number,
  isHorizontal: boolean,
  isRtl: boolean,
  initialItemCount: number = 0,
  onScrollStateChange: (scrolling: boolean) => void,
  onScrollOffsetChange: (offset: number) => void
): VirtualStore => {
  let viewportSize = itemSize * max(initialItemCount - 1, 0);
  let scrollOffset = 0;
  let jump: ItemJump[] = [];
  let cache = resetCache(itemCount, itemSize);
  let scrollDirection: ScrollDirection = SCROLL_STOP;
  let _prevRange: ItemsRange = [0, initialItemCount];
  let _scrollToQueue: [() => void, () => void] | undefined;

  const subscribers = new Set<() => void>();

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
      return computeStartOffset(cache as Writeable<Cache>, index);
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
      return computeTotalSize(cache as Writeable<Cache>);
    },
    _getJump() {
      return jump;
    },
    _isHorizontal() {
      return isHorizontal;
    },
    _isRtl() {
      return isRtl;
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
            jump = updatedJump;
            return true;
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
            const prevOffset = scrollOffset;
            return (scrollOffset = payload) !== prevOffset;
          }
        }
      })();

      if (mutated) {
        subscribers.forEach((cb) => {
          cb();
        });

        if (type === ACTION_SCROLL) {
          onScrollOffsetChange(scrollOffset);
        } else if (_scrollToQueue && type === ACTION_ITEM_RESIZE) {
          _scrollToQueue[0]();
        }
      }
    },
    _getScrollDirection() {
      return scrollDirection;
    },
    _setScrollDirection(dir) {
      const prev = scrollDirection;
      scrollDirection = dir;
      if (scrollDirection === SCROLL_STOP) {
        onScrollStateChange(false);
      } else if (
        prev === SCROLL_STOP &&
        (scrollDirection === SCROLL_DOWN || scrollDirection === SCROLL_UP)
      ) {
        onScrollStateChange(true);
      }
    },
    _updateCacheLength(length) {
      // It's ok to be updated in render because states should be calculated consistently regardless cache length
      if (cache._length === length) return;
      cache = resetCache(length, itemSize, cache);
    },
  };
};
