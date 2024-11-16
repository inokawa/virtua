import { VNode } from "vue";
import { NULL } from "../core/utils";
import { ItemsRange } from "../core/types";

/**
 * @internal
 */
export const getKey = (e: VNode, i: number): Exclude<VNode["key"], null> => {
  const key = e.key;
  return key != NULL ? key : "_" + i;
};

/**
 * @internal
 */
export const isSameRange = (prev: ItemsRange, next: ItemsRange): boolean => {
  return prev[0] === next[0] && prev[1] === next[1];
};
