import { test, expect } from "@playwright/test";
import {
  storyUrl,
  getFirstItem,
  scrollToBottom,
  scrollToRight,
  getScrollable,
} from "./utils";

test.describe("smoke", () => {
  test("vertically and horizontally scrollable", async ({ page }) => {
    await page.goto(storyUrl("basics-vgrid--default"));

    const component = await getScrollable(page);

    // check if start is displayed
    expect(
      (await getFirstItem(component)).text.startsWith("0 / 0")
    ).toBeTruthy();

    // scroll to the end
    await scrollToBottom(component);
    await scrollToRight(component);

    // check if the end is displayed
    expect(await component.innerText()).toContain("999 / 499");
  });
});

// test.describe("check if scroll jump compensation works", () => {
//   test("vertical start -> end", async ({ page }) => {
//     await page.goto(storyUrl("basics-vgrid--dynamic-height"));
//     const component = await getScrollable(page);
//     await component.waitForElementState("stable");

//     // check if start is displayed
//     expect((await getFirstItem(component)).text).toEqual("0 / 0Hello world!");

//     // check if offset from start is always keeped
//     await component.click();
//     const min = 200;
//     const initial = await getScrollTop(component);
//     let prev = initial;
//     for (let i = 0; i < 500; i++) {
//       await page.keyboard.press("ArrowDown", { delay: 10 });
//       const offset = await getScrollTop(component);
//       expect(offset).toBeGreaterThanOrEqual(prev);
//       prev = offset;
//     }
//     expect(prev).toBeGreaterThan(initial + min);
//   });

//   test("vertical end -> start", async ({ page }) => {
//     await page.goto(storyUrl("basics-vgrid--dynamic-height"));
//     const component = await getScrollable(page);
//     await component.waitForElementState("stable");

//     // check if start is displayed
//     expect((await getFirstItem(component)).text).toEqual("0 / 0Hello world!");

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
//       expect(offset).toBeGreaterThanOrEqual(prev);
//       prev = offset;
//     }
//     expect(prev).toBeGreaterThan(initial + min);
//   });

//   test("horizontal start -> end", async ({ page }) => {
//     await page.goto(storyUrl("basics-vgrid--dynamic-width"));
//     const component = await getScrollable(page);
//     await component.waitForElementState("stable");

//     // check if start is displayed
//     expect((await getFirstItem(component)).text).toEqual("0 / 0Hello world!");

//     // check if offset from start is always keeped
//     await component.click();
//     const min = 200;
//     const initial = await getScrollLeft(component);
//     let prev = initial;
//     for (let i = 0; i < 500; i++) {
//       await page.keyboard.press("ArrowRight", { delay: 10 });
//       const offset = await getScrollLeft(component);
//       expect(offset).toBeGreaterThanOrEqual(prev);
//       prev = offset;
//     }
//     expect(prev).toBeGreaterThan(initial + min);
//   });

//   test("horizontal end -> start", async ({ page }) => {
//     await page.goto(storyUrl("basics-vgrid--dynamic-width"));
//     const component = await getScrollable(page);
//     await component.waitForElementState("stable");

//     // check if start is displayed
//     expect((await getFirstItem(component)).text).toEqual("0 / 0Hello world!");

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
//       expect(offset).toBeGreaterThanOrEqual(prev);
//       prev = offset;
//     }
//     expect(prev).toBeGreaterThan(initial + min);
//   });
// });

test("check if scrollToIndex works", async ({ page }) => {
  await page.goto(storyUrl("basics-vgrid--scroll-to"));

  const component = await getScrollable(page);

  // check if start is displayed
  expect((await getFirstItem(component)).text.startsWith("0 / 0")).toBeTruthy();

  const button = page.getByRole("button", { name: "scroll to index" });
  const [colInput, rowInput] = await page.locator("input").all();

  await button.click();

  await (await component.elementHandle())!.waitForElementState("stable");

  // Check if scrolled precisely
  const firstItem = await getFirstItem(component);
  expect(firstItem.text).toEqual(
    `${await colInput.evaluate((e) => (e as HTMLInputElement).value)} / ${await rowInput.evaluate(
      (e) => (e as HTMLInputElement).value
    )}`
  );
  expect(firstItem.top).toEqual(0);
  expect(firstItem.left).toEqual(0);

  // Check if unnecessary items are not rendered
  expect(await component.innerText()).not.toContain("650");
  expect(await component.innerText()).not.toContain("750");
});
