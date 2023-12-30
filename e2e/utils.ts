import { ElementHandle, expect } from "@playwright/test";

export const storyUrl = (id: string) =>
  `http://localhost:6006/iframe.html?id=${id}&viewMode=story`;

export const scrollableSelector = '*[style*="overflow"]';

export const expectNearlyZero = (value: number, max: number = 1, min = 0) => {
  // sometimes it may not be 0 because of sub pixel value
  expect(value).toBeGreaterThanOrEqual(min);
  expect(value).toBeLessThan(max);
};

export const approxymate = (v: number): number => Math.round(v / 100) * 100;

export const clearInput = (input: ElementHandle<HTMLElement | SVGElement>) =>
  input.evaluate((element) => ((element as HTMLInputElement).value = ""));

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

export const scrollBy = (
  scrollable: ElementHandle<HTMLElement | SVGElement>,
  offset: number
) => {
  return scrollable.evaluate((e, offset) => {
    e.scrollTop += offset;
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

export const windowScrollToBottom = async (
  scrollable: ElementHandle<HTMLElement | SVGElement>
) => {
  await scrollable.evaluate((e) => {
    window.scrollTo(0, document.body.scrollHeight);
  });
  await scrollable.waitForElementState("stable");
  // FIXME: scroll twice to reach definitely
  await scrollable.evaluate((e) => {
    window.scrollTo(0, document.body.scrollHeight);
  });
  await scrollable.waitForElementState("stable");
};

export const windowScrollToRight = async (
  scrollable: ElementHandle<HTMLElement | SVGElement>
) => {
  await scrollable.evaluate((e) => {
    window.scrollTo(document.body.scrollWidth, 0);
  });
  await scrollable.waitForElementState("stable");
  // FIXME: scroll twice to reach definitely
  await scrollable.evaluate((e) => {
    window.scrollTo(document.body.scrollWidth, 0);
  });
  await scrollable.waitForElementState("stable");
};

export const windowScrollToLeft = async (
  scrollable: ElementHandle<HTMLElement | SVGElement>
) => {
  await scrollable.evaluate((e) => {
    window.scrollTo(-document.body.scrollWidth, 0);
  });
  await scrollable.waitForElementState("stable");
  // FIXME: scroll twice to reach definitely
  await scrollable.evaluate((e) => {
    window.scrollTo(-document.body.scrollWidth, 0);
  });
  await scrollable.waitForElementState("stable");
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
