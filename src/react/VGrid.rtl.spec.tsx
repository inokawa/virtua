import { afterEach, it, expect, describe } from "vitest";
import { render, cleanup } from "@testing-library/react";
import { VGrid } from "./VGrid";
import { setupJsDomEnv } from "../../scripts/spec";

Object.defineProperty(CSSStyleDeclaration.prototype, "direction", {
  get() {
    return "rtl";
  },
});

const ITEM_HEIGHT = 50;
const ITEM_WIDTH = 100;
const VIEWPORT_HEIGHT = ITEM_HEIGHT * 10;

setupJsDomEnv({
  itemWidth: ITEM_WIDTH,
  itemHeight: ITEM_HEIGHT,
  viewportHeight: VIEWPORT_HEIGHT,
});

afterEach(cleanup);

describe("rtl", () => {
  it("should work", () => {
    const { asFragment } = render(
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
