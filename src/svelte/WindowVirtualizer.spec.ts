import { it, expect, describe, afterEach } from "vitest";
import { cleanup } from "@testing-library/svelte";
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

afterEach(cleanup);

describe("vertical", () => {
  it("should render 0 children", async () => {
    const { container } = await render(WindowVirtualizer, {
      props: { data: [], children: itemSnippet },
    });
    expect(container.innerHTML).toMatchSnapshot();
  });

  it("should render 1 children", async () => {
    const { container } = await render(WindowVirtualizer, {
      props: { data: range(1), children: itemSnippet },
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

  it("should render 10000 children", async () => {
    const { container } = await render(WindowVirtualizer, {
      props: { data: range(10000), children: itemSnippet },
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

  it("should render 1 children", async () => {
    const { container } = await render(WindowVirtualizer, {
      props: { data: range(1), horizontal: true, children: itemSnippet },
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

  it("should render 10000 children", async () => {
    const { container } = await render(WindowVirtualizer, {
      props: { data: range(10000), horizontal: true, children: itemSnippet },
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
