import { test, expect, ElementHandle } from "@playwright/test";
import {
  storyUrl,
  scrollableSelector,
  itemsSelector,
  getFirstItem,
  getLastItem,
  windowScrollToBottom,
  windowScrollToRight,
} from "./utils";

test.describe("smoke", () => {
  test("vertically scrollable", async ({ page }) => {
    await page.goto(storyUrl("basics-wvlist--default"));

    const scrollable = await page.waitForSelector(scrollableSelector);
    await scrollable.waitForElementState("stable");

    // check if start is displayed
    const first = await getFirstItem(scrollable);
    await expect(first.text).toEqual("0");
    await expect(await scrollable.innerText()).not.toContain("50");

    // scroll to the end
    await windowScrollToBottom(scrollable);

    // check if the end is displayed
    const text = await scrollable.innerText();
    await expect(text).toContain("999");
    await expect(text).not.toContain("949");
  });

  test("horizontally scrollable", async ({ page }) => {
    await page.goto(storyUrl("basics-wvlist--horizontal"));

    await page.waitForSelector(scrollableSelector);
    const scrollable = (await page.$$(scrollableSelector))[0]!;
    await scrollable.waitForElementState("stable");

    // check if start is displayed
    const first = await getFirstItem(scrollable);
    await expect(first.text).toEqual("Column 0");
    await expect(await scrollable.innerText()).not.toContain("Column 50");

    // scroll to the end
    await windowScrollToRight(scrollable);

    // check if the end is displayed
    const text = await scrollable.innerText();
    await expect(text).toContain("999");
    await expect(text).not.toContain("949");
  });
});

// test.describe("check if scroll jump compensation works", () => {
//   test("vertical start -> end", async ({ page }) => {
//     await page.goto(storyUrl("basics-wvlist--default"));
//     const scrollable = await page.waitForSelector(scrollableSelector);
//     await scrollable.waitForElementState("stable");

//     // check if start is displayed
//     await expect((await getFirstItem(scrollable)).text).toEqual("0");

//     // check if offset from start is always keeped
//     await scrollable.click();
//     const min = 200;
//     const initial = await scrollable.evaluate((e) => window.scrollY);
//     let prev = initial;
//     for (let i = 0; i < 500; i++) {
//       await page.keyboard.press("ArrowDown", { delay: 10 });
//       const offset = await scrollable.evaluate((e) => window.scrollY);
//       await expect(offset).toBeGreaterThanOrEqual(prev);
//       prev = offset;
//     }
//     await expect(prev).toBeGreaterThan(initial + min);
//   });

//   test("vertical end -> start", async ({ page }) => {
//     await page.goto(storyUrl("basics-wvlist--default"));
//     const scrollable = await page.waitForSelector(scrollableSelector);
//     await scrollable.waitForElementState("stable");

//     // check if start is displayed
//     await expect((await getFirstItem(scrollable)).text).toEqual("0");

//     // scroll to the end
//     await windowScrollToBottom(scrollable);

//     // check if offset from end is always keeped
//     await scrollable.click();
//     const min = 200;
//     const initial = await scrollable.evaluate(
//       (e) => document.body.scrollHeight - window.scrollY
//     );
//     let prev = initial;
//     for (let i = 0; i < 500; i++) {
//       await page.keyboard.press("ArrowUp", { delay: 10 });
//       const offset = await scrollable.evaluate(
//         (e) => document.body.scrollHeight - window.scrollY
//       );
//       await expect(offset).toBeGreaterThanOrEqual(prev);
//       prev = offset;
//     }
//     await expect(prev).toBeGreaterThan(initial + min);
//   });

//   test("horizontal start -> end", async ({ page }) => {
//     await page.goto(storyUrl("basics-wvlist--horizontal"));
//     const scrollable = await page.waitForSelector(scrollableSelector);
//     await scrollable.waitForElementState("stable");

//     // check if start is displayed
//     await expect((await getFirstItem(scrollable)).text).toEqual("Column 0");

//     // check if offset from start is always keeped
//     await scrollable.click();
//     const min = 200;
//     const initial = await scrollable.evaluate((e) => window.scrollX);
//     let prev = initial;
//     for (let i = 0; i < 500; i++) {
//       await page.keyboard.press("ArrowRight", { delay: 10 });
//       const offset = await scrollable.evaluate((e) => window.scrollX);
//       await expect(offset).toBeGreaterThanOrEqual(prev);
//       prev = offset;
//     }
//     await expect(prev).toBeGreaterThan(initial + min);
//   });

//   test("horizontal end -> start", async ({ page }) => {
//     await page.goto(storyUrl("basics-wvlist--horizontal"));
//     const scrollable = await page.waitForSelector(scrollableSelector);
//     await scrollable.waitForElementState("stable");

//     // check if start is displayed
//     await expect((await getFirstItem(scrollable)).text).toEqual("Column 0");

//     // scroll to the end
//     await windowScrollToRight(scrollable);

//     // check if offset from end is always keeped
//     await scrollable.click();
//     const min = 200;
//     const initial = await scrollable.evaluate(
//       (e) => document.body.scrollWidth - window.scrollX
//     );
//     let prev = initial;
//     for (let i = 0; i < 500; i++) {
//       await page.keyboard.press("ArrowLeft", { delay: 10 });
//       const offset = await scrollable.evaluate(
//         (e) => document.body.scrollWidth - window.scrollX
//       );
//       await expect(offset).toBeGreaterThanOrEqual(prev);
//       prev = offset;
//     }
//     await expect(prev).toBeGreaterThan(initial + min);
//   });
// });
