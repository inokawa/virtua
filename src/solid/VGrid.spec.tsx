/**
 * @jsxImportSource solid-js
 */
import { it, expect, vi } from "vitest";
import { createSignal } from "solid-js";
import { createStore } from "solid-js/store";
import { VGrid } from "./VGrid.js";
import { setupResizeJsDom } from "../../spec/jsdom/dom.js";
import { render } from "../../spec/jsdom/solid.js";

const ITEM_HEIGHT = 50;
const ITEM_WIDTH = 100;
const VIEWPORT_HEIGHT = ITEM_HEIGHT * 10;

setupResizeJsDom({
  itemSize: { width: ITEM_WIDTH, height: ITEM_HEIGHT },
  viewportSize: { width: ITEM_WIDTH, height: VIEWPORT_HEIGHT },
});

const cell = (
  _row: unknown,
  _col: unknown,
  { rowIndex, colIndex }: { rowIndex: number; colIndex: number },
) => <div>{`${rowIndex} / ${colIndex}`}</div>;

it("should pass attributes to element", () => {
  const { asFragment } = render(() => (
    <VGrid
      id="id"
      class="class"
      tabIndex={0}
      aria-label="test"
      style={{ background: "red" }}
      rows={100}
      rowHeight={40}
      cols={100}
      colWidth={100}
    >
      {cell}
    </VGrid>
  ));
  expect(asFragment()).toMatchSnapshot();
});

it("should override aria-rowcount and aria-colcount by attributes", () => {
  render(() => (
    <VGrid
      aria-rowcount={1000}
      aria-colcount={2000}
      rows={100}
      rowHeight={40}
      cols={100}
      colWidth={100}
    >
      {cell}
    </VGrid>
  ));
  const table = document.querySelector('[role="table"]')!;
  expect(table.getAttribute("aria-rowcount")).toBe("1000");
  expect(table.getAttribute("aria-colcount")).toBe("2000");
});

it("should render 4x4 cells", () => {
  const { asFragment } = render(() => (
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
    </VGrid>
  ));
  expect(asFragment()).toMatchSnapshot();
});

it("should not render the existing cells again when a row is added", () => {
  let calls = 0;
  const [rows, setRows] = createSignal<object[]>([{}, {}, {}]);
  render(() => (
    <VGrid rows={rows()} rowHeight={40} cols={4} colWidth={100}>
      {(row, col, position) => {
        calls++;
        return cell(row, col, position);
      }}
    </VGrid>
  ));
  expect(calls).toBe(12);

  setRows((prev) => [...prev, {}]);
  vi.runAllTicks();
  expect(calls).toBe(16);
});

const getContainerStyle = () =>
  document
    .querySelector('[style*="grid-template-rows"]')!
    .getAttribute("style");

it("should follow the sizes mutated in place", () => {
  const [rows, setRows] = createStore([{ h: 40 }, { h: 40 }]);
  render(() => (
    <VGrid rows={rows} rowHeight="h" cols={1} colWidth={100}>
      {() => <div />}
    </VGrid>
  ));
  expect(getContainerStyle()).toContain("[l0] 40px [l1]");

  setRows(0, "h", 80);
  vi.runAllTicks();
  expect(getContainerStyle()).toContain("[l0] 80px [l1]");

  // a new array is merged into the same store
  setRows([{ h: 120 }, { h: 40 }]);
  vi.runAllTicks();
  expect(getContainerStyle()).toContain("[l0] 120px [l1]");
});
