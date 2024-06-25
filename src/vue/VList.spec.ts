import { it, expect, describe } from "vitest";
import { defineComponent, h } from "vue";
import { render } from "@testing-library/vue";
import { VList } from "./VList";
import { setupJsDomEnv } from "../../scripts/spec";

const ITEM_HEIGHT = 50;
const ITEM_WIDTH = 100;
const VIEWPORT_HEIGHT = ITEM_HEIGHT * 10;

setupJsDomEnv({
  itemWidth: ITEM_WIDTH,
  itemHeight: ITEM_HEIGHT,
  viewportHeight: VIEWPORT_HEIGHT,
});

const range = (length: number) => Array.from({ length }).map((_, i) => i);

it("should pass attributes to element", () => {
  const wrapper = render(VList, {
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
    slots: { default: (data: any) => h("div", { key: data }, data) },
  });
  expect(wrapper.baseElement).toMatchSnapshot();
});

describe("vertical", () => {
  it("should render 0 children", () => {
    const wrapper = render(VList, {
      props: {
        data: [],
      },
      slots: { default: (data: any) => h("div", { key: data }, data) },
    });
    expect(wrapper.baseElement).toMatchSnapshot();
  });

  it("should render 1 children", () => {
    const wrapper = render(VList, {
      props: {
        data: range(1),
      },
      slots: { default: (data: any) => h("div", { key: data }, data) },
    });
    expect(wrapper.baseElement).toMatchSnapshot();
  });

  it("should render 5 children", () => {
    const wrapper = render(VList, {
      props: {
        data: range(5),
      },
      slots: { default: (data: any) => h("div", { key: data }, data) },
    });
    expect(wrapper.baseElement).toMatchSnapshot();
  });

  it("should render 100 children", () => {
    const wrapper = render(VList, {
      props: {
        data: range(100),
      },
      slots: { default: (data: any) => h("div", { key: data }, data) },
    });
    expect(wrapper.baseElement).toMatchSnapshot();
  });

  it("should render 1000 children", () => {
    const wrapper = render(VList, {
      props: {
        data: range(1000),
      },
      slots: { default: (data: any) => h("div", { key: data }, data) },
    });
    expect(wrapper.baseElement).toMatchSnapshot();
  });

  it("should render 10000 children", () => {
    const wrapper = render(VList, {
      props: {
        data: range(10000),
      },
      slots: { default: (data: any) => h("div", { key: data }, data) },
    });
    expect(wrapper.baseElement).toMatchSnapshot();
  });

  it("should render component", () => {
    const Comp = defineComponent({
      props: ["data"],
      setup(props) {
        return () => {
          return h("div", props.data);
        };
      },
    });
    const wrapper = render(VList, {
      props: {
        data: range(3),
      },
      slots: { default: (data: any) => h(Comp, { key: data, data }) },
    });
    expect(wrapper.baseElement).toMatchSnapshot();
  });

  it("should render with given width / height", () => {
    const wrapper = render(VList, {
      props: {
        data: range(5),
      },
      attrs: {
        style: { width: "100px", height: "800px" },
      },
      slots: { default: (data: any) => h("div", { key: data }, data) },
    });
    expect(wrapper.baseElement).toMatchSnapshot();
  });
});

describe("horizontal", () => {
  it("should render 0 children", () => {
    const wrapper = render(VList, {
      props: {
        data: [],
        horizontal: true,
      },
      slots: { default: (data: any) => h("div", { key: data }, data) },
    });
    expect(wrapper.baseElement).toMatchSnapshot();
  });

  it("should render 1 children", () => {
    const wrapper = render(VList, {
      props: {
        data: range(1),
        horizontal: true,
      },
      slots: { default: (data: any) => h("div", { key: data }, data) },
    });
    expect(wrapper.baseElement).toMatchSnapshot();
  });

  it("should render 5 children", () => {
    const wrapper = render(VList, {
      props: {
        data: range(5),
        horizontal: true,
      },
      slots: { default: (data: any) => h("div", { key: data }, data) },
    });
    expect(wrapper.baseElement).toMatchSnapshot();
  });

  it("should render 100 children", () => {
    const wrapper = render(VList, {
      props: {
        data: range(100),
        horizontal: true,
      },
      slots: { default: (data: any) => h("div", { key: data }, data) },
    });
    expect(wrapper.baseElement).toMatchSnapshot();
  });

  it("should render 1000 children", () => {
    const wrapper = render(VList, {
      props: {
        data: range(1000),
        horizontal: true,
      },
      slots: { default: (data: any) => h("div", { key: data }, data) },
    });
    expect(wrapper.baseElement).toMatchSnapshot();
  });

  it("should render 10000 children", () => {
    const wrapper = render(VList, {
      props: {
        data: range(10000),
        horizontal: true,
      },
      slots: { default: (data: any) => h("div", { key: data }, data) },
    });
    expect(wrapper.baseElement).toMatchSnapshot();
  });

  it("should render component", () => {
    const Comp = defineComponent({
      props: ["data"],
      setup(props) {
        return () => {
          return h("div", props.data);
        };
      },
    });
    const wrapper = render(VList, {
      props: {
        data: range(3),
        horizontal: true,
      },
      slots: { default: (data: any) => h(Comp, { key: data, data }) },
    });
    expect(wrapper.baseElement).toMatchSnapshot();
  });

  it("should render with given width / height", () => {
    const wrapper = render(VList, {
      props: {
        data: range(5),
        horizontal: true,
      },
      attrs: {
        style: { width: "100px", height: "800px" },
      },
      slots: { default: (data: any) => h("div", { key: data }, data) },
    });
    expect(wrapper.baseElement).toMatchSnapshot();
  });
});
