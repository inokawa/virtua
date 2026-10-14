/** @internal */
export const NULL = null;

/**
 * @internal
 */
export const EMPTY: readonly never[] = [];

/** @internal */
export const { min, max, abs, floor } = Math;

/**
 * Behaves the same as clamp() in CSS: minValue wins if it's greater than maxValue.
 * https://drafts.csswg.org/css-values-4/#comp-func
 * @internal
 */
export const clamp = (
  value: number,
  minValue: number,
  maxValue: number,
): number => max(minValue, min(maxValue, value));

/**
 * @internal
 */
export const sort = <T extends number>(arr: T[]): T[] => {
  return arr.sort((a, b) => a - b);
};

/**
 * @internal
 */
export const timeout = setTimeout;
/**
 * @internal
 */
export const cancelTimeout = clearTimeout;

/**
 * @internal
 */
export const microtask: (fn: () => void) => void =
  typeof queueMicrotask === "function"
    ? queueMicrotask
    : (fn) => {
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        Promise.resolve().then(fn);
      };

/**
 * @internal
 */
export const createPromise = <T = void>(): [Promise<T>, (arg: T) => void] => {
  let resolve: ((arg: T) => void) | undefined;
  const promise = new Promise<T>((res) => {
    resolve = res;
  });
  return [promise, resolve!];
};
