import { expect } from "vitest";

export const getVirtualizer = (container: Element) =>
  container.querySelector('*[style*="flex: 0 0 auto"]') as HTMLElement;

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
  getScroller: () => Element = () => getVirtualizer(container).parentElement!,
) => {
  await expectVirtualized(container, first, last);
  const scroller = getScroller();
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
