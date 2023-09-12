import { useState } from "react";
import { flushSync } from "react-dom";
import { useLatestRef } from "./useLatestRef";
import { refKey } from "./utils";
import {
  UPDATE_IS_SCROLLING,
  UPDATE_JUMP,
  UPDATE_SCROLL,
  UPDATE_SIZE,
  VirtualStore,
} from "../core/store";
import { useIsomorphicLayoutEffect } from "./useIsomorphicLayoutEffect";

export const SELECT_RANGE = UPDATE_SCROLL + UPDATE_SIZE;
export const SELECT_SCROLL_SIZE = UPDATE_SIZE;
export const SELECT_JUMP_COUNT = UPDATE_JUMP;
export const SELECT_IS_SCROLLING = UPDATE_IS_SCROLLING;
export const SELECT_ITEM = UPDATE_SIZE;

export const useSelector = <T>(
  store: VirtualStore,
  getSnapShot: () => T,
  target: number,
  shouldGetLatest?: boolean
): T => {
  const [state, setState] = useState(getSnapShot);
  const getter = useLatestRef(getSnapShot);

  useIsomorphicLayoutEffect(() => {
    const update = () => {
      setState(() => getter[refKey]());
    };
    return store._subscribe(target, (sync) => {
      // TODO batch flushSync to remove shouldGetLatest argument if possible
      // https://github.com/facebook/react/issues/25191
      if (sync) {
        flushSync(update);
      } else {
        update();
      }
    });
  }, []);

  // especially for sort of items
  if (shouldGetLatest) {
    const snap = getSnapShot();
    if (state !== snap) {
      setState(snap);
    }
  }
  return state;
};
