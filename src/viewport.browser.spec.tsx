import { afterEach, describe, expect, it, onTestFinished } from "vitest";
import { createRef } from "react";
import { render, rerender } from "../spec/browser/react.jsx";
import {
  Virtualizer,
  type VirtualizerHandle,
  WindowVirtualizer,
} from "./react/index.js";
import {
  cleanupScroll,
  expectPosition,
  getItem,
  getVirtualizer,
  relativeBottom,
  relativeLeft,
  relativeTop,
  scrollToEnd,
} from "../spec/browser/index.js";
import { range } from "../spec/utils.js";

afterEach(cleanupScroll);

const expectNothingRenderedOutside = async (
  viewport: HTMLElement,
  container: HTMLElement,
  surroundingSize: number,
) => {
  const scrollIntoItems = async () => {
    viewport.scrollTop = surroundingSize;
    await expect.poll(() => getItem(container, "0")).toBeDefined();
  };
  await scrollIntoItems();

  // scroll before the items, and back
  viewport.scrollTop = 0;
  await expect.poll(() => container.children.length).toBe(0);
  await scrollIntoItems();

  // scroll after the items
  scrollToEnd(viewport);
  await expect.poll(() => container.children.length).toBe(0);
};

it("places the items after the header and keeps the footer at the end", async () => {
  // The sizes are even so that their median, which may be the mean of two of them, is whole and the positions can be compared exactly
  const HEIGHTS = [20, 40, 80, 76];
  const items = range(1000);
  const last = String(items.length - 1);
  const HEADER_SIZE = 100;
  const FOOTER_SIZE = 200;
  const root = render(
    <div
      style={{
        height: 400,
        overflowY: "auto",
        // opt out browser's scroll anchoring on header/footer because it will conflict with scroll anchoring of virtualizer
        overflowAnchor: "none",
      }}
    >
      <div style={{ height: HEADER_SIZE }}>header</div>
      <Virtualizer data={items} startMargin={HEADER_SIZE}>
        {(i) => (
          <div key={i} style={{ height: HEIGHTS[i % HEIGHTS.length] }}>
            {i}
          </div>
        )}
      </Virtualizer>
      <div style={{ height: FOOTER_SIZE }}>footer</div>
    </div>,
  );
  const { viewport, container } = await getVirtualizer(root);

  // check if start is displayed below the header
  await expect.poll(() => getItem(container, "0")).toBeDefined();
  await expectPosition(
    () => relativeTop(viewport, getItem(container, "0")!),
    HEADER_SIZE,
  );

  // scroll to the end
  await expect
    .poll(() => {
      scrollToEnd(viewport);
      return getItem(container, last);
    })
    .toBeDefined();

  // check if the end is displayed above the footer
  await expectPosition(
    () => relativeBottom(viewport, getItem(container, last)!),
    FOOTER_SIZE,
  );
});

it("renders nothing while the viewport is entirely before or after the items (Virtualizer)", async () => {
  const ITEM_SIZE = 40;
  const VIEWPORT_SIZE = 400;
  const SURROUNDING_SIZE = VIEWPORT_SIZE * 2;
  const root = render(
    <div
      style={{
        height: VIEWPORT_SIZE,
        overflowY: "auto",
        overflowAnchor: "none",
      }}
    >
      <div style={{ height: SURROUNDING_SIZE }}>header</div>
      <Virtualizer data={range(100)} startMargin={SURROUNDING_SIZE}>
        {(i) => (
          <div key={i} style={{ height: ITEM_SIZE }}>
            {i}
          </div>
        )}
      </Virtualizer>
      <div style={{ height: SURROUNDING_SIZE }}>footer</div>
    </div>,
  );
  const { viewport, container } = await getVirtualizer(root);
  await expectNothingRenderedOutside(viewport, container, SURROUNDING_SIZE);
});

it("renders nothing while the viewport is entirely before or after the items (WindowVirtualizer)", async () => {
  const ITEM_SIZE = 40;
  const SURROUNDING_SIZE = window.innerHeight * 2;
  const root = render(
    <div>
      <div style={{ height: SURROUNDING_SIZE }}>header</div>
      <WindowVirtualizer data={range(100)}>
        {(i) => (
          <div key={i} style={{ height: ITEM_SIZE }}>
            {i}
          </div>
        )}
      </WindowVirtualizer>
      <div style={{ height: SURROUNDING_SIZE }}>footer</div>
    </div>,
  );
  const { viewport, container } = await getVirtualizer(root);
  await expectNothingRenderedOutside(viewport, container, SURROUNDING_SIZE);
});

it("renders the items a scroll step before the viewport reaches them and removes them a step after it leaves, without a scroll end", async () => {
  const ITEM_SIZE = 40;
  const VIEWPORT_SIZE = 400;
  const SURROUNDING_SIZE = VIEWPORT_SIZE * 2;
  const STEP = 10;
  const items = range(100);
  let scrollEnds = 0;
  const root = render(
    <div
      style={{
        height: VIEWPORT_SIZE,
        overflowY: "auto",
        overflowAnchor: "none",
      }}
    >
      <div style={{ height: SURROUNDING_SIZE }}>header</div>
      {/* The buffer is applied only after the item size is estimated */}
      <Virtualizer
        data={items}
        itemSize={ITEM_SIZE}
        startMargin={SURROUNDING_SIZE}
        onScrollEnd={() => scrollEnds++}
      >
        {(i) => (
          <div key={i} style={{ height: ITEM_SIZE }}>
            {i}
          </div>
        )}
      </Virtualizer>
      <div style={{ height: SURROUNDING_SIZE }}>footer</div>
    </div>,
  );
  const { viewport, container } = await getVirtualizer(root);
  const ITEMS_END = SURROUNDING_SIZE + ITEM_SIZE * items.length;

  // A scroll end is not reported while touching, so the items are removed and rendered by the scroll events alone
  viewport.dispatchEvent(new Event("touchstart"));

  // scroll to the end of the items, off the step so that the steps never land on the end
  viewport.scrollTop = ITEMS_END - ITEM_SIZE - STEP / 2;
  await expect
    .poll(() => getItem(container, String(items.length - 1)))
    .toBeDefined();

  // leave the items step by step until a step after them
  await expect
    .poll(() => {
      if (viewport.scrollTop > ITEMS_END) {
        return true;
      }
      viewport.scrollTop += STEP;
      return false;
    })
    .toBe(true);
  await expect.poll(() => container.children.length).toBe(0);

  // jump before the items, and approach them step by step until a step before them
  const APPROACH_END = SURROUNDING_SIZE - VIEWPORT_SIZE - STEP;
  viewport.scrollTop = APPROACH_END - 300;
  await expect
    .poll(() => {
      if (viewport.scrollTop >= APPROACH_END) {
        return true;
      }
      viewport.scrollTop += STEP;
      return false;
    })
    .toBe(true);
  await expect.poll(() => getItem(container, "0")).toBeDefined();
  await expectPosition(
    () => relativeTop(viewport, getItem(container, "0")!),
    VIEWPORT_SIZE + STEP,
  );

  expect(scrollEnds).toBe(0);
  viewport.dispatchEvent(new Event("touchend"));
});

it("WindowVirtualizer below the viewport renders nothing on mount", async () => {
  const ITEM_SIZE = 40;
  const SURROUNDING_SIZE = window.innerHeight * 2;
  const mutations: MutationRecord[] = [];
  const observer = new MutationObserver((records) => {
    mutations.push(...records);
  });
  observer.observe(document.body, { childList: true, subtree: true });
  onTestFinished(() => observer.disconnect());

  const renderItem = (i: number) => (
    <div key={i} style={{ height: ITEM_SIZE }}>
      {i}
    </div>
  );
  const root = render(
    <div>
      <div>
        <WindowVirtualizer data={range(100)}>{renderItem}</WindowVirtualizer>
      </div>
      <div style={{ height: SURROUNDING_SIZE }}>spacer</div>
      <div>
        <WindowVirtualizer data={range(100)}>{renderItem}</WindowVirtualizer>
      </div>
    </div>,
  );
  const above = await getVirtualizer(root);
  const below = await getVirtualizer(root.firstElementChild!.children[2]!);

  // Both viewports are measured in the same frame and the first render after the measurement is synchronous, so the one below has been rendered once the one above renders its items
  await expect.poll(() => getItem(above.container, "0")).toBeDefined();
  expect(mutations.some((m) => m.target === below.container)).toBe(false);

  // scroll into the items
  below.viewport.scrollTop = below.container.offsetTop + ITEM_SIZE * 5;
  await expect.poll(() => getItem(below.container, "5")).toBeDefined();
});

it("WindowVirtualizer renders the items when the content before them shrinks and the viewport reaches them without scrolling", async () => {
  const ITEM_SIZE = 40;
  const SURROUNDING_SIZE = window.innerHeight * 2;
  const renderItem = (i: number) => (
    <div key={i} style={{ height: ITEM_SIZE }}>
      {i}
    </div>
  );
  const Page = ({ spacerSize }: { spacerSize: number }) => (
    <div>
      <div>
        <WindowVirtualizer data={range(5)}>{renderItem}</WindowVirtualizer>
      </div>
      <div style={{ height: spacerSize }}>spacer</div>
      <div>
        <WindowVirtualizer data={range(100)}>{renderItem}</WindowVirtualizer>
      </div>
    </div>
  );
  const root = render(<Page spacerSize={SURROUNDING_SIZE} />);
  const above = await getVirtualizer(root);
  const below = await getVirtualizer(root.firstElementChild!.children[2]!);
  // Both viewports are measured in the same frame and the first render after the measurement is synchronous, so the one below has been rendered once the one above renders its items
  await expect.poll(() => getItem(above.container, "0")).toBeDefined();
  expect(getItem(below.container, "0")).toBeUndefined();

  rerender(root, <Page spacerSize={0} />);
  await expect.poll(() => getItem(below.container, "0")).toBeDefined();
});

it("renders the items from the destination to the end of them on smooth scrolling from after them", async () => {
  const ITEM_SIZE = 40;
  const VIEWPORT_SIZE = 400;
  const SURROUNDING_SIZE = VIEWPORT_SIZE * 2;
  const items = range(1000);
  const last = String(items.length - 1);
  const TARGET_INDEX = 900;
  const ref = createRef<VirtualizerHandle>();
  const root = render(
    <div
      style={{
        height: VIEWPORT_SIZE,
        overflowY: "auto",
        overflowAnchor: "none",
      }}
    >
      <Virtualizer ref={ref} data={items}>
        {(i) => (
          <div key={i} style={{ height: ITEM_SIZE }}>
            {i}
          </div>
        )}
      </Virtualizer>
      <div style={{ height: SURROUNDING_SIZE }}>footer</div>
    </div>,
  );
  const { viewport, container } = await getVirtualizer(root);

  // scroll after the items
  await expect.poll(() => getItem(container, "0")).toBeDefined();
  scrollToEnd(viewport);
  await expect.poll(() => container.children.length).toBe(0);

  ref.current!.scrollToIndex(TARGET_INDEX, { smooth: true });

  // check if the items on the way are rendered to be measured before scrolling, and the items on the other side are not
  await expect
    .poll(() => getItem(container, String(TARGET_INDEX)))
    .toBeDefined();
  expect(getItem(container, last)).toBeDefined();
  expect(getItem(container, "0")).toBeUndefined();
});

describe("nested scroll containers", () => {
  it("keeps the state of each axis independent", async () => {
    const ROW_SIZE = 80;
    const COLUMN_OFFSET = 2000;
    const root = render(
      <div
        style={{
          width: 400,
          height: 400,
          overflowX: "auto",
        }}
      >
        <Virtualizer data={range(100)} horizontal>
          {(c) => (
            <div
              key={c}
              style={{
                width: 300,
                height: 400,
                overflowY: "auto",
              }}
            >
              <Virtualizer data={range(100)}>
                {(r) => (
                  <div key={r} style={{ height: ROW_SIZE }}>
                    {c}-{r}
                  </div>
                )}
              </Virtualizer>
            </div>
          )}
        </Virtualizer>
      </div>,
    );

    const deck = await getVirtualizer(root);
    await expect.poll(() => deck.container.children.length).toBeGreaterThan(1);
    const firstColumn = deck.container.children[0]!;
    const column = await getVirtualizer(firstColumn);

    // check if the start of both axes is displayed
    await expect.poll(() => getItem(column.container, "0-0")).toBeDefined();

    // scroll the first column down
    column.viewport.scrollTop = COLUMN_OFFSET;
    await expect
      .poll(() => getItem(column.container, `0-${COLUMN_OFFSET / ROW_SIZE}`))
      .toBeDefined();
    await expect.poll(() => getItem(column.container, "0-0")).toBeUndefined();
    const columnOffset = column.viewport.scrollTop;

    // check if the deck is not scrolled and still renders the same columns
    expect(deck.viewport.scrollLeft).toBe(0);
    expect(deck.container.children[0]).toBe(firstColumn);

    // scroll the deck right, less than a column width not to unmount the first column
    const DECK_OFFSET = 100;
    deck.viewport.scrollLeft = DECK_OFFSET;
    await expectPosition(
      () => relativeLeft(deck.viewport, firstColumn),
      -DECK_OFFSET,
    );

    // check if the first column is not scrolled and still renders the same rows
    expect(column.viewport.scrollTop).toBe(columnOffset);
    expect(
      getItem(column.container, `0-${COLUMN_OFFSET / ROW_SIZE}`),
    ).toBeDefined();
    await expect.poll(() => getItem(column.container, "0-0")).toBeUndefined();
  });
});
