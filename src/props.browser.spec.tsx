import { afterEach, describe, expect, it } from "vitest";
import { createRef, useLayoutEffect, type RefObject } from "react";
import { render, rerender } from "../spec/browser/react.js";
import { Virtualizer, type VirtualizerHandle } from "./react/index.js";
import type { CacheSnapshot } from "./core/index.js";
import {
  cleanupScroll,
  findFirstVisibleItem,
  getItem,
  getVirtualizer,
  relativeTop,
} from "../spec/browser/index.js";

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
        <Virtualizer ref={handle} cache={saved.current?.[1]}>
          {Array.from({ length: 1000 }, (_, i) => (
            <div key={i} style={{ height: HEIGHTS[i % HEIGHTS.length] }}>
              {i}
            </div>
          ))}
        </Virtualizer>
      </div>
    );
  };

  it("restores the scroll position after remount", async () => {
    const handle = createRef<VirtualizerHandle>();
    const saved = createRef<[number, CacheSnapshot]>();
    const list = <Restorable handle={handle} saved={saved} />;

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
    await expect.poll(() => handle.current!.scrollOffset).toBe(offset);
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
