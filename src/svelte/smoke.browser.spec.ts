import { afterEach, it } from "vitest";
import { createRawSnippet } from "svelte";
import { render } from "../../spec/browser/svelte.js";
import VList from "./VList.svelte";
import Virtualizer from "./Virtualizer.svelte";
import WindowVirtualizer from "./WindowVirtualizer.svelte";
import {
  cleanupScroll,
  expectVirtualizedAndScrollable,
} from "../../spec/browser/index.js";
import VGrid from "./VGrid.svelte";
import { range } from "../../spec/utils.js";

afterEach(cleanupScroll);

const itemSnippet = createRawSnippet<[number, number]>((item) => ({
  render: () => `<div>item-${item()}</div>`,
}));

const cellSnippet = createRawSnippet<[number, number]>(
  (rowIndex, colIndex) => ({
    render: () => `<div>row-${rowIndex()}/col-${colIndex()}</div>`,
  }),
);

it("VList", async () => {
  const root = render(VList, {
    data: range(1000),
    style: "height: 400px;",
    children: itemSnippet,
  });
  await expectVirtualizedAndScrollable(root, "item-0", "item-999");
});

it("VList (horizontal)", async () => {
  const root = render(VList, {
    data: range(1000),
    horizontal: true,
    style: "width: 400px; height: 200px;",
    children: itemSnippet,
  });
  await expectVirtualizedAndScrollable(root, "item-0", "item-999");
});

it("Virtualizer", async () => {
  const root = render(
    Virtualizer,
    { data: range(1000), children: itemSnippet },
    "height: 400px; overflow-y: auto;",
  );
  await expectVirtualizedAndScrollable(root, "item-0", "item-999");
});

it("Virtualizer (horizontal)", async () => {
  const root = render(
    Virtualizer,
    {
      data: range(1000),
      horizontal: true,
      children: itemSnippet,
    },
    "width: 400px; height: 200px; overflow-x: auto;",
  );
  await expectVirtualizedAndScrollable(root, "item-0", "item-999");
});

it("WindowVirtualizer", async () => {
  const root = render(WindowVirtualizer, {
    data: range(1000),
    children: itemSnippet,
  });
  await expectVirtualizedAndScrollable(root, "item-0", "item-999");
});

it("WindowVirtualizer (horizontal)", async () => {
  const root = render(
    WindowVirtualizer,
    {
      data: range(1000),
      horizontal: true,
      children: itemSnippet,
    },
    "display: inline-block; height: 200px;",
  );
  await expectVirtualizedAndScrollable(root, "item-0", "item-999");
});

it("VGrid", async () => {
  const root = render(VGrid, {
    rows: 1000,
    rowHeight: 40,
    cols: 1000,
    colWidth: 100,
    style: "height: 400px; width: 400px;",
    children: cellSnippet,
  });
  await expectVirtualizedAndScrollable(root, "row-0/col-0", "row-999/col-999");
});
