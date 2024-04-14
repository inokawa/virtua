import { afterUpdate, beforeUpdate, onDestroy } from "svelte";

export const effect = (cb: () => (() => void) | void, before?: boolean) => {
  let cleanup: (() => void) | void;

  (before ? beforeUpdate : afterUpdate)(() => {
    if (cleanup) cleanup();
    cleanup = cb();
  });

  onDestroy(() => {
    if (cleanup) cleanup();
  });
};

export const styleToString = (obj: Record<string, string>): string => {
  return Object.keys(obj).reduce((acc, k) => acc + `${k}:${obj[k]};`, "");
};

export const defaultGetKey = (_data: unknown, i: number) => "_" + i;

/**
 * https://github.com/kitschpatrol/svelte-tweakpane-ui/blob/248fd7c24926af1e485a0676b6a8c053177e92db/src/lib/utils.ts#L57-L59
 */
export type UnwrapCustomEvents<T> = {
  [P in keyof T]: T[P] extends CustomEvent<infer detail> ? detail : never;
};
