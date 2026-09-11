import { afterEach, it } from "vitest";
import { render } from "../../spec/browser/react.js";
import { VList } from "./VList.js";
import { Virtualizer } from "./Virtualizer.js";
import { WindowVirtualizer } from "./WindowVirtualizer.js";
import { VGrid } from "./VGrid.js";
import {
  cleanupScroll,
  expectVirtualizedAndScrollable,
} from "../../spec/browser/index.js";

afterEach(cleanupScroll);

it("VList", async () => {
  const root = render(
    <VList
      data={Array.from({ length: 1000 }, (_, i) => i)}
      style={{ height: 400 }}
    >
      {(d) => <div key={d}>item-{d}</div>}
    </VList>,
  );
  await expectVirtualizedAndScrollable(root, "item-0", "item-999");
});

it("Virtualizer", async () => {
  const root = render(
    <div style={{ height: 400, overflowY: "auto" }}>
      <Virtualizer data={Array.from({ length: 1000 }, (_, i) => i)}>
        {(d) => <div key={d}>item-{d}</div>}
      </Virtualizer>
    </div>,
  );
  await expectVirtualizedAndScrollable(root, "item-0", "item-999");
});

it("WindowVirtualizer", async () => {
  const root = render(
    <WindowVirtualizer data={Array.from({ length: 1000 }, (_, i) => i)}>
      {(d) => <div key={d}>item-{d}</div>}
    </WindowVirtualizer>,
  );
  await expectVirtualizedAndScrollable(root, "item-0", "item-999");
});

it("VGrid", async () => {
  const root = render(
    <VGrid row={1000} col={1000} style={{ height: 400, width: 400 }}>
      {({ rowIndex, colIndex }) => (
        <div>
          item-{rowIndex}/item-{colIndex}
        </div>
      )}
    </VGrid>,
  );
  await expectVirtualizedAndScrollable(root, "item-0", "item-999");
});
