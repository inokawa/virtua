/**
 * @jsxImportSource solid-js
 */
import { it, expect, vi } from "vitest";
import { createSignal } from "solid-js";
import { VMasonry } from "./VMasonry.js";
import { setupResizeJsDom } from "../../spec/jsdom/dom.js";
import { render } from "../../spec/jsdom/solid.js";
import { range } from "../../spec/utils.js";

const ITEM_HEIGHT = 50;
const ITEM_WIDTH = 100;
const VIEWPORT_HEIGHT = ITEM_HEIGHT * 10;
const VIEWPORT_WIDTH = ITEM_WIDTH * 4;

setupResizeJsDom({
  itemSize: { width: ITEM_WIDTH, height: ITEM_HEIGHT },
  viewportSize: { width: VIEWPORT_WIDTH, height: VIEWPORT_HEIGHT },
});

it("should pass attributes to element", () => {
  const { asFragment } = render(() => (
    <VMasonry
      lanes={2}
      data={range(1)}
      id="id"
      class="class"
      tabIndex={0}
      role="list"
      aria-label="test"
      style={{ background: "red" }}
    >
      {(i) => <div>{i}</div>}
    </VMasonry>
  ));
  expect(asFragment()).toMatchSnapshot();
});

it("should render 0 children", () => {
  const { asFragment } = render(() => (
    <VMasonry lanes={2} data={[]}>
      {(i) => <div>{i}</div>}
    </VMasonry>
  ));
  expect(asFragment()).toMatchSnapshot();
});

it("should lay out the items again with the new lanes without remounting them", () => {
  const [lanes, setLanes] = createSignal(2);
  const res = render(() => (
    <VMasonry lanes={lanes()} data={range(100)}>
      {(i) => <div>{i}</div>}
    </VMasonry>
  ));
  const item = res.getByText("0");
  expect((item.parentElement as HTMLElement).style.width).toBe("50%");

  setLanes(4);
  vi.runAllTicks();
  expect(res.getByText("0")).toBe(item);
  expect((item.parentElement as HTMLElement).style.width).toBe("25%");
});
