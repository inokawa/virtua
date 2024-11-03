import { test, expect } from "@playwright/test";
import {
  storyUrl,
  scrollToBottom,
  expectInRange,
  getScrollable,
  getVirtualizer,
} from "./utils";

test("header and footer", async ({ page }) => {
  await page.goto(storyUrl("basics-virtualizer--header-and-footer"));

  const scrollable = await getScrollable(page);
  const container = await getVirtualizer(page);
  await scrollable.waitForElementState("stable");

  const [topPadding, bottomPadding] = await scrollable.evaluate((e) => {
    const topSpacer = e.firstElementChild as HTMLElement;
    const bottomSpacer = e.lastElementChild as HTMLElement;
    return [
      parseInt(getComputedStyle(topSpacer).height),
      parseInt(getComputedStyle(bottomSpacer).height),
    ];
  });
  await expect(topPadding).toBeGreaterThan(10);
  await expect(bottomPadding).toBeGreaterThan(10);

  const itemsSelector = '*[style*="top"]';

  // check if start is displayed
  const topItem = (await container.$$(itemsSelector))[0];
  await expect(await topItem.textContent()).toEqual("0");
  await expect(
    await (async () => {
      const rootRect = (await scrollable.boundingBox())!;
      const itemRect = (await topItem.boundingBox())!;
      return itemRect.y - rootRect.y;
    })()
  ).toEqual(topPadding);

  // scroll to the end
  await scrollToBottom(scrollable);

  // check if the end is displayed
  const items = await container.$$(itemsSelector);
  const bottomItem = items[items.length - 1];
  await expect(await bottomItem.textContent()).toEqual("999");
  await expect(
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
  await scrollable.waitForElementState("stable");
  const container = await getVirtualizer(page);

  const [topPadding, bottomPadding] = await scrollable.evaluate((e) => {
    const topSpacer = e.firstElementChild as HTMLElement;
    const bottomSpacer = e.lastElementChild as HTMLElement;
    return [
      parseInt(getComputedStyle(topSpacer).height),
      parseInt(getComputedStyle(bottomSpacer).height),
    ];
  });
  await expect(topPadding).toBeGreaterThan(10);
  await expect(bottomPadding).toBeGreaterThan(10);

  const itemsSelector = '*[style*="top"]';

  // check if start is displayed
  const topItem = (await container.$$(itemsSelector))[0];
  await expect(await topItem.textContent()).toEqual("0");
  await expect(
    await (async () => {
      const rootRect = (await scrollable.boundingBox())!;
      const itemRect = (await topItem.boundingBox())!;
      return itemRect.y - rootRect.y;
    })()
  ).toEqual(topPadding);

  // scroll to the end
  await scrollToBottom(scrollable);

  // check if the end is displayed
  const items = await container.$$(itemsSelector);
  const bottomItem = items[items.length - 1];
  await expect(await bottomItem.textContent()).toEqual("999");
  expectInRange(
    await (async () => {
      const rootRect = (await scrollable.boundingBox())!;
      const itemRect = (await bottomItem.boundingBox())!;
      return rootRect.y + rootRect.height - (itemRect.y + itemRect.height);
    })(),
    { min: bottomPadding, max: bottomPadding + 1 }
  );
});
