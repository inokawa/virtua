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

export type ScrollJump = Readonly<[index: number, sizeDiff: number][]>;

type State = {
  _startIndex: number;
  _viewportWidth: number;
  _viewportHeight: number;
  _cache: Cache;
  _jump: ScrollJump;
};

export const ACTION_UPDATE_CACHE_LENGTH = 0;
export const ACTION_UPDATE_ITEM_SIZES = 1;
export const ACTION_UPDATE_VIEWPORT = 2;
export const ACTION_HANDLE_SCROLL = 3;

type Actions =
  | [type: typeof ACTION_UPDATE_CACHE_LENGTH, length: number]
  | [
      type: typeof ACTION_UPDATE_ITEM_SIZES,
      entries: [index: number, size: number][]
    ]
  | [
      type: typeof ACTION_UPDATE_VIEWPORT,
      rect: { _width: number; _height: number }
    ]
  | [type: typeof ACTION_HANDLE_SCROLL, offset: number];

export type VirtualStore = {
  _getStartIndex(): number;
  _getEndIndex(): number;
  _isUnmeasuredItem(index: number): boolean;
  _hasUnmeasuredItemsInRange(startIndex: number): boolean;
  _getItemOffset(index: number): number;
  _getViewportSize(): number;
  _getScrollSize(): number;
  _getItemCount(): number;
  _getJump(): ScrollJump;
  _isHorizontal(): boolean;
  _isRtl(): boolean;
  _getItemIndexForScrollTo(offset: number): number;
  _waitForScrollDestinationItemsMeasured(): Promise<void>;
  _subscribe(cb: () => void): () => void;
  _update(...action: Actions): void;
};

export const createVirtualStore = (
  itemCount: number,
  itemSize: number,
  isHorizontal: boolean,
  isRtl: boolean
): VirtualStore => {
  const subscribers = new Set<() => void>();
  const state: State = {
    _startIndex: 0,
    _viewportWidth: 0,
    _viewportHeight: 0,
    _cache: resetCache(itemCount, itemSize),
    _jump: [],
  };
  const getViewportSize = (): number =>
    isHorizontal ? state._viewportWidth : state._viewportHeight;

  let scrollToQueue: [() => void, () => void] | undefined;

  return {
    _getStartIndex() {
      return state._startIndex;
    },
    _getEndIndex() {
      return findEndIndex(state._cache, state._startIndex, getViewportSize());
    },
    _isUnmeasuredItem(index) {
      return state._cache._sizes[index] === UNCACHED;
    },
    _hasUnmeasuredItemsInRange(startIndex) {
      return hasUnmeasuredItemsInRange(
        state._cache,
        startIndex,
        findEndIndex(state._cache, startIndex, getViewportSize())
      );
    },
    _getItemOffset(index) {
      return computeStartOffset(state._cache as Writeable<Cache>, index);
    },
    _getViewportSize() {
      return getViewportSize();
    },
    _getScrollSize() {
      return computeTotalSize(state._cache as Writeable<Cache>);
    },
    _getItemCount() {
      return state._cache._length;
    },
    _getJump() {
      return state._jump;
    },
    _isHorizontal() {
      return isHorizontal;
    },
    _isRtl() {
      return isRtl;
    },
    _getItemIndexForScrollTo(offset) {
      return findStartIndexWithOffset(state._cache, offset, 0, 0);
    },
    _waitForScrollDestinationItemsMeasured() {
      if (scrollToQueue) {
        // Cancel waiting scrollTo
        scrollToQueue[1]();
      }
      // The measurement will be done asynchronously and the timing is not predictable so we use promise.
      // For example, ResizeObserver may not fire when window is not visible.
      return new Promise((resolve, reject) => {
        scrollToQueue = [
          () => {
            // HACK: It should be resolved in the next microtask that is after React's render
            Promise.resolve().then(() => {
              resolve();
              scrollToQueue = undefined;
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
          case ACTION_UPDATE_CACHE_LENGTH: {
            if (state._cache._length === payload) return false;
            state._cache = resetCache(payload, itemSize, state._cache);
            return true;
          }
          case ACTION_UPDATE_ITEM_SIZES: {
            const updated = payload.filter(
              ([index, size]) => state._cache._sizes[index] !== size
            );
            // Skip if all items are cached and not updated
            if (!updated.length) {
              return false;
            }

            const jump: [index: number, sizeDiff: number][] = [];
            updated.forEach(([index, size]) => {
              jump.push([index, size - getItemSize(state._cache, index)]);
              setItemSize(state._cache as Writeable<Cache>, index, size);
            });
            state._jump = jump;
            return true;
          }
          case ACTION_UPDATE_VIEWPORT: {
            if (
              state._viewportWidth === payload._width &&
              state._viewportHeight === payload._height
            ) {
              return false;
            }
            state._viewportWidth = payload._width;
            state._viewportHeight = payload._height;
            return true;
          }
          case ACTION_HANDLE_SCROLL: {
            const prevStartIndex = state._startIndex;
            const prevOffset = computeStartOffset(
              state._cache as Writeable<Cache>,
              prevStartIndex
            );
            if (prevOffset === payload) {
              return false;
            }
            return (
              (state._startIndex = findStartIndexWithOffset(
                state._cache,
                payload,
                prevStartIndex,
                prevOffset
              )) !== prevStartIndex
            );
          }
        }
      })();

      if (mutated) {
        subscribers.forEach((cb) => {
          cb();
        });
        if (scrollToQueue && type === ACTION_UPDATE_ITEM_SIZES) {
          scrollToQueue[0]();
        }
      }
    },
  };
};
