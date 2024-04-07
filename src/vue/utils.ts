import { VNode } from "vue";
import { exists } from "../core/utils";

/**
 * @internal
 */
export const getKey = (e: VNode, i: number): Exclude<VNode["key"], null> => {
  const key = e.key;
  return exists(key) ? key : "_" + i;
};
