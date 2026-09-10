import { expect, onTestFinished } from "vitest";

// Only what the tests vary crosses the command boundary
export type SsrProps = {
  ssrCount: number;
  itemSize: number;
  horizontal?: boolean;
};

declare module "vitest/internal/browser" {
  interface BrowserCommands {
    // Defined in vitest.config.ts, because only the node side can compile for the server
    ssrRender: (props: SsrProps) => Promise<string>;
  }
}

export const createContainer = (doc: Document): HTMLElement => {
  const container = doc.body.appendChild(doc.createElement("div"));
  onTestFinished(() => container.remove());
  return container;
};

// The browser serializes flex: none as flex: 0 0 auto, and each server renderer spells it its own way
const VIRTUALIZER =
  '*[style*="flex: 0 0 auto"],*[style*="flex:none"],*[style*="flex: none"]';

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

export const mountSsr = (html: string): HTMLElement => {
  const container = createContainer(document);
  container.innerHTML = html;
  return container;
};

export const expectHydrated = async (
  container: Element,
  ssrCount: number,
  hydrate: () => void,
) => {
  expect(container.textContent).toContain(`item-${ssrCount - 1}`);
  expect(container.textContent).not.toContain(`item-${ssrCount}`);
  const ssrHtml = container.innerHTML;
  const ssrNodes = [...container.querySelectorAll("*")];

  hydrate();

  // The client rewrites the markup because the server could only estimate the item sizes
  await expect
    .poll(() => container.innerHTML, { timeout: 5000 })
    .not.toBe(ssrHtml);
  // ...in place, without recreating the elements
  for (const node of ssrNodes) {
    expect(container.contains(node)).toBe(true);
  }

  await expectVirtualized(container, "item-0", "item-999");
};
