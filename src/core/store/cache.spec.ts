import { describe, it, expect } from "@jest/globals";
import {
  getItemSize,
  setItemSize,
  computeTotalSize,
  computeOffset as computeStartOffset,
  findStartIndexWithOffset,
  findIndex as findEndIndex,
  Cache,
  hasUnmeasuredItemsInRange,
  updateCacheLength,
  initCache,
} from "./cache";
import type { Writeable } from "../types";

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

describe(getItemSize.name, () => {
  const sizes = [10, -1];
  const cache: Cache = {
    _length: sizes.length,
    _sizes: sizes,
    _computedOffsetIndex: 0,
    _offsets: [0],
    _defaultItemSize: 20,
  };

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
      const emptyOffsets = range(10, (i) => (i === 0 ? 0 : -1));
      const cache: Writeable<Cache> = {
        _length: filledSizes.length,
        _sizes: filledSizes,
        _computedOffsetIndex: 0,
        _offsets: emptyOffsets,
        _defaultItemSize: 20,
      };

      setItemSize(cache, 0, 123);
      expect(cache._sizes).toEqual([123, 20, 20, 20, 20, 20, 20, 20, 20, 20]);
      expect(cache._offsets).toEqual([0, -1, -1, -1, -1, -1, -1, -1, -1, -1]);
      expect(cache._computedOffsetIndex).toBe(0);
    });

    it("should set at middle", () => {
      const filledSizes = range(10, () => 20);
      const emptyOffsets = range(10, (i) => (i === 0 ? 0 : -1));
      const cache: Writeable<Cache> = {
        _length: filledSizes.length,
        _sizes: filledSizes,
        _computedOffsetIndex: 0,
        _offsets: emptyOffsets,
        _defaultItemSize: 20,
      };

      setItemSize(cache, 4, 123);
      expect(cache._sizes).toEqual([20, 20, 20, 20, 123, 20, 20, 20, 20, 20]);
      expect(cache._offsets).toEqual([0, -1, -1, -1, -1, -1, -1, -1, -1, -1]);
      expect(cache._computedOffsetIndex).toBe(0);
    });

    it("should set at last", () => {
      const filledSizes = range(10, () => 20);
      const emptyOffsets = range(10, (i) => (i === 0 ? 0 : -1));
      const cache: Writeable<Cache> = {
        _length: filledSizes.length,
        _sizes: filledSizes,
        _computedOffsetIndex: 0,
        _offsets: emptyOffsets,
        _defaultItemSize: 20,
      };

      setItemSize(cache, emptyOffsets.length - 1, 123);
      expect(cache._sizes).toEqual([20, 20, 20, 20, 20, 20, 20, 20, 20, 123]);
      expect(cache._offsets).toEqual([0, -1, -1, -1, -1, -1, -1, -1, -1, -1]);
      expect(cache._computedOffsetIndex).toBe(0);
    });
  });

  describe("with offsets measured", () => {
    it("should update measuredOffsetIndex if size is changed before measuredOffsetIndex", () => {
      const filledSizes = range(10, () => 20);
      const cache: Writeable<Cache> = {
        _length: filledSizes.length,
        _sizes: filledSizes,
        _computedOffsetIndex: 4,
        _offsets: [0, 10, 20, 30, 40, -1, -1, -1, -1, -1],
        _defaultItemSize: 20,
      };

      setItemSize(cache, 1, 123);
      expect(cache._sizes).toEqual([20, 123, 20, 20, 20, 20, 20, 20, 20, 20]);
      expect(cache._offsets).toEqual([0, 10, 20, 30, 40, -1, -1, -1, -1, -1]);
      expect(cache._computedOffsetIndex).toBe(1);
    });

    it("should not update measuredOffsetIndex if size is changed at measuredOffsetIndex", () => {
      const filledSizes = range(10, () => 20);
      const cache: Writeable<Cache> = {
        _length: filledSizes.length,
        _sizes: filledSizes,
        _computedOffsetIndex: 4,
        _offsets: [0, 10, 20, 30, 40, -1, -1, -1, -1, -1],
        _defaultItemSize: 20,
      };

      setItemSize(cache, 4, 123);
      expect(cache._sizes).toEqual([20, 20, 20, 20, 123, 20, 20, 20, 20, 20]);
      expect(cache._offsets).toEqual([0, 10, 20, 30, 40, -1, -1, -1, -1, -1]);
      expect(cache._computedOffsetIndex).toBe(4);
    });

    it("should not update measuredOffsetIndex if size is changed after measuredOffsetIndex", () => {
      const filledSizes = range(10, () => 20);
      const cache: Writeable<Cache> = {
        _length: filledSizes.length,
        _sizes: filledSizes,
        _computedOffsetIndex: 4,
        _offsets: [0, 10, 20, 30, 40, -1, -1, -1, -1, -1],
        _defaultItemSize: 20,
      };

      setItemSize(cache, 5, 123);
      expect(cache._sizes).toEqual([20, 20, 20, 20, 20, 123, 20, 20, 20, 20]);
      expect(cache._offsets).toEqual([0, 10, 20, 30, 40, -1, -1, -1, -1, -1]);
      expect(cache._computedOffsetIndex).toBe(4);
    });
  });

  describe("should return measurement status", () => {
    it("should return false if already measured", () => {
      const filledSizes = range(10, () => 20);
      const emptyOffsets = range(10, (i) => (i === 0 ? 0 : -1));
      const cache: Writeable<Cache> = {
        _length: filledSizes.length,
        _sizes: filledSizes,
        _computedOffsetIndex: 0,
        _offsets: emptyOffsets,
        _defaultItemSize: 20,
      };

      const res = setItemSize(cache, 0, 123);
      expect(res).toBe(false);
    });

    it("should return true if not measured", () => {
      const filledSizes = range(10, () => -1);
      const emptyOffsets = range(10, (i) => (i === 0 ? 0 : -1));
      const cache: Writeable<Cache> = {
        _length: filledSizes.length,
        _sizes: filledSizes,
        _computedOffsetIndex: 0,
        _offsets: emptyOffsets,
        _defaultItemSize: 20,
      };

      const res = setItemSize(cache, 0, 123);
      expect(res).toBe(true);
    });
  });
});

describe(computeTotalSize.name, () => {
  it("should succeed if sizes is filled", () => {
    const filledSizes = range(10, () => 20);
    const emptyOffsets = range(10, (i) => (i === 0 ? 0 : -1));
    const cache: Writeable<Cache> = {
      _length: filledSizes.length,
      _sizes: filledSizes,
      _computedOffsetIndex: 0,
      _offsets: emptyOffsets,
      _defaultItemSize: 30,
    };
    expect(computeTotalSize(cache)).toBe(sum(filledSizes));
    expect(cache._offsets).toEqual([
      0, 20, 40, 60, 80, 100, 120, 140, 160, 180,
    ]);
  });

  it("should succeed if sizes is not filled", () => {
    const emptySizes = range(10, () => -1);
    const emptyOffsets = range(10, (i) => (i === 0 ? 0 : -1));
    const cache: Writeable<Cache> = {
      _length: emptySizes.length,
      _sizes: emptySizes,
      _computedOffsetIndex: 0,
      _offsets: emptyOffsets,
      _defaultItemSize: 30,
    };
    expect(computeTotalSize(cache)).toBe(sum(range(10, () => 30)));
    expect(cache._offsets).toEqual([
      0, 30, 60, 90, 120, 150, 180, 210, 240, 270,
    ]);
  });

  it("should return 0 if cache length is 0", () => {
    const filledSizes: number[] = [];
    const emptyOffsets: number[] = [];
    const cache: Writeable<Cache> = {
      _length: filledSizes.length,
      _sizes: filledSizes,
      _computedOffsetIndex: 0,
      _offsets: emptyOffsets,
      _defaultItemSize: 30,
    };
    expect(computeTotalSize(cache)).toBe(0);
    expect(cache._offsets).toEqual([]);
  });

  describe("with cached offsets", () => {
    it("should start from cached offset if measuredOffsetIndex is at cached", () => {
      const filledSizes = range(10, () => 20);
      const offsets = [0, 11, 22, 33, -1, -1, -1, -1, -1, -1];
      const cache: Writeable<Cache> = {
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
      const cache: Writeable<Cache> = {
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

describe(computeStartOffset.name, () => {
  it("should get 0 if index is at start", () => {
    const filledSizes = range(10, () => 20);
    const emptyOffsets = range(10, (i) => (i === 0 ? 0 : -1));
    const cache: Writeable<Cache> = {
      _length: filledSizes.length,
      _sizes: filledSizes,
      _computedOffsetIndex: 0,
      _offsets: emptyOffsets,
      _defaultItemSize: 30,
    };
    expect(computeStartOffset(cache, 0)).toBe(0);
    expect(cache._offsets).toEqual([0, -1, -1, -1, -1, -1, -1, -1, -1, -1]);
  });

  it("should get 1 item if index is at start", () => {
    const filledSizes = range(10, () => 20);
    const emptyOffsets = range(10, (i) => (i === 0 ? 0 : -1));
    const cache: Writeable<Cache> = {
      _length: filledSizes.length,
      _sizes: filledSizes,
      _computedOffsetIndex: 0,
      _offsets: emptyOffsets,
      _defaultItemSize: 30,
    };
    expect(computeStartOffset(cache, 1)).toBe(20);
    expect(cache._offsets).toEqual([0, 20, -1, -1, -1, -1, -1, -1, -1, -1]);
  });

  it("should get total - 1 item if index is at last", () => {
    const filledSizes = range(10, () => 20);
    const emptyOffsets = range(10, (i) => (i === 0 ? 0 : -1));
    const cache: Writeable<Cache> = {
      _length: filledSizes.length,
      _sizes: filledSizes,
      _computedOffsetIndex: 0,
      _offsets: emptyOffsets,
      _defaultItemSize: 30,
    };
    const last = filledSizes.length - 1;
    expect(computeStartOffset(cache, last)).toBe(
      sum(filledSizes) - filledSizes[last]!
    );
    expect(cache._offsets).toEqual([
      0, 20, 40, 60, 80, 100, 120, 140, 160, 180,
    ]);
  });

  it("should resolve default height", () => {
    const emptySizes = range(10, () => -1);
    const emptyOffsets = range(10, (i) => (i === 0 ? 0 : -1));
    const cache: Writeable<Cache> = {
      _length: emptySizes.length,
      _sizes: emptySizes,
      _computedOffsetIndex: 0,
      _offsets: emptyOffsets,
      _defaultItemSize: 30,
    };
    expect(computeStartOffset(cache, 2)).toBe(60);
    expect(cache._offsets).toEqual([0, 30, 60, -1, -1, -1, -1, -1, -1, -1]);
  });

  describe("with cached offsets", () => {
    it("should return cached offset if index is before measuredOffsetIndex", () => {
      const filledSizes = range(10, () => 20);
      const offsets = [0, 11, 22, 33, -1, -1, -1, -1, -1, -1];
      const cache: Writeable<Cache> = {
        _length: filledSizes.length,
        _sizes: filledSizes,
        _computedOffsetIndex: 3,
        _offsets: offsets,
        _defaultItemSize: 30,
      };
      expect(computeStartOffset(cache, 2)).toBe(22);
      expect(cache._offsets).toEqual([0, 11, 22, 33, -1, -1, -1, -1, -1, -1]);
    });

    it("should return cached offset if index is the same as measuredOffsetIndex", () => {
      const filledSizes = range(10, () => 20);
      const offsets = [0, 11, 22, 33, -1, -1, -1, -1, -1, -1];
      const cache: Writeable<Cache> = {
        _length: filledSizes.length,
        _sizes: filledSizes,
        _computedOffsetIndex: 3,
        _offsets: offsets,
        _defaultItemSize: 30,
      };
      expect(computeStartOffset(cache, 3)).toBe(33);
      expect(cache._offsets).toEqual([0, 11, 22, 33, -1, -1, -1, -1, -1, -1]);
    });

    it("should start from cached offset if index is after measuredOffsetIndex", () => {
      const filledSizes = range(10, () => 20);
      const offsets = [0, 11, 22, 33, -1, -1, -1, -1, -1, -1];
      const cache: Writeable<Cache> = {
        _length: filledSizes.length,
        _sizes: filledSizes,
        _computedOffsetIndex: 3,
        _offsets: offsets,
        _defaultItemSize: 30,
      };
      expect(computeStartOffset(cache, 5)).toBe(33 + 20 * 2);
      expect(cache._offsets).toEqual([0, 11, 22, 33, 53, 73, -1, -1, -1, -1]);
    });
  });
});

describe("findEndIndex", () => {
  const filledSizes = range(10, () => 20);
  const cache: Cache = {
    _length: filledSizes.length,
    _sizes: filledSizes,
    _computedOffsetIndex: 0,
    _offsets: [0],
    _defaultItemSize: 30,
  };

  describe("change offset", () => {
    it("should get if offset is at start", () => {
      expect(findEndIndex(cache, 0, 100)).toBe(5);
    });

    it("should get if offset is at start + 1", () => {
      expect(findEndIndex(cache, 1, 100)).toBe(6);
    });

    it("should get last if offset is at end", () => {
      const last = filledSizes.length - 1;
      expect(findEndIndex(cache, last, 100)).toBe(last);
    });

    it("should get if offset is at end - 1", () => {
      const last = filledSizes.length - 1;
      expect(findEndIndex(cache, last - 1, 100)).toBe(last);
    });
  });

  it("should get argument index if viewport is 0 and index is at start", () => {
    expect(findEndIndex(cache, 0, 0)).toBe(0);
  });

  it("should get argument index if viewport is 0 and index is at start + 1", () => {
    expect(findEndIndex(cache, 1, 0)).toBe(1);
  });

  it("should get same if viewport fits cache", () => {
    expect(findEndIndex(cache, 1, 100)).toBe(6);
  });

  it("should get same if viewport is 1/2 item height larger than cache", () => {
    expect(findEndIndex(cache, 1, 110)).toBe(6);
  });

  it("should get same if viewport is 1/2 - 1px item height larger than cache", () => {
    expect(findEndIndex(cache, 1, 109)).toBe(6);
  });

  it("should get next if viewport is 1/2 + 1px item height larger than cache", () => {
    expect(findEndIndex(cache, 1, 111)).toBe(7);
  });

  it("should get same if viewport is bit larger than cache", () => {
    expect(findEndIndex(cache, 1, 101)).toBe(6);
  });

  it("should get same if viewport is a little bit larger than cache", () => {
    expect(findEndIndex(cache, 1, 100.01)).toBe(6);
  });

  it("should get same if viewport is bit smaller than cache", () => {
    expect(findEndIndex(cache, 1, 99)).toBe(6);
  });

  it("should get same if viewport is a little bit smaller than cache", () => {
    expect(findEndIndex(cache, 1, 99.99)).toBe(6);
  });

  it("should resolve default height", () => {
    const emptySizes = range(10, () => -1);
    const emptyCache: Cache = {
      _length: emptySizes.length,
      _sizes: emptySizes,
      _computedOffsetIndex: 0,
      _offsets: [0],
      _defaultItemSize: 25,
    };
    expect(findEndIndex(emptyCache, 0, 100)).toBe(4);
  });
});

describe("findStartIndex", () => {
  const initFilledCache = (sizes: number[]): Writeable<Cache> => {
    return {
      _length: sizes.length,
      _sizes: sizes,
      _computedOffsetIndex: sizes.length - 1,
      _offsets: sizes.reduce((acc, s, i) => {
        acc.push(i === 0 ? 0 : acc[i - 1]! + s);
        return acc;
      }, [] as number[]),
      _defaultItemSize: 30,
    };
  };

  it("should resolve default height", () => {
    const initEmptyCache = (): Writeable<Cache> => {
      const emptySizes = range(10, () => -1);
      return {
        _length: emptySizes.length,
        _sizes: emptySizes,
        _computedOffsetIndex: 0,
        _offsets: [0],
        _defaultItemSize: 25,
      };
    };

    expect(findStartIndexWithOffset(initEmptyCache(), 100, 0)).toBe(4);
  });

  describe("start from start", () => {
    it("should get start if offset is at start", () => {
      const cache = initFilledCache(range(10, () => 20));
      expect(findStartIndexWithOffset(cache, 0, 0)).toBe(0);
    });

    it("should get start if offset is at start + 1px", () => {
      const cache = initFilledCache(range(10, () => 20));
      expect(findStartIndexWithOffset(cache, 1, 0)).toBe(0);
    });

    it("should get end if offset is at end", () => {
      const cache = initFilledCache(range(10, () => 20));
      expect(findStartIndexWithOffset(cache, sum(cache._sizes), 0)).toBe(
        cache._length - 1
      );
    });

    it("should get end if offset is at end - 1px", () => {
      const cache = initFilledCache(range(10, () => 20));
      expect(findStartIndexWithOffset(cache, sum(cache._sizes) - 1, 0)).toBe(
        cache._length - 1
      );
    });

    it("should get 1 if offset fits index 1", () => {
      const cache = initFilledCache(range(10, () => 20));
      expect(findStartIndexWithOffset(cache, 20, 0)).toBe(1);
    });

    it("should get 1 if offset fits index 1 + 1px", () => {
      const cache = initFilledCache(range(10, () => 20));
      expect(findStartIndexWithOffset(cache, 21, 0)).toBe(1);
    });

    it("should get 1 if offset fits index 1 - 1px", () => {
      const cache = initFilledCache(range(10, () => 20));
      expect(findStartIndexWithOffset(cache, 19, 0)).toBe(1);
    });

    it("should get 1 if offset fits index 1.5", () => {
      const cache = initFilledCache(range(10, () => 20));
      expect(findStartIndexWithOffset(cache, 30, 0)).toBe(1);
    });

    it("should get 2 if offset fits index 1.5 + 1px", () => {
      const cache = initFilledCache(range(10, () => 20));
      expect(findStartIndexWithOffset(cache, 31, 0)).toBe(2);
    });

    it("should get 2 if offset fits index 1.5 + 0.01px", () => {
      const cache = initFilledCache(range(10, () => 20));
      expect(findStartIndexWithOffset(cache, 30.01, 0)).toBe(2);
    });

    it("should get 1 if offset fits index 1.5 - 1px", () => {
      const cache = initFilledCache(range(10, () => 20));
      expect(findStartIndexWithOffset(cache, 29, 0)).toBe(1);
    });

    it("should get 1 if offset fits index 1.5 - 0.01px", () => {
      const cache = initFilledCache(range(10, () => 20));
      expect(findStartIndexWithOffset(cache, 29.99, 0)).toBe(1);
    });

    it("should get 2 if offset fits index 2", () => {
      const cache = initFilledCache(range(10, () => 20));
      expect(findStartIndexWithOffset(cache, 40, 0)).toBe(2);
    });

    it("should get 2 if offset fits index 2 + 1px", () => {
      const cache = initFilledCache(range(10, () => 20));
      expect(findStartIndexWithOffset(cache, 41, 0)).toBe(2);
    });

    it("should get 2 if offset fits index 2 - 1px", () => {
      const cache = initFilledCache(range(10, () => 20));
      expect(findStartIndexWithOffset(cache, 39, 0)).toBe(2);
    });
  });

  describe("start from end", () => {
    it("should get start if offset is at start", () => {
      const cache = initFilledCache(range(10, () => 20));
      expect(findStartIndexWithOffset(cache, 0, cache._length)).toBe(0);
    });

    it("should get start if offset is at start + 1px", () => {
      const cache = initFilledCache(range(10, () => 20));
      expect(findStartIndexWithOffset(cache, 1, cache._length)).toBe(0);
    });

    it("should get end if offset is at end", () => {
      const cache = initFilledCache(range(10, () => 20));
      expect(
        findStartIndexWithOffset(cache, sum(cache._sizes), cache._length)
      ).toBe(cache._length - 1);
    });

    it("should get end if offset is at end - 1px", () => {
      const cache = initFilledCache(range(10, () => 20));
      expect(
        findStartIndexWithOffset(cache, sum(cache._sizes) - 1, cache._length)
      ).toBe(cache._length - 1);
    });

    it("should get 1 if offset fits index 1", () => {
      const cache = initFilledCache(range(10, () => 20));
      expect(findStartIndexWithOffset(cache, 20, cache._length)).toBe(1);
    });

    it("should get 1 if offset fits index 1 + 1px", () => {
      const cache = initFilledCache(range(10, () => 20));
      expect(findStartIndexWithOffset(cache, 21, cache._length)).toBe(1);
    });

    it("should get 1 if offset fits index 1 - 1px", () => {
      const cache = initFilledCache(range(10, () => 20));
      expect(findStartIndexWithOffset(cache, 19, cache._length)).toBe(1);
    });

    it("should get 1 if offset fits index 1.5", () => {
      const cache = initFilledCache(range(10, () => 20));
      expect(findStartIndexWithOffset(cache, 30, cache._length)).toBe(1);
    });

    it("should get 2 if offset fits index 1.5 + 1px", () => {
      const cache = initFilledCache(range(10, () => 20));
      expect(findStartIndexWithOffset(cache, 31, cache._length)).toBe(2);
    });

    it("should get 2 if offset fits index 1.5 + 0.01px", () => {
      const cache = initFilledCache(range(10, () => 20));
      expect(findStartIndexWithOffset(cache, 30.01, cache._length)).toBe(2);
    });

    it("should get 1 if offset fits index 1.5 - 1px", () => {
      const cache = initFilledCache(range(10, () => 20));
      expect(findStartIndexWithOffset(cache, 29, cache._length)).toBe(1);
    });

    it("should get 1 if offset fits index 1.5 - 0.01px", () => {
      const cache = initFilledCache(range(10, () => 20));
      expect(findStartIndexWithOffset(cache, 29.99, cache._length)).toBe(1);
    });

    it("should get 2 if offset fits index 2", () => {
      const cache = initFilledCache(range(10, () => 20));
      expect(findStartIndexWithOffset(cache, 40, cache._length)).toBe(2);
    });

    it("should get 2 if offset fits index 2 + 1px", () => {
      const cache = initFilledCache(range(10, () => 20));
      expect(findStartIndexWithOffset(cache, 41, cache._length)).toBe(2);
    });

    it("should get 2 if offset fits index 2 - 1px", () => {
      const cache = initFilledCache(range(10, () => 20));
      expect(findStartIndexWithOffset(cache, 39, cache._length)).toBe(2);
    });
  });

  describe("start from middle", () => {
    const offset = (cache: Cache, i: number) => sum(cache._sizes.slice(0, i));

    it("should get start if offset is at start", () => {
      const cache = initFilledCache(range(10, () => 20));
      expect(findStartIndexWithOffset(cache, 0, 4)).toBe(0);
    });

    it("should get end if offset is at end", () => {
      const cache = initFilledCache(range(10, () => 20));
      expect(findStartIndexWithOffset(cache, sum(cache._sizes), 4)).toBe(
        cache._sizes.length - 1
      );
    });

    it("should get prevStartIndex if offset fits prevStartIndex", () => {
      const cache = initFilledCache(range(10, () => 20));
      expect(findStartIndexWithOffset(cache, offset(cache, 4), 4)).toBe(4);
    });

    it("should get prevStartIndex if offset fits prevStartIndex + 1px", () => {
      const cache = initFilledCache(range(10, () => 20));
      expect(findStartIndexWithOffset(cache, offset(cache, 4) + 1, 4)).toBe(4);
    });

    it("should get prevStartIndex if offset fits prevStartIndex - 1px", () => {
      const cache = initFilledCache(range(10, () => 20));
      expect(findStartIndexWithOffset(cache, offset(cache, 4) - 1, 4)).toBe(4);
    });
  });

  describe("both", () => {
    it("should get same in forward and backward search", () => {
      const cache = initFilledCache(range(10, (i) => (i % 2 === 0 ? 21 : 41)));
      expect(findStartIndexWithOffset(cache, 1, 0)).toBe(0);
      expect(findStartIndexWithOffset(cache, 1, 1)).toBe(0);
    });
  });
});

describe(hasUnmeasuredItemsInRange.name, () => {
  it("should return false if all measured", () => {
    const sizes = [10, 10, 10, 10];
    const cache: Cache = {
      _length: sizes.length,
      _sizes: sizes,
      _computedOffsetIndex: 0,
      _offsets: [0],
      _defaultItemSize: 30,
    };
    expect(hasUnmeasuredItemsInRange(cache, 0, sizes.length - 1)).toBe(false);
  });

  it("should return true if start is not measured", () => {
    const sizes = [10, -1, 10, 10];
    const cache: Cache = {
      _length: sizes.length,
      _sizes: sizes,
      _computedOffsetIndex: 0,
      _offsets: [0],
      _defaultItemSize: 30,
    };
    expect(hasUnmeasuredItemsInRange(cache, 1, 2)).toBe(true);
  });

  it("should return true if end is not measured", () => {
    const sizes = [10, 10, -1, 10];
    const cache: Cache = {
      _length: sizes.length,
      _sizes: sizes,
      _computedOffsetIndex: 0,
      _offsets: [0],
      _defaultItemSize: 30,
    };
    expect(hasUnmeasuredItemsInRange(cache, 1, 2)).toBe(true);
  });
});

describe(initCache.name, () => {
  it("should create cache", () => {
    expect(initCache(10, 23)).toMatchInlineSnapshot(`
      {
        "_computedOffsetIndex": 0,
        "_defaultItemSize": 23,
        "_length": 10,
        "_offsets": [
          0,
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
  });

  it("should init with snapshot", () => {
    expect(
      initCache(10, 23, { defaultSize: 456, sizes: [100, 200, 300, -1, -1] })
    ).toMatchInlineSnapshot(`
      {
        "_computedOffsetIndex": 3,
        "_defaultItemSize": 456,
        "_length": 5,
        "_offsets": [
          0,
          100,
          300,
          600,
          -1,
        ],
        "_sizes": [
          100,
          200,
          300,
          -1,
          -1,
        ],
      }
    `);
  });

  it("should init with filled snapshot", () => {
    expect(
      initCache(10, 23, { defaultSize: 456, sizes: [100, 200, 300, 400, 500] })
    ).toMatchInlineSnapshot(`
      {
        "_computedOffsetIndex": 4,
        "_defaultItemSize": 456,
        "_length": 5,
        "_offsets": [
          0,
          100,
          300,
          600,
          1000,
        ],
        "_sizes": [
          100,
          200,
          300,
          400,
          500,
        ],
      }
    `);
  });

  it("should init with empty snapshot", () => {
    expect(initCache(10, 23, { defaultSize: 456, sizes: [-1, -1, -1, -1, -1] }))
      .toMatchInlineSnapshot(`
      {
        "_computedOffsetIndex": 0,
        "_defaultItemSize": 456,
        "_length": 5,
        "_offsets": [
          0,
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
});

describe(updateCacheLength.name, () => {
  it("should increase cache length", () => {
    const cache = initCache(10, 40);
    const res = updateCacheLength(cache as Writeable<Cache>, 15, undefined);
    expect(res).toEqual([40 * 5, false]);
    expect(cache).toMatchInlineSnapshot(`
      {
        "_computedOffsetIndex": 0,
        "_defaultItemSize": 40,
        "_length": 15,
        "_offsets": [
          0,
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

  it("should decrease cache length", () => {
    const cache = initCache(10, 40);
    (cache as Writeable<Cache>)._sizes[9] = 123;
    const res = updateCacheLength(cache as Writeable<Cache>, 5, undefined);
    expect(res).toEqual([40 * 4 + 123, true]);
    expect(cache).toMatchInlineSnapshot(`
      {
        "_computedOffsetIndex": 0,
        "_defaultItemSize": 40,
        "_length": 5,
        "_offsets": [
          0,
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

  it("should recover cache length from 0", () => {
    const cache = initCache(10, 40);
    const initialCache = JSON.parse(JSON.stringify(cache));
    updateCacheLength(cache as Writeable<Cache>, 0);
    updateCacheLength(cache as Writeable<Cache>, 10);
    expect(cache).toEqual(initialCache);
  });

  it("should increase cache length with shifting", () => {
    const cache = initCache(10, 40);
    const res = updateCacheLength(cache as Writeable<Cache>, 15, true);
    expect(res).toEqual([40 * 5, false]);
    expect(cache).toMatchInlineSnapshot(`
      {
        "_computedOffsetIndex": 0,
        "_defaultItemSize": 40,
        "_length": 15,
        "_offsets": [
          0,
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

  it("should decrease cache length with shifting", () => {
    const cache = initCache(10, 40);
    (cache as Writeable<Cache>)._sizes[0] = 123;
    const res = updateCacheLength(cache as Writeable<Cache>, 5, true);
    expect(res).toEqual([40 * 4 + 123, true]);
    expect(cache).toMatchInlineSnapshot(`
      {
        "_computedOffsetIndex": 0,
        "_defaultItemSize": 40,
        "_length": 5,
        "_offsets": [
          0,
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
});
