import { it, expect, vi, describe } from "vitest";
import axe from "axe-core";
import { useCallback } from "react";
import { VGrid, type VGridProps } from "./VGrid.js";
import { setupResizeJsDom } from "../../spec/jsdom/dom.js";
import { render } from "../../spec/jsdom/react.js";

const ITEM_HEIGHT = 50;
const ITEM_WIDTH = 100;
const VIEWPORT_HEIGHT = ITEM_HEIGHT * 10;

setupResizeJsDom({
  itemSize: { width: ITEM_WIDTH, height: ITEM_HEIGHT },
  viewportSize: { width: ITEM_WIDTH, height: VIEWPORT_HEIGHT },
});

it("should pass attributes to element", async () => {
  const { asFragment } = await render(
    <VGrid
      id="id"
      className="class"
      tabIndex={0}
      aria-label="test"
      style={{ background: "red" }}
      rows={100}
      rowHeight={40}
      cols={100}
      colWidth={100}
    >
      {(rowIndex, colIndex) => (
        <div>
          {rowIndex} / {colIndex}
        </div>
      )}
    </VGrid>,
  );
  expect(asFragment()).toMatchSnapshot();
});

it("should override aria-rowcount and aria-colcount by attributes", async () => {
  await render(
    <VGrid
      aria-rowcount={1000}
      aria-colcount={2000}
      rows={100}
      rowHeight={40}
      cols={100}
      colWidth={100}
    >
      {(rowIndex, colIndex) => (
        <div>
          {rowIndex} / {colIndex}
        </div>
      )}
    </VGrid>,
  );
  const table = document.querySelector('[role="table"]')!;
  expect(table.getAttribute("aria-rowcount")).toBe("1000");
  expect(table.getAttribute("aria-colcount")).toBe("2000");
});

it("should render 0 children", async () => {
  const { asFragment } = await render(
    <VGrid rows={0} rowHeight={40} cols={0} colWidth={100}>
      {(rowIndex, colIndex) => (
        <div>
          {rowIndex} / {colIndex}
        </div>
      )}
    </VGrid>,
  );
  expect(asFragment()).toMatchSnapshot();
});

it("should render 4x4 children", async () => {
  const { asFragment } = await render(
    <VGrid
      rows={[{ id: "a" }, { id: "b" }, { id: "c" }, { id: "d" }]}
      rowHeight={40}
      cols={[{ id: "w" }, { id: "x" }, { id: "y" }, { id: "z" }]}
      colWidth={100}
      pinnedRows={1}
      pinnedCols={1}
      spans={[
        { rowIndex: 1, colIndex: 1, colSpan: 2 },
        { rowIndex: 2, colIndex: 0, rowSpan: 2 },
      ]}
      ariaRowHeader={[0]}
      ariaSort={{ rowIndex: 0, colIndex: 1, order: "ascending" }}
      aria-label="grid"
    >
      {(row, col, { rowIndex, colIndex }) => (
        <div>{`${row.id + col.id} ${rowIndex} / ${colIndex}`}</div>
      )}
    </VGrid>,
  );
  expect(asFragment()).toMatchSnapshot();
});

it("should render non elements", async () => {
  const { asFragment } = await render(
    <VGrid rows={6} rowHeight={40} cols={1} colWidth={100}>
      {(rowIndex) =>
        rowIndex === 0
          ? "string"
          : rowIndex === 1
            ? true
            : rowIndex === 2
              ? false
              : rowIndex === 3
                ? null
                : rowIndex === 4
                  ? undefined
                  : 123
      }
    </VGrid>,
  );
  expect(asFragment()).toMatchSnapshot();
});

it("should render fragments", async () => {
  const { asFragment } = await render(
    <VGrid rows={2} rowHeight={40} cols={1} colWidth={100}>
      {(rowIndex) =>
        rowIndex === 0 ? (
          <>
            <div>fragment</div>
            <div>fragment</div>
            <div>fragment</div>
          </>
        ) : (
          <>
            <div>fragment</div>
          </>
        )
      }
    </VGrid>,
  );
  expect(asFragment()).toMatchSnapshot();
});

it("should render component", async () => {
  const Comp = ({ children }: { children: React.ReactNode }) => (
    <div>{children}</div>
  );
  const { asFragment } = await render(
    <VGrid rows={100} rowHeight={40} cols={100} colWidth={100}>
      {(rowIndex, colIndex) => (
        <Comp>
          {rowIndex} / {colIndex}
        </Comp>
      )}
    </VGrid>,
  );
  expect(asFragment()).toMatchSnapshot();
});

it("should not render the existing cells again when a row is added", async () => {
  let calls = 0;
  const Grid = ({ rows }: { rows: object[] }) => {
    const cell = useCallback<VGridProps<object>["children"]>(
      (_row, _col, { rowIndex, colIndex }) => {
        calls++;
        return (
          <div>
            {rowIndex} / {colIndex}
          </div>
        );
      },
      [],
    );
    return (
      <VGrid rows={rows} rowHeight={40} cols={4} colWidth={100}>
        {cell}
      </VGrid>
    );
  };
  const rows = [{}, {}, {}];
  const { rerender } = await render(<Grid rows={rows} />);
  expect(calls).toBe(12);

  rerender(<Grid rows={[...rows, {}]} />);
  vi.runAllTicks();
  await new Promise((resolve) => setTimeout(resolve, 100));
  expect(calls).toBe(16);
});

describe("accessibility", () => {
  // the roles and the aria attributes of the elements, as a tree
  const ariaTree = (container: Element): string => {
    const lines: string[] = [];
    const walk = (element: Element, depth: number) => {
      const role = element.getAttribute("role");
      if (role) {
        const attrs = [...element.attributes]
          .filter((a) => a.name.startsWith("aria-") && a.name !== "aria-label")
          .map((a) => ` ${a.name.slice(5)}=${a.value}`)
          .join("");
        const name =
          role === "row" || role === "rowgroup"
            ? ""
            : ` "${element.getAttribute("aria-label") ?? element.textContent}"`;
        lines.push("  ".repeat(depth) + role + name + attrs);
        depth++;
      }
      for (const child of element.children) {
        walk(child, depth);
      }
    };
    walk(container, 0);
    return lines.join("\n");
  };
  const cell = (rowIndex: number, colIndex: number) =>
    `${rowIndex}-${colIndex}`;
  const gridStyle = { height: VIEWPORT_HEIGHT, width: ITEM_WIDTH };

  it("should be a table of rows and cells with the counts and the indices", async () => {
    const { container } = await render(
      <VGrid
        aria-label="t"
        rows={2}
        rowHeight={40}
        cols={2}
        colWidth={50}
        style={gridStyle}
      >
        {cell}
      </VGrid>,
    );
    expect(ariaTree(container)).toMatchInlineSnapshot(`
      "table "t" rowcount=2 colcount=2
        row rowindex=1
          cell "0-0" colindex=1
          cell "0-1" colindex=2
        row rowindex=2
          cell "1-0" colindex=1
          cell "1-1" colindex=2"
    `);
  });

  it("should have the total counts and the absolute indices of the rendered rows and columns", async () => {
    const { container } = await render(
      <VGrid
        aria-label="t"
        rows={100}
        rowHeight={40}
        cols={100}
        colWidth={25}
        pinnedRows={{ end: 1 }}
        pinnedCols={{ end: 1 }}
        ariaColumnHeader={[]}
        style={gridStyle}
      >
        {cell}
      </VGrid>,
    );
    const tree = ariaTree(container).split("\n");
    const indices = (lines: string[], attr: string) =>
      lines
        .filter((l) => l.includes(` ${attr}=`))
        .map((l) => Number(l.match(new RegExp(`${attr}=(\\d+)`))![1]));
    const rowIndices = indices(tree, "rowindex");
    const colIndices = indices(
      tree.slice(0, tree.indexOf("  row rowindex=2")),
      "colindex",
    );
    // the rows and the columns in the viewport have the indices of the whole table

    expect(tree[0]).toBe('table "t" rowcount=100 colcount=100');
    expect(rowIndices.length).toBeLessThan(100);
    expect(colIndices.length).toBeLessThan(100);
    expect(rowIndices).toEqual([
      ...rowIndices.slice(0, -1).map((_, i) => i + 1),
      100,
    ]);
    expect(colIndices).toEqual([
      ...colIndices.slice(0, -1).map((_, i) => i + 1),
      100,
    ]);
    // the pinned rows are grouped at their edge
    const last = tree.indexOf("    row rowindex=100");
    expect(tree[last - 1]).toBe("  rowgroup");
    expect(tree.at(-1)).toBe('      cell "99-99" colindex=100');
    expect(tree.filter((l) => l.startsWith("  rowgroup"))).toHaveLength(1);
  });

  it("should make the pinned start rows the column headers in a group", async () => {
    const { container } = await render(
      <VGrid
        aria-label="t"
        rows={2}
        rowHeight={40}
        cols={2}
        colWidth={50}
        pinnedRows={1}
        style={gridStyle}
      >
        {cell}
      </VGrid>,
    );
    expect(ariaTree(container)).toMatchInlineSnapshot(`
      "table "t" rowcount=2 colcount=2
        rowgroup
          row rowindex=1
            columnheader "0-0" colindex=1
            columnheader "0-1" colindex=2
        row rowindex=2
          cell "1-0" colindex=1
          cell "1-1" colindex=2"
    `);
  });

  it("should make the declared rows the column headers instead of the pinned rows", async () => {
    const { container } = await render(
      <VGrid
        aria-label="t"
        rows={3}
        rowHeight={40}
        cols={1}
        colWidth={100}
        pinnedRows={1}
        ariaColumnHeader={[1]}
        style={gridStyle}
      >
        {cell}
      </VGrid>,
    );
    expect(ariaTree(container)).toMatchInlineSnapshot(`
      "table "t" rowcount=3 colcount=1
        rowgroup
          row rowindex=1
            cell "0-0" colindex=1
        row rowindex=2
          columnheader "1-0" colindex=1
        row rowindex=3
          cell "2-0" colindex=1"
    `);
  });

  it("should make the declared columns the row headers and their corner a column header", async () => {
    const { container } = await render(
      <VGrid
        aria-label="t"
        rows={2}
        rowHeight={40}
        cols={2}
        colWidth={50}
        pinnedRows={1}
        ariaRowHeader={[0]}
        style={gridStyle}
      >
        {cell}
      </VGrid>,
    );
    expect(ariaTree(container)).toMatchInlineSnapshot(`
      "table "t" rowcount=2 colcount=2
        rowgroup
          row rowindex=1
            columnheader "0-0" colindex=1
            columnheader "0-1" colindex=2
        row rowindex=2
          rowheader "1-0" colindex=1
          cell "1-1" colindex=2"
    `);
  });

  it("should give the spans to the spanning cell and drop the covered cells", async () => {
    const { container } = await render(
      <VGrid
        aria-label="t"
        rows={2}
        rowHeight={40}
        cols={3}
        colWidth={33}
        spans={[{ rowIndex: 0, colIndex: 0, rowSpan: 2, colSpan: 2 }]}
        style={gridStyle}
      >
        {cell}
      </VGrid>,
    );
    expect(ariaTree(container)).toMatchInlineSnapshot(`
      "table "t" rowcount=2 colcount=3
        row rowindex=1
          cell "0-0" colindex=1 rowspan=2 colspan=2
          cell "0-2" colindex=3
        row rowindex=2
          cell "1-2" colindex=3"
    `);
  });

  it("should sort only a header cell", async () => {
    const sortOf = async (rowIndex: number) => {
      const { container, unmount } = await render(
        <VGrid
          aria-label="t"
          rows={2}
          rowHeight={40}
          cols={1}
          colWidth={100}
          pinnedRows={1}
          ariaSort={{ rowIndex, colIndex: 0, order: "ascending" }}
          style={gridStyle}
        >
          {cell}
        </VGrid>,
      );
      const tree = ariaTree(container);
      unmount();
      return tree;
    };
    expect(await sortOf(0)).toMatchInlineSnapshot(`
      "table "t" rowcount=2 colcount=1
        rowgroup
          row rowindex=1
            columnheader "0-0" colindex=1 sort=ascending
        row rowindex=2
          cell "1-0" colindex=1"
    `);
    expect(await sortOf(1)).not.toContain("sort=");
  });

  it("should have no violation of the ARIA rules", async () => {
    const { container } = await render(
      <VGrid
        aria-label="t"
        rows={100}
        rowHeight={40}
        cols={100}
        colWidth={25}
        pinnedRows={{ start: 1, end: 1 }}
        pinnedCols={{ start: 1, end: 1 }}
        ariaRowHeader={[0]}
        spans={[{ rowIndex: 1, colIndex: 1, rowSpan: 2, colSpan: 2 }]}
        ariaSort={{ rowIndex: 0, colIndex: 1, order: "ascending" }}
        style={gridStyle}
      >
        {cell}
      </VGrid>,
    );
    const { violations } = await axe.run(container);
    expect(violations.map((v) => `${v.id}: ${v.help}`)).toEqual([]);
  });
});
