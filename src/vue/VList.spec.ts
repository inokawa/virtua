import { it, expect, describe } from "vitest";
import { h } from "vue";
import { VList } from "./VList.js";
import { setupResizeJsDom } from "../../spec/dom.js";
import { render, SlotType } from "../../spec/vue.js";

const ITEM_HEIGHT = 50;
const ITEM_WIDTH = 100;
const VIEWPORT_HEIGHT = ITEM_HEIGHT * 10;

setupResizeJsDom({
  itemSize: { width: ITEM_WIDTH, height: ITEM_HEIGHT },
  viewportSize: { width: ITEM_WIDTH, height: VIEWPORT_HEIGHT },
});

const range = (length: number) => Array.from({ length }).map((_, i) => i);

const attrs = {
  id: "id",
  className: "class",
  "tab-index": 0,
  role: "list",
  "aria-label": "test",
  style: { background: "red", width: "100px", height: "800px" },
};

const slots = {
  default: ({ item: data }: SlotType<typeof VList<number>>) =>
    h("div", { key: data }, data),
};

describe("vertical", async () => {
  it("should pass attributes to element", async () => {
    const wrapper = await render(VList<number>, {
      props: { data: range(1) },
      attrs,
      slots,
    });
    expect(wrapper.html()).toMatchSnapshot();
  });
});

describe("horizontal", async () => {
  it("should pass attributes to element", async () => {
    const wrapper = await render(VList<number>, {
      props: { data: range(1), horizontal: true },
      attrs,
      slots,
    });
    expect(wrapper.html()).toMatchSnapshot();
  });
});
