import {
  initCache,
  getItemSize as _getItemSize,
  computeTotalSize,
  computeOffset as computeStartOffset,
  UNCACHED,
  setItemSize,
  estimateDefaultItemSize,
  updateCacheLength,
  computeRange,
  takeCacheSnapshot,
} from "./cache";
import { isIOSWebKit } from "./environment";
import type {
  CacheSnapshot,
  InternalCacheSnapshot,
  ItemResize,
  ItemsRange,
} from "./types";
import { abs, max, min } from "./utils";

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
export const ACTION_SCROLL = 1;
/** @internal */
export const ACTION_SCROLL_END = 2;
/** @internal */
export const ACTION_ITEM_RESIZE = 3;
/** @internal */
export const ACTION_VIEWPORT_RESIZE = 4;
/** @internal */
export const ACTION_ITEMS_LENGTH_CHANGE = 5;
/** @internal */
export const ACTION_START_OFFSET_CHANGE = 6;
/** @internal */
export const ACTION_MANUAL_SCROLL = 7;
/** @internal */
export const ACTION_BEFORE_MANUAL_SMOOTH_SCROLL = 8;

type Actions =
  | [type: typeof ACTION_SCROLL, offset: number]
  | [type: typeof ACTION_SCROLL_END, dummy?: void]
  | [type: typeof ACTION_ITEM_RESIZE, entries: ItemResize[]]
  | [type: typeof ACTION_VIEWPORT_RESIZE, size: number]
  | [
      type: typeof ACTION_ITEMS_LENGTH_CHANGE,
      arg: [length: number, isShift?: boolean | undefined],
    ]
  | [type: typeof ACTION_START_OFFSET_CHANGE, offset: number]
  | [type: typeof ACTION_MANUAL_SCROLL, dummy?: void]
  | [type: typeof ACTION_BEFORE_MANUAL_SMOOTH_SCROLL, offset: number];

/** @internal */
export const UPDATE_VIRTUAL_STATE = 0b0001;
/** @internal */
export const UPDATE_SIZE_EVENT = 0b0010;
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

/** @internal */
export type StateVersion = readonly [];

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
  shouldAutoEstimateItemSize: boolean = false
): VirtualStore => {
  let isSSR = !!ssrCount;
  let stateVersion: StateVersion = [];
  let viewportSize = 0;
  let startSpacerSize = 0;
  let scrollOffset = 0;
  let jumpCount = 0;
  let jump = 0;
  let pendingJump = 0;
  let _flushedJump = 0;
  let _scrollDirection: ScrollDirection = SCROLL_IDLE;
  let _scrollMode: ScrollMode = SCROLL_BY_NATIVE;
  let _frozenRange: ItemsRange | null = isSSR
    ? [0, max(ssrCount - 1, 0)]
    : null;
  let _prevRange: ItemsRange = [0, 0];
  let _totalMeasuredSize = 0;

  const cache = initCache(
    elementsCount,
    itemSize,
    cacheSnapshot as unknown as InternalCacheSnapshot | undefined
  );
  const subscribers = new Set<[number, Subscriber]>();
  const getRelativeScrollOffset = () => scrollOffset - startSpacerSize;
  const getRange = (offset: number) => {
    return computeRange(cache, offset, _prevRange[0], viewportSize);
  };
  const getTotalSize = (): number => computeTotalSize(cache);
  const getItemOffset = (index: number): number => {
    return computeStartOffset(cache, index) - pendingJump;
  };
  const getItemSize = (index: number): number => {
    return _getItemSize(cache, index);
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
      return takeCacheSnapshot(cache) as unknown as CacheSnapshot;
    },
    _getRange() {
      // Return previous range for consistent render until next scroll event comes in.
      if (_flushedJump) {
        return _prevRange;
      }
      _prevRange = getRange(
        max(0, getRelativeScrollOffset() + pendingJump + jump)
      );

      if (_frozenRange) {
        return [
          min(_prevRange[0], _frozenRange[0]),
          max(_prevRange[1], _frozenRange[1]),
        ];
      }
      return _prevRange;
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
    _getItemSize: getItemSize,
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
      _flushedJump = jump;
      jump = 0;
      return [
        _flushedJump,
        // Use absolute position not to exceed scrollable bounds
        _scrollMode === SCROLL_BY_SHIFT,
      ];
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
        case ACTION_SCROLL: {
          const flushedJump = _flushedJump;
          _flushedJump = 0;

          const delta = payload - scrollOffset;
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

          scrollOffset = payload;
          mutated = UPDATE_SCROLL_EVENT;

          // Skip if offset is not changed
          // Scroll offset may exceed min or max especially in Safari's elastic scrolling.
          const relativeOffset = getRelativeScrollOffset();
          if (
            relativeOffset >= -viewportSize &&
            relativeOffset <= getTotalSize()
          ) {
            mutated += UPDATE_VIRTUAL_STATE;

            // Update synchronously if scrolled a lot
            shouldSync = distance > viewportSize;
          }
          break;
        }
        case ACTION_SCROLL_END: {
          mutated = UPDATE_SCROLL_END_EVENT;
          if (_scrollDirection !== SCROLL_IDLE) {
            shouldFlushPendingJump = true;
            mutated += UPDATE_VIRTUAL_STATE;
          }
          _scrollDirection = SCROLL_IDLE;
          _scrollMode = SCROLL_BY_NATIVE;
          _frozenRange = null;
          break;
        }
        case ACTION_ITEM_RESIZE: {
          const updated = payload.filter(
            ([index, size]) => cache._sizes[index] !== size
          );

          // Skip if all items are cached and not updated
          if (!updated.length) {
            break;
          }

          // Calculate jump by resize to minimize junks in appearance
          applyJump(
            updated.reduce((acc, [index, size]) => {
              if (
                // Keep distance from end during shifting
                _scrollMode === SCROLL_BY_SHIFT ||
                (_frozenRange
                  ? // https://github.com/inokawa/virtua/issues/380
                    index < _frozenRange[0]
                  : // Otherwise we should maintain visible position
                    getItemOffset(index) +
                      // https://github.com/inokawa/virtua/issues/385
                      (_scrollDirection === SCROLL_IDLE &&
                      _scrollMode === SCROLL_BY_NATIVE
                        ? getItemSize(index)
                        : 0) <
                    getRelativeScrollOffset())
              ) {
                acc += size - getItemSize(index);
              }
              return acc;
            }, 0)
          );

          // Update item sizes
          for (const [index, size] of updated) {
            const prevSize = getItemSize(index);
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

          mutated = UPDATE_VIRTUAL_STATE + UPDATE_SIZE_EVENT;

          // Synchronous update is necessary in current design to minimize visible glitch in concurrent rendering.
          // However in React, synchronous update with flushSync after asynchronous update will overtake the asynchronous one.
          // If items resize happens just after scroll, race condition can occur depending on implementation.
          shouldSync = true;
          break;
        }
        case ACTION_VIEWPORT_RESIZE: {
          if (viewportSize !== payload) {
            viewportSize = payload;
            mutated = UPDATE_VIRTUAL_STATE + UPDATE_SIZE_EVENT;
          }
          break;
        }
        case ACTION_ITEMS_LENGTH_CHANGE: {
          if (payload[1]) {
            applyJump(updateCacheLength(cache, payload[0], true));
            _scrollMode = SCROLL_BY_SHIFT;
            mutated = UPDATE_VIRTUAL_STATE;
          } else {
            updateCacheLength(cache, payload[0]);
          }
          break;
        }
        case ACTION_START_OFFSET_CHANGE: {
          startSpacerSize = payload;
          break;
        }
        case ACTION_MANUAL_SCROLL: {
          _scrollMode = SCROLL_BY_MANUAL_SCROLL;
          break;
        }
        case ACTION_BEFORE_MANUAL_SMOOTH_SCROLL: {
          _frozenRange = getRange(payload);
          mutated = UPDATE_VIRTUAL_STATE;
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
