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
    const rowLayout = createGridLayout(10, 40);
    rowLayout.$setPinned(1, 1);
    const colLayout = createGridLayout(5, 100);
    colLayout.$setPinned(1, 1);
    const states = rowStates(
      createGridPlan(rowLayout, colLayout, [3, 4], [2, 2]),
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
    const rowLayout = createGridLayout(10, 40);
    rowLayout.$setPinned(1, 1);
    const plan = createGridPlan(
      rowLayout,
      createGridLayout(5, 100),
      [3, 4],
      [0, 4],
    );
    expect(
      plan.$groups.map((g) =>
        "$rows" in g ? [g.$key, g.$rows.map((r) => r.$row)] : g.$row,
      ),
    ).toEqual([[-1, [0]], 3, 4, [-2, [9]]]);
    const rowLayout2 = createGridLayout(20, 40);
    rowLayout2.$setPinned(1, 1);
    // the groups keep their keys while the rows are added
    expect(
      createGridPlan(
        rowLayout2,
        createGridLayout(5, 100),
        [3, 4],
        [0, 4],
      ).$groups.map((g) => ("$rows" in g ? g.$key : g.$row)),
    ).toEqual([-1, 3, 4, -2]);
    expect(
      createGridPlan(
        createGridLayout(10, 40),
        createGridLayout(5, 100),
        [3, 4],
        [0, 4],
      ).$groups.some((g) => "$rows" in g),
    ).toBe(false);
  });

  it("should render every cell once when the pinned counts exceed the grid", () => {
    const rowLayout = createGridLayout(2, 40);
    rowLayout.$setPinned(5);
    const colLayout = createGridLayout(2, 100);
    colLayout.$setPinned(5);
    const states = rowStates(
      createGridPlan(rowLayout, colLayout, [0, 1], [0, 1]),
    );
    expect(renderedCells(states)).toEqual(["0/0", "0/1", "1/0", "1/1"]);
  });

  it("should clamp the pinned end to the rest of the pinned start", () => {
    const rowLayout = createGridLayout(3, 40);
    rowLayout.$setPinned(2, 2);
    const colLayout = createGridLayout(3, 100);
    colLayout.$setPinned(2, 2);
    const states = rowStates(
      createGridPlan(rowLayout, colLayout, [0, 2], [0, 2]),
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
        ),
      ).size,
    ).toBe(0);
  });

  it("should render only the pinned cells before the viewport is measured", () => {
    const rowLayout = createGridLayout(10, 40);
    rowLayout.$setPinned(1);
    const colLayout = createGridLayout(5, 100);
    colLayout.$setPinned(1);
    const states = rowStates(
      createGridPlan(rowLayout, colLayout, [0, -1], [0, -1]),
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
    const rowLayout = createGridLayout(5, 40);
    rowLayout.$setPinned(undefined, 1);
    const colLayout = createGridLayout(5, 100);
    colLayout.$setPinned(undefined, 1);
    const states = rowStates(
      createGridPlan(rowLayout, colLayout, [0, 4], [0, 4], undefined, [
        { rowIndex: 0, colIndex: 10, rowSpan: 3 },
        { rowIndex: 10, colIndex: 0, colSpan: 3 },
      ]),
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
        [{ rowIndex: 0, colIndex: 0, rowSpan: 2, colSpan: 2 }],
        [{ rowIndex: 1, colIndex: 1 }],
      ),
    );
    expect(states.get(1)!.$cells.map((c) => c.$col)).toEqual([2, 3, 4]);
  });

  it("should render a kept cell pinned to the end once while the ranges are in the pinned end", () => {
    const rowLayout = createGridLayout(8, 40);
    rowLayout.$setPinned(undefined, 2);
    const colLayout = createGridLayout(8, 100);
    colLayout.$setPinned(undefined, 2);
    const plan = createGridPlan(
      rowLayout,
      colLayout,
      [7, 7],
      [7, 7],
      undefined,
      undefined,
      [{ rowIndex: 6, colIndex: 6 }],
    );
    expect(renderedCells(rowStates(plan))).toEqual([
      "6/6",
      "6/7",
      "7/6",
      "7/7",
    ]);
    expect(plan.$rowTemplate).toBe(
      "[l0] minmax(240px,auto) [l6] 40px [l7] 40px [l8]",
    );
    expect(plan.$colTemplate).toBe(
      "[l0] minmax(600px,auto) [l6] 100px [l7] 100px [l8]",
    );
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
        [{ rowIndex: 0, colIndex: 1000 }],
      ),
    );
    expect(renderedCells(states)).toEqual(["0/0", "0/1", "1/0", "1/1"]);
  });
});

describe("headers", () => {
  it("should render a kept cell out of the ranges without its headers and the pinned cells", () => {
    const rowLayout = createGridLayout(100, 40);
    rowLayout.$setPinned(1);
    const colLayout = createGridLayout(50, 100);
    colLayout.$setPinned(2);
    const states = rowStates(
      createGridPlan(
        rowLayout,
        colLayout,
        [10, 11],
        [30, 31],
        undefined,
        undefined,
        [{ rowIndex: 80, colIndex: 40 }],
      ),
    );
    expect(renderedCells(states)).toEqual([
      "0/0",
      "0/1",
      "0/30",
      "0/31",
      "10/0",
      "10/1",
      "10/30",
      "10/31",
      "11/0",
      "11/1",
      "11/30",
      "11/31",
      "80/40",
    ]);
  });
});

describe("roles", () => {
  it("should make the pinned rows the column headers and the last pinned column the row header", () => {
    const rowLayout = createGridLayout(5, 40);
    rowLayout.$setPinned(1, 1);
    const colLayout = createGridLayout(3, 100);
    colLayout.$setPinned(2);
    const states = rowStates(
      createGridPlan(rowLayout, colLayout, [0, 4], [0, 2]),
    );
    // the column header wins over the row header at the corner
    expect(cell(states, 0, 0).$role).toBe("columnheader");
    expect(cell(states, 0, 2).$role).toBe("columnheader");
    // the last pinned column is the row header
    expect(cell(states, 1, 0).$role).toBe("cell");
    expect(cell(states, 1, 1).$role).toBe("rowheader");
    expect(cell(states, 1, 2).$role).toBe("cell");
    // the footer rows are not the column headers
    expect(cell(states, 4, 1).$role).toBe("rowheader");
    expect(cell(states, 4, 2).$role).toBe("cell");
  });

  it("should sort only the given header cell", () => {
    const rowLayout = createGridLayout(5, 40);
    rowLayout.$setPinned(1);
    const colLayout = createGridLayout(3, 100);
    colLayout.$setPinned(1);
    const states = rowStates(
      createGridPlan(
        rowLayout,
        colLayout,
        [0, 4],
        [0, 2],
        undefined,
        undefined,
        undefined,
        { rowIndex: 0, colIndex: 1, order: "ascending" },
      ),
    );
    expect(cell(states, 0, 1).$sort).toBe("ascending");
    expect(cell(states, 0, 0).$sort).toBe(undefined);
    expect(cell(states, 1, 1).$sort).toBe(undefined);
    const rowLayout2 = createGridLayout(5, 40);
    rowLayout2.$setPinned(1);
    const colLayout2 = createGridLayout(3, 100);
    colLayout2.$setPinned(1);
    // a row header is sorted too, and a cell which is not a header is not
    expect(
      cell(
        rowStates(
          createGridPlan(
            rowLayout2,
            colLayout2,
            [0, 4],
            [0, 2],
            undefined,
            undefined,
            undefined,
            { rowIndex: 2, colIndex: 0, order: "descending" },
          ),
        ),
        2,
        0,
      ).$sort,
    ).toBe("descending");
    const rowLayout3 = createGridLayout(5, 40);
    rowLayout3.$setPinned(1);
    const colLayout3 = createGridLayout(3, 100);
    colLayout3.$setPinned(1);
    expect(
      cell(
        rowStates(
          createGridPlan(
            rowLayout3,
            colLayout3,
            [0, 4],
            [0, 2],
            undefined,
            undefined,
            undefined,
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
      ),
    );
    expect(cell(states, 0, 0).$measureRow).toBe(undefined);
    expect(cell(states, 1, 0).$measureRow).toBe(1);
    expect(cell(states, 2, 0).$measureRow).toBe(2);
  });
});

describe("previous states", () => {
  // The layouts are shared between the cases, so each of them sets the pinned tracks.
  const rows = createGridLayout(100, 40);
  const cols = createGridLayout(10, "auto");

  it("should keep the states whose values are unchanged", () => {
    rows.$setPinned();
    cols.$setPinned();
    const prev = rowStates(createGridPlan(rows, cols, [0, 3], [0, 4]));
    const next = rowStates(createGridPlan(rows, cols, [0, 3], [0, 4]));
    for (const [rowIndex, row] of next) {
      expect(row).toBe(prev.get(rowIndex));
    }
  });

  it("should keep the rows rendered in both ranges", () => {
    rows.$setPinned();
    cols.$setPinned();
    const prev = rowStates(createGridPlan(rows, cols, [0, 3], [0, 4]));
    const next = rowStates(createGridPlan(rows, cols, [1, 4], [0, 4]));
    // the columns move their measurement from the removed first row
    expect(next.get(1)).not.toBe(prev.get(1));
    expect(next.get(2)).toBe(prev.get(2));
    expect(next.get(3)).toBe(prev.get(3));
  });

  it("should replace only the rows affected by a span", () => {
    rows.$setPinned();
    cols.$setPinned();
    const prev = rowStates(createGridPlan(rows, cols, [0, 3], [0, 4]));
    const next = rowStates(
      createGridPlan(rows, cols, [0, 3], [0, 4], undefined, [
        { rowIndex: 2, colIndex: 0, colSpan: 2 },
      ]),
    );
    expect(next.get(1)).toBe(prev.get(1));
    expect(next.get(2)).not.toBe(prev.get(2));
    expect(cell(next, 2, 4)).toBe(cell(prev, 2, 4));
    expect(next.get(3)).toBe(prev.get(3));
  });

  it("should replace only the header cells whose sort changed", () => {
    rows.$setPinned(1);
    cols.$setPinned();
    const sorted = (colIndex: number) =>
      rowStates(
        createGridPlan(
          rows,
          cols,
          [0, 3],
          [0, 4],
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
    const colLayout = createGridLayout(50, 100);
    colLayout.$setPinned(1);
    const states = rowStates(
      createGridPlan(
        createGridLayout(100, 40),
        colLayout,
        [50, 51],
        [30, 32],
        [0],
        [
          { rowIndex: 0, colIndex: 30, colSpan: 3 },
          { rowIndex: 40, colIndex: 0, rowSpan: 20 },
        ],
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

  it("should not render the headers over a column rendered only for the origin of a span", () => {
    const rowLayout = createGridLayout(3, 40);
    rowLayout.$setPinned(2);
    const states = rowStates(
      createGridPlan(
        rowLayout,
        createGridLayout(9, 100),
        [0, 2],
        [5, 8],
        undefined,
        [
          { rowIndex: 0, colIndex: 0, rowSpan: 2 },
          { rowIndex: 2, colIndex: 0, colSpan: 9 },
        ],
      ),
    );
    expect(cell(states, 2, 0).$colSpan).toBe(9);
    expect(renderedCells(states)).not.toContain("0/0");
    expect(renderedCells(states)).not.toContain("1/0");
  });

  it("should cover the header rendered at the origin of the other span by the span laid before", () => {
    const rowLayout = createGridLayout(5, 40);
    rowLayout.$setPinned(1);
    const states = rowStates(
      createGridPlan(
        rowLayout,
        createGridLayout(9, 100),
        [0, 4],
        [5, 8],
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
    const rowLayout = createGridLayout(5, 40);
    rowLayout.$setPinned(1);
    const states = rowStates(
      createGridPlan(
        rowLayout,
        createGridLayout(9, 100),
        [0, 4],
        [5, 8],
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
        [{ rowIndex: 98, colIndex: 0, rowSpan: 5 }],
      ),
    );
    expect([...states.keys()]).not.toContain(98);
  });
});

describe("sections", () => {
  // The layouts are shared between the cases, so each of them sets the pinned tracks.
  const rows = createGridLayout(30, 40);
  const cols = createGridLayout(10, 100);
  const groupOf = (plan: GridPlan, key: number) => {
    const group = plan.$groups.find((g) => "$rows" in g && g.$key === key)!;
    return "$rows" in group ? group : undefined;
  };

  it("should group the rows of the sections and stick their headers under the pinned rows", () => {
    rows.$setPinned(1);
    cols.$setPinned();
    const plan = createGridPlan(rows, cols, [6, 8], [0, 2], [5, 15]);
    const states = rowStates(plan);
    expect([...states.keys()]).toEqual([0, 5, 6, 7, 8]);
    expect(plan.$groups.map((g) => ("$rows" in g ? g.$key : g.$row))).toEqual([
      -1, -8,
    ]);
    expect(groupOf(plan, -8)!.$rows.map((r) => r.$row)).toEqual([5, 6, 7, 8]);
    expect(groupOf(plan, -8)!.$style["gridRow"]).toBe("l5/l15");
    expect(groupOf(plan, -8)!.$style["position"]).toBe(undefined);
    expect(groupOf(plan, -1)!.$style["zIndex"]).toBe(4);
    expect(states.get(5)!.$style).toMatchObject({
      position: "sticky",
      top: "40px",
      zIndex: 3,
    });
    expect(states.get(6)!.$style["position"]).toBe(undefined);
    expect(plan.$rowTemplate).toContain("[l15]");
    expect(cell(states, 5, 0).$role).toBe("rowheader");
    expect(cell(states, 5, 1).$role).toBe("cell");
    expect(cell(states, 0, 0).$role).toBe("columnheader");
  });

  it("should make the cell of a section header in the row header column the row header", () => {
    rows.$setPinned(1);
    cols.$setPinned(2);
    const states = rowStates(createGridPlan(rows, cols, [6, 8], [0, 2], [5]));
    expect(cell(states, 5, 0).$role).toBe("cell");
    expect(cell(states, 5, 1).$role).toBe("rowheader");
    expect(cell(states, 6, 1).$role).toBe("rowheader");
  });

  it("should keep the rows before the first section out of the groups", () => {
    rows.$setPinned();
    cols.$setPinned();
    const plan = createGridPlan(rows, cols, [3, 6], [0, 2], [5]);
    expect(plan.$groups.map((g) => ("$rows" in g ? g.$key : g.$row))).toEqual([
      3, 4, -8,
    ]);
    expect(groupOf(plan, -8)!.$style["gridRow"]).toBe("l5/l30");
  });

  it("should render the section of a kept cell without its header", () => {
    rows.$setPinned();
    cols.$setPinned();
    const plan = createGridPlan(rows, cols, [1, 2], [5, 8], [15], undefined, [
      { rowIndex: 20, colIndex: 6 },
    ]);
    const states = rowStates(plan);
    expect(renderedCells(states)).toEqual([
      "1/5",
      "1/6",
      "1/7",
      "1/8",
      "2/5",
      "2/6",
      "2/7",
      "2/8",
      "20/6",
    ]);
    // the box of the section starts at its header, which has no cell
    expect(groupOf(plan, -18)!.$style["gridRow"]).toBe("l15/l30");
    expect(groupOf(plan, -18)!.$rows.map((r) => r.$row)).toEqual([20]);
    expect(plan.$rowTemplate).toContain("[l15]");
  });

  it("should render the columns in the range in the section header sticking over them", () => {
    rows.$setPinned(1);
    cols.$setPinned();
    const states = rowStates(
      createGridPlan(rows, cols, [7, 8], [5, 6], [5], undefined, [
        { rowIndex: 20, colIndex: 8 },
      ]),
    );
    expect(renderedCells(states)).toEqual([
      "0/5",
      "0/6",
      "5/5",
      "5/6",
      "7/5",
      "7/6",
      "8/5",
      "8/6",
      "20/8",
    ]);
  });

  it("should end the sections at the rows pinned to the end", () => {
    rows.$setPinned(undefined, 1);
    cols.$setPinned();
    const plan = createGridPlan(rows, cols, [26, 28], [0, 2], [25]);
    expect(groupOf(plan, -28)!.$style["gridRow"]).toBe("l25/l29");
    expect(groupOf(plan, -28)!.$rows.map((r) => r.$row)).toEqual([
      25, 26, 27, 28,
    ]);
  });

  it("should not render the last section header for the cells pinned to the end", () => {
    rows.$setPinned(undefined, 1);
    cols.$setPinned();
    const states = rowStates(
      createGridPlan(
        rows,
        cols,
        [1, 2],
        [0, 2],
        [15],
        [{ rowIndex: 29, colIndex: 0, colSpan: 2 }],
        [{ rowIndex: 29, colIndex: 5 }],
      ),
    );
    expect([...states.keys()]).toEqual([1, 2, 29]);
  });

  it("should replace the header row when it starts sticking", () => {
    rows.$setPinned();
    cols.$setPinned();
    const plain = rowStates(createGridPlan(rows, cols, [4, 6], [0, 2]));
    const sectioned = rowStates(
      createGridPlan(rows, cols, [4, 6], [0, 2], [5]),
    );
    expect(sectioned.get(4)).toBe(plain.get(4));
    expect(sectioned.get(5)).not.toBe(plain.get(5));
    expect(sectioned.get(6)).toBe(plain.get(6));
  });

  it("should take the section rows in the body in order", () => {
    rows.$setPinned(1, 1);
    cols.$setPinned();
    const plan = createGridPlan(rows, cols, [0, 29], [0, 2], [25, 5, 0, 29]);
    expect(plan.$groups.map((g) => ("$rows" in g ? g.$key : g.$row))).toEqual([
      -1, 1, 2, 3, 4, -8, -28, -2,
    ]);
    expect(groupOf(plan, -8)!.$style["gridRow"]).toBe("l5/l25");
    expect(groupOf(plan, -28)!.$style["gridRow"]).toBe("l25/l29");
  });

  it("should make the consecutive section rows the sections of their own", () => {
    const colLayout = createGridLayout(3, 100);
    colLayout.$setPinned(1);
    const plan = createGridPlan(
      createGridLayout(100, 40),
      colLayout,
      [50, 51],
      [1, 2],
      [0, 1, 1],
    );
    const states = rowStates(plan);
    // the header of the section at 0 is not rendered for the rows of the section at 1
    expect([...states.keys()]).toEqual([1, 50, 51]);
    expect(plan.$groups.map((g) => ("$rows" in g ? g.$key : g.$row))).toEqual([
      -4,
    ]);
    expect(states.get(1)!.$top).toBe(0);
    expect(cell(states, 1, 0).$role).toBe("rowheader");
    expect(cell(states, 50, 0).$role).toBe("rowheader");
  });

  it("should cut the tracks only at the ends of the rendered sections", () => {
    const sections = Array.from({ length: 100 }, (_, i) => i * 10);
    const plan = createGridPlan(
      createGridLayout(1000, 40),
      createGridLayout(3, 100),
      [55, 56],
      [0, 2],
      sections,
      undefined,
      [{ rowIndex: 500, colIndex: 0 }],
    );
    expect([...rowStates(plan).keys()]).toEqual([50, 55, 56, 500]);
    expect(plan.$groups.map((g) => ("$rows" in g ? g.$key : g.$row))).toEqual([
      -53, -503,
    ]);
    // the sections end at the next section rows, which are not rendered
    expect(plan.$rowTemplate).toBe(
      "[l0] minmax(2000px,auto) [l50] 40px [l51] minmax(160px,auto) [l55] 40px [l56] 40px [l57] minmax(120px,auto) [l60] minmax(17600px,auto) [l500] 40px [l501] minmax(360px,auto) [l510] minmax(19600px,auto) [l1000]",
    );
  });
});
