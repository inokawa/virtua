import { useReducer } from "react";
import { VirtualStore } from "../core";

/**
 * @internal
 */
export const useRerender = (store: VirtualStore): (() => void) => {
  return useReducer(
    store.$getStateVersion,
    undefined,
    store.$getStateVersion
  )[1];
};
