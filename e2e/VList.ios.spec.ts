import { test, expect } from "@playwright/test";
import {
  storyUrl,
  scrollableSelector,
  getLastItem,
  scrollWithTouch,
  getScrollTop,
  getFirstItem,
  expectNearlyZero,
  scrollBy,
} from "./utils";

test.describe("check if scroll jump compensation in emulated iOS WebKit works", () => {
  test("scroll with touch", async ({ page }) => {
    await page.goto(storyUrl("basics-vlist--default"));

    const component = await page.waitForSelector(scrollableSelector);
    await component.waitForElementState("stable");

    // check if first is displayed
    const last = await getFirstItem(component);
    await expect(last.text).toEqual("0");
    await expect(last.top).toEqual(0);

    await component.tap();

    const [w, h] = await page.evaluate(() => [
      window.outerWidth,
      window.outerHeight,
    ]);
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
      const [/*nextTopBeforeFlush,*/ nextLastItemBeforeFlush] =
        await Promise.all([
          // getScrollTop(component),
          getFirstItem(component),
        ]);
      await page.waitForTimeout(500);
      const [nextTop, nextLastItem] = await Promise.all([
        getScrollTop(component),
        getFirstItem(component),
      ]);

      expect(nextTop).toBeGreaterThan(top);
      // expect(nextTop).not.toBe(nextTopBeforeFlush);
      expect(nextLastItem.text).toEqual(nextLastItemBeforeFlush.text);
      expect(
        Math.abs(nextLastItem.top - nextLastItemBeforeFlush.top) // FIXME: may not be 0 in Safari
      ).toBeLessThanOrEqual(1);

      top = nextTop;
    }
  });

  test("reverse scroll with touch", async ({ page }) => {
    await page.goto(storyUrl("basics-vlist--reverse"));

    const component = await page.waitForSelector(scrollableSelector);
    await component.waitForElementState("stable");

    // FIXME this offset is needed only in ci for unknown reason
    const opts = { y: 60 } as const;

    // check if last is displayed
    const last = await getLastItem(component, opts);
    await expect(last.text).toEqual("999");
    await expect(last.bottom).toBeLessThanOrEqual(1); // FIXME: may not be 0 in Safari

    await component.tap();

    const [w, h] = await page.evaluate(() => [
      window.outerWidth,
      window.outerHeight,
    ]);
    const centerX = w / 2;
    const centerY = h / 2;

    let top: number = await getScrollTop(component);
    for (let i = 0; i < 5; i++) {
      await scrollWithTouch(component, {
        fromX: centerX,
        fromY: centerY - h / 3,
        toX: centerX,
        toY: centerY + h / 3,
      });

      // check if item position is preserved during flush
      const [nextTopBeforeFlush, nextLastItemBeforeFlush] = await Promise.all([
        getScrollTop(component),
        getLastItem(component, opts),
      ]);
      await page.waitForTimeout(500);
      const [nextTop, nextLastItem] = await Promise.all([
        getScrollTop(component),
        getLastItem(component, opts),
      ]);

      expect(nextTop).toBeLessThan(top);
      expect(nextTop).not.toBe(nextTopBeforeFlush);
      expect(nextLastItem.text).toEqual(nextLastItemBeforeFlush.text);
      expectNearlyZero(
        Math.abs(nextLastItem.bottom - nextLastItemBeforeFlush.bottom)
      );

      top = nextTop;
    }
  });

  test("reverse scroll with momentum scroll", async ({ page }) => {
    await page.goto(storyUrl("basics-vlist--reverse"));

    const component = await page.waitForSelector(scrollableSelector);
    await component.waitForElementState("stable");

    // FIXME this offset is needed only in ci for unknown reason
    const opts = { y: 60 } as const;

    // check if last is displayed
    const last = await getLastItem(component, opts);
    await expect(last.text).toEqual("999");
    expectNearlyZero(last.bottom);

    await component.tap();

    const [w, h] = await page.evaluate(() => [
      window.outerWidth,
      window.outerHeight,
    ]);
    const centerX = w / 2;
    const centerY = h / 2;

    let top: number = await getScrollTop(component);
    for (let i = 0; i < 5; i++) {
      await scrollWithTouch(component, {
        fromX: centerX,
        fromY: centerY - h / 3,
        toX: centerX,
        toY: centerY + h / 3,
        momentumScroll: true,
      });

      // check if item position is preserved during flush
      const [nextTopBeforeFlush, nextLastItemBeforeFlush] = await Promise.all([
        getScrollTop(component),
        getLastItem(component, opts),
      ]);
      await page.waitForTimeout(500);
      const [nextTop, nextLastItem] = await Promise.all([
        getScrollTop(component),
        getLastItem(component, opts),
      ]);

      expect(nextTop).toBeLessThan(top);
      expect(nextTop).not.toBe(nextTopBeforeFlush);
      expect(nextLastItem.text).toEqual(nextLastItemBeforeFlush.text);
      expectNearlyZero(
        Math.abs(nextLastItem.bottom - nextLastItemBeforeFlush.bottom)
      );

      top = nextTop;
    }
  });

  // TODO display none
});

// test.describe("check if item shift compensation works", () => {
//   test.beforeEach(async ({ page }) => {
//     await page.goto(storyUrl("basics-vlist--increasing-items"));
//   });

//   test("end", async ({ page }) => {
//     const component = await page.waitForSelector(scrollableSelector);
//     await component.waitForElementState("stable");

//     const updateButton = page.getByRole("button", { name: "update" });

//     // fill list and move to mid
//     for (let i = 0; i < 20; i++) {
//       await updateButton.click();
//     }
//     await scrollBy(component, 400);
//     await page.waitForTimeout(500);

//     const topItem = await getFirstItem(component);
//     expect(topItem.text).not.toEqual("0");
//     expect(topItem.text.length).toBeLessThanOrEqual(2);

//     // add
//     await page.getByRole("radio", { name: "increase" }).click();
//     await updateButton.click();
//     await page.waitForTimeout(100);
//     // check if visible item is keeped
//     expect(topItem).toEqual(await getFirstItem(component));

//     // remove
//     await page.getByRole("radio", { name: "decrease" }).click();
//     await updateButton.click();
//     await page.waitForTimeout(100);
//     // check if visible item is keeped
//     expect(topItem).toEqual(await getFirstItem(component));
//   });

//   test("start", async ({ page }) => {
//     const component = await page.waitForSelector(scrollableSelector);
//     await component.waitForElementState("stable");

//     const updateButton = page.getByRole("button", { name: "update" });

//     // fill list and move to mid
//     for (let i = 0; i < 20; i++) {
//       await updateButton.click();
//     }
//     await scrollBy(component, 800);
//     await page.waitForTimeout(500);

//     const topItem = await getFirstItem(component);
//     expect(topItem.text).not.toEqual("0");
//     expect(topItem.text.length).toBeLessThanOrEqual(2);

//     // add
//     await page.getByRole("checkbox", { name: "prepend" }).click();
//     await page.getByRole("radio", { name: "increase" }).click();
//     await updateButton.click();
//     await page.waitForTimeout(100);
//     // check if visible item is keeped
//     expect(topItem).toEqual(await getFirstItem(component));

//     // remove
//     await page.getByRole("radio", { name: "decrease" }).click();
//     await updateButton.click();
//     await page.waitForTimeout(100);
//     // check if visible item is keeped
//     expect(topItem).toEqual(await getFirstItem(component));
//   });
// });
