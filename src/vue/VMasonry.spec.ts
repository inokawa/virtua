import { it, expect } from "vitest";
import { h } from "vue";
import { VMasonry } from "./VMasonry.js";
import { setupResizeJsDom } from "../../spec/jsdom/dom.js";
import { render } from "../../spec/jsdom/vue.js";
import { range } from "../../spec/utils.js";

const ITEM_HEIGHT = 50;
const ITEM_WIDTH = 100;
const VIEWPORT_HEIGHT = ITEM_HEIGHT * 10;
const VIEWPORT_WIDTH = ITEM_WIDTH * 4;

setupResizeJsDom({
  itemSize: { width: ITEM_WIDTH, height: ITEM_HEIGHT },
  viewportSize: { width: VIEWPORT_WIDTH, height: VIEWPORT_HEIGHT },
});

const slots = {
  default: ({ item }: { item: number }) => h("div", item),
};

it("should pass attributes to element", async () => {
  const wrapper = await render(VMasonry<number>, {
    props: { lanes: 2, data: range(1) },
    attrs: {
      id: "id",
      class: "class",
      tabindex: 0,
      role: "list",
      "aria-label": "test",
      style: { background: "red" },
    },
    slots,
  });
  expect(wrapper.html()).toMatchSnapshot();
});

it("should render 0 children", async () => {
  const wrapper = await render(VMasonry<number>, {
    props: { lanes: 2, data: [] },
    slots,
  });
  expect(wrapper.html()).toMatchSnapshot();
});

it("should lay out the items again with the new lanes without remounting them", async () => {
  const res = await render(VMasonry<number>, {
    props: { lanes: 2, data: range(100) },
    slots,
  });
  const item = res.getByText("0");
  expect((item.parentElement as HTMLElement).style.width).toBe("50%");

  await res.rerender({ lanes: 4, data: range(100) });
  expect(res.getByText("0")).toBe(item);
  expect((item.parentElement as HTMLElement).style.width).toBe("25%");
});
