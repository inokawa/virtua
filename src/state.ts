import { useCallback, useState } from "react";
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

type State = {
  _startIndex: number;
  _viewportWidth: number;
  _viewportHeight: number;
  _scrollSize: number;
  _sizes: number[]; // mutatable cache
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
      const sizes = resetCache(action._length, state._sizes);
      return {
        ...state,
        _sizes: sizes,
        _scrollSize: calculateAllSize(sizes, itemSize),
      };
    }
    case UPDATE_ITEM_SIZES: {
      const { _indexes: indexes, _sizes: sizes } = action;
      if (indexes.every((index, i) => state._sizes[index] === sizes[i]!)) {
        return state;
      }

      let topJump = 0;
      let bottomJump = 0;
      indexes.forEach((index, i) => {
        if (index < state._startIndex) {
          topJump +=
            sizes[i]! - resolveItemSize(state._sizes[index]!, itemSize);
        } else {
          bottomJump +=
            sizes[i]! - resolveItemSize(state._sizes[index]!, itemSize);
        }
        state._sizes[index] = sizes[i]!;
      });

      return {
        ...state,
        _scrollSize: calculateAllSize(state._sizes, itemSize),
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
          state._sizes,
          itemSize
        );
      } else {
        startIndex = findStartIndexBefore(
          action._index,
          max(0, action._offset),
          state._sizes,
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
        state._sizes,
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
  itemCount: number,
  itemSize: number
): [State, (action: Actions) => void] => {
  const [state, setState] = useState(() => {
    const sizes = resetCache(itemCount);
    return {
      _startIndex: 0,
      _viewportWidth: 0,
      _viewportHeight: 0,
      _scrollSize: calculateAllSize(sizes, itemSize),
      _sizes: sizes,
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
