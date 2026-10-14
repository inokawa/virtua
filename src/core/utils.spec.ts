import { describe, it, expect } from "vitest";
import { clamp } from "./utils.js";

describe(clamp.name, () => {
  describe("not empty range", () => {
    it("should return the min if the value is below the range", () => {
      expect(clamp(-3, 0, 10)).toBe(0);
    });

    it("should return the value if the value is within the range", () => {
      expect(clamp(0, 0, 10)).toBe(0);
      expect(clamp(5, 0, 10)).toBe(5);
      expect(clamp(10, 0, 10)).toBe(10);
    });

    it("should return the max if the value is above the range", () => {
      expect(clamp(99, 0, 10)).toBe(10);
    });
  });

  describe("empty range", () => {
    it("should return the min if the value is below the max", () => {
      expect(clamp(0, 3, 1)).toBe(3);
    });

    it("should return the min if the value is between the max and the min", () => {
      expect(clamp(1, 3, 1)).toBe(3);
      expect(clamp(2, 3, 1)).toBe(3);
      expect(clamp(3, 3, 1)).toBe(3);
    });

    it("should return the min if the value is above the min", () => {
      expect(clamp(5, 3, 1)).toBe(3);
    });
  });
});
