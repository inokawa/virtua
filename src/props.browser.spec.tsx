import { afterEach, describe, expect, it } from "vitest";
import {
  createContext,
  createRef,
  use,
  useLayoutEffect,
  useState,
  type RefObject,
} from "react";
import { render, rerender } from "../spec/browser/react.js";
import {
  type CustomItemComponentProps,
  Virtualizer,
  type VirtualizerHandle,
} from "./react/index.js";
import type { CacheSnapshot } from "./core/index.js";
import {
  cleanupScroll,
  expectPosition,
  findFirstVisibleItem,
  getItem,
  getVirtualizer,
  relativeTop,
} from "../spec/browser/index.js";
import { range } from "../spec/utils.js";

afterEach(cleanupScroll);

describe("cache", () => {
  const Restorable = ({
    handle,
    saved,
  }: {
    handle: RefObject<VirtualizerHandle | null>;
    saved: RefObject<[number, CacheSnapshot] | null>;
  }) => {
    const HEIGHTS = [20, 40, 80, 77];
    useLayoutEffect(() => {
      const list = handle.current!;
      if (saved.current) {
        list.scrollTo(saved.current[0]);
      }
      // The offset and the measured sizes are what an app has to persist itself
      return () => {
        saved.current = [list.scrollOffset, list.cache];
      };
    }, []);
    return (
      <div style={{ height: 400, overflowY: "auto" }}>
        <Virtualizer ref={handle} data={range(1000)} cache={saved.current?.[1]}>
          {(i) => (
            <div key={i} style={{ height: HEIGHTS[i % HEIGHTS.length] }}>
              {i}
            </div>
          )}
        </Virtualizer>
      </div>
    );
  };

  it("restores the scroll position after remount", async () => {
    const ref = createRef<VirtualizerHandle>();
    const saved = createRef<[number, CacheSnapshot]>();
    const list = <Restorable handle={ref} saved={saved} />;

    const root = render(list);
    const mounted = await getVirtualizer(root);

    // check if start is displayed
    await expect.poll(() => getItem(mounted.container, "0")).toBeDefined();

    // scroll to mid
    let lastScrollEnd = 0;
    mounted.viewport.addEventListener("scrollend", () => {
      lastScrollEnd = performance.now();
    });
    mounted.viewport.scrollTop = 5000;
    // The jump compensation starts another scroll after the first one has ended, so the last one has to stay the last
    await expect
      .poll(() => lastScrollEnd && performance.now() - lastScrollEnd)
      .toBeGreaterThan(200);
    const offset = mounted.viewport.scrollTop;
    // The store learns the offset from scroll events, so it can lag the element after a jump compensation
    await expect.poll(() => ref.current!.scrollOffset).toBe(offset);
    const item = findFirstVisibleItem(mounted.container, mounted.viewport)!;
    const text = item.textContent!;
    const top = relativeTop(mounted.viewport, item);
    expect(text).not.toBe("0");

    // check if items are unmounted
    rerender(root, null);
    await expect.poll(() => root.contains(mounted.viewport)).toBe(false);

    // check if scroll position is restored
    rerender(root, list);
    const remounted = await getVirtualizer(root);
    await expect.poll(() => remounted.viewport.scrollTop).toBe(offset);
    await expect
      .poll(() => findFirstVisibleItem(remounted.container, remounted.viewport))
      .toBeDefined();
    const restored = findFirstVisibleItem(
      remounted.container,
      remounted.viewport,
    )!;
    expect(restored.textContent).toBe(text);
    expect(relativeTop(remounted.viewport, restored)).toBe(top);
  });
});

describe("keepMounted", () => {
  it("keeps the sticky header mounted while its group is scrolled", async () => {
    const STICKY_SIZE = 40;
    const ITEM_SIZE = 80;
    const stickyIndexes = new Set([
      0, 100, 200, 300, 400, 500, 600, 700, 800, 900,
    ]);
    const StickyIndexContext = createContext(-1);
    // The active header sticks to the top of the viewport, and stays mounted while its group is scrolled
    const StickyItem = ({
      children,
      style,
      index,
      ref,
    }: CustomItemComponentProps) => {
      const activeIndex = use(StickyIndexContext);
      return (
        <div
          ref={ref}
          style={{
            ...style,
            ...(activeIndex === index && { position: "sticky", top: 0 }),
          }}
        >
          {children}
        </div>
      );
    };
    const ref = createRef<VirtualizerHandle>();
    const Component = () => {
      const [activeIndex, setActiveIndex] = useState(0);
      return (
        <StickyIndexContext value={activeIndex}>
          <div style={{ height: 400, overflowY: "auto" }}>
            <Virtualizer
              ref={ref}
              data={range(1000)}
              item={StickyItem}
              keepMounted={[activeIndex]}
              onScroll={() => {
                const start = ref.current!.findItemIndex(
                  ref.current!.scrollOffset,
                );
                setActiveIndex(
                  [...stickyIndexes].reverse().find((index) => start >= index)!,
                );
              }}
            >
              {(i) => (
                <div
                  key={i}
                  style={{
                    height: stickyIndexes.has(i) ? STICKY_SIZE : ITEM_SIZE,
                  }}
                >
                  item-{i}
                </div>
              )}
            </Virtualizer>
          </div>
        </StickyIndexContext>
      );
    };
    const root = render(<Component />);
    const { viewport, container } = await getVirtualizer(root);

    // check if start is displayed
    await expect.poll(() => getItem(container, "item-0")).toBeDefined();
    expect(relativeTop(viewport, getItem(container, "item-0")!)).toBe(0);

    // scroll
    viewport.scrollTop += ITEM_SIZE * 50;
    await expect.poll(() => getItem(container, "item-1")).toBeUndefined();

    // check if the sticky header is still on top
    await expectPosition(
      () => relativeTop(viewport, getItem(container, "item-0")!),
      0,
    );
  });
});
