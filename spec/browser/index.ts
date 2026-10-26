import { expect, onTestFinished } from "vitest";
import { server } from "vitest/browser";
import type { CacheSnapshot } from "../../src/core/index.js";

// Only what the tests vary crosses the command boundary
export type SsrProps = {
  ssrCount: number;
  itemSize: number;
  horizontal?: boolean;
};

export type SsrGridProps = {
  ssrRowCount?: number;
  ssrColCount?: number;
};

export type SsrMasonryProps = {
  ssrCount?: number;
  cache?: CacheSnapshot;
};

export type SsrFixtures = {
  list: SsrProps;
  window: SsrProps;
  grid: SsrGridProps;
  masonry: SsrMasonryProps;
};

export type SsrEntry = {
  render: (
    name: keyof SsrFixtures,
    props: SsrFixtures[keyof SsrFixtures],
  ) => string | Promise<string>;
  hydrate: (
    root: HTMLElement,
    name: keyof SsrFixtures,
    props: SsrFixtures[keyof SsrFixtures],
  ) => void;
};

declare module "vitest/internal/browser" {
  interface BrowserCommands {
    // Defined in vitest.config.ts, because only the node side can compile for the server
    ssrRender: <K extends keyof SsrFixtures>(
      name: K,
      props: SsrFixtures[K],
    ) => Promise<string>;
  }
}

// A test which scrolls the window leaves the document at that offset, and the next one would start from there
export const cleanupScroll = () => {
  document.scrollingElement!.scrollTop = 0;
  document.scrollingElement!.scrollLeft = 0;
};

// The direction is read when the virtualizer starts observing, so it has to be set before the render
export const setRTL = () => {
  const { documentElement } = document;
  documentElement.dir = "rtl";
  onTestFinished(() => {
    documentElement.dir = "";
  });
};

// The end is at a negative offset in the inline axis of RTL
export const scrollToEnd = (viewport: HTMLElement, isRTL?: boolean) => {
  viewport.scrollTop = viewport.scrollHeight;
  viewport.scrollLeft = isRTL ? -viewport.scrollWidth : viewport.scrollWidth;
};

export const createDomRoot = <T extends keyof HTMLElementTagNameMap = "div">(
  doc: Document,
  name: T = "div" as T,
): HTMLElementTagNameMap[T] => {
  const root = doc.body.appendChild(doc.createElement(name));
  onTestFinished(() => root.remove());
  return root;
};

// The browser serializes flex: none as flex: 0 0 auto, and each server renderer spells it its own way
const VIRTUALIZER =
  '*[style*="flex: 0 0 auto"],*[style*="flex:none"],*[style*="flex: none"]';

const getViewport = (container: Element): HTMLElement => {
  const { body, scrollingElement } = container.ownerDocument;
  let viewport = container.parentElement;
  while (viewport && viewport !== body) {
    const style = getComputedStyle(viewport);
    if (
      /auto|scroll|hidden/.test(
        style.overflow + style.overflowX + style.overflowY,
      )
    ) {
      return viewport;
    }
    viewport = viewport.parentElement;
  }
  return scrollingElement as HTMLElement;
};

export const getVirtualizer = async (root: Element) => {
  await expect.poll(() => root.querySelector(VIRTUALIZER)).not.toBeNull();
  const container = root.querySelector<HTMLElement>(VIRTUALIZER)!;
  return { viewport: getViewport(container), container };
};

export const getItem = (container: HTMLElement, text: string) =>
  Array.from(container.children).find((e) => e.textContent === text);

// Firefox rounds a scroll position to a device pixel, and the tester scales its iframe so that is not a whole CSS pixel
export const SUBPIXEL = server.browser === "firefox" ? 1 : 0;

export const expectPosition = (
  getPosition: () => number,
  position: number,
  timeout?: number,
) =>
  expect
    .poll(getPosition, { timeout })
    .toSatisfy(
      (value: number) => Math.abs(value - position) <= SUBPIXEL,
      `to be ${position}`,
    );

// The window viewport always starts at 0, unlike the rect of the element which scrolls.
// It includes the scrollbars like the rect of the element does.
const getViewportRect = (
  viewport: HTMLElement,
): Pick<DOMRect, "top" | "left" | "bottom" | "right"> => {
  const { ownerDocument } = viewport;
  if (viewport === ownerDocument.scrollingElement) {
    const { innerWidth, innerHeight } = ownerDocument.defaultView!;
    return { top: 0, left: 0, bottom: innerHeight, right: innerWidth };
  }
  return viewport.getBoundingClientRect();
};

export const findFirstVisibleItem = (
  container: HTMLElement,
  viewport: HTMLElement,
) => {
  const { top } = getViewportRect(viewport);
  // An item ending within a rounding error of the edge is not the one in view
  return Array.from(container.children).find(
    (item) => item.getBoundingClientRect().bottom > top + 1,
  );
};

export const findLastVisibleItem = (
  container: HTMLElement,
  viewport: HTMLElement,
) => {
  const { bottom } = getViewportRect(viewport);
  return Array.from(container.children)
    .reverse()
    .find((item) => item.getBoundingClientRect().top < bottom - 1);
};

export const relativeTop = (viewport: HTMLElement, item: Element) =>
  item.getBoundingClientRect().top - getViewportRect(viewport).top;

export const relativeLeft = (viewport: HTMLElement, item: Element) =>
  item.getBoundingClientRect().left - getViewportRect(viewport).left;

export const relativeRight = (viewport: HTMLElement, item: Element) =>
  getViewportRect(viewport).right - item.getBoundingClientRect().right;

export const relativeBottom = (viewport: HTMLElement, item: Element) =>
  getViewportRect(viewport).bottom - item.getBoundingClientRect().bottom;

export const recordScroll = (target: EventTarget) => {
  const read = () =>
    target === window
      ? document.scrollingElement!.scrollTop
      : (target as HTMLElement).scrollTop;
  const offsets = [read()];
  const start = performance.now();
  const record = { offsets, start, end: start };
  const onScroll = () => {
    offsets.push(read());
    record.end = performance.now();
  };
  target.addEventListener("scroll", onScroll);
  // The window outlives the test
  onTestFinished(() => target.removeEventListener("scroll", onScroll));
  return record;
};

export const expectVirtualized = async (
  root: Element,
  first: string,
  last: string,
) => {
  await expect.poll(() => root.textContent).toContain(first);
  expect(root.textContent).not.toContain(last);
};

export const expectVirtualizedAndScrollable = async (
  root: Element,
  first: string,
  last: string,
  isRTL?: boolean,
) => {
  // check if start is displayed
  await expectVirtualized(root, first, last);
  const { viewport } = await getVirtualizer(root);
  // scroll to the end, and check if the end is displayed
  await expect
    .poll(() => {
      scrollToEnd(viewport, isRTL);
      return root.textContent;
    })
    .toContain(last);
  expect(root.textContent).not.toContain(first);
};

export const mountSsr = (html: string): HTMLElement => {
  const root = createDomRoot(document);
  root.innerHTML = html;
  return root;
};

export const expectHydrated = async (
  root: Element,
  ssrCount: number,
  hydrate: () => void,
) => {
  expect(root.textContent).toContain(`item-${ssrCount - 1}`);
  expect(root.textContent).not.toContain(`item-${ssrCount}`);
  const ssrHtml = root.innerHTML;
  const ssrNodes = [...root.querySelectorAll("*")];
  const { container } = await getVirtualizer(root);
  const ssrItems = [...container.children];
  const ssrRects = ssrItems.map((item) => item.getBoundingClientRect());

  hydrate();

  // The client rewrites the markup because the server could only estimate the item sizes
  await expect.poll(() => root.innerHTML).not.toBe(ssrHtml);
  // ...in place, without recreating the elements
  for (const node of ssrNodes) {
    expect(root.contains(node)).toBe(true);
  }
  // ...and without moving them
  for (const [i, item] of ssrItems.entries()) {
    await expectPosition(
      () => item.getBoundingClientRect().top - ssrRects[i]!.top,
      0,
    );
    await expectPosition(
      () => item.getBoundingClientRect().left - ssrRects[i]!.left,
      0,
    );
  }

  await expectVirtualizedAndScrollable(root, "item-0", "item-999");
};

// The range for SSR is kept until the first scroll, so the client is told to be live by nudging the scroll until it renders more than the server did.
// The server has to render fewer than the viewport fits
const expectSsrRangeReleased = (
  viewport: HTMLElement,
  container: HTMLElement,
  ssrCount: number,
) =>
  expect
    .poll(() => {
      viewport.scrollTop = viewport.scrollTop === 1 ? 2 : 1;
      return container.childElementCount;
    })
    .toBeGreaterThan(ssrCount);

export const expectGridHydrated = async (
  root: Element,
  ssrRowCount: number,
  ssrColCount: number,
  hydrate: () => void,
) => {
  expect(root.textContent).toContain(
    `row-${ssrRowCount - 1}/col-${ssrColCount - 1}`,
  );
  expect(root.textContent).not.toContain(`row-${ssrRowCount}/col-0`);
  expect(root.textContent).not.toContain(`row-0/col-${ssrColCount}`);
  const ssrNodes = [...root.querySelectorAll("*")];
  const { viewport, container } = await getVirtualizer(root);

  hydrate();

  // The markup of the cells is final on the server, so nothing is rewritten by the hydration
  await expectSsrRangeReleased(viewport, container, ssrRowCount);
  // ...keeping the server rendered elements
  for (const node of ssrNodes) {
    expect(root.contains(node)).toBe(true);
  }

  await expectVirtualizedAndScrollable(root, "row-0/col-0", "row-999/col-999");
};

export const expectMasonryHydrated = async (
  root: Element,
  ssrCount: number,
  lanes: number,
  hydrate: () => void,
) => {
  expect(root.textContent).toContain(`item-${ssrCount - 1}`);
  expect(root.textContent).not.toContain(`item-${ssrCount}`);
  const ssrNodes = [...root.querySelectorAll("*")];
  const { viewport, container } = await getVirtualizer(root);
  const ssrItems = [...container.children];
  // The items are placed into the lanes and visible, as their sizes are restored from the cache
  for (const item of ssrItems) {
    expect(getComputedStyle(item).visibility).toBe("visible");
  }
  expect(
    new Set(ssrItems.map((item) => item.getBoundingClientRect().left)).size,
  ).toBe(lanes);
  // Relative to the container, which moves with the nudge below
  const getOffset = (item: Element) => {
    const rect = item.getBoundingClientRect();
    const base = container.getBoundingClientRect();
    return [rect.top - base.top, rect.left - base.left] as const;
  };
  const ssrOffsets = ssrItems.map(getOffset);

  hydrate();

  // The sizes are the same as the cache, so nothing is rewritten by the hydration
  await expectSsrRangeReleased(viewport, container, ssrCount);
  // ...keeping the server rendered elements
  for (const node of ssrNodes) {
    expect(root.contains(node)).toBe(true);
  }
  // ...without moving them
  for (const [i, item] of ssrItems.entries()) {
    await expectPosition(() => getOffset(item)[0] - ssrOffsets[i]![0], 0);
    await expectPosition(() => getOffset(item)[1] - ssrOffsets[i]![1], 0);
  }

  await expectVirtualizedAndScrollable(root, "item-0", "item-999");
};
