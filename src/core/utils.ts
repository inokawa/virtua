/** @internal */
export const NULL = null;

/** @internal */
export const { min, max, abs, floor } = Math;
/** @internal */
export const values = Object.values;
/** @internal */
export const timeout = setTimeout;

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
export const debounce = <T extends () => void>(fn: T, ms: number) => {
  let id: ReturnType<typeof setTimeout> | undefined | null;

  const cancel = () => {
    if (id != NULL) {
      clearTimeout(id);
    }
  };
  const debouncedFn = () => {
    cancel();
    id = timeout(() => {
      id = NULL;
      fn();
    }, ms);
  };
  debouncedFn._cancel = cancel;
  return debouncedFn;
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

/**
 * @internal
 */
export const getStyleNumber = (v: string): number => {
  if (v) {
    return parseFloat(v);
  } else {
    return 0;
  }
};
