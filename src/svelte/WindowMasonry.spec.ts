import { it, expect } from "vitest";
import { createRawSnippet } from "svelte";
import { screen } from "@testing-library/svelte";
import WindowMasonry from "./WindowMasonry.svelte";
import { setupResizeJsDom } from "../../spec/jsdom/dom.js";
import { render } from "../../spec/jsdom/svelte.js";
import { range } from "../../spec/utils.js";

setupResizeJsDom({ itemSize: { width: 100, height: 50 } });

const itemSnippet = createRawSnippet<[number, number]>((item) => ({
  render: () => `<div>${item()}</div>`,
}));

it("should pass attributes to the natural height wrapper", async () => {
  const { container } = await render(WindowMasonry, {
    props: {
      lanes: 2,
      data: range(100),
      id: "masonry",
      class: "gallery",
      role: "list",
      "aria-label": "photos",
      style: "background: red;",
      children: itemSnippet,
    },
  });
  const wrapper = container.firstElementChild as HTMLElement;
  expect(wrapper.id).toBe("masonry");
  expect(wrapper.className).toBe("gallery");
  expect(wrapper.getAttribute("role")).toBe("list");
  expect(wrapper.getAttribute("aria-label")).toBe("photos");
  expect(wrapper.style.background).toBe("red");
  expect(wrapper.style.overflowY).toBe("");
  expect(wrapper.style.contain).toBe("");
  expect(wrapper.style.height).toBe("");
});

it("should let the window scroll the masonry's natural height", async () => {
  const { container, component } = await render(WindowMasonry, {
    props: { lanes: 2, data: range(100), children: itemSnippet },
  });
  const wrapper = container.firstElementChild as HTMLElement;
  const masonry = wrapper.firstElementChild as HTMLElement;
  expect(masonry.style.position).toBe("relative");
  expect(masonry.style.height).toBe("2500px");
  expect(component.getViewportSize()).toBe(window.innerHeight);
  expect(component.getScrollSize()).toBe(2500);
});

it("should report at least the document viewport size for short masonry", async () => {
  const { component } = await render(WindowMasonry, {
    props: { lanes: 2, data: range(3), children: itemSnippet },
  });
  expect(component.getViewportSize()).toBe(window.innerHeight);
  expect(component.getScrollSize()).toBe(window.innerHeight);
  expect(component.getItemOffset(2)).toBe(50);
  expect(component.getItemSize(2)).toBe(50);
  expect(component.getCache()[0]).toEqual([50, 50, 50]);
});

it("should render no items for empty data", async () => {
  const { container } = await render(WindowMasonry, {
    props: { lanes: 2, data: [], children: itemSnippet },
  });
  const masonry = container.firstElementChild!.firstElementChild!;
  expect(masonry.childElementCount).toBe(0);
});

it("should relayout lanes without remounting items", async () => {
  const res = await render(WindowMasonry, {
    props: { lanes: 2, data: range(100), children: itemSnippet },
  });
  const item = screen.getByText("0");
  expect(item.parentElement!.style.width).toBe("50%");

  await res.rerender({ lanes: 4 });

  expect(screen.getByText("0")).toBe(item);
  expect(item.parentElement!.style.width).toBe("25%");
});
