import { describe, it, expect } from "vitest";
import { createGridLayout } from "./layouts/grid.js";
import { createGridPlan, type GridPlan, type GridRowState } from "./grid.js";

const rowStates = (plan: GridPlan): ReadonlyMap<number, GridRowState> =>
  new Map(
    plan.$groups
      .flatMap((g) => ("$rows" in g ? g.$rows : [g]))
      .map((r) => [r.$row, r]),
  );

const renderedCells = (states: ReadonlyMap<number, GridRowState>): string[] =>
  [...states].flatMap(([rowIndex, { $cells }]) =>
    $cells.map((c) => rowIndex + "/" + c.$col),
  );

const cell = (
  states: ReadonlyMap<number, GridRowState>,
  rowIndex: number,
  colIndex: number,
) => states.get(rowIndex)!.$cells.find((c) => c.$col === colIndex)!;

describe("rendered cells", () => {
  it("should render the cells in the ranges and the pinned ones", () => {
    const states = rowStates(
      createGridPlan(
        createGridLayout(10, 40),
        createGridLayout(5, 100),
        [3, 4],
        [2, 2],
        { start: 1, end: 1 },
        { start: 1, end: 1 },
      ),
    );
    expect(renderedCells(states)).toEqual([
      "0/0",
      "0/2",
      "0/4",
      "3/0",
      "3/2",
      "3/4",
      "4/0",
      "4/2",
      "4/4",
      "9/0",
      "9/2",
      "9/4",
    ]);
  });

  it("should group only the rows pinned to each edge", () => {
    const plan = createGridPlan(
      createGridLayout(10, 40),
      createGridLayout(5, 100),
      [3, 4],
      [0, 4],
      { start: 1, end: 1 },
      undefined,
    );
    expect(
      plan.$groups.map((g) =>
        "$rows" in g ? [g.$key, g.$rows.map((r) => r.$row)] : g.$row,
      ),
    ).toEqual([[-1, [0]], 3, 4, [-2, [9]]]);
    expect(
      createGridPlan(
        createGridLayout(10, 40),
        createGridLayout(5, 100),
        [3, 4],
        [0, 4],
        undefined,
        undefined,
      ).$groups.some((g) => "$rows" in g),
    ).toBe(false);
  });

  it("should render every cell once when the pinned counts exceed the grid", () => {
    const states = rowStates(
      createGridPlan(
        createGridLayout(2, 40),
        createGridLayout(2, 100),
        [0, 1],
        [0, 1],
        5,
        5,
      ),
    );
    expect(renderedCells(states)).toEqual(["0/0", "0/1", "1/0", "1/1"]);
  });

  it("should clamp the pinned end to the rest of the pinned start", () => {
    const states = rowStates(
      createGridPlan(
        createGridLayout(3, 40),
        createGridLayout(3, 100),
        [0, 2],
        [0, 2],
        { start: 2, end: 2 },
        { start: 2, end: 2 },
      ),
    );
    expect(renderedCells(states)).toEqual([
      "0/0",
      "0/1",
      "0/2",
      "1/0",
      "1/1",
      "1/2",
      "2/0",
      "2/1",
      "2/2",
    ]);
  });

  it("should render nothing without rows or columns", () => {
    expect(
      rowStates(
        createGridPlan(
          createGridLayout(0, 40),
          createGridLayout(5, 100),
          [0, -1],
          [0, 4],
          undefined,
          undefined,
        ),
      ).size,
    ).toBe(0);
    expect(
      rowStates(
        createGridPlan(
          createGridLayout(5, 40),
          createGridLayout(0, 100),
          [0, 4],
          [0, -1],
          undefined,
          undefined,
        ),
      ).size,
    ).toBe(0);
  });

  it("should render only the pinned cells before the viewport is measured", () => {
    const states = rowStates(
      createGridPlan(
        createGridLayout(10, 40),
        createGridLayout(5, 100),
        [0, -1],
        [0, -1],
        1,
        1,
      ),
    );
    expect(renderedCells(states)).toEqual(["0/0"]);
  });
});

describe("spans", () => {
  it("should skip the covered cells and give the spans to the origin", () => {
    const states = rowStates(
      createGridPlan(
        createGridLayout(10, 40),
        createGridLayout(5, 100),
        [0, 3],
        [0, 4],
        undefined,
        undefined,
        [{ rowIndex: 1, colIndex: 1, rowSpan: 2, colSpan: 3 }],
      ),
    );
    expect(states.get(1)!.$cells.map((c) => c.$col)).toEqual([0, 1, 4]);
    expect(states.get(2)!.$cells.map((c) => c.$col)).toEqual([0, 4]);
    expect(cell(states, 1, 1).$rowSpan).toBe(2);
    expect(cell(states, 1, 1).$colSpan).toBe(3);
    expect(cell(states, 0, 0).$rowSpan).toBe(undefined);
    expect(cell(states, 0, 0).$colSpan).toBe(undefined);
  });

  it("should render the origin of a span from before the ranges", () => {
    const states = rowStates(
      createGridPlan(
        createGridLayout(100, 40),
        createGridLayout(20, 100),
        [50, 51],
        [10, 12],
        undefined,
        undefined,
        [
          { rowIndex: 45, colIndex: 12, rowSpan: 10 },
          { rowIndex: 50, colIndex: 8, colSpan: 4 },
        ],
      ),
    );
    expect([...states.keys()]).toEqual([45, 50, 51]);
    expect(states.get(45)!.$cells.map((c) => c.$col)).toEqual([12]);
    expect(states.get(50)!.$cells.map((c) => c.$col)).toEqual([8]);
    expect(states.get(51)!.$cells.map((c) => c.$col)).toEqual([10, 11]);
  });

  it("should ignore the spans outside the ranges", () => {
    const states = rowStates(
      createGridPlan(
        createGridLayout(100, 40),
        createGridLayout(5, 100),
        [50, 51],
        [0, 4],
        undefined,
        undefined,
        [
          { rowIndex: 10, colIndex: 0, rowSpan: 5 },
          { rowIndex: 70, colIndex: 0, rowSpan: 5 },
        ],
      ),
    );
    expect([...states.keys()]).toEqual([50, 51]);
    expect(states.get(50)!.$cells.map((c) => c.$col)).toEqual([0, 1, 2, 3, 4]);
  });

  it("should ignore the invalid spans and clamp the spans to the grid", () => {
    const states = rowStates(
      createGridPlan(
        createGridLayout(5, 40),
        createGridLayout(5, 100),
        [0, 4],
        [0, 4],
        undefined,
        undefined,
        [
          { rowIndex: 0, colIndex: 0 },
          { rowIndex: 0, colIndex: 10, colSpan: 2 },
          { rowIndex: 3, colIndex: 3, rowSpan: 10, colSpan: 10 },
        ],
      ),
    );
    expect(cell(states, 0, 0).$rowSpan).toBe(undefined);
    expect(states.get(0)!.$cells.map((c) => c.$col)).toEqual([0, 1, 2, 3, 4]);
    expect(states.get(1)!.$cells.map((c) => c.$col)).toEqual([0, 1, 2, 3, 4]);
    expect(cell(states, 3, 3).$rowSpan).toBe(2);
    expect(cell(states, 3, 3).$colSpan).toBe(2);
    expect(states.get(4)!.$cells.map((c) => c.$col)).toEqual([0, 1, 2]);
  });

  it("should ignore the spans left out of the grid", () => {
    const states = rowStates(
      createGridPlan(
        createGridLayout(5, 40),
        createGridLayout(5, 100),
        [0, 4],
        [0, 4],
        { end: 1 },
        { end: 1 },
        [
          { rowIndex: 0, colIndex: 10, rowSpan: 3 },
          { rowIndex: 10, colIndex: 0, colSpan: 3 },
        ],
      ),
    );
    expect(renderedCells(states)).toHaveLength(25);
    for (const [, { $cells }] of states) {
      for (const cell of $cells) {
        expect(cell.$rowSpan).toBe(undefined);
        expect(cell.$colSpan).toBe(undefined);
      }
    }
  });

  it("should not render a row whose cells are all covered", () => {
    const states = rowStates(
      createGridPlan(
        createGridLayout(5, 40),
        createGridLayout(2, 100),
        [0, 4],
        [0, 1],
        undefined,
        undefined,
        [{ rowIndex: 1, colIndex: 0, rowSpan: 2, colSpan: 2 }],
      ),
    );
    expect([...states.keys()]).toEqual([0, 1, 3, 4]);
  });
});

describe("keepMounted", () => {
  it("should render only the kept cells outside the ranges", () => {
    const states = rowStates(
      createGridPlan(
        createGridLayout(100, 40),
        createGridLayout(100, 100),
        [0, 1],
        [0, 1],
        undefined,
        undefined,
        undefined,
        [
          { rowIndex: 50, colIndex: 0 },
          { rowIndex: 0, colIndex: 50 },
          { rowIndex: 60, colIndex: 60 },
        ],
      ),
    );
    expect(renderedCells(states)).toEqual([
      "0/0",
      "0/1",
      "0/50",
      "1/0",
      "1/1",
      "50/0",
      "60/60",
    ]);
  });

  it("should not render a kept cell covered by a span", () => {
    const states = rowStates(
      createGridPlan(
        createGridLayout(10, 40),
        createGridLayout(5, 100),
        [0, 2],
        [0, 4],
        undefined,
        undefined,
        [{ rowIndex: 0, colIndex: 0, rowSpan: 2, colSpan: 2 }],
        [{ rowIndex: 1, colIndex: 1 }],
      ),
    );
    expect(states.get(1)!.$cells.map((c) => c.$col)).toEqual([2, 3, 4]);
  });

  it("should ignore the kept cells out of the grid", () => {
    const states = rowStates(
      createGridPlan(
        createGridLayout(100, 40),
        createGridLayout(100, 100),
        [0, 1],
        [0, 1],
        undefined,
        undefined,
        undefined,
        [{ rowIndex: 0, colIndex: 1000 }],
      ),
    );
    expect(renderedCells(states)).toEqual(["0/0", "0/1", "1/0", "1/1"]);
  });
});

describe("headers", () => {
  it("should render the header rows out of the range without pinning them", () => {
    const plan = createGridPlan(
      createGridLayout(100, 40),
      createGridLayout(3, 100),
      [50, 51],
      [0, 2],
      undefined,
      undefined,
      undefined,
      undefined,
      [0, 1],
    );
    const states = rowStates(plan);
    expect([...states.keys()]).toEqual([0, 1, 50, 51]);
    expect(plan.$groups.some((g) => "$rows" in g)).toBe(false);
  });

  it("should render the headers of every rendered cell", () => {
    const states = rowStates(
      createGridPlan(
        createGridLayout(100, 40),
        createGridLayout(50, 100),
        [10, 11],
        [30, 31],
        undefined,
        undefined,
        undefined,
        [{ rowIndex: 80, colIndex: 40 }],
        [0],
        [2],
      ),
    );
    expect(renderedCells(states)).toEqual([
      "0/2",
      "0/30",
      "0/31",
      "0/40",
      "10/2",
      "10/30",
      "10/31",
      "11/2",
      "11/30",
      "11/31",
      "80/2",
      "80/40",
    ]);
  });
});

describe("roles", () => {
  it("should make the rows pinned to the start the column headers unless the header rows are given", () => {
    const pinned = rowStates(
      createGridPlan(
        createGridLayout(5, 40),
        createGridLayout(3, 100),
        [0, 4],
        [0, 2],
        1,
        1,
      ),
    );
    expect(cell(pinned, 0, 1).$role).toBe("columnheader");
    // the pinned column is not a row header by itself
    expect(cell(pinned, 1, 0).$role).toBe("cell");

    const given = rowStates(
      createGridPlan(
        createGridLayout(5, 40),
        createGridLayout(3, 100),
        [0, 4],
        [0, 2],
        1,
        undefined,
        undefined,
        undefined,
        [2],
        [1],
      ),
    );
    expect(cell(given, 0, 0).$role).toBe("cell");
    expect(cell(given, 2, 0).$role).toBe("columnheader");
    // the column header wins over the row header
    expect(cell(given, 2, 1).$role).toBe("columnheader");
    expect(cell(given, 1, 1).$role).toBe("rowheader");
    expect(cell(given, 1, 2).$role).toBe("cell");
  });

  it("should sort only the given header cell", () => {
    const states = rowStates(
      createGridPlan(
        createGridLayout(5, 40),
        createGridLayout(3, 100),
        [0, 4],
        [0, 2],
        1,
        undefined,
        undefined,
        undefined,
        undefined,
        [0],
        { rowIndex: 0, colIndex: 1, order: "ascending" },
      ),
    );
    expect(cell(states, 0, 1).$sort).toBe("ascending");
    expect(cell(states, 0, 0).$sort).toBe(undefined);
    expect(cell(states, 1, 1).$sort).toBe(undefined);
    // a row header is sorted too, and a cell which is not a header is not
    expect(
      cell(
        rowStates(
          createGridPlan(
            createGridLayout(5, 40),
            createGridLayout(3, 100),
            [0, 4],
            [0, 2],
            1,
            undefined,
            undefined,
            undefined,
            undefined,
            [0],
            { rowIndex: 2, colIndex: 0, order: "descending" },
          ),
        ),
        2,
        0,
      ).$sort,
    ).toBe("descending");
    expect(
      cell(
        rowStates(
          createGridPlan(
            createGridLayout(5, 40),
            createGridLayout(3, 100),
            [0, 4],
            [0, 2],
            1,
            undefined,
            undefined,
            undefined,
            undefined,
            [0],
            { rowIndex: 2, colIndex: 1, order: "other" },
          ),
        ),
        2,
        1,
      ).$sort,
    ).toBe(undefined);
  });
});

describe("measurement", () => {
  it("should measure an auto row by its first rendered cell without a row span", () => {
    const states = rowStates(
      createGridPlan(
        createGridLayout(5, "auto"),
        createGridLayout(3, 100),
        [0, 4],
        [0, 2],
        undefined,
        undefined,
        [{ rowIndex: 1, colIndex: 0, rowSpan: 2 }],
      ),
    );
    expect(cell(states, 0, 0).$measureRow).toBe(0);
    expect(cell(states, 0, 1).$measureRow).toBe(undefined);
    expect(cell(states, 1, 0).$measureRow).toBe(undefined);
    expect(cell(states, 1, 1).$measureRow).toBe(1);
    expect(cell(states, 2, 1).$measureRow).toBe(2);
    expect(cell(states, 0, 0).$measureCol).toBe(undefined);
  });

  it("should measure an auto column by its first rendered cell without a column span", () => {
    const states = rowStates(
      createGridPlan(
        createGridLayout(5, 40),
        createGridLayout(3, "auto"),
        [0, 4],
        [0, 2],
        undefined,
        undefined,
        [{ rowIndex: 0, colIndex: 1, colSpan: 2 }],
      ),
    );
    expect(cell(states, 0, 0).$measureCol).toBe(0);
    expect(cell(states, 0, 1).$measureCol).toBe(undefined);
    expect(cell(states, 1, 0).$measureCol).toBe(undefined);
    expect(cell(states, 1, 1).$measureCol).toBe(1);
    expect(cell(states, 1, 2).$measureCol).toBe(2);
    expect(cell(states, 0, 0).$measureRow).toBe(undefined);
  });

  it("should measure only the auto tracks of a key axis", () => {
    const states = rowStates(
      createGridPlan(
        createGridLayout([{ h: 30 }, { h: undefined }, { h: "auto" }], "h"),
        createGridLayout(2, 100),
        [0, 2],
        [0, 1],
        undefined,
        undefined,
      ),
    );
    expect(cell(states, 0, 0).$measureRow).toBe(undefined);
    expect(cell(states, 1, 0).$measureRow).toBe(1);
    expect(cell(states, 2, 0).$measureRow).toBe(2);
  });
});

describe("previous states", () => {
  const rows = createGridLayout(100, 40);
  const cols = createGridLayout(10, "auto");

  it("should keep the states whose values are unchanged", () => {
    const prev = rowStates(
      createGridPlan(rows, cols, [0, 3], [0, 4], undefined, undefined),
    );
    const next = rowStates(
      createGridPlan(rows, cols, [0, 3], [0, 4], undefined, undefined),
    );
    for (const [rowIndex, row] of next) {
      expect(row).toBe(prev.get(rowIndex));
    }
  });

  it("should keep the rows rendered in both ranges", () => {
    const prev = rowStates(
      createGridPlan(rows, cols, [0, 3], [0, 4], undefined, undefined),
    );
    const next = rowStates(
      createGridPlan(rows, cols, [1, 4], [0, 4], undefined, undefined),
    );
    // the columns move their measurement from the removed first row
    expect(next.get(1)).not.toBe(prev.get(1));
    expect(next.get(2)).toBe(prev.get(2));
    expect(next.get(3)).toBe(prev.get(3));
  });

  it("should replace only the rows affected by a span", () => {
    const prev = rowStates(
      createGridPlan(rows, cols, [0, 3], [0, 4], undefined, undefined),
    );
    const next = rowStates(
      createGridPlan(rows, cols, [0, 3], [0, 4], undefined, undefined, [
        { rowIndex: 2, colIndex: 0, colSpan: 2 },
      ]),
    );
    expect(next.get(1)).toBe(prev.get(1));
    expect(next.get(2)).not.toBe(prev.get(2));
    expect(cell(next, 2, 4)).toBe(cell(prev, 2, 4));
    expect(next.get(3)).toBe(prev.get(3));
  });

  it("should replace only the header cells whose sort changed", () => {
    const sorted = (colIndex: number) =>
      rowStates(
        createGridPlan(
          rows,
          cols,
          [0, 3],
          [0, 4],
          1,
          undefined,
          undefined,
          undefined,
          undefined,
          undefined,
          { rowIndex: 0, colIndex, order: "ascending" },
        ),
      );
    const prev = sorted(1);
    const next = sorted(2);
    expect(next.get(0)).not.toBe(prev.get(0));
    expect(cell(next, 0, 0)).toBe(cell(prev, 0, 0));
    expect(cell(next, 0, 1)).not.toBe(cell(prev, 0, 1));
    expect(cell(next, 0, 2)).not.toBe(cell(prev, 0, 2));
    expect(next.get(1)).toBe(prev.get(1));
  });
});

describe("spans starting out of the ranges", () => {
  it("should span the headers rendered out of the ranges", () => {
    const states = rowStates(
      createGridPlan(
        createGridLayout(100, 40),
        createGridLayout(50, 100),
        [50, 51],
        [30, 32],
        undefined,
        undefined,
        [
          { rowIndex: 0, colIndex: 30, colSpan: 3 },
          { rowIndex: 40, colIndex: 0, rowSpan: 20 },
        ],
        undefined,
        [0],
        [0],
      ),
    );
    // the header row is rendered for the rendered columns, with the span over them
    expect(states.get(0)!.$cells.map((c) => c.$col)).toEqual([0, 30]);
    expect(cell(states, 0, 30).$colSpan).toBe(3);
    // the row header column is rendered for the rendered rows, covered by the span from the origin out of the ranges
    expect(cell(states, 40, 0).$rowSpan).toBe(20);
    expect(renderedCells(states).filter((c) => c.endsWith("/0"))).toEqual([
      "0/0",
      "40/0",
    ]);
  });

  it("should span a kept cell at the origin, and cover a kept cell by a span from out of the ranges", () => {
    const states = rowStates(
      createGridPlan(
        createGridLayout(100, 40),
        createGridLayout(20, 100),
        [50, 51],
        [10, 12],
        undefined,
        undefined,
        [
          { rowIndex: 80, colIndex: 0, colSpan: 3 },
          { rowIndex: 45, colIndex: 12, rowSpan: 10 },
        ],
        [
          { rowIndex: 80, colIndex: 0 },
          { rowIndex: 47, colIndex: 12 },
        ],
      ),
    );
    expect(cell(states, 80, 0).$colSpan).toBe(3);
    expect(cell(states, 45, 12).$rowSpan).toBe(10);
    expect(renderedCells(states)).not.toContain("47/12");
  });

  it("should span the cells rendered for the origin of the other span", () => {
    const states = rowStates(
      createGridPlan(
        createGridLayout(3, 40),
        createGridLayout(9, 100),
        [0, 2],
        [5, 8],
        2,
        undefined,
        [
          { rowIndex: 0, colIndex: 0, rowSpan: 2 },
          { rowIndex: 2, colIndex: 0, colSpan: 9 },
        ],
      ),
    );
    expect(cell(states, 0, 0).$rowSpan).toBe(2);
    expect(cell(states, 2, 0).$colSpan).toBe(9);
    expect(renderedCells(states)).not.toContain("1/0");
  });

  it("should cover the header rendered at the origin of the other span by the span laid before", () => {
    const states = rowStates(
      createGridPlan(
        createGridLayout(5, 40),
        createGridLayout(9, 100),
        [0, 4],
        [5, 8],
        1,
        undefined,
        [
          { rowIndex: 0, colIndex: 0, colSpan: 9 },
          { rowIndex: 2, colIndex: 3, colSpan: 3 },
        ],
      ),
    );
    expect(cell(states, 0, 0).$colSpan).toBe(9);
    expect(cell(states, 2, 3).$colSpan).toBe(3);
    expect(renderedCells(states)).not.toContain("0/3");
  });

  it("should not render a span over the body only at the origin of the other span", () => {
    const states = rowStates(
      createGridPlan(
        createGridLayout(5, 40),
        createGridLayout(9, 100),
        [0, 4],
        [5, 8],
        1,
        undefined,
        [
          { rowIndex: 2, colIndex: 3, colSpan: 3 },
          { rowIndex: 3, colIndex: 3, colSpan: 2 },
        ],
      ),
    );
    expect(renderedCells(states)).not.toContain("3/3");
  });

  it("should not render a span over the end out of the ranges", () => {
    const states = rowStates(
      createGridPlan(
        createGridLayout(100, 40),
        createGridLayout(5, 100),
        [0, 5],
        [0, 4],
        undefined,
        undefined,
        [{ rowIndex: 98, colIndex: 0, rowSpan: 5 }],
      ),
    );
    expect([...states.keys()]).not.toContain(98);
  });
});
