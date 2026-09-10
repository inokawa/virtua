/**
 * @jsxImportSource solid-js
 */
import { it } from "vitest";
import { render } from "../../spec/browser/solid.js";
import { VList } from "./VList.js";
import { Virtualizer } from "./Virtualizer.js";
import { WindowVirtualizer } from "./WindowVirtualizer.js";
import { expectVirtualizedAndScrollable } from "../../spec/browser/index.js";

it("VList", async () => {
  const container = render(() => (
    <VList
      data={Array.from({ length: 1000 }, (_, i) => i)}
      style={{ height: "400px" }}
    >
      {(d) => <div>item-{d}</div>}
    </VList>
  ));
  await expectVirtualizedAndScrollable(container, "item-0", "item-999");
});

it("Virtualizer", async () => {
  const container = render(() => (
    <div style={{ height: "400px", "overflow-y": "auto" }}>
      <Virtualizer data={Array.from({ length: 1000 }, (_, i) => i)}>
        {(d) => <div>item-{d}</div>}
      </Virtualizer>
    </div>
  ));
  await expectVirtualizedAndScrollable(container, "item-0", "item-999");
});

it("WindowVirtualizer", async () => {
  const container = render(() => (
    <WindowVirtualizer data={Array.from({ length: 1000 }, (_, i) => i)}>
      {(d) => <div>item-{d}</div>}
    </WindowVirtualizer>
  ));
  await expectVirtualizedAndScrollable(
    container,
    "item-0",
    "item-999",
    () => document.scrollingElement!,
  );
});
