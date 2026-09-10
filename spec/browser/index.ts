import { expect, onTestFinished } from "vitest";

const VIRTUALIZER = '*[style*="flex: 0 0 auto"]';

export const getVirtualizer = async (container: Element) => {
  await expect.poll(() => container.querySelector(VIRTUALIZER)).not.toBeNull();
  return container.querySelector<HTMLElement>(VIRTUALIZER)!;
};

export const expectVirtualized = async (
  container: Element,
  first: string,
  last: string,
) => {
  await expect
    .poll(() => container.textContent, { timeout: 5000 })
    .toContain(first);
  expect(container.textContent).not.toContain(last);
};

export const expectVirtualizedAndScrollable = async (
  container: Element,
  first: string,
  last: string,
  getScroller: () => Element | Promise<Element> = async () =>
    (await getVirtualizer(container)).parentElement!,
) => {
  await expectVirtualized(container, first, last);
  const scroller = await getScroller();
  await expect
    .poll(
      () => {
        scroller.scrollTop = scroller.scrollHeight;
        scroller.scrollLeft = scroller.scrollWidth;
        return container.textContent;
      },
      { timeout: 5000 },
    )
    .toContain(last);
};

export const createContainer = (doc: Document) => {
  const container = doc.body.appendChild(doc.createElement("div"));
  onTestFinished(() => container.remove());
  return container;
};
