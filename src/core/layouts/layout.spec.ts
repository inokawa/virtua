import { describe, it, expect } from "vitest";
import { createListLayout, type ListLayout } from "./list.js";
import { createGridLayout } from "./grid.js";
import type { Layout } from "./types.js";
import type { CacheSnapshot } from "../types.js";
import { UNCACHED } from "../cache.js";

const DEFAULT_SIZE = 40;

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

describe.each<{
  name: string;
  init: (sizes: readonly number[]) => Layout;
  snapshot: (layout: Layout) => CacheSnapshot;
}>([
  {
    name: "list",
    init: (sizes) =>
      createListLayout(sizes.length, undefined, [sizes.slice(), DEFAULT_SIZE]),
    snapshot: (layout) => (layout as ListLayout).$snapshot(),
  },
  {
    name: "grid",
    init: (sizes) => {
      const layout = createGridLayout(sizes.length, "auto");
      sizes.forEach((s, i) => {
        if (s !== UNCACHED) {
          layout.$setItemSize(i, s);
        }
      });
      return layout;
    },
    // The grid layout has no snapshot, so the sizes are read back through it: an unmeasured item is UNCACHED and shows the default size, which is DEFAULT_SIZE until it's estimated.
    snapshot: (layout) => {
      const sizes = range(layout.$getLength(), (i) =>
        layout.$isSizeEqual(i, UNCACHED) ? UNCACHED : layout.$getItemSize(i),
      );
      const unmeasured = sizes.indexOf(UNCACHED);
      return [
        sizes,
        unmeasured < 0 ? DEFAULT_SIZE : layout.$getItemSize(unmeasured),
      ];
    },
  },
])("$name", ({ init, snapshot }) => {
  const sizesOf = (layout: Layout) => snapshot(layout)[0];

  const initWithOffsets = (sizes: readonly number[]) => {
    const layout = init(sizes);
    layout.$getTotalSize();
    return layout;
  };

  describe("getRange", () => {
    const CACHE_LENGTH = 10;

    // Moves the search cursor by computing a range which starts at the index
    const initWithCursorAt = (sizes: readonly number[], index: number) => {
      const layout = initWithOffsets(sizes);
      const offset = sum(sizes.slice(0, index));
      layout.$getRange(offset, offset);
      return layout;
    };

    describe.each([
      [0], // start
      [Math.floor(CACHE_LENGTH / 2)], // mid
      [CACHE_LENGTH - 1], // end
    ])("start from %i", (initialIndex) => {
      const initAtCursor = () =>
        initWithCursorAt(
          range(CACHE_LENGTH, () => 20),
          initialIndex,
        );

      it("should get start if offset is at start", () => {
        expect(initAtCursor().$getRange(0, 100)).toEqual([0, 5]);
      });

      it("should get start + 1 if offset is at start + 1", () => {
        expect(initAtCursor().$getRange(20, 20 + 100)).toEqual([1, 6]);
      });

      it("should get last if offset is at end", () => {
        const sizes = range(CACHE_LENGTH, () => 20);
        const layout = initAtCursor();
        const last = layout.$getLength() - 1;
        const start = sum(sizes);
        expect(layout.$getRange(start, start + 100)).toEqual([last, last]);
      });

      it("should get last if offset is at end - 1", () => {
        const sizes = range(CACHE_LENGTH, () => 20);
        const layout = initAtCursor();
        const last = layout.$getLength() - 1;
        const start = sum(sizes) - 20;
        expect(layout.$getRange(start, start + 100)).toEqual([last, last]);
      });

      it("should get last - 1 if offset is at end - 1 and more", () => {
        const sizes = range(CACHE_LENGTH, () => 20);
        const layout = initAtCursor();
        const last = layout.$getLength() - 1;
        const start = sum(sizes) - 20 - 1;
        expect(layout.$getRange(start, start + 100)).toEqual([last - 1, last]);
      });

      it("should get start if offset is before start", () => {
        const start = -1000;
        expect(initAtCursor().$getRange(start, start + 100)).toEqual([0, 0]);
      });

      it("should get last if offset is after end", () => {
        const sizes = range(CACHE_LENGTH, () => 20);
        const layout = initAtCursor();
        const last = layout.$getLength() - 1;
        const start = sum(sizes) + 1000;
        expect(layout.$getRange(start, start + 100)).toEqual([last, last]);
      });

      it("should get the index the range was computed from", () => {
        const sizes = range(CACHE_LENGTH, () => 20);
        const layout = initAtCursor();
        const start = sum(sizes.slice(0, initialIndex));
        expect(layout.$getRange(start, start + 100)).toEqual([
          initialIndex,
          expect.any(Number),
        ]);
      });
    });
  });

  describe("setLength", () => {
    it("should recover cache length from 0", () => {
      const layout = init(range(10, () => UNCACHED));
      const initialSnapshot = snapshot(layout);
      layout.$setLength(0);
      layout.$setLength(10);
      expect(snapshot(layout)).toEqual(initialSnapshot);
    });

    it("should increase cache length", () => {
      const layout = init(range(10, () => UNCACHED));
      layout.$setLength(15);
      expect(snapshot(layout)).toEqual([
        range(15, () => UNCACHED),
        DEFAULT_SIZE,
      ]);
      expect(layout.$getTotalSize()).toBe(DEFAULT_SIZE * 15);
    });

    it("should increase filled cache length", () => {
      const sizes = range(10, (i) => (i + 1) * 10);
      const layout = initWithOffsets(sizes);
      layout.$setLength(15);
      expect(snapshot(layout)).toEqual([
        [...sizes, ...range(5, () => UNCACHED)],
        DEFAULT_SIZE,
      ]);
      expect(layout.$getTotalSize()).toBe(sum(sizes) + DEFAULT_SIZE * 5);
    });

    it("should decrease cache length", () => {
      const layout = init(range(10, () => UNCACHED));
      layout.$setLength(5);
      expect(snapshot(layout)).toEqual([
        range(5, () => UNCACHED),
        DEFAULT_SIZE,
      ]);
      expect(layout.$getTotalSize()).toBe(DEFAULT_SIZE * 5);
    });

    it("should decrease filled cache length", () => {
      const sizes = range(10, (i) => (i + 1) * 10);
      const layout = initWithOffsets(sizes);
      layout.$setLength(5);
      expect(snapshot(layout)).toEqual([sizes.slice(0, 5), DEFAULT_SIZE]);
      expect(layout.$getTotalSize()).toBe(sum(sizes.slice(0, 5)));
    });
  });

  describe("getItemSize", () => {
    const layout = init([10, UNCACHED]);

    it("should get height", () => {
      expect(layout.$getItemSize(0)).toBe(10);
    });
    it("should get default height", () => {
      expect(layout.$getItemSize(1)).toBe(DEFAULT_SIZE);
    });
  });

  describe("setItemSize", () => {
    const offsetsOf = (layout: Layout): number[] =>
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
      const layout = init(filledSizes);

      layout.$setItemSize(0, 123);
      expect(sizesOf(layout)).toEqual([
        123, 20, 20, 20, 20, 20, 20, 20, 20, 20,
      ]);
      expect(offsetsOf(layout)).toEqual(sizesToOffsets(sizesOf(layout)));
    });

    it("should set at middle", () => {
      const filledSizes = range(10, () => 20);
      const layout = init(filledSizes);

      layout.$setItemSize(4, 123);
      expect(sizesOf(layout)).toEqual([
        20, 20, 20, 20, 123, 20, 20, 20, 20, 20,
      ]);
      expect(offsetsOf(layout)).toEqual(sizesToOffsets(sizesOf(layout)));
    });

    it("should set at last", () => {
      const filledSizes = range(10, () => 20);
      const layout = init(filledSizes);

      layout.$setItemSize(layout.$getLength() - 1, 123);
      expect(sizesOf(layout)).toEqual([
        20, 20, 20, 20, 20, 20, 20, 20, 20, 123,
      ]);
      expect(offsetsOf(layout)).toEqual(sizesToOffsets(sizesOf(layout)));
    });

    describe("should return measurement status", () => {
      it("should return false if already measured", () => {
        const filledSizes = range(10, () => 20);
        const layout = init(filledSizes);

        const res = layout.$setItemSize(0, 123);
        expect(res).toBe(false);
      });

      it("should return true if not measured", () => {
        const emptySizes = range(10, () => UNCACHED);
        const layout = init(emptySizes);

        const res = layout.$setItemSize(0, 123);
        expect(res).toBe(true);
      });
    });
  });

  describe("getItemOffset", () => {
    it("should get 0 if index is at start", () => {
      const filledSizes = range(10, () => 20);
      const layout = init(filledSizes);

      expect(layout.$getItemOffset(0)).toBe(0);
    });

    it("should get 1 item if index is at start", () => {
      const filledSizes = range(10, () => 20);
      const layout = init(filledSizes);

      expect(layout.$getItemOffset(1)).toBe(20);
    });

    it("should get total - 1 item if index is at last", () => {
      const filledSizes = range(10, () => 20);
      const layout = init(filledSizes);

      const last = filledSizes.length - 1;
      expect(layout.$getItemOffset(last)).toBe(
        sum(filledSizes) - filledSizes[last]!,
      );
    });

    it("should resolve default height", () => {
      const emptySizes = range(10, () => UNCACHED);
      const layout = init(emptySizes);

      expect(layout.$getItemOffset(2)).toBe(DEFAULT_SIZE * 2);
    });

    it("should return 0 if cache length is 0", () => {
      const layout = init([]);

      expect(layout.$getItemOffset(0)).toBe(0);
      expect(layout.$getItemOffset(10)).toBe(0);
    });
  });

  describe("getTotalSize", () => {
    it("should succeed if sizes is filled", () => {
      const filledSizes = range(10, () => 20);
      const layout = init(filledSizes);

      expect(layout.$getTotalSize()).toBe(sum(filledSizes));
    });

    it("should succeed if sizes is not filled", () => {
      const emptySizes = range(10, () => UNCACHED);
      const layout = init(emptySizes);

      const sizes = range(10, () => DEFAULT_SIZE);
      expect(layout.$getTotalSize()).toBe(sum(sizes));
    });

    it("should return 0 if sizes length is 0", () => {
      const layout = init([]);
      expect(layout.$getTotalSize()).toBe(0);
    });
  });

  describe("estimateDefaultSize", () => {
    const initUnmeasured = (length: number) =>
      initWithOffsets(range(length, () => UNCACHED));

    describe("start", () => {
      it("should update with 1 entry", () => {
        const indexes = [0];
        const layout = initUnmeasured(100);
        indexes.forEach((i) => layout.$setItemSize(i, 50));
        const [initialSizes, initialDefaultSize] = snapshot(layout);
        const initialTotalSize = layout.$getTotalSize();

        const diff = layout.$estimateDefaultSize!(0);
        const [sizes, defaultSize] = snapshot(layout);
        expect(defaultSize).toBe(50);
        expect(sizes).toEqual(initialSizes);
        expect(diff).toBe(0);
        expect(layout.$getTotalSize()).toBe(
          initialTotalSize +
            (defaultSize! - initialDefaultSize!) * (100 - indexes.length),
        );
      });

      it("should update with some entry", () => {
        const indexes = [0, 1, 2, 3];
        const layout = initUnmeasured(100);
        indexes.forEach((i) => layout.$setItemSize(i, 50));
        const [initialSizes, initialDefaultSize] = snapshot(layout);
        const initialTotalSize = layout.$getTotalSize();

        const diff = layout.$estimateDefaultSize!(0);
        const [sizes, defaultSize] = snapshot(layout);
        expect(defaultSize).toBe(50);
        expect(sizes).toEqual(initialSizes);
        expect(diff).toBe(0);
        expect(layout.$getTotalSize()).toBe(
          initialTotalSize +
            (defaultSize! - initialDefaultSize!) * (100 - indexes.length),
        );
      });

      it("should update with some entry from outside", () => {
        const indexes = [20, 21, 22, 23];
        const layout = initUnmeasured(100);
        indexes.forEach((i) => layout.$setItemSize(i, 50));
        const [initialSizes, initialDefaultSize] = snapshot(layout);
        const initialTotalSize = layout.$getTotalSize();

        const diff = layout.$estimateDefaultSize!(0);
        const [sizes, defaultSize] = snapshot(layout);
        expect(defaultSize).toBe(50);
        expect(sizes).toEqual(initialSizes);
        expect(diff).toBe(0);
        expect(layout.$getTotalSize()).toBe(
          initialTotalSize +
            (defaultSize! - initialDefaultSize!) * (100 - indexes.length),
        );
      });
    });

    describe("end", () => {
      it("should update with 1 entry", () => {
        const indexes = [92];
        const layout = initUnmeasured(100);
        indexes.forEach((i) => layout.$setItemSize(i, 50));
        const [initialSizes, initialDefaultSize] = snapshot(layout);
        const initialTotalSize = layout.$getTotalSize();

        const diff = layout.$estimateDefaultSize!(layout.$getLength() - 10);
        const [sizes, defaultSize] = snapshot(layout);
        expect(defaultSize).toBe(50);
        expect(sizes).toEqual(initialSizes);
        expect(diff).toBe((50 - DEFAULT_SIZE) * 90);
        expect(layout.$getTotalSize()).toBe(
          initialTotalSize +
            (defaultSize! - initialDefaultSize!) * (100 - indexes.length),
        );
      });

      it("should update with some entry", () => {
        const indexes = [92, 93, 94, 95];
        const layout = initUnmeasured(100);
        indexes.forEach((i) => layout.$setItemSize(i, 50));
        const [initialSizes, initialDefaultSize] = snapshot(layout);
        const initialTotalSize = layout.$getTotalSize();

        const diff = layout.$estimateDefaultSize!(layout.$getLength() - 10);
        const [sizes, defaultSize] = snapshot(layout);
        expect(defaultSize).toBe(50);
        expect(sizes).toEqual(initialSizes);
        expect(diff).toBe((50 - DEFAULT_SIZE) * 90);
        expect(layout.$getTotalSize()).toBe(
          initialTotalSize +
            (defaultSize! - initialDefaultSize!) * (100 - indexes.length),
        );
      });

      it("should update with some entry from outside", () => {
        const indexes = [20, 21, 22, 23];
        const layout = initUnmeasured(100);
        indexes.forEach((i) => layout.$setItemSize(i, 50));
        const [initialSizes, initialDefaultSize] = snapshot(layout);
        const initialTotalSize = layout.$getTotalSize();

        const diff = layout.$estimateDefaultSize!(layout.$getLength() - 10);
        const [sizes, defaultSize] = snapshot(layout);
        expect(defaultSize).toBe(50);
        expect(sizes).toEqual(initialSizes);
        expect(diff).toBe((50 - DEFAULT_SIZE) * (90 - 4));
        expect(layout.$getTotalSize()).toBe(
          initialTotalSize +
            (defaultSize! - initialDefaultSize!) * (100 - indexes.length),
        );
      });

      it("should update with some entry from near bound", () => {
        const indexes = [88, 89, 90, 91];
        const layout = initUnmeasured(100);
        indexes.forEach((i) => layout.$setItemSize(i, 50));
        const [initialSizes, initialDefaultSize] = snapshot(layout);
        const initialTotalSize = layout.$getTotalSize();

        const diff = layout.$estimateDefaultSize!(layout.$getLength() - 10);
        const [sizes, defaultSize] = snapshot(layout);
        expect(defaultSize).toBe(50);
        expect(sizes).toEqual(initialSizes);
        expect(diff).toBe((50 - DEFAULT_SIZE) * (90 - 2));
        expect(layout.$getTotalSize()).toBe(
          initialTotalSize +
            (defaultSize! - initialDefaultSize!) * (100 - indexes.length),
        );
      });
    });

    it("should calculate excluding zero-height entries", () => {
      const layout = initUnmeasured(100);
      layout.$setItemSize(0, 0);
      layout.$setItemSize(1, 0);
      layout.$setItemSize(2, 0);
      layout.$setItemSize(3, 50);
      layout.$setItemSize(4, 0);

      layout.$estimateDefaultSize!(0);
      const [, defaultSize] = snapshot(layout);
      expect(defaultSize).toBe(50);
    });
  });
});
