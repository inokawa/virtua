import { it, expect, vi } from "vitest";
import { defineComponent, h, reactive } from "vue";
import { VGrid } from "./VGrid.js";
import { setupResizeJsDom } from "../../spec/jsdom/dom.js";
import { render } from "../../spec/jsdom/vue.js";

const ITEM_HEIGHT = 50;
const ITEM_WIDTH = 100;
const VIEWPORT_HEIGHT = ITEM_HEIGHT * 10;

setupResizeJsDom({
  itemSize: { width: ITEM_WIDTH, height: ITEM_HEIGHT },
  viewportSize: { width: ITEM_WIDTH, height: VIEWPORT_HEIGHT },
});

const cell = ({
  cell: { rowIndex, colIndex },
}: {
  cell: { rowIndex: number; colIndex: number };
}) => h("div", `${rowIndex} / ${colIndex}`);

it("should pass attributes to element", async () => {
  const wrapper = await render(VGrid, {
    props: { rows: 100, rowHeight: 40, cols: 100, colWidth: 100 },
    attrs: {
      id: "id",
      class: "class",
      tabindex: 0,
      "aria-label": "test",
      style: { background: "red" },
    },
    slots: { default: cell },
  });
  expect(wrapper.html()).toMatchSnapshot();
});

it("should override aria-rowcount and aria-colcount by attributes", async () => {
  await render(VGrid, {
    props: { rows: 100, rowHeight: 40, cols: 100, colWidth: 100 },
    attrs: { "aria-rowcount": 1000, "aria-colcount": 2000 },
    slots: { default: cell },
  });
  const table = document.querySelector('[role="table"]')!;
  expect(table.getAttribute("aria-rowcount")).toBe("1000");
  expect(table.getAttribute("aria-colcount")).toBe("2000");
});

it("should render 4x4 cells", async () => {
  const wrapper = await render(VGrid, {
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
    },
    attrs: { "aria-label": "grid" },
    slots: {
      default: ({
        row,
        col,
        cell: { rowIndex, colIndex },
      }: {
        row: { id: string };
        col: { id: string };
        cell: { rowIndex: number; colIndex: number };
      }) => h("div", `${row.id + col.id} ${rowIndex} / ${colIndex}`),
    },
  });
  expect(wrapper.html()).toMatchSnapshot();
});

it("should not render the existing cells again when a row is added", async () => {
  let calls = 0;
  const rows = reactive<object[]>([{}, {}, {}]);
  const Host = defineComponent(
    () => () =>
      h(
        VGrid,
        { rows, rowHeight: 40, cols: 4, colWidth: 100 },
        {
          default: (arg: { cell: { rowIndex: number; colIndex: number } }) => {
            calls++;
            return cell(arg);
          },
        },
      ),
  );
  await render(Host);
  expect(calls).toBe(12);

  rows.push({});
  vi.runAllTicks();
  await new Promise((resolve) => setTimeout(resolve, 100));
  expect(calls).toBe(16);
});

const getContainerStyle = () =>
  document
    .querySelector('[style*="grid-template-rows"]')!
    .getAttribute("style");

it("should follow the sizes mutated in place", async () => {
  const rows = reactive([{ h: 40 }, { h: 40 }]);
  const Host = defineComponent(
    () => () =>
      h(
        VGrid,
        { rows, rowHeight: "h" as never, cols: 1, colWidth: 100 },
        { default: () => h("div") },
      ),
  );
  await render(Host);
  expect(getContainerStyle()).toContain("[l0] 40px [l1]");

  rows[0]!.h = 80;
  vi.runAllTicks();
  await new Promise((resolve) => setTimeout(resolve, 100));
  expect(getContainerStyle()).toContain("[l0] 80px [l1]");

  rows.splice(0, 1, { h: 120 });
  vi.runAllTicks();
  await new Promise((resolve) => setTimeout(resolve, 100));
  expect(getContainerStyle()).toContain("[l0] 120px [l1]");
});
