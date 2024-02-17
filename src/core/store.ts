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
import type { CacheSnapshot, ItemResize, ItemsRange } from "./types";
import { abs, clamp, max, min } from "./utils";

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

const SCROLL_BY_NATIVE = 0;
const SCROLL_BY_MANUAL_SCROLL = 1;
const SCROLL_BY_SHIFT = 2;
type ScrollMode =
  | typeof SCROLL_BY_NATIVE
  | typeof SCROLL_BY_MANUAL_SCROLL
  | typeof SCROLL_BY_SHIFT;

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
  | [type: typeof ACTION_VIEWPORT_RESIZE, size: number]
  | [
      type: typeof ACTION_ITEMS_LENGTH_CHANGE,
      arg: [length: number, isShift?: boolean | undefined]
    ]
  | [type: typeof ACTION_SCROLL, offset: number]
  | [type: typeof ACTION_SCROLL_END, dummy?: void]
  | [type: typeof ACTION_MANUAL_SCROLL, dummy?: void]
  | [type: typeof ACTION_BEFORE_MANUAL_SMOOTH_SCROLL, offset: number];

/** @internal */
export const UPDATE_SCROLL_STATE = 0b0001;
/** @internal */
export const UPDATE_SIZE_STATE = 0b0010;
/** @internal */
export const UPDATE_SCROLL_EVENT = 0b0100;
/** @internal */
export const UPDATE_SCROLL_END_EVENT = 0b1000;

/**
 * @internal
 */
export const getScrollSize = (store: VirtualStore): number => {
  return max(store._getTotalSize(), store._getViewportSize());
};

/**
 * @internal
 */
export const getOverscanedRange = (
  startIndex: number,
  endIndex: number,
  overscan: number,
  scrollDirection: ScrollDirection,
  count: number
): ItemsRange => {
  if (scrollDirection !== SCROLL_DOWN) {
    startIndex -= max(0, overscan);
  }
  if (scrollDirection !== SCROLL_UP) {
    endIndex += max(0, overscan);
  }
  return [max(startIndex, 0), min(endIndex, count - 1)];
};

type Subscriber = (sync?: boolean) => void;

type StateVersion = readonly [];

/**
 * @internal
 */
export type VirtualStore = {
  _getStateVersion(): StateVersion;
  _getCacheSnapshot(): CacheSnapshot;
  _getRange(): ItemsRange;
  _isUnmeasuredItem(index: number): boolean;
  _hasUnmeasuredItemsInFrozenRange(): boolean;
  _getItemOffset(index: number): number;
  _getItemSize(index: number): number;
  _getItemsLength(): number;
  _getScrollOffset(): number;
  _getScrollDirection(): ScrollDirection;
  _getViewportSize(): number;
  _getStartSpacerSize(): number;
  _getTotalSize(): number;
  _getJumpCount(): number;
  _flushJump(): [number, boolean];
  _subscribe(target: number, cb: Subscriber): () => void;
  _update(...action: Actions): void;
};

/**
 * @internal
 */
export const createVirtualStore = (
  elementsCount: number,
  itemSize: number = 40,
  ssrCount: number = 0,
  cacheSnapshot?: CacheSnapshot | undefined,
  shouldAutoEstimateItemSize: boolean = false,
  startSpacerSize: number = 0,
  endSpacerSize: number = 0
): VirtualStore => {
  let isSSR = !!ssrCount;
  let stateVersion: StateVersion = [];
  let viewportSize = 0;
  let scrollOffset = 0;
  let jumpCount = 0;
  let jump = 0;
  let pendingJump = 0;
  let isJumpByShift = false;
  let _flushedJump = 0;
  let _scrollDirection: ScrollDirection = SCROLL_IDLE;
  let _scrollMode: ScrollMode = SCROLL_BY_NATIVE;
  let _frozenRange: ItemsRange | null = isSSR
    ? [0, max(ssrCount - 1, 0)]
    : null;
  let _prevRange: ItemsRange = [0, 0];
  let _totalMeasuredSize = 0;

  const cache =
    (cacheSnapshot as Cache | undefined) || initCache(elementsCount, itemSize);
  const subscribers = new Set<[number, Subscriber]>();
  const getTotalSize = (): number => computeTotalSize(cache);
  const getScrollableSize = (): number =>
    getTotalSize() + startSpacerSize + endSpacerSize;
  const getRelativeScrollOffset = (): number => scrollOffset - startSpacerSize;
  const getMaxScrollOffset = (): number =>
    // total size can become smaller than viewport size
    max(0, getScrollableSize() - viewportSize);
  const getItemOffset = (index: number): number => {
    return computeStartOffset(cache, index) - pendingJump;
  };

  const applyJump = (j: number) => {
    if (j) {
      // In iOS WebKit browsers, updating scroll position will stop scrolling so it have to be deferred during scrolling.
      if (isIOSWebKit() && _scrollDirection !== SCROLL_IDLE) {
        pendingJump += j;
      } else {
        jump += j;
        jumpCount++;
      }
    }
  };

  return {
    _getStateVersion() {
      return stateVersion;
    },
    _getCacheSnapshot() {
      return JSON.parse(JSON.stringify(cache)) as unknown as CacheSnapshot;
    },
    _getRange() {
      if (_frozenRange) {
        return [
          min(_prevRange[0], _frozenRange[0]),
          max(_prevRange[1], _frozenRange[1]),
        ];
      }
      // Return previous range for consistent render until next scroll event comes in.
      if (_flushedJump) {
        return _prevRange;
      }
      return (_prevRange = computeRange(
        cache,
        getRelativeScrollOffset() + pendingJump + jump,
        _prevRange[0],
        viewportSize
      ));
    },
    _isUnmeasuredItem(index) {
      return cache._sizes[index] === UNCACHED;
    },
    _hasUnmeasuredItemsInFrozenRange() {
      if (!_frozenRange) return false;
      return cache._sizes
        .slice(
          max(0, _frozenRange[0] - 1),
          min(cache._length - 1, _frozenRange[1] + 1) + 1
        )
        .includes(UNCACHED);
    },
    _getItemOffset: getItemOffset,
    _getItemSize(index) {
      return getItemSize(cache, index);
    },
    _getItemsLength() {
      return cache._length;
    },
    _getScrollOffset() {
      return scrollOffset;
    },
    _getScrollDirection() {
      return _scrollDirection;
    },
    _getViewportSize() {
      return viewportSize;
    },
    _getStartSpacerSize() {
      return startSpacerSize;
    },
    _getTotalSize: getTotalSize,
    _getJumpCount() {
      return jumpCount;
    },
    _flushJump() {
      const flushedJump = jump;
      const flushedIsJumpByShift = isJumpByShift;
      jump = 0;
      isJumpByShift = false;
      if (viewportSize > getScrollableSize()) {
        // In this case applying jump will not cause scroll.
        // Current logic expects scroll event occurs after applying jump so discard it.
        return [0, false];
      } else {
        return [(_flushedJump = flushedJump), flushedIsJumpByShift];
      }
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

          let shouldKeepStart = false;
          let shouldStickToEnd = false;
          if (_scrollMode === SCROLL_BY_SHIFT) {
            if (scrollOffset > getMaxScrollOffset() - SUBPIXEL_THRESHOLD) {
              // Keep end to stick to the end
              shouldStickToEnd = true;
            } else {
              // Keep distance from end immediately after prepending
              // We can assume jumps occurred on the upper outside
            }
          } else {
            // Keep start at mid
            shouldKeepStart = true;
          }

          // Calculate jump
          // Should maintain visible position to minimize junks in appearance
          applyJump(
            updated.reduce((acc, [index, size]) => {
              if (
                !shouldKeepStart ||
                (_frozenRange
                  ? // https://github.com/inokawa/virtua/issues/380
                    index < _frozenRange[0]
                  : getItemOffset(index) < scrollOffset)
              ) {
                const diff = size - getItemSize(cache, index);
                if (!shouldStickToEnd || diff > 0) {
                  acc += diff;
                }
              }
              return acc;
            }, 0)
          );

          // Update item sizes
          for (const [index, size] of updated) {
            const prevSize = getItemSize(cache, index);
            const isInitialMeasurement = setItemSize(cache, index, size);

            if (shouldAutoEstimateItemSize) {
              _totalMeasuredSize += size;
              if (!isInitialMeasurement) {
                _totalMeasuredSize -= prevSize;
              }
            }
          }

          // Estimate initial item size from measured sizes
          if (
            shouldAutoEstimateItemSize &&
            viewportSize &&
            // If the total size is lower than the viewport, the item may be a empty state
            _totalMeasuredSize > viewportSize
          ) {
            applyJump(estimateDefaultItemSize(cache, _prevRange[0]));
            shouldAutoEstimateItemSize = false;
          }

          mutated = UPDATE_SIZE_STATE;

          // Synchronous update is necessary in current design to minimize visible glitch in concurrent rendering.
          // However in React, synchronous update with flushSync after asynchronous update will overtake the asynchronous one.
          // If items resize happens just after scroll, race condition can occur depending on implementation.
          shouldSync = true;
          break;
        }
        case ACTION_VIEWPORT_RESIZE: {
          if (viewportSize !== payload) {
            viewportSize = payload;
            mutated = UPDATE_SIZE_STATE;
          }
          break;
        }
        case ACTION_ITEMS_LENGTH_CHANGE: {
          if (payload[1]) {
            applyJump(updateCacheLength(cache, payload[0], true));
            _scrollMode = SCROLL_BY_SHIFT;
            isJumpByShift = true;
            mutated = UPDATE_SCROLL_STATE;
          } else {
            updateCacheLength(cache, payload[0]);
          }
          break;
        }
        case ACTION_SCROLL: {
          // Scroll offset may exceed min or max especially in Safari's elastic scrolling.
          const nextScrollOffset = clamp(payload, 0, getMaxScrollOffset());
          const flushedJump = _flushedJump;
          _flushedJump = 0;
          // Skip if offset is not changed
          if (nextScrollOffset === scrollOffset) {
            break;
          }

          const delta = nextScrollOffset - scrollOffset;
          const distance = abs(delta);

          // Scroll event after jump compensation is not reliable because it may result in the opposite direction.
          // The delta of artificial scroll may not be equal with the jump because it may be batched with other scrolls.
          // And at least in latest Chrome/Firefox/Safari in 2023, setting value to scrollTop/scrollLeft can lose subpixel because its integer (sometimes float probably depending on dpr).
          const isJustJumped = flushedJump && distance < abs(flushedJump) + 1;

          // Scroll events are dispatched enough so it's ok to skip some of them.
          if (
            !isJustJumped &&
            // Ignore until manual scrolling
            _scrollMode === SCROLL_BY_NATIVE
          ) {
            _scrollDirection = delta < 0 ? SCROLL_UP : SCROLL_DOWN;
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

          if (isSSR) {
            _frozenRange = null;
            isSSR = false;
          }

          // Update synchronously if scrolled a lot
          shouldSync = distance > viewportSize;

          scrollOffset = nextScrollOffset;
          mutated = UPDATE_SCROLL_STATE + UPDATE_SCROLL_EVENT;
          break;
        }
        case ACTION_SCROLL_END: {
          mutated = UPDATE_SCROLL_END_EVENT;
          if (_scrollDirection !== SCROLL_IDLE) {
            shouldFlushPendingJump = true;
            mutated += UPDATE_SCROLL_STATE;
          }
          _scrollDirection = SCROLL_IDLE;
          _scrollMode = SCROLL_BY_NATIVE;
          _frozenRange = null;
          break;
        }
        case ACTION_MANUAL_SCROLL: {
          _scrollMode = SCROLL_BY_MANUAL_SCROLL;
          break;
        }
        case ACTION_BEFORE_MANUAL_SMOOTH_SCROLL: {
          _frozenRange = computeRange(
            cache,
            payload,
            _prevRange[0],
            viewportSize
          );
          mutated = UPDATE_SCROLL_STATE;
          break;
        }
      }

      if (mutated) {
        stateVersion = [];

        if (shouldFlushPendingJump && pendingJump) {
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
