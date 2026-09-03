import { it, expect, describe } from "vitest";
import { VList } from "./VList.js";
import { setupResizeJsDom } from "../../spec/dom.js";
import { render } from "../../spec/react.js";

const ITEM_HEIGHT = 50;
const ITEM_WIDTH = 100;
const VIEWPORT_HEIGHT = ITEM_HEIGHT * 10;

setupResizeJsDom({
  itemSize: { width: ITEM_WIDTH, height: ITEM_HEIGHT },
  viewportSize: { width: ITEM_WIDTH, height: VIEWPORT_HEIGHT },
});

describe("vertical", async () => {
  it("should pass attributes to element", async () => {
    const { asFragment } = await render(
      <VList
        id="id"
        className="class"
        tabIndex={0}
        role="list"
        aria-label="test"
        style={{ background: "red", width: 100, height: 800 }}
      >
        <div>0</div>
      </VList>,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});

describe("horizontal", async () => {
  it("should pass attributes to element", async () => {
    const { asFragment } = await render(
      <VList
        horizontal
        id="id"
        className="class"
        tabIndex={0}
        role="list"
        aria-label="test"
        style={{ background: "red", width: 100, height: 800 }}
      >
        <div>0</div>
      </VList>,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
