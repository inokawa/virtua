import { afterEach, expect, it } from "vitest";
import { createRef } from "react";
import { render } from "../spec/browser/react.js";
import {
  cleanupScroll,
  expectVirtualizedAndScrollable,
} from "../spec/browser/index.js";
import { VList, type VListHandle } from "./react/index.js";
import { VGrid } from "./react/VGrid.js";

afterEach(cleanupScroll);

it.each(["relative", "absolute", "fixed"] as const)(
  "measures and fills a %s viewport",
  async (position) => {
    const ref = createRef<VListHandle>();
    const root = render(
      <VList
        ref={ref}
        data={Array.from({ length: 1000 }, (_, i) => i)}
        style={{ position, top: 0, left: 0, width: 400, height: 400 }}
      >
        {(item) => (
          <div key={item} style={{ height: 40 }}>
            Product {item}
          </div>
        )}
      </VList>,
    );
    await expect.poll(() => ref.current?.viewportSize).toBe(400);
    await expect.poll(() => root.textContent).toContain("Product 9");
    ref.current!.scrollToIndex(500, { align: "start" });
    await expect.poll(() => root.textContent).toContain("Product 500");
  },
);

it("renders and scrolls a fixed-position grid", async () => {
  const root = render(
    <VGrid
      row={100}
      col={100}
      style={{ position: "fixed", top: 0, left: 0, width: 400, height: 400 }}
    >
      {({ rowIndex, colIndex }) => (
        <div style={{ width: 100, height: 40 }}>
          row-{rowIndex}/column-{colIndex}
        </div>
      )}
    </VGrid>,
  );
  await expectVirtualizedAndScrollable(
    root,
    "row-0/column-0",
    "row-99/column-99",
  );
});
