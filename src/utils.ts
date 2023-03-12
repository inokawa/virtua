export const min = Math.min;
export const max = Math.max;
export const abs = Math.abs;

export const range = <T>(length: number, cb: (i: number) => T): T[] =>
  Array.from({ length }, (_, i) => cb(i));

export const debounce = <T extends (...args: any[]) => void>(
  fn: T,
  ms: number
) => {
  let id: NodeJS.Timeout | null = null;
  const cancel = () => {
    if (id != null) {
      clearTimeout(id);
    }
  };
  const debouncedFn = (...args: Parameters<T>) => {
    cancel();
    id = setTimeout(() => {
      id = null;
      fn(...args);
    }, ms);
  };
  debouncedFn._cancel = cancel;
  return debouncedFn;
};

export const throttle = <T extends (...args: any[]) => void>(
  fn: T,
  ms: number
) => {
  let time = Date.now() - ms;
  return (...args: Parameters<T>) => {
    const now = Date.now();
    if (time + ms < now) {
      time = now;
      fn(...args);
    }
  };
};
