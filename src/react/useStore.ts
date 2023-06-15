import { useLayoutEffect, useState } from "react";
import { flushSync } from "react-dom";
import { useRefWithUpdate } from "./useRefWithUpdate";
import { refKey } from "./utils";
import { VirtualStore } from "../core/store";

export const useStore = <T>(
  store: VirtualStore,
  getSnapShot: () => T,
  shouldGetLatest?: boolean
): T => {
  const [state, setState] = useState(getSnapShot);
  const getter = useRefWithUpdate(getSnapShot);

  useLayoutEffect(() => {
    const update = () => {
      setState(() => getter[refKey]());
    };
    return store._subscribe((sync) => {
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
