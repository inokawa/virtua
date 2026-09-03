import { it, expect, describe } from "vitest";
import { defineComponent, h } from "vue";
import { WindowVirtualizer } from "./WindowVirtualizer.js";
import { setupResizeJsDom } from "../../spec/dom.js";
import { render, SlotType } from "../../spec/vue.js";

setupResizeJsDom({
  itemSize: { width: 100, height: 50 },
});

const range = (length: number) => Array.from({ length }).map((_, i) => i);

it("should pass attributes to element", async () => {
  const wrapper = await render(WindowVirtualizer<number>, {
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
      default: ({ item: data }: SlotType<typeof WindowVirtualizer<number>>) =>
        h("div", { key: data }, data),
    },
  });
  expect(wrapper.html()).toMatchSnapshot();
});

describe("vertical", async () => {
  it("should render 0 children", async () => {
    const wrapper = await render(WindowVirtualizer<number>, {
      props: {
        data: [],
      },
      slots: {
        default: ({ item: data }: SlotType<typeof WindowVirtualizer<number>>) =>
          h("div", { key: data }, data),
      },
    });
    expect(wrapper.html()).toMatchSnapshot();
  });

  it("should render 5 children", async () => {
    const wrapper = await render(WindowVirtualizer<number>, {
      props: {
        data: range(5),
      },
      slots: {
        default: ({ item: data }: SlotType<typeof WindowVirtualizer<number>>) =>
          h("div", { key: data }, data),
      },
    });
    expect(wrapper.html()).toMatchSnapshot();
  });

  it("should render 100 children", async () => {
    const wrapper = await render(WindowVirtualizer<number>, {
      props: {
        data: range(100),
      },
      slots: {
        default: ({ item: data }: SlotType<typeof WindowVirtualizer<number>>) =>
          h("div", { key: data }, data),
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
    const wrapper = await render(WindowVirtualizer<number>, {
      props: {
        data: range(3),
      },
      slots: {
        default: ({ item: data }: SlotType<typeof WindowVirtualizer<number>>) =>
          h(Comp, { key: data, data }),
      },
    });
    expect(wrapper.html()).toMatchSnapshot();
  });
});

describe("horizontal", async () => {
  it("should render 0 children", async () => {
    const wrapper = await render(WindowVirtualizer<number>, {
      props: {
        data: [],
        horizontal: true,
      },
      slots: {
        default: ({ item: data }: SlotType<typeof WindowVirtualizer<number>>) =>
          h("div", { key: data }, data),
      },
    });
    expect(wrapper.html()).toMatchSnapshot();
  });

  it("should render 5 children", async () => {
    const wrapper = await render(WindowVirtualizer<number>, {
      props: {
        data: range(5),
        horizontal: true,
      },
      slots: {
        default: ({ item: data }: SlotType<typeof WindowVirtualizer<number>>) =>
          h("div", { key: data }, data),
      },
    });
    expect(wrapper.html()).toMatchSnapshot();
  });

  it("should render 100 children", async () => {
    const wrapper = await render(WindowVirtualizer<number>, {
      props: {
        data: range(100),
        horizontal: true,
      },
      slots: {
        default: ({ item: data }: SlotType<typeof WindowVirtualizer<number>>) =>
          h("div", { key: data }, data),
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
    const wrapper = await render(WindowVirtualizer<number>, {
      props: {
        data: range(3),
        horizontal: true,
      },
      slots: {
        default: ({ item: data }: SlotType<typeof WindowVirtualizer<number>>) =>
          h(Comp, { key: data, data }),
      },
    });
    expect(wrapper.html()).toMatchSnapshot();
  });
});
