import { useCallback, useState } from "react";
import {
  findStartIndexAfter,
  findStartIndexBefore,
  findStartIndexWithOffset,
  resetCache,
  resolveItemSize,
} from "./cache";
import { max } from "./utils";

export const RESET_CACHE = 0;
export const UPDATE_ITEM_SIZES = 1;
export const UPDATE_VIEWPORT_SIZE = 2;
export const HANDLE_ITEM_INTERSECTION = 3;
export const HANDLE_SCROLL = 4;

export type ScrollJump = { _start: number; _end: number };

type State = {
  _startIndex: number;
  _viewportSize: number;
  _cache: number[];
  _jump: ScrollJump;
};

type Actions =
  | { _type: typeof RESET_CACHE; _elements: unknown[] }
  | {
      _type: typeof UPDATE_ITEM_SIZES;
      _indexes: number[];
      _sizes: number[];
    }
  | { _type: typeof UPDATE_VIEWPORT_SIZE; _size: number }
  | {
      _type: typeof HANDLE_ITEM_INTERSECTION;
      _index: number;
      _offset: number;
    }
  | { _type: typeof HANDLE_SCROLL; _offset: number };

const reducer = (state: State, action: Actions, itemSize: number): State => {
  switch (action._type) {
    case RESET_CACHE: {
      return {
        ...state,
        _cache: resetCache(action._elements, state._cache),
      };
    }
    case UPDATE_ITEM_SIZES: {
      const { _indexes: indexes, _sizes: sizes } = action;
      if (indexes.every((index, i) => state._cache[index] === sizes[i]!)) {
        return state;
      }

      let topJump = 0;
      let bottomJump = 0;
      indexes.forEach((index, i) => {
        if (index < state._startIndex) {
          topJump +=
            sizes[i]! - resolveItemSize(state._cache[index]!, itemSize);
        } else {
          bottomJump +=
            sizes[i]! - resolveItemSize(state._cache[index]!, itemSize);
        }
        state._cache[index] = sizes[i]!;
      });

      return {
        ...state,
        _jump: { _start: topJump, _end: bottomJump },
      };
    }
    case UPDATE_VIEWPORT_SIZE: {
      if (state._viewportSize === action._size) {
        return state;
      }
      return {
        ...state,
        _viewportSize: action._size,
      };
    }
    case HANDLE_ITEM_INTERSECTION: {
      let startIndex: number;
      if (action._offset <= 0) {
        startIndex = findStartIndexAfter(
          action._index,
          max(0, -action._offset),
          state._cache,
          itemSize
        );
      } else {
        startIndex = findStartIndexBefore(
          action._index,
          max(0, action._offset),
          state._cache,
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
        state._cache,
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

// In React 18, useReducer causes rerender even if the state update didn't change anything.
// So imitate useReducer with useState for performance.
// https://github.com/facebook/react/pull/22445
export const useVirtualState = (
  elements: unknown[],
  itemSize: number
): [State, (action: Actions) => void] => {
  const [state, setState] = useState(() => {
    return {
      _startIndex: 0,
      _viewportSize: 0,
      _cache: resetCache(elements),
      _jump: { _start: 0, _end: 0 },
    };
  });

  return [
    state,
    useCallback((action: Actions) => {
      setState((prev) => reducer(prev, action, itemSize));
    }, []),
  ];
};
