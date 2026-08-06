import { it, expect, describe, afterEach, vi } from "vitest";
import { cleanup, render as renderRaw } from "@testing-library/svelte";
import { createRawSnippet, tick } from "svelte";
import Host from "../../spec/svelte/VirtualizerHost.svelte";
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

const itemSnippet = createRawSnippet<[number, number]>((item) => ({
  render: () => `<div>${item()}</div>`,
}));

const componentSnippet = createRawSnippet<[number, number]>((item) => ({
  render: () => `<div><div>${item()}</div></div>`,
}));

afterEach(cleanup);

it("should change components", async () => {
  const { container } = await render(Host, {
    props: { data: range(5), as: "ul", item: "li", children: itemSnippet },
  });
  expect(container.innerHTML).toMatchSnapshot();
});

describe("vertical", () => {
  it("should render 0 children", async () => {
    const { container } = await render(Host, {
      props: { data: [], children: itemSnippet },
    });
    expect(container.innerHTML).toMatchSnapshot();
  });

  it("should render 1 children", async () => {
    const { container } = await render(Host, {
      props: { data: range(1), children: itemSnippet },
    });
    expect(container.innerHTML).toMatchSnapshot();
  });

  it("should render 5 children", async () => {
    const { container } = await render(Host, {
      props: { data: range(5), children: itemSnippet },
    });
    expect(container.innerHTML).toMatchSnapshot();
  });

  it("should render 100 children", async () => {
    const { container } = await render(Host, {
      props: { data: range(100), children: itemSnippet },
    });
    expect(container.innerHTML).toMatchSnapshot();
  });

  it("should render 10000 children", async () => {
    const { container } = await render(Host, {
      props: { data: range(10000), children: itemSnippet },
    });
    expect(container.innerHTML).toMatchSnapshot();
  });

  it("should render component", async () => {
    const { container } = await render(Host, {
      props: { data: range(3), children: componentSnippet },
    });
    expect(container.innerHTML).toMatchSnapshot();
  });
});

describe("horizontal", () => {
  it("should render 0 children", async () => {
    const { container } = await render(Host, {
      props: { data: [], horizontal: true, children: itemSnippet },
    });
    expect(container.innerHTML).toMatchSnapshot();
  });

  it("should render 1 children", async () => {
    const { container } = await render(Host, {
      props: { data: range(1), horizontal: true, children: itemSnippet },
    });
    expect(container.innerHTML).toMatchSnapshot();
  });

  it("should render 5 children", async () => {
    const { container } = await render(Host, {
      props: { data: range(5), horizontal: true, children: itemSnippet },
    });
    expect(container.innerHTML).toMatchSnapshot();
  });

  it("should render 100 children", async () => {
    const { container } = await render(Host, {
      props: { data: range(100), horizontal: true, children: itemSnippet },
    });
    expect(container.innerHTML).toMatchSnapshot();
  });

  it("should render 10000 children", async () => {
    const { container } = await render(Host, {
      props: { data: range(10000), horizontal: true, children: itemSnippet },
    });
    expect(container.innerHTML).toMatchSnapshot();
  });

  it("should render component", async () => {
    const { container } = await render(Host, {
      props: { data: range(3), horizontal: true, children: componentSnippet },
    });
    expect(container.innerHTML).toMatchSnapshot();
  });
});

describe("unmount before tick resolves", () => {
  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it("should not invoke ResizeObserver callback after unmount", async () => {
    const ResizeObserver = vi.fn();
    vi.stubGlobal("ResizeObserver", ResizeObserver);

    // Render synchronously; `tick().then(...)` is still pending
    const result = renderRaw(Host, {
      props: { data: range(10), children: itemSnippet },
    });

    // Unmount before the `tick()` resolves.
    result.unmount();

    // Wait for the `tick().then(...)` to resolve
    await tick();

    // The `ResizeObserver` should never have been created, since we disposed
    // of it's wrapper before we observed any DOM nodes
    expect(ResizeObserver).not.toHaveBeenCalled();
  });
});
