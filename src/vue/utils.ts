import { VNode } from "vue";
import { NULL } from "../core/utils";

/**
 * @internal
 */
export const getKey = (e: VNode, i: number): Exclude<VNode["key"], null> => {
  const key = e.key;
  return key != NULL ? key : "_" + i;
};
