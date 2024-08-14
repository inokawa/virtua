import { afterUpdate, beforeUpdate } from "svelte";

export const onUpdate = (cb: () => void, before?: boolean) => {
  (before ? beforeUpdate : afterUpdate)(() => {
    cb();
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
