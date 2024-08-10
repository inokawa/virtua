import { describe, expect, it } from "vitest";

import { median } from "./median";

describe("median (handles even and odd length arrays)", () => {
  class SimpleLinearRegression {
    private slope: number;
    private intercept: number;

    constructor() {
      this.slope = 0;
      this.intercept = 0;
    }

    train(data: [number, number][]): void {
      const n = data.length;
      const xSum = data.reduce((sum, [x]) => sum + x, 0);
      const ySum = data.reduce((sum, [, y]) => sum + y, 0);
      const xySum = data.reduce((sum, [x, y]) => sum + x * y, 0);
      const xSquaredSum = data.reduce((sum, [x]) => sum + x * x, 0);

      // Calculate slope (m) and intercept (b)
      this.slope = (n * xySum - xSum * ySum) / (n * xSquaredSum - xSum * xSum);
      this.intercept = (ySum - this.slope * xSum) / n;
    }

    predict(x: number): number {
      return this.slope * x + this.intercept;
    }

    rSquared(data: [number, number][]): number {
      const yMean = data.reduce((sum, [, y]) => sum + y, 0) / data.length;
      const totalSumOfSquares = data.reduce(
        (sum, [, y]) => sum + (y - yMean) ** 2,
        0,
      );
      const residualSumOfSquares = data.reduce(
        (sum, [x, y]) => sum + (y - this.predict(x)) ** 2,
        0,
      );

      return 1 - residualSumOfSquares / totalSumOfSquares;
    }
  }

  it("should return undefined for an invalid input", () => {
    const arr: number[] = [];
    expect(median(arr, arr.length)).toBe(undefined);
  });
  it("should return undefined for an empty array", () => {
    const arr: number[] = [];
    expect(median(arr, arr.length)).toBe(undefined);
  });

  it("should find the median in an array with two items", () => {
    const arr = [3, 1];
    expect(median(arr, arr.length)).toBe(2);
  });

  it("should find the median in an odd-length array", () => {
    const arr = [3, 1, 2];
    expect(median(arr, arr.length)).toBe(2);
  });

  it("should find the median in an even-length array", () => {
    const arr = [7, 4, 1, 8];
    expect(median(arr, arr.length)).toBe(5.5); // Median of [1, 4, 7, 8] is (4 + 7) / 2 = 5.5
  });

  it("should find the median in an array with duplicates (even length)", () => {
    const arr = [3, 3, 5, 5, 5, 1, 1, 1, 7, 7];
    expect(median(arr, arr.length)).toBe(4); // Median of sorted [1, 1, 1, 3, 3, 5, 5, 5, 7, 7] is (3 + 5) / 2 = 4
  });

  it("should find the median in an array with duplicates (odd length)", () => {
    const arr = [3, 3, 5, 5, 1, 1, 1, 7, 7];
    expect(median(arr, arr.length)).toBe(3); // Median of sorted [1, 1, 1, 3, 3, 5, 5, 7, 7] is 3
  });

  it("should handle an already sorted array (odd length)", () => {
    const arr = [1, 2, 3, 4, 5];
    expect(median(arr, arr.length)).toBe(3); // Median of [1, 2, 3, 4, 5] is 3
  });

  it("should handle an already sorted array (even length)", () => {
    const arr = [1, 2, 3, 4, 5, 6];
    expect(median(arr, arr.length)).toBe(3.5); // Median of [1, 2, 3, 4, 5, 6] is (3 + 4) / 2 = 3.5
  });

  it("should handle a reverse sorted array (odd length)", () => {
    const arr = [5, 4, 3, 2, 1];
    expect(median(arr, arr.length)).toBe(3); // Median of [1, 2, 3, 4, 5] is 3
  });

  it("should handle a reverse sorted array (even length)", () => {
    const arr = [6, 5, 4, 3, 2, 1];
    expect(median(arr, arr.length)).toBe(3.5); // Median of [1, 2, 3, 4, 5, 6] is (3 + 4) / 2 = 3.5
  });

  it("should return the element in a single-element array", () => {
    const arr = [42];
    expect(median(arr, arr.length)).toBe(42); // Single element is the median
  });

  it("should handle an array with negative numbers", () => {
    const arr = [-5, -1, -10, -3, -7];
    expect(median(arr, arr.length)).toBe(-5); // Median of sorted [-10, -7, -5, -3, -1] is -5
  });

  it("should handle an array with both positive and negative numbers", () => {
    const arr = [10, -3, 5, 0, -10, 8];
    expect(median(arr, arr.length)).toBe(2.5); // Median of sorted [-10, -3, 0, 5, 8, 10] is (0 + 5) / 2 = 2.5
  });

  it("should find the median in an array with duplicates (all the same)", () => {
    const arr = [3, 3, 3, 3, 3];
    expect(median(arr, arr.length)).toBe(3); // Median of [3, 3, 3, 3, 3] is 3
  });

  it("should handle an array with float values", () => {
    const arr = [1.5, 2.7, 3.2, 4.8, 5.1];
    expect(median(arr, arr.length)).toBe(3.2); // Median of sorted [1.5, 2.7, 3.2, 4.8, 5.1] is 3.2
  });

  it("should handle an array with all negative numbers", () => {
    const arr = [-10, -20, -30, -40, -50];
    expect(median(arr, arr.length)).toBe(-30); // Median of sorted [-50, -40, -30, -20, -10] is -30
  });

  it("should return 0 for an array with all zeroes", () => {
    const arr = [0, 0, 0, 0, 0];
    expect(median(arr, arr.length)).toBe(0); // Median of [0, 0, 0, 0, 0] is 0
  });

  it("should handle a mixed array of positive, negative, and zero values", () => {
    const arr = [0, 1, -1, 5, -5];
    expect(median(arr, arr.length)).toBe(0); // Median of sorted [-5, -1, 0, 1, 5] is 0
  });

  it("should handle a large array", () => {
    const arr = Array.from({ length: 10001 }, (_, i) => i + 1); // [1, 2, 3, ..., 10001]
    expect(median(arr, arr.length)).toBe(5001); // Median of [1, 2, 3, ..., 10001] is 5001
  });

  it("should run in roughly linear time", () => {
    function generateRandomArray(size: number): number[] {
      return Array.from({ length: size }, () =>
        Math.floor(Math.random() * size),
      );
    }

    // In MS
    function measureExecutionTime(
      size: number,
      iterations: number = 3,
    ): number {
      let totalTime: number = 0;
      for (let i = 0; i < iterations; i++) {
        const arr = generateRandomArray(size);
        const start = performance.now();
        median(arr, arr.length);
        totalTime += performance.now() - start;
      }
      return totalTime / iterations;
    }

    function testmedianPerformance(): {
      sizes: number[];
      times: number[];
    } {
      const sizes = [
        1000, 11000, 21000, 31000, 41000, 51000, 61000, 71000, 81000, 91000,
        101000, 111000, 121000, 131000, 141000, 151000, 161000, 171000, 181000,
        191000, 201000, 211000, 221000, 231000, 241000, 251000, 261000, 271000,
        281000, 291000, 301000, 311000, 321000, 331000, 341000, 351000, 361000,
        371000, 381000, 391000, 401000, 411000, 421000, 431000, 441000, 451000,
        461000, 471000, 481000, 491000, 501000, 511000, 521000, 531000, 541000,
        551000, 561000, 571000, 581000, 591000, 601000, 611000, 621000, 631000,
        641000, 651000, 661000, 671000, 681000, 691000, 701000, 711000, 721000,
        731000, 741000, 751000, 761000, 771000, 781000, 791000, 801000, 811000,
        821000, 831000, 841000, 851000, 861000, 871000, 881000, 891000, 901000,
        911000, 921000, 931000, 941000, 951000, 961000, 971000, 981000, 991000,
        1001000,
      ];
      const times = sizes.map((size) => measureExecutionTime(size));
      return { sizes, times };
    }

    const { sizes, times } = testmedianPerformance();

    // Create data pairs for linear regression (size vs. time)
    const data = sizes.map((size, i) => [size, times[i]] as [number, number]);

    // Apply linear regression
    const linearRegression = new SimpleLinearRegression();
    linearRegression.train(data);

    // Calculate R^2 (coefficient of determination)
    const rSquared = linearRegression.rSquared(data);

    // Assert that R^2 is greater than or equal to 0.8
    expect(rSquared).toBeGreaterThanOrEqual(0.8);
  });
});
