import { describe, expect, it } from "vitest";
import { render } from "../spec/browser/react.js";
import { createRef, useLayoutEffect, useRef, useState } from "react";
import { Virtualizer, type VirtualizerHandle } from "./react/index.js";
import { expectVirtualized, getVirtualizer } from "../spec/browser/index.js";

describe("jump write", () => {
  const ITEM_COUNT = 1000;
  const HEIGHTS = [20, 40, 80, 77];

  // itemSize is not given and the sizes vary, so scrolling far ahead lands in an area sized by estimation
  const List = () => (
    <div style={{ height: "100vh", overflowY: "auto" }}>
      <Virtualizer>
        {Array.from({ length: ITEM_COUNT }, (_, i) => (
          <div key={i} style={{ height: HEIGHTS[i % HEIGHTS.length] }}>
            {i}
          </div>
        ))}
      </Virtualizer>
    </div>
  );

  it("fast scrolling into unmeasured area does not lose scroll position", async () => {
    const container = render(<List />);
    const list = await getVirtualizer(container);
    const scroller = list.parentElement!;

    // check if start is displayed
    await expect.poll(() => list.firstElementChild?.textContent).toBe("0");

    // scroll fast with large delta and check if the scrolled position is not rolled back, ignoring the expected compensation of estimated sizes
    let lost = 0;
    let pos = 0;
    for (let i = 0; i < 25; i++) {
      if (i > 0) {
        const rollback = pos - scroller.scrollTop;
        if (rollback > 1) {
          lost += rollback;
        }
      }
      pos += 1500;
      scroller.scrollTop = pos;
      await new Promise(requestAnimationFrame);
    }
    expect(lost).toBe(0);
  });
});

describe("shift compensation", () => {
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
    await expectVirtualized(container, "item-0", "item-999");

    // scroll to end
    const scroller = (await getVirtualizer(container)).parentElement!;
    scroller.scrollTop = scroller.scrollHeight;
    await expect.poll(() => scrollEnded).toBe(true);
    scrollEnded = false;

    // scroll to top
    ref.current!.scrollTo(0);

    // check if imperative scrolling doesn't cause infinite loop
    await expect.poll(() => scrollEnded).toBe(true);
    expect(prependCount).toBe(1);
  });
});
