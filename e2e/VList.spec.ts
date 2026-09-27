import { test, expect, type Locator, type Page } from "@playwright/test";
import {
  storyUrl,
  scrollToBottom,
  scrollToRight,
  scrollBy,
  getScrollTop,
  getScrollLeft,
  getScrollBottom,
  getScrollRight,
  expectInRange,
  scrollWithTouch,
  getVirtualizer,
  getScrollable,
  listenScrollEnd,
  relativeTop,
  relativeBottom,
  getItems,
  findFirstVisibleItem,
  findLastVisibleItem,
  isVerticalScrollBarVisible,
} from "./utils";

const SMOOTH_SCROLL_MS = 100;

test.describe("check if scroll jump compensation works", () => {
  test("vertical start -> end", async ({ page }) => {
    await page.goto(storyUrl("basics-vlist--default"));
    const component = await getScrollable(page);

    // check if start is displayed
    await expect(component.getByText("0", { exact: true })).toBeVisible();

    // check if offset from start is always keeped
    await component.click();
    const min = 200;
    const initial = await getScrollTop(component);
    let prev = initial;
    const start = performance.now();
    while ((performance.now() - start) / 1000 < 4) {
      await page.keyboard.press("ArrowDown", { delay: 10 });
      const offset = await getScrollTop(component);
      expect(offset).toBeGreaterThanOrEqual(prev);
      prev = offset;
    }
    expect(prev).toBeGreaterThan(initial + min);
  });

  test("vertical end -> start", async ({ page }) => {
    await page.goto(storyUrl("basics-vlist--default"));
    const component = await getScrollable(page);

    // check if start is displayed
    await expect(component.getByText("0", { exact: true })).toBeVisible();

    // scroll to the end
    await scrollToBottom(component);

    // check if offset from end is always keeped
    await component.click();
    const min = 200;
    const initial = await getScrollBottom(component);
    let prev = initial;
    const start = performance.now();
    while ((performance.now() - start) / 1000 < 4) {
      await page.keyboard.press("ArrowUp", { delay: 10 });
      const offset = await getScrollBottom(component);
      expect(offset).toBeGreaterThanOrEqual(prev);
      prev = offset;
    }
    expect(prev).toBeGreaterThan(initial + min);
  });

  test("horizontal start -> end", async ({ page }) => {
    await page.goto(storyUrl("basics-vlist--horizontal"));
    const component = await getScrollable(page);

    // check if start is displayed
    await expect(
      component.getByText("Column 0", { exact: true }),
    ).toBeVisible();

    // check if offset from start is always keeped
    await component.click();
    const min = 200;
    const initial = await getScrollLeft(component);
    let prev = initial;
    const start = performance.now();
    while ((performance.now() - start) / 1000 < 4) {
      await page.keyboard.press("ArrowRight", { delay: 10 });
      const offset = await getScrollLeft(component);
      expect(offset).toBeGreaterThanOrEqual(prev);
      prev = offset;
    }
    expect(prev).toBeGreaterThan(initial + min);
  });

  test("horizontal end -> start", async ({ page }) => {
    await page.goto(storyUrl("basics-vlist--horizontal"));
    const component = await getScrollable(page);

    // check if start is displayed
    await expect(
      component.getByText("Column 0", { exact: true }),
    ).toBeVisible();

    // scroll to the end
    await scrollToRight(component);

    // check if offset from end is always keeped
    await component.click();
    const min = 200;
    const initial = await getScrollRight(component);
    let prev = initial;
    const start = performance.now();
    while ((performance.now() - start) / 1000 < 4) {
      await page.keyboard.press("ArrowLeft", { delay: 10 });
      const offset = await getScrollRight(component);
      expect(offset).toBeGreaterThanOrEqual(prev);
      prev = offset;
    }
    expect(prev).toBeGreaterThan(initial + min);
  });
});

test.describe("check if scrollToIndex works", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(storyUrl("basics-vlist--scroll-to"));
  });

  test.describe("align start", () => {
    test("mid", async ({ page }) => {
      const component = await getScrollable(page);

      // check if start is displayed
      await expect(component.getByText("0", { exact: true })).toBeVisible();

      const button = page.getByRole("button", { name: "scroll to index" });
      const input = page.getByRole("spinbutton").first();

      await input.clear();
      await input.fill("700");
      await button.click();

      // Check if scrolled precisely
      const firstItem = component.getByText("700", { exact: true });
      await expect(firstItem).toBeVisible();
      expect(await relativeTop(component, firstItem)).toEqual(0);

      // Check if unnecessary items are not rendered
      await expect(
        component.getByText("650", { exact: true }),
      ).not.toBeVisible();
      await expect(
        component.getByText("750", { exact: true }),
      ).not.toBeVisible();
    });

    test("start", async ({ page }) => {
      const component = await getScrollable(page);

      // check if start is displayed
      await expect(component.getByText("0", { exact: true })).toBeVisible();

      const button = page.getByRole("button", { name: "scroll to index" });
      const input = page.getByRole("spinbutton").first();

      await input.clear();
      await input.fill("500");
      await button.click();

      await expect(component.getByText("500", { exact: true })).toBeVisible();

      await input.clear();
      await input.fill("0");
      await button.click();

      // Check if scrolled precisely
      const firstItem = component.getByText("0", { exact: true });
      await expect(firstItem).toBeVisible();
      expect(await relativeTop(component, firstItem)).toEqual(0);

      // Check if unnecessary items are not rendered
      await expect(
        component.getByText("50", { exact: true }),
      ).not.toBeVisible();
    });

    test("end", async ({ page }) => {
      const component = await getScrollable(page);

      // check if start is displayed
      await expect(component.getByText("0", { exact: true })).toBeVisible();

      const button = page.getByRole("button", { name: "scroll to index" });
      const input = page.getByRole("spinbutton").first();

      await input.clear();
      await input.fill("999");
      await button.click();

      // Check if scrolled precisely
      const lastItem = component.getByText("999", { exact: true });
      await expect(lastItem).toBeVisible();
      expectInRange(await relativeBottom(component, lastItem), {
        min: -0.9,
        max: 1,
      });

      // Check if unnecessary items are not rendered
      await expect(
        component.getByText("949", { exact: true }),
      ).not.toBeVisible();
    });
  });

  test.describe("align end", () => {
    test("mid", async ({ page }) => {
      const component = await getScrollable(page);

      // check if start is displayed
      await expect(component.getByText("0", { exact: true })).toBeVisible();

      await page.getByRole("radio", { name: "end" }).click();
      const button = page.getByRole("button", { name: "scroll to index" });
      const input = page.getByRole("spinbutton").first();

      await input.clear();
      await input.fill("700");
      await button.click();

      // Check if scrolled precisely
      const lastItem = component.getByText("700", { exact: true });
      await expect(lastItem).toBeVisible();
      expectInRange(await relativeBottom(component, lastItem), {
        min: -0.5,
        max: 1,
      });

      // Check if unnecessary items are not rendered
      await expect(
        component.getByText("650", { exact: true }),
      ).not.toBeVisible();
      await expect(
        component.getByText("750", { exact: true }),
      ).not.toBeVisible();
    });

    test("start", async ({ page }) => {
      const component = await getScrollable(page);

      // check if start is displayed
      await expect(component.getByText("0", { exact: true })).toBeVisible();

      await page.getByRole("radio", { name: "end" }).click();
      const button = page.getByRole("button", { name: "scroll to index" });
      const input = page.getByRole("spinbutton").first();

      await input.clear();
      await input.fill("500");
      await button.click();

      await expect(component.getByText("500", { exact: true })).toBeVisible();

      await input.clear();
      await input.fill("0");
      await button.click();

      // Check if scrolled precisely
      const firstItem = component.getByText("0", { exact: true });
      await expect(firstItem).toBeVisible();
      expect(await relativeTop(component, firstItem)).toEqual(0);

      // Check if unnecessary items are not rendered
      await expect(
        component.getByText("50", { exact: true }),
      ).not.toBeVisible();
    });

    test("end", async ({ page }) => {
      const component = await getScrollable(page);

      // check if start is displayed
      await expect(component.getByText("0", { exact: true })).toBeVisible();

      await page.getByRole("radio", { name: "end" }).click();
      const button = page.getByRole("button", { name: "scroll to index" });
      const input = page.getByRole("spinbutton").first();

      await input.clear();
      await input.fill("999");
      await button.click();

      // Check if scrolled precisely
      const lastItem = component.getByText("999", { exact: true });
      await expect(lastItem).toBeVisible();
      expectInRange(await relativeBottom(component, lastItem), {
        min: -0.5,
        max: 1,
      });

      // Check if unnecessary items are not rendered
      await expect(
        component.getByText("949", { exact: true }),
      ).not.toBeVisible();
    });
  });

  test.describe("smooth", () => {
    test("from start (align start)", async ({ page, browserName }) => {
      const component = await getScrollable(page);

      // check if start is displayed
      await expect(component.getByText("0", { exact: true })).toBeVisible();

      await page.getByRole("checkbox", { name: "smooth" }).click();

      const button = page.getByRole("button", { name: "scroll to index" });
      const input = page.getByRole("spinbutton").first();

      const scrollListener = listenScrollEnd(component);

      await input.clear();
      await input.fill("700");
      await button.click();

      await page.waitForTimeout(100);

      const elapsed = await scrollListener;

      // Check if this is smooth scrolling
      expect(elapsed).toBeGreaterThan(SMOOTH_SCROLL_MS);

      // Check if scrolled precisely
      const firstItem = component.getByText("700", { exact: true });
      await expect(firstItem).toBeVisible();
      expectInRange(await relativeTop(component, firstItem), {
        min: 0,
        max: 1,
      });

      // Check if unnecessary items are not rendered
      await expect(
        component.getByText("650", { exact: true }),
      ).not.toBeVisible();
      await expect(
        component.getByText("750", { exact: true }),
      ).not.toBeVisible();
    });

    test("from start (align end)", async ({ page, browserName }) => {
      const component = await getScrollable(page);

      // check if start is displayed
      await expect(component.getByText("0", { exact: true })).toBeVisible();

      await page.getByRole("radio", { name: "end" }).click();
      await page.getByRole("checkbox", { name: "smooth" }).click();

      const button = page.getByRole("button", { name: "scroll to index" });
      const input = page.getByRole("spinbutton").first();

      const scrollListener = listenScrollEnd(component);

      await input.clear();
      await input.fill("700");
      await button.click();

      await page.waitForTimeout(100);

      const elapsed = await scrollListener;

      // Check if this is smooth scrolling
      expect(elapsed).toBeGreaterThan(SMOOTH_SCROLL_MS);

      // Check if scrolled precisely
      const lastItem = component.getByText("700", { exact: true });
      await expect(lastItem).toBeVisible();
      expectInRange(await relativeBottom(component, lastItem), {
        min: 0,
        max: 1,
      });

      // Check if unnecessary items are not rendered
      await expect(
        component.getByText("650", { exact: true }),
      ).not.toBeVisible();
      await expect(
        component.getByText("750", { exact: true }),
      ).not.toBeVisible();
    });

    test("from end (align start)", async ({ page, browserName }) => {
      const component = await getScrollable(page);

      // check if start is displayed
      await expect(component.getByText("0", { exact: true })).toBeVisible();

      const button = page.getByRole("button", { name: "scroll to index" });
      const input = page.getByRole("spinbutton").first();

      // scroll to the bottom
      await input.clear();
      await input.fill("999");
      await button.click();
      await expect(component.getByText("999", { exact: true })).toBeVisible();

      // smooth scroll up
      await page.getByRole("checkbox", { name: "smooth" }).click();

      const scrollListener = listenScrollEnd(component);

      await input.clear();
      await input.fill("300");
      await button.click();

      await page.waitForTimeout(100);

      const elapsed = await scrollListener;

      // Check if this is smooth scrolling
      expect(elapsed).toBeGreaterThan(SMOOTH_SCROLL_MS);

      // Check if scrolled precisely
      const firstItem = component.getByText("300", { exact: true });
      await expect(firstItem).toBeVisible();
      expectInRange(await relativeTop(component, firstItem), {
        min: -1,
        max: 1,
      });

      // Check if unnecessary items are not rendered
      await expect(
        component.getByText("250", { exact: true }),
      ).not.toBeVisible();
      await expect(
        component.getByText("350", { exact: true }),
      ).not.toBeVisible();
    });

    test("from end (align end)", async ({ page, browserName }) => {
      const component = await getScrollable(page);

      // check if start is displayed
      await expect(component.getByText("0", { exact: true })).toBeVisible();

      const button = page.getByRole("button", { name: "scroll to index" });
      const input = page.getByRole("spinbutton").first();

      // scroll to the bottom
      await input.clear();
      await input.fill("999");
      await button.click();
      await expect(component.getByText("999", { exact: true })).toBeVisible();

      // smooth scroll up
      await page.getByRole("radio", { name: "end" }).click();
      await page.getByRole("checkbox", { name: "smooth" }).click();

      const scrollListener = listenScrollEnd(component);

      await input.clear();
      await input.fill("300");
      await button.click();

      await page.waitForTimeout(100);

      const elapsed = await scrollListener;

      // Check if this is smooth scrolling
      expect(elapsed).toBeGreaterThan(SMOOTH_SCROLL_MS);

      // Check if scrolled precisely
      const lastItem = component.getByText("300", { exact: true });
      await expect(lastItem).toBeVisible();
      expectInRange(await relativeBottom(component, lastItem), {
        min: -1,
        max: 1,
      });

      // Check if unnecessary items are not rendered
      await expect(
        component.getByText("250", { exact: true }),
      ).not.toBeVisible();
      await expect(
        component.getByText("350", { exact: true }),
      ).not.toBeVisible();
    });

    test("scroll start item to end in reverse", async ({ page }) => {
      const component = await getScrollable(page);

      // check if start is displayed
      await expect(component.getByText("0", { exact: true })).toBeVisible();

      const button = page.getByRole("button", { name: "scroll to index" });
      const input = page.getByRole("spinbutton").first();

      // scroll to the bottom
      await input.clear();
      await input.fill("999");
      await button.click();
      const initialLastItem = component.getByText("999", { exact: true });
      await expect(initialLastItem).toBeVisible();
      expectInRange(await relativeBottom(component, initialLastItem), {
        min: 0,
        max: 1,
      });

      await page.getByRole("radio", { name: "end" }).click();
      await page.getByRole("checkbox", { name: "smooth" }).click();

      for (let i = 1; i <= 3; i++) {
        const initialFirstNumber = Number(
          await (await findFirstVisibleItem(component)).textContent(),
        );

        // smooth scroll up
        const scrollListener = listenScrollEnd(component);

        const targetItemText = String(initialFirstNumber);
        await input.clear();
        await input.fill(targetItemText);
        await button.click();

        await scrollListener;

        // Check if scrolled precisely
        const lastItem = component.getByText(targetItemText, { exact: true });
        await expect(lastItem).toBeVisible();
        expectInRange(await relativeBottom(component, lastItem), {
          min: -1,
          max: i * 2, // TODO improve
        });
      }
    });
  });
});

test.describe("check if item shift compensation works", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(storyUrl("basics-vlist--increasing-items"));
  });

  test("keep end at mid when add to/remove from end", async ({ page }) => {
    const component = await getScrollable(page);

    const updateButton = page.getByRole("button", { name: "update" });

    // fill list and move to mid
    for (let i = 0; i < 20; i++) {
      await updateButton.click();
    }
    await scrollBy(component, 400);
    await page.waitForTimeout(300);

    const topItem = await findFirstVisibleItem(component);
    await expect(topItem).not.toHaveText("0");
    const topItemTop = await relativeTop(component, topItem);
    expect((await topItem.textContent())!.length).toBeLessThanOrEqual(2);

    // add
    await page.getByRole("radio", { name: "increase" }).click();
    await updateButton.click();
    await page.waitForTimeout(100);
    // check if visible item is keeped
    expect(await relativeTop(component, topItem)).toEqual(topItemTop);

    // remove
    await page.getByRole("radio", { name: "decrease" }).click();
    await updateButton.click();
    await page.waitForTimeout(100);
    // check if visible item is keeped
    expect(await relativeTop(component, topItem)).toEqual(topItemTop);
  });

  test("keep start at mid when add to/remove from start", async ({ page }) => {
    const component = await getScrollable(page);

    const updateButton = page.getByRole("button", { name: "update" });

    // fill list and move to mid
    for (let i = 0; i < 20; i++) {
      await updateButton.click();
    }
    await scrollBy(component, 800);
    await page.waitForTimeout(300);

    const topItem = await findFirstVisibleItem(component);
    await expect(topItem).not.toHaveText("0");
    const topItemTop = await relativeTop(component, topItem);
    expect((await topItem.textContent())!.length).toBeLessThanOrEqual(2);

    // add
    await page.getByRole("checkbox", { name: "prepend" }).click();
    await page.getByRole("radio", { name: "increase" }).click();
    await updateButton.click();
    await page.waitForTimeout(100);
    // check if visible item is keeped
    expect(await relativeTop(component, topItem)).toEqual(topItemTop);

    // remove
    await page.getByRole("radio", { name: "decrease" }).click();
    await updateButton.click();
    await page.waitForTimeout(100);
    // check if visible item is keeped
    expect(await relativeTop(component, topItem)).toEqual(topItemTop);
  });

  test("prepending when total height is lower than viewport height", async ({
    page,
    browserName,
  }) => {
    const [component, container] = await Promise.all([
      getScrollable(page),
      getVirtualizer(page),
    ]);

    await page.getByRole("checkbox", { name: "prepend" }).click();
    const decreaseRadio = page.getByRole("radio", { name: "decrease" });
    const increaseRadio = page.getByRole("radio", { name: "increase" });
    const valueInput = page.getByRole("spinbutton");
    const updateButton = page.getByRole("button", { name: "update" });

    const initialLength = await getItems(container).count();
    expect(initialLength).toBeGreaterThan(1);

    let i = 0;
    while (true) {
      i++;
      await valueInput.clear();
      await valueInput.fill(String(i));

      // preprend
      await increaseRadio.click();
      await updateButton.click();

      const items = getItems(container);

      // Check if all items are visible
      await expect(items).toHaveCount(i + initialLength);

      const isScrollBarVisible = await isVerticalScrollBarVisible(component);
      const itemTop = await relativeTop(component, items.first());

      if (isScrollBarVisible) {
        // Check if sticked to bottom
        expectInRange(
          await relativeBottom(component, await findLastVisibleItem(component)),
          {
            min: browserName === "firefox" ? -0.45 : -0.1,
            max: 0.1,
          },
        );
        break;
      } else {
        // Check if top is always visible and on top
        expect(itemTop).toBe(0);
      }

      // remove
      await decreaseRadio.click();
      await updateButton.click();
    }

    expect(i).toBeGreaterThanOrEqual(8);
  });
});

test.describe("SSR and hydration", () => {
  test("check if smooth scrolling works after hydration", async ({ page }) => {
    await page.goto(storyUrl("basics-vlist--ssr"));

    // turn scroll to index with smooth on
    await page.getByRole("radio", { name: "smooth scroll on hydrate" }).click();

    const component = await getScrollable(page);

    const scrollListener = listenScrollEnd(component);

    // hydrate
    await page.getByRole("button", { name: "hydrate" }).click();

    await page.waitForTimeout(100);
    const elapsed = await scrollListener;

    // Check if this is smooth scrolling
    expect(elapsed).toBeGreaterThan(SMOOTH_SCROLL_MS);

    expect(await (await findFirstVisibleItem(component)).textContent()).toEqual(
      "100",
    );
  });
});

test.describe("emulated iOS WebKit", () => {
  const getWindowSize = (page: Page) => {
    return page.evaluate(
      () => [window.outerWidth, window.outerHeight] as const,
    );
  };

  test.describe("check if scroll jump compensation works", () => {
    test("scroll with touch", async ({ page }) => {
      await page.goto(storyUrl("basics-vlist--default"));

      const component = await getScrollable(page);

      // check if first is displayed
      const last = component.getByText("0", { exact: true });
      await expect(last).toBeVisible();
      expect(await relativeTop(component, last)).toEqual(0);

      await component.tap();

      const [w, h] = await getWindowSize(page);
      const centerX = w / 2;
      const centerY = h / 2;

      let top: number = await getScrollTop(component);
      for (let i = 0; i < 5; i++) {
        await scrollWithTouch(component, {
          fromX: centerX,
          fromY: centerY + h / 3,
          toX: centerX,
          toY: centerY - h / 3,
        });

        // check if item position is preserved during flush
        // const nextTopBeforeFlush = await getScrollTop(component);
        const nextLastItemBeforeFlush = await findFirstVisibleItem(component);
        const nextLastItemBeforeFlushText =
          (await nextLastItemBeforeFlush.textContent())!;
        const nextLastItemBeforeFlushTop = await relativeTop(
          component,
          nextLastItemBeforeFlush,
        );
        await page.waitForTimeout(300);
        const nextLastItem = await findFirstVisibleItem(component);
        await expect(nextLastItem).toHaveText(nextLastItemBeforeFlushText);
        expect(
          Math.abs(
            (await relativeTop(component, nextLastItem)) -
              nextLastItemBeforeFlushTop,
          ), // FIXME: may not be 0 in Safari
        ).toBeLessThanOrEqual(1);

        const nextTop = await getScrollTop(component);
        expect(nextTop).toBeGreaterThan(top);
        // expect(nextTop).not.toBe(nextTopBeforeFlush);

        top = nextTop;
      }
    });

    // test("reverse scroll with touch", async ({ page }) => {
    //   await page.goto(storyUrl("basics-vlist--reverse"));

    //   const component = await getScrollable(page);

    //   // FIXME this offset is needed only in ci for unknown reason
    //   const opts = { y: 60 } as const;

    //   // check if last is displayed
    //   const last = await getLastItem(component, opts);
    //   expect(last.text).toEqual("999");
    //   expect(last.bottom).toBeLessThanOrEqual(1); // FIXME: may not be 0 in Safari

    //   await component.tap();

    //   const [w, h] = await getWindowSize(page);
    //   const centerX = w / 2;
    //   const centerY = h / 2;

    //   let top: number = await getScrollTop(component);
    //   for (let i = 0; i < 5; i++) {
    //     await scrollWithTouch(component, {
    //       fromX: centerX,
    //       fromY: centerY - h / 3,
    //       toX: centerX,
    //       toY: centerY + h / 3,
    //     });

    //     // check if item position is preserved during flush
    //     const [nextTopBeforeFlush, nextLastItemBeforeFlush] = await Promise.all(
    //       [getScrollTop(component), getLastItem(component, opts)]
    //     );
    //     await page.waitForTimeout(300);
    //     const [nextTop, nextLastItem] = await Promise.all([
    //       getScrollTop(component),
    //       getLastItem(component, opts),
    //     ]);

    //     expect(nextTop).toBeLessThan(top);
    //     expect(nextTop).not.toBe(nextTopBeforeFlush);
    //     expect(nextLastItem.text).toEqual(nextLastItemBeforeFlush.text);
    //     expectInRange(
    //       Math.abs(nextLastItem.bottom - nextLastItemBeforeFlush.bottom),
    //       { min: 0, max: 1 }
    //     );

    //     top = nextTop;
    //   }
    // });

    // test("reverse scroll with momentum scroll", async ({ page }) => {
    //   await page.goto(storyUrl("basics-vlist--reverse"));

    //   const component = await getScrollable(page);
    //   await component.waitForElementState("stable");

    //   // FIXME this offset is needed only in ci for unknown reason
    //   const opts = { y: 60 } as const;

    //   // check if last is displayed
    //   const last = await getLastItem(component, opts);
    //   expect(last.text).toEqual("999");
    //   expectInRange(last.bottom, { min: -0.9, max: 1 });

    //   await component.tap();

    //   const [w, h] = await getWindowSize(page);
    //   const centerX = w / 2;
    //   const centerY = h / 2;

    //   let top: number = await getScrollTop(component);
    //   for (let i = 0; i < 5; i++) {
    //     await scrollWithTouch(component, {
    //       fromX: centerX,
    //       fromY: centerY - h / 3,
    //       toX: centerX,
    //       toY: centerY + h / 3,
    //       momentumScroll: true,
    //     });

    //     // check if item position is preserved during flush
    //     const [nextTopBeforeFlush, nextLastItemBeforeFlush] = await Promise.all(
    //       [getScrollTop(component), getLastItem(component, opts)]
    //     );
    //     await page.waitForTimeout(300);
    //     const [nextTop, nextLastItem] = await Promise.all([
    //       getScrollTop(component),
    //       getLastItem(component, opts),
    //     ]);

    //     expect(nextTop).toBeLessThan(top);
    //     expect(nextTop).not.toBe(nextTopBeforeFlush);
    //     expect(nextLastItem.text).toEqual(nextLastItemBeforeFlush.text);
    //     expectInRange(
    //       Math.abs(nextLastItem.bottom - nextLastItemBeforeFlush.bottom),
    //       { min: 0, max: 1 }
    //     );

    //     top = nextTop;
    //   }
    // });

    // TODO display none
  });
});
