import { useReducer } from "react";
import { type VirtualStore } from "../core/store";

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
