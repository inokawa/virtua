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

it("should pass attributes to element", async () => {
  const { asFragment } = await render(
    <VList
      id="id"
      className="class"
      tabIndex={0}
      role="list"
      aria-label="test"
      style={{ background: "red" }}
    >
      <div>0</div>
    </VList>,
  );
  expect(asFragment()).toMatchSnapshot();
});

it("should render with keepMounted", async () => {
  const { asFragment } = await render(
    <VList keepMounted={[0, 10, 20, 30, 40, 50, 60, 70, 80, 90]}>
      {Array.from({ length: 100 }).map((_, i) => (
        <div key={i}>{i}</div>
      ))}
    </VList>,
  );
  expect(asFragment()).toMatchSnapshot();
});

describe("vertical", async () => {
  it("should render with given width / height", async () => {
    const { asFragment } = await render(
      <VList style={{ width: 100, height: 800 }}>
        <div>0</div>
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
      </VList>,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});

describe("horizontal", async () => {
  it("should render with given width / height", async () => {
    const { asFragment } = await render(
      <VList horizontal style={{ width: 100, height: 800 }}>
        <div>0</div>
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
      </VList>,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
