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
  const debouncedFn = () => {
    cancel();
    id = setTimeout(() => {
      id = null;
      fn();
    }, ms);
  };
  debouncedFn._cancel = cancel;
  return debouncedFn;
};
