import { useReducer } from "react";

const update = () => [];

export const useRerender = (): (() => void) => {
  return useReducer(update, undefined, update)[1];
};
