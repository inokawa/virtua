import { test, expect, type Page } from "@playwright/test";
import {
  storyUrl,
  scrollToBottom,
  scrollToRight,
  getScrollTop,
  getScrollLeft,
  getScrollBottom,
  getScrollRight,
  expectInRange,
  scrollWithTouch,
  getScrollable,
  listenScrollEnd,
  relativeTop,
  findFirstVisibleItem,
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
