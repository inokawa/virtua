import { describe, it, expect } from "vitest";
import { quickSelect } from "./quickSelect";

describe("quickSelect (handles even and odd length arrays)", () => {
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
});
