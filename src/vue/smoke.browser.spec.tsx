/** @jsxImportSource vue */
import { it, onTestFinished } from "vitest";
import { createApp, type VNode } from "vue";
import { VList } from "./VList.js";
import { Virtualizer } from "./Virtualizer.js";
import { WindowVirtualizer } from "./WindowVirtualizer.js";
import { expectVirtualized } from "../../spec/browser.js";

const itemSlot = {
  default: ({ item }: { item: number }) => <div>item-{item}</div>,
};

const render = (node: VNode) => {
  const container = document.body.appendChild(document.createElement("div"));
  onTestFinished(() => {
    container.remove();
    document.scrollingElement!.scrollTop = 0;
    document.scrollingElement!.scrollLeft = 0;
  });
  const app = createApp({ render: () => node });
  app.mount(container);
  onTestFinished(() => app.unmount());
  return container;
};

it("VList", async () => {
  const container = render(
    <VList
      data={Array.from({ length: 1000 }, (_, i) => i)}
      style={{ height: "400px" }}
    >
      {itemSlot}
    </VList>,
  );
  await expectVirtualized(container, "item-0", "item-999");
});

it("Virtualizer", async () => {
  const container = render(
    <div style={{ height: "400px", overflowY: "auto" }}>
      <Virtualizer data={Array.from({ length: 1000 }, (_, i) => i)}>
        {itemSlot}
      </Virtualizer>
    </div>,
  );
  await expectVirtualized(container, "item-0", "item-999");
});

it("WindowVirtualizer", async () => {
  const container = render(
    <WindowVirtualizer data={Array.from({ length: 1000 }, (_, i) => i)}>
      {itemSlot}
    </WindowVirtualizer>,
  );
  await expectVirtualized(
    container,
    "item-0",
    "item-999",
    () => document.scrollingElement!,
  );
});
