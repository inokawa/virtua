import { it, expect, describe, onTestFinished, vi } from "vitest";
import { createRawSnippet, tick } from "svelte";
import Virtualizer from "./Virtualizer.svelte";
import { setupResizeJsDom } from "../../spec/dom.js";
import { render, renderSync } from "../../spec/svelte.js";

const ITEM_HEIGHT = 50;
const ITEM_WIDTH = 100;
const VIEWPORT_HEIGHT = ITEM_HEIGHT * 10;

setupResizeJsDom({
  itemSize: { width: ITEM_WIDTH, height: ITEM_HEIGHT },
  viewportSize: { width: ITEM_WIDTH, height: VIEWPORT_HEIGHT },
});

const range = (length: number) => Array.from({ length }).map((_, i) => i);

const itemSnippet = createRawSnippet<[number, number]>((item) => ({
  render: () => `<div>${item()}</div>`,
}));

const componentSnippet = createRawSnippet<[number, number]>((item) => ({
  render: () => `<div><div>${item()}</div></div>`,
}));

// Virtualizer observes its parent element as the scrollable container, so it has to be rendered inside a scrollable element.
const host = () => {
  const target = document.body.appendChild(document.createElement("div"));
  target.style.overflow = "auto";
  return { target, anchor: target.appendChild(document.createComment("")) };
};

it("should change components", async () => {
  const { container } = await render(Virtualizer, {
    ...host(),
    props: { data: range(5), as: "ul", item: "li", children: itemSnippet },
  });
  expect(container.outerHTML).toMatchSnapshot();
});

it("should render with keepMounted", async () => {
  const { container } = await render(Virtualizer, {
    ...host(),
    props: {
      data: range(100),
      keepMounted: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90],
      children: itemSnippet,
    },
  });
  expect(container.outerHTML).toMatchSnapshot();
});

describe("vertical", () => {
  it("should render 0 children", async () => {
    const { container } = await render(Virtualizer, {
      ...host(),
      props: { data: [], children: itemSnippet },
    });
    expect(container.outerHTML).toMatchSnapshot();
  });

  it("should render 5 children", async () => {
    const { container } = await render(Virtualizer, {
      ...host(),
      props: { data: range(5), children: itemSnippet },
    });
    expect(container.outerHTML).toMatchSnapshot();
  });

  it("should render 100 children", async () => {
    const { container } = await render(Virtualizer, {
      ...host(),
      props: { data: range(100), children: itemSnippet },
    });
    expect(container.outerHTML).toMatchSnapshot();
  });

  it("should render component", async () => {
    const { container } = await render(Virtualizer, {
      ...host(),
      props: { data: range(3), children: componentSnippet },
    });
    expect(container.outerHTML).toMatchSnapshot();
  });
});

describe("horizontal", () => {
  it("should render 0 children", async () => {
    const { container } = await render(Virtualizer, {
      ...host(),
      props: { data: [], horizontal: true, children: itemSnippet },
    });
    expect(container.outerHTML).toMatchSnapshot();
  });

  it("should render 5 children", async () => {
    const { container } = await render(Virtualizer, {
      ...host(),
      props: { data: range(5), horizontal: true, children: itemSnippet },
    });
    expect(container.outerHTML).toMatchSnapshot();
  });

  it("should render 100 children", async () => {
    const { container } = await render(Virtualizer, {
      ...host(),
      props: { data: range(100), horizontal: true, children: itemSnippet },
    });
    expect(container.outerHTML).toMatchSnapshot();
  });

  it("should render component", async () => {
    const { container } = await render(Virtualizer, {
      ...host(),
      props: { data: range(3), horizontal: true, children: componentSnippet },
    });
    expect(container.outerHTML).toMatchSnapshot();
  });
});

it("should not observe if unmounted before tick resolves", async () => {
  const observe = vi.spyOn(global.ResizeObserver.prototype, "observe");
  onTestFinished(() => observe.mockRestore());
  // render without awaiting to unmount while tick() in onMount is pending
  const { unmount } = renderSync(Virtualizer, {
    ...host(),
    props: { data: range(10), children: itemSnippet },
  });
  unmount();
  await tick();
  expect(observe).not.toHaveBeenCalled();
});
