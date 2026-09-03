import { expect, it, onTestFinished } from "vitest";
import {
  createRef,
  useLayoutEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { createRoot } from "react-dom/client";
import {
  Virtualizer,
  type VirtualizerHandle,
  WindowVirtualizer,
} from "./react/index.js";
import { expectVirtualized } from "../spec/browser.js";

const items = Array.from({ length: 1000 }, (_, i) => i);

const render = (node: ReactNode, doc: Document = document) => {
  const container = doc.body.appendChild(doc.createElement("div"));
  onTestFinished(() => {
    container.remove();
    doc.scrollingElement!.scrollTop = 0;
    doc.scrollingElement!.scrollLeft = 0;
  });
  const root = createRoot(container);
  root.render(node);
  onTestFinished(() => root.unmount());
  return container;
};

const waitForMount = async (container: Element) => {
  await expect
    .poll(() => container.textContent, { timeout: 5000 })
    .toContain("item-0");
  expect(container.textContent).not.toContain("item-999");
};

const waitForStableHeight = async (spacer: HTMLElement): Promise<string> => {
  let prev: string | undefined;
  await expect
    .poll(() => {
      const height = spacer.style.height;
      const isStable = !!height && height === prev;
      prev = height;
      return isStable;
    })
    .toBe(true);
  return prev!;
};

const getSpacer = (container: Element) =>
  container.querySelector('*[style*="flex: 0 0 auto"]') as HTMLElement;

// Items must be placed in layout size, not in visual size of getBoundingClientRect or rounded size of offsetHeight
const expectItemDistance = (spacer: HTMLElement, size: number) => {
  const tops = Array.from(spacer.children, (e) =>
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
  const container = render(
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
  await waitForMount(container);

  const scroller = container.firstElementChild as HTMLElement;
  const spacer = scroller.firstElementChild as HTMLElement;
  const initialHeight = await waitForStableHeight(spacer);

  container.style.display = "none";
  await waitForZeroSizeNotification(spacer);
  // let pending resize notifications propagate
  await new Promise((resolve) => setTimeout(resolve, 100));

  expect(spacer.style.height).toEqual(initialHeight);
});

it("display: none (WindowVirtualizer)", async () => {
  const container = render(
    <WindowVirtualizer data={items}>
      {(d) => (
        <div key={d} style={{ height: 30 }}>
          item-{d}
        </div>
      )}
    </WindowVirtualizer>,
  );
  await waitForMount(container);

  const spacer = container.firstElementChild as HTMLElement;
  const initialHeight = await waitForStableHeight(spacer);

  container.style.display = "none";
  await waitForZeroSizeNotification(spacer);
  // let pending resize notifications propagate
  await new Promise((resolve) => setTimeout(resolve, 100));

  expect(spacer.style.height).toEqual(initialHeight);
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
  const container = render(<Component />);

  // Scheduled scroll gives up 150ms after the last resize
  await new Promise((resolve) => setTimeout(resolve, 400));
  const hidden = container.firstElementChild as HTMLElement;
  const scroller = hidden.firstElementChild as HTMLElement;
  const bottom = items.length * 60 - 400;
  expect(scroller.checkVisibility()).toBe(false);
  // The estimated size must be smaller than the actual one, or a canceled scroll is also clamped to the bottom
  expect(scroller.scrollTop).toBeLessThan(bottom);

  hidden.style.contentVisibility = "";

  await expect.poll(() => scroller.scrollTop, { timeout: 5000 }).toBe(bottom);
});

it("flex parent", async () => {
  const container = render(
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
  await expectVirtualized(container, "item-0", "item-999");
});

it("new window", async () => {
  const newWindow = window.open("", "", "width=400,height=400");
  expect(newWindow).toBeTruthy();
  onTestFinished(() => newWindow!.close());

  // Firefox may initialize the popup document asynchronously
  await expect
    .poll(() => newWindow!.document.readyState, { timeout: 5000 })
    .toBe("complete");

  const container = render(
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
  await expectVirtualized(container, "item-0", "item-999");
});

it("iframe", async () => {
  const iframe = document.body.appendChild(document.createElement("iframe"));
  iframe.width = "400";
  iframe.height = "400";
  onTestFinished(() => iframe.remove());

  const container = render(
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
  await expectVirtualized(container, "item-0", "item-999");
});

it("shadow DOM", async () => {
  const host = document.body.appendChild(document.createElement("div"));
  onTestFinished(() => host.remove());
  const container = host
    .attachShadow({ mode: "open" })
    .appendChild(document.createElement("div"));
  const root = createRoot(container);
  root.render(
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
  onTestFinished(() => root.unmount());
  await expectVirtualized(container, "item-0", "item-999");
});

it("transform: scale", async () => {
  const container = render(
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
  await expectVirtualized(container, "item-0", "item-999");

  const spacer = getSpacer(container);
  await waitForStableHeight(spacer);
  expectItemDistance(spacer, 30);
});

it("zoom", async () => {
  const container = render(
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
  await expectVirtualized(container, "item-0", "item-999");

  const spacer = getSpacer(container);
  await waitForStableHeight(spacer);
  expectItemDistance(spacer, 30);
});

it("fractional item size", async () => {
  const container = render(
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
  await expectVirtualized(container, "item-0", "item-999");

  const spacer = getSpacer(container);
  await waitForStableHeight(spacer);
  expectItemDistance(spacer, 30.5);
});

it("prepending cancels imperative scroll", async () => {
  let id = 0;
  const createItems = (count: number) =>
    Array.from({ length: count }, () => id++);

  const ref = createRef<VirtualizerHandle>();
  let prependCount = 0;
  let scrollEnded = false;

  const Component = () => {
    const [items, setItems] = useState(() => createItems(100));
    const isPrepend = useRef(false);

    useLayoutEffect(() => {
      isPrepend.current = false;
    });

    return (
      <div style={{ height: 400, overflowY: "auto" }}>
        <Virtualizer
          ref={ref}
          shift={isPrepend.current}
          onScroll={(offset) => {
            if (offset < 100) {
              prependCount++;
              isPrepend.current = true;
              setItems((prev) => [...createItems(100), ...prev]);
            }
          }}
          onScrollEnd={() => {
            scrollEnded = true;
          }}
        >
          {items.map((i) => (
            <div key={i} style={{ height: 40 }}>
              item-{i}
            </div>
          ))}
        </Virtualizer>
      </div>
    );
  };

  const container = render(<Component />);
  await waitForMount(container);

  // scroll to end
  const scroller = container.firstElementChild!;
  scroller.scrollTop = scroller.scrollHeight;
  await expect.poll(() => scrollEnded).toBe(true);
  scrollEnded = false;

  // scroll to top
  ref.current!.scrollTo(0);

  // check if imperative scrolling doesn't cause infinite loop
  await expect.poll(() => scrollEnded).toBe(true);
  expect(prependCount).toBe(1);
});
