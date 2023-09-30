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
  initializeCache,
  InstanceCache,
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
        _defaultItemSize: 20,
      };
      const inst: InstanceCache = {
        _measuredOffsetIndex: 0,
        _offsets: emptyOffsets,
      };

      setItemSize(cache, inst, 0, 123);
      expect(cache._sizes).toEqual([123, 20, 20, 20, 20, 20, 20, 20, 20, 20]);
      expect(inst._offsets).toEqual([0, -1, -1, -1, -1, -1, -1, -1, -1, -1]);
      expect(inst._measuredOffsetIndex).toBe(0);
    });

    it("should set at middle", () => {
      const filledSizes = range(10, () => 20);
      const emptyOffsets = range(10, (i) => (i === 0 ? 0 : -1));
      const cache: Writeable<Cache> = {
        _length: filledSizes.length,
        _sizes: filledSizes,
        _defaultItemSize: 20,
      };
      const inst: InstanceCache = {
        _measuredOffsetIndex: 0,
        _offsets: emptyOffsets,
      };

      setItemSize(cache, inst, 4, 123);
      expect(cache._sizes).toEqual([20, 20, 20, 20, 123, 20, 20, 20, 20, 20]);
      expect(inst._offsets).toEqual([0, -1, -1, -1, -1, -1, -1, -1, -1, -1]);
      expect(inst._measuredOffsetIndex).toBe(0);
    });

    it("should set at last", () => {
      const filledSizes = range(10, () => 20);
      const emptyOffsets = range(10, (i) => (i === 0 ? 0 : -1));
      const cache: Writeable<Cache> = {
        _length: filledSizes.length,
        _sizes: filledSizes,
        _defaultItemSize: 20,
      };
      const inst: InstanceCache = {
        _measuredOffsetIndex: 0,
        _offsets: emptyOffsets,
      };

      setItemSize(cache, inst, emptyOffsets.length - 1, 123);
      expect(cache._sizes).toEqual([20, 20, 20, 20, 20, 20, 20, 20, 20, 123]);
      expect(inst._offsets).toEqual([0, -1, -1, -1, -1, -1, -1, -1, -1, -1]);
      expect(inst._measuredOffsetIndex).toBe(0);
    });
  });

  describe("with offsets measured", () => {
    it("should update measuredOffsetIndex if size is changed before measuredOffsetIndex", () => {
      const filledSizes = range(10, () => 20);
      const cache: Writeable<Cache> = {
        _length: filledSizes.length,
        _sizes: filledSizes,
        _defaultItemSize: 20,
      };
      const inst: InstanceCache = {
        _measuredOffsetIndex: 4,
        _offsets: [0, 10, 20, 30, 40, -1, -1, -1, -1, -1],
      };

      setItemSize(cache, inst, 1, 123);
      expect(cache._sizes).toEqual([20, 123, 20, 20, 20, 20, 20, 20, 20, 20]);
      expect(inst._offsets).toEqual([0, 10, 20, 30, 40, -1, -1, -1, -1, -1]);
      expect(inst._measuredOffsetIndex).toBe(1);
    });

    it("should not update measuredOffsetIndex if size is changed at measuredOffsetIndex", () => {
      const filledSizes = range(10, () => 20);
      const cache: Writeable<Cache> = {
        _length: filledSizes.length,
        _sizes: filledSizes,
        _defaultItemSize: 20,
      };
      const inst: InstanceCache = {
        _measuredOffsetIndex: 4,
        _offsets: [0, 10, 20, 30, 40, -1, -1, -1, -1, -1],
      };

      setItemSize(cache, inst, 4, 123);
      expect(cache._sizes).toEqual([20, 20, 20, 20, 123, 20, 20, 20, 20, 20]);
      expect(inst._offsets).toEqual([0, 10, 20, 30, 40, -1, -1, -1, -1, -1]);
      expect(inst._measuredOffsetIndex).toBe(4);
    });

    it("should not update measuredOffsetIndex if size is changed after measuredOffsetIndex", () => {
      const filledSizes = range(10, () => 20);
      const cache: Writeable<Cache> = {
        _length: filledSizes.length,
        _sizes: filledSizes,
        _defaultItemSize: 20,
      };
      const inst: InstanceCache = {
        _measuredOffsetIndex: 4,
        _offsets: [0, 10, 20, 30, 40, -1, -1, -1, -1, -1],
      };

      setItemSize(cache, inst, 5, 123);
      expect(cache._sizes).toEqual([20, 20, 20, 20, 20, 123, 20, 20, 20, 20]);
      expect(inst._offsets).toEqual([0, 10, 20, 30, 40, -1, -1, -1, -1, -1]);
      expect(inst._measuredOffsetIndex).toBe(4);
    });
  });

  describe("should return measurement status", () => {
    it("should return false if already measured", () => {
      const filledSizes = range(10, () => 20);
      const emptyOffsets = range(10, (i) => (i === 0 ? 0 : -1));
      const cache: Writeable<Cache> = {
        _length: filledSizes.length,
        _sizes: filledSizes,
        _defaultItemSize: 20,
      };
      const inst: InstanceCache = {
        _measuredOffsetIndex: 0,
        _offsets: emptyOffsets,
      };

      const res = setItemSize(cache, inst, 0, 123);
      expect(res).toBe(false);
    });

    it("should return true if not measured", () => {
      const filledSizes = range(10, () => -1);
      const emptyOffsets = range(10, (i) => (i === 0 ? 0 : -1));
      const cache: Writeable<Cache> = {
        _length: filledSizes.length,
        _sizes: filledSizes,
        _defaultItemSize: 20,
      };
      const inst: InstanceCache = {
        _measuredOffsetIndex: 0,
        _offsets: emptyOffsets,
      };

      const res = setItemSize(cache, inst, 0, 123);
      expect(res).toBe(true);
    });
  });
});

describe(computeTotalSize.name, () => {
  it("should succeed if sizes is filled", () => {
    const filledSizes = range(10, () => 20);
    const emptyOffsets = range(10, (i) => (i === 0 ? 0 : -1));
    const cache: Cache = {
      _length: filledSizes.length,
      _sizes: filledSizes,
      _defaultItemSize: 30,
    };
    const inst: InstanceCache = {
      _measuredOffsetIndex: 0,
      _offsets: emptyOffsets,
    };
    expect(computeTotalSize(cache, inst)).toBe(sum(filledSizes));
    expect(inst._offsets).toEqual([0, 20, 40, 60, 80, 100, 120, 140, 160, 180]);
  });

  it("should succeed if sizes is not filled", () => {
    const emptySizes = range(10, () => -1);
    const emptyOffsets = range(10, (i) => (i === 0 ? 0 : -1));
    const cache: Cache = {
      _length: emptySizes.length,
      _sizes: emptySizes,
      _defaultItemSize: 30,
    };
    const inst: InstanceCache = {
      _measuredOffsetIndex: 0,
      _offsets: emptyOffsets,
    };
    expect(computeTotalSize(cache, inst)).toBe(sum(range(10, () => 30)));
    expect(inst._offsets).toEqual([
      0, 30, 60, 90, 120, 150, 180, 210, 240, 270,
    ]);
  });

  it("should return 0 if cache length is 0", () => {
    const filledSizes: number[] = [];
    const emptyOffsets: number[] = [];
    const cache: Cache = {
      _length: filledSizes.length,
      _sizes: filledSizes,
      _defaultItemSize: 30,
    };
    const inst: InstanceCache = {
      _measuredOffsetIndex: 0,
      _offsets: emptyOffsets,
    };
    expect(computeTotalSize(cache, inst)).toBe(0);
    expect(inst._offsets).toEqual([]);
  });

  describe("with cached offsets", () => {
    it("should start from cached offset if measuredOffsetIndex is at cached", () => {
      const filledSizes = range(10, () => 20);
      const offsets = [0, 11, 22, 33, -1, -1, -1, -1, -1, -1];
      const cache: Cache = {
        _length: filledSizes.length,
        _sizes: filledSizes,
        _defaultItemSize: 30,
      };
      const inst: InstanceCache = {
        _measuredOffsetIndex: 2,
        _offsets: offsets,
      };
      expect(computeTotalSize(cache, inst)).toBe(sum(range(8, () => 20)) + 22);
      expect(inst._offsets).toEqual([
        0, 11, 22, 42, 62, 82, 102, 122, 142, 162,
      ]);
    });

    it("should return cached offset + 1 item size if measuredOffsetIndex is at end", () => {
      const filledSizes = range(10, () => 20);
      const offsets = [0, 11, 22, 33, 44, 55, 66, 77, 88, 99];
      const cache: Cache = {
        _length: filledSizes.length,
        _sizes: filledSizes,
        _defaultItemSize: 30,
      };
      const inst: InstanceCache = {
        _measuredOffsetIndex: 9,
        _offsets: offsets,
      };
      expect(computeTotalSize(cache, inst)).toBe(99 + 20);
      expect(inst._offsets).toEqual([0, 11, 22, 33, 44, 55, 66, 77, 88, 99]);
    });
  });
});

describe(computeStartOffset.name, () => {
  it("should get 0 if index is at start", () => {
    const filledSizes = range(10, () => 20);
    const emptyOffsets = range(10, (i) => (i === 0 ? 0 : -1));
    const cache: Cache = {
      _length: filledSizes.length,
      _sizes: filledSizes,
      _defaultItemSize: 30,
    };
    const inst: InstanceCache = {
      _measuredOffsetIndex: 0,
      _offsets: emptyOffsets,
    };
    expect(computeStartOffset(cache, inst, 0)).toBe(0);
    expect(inst._offsets).toEqual([0, -1, -1, -1, -1, -1, -1, -1, -1, -1]);
  });

  it("should get 1 item if index is at start", () => {
    const filledSizes = range(10, () => 20);
    const emptyOffsets = range(10, (i) => (i === 0 ? 0 : -1));
    const cache: Cache = {
      _length: filledSizes.length,
      _sizes: filledSizes,
      _defaultItemSize: 30,
    };
    const inst: InstanceCache = {
      _measuredOffsetIndex: 0,
      _offsets: emptyOffsets,
    };
    expect(computeStartOffset(cache, inst, 1)).toBe(20);
    expect(inst._offsets).toEqual([0, 20, -1, -1, -1, -1, -1, -1, -1, -1]);
  });

  it("should get total - 1 item if index is at last", () => {
    const filledSizes = range(10, () => 20);
    const emptyOffsets = range(10, (i) => (i === 0 ? 0 : -1));
    const cache: Cache = {
      _length: filledSizes.length,
      _sizes: filledSizes,
      _defaultItemSize: 30,
    };
    const inst: InstanceCache = {
      _measuredOffsetIndex: 0,
      _offsets: emptyOffsets,
    };
    const last = filledSizes.length - 1;
    expect(computeStartOffset(cache, inst, last)).toBe(
      sum(filledSizes) - filledSizes[last]!
    );
    expect(inst._offsets).toEqual([0, 20, 40, 60, 80, 100, 120, 140, 160, 180]);
  });

  it("should resolve default height", () => {
    const emptySizes = range(10, () => -1);
    const emptyOffsets = range(10, (i) => (i === 0 ? 0 : -1));
    const cache: Cache = {
      _length: emptySizes.length,
      _sizes: emptySizes,
      _defaultItemSize: 30,
    };
    const inst: InstanceCache = {
      _measuredOffsetIndex: 0,
      _offsets: emptyOffsets,
    };
    expect(computeStartOffset(cache, inst, 2)).toBe(60);
    expect(inst._offsets).toEqual([0, 30, 60, -1, -1, -1, -1, -1, -1, -1]);
  });

  describe("with cached offsets", () => {
    it("should return cached offset if index is before measuredOffsetIndex", () => {
      const filledSizes = range(10, () => 20);
      const offsets = [0, 11, 22, 33, -1, -1, -1, -1, -1, -1];
      const cache: Cache = {
        _length: filledSizes.length,
        _sizes: filledSizes,
        _defaultItemSize: 30,
      };
      const inst: InstanceCache = {
        _measuredOffsetIndex: 3,
        _offsets: offsets,
      };
      expect(computeStartOffset(cache, inst, 2)).toBe(22);
      expect(inst._offsets).toEqual([0, 11, 22, 33, -1, -1, -1, -1, -1, -1]);
    });

    it("should return cached offset if index is the same as measuredOffsetIndex", () => {
      const filledSizes = range(10, () => 20);
      const offsets = [0, 11, 22, 33, -1, -1, -1, -1, -1, -1];
      const cache: Cache = {
        _length: filledSizes.length,
        _sizes: filledSizes,
        _defaultItemSize: 30,
      };
      const inst: InstanceCache = {
        _measuredOffsetIndex: 3,
        _offsets: offsets,
      };
      expect(computeStartOffset(cache, inst, 3)).toBe(33);
      expect(inst._offsets).toEqual([0, 11, 22, 33, -1, -1, -1, -1, -1, -1]);
    });

    it("should start from cached offset if index is after measuredOffsetIndex", () => {
      const filledSizes = range(10, () => 20);
      const offsets = [0, 11, 22, 33, -1, -1, -1, -1, -1, -1];
      const cache: Cache = {
        _length: filledSizes.length,
        _sizes: filledSizes,
        _defaultItemSize: 30,
      };
      const inst: InstanceCache = {
        _measuredOffsetIndex: 3,
        _offsets: offsets,
      };
      expect(computeStartOffset(cache, inst, 5)).toBe(33 + 20 * 2);
      expect(inst._offsets).toEqual([0, 11, 22, 33, 53, 73, -1, -1, -1, -1]);
    });
  });
});

describe("findEndIndex", () => {
  const filledSizes = range(10, () => 20);
  const cache: Cache = {
    _length: filledSizes.length,
    _sizes: filledSizes,
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
      _defaultItemSize: 25,
    };
    expect(findEndIndex(emptyCache, 0, 100)).toBe(4);
  });
});

describe("findStartIndex", () => {
  const initFilledCache = (sizes: number[]): [Cache, InstanceCache] => {
    return [
      {
        _length: sizes.length,
        _sizes: sizes,
        _defaultItemSize: 30,
      },
      {
        _measuredOffsetIndex: sizes.length - 1,
        _offsets: sizes.reduce((acc, s, i) => {
          acc.push(i === 0 ? 0 : acc[i - 1]! + s);
          return acc;
        }, [] as number[]),
      },
    ];
  };

  it("should resolve default height", () => {
    const initEmptyCache = (): [Cache, InstanceCache] => {
      const emptySizes = range(10, () => -1);
      return [
        {
          _length: emptySizes.length,
          _sizes: emptySizes,
          _defaultItemSize: 25,
        },
        {
          _measuredOffsetIndex: 0,
          _offsets: [0],
        },
      ];
    };

    expect(findStartIndexWithOffset(...initEmptyCache(), 100, 0)).toBe(4);
  });

  describe("start from start", () => {
    it("should get start if offset is at start", () => {
      const [cache, inst] = initFilledCache(range(10, () => 20));
      expect(findStartIndexWithOffset(cache, inst, 0, 0)).toBe(0);
    });

    it("should get start if offset is at start + 1px", () => {
      const [cache, inst] = initFilledCache(range(10, () => 20));
      expect(findStartIndexWithOffset(cache, inst, 1, 0)).toBe(0);
    });

    it("should get end if offset is at end", () => {
      const [cache, inst] = initFilledCache(range(10, () => 20));
      expect(findStartIndexWithOffset(cache, inst, sum(cache._sizes), 0)).toBe(
        cache._length - 1
      );
    });

    it("should get end if offset is at end - 1px", () => {
      const [cache, inst] = initFilledCache(range(10, () => 20));
      expect(
        findStartIndexWithOffset(cache, inst, sum(cache._sizes) - 1, 0)
      ).toBe(cache._length - 1);
    });

    it("should get 1 if offset fits index 1", () => {
      const [cache, inst] = initFilledCache(range(10, () => 20));
      expect(findStartIndexWithOffset(cache, inst, 20, 0)).toBe(1);
    });

    it("should get 1 if offset fits index 1 + 1px", () => {
      const [cache, inst] = initFilledCache(range(10, () => 20));
      expect(findStartIndexWithOffset(cache, inst, 21, 0)).toBe(1);
    });

    it("should get 1 if offset fits index 1 - 1px", () => {
      const [cache, inst] = initFilledCache(range(10, () => 20));
      expect(findStartIndexWithOffset(cache, inst, 19, 0)).toBe(1);
    });

    it("should get 1 if offset fits index 1.5", () => {
      const [cache, inst] = initFilledCache(range(10, () => 20));
      expect(findStartIndexWithOffset(cache, inst, 30, 0)).toBe(1);
    });

    it("should get 2 if offset fits index 1.5 + 1px", () => {
      const [cache, inst] = initFilledCache(range(10, () => 20));
      expect(findStartIndexWithOffset(cache, inst, 31, 0)).toBe(2);
    });

    it("should get 2 if offset fits index 1.5 + 0.01px", () => {
      const [cache, inst] = initFilledCache(range(10, () => 20));
      expect(findStartIndexWithOffset(cache, inst, 30.01, 0)).toBe(2);
    });

    it("should get 1 if offset fits index 1.5 - 1px", () => {
      const [cache, inst] = initFilledCache(range(10, () => 20));
      expect(findStartIndexWithOffset(cache, inst, 29, 0)).toBe(1);
    });

    it("should get 1 if offset fits index 1.5 - 0.01px", () => {
      const [cache, inst] = initFilledCache(range(10, () => 20));
      expect(findStartIndexWithOffset(cache, inst, 29.99, 0)).toBe(1);
    });

    it("should get 2 if offset fits index 2", () => {
      const [cache, inst] = initFilledCache(range(10, () => 20));
      expect(findStartIndexWithOffset(cache, inst, 40, 0)).toBe(2);
    });

    it("should get 2 if offset fits index 2 + 1px", () => {
      const [cache, inst] = initFilledCache(range(10, () => 20));
      expect(findStartIndexWithOffset(cache, inst, 41, 0)).toBe(2);
    });

    it("should get 2 if offset fits index 2 - 1px", () => {
      const [cache, inst] = initFilledCache(range(10, () => 20));
      expect(findStartIndexWithOffset(cache, inst, 39, 0)).toBe(2);
    });
  });

  describe("start from end", () => {
    it("should get start if offset is at start", () => {
      const [cache, inst] = initFilledCache(range(10, () => 20));
      expect(findStartIndexWithOffset(cache, inst, 0, cache._length)).toBe(0);
    });

    it("should get start if offset is at start + 1px", () => {
      const [cache, inst] = initFilledCache(range(10, () => 20));
      expect(findStartIndexWithOffset(cache, inst, 1, cache._length)).toBe(0);
    });

    it("should get end if offset is at end", () => {
      const [cache, inst] = initFilledCache(range(10, () => 20));
      expect(
        findStartIndexWithOffset(cache, inst, sum(cache._sizes), cache._length)
      ).toBe(cache._length - 1);
    });

    it("should get end if offset is at end - 1px", () => {
      const [cache, inst] = initFilledCache(range(10, () => 20));
      expect(
        findStartIndexWithOffset(
          cache,
          inst,
          sum(cache._sizes) - 1,
          cache._length
        )
      ).toBe(cache._length - 1);
    });

    it("should get 1 if offset fits index 1", () => {
      const [cache, inst] = initFilledCache(range(10, () => 20));
      expect(findStartIndexWithOffset(cache, inst, 20, cache._length)).toBe(1);
    });

    it("should get 1 if offset fits index 1 + 1px", () => {
      const [cache, inst] = initFilledCache(range(10, () => 20));
      expect(findStartIndexWithOffset(cache, inst, 21, cache._length)).toBe(1);
    });

    it("should get 1 if offset fits index 1 - 1px", () => {
      const [cache, inst] = initFilledCache(range(10, () => 20));
      expect(findStartIndexWithOffset(cache, inst, 19, cache._length)).toBe(1);
    });

    it("should get 1 if offset fits index 1.5", () => {
      const [cache, inst] = initFilledCache(range(10, () => 20));
      expect(findStartIndexWithOffset(cache, inst, 30, cache._length)).toBe(1);
    });

    it("should get 2 if offset fits index 1.5 + 1px", () => {
      const [cache, inst] = initFilledCache(range(10, () => 20));
      expect(findStartIndexWithOffset(cache, inst, 31, cache._length)).toBe(2);
    });

    it("should get 2 if offset fits index 1.5 + 0.01px", () => {
      const [cache, inst] = initFilledCache(range(10, () => 20));
      expect(findStartIndexWithOffset(cache, inst, 30.01, cache._length)).toBe(
        2
      );
    });

    it("should get 1 if offset fits index 1.5 - 1px", () => {
      const [cache, inst] = initFilledCache(range(10, () => 20));
      expect(findStartIndexWithOffset(cache, inst, 29, cache._length)).toBe(1);
    });

    it("should get 1 if offset fits index 1.5 - 0.01px", () => {
      const [cache, inst] = initFilledCache(range(10, () => 20));
      expect(findStartIndexWithOffset(cache, inst, 29.99, cache._length)).toBe(
        1
      );
    });

    it("should get 2 if offset fits index 2", () => {
      const [cache, inst] = initFilledCache(range(10, () => 20));
      expect(findStartIndexWithOffset(cache, inst, 40, cache._length)).toBe(2);
    });

    it("should get 2 if offset fits index 2 + 1px", () => {
      const [cache, inst] = initFilledCache(range(10, () => 20));
      expect(findStartIndexWithOffset(cache, inst, 41, cache._length)).toBe(2);
    });

    it("should get 2 if offset fits index 2 - 1px", () => {
      const [cache, inst] = initFilledCache(range(10, () => 20));
      expect(findStartIndexWithOffset(cache, inst, 39, cache._length)).toBe(2);
    });
  });

  describe("start from middle", () => {
    const offset = (cache: Cache, i: number) => sum(cache._sizes.slice(0, i));

    it("should get start if offset is at start", () => {
      const [cache, inst] = initFilledCache(range(10, () => 20));
      expect(findStartIndexWithOffset(cache, inst, 0, 4)).toBe(0);
    });

    it("should get end if offset is at end", () => {
      const [cache, inst] = initFilledCache(range(10, () => 20));
      expect(findStartIndexWithOffset(cache, inst, sum(cache._sizes), 4)).toBe(
        cache._sizes.length - 1
      );
    });

    it("should get prevStartIndex if offset fits prevStartIndex", () => {
      const [cache, inst] = initFilledCache(range(10, () => 20));
      expect(findStartIndexWithOffset(cache, inst, offset(cache, 4), 4)).toBe(
        4
      );
    });

    it("should get prevStartIndex if offset fits prevStartIndex + 1px", () => {
      const [cache, inst] = initFilledCache(range(10, () => 20));
      expect(
        findStartIndexWithOffset(cache, inst, offset(cache, 4) + 1, 4)
      ).toBe(4);
    });

    it("should get prevStartIndex if offset fits prevStartIndex - 1px", () => {
      const [cache, inst] = initFilledCache(range(10, () => 20));
      expect(
        findStartIndexWithOffset(cache, inst, offset(cache, 4) - 1, 4)
      ).toBe(4);
    });
  });

  describe("both", () => {
    it("should get same in forward and backward search", () => {
      const [cache, inst] = initFilledCache(
        range(10, (i) => (i % 2 === 0 ? 21 : 41))
      );
      expect(findStartIndexWithOffset(cache, inst, 1, 0)).toBe(0);
      expect(findStartIndexWithOffset(cache, inst, 1, 1)).toBe(0);
    });
  });
});

describe(hasUnmeasuredItemsInRange.name, () => {
  it("should return false if all measured", () => {
    const sizes = [10, 10, 10, 10];
    const cache: Cache = {
      _length: sizes.length,
      _sizes: sizes,
      _defaultItemSize: 30,
    };
    expect(hasUnmeasuredItemsInRange(cache, 0, sizes.length - 1)).toBe(false);
  });

  it("should return true if start is not measured", () => {
    const sizes = [10, -1, 10, 10];
    const cache: Cache = {
      _length: sizes.length,
      _sizes: sizes,
      _defaultItemSize: 30,
    };
    expect(hasUnmeasuredItemsInRange(cache, 1, 2)).toBe(true);
  });

  it("should return true if end is not measured", () => {
    const sizes = [10, 10, -1, 10];
    const cache: Cache = {
      _length: sizes.length,
      _sizes: sizes,
      _defaultItemSize: 30,
    };
    expect(hasUnmeasuredItemsInRange(cache, 1, 2)).toBe(true);
  });
});

describe(initializeCache.name, () => {
  it("should create cache", () => {
    const cache: Cache = {
      _defaultItemSize: 23,
      _length: 0,
      _sizes: [],
    };
    const inst: InstanceCache = {
      _measuredOffsetIndex: 0,
      _offsets: [],
    };
    initializeCache(cache as Writeable<Cache>, inst, 10);
    expect(cache).toMatchInlineSnapshot(`
      {
        "_defaultItemSize": 23,
        "_length": 10,
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
    expect(inst).toMatchInlineSnapshot(`
      {
        "_measuredOffsetIndex": 0,
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
      }
    `);
  });
});

describe(updateCacheLength.name, () => {
  it("should increase cache length", () => {
    const cache: Cache = {
      _defaultItemSize: 40,
      _length: 0,
      _sizes: [],
    };
    const inst: InstanceCache = {
      _measuredOffsetIndex: 0,
      _offsets: [],
    };
    initializeCache(cache as Writeable<Cache>, inst, 10);
    const res = updateCacheLength(
      cache as Writeable<Cache>,
      inst,
      15,
      undefined
    );
    expect(res).toEqual([40 * 5, false]);
    expect(cache).toMatchInlineSnapshot(`
      {
        "_defaultItemSize": 40,
        "_length": 15,
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
    expect(inst).toMatchInlineSnapshot(`
      {
        "_measuredOffsetIndex": 0,
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
      }
    `);
  });

  it("should decrease cache length", () => {
    const cache: Cache = {
      _defaultItemSize: 40,
      _length: 0,
      _sizes: [],
    };
    const inst: InstanceCache = {
      _measuredOffsetIndex: 0,
      _offsets: [],
    };
    initializeCache(cache as Writeable<Cache>, inst, 10);
    (cache as Writeable<Cache>)._sizes[9] = 123;
    const res = updateCacheLength(
      cache as Writeable<Cache>,
      inst,
      5,
      undefined
    );
    expect(res).toEqual([40 * 4 + 123, true]);
    expect(cache).toMatchInlineSnapshot(`
      {
        "_defaultItemSize": 40,
        "_length": 5,
        "_sizes": [
          -1,
          -1,
          -1,
          -1,
          -1,
        ],
      }
    `);
    expect(inst).toMatchInlineSnapshot(`
      {
        "_measuredOffsetIndex": 0,
        "_offsets": [
          0,
          -1,
          -1,
          -1,
          -1,
        ],
      }
    `);
  });

  it("should recover cache length from 0", () => {
    const cache: Cache = {
      _defaultItemSize: 40,
      _length: 0,
      _sizes: [],
    };
    const inst: InstanceCache = {
      _measuredOffsetIndex: 0,
      _offsets: [],
    };
    initializeCache(cache as Writeable<Cache>, inst, 10);
    const initialCache = JSON.parse(JSON.stringify(cache));
    const initialInst = JSON.parse(JSON.stringify(inst));
    updateCacheLength(cache as Writeable<Cache>, inst, 0);
    updateCacheLength(cache as Writeable<Cache>, inst, 10);
    expect(cache).toEqual(initialCache);
    expect(inst).toEqual(initialInst);
  });

  it("should increase cache length with shifting", () => {
    const cache: Cache = {
      _defaultItemSize: 40,
      _length: 0,
      _sizes: [],
    };
    const inst: InstanceCache = {
      _measuredOffsetIndex: 0,
      _offsets: [],
    };
    initializeCache(cache as Writeable<Cache>, inst, 10);
    const res = updateCacheLength(cache as Writeable<Cache>, inst, 15, true);
    expect(res).toEqual([40 * 5, false]);
    expect(cache).toMatchInlineSnapshot(`
      {
        "_defaultItemSize": 40,
        "_length": 15,
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
    expect(inst).toMatchInlineSnapshot(`
      {
        "_measuredOffsetIndex": 0,
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
      }
    `);
  });

  it("should decrease cache length with shifting", () => {
    const cache: Cache = {
      _defaultItemSize: 40,
      _length: 0,
      _sizes: [],
    };
    const inst: InstanceCache = {
      _measuredOffsetIndex: 0,
      _offsets: [],
    };
    initializeCache(cache as Writeable<Cache>, inst, 10);
    (cache as Writeable<Cache>)._sizes[0] = 123;
    const res = updateCacheLength(cache as Writeable<Cache>, inst, 5, true);
    expect(res).toEqual([40 * 4 + 123, true]);
    expect(cache).toMatchInlineSnapshot(`
      {
        "_defaultItemSize": 40,
        "_length": 5,
        "_sizes": [
          -1,
          -1,
          -1,
          -1,
          -1,
        ],
      }
    `);
    expect(inst).toMatchInlineSnapshot(`
      {
        "_measuredOffsetIndex": 0,
        "_offsets": [
          0,
          -1,
          -1,
          -1,
          -1,
        ],
      }
    `);
  });
});
