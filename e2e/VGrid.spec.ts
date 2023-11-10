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

    const component = await page.waitForSelector(scrollableSelector);
    await component.waitForElementState("stable");

    // check if start is displayed
    await expect(
      (await getFirstItem(component)).text.startsWith("0 / 0")
    ).toBeTruthy();

    // scroll to the end
    await scrollToBottom(component);
    await scrollToRight(component);

    // check if the end is displayed
    await expect(await component.innerText()).toContain("999 / 499");
  });
});

// test.describe("check if scroll jump compensation works", () => {
//   test("vertical start -> end", async ({ page }) => {
//     await page.goto(storyUrl("basics-vgrid--dynamic-height"));
//     const component = await page.waitForSelector(scrollableSelector);
//     await component.waitForElementState("stable");

//     // check if start is displayed
//     await expect((await getFirstItem(component)).text).toEqual("0 / 0Hello world!");

//     // check if offset from start is always keeped
//     await component.click();
//     const min = 200;
//     const initial = await getScrollTop(component);
//     let prev = initial;
//     for (let i = 0; i < 500; i++) {
//       await page.keyboard.press("ArrowDown", { delay: 10 });
//       const offset = await getScrollTop(component);
//       await expect(offset).toBeGreaterThanOrEqual(prev);
//       prev = offset;
//     }
//     await expect(prev).toBeGreaterThan(initial + min);
//   });

//   test("vertical end -> start", async ({ page }) => {
//     await page.goto(storyUrl("basics-vgrid--dynamic-height"));
//     const component = await page.waitForSelector(scrollableSelector);
//     await component.waitForElementState("stable");

//     // check if start is displayed
//     await expect((await getFirstItem(component)).text).toEqual("0 / 0Hello world!");

//     // scroll to the end
//     await scrollToBottom(component);

//     // check if offset from end is always keeped
//     await component.click();
//     const min = 200;
//     const initial = await getScrollBottom(component);
//     let prev = initial;
//     for (let i = 0; i < 500; i++) {
//       await page.keyboard.press("ArrowUp", { delay: 10 });
//       const offset = await getScrollBottom(component);
//       await expect(offset).toBeGreaterThanOrEqual(prev);
//       prev = offset;
//     }
//     await expect(prev).toBeGreaterThan(initial + min);
//   });

//   test("horizontal start -> end", async ({ page }) => {
//     await page.goto(storyUrl("basics-vgrid--dynamic-width"));
//     const component = await page.waitForSelector(scrollableSelector);
//     await component.waitForElementState("stable");

//     // check if start is displayed
//     await expect((await getFirstItem(component)).text).toEqual("0 / 0Hello world!");

//     // check if offset from start is always keeped
//     await component.click();
//     const min = 200;
//     const initial = await getScrollLeft(component);
//     let prev = initial;
//     for (let i = 0; i < 500; i++) {
//       await page.keyboard.press("ArrowRight", { delay: 10 });
//       const offset = await getScrollLeft(component);
//       await expect(offset).toBeGreaterThanOrEqual(prev);
//       prev = offset;
//     }
//     await expect(prev).toBeGreaterThan(initial + min);
//   });

//   test("horizontal end -> start", async ({ page }) => {
//     await page.goto(storyUrl("basics-vgrid--dynamic-width"));
//     const component = await page.waitForSelector(scrollableSelector);
//     await component.waitForElementState("stable");

//     // check if start is displayed
//     await expect((await getFirstItem(component)).text).toEqual("0 / 0Hello world!");

//     // scroll to the end
//     await scrollToRight(component);

//     // check if offset from end is always keeped
//     await component.click();
//     const min = 200;
//     const initial = await getScrollRight(component);
//     let prev = initial;
//     for (let i = 0; i < 500; i++) {
//       await page.keyboard.press("ArrowLeft", { delay: 10 });
//       const offset = await getScrollRight(component);
//       await expect(offset).toBeGreaterThanOrEqual(prev);
//       prev = offset;
//     }
//     await expect(prev).toBeGreaterThan(initial + min);
//   });
// });

test("check if scrollToIndex works", async ({ page }) => {
  await page.goto(storyUrl("basics-vgrid--scroll-to"));

  const component = await page.waitForSelector(scrollableSelector);

  // check if start is displayed
  await expect(
    (await getFirstItem(component)).text.startsWith("0 / 0")
  ).toBeTruthy();

  const button = (await page
    .getByRole("button", { name: "scroll to index" })
    .elementHandle())!;
  const [colInput, rowInput] = await page.$$("input");

  await button.click();

  await component.waitForElementState("stable");

  // Check if scrolled precisely
  const firstItem = await getFirstItem(component);
  await expect(firstItem.text).toEqual(
    `${await colInput.evaluate((e) => e.value)} / ${await rowInput.evaluate(
      (e) => e.value
    )}`
  );
  await expect(firstItem.top).toEqual(0);
  await expect(firstItem.left).toEqual(0);

  // Check if unnecessary items are not rendered
  await expect(await component.innerText()).not.toContain("650");
  await expect(await component.innerText()).not.toContain("750");
});
