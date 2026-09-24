import { describe, it, expect } from "vitest";
import { createListLayout } from "./list.js";

const range = <T>(length: number, cb: (i: number) => T): T[] => {
  const array: T[] = [];
  for (let i = 0; i < length; i++) {
    array.push(cb(i));
  }
  return array;
};

const sum = (values: readonly number[]): number => {
  return values.reduce((acc, c) => acc + c, 0);
};

const initLayoutWithSizes = (sizes: readonly number[], defaultSize: number) => {
  const layout = createListLayout(sizes.length, defaultSize, [
    sizes.slice(),
    defaultSize,
  ]);
  layout.$getTotalSize();
  return layout;
};

describe("initialize", () => {
  it("should use the item size as the default size", () => {
    const itemLength = 10;
    const layout = createListLayout(itemLength, 23);
    const snapshot = layout.$snapshot();
    expect(snapshot).toMatchInlineSnapshot(`
      [
        [
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
        ],
        23,
      ]
    `);
    expect(layout.$getLength()).toBe(itemLength);
    expect(snapshot[0].length).toBe(itemLength);
    expect(layout.$getTotalSize()).toBe(23 * itemLength);
  });

  it("should not estimate the default size with the item size", () => {
    expect(createListLayout(10, 23).$isEstimating()).toBe(false);
    expect(createListLayout(10).$isEstimating()).toBe(true);
  });

  it("should restore the sizes and the default size from the snapshot", () => {
    const itemLength = 10;
    const layout = createListLayout(itemLength, 123, [
      [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      123,
    ]);
    const snapshot = layout.$snapshot();
    expect(snapshot).toMatchInlineSnapshot(`
      [
        [
          0,
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
        ],
        123,
      ]
    `);
    expect(layout.$getLength()).toBe(itemLength);
    expect(snapshot[0].length).toBe(itemLength);
    expect(layout.$getTotalSize()).toBe(sum([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]));
  });

  it("should fill the sizes if the snapshot is shorter", () => {
    const itemLength = 10;
    const layout = createListLayout(itemLength, 123, [[0, 1, 2, 3, 4], 123]);
    const snapshot = layout.$snapshot();
    expect(snapshot).toMatchInlineSnapshot(`
      [
        [
          0,
          1,
          2,
          3,
          4,
          -1,
          -1,
          -1,
          -1,
          -1,
        ],
        123,
      ]
    `);
    expect(layout.$getLength()).toBe(itemLength);
    expect(snapshot[0].length).toBe(itemLength);
    expect(layout.$getTotalSize()).toBe(sum([0, 1, 2, 3, 4]) + 123 * 5);
  });

  it("should drop the sizes if the snapshot is longer", () => {
    const itemLength = 10;
    const layout = createListLayout(itemLength, 123, [
      [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      123,
    ]);
    const snapshot = layout.$snapshot();
    expect(snapshot).toMatchInlineSnapshot(`
      [
        [
          0,
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
        ],
        123,
      ]
    `);
    expect(layout.$getLength()).toBe(itemLength);
    expect(snapshot[0].length).toBe(itemLength);
    expect(layout.$getTotalSize()).toBe(sum([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]));
  });
});

describe("snapshot", () => {
  it("should return the measured sizes and the default size", () => {
    const layout = createListLayout(4, 40);
    layout.$resize([[1, 10]], () => false, 0, 0);
    layout.$resize([[2, 20]], () => false, 0, 0);
    expect(layout.$snapshot()).toEqual([[-1, 10, 20, -1], 40]);
  });

  it("should return a copy", () => {
    const layout = initLayoutWithSizes(
      range(10, (i) => (i + 1) * 10),
      40,
    );
    const snapshot = layout.$snapshot();
    const clonedSnapshot = structuredClone(snapshot);
    snapshot[0][0] = 999;
    snapshot[1] = 123;
    expect(snapshot).not.toEqual(clonedSnapshot);
    expect(layout.$snapshot()).toEqual(clonedSnapshot);
  });
});

describe("setLength", () => {
  it("should increase cache length with shifting", () => {
    const layout = createListLayout(10, 40);
    const initialTotalSize = layout.$getTotalSize();
    const res = layout.$setLength(15, true);
    expect(res).toEqual(40 * 5);
    expect(layout.$snapshot()).toMatchInlineSnapshot(`
      [
        [
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
        ],
        40,
      ]
    `);
    expect(layout.$getTotalSize()).toBe(initialTotalSize + res);
  });

  it("should increase filled cache length with shifting", () => {
    const sizes = range(10, (i) => (i + 1) * 10);
    const layout = initLayoutWithSizes(sizes, 40);
    const initialTotalSize = layout.$getTotalSize();
    const res = layout.$setLength(15, true);
    expect(res).toEqual(40 * 5);
    expect(layout.$snapshot()).toMatchInlineSnapshot(`
      [
        [
          -1,
          -1,
          -1,
          -1,
          -1,
          10,
          20,
          30,
          40,
          50,
          60,
          70,
          80,
          90,
          100,
        ],
        40,
      ]
    `);
    expect(layout.$getTotalSize()).toBe(initialTotalSize + res);
  });

  it("should decrease cache length with shifting", () => {
    const layout = createListLayout(10, 40);
    const initialTotalSize = layout.$getTotalSize();
    const res = layout.$setLength(5, true);
    expect(res).toEqual(-(40 * 5));
    expect(layout.$snapshot()).toMatchInlineSnapshot(`
      [
        [
          -1,
          -1,
          -1,
          -1,
          -1,
        ],
        40,
      ]
    `);
    expect(layout.$getTotalSize()).toBe(initialTotalSize + res);
  });

  it("should decrease filled cache length with shifting", () => {
    const sizes = range(10, (i) => (i + 1) * 10);
    const layout = initLayoutWithSizes(sizes, 40);
    const initialTotalSize = layout.$getTotalSize();
    const res = layout.$setLength(5, true);
    expect(res).toEqual(-sum(sizes.slice(0, 5)));
    expect(layout.$snapshot()).toMatchInlineSnapshot(`
      [
        [
          60,
          70,
          80,
          90,
          100,
        ],
        40,
      ]
    `);
    expect(layout.$getTotalSize()).toBe(initialTotalSize + res);
  });
});
