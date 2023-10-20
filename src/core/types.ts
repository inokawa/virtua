export type DeepReadonly<T> = {
  readonly [key in keyof T]: DeepReadonly<T[key]>;
};

export type Writeable<T> = {
  -readonly [key in keyof T]: Writeable<T[key]>;
};

declare const cacheSymbol: unique symbol;
/**
 * Serializable cache snapshot.
 *
 * **This is not intended to be modified by users. And it is not guaranteed to work if you pass it to the different version of this package.**
 */
export interface CacheSnapshot {
  [cacheSymbol]: never;
}

/**
 * Alignment of item when calling scrollToIndex method.
 *
 * - `start`(default): Align the item to the start of the list.
 * - `center`: Align the item to the center of the list.
 * - `end`: Align the item to the end of the list.
 */
export type ScrollToIndexAlign = "start" | "center" | "end";
