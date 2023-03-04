import { useRef } from "react";
import {
  findStartIndexAfter,
  findStartIndexBefore,
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

export const UPDATE_CACHE_LENGTH = 0;
export const UPDATE_ITEM_SIZES = 1;
export const UPDATE_VIEWPORT_SIZE = 2;
export const HANDLE_ITEM_INTERSECTION = 3;
export const HANDLE_SCROLL = 4;

export type ScrollJump = Readonly<{ _start: number; _end: number }>;

type State = {
  _startIndex: number;
  _viewportWidth: number;
  _viewportHeight: number;
  _cache: Cache;
  _jump: ScrollJump;
};

type Actions =
  | { _type: typeof UPDATE_CACHE_LENGTH; _length: number }
  | {
      _type: typeof UPDATE_ITEM_SIZES;
      _indexes: number[];
      _sizes: number[];
    }
  | { _type: typeof UPDATE_VIEWPORT_SIZE; _width: number; _height: number }
  | {
      _type: typeof HANDLE_ITEM_INTERSECTION;
      _index: number;
      _offset: number;
    }
  | { _type: typeof HANDLE_SCROLL; _offset: number };

const mutate = (state: State, action: Actions, itemSize: number): boolean => {
  switch (action._type) {
    case UPDATE_CACHE_LENGTH: {
      if (state._cache._length === action._length) return false;
      state._cache = resetCache(action._length, itemSize, state._cache);
      return true;
    }
    case UPDATE_ITEM_SIZES: {
      const { _indexes: indexes, _sizes: sizes } = action;
      if (
        indexes.every((index, i) => state._cache._sizes[index] === sizes[i]!)
      ) {
        return false;
      }

      let topJump = 0;
      let bottomJump = 0;
      indexes.forEach((index, i) => {
        if (index < state._startIndex) {
          topJump += sizes[i]! - getItemSize(state._cache, index);
        } else {
          bottomJump += sizes[i]! - getItemSize(state._cache, index);
        }
        setItemSize(state._cache as Writeable<Cache>, index, sizes[i]!);
      });

      state._jump = { _start: topJump, _end: bottomJump };
      return true;
    }
    case UPDATE_VIEWPORT_SIZE: {
      if (
        state._viewportWidth === action._width &&
        state._viewportHeight === action._height
      ) {
        return false;
      }
      state._viewportWidth = action._width;
      state._viewportHeight = action._height;
      return true;
    }
    case HANDLE_ITEM_INTERSECTION: {
      const prev = state._startIndex;
      return (
        (state._startIndex =
          action._offset <= 0
            ? findStartIndexAfter(
                action._index,
                max(0, -action._offset),
                state._cache
              )
            : findStartIndexBefore(
                action._index,
                max(0, action._offset),
                state._cache
              )) !== prev
      );
    }
    case HANDLE_SCROLL: {
      const prev = state._startIndex;
      return (
        (state._startIndex = findStartIndexWithOffset(
          action._offset,
          state._cache
        )) !== prev
      );
    }
  }
};

export type Store = {
  _getStartIndex(): number;
  _getEndIndex(): number;
  _isUnmeasuredItem(index: number): boolean;
  _hasUnmeasuredItemsInRange(startIndex: number): boolean;
  _getItemOffset(index: number): number;
  _getViewportWidth(): number;
  _getViewportHeight(): number;
  _getViewportSize(): number;
  _getViewportSizeInitialized(): boolean;
  _getScrollSize(): number;
  _getJump(): ScrollJump;
  _subscribe(cb: () => void): () => void;
  _update(action: Actions): void;
};

// https://github.com/facebook/react/issues/25191#issuecomment-1237456448
export const useVirtualStore = (
  itemCount: number,
  itemSize: number,
  isHorizontal: boolean | undefined
): Store => {
  const ref = useRef<Store | undefined>();
  return (
    ref.current ||
    (ref.current = (() => {
      const subscribers = new Set<() => void>();
      const state: Readonly<State> = {
        _startIndex: 0,
        _viewportWidth: 0,
        _viewportHeight: 0,
        _cache: resetCache(itemCount, itemSize),
        _jump: { _start: 0, _end: 0 },
      };

      const getViewportSize = (): number =>
        isHorizontal ? state._viewportWidth : state._viewportHeight;

      return {
        _getStartIndex() {
          return state._startIndex;
        },
        _getEndIndex() {
          return findEndIndex(
            state._startIndex,
            getViewportSize(),
            state._cache
          );
        },
        _isUnmeasuredItem(index) {
          return state._cache._sizes[index] === UNCACHED;
        },
        _hasUnmeasuredItemsInRange(startIndex: number): boolean {
          return hasUnmeasuredItemsInRange(
            startIndex,
            findEndIndex(startIndex, getViewportSize(), state._cache),
            state._cache
          );
        },
        _getItemOffset(index) {
          return computeStartOffset(index, state._cache as Writeable<Cache>);
        },
        _getViewportWidth() {
          return state._viewportWidth;
        },
        _getViewportHeight() {
          return state._viewportHeight;
        },
        _getViewportSize() {
          return getViewportSize();
        },
        _getViewportSizeInitialized() {
          return getViewportSize() !== 0;
        },
        _getScrollSize() {
          return computeTotalSize(state._cache as Writeable<Cache>);
        },
        _getJump() {
          return state._jump;
        },
        _subscribe(cb) {
          subscribers.add(cb);
          return () => {
            subscribers.delete(cb);
          };
        },
        _update(action) {
          const mutated = mutate(state, action, itemSize);
          if (mutated) {
            subscribers.forEach((cb) => {
              cb();
            });
          }
        },
      };
    })())
  );
};
