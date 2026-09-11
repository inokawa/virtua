/** @jsxImportSource vue */
import { afterEach, it } from "vitest";
import { render } from "../../spec/browser/vue.js";
import {
  cleanupScroll,
  expectVirtualizedAndScrollable,
} from "../../spec/browser/index.js";
import { VList } from "./VList.js";

afterEach(cleanupScroll);

it("renders and scrolls a fixed-position Vue list", async () => {
  const root = render(
    <VList
      data={Array.from({ length: 1000 }, (_, i) => i)}
      style={{
        position: "fixed",
        top: "0",
        left: "0",
        width: "400px",
        height: "400px",
      }}
    >
      {{
        default: ({ item }: { item: number }) => (
          <div key={item} style={{ height: "40px" }}>
            item-{item}
          </div>
        ),
      }}
    </VList>,
  );
  await expectVirtualizedAndScrollable(root, "item-0", "item-999");
});
