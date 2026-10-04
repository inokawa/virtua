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
import { range } from "../../spec/utils.js";
import { VMasonry } from "./VMasonry.js";

afterEach(cleanupScroll);

it("VList", async () => {
  const root = render(
    <VList data={range(1000)} style={{ height: "400px" }}>
      {{
        default: ({ item }: { item: number }) => <div>item-{item}</div>,
      }}
    </VList>,
  );
  await expectVirtualizedAndScrollable(root, "item-0", "item-999");
});

it("VList (horizontal)", async () => {
  const root = render(
    <VList
      data={range(1000)}
      horizontal
      style={{ width: "400px", height: "200px" }}
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
      <Virtualizer data={range(1000)}>
        {{
          default: ({ item }: { item: number }) => <div>item-{item}</div>,
        }}
      </Virtualizer>
    </div>,
  );
  await expectVirtualizedAndScrollable(root, "item-0", "item-999");
});

it("Virtualizer (horizontal)", async () => {
  const root = render(
    <div style={{ width: "400px", height: "200px", overflowX: "auto" }}>
      <Virtualizer data={range(1000)} horizontal>
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
    <WindowVirtualizer data={range(1000)}>
      {{
        default: ({ item }: { item: number }) => <div>item-{item}</div>,
      }}
    </WindowVirtualizer>,
  );
  await expectVirtualizedAndScrollable(root, "item-0", "item-999");
});

it("WindowVirtualizer (horizontal)", async () => {
  const root = render(
    <div style={{ display: "inline-block", height: "200px" }}>
      <WindowVirtualizer data={range(1000)} horizontal>
        {{
          default: ({ item }: { item: number }) => <div>item-{item}</div>,
        }}
      </WindowVirtualizer>
    </div>,
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
            row-{rowIndex}/col-{colIndex}
          </div>
        ),
      }}
    </VGrid>,
  );
  await expectVirtualizedAndScrollable(root, "row-0/col-0", "row-999/col-999");
});

it("VMasonry", async () => {
  const root = render(
    <VMasonry lanes={2} data={range(1000)} style={{ height: "400px" }}>
      {{
        default: ({ item }: { item: number }) => <div>item-{item}</div>,
      }}
    </VMasonry>,
  );
  await expectVirtualizedAndScrollable(root, "item-0", "item-999");
});
