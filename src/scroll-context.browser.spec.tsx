import { afterEach, describe, expect, it } from "vitest";
import { render } from "../spec/browser/react.js";
import { Virtualizer } from "./react/index.js";
import {
  cleanupScroll,
  expectPosition,
  getItem,
  getVirtualizer,
  relativeBottom,
  relativeTop,
} from "../spec/browser/index.js";

afterEach(cleanupScroll);

describe("startMargin", () => {
  it("places the items after the header and keeps the footer at the end", async () => {
    const HEIGHTS = [20, 40, 80, 77];
    const items = Array.from({ length: 1000 }, (_, i) => i);
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
        <Virtualizer startMargin={HEADER_SIZE}>
          {items.map((i) => (
            <div key={i} style={{ height: HEIGHTS[i % HEIGHTS.length] }}>
              {i}
            </div>
          ))}
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
        viewport.scrollTop = viewport.scrollHeight;
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
    const root = render(
      <div
        style={{
          width: 400,
          height: 400,
          overflowX: "auto",
        }}
      >
        <Virtualizer horizontal>
          {Array.from({ length: 100 }, (_, c) => (
            <div
              key={c}
              style={{
                width: 300,
                height: 400,
                overflowY: "auto",
              }}
            >
              <Virtualizer>
                {Array.from({ length: 100 }, (_, r) => (
                  <div key={r} style={{ height: 80 }}>
                    {c}-{r}
                  </div>
                ))}
              </Virtualizer>
            </div>
          ))}
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
    column.viewport.scrollTop = 2000;
    await expect.poll(() => getItem(column.container, "0-25")).toBeDefined();
    expect(getItem(column.container, "0-0")).toBeUndefined();
    const columnOffset = column.viewport.scrollTop;

    // check if the deck is not scrolled and still renders the same columns
    expect(deck.viewport.scrollLeft).toBe(0);
    expect(deck.container.children[0]).toBe(firstColumn);

    // scroll the deck right, less than a column width not to unmount the first column
    deck.viewport.scrollLeft = 100;
    await expectPosition(
      () => firstColumn.getBoundingClientRect().left,
      deck.viewport.getBoundingClientRect().left - 100,
    );

    // check if the first column is not scrolled and still renders the same rows
    expect(column.viewport.scrollTop).toBe(columnOffset);
    expect(getItem(column.container, "0-25")).toBeDefined();
    expect(getItem(column.container, "0-0")).toBeUndefined();
  });
});
