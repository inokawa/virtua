export const min = Math.min;
export const max = Math.max;
export const abs = Math.abs;
export const now = Date.now;
export const values = Object.values;
export const isArray = Array.isArray;
export const timeout = setTimeout;

export const clamp = (
  value: number,
  minValue: number,
  maxValue: number
): number => min(maxValue, max(minValue, value));

export const exists = <T>(v: T): v is Exclude<T, null | undefined> => v != null;

export const fill = <T>(length: number, value: T): T[] => {
  const array: T[] = [];
  for (let i = 0; i < length; i++) {
    array.push(value);
  }
  return array;
};

export const median = (arr: number[]): number => {
  const s = [...arr].sort((a, b) => a - b);
  const mid = (arr.length / 2) | 0;
  return s.length % 2 === 0 ? (s[mid - 1]! + s[mid]!) / 2 : s[mid]!;
};

export const debounce = <T extends (...args: any[]) => void>(
  fn: T,
  ms: number
) => {
  let id: NodeJS.Timeout | undefined | null;

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

// wrap for SSR
export const computeStyle = (e: HTMLElement) => getComputedStyle(e);

export const getStyleNumber = (v: string): number => {
  if (v) {
    return parseFloat(v);
  } else {
    return 0;
  }
};
