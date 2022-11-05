import { describe, it, expect } from "@jest/globals";
import {
  resolveItemSize,
  computeStartOffset,
  findStartIndexAfter,
  findStartIndexBefore,
  findStartIndexWithOffset,
  findEndIndex,
} from "./cache";

const sum = (cache: number[]): number => {
  return cache.reduce((acc, c) => acc + c, 0);
};

const filledHeights = [20, 20, 20, 20, 20, 20, 20, 20, 20, 20];
const emptyHeights = [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1];

describe(resolveItemSize.name, () => {
  it("should get height", () => {
    expect(resolveItemSize(10, 20)).toBe(10);
  });
  it("should get default height", () => {
    expect(resolveItemSize(-1, 20)).toBe(20);
  });
});

describe(computeStartOffset.name, () => {
  it("should get 0 if index is at start", () => {
    expect(computeStartOffset(0, filledHeights, 30)).toBe(0);
  });

  it("should get 1 item if index is at start", () => {
    expect(computeStartOffset(1, filledHeights, 30)).toBe(20);
  });

  it("should get total - 1 item if index is at last", () => {
    const last = filledHeights.length - 1;
    expect(computeStartOffset(last, filledHeights, 30)).toBe(
      sum(filledHeights) - filledHeights[last]!
    );
  });

  it("should resolve default height", () => {
    expect(computeStartOffset(2, emptyHeights, 30)).toBe(60);
  });
});

describe(findEndIndex.name, () => {
  describe("change index", () => {
    it("should get if index is at start", () => {
      expect(findEndIndex(0, 100, filledHeights, 30)).toBe(4);
    });

    it("should get if index is at start + 1", () => {
      expect(findEndIndex(1, 100, filledHeights, 30)).toBe(5);
    });

    it("should get last if index is at end", () => {
      const last = filledHeights.length - 1;
      expect(findEndIndex(last, 100, filledHeights, 30)).toBe(last);
    });

    it("should get if index is at end - 1", () => {
      const last = filledHeights.length - 1;
      expect(findEndIndex(last - 1, 100, filledHeights, 30)).toBe(last);
    });
  });

  it("should get argument index if viewport is 0 and index is at start", () => {
    expect(findEndIndex(0, 0, filledHeights, 30)).toBe(0);
  });

  it("should get argument index if viewport is 0 and index is at start + 1", () => {
    expect(findEndIndex(1, 0, filledHeights, 30)).toBe(1);
  });

  it("should get same if viewport fits cache", () => {
    expect(findEndIndex(1, 100, filledHeights, 30)).toBe(5);
  });

  it("should get next if viewport is 1/2 item height larger than cache", () => {
    expect(findEndIndex(1, 110, filledHeights, 30)).toBe(6);
  });

  it("should get same if viewport is 1/2 - 1px item height larger than cache", () => {
    expect(findEndIndex(1, 109, filledHeights, 30)).toBe(5);
  });

  it("should get same if viewport is bit larger than cache", () => {
    expect(findEndIndex(1, 101, filledHeights, 30)).toBe(5);
  });

  it("should get same if viewport is a little bit larger than cache", () => {
    expect(findEndIndex(1, 100.01, filledHeights, 30)).toBe(5);
  });

  it("should get same if viewport is bit smaller than cache", () => {
    expect(findEndIndex(1, 99, filledHeights, 30)).toBe(5);
  });

  it("should get same if viewport is a little bit smaller than cache", () => {
    expect(findEndIndex(1, 99.99, filledHeights, 30)).toBe(5);
  });

  it("should resolve default height", () => {
    expect(findEndIndex(0, 100, emptyHeights, 25)).toBe(3);
  });
});

describe(findStartIndexAfter.name, () => {
  describe("change index", () => {
    it("should get if index is at start", () => {
      expect(findStartIndexAfter(0, 40, filledHeights, 30)).toBe(2);
    });

    it("should get if index is at start + 1", () => {
      expect(findStartIndexAfter(1, 40, filledHeights, 30)).toBe(3);
    });

    it("should get last if index is at end", () => {
      const last = filledHeights.length - 1;
      expect(findStartIndexAfter(last, 40, filledHeights, 30)).toBe(last);
    });

    it("should get if index is at end - 1", () => {
      const last = filledHeights.length - 1;
      expect(findStartIndexAfter(last - 1, 40, filledHeights, 30)).toBe(last);
    });
  });

  it("should get argument index if viewport is 0 and index is at start", () => {
    expect(findStartIndexAfter(0, 0, filledHeights, 30)).toBe(0);
  });

  it("should get argument index if viewport is 0 and index is at start + 1", () => {
    expect(findStartIndexAfter(1, 0, filledHeights, 30)).toBe(1);
  });

  it("should get same if viewport fits cache", () => {
    expect(findStartIndexAfter(1, 40, filledHeights, 30)).toBe(3);
  });

  it("should get next if viewport is 1/2 item height larger than cache", () => {
    expect(findStartIndexAfter(1, 50, filledHeights, 30)).toBe(4);
  });

  it("should get same if viewport is 1/2 - 1px item height larger than cache", () => {
    expect(findStartIndexAfter(1, 49, filledHeights, 30)).toBe(3);
  });

  it("should get same if viewport is bit larger than cache", () => {
    expect(findStartIndexAfter(1, 41, filledHeights, 30)).toBe(3);
  });

  it("should get same if viewport is a little bit larger than cache", () => {
    expect(findStartIndexAfter(1, 40.01, filledHeights, 30)).toBe(3);
  });

  it("should get same if viewport is bit smaller than cache", () => {
    expect(findStartIndexAfter(1, 39, filledHeights, 30)).toBe(3);
  });

  it("should get same if viewport is a little bit smaller than cache", () => {
    expect(findStartIndexAfter(1, 39.99, filledHeights, 30)).toBe(3);
  });

  it("should resolve default height", () => {
    expect(findStartIndexAfter(0, 100, emptyHeights, 25)).toBe(4);
  });
});

describe(findStartIndexBefore.name, () => {
  describe("change index", () => {
    it("should get if index is at end", () => {
      const last = filledHeights.length - 1;
      expect(findStartIndexBefore(last, 40, filledHeights, 30)).toBe(last - 2);
    });

    it("should get if index is at end - 1", () => {
      const last = filledHeights.length - 1;
      expect(findStartIndexBefore(last - 1, 40, filledHeights, 30)).toBe(
        last - 3
      );
    });

    it("should get start if index is at start", () => {
      expect(findStartIndexBefore(0, 40, filledHeights, 30)).toBe(0);
    });

    it("should get if index is at start + 1", () => {
      expect(findStartIndexBefore(1, 40, filledHeights, 30)).toBe(0);
    });
  });

  it("should get argument index if viewport is 0 and index is at end", () => {
    const last = filledHeights.length - 1;
    expect(findStartIndexBefore(last, 0, filledHeights, 30)).toBe(last);
  });

  it("should get argument index if viewport is 0 and index is at end - 1", () => {
    const last = filledHeights.length - 1;
    expect(findStartIndexBefore(last - 1, 0, filledHeights, 30)).toBe(last - 1);
  });

  it("should get same if viewport fits cache", () => {
    const last = filledHeights.length - 1;
    expect(findStartIndexBefore(last - 1, 40, filledHeights, 30)).toBe(
      last - 3
    );
  });

  it("should get prev if viewport is 1/2 item height larger than cache", () => {
    const last = filledHeights.length - 1;
    expect(findStartIndexBefore(last - 1, 50, filledHeights, 30)).toBe(
      last - 4
    );
  });

  it("should get same if viewport is 1/2 - 1px item height larger than cache", () => {
    const last = filledHeights.length - 1;
    expect(findStartIndexBefore(last - 1, 49, filledHeights, 30)).toBe(
      last - 3
    );
  });

  it("should get same if viewport is bit larger than cache", () => {
    const last = filledHeights.length - 1;
    expect(findStartIndexBefore(last - 1, 41, filledHeights, 30)).toBe(
      last - 3
    );
  });

  it("should get same if viewport is a little bit larger than cache", () => {
    const last = filledHeights.length - 1;
    expect(findStartIndexBefore(last - 1, 40.01, filledHeights, 30)).toBe(
      last - 3
    );
  });

  it("should get same if viewport is bit smaller than cache", () => {
    const last = filledHeights.length - 1;
    expect(findStartIndexBefore(last - 1, 39, filledHeights, 30)).toBe(
      last - 3
    );
  });

  it("should get same if viewport is a little bit smaller than cache", () => {
    const last = filledHeights.length - 1;
    expect(findStartIndexBefore(last - 1, 39.99, filledHeights, 30)).toBe(
      last - 3
    );
  });

  it("should resolve default height", () => {
    const last = filledHeights.length - 1;
    expect(findStartIndexBefore(last, 100, emptyHeights, 25)).toBe(last - 4);
  });
});

describe(`${findStartIndexAfter.name} and ${findStartIndexBefore.name}`, () => {
  it("should get same index if startIndex is at start", () => {
    const viewport = 100;
    const start = 0;
    const end = findStartIndexAfter(start, viewport, filledHeights, 30);
    expect(findStartIndexBefore(end, viewport, filledHeights, 30)).toBe(start);
  });

  it("should get same index if startIndex is at start + 1", () => {
    const viewport = 100;
    const start = 1;
    const end = findStartIndexAfter(start, viewport, filledHeights, 30);
    expect(findStartIndexBefore(end, viewport, filledHeights, 30)).toBe(start);
  });

  it("should get different index if startIndex is at end", () => {
    const viewport = 100;
    const start = filledHeights.length - 1;
    const end = findStartIndexAfter(start, viewport, filledHeights, 30);
    expect(findStartIndexBefore(end, viewport, filledHeights, 30)).toBe(
      start - 5
    );
  });

  it("should get same index if endIndex is at end", () => {
    const viewport = 100;
    const end = filledHeights.length - 1;
    const start = findStartIndexBefore(end, viewport, filledHeights, 30);
    expect(findStartIndexAfter(start, viewport, filledHeights, 30)).toBe(end);
  });

  it("should get same index if endIndex is at end - 1", () => {
    const viewport = 100;
    const start = filledHeights.length - 2;
    const end = findStartIndexBefore(start, viewport, filledHeights, 30);
    expect(findStartIndexAfter(end, viewport, filledHeights, 30)).toBe(start);
  });

  it("should get different index if endIndex is at start", () => {
    const viewport = 100;
    const end = 0;
    const start = findStartIndexBefore(end, viewport, filledHeights, 30);
    expect(findStartIndexAfter(start, viewport, filledHeights, 30)).toBe(
      end + 5
    );
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
