import { afterEach, it, expect, describe } from "vitest";
import { cleanup } from "@testing-library/react";
import { VGrid } from "./VGrid.js";
import { setupResizeJsDom } from "../../scripts/spec.js";
import { render } from "../../scripts/spec-react.js";

Object.defineProperty(CSSStyleDeclaration.prototype, "direction", {
  get() {
    return "rtl";
  },
});

const ITEM_HEIGHT = 50;
const ITEM_WIDTH = 100;
const VIEWPORT_HEIGHT = ITEM_HEIGHT * 10;

setupResizeJsDom({
  itemSize: { width: ITEM_WIDTH, height: ITEM_HEIGHT },
  viewportSize: { width: ITEM_WIDTH, height: VIEWPORT_HEIGHT },
});

afterEach(cleanup);

describe("rtl", async () => {
  it("should work", async () => {
    const { asFragment } = await render(
      <VGrid row={100} col={100}>
        {({ rowIndex, colIndex }) => (
          <div>
            {rowIndex} / {colIndex}
          </div>
        )}
      </VGrid>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
