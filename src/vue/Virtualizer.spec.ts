import { it, expect, describe, afterEach } from "vitest";
import { defineComponent, h } from "vue";
import { cleanup } from "@testing-library/vue";
import { Virtualizer } from "./Virtualizer.js";
import { setupResizeJsDom } from "../../spec/dom.js";
import { render } from "../../spec/vue.js";

const ITEM_HEIGHT = 50;
const ITEM_WIDTH = 100;
const VIEWPORT_HEIGHT = ITEM_HEIGHT * 10;

setupResizeJsDom({
  itemSize: { width: ITEM_WIDTH, height: ITEM_HEIGHT },
  viewportSize: { width: ITEM_WIDTH, height: VIEWPORT_HEIGHT },
});

const range = (length: number) => Array.from({ length }).map((_, i) => i);

// Virtualizer observes its parent element as the scrollable container, so it
// has to be rendered inside a scrollable element.
const ScrollContainer = defineComponent({
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () =>
      h("div", { style: { overflow: "auto" } }, [
        h(Virtualizer, attrs as any, slots),
      ]);
  },
});

afterEach(cleanup);

it("should change components", async () => {
  const wrapper = await render(ScrollContainer, {
    attrs: {
      data: range(5),
      as: "ul",
      item: "li",
    },
    slots: { default: ({ item: data }: any) => h("div", { key: data }, data) },
  });
  expect(wrapper.html()).toMatchSnapshot();
});

describe("vertical", async () => {
  it("should render 0 children", async () => {
    const wrapper = await render(ScrollContainer, {
      attrs: {
        data: [],
      },
      slots: {
        default: ({ item: data }: any) => h("div", { key: data }, data),
      },
    });
    expect(wrapper.html()).toMatchSnapshot();
  });

  it("should render 1 children", async () => {
    const wrapper = await render(ScrollContainer, {
      attrs: {
        data: range(1),
      },
      slots: {
        default: ({ item: data }: any) => h("div", { key: data }, data),
      },
    });
    expect(wrapper.html()).toMatchSnapshot();
  });

  it("should render 5 children", async () => {
    const wrapper = await render(ScrollContainer, {
      attrs: {
        data: range(5),
      },
      slots: {
        default: ({ item: data }: any) => h("div", { key: data }, data),
      },
    });
    expect(wrapper.html()).toMatchSnapshot();
  });

  it("should render 100 children", async () => {
    const wrapper = await render(ScrollContainer, {
      attrs: {
        data: range(100),
      },
      slots: {
        default: ({ item: data }: any) => h("div", { key: data }, data),
      },
    });
    expect(wrapper.html()).toMatchSnapshot();
  });

  it("should render 10000 children", async () => {
    const wrapper = await render(ScrollContainer, {
      attrs: {
        data: range(10000),
      },
      slots: {
        default: ({ item: data }: any) => h("div", { key: data }, data),
      },
    });
    expect(wrapper.html()).toMatchSnapshot();
  });

  it("should render component", async () => {
    const Comp = defineComponent({
      props: ["data"],
      setup(props) {
        return () => {
          return h("div", props.data);
        };
      },
    });
    const wrapper = await render(ScrollContainer, {
      attrs: {
        data: range(3),
      },
      slots: { default: ({ item: data }: any) => h(Comp, { key: data, data }) },
    });
    expect(wrapper.html()).toMatchSnapshot();
  });
});

describe("horizontal", async () => {
  it("should render 0 children", async () => {
    const wrapper = await render(ScrollContainer, {
      attrs: {
        data: [],
        horizontal: true,
      },
      slots: {
        default: ({ item: data }: any) => h("div", { key: data }, data),
      },
    });
    expect(wrapper.html()).toMatchSnapshot();
  });

  it("should render 1 children", async () => {
    const wrapper = await render(ScrollContainer, {
      attrs: {
        data: range(1),
        horizontal: true,
      },
      slots: {
        default: ({ item: data }: any) => h("div", { key: data }, data),
      },
    });
    expect(wrapper.html()).toMatchSnapshot();
  });

  it("should render 5 children", async () => {
    const wrapper = await render(ScrollContainer, {
      attrs: {
        data: range(5),
        horizontal: true,
      },
      slots: {
        default: ({ item: data }: any) => h("div", { key: data }, data),
      },
    });
    expect(wrapper.html()).toMatchSnapshot();
  });

  it("should render 100 children", async () => {
    const wrapper = await render(ScrollContainer, {
      attrs: {
        data: range(100),
        horizontal: true,
      },
      slots: {
        default: ({ item: data }: any) => h("div", { key: data }, data),
      },
    });
    expect(wrapper.html()).toMatchSnapshot();
  });

  it("should render 10000 children", async () => {
    const wrapper = await render(ScrollContainer, {
      attrs: {
        data: range(10000),
        horizontal: true,
      },
      slots: {
        default: ({ item: data }: any) => h("div", { key: data }, data),
      },
    });
    expect(wrapper.html()).toMatchSnapshot();
  });

  it("should render component", async () => {
    const Comp = defineComponent({
      props: ["data"],
      setup(props) {
        return () => {
          return h("div", props.data);
        };
      },
    });
    const wrapper = await render(ScrollContainer, {
      attrs: {
        data: range(3),
        horizontal: true,
      },
      slots: { default: ({ item: data }: any) => h(Comp, { key: data, data }) },
    });
    expect(wrapper.html()).toMatchSnapshot();
  });
});
