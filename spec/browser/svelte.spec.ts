import { it, onTestFinished } from "vitest";
import { mount, unmount, createRawSnippet, type Component } from "svelte";
import {
  VList,
  Virtualizer,
  WindowVirtualizer,
} from "../../src/svelte/index.js";
import { expectVirtualized } from "./utils.js";

const itemSnippet = createRawSnippet<[number, number]>((item) => ({
  render: () => `<div>item-${item()}</div>`,
}));

const render = (
  component: Component<any>,
  props: Record<string, unknown>,
  style?: string,
) => {
  const container = document.body.appendChild(document.createElement("div"));
  if (style) {
    container.style.cssText = style;
  }
  onTestFinished(() => {
    container.remove();
    document.scrollingElement!.scrollTop = 0;
    document.scrollingElement!.scrollLeft = 0;
  });
  const app = mount(component, { target: container, props });
  onTestFinished(() => unmount(app));
  return container;
};

it("VList", async () => {
  const container = render(VList, {
    data: Array.from({ length: 1000 }, (_, i) => i),
    style: "height: 400px;",
    children: itemSnippet,
  });
  await expectVirtualized(container, "item-0", "item-999");
});

it("Virtualizer", async () => {
  const container = render(
    Virtualizer,
    { data: Array.from({ length: 1000 }, (_, i) => i), children: itemSnippet },
    "height: 400px; overflow-y: auto;",
  );
  await expectVirtualized(container, "item-0", "item-999");
});

it("WindowVirtualizer", async () => {
  const container = render(WindowVirtualizer, {
    data: Array.from({ length: 1000 }, (_, i) => i),
    children: itemSnippet,
  });
  await expectVirtualized(
    container,
    "item-0",
    "item-999",
    () => document.scrollingElement!,
  );
});
