import { afterEach, describe, expect, it } from "vitest";
import { createRef, type CSSProperties, type Ref } from "react";
import { render, rerender } from "../spec/browser/react.js";
import { Virtualizer, type VirtualizerHandle } from "./react/index.js";
import {
  cleanupScroll,
  expectVirtualized,
  getItem,
  getVirtualizer,
  scrollToEnd,
} from "../spec/browser/index.js";
import { range } from "../spec/utils.js";

afterEach(cleanupScroll);

describe("children change", () => {
  const HEIGHTS = [20, 40, 80, 77];

  const List = ({
    count,
    style,
    handle,
  }: {
    count: number;
    style?: CSSProperties;
    handle?: Ref<VirtualizerHandle>;
  }) => (
    <div style={{ height: 400, overflowY: "auto", ...style }}>
      <Virtualizer ref={handle} data={range(count)}>
        {(i) => (
          <div key={i} style={{ height: HEIGHTS[i % HEIGHTS.length] }}>
            item-{i}
          </div>
        )}
      </Virtualizer>
    </div>
  );

  it("recovering from 0", async () => {
    const root = render(<List count={4} />);
    const { container } = await getVirtualizer(root);
    await expect.poll(() => getItem(container, "item-3")).toBeDefined();

    // delete all
    rerender(root, <List count={0} />);
    await expect.poll(() => container.childElementCount).toBe(0);

    // add
    rerender(root, <List count={4} />);

    // check if an error didn't occur
    await expect.poll(() => getItem(container, "item-3")).toBeDefined();
  });

  it("recovering from 0 with height: auto style", async () => {
    // set height: auto
    // The viewport shrinks to 0 along with its items because its height is not fixed
    const style: CSSProperties = { height: "auto", contain: "content" };
    const root = render(<List count={4} style={style} />);
    const { viewport, container } = await getVirtualizer(root);
    await expect.poll(() => getItem(container, "item-3")).toBeDefined();

    // delete all
    rerender(root, <List count={0} style={style} />);
    await expect.poll(() => container.childElementCount).toBe(0);
    await expect.poll(() => viewport.clientHeight).toBe(0);

    // add
    rerender(root, <List count={4} style={style} />);

    // check if an error didn't occur
    await expect.poll(() => getItem(container, "item-3")).toBeDefined();
  });

  it("recovering when changed a lot after scrolling", async () => {
    const handle = createRef<VirtualizerHandle>();
    const root = render(<List count={4} handle={handle} />);
    const { viewport, container } = await getVirtualizer(root);
    await expect.poll(() => getItem(container, "item-3")).toBeDefined();

    // add many
    rerender(root, <List count={1004} handle={handle} />);

    // scroll a lot
    await expect
      .poll(() => {
        scrollToEnd(viewport);
        return getItem(container, "item-1003");
      })
      .toBeDefined();
    await expect.poll(() => getItem(container, "item-0")).toBeUndefined();

    // delete many
    rerender(root, <List count={4} handle={handle} />);
    await expect.poll(() => getItem(container, "item-3")).toBeDefined();
    // The shrink clamps the scroll offset, which the store has to learn from the scroll event before adding many again
    await expect.poll(() => handle.current!.scrollOffset).toBe(0);

    // add many
    rerender(root, <List count={1004} handle={handle} />);

    // check if an error didn't occur
    await expectVirtualized(root, "item-0", "item-1003");
  });
});
