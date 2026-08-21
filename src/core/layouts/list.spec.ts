import { describe, it, expect } from "vitest";
import { createListLayout, type ListLayout } from "./list.js";

const range = <T>(length: number, cb: (i: number) => T): T[] => {
  const array: T[] = [];
  for (let i = 0; i < length; i++) {
    array.push(cb(i));
  }
  return array;
};

const sum = (values: readonly number[]): number => {
  return values.reduce((acc, c) => acc + c, 0);
};

const sizesOf = (layout: ListLayout) => layout.$snapshot()[0];

const defaultSizeOf = (layout: ListLayout) => layout.$snapshot()[1]!;

const initLayoutWithSizesAndEmptyOffsets = (
  sizes: readonly number[],
  defaultSize: number,
) => createListLayout(sizes.length, defaultSize, [sizes.slice(), defaultSize]);

const initLayoutWithSizes = (sizes: readonly number[], defaultSize: number) => {
  const layout = initLayoutWithSizesAndEmptyOffsets(sizes, defaultSize);
  layout.$getTotalSize();
  return layout;
};

describe("getRange", () => {
  const CACHE_LENGTH = 10;

  // Moves the search cursor by computing a range which starts at the index
  const initLayoutWithCursorAt = (
    sizes: readonly number[],
    defaultSize: number,
    index: number,
  ) => {
    const layout = initLayoutWithSizes(sizes, defaultSize);
    const offset = sum(sizes.slice(0, index));
    layout.$getRange(offset, offset);
    return layout;
  };

  describe.each([
    [0], // start
    [Math.floor(CACHE_LENGTH / 2)], // mid
    [CACHE_LENGTH - 1], // end
  ])("start from %i", (initialIndex) => {
    const init = () =>
      initLayoutWithCursorAt(
        range(CACHE_LENGTH, () => 20),
        30,
        initialIndex,
      );

    it("should get start if offset is at start", () => {
      expect(init().$getRange(0, 100)).toEqual([0, 5]);
    });

    it("should get start + 1 if offset is at start + 1", () => {
      expect(init().$getRange(20, 20 + 100)).toEqual([1, 6]);
    });

    it("should get last if offset is at end", () => {
      const sizes = range(CACHE_LENGTH, () => 20);
      const layout = init();
      const last = layout.$getLength() - 1;
      const start = sum(sizes);
      expect(layout.$getRange(start, start + 100)).toEqual([last, last]);
    });

    it("should get last if offset is at end - 1", () => {
      const sizes = range(CACHE_LENGTH, () => 20);
      const layout = init();
      const last = layout.$getLength() - 1;
      const start = sum(sizes) - 20;
      expect(layout.$getRange(start, start + 100)).toEqual([last, last]);
    });

    it("should get last - 1 if offset is at end - 1 and more", () => {
      const sizes = range(CACHE_LENGTH, () => 20);
      const layout = init();
      const last = layout.$getLength() - 1;
      const start = sum(sizes) - 20 - 1;
      expect(layout.$getRange(start, start + 100)).toEqual([last - 1, last]);
    });

    it("should get start if offset is before start", () => {
      const start = -1000;
      expect(init().$getRange(start, start + 100)).toEqual([0, 0]);
    });

    it("should get last if offset is after end", () => {
      const sizes = range(CACHE_LENGTH, () => 20);
      const layout = init();
      const last = layout.$getLength() - 1;
      const start = sum(sizes) + 1000;
      expect(layout.$getRange(start, start + 100)).toEqual([last, last]);
    });

    it("should get prevStartIndex if offset fits prevStartIndex", () => {
      const sizes = range(CACHE_LENGTH, () => 20);
      const layout = init();
      const start = sum(sizes.slice(0, initialIndex));
      expect(layout.$getRange(start, start + 100)).toEqual([
        initialIndex,
        expect.any(Number),
      ]);
    });
  });
});

describe("snapshot", () => {
  it("smoke", () => {
    const layout = initLayoutWithSizes(
      range(10, (i) => (i + 1) * 10),
      40,
    );
    const snapshot = layout.$snapshot();
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
    expect(layout.$snapshot()).toEqual(clonedSnapshot);
  });
});

describe("createListLayout", () => {
  it("should create cache", () => {
    const itemLength = 10;
    const layout = createListLayout(itemLength, 23);
    expect(layout.$snapshot()).toMatchInlineSnapshot(`
      [
        [
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
        23,
      ]
    `);
    expect(layout.$getLength()).toBe(itemLength);
    expect(sizesOf(layout).length).toBe(itemLength);
    expect(layout.$getTotalSize()).toBe(23 * itemLength);
  });

  it("should restore cache from snapshot", () => {
    const itemLength = 10;
    const layout = createListLayout(itemLength, 123, [
      [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      123,
    ]);
    expect(layout.$snapshot()).toMatchInlineSnapshot(`
      [
        [
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
        123,
      ]
    `);
    expect(layout.$getLength()).toBe(itemLength);
    expect(sizesOf(layout).length).toBe(itemLength);
    expect(layout.$getTotalSize()).toBe(sum([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]));
  });

  it("should restore cache from snapshot which has shorter length", () => {
    const itemLength = 10;
    const layout = createListLayout(itemLength, 123, [[0, 1, 2, 3, 4], 123]);
    expect(layout.$snapshot()).toMatchInlineSnapshot(`
      [
        [
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
        123,
      ]
    `);
    expect(layout.$getLength()).toBe(itemLength);
    expect(sizesOf(layout).length).toBe(itemLength);
    expect(layout.$getTotalSize()).toBe(sum([0, 1, 2, 3, 4]) + 123 * 5);
  });

  it("should restore cache from snapshot which has longer length", () => {
    const itemLength = 10;
    const layout = createListLayout(itemLength, 123, [
      [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      123,
    ]);
    expect(layout.$snapshot()).toMatchInlineSnapshot(`
      [
        [
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
        123,
      ]
    `);
    expect(layout.$getLength()).toBe(itemLength);
    expect(sizesOf(layout).length).toBe(itemLength);
    expect(layout.$getTotalSize()).toBe(sum([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]));
  });
});

describe("setLength", () => {
  it("should recover cache length from 0", () => {
    const layout = createListLayout(10, 40);
    const initialSnapshot = layout.$snapshot();
    layout.$setLength(0);
    layout.$setLength(10);
    expect(layout.$snapshot()).toEqual(initialSnapshot);
  });

  it("should increase cache length", () => {
    const layout = createListLayout(10, 40);
    const initialTotalSize = layout.$getTotalSize();
    const res = layout.$setLength(15, undefined);
    expect(res).toEqual(40 * 5);
    expect(layout.$snapshot()).toMatchInlineSnapshot(`
      [
        [
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
        40,
      ]
    `);
    expect(layout.$getTotalSize()).toBe(initialTotalSize + res);
  });

  it("should increase filled cache length", () => {
    const sizes = range(10, (i) => (i + 1) * 10);
    const layout = initLayoutWithSizes(sizes, 40);
    const initialTotalSize = layout.$getTotalSize();
    const res = layout.$setLength(15, undefined);
    expect(res).toEqual(40 * 5);
    expect(layout.$snapshot()).toMatchInlineSnapshot(`
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
          -1,
          -1,
          -1,
          -1,
          -1,
        ],
        40,
      ]
    `);
    expect(layout.$getTotalSize()).toBe(initialTotalSize + res);
  });

  it("should decrease cache length", () => {
    const layout = createListLayout(10, 40);
    const initialTotalSize = layout.$getTotalSize();
    const res = layout.$setLength(5, undefined);
    expect(res).toEqual(-(40 * 5));
    expect(layout.$snapshot()).toMatchInlineSnapshot(`
      [
        [
          -1,
          -1,
          -1,
          -1,
          -1,
        ],
        40,
      ]
    `);
    expect(layout.$getTotalSize()).toBe(initialTotalSize + res);
  });

  it("should decrease filled cache length", () => {
    const sizes = range(10, (i) => (i + 1) * 10);
    const layout = initLayoutWithSizes(sizes, 40);
    const initialTotalSize = layout.$getTotalSize();
    const res = layout.$setLength(5, undefined);
    expect(res).toEqual(-sum(sizes.slice(-5)));
    expect(layout.$snapshot()).toMatchInlineSnapshot(`
      [
        [
          10,
          20,
          30,
          40,
          50,
        ],
        40,
      ]
    `);
    expect(layout.$getTotalSize()).toBe(initialTotalSize + res);
  });

  it("should increase cache length with shifting", () => {
    const layout = createListLayout(10, 40);
    const initialTotalSize = layout.$getTotalSize();
    const res = layout.$setLength(15, true);
    expect(res).toEqual(40 * 5);
    expect(layout.$snapshot()).toMatchInlineSnapshot(`
      [
        [
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
        40,
      ]
    `);
    expect(layout.$getTotalSize()).toBe(initialTotalSize + res);
  });

  it("should increase filled cache length with shifting", () => {
    const sizes = range(10, (i) => (i + 1) * 10);
    const layout = initLayoutWithSizes(sizes, 40);
    const initialTotalSize = layout.$getTotalSize();
    const res = layout.$setLength(15, true);
    expect(res).toEqual(40 * 5);
    expect(layout.$snapshot()).toMatchInlineSnapshot(`
      [
        [
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
        40,
      ]
    `);
    expect(layout.$getTotalSize()).toBe(initialTotalSize + res);
  });

  it("should decrease cache length with shifting", () => {
    const layout = createListLayout(10, 40);
    const initialTotalSize = layout.$getTotalSize();
    const res = layout.$setLength(5, true);
    expect(res).toEqual(-(40 * 5));
    expect(layout.$snapshot()).toMatchInlineSnapshot(`
      [
        [
          -1,
          -1,
          -1,
          -1,
          -1,
        ],
        40,
      ]
    `);
    expect(layout.$getTotalSize()).toBe(initialTotalSize + res);
  });

  it("should decrease filled cache length with shifting", () => {
    const sizes = range(10, (i) => (i + 1) * 10);
    const layout = initLayoutWithSizes(sizes, 40);
    const initialTotalSize = layout.$getTotalSize();
    const res = layout.$setLength(5, true);
    expect(res).toEqual(-sum(sizes.slice(0, 5)));
    expect(layout.$snapshot()).toMatchInlineSnapshot(`
      [
        [
          60,
          70,
          80,
          90,
          100,
        ],
        40,
      ]
    `);
    expect(layout.$getTotalSize()).toBe(initialTotalSize + res);
  });
});

describe("getItemSize", () => {
  const layout = initLayoutWithSizesAndEmptyOffsets([10, -1], 20);

  it("should get height", () => {
    expect(layout.$getItemSize(0)).toBe(10);
  });
  it("should get default height", () => {
    expect(layout.$getItemSize(1)).toBe(20);
  });
});

describe("setItemSize", () => {
  const offsetsOf = (layout: ListLayout): number[] =>
    range(layout.$getLength() + 1, (i) => layout.$getItemOffset(i));
  const sizesToOffsets = (sizes: readonly number[]): number[] => {
    return sizes.reduce(
      (acc, s, i) => {
        acc.push(acc[i]! + s);
        return acc;
      },
      [0] as number[],
    );
  };

  it("should set at first", () => {
    const filledSizes = range(10, () => 20);
    const layout = initLayoutWithSizesAndEmptyOffsets(filledSizes, 20);

    layout.$setItemSize(0, 123);
    expect(sizesOf(layout)).toEqual([123, 20, 20, 20, 20, 20, 20, 20, 20, 20]);
    expect(offsetsOf(layout)).toEqual(sizesToOffsets(sizesOf(layout)));
  });

  it("should set at middle", () => {
    const filledSizes = range(10, () => 20);
    const layout = initLayoutWithSizesAndEmptyOffsets(filledSizes, 20);

    layout.$setItemSize(4, 123);
    expect(sizesOf(layout)).toEqual([20, 20, 20, 20, 123, 20, 20, 20, 20, 20]);
    expect(offsetsOf(layout)).toEqual(sizesToOffsets(sizesOf(layout)));
  });

  it("should set at last", () => {
    const filledSizes = range(10, () => 20);
    const layout = initLayoutWithSizesAndEmptyOffsets(filledSizes, 20);

    layout.$setItemSize(layout.$getLength() - 1, 123);
    expect(sizesOf(layout)).toEqual([20, 20, 20, 20, 20, 20, 20, 20, 20, 123]);
    expect(offsetsOf(layout)).toEqual(sizesToOffsets(sizesOf(layout)));
  });

  describe("should return measurement status", () => {
    it("should return false if already measured", () => {
      const filledSizes = range(10, () => 20);
      const layout = initLayoutWithSizesAndEmptyOffsets(filledSizes, 20);

      const res = layout.$setItemSize(0, 123);
      expect(res).toBe(false);
    });

    it("should return true if not measured", () => {
      const emptySizes = range(10, () => -1);
      const layout = initLayoutWithSizesAndEmptyOffsets(emptySizes, 20);

      const res = layout.$setItemSize(0, 123);
      expect(res).toBe(true);
    });
  });
});

describe("getItemOffset", () => {
  it("should get 0 if index is at start", () => {
    const filledSizes = range(10, () => 20);
    const layout = initLayoutWithSizesAndEmptyOffsets(filledSizes, 30);

    expect(layout.$getItemOffset(0)).toBe(0);
  });

  it("should get 1 item if index is at start", () => {
    const filledSizes = range(10, () => 20);
    const layout = initLayoutWithSizesAndEmptyOffsets(filledSizes, 30);

    expect(layout.$getItemOffset(1)).toBe(20);
  });

  it("should get total - 1 item if index is at last", () => {
    const filledSizes = range(10, () => 20);
    const layout = initLayoutWithSizesAndEmptyOffsets(filledSizes, 30);

    const last = filledSizes.length - 1;
    expect(layout.$getItemOffset(last)).toBe(
      sum(filledSizes) - filledSizes[last]!,
    );
  });

  it("should resolve default height", () => {
    const emptySizes = range(10, () => -1);
    const layout = initLayoutWithSizesAndEmptyOffsets(emptySizes, 30);

    expect(layout.$getItemOffset(2)).toBe(60);
  });

  it("should return 0 if cache length is 0", () => {
    const layout = initLayoutWithSizesAndEmptyOffsets([], 30);

    expect(layout.$getItemOffset(0)).toBe(0);
    expect(layout.$getItemOffset(10)).toBe(0);
  });
});

describe("getTotalSize", () => {
  it("should succeed if sizes is filled", () => {
    const filledSizes = range(10, () => 20);
    const layout = initLayoutWithSizesAndEmptyOffsets(filledSizes, 30);

    expect(layout.$getTotalSize()).toBe(sum(filledSizes));
  });

  it("should succeed if sizes is not filled", () => {
    const emptySizes = range(10, () => -1);
    const layout = initLayoutWithSizesAndEmptyOffsets(emptySizes, 30);

    const sizes = range(10, () => 30);
    expect(layout.$getTotalSize()).toBe(sum(sizes));
  });

  it("should return 0 if sizes length is 0", () => {
    const layout = initLayoutWithSizesAndEmptyOffsets([], 30);
    expect(layout.$getTotalSize()).toBe(0);
  });
});

describe("estimateDefaultSize", () => {
  const setup = (indexes: readonly number[]) => {
    const sizes = range(100, () => -1);
    const layout = createListLayout(sizes.length, undefined, [sizes, 30]);
    layout.$getTotalSize();
    indexes.forEach((i) => layout.$setItemSize(i, 50));
    return [
      layout,
      sizesOf(layout),
      defaultSizeOf(layout),
      layout.$getTotalSize(),
    ] as const;
  };

  describe("start", () => {
    it("should update with 1 entry", () => {
      const indexes = [0];
      const [layout, initialSizes, initialDefaultSize, initialTotalSize] =
        setup(indexes);

      const diff = layout.$estimateDefaultSize!(0);
      expect(defaultSizeOf(layout)).toBe(50);
      expect(sizesOf(layout)).toEqual(initialSizes);
      expect(diff).toBe(0);
      expect(layout.$getTotalSize()).toBe(
        initialTotalSize +
          (defaultSizeOf(layout) - initialDefaultSize) * (100 - indexes.length),
      );
    });

    it("should update with some entry", () => {
      const indexes = [0, 1, 2, 3];
      const [layout, initialSizes, initialDefaultSize, initialTotalSize] =
        setup(indexes);

      const diff = layout.$estimateDefaultSize!(0);
      expect(defaultSizeOf(layout)).toBe(50);
      expect(sizesOf(layout)).toEqual(initialSizes);
      expect(diff).toBe(0);
      expect(layout.$getTotalSize()).toBe(
        initialTotalSize +
          (defaultSizeOf(layout) - initialDefaultSize) * (100 - indexes.length),
      );
    });

    it("should update with some entry from outside", () => {
      const indexes = [20, 21, 22, 23];
      const [layout, initialSizes, initialDefaultSize, initialTotalSize] =
        setup(indexes);

      const diff = layout.$estimateDefaultSize!(0);
      expect(defaultSizeOf(layout)).toBe(50);
      expect(sizesOf(layout)).toEqual(initialSizes);
      expect(diff).toBe(0);
      expect(layout.$getTotalSize()).toBe(
        initialTotalSize +
          (defaultSizeOf(layout) - initialDefaultSize) * (100 - indexes.length),
      );
    });
  });

  describe("end", () => {
    it("should update with 1 entry", () => {
      const indexes = [92];
      const [layout, initialSizes, initialDefaultSize, initialTotalSize] =
        setup(indexes);

      const diff = layout.$estimateDefaultSize!(layout.$getLength() - 10);
      expect(defaultSizeOf(layout)).toBe(50);
      expect(sizesOf(layout)).toEqual(initialSizes);
      expect(diff).toBe((50 - 30) * 90);
      expect(layout.$getTotalSize()).toBe(
        initialTotalSize +
          (defaultSizeOf(layout) - initialDefaultSize) * (100 - indexes.length),
      );
    });

    it("should update with some entry", () => {
      const indexes = [92, 93, 94, 95];
      const [layout, initialSizes, initialDefaultSize, initialTotalSize] =
        setup(indexes);

      const diff = layout.$estimateDefaultSize!(layout.$getLength() - 10);
      expect(defaultSizeOf(layout)).toBe(50);
      expect(sizesOf(layout)).toEqual(initialSizes);
      expect(diff).toBe((50 - 30) * 90);
      expect(layout.$getTotalSize()).toBe(
        initialTotalSize +
          (defaultSizeOf(layout) - initialDefaultSize) * (100 - indexes.length),
      );
    });

    it("should update with some entry from outside", () => {
      const indexes = [20, 21, 22, 23];
      const [layout, initialSizes, initialDefaultSize, initialTotalSize] =
        setup(indexes);

      const diff = layout.$estimateDefaultSize!(layout.$getLength() - 10);
      expect(defaultSizeOf(layout)).toBe(50);
      expect(sizesOf(layout)).toEqual(initialSizes);
      expect(diff).toBe((50 - 30) * (90 - 4));
      expect(layout.$getTotalSize()).toBe(
        initialTotalSize +
          (defaultSizeOf(layout) - initialDefaultSize) * (100 - indexes.length),
      );
    });

    it("should update with some entry from near bound", () => {
      const indexes = [88, 89, 90, 91];
      const [layout, initialSizes, initialDefaultSize, initialTotalSize] =
        setup(indexes);

      const diff = layout.$estimateDefaultSize!(layout.$getLength() - 10);
      expect(defaultSizeOf(layout)).toBe(50);
      expect(sizesOf(layout)).toEqual(initialSizes);
      expect(diff).toBe((50 - 30) * (90 - 2));
      expect(layout.$getTotalSize()).toBe(
        initialTotalSize +
          (defaultSizeOf(layout) - initialDefaultSize) * (100 - indexes.length),
      );
    });
  });
});
