/**
 * @jsxImportSource solid-js
 */
import { afterEach, it } from "vitest";
import { render } from "../../spec/browser/solid.js";
import { VList } from "./VList.js";
import { Virtualizer } from "./Virtualizer.js";
import { WindowVirtualizer } from "./WindowVirtualizer.js";
import {
  cleanupScroll,
  expectVirtualizedAndScrollable,
} from "../../spec/browser/index.js";
import { VGrid } from "./VGrid.js";
import { range } from "../../spec/utils.js";

afterEach(cleanupScroll);

it("VList", async () => {
  const root = render(() => (
    <VList data={range(1000)} style={{ height: "400px" }}>
      {(d) => <div>item-{d}</div>}
    </VList>
  ));
  await expectVirtualizedAndScrollable(root, "item-0", "item-999");
});

it("Virtualizer", async () => {
  const root = render(() => (
    <div style={{ height: "400px", "overflow-y": "auto" }}>
      <Virtualizer data={range(1000)}>{(d) => <div>item-{d}</div>}</Virtualizer>
    </div>
  ));
  await expectVirtualizedAndScrollable(root, "item-0", "item-999");
});

it("WindowVirtualizer", async () => {
  const root = render(() => (
    <WindowVirtualizer data={range(1000)}>
      {(d) => <div>item-{d}</div>}
    </WindowVirtualizer>
  ));
  await expectVirtualizedAndScrollable(root, "item-0", "item-999");
});

it("VGrid", async () => {
  const root = render(() => (
    <VGrid
      rows={1000}
      rowHeight={40}
      cols={1000}
      colWidth={100}
      style={{ height: "400px", width: "400px" }}
    >
      {(rowIndex, colIndex) => (
        <div>
          item-{rowIndex}/item-{colIndex}
        </div>
      )}
    </VGrid>
  ));
  await expectVirtualizedAndScrollable(root, "item-0", "item-999");
});
