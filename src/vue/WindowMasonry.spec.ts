import { it, expect } from "vitest";
import { h } from "vue";
import { WindowMasonry } from "./index.js";
import { setupResizeJsDom } from "../../spec/jsdom/dom.js";
import { render } from "../../spec/jsdom/vue.js";
import { range } from "../../spec/utils.js";

setupResizeJsDom({ itemSize: { width: 100, height: 50 } });

const slots = {
  default: ({ item }: { item: number }) => h("div", item),
};

it("should reserve its full height in the document and forward attributes", async () => {
  const res = await render(WindowMasonry<number>, {
    props: { lanes: 2, data: range(100), itemSize: 50 },
    attrs: { id: "masonry", style: { background: "red" } },
    slots,
  });
  const root = res.container.firstElementChild as HTMLElement;
  const container = root.firstElementChild as HTMLElement;
  expect(root.style.overflowY).toBe("");
  expect(root.style.contain).toBe("");
  expect(root.style.height).toBe("");
  expect(root.style.background).toBe("red");
  expect(root.id).toBe("masonry");
  expect(root.children).toHaveLength(1);
  expect(container.style.height).toBe("2500px");
});

it("should relayout lanes and gap without remounting items", async () => {
  const res = await render(WindowMasonry<number>, {
    props: { lanes: 2, data: range(100) },
    slots,
  });
  const item = res.getByText("0");
  expect((item.parentElement as HTMLElement).style.width).toBe("50%");

  await res.rerender({ lanes: 4, gap: 8, data: range(100) });
  expect(res.getByText("0")).toBe(item);
  expect((item.parentElement as HTMLElement).style.width).toBe(
    "calc(25% - 6px)",
  );
});

it("should keep requested items mounted outside the viewport", async () => {
  const res = await render(WindowMasonry<number>, {
    props: { lanes: 2, data: range(1000), keepMounted: [999] },
    slots,
  });
  expect(res.getByText("0")).toBeDefined();
  expect(res.getByText("999")).toBeDefined();
  expect(res.queryByText("998")).toBeNull();
});
