import { afterEach, describe, expect, it } from "vitest";
import { server } from "vitest/browser";
import { createRef, type Ref } from "react";
import { render, rerender } from "../spec/browser/react.js";
import {
  VMasonry,
  type VMasonryHandle,
  type VMasonryProps,
} from "./react/index.js";
import { createMasonryLayout, type MasonryLayout } from "./core/index.js";
import {
  cleanupScroll,
  expectPosition,
  expectVirtualized,
  getItem,
  getVirtualizer,
  relativeBottom,
  relativeTop,
  scrollToEnd,
  setRTL,
  SUBPIXEL,
} from "../spec/browser/index.js";
import { nextFrame, range } from "../spec/utils.js";

afterEach(cleanupScroll);

const COUNT = 1000;
const VIEWPORT = 400;
const data = range(COUNT);

// Sizes different from the default estimation, so the items move when measured
const getSize = (i: number) => 20 + ((i * 37) % 7) * 15;
const RATIOS = [1, 0.5, 2, 1.25];
const getRatio = (i: number) => RATIOS[i % RATIOS.length]!;

type ItemProps = Pick<VMasonryProps<number>, "lanes" | "gap" | "itemSize">;

// Browsers floor the computed lengths to their layout unit (1/64px in Blink and WebKit, 1/60px in Gecko), so the fractional lane sizes differ by up to that
const LAYOUT_UNIT = 1 / 60;

const getItemIndex = (item: Element) =>
  Number(item.textContent!.slice("item-".length));

// The rects the layout gives to the items, restored from the state of the masonry
const getGeometryErrors = (
  viewport: HTMLElement,
  container: HTMLElement,
  layout: MasonryLayout,
  gap: number,
): string[] => {
  const errors: string[] = [];
  const rect = container.getBoundingClientRect();
  const rtl = getComputedStyle(viewport).direction === "rtl";
  const rendered = new Set<number>();
  for (const item of container.children) {
    const index = getItemIndex(item);
    rendered.add(index);
    if ((item as HTMLElement).style.visibility === "hidden") {
      errors.push(`item ${index}: hidden`);
      continue;
    }
    const actual = item.getBoundingClientRect();
    const lanes = layout.$getLanes();
    // The lanes share the width left by the gaps between them
    const laneSize = (rect.width - (lanes - 1) * gap) / lanes;
    for (const [key, value, expected] of [
      ["offset", actual.top - rect.top, layout.$getItemOffset(index)],
      ["size", actual.height, layout.$getItemSize(index)],
      [
        "cross offset",
        // The lanes are placed from the inline start, which is the right in RTL
        rtl ? rect.right - actual.right : actual.left - rect.left,
        layout.$getItemLane(index) * (laneSize + gap),
      ],
      ["cross size", actual.width, laneSize],
    ] as const) {
      if (Math.abs(value - expected) > Math.max(SUBPIXEL, LAYOUT_UNIT)) {
        errors.push(`item ${index}: ${key} ${value}, expected ${expected}`);
      }
    }
  }
  const scroll = viewport.scrollTop;
  const client = viewport.clientHeight;
  for (let i = 0; i < layout.$getLength(); i++) {
    const offset = layout.$getItemOffset(i);
    if (
      offset < scroll + client &&
      offset + layout.$getItemSize(i) > scroll &&
      !rendered.has(i)
    ) {
      errors.push(`item ${i}: not rendered`);
    }
  }
  return errors;
};

// The layout is tested with numbers, so this checks that the masonry renders what its layout computes, for the items in the viewport
const expectGeometry = async (
  root: Element,
  handle: VMasonryHandle,
  { lanes, gap = 0, itemSize }: ItemProps,
  length = COUNT,
) => {
  const { viewport, container } = await getVirtualizer(root);
  await expect
    .poll(() => {
      const layout = createMasonryLayout(
        length,
        lanes,
        gap,
        itemSize,
        handle.cache,
      );
      return getGeometryErrors(viewport, container, layout, gap);
    })
    .toEqual([]);
};

// The total size grows while the items are measured, so the end is scrolled to until the last item is rendered
const scrollToLast = async (root: Element, last: number) => {
  const { viewport, container } = await getVirtualizer(root);
  await expect
    .poll(() => {
      scrollToEnd(viewport);
      return getItem(container, `item-${last}`);
    })
    .toBeDefined();
};

for (const ratio of [false, true]) {
  for (const gap of [0, 8]) {
    for (const rtl of [false, true]) {
      it(`renders the items where the layout places them from the start to the end (${ratio ? "aspect ratio" : "fixed"} sizes, gap: ${gap}, ${rtl ? "RTL" : "LTR"})`, async () => {
        if (rtl) {
          setRTL();
        }
        const ref = createRef<VMasonryHandle>();
        const root = render(
          <VMasonry
            ref={ref}
            lanes={3}
            gap={gap}
            data={data}
            style={{ width: VIEWPORT, height: VIEWPORT }}
          >
            {(i) => (
              <div
                style={
                  ratio ? { aspectRatio: getRatio(i) } : { height: getSize(i) }
                }
              >
                item-{i}
              </div>
            )}
          </VMasonry>,
        );
        // check if start is displayed
        await expectVirtualized(root, "item-0", `item-${COUNT - 1}`);
        await expectGeometry(root, ref.current!, { lanes: 3, gap });

        await scrollToLast(root, COUNT - 1);
        await expectGeometry(root, ref.current!, { lanes: 3, gap });
      });
    }
  }
}

describe("resize jump compensation", () => {
  it("keeps the items in the viewport in place while the items above are measured on scrolling up", async () => {
    // The first items decide the estimated size, and the others are larger by the same size in every lane, so that compensating a row of lanes is exact
    const getCompensatedSize = (i: number) => (i < 30 ? 40 : 100);
    let onScrollEnd = () => {};
    const root = render(
      <VMasonry
        lanes={3}
        data={data}
        style={{ height: VIEWPORT }}
        onScrollEnd={() => onScrollEnd()}
      >
        {(i) => <div style={{ height: getCompensatedSize(i) }}>item-{i}</div>}
      </VMasonry>,
    );
    await expectVirtualized(root, "item-0", `item-${COUNT - 1}`);
    const { viewport, container } = await getVirtualizer(root);

    const scroll = (offset: number) =>
      new Promise<void>((resolve) => {
        onScrollEnd = resolve;
        viewport.scrollTop += offset;
      });

    // The items rendered after a scroll are measured and compensated for a while, so wait until they stay still for a few polls
    const settle = () => {
      let prev: string | undefined;
      let count = 0;
      return expect
        .poll(() => {
          const items = [...container.children];
          const current = items.some(
            (e) => (e as HTMLElement).style.visibility === "hidden",
          )
            ? undefined
            : viewport.scrollTop +
              items.map((e) => relativeTop(viewport, e)).join();
          count = current !== undefined && current === prev ? count + 1 : 0;
          prev = current;
          return count;
        })
        .toBeGreaterThanOrEqual(3);
    };

    // Jump over the unmeasured items, within the total size estimated from the first items
    await scroll(5000);
    for (let i = 0; i < 10; i++) {
      await settle();
      const item = [...container.children].find(
        (e) => relativeTop(viewport, e) >= 100,
      )!;
      const top = relativeTop(viewport, item);
      await scroll(-150);
      await expectPosition(() => relativeTop(viewport, item), top + 150);
    }
  });

  it("reaches the start after scrolling over the unmeasured items", async () => {
    const root = render(
      <VMasonry lanes={3} data={data} style={{ height: VIEWPORT }}>
        {(i) => <div style={{ height: 60 + getSize(i) }}>item-{i}</div>}
      </VMasonry>,
    );
    await expectVirtualized(root, "item-0", `item-${COUNT - 1}`);
    const { viewport, container } = await getVirtualizer(root);

    viewport.scrollTop = 20000;
    await expect.poll(() => container.children.length).toBeGreaterThan(0);
    for (let i = 0; i < 8; i++) {
      viewport.scrollTop -= VIEWPORT;
      await expect.poll(() => container.children.length).toBeGreaterThan(0);
    }
    // The compensation may move the offset right after scrolling
    await expect
      .poll(() => {
        viewport.scrollTop = 0;
        return viewport.scrollTop;
      })
      .toBe(0);
    await expectPosition(
      () => relativeTop(viewport, getItem(container, "item-0")!),
      0,
    );
  });

  describe("while scrolling down", () => {
    const ITEM_SIZE = 100;
    const HALF = ITEM_SIZE / 2;

    // Resizing the DOM directly reaches the store through ResizeObserver like a real resize
    const resize = (container: HTMLElement, index: number, size: number) => {
      const item = getItem(container, `item-${index}`)!;
      (item.firstElementChild as HTMLElement).style.height = `${size}px`;
    };

    const scrolled = (viewport: HTMLElement) =>
      new Promise((resolve) =>
        viewport.addEventListener("scroll", resolve, { once: true }),
      );

    // Wait until the scroll has ended and the offset stays still for a few frames
    const settle = async (viewport: HTMLElement) => {
      let lastScrollTime = performance.now();
      const onScroll = () => {
        lastScrollTime = performance.now();
      };
      viewport.addEventListener("scroll", onScroll);
      let prev: string | undefined;
      let stable = 0;
      let settled = false;
      for (let i = 0; i < 600 && !settled; i++) {
        await nextFrame();
        const next = `${viewport.scrollTop},${viewport.scrollHeight}`;
        stable = next === prev ? stable + 1 : 0;
        prev = next;
        // The store keeps the scrolling state until 150ms after the last scroll event
        settled = stable >= 3 && performance.now() - lastScrollTime > 200;
      }
      viewport.removeEventListener("scroll", onScroll);
      expect(settled).toBe(true);
    };

    it("compensates the items which straddle the viewport start in every lane", async () => {
      // The sizes are given beforehand, so the 2 lanes are rows of the items: item i is in lane i % 2 from ITEM_SIZE * floor(i / 2)
      const root = render(
        <VMasonry
          lanes={2}
          itemSize={ITEM_SIZE}
          data={data}
          style={{ height: VIEWPORT }}
        >
          {(i) => <div style={{ height: ITEM_SIZE }}>item-{i}</div>}
        </VMasonry>,
      );
      const { viewport, container } = await getVirtualizer(root);
      await expect.poll(() => getItem(container, "item-0")).toBeDefined();
      viewport.scrollTop = ITEM_SIZE * 10;
      await settle(viewport);

      // The viewport becomes 1050 to 1450, and items 20 and 21 are 1000 to 1100 in each lane.
      // Item 22 is the first item not to keep, which is placed lower by both of them
      viewport.scrollTop += HALF;
      await scrolled(viewport);
      resize(container, 20, ITEM_SIZE * 2);
      resize(container, 21, ITEM_SIZE * 2);
      await settle(viewport);

      await expectPosition(
        () => relativeTop(viewport, getItem(container, "item-22")!),
        HALF,
      );
    });

    it("does not compensate an item beside the item which covers the entire viewport", async () => {
      // The sizes are given beforehand except item 20, which is 1000 to 1600 in lane 0.
      // The following items are placed in lane 1 beside it, as it is the shorter lane
      const TALL_INDEX = 20;
      const root = render(
        <VMasonry
          lanes={2}
          itemSize={ITEM_SIZE}
          data={data}
          style={{ height: VIEWPORT }}
        >
          {(i) => (
            <div
              style={{ height: i === TALL_INDEX ? ITEM_SIZE * 6 : ITEM_SIZE }}
            >
              item-{i}
            </div>
          )}
        </VMasonry>,
      );
      const { viewport, container } = await getVirtualizer(root);
      await expect.poll(() => getItem(container, "item-0")).toBeDefined();
      viewport.scrollTop = ITEM_SIZE * 10;
      await settle(viewport);

      // The viewport becomes 1050 to 1450, and item 21 is 1000 to 1100 in lane 1.
      // Item 21 straddles the viewport start like the items compensated above, but item 20 before it covers the viewport and is the item to keep in place
      viewport.scrollTop += HALF;
      await scrolled(viewport);
      resize(container, TALL_INDEX + 1, ITEM_SIZE * 2);
      await settle(viewport);

      await expectPosition(
        () => relativeTop(viewport, getItem(container, `item-${TALL_INDEX}`)!),
        -HALF,
      );
    });
  });
});

describe("scrollToIndex", () => {
  const TARGET_INDEX = 500;

  const Masonry = ({ handle }: { handle: Ref<VMasonryHandle> }) => (
    <VMasonry ref={handle} lanes={3} data={data} style={{ height: VIEWPORT }}>
      {(i) => <div style={{ height: getSize(i) }}>item-{i}</div>}
    </VMasonry>
  );

  it("align start", async () => {
    const ref = createRef<VMasonryHandle>();
    const root = render(<Masonry handle={ref} />);
    // check if start is displayed
    await expectVirtualized(root, "item-0", `item-${COUNT - 1}`);
    const { viewport, container } = await getVirtualizer(root);

    ref.current!.scrollToIndex(TARGET_INDEX);
    await expectPosition(
      () => relativeTop(viewport, getItem(container, `item-${TARGET_INDEX}`)!),
      0,
    );
  });

  it("align end", async () => {
    const ref = createRef<VMasonryHandle>();
    const root = render(<Masonry handle={ref} />);
    // check if start is displayed
    await expectVirtualized(root, "item-0", `item-${COUNT - 1}`);
    const { viewport, container } = await getVirtualizer(root);

    ref.current!.scrollToIndex(TARGET_INDEX, { align: "end" });
    await expectPosition(
      () =>
        relativeBottom(viewport, getItem(container, `item-${TARGET_INDEX}`)!),
      0,
    );
  });
});

it("lays out the items again with their sizes in the new width, without remounting them", async () => {
  const ref = createRef<VMasonryHandle>();
  const Masonry = ({ width }: { width: number }) => (
    <div style={{ width }}>
      <VMasonry ref={ref} lanes={4} data={data} style={{ height: VIEWPORT }}>
        {(i) => <div style={{ aspectRatio: getRatio(i) }}>item-{i}</div>}
      </VMasonry>
    </div>
  );
  const root = render(<Masonry width={600} />);
  await expectVirtualized(root, "item-0", `item-${COUNT - 1}`);
  const { viewport, container } = await getVirtualizer(root);

  const getVisibleItems = () =>
    [...container.children].filter(
      (item) =>
        relativeTop(viewport, item) < viewport.clientHeight &&
        relativeBottom(viewport, item) < viewport.clientHeight,
    );
  const countLanes = () =>
    new Set(getVisibleItems().map((item) => item.getBoundingClientRect().left))
      .size;

  viewport.scrollTop = 3000;
  await expectGeometry(root, ref.current!, { lanes: 4 });
  expect(countLanes()).toBe(4);
  const before = getVisibleItems();

  rerender(root, <Masonry width={350} />);
  await expectGeometry(root, ref.current!, { lanes: 4 });
  expect(countLanes()).toBe(4);
  expect(viewport.scrollTop).toBeGreaterThan(0);
  // Some of the items stay in the viewport as the same elements
  expect(getVisibleItems().some((item) => before.includes(item))).toBe(true);
});

it("lays out the items again with the new lanes and gap, keeping the item at the start of the viewport", async () => {
  // Items are not measured again in the new lanes, so that the relayout alone moves them
  const ITEM_SIZE = 50;
  const ref = createRef<VMasonryHandle>();
  let scrollEnded = false;
  const Masonry = ({ lanes, gap }: ItemProps) => (
    <VMasonry
      ref={ref}
      lanes={lanes}
      gap={gap}
      itemSize={ITEM_SIZE}
      data={data}
      style={{ height: VIEWPORT }}
      onScrollEnd={() => {
        scrollEnded = true;
      }}
    >
      {(i) => <div style={{ height: ITEM_SIZE }}>item-{i}</div>}
    </VMasonry>
  );
  const root = render(<Masonry lanes={3} />);
  await expectVirtualized(root, "item-0", `item-${COUNT - 1}`);
  const { viewport, container } = await getVirtualizer(root);

  // In the middle of a row, so that the item at the offset doesn't depend on rounding of the offset
  viewport.scrollTop = ITEM_SIZE * 60.5;
  // Change the lanes at rest, not while the scroll event is pending
  await expect.poll(() => scrollEnded).toBe(true);
  await expectGeometry(root, ref.current!, { lanes: 3, itemSize: ITEM_SIZE });
  // The first item which ends after the scroll offset
  const anchor = [...container.children]
    .filter((item) => relativeBottom(viewport, item) < viewport.clientHeight)
    .sort((a, b) => getItemIndex(a) - getItemIndex(b))[0]!;
  const top = relativeTop(viewport, anchor);

  for (const props of [
    { lanes: 2 },
    { lanes: 2, gap: 16 },
    { lanes: 4, gap: 16 },
  ] satisfies ItemProps[]) {
    // Change the lanes after the scroll by the previous change is observed
    await expect.poll(() => ref.current!.scrollOffset).toBe(viewport.scrollTop);
    rerender(root, <Masonry {...props} />);
    await expectGeometry(root, ref.current!, {
      ...props,
      itemSize: ITEM_SIZE,
    });
    expect(container.contains(anchor)).toBe(true);
    await expectPosition(() => relativeTop(viewport, anchor), top);
  }
});

it("lays out the items again with the new lanes while scrolling down, keeping the first item starting in the viewport", async () => {
  // Items are not measured again in the new lanes, so that the relayout alone moves them
  const ITEM_SIZE = 50;
  const ref = createRef<VMasonryHandle>();
  const Masonry = ({ lanes }: { lanes: number }) => (
    <VMasonry
      ref={ref}
      lanes={lanes}
      itemSize={ITEM_SIZE}
      data={data}
      style={{ height: VIEWPORT }}
    >
      {(i) => <div style={{ height: ITEM_SIZE }}>item-{i}</div>}
    </VMasonry>
  );
  const root = render(<Masonry lanes={3} />);
  await expectVirtualized(root, "item-0", `item-${COUNT - 1}`);
  const { viewport, container } = await getVirtualizer(root);
  viewport.scrollTop = ITEM_SIZE * 60;
  await expect.poll(() => ref.current!.scrollOffset).toBe(viewport.scrollTop);

  // The viewport starts in row 60 of items 180 to 182, so item 183 in the next row is the first item starting in it.
  // Item 180 at the start of the viewport is kept in place instead while idle. Items 180 to 183 are in the same row in 4 lanes, so keeping either of them puts item 183 at a different position
  const OFFSET = 10;
  const scroll = new Promise((resolve) =>
    viewport.addEventListener("scroll", resolve, { once: true }),
  );
  viewport.scrollTop += OFFSET;
  await scroll;
  await expect.poll(() => ref.current!.scrollOffset).toBe(viewport.scrollTop);
  const anchor = getItem(container, "item-183")!;
  await expectPosition(() => relativeTop(viewport, anchor), ITEM_SIZE - OFFSET);
  rerender(root, <Masonry lanes={4} />);

  await expectGeometry(root, ref.current!, { lanes: 4, itemSize: ITEM_SIZE });
  await expectPosition(() => relativeTop(viewport, anchor), ITEM_SIZE - OFFSET);
});

it("estimates the item size again from the items measured in the new lanes", async () => {
  const ref = createRef<VMasonryHandle>();
  // The items keep the same aspect ratio, so the estimated size is the width of the lanes
  const Masonry = ({ lanes }: { lanes: number }) => (
    <VMasonry
      ref={ref}
      lanes={lanes}
      data={data}
      style={{ width: VIEWPORT, height: VIEWPORT }}
    >
      {(i) => <div style={{ aspectRatio: 1 }}>item-{i}</div>}
    </VMasonry>
  );
  // The items rendered at first are measured in the lanes before they are changed, like the lanes updated after the first measurement
  const root = render(<Masonry lanes={1} />);
  await expectVirtualized(root, "item-0", `item-${COUNT - 1}`);
  const { viewport } = await getVirtualizer(root);
  await expect.poll(() => ref.current!.cache[1]).toBe(viewport.clientWidth);

  rerender(root, <Masonry lanes={4} />);
  await expect.poll(() => ref.current!.cache[1]).toBe(viewport.clientWidth / 4);
});

it("renders the items in the buffer with the gap larger than the items", async () => {
  const root = render(
    <VMasonry lanes={3} gap={20} data={data} style={{ height: VIEWPORT }}>
      {(i) => <div style={{ height: 20 }}>item-{i}</div>}
    </VMasonry>,
  );
  await expectVirtualized(root, "item-0", `item-${COUNT - 1}`);
  const { viewport, container } = await getVirtualizer(root);

  // The buffer is not rendered until the item size is estimated
  await expect
    .poll(() =>
      [...container.children].some(
        (item) => relativeTop(viewport, item) > viewport.clientHeight,
      ),
    )
    .toBe(true);
});

it("keepMounted keeps the item alive while it's scrolled away", async () => {
  const ITEM_SIZE = 50;
  const KEPT = 7;
  const root = render(
    <VMasonry
      lanes={3}
      itemSize={ITEM_SIZE}
      data={data}
      keepMounted={[KEPT]}
      style={{ height: VIEWPORT }}
    >
      {(i) =>
        i === KEPT ? (
          <input
            aria-label="edit"
            style={{ boxSizing: "border-box", height: ITEM_SIZE }}
          />
        ) : (
          <div style={{ height: ITEM_SIZE }}>item-{i}</div>
        )
      }
    </VMasonry>,
  );
  await expectVirtualized(root, "item-0", `item-${COUNT - 1}`);
  const { viewport, container } = await getVirtualizer(root);
  const input = root.querySelector("input")!;
  // Firefox and WebKit scroll a focused element back into view when the DOM around it changes
  const focusable = server.browser === "chromium";
  if (focusable) {
    input.focus();
  }

  await scrollToLast(root, COUNT - 1);
  expect(getItem(container, "item-6")).toBeUndefined();
  expect(root.querySelector("input")).toBe(input);
  if (focusable) {
    expect(document.activeElement).toBe(input);
  }

  viewport.scrollTop = 0;
  await expect.poll(() => getItem(container, "item-6")).toBeDefined();
  expect(root.querySelector("input")).toBe(input);
  // The items with the same size are laid out like a grid
  await expectPosition(
    () => relativeTop(viewport, input),
    Math.floor(KEPT / 3) * ITEM_SIZE,
  );
});

it("lays out the appended items after the existing ones", async () => {
  const ref = createRef<VMasonryHandle>();
  const Masonry = ({ count }: { count: number }) => (
    <VMasonry
      ref={ref}
      lanes={3}
      data={data.slice(0, count)}
      style={{ height: VIEWPORT }}
    >
      {(i) => <div style={{ height: getSize(i) }}>item-{i}</div>}
    </VMasonry>
  );
  const root = render(<Masonry count={30} />);
  await scrollToLast(root, 29);
  await expectGeometry(root, ref.current!, { lanes: 3 }, 30);

  rerender(root, <Masonry count={COUNT} />);
  await scrollToLast(root, COUNT - 1);
  await expectGeometry(root, ref.current!, { lanes: 3 });
});
