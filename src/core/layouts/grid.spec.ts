import { describe, it, expect } from "vitest";
import { createGridLayout } from "./grid.js";

type Item = { s?: number | "auto" };

const items = (...sizes: (number | "auto" | undefined)[]): Item[] =>
  sizes.map((s) => (s === undefined ? {} : { s }));

describe("setLength", () => {
  it("should grow with default sizes until the axis is set", () => {
    const layout = createGridLayout(items(100, 200), "s");
    layout.$relayout!(layout.$getSizes(items(100, 200), "s"), 0);
    layout.$getTotalSize();
    layout.$setLength(4);
    expect(layout.$getItemSize(2)).toBe(40);
    layout.$relayout!(layout.$getSizes(items(100, 200, 300, "auto"), "s"), 0);
    expect(layout.$getItemSize(2)).toBe(300);
    expect(layout.$isMeasurable(3)).toBe(true);
    expect(layout.$getTotalSize()).toBe(100 + 200 + 300 + 40);
  });

  it("should not need a relayout when only the count grows", () => {
    const layout = createGridLayout(2, 100);
    layout.$getTotalSize();
    layout.$setLength(5);
    expect(layout.$relayout!(layout.$getSizes(5, 100), 0)).toBe(undefined);
    expect(layout.$getTotalSize()).toBe(500);
  });

  it("should measure the auto items added before the first measurement", () => {
    const layout = createGridLayout(2, "auto");
    layout.$getTotalSize();
    layout.$setLength(4);
    layout.$resize([[3, 100]], () => false, 0, 0);
    expect(layout.$getItemSize(3)).toBe(100);
    expect(layout.$getItemOffset(3)).toBe(40 * 3);
    expect(layout.$getTotalSize()).toBe(40 * 3 + 100);
  });

  it("should measure the auto items added after every item was removed", () => {
    const layout = createGridLayout(2, "auto");
    layout.$resize([[1, 100]], () => false, 0, 0);
    layout.$getTotalSize();
    layout.$setLength(0);
    expect(layout.$getTotalSize()).toBe(0);
    layout.$setLength(3);
    expect(layout.$getTotalSize()).toBe(40 * 3);
    layout.$resize([[1, 100]], () => false, 0, 0);
    expect(layout.$getItemOffset(2)).toBe(40 + 100);
    expect(layout.$getTotalSize()).toBe(40 * 2 + 100);
  });

  it("should forget the auto items removed in place", () => {
    const list = items(100, "auto");
    const layout = createGridLayout(list, "s");
    layout.$relayout!(layout.$getSizes(list, "s"), 0);
    list.pop();
    layout.$setLength(1);
    layout.$relayout!(layout.$getSizes(list, "s"), 0);
    list.push({ s: 50 });
    layout.$setLength(2);
    layout.$relayout!(layout.$getSizes(list, "s"), 0);
    expect(layout.$isMeasurable(1)).toBe(false);
  });
});

describe("resize", () => {
  it("should ignore the measurements of the items with sizes", () => {
    const layout = createGridLayout(items(100, "auto"), "s");
    layout.$relayout!(layout.$getSizes(items(100, "auto"), "s"), 0);
    expect(layout.$resize([[0, 55]], () => true, 0, 0)).toBe(0);
    expect(layout.$getItemSize(0)).toBe(100);
  });
});

describe("estimateDefaultSize", () => {
  it("should count the measured sizes without the gaps", () => {
    const layout = createGridLayout(3, "auto", 8);
    layout.$resize([[0, 100]], () => false, 0, 100);
    expect(layout.$isEstimating()).toBe(true);
    layout.$resize([[0, 101]], () => false, 0, 100);
    expect(layout.$isEstimating()).toBe(false);
    expect(layout.$getItemSize(1)).toBe(101);
  });

  it("should not estimate the default size unless the whole axis is auto", () => {
    expect(createGridLayout(10, "auto").$isEstimating()).toBe(true);
    expect(createGridLayout(10, 40).$isEstimating()).toBe(false);
    expect(createGridLayout(items("auto", 40), "s").$isEstimating()).toBe(
      false,
    );
  });
});

describe("isSizeEqual", () => {
  it("should compare the sizes of the items", () => {
    const layout = createGridLayout(items(100, "auto", 200), "s");
    layout.$relayout!(layout.$getSizes(items(100, "auto", 200), "s"), 0);
    expect(layout.$isSizeEqual(0, 100)).toBe(true);
    expect(layout.$isSizeEqual(0, 50)).toBe(false);
    layout.$resize([[1, 123]], () => false, 0, 0);
    expect(layout.$isSizeEqual(1, 123)).toBe(true);
    expect(layout.$getItemSize(1)).toBe(123);
  });

  it("should tell the unmeasured items", () => {
    const layout = createGridLayout(items(100, "auto", "auto"), "s");
    layout.$relayout!(layout.$getSizes(items(100, "auto", "auto"), "s"), 0);
    expect(layout.$isSizeEqual(0)).toBe(false);
    expect(layout.$isSizeEqual(1)).toBe(true);
    layout.$resize([[1, 123]], () => false, 0, 0);
    expect(layout.$isSizeEqual(1)).toBe(false);
    expect(layout.$isSizeEqual(2)).toBe(true);
    expect(createGridLayout(10, 40).$isSizeEqual(0)).toBe(false);
    expect(createGridLayout(10, "auto").$isSizeEqual(0)).toBe(true);
  });
});

describe("relayout", () => {
  describe("with keys", () => {
    it("should seed the sizes the items hold at the key", () => {
      const layout = createGridLayout(items(100, 200, "auto"), "s");
      layout.$relayout!(layout.$getSizes(items(100, 200, "auto"), "s"), 0);
      expect(layout.$getLength()).toBe(3);
      expect(layout.$getItemSize(0)).toBe(100);
      expect(layout.$getItemSize(1)).toBe(200);
      // an unmeasured "auto" item falls back to the default size
      expect(layout.$getItemSize(2)).toBe(40);
      expect(layout.$getTotalSize()).toBe(100 + 200 + 40);
    });

    it("should update the changed items", () => {
      const layout = createGridLayout(items(100, 200), "s");
      layout.$relayout!(layout.$getSizes(items(100, 200), "s"), 0);
      layout.$getTotalSize();
      layout.$relayout!(layout.$getSizes(items(100, 300), "s"), 0);
      expect(layout.$getItemSize(1)).toBe(300);
      expect(layout.$getTotalSize()).toBe(100 + 300);
    });

    it("should return the jump which keeps the visible position", () => {
      const layout = createGridLayout(items(100, 200, 300), "s");
      layout.$relayout!(layout.$getSizes(items(100, 200, 300), "s"), 0);
      layout.$getTotalSize();
      // scrolled below the changed items: the anchor item moves by their diff
      expect(
        layout.$relayout!(layout.$getSizes(items(150, 250, 300), "s"), 550),
      ).toBe(50 + 50);
      // scrolled to the top: nothing above the anchor moves
      expect(
        layout.$relayout!(layout.$getSizes(items(100, 200, 300), "s"), 0),
      ).toBe(0);
    });

    it("should revert an item changed to auto into measurement", () => {
      const layout = createGridLayout(items(100, 200), "s");
      layout.$relayout!(layout.$getSizes(items(100, 200), "s"), 0);
      layout.$relayout!(layout.$getSizes(items(100, "auto"), "s"), 0);
      expect(layout.$getItemSize(1)).toBe(40);
      expect(layout.$isMeasurable(1)).toBe(true);
    });

    it("should keep the measured size of an item which stays auto", () => {
      const layout = createGridLayout(items("auto", 100), "s");
      layout.$relayout!(layout.$getSizes(items("auto", 100), "s"), 0);
      layout.$resize([[0, 123]], () => false, 0, 0);
      layout.$relayout!(layout.$getSizes(items("auto", 200), "s"), 0);
      expect(layout.$getItemSize(0)).toBe(123);
    });

    it("should overwrite the measured size of an item changed to a number", () => {
      const layout = createGridLayout(items("auto", 100), "s");
      layout.$relayout!(layout.$getSizes(items("auto", 100), "s"), 0);
      layout.$resize([[0, 123]], () => false, 0, 0);
      layout.$relayout!(layout.$getSizes(items(50, 100), "s"), 0);
      expect(layout.$getItemSize(0)).toBe(50);
      expect(layout.$isMeasurable(0)).toBe(false);
    });

    it("should update an item replaced in a copy of the axis", () => {
      const list = items(100, 200, 300);
      const layout = createGridLayout(list, "s");
      layout.$relayout!(layout.$getSizes(list, "s"), 0);
      layout.$getTotalSize();
      const next = list.slice();
      next[1] = { s: 250 };
      expect(layout.$relayout!(layout.$getSizes(next, "s"), 0)).toBe(0);
      expect(layout.$getItemSize(1)).toBe(250);
      expect(layout.$getTotalSize()).toBe(100 + 250 + 300);
      // a copy without a change needs no relayout
      expect(layout.$relayout!(layout.$getSizes(next.slice(), "s"), 0)).toBe(
        undefined,
      );
    });

    it("should read the items mutated in place when the sizes are made again", () => {
      const list = items(100, "auto", 300);
      const layout = createGridLayout(list, "s");
      layout.$relayout!(layout.$getSizes(list, "s"), 0);
      layout.$resize([[1, 123]], () => false, 0, 0);
      list[0]!.s = 150;
      list[1] = { s: "auto" };
      list[2]!.s = "auto";
      expect(layout.$relayout!(layout.$getSizes(list, "s"), 0)).toBe(0);
      expect(layout.$getItemSize(0)).toBe(150);
      // an item which stays auto keeps its measured size
      expect(layout.$getItemSize(1)).toBe(123);
      expect(layout.$getItemSize(2)).toBe(40);
      expect(layout.$isMeasurable(0)).toBe(false);
      expect(layout.$isMeasurable(2)).toBe(true);
    });

    it("should switch the key", () => {
      const layout = createGridLayout([{ a: 100, b: 200 }], "a");
      layout.$relayout!(layout.$getSizes([{ a: 100, b: 200 }], "a"), 0);
      layout.$getTotalSize();
      expect(
        layout.$relayout!(layout.$getSizes([{ a: 100, b: 200 }], "b"), 0),
      ).toBe(0);
      expect(layout.$getItemSize(0)).toBe(200);
    });
  });

  describe("with a uniform size", () => {
    it("should resize every item on a uniform size change", () => {
      const layout = createGridLayout(10, 40);
      layout.$getTotalSize();
      // 200 / 40 = 5 items are above the anchor
      expect(layout.$relayout!(layout.$getSizes(10, 50), 200)).toBe(10 * 5);
      expect(layout.$getItemSize(0)).toBe(50);
      expect(layout.$getTotalSize()).toBe(500);
    });
  });

  describe("change detection", () => {
    it("should return undefined when nothing changed", () => {
      const list = items(100, 200);
      const layout = createGridLayout(list, "s");
      layout.$relayout!(layout.$getSizes(list, "s"), 0);
      expect(layout.$relayout!(layout.$getSizes(list, "s"), 0)).toBe(undefined);
      expect(layout.$relayout!(layout.$getSizes(items(100, 200), "s"), 0)).toBe(
        undefined,
      );
      expect(layout.$relayout!(layout.$getSizes(items(100, 300), "s"), 0)).toBe(
        0,
      );
    });

    it("should ignore the items when the size is uniform", () => {
      const layout = createGridLayout(2, 40);
      expect(layout.$relayout!(layout.$getSizes(2, 40), 0)).toBe(undefined);
      expect(layout.$getItemSize(0)).toBe(40);
    });

    it("should ignore a size of another form", () => {
      const fixed = createGridLayout(10, 40);
      expect(fixed.$relayout!(fixed.$getSizes(10, "auto"), 0)).toBe(undefined);
      expect(fixed.$getItemSize(0)).toBe(40);

      const keyed = createGridLayout(items(100, 200), "s");
      keyed.$relayout!(keyed.$getSizes(items(100, 200), "s"), 0);
      expect(
        keyed.$relayout!(keyed.$getSizes(items(100, 200), "auto"), 0),
      ).toBe(undefined);
      expect(keyed.$relayout!(keyed.$getSizes(items(100, 200), 50), 0)).toBe(
        undefined,
      );
      expect(keyed.$getItemSize(1)).toBe(200);

      const auto = createGridLayout(10, "auto");
      auto.$resize([[0, 123]], () => false, 0, 0);
      expect(auto.$relayout!(auto.$getSizes(items(100), "s"), 0)).toBe(
        undefined,
      );
      expect(auto.$getItemSize(0)).toBe(123);
    });

    it("should ignore the axis when every size is auto", () => {
      const layout = createGridLayout(10, "auto");
      layout.$resize([[0, 123]], () => false, 0, 0);
      expect(layout.$relayout!(layout.$getSizes(10, "auto"), 0)).toBe(
        undefined,
      );
      expect(layout.$getItemSize(0)).toBe(123);
    });
  });
});

describe("isMeasurable", () => {
  it("should report every item as measurable", () => {
    const layout = createGridLayout(10, "auto");
    expect(layout.$isMeasurable(0)).toBe(true);
    layout.$resize([[0, 123]], () => false, 0, 0);
    expect(layout.$getItemSize(0)).toBe(123);
  });

  it("should report only the auto items of a key axis", () => {
    const layout = createGridLayout(items(100, "auto"), "s");
    layout.$relayout!(layout.$getSizes(items(100, "auto"), "s"), 0);
    expect(layout.$isMeasurable(0)).toBe(false);
    expect(layout.$isMeasurable(1)).toBe(true);
  });

  it("should measure the items without a size", () => {
    const layout = createGridLayout([{ s: 100 }, {}, { s: null }], "s");
    layout.$relayout!(layout.$getSizes([{ s: 100 }, {}, { s: null }], "s"), 0);
    expect(layout.$isMeasurable(0)).toBe(false);
    expect(layout.$isMeasurable(1)).toBe(true);
    expect(layout.$isMeasurable(2)).toBe(true);
  });

  it("should report whether the items of the axis are measured", () => {
    expect(createGridLayout(10, 40).$isMeasurable(0)).toBe(false);
    expect(createGridLayout(10, "auto").$isMeasurable(0)).toBe(true);
    const list = items(100, 200);
    const layout = createGridLayout(list, "s");
    layout.$relayout!(layout.$getSizes(list, "s"), 0);
    expect(layout.$isMeasurable(1)).toBe(false);
    layout.$relayout!(layout.$getSizes(items(100, "auto"), "s"), 0);
    expect(layout.$isMeasurable(1)).toBe(true);
  });

  it("should report nothing for a fixed uniform axis", () => {
    const layout = createGridLayout(10, 50);
    expect(layout.$isMeasurable(0)).toBe(false);
    expect(layout.$getItemSize(0)).toBe(50);
  });
});

describe("uniform size", () => {
  const CACHE_LENGTH = 10;
  const init = () => createGridLayout(CACHE_LENGTH, 20);

  describe("getRange", () => {
    it("should get start if offset is at start", () => {
      expect(init().$getRange(0, 100)).toEqual([0, 5]);
    });

    it("should get start + 1 if offset is at start + 1", () => {
      expect(init().$getRange(20, 20 + 100)).toEqual([1, 6]);
    });

    it("should get last if offset is at end", () => {
      const layout = init();
      const last = layout.$getLength() - 1;
      const start = 20 * CACHE_LENGTH;
      expect(layout.$getRange(start, start + 100)).toEqual([last, last]);
    });

    it("should get last if offset is at end - 1", () => {
      const layout = init();
      const last = layout.$getLength() - 1;
      const start = 20 * CACHE_LENGTH - 20;
      expect(layout.$getRange(start, start + 100)).toEqual([last, last]);
    });

    it("should get last - 1 if offset is at end - 1 and more", () => {
      const layout = init();
      const last = layout.$getLength() - 1;
      const start = 20 * CACHE_LENGTH - 20 - 1;
      expect(layout.$getRange(start, start + 100)).toEqual([last - 1, last]);
    });

    it("should get start if offset is before start", () => {
      const start = -1000;
      expect(init().$getRange(start, start + 100)).toEqual([0, 0]);
    });

    it("should get last if offset is after end", () => {
      const layout = init();
      const last = layout.$getLength() - 1;
      const start = 20 * CACHE_LENGTH + 1000;
      expect(layout.$getRange(start, start + 100)).toEqual([last, last]);
    });

    it("should not return NaN when the size and the gap are 0", () => {
      const layout = createGridLayout(10, 0);
      expect(layout.$findIndex(0)).toBe(0);
      expect(layout.$getRange(0, 100)).toEqual([0, 0]);
      expect(layout.$getTotalSize()).toBe(0);
    });
  });

  describe("findIndex", () => {
    it("should find the item at the offset", () => {
      const layout = init();
      expect(layout.$findIndex(0)).toBe(0);
      expect(layout.$findIndex(19)).toBe(0);
      expect(layout.$findIndex(20)).toBe(1);
      expect(layout.$findIndex(20 * CACHE_LENGTH - 1)).toBe(CACHE_LENGTH - 1);
    });

    it("should clamp the offset out of the items", () => {
      const layout = init();
      expect(layout.$findIndex(-1000)).toBe(0);
      expect(layout.$findIndex(20 * CACHE_LENGTH + 1000)).toBe(
        CACHE_LENGTH - 1,
      );
    });
  });

  describe("getItemOffset", () => {
    it("should get 0 if index is at start", () => {
      expect(init().$getItemOffset(0)).toBe(0);
    });

    it("should get 1 item if index is at start", () => {
      expect(init().$getItemOffset(1)).toBe(20);
    });

    it("should get total - 1 item if index is at last", () => {
      expect(init().$getItemOffset(CACHE_LENGTH - 1)).toBe(
        20 * CACHE_LENGTH - 20,
      );
    });

    it("should return 0 if cache length is 0", () => {
      const layout = createGridLayout(0, 20);
      expect(layout.$getItemOffset(0)).toBe(0);
    });
  });

  describe("getTotalSize", () => {
    it("should be the size of the items", () => {
      expect(init().$getTotalSize()).toBe(20 * CACHE_LENGTH);
    });

    it("should return 0 if sizes length is 0", () => {
      expect(createGridLayout(0, 20).$getTotalSize()).toBe(0);
    });
  });

  describe("resize", () => {
    it("should ignore the measurements", () => {
      const layout = init();
      layout.$resize([[0, 123]], () => false, 0, 0);
      expect(layout.$getItemSize(0)).toBe(20);
      expect(layout.$getItemOffset(1)).toBe(20);
    });
  });
});

describe("setPinned", () => {
  it("should cover the whole range until the tracks are pinned", () => {
    const layout = createGridLayout(10, 40);
    expect(layout.$getRange(0, 100)).toEqual([0, 2]);
    layout.$setPinned();
    expect(layout.$getRange(0, 100)).toEqual([0, 2]);
  });

  it("should drop the tracks hidden behind the pinned ones", () => {
    const layout = createGridLayout(10, 40);
    layout.$setPinned(2, 1);
    // the pinned tracks take 80px at the start and 40px at the end of the 220px viewport
    expect(layout.$getRange(0, 220)).toEqual([2, 4]);
    expect(layout.$getRange(100, 300)).toEqual([4, 6]);
  });

  it("should keep the tracks visible in the gap after the pinned ones", () => {
    const layout = createGridLayout(5, 40, 10);
    layout.$setPinned(0, 1);
    // the band of the pinned track takes 40px, not the 50px its offset includes, so the track at 100px is still visible
    expect(layout.$getRange(0, 145)).toEqual([0, 2]);
  });

  it("should shrink the range of a measured axis", () => {
    const layout = createGridLayout(items(100, 200, 300, 400), "s");
    layout.$relayout!(layout.$getSizes(items(100, 200, 300, 400), "s"), 0);
    layout.$setPinned(1, 1);
    expect(layout.$getRange(0, 700)).toEqual([1, 2]);
  });

  it("should not invert the range when the pinned tracks are thicker than the viewport", () => {
    const layout = createGridLayout(10, 40);
    layout.$setPinned(5, 5);
    expect(layout.$getRange(0, 100)).toEqual([5, 5]);
  });

  it("should clamp the counts to the length", () => {
    const layout = createGridLayout(3, 40);
    layout.$setPinned(10, 10);
    expect(layout.$getRange(0, 100)).toEqual([2, 2]);
  });

  it("should not move the index found from an offset", () => {
    const layout = createGridLayout(10, 40);
    layout.$setPinned(2, 1);
    expect(layout.$findIndex(0)).toBe(0);
    expect(layout.$findIndex(200)).toBe(5);
  });
});

describe("gap", () => {
  it("should put the gap after every track but the last", () => {
    const layout = createGridLayout(3, 40, 2);
    expect(layout.$getItemSize(1)).toBe(40);
    expect(layout.$getItemOffset(1)).toBe(42);
    expect(layout.$getItemOffset(2)).toBe(84);
    expect(layout.$getTotalSize()).toBe(40 * 3 + 2 * 2);
    expect(layout.$findIndex(41)).toBe(0);
    expect(layout.$findIndex(42)).toBe(1);
  });

  it("should measure and compare the sizes without the gap", () => {
    const layout = createGridLayout(items("auto", 40), "s", 2);
    layout.$relayout!(layout.$getSizes(items("auto", 40), "s"), 0);
    layout.$resize([[0, 100]], () => false, 0, 0);
    expect(layout.$getItemSize(0)).toBe(100);
    expect(layout.$isSizeEqual(0, 100)).toBe(true);
    expect(layout.$getItemOffset(1)).toBe(102);
    expect(layout.$getTotalSize()).toBe(100 + 2 + 40);
  });

  it("should be empty without tracks", () => {
    expect(createGridLayout(0, 40, 2).$getTotalSize()).toBe(0);
  });

  it("should not let the gap shrink the default size", () => {
    const layout = createGridLayout(10, "auto", 50);
    expect(layout.$getItemSize(0)).toBe(40);
    expect(layout.$getItemOffset(1)).toBe(90);
  });
});
