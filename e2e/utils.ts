import { expect } from "@playwright/test";
import type { Locator, Page } from "@playwright/test";

export const storyUrl = (id: `${string}-${string}--${string}`) =>
  `http://localhost:6006/iframe.html?id=${id}&viewMode=story`;

export const setRTL = async (page: Page) => {
  await page.evaluate(() => {
    document.documentElement.dir = "rtl";
  });
};

declare const scrollableSymbol: unique symbol;
type ScrollableLocator = Locator & { [scrollableSymbol]: never };

export const getScrollable = async (page: Page): Promise<ScrollableLocator> => {
  const locator = page.locator(
    '*[style*="overflow-y: auto"],*[style*="overflow-y:auto"],*[style*="overflow-x: auto"],*[style*="overflow-x:auto"],*[style*="overflow: auto"],*[style*="overflow:auto"]'
  );
  await locator.waitFor();
  return locator as ScrollableLocator;
};

export const getVirtualizer = async (page: Page) => {
  const locator = page.locator('*[style*="flex: 0 0 auto"]');
  await locator.waitFor();
  return locator;
};

export const getItems = (locator: Locator) => {
  return locator.locator('*[style*="top"],*[style*="left"]');
};

export const expectInRange = (
  value: number,
  { max, min }: { min: number; max: number }
) => {
  // sometimes it may not be 0 because of sub pixel value
  expect(value).toBeGreaterThanOrEqual(min);
  expect(value).toBeLessThanOrEqual(max);
};

export const approxymate = (v: number): number => Math.round(v / 100) * 100;

export const clearTimer = async (page: Page) => {
  await page.evaluate(() => {
    // stop all timer
    for (let i = 1; i < 65536; i++) {
      clearTimeout(i);
    }
  });
};

export const windowTop = async (child: Locator) => {
  return (await child.boundingBox())!.y;
};

export const windowBottom = async (child: Locator) => {
  const rect = (await child.boundingBox())!;

  return (
    rect.y +
    rect.height -
    (0 + (await child.evaluate(() => window.innerHeight)))
  );
};

export const relativeTop = async (parent: Locator, child: Locator) => {
  const p = (await parent.boundingBox())!.y;
  const c = (await child.boundingBox())!.y;
  return c - p;
};

export const relativeLeft = async (parent: Locator, child: Locator) => {
  const p = (await parent.boundingBox())!.x;
  const c = (await child.boundingBox())!.x;
  return c - p;
};

export const relativeBottom = async (parent: Locator, child: Locator) => {
  const { y: pY, height: pHeight } = (await parent.boundingBox())!;
  const { y: cY, height: cHeight } = (await child.boundingBox())!;
  return pY + pHeight - (cY + cHeight);
};

export const relativeRight = async (parent: Locator, child: Locator) => {
  const { x: pX, width: pWidth } = (await parent.boundingBox())!;
  const { x: cX, width: cWidth } = (await child.boundingBox())!;
  return pX + pWidth - (cX + cWidth);
};

export const setDisplayNone = (component: Locator) => {
  return component.evaluate((s) => {
    s.style.display = "none";
  });
};

export const getStyleValue = <T extends keyof CSSStyleDeclaration>(
  locator: Locator,
  key: T
) => {
  return locator.evaluate((e, key) => e.style[key], key);
};

export const getComputedStyleValue = <T extends keyof CSSStyleDeclaration>(
  locator: Locator,
  key: T
) => {
  return locator.evaluate((e, key) => getComputedStyle(e)[key], key);
};

const isPointedLocator = (loc: Locator, x: number, y: number) => {
  return loc.evaluate(
    (e, [x, y]) => {
      const pointed = document.elementFromPoint(x, y);
      return !!pointed && (e === pointed || e.contains(pointed));
    },
    [x, y]
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

export const findLastVisibleItem = async (scrollable: ScrollableLocator) => {
  const { x, y, height } = (await scrollable.boundingBox())!;
  const all = await getItems(scrollable).all();
  for (let i = all.length - 1; i >= 0; i--) {
    const loc = all[i];
    if (await isPointedLocator(loc, x + 2, y + height - 2)) {
      return loc;
    }
  }
  throw new Error("locator not found");
};

export const getScrollTop = (scrollable: ScrollableLocator) => {
  return scrollable.evaluate((e) => e.scrollTop);
};

export const getScrollBottom = (scrollable: ScrollableLocator) => {
  return scrollable.evaluate((e) => e.scrollHeight - e.scrollTop);
};

export const getScrollLeft = (scrollable: ScrollableLocator) => {
  return scrollable.evaluate((e) => e.scrollLeft);
};

export const getScrollRight = (scrollable: ScrollableLocator) => {
  return scrollable.evaluate((e) => e.scrollWidth - e.scrollLeft);
};

export const getWindowScrollTop = (page: Page) => {
  return page.evaluate(() => window.scrollY);
};

export const getWindowScrollBottom = (page: Page) => {
  return page.evaluate(() => document.body.scrollHeight - window.scrollY);
};

export const getWindowScrollLeft = (page: Page) => {
  return page.evaluate(() => window.scrollX);
};

export const getWindowScrollRight = (page: Page) => {
  return page.evaluate(() => document.body.scrollWidth - window.scrollX);
};

export const scrollTo = (
  scrollable: ScrollableLocator,
  offset: number,
  key: "Top" | "Left" = "Top"
) => {
  return scrollable.evaluate(
    (e, [offset, key]) => {
      e[key] = offset;
    },
    [offset, `scroll${key}`]
  );
};

export const scrollBy = (scrollable: ScrollableLocator, offset: number) => {
  return scrollable.evaluate((e, offset) => {
    e.scrollTop += offset;
  }, offset);
};

export const windowScrollBy = (page: Page, offset: number) => {
  return page.evaluate((offset) => {
    window.scrollBy(0, offset);
  }, offset);
};

export const scrollToBottom = (
  scrollable: ScrollableLocator
): Promise<void> => {
  return scrollable.evaluate((e) => {
    return new Promise<void>((resolve) => {
      let timer: ReturnType<typeof setTimeout> | null = null;

      const onScroll = () => {
        e.scrollTop = e.scrollHeight;

        if (timer !== null) {
          clearTimeout(timer);
        }
        timer = setTimeout(() => {
          if (e.scrollTop + (e as HTMLElement).offsetHeight >= e.scrollHeight) {
            e.removeEventListener("scroll", onScroll);
            resolve();
          } else {
            onScroll();
          }
        }, 50);
      };
      e.addEventListener("scroll", onScroll);

      onScroll();
    });
  });
};

export const scrollToRight = async (
  scrollable: ScrollableLocator
): Promise<void> => {
  return scrollable.evaluate((e) => {
    return new Promise<void>((resolve) => {
      let timer: ReturnType<typeof setTimeout> | null = null;

      const onScroll = () => {
        e.scrollLeft = e.scrollWidth;

        if (timer !== null) {
          clearTimeout(timer);
        }
        timer = setTimeout(() => {
          if (e.scrollLeft + (e as HTMLElement).offsetWidth >= e.scrollWidth) {
            e.removeEventListener("scroll", onScroll);
            resolve();
          } else {
            onScroll();
          }
        }, 50);
      };
      e.addEventListener("scroll", onScroll);

      onScroll();
    });
  });
};

export const scrollToLeft = async (scrollable: ScrollableLocator) => {
  return scrollable.evaluate((e) => {
    return new Promise<void>((resolve) => {
      let timer: ReturnType<typeof setTimeout> | null = null;

      const onScroll = () => {
        e.scrollLeft = -e.scrollWidth;

        if (timer !== null) {
          clearTimeout(timer);
        }
        timer = setTimeout(() => {
          if (e.scrollLeft - (e as HTMLElement).offsetWidth <= -e.scrollWidth) {
            e.removeEventListener("scroll", onScroll);
            resolve();
          } else {
            onScroll();
          }
        }, 50);
      };
      e.addEventListener("scroll", onScroll);

      onScroll();
    });
  });
};

export const windowScrollToBottom = async (page: Page) => {
  return page.evaluate(() => {
    return new Promise<void>((resolve) => {
      let timer: ReturnType<typeof setTimeout> | null = null;

      const onScroll = () => {
        window.scrollTo(0, document.body.scrollHeight);

        if (timer !== null) {
          clearTimeout(timer);
        }
        timer = setTimeout(() => {
          if (
            window.scrollY + window.innerHeight >=
            document.body.scrollHeight
          ) {
            window.removeEventListener("scroll", onScroll);
            resolve();
          } else {
            onScroll();
          }
        }, 50);
      };
      window.addEventListener("scroll", onScroll);

      onScroll();
    });
  });
};

export const windowScrollToRight = async (page: Page) => {
  return page.evaluate(() => {
    return new Promise<void>((resolve) => {
      let timer: ReturnType<typeof setTimeout> | null = null;

      const onScroll = () => {
        window.scrollTo(document.body.scrollWidth, 0);

        if (timer !== null) {
          clearTimeout(timer);
        }
        timer = setTimeout(() => {
          if (window.scrollX + window.innerWidth >= document.body.scrollWidth) {
            window.removeEventListener("scroll", onScroll);
            resolve();
          } else {
            onScroll();
          }
        }, 50);
      };
      window.addEventListener("scroll", onScroll);

      onScroll();
    });
  });
};

export const windowScrollToLeft = async (page: Page) => {
  return page.evaluate(() => {
    return new Promise<void>((resolve) => {
      let timer: ReturnType<typeof setTimeout> | null = null;

      const onScroll = () => {
        window.scrollTo(-document.body.scrollWidth, 0);

        if (timer !== null) {
          clearTimeout(timer);
        }
        timer = setTimeout(() => {
          if (
            window.scrollX - window.innerWidth <=
            -document.body.scrollWidth
          ) {
            window.removeEventListener("scroll", onScroll);
            resolve();
          } else {
            onScroll();
          }
        }, 50);
      };
      window.addEventListener("scroll", onScroll);

      onScroll();
    });
  });
};

export const scrollWithTouch = (
  scrollable: ScrollableLocator,
  target: {
    fromX: number;
    toX: number;
    fromY: number;
    toY: number;
    momentumScroll?: boolean;
  }
): Promise<void> => {
  return scrollable.evaluate(
    async (
      e,
      { fromX, toX, fromY, toY, momentumScroll: isMomentumScrolling = false }
    ) => {
      const diffY = fromY - toY;
      const diffX = fromX - toX;

      let count = 1;
      const MAX_COUNT = 60;

      const createTouchEvent = (
        name: "touchstart" | "touchmove" | "touchend"
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
        { once: true, passive: true }
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
    target
  );
};

export const listenScrollCount = (
  component: ScrollableLocator,
  timeout = 2000
): Promise<number> => {
  return component.evaluate((c, t) => {
    let timer: null | ReturnType<typeof setTimeout> = null;
    let called = 0;

    return new Promise<number>((resolve) => {
      const cb = () => {
        called++;
        if (timer !== null) {
          clearTimeout(timer);
        }
        timer = setTimeout(() => {
          c.removeEventListener("scroll", cb);
          resolve(called);
        }, t);
      };
      c.addEventListener("scroll", cb);
    });
  }, timeout);
};
