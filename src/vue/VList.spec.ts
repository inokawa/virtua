import { it, expect, describe, afterEach } from "vitest";
import { defineComponent, h } from "vue";
import { cleanup } from "@testing-library/vue";
import { VList } from "./VList.js";
import { setupResizeJsDom } from "../../scripts/spec.js";
import { render } from "../../scripts/spec-vue.js";

const ITEM_HEIGHT = 50;
const ITEM_WIDTH = 100;
const VIEWPORT_HEIGHT = ITEM_HEIGHT * 10;

setupResizeJsDom({
  itemSize: { width: ITEM_WIDTH, height: ITEM_HEIGHT },
  viewportSize: { width: ITEM_WIDTH, height: VIEWPORT_HEIGHT },
});

const range = (length: number) => Array.from({ length }).map((_, i) => i);

afterEach(cleanup);

it("should pass attributes to element", async () => {
  const wrapper = await render(VList, {
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
    slots: { default: ({ item: data }: any) => h("div", { key: data }, data) },
  });
  expect(wrapper.html()).toMatchSnapshot();
});

it("should render with keepMounted", async () => {
  const wrapper = await render(VList, {
    props: {
      data: range(100),
      keepMounted: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90],
    },
    slots: {
      default: ({ item: data }: any) => h("div", { key: data }, data),
    },
  });
  expect(wrapper.html()).toMatchSnapshot();
});

describe("vertical", async () => {
  it("should render 0 children", async () => {
    const wrapper = await render(VList, {
      props: {
        data: [],
      },
      slots: {
        default: ({ item: data }: any) => h("div", { key: data }, data),
      },
    });
    expect(wrapper.html()).toMatchSnapshot();
  });

  it("should render 1 children", async () => {
    const wrapper = await render(VList, {
      props: {
        data: range(1),
      },
      slots: {
        default: ({ item: data }: any) => h("div", { key: data }, data),
      },
    });
    expect(wrapper.html()).toMatchSnapshot();
  });

  it("should render 5 children", async () => {
    const wrapper = await render(VList, {
      props: {
        data: range(5),
      },
      slots: {
        default: ({ item: data }: any) => h("div", { key: data }, data),
      },
    });
    expect(wrapper.html()).toMatchSnapshot();
  });

  it("should render 100 children", async () => {
    const wrapper = await render(VList, {
      props: {
        data: range(100),
      },
      slots: {
        default: ({ item: data }: any) => h("div", { key: data }, data),
      },
    });
    expect(wrapper.html()).toMatchSnapshot();
  });

  it("should render 10000 children", async () => {
    const wrapper = await render(VList, {
      props: {
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
    const wrapper = await render(VList, {
      props: {
        data: range(3),
      },
      slots: { default: ({ item: data }: any) => h(Comp, { key: data, data }) },
    });
    expect(wrapper.html()).toMatchSnapshot();
  });

  it("should render with given width / height", async () => {
    const wrapper = await render(VList, {
      props: {
        data: range(5),
      },
      attrs: {
        style: { width: "100px", height: "800px" },
      },
      slots: {
        default: ({ item: data }: any) => h("div", { key: data }, data),
      },
    });
    expect(wrapper.html()).toMatchSnapshot();
  });
});

describe("horizontal", async () => {
  it("should render 0 children", async () => {
    const wrapper = await render(VList, {
      props: {
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
    const wrapper = await render(VList, {
      props: {
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
    const wrapper = await render(VList, {
      props: {
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
    const wrapper = await render(VList, {
      props: {
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
    const wrapper = await render(VList, {
      props: {
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
    const wrapper = await render(VList, {
      props: {
        data: range(3),
        horizontal: true,
      },
      slots: { default: ({ item: data }: any) => h(Comp, { key: data, data }) },
    });
    expect(wrapper.html()).toMatchSnapshot();
  });

  it("should render with given width / height", async () => {
    const wrapper = await render(VList, {
      props: {
        data: range(5),
        horizontal: true,
      },
      attrs: {
        style: { width: "100px", height: "800px" },
      },
      slots: {
        default: ({ item: data }: any) => h("div", { key: data }, data),
      },
    });
    expect(wrapper.html()).toMatchSnapshot();
  });
});
