import { describe, it, expect } from "vitest";
import {
  getItemSize,
  setItemSize,
  getItemOffset,
  findIndex,
  type Cache,
  updateCacheLength,
  initCache,
  estimateDefaultItemSize,
  takeCacheSnapshot,
  UNCACHED,
} from "./cache.js";
import { init } from "./bit.js";
import { ItemsRange } from "./types.js";

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

const initCacheWithSizes = (
  sizes: readonly number[],
  defaultSize: number
): Cache => {
  return {
    _length: sizes.length,
    _sizes: [...sizes],
    _offsets: init(sizes.map((s) => (s === UNCACHED ? defaultSize : s))),
    _defaultItemSize: defaultSize,
  };
};

const getTotalSize = (cache: Cache) => getItemOffset(cache, cache._length);

describe(getItemSize.name, () => {
  const cache = initCacheWithSizes([10, -1], 20);

  it("should get height", () => {
    expect(getItemSize(cache, 0)).toBe(10);
  });
  it("should get default height", () => {
    expect(getItemSize(cache, 1)).toBe(20);
  });
});

describe(setItemSize.name, () => {
  it("should set at first", () => {
    const filledSizes = range(10, () => 20);
    const cache = initCacheWithSizes(filledSizes, 20);
    const initialOffsets = [...cache._offsets];

    setItemSize(cache, 0, 123);
    expect(cache._sizes).toEqual([123, 20, 20, 20, 20, 20, 20, 20, 20, 20]);
    expect(cache._offsets).not.toEqual(initialOffsets);
  });

  it("should set at middle", () => {
    const filledSizes = range(10, () => 20);
    const cache = initCacheWithSizes(filledSizes, 20);
    const initialOffsets = [...cache._offsets];

    setItemSize(cache, 4, 123);
    expect(cache._sizes).toEqual([20, 20, 20, 20, 123, 20, 20, 20, 20, 20]);
    expect(cache._offsets).not.toEqual(initialOffsets);
  });

  it("should set at last", () => {
    const filledSizes = range(10, () => 20);
    const cache = initCacheWithSizes(filledSizes, 20);
    const initialOffsets = [...cache._offsets];

    setItemSize(cache, cache._length - 1, 123);
    expect(cache._sizes).toEqual([20, 20, 20, 20, 20, 20, 20, 20, 20, 123]);
    expect(cache._offsets).not.toEqual(initialOffsets);
  });

  describe("should return measurement status", () => {
    it("should return false if already measured", () => {
      const filledSizes = range(10, () => 20);
      const cache = initCacheWithSizes(filledSizes, 20);

      const res = setItemSize(cache, 0, 123);
      expect(res).toBe(false);
    });

    it("should return true if not measured", () => {
      const emptySizes = range(10, () => -1);
      const cache = initCacheWithSizes(emptySizes, 20);

      const res = setItemSize(cache, 0, 123);
      expect(res).toBe(true);
    });
  });
});

describe(getItemOffset.name, () => {
  it("should get 0 if index is at start", () => {
    const filledSizes = range(10, () => 20);
    const cache = initCacheWithSizes(filledSizes, 30);

    expect(getItemOffset(cache, 0)).toBe(0);
  });

  it("should get 1 item if index is at start", () => {
    const filledSizes = range(10, () => 20);
    const cache = initCacheWithSizes(filledSizes, 30);

    expect(getItemOffset(cache, 1)).toBe(20);
  });

  it("should get total - 1 item if index is at last", () => {
    const filledSizes = range(10, () => 20);
    const cache = initCacheWithSizes(filledSizes, 30);

    const last = filledSizes.length - 1;
    expect(getItemOffset(cache, last)).toBe(
      sum(filledSizes) - filledSizes[last]!
    );
  });

  it("should resolve default height", () => {
    const emptySizes = range(10, () => -1);
    const cache = initCacheWithSizes(emptySizes, 30);

    expect(getItemOffset(cache, 2)).toBe(60);
  });

  it("should return 0 if cache length is 0", () => {
    const cache = initCacheWithSizes([], 30);

    expect(getItemOffset(cache, 0)).toBe(0);
    expect(getItemOffset(cache, 10)).toBe(0);
  });

  describe("total size", () => {
    it("should succeed if sizes is filled", () => {
      const filledSizes = range(10, () => 20);
      const cache = initCacheWithSizes(filledSizes, 30);

      expect(getTotalSize(cache)).toBe(sum(filledSizes));
    });

    it("should succeed if sizes is not filled", () => {
      const emptySizes = range(10, () => -1);
      const cache = initCacheWithSizes(emptySizes, 30);

      expect(getTotalSize(cache)).toBe(sum(range(10, () => 30)));
    });

    it("should return 0 if cache length is 0", () => {
      const cache = initCacheWithSizes([], 30);
      expect(getTotalSize(cache)).toBe(0);
    });
  });
});

describe(findIndex.name, () => {
  const CACHE_LENGTH = 10;

  it("should resolve default height", () => {
    const cache = initCacheWithSizes(
      range(10, () => -1),
      25
    );
    expect(findIndex(cache, 100)).toBe(4);
  });

  it("should get start if offset is at start", () => {
    const cache = initCacheWithSizes(
      range(CACHE_LENGTH, () => 20),
      30
    );
    expect(findIndex(cache, 0)).toBe(0);
  });

  it("should get start if offset is at start + 1px", () => {
    const cache = initCacheWithSizes(
      range(CACHE_LENGTH, () => 20),
      30
    );
    expect(findIndex(cache, 1)).toBe(0);
  });

  it("should get start if offset is at start + 0.01px", () => {
    const cache = initCacheWithSizes(
      range(CACHE_LENGTH, () => 20),
      30
    );
    expect(findIndex(cache, 0.01)).toBe(0);
  });

  it("should get start if offset is at start - 1px", () => {
    const cache = initCacheWithSizes(
      range(CACHE_LENGTH, () => 20),
      30
    );
    expect(findIndex(cache, -1)).toBe(0);
  });

  it("should get start if offset is at start - 0.01px", () => {
    const cache = initCacheWithSizes(
      range(CACHE_LENGTH, () => 20),
      30
    );
    expect(findIndex(cache, -0.01)).toBe(0);
  });

  it("should get end if offset is at end", () => {
    const cache = initCacheWithSizes(
      range(CACHE_LENGTH, () => 20),
      30
    );
    expect(findIndex(cache, sum(cache._sizes))).toBe(cache._length - 1);
  });

  it("should get end if offset is at end + 1px", () => {
    const cache = initCacheWithSizes(
      range(CACHE_LENGTH, () => 20),
      30
    );
    expect(findIndex(cache, sum(cache._sizes) + 1)).toBe(cache._length - 1);
  });

  it("should get end if offset is at end + 0.01px", () => {
    const cache = initCacheWithSizes(
      range(CACHE_LENGTH, () => 20),
      30
    );
    expect(findIndex(cache, sum(cache._sizes) + 0.01)).toBe(cache._length - 1);
  });

  it("should get end if offset is at end - 1px", () => {
    const cache = initCacheWithSizes(
      range(CACHE_LENGTH, () => 20),
      30
    );
    expect(findIndex(cache, sum(cache._sizes) - 1)).toBe(cache._length - 1);
  });

  it("should get end if offset is at end - 0.01px", () => {
    const cache = initCacheWithSizes(
      range(CACHE_LENGTH, () => 20),
      30
    );
    expect(findIndex(cache, sum(cache._sizes) - 0.01)).toBe(cache._length - 1);
  });

  it("should get 1 if offset fits index 1", () => {
    const cache = initCacheWithSizes(
      range(CACHE_LENGTH, () => 20),
      30
    );
    expect(findIndex(cache, 20)).toBe(1);
  });

  it("should get 1 if offset fits index 1 + 1px", () => {
    const cache = initCacheWithSizes(
      range(CACHE_LENGTH, () => 20),
      30
    );
    expect(findIndex(cache, 21)).toBe(1);
  });

  it("should get 1 if offset fits index 1 + 0.01px", () => {
    const cache = initCacheWithSizes(
      range(CACHE_LENGTH, () => 20),
      30
    );
    expect(findIndex(cache, 20.01)).toBe(1);
  });

  it("should get 0 if offset fits index 1 - 1px", () => {
    const cache = initCacheWithSizes(
      range(CACHE_LENGTH, () => 20),
      30
    );
    expect(findIndex(cache, 19)).toBe(0);
  });

  it("should get 0 if offset fits index 1 - 0.01px", () => {
    const cache = initCacheWithSizes(
      range(CACHE_LENGTH, () => 20),
      30
    );
    expect(findIndex(cache, 19.99)).toBe(0);
  });

  it("should get 1 if offset fits index 1.5", () => {
    const cache = initCacheWithSizes(
      range(CACHE_LENGTH, () => 20),
      30
    );
    expect(findIndex(cache, 30)).toBe(1);
  });

  it("should get 1 if offset fits index 1.5 + 1px", () => {
    const cache = initCacheWithSizes(
      range(CACHE_LENGTH, () => 20),
      30
    );
    expect(findIndex(cache, 31)).toBe(1);
  });

  it("should get 1 if offset fits index 1.5 + 0.01px", () => {
    const cache = initCacheWithSizes(
      range(CACHE_LENGTH, () => 20),
      30
    );
    expect(findIndex(cache, 30.01)).toBe(1);
  });

  it("should get 1 if offset fits index 1.5 - 1px", () => {
    const cache = initCacheWithSizes(
      range(CACHE_LENGTH, () => 20),
      30
    );
    expect(findIndex(cache, 29)).toBe(1);
  });

  it("should get 1 if offset fits index 1.5 - 0.01px", () => {
    const cache = initCacheWithSizes(
      range(CACHE_LENGTH, () => 20),
      30
    );
    expect(findIndex(cache, 29.99)).toBe(1);
  });

  describe("computeRange", () => {
    const computeRange = (
      cache: Cache,
      startOffset: number,
      endOffset: number
    ): ItemsRange => {
      return [findIndex(cache, startOffset), findIndex(cache, endOffset)];
    };
    const CACHE_LENGTH = 10;

    it("should get start if offset is at start", () => {
      expect(
        computeRange(
          initCacheWithSizes(
            range(CACHE_LENGTH, () => 20),
            30
          ),
          0,
          100
        )
      ).toEqual([0, 5]);
    });

    it("should get start + 1 if offset is at start + 1", () => {
      expect(
        computeRange(
          initCacheWithSizes(
            range(CACHE_LENGTH, () => 20),
            30
          ),
          20,
          20 + 100
        )
      ).toEqual([1, 6]);
    });

    it("should get last if offset is at end", () => {
      const cache = initCacheWithSizes(
        range(CACHE_LENGTH, () => 20),
        30
      );
      const last = cache._length - 1;
      const start = sum(cache._sizes);
      expect(computeRange(cache, start, start + 100)).toEqual([last, last]);
    });

    it("should get last if offset is at end - 1", () => {
      const cache = initCacheWithSizes(
        range(CACHE_LENGTH, () => 20),
        30
      );
      const last = cache._length - 1;
      const start = sum(cache._sizes) - 20;
      expect(computeRange(cache, start, start + 100)).toEqual([last, last]);
    });

    it("should get last - 1 if offset is at end - 1 and more", () => {
      const cache = initCacheWithSizes(
        range(CACHE_LENGTH, () => 20),
        30
      );
      const last = cache._length - 1;
      const start = sum(cache._sizes) - 20 - 1;
      expect(computeRange(cache, start, start + 100)).toEqual([last - 1, last]);
    });

    it("should get start if offset is before start", () => {
      const start = -1000;
      expect(
        computeRange(
          initCacheWithSizes(
            range(CACHE_LENGTH, () => 20),
            30
          ),
          start,
          start + 100
        )
      ).toEqual([0, 0]);
    });

    it("should get last if offset is after end", () => {
      const cache = initCacheWithSizes(
        range(CACHE_LENGTH, () => 20),
        30
      );
      const last = cache._length - 1;
      const start = sum(cache._sizes) + 1000;
      expect(computeRange(cache, start, start + 100)).toEqual([last, last]);
    });
  });
});

describe(estimateDefaultItemSize.name, () => {
  describe("start", () => {
    it("should update with 1 entry", () => {
      const cache = initCacheWithSizes(
        range(100, () => -1),
        30
      );
      const indexes = [0];
      indexes.forEach((i) => setItemSize(cache, i, 50));
      const init = structuredClone(cache);

      const diff = estimateDefaultItemSize(cache, 0);
      expect(cache._defaultItemSize).toBe(50);
      expect(cache._sizes).toEqual(init._sizes);
      expect(diff).toBe(0);
      expect(getTotalSize(cache)).toBe(
        getTotalSize(init) +
          (cache._defaultItemSize - init._defaultItemSize) *
            (100 - indexes.length)
      );
    });

    it("should update with some entry", () => {
      const cache = initCacheWithSizes(
        range(100, () => -1),
        30
      );
      const indexes = [0, 1, 2, 3];
      indexes.forEach((i) => setItemSize(cache, i, 50));
      const init = structuredClone(cache);

      const diff = estimateDefaultItemSize(cache, 0);
      expect(cache._defaultItemSize).toBe(50);
      expect(cache._sizes).toEqual(init._sizes);
      expect(diff).toBe(0);
      expect(getTotalSize(cache)).toBe(
        getTotalSize(init) +
          (cache._defaultItemSize - init._defaultItemSize) *
            (100 - indexes.length)
      );
    });

    it("should update with some entry from outside", () => {
      const cache = initCacheWithSizes(
        range(100, () => -1),
        30
      );
      const indexes = [20, 21, 22, 23];
      indexes.forEach((i) => setItemSize(cache, i, 50));
      const init = structuredClone(cache);

      const diff = estimateDefaultItemSize(cache, 0);
      expect(cache._defaultItemSize).toBe(50);
      expect(cache._sizes).toEqual(init._sizes);
      expect(diff).toBe(0);
      expect(getTotalSize(cache)).toBe(
        getTotalSize(init) +
          (cache._defaultItemSize - init._defaultItemSize) *
            (100 - indexes.length)
      );
    });
  });

  describe("end", () => {
    it("should update with 1 entry", () => {
      const cache = initCacheWithSizes(
        range(100, () => -1),
        30
      );
      const indexes = [92];
      indexes.forEach((i) => setItemSize(cache, i, 50));
      const init = structuredClone(cache);

      const diff = estimateDefaultItemSize(cache, cache._length - 10);
      expect(cache._defaultItemSize).toBe(50);
      expect(cache._sizes).toEqual(init._sizes);
      expect(diff).toBe((50 - 30) * 90);
      expect(getTotalSize(cache)).toBe(
        getTotalSize(init) +
          (cache._defaultItemSize - init._defaultItemSize) *
            (100 - indexes.length)
      );
    });

    it("should update with some entry", () => {
      const cache = initCacheWithSizes(
        range(100, () => -1),
        30
      );
      const indexes = [92, 93, 94, 95];
      indexes.forEach((i) => setItemSize(cache, i, 50));
      const init = structuredClone(cache);

      const diff = estimateDefaultItemSize(cache, cache._length - 10);
      expect(cache._defaultItemSize).toBe(50);
      expect(cache._sizes).toEqual(init._sizes);
      expect(diff).toBe((50 - 30) * 90);
      expect(getTotalSize(cache)).toBe(
        getTotalSize(init) +
          (cache._defaultItemSize - init._defaultItemSize) *
            (100 - indexes.length)
      );
    });

    it("should update with some entry from outside", () => {
      const cache = initCacheWithSizes(
        range(100, () => -1),
        30
      );
      const indexes = [20, 21, 22, 23];
      indexes.forEach((i) => setItemSize(cache, i, 50));
      const init = structuredClone(cache);

      const diff = estimateDefaultItemSize(cache, cache._length - 10);
      expect(cache._defaultItemSize).toBe(50);
      expect(cache._sizes).toEqual(init._sizes);
      expect(diff).toBe((50 - 30) * (90 - 4));
      expect(getTotalSize(cache)).toBe(
        getTotalSize(init) +
          (cache._defaultItemSize - init._defaultItemSize) *
            (100 - indexes.length)
      );
    });

    it("should update with some entry from near bound", () => {
      const cache = initCacheWithSizes(
        range(100, () => -1),
        30
      );
      const indexes = [88, 89, 90, 91];
      indexes.forEach((i) => setItemSize(cache, i, 50));
      const init = structuredClone(cache);

      const diff = estimateDefaultItemSize(cache, cache._length - 10);
      expect(cache._defaultItemSize).toBe(50);
      expect(cache._sizes).toEqual(init._sizes);
      expect(diff).toBe((50 - 30) * (90 - 2));
      expect(getTotalSize(cache)).toBe(
        getTotalSize(init) +
          (cache._defaultItemSize - init._defaultItemSize) *
            (100 - indexes.length)
      );
    });
  });
});

describe(initCache.name, () => {
  it("should create cache", () => {
    const itemLength = 10;
    const cache = initCache(itemLength, 23);
    expect(cache).toMatchInlineSnapshot(`
      {
        "_defaultItemSize": 23,
        "_length": 10,
        "_offsets": [
          0,
          23,
          46,
          23,
          92,
          23,
          46,
          23,
          184,
          23,
          46,
        ],
        "_sizes": [
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
        ],
      }
    `);
    expect(cache._length).toBe(itemLength);
    expect(cache._sizes.length).toBe(itemLength);
    expect(cache._offsets.length).toBe(itemLength + 1);
  });

  it("should restore cache from snapshot", () => {
    const itemLength = 10;
    const cache = initCache(itemLength, 23, [
      [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      123,
    ]);
    expect(cache).toMatchInlineSnapshot(`
      {
        "_defaultItemSize": 123,
        "_length": 10,
        "_offsets": [
          0,
          0,
          1,
          2,
          6,
          4,
          9,
          6,
          28,
          8,
          17,
        ],
        "_sizes": [
          0,
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
        ],
      }
    `);
    expect(cache._length).toBe(itemLength);
    expect(cache._sizes.length).toBe(itemLength);
    expect(cache._offsets.length).toBe(itemLength + 1);
  });

  it("should restore cache from snapshot which has shorter length", () => {
    const itemLength = 10;
    const cache = initCache(itemLength, 23, [[0, 1, 2, 3, 4], 123]);
    expect(cache).toMatchInlineSnapshot(`
      {
        "_defaultItemSize": 123,
        "_length": 10,
        "_offsets": [
          0,
          0,
          1,
          2,
          6,
          4,
          127,
          123,
          379,
          123,
          246,
        ],
        "_sizes": [
          0,
          1,
          2,
          3,
          4,
          -1,
          -1,
          -1,
          -1,
          -1,
        ],
      }
    `);
    expect(cache._length).toBe(itemLength);
    expect(cache._sizes.length).toBe(itemLength);
    expect(cache._offsets.length).toBe(itemLength + 1);
  });

  it("should restore cache from snapshot which has longer length", () => {
    const itemLength = 10;
    const cache = initCache(itemLength, 23, [
      [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      123,
    ]);
    expect(cache).toMatchInlineSnapshot(`
      {
        "_defaultItemSize": 123,
        "_length": 10,
        "_offsets": [
          0,
          0,
          1,
          2,
          6,
          4,
          9,
          6,
          28,
          8,
          17,
        ],
        "_sizes": [
          0,
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
        ],
      }
    `);
    expect(cache._length).toBe(itemLength);
    expect(cache._sizes.length).toBe(itemLength);
    expect(cache._offsets.length).toBe(itemLength + 1);
  });
});

describe(takeCacheSnapshot.name, () => {
  it("smoke", () => {
    const cache = initCacheWithSizes(
      range(10, (i) => (i + 1) * 10),
      40
    );
    const snapshot = takeCacheSnapshot(cache);
    expect(snapshot).toMatchInlineSnapshot(`
      [
        [
          10,
          20,
          30,
          40,
          50,
          60,
          70,
          80,
          90,
          100,
        ],
        40,
      ]
    `);

    // Check if modifying snapshot doesn't affect cache
    const clonedSnapshot = structuredClone(snapshot);
    snapshot[0][0] = 999;
    snapshot[1] = 123;
    expect(snapshot).not.toEqual(clonedSnapshot);
    expect(takeCacheSnapshot(cache)).toEqual(clonedSnapshot);
  });
});

describe(updateCacheLength.name, () => {
  it("should recover cache length from 0", () => {
    const cache = initCache(10, 40);
    const initialCache = structuredClone(cache);
    updateCacheLength(cache, 0);
    updateCacheLength(cache, 10);
    expect(cache).toEqual(initialCache);
  });

  it("should increase cache length", () => {
    const cache = initCache(10, 40);
    const cloned = structuredClone(cache);
    const res = updateCacheLength(cache, 15, undefined);
    expect(res).toEqual(40 * 5);
    expect(cache).toMatchInlineSnapshot(`
      {
        "_defaultItemSize": 40,
        "_length": 15,
        "_offsets": [
          0,
          40,
          80,
          40,
          160,
          40,
          80,
          40,
          320,
          40,
          80,
          40,
          160,
          40,
          80,
          40,
        ],
        "_sizes": [
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
        ],
      }
    `);
    expect(getTotalSize(cache)).toBe(getTotalSize(cloned) + res);
  });

  it("should increase filled cache length", () => {
    const sizes = range(10, (i) => (i + 1) * 10);
    const cache = initCacheWithSizes(sizes, 40);
    const cloned = structuredClone(cache);
    const res = updateCacheLength(cache, 15, undefined);
    expect(res).toEqual(40 * 5);
    expect(cache).toMatchInlineSnapshot(`
      {
        "_defaultItemSize": 40,
        "_length": 15,
        "_offsets": [
          0,
          0,
          10,
          20,
          60,
          40,
          90,
          60,
          280,
          80,
          170,
          40,
          250,
          40,
          80,
          40,
        ],
        "_sizes": [
          10,
          20,
          30,
          40,
          50,
          60,
          70,
          80,
          90,
          100,
          -1,
          -1,
          -1,
          -1,
          -1,
        ],
      }
    `);
    expect(getTotalSize(cache)).toBe(getTotalSize(cloned) + res);
  });

  it("should decrease cache length", () => {
    const cache = initCache(10, 40);
    const cloned = structuredClone(cache);
    const res = updateCacheLength(cache, 5, undefined);
    expect(res).toEqual(-(40 * 5));
    expect(cache).toMatchInlineSnapshot(`
      {
        "_defaultItemSize": 40,
        "_length": 5,
        "_offsets": [
          0,
          40,
          80,
          40,
          160,
          40,
        ],
        "_sizes": [
          -1,
          -1,
          -1,
          -1,
          -1,
        ],
      }
    `);
    expect(getTotalSize(cache)).toBe(getTotalSize(cloned) + res);
  });

  it("should decrease filled cache length", () => {
    const sizes = range(10, (i) => (i + 1) * 10);
    const cache = initCacheWithSizes(sizes, 40);
    const cloned = structuredClone(cache);
    const res = updateCacheLength(cache, 5, undefined);
    expect(res).toEqual(-sum(sizes.slice(-5)));
    expect(cache).toMatchInlineSnapshot(`
      {
        "_defaultItemSize": 40,
        "_length": 5,
        "_offsets": [
          0,
          0,
          10,
          20,
          60,
          40,
        ],
        "_sizes": [
          10,
          20,
          30,
          40,
          50,
        ],
      }
    `);
    expect(getTotalSize(cache)).toBe(getTotalSize(cloned) + res);
  });

  it("should increase cache length with shifting", () => {
    const cache = initCache(10, 40);
    const cloned = structuredClone(cache);
    const res = updateCacheLength(cache, 15, true);
    expect(res).toEqual(40 * 5);
    expect(cache).toMatchInlineSnapshot(`
      {
        "_defaultItemSize": 40,
        "_length": 15,
        "_offsets": [
          0,
          40,
          80,
          40,
          160,
          40,
          80,
          40,
          320,
          40,
          80,
          40,
          160,
          40,
          80,
          40,
        ],
        "_sizes": [
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
        ],
      }
    `);
    expect(getTotalSize(cache)).toBe(getTotalSize(cloned) + res);
  });

  it("should increase filled cache length with shifting", () => {
    const sizes = range(10, (i) => (i + 1) * 10);
    const cache = initCacheWithSizes(sizes, 40);
    const cloned = structuredClone(cache);
    const res = updateCacheLength(cache, 15, true);
    expect(res).toEqual(40 * 5);
    expect(cache).toMatchInlineSnapshot(`
      {
        "_defaultItemSize": 40,
        "_length": 15,
        "_offsets": [
          0,
          40,
          80,
          40,
          160,
          40,
          40,
          10,
          230,
          30,
          70,
          50,
          180,
          70,
          150,
          90,
        ],
        "_sizes": [
          -1,
          -1,
          -1,
          -1,
          -1,
          10,
          20,
          30,
          40,
          50,
          60,
          70,
          80,
          90,
          100,
        ],
      }
    `);
    expect(getTotalSize(cache)).toBe(getTotalSize(cloned) + res);
  });

  it("should decrease cache length with shifting", () => {
    const cache = initCache(10, 40);
    const cloned = structuredClone(cache);
    const res = updateCacheLength(cache, 5, true);
    expect(res).toEqual(-(40 * 5));
    expect(cache).toMatchInlineSnapshot(`
      {
        "_defaultItemSize": 40,
        "_length": 5,
        "_offsets": [
          0,
          40,
          80,
          40,
          160,
          40,
        ],
        "_sizes": [
          -1,
          -1,
          -1,
          -1,
          -1,
        ],
      }
    `);
    expect(getTotalSize(cache)).toBe(getTotalSize(cloned) + res);
  });

  it("should decrease filled cache length with shifting", () => {
    const sizes = range(10, (i) => (i + 1) * 10);
    const cache = initCacheWithSizes(sizes, 40);
    const cloned = structuredClone(cache);
    const res = updateCacheLength(cache, 5, true);
    expect(res).toEqual(-sum(sizes.slice(0, 5)));
    expect(cache).toMatchInlineSnapshot(`
      {
        "_defaultItemSize": 40,
        "_length": 5,
        "_offsets": [
          0,
          50,
          110,
          70,
          260,
          90,
        ],
        "_sizes": [
          60,
          70,
          80,
          90,
          100,
        ],
      }
    `);
    expect(getTotalSize(cache)).toBe(getTotalSize(cloned) + res);
  });
});
