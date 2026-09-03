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

it("should pass attributes to element", async () => {
  const wrapper = await render(VList<number>, {
    props: {
      data: range(1),
    },
    attrs: {
      id: "id",
      className: "class",
      "tab-index": 0,
      role: "list",
      "aria-label": "test",
      style: { background: "red" },
    },
    slots: {
      default: ({ item: data }: SlotType<typeof VList<number>>) =>
        h("div", { key: data }, data),
    },
  });
  expect(wrapper.html()).toMatchSnapshot();
});

it("should render with keepMounted", async () => {
  const wrapper = await render(VList<number>, {
    props: {
      data: range(100),
      keepMounted: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90],
    },
    slots: {
      default: ({ item: data }: SlotType<typeof VList<number>>) =>
        h("div", { key: data }, data),
    },
  });
  expect(wrapper.html()).toMatchSnapshot();
});

describe("vertical", async () => {
  it("should render with given width / height", async () => {
    const wrapper = await render(VList<number>, {
      props: {
        data: range(5),
      },
      attrs: {
        style: { width: "100px", height: "800px" },
      },
      slots: {
        default: ({ item: data }: SlotType<typeof VList<number>>) =>
          h("div", { key: data }, data),
      },
    });
    expect(wrapper.html()).toMatchSnapshot();
  });
});

describe("horizontal", async () => {
  it("should render with given width / height", async () => {
    const wrapper = await render(VList<number>, {
      props: {
        data: range(5),
        horizontal: true,
      },
      attrs: {
        style: { width: "100px", height: "800px" },
      },
      slots: {
        default: ({ item: data }: SlotType<typeof VList<number>>) =>
          h("div", { key: data }, data),
      },
    });
    expect(wrapper.html()).toMatchSnapshot();
  });
});
