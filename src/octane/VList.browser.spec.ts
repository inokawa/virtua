import { cleanup, fireEvent, render, waitFor } from "@octanejs/testing-library";
import { afterEach, expect, it, vi } from "vitest";
import { BrowserListFixture } from "../../spec/octane-fixtures.tsrx";
import type { VListHandle } from "./VList.tsrx";

afterEach(cleanup);

it("measures and scrolls with the browser ResizeObserver", async () => {
  const items = Array.from({ length: 100 }, (_, id) => ({
    id,
    label: `Item ${id}`,
  }));
  const listRef: { current: VListHandle | null } = { current: null };
  const onScroll = vi.fn();
  const { container } = render(BrowserListFixture, {
    props: { items, listRef, onScroll },
  });

  await waitFor(() => {
    expect(listRef.current?.viewportSize).toBe(200);
    expect(listRef.current?.getItemSize(0)).toBe(50);
  });

  const viewport = container.firstElementChild as HTMLElement;
  viewport.scrollTop = 150;
  fireEvent.scroll(viewport);

  await waitFor(() => expect(onScroll).toHaveBeenLastCalledWith(150));
  expect(listRef.current?.scrollOffset).toBe(150);
});
