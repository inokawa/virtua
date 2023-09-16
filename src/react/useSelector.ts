import { useState } from "react";
import { useLatestRef } from "./useLatestRef";
import { refKey } from "./utils";
import { VirtualStore } from "../core/store";
import { useIsomorphicLayoutEffect } from "./useIsomorphicLayoutEffect";

export const useSelector = <T>(
  store: VirtualStore,
  getSnapShot: () => T,
  target: number,
  shouldGetLatest?: boolean
): T => {
  const [state, setState] = useState(getSnapShot);
  const getter = useLatestRef(getSnapShot);

  useIsomorphicLayoutEffect(() => {
    return store._subscribe(target, () => {
      setState(() => getter[refKey]());
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
