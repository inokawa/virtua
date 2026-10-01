import { afterEach, describe, expect, it } from "vitest";
import { render, rerender } from "../spec/browser/react.js";
import {
  createRef,
  type Ref,
  useEffect,
  useImperativeHandle,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { Virtualizer, type VirtualizerHandle } from "./react/index.js";
import {
  cleanupScroll,
  expectPosition,
  expectVirtualized,
  findFirstVisibleItem,
  getItem,
  getVirtualizer,
  relativeBottom,
  relativeTop,
  scrollToEnd,
  SUBPIXEL,
  setRTL,
} from "../spec/browser/index.js";
import { delay, nextFrame, range } from "../spec/utils.js";

afterEach(cleanupScroll);

describe("jump write", () => {
  it("fast scrolling into unmeasured area does not lose scroll position", async () => {
    const HEIGHTS = [20, 40, 80, 77];
    // itemSize is not given and the sizes vary, so scrolling far ahead lands in an area sized by estimation
    const root = render(
      <div style={{ height: "100vh", overflowY: "auto" }}>
        <Virtualizer data={range(1000)}>
          {(i) => (
            <div key={i} style={{ height: HEIGHTS[i % HEIGHTS.length] }}>
              {i}
            </div>
          )}
        </Virtualizer>
      </div>,
    );
    const { viewport, container } = await getVirtualizer(root);

    // check if start is displayed
    await expect.poll(() => container.firstElementChild!.textContent).toBe("0");

    // scroll fast with large delta and check if the scrolled position is not rolled back, ignoring the expected compensation of estimated sizes
    let lost = 0;
    let pos = 0;
    for (let i = 0; i < 25; i++) {
      if (i > 0) {
        const rollback = pos - viewport.scrollTop;
        if (rollback > 1) {
          lost += rollback;
        }
      }
      pos += 1500;
      viewport.scrollTop = pos;
      await nextFrame();
    }
    expect(lost).toBe(0);
  });

  it("writes absolute position if the offset exceeds the end shrunk by the items above", async () => {
    type Handle = { setHeight: (height: number) => void };
    const ref = createRef<Handle>();
    const handle = createRef<VirtualizerHandle>();
    const Component = ({
      ref,
      handle,
    }: {
      ref: Ref<Handle>;
      handle: Ref<VirtualizerHandle>;
    }) => {
      const [height, setHeight] = useState(100);
      useImperativeHandle(ref, () => ({ setHeight }), []);
      return (
        <div style={{ height: 400, overflowY: "auto" }}>
          <Virtualizer
            ref={handle}
            data={range(20)}
            itemSize={100}
            keepMounted={[14]}
          >
            {(i) => (
              <div key={i} style={{ height: i === 14 ? height : 100 }}>
                {i}
              </div>
            )}
          </Virtualizer>
        </div>
      );
    };
    const root = render(<Component ref={ref} handle={handle} />);
    const { viewport } = await getVirtualizer(root);

    // Between the end after the shrink below and the end before it
    await expect
      .poll(() => {
        viewport.scrollTop = 1580;
        return handle.current!.scrollOffset;
      })
      .toBe(1580);

    ref.current!.setHeight(50);
    await expectPosition(() => viewport.scrollTop, 1530);
  });
});

describe("resize jump compensation", () => {
  // Wait until the scroll has ended and nothing changes for a few frames.
  // A scroll may have just happened before the wait, so the wait counts from its start too
  const settle = async (viewport: HTMLElement, container: HTMLElement) => {
    let lastScrollTime = performance.now();
    const onScroll = () => {
      lastScrollTime = performance.now();
    };
    viewport.addEventListener("scroll", onScroll);
    const snapshot = () =>
      JSON.stringify([
        viewport.scrollTop,
        viewport.scrollHeight,
        Array.from(container.children as HTMLCollectionOf<HTMLElement>).map(
          (el) => [el.textContent, el.offsetTop, el.offsetHeight],
        ),
      ]);
    let prev = snapshot();
    let stable = 0;
    let settled = false;
    // Give up after about 10 seconds
    for (let i = 0; i < 600 && !settled; i++) {
      await nextFrame();
      const next = snapshot();
      stable = next === prev ? stable + 1 : 0;
      prev = next;
      // A single unchanged frame can fall in the middle of a multi frame correction, so a few in a row are required.
      // The store keeps the scrolling state until 150ms after the last scroll event
      settled = stable >= 3 && performance.now() - lastScrollTime > 200;
    }
    viewport.removeEventListener("scroll", onScroll);
    expect(settled).toBe(true);
  };

  it("horizontal start -> end (RTL)", async () => {
    setRTL();
    const VIEWPORT_WIDTH = 400;
    const root = render(
      <div style={{ width: VIEWPORT_WIDTH, height: 200, overflowX: "auto" }}>
        <Virtualizer data={range(1000)} horizontal>
          {(i) => (
            <div key={i} style={{ width: i % 3 === 0 ? 100 : 60 }}>
              item-{i}
            </div>
          )}
        </Virtualizer>
      </div>,
    );
    const { viewport, container } = await getVirtualizer(root);

    // check if start is displayed
    await expect.poll(() => getItem(container, "item-0")).toBeDefined();

    // check if offset from start is always keeped
    const MIN_PROGRESS = 200;
    // The offset from the start grows as scrollLeft goes negative
    const read = () => -viewport.scrollLeft;
    const initial = read();
    let prev = initial;
    for (let i = 0; i < 20; i++) {
      // use scrollBy to scroll a lot, past the rendered items into the area sized by estimation
      viewport.scrollBy({ left: -VIEWPORT_WIDTH * 2 });
      await nextFrame();
      const next = read();
      expect(next).toBeGreaterThanOrEqual(prev - SUBPIXEL);
      prev = next;
    }
    expect(prev).toBeGreaterThan(initial + MIN_PROGRESS);
  });

  describe("by item position", () => {
    const ITEM_SIZE = 100;
    const ITEM_COUNT = 100;
    // Puts the viewport start in the middle of an item
    const HALF = ITEM_SIZE / 2;
    // An item edge can't rest exactly on the viewport edge where the scroll offset is rounded
    const canPlaceOnEdge = !SUBPIXEL;

    // itemSize matches the real size, so the cache is exact from the initial render and item i sits at (i * ITEM_SIZE, (i + 1) * ITEM_SIZE)
    const List = ({
      handle,
      keys = range(ITEM_COUNT),
      shift,
    }: {
      handle?: Ref<VirtualizerHandle>;
      keys?: number[];
      shift?: boolean;
    }) => (
      <div style={{ height: ITEM_SIZE * 4, overflowY: "auto" }}>
        <Virtualizer
          ref={handle}
          data={keys}
          itemSize={ITEM_SIZE}
          shift={shift}
        >
          {(key) => (
            <div key={key} style={{ height: ITEM_SIZE }}>
              {key}
            </div>
          )}
        </Virtualizer>
      </div>
    );

    // Resizing the DOM directly reaches the store through ResizeObserver like a real resize, and lasts as long as the item stays mounted
    const resize = (container: HTMLElement, index: number, size: number) => {
      const item = getItem(container, String(index))!;
      (item.firstElementChild as HTMLElement).style.height = `${size}px`;
    };

    const scrolled = (viewport: HTMLElement) =>
      new Promise((resolve) =>
        viewport.addEventListener("scroll", resolve, { once: true }),
      );

    describe("while idle", () => {
      it("compensates an item which is fully above the viewport", async () => {
        const root = render(<List />);
        const { viewport, container } = await getVirtualizer(root);
        await expect.poll(() => getItem(container, "0")).toBeDefined();
        viewport.scrollTop = ITEM_SIZE * 4;
        await settle(viewport, container);

        // item 2 is (200, 300), the viewport is (400, 800)
        resize(container, 2, ITEM_SIZE * 2);
        await settle(viewport, container);

        await expectPosition(() => viewport.scrollTop, ITEM_SIZE * 5);
      });

      it("compensates an item whose bottom rests exactly on the viewport start", async () => {
        const root = render(<List />);
        const { viewport, container } = await getVirtualizer(root);
        await expect.poll(() => getItem(container, "0")).toBeDefined();
        viewport.scrollTop = ITEM_SIZE * 4;
        await settle(viewport, container);

        // item 3 is (300, 400) and the viewport starts exactly on its bottom
        resize(container, 3, ITEM_SIZE * 2);
        await settle(viewport, container);

        await expectPosition(() => viewport.scrollTop, ITEM_SIZE * 5);
      });

      it("does not compensate an item which straddles the viewport start", async () => {
        const root = render(<List />);
        const { viewport, container } = await getVirtualizer(root);
        await expect.poll(() => getItem(container, "0")).toBeDefined();
        viewport.scrollTop = ITEM_SIZE * 4 + HALF;
        await settle(viewport, container);

        // item 4 is (400, 500), the viewport is (450, 850)
        resize(container, 4, ITEM_SIZE * 2);
        await settle(viewport, container);

        await expectPosition(() => viewport.scrollTop, ITEM_SIZE * 4 + HALF);
      });

      it("does not compensate an item which covers the entire viewport", async () => {
        const root = render(<List />);
        const { viewport, container } = await getVirtualizer(root);
        await expect.poll(() => getItem(container, "0")).toBeDefined();
        // Grow item 4 to (400, 1000) from below the viewport
        resize(container, 4, ITEM_SIZE * 6);
        await settle(viewport, container);
        viewport.scrollTop = ITEM_SIZE * 5;
        await settle(viewport, container);

        // item 4 sticks out of both edges of the viewport (500, 900)
        resize(container, 4, ITEM_SIZE * 7);
        await settle(viewport, container);

        await expectPosition(() => viewport.scrollTop, ITEM_SIZE * 5);
      });

      it("does not compensate an item which is below the viewport start", async () => {
        const root = render(<List />);
        const { viewport, container } = await getVirtualizer(root);
        await expect.poll(() => getItem(container, "0")).toBeDefined();
        viewport.scrollTop = ITEM_SIZE * 4;
        await settle(viewport, container);

        // item 6 is (600, 700), the viewport is (400, 800)
        resize(container, 6, ITEM_SIZE * 2);
        await settle(viewport, container);

        await expectPosition(() => viewport.scrollTop, ITEM_SIZE * 4);
      });

      it("compensates an item which is fully above the viewport and shrinks", async () => {
        const root = render(<List />);
        const { viewport, container } = await getVirtualizer(root);
        await expect.poll(() => getItem(container, "0")).toBeDefined();
        // Grow item 2 to (200, 400) before scrolling, so it is fully above the viewport (500, 900)
        resize(container, 2, ITEM_SIZE * 2);
        await settle(viewport, container);
        viewport.scrollTop = ITEM_SIZE * 5;
        await settle(viewport, container);

        resize(container, 2, ITEM_SIZE);
        await settle(viewport, container);

        await expectPosition(() => viewport.scrollTop, ITEM_SIZE * 4);
      });

      it("does not compensate an item which straddles the viewport start and shrinks", async () => {
        const root = render(<List />);
        const { viewport, container } = await getVirtualizer(root);
        await expect.poll(() => getItem(container, "0")).toBeDefined();
        // Grow item 4 to (400, 700) before scrolling
        resize(container, 4, ITEM_SIZE * 3);
        await settle(viewport, container);
        viewport.scrollTop = ITEM_SIZE * 4 + HALF;
        await settle(viewport, container);

        resize(container, 4, ITEM_SIZE);
        await settle(viewport, container);

        await expectPosition(() => viewport.scrollTop, ITEM_SIZE * 4 + HALF);
      });
    });

    describe("while scrolling up", () => {
      // The decision is the same as while idle, so only the item which is decided differently while scrolling down is checked
      it("does not compensate an item which straddles the viewport start", async () => {
        const root = render(<List />);
        const { viewport, container } = await getVirtualizer(root);
        await expect.poll(() => getItem(container, "0")).toBeDefined();
        viewport.scrollTop = ITEM_SIZE * 5;
        await settle(viewport, container);

        // The viewport becomes (450, 850) and item 4 is (400, 500)
        viewport.scrollTop -= HALF;
        await scrolled(viewport);
        resize(container, 4, ITEM_SIZE * 2);
        await settle(viewport, container);

        await expectPosition(() => viewport.scrollTop, ITEM_SIZE * 4 + HALF);
      });
    });

    describe("while scrolling down", () => {
      it("compensates an item which straddles the viewport start", async () => {
        const root = render(<List />);
        const { viewport, container } = await getVirtualizer(root);
        await expect.poll(() => getItem(container, "0")).toBeDefined();
        viewport.scrollTop = ITEM_SIZE * 4;
        await settle(viewport, container);

        // The same situation is not compensated while scrolling up
        viewport.scrollTop += HALF;
        await scrolled(viewport);
        resize(container, 4, ITEM_SIZE * 2);
        await settle(viewport, container);

        await expectPosition(() => viewport.scrollTop, ITEM_SIZE * 5 + HALF);
      });

      it.runIf(canPlaceOnEdge)(
        "does not compensate an item whose top rests exactly on the viewport start",
        async () => {
          const root = render(<List />);
          const { viewport, container } = await getVirtualizer(root);
          await expect.poll(() => getItem(container, "0")).toBeDefined();
          viewport.scrollTop = ITEM_SIZE * 4 + HALF;
          await settle(viewport, container);

          // The viewport becomes (500, 900) and item 5 starts exactly on its start
          viewport.scrollTop += HALF;
          await scrolled(viewport);
          resize(container, 5, ITEM_SIZE * 2);
          await settle(viewport, container);

          await expectPosition(() => viewport.scrollTop, ITEM_SIZE * 5);
        },
      );

      it.runIf(canPlaceOnEdge)(
        "does not compensate an item whose bottom rests exactly on the viewport end",
        async () => {
          const root = render(<List />);
          const { viewport, container } = await getVirtualizer(root);
          await expect.poll(() => getItem(container, "0")).toBeDefined();
          // Grow item 4 to (400, 850) from below the viewport
          resize(container, 4, ITEM_SIZE * 4 + HALF);
          await settle(viewport, container);
          viewport.scrollTop = ITEM_SIZE * 4;
          await settle(viewport, container);

          // The viewport becomes (450, 850) and item 4 ends exactly on its end
          viewport.scrollTop += HALF;
          await scrolled(viewport);
          resize(container, 4, ITEM_SIZE * 5);
          await settle(viewport, container);

          await expectPosition(() => viewport.scrollTop, ITEM_SIZE * 4 + HALF);
        },
      );

      it("does not compensate an item which covers the entire viewport", async () => {
        const root = render(<List />);
        const { viewport, container } = await getVirtualizer(root);
        await expect.poll(() => getItem(container, "0")).toBeDefined();
        resize(container, 4, ITEM_SIZE * 6);
        await settle(viewport, container);
        viewport.scrollTop = ITEM_SIZE * 5;
        await settle(viewport, container);

        // The viewport becomes (550, 950) and item 4 is (400, 1000)
        viewport.scrollTop += HALF;
        await scrolled(viewport);
        resize(container, 4, ITEM_SIZE * 7);
        await settle(viewport, container);

        await expectPosition(() => viewport.scrollTop, ITEM_SIZE * 5 + HALF);
      });

      it("does not compensate an item which is below the viewport start", async () => {
        const root = render(<List />);
        const { viewport, container } = await getVirtualizer(root);
        await expect.poll(() => getItem(container, "0")).toBeDefined();
        viewport.scrollTop = ITEM_SIZE * 4;
        await settle(viewport, container);

        // The viewport becomes (450, 850) and item 6 is (600, 700)
        viewport.scrollTop += HALF;
        await scrolled(viewport);
        resize(container, 6, ITEM_SIZE * 2);
        await settle(viewport, container);

        await expectPosition(() => viewport.scrollTop, ITEM_SIZE * 4 + HALF);
      });
    });

    describe("during imperative scrolling", () => {
      it("compensates an item which straddles the viewport start", async () => {
        const handle = createRef<VirtualizerHandle>();
        const root = render(<List handle={handle} />);
        const { viewport, container } = await getVirtualizer(root);
        await expect.poll(() => getItem(container, "0")).toBeDefined();
        viewport.scrollTop = ITEM_SIZE * 5;
        await settle(viewport, container);

        // Scrolling imperatively to the current offset emits no scroll event, so the manual mode lasts until the next scroll.
        // The imperative scroll keeps writing its destination until no item has been measured for 150ms
        handle.current!.scrollTo(ITEM_SIZE * 5);
        await delay(200);

        // The manual mode compensates even while scrolling up, unlike native scrolling
        viewport.scrollTop -= HALF;
        await scrolled(viewport);
        resize(container, 4, ITEM_SIZE * 2);
        await settle(viewport, container);

        await expectPosition(() => viewport.scrollTop, ITEM_SIZE * 5 + HALF);
      });
    });

    describe("during smooth scrolling", () => {
      // While a smooth scroll runs towards a destination, the items are compensated by index instead of by position.
      // The jump is deferred and subtracted from the item offsets meanwhile, so the destination is what to assert.
      // The destination is close, so that the item to resize is already rendered on the first scroll event of the smooth scroll and stays rendered until it is measured
      it("compensates an item above the destination", async () => {
        const handle = createRef<VirtualizerHandle>();
        const root = render(<List handle={handle} />);
        const { viewport, container } = await getVirtualizer(root);
        await expect.poll(() => getItem(container, "0")).toBeDefined();
        const TARGET = 4;

        const scroll = scrolled(viewport);
        handle.current!.scrollToIndex(TARGET, { smooth: true });
        await scroll;
        resize(container, 2, ITEM_SIZE * 3);
        await settle(viewport, container);

        expect(viewport.scrollHeight).toBe(ITEM_SIZE * (ITEM_COUNT + 2));
        // item 2 grew by 200 above the destination, and the destination stays where the scroll landed
        await expectPosition(
          () => relativeTop(viewport, getItem(container, String(TARGET))!),
          0,
        );

        // The deferred jump is written afterwards without moving the item, so a scroll moves it by just as much
        viewport.scrollTop += 1;
        await settle(viewport, container);
        await expectPosition(
          () => relativeTop(viewport, getItem(container, String(TARGET))!),
          -1,
        );
      });

      it("does not compensate an item inside the destination", async () => {
        const handle = createRef<VirtualizerHandle>();
        const root = render(<List handle={handle} />);
        const { viewport, container } = await getVirtualizer(root);
        await expect.poll(() => getItem(container, "0")).toBeDefined();
        const TARGET = 4;

        const scroll = scrolled(viewport);
        handle.current!.scrollToIndex(TARGET, { smooth: true });
        await scroll;
        resize(container, TARGET, ITEM_SIZE * 3);
        await settle(viewport, container);

        expect(viewport.scrollHeight).toBe(ITEM_SIZE * (ITEM_COUNT + 2));
        // The destination itself grew but nothing above it did, so it is not moved
        await expectPosition(
          () => relativeTop(viewport, getItem(container, String(TARGET))!),
          0,
        );
      });
    });

    describe("during shifting", () => {
      // While shifting, every item is compensated because the end of the list is the anchor instead of the visible position
      it("compensates an item below the viewport start", async () => {
        const PREPEND_COUNT = 4;
        const root = render(<List />);
        const { viewport, container } = await getVirtualizer(root);
        await expect.poll(() => getItem(container, "0")).toBeDefined();
        viewport.scrollTop = ITEM_SIZE * 4;
        await settle(viewport, container);

        // The resize lands on the scroll event of the shift. Item 8 stays below the viewport, where the other branches don't compensate
        const scroll = scrolled(viewport);
        rerender(
          root,
          <List
            keys={range(PREPEND_COUNT + ITEM_COUNT, (i) => i - PREPEND_COUNT)}
            shift
          />,
        );
        await scroll;
        resize(container, 8, ITEM_SIZE * 2);
        await settle(viewport, container);

        // 400 scrolled before, 400 by the prepended items and 100 by the resize below the viewport
        await expectPosition(
          () => viewport.scrollTop,
          ITEM_SIZE * (4 + PREPEND_COUNT + 1),
        );
      });
    });
  });

  it("lazy content at the end", async () => {
    const ITEM_COUNT = 100;
    const INITIAL_SIZE = 80;
    const LOADED_SIZE = 150;
    // Every item grows a while after it has been rendered, like content loaded later does, and the items finish at different times
    const Item = ({ index }: { index: number }) => {
      const [loaded, setLoaded] = useState(false);
      useEffect(() => {
        const timer = setTimeout(() => setLoaded(true), 100 + (index % 4) * 50);
        return () => clearTimeout(timer);
      }, []);
      return (
        <div
          style={{ height: loaded ? LOADED_SIZE : INITIAL_SIZE }}
          data-loaded={loaded}
        >
          item-{index}
        </div>
      );
    };
    const root = render(
      <div style={{ height: 400, overflowY: "auto" }}>
        <Virtualizer data={range(ITEM_COUNT)}>
          {(i) => <Item key={i} index={i} />}
        </Virtualizer>
      </div>,
    );
    const { viewport, container } = await getVirtualizer(root);
    await expect.poll(() => getItem(container, "item-0")).toBeDefined();
    const last = () => getItem(container, `item-${ITEM_COUNT - 1}`);

    // should reach to the bottom within the specified number of tries
    for (let i = 0; ; i++) {
      // scroll to bottom
      await expect
        .poll(() => {
          scrollToEnd(viewport);
          return last();
        })
        .toBeDefined();

      // wait for resize completed
      await expect
        .poll(() => container.querySelectorAll('[data-loaded="false"]').length)
        .toBe(0);
      await settle(viewport, container);

      // check if distance from the bottom isn't changed by resizes
      if (Math.abs(relativeBottom(viewport, last()!)) <= SUBPIXEL) {
        break;
      }
      expect(i).toBeLessThan(1);
    }
  });

  it("lazy content while scrolling up", async () => {
    const INITIAL_SIZE = 40;
    const LOADED_SIZE = 100;
    // Every fifth item is much taller, so the sizes vary a lot when the items are rendered for the first time
    const TALL_SCALE = 4;
    const STEP = 30;
    // Every item grows a while after it has been rendered, like content loaded later does, and the items finish at different times.
    // Scrolling up brings them into the buffer above the viewport, where their resizes cause jumps
    const Item = ({ index }: { index: number }) => {
      const [loaded, setLoaded] = useState(false);
      useEffect(() => {
        const timer = setTimeout(() => setLoaded(true), 30 + (index % 4) * 20);
        return () => clearTimeout(timer);
      }, []);
      const size = loaded ? LOADED_SIZE : INITIAL_SIZE;
      return (
        <div style={{ height: index % 5 === 0 ? size * TALL_SCALE : size }}>
          item-{index}
        </div>
      );
    };
    const root = render(
      <div style={{ height: 400, overflowY: "auto" }}>
        <Virtualizer data={range(1000)}>
          {(i) => <Item key={i} index={i} />}
        </Virtualizer>
      </div>,
    );
    const { viewport, container } = await getVirtualizer(root);
    await expect
      .poll(() => {
        scrollToEnd(viewport);
        return getItem(container, "item-999");
      })
      .toBeDefined();
    await settle(viewport, container);

    // The jumps are written to the scroll position after the render, so the range of the render has to follow them already
    const isCovered = () => {
      const { top, bottom } = viewport.getBoundingClientRect();
      let covered = top;
      for (const item of container.children) {
        const rect = item.getBoundingClientRect();
        if (rect.bottom <= covered || rect.top >= bottom) {
          continue;
        }
        if (rect.top > covered + SUBPIXEL) {
          return false;
        }
        covered = rect.bottom;
      }
      return covered >= bottom - SUBPIXEL;
    };

    // check if the rendered items cover the viewport in every frame
    let uncovered = 0;
    for (let i = 0; i < 100; i++) {
      viewport.scrollTop -= STEP;
      await nextFrame();
      if (!isCovered()) {
        uncovered++;
      }
    }
    expect(uncovered).toBe(0);
  });

  it("lazy images with prepending", async () => {
    const BATCH_COUNT = 30;
    const TEXT_SIZE = 100;
    const IMAGE_SIZE = 300;
    // Every third item is an image, whose size is known a while after it has been rendered for the first time.
    // The size is kept once loaded, like the cache of the browser does when the item is rendered again
    const loadedImages = new Set<number>();
    const ImageItem = ({ id }: { id: number }) => {
      const [loaded, setLoaded] = useState(loadedImages.has(id));
      useEffect(() => {
        if (loaded) {
          return;
        }
        const timer = setTimeout(() => {
          loadedImages.add(id);
          setLoaded(true);
        }, 200);
        return () => clearTimeout(timer);
      }, []);
      return (
        <div
          style={{ height: loaded ? IMAGE_SIZE : TEXT_SIZE }}
          data-loaded={loaded}
        >
          item-{id}
        </div>
      );
    };
    const Feed = ({ ids, shift }: { ids: number[]; shift?: boolean }) => {
      const ref = useRef<VirtualizerHandle>(null);
      useEffect(() => {
        ref.current!.scrollToIndex(BATCH_COUNT + 1);
      }, []);
      return (
        <div style={{ height: 400, overflowY: "auto" }}>
          <Virtualizer ref={ref} data={ids} shift={shift}>
            {(id) =>
              id % 3 === 1 ? (
                <ImageItem key={id} id={id} />
              ) : (
                <div key={id} style={{ height: TEXT_SIZE }}>
                  item-{id}
                </div>
              )
            }
          </Virtualizer>
        </div>
      );
    };
    // The ids start after the ones prepended later
    const ids = range(BATCH_COUNT * 2, (i) => BATCH_COUNT + i);
    const root = render(<Feed ids={ids} />);
    const { viewport, container } = await getVirtualizer(root);
    const first = () => findFirstVisibleItem(container, viewport)!;
    const expectImagesLoaded = () =>
      expect
        .poll(() => container.querySelectorAll('[data-loaded="false"]').length)
        .toBe(0);

    // check if start is displayed
    const TARGET = `item-${ids[BATCH_COUNT + 1]}`;
    await expect.poll(() => first().textContent).toBe(TARGET);
    await expectPosition(() => relativeTop(viewport, first()), 0);

    // check if stable after image load
    await expectImagesLoaded();
    await settle(viewport, container);
    expect(first().textContent).toBe(TARGET);
    await expectPosition(() => relativeTop(viewport, first()), 0);

    // scroll to top, and let the images rendered there load before prepending.
    // The scroll to the index on mount keeps re-scrolling for a while after the last measurement, so the scroll is kept up
    const FIRST = `item-${ids[0]}`;
    const scrollToTop = () =>
      expect
        .poll(() => {
          viewport.scrollTop = 0;
          return first().textContent;
        })
        .toBe(FIRST);
    await scrollToTop();
    await expectImagesLoaded();
    await scrollToTop();
    await settle(viewport, container);
    rerender(root, <Feed ids={[...range(BATCH_COUNT), ...ids]} shift />);

    // wait for prepending
    await expect.poll(() => viewport.scrollTop).toBeGreaterThan(0);
    await expectImagesLoaded();
    await settle(viewport, container);

    // check if stable after prepending
    expect(first().textContent).toBe(FIRST);
    await expectPosition(() => relativeTop(viewport, first()), 0);
  });
});

describe("shift compensation", () => {
  it("prepending cancels imperative scroll", async () => {
    let id = 0;
    const createItems = (count: number) => range(count, () => id++);

    const ref = createRef<VirtualizerHandle>();
    let prependCount = 0;
    let scrollEnded = false;

    const Component = () => {
      const [items, setItems] = useState(() => createItems(100));
      const isPrepend = useRef(false);

      useLayoutEffect(() => {
        isPrepend.current = false;
      });

      return (
        <div style={{ height: 400, overflowY: "auto" }}>
          <Virtualizer
            ref={ref}
            data={items}
            shift={isPrepend.current}
            onScroll={(offset) => {
              if (offset < 100) {
                prependCount++;
                isPrepend.current = true;
                setItems((prev) => [...createItems(100), ...prev]);
              }
            }}
            onScrollEnd={() => {
              scrollEnded = true;
            }}
          >
            {(i) => (
              <div key={i} style={{ height: 40 }}>
                item-{i}
              </div>
            )}
          </Virtualizer>
        </div>
      );
    };

    const root = render(<Component />);
    await expectVirtualized(root, "item-0", "item-999");

    // scroll to end
    const { viewport } = await getVirtualizer(root);
    scrollToEnd(viewport);
    await expect.poll(() => scrollEnded).toBe(true);
    scrollEnded = false;

    // scroll to top
    ref.current!.scrollTo(0);

    // check if imperative scrolling doesn't cause infinite loop
    await expect.poll(() => scrollEnded).toBe(true);
    expect(prependCount).toBe(1);
  });
});
