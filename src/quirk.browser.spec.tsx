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
  getItem,
  getVirtualizer,
  recordScroll,
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

// The first scroll event is already at the destination, as the position is updated at once instead of animated by CSS scroll-behavior
const expectInstant = async (offsets: number[], position: number) => {
  await expect.poll(() => offsets.at(-1)).toBe(position);
  // The first offset is where the record started
  expect(offsets[1]).toBe(position);
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
        {(i) => (
          <div key={i} style={{ height: 30 }}>
            item-{i}
          </div>
        )}
      </Virtualizer>
    </div>,
  );
  await expectVirtualized(root, "item-0", `item-${items.length - 1}`);

  const { container } = await getVirtualizer(root);
  const initialHeight = await waitForStableHeight(container);

  container.style.display = "none";
  await waitForZeroSizeNotification(container);
  // let pending resize notifications propagate
  await delay(100);

  expect(container.style.height).toEqual(initialHeight);
});

it("display: none (WindowVirtualizer)", async () => {
  const root = render(
    <WindowVirtualizer data={items}>
      {(i) => (
        <div key={i} style={{ height: 30 }}>
          item-{i}
        </div>
      )}
    </WindowVirtualizer>,
  );
  await expectVirtualized(root, "item-0", `item-${items.length - 1}`);

  const { container } = await getVirtualizer(root);
  const initialHeight = await waitForStableHeight(container);

  container.style.display = "none";
  await waitForZeroSizeNotification(container);
  // let pending resize notifications propagate
  await delay(100);

  expect(container.style.height).toEqual(initialHeight);
});

it("display: none before the scroll event is dispatched", async () => {
  const ITEM_SIZE = 30;
  const root = render(
    <div style={{ height: 400, overflowY: "auto" }}>
      <Virtualizer data={items} itemSize={ITEM_SIZE}>
        {(i) => (
          <div key={i} style={{ height: ITEM_SIZE }}>
            item-{i}
          </div>
        )}
      </Virtualizer>
    </div>,
  );
  await expectVirtualized(root, "item-0", `item-${items.length - 1}`);

  const { viewport } = await getVirtualizer(root);
  viewport.scrollTop = 5000;
  viewport.style.display = "none";
  await delay(100);
  viewport.style.removeProperty("display");

  await expect
    .poll(() => root.textContent)
    .toContain(`item-${Math.floor(viewport.scrollTop / ITEM_SIZE)}`);
});

it("detached and reattached viewport", async () => {
  const ITEM_SIZE = 30;
  let scrollEnded = false;
  const root = render(
    <div style={{ height: 400, overflowY: "auto" }}>
      <Virtualizer
        data={items}
        itemSize={ITEM_SIZE}
        onScrollEnd={() => {
          scrollEnded = true;
        }}
      >
        {(i) => (
          <div key={i} style={{ height: ITEM_SIZE }}>
            item-{i}
          </div>
        )}
      </Virtualizer>
    </div>,
  );
  await expectVirtualized(root, "item-0", `item-${items.length - 1}`);

  const { viewport } = await getVirtualizer(root);
  viewport.scrollTop = 5000;
  // Detach the viewport at rest, not while the scroll end is pending
  await expect.poll(() => scrollEnded).toBe(true);

  const parent = root.parentElement!;
  const detached = waitForZeroSizeNotification(viewport);
  root.remove();
  await detached;
  parent.append(root);

  await expect
    .poll(() => root.textContent)
    .toContain(`item-${Math.floor(viewport.scrollTop / ITEM_SIZE)}`);
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
        {(i) => (
          <div key={i} style={{ height: 40 }}>
            item-{i}
          </div>
        )}
      </Virtualizer>
    </div>,
  );
  await expectVirtualizedAndScrollable(
    root,
    "item-0",
    `item-${items.length - 1}`,
  );
});

it("position: fixed viewport (VGrid)", async () => {
  const ROWS = 100;
  const COLS = 100;
  const root = render(
    <VGrid
      rows={ROWS}
      rowHeight={40}
      cols={COLS}
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
  await expectVirtualizedAndScrollable(
    root,
    "row-0/col-0",
    `row-${ROWS - 1}/col-${COLS - 1}`,
  );
});

it("hidden document does not cancel imperative scroll", async () => {
  const ITEM_SIZE = 60;
  const VIEWPORT_SIZE = 400;
  const Component = () => {
    const ref = useRef<VirtualizerHandle>(null);
    useLayoutEffect(() => {
      ref.current!.scrollToIndex(items.length - 1, { align: "end" });
    }, []);

    // Emulates hidden document
    return (
      <div style={{ contentVisibility: "hidden" }}>
        <div style={{ height: VIEWPORT_SIZE, overflowY: "auto" }}>
          <Virtualizer ref={ref} data={items}>
            {(i) => (
              <div key={i} style={{ height: ITEM_SIZE }}>
                item-{i}
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
  const bottom = items.length * ITEM_SIZE - VIEWPORT_SIZE;
  expect(viewport.checkVisibility()).toBe(false);
  // The estimated size must be smaller than the actual one, or a canceled scroll is also clamped to the bottom
  expect(viewport.scrollTop).toBeLessThan(bottom);

  hidden.style.contentVisibility = "";

  await expect.poll(() => viewport.scrollTop).toBe(bottom);
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
        {(i) => (
          <div key={i} style={{ height: 30 }}>
            item-{i}
          </div>
        )}
      </Virtualizer>
    </div>,
  );
  await expectVirtualizedAndScrollable(
    root,
    "item-0",
    `item-${items.length - 1}`,
  );
});

it("overflow", async () => {
  // The header gives room for the first item to overflow out of the virtualizer
  const HEADER_SIZE = 24;
  const root = render(
    <div style={{ height: 400, overflowY: "auto" }}>
      <div style={{ height: HEADER_SIZE }} />
      <Virtualizer data={items} startMargin={HEADER_SIZE}>
        {(i) => (
          <div key={i} style={{ height: 40, position: "relative" }}>
            item-{i}
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
  await expectVirtualized(root, "item-0", `item-${items.length - 1}`);
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
        {(i) => (
          <div key={i} style={{ height: 30 }}>
            item-{i}
          </div>
        )}
      </Virtualizer>
    </div>,
    newWindow!.document,
  );
  await expectVirtualizedAndScrollable(
    root,
    "item-0",
    `item-${items.length - 1}`,
  );
});

it("iframe", async () => {
  const iframe = createDomRoot(document, "iframe");
  iframe.width = "400";
  iframe.height = "400";

  const root = render(
    <div style={{ height: 400, overflowY: "auto" }}>
      <Virtualizer data={items}>
        {(i) => (
          <div key={i} style={{ height: 30 }}>
            item-{i}
          </div>
        )}
      </Virtualizer>
    </div>,
    iframe.contentDocument!,
  );
  await expectVirtualizedAndScrollable(
    root,
    "item-0",
    `item-${items.length - 1}`,
  );
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
        {(i) => (
          <div key={i} style={{ height: 30 }}>
            item-{i}
          </div>
        )}
      </Virtualizer>
    </div>,
  );
  onTestFinished(() => reactRoot.unmount());
  await expectVirtualizedAndScrollable(
    root,
    "item-0",
    `item-${items.length - 1}`,
  );
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
        {(i) => (
          <div key={i} style={{ height: 30 }}>
            item-{i}
          </div>
        )}
      </Virtualizer>
    </div>,
  );
  await expectVirtualizedAndScrollable(
    root,
    "item-0",
    `item-${items.length - 1}`,
  );

  const { container } = await getVirtualizer(root);
  await waitForStableHeight(container);
  expectItemDistance(container, 30);
});

it("zoom", async () => {
  const root = render(
    <div style={{ zoom: 1.5, height: 400, overflowY: "auto" }}>
      <Virtualizer data={items}>
        {(i) => (
          <div key={i} style={{ height: 30 }}>
            item-{i}
          </div>
        )}
      </Virtualizer>
    </div>,
  );
  await expectVirtualizedAndScrollable(
    root,
    "item-0",
    `item-${items.length - 1}`,
  );

  const { container } = await getVirtualizer(root);
  await waitForStableHeight(container);
  expectItemDistance(container, 30);
});

it("fractional item size", async () => {
  const root = render(
    <div style={{ height: 400, overflowY: "auto" }}>
      <Virtualizer data={items}>
        {(i) => (
          <div key={i} style={{ height: 30.5 }}>
            item-{i}
          </div>
        )}
      </Virtualizer>
    </div>,
  );
  await expectVirtualizedAndScrollable(
    root,
    "item-0",
    `item-${items.length - 1}`,
  );

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
        {(i) => (
          <div key={i} style={{ height: 30 }}>
            item-{i}
          </div>
        )}
      </Virtualizer>
    </div>,
  );
  await expectVirtualized(root, "item-0", `item-${items.length - 1}`);
  const { viewport, container } = await getVirtualizer(root);
  await waitForStableHeight(container);

  const scrolled = recordScroll(viewport);

  ref.current!.scrollTo(OFFSET);
  await expectInstant(scrolled.offsets, OFFSET);
});

it("scroll-behavior: smooth (WindowVirtualizer)", async () => {
  const ITEM_SIZE = 30;
  const INDEX = 200;
  const { documentElement } = document;
  documentElement.style.scrollBehavior = "smooth";
  onTestFinished(() => {
    documentElement.style.scrollBehavior = "";
  });
  const ref = createRef<WindowVirtualizerHandle>();
  const root = render(
    // The size is known before the items are measured, so the scroll lands on the item at once
    <WindowVirtualizer ref={ref} data={items} itemSize={ITEM_SIZE}>
      {(i) => (
        <div key={i} style={{ height: ITEM_SIZE }}>
          item-{i}
        </div>
      )}
    </WindowVirtualizer>,
  );
  await expectVirtualized(root, "item-0", `item-${items.length - 1}`);
  const { container } = await getVirtualizer(root);
  await waitForStableHeight(container);

  const scrolled = recordScroll(window);

  ref.current!.scrollToIndex(INDEX);
  // The virtualizer starts at the top of the document
  await expectInstant(scrolled.offsets, INDEX * ITEM_SIZE);
});

it("scroll-behavior: smooth (shift compensation)", async () => {
  const ITEM_SIZE = 30;
  const OFFSET = 6000;
  const PREPEND_COUNT = 10;
  const List = ({ data }: { data: number[] }) => (
    <div style={{ height: 400, overflowY: "auto", scrollBehavior: "smooth" }}>
      <Virtualizer data={data} shift>
        {(i) => (
          <div key={i} style={{ height: ITEM_SIZE }}>
            item-{i}
          </div>
        )}
      </Virtualizer>
    </div>
  );
  const root = render(<List data={items} />);
  await expectVirtualized(root, "item-0", `item-${items.length - 1}`);
  const { viewport, container } = await getVirtualizer(root);
  await waitForStableHeight(container);

  await expect
    .poll(() => {
      viewport.scrollTo({ top: OFFSET, behavior: "instant" });
      return getItem(container, `item-${OFFSET / ITEM_SIZE}`);
    })
    .toBeDefined();
  await waitForStableHeight(container);

  const scrolled = recordScroll(viewport);

  rerender(
    root,
    <List
      data={[...range(PREPEND_COUNT, (i) => i - PREPEND_COUNT), ...items]}
    />,
  );
  // The compensation must jump in a single write
  await expectInstant(scrolled.offsets, OFFSET + PREPEND_COUNT * ITEM_SIZE);
});

describe("RTL", () => {
  beforeEach(setRTL);

  it("vertically scrollable (Virtualizer)", async () => {
    const ITEM_COUNT = 1000;
    const HEIGHTS = [20, 40, 80, 77];
    const root = render(
      <div style={{ height: 400, overflowY: "auto" }}>
        <Virtualizer data={range(ITEM_COUNT)}>
          {(i) => (
            <div key={i} style={{ height: HEIGHTS[i % HEIGHTS.length] }}>
              item-{i}
            </div>
          )}
        </Virtualizer>
      </div>,
    );
    const { viewport, container } = await getVirtualizer(root);

    // check if start is displayed
    await expect.poll(() => getItem(container, "item-0")).toBeDefined();
    expect(relativeTop(viewport, getItem(container, "item-0")!)).toBe(0);

    await expectVirtualizedAndScrollable(
      root,
      "item-0",
      `item-${ITEM_COUNT - 1}`,
      true,
    );
  });

  it("horizontally scrollable (Virtualizer)", async () => {
    const ITEM_COUNT = 1000;
    const root = render(
      <div style={{ width: 400, height: 200, overflowX: "auto" }}>
        <Virtualizer data={range(ITEM_COUNT)} horizontal>
          {(i) => (
            <div key={i} style={{ width: i % 3 === 0 ? 100 : 60 }}>
              item-{i}
            </div>
          )}
        </Virtualizer>
      </div>,
    );
    const { viewport, container } = await getVirtualizer(root);

    // check if start is displayed
    await expect.poll(() => getItem(container, "item-0")).toBeDefined();
    expect(relativeRight(viewport, getItem(container, "item-0")!)).toBe(0);

    await expectVirtualizedAndScrollable(
      root,
      "item-0",
      `item-${ITEM_COUNT - 1}`,
      true,
    );
  });

  it("vertically scrollable (WindowVirtualizer)", async () => {
    const ITEM_COUNT = 1000;
    const HEIGHTS = [20, 40, 80, 77];
    const root = render(
      <WindowVirtualizer data={range(ITEM_COUNT)}>
        {(i) => (
          <div key={i} style={{ height: HEIGHTS[i % HEIGHTS.length] }}>
            item-{i}
          </div>
        )}
      </WindowVirtualizer>,
    );
    const { viewport, container } = await getVirtualizer(root);

    // check if start is displayed
    await expect.poll(() => getItem(container, "item-0")).toBeDefined();
    expect(relativeTop(viewport, getItem(container, "item-0")!)).toBe(0);

    await expectVirtualizedAndScrollable(
      root,
      "item-0",
      `item-${ITEM_COUNT - 1}`,
      true,
    );
  });

  it("horizontally scrollable (WindowVirtualizer)", async () => {
    const ITEM_COUNT = 1000;
    const root = render(
      <div style={{ display: "inline-block", height: 400 }}>
        <WindowVirtualizer data={range(ITEM_COUNT)} horizontal>
          {(i) => (
            <div key={i} style={{ width: i % 3 === 0 ? 100 : 60 }}>
              item-{i}
            </div>
          )}
        </WindowVirtualizer>
      </div>,
    );
    const { viewport, container } = await getVirtualizer(root);

    // check if start is displayed
    await expect.poll(() => getItem(container, "item-0")).toBeDefined();
    expect(relativeRight(viewport, getItem(container, "item-0")!)).toBe(0);

    await expectVirtualizedAndScrollable(
      root,
      "item-0",
      `item-${ITEM_COUNT - 1}`,
      true,
    );
  });
});
