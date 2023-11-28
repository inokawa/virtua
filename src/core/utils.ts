/** @internal */
export const min = Math.min;
/** @internal */
export const max = Math.max;
/** @internal */
export const abs = Math.abs;
/** @internal */
export const now = Date.now;
/** @internal */
export const values = Object.values;
/** @internal */
export const isArray = Array.isArray;
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
export const exists = <T>(v: T): v is Exclude<T, null | undefined> => v != null;

/**
 * @internal
 */
export const median = (arr: number[]): number => {
  const s = [...arr].sort((a, b) => a - b);
  const mid = (arr.length / 2) | 0;
  return s.length % 2 === 0 ? (s[mid - 1]! + s[mid]!) / 2 : s[mid]!;
};

/**
 * @internal
 */
export const debounce = <T extends (...args: any[]) => void>(
  fn: T,
  ms: number
) => {
  let id: ReturnType<typeof setTimeout> | undefined | null;

  const cancel = () => {
    if (exists(id)) {
      clearTimeout(id);
    }
  };
  const debouncedFn = () => {
    cancel();
    id = timeout(() => {
      id = null;
      fn();
    }, ms);
  };
  debouncedFn._cancel = cancel;
  return debouncedFn;
};

/**
 * @internal
 */
export const throttle = <T extends (...args: any[]) => void>(
  fn: T,
  ms: number
) => {
  let time = now() - ms;
  return (...args: Parameters<T>) => {
    const n = now();
    if (time + ms < n) {
      time = n;
      fn(...args);
    }
  };
};

/**
 * @internal
 */
export const once = <F extends (...args: any[]) => any>(fn: F): F => {
  let called: undefined | boolean;
  let cache: ReturnType<F>;

  return ((...args) => {
    if (!called) {
      called = true;
      cache = fn(...args);
    }
    return cache;
  }) as F;
};

/**
 * wrap for SSR
 * @internal
 */
export const computeStyle = (e: HTMLElement) => getComputedStyle(e);

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
