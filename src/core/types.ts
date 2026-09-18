/** @internal */
export type ItemResize = Readonly<[index: number, size: number]>;
/** @internal */
export type ItemsRange = Readonly<[startIndex: number, endIndex: number]>;

/**
 * Serializable cache snapshot.
 *
 * **This is not intended to be modified by users. And it is not guaranteed to work if you pass it to the different version of this package.**
 */
export type CacheSnapshot = [sizes: number[], defaultSize?: number];
