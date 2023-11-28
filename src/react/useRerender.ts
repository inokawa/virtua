import { useReducer } from "react";

const update = () => [];

/**
 * @internal
 */
export const useRerender = (): (() => void) => {
  return useReducer(update, undefined, update)[1];
};
