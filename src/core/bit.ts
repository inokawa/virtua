// https://en.wikipedia.org/wiki/Fenwick_tree

import { append, clz32 } from "./utils";

declare const bitSymbol: unique symbol;
/** @internal */
export type BIT = { [bitSymbol]: never } & number[];

/** @internal */
export const init = (array: readonly number[]): BIT => {
  const length = array.length + 1;
  const bit = append([], length, 0);

  for (let i = 1; i < length; i++) {
    bit[i]! += array[i - 1]!;
    const parent = i + (i & -i);
    if (parent < length) {
      bit[parent]! += bit[i]!;
    }
  }
  return bit as BIT;
};

/** @internal */
export const push = (bit: BIT, value: number) => {
  const length = bit.length;
  const k = length & -length;
  for (let i = 1; i < k; i <<= 1) {
    value += bit[length - i]!;
  }
  bit.push(value);
};

/** @internal */
export const get = (bit: BIT, i: number): number => {
  let sum = 0;
  for (; i > 0; i -= i & -i) {
    sum += bit[i]!;
  }
  return sum;
};

/** @internal */
export const add = (bit: BIT, i: number, delta: number) => {
  for (; i < bit.length; i += i & -i) {
    bit[i]! += delta;
  }
};

/** @internal */
export const lowerBound = (bit: BIT, value: number): number => {
  if (value <= 0) {
    return 0;
  } else {
    const length = bit.length;
    let index = 0;
    for (let t = 1 << (31 - clz32(length - 1)); t > 0; t >>= 1) {
      const nextIndex = index + t;
      if (nextIndex < length && bit[nextIndex]! <= value) {
        value -= bit[nextIndex]!;
        index = nextIndex;
      }
    }
    return index;
  }
};
