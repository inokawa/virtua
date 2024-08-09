/** @internal */
export const NULL = null;

/** @internal */
export const min = Math.min;
/** @internal */
export const max = Math.max;
/** @internal */
export const abs = Math.abs;
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
  maxValue: number,
): number => min(maxValue, max(minValue, value));

/**
 * @internal
 */
export const sort = <T extends number>(arr: readonly T[]): T[] => {
  return [...arr].sort((a, b) => a - b);
};

function swap(arr: number[], i: number, j: number): void {
  const temp = arr[i]!;
  arr[i] = arr[j]!;
  arr[j] = temp;
}

// Typescript implementation of C quickselect
// http://ndevilla.free.fr/median/median/
// http://ndevilla.free.fr/median/median/src/quickselect.c
function quickSelect(arr: number[], n: number): number {
  let low = 0;
  let high = n - 1;
  let median = Math.floor((low + high) / 2);

  while (true) {
    if (high <= low) {
      return arr[median]!;
    }

    if (high === low + 1) {
      if (arr[low]! > arr[high]!) {
        swap(arr, low, high);
      }
      return arr[median]!;
    }

    // Find median of low, middle, and high items; swap into position low
    let middle = Math.floor((low + high) / 2);

    if (arr[middle]! > arr[high]!) swap(arr, middle, high);
    if (arr[low]! > arr[high]!) swap(arr, low, high);
    if (arr[middle]! > arr[low]!) swap(arr, middle, low);

    // Swap low item (now in position middle) into position (low + 1)
    swap(arr, middle, low + 1);

    // Nibble from each end towards middle, swapping items when stuck
    let ll = low + 1;
    let hh = high;

    while (true) {
      do ll++;
      while (arr[ll]! < arr[low]!);
      do hh--;
      while (arr[hh]! > arr[low]!);

      if (hh < ll) break;

      swap(arr, ll, hh);
    }

    // Swap middle item (in position low) back into the correct position
    swap(arr, low, hh);

    // Re-set active partition
    if (hh <= median) low = ll;
    if (hh >= median) high = hh - 1;
  }
}

/**
 * @internal
 */
export const median = (arr: number[]): number => quickSelect(arr, arr.length);

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
 * @internal
 */
export const getStyleNumber = (v: string): number => {
  if (v) {
    return parseFloat(v);
  } else {
    return 0;
  }
};
