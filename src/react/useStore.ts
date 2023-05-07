import { useLayoutEffect, useState } from "react";
import { useRefWithUpdate } from "./useRefWithUpdate";
import { refKey } from "./utils";
import { VirtualStore } from "../core/store";

export const useStore = <T>(store: VirtualStore, getSnapShot: () => T): T => {
  const getter = useRefWithUpdate(getSnapShot);
  const [state, setState] = useState(getSnapShot);

  useLayoutEffect(() => {
    return store._subscribe(() => {
      setState(getter[refKey]);
    });
  }, []);

  return state;
};
