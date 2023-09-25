import { test, expect } from "@playwright/test";
import {
  storyUrl,
  getFirstItem,
  windowScrollToBottom,
  windowScrollToRight,
} from "./utils";

const wvListSelector = '*[style*="border"]';

test.describe("smoke", () => {
  test("vertically scrollable", async ({ page }) => {
    await page.goto(storyUrl("basics-wvlist--default"));

    const component = await page.waitForSelector(wvListSelector);
    await component.waitForElementState("stable");

    // check if start is displayed
    const first = await getFirstItem(component);
    await expect(first.text).toEqual("0");
    await expect(await component.innerText()).not.toContain("50");

    // scroll to the end
    await windowScrollToBottom(component);

    // check if the end is displayed
    const text = await component.innerText();
    await expect(text).toContain("999");
    await expect(text).not.toContain("949");
  });

  test("horizontally scrollable", async ({ page }) => {
    await page.goto(storyUrl("basics-wvlist--horizontal"));

    await page.waitForSelector(wvListSelector);
    const component = (await page.$$(wvListSelector))[0]!;
    await component.waitForElementState("stable");

    // check if start is displayed
    const first = await getFirstItem(component);
    await expect(first.text).toEqual("Column 0");
    await expect(await component.innerText()).not.toContain("Column 50");

    // scroll to the end
    await windowScrollToRight(component);

    // check if the end is displayed
    const text = await component.innerText();
    await expect(text).toContain("999");
    await expect(text).not.toContain("949");
  });

  test("display: none", async ({ page }) => {
    await page.goto(storyUrl("basics-wvlist--default"));

    const component = await page.waitForSelector(wvListSelector);
    await component.waitForElementState("stable");

    const initialTotalHeight = await component.evaluate(
      (s) => getComputedStyle(s.childNodes[0] as HTMLElement).height
    );

    await component.evaluate((s) => (s.style.display = "none"));

    await component.waitForElementState("stable");

    const changedTotalHeight = await component.evaluate(
      (s) => getComputedStyle(s.childNodes[0] as HTMLElement).height
    );

    expect(initialTotalHeight).toBeTruthy();
    expect(initialTotalHeight).toEqual(changedTotalHeight);
  });
});

// test.describe("check if scroll jump compensation works", () => {
//   test("vertical start -> end", async ({ page }) => {
//     await page.goto(storyUrl("basics-wvlist--default"));
//     const component = await page.waitForSelector(scrollableSelector);
//     await component.waitForElementState("stable");

//     // check if start is displayed
//     await expect((await getFirstItem(component)).text).toEqual("0");

//     // check if offset from start is always keeped
//     await component.click();
//     const min = 200;
//     const initial = await component.evaluate((e) => window.scrollY);
//     let prev = initial;
//     for (let i = 0; i < 500; i++) {
//       await page.keyboard.press("ArrowDown", { delay: 10 });
//       const offset = await component.evaluate((e) => window.scrollY);
//       await expect(offset).toBeGreaterThanOrEqual(prev);
//       prev = offset;
//     }
//     await expect(prev).toBeGreaterThan(initial + min);
//   });

//   test("vertical end -> start", async ({ page }) => {
//     await page.goto(storyUrl("basics-wvlist--default"));
//     const component = await page.waitForSelector(scrollableSelector);
//     await component.waitForElementState("stable");

//     // check if start is displayed
//     await expect((await getFirstItem(component)).text).toEqual("0");

//     // scroll to the end
//     await windowScrollToBottom(component);

//     // check if offset from end is always keeped
//     await component.click();
//     const min = 200;
//     const initial = await component.evaluate(
//       (e) => document.body.scrollHeight - window.scrollY
//     );
//     let prev = initial;
//     for (let i = 0; i < 500; i++) {
//       await page.keyboard.press("ArrowUp", { delay: 10 });
//       const offset = await component.evaluate(
//         (e) => document.body.scrollHeight - window.scrollY
//       );
//       await expect(offset).toBeGreaterThanOrEqual(prev);
//       prev = offset;
//     }
//     await expect(prev).toBeGreaterThan(initial + min);
//   });

//   test("horizontal start -> end", async ({ page }) => {
//     await page.goto(storyUrl("basics-wvlist--horizontal"));
//     const component = await page.waitForSelector(scrollableSelector);
//     await component.waitForElementState("stable");

//     // check if start is displayed
//     await expect((await getFirstItem(component)).text).toEqual("Column 0");

//     // check if offset from start is always keeped
//     await component.click();
//     const min = 200;
//     const initial = await component.evaluate((e) => window.scrollX);
//     let prev = initial;
//     for (let i = 0; i < 500; i++) {
//       await page.keyboard.press("ArrowRight", { delay: 10 });
//       const offset = await component.evaluate((e) => window.scrollX);
//       await expect(offset).toBeGreaterThanOrEqual(prev);
//       prev = offset;
//     }
//     await expect(prev).toBeGreaterThan(initial + min);
//   });

//   test("horizontal end -> start", async ({ page }) => {
//     await page.goto(storyUrl("basics-wvlist--horizontal"));
//     const component = await page.waitForSelector(scrollableSelector);
//     await component.waitForElementState("stable");

//     // check if start is displayed
//     await expect((await getFirstItem(component)).text).toEqual("Column 0");

//     // scroll to the end
//     await windowScrollToRight(component);

//     // check if offset from end is always keeped
//     await component.click();
//     const min = 200;
//     const initial = await component.evaluate(
//       (e) => document.body.scrollWidth - window.scrollX
//     );
//     let prev = initial;
//     for (let i = 0; i < 500; i++) {
//       await page.keyboard.press("ArrowLeft", { delay: 10 });
//       const offset = await component.evaluate(
//         (e) => document.body.scrollWidth - window.scrollX
//       );
//       await expect(offset).toBeGreaterThanOrEqual(prev);
//       prev = offset;
//     }
//     await expect(prev).toBeGreaterThan(initial + min);
//   });
// });
