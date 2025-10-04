import { sort, type ItemsRange } from "../core/index.js";

export const styleToString = (
  obj: Record<string, string | undefined>
): string => {
  return Object.keys(obj).reduce((acc, k) => {
    const value = obj[k];
    if (value == null) {
      return acc;
    }
    return acc + `${k}:${value};`;
  }, "");
};

export const defaultGetKey = (_data: unknown, i: number) => "_" + i;

export function* iterRange(
  [start, end]: ItemsRange,
  keepMounted?: readonly number[]
) {
  if (keepMounted) {
    const mounted = new Set(keepMounted);
    for (let i = start; i <= end; i++) {
      mounted.add(i);
    }
    for (const index of sort([...mounted])) {
      yield index;
    }
  } else {
    for (let i = start; i <= end; i++) {
      yield i;
    }
  }
}
