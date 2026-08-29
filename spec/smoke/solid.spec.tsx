/**
 * @jsxImportSource solid-js
 */
import { it, onTestFinished } from "vitest";
import { render as renderTo } from "solid-js/web";
import { type JSX } from "solid-js";
import {
  VList,
  Virtualizer,
  WindowVirtualizer,
} from "../../src/solid/index.js";
import { expectVirtualized } from "./utils.js";

const items = Array.from({ length: 1000 }, (_, i) => i);

const render = (node: () => JSX.Element) => {
  const container = document.body.appendChild(document.createElement("div"));
  onTestFinished(() => {
    container.remove();
    document.scrollingElement!.scrollTop = 0;
    document.scrollingElement!.scrollLeft = 0;
  });
  const dispose = renderTo(node, container);
  onTestFinished(dispose);
  return container;
};

it("VList", async () => {
  const container = render(() => (
    <VList data={items} style={{ height: "400px" }}>
      {(d) => <div>item-{d}</div>}
    </VList>
  ));
  await expectVirtualized(container, "item-0", "item-999");
});

it("Virtualizer", async () => {
  const container = render(() => (
    <div style={{ height: "400px", "overflow-y": "auto" }}>
      <Virtualizer data={items}>{(d) => <div>item-{d}</div>}</Virtualizer>
    </div>
  ));
  await expectVirtualized(container, "item-0", "item-999");
});

it("WindowVirtualizer", async () => {
  const container = render(() => (
    <WindowVirtualizer data={items}>
      {(d) => <div>item-{d}</div>}
    </WindowVirtualizer>
  ));
  await expectVirtualized(
    container,
    "item-0",
    "item-999",
    () => document.scrollingElement!,
  );
});
