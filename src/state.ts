import type { Reducer } from "react";
import {
  findIndexAfter,
  findIndexBefore,
  findStartIndexWithOffset,
  resetCache,
  resolveItemHeight,
} from "./cache";
import { max } from "./utils";

export const RESET_CACHE = 0;
export const UPDATE_ITEM_HEIGHTS = 1;
export const UPDATE_VIEWPORT_HEIGHT = 2;
export const HANDLE_ITEM_EXIT = 3;
export const HANDLE_SCROLL = 4;

export type ScrollJump = { _top: number; _bottom: number };

type State = {
  _startIndex: number;
  _viewportHeight: number;
  _itemHeight: number;
  _cache: number[];
  _jump: ScrollJump;
};

export const init = ([elements, itemHeight]: [
  elements: unknown[],
  itemHeight: number
]): State => {
  return {
    _startIndex: 0,
    _viewportHeight: 0,
    _itemHeight: itemHeight,
    _cache: resetCache(elements),
    _jump: { _top: 0, _bottom: 0 },
  };
};

export const reducer: Reducer<
  State,
  | { _type: typeof RESET_CACHE; _elements: unknown[]; _height: number }
  | {
      _type: typeof UPDATE_ITEM_HEIGHTS;
      _indexes: number[];
      _heights: number[];
    }
  | { _type: typeof UPDATE_VIEWPORT_HEIGHT; _height: number }
  | {
      _type: typeof HANDLE_ITEM_EXIT;
      _index: number;
      _isScrollingDown: boolean;
      _entry: IntersectionObserverEntry;
    }
  | { _type: typeof HANDLE_SCROLL; _offset: number }
> = (state, action) => {
  switch (action._type) {
    case RESET_CACHE: {
      return {
        ...state,
        _cache: resetCache(action._elements, state._cache),
      };
    }
    case UPDATE_ITEM_HEIGHTS: {
      const { _indexes: indexes, _heights: heights } = action;
      if (indexes.every((index, i) => state._cache[index] === heights[i]!)) {
        return state;
      }

      let topJump = 0;
      let bottomJump = 0;
      indexes.forEach((index, i) => {
        if (index <= state._startIndex) {
          topJump +=
            heights[i]! -
            resolveItemHeight(state._cache[index]!, state._itemHeight);
        } else {
          bottomJump +=
            heights[i]! -
            resolveItemHeight(state._cache[index]!, state._itemHeight);
        }
        state._cache[index] = heights[i]!;
      });

      return {
        ...state,
        _jump: { _top: topJump, _bottom: bottomJump },
      };
    }
    case UPDATE_VIEWPORT_HEIGHT: {
      if (state._viewportHeight === action._height) {
        return state;
      }
      return {
        ...state,
        _viewportHeight: action._height,
      };
    }
    case HANDLE_ITEM_EXIT: {
      const { boundingClientRect } = action._entry;
      let startIndex: number;
      if (action._isScrollingDown) {
        startIndex = findIndexAfter(
          action._index,
          max(0, -boundingClientRect.top),
          state._cache,
          state._itemHeight
        );
      } else {
        startIndex = findIndexBefore(
          action._index,
          max(0, boundingClientRect.top),
          state._cache,
          state._itemHeight
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
        state._itemHeight
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
