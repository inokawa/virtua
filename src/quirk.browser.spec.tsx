import {
  afterEach,
  beforeEach,
  describe,
  expect,
  it,
  onTestFinished,
} from "vitest";
import { render, rerender } from "../spec/browser/react.js";
import { createRef, useLayoutEffect, useRef } from "react";
import { createRoot } from "react-dom/client";
import {
  VGrid,
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
  expectVirtualizedAndScrollableRTL,
  getItem,
  getVirtualizer,
  relativeRight,
  relativeTop,
  setRTL,
} from "../spec/browser/index.js";
import { delay, range } from "../spec/utils.js";

afterEach(cleanupScroll);

const items = range(1000);

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
  const tops = Array.from(container.children)
    .map((e) => parseFloat((e as HTMLElement).style.top))
    .sort((a, b) => a - b);
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
  await delay(100);

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
  await delay(100);

  expect(container.style.height).toEqual(initialHeight);
});

it("display: none before the scroll event is dispatched", async () => {
  const root = render(
    <div style={{ height: 400, overflowY: "auto" }}>
      <Virtualizer data={items} itemSize={30}>
        {(d) => (
          <div key={d} style={{ height: 30 }}>
            item-{d}
          </div>
        )}
      </Virtualizer>
    </div>,
  );
  await expectVirtualized(root, "item-0", "item-999");

  const { viewport } = await getVirtualizer(root);
  viewport.scrollTop = 5000;
  viewport.style.display = "none";
  await delay(100);
  viewport.style.removeProperty("display");

  await expect
    .poll(() => root.textContent)
    .toContain(`item-${Math.floor(viewport.scrollTop / 30)}`);
});

it("detached and reattached viewport", async () => {
  const root = render(
    <div style={{ height: 400, overflowY: "auto" }}>
      <Virtualizer data={items} itemSize={30}>
        {(d) => (
          <div key={d} style={{ height: 30 }}>
            item-{d}
          </div>
        )}
      </Virtualizer>
    </div>,
  );
  await expectVirtualized(root, "item-0", "item-999");

  const { viewport } = await getVirtualizer(root);
  viewport.scrollTop = 5000;
  await delay(300);

  const parent = root.parentElement!;
  root.remove();
  await delay(100);
  parent.append(root);

  await expect
    .poll(() => root.textContent)
    .toContain(`item-${Math.floor(viewport.scrollTop / 30)}`);
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
      rows={100}
      rowHeight={40}
      cols={100}
      colWidth={100}
      style={{ position: "fixed", top: 0, left: 0, width: 400, height: 400 }}
    >
      {(rowIndex, colIndex) => (
        <div>
          row-{rowIndex}/col-{colIndex}
        </div>
      )}
    </VGrid>,
  );
  await expectVirtualizedAndScrollable(root, "row-0/col-0", "row-99/col-99");
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
  await delay(400);
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

it("overflow", async () => {
  // The header gives room for the first item to overflow out of the virtualizer
  const HEADER_SIZE = 24;
  const root = render(
    <div style={{ height: 400, overflowY: "auto" }}>
      <div style={{ height: HEADER_SIZE }} />
      <Virtualizer data={items} startMargin={HEADER_SIZE}>
        {(d) => (
          <div key={d} style={{ height: 40, position: "relative" }}>
            item-{d}
            <div
              style={{
                position: "absolute",
                top: -16,
                right: 8,
                height: 32,
                zIndex: 10,
                background: "white",
              }}
            >
              😊
            </div>
          </div>
        )}
      </Virtualizer>
    </div>,
  );
  await expectVirtualized(root, "item-0", "item-999");
  const { container } = await getVirtualizer(root);

  for (const target of [0, 1, 2]) {
    const wrapper = getItem(container, `item-${target}😊`)!;
    const label = Array.from(wrapper.querySelectorAll("div")).find(
      (e) => e.textContent === "😊",
    )!;

    // check if overflowed element is visible in front
    const rect = label.getBoundingClientRect();
    const pointed = document.elementFromPoint(
      rect.x + rect.width / 8,
      rect.y + rect.height / 8,
    );
    expect(pointed).toBe(label);
  }
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

it("scroll-behavior: smooth", async () => {
  const OFFSET = 6000;
  const ref = createRef<VirtualizerHandle>();
  const root = render(
    <div style={{ height: 400, overflowY: "auto", scrollBehavior: "smooth" }}>
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
  await waitForStableHeight(container);

  const offsets: number[] = [];
  viewport.addEventListener("scroll", () => {
    offsets.push(viewport.scrollTop);
  });

  ref.current!.scrollTo(OFFSET);
  await expect.poll(() => offsets[offsets.length - 1]).toBe(OFFSET);

  // The scroll position must be updated instantly, not animated by CSS scroll-behavior
  expect(offsets[0]).toBe(OFFSET);
});

it("scroll-behavior: smooth (WindowVirtualizer)", async () => {
  const ITEM_SIZE = 30;
  const INDEX = 200;
  const { documentElement, scrollingElement } = document;
  documentElement.style.scrollBehavior = "smooth";
  onTestFinished(() => {
    documentElement.style.scrollBehavior = "";
  });
  const ref = createRef<WindowVirtualizerHandle>();
  const root = render(
    // The size is known before the items are measured, so the scroll lands on the item at once
    <WindowVirtualizer ref={ref} data={items} itemSize={ITEM_SIZE}>
      {(d) => (
        <div key={d} style={{ height: ITEM_SIZE }}>
          item-{d}
        </div>
      )}
    </WindowVirtualizer>,
  );
  await expectVirtualized(root, "item-0", "item-999");
  const { container } = await getVirtualizer(root);
  await waitForStableHeight(container);

  const offsets: number[] = [];
  const onScroll = () => {
    offsets.push(scrollingElement!.scrollTop);
  };
  window.addEventListener("scroll", onScroll);
  onTestFinished(() => window.removeEventListener("scroll", onScroll));

  ref.current!.scrollToIndex(INDEX);
  // The virtualizer starts at the top of the document
  await expect.poll(() => offsets[offsets.length - 1]).toBe(INDEX * ITEM_SIZE);

  // The scroll position must be updated instantly, not animated by CSS scroll-behavior
  expect(offsets[0]).toBe(INDEX * ITEM_SIZE);
});

it("scroll-behavior: smooth (shift compensation)", async () => {
  const ITEM_SIZE = 30;
  const OFFSET = 6000;
  const PREPEND_COUNT = 10;
  const List = ({ data }: { data: number[] }) => (
    <div style={{ height: 400, overflowY: "auto", scrollBehavior: "smooth" }}>
      <Virtualizer shift data={data}>
        {(d) => (
          <div key={d} style={{ height: ITEM_SIZE }}>
            item-{d}
          </div>
        )}
      </Virtualizer>
    </div>
  );
  const root = render(<List data={items} />);
  await expectVirtualized(root, "item-0", "item-999");
  const { viewport, container } = await getVirtualizer(root);
  await waitForStableHeight(container);

  await expect
    .poll(() => {
      viewport.scrollTo({ top: OFFSET, behavior: "instant" });
      return getItem(container, `item-${OFFSET / ITEM_SIZE}`);
    })
    .toBeDefined();
  await waitForStableHeight(container);

  const offsets: number[] = [];
  viewport.addEventListener("scroll", () => {
    offsets.push(viewport.scrollTop);
  });

  rerender(
    root,
    <List
      data={[...range(PREPEND_COUNT, (i) => i - PREPEND_COUNT), ...items]}
    />,
  );
  await expect
    .poll(() => offsets[offsets.length - 1])
    .toBe(OFFSET + PREPEND_COUNT * ITEM_SIZE);

  // The compensation must jump in a single write, not animated by CSS scroll-behavior
  expect(offsets[0]).toBe(offsets[offsets.length - 1]);
});

describe("RTL", () => {
  beforeEach(setRTL);

  it("vertically scrollable (Virtualizer)", async () => {
    const COUNT = 1000;
    const HEIGHTS = [20, 40, 80, 77];
    const root = render(
      <div style={{ height: 400, overflowY: "auto" }}>
        <Virtualizer>
          {range(COUNT, (i) => (
            <div key={i} style={{ height: HEIGHTS[i % HEIGHTS.length] }}>
              item-{i}
            </div>
          ))}
        </Virtualizer>
      </div>,
    );
    const { viewport, container } = await getVirtualizer(root);

    // check if start is displayed
    await expect.poll(() => getItem(container, "item-0")).toBeDefined();
    expect(relativeTop(viewport, getItem(container, "item-0")!)).toBe(0);

    await expectVirtualizedAndScrollableRTL(
      root,
      "item-0",
      `item-${COUNT - 1}`,
    );
  });

  it("horizontally scrollable (Virtualizer)", async () => {
    const COUNT = 1000;
    const root = render(
      <div style={{ width: 400, height: 200, overflowX: "auto" }}>
        <Virtualizer horizontal>
          {range(COUNT, (i) => (
            <div key={i} style={{ width: i % 3 === 0 ? 100 : 60 }}>
              item-{i}
            </div>
          ))}
        </Virtualizer>
      </div>,
    );
    const { viewport, container } = await getVirtualizer(root);

    // check if start is displayed
    await expect.poll(() => getItem(container, "item-0")).toBeDefined();
    expect(relativeRight(viewport, getItem(container, "item-0")!)).toBe(0);

    await expectVirtualizedAndScrollableRTL(
      root,
      "item-0",
      `item-${COUNT - 1}`,
    );
  });

  it("vertically scrollable (WindowVirtualizer)", async () => {
    const COUNT = 1000;
    const HEIGHTS = [20, 40, 80, 77];
    const root = render(
      <WindowVirtualizer>
        {range(COUNT, (i) => (
          <div key={i} style={{ height: HEIGHTS[i % HEIGHTS.length] }}>
            item-{i}
          </div>
        ))}
      </WindowVirtualizer>,
    );
    const { viewport, container } = await getVirtualizer(root);

    // check if start is displayed
    await expect.poll(() => getItem(container, "item-0")).toBeDefined();
    expect(relativeTop(viewport, getItem(container, "item-0")!)).toBe(0);

    await expectVirtualizedAndScrollableRTL(
      root,
      "item-0",
      `item-${COUNT - 1}`,
    );
  });

  it("horizontally scrollable (WindowVirtualizer)", async () => {
    const COUNT = 1000;
    const root = render(
      <div style={{ display: "inline-block", height: 400 }}>
        <WindowVirtualizer horizontal>
          {range(COUNT, (i) => (
            <div key={i} style={{ width: i % 3 === 0 ? 100 : 60 }}>
              item-{i}
            </div>
          ))}
        </WindowVirtualizer>
      </div>,
    );
    const { viewport, container } = await getVirtualizer(root);

    // check if start is displayed
    await expect.poll(() => getItem(container, "item-0")).toBeDefined();
    expect(relativeRight(viewport, getItem(container, "item-0")!)).toBe(0);

    await expectVirtualizedAndScrollableRTL(
      root,
      "item-0",
      `item-${COUNT - 1}`,
    );
  });
});
