/**
 * @jsxImportSource solid-js
 */
import { it, expect, describe } from "vitest";
import { VList } from "./VList.js";
import { setupResizeJsDom } from "../../spec/dom.js";
import { render } from "../../spec/solid.js";

const ITEM_HEIGHT = 50;
const ITEM_WIDTH = 100;
const VIEWPORT_HEIGHT = ITEM_HEIGHT * 10;

setupResizeJsDom({
  itemSize: { width: ITEM_WIDTH, height: ITEM_HEIGHT },
  viewportSize: { width: ITEM_WIDTH, height: VIEWPORT_HEIGHT },
});

const range = (length: number) => Array.from({ length }).map((_, i) => i);

it("should pass attributes to element", () => {
  const { asFragment } = render(() => (
    <VList
      data={range(1)}
      id="id"
      class="class"
      tab-index={0}
      role="list"
      aria-label="test"
      style={{ background: "red" }}
    >
      {(d) => <div>{d}</div>}
    </VList>
  ));
  expect(asFragment()).toMatchSnapshot();
});

it("should render with keepMounted", () => {
  const { asFragment } = render(() => (
    <VList
      data={range(100)}
      keepMounted={[0, 10, 20, 30, 40, 50, 60, 70, 80, 90]}
    >
      {(d) => <div>{d}</div>}
    </VList>
  ));
  expect(asFragment()).toMatchSnapshot();
});

describe("vertical", () => {
  it("should render with given width / height", () => {
    const { asFragment } = render(() => (
      <VList data={range(5)} style={{ width: "100px", height: "800px" }}>
        {(d) => <div>{d}</div>}
      </VList>
    ));
    expect(asFragment()).toMatchSnapshot();
  });
});

describe("horizontal", () => {
  it("should render with given width / height", () => {
    const { asFragment } = render(() => (
      <VList
        data={range(5)}
        style={{ width: "100px", height: "800px" }}
        horizontal
      >
        {(d) => <div>{d}</div>}
      </VList>
    ));
    expect(asFragment()).toMatchSnapshot();
  });
});
