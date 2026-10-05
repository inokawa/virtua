import { describe, it, expect } from "vitest";
import { createMasonryLayout, type MasonryLayout } from "./masonry.js";
import { createListLayout } from "./list.js";
import type { Layout } from "./types.js";
import { range } from "../../../spec/utils.js";

const initMasonryLayout = (
  sizes: readonly number[],
  defaultSize: number,
  lanes: number,
  gap?: number,
): MasonryLayout => {
  return createMasonryLayout(sizes.length, lanes, gap, undefined, [
    sizes.slice(),
    defaultSize,
  ]);
};

const getOffsets = (layout: Layout): number[] => {
  return range(layout.$getLength(), (i) => layout.$getItemOffset(i));
};

const getLaneIndexes = (layout: MasonryLayout): number[] => {
  return range(layout.$getLength(), (i) => layout.$getItemLane(i));
};

describe("placement", () => {
  it("should place items into the shortest lane", () => {
    const layout = initMasonryLayout([10, 20, 30, 10], 40, 2);
    expect(getOffsets(layout)).toEqual([0, 0, 10, 20]);
    expect(getLaneIndexes(layout)).toEqual([0, 1, 0, 1]);
  });

  it("should order items with equal sizes like a grid", () => {
    const layout = initMasonryLayout(
      range(6, () => 10),
      40,
      3,
    );
    expect(getOffsets(layout)).toEqual([0, 0, 0, 10, 10, 10]);
    expect(getLaneIndexes(layout)).toEqual([0, 1, 2, 0, 1, 2]);
  });

  it("should place items with fewer items than lanes", () => {
    const layout = initMasonryLayout([10, 20], 40, 4);
    expect(getOffsets(layout)).toEqual([0, 0]);
    expect(getLaneIndexes(layout)).toEqual([0, 1]);
    expect(layout.$getTotalSize()).toBe(20);
  });

  it("should place the next item into the other lane after an item without size", () => {
    const layout = initMasonryLayout([0, 10, 10, 10], 40, 2);
    // The item 0 doesn't fill the lane 0, but the lane 1 is used first as nothing is placed in it yet
    expect(getOffsets(layout)).toEqual([0, 0, 0, 10]);
    expect(getLaneIndexes(layout)).toEqual([0, 1, 0, 1]);
  });

  it("should place the items again after the first item is resized", () => {
    const layout = initMasonryLayout([10, 20, 30, 10], 40, 2);
    expect(getOffsets(layout)).toEqual([0, 0, 10, 20]);
    expect(getLaneIndexes(layout)).toEqual([0, 1, 0, 1]);

    layout.$resize([[0, 50]], () => false, 0, 0);
    // lane 0: 0 to 50, 50 to 60 / lane 1: 0 to 20, 20 to 50
    expect(getOffsets(layout)).toEqual([0, 0, 20, 50]);
    expect(getLaneIndexes(layout)).toEqual([0, 1, 1, 0]);
  });

  it("should place the items again after an item is resized behind a tall item in the other lane", () => {
    const layout = initMasonryLayout([100, 10, 10, 10, 10], 40, 2);
    expect(getOffsets(layout)).toEqual([0, 0, 10, 20, 30]);
    expect(getLaneIndexes(layout)).toEqual([0, 1, 1, 1, 1]);

    layout.$resize([[3, 80]], () => false, 0, 0);
    // lane 0: 0 to 100, 100 to 110 / lane 1: 0 to 10, 10 to 20, 20 to 100
    expect(getOffsets(layout)).toEqual([0, 0, 10, 20, 100]);
    expect(getLaneIndexes(layout)).toEqual([0, 1, 1, 1, 0]);
  });
});

describe("getTotalSize", () => {
  it("should return the largest lane bottom", () => {
    const layout = initMasonryLayout([10, 20, 30, 10], 40, 2);
    // lane 0: 0 to 10, 10 to 40 / lane 1: 0 to 20, 20 to 30
    expect(layout.$getTotalSize()).toBe(40);
  });
});

describe("getRange", () => {
  it("should return grid rows with items with equal sizes", () => {
    const layout = initMasonryLayout(
      range(100, () => 10),
      40,
      4,
    );
    expect(layout.$getRange(0, 99)).toEqual([0, 39]);
    // items at offset 40 end exactly at 50 and are not visible in 50 to 99
    expect(layout.$getRange(50, 99)).toEqual([20, 39]);
  });

  it("should include a tall item spanning the viewport start", () => {
    const sizes = [10, 100, ...range(20, () => 10)];
    const layout = initMasonryLayout(sizes, 40, 2);
    // lane 1 has only the tall item 0 to 100 and it overlaps 50 to 60
    const [start, end] = layout.$getRange(50, 60);
    expect(start).toBe(1);
    expect(layout.$getItemOffset(end)).toBeLessThanOrEqual(60);
    expect(layout.$getItemOffset(end + 1)).toBeGreaterThan(60);
  });

  it("should not extend start to a lane which ends before the viewport start", () => {
    // lane 0: 0 to 100, 100 to 110 / lane 1: 0 to 10, ..., 90 to 100
    const sizes = [100, ...range(10, () => 10), 10];
    const layout = initMasonryLayout(sizes, 40, 2);
    // lane 1 ends at 100 and must not be included in 102 to 112
    expect(layout.$getRange(102, 112)).toEqual([11, 11]);
  });

  it("should not include the items which end at the gap before the viewport start", () => {
    // 3 rows of 2 items: 0 to 10, 20 to 30, 40 to 50
    const layout = initMasonryLayout(
      range(6, () => 10),
      40,
      2,
      10,
    );
    expect(layout.$getRange(10, 20)).toEqual([2, 3]);
  });
});

describe("setLength", () => {
  it("should place the appended items after the existing ones", () => {
    const layout = initMasonryLayout([10, 20, 30, 10], 40, 2);
    expect(getOffsets(layout)).toEqual([0, 0, 10, 20]);

    // shift is not supported so the returned delta is always 0
    expect(layout.$setLength(6)).toBe(0);
    // lane 0: 0 to 10, 10 to 40, 40 to 80 / lane 1: 0 to 20, 20 to 30, 30 to 70
    expect(getOffsets(layout)).toEqual([0, 0, 10, 20, 30, 40]);
    expect(getLaneIndexes(layout)).toEqual([0, 1, 0, 1, 1, 0]);
  });
});

describe("resize", () => {
  it("should keep the first item not to keep in place", () => {
    // lane 0: 0, 2, 4 / lane 1: 1, 3, 5
    const layout = initMasonryLayout([10, 10, 10, 10, 10, 10], 40, 2);
    expect(getOffsets(layout)).toEqual([0, 0, 10, 10, 20, 20]);
    // The items before the item at 20 are kept, but the resize of the item in the other lane doesn't move it
    expect(layout.$resize([[1, 12]], (i) => i < 4, 20, 100)).toBe(0);
    expect(getOffsets(layout)).toEqual([0, 0, 10, 12, 20, 22]);
    // The resize of the item in the same lane moves it by the delta
    expect(layout.$resize([[2, 12]], (i) => i < 4, 20, 100)).toBe(2);
    expect(getOffsets(layout)).toEqual([0, 0, 10, 12, 22, 22]);
  });

  it("should keep the destination of scrolling in place", () => {
    const layout = initMasonryLayout([10, 10, 10, 10, 10, 10], 40, 2);
    // The item 5 is the destination, which moves by the resize in its lane
    expect(layout.$resize([[1, 12]], (i) => i < 5, 0, 100)).toBe(2);
    expect(layout.$resize([[0, 12]], (i) => i < 5, 0, 100)).toBe(0);
  });

  it("should move the item at the start of the viewport by the change of its lane", () => {
    // Resizing an item above can move the items after it to other lanes, and the jump follows the actual displacement
    const layout = initMasonryLayout([10, 10, 10, 10, 10, 10], 40, 2);
    expect(layout.$resize([[1, 30]], (i) => i < 4, 20, 100)).toBe(10);
    expect(getOffsets(layout)).toEqual([0, 0, 10, 20, 30, 30]);
  });

  it("should keep the item at the visible offset in place after estimation", () => {
    const lanes = 2;
    const measuredSize = 100;
    const layout = createMasonryLayout(10, lanes);
    for (let i = 0; i < 5; i++) {
      layout.$resize([[i, measuredSize]], () => false, 0, 0);
    }
    expect(layout.$isEstimating()).toBe(true);

    // The unmeasured items are 40 until estimated, so the items 5-7 are placed at 200, 240 and 280 in lane 1
    const scrollOffset = 300;
    expect(layout.$getItemOffset(7)).toBe(280);
    // The item 7 is at the start of the viewport, which is moved to 300 by the estimated size
    expect(layout.$resize([], () => false, scrollOffset, 1)).toBe(20);
    expect(layout.$getItemOffset(7)).toBe(300);
    expect(layout.$isEstimating()).toBe(false);
    // the estimated default size is used for unmeasured items afterwards
    expect(layout.$snapshot()[1]).toBe(measuredSize);
  });
});

describe("estimateDefaultSize", () => {
  it("should not estimate until the measured sizes exceed the viewport size of all lanes in total", () => {
    const layout = createMasonryLayout(10, 2);
    // 150 exceeds the viewport, but not in 2 lanes
    layout.$resize(
      range(3, (i) => [i, 50]),
      () => false,
      0,
      100,
    );
    expect(layout.$isEstimating()).toBe(true);
    layout.$resize(
      range(2, (i) => [3 + i, 50]),
      () => false,
      0,
      100,
    );
    expect(layout.$isEstimating()).toBe(false);
    expect(layout.$snapshot()[1]).toBe(50);
  });

  it("should count the gaps as the viewport is filled with them too", () => {
    const layout = createMasonryLayout(10, 2, 50);
    // An item of 50 and a gap of 50 fill the viewport of 100 in a lane
    layout.$resize(
      range(2, (i) => [i, 50]),
      () => false,
      0,
      100,
    );
    expect(layout.$isEstimating()).toBe(true);
    layout.$resize([[2, 50]], () => false, 0, 100);
    expect(layout.$isEstimating()).toBe(false);
    expect(layout.$snapshot()[1]).toBe(50);
  });

  describe("after relayout", () => {
    // Images keeping their aspect ratios: half the size in twice the lanes. The rendered items are resized together with the lanes.
    const measureAll = (layout: MasonryLayout, size: number) => {
      layout.$resize(
        range(4, (i) => [i, size]),
        () => false,
        0,
        100,
      );
    };

    it("should estimate the size again from the items measured in the new lanes", () => {
      const layout = createMasonryLayout(10, 1);
      measureAll(layout, 200);
      expect(layout.$isEstimating()).toBe(false);
      expect(layout.$snapshot()[1]).toBe(200);

      layout.$relayout(2, undefined, 0);
      measureAll(layout, 100);
      expect(layout.$snapshot()[1]).toBe(100);
    });

    it("should not report the estimation after the first one", () => {
      const layout = createMasonryLayout(10, 1);
      measureAll(layout, 200);
      expect(layout.$isEstimating()).toBe(false);

      // The items which keep their sizes in the new lanes are not measured again
      layout.$relayout(2, undefined, 0);
      expect(layout.$isEstimating()).toBe(false);
    });

    it("should not estimate from the items measured in the previous lanes", () => {
      const layout = createMasonryLayout(10, 1);
      layout.$resize(
        range(8, (i) => [i, 200]),
        () => false,
        0,
        100,
      );
      expect(layout.$snapshot()[1]).toBe(200);

      layout.$relayout(2, undefined, 0);
      // The items 4-7 are not rendered in the new lanes, and keep their sizes measured in the previous lanes
      measureAll(layout, 100);
      expect(layout.$snapshot()[1]).toBe(100);
    });

    it("should not estimate again if the item size is given", () => {
      const layout = createMasonryLayout(10, 1, 0, 50);
      layout.$relayout(2, undefined, 0);
      measureAll(layout, 100);
      expect(layout.$snapshot()[1]).toBe(50);
    });

    it("should not estimate again with the same options", () => {
      const layout = createMasonryLayout(10, 2);
      measureAll(layout, 200);
      layout.$relayout(2, undefined, 0);
      measureAll(layout, 100);
      expect(layout.$snapshot()[1]).toBe(200);
    });
  });
});

describe("lanes", () => {
  it("should clamp lane count to 1", () => {
    const layout = initMasonryLayout([10, 20, 30], 40, -1);
    expect(layout.$getLanes()).toBe(1);
    const listLayout = createListLayout(3, 40, [[10, 20, 30]]);
    expect(getOffsets(layout)).toEqual(getOffsets(listLayout));
  });
});

describe("getItemLane", () => {
  it("should compute offsets by itself", () => {
    const layout = initMasonryLayout([10, 20, 30, 10], 40, 2);
    // no $getItemOffset called before. item 3 is in the second of 2 lanes
    expect(layout.$getItemLane(3)).toBe(1);
  });
});

describe("gap", () => {
  it("should add gaps between items in a lane but not before the first item", () => {
    const layout = initMasonryLayout([10, 20, 30, 10], 40, 2, 5);
    // lane 0: 0 to 10, 15 to 45 / lane 1: 0 to 20, 25 to 35
    expect(getOffsets(layout)).toEqual([0, 0, 15, 25]);
    expect(getLaneIndexes(layout)).toEqual([0, 1, 0, 1]);
  });

  it("should not add the trailing gap to the total size", () => {
    const layout = initMasonryLayout([10, 20, 30, 10], 40, 2, 5);
    expect(layout.$getTotalSize()).toBe(45);
  });

  it("should be equal to linear layout with gap with 1 lane", () => {
    const sizes = [10, 20, 30, 40];
    const layout = initMasonryLayout(sizes, 40, 1, 5);
    // lane 0: 0 to 10, 15 to 35, 40 to 70, 75 to 115
    expect(getOffsets(layout)).toEqual([0, 15, 40, 75]);
    expect(layout.$getTotalSize()).toBe(115);
  });
});

describe("snapshot", () => {
  it("should restore sizes from a snapshot regardless of lane count", () => {
    const layout = initMasonryLayout([10, 20, 30, 10], 40, 2);
    expect(getOffsets(layout)).toEqual([0, 0, 10, 20]);

    const restored = createMasonryLayout(
      4,
      3,
      0,
      undefined,
      layout.$snapshot(),
    );
    expect(getOffsets(restored)).toEqual([0, 0, 0, 10]);
  });
});

describe("relayout", () => {
  it("should relayout with the new lanes and return the jump to keep the item at the scroll offset in place", () => {
    const layout = createMasonryLayout(10, 1, 0, 40);
    expect(layout.$getItemOffset(4)).toBe(160);
    // item 4 moves to the third row of 2 lanes
    expect(layout.$relayout(2, undefined, 160)).toBe(80 - 160);
    expect(layout.$getLanes()).toBe(2);
    expect(layout.$getItemOffset(4)).toBe(80);
  });

  it("should relayout with the new gap", () => {
    const layout = createMasonryLayout(6, 2, 0, 40);
    expect(layout.$relayout(2, 10, 0)).toBe(0);
    expect(layout.$getGap()).toBe(10);
    expect(getOffsets(layout)).toEqual([0, 0, 50, 50, 100, 100]);
  });

  it("should not relayout with the same options", () => {
    const layout = createMasonryLayout(10, 2, 10, 40);
    expect(layout.$relayout(2, 10, 0)).toBeUndefined();
  });

  it("should clamp the new lanes to 1", () => {
    const layout = createMasonryLayout(10, 2, 0, 40);
    layout.$relayout(0, undefined, 0);
    expect(layout.$getLanes()).toBe(1);
  });

  it("should relayout with no items", () => {
    const layout = initMasonryLayout([], 40, 2);
    expect(layout.$relayout(3, undefined, 0)).toBe(0);
    expect(layout.$getLanes()).toBe(3);
  });

  it("should keep the measured sizes on relayout", () => {
    const layout = initMasonryLayout([10, 20, 30, 10], 40, 2);
    expect(getOffsets(layout)).toEqual([0, 0, 10, 20]);
    expect(layout.$relayout(4, undefined, 0)).toBe(0);
    expect(getOffsets(layout)).toEqual([0, 0, 0, 0]);
    expect(layout.$getItemSize(2)).toBe(30);
  });
});
