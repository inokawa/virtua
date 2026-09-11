import {
  afterEach,
  describe,
  expect,
  it,
  onTestFinished,
  type TestContext,
} from "vitest";
import { render } from "../spec/browser/react.js";
import { createRef, useLayoutEffect, useRef } from "react";
import { createRoot } from "react-dom/client";
import {
  experimental_VGrid as VGrid,
  Virtualizer,
  type VirtualizerHandle,
  WindowVirtualizer,
  type WindowVirtualizerHandle,
} from "./react/index.js";
import {
  cleanupScroll,
  createDomRoot,
  expectVirtualized,
  expectVirtualizedAndScrollable,
  getVirtualizer,
} from "../spec/browser/index.js";

afterEach(cleanupScroll);

const items = Array.from({ length: 1000 }, (_, i) => i);

const waitForStableHeight = async (container: HTMLElement): Promise<string> => {
  let prev: string | undefined;
  await expect
    .poll(() => {
      const height = container.style.height;
      const isStable = !!height && height === prev;
      prev = height;
      return isStable;
    })
    .toBe(true);
  return prev!;
};

// Items must be placed in layout size, not in visual size of getBoundingClientRect or rounded size of offsetHeight
const expectItemDistance = (container: HTMLElement, size: number) => {
  const tops = Array.from(container.children, (e) =>
    parseFloat((e as HTMLElement).style.top),
  ).sort((a, b) => a - b);
  expect(tops.length).toBeGreaterThan(1);
  for (let i = 1; i < tops.length; i++) {
    expect(tops[i]! - tops[i - 1]!).toBeCloseTo(size);
  }
};

const waitForZeroSizeNotification = (target: Element) => {
  return new Promise<void>((resolve) => {
    const observer = new ResizeObserver((entries) => {
      if (entries.some((entry) => entry.contentRect.height === 0)) {
        observer.disconnect();
        resolve();
      }
    });
    observer.observe(target);
  });
};

it("display: none (Virtualizer)", async () => {
  const root = render(
    <div style={{ height: 400, overflowY: "auto" }}>
      <Virtualizer data={items}>
        {(d) => (
          <div key={d} style={{ height: 30 }}>
            item-{d}
          </div>
        )}
      </Virtualizer>
    </div>,
  );
  await expectVirtualized(root, "item-0", "item-999");

  const { container } = await getVirtualizer(root);
  const initialHeight = await waitForStableHeight(container);

  root.style.display = "none";
  await waitForZeroSizeNotification(container);
  // let pending resize notifications propagate
  await new Promise((resolve) => setTimeout(resolve, 100));

  expect(container.style.height).toEqual(initialHeight);
});

it("display: none (WindowVirtualizer)", async () => {
  const root = render(
    <WindowVirtualizer data={items}>
      {(d) => (
        <div key={d} style={{ height: 30 }}>
          item-{d}
        </div>
      )}
    </WindowVirtualizer>,
  );
  await expectVirtualized(root, "item-0", "item-999");

  const { container } = await getVirtualizer(root);
  const initialHeight = await waitForStableHeight(container);

  root.style.display = "none";
  await waitForZeroSizeNotification(container);
  // let pending resize notifications propagate
  await new Promise((resolve) => setTimeout(resolve, 100));

  expect(container.style.height).toEqual(initialHeight);
});

it("position: fixed viewport (Virtualizer)", async () => {
  const root = render(
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: 400,
        height: 400,
        overflowY: "auto",
      }}
    >
      <Virtualizer data={items}>
        {(d) => (
          <div key={d} style={{ height: 40 }}>
            item-{d}
          </div>
        )}
      </Virtualizer>
    </div>,
  );
  await expectVirtualizedAndScrollable(root, "item-0", "item-999");
});

it("position: fixed viewport (VGrid)", async () => {
  const root = render(
    <VGrid
      row={100}
      col={100}
      style={{ position: "fixed", top: 0, left: 0, width: 400, height: 400 }}
    >
      {({ rowIndex, colIndex }) => (
        <div style={{ width: 100, height: 40 }}>
          row-{rowIndex}/column-{colIndex}
        </div>
      )}
    </VGrid>,
  );
  await expectVirtualizedAndScrollable(
    root,
    "row-0/column-0",
    "row-99/column-99",
  );
});

it("hidden document does not cancel imperative scroll", async () => {
  const Component = () => {
    const ref = useRef<VirtualizerHandle>(null);
    useLayoutEffect(() => {
      ref.current!.scrollToIndex(items.length - 1, { align: "end" });
    }, []);

    // Emulates hidden document
    return (
      <div style={{ contentVisibility: "hidden" }}>
        <div style={{ height: 400, overflowY: "auto" }}>
          <Virtualizer ref={ref} data={items}>
            {(d) => (
              <div key={d} style={{ height: 60 }}>
                item-{d}
              </div>
            )}
          </Virtualizer>
        </div>
      </div>
    );
  };
  const root = render(<Component />);

  // Scheduled scroll gives up 150ms after the last resize
  await new Promise((resolve) => setTimeout(resolve, 400));
  const hidden = root.firstElementChild as HTMLElement;
  const { viewport } = await getVirtualizer(root);
  const bottom = items.length * 60 - 400;
  expect(viewport.checkVisibility()).toBe(false);
  // The estimated size must be smaller than the actual one, or a canceled scroll is also clamped to the bottom
  expect(viewport.scrollTop).toBeLessThan(bottom);

  hidden.style.contentVisibility = "";

  await expect.poll(() => viewport.scrollTop, { timeout: 5000 }).toBe(bottom);
});

it("flex parent", async () => {
  const root = render(
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: 400,
        overflowY: "auto",
      }}
    >
      <Virtualizer data={items}>
        {(d) => (
          <div key={d} style={{ height: 30 }}>
            item-{d}
          </div>
        )}
      </Virtualizer>
    </div>,
  );
  await expectVirtualizedAndScrollable(root, "item-0", "item-999");
});

it("new window", async () => {
  const newWindow = window.open("", "", "width=400,height=400");
  expect(newWindow).toBeTruthy();
  onTestFinished(() => newWindow!.close());

  // Firefox may initialize the popup document asynchronously
  await expect
    .poll(() => newWindow!.document.readyState, { timeout: 5000 })
    .toBe("complete");

  const root = render(
    <div style={{ height: 400, overflowY: "auto" }}>
      <Virtualizer data={items}>
        {(d) => (
          <div key={d} style={{ height: 30 }}>
            item-{d}
          </div>
        )}
      </Virtualizer>
    </div>,
    newWindow!.document,
  );
  await expectVirtualizedAndScrollable(root, "item-0", "item-999");
});

it("iframe", async () => {
  const iframe = createDomRoot(document, "iframe");
  iframe.width = "400";
  iframe.height = "400";

  const root = render(
    <div style={{ height: 400, overflowY: "auto" }}>
      <Virtualizer data={items}>
        {(d) => (
          <div key={d} style={{ height: 30 }}>
            item-{d}
          </div>
        )}
      </Virtualizer>
    </div>,
    iframe.contentDocument!,
  );
  await expectVirtualizedAndScrollable(root, "item-0", "item-999");
});

it("shadow DOM", async () => {
  const host = createDomRoot(document);
  const root = host
    .attachShadow({ mode: "open" })
    .appendChild(document.createElement("div"));
  const reactRoot = createRoot(root);
  reactRoot.render(
    <div style={{ height: 400, overflowY: "auto" }}>
      <Virtualizer data={items}>
        {(d) => (
          <div key={d} style={{ height: 30 }}>
            item-{d}
          </div>
        )}
      </Virtualizer>
    </div>,
  );
  onTestFinished(() => reactRoot.unmount());
  await expectVirtualizedAndScrollable(root, "item-0", "item-999");
});

it("transform: scale", async () => {
  const root = render(
    <div
      style={{
        transform: "scale(0.5)",
        transformOrigin: "0 0",
        height: 400,
        overflowY: "auto",
      }}
    >
      <Virtualizer data={items}>
        {(d) => (
          <div key={d} style={{ height: 30 }}>
            item-{d}
          </div>
        )}
      </Virtualizer>
    </div>,
  );
  await expectVirtualizedAndScrollable(root, "item-0", "item-999");

  const { container } = await getVirtualizer(root);
  await waitForStableHeight(container);
  expectItemDistance(container, 30);
});

it("zoom", async () => {
  const root = render(
    <div style={{ zoom: 1.5, height: 400, overflowY: "auto" }}>
      <Virtualizer data={items}>
        {(d) => (
          <div key={d} style={{ height: 30 }}>
            item-{d}
          </div>
        )}
      </Virtualizer>
    </div>,
  );
  await expectVirtualizedAndScrollable(root, "item-0", "item-999");

  const { container } = await getVirtualizer(root);
  await waitForStableHeight(container);
  expectItemDistance(container, 30);
});

it("fractional item size", async () => {
  const root = render(
    <div style={{ height: 400, overflowY: "auto" }}>
      <Virtualizer data={items}>
        {(d) => (
          <div key={d} style={{ height: 30.5 }}>
            item-{d}
          </div>
        )}
      </Virtualizer>
    </div>,
  );
  await expectVirtualizedAndScrollable(root, "item-0", "item-999");

  const { container } = await getVirtualizer(root);
  await waitForStableHeight(container);
  expectItemDistance(container, 30.5);
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

  const getItem = (container: HTMLElement, label: string) =>
    Array.from(container.children).find((e) => e.textContent === label);

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

    const { viewport, container } = await getVirtualizer(root);
    expect(viewport.clientHeight).toBe(400 - scrollbarSize);

    ref.current!.scrollToIndex(500, { align: "end" });
    await expect
      .poll(
        () => getItem(container, "item-500")?.getBoundingClientRect().bottom,
        { timeout: 5000 },
      )
      .toBeCloseTo(
        viewport.getBoundingClientRect().top + viewport.clientHeight,
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

    const { viewport, container } = await getVirtualizer(root);
    expect(viewport.clientHeight).toBe(window.innerHeight - scrollbarSize);

    ref.current!.scrollToIndex(500, { align: "end" });
    await expect
      .poll(
        () => getItem(container, "item-500")?.getBoundingClientRect().bottom,
        { timeout: 5000 },
      )
      .toBeCloseTo(viewport.clientHeight);
  });
});
