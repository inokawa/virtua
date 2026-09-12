import {
  afterEach,
  describe,
  expect,
  it,
  onTestFinished,
  type TestContext,
} from "vitest";
import { createRef } from "react";
import { render } from "../spec/browser/react.js";
import {
  VList,
  type VListHandle,
  Virtualizer,
  type VirtualizerHandle,
  WindowVirtualizer,
  type WindowVirtualizerHandle,
} from "./react/index.js";
import {
  cleanupScroll,
  expectPosition,
  expectVirtualized,
  getItem,
  getVirtualizer,
} from "../spec/browser/index.js";

afterEach(cleanupScroll);

const HEIGHTS = [20, 40, 80, 77];
const items = Array.from({ length: 1000 }, (_, i) => i);

describe("scrollTo", () => {
  it("down and up", async () => {
    const ref = createRef<VListHandle>();
    const root = render(
      <VList ref={ref} style={{ height: 400 }}>
        {items.map((i) => (
          <div key={i} style={{ height: HEIGHTS[i % HEIGHTS.length] }}>
            {i}
          </div>
        ))}
      </VList>,
    );
    const { viewport, container } = await getVirtualizer(root);

    // check if start is displayed
    await expect.poll(() => getItem(container, "0")).toBeDefined();

    // scroll down
    ref.current!.scrollTo(5000);
    await expectPosition(() => viewport.scrollTop, 5000);

    // scroll up
    ref.current!.scrollTo(1000);
    await expectPosition(() => viewport.scrollTop, 1000);
  });
});

describe("scrollBy", () => {
  it("down and up", async () => {
    const ref = createRef<VListHandle>();
    const root = render(
      <VList ref={ref} style={{ height: 400 }}>
        {items.map((i) => (
          <div key={i} style={{ height: HEIGHTS[i % HEIGHTS.length] }}>
            {i}
          </div>
        ))}
      </VList>,
    );
    const { viewport, container } = await getVirtualizer(root);

    // check if start is displayed
    await expect.poll(() => getItem(container, "0")).toBeDefined();

    // scroll down
    ref.current!.scrollBy(1234);
    // scrollBy adds to the offset the store learned from the last scroll event, which lags the element by one event
    await expectPosition(() => ref.current!.scrollOffset, 1234);

    // scroll up
    ref.current!.scrollBy(-234);
    await expectPosition(() => viewport.scrollTop, 1000);
  });
});

describe("scrollbar", () => {
  // Headless browsers use overlay scrollbars that take no layout space, and only webkit brings a classic one back with this rule
  const setupClassicScrollbar = (ctx: TestContext) => {
    const style = document.head.appendChild(document.createElement("style"));
    style.textContent =
      ".classic-scrollbar::-webkit-scrollbar { width: 15px; height: 15px; -webkit-appearance: none; }";
    const probe = document.body.appendChild(document.createElement("div"));
    probe.className = "classic-scrollbar";
    probe.style.cssText = "width: 100px; height: 100px; overflow: scroll;";
    const size = probe.offsetWidth - probe.clientWidth;
    probe.remove();
    if (!size) {
      // onTestFinished does not run for a dynamic skip, so the stylesheet has to go first
      style.remove();
      ctx.skip("overlay scrollbars take no layout space");
    }
    onTestFinished(() => style.remove());
    return size;
  };

  it("scrollToIndex with align: end excludes scrollbar size (Virtualizer)", async (ctx) => {
    const scrollbarSize = setupClassicScrollbar(ctx);
    const ref = createRef<VirtualizerHandle>();
    const root = render(
      <div
        className="classic-scrollbar"
        style={{ height: 400, overflowY: "auto", overflowX: "scroll" }}
      >
        <Virtualizer ref={ref} data={items}>
          {(d) => (
            <div key={d} style={{ height: 30 }}>
              item-{d}
            </div>
          )}
        </Virtualizer>
      </div>,
    );
    await expectVirtualized(root, "item-0", "item-999");

    // The horizontal scrollbar sits inside the border box of the viewport
    const visibleSize = 400 - scrollbarSize;

    const { viewport, container } = await getVirtualizer(root);
    // The viewport is measured through ResizeObserver, so the size arrives after the render
    await expect.poll(() => ref.current!.viewportSize).toBe(visibleSize);

    ref.current!.scrollToIndex(500, { align: "end" });
    await expectPosition(
      () =>
        getItem(container, "item-500")!.getBoundingClientRect().bottom -
        viewport.getBoundingClientRect().top,
      visibleSize,
    );
  });

  it("scrollToIndex with align: end excludes scrollbar size (WindowVirtualizer)", async (ctx) => {
    const scrollbarSize = setupClassicScrollbar(ctx);
    document.documentElement.classList.add("classic-scrollbar");
    const wide = document.body.appendChild(document.createElement("div"));
    // A zero-height element does not overflow
    wide.style.cssText = "width: 5000px; height: 1px;";
    onTestFinished(() => {
      document.documentElement.classList.remove("classic-scrollbar");
      wide.remove();
    });

    const ref = createRef<WindowVirtualizerHandle>();
    const root = render(
      <WindowVirtualizer ref={ref} data={items}>
        {(d) => (
          <div key={d} style={{ height: 30 }}>
            item-{d}
          </div>
        )}
      </WindowVirtualizer>,
    );
    await expectVirtualized(root, "item-0", "item-999");

    // The horizontal scrollbar sits inside the window, which always starts at 0
    const visibleSize = window.innerHeight - scrollbarSize;

    const { container } = await getVirtualizer(root);
    // The viewport is measured through ResizeObserver, so the size arrives after the render
    await expect.poll(() => ref.current!.viewportSize).toBe(visibleSize);

    ref.current!.scrollToIndex(500, { align: "end" });
    await expectPosition(
      () => getItem(container, "item-500")!.getBoundingClientRect().bottom,
      visibleSize,
    );
  });
});
