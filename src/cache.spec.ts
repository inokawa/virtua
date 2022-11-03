import { describe, it, expect } from "@jest/globals";
import {
  resolveItemHeight,
  computeTop,
  findIndexAfter,
  findIndexBefore,
  findStartIndexWithOffset,
} from "./cache";

const sum = (cache: number[]): number => {
  return cache.reduce((acc, c) => acc + c, 0);
};

const filledHeights = [20, 20, 20, 20, 20, 20, 20, 20, 20, 20];
const emptyHeights = [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1];

describe(resolveItemHeight.name, () => {
  it("should get height", () => {
    expect(resolveItemHeight(10, 20)).toBe(10);
  });
  it("should get default height", () => {
    expect(resolveItemHeight(-1, 20)).toBe(20);
  });
});

describe(computeTop.name, () => {
  it("should get 0 if index is at start", () => {
    expect(computeTop(0, filledHeights, 30)).toBe(0);
  });

  it("should get 1 item if index is at start", () => {
    expect(computeTop(1, filledHeights, 30)).toBe(20);
  });

  it("should get total - 1 item if index is at last", () => {
    const last = filledHeights.length - 1;
    expect(computeTop(last, filledHeights, 30)).toBe(
      sum(filledHeights) - filledHeights[last]!
    );
  });

  it("should resolve default height", () => {
    expect(computeTop(2, emptyHeights, 30)).toBe(60);
  });
});

describe(findIndexAfter.name, () => {
  describe("change index", () => {
    it("should get if index is at start", () => {
      expect(findIndexAfter(0, 100, filledHeights, 30)).toBe(4);
    });

    it("should get if index is at start + 1", () => {
      expect(findIndexAfter(1, 100, filledHeights, 30)).toBe(5);
    });

    it("should get last if index is at end", () => {
      const last = filledHeights.length - 1;
      expect(findIndexAfter(last, 100, filledHeights, 30)).toBe(last);
    });

    it("should get if index is at end - 1", () => {
      const last = filledHeights.length - 1;
      expect(findIndexAfter(last - 1, 100, filledHeights, 30)).toBe(last);
    });
  });

  it("should get argument index if viewport is 0 and index is at start", () => {
    expect(findIndexAfter(0, 0, filledHeights, 30)).toBe(0);
  });

  it("should get argument index if viewport is 0 and index is at start + 1", () => {
    expect(findIndexAfter(1, 0, filledHeights, 30)).toBe(1);
  });

  it("should get same if viewport fits cache", () => {
    expect(findIndexAfter(1, 100, filledHeights, 30)).toBe(5);
  });

  it("should get next if viewport is 1/2 item height larger than cache", () => {
    expect(findIndexAfter(1, 110, filledHeights, 30)).toBe(6);
  });

  it("should get same if viewport is 1/2 - 1px item height larger than cache", () => {
    expect(findIndexAfter(1, 109, filledHeights, 30)).toBe(5);
  });

  it("should get same if viewport is bit larger than cache", () => {
    expect(findIndexAfter(1, 101, filledHeights, 30)).toBe(5);
  });

  it("should get same if viewport is a little bit larger than cache", () => {
    expect(findIndexAfter(1, 100.01, filledHeights, 30)).toBe(5);
  });

  it("should get same if viewport is bit smaller than cache", () => {
    expect(findIndexAfter(1, 99, filledHeights, 30)).toBe(5);
  });

  it("should get same if viewport is a little bit smaller than cache", () => {
    expect(findIndexAfter(1, 99.99, filledHeights, 30)).toBe(5);
  });

  it("should resolve default height", () => {
    expect(findIndexAfter(0, 100, emptyHeights, 25)).toBe(3);
  });
});

describe(findIndexBefore.name, () => {
  describe("change index", () => {
    it("should get if index is at end", () => {
      const last = filledHeights.length - 1;
      expect(findIndexBefore(last, 100, filledHeights, 30)).toBe(last - 4);
    });

    it("should get if index is at end - 1", () => {
      const last = filledHeights.length - 1;
      expect(findIndexBefore(last - 1, 100, filledHeights, 30)).toBe(last - 5);
    });

    it("should get start if index is at start", () => {
      expect(findIndexBefore(0, 100, filledHeights, 30)).toBe(0);
    });

    it("should get if index is at start + 1", () => {
      expect(findIndexBefore(1, 100, filledHeights, 30)).toBe(0);
    });
  });

  it("should get argument index if viewport is 0 and index is at end", () => {
    const last = filledHeights.length - 1;
    expect(findIndexBefore(last, 0, filledHeights, 30)).toBe(last);
  });

  it("should get argument index if viewport is 0 and index is at end - 1", () => {
    const last = filledHeights.length - 1;
    expect(findIndexBefore(last - 1, 0, filledHeights, 30)).toBe(last - 1);
  });

  it("should get same if viewport fits cache", () => {
    const last = filledHeights.length - 1;
    expect(findIndexBefore(last - 1, 100, filledHeights, 30)).toBe(last - 5);
  });

  it("should get prev if viewport is 1/2 item height larger than cache", () => {
    const last = filledHeights.length - 1;
    expect(findIndexBefore(last - 1, 110, filledHeights, 30)).toBe(last - 6);
  });

  it("should get same if viewport is 1/2 - 1px item height larger than cache", () => {
    const last = filledHeights.length - 1;
    expect(findIndexBefore(last - 1, 109, filledHeights, 30)).toBe(last - 5);
  });

  it("should get same if viewport is bit larger than cache", () => {
    const last = filledHeights.length - 1;
    expect(findIndexBefore(last - 1, 101, filledHeights, 30)).toBe(last - 5);
  });

  it("should get same if viewport is a little bit larger than cache", () => {
    const last = filledHeights.length - 1;
    expect(findIndexBefore(last - 1, 100.01, filledHeights, 30)).toBe(last - 5);
  });

  it("should get same if viewport is bit smaller than cache", () => {
    const last = filledHeights.length - 1;
    expect(findIndexBefore(last - 1, 99, filledHeights, 30)).toBe(last - 5);
  });

  it("should get same if viewport is a little bit smaller than cache", () => {
    const last = filledHeights.length - 1;
    expect(findIndexBefore(last - 1, 99.99, filledHeights, 30)).toBe(last - 5);
  });

  it("should resolve default height", () => {
    const last = filledHeights.length - 1;
    expect(findIndexBefore(last, 100, emptyHeights, 25)).toBe(last - 3);
  });
});

describe(`${findIndexAfter.name} and ${findIndexBefore.name}`, () => {
  it("should get same index if startIndex is at start", () => {
    const viewport = 100;
    const start = 0;
    const end = findIndexAfter(start, viewport, filledHeights, 30);
    expect(findIndexBefore(end, viewport, filledHeights, 30)).toBe(start);
  });

  it("should get same index if startIndex is at start + 1", () => {
    const viewport = 100;
    const start = 1;
    const end = findIndexAfter(start, viewport, filledHeights, 30);
    expect(findIndexBefore(end, viewport, filledHeights, 30)).toBe(start);
  });

  it("should get different index if startIndex is at end", () => {
    const viewport = 100;
    const start = filledHeights.length - 1;
    const end = findIndexAfter(start, viewport, filledHeights, 30);
    expect(findIndexBefore(end, viewport, filledHeights, 30)).toBe(start - 4);
  });

  it("should get same index if endIndex is at end", () => {
    const viewport = 100;
    const end = filledHeights.length - 1;
    const start = findIndexBefore(end, viewport, filledHeights, 30);
    expect(findIndexAfter(start, viewport, filledHeights, 30)).toBe(end);
  });

  it("should get same index if endIndex is at end - 1", () => {
    const viewport = 100;
    const start = filledHeights.length - 2;
    const end = findIndexBefore(start, viewport, filledHeights, 30);
    expect(findIndexAfter(end, viewport, filledHeights, 30)).toBe(start);
  });

  it("should get different index if endIndex is at start", () => {
    const viewport = 100;
    const end = 0;
    const start = findIndexBefore(end, viewport, filledHeights, 30);
    expect(findIndexAfter(start, viewport, filledHeights, 30)).toBe(end + 4);
  });
});

describe(findStartIndexWithOffset.name, () => {
  it("should get start if offset is at start", () => {
    expect(findStartIndexWithOffset(0, filledHeights, 30)).toBe(0);
  });

  it("should get index if offset fits half of index 1 and 2", () => {
    expect(findStartIndexWithOffset(10, filledHeights, 30)).toBe(0);
  });

  it("should get index if offset fits half of index 1 and 2 + 1px", () => {
    expect(findStartIndexWithOffset(11, filledHeights, 30)).toBe(1);
  });

  it("should get index if offset fits half of index 1 and 2 - 1px", () => {
    expect(findStartIndexWithOffset(9, filledHeights, 30)).toBe(0);
  });

  it("should get index if offset fits index 1", () => {
    expect(findStartIndexWithOffset(20, filledHeights, 30)).toBe(1);
  });

  it("should get index if offset is index 1 + 1px", () => {
    expect(findStartIndexWithOffset(21, filledHeights, 30)).toBe(1);
  });

  it("should get index if offset is index 1 - 1px", () => {
    expect(findStartIndexWithOffset(19, filledHeights, 30)).toBe(1);
  });

  it("should get index if offset fits index 2", () => {
    expect(findStartIndexWithOffset(40, filledHeights, 30)).toBe(2);
  });

  it("should get index if offset is index 2 + 1px", () => {
    expect(findStartIndexWithOffset(41, filledHeights, 30)).toBe(2);
  });

  it("should get index if offset is index 2 - 1px", () => {
    expect(findStartIndexWithOffset(39, filledHeights, 30)).toBe(2);
  });

  it("should get index if offset is at end", () => {
    expect(
      findStartIndexWithOffset(sum(filledHeights), filledHeights, 30)
    ).toBe(filledHeights.length - 1);
  });
});
