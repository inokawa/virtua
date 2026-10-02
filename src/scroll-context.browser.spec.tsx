import { afterEach, describe, expect, it } from "vitest";
import { render } from "../spec/browser/react.js";
import { Virtualizer } from "./react/index.js";
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

describe("startMargin", () => {
  it("places the items after the header and keeps the footer at the end", async () => {
    const HEIGHTS = [20, 40, 80, 77];
    const items = range(1000);
    const last = String(items.length - 1);
    const HEADER_SIZE = 100;
    const FOOTER_SIZE = 200;
    const root = render(
      <div
        style={{
          height: 400,
          overflowY: "auto",
          // opt out browser's scroll anchoring on header/footer because it will conflict to scroll anchoring of virtualizer
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
