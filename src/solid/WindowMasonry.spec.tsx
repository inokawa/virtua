/**
 * @jsxImportSource solid-js
 */
import { it, expect, vi } from "vitest";
import { createSignal } from "solid-js";
import { WindowMasonry } from "./WindowMasonry.js";
import { setupResizeJsDom } from "../../spec/jsdom/dom.js";
import { render } from "../../spec/jsdom/solid.js";
import { range } from "../../spec/utils.js";

const ITEM_HEIGHT = 50;
const ITEM_WIDTH = 100;

setupResizeJsDom({
  itemSize: { width: ITEM_WIDTH, height: ITEM_HEIGHT },
});

it("should render 0 children", () => {
  const { asFragment } = render(() => (
    <WindowMasonry lanes={2} data={[]}>
      {(i) => <div>{i}</div>}
    </WindowMasonry>
  ));
  expect(asFragment()).toMatchSnapshot();
});

it("should lay out the items again with the new lanes without remounting them", () => {
  const [lanes, setLanes] = createSignal(2);
  const res = render(() => (
    <WindowMasonry lanes={lanes()} data={range(100)}>
      {(i) => <div>{i}</div>}
    </WindowMasonry>
  ));
  const item = res.getByText("0");
  expect((item.parentElement as HTMLElement).style.width).toBe("50%");

  setLanes(4);
  vi.runAllTicks();
  expect(res.getByText("0")).toBe(item);
  expect((item.parentElement as HTMLElement).style.width).toBe("25%");
});
