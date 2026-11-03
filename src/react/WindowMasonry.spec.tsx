import { it, expect } from "vitest";
import { createRef } from "react";
import { WindowMasonry, type WindowMasonryHandle } from "./WindowMasonry.js";
import { setupResizeJsDom } from "../../spec/jsdom/dom.js";
import { render } from "../../spec/jsdom/react.js";
import { range } from "../../spec/utils.js";

setupResizeJsDom({
  itemSize: { width: 100, height: 50 },
  viewportSize: { width: 400, height: 500 },
});

it("uses the document viewport and grows naturally while forwarding attributes", async () => {
  const ref = createRef<WindowMasonryHandle>();
  const { container } = await render(
    <WindowMasonry
      ref={ref}
      lanes={2}
      data={range(100)}
      id="masonry"
      style={{ background: "red", maxWidth: 600 }}
    >
      {(i) => <div>{i}</div>}
    </WindowMasonry>,
  );
  const outer = container.firstElementChild as HTMLElement;
  expect(outer.id).toBe("masonry");
  expect(outer.style.background).toBe("red");
  expect(outer.style.maxWidth).toBe("600px");
  expect(outer.style.overflowY).toBe("");
  expect(outer.style.contain).toBe("");
  expect(outer.style.height).toBe("");
  expect(ref.current!.viewportSize).toBe(window.innerHeight);
  expect(outer.firstElementChild!.childElementCount).toBeGreaterThan(0);
  expect(outer.firstElementChild!.childElementCount).toBeLessThan(100);
});

it("renders no items for empty data", async () => {
  const { container } = await render(
    <WindowMasonry lanes={2} data={[]}>
      {(i) => <div>{i}</div>}
    </WindowMasonry>,
  );
  expect(
    container.firstElementChild!.firstElementChild!.childElementCount,
  ).toBe(0);
});

it("relayouts lanes and gaps without remounting items", async () => {
  const res = await render(
    <WindowMasonry lanes={2} data={range(100)}>
      {(i) => <div>{i}</div>}
    </WindowMasonry>,
  );
  const item = res.getByText("0");
  expect((item.parentElement as HTMLElement).style.width).toBe("50%");
  res.rerender(
    <WindowMasonry lanes={4} gap={8} data={range(100)}>
      {(i) => <div>{i}</div>}
    </WindowMasonry>,
  );
  expect(res.getByText("0")).toBe(item);
  expect((item.parentElement as HTMLElement).style.width).toMatch(/25%.*6px/);
});
