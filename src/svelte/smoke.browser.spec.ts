import { it } from "vitest";
import { createRawSnippet } from "svelte";
import { render } from "../../spec/browser/svelte.js";
import VList from "./VList.svelte";
import Virtualizer from "./Virtualizer.svelte";
import WindowVirtualizer from "./WindowVirtualizer.svelte";
import { expectVirtualizedAndScrollable } from "../../spec/browser/index.js";

const itemSnippet = createRawSnippet<[number, number]>((item) => ({
  render: () => `<div>item-${item()}</div>`,
}));

it("VList", async () => {
  const container = render(VList, {
    data: Array.from({ length: 1000 }, (_, i) => i),
    style: "height: 400px;",
    children: itemSnippet,
  });
  await expectVirtualizedAndScrollable(container, "item-0", "item-999");
});

it("Virtualizer", async () => {
  const container = render(
    Virtualizer,
    { data: Array.from({ length: 1000 }, (_, i) => i), children: itemSnippet },
    "height: 400px; overflow-y: auto;",
  );
  await expectVirtualizedAndScrollable(container, "item-0", "item-999");
});

it("WindowVirtualizer", async () => {
  const container = render(WindowVirtualizer, {
    data: Array.from({ length: 1000 }, (_, i) => i),
    children: itemSnippet,
  });
  await expectVirtualizedAndScrollable(
    container,
    "item-0",
    "item-999",
    () => document.scrollingElement!,
  );
});
