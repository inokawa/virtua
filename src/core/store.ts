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
  estimateDefaultItemSize,
} from "./cache";
import type { Writeable } from "./types";
import { abs, exists, max, min, timeout } from "./utils";

type ItemJump = Readonly<[sizeDiff: number, index: number]>;
export type ScrollJump = Readonly<number>;
export type ItemResize = Readonly<[index: number, size: number]>;
type ItemsRange = Readonly<[startIndex: number, endIndex: number]>;

const sumJumps = (jump: readonly ItemJump[]): number =>
  jump.reduce((acc, [j]) => acc + j, 0);
const calculateJumps = (cache: Cache, items: ItemResize[]): ItemJump[] => {
  return items.map(([index, size]) => {
    return [size - getItemSize(cache, index), index];
  });
};

export const SCROLL_IDLE = 0;
export const SCROLL_DOWN = 1;
export const SCROLL_UP = 2;
export const SCROLL_MANUAL = 3;
type ScrollDirection =
  | typeof SCROLL_IDLE
  | typeof SCROLL_DOWN
  | typeof SCROLL_UP
  | typeof SCROLL_MANUAL;

export const ACTION_ITEM_RESIZE = 1;
export const ACTION_WINDOW_RESIZE = 2;
export const ACTION_SCROLL = 3;
export const ACTION_MANUAL_SCROLL = 4;
export const ACTION_SCROLL_END = 5;

type Actions =
  | [type: typeof ACTION_ITEM_RESIZE, entries: ItemResize[]]
  | [type: typeof ACTION_WINDOW_RESIZE, size: number]
  | [type: typeof ACTION_SCROLL, offset: number]
  | [type: typeof ACTION_MANUAL_SCROLL, offset: number]
  | [type: typeof ACTION_SCROLL_END, isManual: boolean];

type Subscriber = (sync?: boolean) => void;

export type VirtualStore = {
  _getRange(): ItemsRange;
  _isUnmeasuredItem(index: number): boolean;
  _hasUnmeasuredItemsInRange(startIndex: number): boolean;
  _getItemOffset(index: number): number;
  _getItemSize(index: number): number;
  _getItemLength(): number;
  _getScrollOffset(): number;
  _getScrollOffsetMax(): number;
  _getViewportSize(): number;
  _getScrollSize(): number;
  _getCorrectedScrollSize(): number;
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
  elementsCount: number,
  itemSize: number | undefined,
  initialItemCount: number = 0,
  isReverse: boolean,
  onScrollStateChange: (scrolling: boolean) => void,
  onScrollOffsetChange: (offset: number) => void
): VirtualStore => {
  const shouldAutoEstimateItemSize = !itemSize;
  const initialItemSize = itemSize || 40;
  let viewportSize = initialItemSize * max(initialItemCount - 1, 0);
  let scrollOffset = 0;
  let jumpCount = 0;
  let jump: ScrollJump | undefined;
  let cache = resetCache(elementsCount, initialItemSize);
  let _scrollDirection: ScrollDirection = SCROLL_IDLE;
  let _resized = false;
  let _prevRange: ItemsRange = [0, initialItemCount];
  let _scrollToQueue: [() => void, () => void] | undefined;

  const subscribers = new Set<Subscriber>();
  const getScrollSize = (): number =>
    computeTotalSize(cache as Writeable<Cache>);
  const getScrollOffsetMax = () => getScrollSize() - viewportSize;

  const flushIsJustResized = (): boolean => {
    const prev = _resized;
    _resized = false;
    return prev;
  };
  const updateScrollDirection = (dir: ScrollDirection): boolean | undefined => {
    const prev = _scrollDirection;
    _scrollDirection = dir;
    if (_scrollDirection === SCROLL_IDLE) {
      return false;
    } else if (
      prev === SCROLL_IDLE &&
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
        max(0, startIndex - 2),
        min(cache._length - 1, startIndex + 2)
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
    _getItemLength() {
      return cache._length;
    },
    _getScrollOffset() {
      return scrollOffset;
    },
    _getScrollOffsetMax: getScrollOffsetMax,
    _getViewportSize() {
      return viewportSize;
    },
    _getScrollSize: getScrollSize,
    _getCorrectedScrollSize() {
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
        let resolved: boolean | undefined = false;

        const resolveQueue = () => {
          if (resolved) return;
          resolved = true;
          resolve();
          _scrollToQueue = undefined;
        };
        _scrollToQueue = [resolveQueue, reject];

        // In some specific situation with VGrid, the promise never resolved so we cancel it if timed out.
        timeout(resolveQueue, 250);
      });
    },
    _subscribe(cb) {
      subscribers.add(cb);
      return () => {
        subscribers.delete(cb);
      };
    },
    _update(type, payload): void {
      let shouldSync: boolean | undefined;
      let updatedScrollState: boolean | undefined;
      let mutated = false;

      switch (type) {
        case ACTION_ITEM_RESIZE: {
          const updated = payload.filter(
            ([index, size]) => cache._sizes[index] !== size
          );
          // Skip if all items are cached and not updated
          if (!updated.length) {
            break;
          }

          let diff = 0;
          // Calculate jump
          if (_scrollDirection === SCROLL_UP) {
            diff = sumJumps(calculateJumps(cache, updated));
          } else if (_scrollDirection === SCROLL_MANUAL) {
            const allJumps = calculateJumps(cache, updated);
            const [startIndex] = _prevRange;

            if (scrollOffset === 0) {
              // Do nothing to stick to the start
            } else if (scrollOffset >= getScrollOffsetMax()) {
              // Keep end to stick to the end
              diff = sumJumps(allJumps);
            } else {
              // Keep start at mid
              diff = sumJumps(
                allJumps.filter(([, index]) => index < startIndex)
              );
            }
          } else {
            // Do nothing
          }

          if (diff) {
            jump = diff;
            jumpCount++;
          }

          // Update item sizes
          let isNewItemMeasured = false;
          updated.forEach(([index, size]) => {
            if (setItemSize(cache as Writeable<Cache>, index, size)) {
              isNewItemMeasured = true;
            }
          });

          // Estimate initial item size from measured sizes
          if (
            shouldAutoEstimateItemSize &&
            isNewItemMeasured &&
            // TODO support reverse scroll also
            !scrollOffset
          ) {
            estimateDefaultItemSize(cache as Writeable<Cache>);
          }

          _resized = shouldSync = mutated = true;
          break;
        }
        case ACTION_WINDOW_RESIZE: {
          mutated = viewportSize !== payload;
          viewportSize = payload;
          break;
        }
        case ACTION_SCROLL:
        case ACTION_MANUAL_SCROLL: {
          // Skip if offset is not changed
          if (scrollOffset === payload) {
            break;
          }

          if (type === ACTION_SCROLL) {
            // Skip scroll direction detection just after resizing because it may result in the opposite direction.
            // Scroll events are dispatched enough so it's ok to skip some of them.
            const isJustResized = flushIsJustResized();
            if (
              (_scrollDirection === SCROLL_IDLE || !isJustResized) &&
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
          mutated = true;
          break;
        }
        case ACTION_SCROLL_END: {
          updatedScrollState = updateScrollDirection(
            payload ? SCROLL_MANUAL : SCROLL_IDLE
          );
          break;
        }
      }

      if (mutated) {
        subscribers.forEach((cb) => {
          cb(shouldSync);
        });

        if (type === ACTION_SCROLL) {
          onScrollOffsetChange(scrollOffset);
        }
      }
      if (_scrollToQueue) {
        if (type === ACTION_ITEM_RESIZE) {
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
      cache = resetCache(length, initialItemSize, cache);
    },
  };
};
