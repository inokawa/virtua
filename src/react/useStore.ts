import { useLayoutEffect, useState } from "react";
import { flushSync } from "react-dom";
import { useRefWithUpdate } from "./useRefWithUpdate";
import { refKey } from "./utils";
import { VirtualStore } from "../core/store";

export const useStore = <T>(store: VirtualStore, getSnapShot: () => T): T => {
  const getter = useRefWithUpdate(getSnapShot);
  const [state, setState] = useState(getSnapShot);

  useLayoutEffect(() => {
    const update = () => {
      setState(getter[refKey]);
    };
    return store._subscribe((sync) => {
      if (sync) {
        flushSync(update);
      } else {
        update();
      }
    });
  }, []);

  return state;
};
