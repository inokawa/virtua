import { it, expect, vi } from "vitest";
import { createRawSnippet } from "svelte";
import VGrid from "./VGrid.svelte";
import { setupResizeJsDom } from "../../spec/jsdom/dom.js";
import { render } from "../../spec/jsdom/svelte.js";

const ITEM_HEIGHT = 50;
const ITEM_WIDTH = 100;
const VIEWPORT_HEIGHT = ITEM_HEIGHT * 10;

setupResizeJsDom({
  itemSize: { width: ITEM_WIDTH, height: ITEM_HEIGHT },
  viewportSize: { width: ITEM_WIDTH, height: VIEWPORT_HEIGHT },
});

const cellSnippet = createRawSnippet<
  [{ id: string }, { id: string }, { rowIndex: number; colIndex: number }]
>((row, col, cell) => ({
  render: () =>
    `<div>${row().id + col().id} ${cell().rowIndex} / ${cell().colIndex}</div>`,
}));

const indexSnippet = createRawSnippet<
  [number, number, { rowIndex: number; colIndex: number }]
>((_row, _col, cell) => ({
  render: () => `<div>${cell().rowIndex} / ${cell().colIndex}</div>`,
}));

it("should pass attributes to element", async () => {
  const { container } = await render(VGrid, {
    props: {
      rows: 100,
      rowHeight: 40,
      cols: 100,
      colWidth: 100,
      id: "id",
      class: "class",
      tabindex: 0,
      "aria-label": "test",
      style: "background: red;",
      children: indexSnippet,
    },
  });
  expect(container).toMatchSnapshot();
});

it("should override aria-rowcount and aria-colcount by attributes", async () => {
  const { container } = await render(VGrid, {
    props: {
      rows: 100,
      rowHeight: 40,
      cols: 100,
      colWidth: 100,
      "aria-rowcount": 1000,
      "aria-colcount": 2000,
      children: indexSnippet,
    },
  });
  const table = container.querySelector('[role="table"]')!;
  expect(table.getAttribute("aria-rowcount")).toBe("1000");
  expect(table.getAttribute("aria-colcount")).toBe("2000");
});

it("should render 4x4 cells", async () => {
  const { container } = await render(VGrid, {
    props: {
      rows: [{ id: "a" }, { id: "b" }, { id: "c" }, { id: "d" }],
      rowHeight: 40,
      cols: [{ id: "w" }, { id: "x" }, { id: "y" }, { id: "z" }],
      colWidth: 100,
      headerRows: 1,
      headerCols: 1,
      spans: [
        { rowIndex: 1, colIndex: 1, colSpan: 2 },
        { rowIndex: 2, colIndex: 0, rowSpan: 2 },
      ],
      ariaSort: { rowIndex: 0, colIndex: 1, order: "ascending" },
      "aria-label": "grid",
      children: cellSnippet,
    },
  });
  expect(container).toMatchSnapshot();
});

it("should not render the existing cells again when a row is added", async () => {
  let calls = 0;
  const countedSnippet = createRawSnippet<
    [unknown, unknown, { rowIndex: number; colIndex: number }]
  >((_row, _col, cell) => {
    calls++;
    return {
      render: () => `<div>${cell().rowIndex} / ${cell().colIndex}</div>`,
    };
  });
  const rows = [{}, {}, {}];
  const { rerender } = await render(VGrid, {
    props: {
      rows,
      rowHeight: 40,
      cols: 4,
      colWidth: 100,
      children: countedSnippet,
    },
  });
  expect(calls).toBe(12);

  await rerender({ rows: [...rows, {}] });
  vi.runAllTicks();
  await new Promise((resolve) => setTimeout(resolve, 100));
  expect(calls).toBe(16);
});
