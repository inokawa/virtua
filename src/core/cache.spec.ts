import { describe, it, expect } from "vitest";
import {
  getItemSize,
  setItemSize,
  computeTotalSize,
  computeOffset,
  findIndex,
  type Cache,
  updateCacheLength,
  initCache,
  computeRange,
  estimateDefaultItemSize,
  takeCacheSnapshot,
} from "./cache";

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

const initCacheWithComputedOffsets = (
  sizes: readonly number[],
  defaultSize: number
): Cache => {
  return {
    _length: sizes.length,
    _sizes: [...sizes],
    _computedOffsetIndex: sizes.length - 1,
    _offsets: sizes.reduce((acc, s, i) => {
      acc.push(i === 0 ? 0 : acc[i - 1]! + s);
      return acc;
    }, [] as number[]),
    _defaultItemSize: defaultSize,
  };
};

const initCacheWithEmptyOffsets = (
  sizes: readonly number[],
  defaultSize: number
): Cache => {
  return {
    _length: sizes.length,
    _sizes: [...sizes],
    _computedOffsetIndex: -1,
    _offsets: range(sizes.length, () => -1),
    _defaultItemSize: defaultSize,
  };
};

const initCacheWithOffsets = (
  sizes: readonly number[],
  offsets: readonly number[],
  defaultSize: number
): Cache => {
  if (sizes.length !== offsets.length) {
    throw new Error("wrong offsets for sizes");
  }
  return {
    _length: sizes.length,
    _sizes: [...sizes],
    _computedOffsetIndex: offsets.findIndex((o) => o === -1) - 1,
    _offsets: [...offsets],
    _defaultItemSize: defaultSize,
  };
};

describe(getItemSize.name, () => {
  const cache = initCacheWithEmptyOffsets([10, -1], 20);

  it("should get height", () => {
    expect(getItemSize(cache, 0)).toBe(10);
  });
  it("should get default height", () => {
    expect(getItemSize(cache, 1)).toBe(20);
  });
});

describe(setItemSize.name, () => {
  describe("with offsets not measured", () => {
    it("should set at first", () => {
      const filledSizes = range(10, () => 20);
      const cache = initCacheWithEmptyOffsets(filledSizes, 20);
      const initialOffsets = [...cache._offsets];
      const initialComputedOffsetIndex = cache._computedOffsetIndex;

      setItemSize(cache, 0, 123);
      expect(cache._sizes).toEqual([123, 20, 20, 20, 20, 20, 20, 20, 20, 20]);
      expect(cache._offsets).toEqual(initialOffsets);
      expect(cache._computedOffsetIndex).toBe(initialComputedOffsetIndex);
    });

    it("should set at middle", () => {
      const filledSizes = range(10, () => 20);
      const cache = initCacheWithEmptyOffsets(filledSizes, 20);
      const initialOffsets = [...cache._offsets];
      const initialComputedOffsetIndex = cache._computedOffsetIndex;

      setItemSize(cache, 4, 123);
      expect(cache._sizes).toEqual([20, 20, 20, 20, 123, 20, 20, 20, 20, 20]);
      expect(cache._offsets).toEqual(initialOffsets);
      expect(cache._computedOffsetIndex).toBe(initialComputedOffsetIndex);
    });

    it("should set at last", () => {
      const filledSizes = range(10, () => 20);
      const cache = initCacheWithEmptyOffsets(filledSizes, 20);
      const initialOffsets = [...cache._offsets];
      const initialComputedOffsetIndex = cache._computedOffsetIndex;

      setItemSize(cache, cache._length - 1, 123);
      expect(cache._sizes).toEqual([20, 20, 20, 20, 20, 20, 20, 20, 20, 123]);
      expect(cache._offsets).toEqual(initialOffsets);
      expect(cache._computedOffsetIndex).toBe(initialComputedOffsetIndex);
    });
  });

  describe("with offsets measured", () => {
    it("should update measuredOffsetIndex if size is changed before measuredOffsetIndex", () => {
      const filledSizes = range(10, () => 20);
      const cache = initCacheWithOffsets(
        filledSizes,
        [0, 10, 20, 30, 40, -1, -1, -1, -1, -1],
        20
      );

      setItemSize(cache, 1, 123);
      expect(cache._sizes).toEqual([20, 123, 20, 20, 20, 20, 20, 20, 20, 20]);
      expect(cache._offsets).toEqual([0, 10, 20, 30, 40, -1, -1, -1, -1, -1]);
      expect(cache._computedOffsetIndex).toBe(1);
    });

    it("should not update measuredOffsetIndex if size is changed at measuredOffsetIndex", () => {
      const filledSizes = range(10, () => 20);
      const cache = initCacheWithOffsets(
        filledSizes,
        [0, 10, 20, 30, 40, -1, -1, -1, -1, -1],
        20
      );

      setItemSize(cache, 4, 123);
      expect(cache._sizes).toEqual([20, 20, 20, 20, 123, 20, 20, 20, 20, 20]);
      expect(cache._offsets).toEqual([0, 10, 20, 30, 40, -1, -1, -1, -1, -1]);
      expect(cache._computedOffsetIndex).toBe(4);
    });

    it("should not update measuredOffsetIndex if size is changed after measuredOffsetIndex", () => {
      const filledSizes = range(10, () => 20);
      const cache = initCacheWithOffsets(
        filledSizes,
        [0, 10, 20, 30, 40, -1, -1, -1, -1, -1],
        20
      );

      setItemSize(cache, 5, 123);
      expect(cache._sizes).toEqual([20, 20, 20, 20, 20, 123, 20, 20, 20, 20]);
      expect(cache._offsets).toEqual([0, 10, 20, 30, 40, -1, -1, -1, -1, -1]);
      expect(cache._computedOffsetIndex).toBe(4);
    });
  });

  describe("should return measurement status", () => {
    it("should return false if already measured", () => {
      const filledSizes = range(10, () => 20);
      const cache = initCacheWithEmptyOffsets(filledSizes, 20);

      const res = setItemSize(cache, 0, 123);
      expect(res).toBe(false);
    });

    it("should return true if not measured", () => {
      const emptySizes = range(10, () => -1);
      const cache = initCacheWithEmptyOffsets(emptySizes, 20);

      const res = setItemSize(cache, 0, 123);
      expect(res).toBe(true);
    });
  });
});

describe(computeOffset.name, () => {
  it("should get 0 if index is at start", () => {
    const filledSizes = range(10, () => 20);
    const cache = initCacheWithEmptyOffsets(filledSizes, 30);

    expect(computeOffset(cache, 0)).toBe(0);
    expect(cache._offsets).toEqual([0, -1, -1, -1, -1, -1, -1, -1, -1, -1]);
  });

  it("should get 1 item if index is at start", () => {
    const filledSizes = range(10, () => 20);
    const cache = initCacheWithEmptyOffsets(filledSizes, 30);

    expect(computeOffset(cache, 1)).toBe(20);
    expect(cache._offsets).toEqual([0, 20, -1, -1, -1, -1, -1, -1, -1, -1]);
  });

  it("should get total - 1 item if index is at last", () => {
    const filledSizes = range(10, () => 20);
    const cache = initCacheWithEmptyOffsets(filledSizes, 30);

    const last = filledSizes.length - 1;
    expect(computeOffset(cache, last)).toBe(
      sum(filledSizes) - filledSizes[last]!
    );
    expect(cache._offsets).toEqual([
      0, 20, 40, 60, 80, 100, 120, 140, 160, 180,
    ]);
  });

  it("should resolve default height", () => {
    const emptySizes = range(10, () => -1);
    const cache = initCacheWithEmptyOffsets(emptySizes, 30);

    expect(computeOffset(cache, 2)).toBe(60);
    expect(cache._offsets).toEqual([0, 30, 60, -1, -1, -1, -1, -1, -1, -1]);
  });

  it("should return 0 if cache length is 0", () => {
    const cache = initCacheWithEmptyOffsets([], 30);

    expect(computeOffset(cache, 0)).toBe(0);
    expect(computeOffset(cache, 10)).toBe(0);
    expect(cache._offsets).toEqual([]);
  });

  describe("with cached offsets", () => {
    it("should return cached offset if index is before measuredOffsetIndex", () => {
      const filledSizes = range(10, () => 20);
      const cache = initCacheWithOffsets(
        filledSizes,
        [0, 11, 22, 33, -1, -1, -1, -1, -1, -1],
        30
      );

      expect(computeOffset(cache, 2)).toBe(22);
      expect(cache._offsets).toEqual([0, 11, 22, 33, -1, -1, -1, -1, -1, -1]);
    });

    it("should return cached offset if index is the same as measuredOffsetIndex", () => {
      const filledSizes = range(10, () => 20);
      const cache = initCacheWithOffsets(
        filledSizes,
        [0, 11, 22, 33, -1, -1, -1, -1, -1, -1],
        30
      );

      expect(computeOffset(cache, 3)).toBe(33);
      expect(cache._offsets).toEqual([0, 11, 22, 33, -1, -1, -1, -1, -1, -1]);
    });

    it("should start from cached offset if index is after measuredOffsetIndex", () => {
      const filledSizes = range(10, () => 20);
      const cache = initCacheWithOffsets(
        filledSizes,
        [0, 11, 22, 33, -1, -1, -1, -1, -1, -1],
        30
      );

      expect(computeOffset(cache, 5)).toBe(33 + 20 * 2);
      expect(cache._offsets).toEqual([0, 11, 22, 33, 53, 73, -1, -1, -1, -1]);
    });
  });
});

describe(computeTotalSize.name, () => {
  it("should succeed if sizes is filled", () => {
    const filledSizes = range(10, () => 20);
    const cache = initCacheWithEmptyOffsets(filledSizes, 30);

    expect(computeTotalSize(cache)).toBe(sum(filledSizes));
    expect(cache._offsets).toEqual([
      0, 20, 40, 60, 80, 100, 120, 140, 160, 180,
    ]);
  });

  it("should succeed if sizes is not filled", () => {
    const emptySizes = range(10, () => -1);
    const cache = initCacheWithEmptyOffsets(emptySizes, 30);

    expect(computeTotalSize(cache)).toBe(sum(range(10, () => 30)));
    expect(cache._offsets).toEqual([
      0, 30, 60, 90, 120, 150, 180, 210, 240, 270,
    ]);
  });

  it("should return 0 if cache length is 0", () => {
    const cache = initCacheWithEmptyOffsets([], 30);
    expect(computeTotalSize(cache)).toBe(0);
    expect(cache._offsets).toEqual([]);
  });

  describe("with cached offsets", () => {
    it("should start from cached offset if measuredOffsetIndex is at cached", () => {
      const filledSizes = range(10, () => 20);
      const offsets = [0, 11, 22, 33, -1, -1, -1, -1, -1, -1];
      const cache: Cache = {
        _length: filledSizes.length,
        _sizes: filledSizes,
        _computedOffsetIndex: 2,
        _offsets: offsets,
        _defaultItemSize: 30,
      };
      expect(computeTotalSize(cache)).toBe(sum(range(8, () => 20)) + 22);
      expect(cache._offsets).toEqual([
        0, 11, 22, 42, 62, 82, 102, 122, 142, 162,
      ]);
    });

    it("should return cached offset + 1 item size if measuredOffsetIndex is at end", () => {
      const filledSizes = range(10, () => 20);
      const offsets = [0, 11, 22, 33, 44, 55, 66, 77, 88, 99];
      const cache: Cache = {
        _length: filledSizes.length,
        _sizes: filledSizes,
        _computedOffsetIndex: 9,
        _offsets: offsets,
        _defaultItemSize: 30,
      };
      expect(computeTotalSize(cache)).toBe(99 + 20);
      expect(cache._offsets).toEqual([0, 11, 22, 33, 44, 55, 66, 77, 88, 99]);
    });
  });
});

describe(findIndex.name, () => {
  const CACHE_LENGTH = 10;

  it("should resolve default height", () => {
    const cache = initCacheWithEmptyOffsets(
      range(10, () => -1),
      25
    );
    expect(findIndex(cache, 100)).toBe(4);
  });

  it("should get start if offset is at start", () => {
    const cache = initCacheWithComputedOffsets(
      range(CACHE_LENGTH, () => 20),
      30
    );
    expect(findIndex(cache, 0)).toBe(0);
  });

  it("should get start if offset is at start + 1px", () => {
    const cache = initCacheWithComputedOffsets(
      range(CACHE_LENGTH, () => 20),
      30
    );
    expect(findIndex(cache, 1)).toBe(0);
  });

  it("should get start if offset is at start + 0.01px", () => {
    const cache = initCacheWithComputedOffsets(
      range(CACHE_LENGTH, () => 20),
      30
    );
    expect(findIndex(cache, 0.01)).toBe(0);
  });

  it("should get start if offset is at start - 1px", () => {
    const cache = initCacheWithComputedOffsets(
      range(CACHE_LENGTH, () => 20),
      30
    );
    expect(findIndex(cache, -1)).toBe(0);
  });

  it("should get start if offset is at start - 0.01px", () => {
    const cache = initCacheWithComputedOffsets(
      range(CACHE_LENGTH, () => 20),
      30
    );
    expect(findIndex(cache, -0.01)).toBe(0);
  });

  it("should get end if offset is at end", () => {
    const cache = initCacheWithComputedOffsets(
      range(CACHE_LENGTH, () => 20),
      30
    );
    expect(findIndex(cache, sum(cache._sizes))).toBe(cache._length - 1);
  });

  it("should get end if offset is at end + 1px", () => {
    const cache = initCacheWithComputedOffsets(
      range(CACHE_LENGTH, () => 20),
      30
    );
    expect(findIndex(cache, sum(cache._sizes) + 1)).toBe(cache._length - 1);
  });

  it("should get end if offset is at end + 0.01px", () => {
    const cache = initCacheWithComputedOffsets(
      range(CACHE_LENGTH, () => 20),
      30
    );
    expect(findIndex(cache, sum(cache._sizes) + 0.01)).toBe(cache._length - 1);
  });

  it("should get end if offset is at end - 1px", () => {
    const cache = initCacheWithComputedOffsets(
      range(CACHE_LENGTH, () => 20),
      30
    );
    expect(findIndex(cache, sum(cache._sizes) - 1)).toBe(cache._length - 1);
  });

  it("should get end if offset is at end - 0.01px", () => {
    const cache = initCacheWithComputedOffsets(
      range(CACHE_LENGTH, () => 20),
      30
    );
    expect(findIndex(cache, sum(cache._sizes) - 0.01)).toBe(cache._length - 1);
  });

  it("should get 1 if offset fits index 1", () => {
    const cache = initCacheWithComputedOffsets(
      range(CACHE_LENGTH, () => 20),
      30
    );
    expect(findIndex(cache, 20)).toBe(1);
  });

  it("should get 1 if offset fits index 1 + 1px", () => {
    const cache = initCacheWithComputedOffsets(
      range(CACHE_LENGTH, () => 20),
      30
    );
    expect(findIndex(cache, 21)).toBe(1);
  });

  it("should get 1 if offset fits index 1 + 0.01px", () => {
    const cache = initCacheWithComputedOffsets(
      range(CACHE_LENGTH, () => 20),
      30
    );
    expect(findIndex(cache, 20.01)).toBe(1);
  });

  it("should get 0 if offset fits index 1 - 1px", () => {
    const cache = initCacheWithComputedOffsets(
      range(CACHE_LENGTH, () => 20),
      30
    );
    expect(findIndex(cache, 19)).toBe(0);
  });

  it("should get 0 if offset fits index 1 - 0.01px", () => {
    const cache = initCacheWithComputedOffsets(
      range(CACHE_LENGTH, () => 20),
      30
    );
    expect(findIndex(cache, 19.99)).toBe(0);
  });

  it("should get 1 if offset fits index 1.5", () => {
    const cache = initCacheWithComputedOffsets(
      range(CACHE_LENGTH, () => 20),
      30
    );
    expect(findIndex(cache, 30)).toBe(1);
  });

  it("should get 1 if offset fits index 1.5 + 1px", () => {
    const cache = initCacheWithComputedOffsets(
      range(CACHE_LENGTH, () => 20),
      30
    );
    expect(findIndex(cache, 31)).toBe(1);
  });

  it("should get 1 if offset fits index 1.5 + 0.01px", () => {
    const cache = initCacheWithComputedOffsets(
      range(CACHE_LENGTH, () => 20),
      30
    );
    expect(findIndex(cache, 30.01)).toBe(1);
  });

  it("should get 1 if offset fits index 1.5 - 1px", () => {
    const cache = initCacheWithComputedOffsets(
      range(CACHE_LENGTH, () => 20),
      30
    );
    expect(findIndex(cache, 29)).toBe(1);
  });

  it("should get 1 if offset fits index 1.5 - 0.01px", () => {
    const cache = initCacheWithComputedOffsets(
      range(CACHE_LENGTH, () => 20),
      30
    );
    expect(findIndex(cache, 29.99)).toBe(1);
  });
});

describe(computeRange.name, () => {
  const CACHE_LENGTH = 10;

  describe.each([
    [0], // start
    [Math.floor(CACHE_LENGTH / 2)], // mid
    [CACHE_LENGTH - 1], // end
  ])("start from %i", (initialIndex) => {
    it("should get start if offset is at start", () => {
      expect(
        computeRange(
          initCacheWithComputedOffsets(
            range(CACHE_LENGTH, () => 20),
            30
          ),
          0,
          100,
          initialIndex
        )
      ).toEqual([0, 5]);
    });

    it("should get start + 1 if offset is at start + 1", () => {
      expect(
        computeRange(
          initCacheWithComputedOffsets(
            range(CACHE_LENGTH, () => 20),
            30
          ),
          20,
          100,
          initialIndex
        )
      ).toEqual([1, 6]);
    });

    it("should get last if offset is at end", () => {
      const cache = initCacheWithComputedOffsets(
        range(CACHE_LENGTH, () => 20),
        30
      );
      const last = cache._length - 1;
      expect(computeRange(cache, sum(cache._sizes), 100, initialIndex)).toEqual(
        [last, last]
      );
    });

    it("should get last if offset is at end - 1", () => {
      const cache = initCacheWithComputedOffsets(
        range(CACHE_LENGTH, () => 20),
        30
      );
      const last = cache._length - 1;
      expect(
        computeRange(cache, sum(cache._sizes) - 20, 100, initialIndex)
      ).toEqual([last, last]);
    });

    it("should get last - 1 if offset is at end - 1 and more", () => {
      const cache = initCacheWithComputedOffsets(
        range(CACHE_LENGTH, () => 20),
        30
      );
      const last = cache._length - 1;
      expect(
        computeRange(cache, sum(cache._sizes) - 20 - 1, 100, initialIndex)
      ).toEqual([last - 1, last]);
    });

    it("should get start if offset is before start", () => {
      expect(
        computeRange(
          initCacheWithComputedOffsets(
            range(CACHE_LENGTH, () => 20),
            30
          ),
          -1000,
          100,
          initialIndex
        )
      ).toEqual([0, 0]);
    });

    it("should get last if offset is after end", () => {
      const cache = initCacheWithComputedOffsets(
        range(CACHE_LENGTH, () => 20),
        30
      );
      const last = cache._length - 1;
      expect(
        computeRange(cache, sum(cache._sizes) + 1000, 100, initialIndex)
      ).toEqual([last, last]);
    });

    it("should get prevStartIndex if offset fits prevStartIndex", () => {
      const offset = (cache: Cache, i: number) => sum(cache._sizes.slice(0, i));
      const cache = initCacheWithComputedOffsets(
        range(CACHE_LENGTH, () => 20),
        30
      );
      expect(
        computeRange(cache, offset(cache, initialIndex), 100, initialIndex)
      ).toEqual([initialIndex, expect.any(Number)]);
    });
  });
});

describe(estimateDefaultItemSize.name, () => {
  describe("start", () => {
    it("should update with 1 entry", () => {
      const cache = initCacheWithComputedOffsets(
        range(100, () => -1),
        30
      );
      const indexes = [0];
      indexes.forEach((i) => setItemSize(cache, i, 50));
      const init = structuredClone(cache);

      const diff = estimateDefaultItemSize(cache, 0);
      expect(cache._defaultItemSize).toBe(50);
      expect(cache._sizes).toEqual(init._sizes);
      expect(cache._computedOffsetIndex).toEqual(-1);
      expect(diff).toBe(0);
    });

    it("should update with some entry", () => {
      const cache = initCacheWithComputedOffsets(
        range(100, () => -1),
        30
      );
      const indexes = [0, 1, 2, 3];
      indexes.forEach((i) => setItemSize(cache, i, 50));
      const init = structuredClone(cache);

      const diff = estimateDefaultItemSize(cache, 0);
      expect(cache._defaultItemSize).toBe(50);
      expect(cache._sizes).toEqual(init._sizes);
      expect(cache._computedOffsetIndex).toEqual(-1);
      expect(diff).toBe(0);
    });

    it("should update with some entry from outside", () => {
      const cache = initCacheWithComputedOffsets(
        range(100, () => -1),
        30
      );
      const indexes = [20, 21, 22, 23];
      indexes.forEach((i) => setItemSize(cache, i, 50));
      const init = structuredClone(cache);

      const diff = estimateDefaultItemSize(cache, 0);
      expect(cache._defaultItemSize).toBe(50);
      expect(cache._sizes).toEqual(init._sizes);
      expect(cache._computedOffsetIndex).toEqual(-1);
      expect(diff).toBe(0);
    });
  });

  describe("end", () => {
    it("should update with 1 entry", () => {
      const cache = initCacheWithComputedOffsets(
        range(100, () => -1),
        30
      );
      const indexes = [92];
      indexes.forEach((i) => setItemSize(cache, i, 50));
      const init = structuredClone(cache);

      const diff = estimateDefaultItemSize(cache, cache._length - 10);
      expect(cache._defaultItemSize).toBe(50);
      expect(cache._sizes).toEqual(init._sizes);
      expect(cache._computedOffsetIndex).toEqual(-1);
      expect(diff).toBe((50 - 30) * 90);
    });

    it("should update with some entry", () => {
      const cache = initCacheWithComputedOffsets(
        range(100, () => -1),
        30
      );
      const indexes = [92, 93, 94, 95];
      indexes.forEach((i) => setItemSize(cache, i, 50));
      const init = structuredClone(cache);

      const diff = estimateDefaultItemSize(cache, cache._length - 10);
      expect(cache._defaultItemSize).toBe(50);
      expect(cache._sizes).toEqual(init._sizes);
      expect(cache._computedOffsetIndex).toEqual(-1);
      expect(diff).toBe((50 - 30) * 90);
    });

    it("should update with some entry from outside", () => {
      const cache = initCacheWithComputedOffsets(
        range(100, () => -1),
        30
      );
      const indexes = [20, 21, 22, 23];
      indexes.forEach((i) => setItemSize(cache, i, 50));
      const init = structuredClone(cache);

      const diff = estimateDefaultItemSize(cache, cache._length - 10);
      expect(cache._defaultItemSize).toBe(50);
      expect(cache._sizes).toEqual(init._sizes);
      expect(cache._computedOffsetIndex).toEqual(-1);
      expect(diff).toBe((50 - 30) * (90 - 4));
    });

    it("should update with some entry from near bound", () => {
      const cache = initCacheWithComputedOffsets(
        range(100, () => -1),
        30
      );
      const indexes = [88, 89, 90, 91];
      indexes.forEach((i) => setItemSize(cache, i, 50));
      const init = structuredClone(cache);

      const diff = estimateDefaultItemSize(cache, cache._length - 10);
      expect(cache._defaultItemSize).toBe(50);
      expect(cache._sizes).toEqual(init._sizes);
      expect(cache._computedOffsetIndex).toEqual(-1);
      expect(diff).toBe((50 - 30) * (90 - 2));
    });
  });
});

describe(initCache.name, () => {
  it("should create cache", () => {
    const itemLength = 10;
    const cache = initCache(itemLength, 23);
    expect(cache).toMatchInlineSnapshot(`
      {
        "_computedOffsetIndex": -1,
        "_defaultItemSize": 23,
        "_length": 10,
        "_offsets": [
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
    expect(cache._offsets.length).toBe(itemLength);
  });

  it("should restore cache from snapshot", () => {
    const itemLength = 10;
    const cache = initCache(itemLength, 23, [
      [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      123,
    ]);
    expect(cache).toMatchInlineSnapshot(`
        {
          "_computedOffsetIndex": -1,
          "_defaultItemSize": 123,
          "_length": 10,
          "_offsets": [
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
    expect(cache._offsets.length).toBe(itemLength);
  });

  it("should restore cache from snapshot which has shorter length", () => {
    const itemLength = 10;
    const cache = initCache(itemLength, 23, [[0, 1, 2, 3, 4], 123]);
    expect(cache).toMatchInlineSnapshot(`
      {
        "_computedOffsetIndex": -1,
        "_defaultItemSize": 123,
        "_length": 10,
        "_offsets": [
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
    expect(cache._offsets.length).toBe(itemLength);
  });

  it("should restore cache from snapshot which has longer length", () => {
    const itemLength = 10;
    const cache = initCache(itemLength, 23, [
      [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      123,
    ]);
    expect(cache).toMatchInlineSnapshot(`
        {
          "_computedOffsetIndex": -1,
          "_defaultItemSize": 123,
          "_length": 10,
          "_offsets": [
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
    expect(cache._offsets.length).toBe(itemLength);
  });
});

describe(takeCacheSnapshot.name, () => {
  it("smoke", () => {
    const cache = initCacheWithComputedOffsets(
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
    const initialCache = JSON.parse(JSON.stringify(cache));
    updateCacheLength(cache, 0);
    updateCacheLength(cache, 10);
    expect(cache).toEqual(initialCache);
  });

  it("should increase cache length", () => {
    const cache = initCache(10, 40);
    const res = updateCacheLength(cache, 15, undefined);
    expect(res).toEqual(40 * 5);
    expect(cache).toMatchInlineSnapshot(`
      {
        "_computedOffsetIndex": -1,
        "_defaultItemSize": 40,
        "_length": 15,
        "_offsets": [
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
  });

  it("should increase filled cache length", () => {
    const sizes = range(10, (i) => i * 10);
    const cache = initCacheWithComputedOffsets(sizes, 40);
    const res = updateCacheLength(cache, 15, undefined);
    expect(res).toEqual(40 * 5);
    expect(cache).toMatchInlineSnapshot(`
      {
        "_computedOffsetIndex": 9,
        "_defaultItemSize": 40,
        "_length": 15,
        "_offsets": [
          0,
          10,
          30,
          60,
          100,
          150,
          210,
          280,
          360,
          450,
          -1,
          -1,
          -1,
          -1,
          -1,
        ],
        "_sizes": [
          0,
          10,
          20,
          30,
          40,
          50,
          60,
          70,
          80,
          90,
          -1,
          -1,
          -1,
          -1,
          -1,
        ],
      }
    `);
  });

  it("should decrease cache length", () => {
    const cache = initCache(10, 40);
    const res = updateCacheLength(cache, 5, undefined);
    expect(res).toEqual(-(40 * 5));
    expect(cache).toMatchInlineSnapshot(`
      {
        "_computedOffsetIndex": -1,
        "_defaultItemSize": 40,
        "_length": 5,
        "_offsets": [
          -1,
          -1,
          -1,
          -1,
          -1,
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
  });

  it("should decrease filled cache length", () => {
    const sizes = range(10, (i) => i * 10);
    const cache = initCacheWithComputedOffsets(sizes, 40);
    const res = updateCacheLength(cache, 5, undefined);
    expect(res).toEqual(-sum(sizes.slice(-5)));
    expect(cache).toMatchInlineSnapshot(`
      {
        "_computedOffsetIndex": 4,
        "_defaultItemSize": 40,
        "_length": 5,
        "_offsets": [
          0,
          10,
          30,
          60,
          100,
        ],
        "_sizes": [
          0,
          10,
          20,
          30,
          40,
        ],
      }
    `);
  });

  it("should increase cache length with shifting", () => {
    const cache = initCache(10, 40);
    const res = updateCacheLength(cache, 15, true);
    expect(res).toEqual(40 * 5);
    expect(cache).toMatchInlineSnapshot(`
      {
        "_computedOffsetIndex": -1,
        "_defaultItemSize": 40,
        "_length": 15,
        "_offsets": [
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
  });

  it("should increase filled cache length with shifting", () => {
    const sizes = range(10, (i) => i * 10);
    const cache = initCacheWithComputedOffsets(sizes, 40);
    const res = updateCacheLength(cache, 15, true);
    expect(res).toEqual(40 * 5);
    expect(cache).toMatchInlineSnapshot(`
      {
        "_computedOffsetIndex": -1,
        "_defaultItemSize": 40,
        "_length": 15,
        "_offsets": [
          0,
          10,
          30,
          60,
          100,
          150,
          210,
          280,
          360,
          450,
          -1,
          -1,
          -1,
          -1,
          -1,
        ],
        "_sizes": [
          -1,
          -1,
          -1,
          -1,
          -1,
          0,
          10,
          20,
          30,
          40,
          50,
          60,
          70,
          80,
          90,
        ],
      }
    `);
  });

  it("should decrease cache length with shifting", () => {
    const cache = initCache(10, 40);
    const res = updateCacheLength(cache, 5, true);
    expect(res).toEqual(-(40 * 5));
    expect(cache).toMatchInlineSnapshot(`
      {
        "_computedOffsetIndex": -1,
        "_defaultItemSize": 40,
        "_length": 5,
        "_offsets": [
          -1,
          -1,
          -1,
          -1,
          -1,
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
  });

  it("should decrease filled cache length with shifting", () => {
    const sizes = range(10, (i) => i * 10);
    const cache = initCacheWithComputedOffsets(sizes, 40);
    const res = updateCacheLength(cache, 5, true);
    expect(res).toEqual(-sum(sizes.slice(0, 5)));
    expect(cache).toMatchInlineSnapshot(`
      {
        "_computedOffsetIndex": -1,
        "_defaultItemSize": 40,
        "_length": 5,
        "_offsets": [
          0,
          10,
          30,
          60,
          100,
        ],
        "_sizes": [
          50,
          60,
          70,
          80,
          90,
        ],
      }
    `);
  });
});
