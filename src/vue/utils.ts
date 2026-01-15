import { type CSSProperties, type VNode } from "vue";
import { type ItemsRange } from "../core/index.js";

/**
 * @internal
 */
export const getKey = (e: VNode[], i: number): Exclude<VNode["key"], null> => {
  // https://github.com/inokawa/virtua/pull/846
  if (e.length === 1) {
    const key = e[0]!.key;
    if (key != null) {
      return key;
    }
  }
  return "_" + i;
};

/**
 * @internal
 */
export const isSameRange = (prev: ItemsRange, next: ItemsRange): boolean => {
  return prev[0] === next[0] && prev[1] === next[1];
};

export type ItemProps = (payload: {
  item: any;
  index: number;
}) => { [key: string]: any; style?: CSSProperties; class?: string } | undefined;
