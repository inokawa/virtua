import { cleanup, fireEvent, render } from "@octanejs/testing-library";
import { afterEach, describe, expect, it, vi } from "vitest";
import { setupResizeJsDom } from "../../spec/dom.js";
import {
  ListFixture,
  TwoListsFixture,
  VirtualizerFixture,
  WindowFixture,
} from "../../spec/octane-fixtures.tsrx";
import type { VListHandle } from "./VList.tsrx";
import type { WindowVirtualizerHandle } from "./WindowVirtualizer.tsrx";

const ITEM_HEIGHT = 50;
const VIEWPORT_HEIGHT = ITEM_HEIGHT * 10;

setupResizeJsDom({
  itemSize: { width: 100, height: ITEM_HEIGHT },
  viewportSize: { width: 100, height: VIEWPORT_HEIGHT },
});

afterEach(cleanup);

const items = Array.from({ length: 100 }, (_, id) => ({
  id,
  label: `Item ${id}`,
}));

const settleResize = async () => {
  vi.runAllTicks();
  await Promise.resolve();
};

describe("Octane VList", () => {
  it("renders lazy data and keeps requested offscreen items mounted", async () => {
    const { container } = render(ListFixture, {
      props: { items, keepMounted: [20, 90] },
    });
    await settleResize();

    expect(container.querySelector('[data-index="0"]')?.textContent).toBe(
      "Item 0",
    );
    expect(container.querySelector('[data-index="20"]')?.textContent).toBe(
      "Item 20",
    );
    expect(container.querySelector('[data-index="90"]')?.textContent).toBe(
      "Item 90",
    );
    expect(container.querySelectorAll("[data-index]").length).toBeLessThan(
      items.length,
    );
  });

  it("exposes the complete imperative handle after dynamic measurement", async () => {
    const listRef: { current: VListHandle | null } = { current: null };
    render(ListFixture, { props: { items, listRef } });
    await settleResize();

    const handle = listRef.current!;
    expect(handle.getItemSize(0)).toBe(ITEM_HEIGHT);
    expect(handle.getItemOffset(2)).toBe(ITEM_HEIGHT * 2);
    expect(handle.findItemIndex(ITEM_HEIGHT * 3)).toBe(3);
    expect(handle.cache).toBeDefined();
    expect(handle.scrollOffset).toBe(0);
    expect(handle.viewportSize).toBe(VIEWPORT_HEIGHT);
    expect(() => {
      handle.scrollTo(20);
      handle.scrollBy(10);
      handle.scrollToIndex(4);
    }).not.toThrow();
  });

  it("forwards native scroll and scroll-end notifications", async () => {
    const onScroll = vi.fn();
    const onScrollEnd = vi.fn();
    const { container } = render(ListFixture, {
      props: { items, onScroll, onScrollEnd },
    });
    await settleResize();

    const viewport = container.firstElementChild as HTMLElement;
    viewport.scrollTop = 125;
    fireEvent.scroll(viewport);
    expect(onScroll).toHaveBeenLastCalledWith(125);

    await new Promise((resolve) => setTimeout(resolve, 160));
    expect(onScrollEnd).toHaveBeenCalledTimes(1);
  });

  it("updates the existing list when data length changes", async () => {
    const rendered = render(ListFixture, {
      props: { items: items.slice(0, 2) },
    });
    await settleResize();
    expect(rendered.container.textContent).toContain("Item 1");

    rendered.rerender(ListFixture, { props: { items: items.slice(0, 3) } });
    await settleResize();
    expect(rendered.container.textContent).toContain("Item 2");
  });

  it("keeps composed hook state isolated across sibling instances and remounts", async () => {
    const firstRef: { current: VListHandle | null } = { current: null };
    const secondRef: { current: VListHandle | null } = { current: null };
    const rendered = render(TwoListsFixture, {
      props: {
        first: items.slice(0, 2),
        second: items.slice(10, 13),
        firstRef,
        secondRef,
      },
    });
    const virtualContainers =
      rendered.container.querySelectorAll("main > div > div");
    expect((virtualContainers[0] as HTMLElement).style.height).toBe("80px");
    expect((virtualContainers[1] as HTMLElement).style.height).toBe("180px");
    await settleResize();

    expect(firstRef.current).not.toBe(secondRef.current);
    expect(firstRef.current?.getItemSize(0)).toBe(ITEM_HEIGHT);
    expect(secondRef.current?.getItemSize(0)).toBe(ITEM_HEIGHT);
    expect(rendered.container.textContent).toContain("Item 0");
    expect(rendered.container.textContent).toContain("Item 10");

    rendered.unmount();
    expect(firstRef.current).toBeNull();
    expect(secondRef.current).toBeNull();

    const remountedRef: { current: VListHandle | null } = { current: null };
    const remounted = render(ListFixture, {
      props: { items: items.slice(20, 22), listRef: remountedRef },
    });
    await settleResize();
    expect(remounted.container.textContent).toContain("Item 20");
    expect(remountedRef.current).not.toBeNull();
  });
});

describe("Octane advanced virtualizers", () => {
  it("supports custom container and item elements", async () => {
    const { container } = render(VirtualizerFixture, {
      props: { items: items.slice(0, 5), as: "ul", item: "li" },
    });
    await settleResize();

    expect(container.querySelector("ul")).not.toBeNull();
    expect(container.querySelectorAll("li")).toHaveLength(5);
  });

  it("provides a measured WindowVirtualizer handle", async () => {
    const listRef: { current: WindowVirtualizerHandle | null } = {
      current: null,
    };
    render(WindowFixture, { props: { items, listRef } });
    await settleResize();

    expect(listRef.current?.getItemSize(0)).toBe(ITEM_HEIGHT);
    expect(listRef.current?.getItemOffset(2)).toBe(ITEM_HEIGHT * 2);
    expect(listRef.current?.cache).toBeDefined();
  });
});
