import { describe, it, expect } from "@jest/globals";
import {
  resolveItemHeight,
  computeTop,
  findIndexAfter,
  findIndexBefore,
} from "./cache";

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
      filledHeights.reduce((acc, h) => acc + h, 0) - filledHeights[last]!
    );
  });

  it("should resolve default height", () => {
    expect(computeTop(2, emptyHeights, 30)).toBe(60);
  });
});

describe("findIndex", () => {
  describe("after", () => {
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

    describe("change viewport", () => {
      it("should get if viewport fits cache", () => {
        expect(findIndexAfter(1, 100, filledHeights, 30)).toBe(5);
      });

      it("should get next if viewport is bit larger than cache", () => {
        expect(findIndexAfter(1, 101, filledHeights, 30)).toBe(6);
      });

      it("should get next if viewport is a little bit larger than cache", () => {
        expect(findIndexAfter(1, 100.01, filledHeights, 30)).toBe(6);
      });

      it("should get if viewport is bit smaller than cache", () => {
        expect(findIndexAfter(1, 99, filledHeights, 30)).toBe(5);
      });

      it("should get if viewport is a little bit smaller than cache", () => {
        expect(findIndexAfter(1, 99.99, filledHeights, 30)).toBe(5);
      });
    });

    it("should resolve default height", () => {
      expect(findIndexAfter(0, 100, emptyHeights, 25)).toBe(3);
    });
  });

  describe("before", () => {
    describe("change index", () => {
      it("should get if index is at end", () => {
        const last = filledHeights.length - 1;
        expect(findIndexBefore(last, 100, filledHeights, 30)).toBe(last - 4);
      });

      it("should get if index is at end - 1", () => {
        const last = filledHeights.length - 1;
        expect(findIndexBefore(last - 1, 100, filledHeights, 30)).toBe(
          last - 5
        );
      });

      it("should get start if index is at start", () => {
        expect(findIndexBefore(0, 100, filledHeights, 30)).toBe(0);
      });

      it("should get if index is at start + 1", () => {
        expect(findIndexBefore(1, 100, filledHeights, 30)).toBe(0);
      });
    });

    describe("change viewport", () => {
      it("should get if viewport fits cache", () => {
        const last = filledHeights.length - 1;
        expect(findIndexBefore(last - 1, 100, filledHeights, 30)).toBe(
          last - 5
        );
      });

      it("should get prev if viewport is bit larger than cache", () => {
        const last = filledHeights.length - 1;
        expect(findIndexBefore(last - 1, 101, filledHeights, 30)).toBe(
          last - 6
        );
      });

      it("should get prev if viewport is a little bit larger than cache", () => {
        const last = filledHeights.length - 1;
        expect(findIndexBefore(last - 1, 100.01, filledHeights, 30)).toBe(
          last - 6
        );
      });

      it("should get if viewport is bit smaller than cache", () => {
        const last = filledHeights.length - 1;
        expect(findIndexBefore(last - 1, 99, filledHeights, 30)).toBe(last - 5);
      });

      it("should get if viewport is a little bit smaller than cache", () => {
        const last = filledHeights.length - 1;
        expect(findIndexBefore(last - 1, 99.99, filledHeights, 30)).toBe(
          last - 5
        );
      });
    });

    it("should resolve default height", () => {
      const last = filledHeights.length - 1;
      expect(findIndexBefore(last, 100, emptyHeights, 25)).toBe(last - 3);
    });
  });

  describe("both", () => {
    it("should get same index if index is at start", () => {
      expect(
        findIndexBefore(
          findIndexAfter(0, 100, filledHeights, 30),
          100,
          filledHeights,
          30
        )
      ).toBe(0);
    });

    it("should get same index if index is at start + 1", () => {
      expect(
        findIndexBefore(
          findIndexAfter(1, 100, filledHeights, 30),
          100,
          filledHeights,
          30
        )
      ).toBe(1);
    });

    it("should get same index if index is at end", () => {
      const last = filledHeights.length - 1;
      expect(
        findIndexAfter(
          findIndexBefore(last, 100, filledHeights, 30),
          100,
          filledHeights,
          30
        )
      ).toBe(last);
    });

    it("should get same index if index is at end - 1", () => {
      const last = filledHeights.length - 1;
      expect(
        findIndexAfter(
          findIndexBefore(last - 1, 100, filledHeights, 30),
          100,
          filledHeights,
          30
        )
      ).toBe(last - 1);
    });
  });
});
