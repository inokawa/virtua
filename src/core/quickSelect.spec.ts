import { describe, it, expect } from "vitest";
import { quickSelect } from "./quickSelect";

describe("quickSelect (handles even and odd length arrays)", () => {
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

  it("should find the median in an odd-length array", () => {
    const arr = [3, 1, 2];
    expect(quickSelect(arr, arr.length)).toBe(2);
  });

  it("should find the median in an even-length array", () => {
    const arr = [7, 4, 1, 8];
    expect(quickSelect(arr, arr.length)).toBe(5.5); // Median of [1, 4, 7, 8] is (4 + 7) / 2 = 5.5
  });

  it("should find the median in an array with duplicates (even length)", () => {
    const arr = [3, 3, 5, 5, 5, 1, 1, 1, 7, 7];
    expect(quickSelect(arr, arr.length)).toBe(4); // Median of sorted [1, 1, 1, 3, 3, 5, 5, 5, 7, 7] is (3 + 5) / 2 = 4
  });

  it("should find the median in an array with duplicates (odd length)", () => {
    const arr = [3, 3, 5, 5, 1, 1, 1, 7, 7];
    expect(quickSelect(arr, arr.length)).toBe(3); // Median of sorted [1, 1, 1, 3, 3, 5, 5, 7, 7] is 3
  });

  it("should handle an already sorted array (odd length)", () => {
    const arr = [1, 2, 3, 4, 5];
    expect(quickSelect(arr, arr.length)).toBe(3); // Median of [1, 2, 3, 4, 5] is 3
  });

  it("should handle an already sorted array (even length)", () => {
    const arr = [1, 2, 3, 4, 5, 6];
    expect(quickSelect(arr, arr.length)).toBe(3.5); // Median of [1, 2, 3, 4, 5, 6] is (3 + 4) / 2 = 3.5
  });

  it("should handle a reverse sorted array (odd length)", () => {
    const arr = [5, 4, 3, 2, 1];
    expect(quickSelect(arr, arr.length)).toBe(3); // Median of [1, 2, 3, 4, 5] is 3
  });

  it("should handle a reverse sorted array (even length)", () => {
    const arr = [6, 5, 4, 3, 2, 1];
    expect(quickSelect(arr, arr.length)).toBe(3.5); // Median of [1, 2, 3, 4, 5, 6] is (3 + 4) / 2 = 3.5
  });

  it("should return the element in a single-element array", () => {
    const arr = [42];
    expect(quickSelect(arr, arr.length)).toBe(42); // Single element is the median
  });

  it("should handle an array with negative numbers", () => {
    const arr = [-5, -1, -10, -3, -7];
    expect(quickSelect(arr, arr.length)).toBe(-5); // Median of sorted [-10, -7, -5, -3, -1] is -5
  });

  it("should handle an array with both positive and negative numbers", () => {
    const arr = [10, -3, 5, 0, -10, 8];
    expect(quickSelect(arr, arr.length)).toBe(2.5); // Median of sorted [-10, -3, 0, 5, 8, 10] is (0 + 5) / 2 = 2.5
  });

  it("should find the median in an array with duplicates (all the same)", () => {
    const arr = [3, 3, 3, 3, 3];
    expect(quickSelect(arr, arr.length)).toBe(3); // Median of [3, 3, 3, 3, 3] is 3
  });

  it("should handle an array with float values", () => {
    const arr = [1.5, 2.7, 3.2, 4.8, 5.1];
    expect(quickSelect(arr, arr.length)).toBe(3.2); // Median of sorted [1.5, 2.7, 3.2, 4.8, 5.1] is 3.2
  });

  it("should handle an array with all negative numbers", () => {
    const arr = [-10, -20, -30, -40, -50];
    expect(quickSelect(arr, arr.length)).toBe(-30); // Median of sorted [-50, -40, -30, -20, -10] is -30
  });

  it("should return 0 for an array with all zeroes", () => {
    const arr = [0, 0, 0, 0, 0];
    expect(quickSelect(arr, arr.length)).toBe(0); // Median of [0, 0, 0, 0, 0] is 0
  });

  it("should handle a mixed array of positive, negative, and zero values", () => {
    const arr = [0, 1, -1, 5, -5];
    expect(quickSelect(arr, arr.length)).toBe(0); // Median of sorted [-5, -1, 0, 1, 5] is 0
  });

  it("should handle a large array", () => {
    const arr = Array.from({ length: 10001 }, (_, i) => i + 1); // [1, 2, 3, ..., 10001]
    expect(quickSelect(arr, arr.length)).toBe(5001); // Median of [1, 2, 3, ..., 10001] is 5001
  });

  it("should run in roughly linear time", () => {
    function generateRandomArray(size: number): number[] {
      return Array.from({ length: size }, () =>
        Math.floor(Math.random() * size),
      );
    }

    function measureExecutionTime(
      size: number,
      // ~25 iterations is enough to average out the data so that we can reasonably check if it is running in linear time.
      iterations: number = 25,
    ): number {
      const times = [];
      for (let i = 0; i < iterations; i++) {
        const arr = generateRandomArray(size);
        const start = performance.now();
        quickSelect(arr, arr.length);
        const end = performance.now();
        times.push(end - start);
      }
      // Return the average execution time
      return times.reduce((a, b) => a + b, 0) / times.length;
    }

    function testQuickSelectPerformance(): {
      sizes: number[];
      times: number[];
    } {
      const sizes = [
        10000, 20000, 30000, 40000, 50000, 60000, 70000, 80000, 90000, 100000,
      ];
      const times = sizes.map((size) => measureExecutionTime(size));
      return { sizes, times };
    }

    const { sizes, times } = testQuickSelectPerformance();

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
