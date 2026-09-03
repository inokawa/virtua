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

const attrs = {
  id: "id",
  class: "class",
  tabindex: 0,
  role: "list",
  "aria-label": "test",
  style: "background: red; width: 100px; height: 800px;",
};

describe("vertical", () => {
  it("should pass attributes to element", async () => {
    const { container } = await render(VList, {
      props: { data: range(1), ...attrs, children: itemSnippet },
    });
    expect(container.innerHTML).toMatchSnapshot();
  });
});

describe("horizontal", () => {
  it("should pass attributes to element", async () => {
    const { container } = await render(VList, {
      props: {
        data: range(1),
        horizontal: true,
        ...attrs,
        children: itemSnippet,
      },
    });
    expect(container.innerHTML).toMatchSnapshot();
  });
});
