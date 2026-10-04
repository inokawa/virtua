import { it, expect } from "vitest";
import { createRawSnippet } from "svelte";
import { screen } from "@testing-library/svelte";
import VMasonry from "./VMasonry.svelte";
import { setupResizeJsDom } from "../../spec/jsdom/dom.js";
import { render } from "../../spec/jsdom/svelte.js";
import { range } from "../../spec/utils.js";

const ITEM_HEIGHT = 50;
const ITEM_WIDTH = 100;
const VIEWPORT_HEIGHT = ITEM_HEIGHT * 10;
const VIEWPORT_WIDTH = ITEM_WIDTH * 4;

setupResizeJsDom({
  itemSize: { width: ITEM_WIDTH, height: ITEM_HEIGHT },
  viewportSize: { width: VIEWPORT_WIDTH, height: VIEWPORT_HEIGHT },
});

const itemSnippet = createRawSnippet<[number, number]>((item) => ({
  render: () => `<div>${item()}</div>`,
}));

it("should pass attributes to element", async () => {
  const { container } = await render(VMasonry, {
    props: {
      lanes: 2,
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

it("should render 0 children", async () => {
  const { container } = await render(VMasonry, {
    props: { lanes: 2, data: [], children: itemSnippet },
  });
  expect(container.innerHTML).toMatchSnapshot();
});

it("should lay out the items again with the new lanes without remounting them", async () => {
  const res = await render(VMasonry, {
    props: { lanes: 2, data: range(100), children: itemSnippet },
  });
  const item = screen.getByText("0");
  expect(item.parentElement!.style.width).toBe("50%");

  await res.rerender({ lanes: 4 });
  expect(screen.getByText("0")).toBe(item);
  expect(item.parentElement!.style.width).toBe("25%");
});
