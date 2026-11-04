import { it, expect } from "vitest";
import { h } from "vue";
import { WindowMasonry } from "./WindowMasonry.js";
import { setupResizeJsDom } from "../../spec/jsdom/dom.js";
import { render } from "../../spec/jsdom/vue.js";
import { range } from "../../spec/utils.js";

const ITEM_HEIGHT = 50;
const ITEM_WIDTH = 100;

setupResizeJsDom({
  itemSize: { width: ITEM_WIDTH, height: ITEM_HEIGHT },
});

const slots = {
  default: ({ item }: { item: number }) => h("div", item),
};

it("should render 0 children", async () => {
  const wrapper = await render(WindowMasonry<number>, {
    props: { lanes: 2, data: [] },
    slots,
  });
  expect(wrapper.html()).toMatchSnapshot();
});

it("should lay out the items again with the new lanes without remounting them", async () => {
  const res = await render(WindowMasonry<number>, {
    props: { lanes: 2, data: range(100) },
    slots,
  });
  const item = res.getByText("0");
  expect((item.parentElement as HTMLElement).style.width).toBe("50%");

  await res.rerender({ lanes: 4, data: range(100) });
  expect(res.getByText("0")).toBe(item);
  expect((item.parentElement as HTMLElement).style.width).toBe("25%");
});
