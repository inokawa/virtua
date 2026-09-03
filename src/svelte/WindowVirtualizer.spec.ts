import { it, expect, describe } from "vitest";
import { createRawSnippet } from "svelte";
import WindowVirtualizer from "./WindowVirtualizer.svelte";
import { setupResizeJsDom } from "../../spec/dom.js";
import { render } from "../../spec/svelte.js";

setupResizeJsDom({
  itemSize: { width: 100, height: 50 },
});

const range = (length: number) => Array.from({ length }).map((_, i) => i);

const itemSnippet = createRawSnippet<[number, number]>((item) => ({
  render: () => `<div>${item()}</div>`,
}));

const componentSnippet = createRawSnippet<[number, number]>((item) => ({
  render: () => `<div><div>${item()}</div></div>`,
}));

describe("vertical", () => {
  it("should render 0 children", async () => {
    const { container } = await render(WindowVirtualizer, {
      props: { data: [], children: itemSnippet },
    });
    expect(container.innerHTML).toMatchSnapshot();
  });

  it("should render 5 children", async () => {
    const { container } = await render(WindowVirtualizer, {
      props: { data: range(5), children: itemSnippet },
    });
    expect(container.innerHTML).toMatchSnapshot();
  });

  it("should render 100 children", async () => {
    const { container } = await render(WindowVirtualizer, {
      props: { data: range(100), children: itemSnippet },
    });
    expect(container.innerHTML).toMatchSnapshot();
  });

  it("should render component", async () => {
    const { container } = await render(WindowVirtualizer, {
      props: { data: range(3), children: componentSnippet },
    });
    expect(container.innerHTML).toMatchSnapshot();
  });
});

describe("horizontal", () => {
  it("should render 0 children", async () => {
    const { container } = await render(WindowVirtualizer, {
      props: { data: [], horizontal: true, children: itemSnippet },
    });
    expect(container.innerHTML).toMatchSnapshot();
  });

  it("should render 5 children", async () => {
    const { container } = await render(WindowVirtualizer, {
      props: { data: range(5), horizontal: true, children: itemSnippet },
    });
    expect(container.innerHTML).toMatchSnapshot();
  });

  it("should render 100 children", async () => {
    const { container } = await render(WindowVirtualizer, {
      props: { data: range(100), horizontal: true, children: itemSnippet },
    });
    expect(container.innerHTML).toMatchSnapshot();
  });

  it("should render component", async () => {
    const { container } = await render(WindowVirtualizer, {
      props: { data: range(3), horizontal: true, children: componentSnippet },
    });
    expect(container.innerHTML).toMatchSnapshot();
  });
});
