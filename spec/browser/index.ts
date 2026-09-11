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

// A test which scrolls the window leaves the document at that offset, and the next one would start from there
export const cleanupScroll = () => {
  document.scrollingElement!.scrollTop = 0;
  document.scrollingElement!.scrollLeft = 0;
};

export const createRoot = (doc: Document): HTMLElement => {
  const root = doc.body.appendChild(doc.createElement("div"));
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

export const expectVirtualized = async (
  root: Element,
  first: string,
  last: string,
) => {
  await expect.poll(() => root.textContent, { timeout: 5000 }).toContain(first);
  expect(root.textContent).not.toContain(last);
};

export const expectVirtualizedAndScrollable = async (
  root: Element,
  first: string,
  last: string,
) => {
  await expectVirtualized(root, first, last);
  const { viewport } = await getVirtualizer(root);
  await expect
    .poll(
      () => {
        viewport.scrollTop = viewport.scrollHeight;
        viewport.scrollLeft = viewport.scrollWidth;
        return root.textContent;
      },
      { timeout: 5000 },
    )
    .toContain(last);
  expect(root.textContent).not.toContain(first);
};

export const mountSsr = (html: string): HTMLElement => {
  const root = createRoot(document);
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

  hydrate();

  // The client rewrites the markup because the server could only estimate the item sizes
  await expect.poll(() => root.innerHTML, { timeout: 5000 }).not.toBe(ssrHtml);
  // ...in place, without recreating the elements
  for (const node of ssrNodes) {
    expect(root.contains(node)).toBe(true);
  }

  await expectVirtualizedAndScrollable(root, "item-0", "item-999");
};
