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
export type ItemResize = [index: number, size: number];

export const ACTION_UPDATE_CACHE_LENGTH = 0;
export const ACTION_UPDATE_ITEM_SIZES = 1;
export const ACTION_UPDATE_VIEWPORT = 2;
export const ACTION_HANDLE_SCROLL = 3;

type Actions =
  | [type: typeof ACTION_UPDATE_CACHE_LENGTH, length: number]
  | [type: typeof ACTION_UPDATE_ITEM_SIZES, entries: ItemResize[]]
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
  let viewportWidth = 0;
  let viewportHeight = 0;
  let startIndex = 0;
  let jump: ScrollJump = [];
  let cache = resetCache(itemCount, itemSize);
  let scrollToQueue: [() => void, () => void] | undefined;

  const subscribers = new Set<() => void>();
  const getViewportSize = (): number =>
    isHorizontal ? viewportWidth : viewportHeight;

  return {
    _getStartIndex() {
      return startIndex;
    },
    _getEndIndex() {
      return findEndIndex(cache, startIndex, getViewportSize());
    },
    _isUnmeasuredItem(index) {
      return cache._sizes[index] === UNCACHED;
    },
    _hasUnmeasuredItemsInRange(startIndex) {
      return hasUnmeasuredItemsInRange(
        cache,
        startIndex,
        findEndIndex(cache, startIndex, getViewportSize())
      );
    },
    _getItemOffset(index) {
      return computeStartOffset(cache as Writeable<Cache>, index);
    },
    _getViewportSize() {
      return getViewportSize();
    },
    _getScrollSize() {
      return computeTotalSize(cache as Writeable<Cache>);
    },
    _getItemCount() {
      return cache._length;
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
            if (cache._length === payload) return false;
            cache = resetCache(payload, itemSize, cache);
            return true;
          }
          case ACTION_UPDATE_ITEM_SIZES: {
            const updated = payload.filter(
              ([index, size]) => cache._sizes[index] !== size
            );
            // Skip if all items are cached and not updated
            if (!updated.length) {
              return false;
            }

            const updatedJump: [index: number, sizeDiff: number][] = [];
            updated.forEach(([index, size]) => {
              updatedJump.push([index, size - getItemSize(cache, index)]);
              setItemSize(cache as Writeable<Cache>, index, size);
            });
            jump = updatedJump;
            return true;
          }
          case ACTION_UPDATE_VIEWPORT: {
            if (
              viewportWidth === payload._width &&
              viewportHeight === payload._height
            ) {
              return false;
            }
            viewportWidth = payload._width;
            viewportHeight = payload._height;
            return true;
          }
          case ACTION_HANDLE_SCROLL: {
            const prevStartIndex = startIndex;
            const prevOffset = computeStartOffset(
              cache as Writeable<Cache>,
              prevStartIndex
            );
            if (prevOffset === payload) {
              return false;
            }
            return (
              (startIndex = findStartIndexWithOffset(
                cache,
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
