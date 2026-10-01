import { test, expect } from "@playwright/test";
import {
  storyUrl,
  windowScrollToBottom,
  windowScrollToRight,
  getVirtualizer,
  getWindowScrollTop,
  getWindowScrollLeft,
  getWindowScrollBottom,
  getWindowScrollRight,
} from "./utils";

test.describe("check if scroll jump compensation works", () => {
  test("vertical start -> end", async ({ page }) => {
    await page.goto(storyUrl("basics-windowvirtualizer--default"));
    const component = await getVirtualizer(page);

    // check if start is displayed
    await expect(component.getByText("0", { exact: true })).toBeVisible();

    // check if offset from start is always keeped
    await component.click();
    const min = 200;
    const initial = await getWindowScrollTop(page);
    let prev = initial;
    const start = performance.now();
    while ((performance.now() - start) / 1000 < 4) {
      await page.keyboard.press("ArrowDown", { delay: 10 });
      const offset = await getWindowScrollTop(page);
      expect(offset).toBeGreaterThanOrEqual(prev);
      prev = offset;
    }
    expect(prev).toBeGreaterThan(initial + min);
  });

  test("vertical end -> start", async ({ page, browserName }) => {
    await page.goto(storyUrl("basics-windowvirtualizer--default"));
    const component = await getVirtualizer(page);

    // check if start is displayed
    await expect(component.getByText("0", { exact: true })).toBeVisible();

    // scroll to the end
    await windowScrollToBottom(page);

    // TODO timeout is necessary for now
    await page.waitForTimeout(250);

    // check if offset from end is always keeped
    await component.click();
    const min = 200;
    const initial = await getWindowScrollBottom(page);
    let prev = initial;
    const start = performance.now();
    while ((performance.now() - start) / 1000 < 4) {
      await page.keyboard.press("ArrowUp", { delay: 10 });
      const offset = await getWindowScrollBottom(page);
      expect(offset).toBeGreaterThanOrEqual(
        browserName === "firefox" ? prev - 1 : prev,
      );
      prev = offset;
    }
    expect(prev).toBeGreaterThan(initial + min);
  });

  test("horizontal start -> end", async ({ page }) => {
    await page.goto(storyUrl("basics-windowvirtualizer--horizontal"));
    const component = await getVirtualizer(page);

    // check if start is displayed
    await expect(
      component.getByText("Column 0", { exact: true }),
    ).toBeVisible();

    // check if offset from start is always keeped
    await component.click();
    const min = 200;
    const initial = await getWindowScrollLeft(page);
    let prev = initial;
    const start = performance.now();
    while ((performance.now() - start) / 1000 < 4) {
      await page.keyboard.press("ArrowRight", { delay: 10 });
      const offset = await getWindowScrollLeft(page);
      expect(offset).toBeGreaterThanOrEqual(prev);
      prev = offset;
    }
    expect(prev).toBeGreaterThan(initial + min);
  });

  test("horizontal end -> start", async ({ page, browserName }) => {
    await page.goto(storyUrl("basics-windowvirtualizer--horizontal"));
    const component = await getVirtualizer(page);

    // check if start is displayed
    await expect(
      component.getByText("Column 0", { exact: true }),
    ).toBeVisible();

    // scroll to the end
    await windowScrollToRight(page);

    // check if offset from end is always keeped
    await component.click();
    const min = 200;
    const initial = await getWindowScrollRight(page);
    let prev = initial;
    const start = performance.now();
    while ((performance.now() - start) / 1000 < 4) {
      await page.keyboard.press("ArrowLeft", { delay: 10 });
      const offset = await getWindowScrollRight(page);
      expect(offset).toBeGreaterThanOrEqual(
        browserName === "firefox" ? prev - 1 : prev,
      );
      prev = offset;
    }
    expect(prev).toBeGreaterThan(initial + min);
  });
});
