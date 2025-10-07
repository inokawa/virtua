import { test, expect } from "@playwright/test";
import {
  storyUrl,
  scrollToBottom,
  expectInRange,
  getScrollable,
  getVirtualizer,
  getItems,
  getStyleValue,
  relativeBottom,
  relativeTop,
  scrollBy,
} from "./utils";

test("header and footer", async ({ page }) => {
  await page.goto(storyUrl("basics-virtualizer--header-and-footer"));

  const scrollable = await getScrollable(page);
  const container = await getVirtualizer(page);

  const topPadding = parseInt(
    await getStyleValue(
      scrollable.getByText("header", { exact: true }),
      "height"
    )
  );
  const bottomPadding = parseInt(
    await getStyleValue(
      scrollable.getByText("footer", { exact: true }),
      "height"
    )
  );
  expect(topPadding).toBeGreaterThan(10);
  expect(bottomPadding).toBeGreaterThan(10);

  const items = getItems(container);

  // check if start is displayed
  const topItem = items.first();
  await expect(topItem).toHaveText("0");
  expect(await relativeTop(scrollable, topItem)).toEqual(topPadding);

  // scroll to the end
  await scrollToBottom(scrollable);

  // check if the end is displayed
  const bottomItem = items.last();
  await expect(bottomItem).toHaveText("999");
  expect(await relativeBottom(scrollable, bottomItem)).toEqual(bottomPadding);
});

test("sticky header and footer", async ({ page }) => {
  await page.goto(storyUrl("basics-virtualizer--sticky-header-and-footer"));

  const scrollable = await getScrollable(page);
  const container = await getVirtualizer(page);

  const topPadding = parseInt(
    await getStyleValue(
      scrollable.getByText("header", { exact: true }),
      "height"
    )
  );
  const bottomPadding = parseInt(
    await getStyleValue(
      scrollable.getByText("footer", { exact: true }),
      "height"
    )
  );
  expect(topPadding).toBeGreaterThan(10);
  expect(bottomPadding).toBeGreaterThan(10);

  const items = getItems(container);

  // check if start is displayed
  const topItem = items.first();
  await expect(topItem).toHaveText("0");
  expect(await relativeTop(scrollable, topItem)).toEqual(topPadding);

  // scroll to the end
  await scrollToBottom(scrollable);

  // check if the end is displayed
  const bottomItem = items.last();
  await expect(bottomItem).toHaveText("999");
  expectInRange(await relativeBottom(scrollable, bottomItem), {
    min: bottomPadding,
    max: bottomPadding + 1,
  });
});

test("sticky items", async ({ page }) => {
  await page.goto(storyUrl("advanced-sticky-group--default"));

  const component = await getScrollable(page);

  // check if start is displayed
  const first = component.getByText("0", { exact: true });
  await expect(first).toBeVisible();
  expect(await relativeTop(component, first)).toEqual(0);

  // scroll
  const itemHeight = (await component
    .getByText("1", { exact: true })
    .boundingBox())!.height;
  await scrollBy(component, itemHeight * 50);
  await expect(component.getByText("1", { exact: true })).not.toBeVisible();

  // check if the sticky header is still on top
  await expect(first).toBeVisible();
  expect(await relativeTop(component, first)).toEqual(0);
});
