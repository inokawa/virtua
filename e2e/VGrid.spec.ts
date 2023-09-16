import { test, expect } from "@playwright/test";
import {
  storyUrl,
  scrollableSelector,
  getFirstItem,
  scrollToBottom,
  scrollToRight,
} from "./utils";

test.describe("smoke", () => {
  test("vertically and horizontally scrollable", async ({ page }) => {
    await page.goto(storyUrl("basics-vgrid--default"));

    const scrollable = await page.waitForSelector(scrollableSelector);
    await scrollable.waitForElementState("stable");

    // check if start is displayed
    await expect(
      (await getFirstItem(scrollable)).text.startsWith("0 / 0")
    ).toBeTruthy();

    // scroll to the end
    await scrollToBottom(scrollable);
    await scrollToRight(scrollable);

    // check if the end is displayed
    await expect(await scrollable.innerText()).toContain("999 / 499");
  });
});

// test.describe("check if scroll jump compensation works", () => {
//   test("vertical start -> end", async ({ page }) => {
//     await page.goto(storyUrl("basics-vgrid--dynamic-height"));
//     const scrollable = await page.waitForSelector(scrollableSelector);
//     await scrollable.waitForElementState("stable");

//     // check if start is displayed
//     await expect((await getFirstItem(scrollable)).text).toEqual("0 / 0Hello world!");

//     // check if offset from start is always keeped
//     await scrollable.click();
//     const min = 200;
//     const initial = await scrollable.evaluate((e) => e.scrollTop);
//     let prev = initial;
//     for (let i = 0; i < 500; i++) {
//       await page.keyboard.press("ArrowDown", { delay: 10 });
//       const offset = await scrollable.evaluate((e) => e.scrollTop);
//       await expect(offset).toBeGreaterThanOrEqual(prev);
//       prev = offset;
//     }
//     await expect(prev).toBeGreaterThan(initial + min);
//   });

//   test("vertical end -> start", async ({ page }) => {
//     await page.goto(storyUrl("basics-vgrid--dynamic-height"));
//     const scrollable = await page.waitForSelector(scrollableSelector);
//     await scrollable.waitForElementState("stable");

//     // check if start is displayed
//     await expect((await getFirstItem(scrollable)).text).toEqual("0 / 0Hello world!");

//     // scroll to the end
//     await scrollToBottom(scrollable);

//     // check if offset from end is always keeped
//     await scrollable.click();
//     const min = 200;
//     const initial = await scrollable.evaluate(
//       (e) => e.scrollHeight - e.scrollTop
//     );
//     let prev = initial;
//     for (let i = 0; i < 500; i++) {
//       await page.keyboard.press("ArrowUp", { delay: 10 });
//       const offset = await scrollable.evaluate(
//         (e) => e.scrollHeight - e.scrollTop
//       );
//       await expect(offset).toBeGreaterThanOrEqual(prev);
//       prev = offset;
//     }
//     await expect(prev).toBeGreaterThan(initial + min);
//   });

//   test("horizontal start -> end", async ({ page }) => {
//     await page.goto(storyUrl("basics-vgrid--dynamic-width"));
//     const scrollable = await page.waitForSelector(scrollableSelector);
//     await scrollable.waitForElementState("stable");

//     // check if start is displayed
//     await expect((await getFirstItem(scrollable)).text).toEqual("0 / 0Hello world!");

//     // check if offset from start is always keeped
//     await scrollable.click();
//     const min = 200;
//     const initial = await scrollable.evaluate((e) => e.scrollLeft);
//     let prev = initial;
//     for (let i = 0; i < 500; i++) {
//       await page.keyboard.press("ArrowRight", { delay: 10 });
//       const offset = await scrollable.evaluate((e) => e.scrollLeft);
//       await expect(offset).toBeGreaterThanOrEqual(prev);
//       prev = offset;
//     }
//     await expect(prev).toBeGreaterThan(initial + min);
//   });

//   test("horizontal end -> start", async ({ page }) => {
//     await page.goto(storyUrl("basics-vgrid--dynamic-width"));
//     const scrollable = await page.waitForSelector(scrollableSelector);
//     await scrollable.waitForElementState("stable");

//     // check if start is displayed
//     await expect((await getFirstItem(scrollable)).text).toEqual("0 / 0Hello world!");

//     // scroll to the end
//     await scrollToRight(scrollable);

//     // check if offset from end is always keeped
//     await scrollable.click();
//     const min = 200;
//     const initial = await scrollable.evaluate(
//       (e) => e.scrollWidth - e.scrollLeft
//     );
//     let prev = initial;
//     for (let i = 0; i < 500; i++) {
//       await page.keyboard.press("ArrowLeft", { delay: 10 });
//       const offset = await scrollable.evaluate(
//         (e) => e.scrollWidth - e.scrollLeft
//       );
//       await expect(offset).toBeGreaterThanOrEqual(prev);
//       prev = offset;
//     }
//     await expect(prev).toBeGreaterThan(initial + min);
//   });
// });

test("check if scrollToIndex works", async ({ page }) => {
  await page.goto(storyUrl("basics-vgrid--scroll-to"));

  const scrollable = await page.waitForSelector(scrollableSelector);

  // check if start is displayed
  await expect(
    (await getFirstItem(scrollable)).text.startsWith("0 / 0")
  ).toBeTruthy();

  const button = (await page
    .getByRole("button", { name: "scroll to index" })
    .elementHandle())!;
  const [colInput, rowInput] = await page.$$("input");

  await button.click();

  await scrollable.waitForElementState("stable");

  // Check if scrolled precisely
  const firstItem = await getFirstItem(scrollable);
  await expect(firstItem.text).toEqual(
    `${await colInput.evaluate((e) => e.value)} / ${await rowInput.evaluate(
      (e) => e.value
    )}`
  );
  await expect(firstItem.top).toEqual(0);
  await expect(firstItem.left).toEqual(0);

  // Check if unnecessary items are not rendered
  await expect(await scrollable.innerText()).not.toContain("650");
  await expect(await scrollable.innerText()).not.toContain("750");
});
