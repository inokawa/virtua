import { describe, it, expect } from "vitest";
import { findIndex } from "./cache.js";

const range = <T>(length: number, cb: (i: number) => T): T[] => {
  const array: T[] = [];
  for (let i = 0; i < length; i++) {
    array.push(cb(i));
  }
  return array;
};

const sum = (cache: readonly number[]): number => {
  return cache.reduce((acc, c) => acc + c, 0);
};

type TestCache = {
  _sizes: number[];
  _length: number;
  _defaultItemSize: number;
};

const initCacheWithSizes = (
  sizes: readonly number[],
  defaultSize: number,
): TestCache => {
  return {
    _sizes: [...sizes],
    _length: sizes.length,
    _defaultItemSize: defaultSize,
  };
};

const initCacheWithSizesAndEmptyOffsets = initCacheWithSizes;

const offsetGetterOf = (cache: TestCache) => {
  const offsets: number[] = [0];
  for (let i = 0; i < cache._length; i++) {
    const size = cache._sizes[i]!;
    offsets.push(offsets[i]! + (size === -1 ? cache._defaultItemSize : size));
  }
  return (index: number) => offsets[index]!;
};

const findIndexInCache = (
  cache: TestCache,
  offset: number,
  low?: number,
  high?: number,
) => findIndex(offsetGetterOf(cache), cache._length, offset, low, high);

describe(findIndex.name, () => {
  const CACHE_LENGTH = 10;

  it("should resolve default height", () => {
    const cache = initCacheWithSizesAndEmptyOffsets(
      range(10, () => -1),
      25,
    );
    expect(findIndexInCache(cache, 100)).toBe(4);
  });

  it("should get start if offset exceeds start", () => {
    const cache = initCacheWithSizes(
      range(CACHE_LENGTH, () => 20),
      30,
    );
    expect(findIndexInCache(cache, -Number.MAX_SAFE_INTEGER)).toBe(0);
  });

  it("should get start if offset is at start", () => {
    const cache = initCacheWithSizes(
      range(CACHE_LENGTH, () => 20),
      30,
    );
    expect(findIndexInCache(cache, 0)).toBe(0);
  });

  it("should get start if offset is at start + 1px", () => {
    const cache = initCacheWithSizes(
      range(CACHE_LENGTH, () => 20),
      30,
    );
    expect(findIndexInCache(cache, 1)).toBe(0);
  });

  it("should get start if offset is at start + 0.01px", () => {
    const cache = initCacheWithSizes(
      range(CACHE_LENGTH, () => 20),
      30,
    );
    expect(findIndexInCache(cache, 0.01)).toBe(0);
  });

  it("should get start if offset is at start - 1px", () => {
    const cache = initCacheWithSizes(
      range(CACHE_LENGTH, () => 20),
      30,
    );
    expect(findIndexInCache(cache, -1)).toBe(0);
  });

  it("should get start if offset is at start - 0.01px", () => {
    const cache = initCacheWithSizes(
      range(CACHE_LENGTH, () => 20),
      30,
    );
    expect(findIndexInCache(cache, -0.01)).toBe(0);
  });

  it("should get end if offset is at end", () => {
    const cache = initCacheWithSizes(
      range(CACHE_LENGTH, () => 20),
      30,
    );
    expect(findIndexInCache(cache, sum(cache._sizes))).toBe(cache._length - 1);
  });

  it("should get end if offset is at end + 1px", () => {
    const cache = initCacheWithSizes(
      range(CACHE_LENGTH, () => 20),
      30,
    );
    expect(findIndexInCache(cache, sum(cache._sizes) + 1)).toBe(
      cache._length - 1,
    );
  });

  it("should get end if offset is at end + 0.01px", () => {
    const cache = initCacheWithSizes(
      range(CACHE_LENGTH, () => 20),
      30,
    );
    expect(findIndexInCache(cache, sum(cache._sizes) + 0.01)).toBe(
      cache._length - 1,
    );
  });

  it("should get end if offset is at end - 1px", () => {
    const cache = initCacheWithSizes(
      range(CACHE_LENGTH, () => 20),
      30,
    );
    expect(findIndexInCache(cache, sum(cache._sizes) - 1)).toBe(
      cache._length - 1,
    );
  });

  it("should get end if offset is at end - 0.01px", () => {
    const cache = initCacheWithSizes(
      range(CACHE_LENGTH, () => 20),
      30,
    );
    expect(findIndexInCache(cache, sum(cache._sizes) - 0.01)).toBe(
      cache._length - 1,
    );
  });

  it("should get end if offset exceeds end", () => {
    const cache = initCacheWithSizes(
      range(CACHE_LENGTH, () => 20),
      30,
    );
    expect(findIndexInCache(cache, Number.MAX_SAFE_INTEGER)).toBe(
      cache._length - 1,
    );
  });

  it("should get 1 if offset fits index 1", () => {
    const cache = initCacheWithSizes(
      range(CACHE_LENGTH, () => 20),
      30,
    );
    expect(findIndexInCache(cache, 20)).toBe(1);
  });

  it("should get 1 if offset fits index 1 + 1px", () => {
    const cache = initCacheWithSizes(
      range(CACHE_LENGTH, () => 20),
      30,
    );
    expect(findIndexInCache(cache, 21)).toBe(1);
  });

  it("should get 1 if offset fits index 1 + 0.01px", () => {
    const cache = initCacheWithSizes(
      range(CACHE_LENGTH, () => 20),
      30,
    );
    expect(findIndexInCache(cache, 20.01)).toBe(1);
  });

  it("should get 0 if offset fits index 1 - 1px", () => {
    const cache = initCacheWithSizes(
      range(CACHE_LENGTH, () => 20),
      30,
    );
    expect(findIndexInCache(cache, 19)).toBe(0);
  });

  it("should get 0 if offset fits index 1 - 0.01px", () => {
    const cache = initCacheWithSizes(
      range(CACHE_LENGTH, () => 20),
      30,
    );
    expect(findIndexInCache(cache, 19.99)).toBe(0);
  });

  it("should get 1 if offset fits index 1.5", () => {
    const cache = initCacheWithSizes(
      range(CACHE_LENGTH, () => 20),
      30,
    );
    expect(findIndexInCache(cache, 30)).toBe(1);
  });

  it("should get 1 if offset fits index 1.5 + 1px", () => {
    const cache = initCacheWithSizes(
      range(CACHE_LENGTH, () => 20),
      30,
    );
    expect(findIndexInCache(cache, 31)).toBe(1);
  });

  it("should get 1 if offset fits index 1.5 + 0.01px", () => {
    const cache = initCacheWithSizes(
      range(CACHE_LENGTH, () => 20),
      30,
    );
    expect(findIndexInCache(cache, 30.01)).toBe(1);
  });

  it("should get 1 if offset fits index 1.5 - 1px", () => {
    const cache = initCacheWithSizes(
      range(CACHE_LENGTH, () => 20),
      30,
    );
    expect(findIndexInCache(cache, 29)).toBe(1);
  });

  it("should get 1 if offset fits index 1.5 - 0.01px", () => {
    const cache = initCacheWithSizes(
      range(CACHE_LENGTH, () => 20),
      30,
    );
    expect(findIndexInCache(cache, 29.99)).toBe(1);
  });

  it("should not get items with size 0", () => {
    const CACHE_LENGTH = 20;
    const sizes = range(CACHE_LENGTH, (i) =>
      [0, 1, CACHE_LENGTH - 2, CACHE_LENGTH - 1].includes(i) ? 20 : 0,
    );
    const cache = initCacheWithSizes(sizes, 30);
    expect(findIndexInCache(cache, sum(sizes) / 2 - 0.00001)).toBe(
      sizes.findIndex((s) => s === 0) - 1,
    );
    expect(findIndexInCache(cache, sum(sizes) / 2)).toBe(
      sizes.findLastIndex((s) => s === 0) + 1,
    );
  });
});
