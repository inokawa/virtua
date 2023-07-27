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
 * **This is not intended to be modified by users. And it is not guaranteed to work if you pass it to the different version ot this package.**
 */
export interface CacheSnapshot {
  [cacheSymbol]: never;
}
