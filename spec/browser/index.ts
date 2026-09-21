import { expect, onTestFinished } from "vitest";
import { server } from "@vitest/browser/context";

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
    ssrRenderGrid: () => Promise<string>;
  }
}

// A test which scrolls the window leaves the document at that offset, and the next one would start from there
export const cleanupScroll = () => {
  document.scrollingElement!.scrollTop = 0;
  document.scrollingElement!.scrollLeft = 0;
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
const SUBPIXEL = server.browser === "firefox" ? 1 : 0;

export const expectPosition = (getPosition: () => number, position: number) =>
  expect
    .poll(getPosition)
    .toSatisfy(
      (value: number) => Math.abs(value - position) <= SUBPIXEL,
      `to be ${position}`,
    );

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
) => {
  await expectVirtualized(root, first, last);
  const { viewport } = await getVirtualizer(root);
  await expect
    .poll(() => {
      viewport.scrollTop = viewport.scrollHeight;
      viewport.scrollLeft = viewport.scrollWidth;
      return root.textContent;
    })
    .toContain(last);
  expect(root.textContent).not.toContain(first);
};

type GridAxisGeometry = {
  count: number;
  size: (index: number) => number;
  pinned?: { start?: number; end?: number };
  // The section headers between the pinned tracks, sorted
  headers?: readonly number[];
};

// The positions come from the declared sizes, independently of how the grid lays them out
const resolveGridAxisGeometry = (
  { count, size, pinned = {}, headers = [] }: GridAxisGeometry,
  gap: number,
  scroll: number,
  client: number,
) => {
  const offsets = [0];
  for (let i = 0; i < count; i++) {
    offsets.push(offsets[i]! + size(i) + gap);
  }
  const total = count ? offsets[count]! - gap : 0;
  const pinnedStart = Math.min(Math.max(pinned.start || 0, 0), count);
  const trailStart =
    count - Math.min(Math.max(pinned.end || 0, 0), count - pinnedStart);
  const pinnedEnd = offsets[pinnedStart]!;
  const place = (index: number, span: number): [number, number] => {
    const offset = offsets[index]!;
    let position =
      index < pinnedStart
        ? offset
        : index >= trailStart
          ? Math.min(offset - scroll, client - total + offset)
          : offset - scroll;
    if (headers.includes(index)) {
      // A section header sticks under the pinned tracks until the end of its section
      let sectionEnd = index + 1;
      while (sectionEnd < trailStart && !headers.includes(sectionEnd)) {
        sectionEnd++;
      }
      position = Math.max(
        position,
        Math.min(pinnedEnd, offsets[sectionEnd]! - gap - scroll - size(index)),
      );
    }
    return [position, offsets[index + span]! - offset - gap];
  };
  // The bands of the pinned tracks are painted over the scrollport, and don't cover the gaps after them.
  const headSize = pinnedStart ? pinnedEnd - gap : 0;
  const tailSize = trailStart < count ? total - offsets[trailStart]! : 0;
  const visible: number[] = [];
  for (let i = 0; i < count; i++) {
    const [position, length] = place(i, 1);
    // A track hidden behind the pinned ones is not rendered. The section headers don't shrink the range, so they are not taken into account.
    const [from, to] =
      i < pinnedStart || i >= trailStart
        ? [0, client]
        : [headSize, client - tailSize];
    if (position < to && position + length > from) {
      visible.push(i);
    }
  }
  return [place, visible] as const;
};

export type GridSpanGeometry = {
  rowIndex: number;
  colIndex: number;
  rowSpan?: number;
  colSpan?: number;
};

const getGridGeometryErrors = (
  viewport: HTMLElement,
  container: HTMLElement,
  rows: GridAxisGeometry,
  cols: GridAxisGeometry,
  gap: number,
  spans: readonly GridSpanGeometry[],
): string[] => {
  const errors: string[] = [];
  const spanned = new Map<string, readonly [string, number, number]>();
  for (const { rowIndex, colIndex, rowSpan = 1, colSpan = 1 } of spans) {
    const rowTo = Math.min(rowIndex + rowSpan, rows.count);
    const colTo = Math.min(colIndex + colSpan, cols.count);
    if (rowTo - rowIndex < 2 && colTo - colIndex < 2) {
      continue;
    }
    const area = [
      rowIndex + "/" + colIndex,
      rowTo - rowIndex,
      colTo - colIndex,
    ] as const;
    for (let r = rowIndex; r < rowTo; r++) {
      for (let c = colIndex; c < colTo; c++) {
        spanned.set(r + "/" + c, area);
      }
    }
  }
  const [placeRow, visibleRows] = resolveGridAxisGeometry(
    rows,
    gap,
    viewport.scrollTop,
    viewport.clientHeight,
  );
  const rtl = getComputedStyle(viewport).direction === "rtl";
  const [placeCol, visibleCols] = resolveGridAxisGeometry(
    cols,
    gap,
    Math.abs(viewport.scrollLeft),
    viewport.clientWidth,
  );
  const rect = viewport.getBoundingClientRect();
  const top = rect.top + viewport.clientTop;
  const left = rect.left + viewport.clientLeft;
  const right = rect.right - viewport.clientLeft;
  const covered = new Set<string>();
  let prevRow = -1;
  for (const row of container.querySelectorAll('[role="row"]')) {
    const rowIndex = Number(row.getAttribute("aria-rowindex")) - 1;
    if (rowIndex <= prevRow) {
      errors.push(`row ${rowIndex}: after row ${prevRow}`);
    }
    prevRow = rowIndex;
    let prevCol = -1;
    for (const cell of row.children) {
      const colIndex = Number(cell.getAttribute("aria-colindex")) - 1;
      const name = `cell ${rowIndex}/${colIndex}`;
      if (colIndex <= prevCol) {
        errors.push(`${name}: after column ${prevCol}`);
      }
      prevCol = colIndex;
      const rowSpan = Number(cell.getAttribute("aria-rowspan") || 1);
      const colSpan = Number(cell.getAttribute("aria-colspan") || 1);
      const area = spanned.get(rowIndex + "/" + colIndex);
      if (area) {
        if (area[0] !== rowIndex + "/" + colIndex) {
          errors.push(`${name}: under the span at ${area[0]}`);
        } else if (area[1] !== rowSpan || area[2] !== colSpan) {
          errors.push(
            `${name}: spans ${rowSpan}x${colSpan}, expected ${area[1]}x${area[2]}`,
          );
        }
      }
      const [expectedTop, expectedHeight] = placeRow(rowIndex, rowSpan);
      const [expectedLeft, expectedWidth] = placeCol(colIndex, colSpan);
      const actual = cell.getBoundingClientRect();
      for (const [key, value, expected] of [
        ["top", actual.top - top, expectedTop],
        [
          "start",
          rtl ? right - actual.right : actual.left - left,
          expectedLeft,
        ],
        ["height", actual.height, expectedHeight],
        ["width", actual.width, expectedWidth],
      ] as const) {
        // Firefox rounds positions to device pixels
        if (Math.abs(value - expected) > 1) {
          errors.push(`${name}: ${key} ${value}, expected ${expected}`);
        }
      }
      for (let r = rowIndex; r < rowIndex + rowSpan; r++) {
        for (let c = colIndex; c < colIndex + colSpan; c++) {
          const key = r + "/" + c;
          if (covered.has(key)) {
            errors.push(`${name}: overlaps ${key}`);
          }
          covered.add(key);
        }
      }
    }
  }
  for (const r of visibleRows) {
    for (const c of visibleCols) {
      if (!covered.has(r + "/" + c)) {
        errors.push(`cell ${r}/${c}: not rendered`);
      }
    }
  }
  return errors;
};

export const expectGridGeometry = async (
  root: Element,
  rows: GridAxisGeometry,
  cols: GridAxisGeometry,
  gap = 0,
  spans: readonly GridSpanGeometry[] = [],
) => {
  const { viewport, container } = await getVirtualizer(root);
  await expect
    .poll(() =>
      getGridGeometryErrors(viewport, container, rows, cols, gap, spans),
    )
    .toEqual([]);
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

  hydrate();

  // The client rewrites the markup because the server could only estimate the item sizes
  await expect.poll(() => root.innerHTML).not.toBe(ssrHtml);
  // ...in place, without recreating the elements
  for (const node of ssrNodes) {
    expect(root.contains(node)).toBe(true);
  }

  await expectVirtualizedAndScrollable(root, "item-0", "item-999");
};

export const expectGridHydrated = async (
  root: Element,
  hydrate: () => void,
) => {
  const { container } = await getVirtualizer(root);
  expect(container.childElementCount).toEqual(0);
  const ssrNodes = [...root.querySelectorAll("*")];

  hydrate();

  await expectVirtualized(root, "item-0/item-0", "item-999/item-999");
  for (const node of ssrNodes) {
    expect(root.contains(node)).toBe(true);
  }
  await expectVirtualizedAndScrollable(
    root,
    "item-0/item-0",
    "item-999/item-999",
  );
};
