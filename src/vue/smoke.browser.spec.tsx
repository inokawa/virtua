/** @jsxImportSource vue */
import { it } from "vitest";
import { render } from "../../spec/browser/vue.js";
import { VList } from "./VList.js";
import { Virtualizer } from "./Virtualizer.js";
import { WindowVirtualizer } from "./WindowVirtualizer.js";
import { expectVirtualizedAndScrollable } from "../../spec/browser/index.js";

it("VList", async () => {
  const container = render(
    <VList
      data={Array.from({ length: 1000 }, (_, i) => i)}
      style={{ height: "400px" }}
    >
      {{
        default: ({ item }: { item: number }) => <div>item-{item}</div>,
      }}
    </VList>,
  );
  await expectVirtualizedAndScrollable(container, "item-0", "item-999");
});

it("Virtualizer", async () => {
  const container = render(
    <div style={{ height: "400px", overflowY: "auto" }}>
      <Virtualizer data={Array.from({ length: 1000 }, (_, i) => i)}>
        {{
          default: ({ item }: { item: number }) => <div>item-{item}</div>,
        }}
      </Virtualizer>
    </div>,
  );
  await expectVirtualizedAndScrollable(container, "item-0", "item-999");
});

it("WindowVirtualizer", async () => {
  const container = render(
    <WindowVirtualizer data={Array.from({ length: 1000 }, (_, i) => i)}>
      {{
        default: ({ item }: { item: number }) => <div>item-{item}</div>,
      }}
    </WindowVirtualizer>,
  );
  await expectVirtualizedAndScrollable(
    container,
    "item-0",
    "item-999",
    () => document.scrollingElement!,
  );
});
