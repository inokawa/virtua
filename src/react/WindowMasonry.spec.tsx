import { it, expect } from "vitest";
import { WindowMasonry } from "./WindowMasonry.js";
import { setupResizeJsDom } from "../../spec/jsdom/dom.js";
import { render } from "../../spec/jsdom/react.js";
import { range } from "../../spec/utils.js";

const ITEM_HEIGHT = 50;
const ITEM_WIDTH = 100;

setupResizeJsDom({
  itemSize: { width: ITEM_WIDTH, height: ITEM_HEIGHT },
});

it("should render 0 children", async () => {
  const { asFragment } = await render(
    <WindowMasonry lanes={2} data={[]}>
      {(i) => <div>{i}</div>}
    </WindowMasonry>,
  );
  expect(asFragment()).toMatchSnapshot();
});

it("should lay out the items again with the new lanes without remounting them", async () => {
  const res = await render(
    <WindowMasonry lanes={2} data={range(100)}>
      {(i) => <div>{i}</div>}
    </WindowMasonry>,
  );
  const item = res.getByText("0");
  expect((item.parentElement as HTMLElement).style.width).toBe("50%");

  res.rerender(
    <WindowMasonry lanes={4} data={range(100)}>
      {(i) => <div>{i}</div>}
    </WindowMasonry>,
  );
  expect(res.getByText("0")).toBe(item);
  expect((item.parentElement as HTMLElement).style.width).toBe("25%");
});
