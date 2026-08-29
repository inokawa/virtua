import { it, expect, describe } from "vitest";
import { createRawSnippet } from "svelte";
import VList from "./VList.svelte";
import { setupResizeJsDom } from "../../spec/dom.js";
import { render } from "../../spec/svelte.js";

const ITEM_HEIGHT = 50;
const ITEM_WIDTH = 100;
const VIEWPORT_HEIGHT = ITEM_HEIGHT * 10;

setupResizeJsDom({
  itemSize: { width: ITEM_WIDTH, height: ITEM_HEIGHT },
  viewportSize: { width: ITEM_WIDTH, height: VIEWPORT_HEIGHT },
});

const range = (length: number) => Array.from({ length }).map((_, i) => i);

// A render-prop that renders a plain element for each item.
const itemSnippet = createRawSnippet<[number, number]>((item) => ({
  render: () => `<div>${item()}</div>`,
}));

// A render-prop that renders a nested element, mirroring the "component" cases
// of the other frameworks (a custom component wrapping the item).
const componentSnippet = createRawSnippet<[number, number]>((item) => ({
  render: () => `<div><div>${item()}</div></div>`,
}));

it("should pass attributes to element", async () => {
  const { container } = await render(VList, {
    props: {
      data: range(1),
      id: "id",
      class: "class",
      tabindex: 0,
      role: "list",
      "aria-label": "test",
      style: "background: red;",
      children: itemSnippet,
    },
  });
  expect(container.innerHTML).toMatchSnapshot();
});

it("should render with keepMounted", async () => {
  const { container } = await render(VList, {
    props: {
      data: range(100),
      keepMounted: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90],
      children: itemSnippet,
    },
  });
  expect(container.innerHTML).toMatchSnapshot();
});

describe("vertical", () => {
  it("should render 0 children", async () => {
    const { container } = await render(VList, {
      props: { data: [], children: itemSnippet },
    });
    expect(container.innerHTML).toMatchSnapshot();
  });

  it("should render 1 children", async () => {
    const { container } = await render(VList, {
      props: { data: range(1), children: itemSnippet },
    });
    expect(container.innerHTML).toMatchSnapshot();
  });

  it("should render 5 children", async () => {
    const { container } = await render(VList, {
      props: { data: range(5), children: itemSnippet },
    });
    expect(container.innerHTML).toMatchSnapshot();
  });

  it("should render 100 children", async () => {
    const { container } = await render(VList, {
      props: { data: range(100), children: itemSnippet },
    });
    expect(container.innerHTML).toMatchSnapshot();
  });

  it("should render 10000 children", async () => {
    const { container } = await render(VList, {
      props: { data: range(10000), children: itemSnippet },
    });
    expect(container.innerHTML).toMatchSnapshot();
  });

  it("should render component", async () => {
    const { container } = await render(VList, {
      props: { data: range(3), children: componentSnippet },
    });
    expect(container.innerHTML).toMatchSnapshot();
  });

  it("should render with given width / height", async () => {
    const { container } = await render(VList, {
      props: {
        data: range(5),
        style: "width: 100px; height: 800px;",
        children: itemSnippet,
      },
    });
    expect(container.innerHTML).toMatchSnapshot();
  });
});

describe("horizontal", () => {
  it("should render 0 children", async () => {
    const { container } = await render(VList, {
      props: { data: [], horizontal: true, children: itemSnippet },
    });
    expect(container.innerHTML).toMatchSnapshot();
  });

  it("should render 1 children", async () => {
    const { container } = await render(VList, {
      props: { data: range(1), horizontal: true, children: itemSnippet },
    });
    expect(container.innerHTML).toMatchSnapshot();
  });

  it("should render 5 children", async () => {
    const { container } = await render(VList, {
      props: { data: range(5), horizontal: true, children: itemSnippet },
    });
    expect(container.innerHTML).toMatchSnapshot();
  });

  it("should render 100 children", async () => {
    const { container } = await render(VList, {
      props: { data: range(100), horizontal: true, children: itemSnippet },
    });
    expect(container.innerHTML).toMatchSnapshot();
  });

  it("should render 10000 children", async () => {
    const { container } = await render(VList, {
      props: { data: range(10000), horizontal: true, children: itemSnippet },
    });
    expect(container.innerHTML).toMatchSnapshot();
  });

  it("should render component", async () => {
    const { container } = await render(VList, {
      props: { data: range(3), horizontal: true, children: componentSnippet },
    });
    expect(container.innerHTML).toMatchSnapshot();
  });

  it("should render with given width / height", async () => {
    const { container } = await render(VList, {
      props: {
        data: range(5),
        horizontal: true,
        style: "width: 100px; height: 800px;",
        children: itemSnippet,
      },
    });
    expect(container.innerHTML).toMatchSnapshot();
  });
});
