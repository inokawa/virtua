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

afterEach(cleanupScroll);

const itemSnippet = createRawSnippet<[number, number]>((item) => ({
  render: () => `<div>item-${item()}</div>`,
}));

const cellSnippet = createRawSnippet<[number, number]>(
  (rowIndex, colIndex) => ({
    render: () => `<div>item-${rowIndex()}/item-${colIndex()}</div>`,
  }),
);

it("VList", async () => {
  const root = render(VList, {
    data: Array.from({ length: 1000 }, (_, i) => i),
    style: "height: 400px;",
    children: itemSnippet,
  });
  await expectVirtualizedAndScrollable(root, "item-0", "item-999");
});

it("Virtualizer", async () => {
  const root = render(
    Virtualizer,
    { data: Array.from({ length: 1000 }, (_, i) => i), children: itemSnippet },
    "height: 400px; overflow-y: auto;",
  );
  await expectVirtualizedAndScrollable(root, "item-0", "item-999");
});

it("WindowVirtualizer", async () => {
  const root = render(WindowVirtualizer, {
    data: Array.from({ length: 1000 }, (_, i) => i),
    children: itemSnippet,
  });
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
  await expectVirtualizedAndScrollable(root, "item-0", "item-999");
});
