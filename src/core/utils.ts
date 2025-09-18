/** @internal */
export const NULL = null;

/** @internal */
export const { min, max, abs, floor } = Math;

/**
 * @internal
 */
export const clamp = (
  value: number,
  minValue: number,
  maxValue: number
): number => min(maxValue, max(minValue, value));

/**
 * @internal
 */
export const sort = <T extends number>(arr: readonly T[]): T[] => {
  return [...arr].sort((a, b) => a - b);
};

/**
 * @internal
 */
export const microtask: (fn: () => void) => void =
  typeof queueMicrotask === "function"
    ? queueMicrotask
    : (fn) => {
        Promise.resolve().then(fn);
      };

/**
 * @internal
 */
export const createPromise = (): [Promise<void>, () => void, () => void] => {
  let resolve: (() => void) | undefined;
  let reject: (() => void) | undefined;
  const promise = new Promise<void>((res, rej) => {
    resolve = res;
    reject = rej;
  });
  return [promise, resolve!, reject!];
};

/**
 * @internal
 */
export const once = <T>(fn: () => T): (() => T) => {
  let cache: T;

  return () => {
    if (fn) {
      cache = fn();
      fn = undefined!;
    }
    return cache;
  };
};
