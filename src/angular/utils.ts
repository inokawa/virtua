export const defaultGetKey = (_data: unknown, i: number) => "_" + i;

/**
 * A function that provides properties/attributes for item element
 */
export type ItemProps<T = unknown> = (payload: { item: T; index: number }) =>
  | {
      [key: string]: any;
      style?: Record<string, string | undefined>;
      class?: string;
    }
  | undefined;

/**
 * Context of the item template.
 */
export type ItemContext<T> = {
  $implicit: T;
  index: number;
};
