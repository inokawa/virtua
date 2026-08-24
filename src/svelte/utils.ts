export const styleToString = (
  obj: Record<string, string | undefined>,
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

export type ItemAttrs = {
  [key: string]: any;
  style?: Record<string, string | undefined>;
  class?: string;
};

/**
 * A function that provides properties/attributes for item element
 */
export type ItemProps<T = unknown> = (payload: {
  item: T;
  index: number;
}) => ItemAttrs | undefined;
