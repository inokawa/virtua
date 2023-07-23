import { useLayoutEffect, useState } from "react";
import { flushSync } from "react-dom";
import { useRefWithUpdate } from "./useRefWithUpdate";
import { refKey } from "./utils";
import {
  UPDATE_JUMP,
  UPDATE_SCROLL,
  UPDATE_SIZE,
  VirtualStore,
} from "../core/store";

export const useSelector = <T>(
  store: VirtualStore,
  getSnapShot: () => T,
  shouldGetLatest?: boolean
): T => {
  const [state, setState] = useState(getSnapShot);
  const getter = useRefWithUpdate(getSnapShot);

  useLayoutEffect(() => {
    let target: number;
    if (getSnapShot === store._getRange) {
      target = UPDATE_SCROLL + UPDATE_SIZE;
    } else if (getSnapShot === store._getCorrectedScrollSize) {
      target = UPDATE_SIZE;
    } else if (getSnapShot === store._getJumpCount) {
      target = UPDATE_JUMP;
    } else {
      // Others will be item subscribers
      target = UPDATE_SIZE;
    }

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
