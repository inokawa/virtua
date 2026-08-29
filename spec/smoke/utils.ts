import { expect } from "vitest";

const findScroller = (container: Element): Element => {
  for (const e of [container, ...container.querySelectorAll("*")]) {
    if (e.scrollHeight > e.clientHeight || e.scrollWidth > e.clientWidth) {
      return e;
    }
  }
  throw new Error("scrollable element is not found");
};

export const expectVirtualized = async (
  container: Element,
  first: string,
  last: string,
  getScroller: () => Element = () => findScroller(container),
) => {
  await expect
    .poll(() => container.textContent, { timeout: 5000 })
    .toContain(first);
  expect(container.textContent).not.toContain(last);
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
