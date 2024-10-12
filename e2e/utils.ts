import { ElementHandle, Page, expect } from "@playwright/test";

export const storyUrl = (id: string) =>
  `http://localhost:6006/iframe.html?id=${id}&viewMode=story`;

export const getScrollable = async (page: Page) => {
  return page.waitForSelector(
    '*[style*="overflow-y: auto"],*[style*="overflow-y:auto"],*[style*="overflow-x: auto"],*[style*="overflow-x:auto"],*[style*="overflow: auto"],*[style*="overflow:auto"]'
  );
};

export const getVirtualizer = async (page: Page) => {
  const selector = '*[style*="flex: 0 0 auto"]';
  const component = await page.waitForSelector(selector, { state: "attached" });
  await component.evaluate((e) => (e.style.visibility = "visible"));
  await page.waitForSelector(selector);
  return component;
};

export const expectInRange = (
  value: number,
  { max, min }: { min: number; max: number }
) => {
  // sometimes it may not be 0 because of sub pixel value
  expect(value).toBeGreaterThanOrEqual(min);
  expect(value).toBeLessThan(max);
};

export const approxymate = (v: number): number => Math.round(v / 100) * 100;

export const clearInput = (input: ElementHandle<HTMLElement | SVGElement>) =>
  input.evaluate((element) => ((element as HTMLInputElement).value = ""));

export const clearTimer = async (page: Page) => {
  await page.evaluate(() => {
    // stop all timer
    for (let i = 1; i < 65536; i++) {
      clearTimeout(i);
    }
  });
};

export const getFirstItem = (
  scrollable: ElementHandle<HTMLElement | SVGElement>
) => {
  return scrollable.evaluate((s) => {
    const rect = s.getBoundingClientRect();
    const el = document.elementFromPoint(rect.left + 2, rect.top + 2)!;
    const elRect = el.getBoundingClientRect();
    return {
      text: el.textContent!,
      top: elRect.top - rect.top,
      left: elRect.left - rect.left,
    };
  });
};

export const getLastItem = (
  scrollable: ElementHandle<HTMLElement | SVGElement>,
  offset: { x?: number; y?: number } = {}
) => {
  return scrollable.evaluate((s, { x: offsetX = 2, y: offsetY = 2 }) => {
    const rect = s.getBoundingClientRect();
    const el = document.elementFromPoint(
      rect.left + offsetX,
      rect.bottom - offsetY
    )!;
    const elRect = el.getBoundingClientRect();
    return {
      text: el.textContent!,
      bottom: elRect.bottom - rect.bottom,
      height: elRect.height,
    };
  }, offset);
};

export const getFirstItemRtl = (
  scrollable: ElementHandle<HTMLElement | SVGElement>
) => {
  return scrollable.evaluate((s) => {
    const rect = s.getBoundingClientRect();
    const el = document.elementFromPoint(rect.right - 2, rect.top + 2)!;
    return {
      text: el.textContent!,
      top: el.getBoundingClientRect().top - rect.top,
      right: el.getBoundingClientRect().right - rect.right,
    };
  });
};

export const getWindowFirstItem = (
  page: Page,
  offset: { x?: number; y?: number } = {}
) => {
  return page.evaluate(({ x: offsetX = 2, y: offsetY = 2 }) => {
    const top = 0;
    const left = 0;
    const el = document.elementFromPoint(left + offsetX, top + offsetY)!;
    const elRect = el.getBoundingClientRect();
    return {
      text: el.textContent!,
      top: elRect.top - top,
      left: elRect.left - left,
    };
  }, offset);
};

export const getWindowLastItem = (
  page: Page,
  offset: { x?: number; y?: number } = {}
) => {
  return page.evaluate(({ x: offsetX = 2, y: offsetY = 2 }) => {
    const bottom = 0 + window.innerHeight;
    const left = 0;
    const el = document.elementFromPoint(left + offsetX, bottom - offsetY)!;
    const elRect = el.getBoundingClientRect();
    return {
      text: el.textContent!,
      bottom: elRect.bottom - bottom,
      height: elRect.height,
    };
  }, offset);
};

export const getScrollTop = (
  scrollable: ElementHandle<HTMLElement | SVGElement>
) => {
  return scrollable.evaluate((e) => e.scrollTop);
};

export const getScrollBottom = (
  scrollable: ElementHandle<HTMLElement | SVGElement>
) => {
  return scrollable.evaluate((e) => e.scrollHeight - e.scrollTop);
};

export const getScrollLeft = (
  scrollable: ElementHandle<HTMLElement | SVGElement>
) => {
  return scrollable.evaluate((e) => e.scrollLeft);
};

export const getScrollRight = (
  scrollable: ElementHandle<HTMLElement | SVGElement>
) => {
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
  scrollable: ElementHandle<HTMLElement | SVGElement>,
  offset: number
) => {
  return scrollable.evaluate((e, offset) => {
    e.scrollTop = offset;
  }, offset);
};

export const scrollBy = (
  scrollable: ElementHandle<HTMLElement | SVGElement>,
  offset: number
) => {
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
  scrollable: ElementHandle<HTMLElement | SVGElement>
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
  scrollable: ElementHandle<HTMLElement | SVGElement>
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

export const scrollToLeft = async (
  scrollable: ElementHandle<HTMLElement | SVGElement>
) => {
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
  scrollable: ElementHandle<HTMLElement | SVGElement>,
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
