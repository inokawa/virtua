import { test, expect } from "@playwright/test";
import {
  storyUrl,
  windowScrollToBottom,
  windowScrollToRight,
  windowScrollToLeft,
  getVirtualizer,
  getWindowScrollTop,
  getWindowScrollLeft,
  getWindowScrollBottom,
  getWindowScrollRight,
  expectInRange,
  windowScrollBy,
  clearInput,
  listenScrollCount,
  windowTop,
  windowBottom,
  relativeTop,
  getChildren,
} from "./utils";

test.describe("smoke", () => {
  test("vertically scrollable", async ({ page }) => {
    await page.goto(storyUrl("basics-windowvirtualizer--default"));

    const component = await getVirtualizer(page);

    // check if start is displayed
    await expect(component.getByText("0", { exact: true })).toBeVisible();
    await expect(component.getByText("50", { exact: true })).not.toBeVisible();

    // scroll to the end
    await windowScrollToBottom(page);

    // check if the end is displayed
    await expect(component.getByText("999", { exact: true })).toBeVisible();
    await expect(component.getByText("949", { exact: true })).not.toBeVisible();
  });

  test("horizontally scrollable", async ({ page }) => {
    await page.goto(storyUrl("basics-windowvirtualizer--horizontal"));

    const component = await getVirtualizer(page);

    // check if start is displayed
    await expect(
      component.getByText("Column 0", { exact: true })
    ).toBeVisible();
    await expect(
      component.getByText("Column 50", { exact: true })
    ).not.toBeVisible();

    // scroll to the end
    await windowScrollToRight(page);

    // check if the end is displayed
    await expect(
      component.getByText("Column 999", { exact: true })
    ).toBeVisible();
    await expect(
      component.getByText("Column 949", { exact: true })
    ).not.toBeVisible();
  });

  test("display: none", async ({ page }) => {
    await page.goto(storyUrl("basics-windowvirtualizer--default"));

    const component = await getVirtualizer(page);

    const initialTotalHeight = await component.evaluate(
      (s) => getComputedStyle(s as HTMLElement).height
    );

    await component.evaluate((s) => (s.style.display = "none"));

    const changedTotalHeight = await component.evaluate(
      (s) => getComputedStyle(s as HTMLElement).height
    );

    expect(initialTotalHeight).toBeTruthy();
    expect(initialTotalHeight).toEqual(changedTotalHeight);
  });

  test("should not have minimum size", async ({ page }) => {
    await page.goto(storyUrl("basics-windowvirtualizer--increasing-items"));

    const component = await getVirtualizer(page);

    expect(await component.evaluate((s) => document.body.scrollHeight)).toBe(
      await component.evaluate((s) => document.body.offsetHeight)
    );
  });
});

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
    while ((performance.now() - start) / 1000 < 8) {
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

    // check if offset from end is always keeped
    await component.click();
    const min = 200;
    const initial = await getWindowScrollBottom(page);
    let prev = initial;
    const start = performance.now();
    while ((performance.now() - start) / 1000 < 8) {
      await page.keyboard.press("ArrowUp", { delay: 10 });
      const offset = await getWindowScrollBottom(page);
      expect(offset).toBeGreaterThanOrEqual(
        browserName === "firefox" ? prev - 1 : prev
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
      component.getByText("Column 0", { exact: true })
    ).toBeVisible();

    // check if offset from start is always keeped
    await component.click();
    const min = 200;
    const initial = await getWindowScrollLeft(page);
    let prev = initial;
    const start = performance.now();
    while ((performance.now() - start) / 1000 < 8) {
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
      component.getByText("Column 0", { exact: true })
    ).toBeVisible();

    // scroll to the end
    await windowScrollToRight(page);

    // check if offset from end is always keeped
    await component.click();
    const min = 200;
    const initial = await getWindowScrollRight(page);
    let prev = initial;
    const start = performance.now();
    while ((performance.now() - start) / 1000 < 8) {
      await page.keyboard.press("ArrowLeft", { delay: 10 });
      const offset = await getWindowScrollRight(page);
      expect(offset).toBeGreaterThanOrEqual(
        browserName === "firefox" ? prev - 1 : prev
      );
      prev = offset;
    }
    expect(prev).toBeGreaterThan(initial + min);
  });
});

test.describe("check if item shift compensation works", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(storyUrl("basics-windowvirtualizer--increasing-items"));
  });

  test("keep end at mid when add to/remove from end", async ({ page }) => {
    const updateButton = page.getByRole("button", { name: "update" });

    // fill list and move to mid
    for (let i = 0; i < 20; i++) {
      await updateButton.click();
    }
    await windowScrollBy(page, 400);
    await page.waitForTimeout(500);

    const component = await getVirtualizer(page);

    const topItem = getChildren(component).first();
    const topItemText = (await topItem.textContent())!;
    const topItemTop = await windowTop(topItem);
    expect(topItemText).not.toBe("0");
    expect(topItemText.length).toBeLessThanOrEqual(2);

    // add
    await page.getByRole("radio", { name: "increase" }).click();
    await updateButton.click();
    // check if visible item is keeped
    const topItem2 = getChildren(component).first();
    await expect(topItem2).toHaveText(topItemText);
    expect(await windowTop(topItem2)).toBe(topItemTop);

    // remove
    await page.getByRole("radio", { name: "decrease" }).click();
    await updateButton.click();
    // check if visible item is keeped
    const topItem3 = getChildren(component).first();
    await expect(topItem3).toHaveText(topItemText);
    expect(await windowTop(topItem3)).toBe(topItemTop);
  });

  test("keep start at mid when add to/remove from start", async ({ page }) => {
    const updateButton = page.getByRole("button", { name: "update" });

    // fill list and move to mid
    for (let i = 0; i < 20; i++) {
      await updateButton.click();
    }
    await windowScrollBy(page, 800);
    await page.waitForTimeout(500);

    const component = await getVirtualizer(page);

    const topItem = getChildren(component).first();
    const topItemText = (await topItem.textContent())!;
    const topItemTop = await windowTop(topItem);
    expect(topItemText).not.toBe("0");
    expect(topItemText.length).toBeLessThanOrEqual(2);

    // add
    await page.getByRole("checkbox", { name: "prepend" }).click();
    await page.getByRole("radio", { name: "increase" }).click();
    await updateButton.click();

    // check if visible item is keeped
    const topItem2 = getChildren(component).first();
    await expect(topItem2).toHaveText(topItemText);
    expect(await windowTop(topItem2)).toBe(topItemTop);

    // remove
    await page.getByRole("radio", { name: "decrease" }).click();
    await updateButton.click();
    // check if visible item is keeped
    const topItem3 = getChildren(component).first();
    await expect(topItem3).toHaveText(topItemText);
    expect(await windowTop(topItem3)).toBe(topItemTop);
  });

  test("prepending when total height is lower than viewport height", async ({
    page,
    browserName,
  }) => {
    const component = await getVirtualizer(page);

    await page.getByRole("checkbox", { name: "prepend" }).click();
    const decreaseRadio = page.getByRole("radio", { name: "decrease" });
    const increaseRadio = page.getByRole("radio", { name: "increase" });
    const valueInput = page.getByRole("spinbutton");
    const updateButton = page.getByRole("button", { name: "update" });

    const container = await getVirtualizer(page);
    const initialLength = await container.evaluate((e) => e.childNodes.length);
    expect(initialLength).toBeGreaterThan(1);

    const getWindowLastItem = () => {
      return page.evaluate(() => {
        const bottom = 0 + window.innerHeight;
        const left = 0;
        const el = document.elementFromPoint(left + 2, bottom - 2)!;
        const elRect = el.getBoundingClientRect();
        return {
          bottom: elRect.bottom - bottom,
        };
      });
    };

    let i = 0;
    while (true) {
      i++;
      await valueInput.clear();
      await valueInput.fill(String(i));

      // preprend
      await increaseRadio.click();
      await updateButton.click();
      await (await component.elementHandle())!.waitForElementState("stable");

      const [childrenCount, firstItemRectTop] = await container.evaluate(
        (e) => {
          const children = e.childNodes;
          return [
            children.length,
            (children[0] as HTMLElement).getBoundingClientRect().top,
          ];
        }
      );
      const isScrollBarVisible = await page.evaluate(() => {
        return document.body.scrollHeight > window.innerHeight;
      });

      // Check if all items are visible
      expect(childrenCount).toBe(i + initialLength);

      if (isScrollBarVisible) {
        // Check if sticked to bottom
        expectInRange((await getWindowLastItem()).bottom, {
          min: browserName === "firefox" ? -0.45 : -0.1,
          max: 0.1,
        });
        break;
      } else {
        // Check if top is always visible and on top
        expect(firstItemRectTop).toBe(0);
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
    const component = await getVirtualizer(page);

    await page.getByRole("checkbox", { name: "prepend" }).click();
    const decreaseRadio = page.getByRole("radio", { name: "decrease" });
    const increaseRadio = page.getByRole("radio", { name: "increase" });
    const valueInput = page.getByRole("spinbutton");
    const updateButton = page.getByRole("button", { name: "update" });

    const container = await getVirtualizer(page);

    // preprend many
    await valueInput.clear();
    await valueInput.fill("50");
    await increaseRadio.click();
    await updateButton.click();

    // scroll to bottom
    await windowScrollToBottom(page);

    // remove many
    await valueInput.clear();
    await valueInput.fill("1");
    await decreaseRadio.click();
    let i = 0;
    while (true) {
      i++;
      await updateButton.click();

      const lastItemRectBottom = await container.evaluate((e) => {
        const children = e.childNodes;
        return (
          children[children.length - 1] as HTMLElement
        ).getBoundingClientRect().bottom;
      });
      const [isScrollBarVisible, windowBottom] = await page.evaluate(() => {
        return [
          document.body.scrollHeight > window.innerHeight,
          window.innerHeight,
        ];
      });
      const itemBottom = lastItemRectBottom - windowBottom;

      if (!isScrollBarVisible) {
        break;
      } else {
        // Check if bottom is always visible and on bottom
        expectInRange(itemBottom, {
          min: -0.5,
          max: browserName === "firefox" ? 0.6 : 0.50001,
        });
        // may have subpixel error so scroll to bottom again
        await component.evaluate((e) => window.scrollBy(0, e.scrollHeight));
      }
    }

    expect(i).toBeGreaterThanOrEqual(30);
  });
});

test.describe("RTL", () => {
  test("vertically scrollable", async ({ page }) => {
    await page.goto(storyUrl("basics-windowvirtualizer--default"), {
      waitUntil: "domcontentloaded",
    });
    await page.evaluate(() => {
      document.documentElement.dir = "rtl";
    });

    const component = await getVirtualizer(page);

    // check if start is displayed
    await expect(component.getByText("0", { exact: true })).toBeVisible();
    await expect(component.getByText("50", { exact: true })).not.toBeVisible();

    // scroll to the end
    await windowScrollToBottom(page);

    // check if the end is displayed
    await expect(component.getByText("999", { exact: true })).toBeVisible();
    await expect(component.getByText("949", { exact: true })).not.toBeVisible();
  });

  test("horizontally scrollable", async ({ page }) => {
    await page.goto(storyUrl("basics-windowvirtualizer--horizontal"), {
      waitUntil: "domcontentloaded",
    });
    await page.evaluate(() => {
      document.documentElement.dir = "rtl";
    });

    const component = await getVirtualizer(page);

    // check if start is displayed
    await expect(
      component.getByText("Column 0", { exact: true })
    ).toBeVisible();
    await expect(
      component.getByText("Column 50", { exact: true })
    ).not.toBeVisible();

    // scroll to the end
    await windowScrollToLeft(page);

    // check if the end is displayed
    await expect(
      component.getByText("Column 999", { exact: true })
    ).toBeVisible();
    await expect(
      component.getByText("Column 949", { exact: true })
    ).not.toBeVisible();
  });
});

test.describe("check if scrollToIndex works", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(storyUrl("basics-windowvirtualizer--scroll-to"));
  });

  test.describe("align start", () => {
    test("mid", async ({ page }) => {
      const component = await getVirtualizer(page);

      // check if start is displayed
      await expect(component.getByText("0", { exact: true })).toBeVisible();

      const button = page.getByRole("button", { name: "scroll to index" });
      const input = await button.evaluateHandle(
        (el) => el.previousSibling as HTMLInputElement
      );

      await clearInput(input);
      await input.fill("700");
      await button.click();

      // Check if scrolled precisely
      const firstItem = component.getByText("700", { exact: true });
      await expect(firstItem).toBeVisible();
      expect(await windowTop(firstItem)).toEqual(0);

      // Check if unnecessary items are not rendered
      await expect(
        component.getByText("650", { exact: true })
      ).not.toBeVisible();
      await expect(
        component.getByText("750", { exact: true })
      ).not.toBeVisible();
    });

    test("start", async ({ page }) => {
      const component = await getVirtualizer(page);

      // check if start is displayed
      await expect(component.getByText("0", { exact: true })).toBeVisible();

      const button = page.getByRole("button", { name: "scroll to index" });
      const input = await button.evaluateHandle(
        (el) => el.previousSibling as HTMLInputElement
      );

      await clearInput(input);
      await input.fill("500");
      await button.click();

      await expect(component.getByText("500", { exact: true })).toBeVisible();

      await clearInput(input);
      await input.fill("0");
      await button.click();

      // Check if scrolled precisely
      const firstItem = component.getByText("0", { exact: true });
      await expect(firstItem).toBeVisible();
      expect(await windowTop(firstItem)).toEqual(0);

      // Check if unnecessary items are not rendered
      await expect(
        component.getByText("50", { exact: true })
      ).not.toBeVisible();
    });

    test("end", async ({ page }) => {
      const component = await getVirtualizer(page);

      // check if start is displayed
      await expect(component.getByText("0", { exact: true })).toBeVisible();

      const button = page.getByRole("button", { name: "scroll to index" });
      const input = await button.evaluateHandle(
        (el) => el.previousSibling as HTMLInputElement
      );

      await clearInput(input);
      await input.fill("999");
      await button.click();

      // Check if scrolled precisely
      const lastItem = component.getByText("999", { exact: true });
      await expect(lastItem).toBeVisible();
      expectInRange(await windowBottom(lastItem), {
        min: -101.9,
        max: 100,
      });

      // Check if unnecessary items are not rendered
      await expect(
        component.getByText("949", { exact: true })
      ).not.toBeVisible();
    });

    test("mid smooth", async ({ page, browserName }) => {
      const component = await getVirtualizer(page);

      const window = await page.evaluateHandle(() => window);

      // check if start is displayed
      await expect(component.getByText("0", { exact: true })).toBeVisible();

      await page.getByRole("checkbox", { name: "smooth" }).click();

      const button = page.getByRole("button", { name: "scroll to index" });
      const input = await button.evaluateHandle(
        (el) => el.previousSibling as HTMLInputElement
      );

      const scrollListener = listenScrollCount(window);

      await clearInput(input);
      await input.fill("700");
      await button.click();

      await page.waitForTimeout(500);

      const called = await scrollListener;

      // Check if this is smooth scrolling
      expect(called).toBeGreaterThanOrEqual(
        // TODO find better way to check in webkit
        browserName === "webkit" ? 2 : 10
      );

      // Check if scrolled precisely
      const firstItem = component.getByText("700", { exact: true });
      await expect(firstItem).toBeVisible();
      expectInRange(await windowTop(firstItem), {
        min: 0,
        max: 1,
      });

      // Check if unnecessary items are not rendered
      await expect(
        component.getByText("650", { exact: true })
      ).not.toBeVisible();
      await expect(
        component.getByText("750", { exact: true })
      ).not.toBeVisible();
    });
  });

  test.describe("align end", () => {
    test.beforeEach(async ({ page }) => {
      await page.getByRole("radio", { name: "end" }).click();
    });

    test("mid", async ({ page }) => {
      const component = await getVirtualizer(page);

      // check if start is displayed
      await expect(component.getByText("0", { exact: true })).toBeVisible();

      const button = page.getByRole("button", { name: "scroll to index" });
      const input = await button.evaluateHandle(
        (el) => el.previousSibling as HTMLInputElement
      );

      await clearInput(input);
      await input.fill("700");
      await button.click();

      // Check if scrolled precisely
      const lastItem = component.getByText("700", { exact: true });
      await expect(lastItem).toBeVisible();
      expectInRange(await windowBottom(lastItem), {
        min: 0,
        max: 1,
      });

      // Check if unnecessary items are not rendered
      await expect(
        component.getByText("650", { exact: true })
      ).not.toBeVisible();
      await expect(
        component.getByText("750", { exact: true })
      ).not.toBeVisible();
    });

    test("start", async ({ page }) => {
      const component = await getVirtualizer(page);

      // check if start is displayed
      await expect(component.getByText("0", { exact: true })).toBeVisible();

      const button = page.getByRole("button", { name: "scroll to index" });
      const input = await button.evaluateHandle(
        (el) => el.previousSibling as HTMLInputElement
      );

      await clearInput(input);
      await input.fill("500");
      await button.click();

      await expect(component.getByText("500", { exact: true })).toBeVisible();

      await clearInput(input);
      await input.fill("0");
      await button.click();

      // Check if scrolled precisely
      const firstItem = component.getByText("0", { exact: true });
      await expect(firstItem).toBeVisible();
      expect(await relativeTop(component, firstItem)).toEqual(0);

      // Check if unnecessary items are not rendered
      await expect(
        component.getByText("50", { exact: true })
      ).not.toBeVisible();
    });

    test("end", async ({ page }) => {
      const component = await getVirtualizer(page);

      // check if start is displayed
      await expect(component.getByText("0", { exact: true })).toBeVisible();

      const button = page.getByRole("button", { name: "scroll to index" });
      const input = await button.evaluateHandle(
        (el) => el.previousSibling as HTMLInputElement
      );

      await clearInput(input);
      await input.fill("999");
      await button.click();

      // Check if scrolled precisely
      const lastItem = component.getByText("999", { exact: true });
      await expect(lastItem).toBeVisible();
      expectInRange(await windowBottom(lastItem), {
        min: 0,
        max: 1,
      });

      // Check if unnecessary items are not rendered
      await expect(
        component.getByText("949", { exact: true })
      ).not.toBeVisible();
    });

    test("mid smooth", async ({ page, browserName }) => {
      const component = await getVirtualizer(page);

      const window = await page.evaluateHandle(() => window);

      // check if start is displayed
      await expect(component.getByText("0", { exact: true })).toBeVisible();

      await page.getByRole("checkbox", { name: "smooth" }).click();

      const button = page.getByRole("button", { name: "scroll to index" });
      const input = await button.evaluateHandle(
        (el) => el.previousSibling as HTMLInputElement
      );

      const scrollListener = listenScrollCount(window);

      await clearInput(input);
      await input.fill("700");
      await button.click();

      await page.waitForTimeout(500);

      const called = await scrollListener;

      // Check if this is smooth scrolling
      expect(called).toBeGreaterThanOrEqual(
        // TODO find better way to check in webkit
        browserName === "webkit" ? 2 : 10
      );

      // Check if scrolled precisely
      const lastItem = component.getByText("700", { exact: true });
      await expect(lastItem).toBeVisible();
      expectInRange(await windowBottom(lastItem), {
        min: 0,
        max: 1,
      });

      // Check if unnecessary items are not rendered
      await expect(
        component.getByText("650", { exact: true })
      ).not.toBeVisible();
      await expect(
        component.getByText("750", { exact: true })
      ).not.toBeVisible();
    });
  });
});
