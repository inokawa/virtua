import {
  initCache,
  getItemSize,
  computeTotalSize,
  computeOffset as computeStartOffset,
  Cache,
  UNCACHED,
  setItemSize,
  estimateDefaultItemSize,
  updateCacheLength,
  computeRange,
} from "./cache";
import { isIOSWebKit } from "./environment";
import type { CacheSnapshot, Writeable } from "./types";
import { abs, clamp, max, min } from "./utils";

type ViewportResize = [size: number, paddingStart: number, paddingEnd: number];

/** @internal */
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

/** @internal */
export const SCROLL_IDLE = 0;
/** @internal */
export const SCROLL_DOWN = 1;
/** @internal */
export const SCROLL_UP = 2;
/** @internal */
export type ScrollDirection =
  | typeof SCROLL_IDLE
  | typeof SCROLL_DOWN
  | typeof SCROLL_UP;

/** @internal */
export const ACTION_ITEM_RESIZE = 1;
/** @internal */
export const ACTION_VIEWPORT_RESIZE = 2;
/** @internal */
export const ACTION_ITEMS_LENGTH_CHANGE = 3;
/** @internal */
export const ACTION_SCROLL = 4;
/** @internal */
export const ACTION_SCROLL_END = 5;
/** @internal */
export const ACTION_MANUAL_SCROLL = 6;
/** @internal */
export const ACTION_BEFORE_MANUAL_SMOOTH_SCROLL = 7;

type Actions =
  | [type: typeof ACTION_ITEM_RESIZE, entries: ItemResize[]]
  | [type: typeof ACTION_VIEWPORT_RESIZE, size: ViewportResize]
  | [
      type: typeof ACTION_ITEMS_LENGTH_CHANGE,
      arg: [length: number, isShift?: boolean | undefined]
    ]
  | [type: typeof ACTION_SCROLL, offset: number]
  | [type: typeof ACTION_SCROLL_END, dummy?: void]
  | [type: typeof ACTION_MANUAL_SCROLL, dummy?: void]
  | [type: typeof ACTION_BEFORE_MANUAL_SMOOTH_SCROLL, offset: number];

type Subscriber = (sync?: boolean) => void;

/** @internal */
export const UPDATE_SCROLL_STATE = 0b0001;
/** @internal */
export const UPDATE_SIZE_STATE = 0b0010;
/** @internal */
export const UPDATE_SCROLL_WITH_EVENT = 0b0100;

/**
 * @internal
 */
export type VirtualStore = {
  _getCache(): CacheSnapshot;
  _getRange(): ItemsRange;
  _isUnmeasuredItem(index: number): boolean;
  _hasUnmeasuredItemsInSmoothScrollRange(): boolean;
  _getItemOffset(index: number): number;
  _getItemSize(index: number): number;
  _getItemsLength(): number;
  _getScrollOffset(): number;
  _getMaxScrollOffset(): number;
  _getScrollDirection(): ScrollDirection;
  _getViewportSize(): number;
  _getViewportPaddingStart(): number;
  _getTotalSize(): number;
  _getScrollSize(): number;
  _getJumpCount(): number;
  _flushJump(): number;
  _subscribe(target: number, cb: Subscriber): () => void;
  _update(...action: Actions): void;
};

/**
 * @internal
 */
export const createVirtualStore = (
  elementsCount: number,
  itemSize: number = 40,
  initialItemCount: number = 0,
  cache: Cache = initCache(elementsCount, itemSize),
  isReverse?: boolean,
  shouldAutoEstimateItemSize?: boolean
): VirtualStore => {
  let viewportSize = itemSize * max(initialItemCount - 1, 0);
  let paddingStart = 0;
  let paddingEnd = 0;
  let scrollOffset = 0;
  let jumpCount = 0;
  let jump = 0;
  let pendingJump = 0;
  let _scrollDirection: ScrollDirection = SCROLL_IDLE;
  let _isManualScrolling = false;
  let _smoothScrollRange: ItemsRange | null = null;
  let _maybeJumped = false;
  let _prevRange: ItemsRange = [0, initialItemCount];

  const subscribers = new Set<[number, Subscriber]>();
  const getScrollSize = (): number =>
    computeTotalSize(cache as Writeable<Cache>);
  const getMaxScrollOffset = () =>
    getScrollSize() - viewportSize + paddingStart + paddingEnd;

  const applyJump = (j: number) => {
    // In iOS WebKit browsers, updating scroll position will stop scrolling so it have to be deferred during scrolling.
    if (isIOSWebKit() && _scrollDirection !== SCROLL_IDLE) {
      pendingJump += j;
    } else {
      jump += j;
      jumpCount++;
    }
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
      if (_smoothScrollRange) {
        return [
          min(_prevRange[0], _smoothScrollRange[0]),
          max(_prevRange[1], _smoothScrollRange[1]),
        ];
      }
      return (_prevRange = computeRange(
        cache as Writeable<Cache>,
        scrollOffset + pendingJump + jump,
        _prevRange[0],
        viewportSize
      ));
    },
    _isUnmeasuredItem(index) {
      return cache._sizes[index] === UNCACHED;
    },
    _hasUnmeasuredItemsInSmoothScrollRange() {
      if (!_smoothScrollRange) return false;
      return cache._sizes
        .slice(
          max(0, _smoothScrollRange[0] - 1),
          min(cache._length - 1, _smoothScrollRange[1] + 1) + 1
        )
        .includes(UNCACHED);
    },
    _getItemOffset(index) {
      const offset =
        computeStartOffset(cache as Writeable<Cache>, index) - pendingJump;
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
    _getMaxScrollOffset: getMaxScrollOffset,
    _getScrollDirection() {
      return _scrollDirection;
    },
    _getViewportSize() {
      return viewportSize;
    },
    _getViewportPaddingStart() {
      return paddingStart;
    },
    _getTotalSize() {
      return max(getScrollSize(), viewportSize - paddingStart - paddingEnd);
    },
    _getScrollSize: getScrollSize,
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
      let shouldFlushPendingJump: boolean | undefined;
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
          // Should maintain visible position to minimize junks in appearance
          let diff = 0;

          if (scrollOffset === 0) {
            // Do nothing to stick to the start
          } else if (scrollOffset > getMaxScrollOffset() - SUBPIXEL_THRESHOLD) {
            // Keep end to stick to the end
            diff = calculateJump(cache, updated, true);
          } else {
            const [startIndex] = _prevRange;
            // Keep start at mid
            diff = calculateJump(
              cache,
              updated.filter(([index]) => index < startIndex)
            );
          }

          if (diff) {
            applyJump(diff);
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
          mutated = UPDATE_SIZE_STATE;
          _maybeJumped = shouldSync = true;
          break;
        }
        case ACTION_VIEWPORT_RESIZE: {
          const total = payload[0] + payload[1] + payload[2];
          if (viewportSize !== total) {
            viewportSize = total;
            paddingStart = payload[1];
            paddingEnd = payload[2];
            mutated = UPDATE_SIZE_STATE;
          }
          break;
        }
        case ACTION_ITEMS_LENGTH_CHANGE: {
          if (payload[1]) {
            // Calc distance before updating cache
            const distanceToEnd = getMaxScrollOffset() - scrollOffset;

            const [shift, isRemove] = updateCacheLength(
              cache as Writeable<Cache>,
              payload[0],
              true
            );
            applyJump(isRemove ? -min(shift, distanceToEnd) : shift);

            mutated = UPDATE_SCROLL_STATE;
          } else {
            updateCacheLength(cache as Writeable<Cache>, payload[0]);
          }
          break;
        }
        case ACTION_SCROLL: {
          // Scroll offset may exceed min or max especially in Safari's elastic scrolling.
          const nextScrollOffset = clamp(payload, 0, getMaxScrollOffset());
          // Skip if offset is not changed
          if (nextScrollOffset === scrollOffset) {
            break;
          }

          const delta = nextScrollOffset - scrollOffset;
          // Scrolling after resizing will be caused by jump compensation
          const isJustJumped = _maybeJumped;
          _maybeJumped = false;

          // Skip scroll direction detection just after resizing because it may result in the opposite direction.
          // Scroll events are dispatched enough so it's ok to skip some of them.
          if (
            (_scrollDirection === SCROLL_IDLE || !isJustJumped) &&
            // Ignore until manual scrolling
            !_isManualScrolling
          ) {
            updateScrollDirection(delta < 0 ? SCROLL_UP : SCROLL_DOWN);
          }

          // TODO This will cause glitch in reverse infinite scrolling. Disable this until better solution is found.
          // if (
          //   pendingJump &&
          //   ((_scrollDirection === SCROLL_UP &&
          //     payload - max(pendingJump, 0) <= 0) ||
          //     (_scrollDirection === SCROLL_DOWN &&
          //       payload - min(pendingJump, 0) >= getScrollOffsetMax()))
          // ) {
          //   // Flush if almost reached to start or end
          //   shouldFlushPendingJump = true;
          // }

          // Update synchronously if scrolled a lot
          shouldSync = abs(delta) > viewportSize;

          scrollOffset = nextScrollOffset;
          mutated = UPDATE_SCROLL_STATE + UPDATE_SCROLL_WITH_EVENT;
          break;
        }
        case ACTION_SCROLL_END: {
          if (updateScrollDirection(SCROLL_IDLE)) {
            shouldFlushPendingJump = true;
            mutated = UPDATE_SCROLL_STATE;
          }
          _isManualScrolling = false;
          _smoothScrollRange = null;
          break;
        }
        case ACTION_MANUAL_SCROLL: {
          _isManualScrolling = true;
          break;
        }
        case ACTION_BEFORE_MANUAL_SMOOTH_SCROLL: {
          _smoothScrollRange = computeRange(
            cache as Writeable<Cache>,
            payload,
            _prevRange[0],
            viewportSize
          );
          mutated = UPDATE_SCROLL_STATE;
          break;
        }
      }

      if (mutated) {
        if (shouldFlushPendingJump && pendingJump) {
          _maybeJumped = true;
          jump += pendingJump;
          pendingJump = 0;
          jumpCount++;
        }

        subscribers.forEach(([target, cb]) => {
          // Early return to skip React's computation
          if (!(mutated & target)) {
            return;
          }
          // https://github.com/facebook/react/issues/25191
          // https://github.com/facebook/react/blob/a5fc797db14c6e05d4d5c4dbb22a0dd70d41f5d5/packages/react-reconciler/src/ReactFiberWorkLoop.js#L1443-L1447
          cb(shouldSync);
        });
      }
    },
  };
};
