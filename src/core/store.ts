import {
  initCache,
  getItemSize,
  computeTotalSize,
  computeOffset as computeStartOffset,
  Cache,
  UNCACHED,
  setItemSize,
  hasUnmeasuredItemsInRange,
  estimateDefaultItemSize,
  updateCacheLength,
  computeRange,
} from "./cache";
import type { CacheSnapshot, Writeable } from "./types";
import { abs, clamp, max, min } from "./utils";

export type ScrollJump = Readonly<number>;
export type ItemResize = Readonly<[index: number, size: number]>;
type ItemsRange = Readonly<[startIndex: number, endIndex: number]>;

const calculateJump = (
  cache: Cache,
  items: readonly ItemResize[],
  keepEnd?: boolean
): number => {
  return items.reduce((acc, [index, size]) => {
    const diff = size - getItemSize(cache, index);
    if (!keepEnd || diff > 0) {
      acc += diff;
    }
    return acc;
  }, 0);
};

// Scroll offset and sizes can have sub-pixel value if window.devicePixelRatio has decimal value
const SUBPIXEL_THRESHOLD = 1.5; // 0.5 * 3

export const SCROLL_IDLE = 0;
export const SCROLL_DOWN = 1;
export const SCROLL_UP = 2;
export type ScrollDirection =
  | typeof SCROLL_IDLE
  | typeof SCROLL_DOWN
  | typeof SCROLL_UP;

export const ACTION_ITEM_RESIZE = 1;
export const ACTION_VIEWPORT_RESIZE = 2;
export const ACTION_ITEMS_LENGTH_CHANGE = 3;
export const ACTION_SCROLL = 4;
export const ACTION_BEFORE_MANUAL_SCROLL = 5;
export const ACTION_SCROLL_END = 6;
export const ACTION_MANUAL_SCROLL = 7;

type Actions =
  | [type: typeof ACTION_ITEM_RESIZE, entries: ItemResize[]]
  | [type: typeof ACTION_VIEWPORT_RESIZE, size: number]
  | [
      type: typeof ACTION_ITEMS_LENGTH_CHANGE,
      arg: [length: number, isShift?: boolean | undefined]
    ]
  | [type: typeof ACTION_SCROLL, offset: number]
  | [type: typeof ACTION_BEFORE_MANUAL_SCROLL, offset: number]
  | [type: typeof ACTION_SCROLL_END, dummy?: void]
  | [type: typeof ACTION_MANUAL_SCROLL, dummy?: void];

type Subscriber = () => void;

export const UPDATE_SCROLL = 0b00001;
export const UPDATE_SIZE = 0b00010;
export const UPDATE_JUMP = 0b00100;
export const UPDATE_SCROLL_DIRECTION = 0b01000;
export const UPDATE_SCROLL_WITH_EVENT = 0b10000;

export type VirtualStore = {
  _getCache(): CacheSnapshot;
  _getRange(): ItemsRange;
  _isUnmeasuredItem(index: number): boolean;
  _hasUnmeasuredItemsInTargetViewport(offset: number): boolean;
  _getItemOffset(index: number): number;
  _getItemSize(index: number): number;
  _getItemsLength(): number;
  _getScrollOffset(): number;
  _getScrollOffsetMax(): number;
  _getScrollDirection(): ScrollDirection;
  _getViewportSize(): number;
  _getCorrectedScrollSize(): number;
  _getJumpCount(): number;
  _flushJump(): ScrollJump;
  _subscribe(target: number, cb: Subscriber): () => void;
  _update(...action: Actions): void;
};

export const createVirtualStore = (
  flushSync: (cb: () => void) => void,
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
  let _isShifting = false;
  let _isManualScrolling = false;
  let _resized = false;
  let _prevRange: ItemsRange = [0, initialItemCount];

  const subscribers = new Set<[number, Subscriber]>();
  const getScrollSize = (): number =>
    computeTotalSize(cache as Writeable<Cache>);
  const getScrollOffsetMax = () => getScrollSize() - viewportSize;

  const clampScrollOffset = (value: number): number => {
    // Scroll offset may exceed min or max especially in Safari's elastic scrolling.
    return clamp(value, 0, getScrollOffsetMax());
  };
  const updateScrollDirection = (dir: ScrollDirection): boolean => {
    const prev = _scrollDirection;
    _scrollDirection = dir;
    // Return true if scrolling is just started or stopped
    return _scrollDirection !== prev;
  };

  return {
    _getCache() {
      return JSON.parse(JSON.stringify(cache)) as unknown as CacheSnapshot;
    },
    _getRange() {
      const [prevStartIndex, prevEndIndex] = _prevRange;
      const [start, end] = computeRange(
        cache as Writeable<Cache>,
        scrollOffset,
        prevStartIndex,
        viewportSize
      );
      if (prevStartIndex === start && prevEndIndex === end) {
        return _prevRange;
      }
      return (_prevRange = [start, end]);
    },
    _isUnmeasuredItem(index) {
      return cache._sizes[index] === UNCACHED;
    },
    _hasUnmeasuredItemsInTargetViewport(offset) {
      const [startIndex, endIndex] = computeRange(
        cache as Writeable<Cache>,
        offset,
        _prevRange[0], // TODO binary search may be better here
        viewportSize
      );
      return hasUnmeasuredItemsInRange(cache, startIndex, endIndex);
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
    _getItemsLength() {
      return cache._length;
    },
    _getScrollOffset() {
      return scrollOffset;
    },
    _getScrollOffsetMax: getScrollOffsetMax,
    _getScrollDirection() {
      return _scrollDirection;
    },
    _getViewportSize() {
      return viewportSize;
    },
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

          // Calculate jump
          let diff = 0;
          if (_isShifting || _isManualScrolling) {
            // Should maintain visible position under specific situations
            const [startIndex] = _prevRange;

            if (scrollOffset === 0) {
              // Do nothing to stick to the start
            } else if (
              scrollOffset >
              getScrollOffsetMax() - SUBPIXEL_THRESHOLD
            ) {
              // Keep end to stick to the end
              diff = calculateJump(cache, updated, true);
            } else {
              // Keep start at mid
              diff = calculateJump(
                cache,
                updated.filter(([index]) => index < startIndex)
              );
            }
          } else if (_scrollDirection === SCROLL_UP) {
            // We can assume jumps occurred on the upper outside during reverse scrolling
            diff = calculateJump(cache, updated);
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
        case ACTION_VIEWPORT_RESIZE: {
          if (viewportSize !== payload) {
            viewportSize = payload;
            mutated = UPDATE_SIZE;
          }
          break;
        }
        case ACTION_ITEMS_LENGTH_CHANGE: {
          if (payload[1]) {
            // Calc distance before updating cache
            const distanceToEnd = getScrollOffsetMax() - scrollOffset;

            const [shift, isRemove] = updateCacheLength(
              cache as Writeable<Cache>,
              payload[0],
              true
            );
            const diff = isRemove ? -min(shift, distanceToEnd) : shift;
            jump += diff;
            scrollOffset = clampScrollOffset(scrollOffset + diff);
            jumpCount++;

            mutated = UPDATE_SCROLL + UPDATE_JUMP;
            _isShifting = true;
          } else {
            updateCacheLength(cache as Writeable<Cache>, payload[0]);
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
            const delta = payload - scrollOffset;
            // Scrolling after resizing will be caused by jump compensation
            const isJustResized = _resized;
            _resized = false;

            // Skip scroll direction detection just after resizing because it may result in the opposite direction.
            // Scroll events are dispatched enough so it's ok to skip some of them.
            if (
              (_scrollDirection === SCROLL_IDLE || !isJustResized) &&
              // Ignore until manual scrolling
              !_isManualScrolling
            ) {
              if (updateScrollDirection(delta < 0 ? SCROLL_UP : SCROLL_DOWN)) {
                mutated += UPDATE_SCROLL_DIRECTION;
              }
            }

            // Ignore manual scroll because it may be called in useEffect/useLayoutEffect and cause the warn below.
            // Warning: flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task.
            //
            // Update synchronously if scrolled a lot
            shouldSync = abs(delta) > viewportSize;

            mutated += UPDATE_SCROLL_WITH_EVENT;

            if (!isJustResized) {
              _isShifting = false;
            }
          }

          scrollOffset = clampScrollOffset(payload);
          mutated += UPDATE_SCROLL;
          break;
        }
        case ACTION_SCROLL_END: {
          if (updateScrollDirection(SCROLL_IDLE)) {
            mutated = UPDATE_SCROLL_DIRECTION;
          }
          _isShifting = _isManualScrolling = false;
          break;
        }
        case ACTION_MANUAL_SCROLL: {
          _isManualScrolling = true;
          break;
        }
      }

      if (mutated) {
        const update = () => {
          subscribers.forEach(([target, cb]) => {
            // Early return to skip React's computation
            if (!(mutated & target)) {
              return;
            }
            cb();
          });
        };
        if (shouldSync) {
          // https://github.com/facebook/react/issues/25191
          // https://github.com/facebook/react/blob/a5fc797db14c6e05d4d5c4dbb22a0dd70d41f5d5/packages/react-reconciler/src/ReactFiberWorkLoop.js#L1443-L1447
          flushSync(update);
        } else {
          update();
        }
      }
    },
  };
};
