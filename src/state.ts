import { useRef } from "react";
import {
  findStartIndexAfter,
  findStartIndexBefore,
  findStartIndexWithOffset,
  resetCache,
  resolveItemSize,
  calculateAllSize,
} from "./cache";
import { max } from "./utils";

export const RESET_CACHE = 0;
export const UPDATE_ITEM_SIZES = 1;
export const UPDATE_VIEWPORT_SIZE = 2;
export const HANDLE_ITEM_INTERSECTION = 3;
export const HANDLE_SCROLL = 4;

export type ScrollJump = { _start: number; _end: number };

type Cache = { _sizes: number[] };

type State = {
  _startIndex: number;
  _viewportWidth: number;
  _viewportHeight: number;
  _scrollSize: number;
  _cache: Cache; // mutatable cache
  _jump: ScrollJump;
};

type Actions =
  | { _type: typeof RESET_CACHE; _length: number }
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

const reducer = (state: State, action: Actions, itemSize: number): State => {
  switch (action._type) {
    case RESET_CACHE: {
      const sizes = resetCache(action._length, state._cache._sizes);
      return {
        ...state,
        _cache: { _sizes: sizes },
        _scrollSize: calculateAllSize(sizes, itemSize),
      };
    }
    case UPDATE_ITEM_SIZES: {
      const { _indexes: indexes, _sizes: sizes } = action;
      if (
        indexes.every((index, i) => state._cache._sizes[index] === sizes[i]!)
      ) {
        return state;
      }

      let topJump = 0;
      let bottomJump = 0;
      indexes.forEach((index, i) => {
        if (index < state._startIndex) {
          topJump +=
            sizes[i]! - resolveItemSize(state._cache._sizes[index]!, itemSize);
        } else {
          bottomJump +=
            sizes[i]! - resolveItemSize(state._cache._sizes[index]!, itemSize);
        }
        state._cache._sizes[index] = sizes[i]!;
      });

      return {
        ...state,
        _scrollSize: calculateAllSize(state._cache._sizes, itemSize),
        _jump: { _start: topJump, _end: bottomJump },
      };
    }
    case UPDATE_VIEWPORT_SIZE: {
      if (
        state._viewportWidth === action._width &&
        state._viewportHeight === action._height
      ) {
        return state;
      }
      return {
        ...state,
        _viewportWidth: action._width,
        _viewportHeight: action._height,
      };
    }
    case HANDLE_ITEM_INTERSECTION: {
      let startIndex: number;
      if (action._offset <= 0) {
        startIndex = findStartIndexAfter(
          action._index,
          max(0, -action._offset),
          state._cache._sizes,
          itemSize
        );
      } else {
        startIndex = findStartIndexBefore(
          action._index,
          max(0, action._offset),
          state._cache._sizes,
          itemSize
        );
      }

      if (startIndex === state._startIndex) {
        return state;
      }
      return {
        ...state,
        _startIndex: startIndex,
      };
    }
    case HANDLE_SCROLL: {
      const startIndex = findStartIndexWithOffset(
        action._offset,
        state._cache._sizes,
        itemSize
      );
      if (startIndex === state._startIndex) {
        return state;
      }
      return {
        ...state,
        _startIndex: startIndex,
      };
    }
  }
};

export type Store = {
  _getStore(): State;
  _subscribe(cb: () => void): () => void;
  _update(action: Actions): void;
};

// https://github.com/facebook/react/issues/25191#issuecomment-1237456448
export const useVirtualStore = (itemCount: number, itemSize: number): Store => {
  const ref = useRef<Store | undefined>();
  return (
    ref.current ||
    (ref.current = (() => {
      const subscribers = new Set<() => void>();
      const sizes = resetCache(itemCount);
      let state: State = {
        _startIndex: 0,
        _viewportWidth: 0,
        _viewportHeight: 0,
        _scrollSize: calculateAllSize(sizes, itemSize),
        _cache: { _sizes: sizes },
        _jump: { _start: 0, _end: 0 },
      };
      return {
        _getStore(): State {
          return state;
        },
        _subscribe(cb: () => void) {
          subscribers.add(cb);
          return () => {
            subscribers.delete(cb);
          };
        },
        _update: (action: Actions) => {
          const nextState = reducer(state, action, itemSize);
          if (state !== nextState) {
            state = nextState;
            subscribers.forEach((cb) => {
              cb();
            });
          }
        },
      };
    })())
  );
};
