import { type Locator, type Page, expect } from "@playwright/test";

export const storyUrl = (id: `${string}-${string}--${string}`) =>
  `http://localhost:6006/iframe.html?id=${id}&viewMode=story`;

declare const scrollableSymbol: unique symbol;
export type ScrollableLocator = Locator & { [scrollableSymbol]: never };

export const getScrollable = async (page: Page): Promise<ScrollableLocator> => {
  const locator = page
    .locator(
      '*[style*="overflow-y: auto"],*[style*="overflow-y:auto"],*[style*="overflow-x: auto"],*[style*="overflow-x:auto"],*[style*="overflow: auto"],*[style*="overflow:auto"]',
    )
    // for nested overflow
    .first();
  await locator.waitFor();
  return locator as ScrollableLocator;
};

const getItems = (locator: Locator) => {
  return locator.locator('*[style*="top"],*[style*="left"]');
};

export const expectInRange = (
  value: number,
  { max, min }: { min: number; max: number },
) => {
  // sometimes it may not be 0 because of sub pixel value
  expect(value).toBeGreaterThanOrEqual(min);
  expect(value).toBeLessThanOrEqual(max);
};

export const relativeTop = async (parent: Locator, child: Locator) => {
  const p = (await parent.boundingBox())!.y;
  const c = (await child.boundingBox())!.y;
  return c - p;
};

const isPointedLocator = (loc: Locator, x: number, y: number) => {
  return loc.evaluate(
    (e, [x, y]) => {
      const pointed = document.elementFromPoint(x, y);
      return !!pointed && (e === pointed || e.contains(pointed));
    },
    [x, y],
  );
};

export const findFirstVisibleItem = async (scrollable: ScrollableLocator) => {
  const { x, y } = (await scrollable.boundingBox())!;
  const all = await getItems(scrollable).all();
  for (let i = 0; i < all.length; i++) {
    const loc = all[i];
    if (await isPointedLocator(loc, x + 2, y + 2)) {
      return loc;
    }
  }
  throw new Error("locator not found");
};

export const getScrollTop = (scrollable: ScrollableLocator) => {
  return scrollable.evaluate((e) => e.scrollTop);
};

export const scrollWithTouch = (
  scrollable: ScrollableLocator,
  target: {
    fromX: number;
    toX: number;
    fromY: number;
    toY: number;
    momentumScroll?: boolean;
  },
): Promise<void> => {
  return scrollable.evaluate(
    async (
      e,
      { fromX, toX, fromY, toY, momentumScroll: isMomentumScrolling = false },
    ) => {
      const diffY = fromY - toY;
      const diffX = fromX - toX;

      let count = 1;
      const MAX_COUNT = 60;

      const createTouchEvent = (
        name: "touchstart" | "touchmove" | "touchend",
      ): TouchEvent => {
        // const touchObj = new Touch({
        //   identifier: Date.now(),
        //   target: e,
        //   clientX: fromX,
        //   clientY: fromY,
        //   radiusX: 2.5,
        //   radiusY: 2.5,
        //   rotationAngle: 10,
        //   force: 0.5,
        // });
        return new TouchEvent(name, {
          bubbles: true,
          cancelable: true,
          // touches: [touchObj],
          // targetTouches: [],
          // changedTouches: [],
        });
      };

      const touchStart = () => {
        e.dispatchEvent(createTouchEvent("touchstart"));
      };
      const touchEnd = () => {
        e.dispatchEvent(createTouchEvent("touchend"));
      };
      const touchMove = () => {
        setTimeout(() => {
          e.dispatchEvent(createTouchEvent("touchmove"));
          if (count > MAX_COUNT) {
            // NOP
          } else {
            if (diffY) {
              e.scrollTop += diffY / MAX_COUNT;
            }
            if (diffX) {
              e.scrollLeft += diffX / MAX_COUNT;
            }
          }

          count++;
        }, 500 / MAX_COUNT);
      };

      e.addEventListener(
        "touchstart",
        () => {
          touchMove();
        },
        { once: true, passive: true },
      );

      let resolve: () => void;
      let isScrollStarted = false;
      let isScrollEnded = false;
      const onScroll = () => {
        if (isScrollEnded) return;

        if (isMomentumScrolling && !isScrollStarted) {
          touchEnd();
        }
        isScrollStarted = true;

        if (count >= MAX_COUNT) {
          isScrollEnded = true;
          e.removeEventListener("scroll", onScroll);

          if (isMomentumScrolling) {
            resolve();
          } else {
            setTimeout(() => {
              touchEnd();
              resolve();
            }, 500);
          }
        } else {
          touchMove();
        }
      };
      e.addEventListener("scroll", onScroll, { passive: true });

      touchStart();
      return new Promise<void>((r) => (resolve = r));
    },
    target,
  );
};

export const listenScrollEnd = (
  component: ScrollableLocator,
  timeout = 2000,
): Promise<number> => {
  return component.evaluate((c, t) => {
    const start = performance.now();
    let timer: null | ReturnType<typeof setTimeout> = null;
    let elapsed = 0;

    return new Promise<number>((resolve) => {
      const cb = () => {
        elapsed = performance.now() - start;
        if (timer !== null) {
          clearTimeout(timer);
        }
        timer = setTimeout(() => {
          c.removeEventListener("scrollend", cb);
          resolve(elapsed);
        }, t);
      };
      c.addEventListener("scrollend", cb);
    });
  }, timeout);
};
