import { it, onTestFinished } from "vitest";
import { type ReactNode } from "react";
import { createRoot } from "react-dom/client";
import { VList } from "./VList.js";
import { Virtualizer } from "./Virtualizer.js";
import { WindowVirtualizer } from "./WindowVirtualizer.js";
import { VGrid } from "./VGrid.js";
import { expectVirtualizedAndScrollable } from "../../spec/browser.js";

const render = (node: ReactNode) => {
  const container = document.body.appendChild(document.createElement("div"));
  onTestFinished(() => {
    container.remove();
    document.scrollingElement!.scrollTop = 0;
    document.scrollingElement!.scrollLeft = 0;
  });
  const root = createRoot(container);
  root.render(node);
  onTestFinished(() => root.unmount());
  return container;
};

it("VList", async () => {
  const container = render(
    <VList
      data={Array.from({ length: 1000 }, (_, i) => i)}
      style={{ height: 400 }}
    >
      {(d) => <div key={d}>item-{d}</div>}
    </VList>,
  );
  await expectVirtualizedAndScrollable(container, "item-0", "item-999");
});

it("Virtualizer", async () => {
  const container = render(
    <div style={{ height: 400, overflowY: "auto" }}>
      <Virtualizer data={Array.from({ length: 1000 }, (_, i) => i)}>
        {(d) => <div key={d}>item-{d}</div>}
      </Virtualizer>
    </div>,
  );
  await expectVirtualizedAndScrollable(container, "item-0", "item-999");
});

it("WindowVirtualizer", async () => {
  const container = render(
    <WindowVirtualizer data={Array.from({ length: 1000 }, (_, i) => i)}>
      {(d) => <div key={d}>item-{d}</div>}
    </WindowVirtualizer>,
  );
  await expectVirtualizedAndScrollable(
    container,
    "item-0",
    "item-999",
    () => document.scrollingElement!,
  );
});

it("VGrid", async () => {
  const container = render(
    <VGrid row={1000} col={1000} style={{ height: 400, width: 400 }}>
      {({ rowIndex, colIndex }) => (
        <div>
          item-{rowIndex}/item-{colIndex}
        </div>
      )}
    </VGrid>,
  );
  await expectVirtualizedAndScrollable(container, "item-0", "item-999");
});
