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
export const once = <V>(fn: () => V): (() => V) => {
  let called: undefined | boolean;
  let cache: V;

  return () => {
    if (!called) {
      called = true;
      cache = fn();
    }
    return cache;
  };
};
