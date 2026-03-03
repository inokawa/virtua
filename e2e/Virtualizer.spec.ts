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
  isVerticalScrollBarVisible,
  scrollToTop,
} from "./utils";

test("header and footer", async ({ page }) => {
  await page.goto(storyUrl("basics-virtualizer--header-and-footer"));

  const scrollable = await getScrollable(page);
  const container = await getVirtualizer(page);

  const topPadding = parseInt(
    await getStyleValue(
      scrollable.getByText("header", { exact: true }),
      "height",
    ),
  );
  const bottomPadding = parseInt(
    await getStyleValue(
      scrollable.getByText("footer", { exact: true }),
      "height",
    ),
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
      "height",
    ),
  );
  const bottomPadding = parseInt(
    await getStyleValue(
      scrollable.getByText("footer", { exact: true }),
      "height",
    ),
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

test("overflow", async ({ page }) => {
  await page.goto(storyUrl("basics-virtualizer--overflow"));

  const component = await getVirtualizer(page);

  const items = getItems(component);

  for (const target of [0, 2, 4]) {
    const item = items.nth(target);
    await expect(item).toContainText(String(target / 2));
    const label = item.getByText("😊", { exact: true });

    // check if overflowed element is visible in front
    expect(
      await label.evaluate((e) => {
        const rect = e.getBoundingClientRect();
        const pointed = document.elementFromPoint(
          rect.x + rect.width / 8,
          rect.y + rect.height / 8,
        );
        return e === pointed;
      }),
    ).toBe(true);
  }
});

test("reverse with flex-direction: column-reverse", async ({ page }) => {
  await page.goto(storyUrl("basics-virtualizer--inverted"));

  const component = await getScrollable(page);

  // check if start is displayed
  const first = component.getByText("0", { exact: true });
  await expect(first).toBeVisible();
  expect(await relativeBottom(component, first)).toEqual(0);

  // scroll to the end
  await scrollToTop(component);

  // check if the end is displayed
  await expect(component.getByText("999", { exact: true })).toBeVisible();
});

test.describe("aligned to bottom", () => {
  test("reverse", async ({ page }) => {
    await page.goto(storyUrl("basics-virtualizer--reverse"), {
      waitUntil: "domcontentloaded",
    });
    await page.evaluate(() => {
      (window as any)._displayed = false;
      const mo = new MutationObserver((entries) => {
        for (const e of entries) {
          for (const n of [...e.addedNodes]) {
            const walker = document.createTreeWalker(n, NodeFilter.SHOW_TEXT);
            let node: Node;
            while ((node = walker.nextNode()!)) {
              if (node.textContent === "0") {
                (window as any)._displayed = true;
                return;
              }
            }
          }
        }
      });
      mo.observe(document.body, { childList: true, subtree: true });
    });

    const component = await getScrollable(page);

    // check if last is displayed
    const last = component.getByText("999", { exact: true });
    await expect(last).toBeVisible();
    expect(await relativeBottom(component, last)).toEqual(0);
    // check if start is not displayed
    expect(await page.evaluate(() => (window as any)._displayed)).toBe(false);
  });

  test("prepending when total height is lower than viewport height", async ({
    page,
    browserName,
  }) => {
    await page.goto(storyUrl("basics-virtualizer--align-bottom"));

    const [component, container] = await Promise.all([
      getScrollable(page),
      getVirtualizer(page),
    ]);

    await page.getByRole("checkbox", { name: "prepend" }).click();
    const decreaseRadio = page.getByRole("radio", { name: "decrease" });
    const increaseRadio = page.getByRole("radio", { name: "increase" });
    const valueInput = page.getByRole("spinbutton");
    const updateButton = page.getByRole("button", { name: "update" });

    const initialLength = await getItems(container).count();
    expect(initialLength).toBeGreaterThan(1);

    let i = 0;
    while (true) {
      i++;
      await valueInput.clear();
      await valueInput.fill(String(i));

      // preprend
      await increaseRadio.click();
      await updateButton.click();

      const items = getItems(container);

      // Check if all items are visible
      await expect(items).toHaveCount(i + initialLength);

      const isScrollBarVisible = await isVerticalScrollBarVisible(component);
      const itemBottom = await relativeBottom(component, items.last());

      if (isScrollBarVisible) {
        // Check if sticked to bottom
        expectInRange(itemBottom, {
          min: -0.1,
          max: browserName === "firefox" ? 0.45 : 0.1,
        });
        break;
      } else {
        // Check if bottom is always visible and on bottom
        expectInRange(itemBottom, { min: -0.1, max: 0.1 });
      }

      // remove
      await decreaseRadio.click();
      await updateButton.click();
    }

    expect(i).toBeGreaterThanOrEqual(8);
  });

  test("stick to bottom even if many items are removed from top", async ({
    page,
    browserName,
  }) => {
    await page.goto(storyUrl("basics-virtualizer--align-bottom"));

    const [component, container] = await Promise.all([
      getScrollable(page),
      getVirtualizer(page),
    ]);

    await page.getByRole("checkbox", { name: "prepend" }).click();
    const decreaseRadio = page.getByRole("radio", { name: "decrease" });
    const increaseRadio = page.getByRole("radio", { name: "increase" });
    const valueInput = page.getByRole("spinbutton");
    const updateButton = page.getByRole("button", { name: "update" });

    // preprend many
    await valueInput.clear();
    await valueInput.fill("50");
    await increaseRadio.click();
    await updateButton.click();

    // scroll to bottom
    await scrollToBottom(component);

    // remove many
    await valueInput.clear();
    await valueInput.fill("1");
    await decreaseRadio.click();
    let i = 0;
    while (true) {
      i++;
      await updateButton.click();

      const isScrollBarVisible = await isVerticalScrollBarVisible(component);
      const itemBottom = await relativeBottom(
        component,
        getItems(container).last(),
      );

      // Check if bottom is always visible and on bottom
      expectInRange(itemBottom, {
        min: browserName === "firefox" ? -0.6 : -0.5,
        max: 0.5,
      });

      if (!isScrollBarVisible) {
        break;
      } else {
        // may have subpixel error so scroll to bottom again
        await component.evaluate((e) => (e.scrollTop += e.scrollHeight));
      }
    }

    expect(i).toBeGreaterThanOrEqual(30);
  });
});
