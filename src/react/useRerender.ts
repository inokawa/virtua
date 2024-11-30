import { useReducer } from "react";
import { VirtualStore } from "../core";

/**
 * @internal
 */
export const useRerender = (store: VirtualStore): (() => void) => {
  return useReducer(
    store._getStateVersion,
    undefined,
    store._getStateVersion
  )[1];
};
