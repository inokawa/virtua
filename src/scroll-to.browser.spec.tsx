import {
  afterEach,
  describe,
  expect,
  it,
  onTestFinished,
  type TestContext,
} from "vitest";
import { createRef, type Ref, useEffect, useRef } from "react";
import { flushSync } from "react-dom";
import { render, rerender } from "../spec/browser/react.js";
import {
  Virtualizer,
  type VirtualizerHandle,
  WindowVirtualizer,
  type WindowVirtualizerHandle,
} from "./react/index.js";
import {
  cleanupScroll,
  expectPosition,
  expectSmooth,
  expectVirtualized,
  findFirstVisibleItem,
  getItem,
  getVirtualizer,
  recordScroll,
  relativeBottom,
  relativeTop,
  SMOOTH_TIMEOUT,
} from "../spec/browser/index.js";
import { range } from "../spec/utils.js";

afterEach(cleanupScroll);

describe("scrollToIndex", () => {
  const ITEM_COUNT = 1000;
  const HEIGHTS = [20, 40, 80, 77];

  const expectItemTop = (
    viewport: HTMLElement,
    container: HTMLElement,
    index: number,
    distance = 0,
    timeout?: number,
  ) =>
    expectPosition(
      () => relativeTop(viewport, getItem(container, String(index))!),
      distance,
      timeout,
    );

  const expectItemBottom = (
    viewport: HTMLElement,
    container: HTMLElement,
    index: number,
    distance = 0,
    timeout?: number,
  ) =>
    expectPosition(
      () => relativeBottom(viewport, getItem(container, String(index))!),
      distance,
      timeout,
    );

  describe("Virtualizer", () => {
    const List = ({
      handle,
      onScrollEnd,
    }: {
      handle: Ref<VirtualizerHandle>;
      onScrollEnd?: () => void;
    }) => (
      <div style={{ height: 400, overflowY: "auto" }}>
        <Virtualizer
          ref={handle}
          data={range(ITEM_COUNT)}
          onScrollEnd={onScrollEnd}
        >
          {(i) => (
            <div key={i} style={{ height: HEIGHTS[i % HEIGHTS.length] }}>
              {i}
            </div>
          )}
        </Virtualizer>
      </div>
    );

    describe("align start", () => {
      it("mid", async () => {
        const ref = createRef<VirtualizerHandle>();
        const root = render(<List handle={ref} />);
        const { viewport, container } = await getVirtualizer(root);

        // check if start is displayed
        await expect.poll(() => getItem(container, "0")).toBeDefined();

        ref.current!.scrollToIndex(700);

        // Check if scrolled precisely
        await expectItemTop(viewport, container, 700);

        // Check if unnecessary items are not rendered
        await expect.poll(() => getItem(container, "650")).toBeUndefined();
        await expect.poll(() => getItem(container, "750")).toBeUndefined();
      });

      it("start", async () => {
        const ref = createRef<VirtualizerHandle>();
        const root = render(<List handle={ref} />);
        const { viewport, container } = await getVirtualizer(root);

        // check if start is displayed
        await expect.poll(() => getItem(container, "0")).toBeDefined();

        ref.current!.scrollToIndex(500);
        await expect.poll(() => getItem(container, "500")).toBeDefined();

        ref.current!.scrollToIndex(0);

        // Check if scrolled precisely
        await expectItemTop(viewport, container, 0);

        // Check if unnecessary items are not rendered
        await expect.poll(() => getItem(container, "50")).toBeUndefined();
      });

      it("end", async () => {
        const ref = createRef<VirtualizerHandle>();
        const root = render(<List handle={ref} />);
        const { viewport, container } = await getVirtualizer(root);

        // check if start is displayed
        await expect.poll(() => getItem(container, "0")).toBeDefined();

        ref.current!.scrollToIndex(ITEM_COUNT - 1);

        // Check if scrolled precisely. The list can not scroll past the end, so the item rests at the bottom
        await expectItemBottom(viewport, container, ITEM_COUNT - 1);

        // Check if unnecessary items are not rendered
        await expect.poll(() => getItem(container, "949")).toBeUndefined();
      });
    });

    describe("align end", () => {
      it("mid", async () => {
        const ref = createRef<VirtualizerHandle>();
        const root = render(<List handle={ref} />);
        const { viewport, container } = await getVirtualizer(root);

        // check if start is displayed
        await expect.poll(() => getItem(container, "0")).toBeDefined();

        ref.current!.scrollToIndex(700, { align: "end" });

        // Check if scrolled precisely
        await expectItemBottom(viewport, container, 700);

        // Check if unnecessary items are not rendered
        await expect.poll(() => getItem(container, "650")).toBeUndefined();
        await expect.poll(() => getItem(container, "750")).toBeUndefined();
      });

      it("start", async () => {
        const ref = createRef<VirtualizerHandle>();
        const root = render(<List handle={ref} />);
        const { viewport, container } = await getVirtualizer(root);

        // check if start is displayed
        await expect.poll(() => getItem(container, "0")).toBeDefined();

        ref.current!.scrollToIndex(500, { align: "end" });
        await expect.poll(() => getItem(container, "500")).toBeDefined();

        ref.current!.scrollToIndex(0, { align: "end" });

        // Check if scrolled precisely. The list can not scroll past the start, so the item rests at the top
        await expectItemTop(viewport, container, 0);

        // Check if unnecessary items are not rendered
        await expect.poll(() => getItem(container, "50")).toBeUndefined();
      });

      it("end", async () => {
        const ref = createRef<VirtualizerHandle>();
        const root = render(<List handle={ref} />);
        const { viewport, container } = await getVirtualizer(root);

        // check if start is displayed
        await expect.poll(() => getItem(container, "0")).toBeDefined();

        ref.current!.scrollToIndex(ITEM_COUNT - 1, { align: "end" });

        // Check if scrolled precisely
        await expectItemBottom(viewport, container, ITEM_COUNT - 1);

        // Check if unnecessary items are not rendered
        await expect.poll(() => getItem(container, "949")).toBeUndefined();
      });
    });

    describe("smooth", () => {
      it("from start (align start)", async () => {
        const ref = createRef<VirtualizerHandle>();
        const root = render(<List handle={ref} />);
        const { viewport, container } = await getVirtualizer(root);

        // check if start is displayed
        await expect.poll(() => getItem(container, "0")).toBeDefined();

        const scrolled = recordScroll(viewport);
        ref.current!.scrollToIndex(700, { smooth: true });

        // Check if scrolled precisely
        await expectItemTop(viewport, container, 700, 0, SMOOTH_TIMEOUT);

        // Check if this is smooth scrolling
        expectSmooth(scrolled);

        // Check if unnecessary items are not rendered
        await expect.poll(() => getItem(container, "650")).toBeUndefined();
        await expect.poll(() => getItem(container, "750")).toBeUndefined();
      });

      it("from start (align end)", async () => {
        const ref = createRef<VirtualizerHandle>();
        const root = render(<List handle={ref} />);
        const { viewport, container } = await getVirtualizer(root);

        // check if start is displayed
        await expect.poll(() => getItem(container, "0")).toBeDefined();

        const scrolled = recordScroll(viewport);
        ref.current!.scrollToIndex(700, { align: "end", smooth: true });

        // Check if scrolled precisely
        await expectItemBottom(viewport, container, 700, 0, SMOOTH_TIMEOUT);

        // Check if this is smooth scrolling
        expectSmooth(scrolled);

        // Check if unnecessary items are not rendered
        await expect.poll(() => getItem(container, "650")).toBeUndefined();
        await expect.poll(() => getItem(container, "750")).toBeUndefined();
      });

      it("from end (align start)", async () => {
        const ref = createRef<VirtualizerHandle>();
        let scrollEnded = false;
        const root = render(
          <List
            handle={ref}
            onScrollEnd={() => {
              scrollEnded = true;
            }}
          />,
        );
        const { viewport, container } = await getVirtualizer(root);

        // check if start is displayed
        await expect.poll(() => getItem(container, "0")).toBeDefined();

        // scroll to the bottom
        ref.current!.scrollToIndex(ITEM_COUNT - 1);
        // A smooth scroll started before this ends is interrupted by the pending scroll end
        await expect.poll(() => scrollEnded).toBe(true);

        // smooth scroll up
        const scrolled = recordScroll(viewport);
        ref.current!.scrollToIndex(300, { smooth: true });

        // Check if scrolled precisely
        await expectItemTop(viewport, container, 300, 0, SMOOTH_TIMEOUT);

        // Check if this is smooth scrolling
        expectSmooth(scrolled);

        // Check if unnecessary items are not rendered
        await expect.poll(() => getItem(container, "250")).toBeUndefined();
        await expect.poll(() => getItem(container, "350")).toBeUndefined();
      });

      it("from end (align end)", async () => {
        const ref = createRef<VirtualizerHandle>();
        let scrollEnded = false;
        const root = render(
          <List
            handle={ref}
            onScrollEnd={() => {
              scrollEnded = true;
            }}
          />,
        );
        const { viewport, container } = await getVirtualizer(root);

        // check if start is displayed
        await expect.poll(() => getItem(container, "0")).toBeDefined();

        // scroll to the bottom
        ref.current!.scrollToIndex(ITEM_COUNT - 1);
        // A smooth scroll started before this ends is interrupted by the pending scroll end
        await expect.poll(() => scrollEnded).toBe(true);

        // smooth scroll up
        const scrolled = recordScroll(viewport);
        ref.current!.scrollToIndex(300, { align: "end", smooth: true });

        // Check if scrolled precisely
        await expectItemBottom(viewport, container, 300, 0, SMOOTH_TIMEOUT);

        // Check if this is smooth scrolling
        expectSmooth(scrolled);

        // Check if unnecessary items are not rendered
        await expect.poll(() => getItem(container, "250")).toBeUndefined();
        await expect.poll(() => getItem(container, "350")).toBeUndefined();
      });

      it("scroll start item to end in reverse", async () => {
        const ref = createRef<VirtualizerHandle>();
        let scrollEnded = false;
        const root = render(
          <List
            handle={ref}
            onScrollEnd={() => {
              scrollEnded = true;
            }}
          />,
        );
        const { viewport, container } = await getVirtualizer(root);

        // check if start is displayed
        await expect.poll(() => getItem(container, "0")).toBeDefined();

        // scroll to the bottom
        ref.current!.scrollToIndex(ITEM_COUNT - 1);
        await expectItemBottom(viewport, container, ITEM_COUNT - 1);

        for (let i = 0; i < 3; i++) {
          // A smooth scroll started before the previous one ends is interrupted by its pending scroll end
          await expect.poll(() => scrollEnded).toBe(true);
          scrollEnded = false;

          const target = Number(
            findFirstVisibleItem(container, viewport)!.textContent,
          );

          // smooth scroll up
          ref.current!.scrollToIndex(target, { align: "end", smooth: true });

          // Check if scrolled precisely
          await expectItemBottom(
            viewport,
            container,
            target,
            0,
            SMOOTH_TIMEOUT,
          );
        }
      });

      it("on mount with ssrCount", async () => {
        const SSR_COUNT = 30;
        const TARGET = 100;
        // ssrCount and a synchronous mount start like hydration in an event handler, where the effect scrolls before the items rendered for SSR are measured
        const ScrollOnMount = () => {
          const ref = useRef<VirtualizerHandle>(null);
          useEffect(() => {
            ref.current!.scrollToIndex(TARGET, { smooth: true });
          }, []);
          return (
            <div style={{ height: 400, overflowY: "auto" }}>
              <Virtualizer
                ref={ref}
                data={range(ITEM_COUNT)}
                ssrCount={SSR_COUNT}
              >
                {(i) => (
                  <div key={i} style={{ height: HEIGHTS[i % HEIGHTS.length] }}>
                    {i}
                  </div>
                )}
              </Virtualizer>
            </div>
          );
        };
        const root = flushSync(() => render(<ScrollOnMount />));
        const { viewport, container } = await getVirtualizer(root);
        const scrolled = recordScroll(viewport);

        // Check if scrolled precisely
        await expectItemTop(viewport, container, TARGET, 0, SMOOTH_TIMEOUT);

        // Check if this is smooth scrolling
        expectSmooth(scrolled);
      });
    });
  });

  describe("WindowVirtualizer", () => {
    // The list starts below other content, so scrolling to an index has to account for the base offset
    const PADDING = 100;

    const List = ({ handle }: { handle: Ref<WindowVirtualizerHandle> }) => (
      <div style={{ padding: PADDING }}>
        <WindowVirtualizer ref={handle} data={range(ITEM_COUNT)}>
          {(i) => (
            <div key={i} style={{ height: HEIGHTS[i % HEIGHTS.length] }}>
              {i}
            </div>
          )}
        </WindowVirtualizer>
      </div>
    );

    describe("align start", () => {
      it("mid", async () => {
        const ref = createRef<WindowVirtualizerHandle>();
        const root = render(<List handle={ref} />);
        const { viewport, container } = await getVirtualizer(root);

        // check if start is displayed
        await expect.poll(() => getItem(container, "0")).toBeDefined();

        ref.current!.scrollToIndex(700);

        // Check if scrolled precisely
        await expectItemTop(viewport, container, 700);

        // Check if unnecessary items are not rendered
        await expect.poll(() => getItem(container, "650")).toBeUndefined();
        await expect.poll(() => getItem(container, "750")).toBeUndefined();
      });

      it("start", async () => {
        const ref = createRef<WindowVirtualizerHandle>();
        const root = render(<List handle={ref} />);
        const { viewport, container } = await getVirtualizer(root);

        // check if start is displayed
        await expect.poll(() => getItem(container, "0")).toBeDefined();

        ref.current!.scrollToIndex(500);
        await expect.poll(() => getItem(container, "500")).toBeDefined();

        ref.current!.scrollToIndex(0);

        // Check if scrolled precisely. The document scrolls past the padding, so the item reaches the viewport top
        await expectItemTop(viewport, container, 0);

        // Check if unnecessary items are not rendered
        await expect.poll(() => getItem(container, "50")).toBeUndefined();
      });

      it("end", async () => {
        const ref = createRef<WindowVirtualizerHandle>();
        const root = render(<List handle={ref} />);
        const { viewport, container } = await getVirtualizer(root);

        // check if start is displayed
        await expect.poll(() => getItem(container, "0")).toBeDefined();

        ref.current!.scrollToIndex(ITEM_COUNT - 1);

        // Check if scrolled precisely. The document can not scroll past its end, so the padding below the list stays visible
        await expectItemBottom(viewport, container, ITEM_COUNT - 1, PADDING);

        // Check if unnecessary items are not rendered
        await expect.poll(() => getItem(container, "949")).toBeUndefined();
      });
    });

    describe("align end", () => {
      it("mid", async () => {
        const ref = createRef<WindowVirtualizerHandle>();
        const root = render(<List handle={ref} />);
        const { viewport, container } = await getVirtualizer(root);

        // check if start is displayed
        await expect.poll(() => getItem(container, "0")).toBeDefined();

        ref.current!.scrollToIndex(700, { align: "end" });

        // Check if scrolled precisely
        await expectItemBottom(viewport, container, 700);

        // Check if unnecessary items are not rendered
        await expect.poll(() => getItem(container, "650")).toBeUndefined();
        await expect.poll(() => getItem(container, "750")).toBeUndefined();
      });

      it("start", async () => {
        const ref = createRef<WindowVirtualizerHandle>();
        const root = render(<List handle={ref} />);
        const { viewport, container } = await getVirtualizer(root);

        // check if start is displayed
        await expect.poll(() => getItem(container, "0")).toBeDefined();

        ref.current!.scrollToIndex(500, { align: "end" });
        await expect.poll(() => getItem(container, "500")).toBeDefined();

        ref.current!.scrollToIndex(0, { align: "end" });

        // Check if scrolled precisely. The document can not scroll past its start, so the padding above the list stays visible
        await expectItemTop(viewport, container, 0, PADDING);

        // Check if unnecessary items are not rendered
        await expect.poll(() => getItem(container, "50")).toBeUndefined();
      });

      it("end", async () => {
        const ref = createRef<WindowVirtualizerHandle>();
        const root = render(<List handle={ref} />);
        const { viewport, container } = await getVirtualizer(root);

        // check if start is displayed
        await expect.poll(() => getItem(container, "0")).toBeDefined();

        ref.current!.scrollToIndex(ITEM_COUNT - 1, { align: "end" });

        // Check if scrolled precisely
        await expectItemBottom(viewport, container, ITEM_COUNT - 1);

        // Check if unnecessary items are not rendered
        await expect.poll(() => getItem(container, "949")).toBeUndefined();
      });
    });

    describe("smooth", () => {
      it("align start", async () => {
        const ref = createRef<WindowVirtualizerHandle>();
        const root = render(<List handle={ref} />);
        const { viewport, container } = await getVirtualizer(root);

        // check if start is displayed
        await expect.poll(() => getItem(container, "0")).toBeDefined();

        const scrolled = recordScroll(window);
        ref.current!.scrollToIndex(700, { smooth: true });

        // Check if scrolled precisely
        await expectItemTop(viewport, container, 700, 0, SMOOTH_TIMEOUT);

        // Check if this is smooth scrolling
        expectSmooth(scrolled);

        // Check if unnecessary items are not rendered
        await expect.poll(() => getItem(container, "650")).toBeUndefined();
        await expect.poll(() => getItem(container, "750")).toBeUndefined();
      });

      it("align end", async () => {
        const ref = createRef<WindowVirtualizerHandle>();
        const root = render(<List handle={ref} />);
        const { viewport, container } = await getVirtualizer(root);

        // check if start is displayed
        await expect.poll(() => getItem(container, "0")).toBeDefined();

        const scrolled = recordScroll(window);
        ref.current!.scrollToIndex(700, { align: "end", smooth: true });

        // Check if scrolled precisely
        await expectItemBottom(viewport, container, 700, 0, SMOOTH_TIMEOUT);

        // Check if this is smooth scrolling
        expectSmooth(scrolled);

        // Check if unnecessary items are not rendered
        await expect.poll(() => getItem(container, "650")).toBeUndefined();
        await expect.poll(() => getItem(container, "750")).toBeUndefined();
      });
    });
  });

  it("reverse", async () => {
    // A reverse scroll starts from the end, and keeps the items at the bottom while they don't fill the viewport
    const handle = createRef<VirtualizerHandle>();
    const Reverse = () => {
      useEffect(() => {
        handle.current!.scrollToIndex(ITEM_COUNT - 1);
      }, []);
      return (
        <div
          style={{
            height: 400,
            overflowY: "auto",
            display: "flex",
            flexDirection: "column",
            // opt out browser's scroll anchoring on the spacer because it will conflict to scroll anchoring of virtualizer
            overflowAnchor: "none",
          }}
        >
          <div style={{ flexGrow: 1 }} />
          <Virtualizer ref={handle} data={range(ITEM_COUNT)}>
            {(i) => (
              <div key={i} style={{ height: HEIGHTS[i % HEIGHTS.length] }}>
                item-{i}
              </div>
            )}
          </Virtualizer>
        </div>
      );
    };
    const root = render(<Reverse />);
    // The observer is set before the items are committed, so it sees every item ever rendered.
    // An item rendered while the scroll to the end is still pending stays out of the viewport, so it is not displayed
    let isStartDisplayed = false;
    const observer = new MutationObserver(() => {
      const viewport = root.firstElementChild as HTMLElement;
      const start = [...root.querySelectorAll("*")].find(
        (el) => el.textContent === "item-0",
      );
      isStartDisplayed ||=
        !!start &&
        relativeTop(viewport, start) < viewport.clientHeight &&
        relativeBottom(viewport, start) < viewport.clientHeight;
    });
    observer.observe(root, { childList: true, subtree: true });
    onTestFinished(() => observer.disconnect());
    const { viewport, container } = await getVirtualizer(root);

    // check if last is displayed
    const last = `item-${ITEM_COUNT - 1}`;
    await expect.poll(() => getItem(container, last)).toBeDefined();
    await expectPosition(
      () => relativeBottom(viewport, getItem(container, last)!),
      0,
    );
    // check if start is not displayed
    expect(isStartDisplayed).toBe(false);
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
    expect(last().getBoundingClientRect().height).toBeGreaterThan(
      smallSize * 10,
    );
  });
});

describe("scrollTo", () => {
  it("down and up", async () => {
    const HEIGHTS = [20, 40, 80, 77];
    const ref = createRef<VirtualizerHandle>();
    const root = render(
      <div style={{ height: 400, overflowY: "auto" }}>
        <Virtualizer ref={ref} data={range(1000)}>
          {(i) => (
            <div key={i} style={{ height: HEIGHTS[i % HEIGHTS.length] }}>
              {i}
            </div>
          )}
        </Virtualizer>
      </div>,
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
    const ref = createRef<VirtualizerHandle>();
    const root = render(
      <div style={{ height: 400, overflowY: "auto" }}>
        <Virtualizer ref={ref} data={range(1000)}>
          {(i) => (
            <div key={i} style={{ height: HEIGHTS[i % HEIGHTS.length] }}>
              {i}
            </div>
          )}
        </Virtualizer>
      </div>,
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
