import {
  afterEach,
  describe,
  expect,
  it,
  onTestFinished,
  type TestContext,
} from "vitest";
import { createRef, useEffect, useRef } from "react";
import { render, rerender } from "../spec/browser/react.js";
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
  relativeBottom,
} from "../spec/browser/index.js";
import { range } from "../spec/utils.js";

afterEach(cleanupScroll);

describe("scrollTo", () => {
  it("down and up", async () => {
    const HEIGHTS = [20, 40, 80, 77];
    const ref = createRef<VListHandle>();
    const root = render(
      <VList ref={ref} data={range(1000)} style={{ height: 400 }}>
        {(i) => (
          <div key={i} style={{ height: HEIGHTS[i % HEIGHTS.length] }}>
            {i}
          </div>
        )}
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
    const HEIGHTS = [20, 40, 80, 77];
    const ref = createRef<VListHandle>();
    const root = render(
      <VList ref={ref} data={range(1000)} style={{ height: 400 }}>
        {(i) => (
          <div key={i} style={{ height: HEIGHTS[i % HEIGHTS.length] }}>
            {i}
          </div>
        )}
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
        <Virtualizer ref={ref} data={range(1000)}>
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
      <WindowVirtualizer ref={ref} data={range(1000)}>
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

it("stick to bottom", async () => {
  // Like a chat, which scrolls to the item appended last
  const Chat = ({ items }: { items: string[] }) => {
    const ref = useRef<VirtualizerHandle>(null);
    useEffect(() => {
      ref.current!.scrollToIndex(items.length - 1, { align: "end" });
    }, [items]);
    return (
      <div style={{ height: 400, overflowY: "auto" }}>
        <Virtualizer ref={ref} data={items}>
          {(text) => (
            <div key={text} style={{ whiteSpace: "pre-wrap" }}>
              {text}
            </div>
          )}
        </Virtualizer>
      </div>
    );
  };
  const items = range(100, (i) => `item-${i}`);
  const root = render(<Chat items={items} />);
  const { viewport, container } = await getVirtualizer(root);
  const last = () => container.lastElementChild!;

  // check if end is displayed
  await expect.poll(() => getItem(container, "item-99")).toBeDefined();
  await expectPosition(() => relativeBottom(viewport, last()), 0);

  // append small item
  const SMALL = "item-100";
  rerender(root, <Chat items={[...items, SMALL]} />);
  await expect.poll(() => last().textContent).toBe(SMALL);
  await expectPosition(() => relativeBottom(viewport, last()), 0);
  const smallSize = last().getBoundingClientRect().height;

  // append large item
  const LARGE = "item-101" + "\nHello".repeat(100);
  rerender(root, <Chat items={[...items, SMALL, LARGE]} />);
  await expect.poll(() => last().textContent).toBe(LARGE);
  await expectPosition(() => relativeBottom(viewport, last()), 0);
  expect(last().getBoundingClientRect().height).toBeGreaterThan(smallSize * 10);
});
