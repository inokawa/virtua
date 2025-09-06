import { test, expect } from "@playwright/test";
import {
  storyUrl,
  scrollToBottom,
  expectInRange,
  getScrollable,
  getVirtualizer,
  getChildren,
  getStyleValue,
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

  const items = getChildren(container);

  // check if start is displayed
  const topItem = items.first();
  await expect(topItem).toHaveText("0");
  expect(
    await (async () => {
      const rootRect = (await scrollable.boundingBox())!;
      const itemRect = (await topItem.boundingBox())!;
      return itemRect.y - rootRect.y;
    })()
  ).toEqual(topPadding);

  // scroll to the end
  await scrollToBottom(scrollable);

  // check if the end is displayed
  const bottomItem = items.last();
  await expect(bottomItem).toHaveText("999");
  expect(
    await (async () => {
      const rootRect = (await scrollable.boundingBox())!;
      const itemRect = (await bottomItem.boundingBox())!;
      return rootRect.y + rootRect.height - (itemRect.y + itemRect.height);
    })()
  ).toEqual(bottomPadding);
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

  const items = getChildren(container);

  // check if start is displayed
  const topItem = items.first();
  await expect(topItem).toHaveText("0");
  expect(
    await (async () => {
      const rootRect = (await scrollable.boundingBox())!;
      const itemRect = (await topItem.boundingBox())!;
      return itemRect.y - rootRect.y;
    })()
  ).toEqual(topPadding);

  // scroll to the end
  await scrollToBottom(scrollable);

  // check if the end is displayed
  const bottomItem = items.last();
  await expect(bottomItem).toHaveText("999");
  expectInRange(
    await (async () => {
      const rootRect = (await scrollable.boundingBox())!;
      const itemRect = (await bottomItem.boundingBox())!;
      return rootRect.y + rootRect.height - (itemRect.y + itemRect.height);
    })(),
    { min: bottomPadding, max: bottomPadding + 1 }
  );
});
