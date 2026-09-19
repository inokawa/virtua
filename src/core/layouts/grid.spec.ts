import { describe, it, expect } from "vitest";
import { createGridLayout } from "./grid.js";

type Item = { s?: number | "auto" };

const items = (...sizes: (number | "auto" | undefined)[]): Item[] =>
  sizes.map((s) => (s === undefined ? {} : { s }));

describe("sizes", () => {
  it("should seed the sizes the items hold at the key", () => {
    const layout = createGridLayout(items(100, 200, "auto"), "s");
    expect(layout.$getLength()).toBe(3);
    expect(layout.$getItemSize(0)).toBe(100);
    expect(layout.$getItemSize(1)).toBe(200);
    // an unmeasured "auto" item falls back to the default size
    expect(layout.$getItemSize(2)).toBe(40);
    expect(layout.$getTotalSize()).toBe(100 + 200 + 40);
  });
});

describe("isSizeEqual", () => {
  it("should compare the sizes of the items", () => {
    const layout = createGridLayout(items(100, "auto", 200), "s");
    expect(layout.$isSizeEqual(0, 100)).toBe(true);
    expect(layout.$isSizeEqual(0, 50)).toBe(false);
    layout.$setItemSize(1, 123);
    expect(layout.$isSizeEqual(1, 123)).toBe(true);
    expect(layout.$getItemSize(1)).toBe(123);
  });
});

describe("setAxis with keys", () => {
  it("should update the changed items", () => {
    const layout = createGridLayout(items(100, 200), "s");
    layout.$getTotalSize();
    layout.$setAxis(items(100, 300), "s", 0);
    expect(layout.$getItemSize(1)).toBe(300);
    expect(layout.$getTotalSize()).toBe(100 + 300);
  });

  it("should return the jump which keeps the visible position", () => {
    const layout = createGridLayout(items(100, 200, 300), "s");
    layout.$getTotalSize();
    // scrolled below the changed items: the anchor item moves by their diff
    expect(layout.$setAxis(items(150, 250, 300), "s", 550)).toBe(50 + 50);
    // scrolled to the top: nothing above the anchor moves
    expect(layout.$setAxis(items(100, 200, 300), "s", 0)).toBe(0);
  });

  it("should revert an item changed to auto into measurement", () => {
    const layout = createGridLayout(items(100, 200), "s");
    layout.$setAxis(items(100, "auto"), "s", 0);
    expect(layout.$getItemSize(1)).toBe(40);
    expect(layout.$isMeasurable(1)).toBe(true);
  });

  it("should keep the measured size of an item which stays auto", () => {
    const layout = createGridLayout(items("auto", 100), "s");
    layout.$setItemSize(0, 123);
    layout.$setAxis(items("auto", 200), "s", 0);
    expect(layout.$getItemSize(0)).toBe(123);
  });

  it("should overwrite the measured size of an item changed to a number", () => {
    const layout = createGridLayout(items("auto", 100), "s");
    layout.$setItemSize(0, 123);
    layout.$setAxis(items(50, 100), "s", 0);
    expect(layout.$getItemSize(0)).toBe(50);
    expect(layout.$isMeasurable(0)).toBe(false);
  });

  it("should update an item replaced in a copy of the axis", () => {
    const list = items(100, 200, 300);
    const layout = createGridLayout(list, "s");
    layout.$getTotalSize();
    const next = list.slice();
    next[1] = { s: 250 };
    expect(layout.$setAxis(next, "s", 0)).toBe(0);
    expect(layout.$getItemSize(1)).toBe(250);
    expect(layout.$getTotalSize()).toBe(100 + 250 + 300);
    // a copy without a change needs no relayout
    expect(layout.$setAxis(next.slice(), "s", 0)).toBe(undefined);
  });

  it("should read the items mutated in place when the axis is mutable", () => {
    const list = items(100, "auto", 300);
    const layout = createGridLayout(list, "s");
    layout.$setItemSize(1, 123);
    list[0]!.s = 150;
    list[1] = { s: "auto" };
    list[2]!.s = "auto";
    expect(layout.$setAxis(list, "s", 0, true)).toBe(0);
    expect(layout.$getItemSize(0)).toBe(150);
    // an item which stays auto keeps its measured size
    expect(layout.$getItemSize(1)).toBe(123);
    expect(layout.$getItemSize(2)).toBe(40);
    expect(layout.$isMeasurable(0)).toBe(false);
    expect(layout.$isMeasurable(2)).toBe(true);
  });

  it("should switch the key", () => {
    const layout = createGridLayout([{ a: 100, b: 200 }], "a");
    layout.$getTotalSize();
    expect(layout.$setAxis([{ a: 100, b: 200 }], "b", 0)).toBe(0);
    expect(layout.$getItemSize(0)).toBe(200);
  });
});

describe("setAxis with a uniform size", () => {
  it("should resize every item on a uniform size change", () => {
    const layout = createGridLayout(10, 40);
    layout.$getTotalSize();
    // 200 / 40 = 5 items are above the anchor
    expect(layout.$setAxis(10, 50, 200)).toBe(10 * 5);
    expect(layout.$getItemSize(0)).toBe(50);
    expect(layout.$getTotalSize()).toBe(500);
  });
});

describe("setAxis change detection", () => {
  it("should return undefined when nothing changed", () => {
    const list = items(100, 200);
    const layout = createGridLayout(list, "s");
    expect(layout.$setAxis(list, "s", 0)).toBe(undefined);
    expect(layout.$setAxis(items(100, 200), "s", 0)).toBe(undefined);
    expect(layout.$setAxis(items(100, 300), "s", 0)).toBe(0);
  });

  it("should ignore the items when the size is uniform", () => {
    const layout = createGridLayout(items(100, 200), 40);
    expect(layout.$setAxis(items(300, 400), 40, 0)).toBe(undefined);
    expect(layout.$getItemSize(0)).toBe(40);
  });

  it("should ignore a size of another form", () => {
    const fixed = createGridLayout(10, 40);
    expect(fixed.$setAxis(10, "auto", 0)).toBe(undefined);
    expect(fixed.$getItemSize(0)).toBe(40);

    const keyed = createGridLayout(items(100, 200), "s");
    expect(keyed.$setAxis(items(100, 200), "auto", 0)).toBe(undefined);
    expect(keyed.$setAxis(items(100, 200), 50, 0)).toBe(undefined);
    expect(keyed.$getItemSize(1)).toBe(200);

    const auto = createGridLayout(10, "auto");
    auto.$setItemSize(0, 123);
    expect(auto.$setAxis(10, "s", 0)).toBe(undefined);
    expect(auto.$getItemSize(0)).toBe(123);
  });

  it("should ignore the axis when every size is auto", () => {
    const layout = createGridLayout(10, "auto");
    layout.$setItemSize(0, 123);
    expect(layout.$setAxis(20, "auto", 0)).toBe(undefined);
    expect(layout.$getItemSize(0)).toBe(123);
  });
});

describe("setLength", () => {
  it("should grow with default sizes until the axis is set", () => {
    const layout = createGridLayout(items(100, 200), "s");
    layout.$getTotalSize();
    layout.$setLength(4);
    expect(layout.$getItemSize(2)).toBe(40);
    layout.$setAxis(items(100, 200, 300, "auto"), "s", 0);
    expect(layout.$getItemSize(2)).toBe(300);
    expect(layout.$isMeasurable(3)).toBe(true);
    expect(layout.$getTotalSize()).toBe(100 + 200 + 300 + 40);
  });

  it("should not need a relayout when only the count grows", () => {
    const layout = createGridLayout(2, 100);
    layout.$getTotalSize();
    layout.$setLength(5);
    expect(layout.$setAxis(5, 100, 0)).toBe(undefined);
    expect(layout.$getTotalSize()).toBe(500);
  });
});

describe("auto mode", () => {
  it("should report every item as measurable", () => {
    const layout = createGridLayout(10, "auto");
    expect(layout.$isMeasurable(0)).toBe(true);
    layout.$setItemSize(0, 123);
    expect(layout.$getItemSize(0)).toBe(123);
  });

  it("should not estimate the default size unless the whole axis is auto", () => {
    expect(createGridLayout(10, "auto").$estimateDefaultSize).toBeTruthy();
    expect(createGridLayout(10, 40).$estimateDefaultSize).toBeUndefined();
    expect(
      createGridLayout(items("auto", 40), "s").$estimateDefaultSize,
    ).toBeUndefined();
  });
});

describe("uniform size", () => {
  it("should not return NaN when the size and the gap are 0", () => {
    const layout = createGridLayout(10, 0);
    expect(layout.$findIndex(0)).toBe(0);
    expect(layout.$getRange(0, 100)).toEqual([0, 0]);
    expect(layout.$getTotalSize()).toBe(0);
  });
});

describe("isMeasurable", () => {
  it("should report only the auto items of a key axis", () => {
    const layout = createGridLayout(items(100, "auto"), "s");
    expect(layout.$isMeasurable(0)).toBe(false);
    expect(layout.$isMeasurable(1)).toBe(true);
  });

  it("should measure the items without a size", () => {
    const layout = createGridLayout([{ s: 100 }, {}, { s: null }], "s");
    expect(layout.$isMeasurable(0)).toBe(false);
    expect(layout.$isMeasurable(1)).toBe(true);
    expect(layout.$isMeasurable(2)).toBe(true);
  });

  it("should report whether the items of the axis are measured", () => {
    expect(createGridLayout(10, 40).$isMeasurable(0)).toBe(false);
    expect(createGridLayout(10, "auto").$isMeasurable(0)).toBe(true);
    const list = items(100, 200);
    const layout = createGridLayout(list, "s");
    expect(layout.$isMeasurable(1)).toBe(false);
    layout.$setAxis(items(100, "auto"), "s", 0);
    expect(layout.$isMeasurable(1)).toBe(true);
  });

  it("should report nothing for a fixed uniform axis", () => {
    const layout = createGridLayout(10, 50);
    expect(layout.$isMeasurable(0)).toBe(false);
    expect(layout.$getItemSize(0)).toBe(50);
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
    layout.$setItemSize(0, 100);
    expect(layout.$getItemSize(0)).toBe(100);
    expect(layout.$isSizeEqual(0, 100)).toBe(true);
    expect(layout.$getItemOffset(1)).toBe(102);
    expect(layout.$getTotalSize()).toBe(100 + 2 + 40);
  });

  it("should be empty without tracks", () => {
    expect(createGridLayout(0, 40, 2).$getTotalSize()).toBe(0);
  });
});

describe("edge cases", () => {
  it("should not let the gap shrink the default size", () => {
    const layout = createGridLayout(10, "auto", 50);
    expect(layout.$getItemSize(0)).toBe(40);
    expect(layout.$getItemOffset(1)).toBe(90);
  });

  it("should ignore the measurements of the items with sizes", () => {
    const layout = createGridLayout(items(100, "auto"), "s");
    layout.$setItemSize(0, 55);
    expect(layout.$getItemSize(0)).toBe(100);
  });

  it("should forget the auto items removed in place", () => {
    const list = items(100, "auto");
    const layout = createGridLayout(list, "s");
    list.pop();
    layout.$setLength(1);
    layout.$setAxis(list, "s", 0);
    list.push({ s: 50 });
    layout.$setLength(2);
    layout.$setAxis(list, "s", 0);
    expect(layout.$isMeasurable(1)).toBe(false);
  });
});
