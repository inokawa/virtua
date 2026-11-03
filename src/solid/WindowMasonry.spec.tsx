/** @jsxImportSource solid-js */
import { it, expect, vi } from "vitest";
import { createSignal } from "solid-js";
import { WindowMasonry } from "./index.js";
import { setupResizeJsDom } from "../../spec/jsdom/dom.js";
import { render } from "../../spec/jsdom/solid.js";
import { range } from "../../spec/utils.js";

setupResizeJsDom({ itemSize: { width: 100, height: 50 } });

it("should reserve its full height in the document and forward attributes", () => {
  const res = render(() => (
    <WindowMasonry
      lanes={2}
      data={range(100)}
      itemSize={50}
      id="masonry"
      style={{ background: "red" }}
    >
      {(i) => <div>{i}</div>}
    </WindowMasonry>
  ));
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

it("should relayout lanes and gap without remounting items", () => {
  const [lanes, setLanes] = createSignal(2);
  const [gap, setGap] = createSignal(0);
  const res = render(() => (
    <WindowMasonry lanes={lanes()} gap={gap()} data={range(100)}>
      {(i) => <div>{i}</div>}
    </WindowMasonry>
  ));
  const item = res.getByText("0");
  expect((item.parentElement as HTMLElement).style.width).toBe("50%");

  setLanes(4);
  setGap(8);
  vi.runAllTicks();
  expect(res.getByText("0")).toBe(item);
  expect((item.parentElement as HTMLElement).style.width).toBe(
    "calc(25% - 6px)",
  );
});

it("should keep requested items mounted outside the viewport", () => {
  const res = render(() => (
    <WindowMasonry lanes={2} data={range(1000)} keepMounted={[999]}>
      {(i) => <div>{i}</div>}
    </WindowMasonry>
  ));
  expect(res.getByText("0")).toBeDefined();
  expect(res.getByText("999")).toBeDefined();
  expect(res.queryByText("998")).toBeNull();
});
