import {
  findStartIndexWithOffset,
  initCache,
  getItemSize,
  computeTotalSize,
  findIndex as findEndIndex,
  computeStartOffset,
  Cache,
  UNCACHED,
  setItemSize,
  hasUnmeasuredItemsInRange,
  estimateDefaultItemSize,
  updateCache,
} from "./cache";
import type { CacheSnapshot, Writeable } from "./types";
import { abs, max, min } from "./utils";

export type ScrollJump = Readonly<number>;
export type ItemResize = Readonly<[index: number, size: number]>;
type ItemsRange = Readonly<[startIndex: number, endIndex: number]>;

const calculateJump = (cache: Cache, items: readonly ItemResize[]): number => {
  return items.reduce((acc, [index, size]) => {
    return acc + (size - getItemSize(cache, index));
  }, 0);
};

// Scroll offset and sizes can have sub-pixel value if window.devicePixelRatio has decimal value
const SUBPIXEL_THRESHOLD = 1.5; // 0.5 * 3

export const SCROLL_IDLE = 0;
export const SCROLL_DOWN = 1;
export const SCROLL_UP = 2;
type ScrollDirection =
  | typeof SCROLL_IDLE
  | typeof SCROLL_DOWN
  | typeof SCROLL_UP;

export const ACTION_ITEM_RESIZE = 1;
export const ACTION_WINDOW_RESIZE = 2;
export const ACTION_SCROLL = 3;
export const ACTION_BEFORE_MANUAL_SCROLL = 4;
export const ACTION_SCROLL_END = 5;
export const ACTION_MANUAL_SCROLL = 6;

type Actions =
  | [type: typeof ACTION_ITEM_RESIZE, entries: ItemResize[]]
  | [type: typeof ACTION_WINDOW_RESIZE, size: number]
  | [type: typeof ACTION_SCROLL, offset: number]
  | [type: typeof ACTION_BEFORE_MANUAL_SCROLL, offset: number]
  | [type: typeof ACTION_SCROLL_END, dummy?: void]
  | [type: typeof ACTION_MANUAL_SCROLL, dummy?: void];

type Subscriber = (sync?: boolean) => void;

export const UPDATE_SCROLL = 0b00001;
export const UPDATE_SIZE = 0b00010;
export const UPDATE_JUMP = 0b00100;
export const UPDATE_IS_SCROLLING = 0b01000;
export const UPDATE_SCROLL_WITH_EVENT = 0b10000;

export type VirtualStore = {
  _getCache(): CacheSnapshot;
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
  _flushJump(): ScrollJump;
  _getItemIndexForScrollTo(offset: number): number;
  _subscribe(target: number, cb: Subscriber): () => void;
  _update(...action: Actions): void;
  _getIsScrolling(): boolean;
  _updateCacheLength(length: number): void;
};

export const createVirtualStore = (
  elementsCount: number,
  itemSize: number = 40,
  initialItemCount: number = 0,
  cache: Cache = initCache(elementsCount, itemSize),
  isReverse?: boolean,
  shouldAutoEstimateItemSize?: boolean
): VirtualStore => {
  let viewportSize = itemSize * max(initialItemCount - 1, 0);
  let scrollOffset = 0;
  let jumpCount = 0;
  let jump: ScrollJump = 0;
  let _scrollDirection: ScrollDirection = SCROLL_IDLE;
  let _isManualScrolling = false;
  let _resized = false;
  let _prevRange: ItemsRange = [0, initialItemCount];

  const subscribers = new Set<[number, Subscriber]>();
  const getScrollSize = (): number =>
    computeTotalSize(cache as Writeable<Cache>);
  const getScrollOffsetMax = () => getScrollSize() - viewportSize;

  const updateScrollDirection = (dir: ScrollDirection): boolean => {
    const prev = _scrollDirection;
    _scrollDirection = dir;
    if (
      _scrollDirection !== prev &&
      (_scrollDirection === SCROLL_IDLE || prev === SCROLL_IDLE)
    ) {
      return true;
    }
    return false;
  };

  return {
    _getCache() {
      return JSON.parse(JSON.stringify(cache)) as unknown as CacheSnapshot;
    },
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
      jump = 0;
      return prevJump;
    },
    _getItemIndexForScrollTo(offset) {
      return findStartIndexWithOffset(cache, offset, 0, 0);
    },
    _subscribe(target, cb) {
      const sub: [number, Subscriber] = [target, cb];
      subscribers.add(sub);
      return () => {
        subscribers.delete(sub);
      };
    },
    _update(type, payload): void {
      let shouldSync: boolean | undefined;
      let mutated = 0;

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
            diff = calculateJump(cache, updated);
          } else if (_isManualScrolling) {
            const [startIndex] = _prevRange;

            if (scrollOffset === 0) {
              // Do nothing to stick to the start
            } else if (
              scrollOffset >
              getScrollOffsetMax() - SUBPIXEL_THRESHOLD
            ) {
              // Keep end to stick to the end
              diff = calculateJump(cache, updated);
            } else {
              // Keep start at mid
              diff = calculateJump(
                cache,
                updated.filter(([index]) => index < startIndex)
              );
            }
          } else {
            // Do nothing
          }

          if (diff) {
            jump = diff;
            jumpCount++;
            mutated += UPDATE_JUMP;
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
          mutated += UPDATE_SIZE;
          _resized = shouldSync = true;
          break;
        }
        case ACTION_WINDOW_RESIZE: {
          if (viewportSize !== payload) {
            viewportSize = payload;
            mutated = UPDATE_SIZE;
          }
          break;
        }
        case ACTION_SCROLL:
        case ACTION_BEFORE_MANUAL_SCROLL: {
          // Skip if offset is not changed
          if (scrollOffset === payload) {
            break;
          }

          if (type === ACTION_SCROLL) {
            // Skip scroll direction detection just after resizing because it may result in the opposite direction.
            // Scroll events are dispatched enough so it's ok to skip some of them.
            const isJustResized = _resized;
            _resized = false;
            if (
              (_scrollDirection === SCROLL_IDLE || !isJustResized) &&
              // Ignore until manual scrolling
              !_isManualScrolling
            ) {
              if (
                updateScrollDirection(
                  scrollOffset > payload ? SCROLL_UP : SCROLL_DOWN
                )
              ) {
                mutated += UPDATE_IS_SCROLLING;
              }
            }

            // Ignore manual scroll because it may be called in useEffect/useLayoutEffect and cause the warn below.
            // Warning: flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task.
            //
            // Update synchronously if scrolled a lot
            shouldSync = abs(scrollOffset - payload) > viewportSize;

            mutated += UPDATE_SCROLL_WITH_EVENT;
          }

          // Scroll offset may exceed min or max especially in Safari's elastic scrolling.
          scrollOffset = max(0, min(getScrollOffsetMax(), payload));
          mutated += UPDATE_SCROLL;
          break;
        }
        case ACTION_SCROLL_END: {
          if (updateScrollDirection(SCROLL_IDLE)) {
            mutated = UPDATE_IS_SCROLLING;
          }
          _isManualScrolling = false;
          break;
        }
        case ACTION_MANUAL_SCROLL: {
          _isManualScrolling = true;
          break;
        }
      }

      if (mutated) {
        subscribers.forEach(([target, cb]) => {
          // Early return to skip React's computation
          if (!(mutated & target)) {
            return;
          }
          cb(shouldSync);
        });
      }
    },
    _getIsScrolling() {
      return _scrollDirection !== SCROLL_IDLE;
    },
    _updateCacheLength(length) {
      // It's ok to be updated in render because states should be calculated consistently regardless cache length
      if (cache._length === length) return;
      updateCache(cache as Writeable<Cache>, length);
    },
  };
};
