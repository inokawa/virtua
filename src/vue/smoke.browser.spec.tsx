/** @jsxImportSource vue */
import { afterEach, it } from "vitest";
import { render } from "../../spec/browser/vue.js";
import { VList } from "./VList.js";
import { Virtualizer } from "./Virtualizer.js";
import { WindowVirtualizer } from "./WindowVirtualizer.js";
import {
  cleanupScroll,
  expectVirtualizedAndScrollable,
} from "../../spec/browser/index.js";
import { VGrid } from "./VGrid.js";

afterEach(cleanupScroll);

it("VList", async () => {
  const root = render(
    <VList
      data={Array.from({ length: 1000 }, (_, i) => i)}
      style={{ height: "400px" }}
    >
      {{
        default: ({ item }: { item: number }) => <div>item-{item}</div>,
      }}
    </VList>,
  );
  await expectVirtualizedAndScrollable(root, "item-0", "item-999");
});

it("Virtualizer", async () => {
  const root = render(
    <div style={{ height: "400px", overflowY: "auto" }}>
      <Virtualizer data={Array.from({ length: 1000 }, (_, i) => i)}>
        {{
          default: ({ item }: { item: number }) => <div>item-{item}</div>,
        }}
      </Virtualizer>
    </div>,
  );
  await expectVirtualizedAndScrollable(root, "item-0", "item-999");
});

it("WindowVirtualizer", async () => {
  const root = render(
    <WindowVirtualizer data={Array.from({ length: 1000 }, (_, i) => i)}>
      {{
        default: ({ item }: { item: number }) => <div>item-{item}</div>,
      }}
    </WindowVirtualizer>,
  );
  await expectVirtualizedAndScrollable(root, "item-0", "item-999");
});

it("VGrid", async () => {
  const root = render(
    <VGrid
      rows={1000}
      rowHeight={40}
      cols={1000}
      colWidth={100}
      style={{ height: "400px", width: "400px" }}
    >
      {{
        default: ({
          row: rowIndex,
          col: colIndex,
        }: {
          row: number;
          col: number;
        }) => (
          <div>
            item-{rowIndex}/item-{colIndex}
          </div>
        ),
      }}
    </VGrid>,
  );
  await expectVirtualizedAndScrollable(root, "item-0", "item-999");
});
