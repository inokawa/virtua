import { test, expect, Locator, Page } from "@playwright/test";
import {
  storyUrl,
  scrollToBottom,
  scrollToRight,
  approxymate,
  scrollBy,
  getScrollTop,
  getScrollLeft,
  getScrollBottom,
  getScrollRight,
  expectInRange,
  scrollWithTouch,
  scrollToLeft,
  getVirtualizer,
  getScrollable,
  clearTimer,
  scrollTo,
  listenScrollCount,
  relativeRight,
  relativeTop,
  relativeBottom,
  relativeLeft,
  getItems,
  getComputedStyleValue,
  setRTL,
  setDisplayNone,
  getStyleValue,
  findFirstVisibleItem,
  findLastVisibleItem,
} from "./utils";

const isVerticalScrollBarVisible = async (e: Locator) => {
  return e.evaluate((e) => e.scrollHeight > (e as HTMLElement).offsetHeight);
};

test.describe("smoke", () => {
  test("vertically scrollable", async ({ page }) => {
    await page.goto(storyUrl("basics-vlist--default"));

    const component = await getScrollable(page);

    // check if start is displayed
    const first = component.getByText("0", { exact: true });
    await expect(first).toBeVisible();
    expect(await relativeTop(component, first)).toEqual(0);

    // scroll to the end
    await scrollToBottom(component);

    // check if the end is displayed
    await expect(component.getByText("999", { exact: true })).toBeVisible();
  });

  test("horizontally scrollable", async ({ page }) => {
    await page.goto(storyUrl("basics-vlist--horizontal"));

    const component = await getScrollable(page);

    // check if start is displayed
    const first = component.getByText("Column 0", { exact: true });
    await expect(first).toBeVisible();
    expect(await relativeLeft(component, first)).toEqual(0);

    // scroll to the end
    await scrollToRight(component);

    // check if the end is displayed
    await expect(
      component.getByText("Column 999", { exact: true })
    ).toBeVisible();
  });

  test("reverse", async ({ page }) => {
    await page.goto(storyUrl("basics-vlist--reverse"));

    const component = await getScrollable(page);

    // check if last is displayed
    const last = component.getByText("999", { exact: true });
    await expect(last).toBeVisible();
    expect(await relativeBottom(component, last)).toEqual(0);
  });

  test("display: none", async ({ page }) => {
    await page.goto(storyUrl("basics-vlist--default"));

    const component = await getVirtualizer(page);

    const initialTotalHeight = await getComputedStyleValue(component, "height");

    await setDisplayNone(component);

    const changedTotalHeight = await getComputedStyleValue(component, "height");

    expect(initialTotalHeight).toBeTruthy();
    expect(initialTotalHeight).toEqual(changedTotalHeight);
  });

  test("overflow", async ({ page }) => {
    await page.goto(storyUrl("basics-vlist--overflow"));

    const component = await getVirtualizer(page);

    const label = component.getByText("2", { exact: true });
    await expect(label).toHaveCSS("position", "absolute");

    // check if element is visible in front
    expect(
      await label.evaluate((e) => {
        const rect = e.getBoundingClientRect();
        const pointed = document.elementFromPoint(
          rect.x + rect.width / 2,
          rect.y + rect.height / 2
        );
        return e === pointed;
      })
    ).toBe(true);
  });

  test("new window", async ({ page, context }) => {
    await page.goto(storyUrl("advanced-newwindow--default"));

    // open new window
    const newPagePromise = context.waitForEvent("page");
    await page.getByRole("button", { name: "open window" }).click();
    const newPage = await newPagePromise;

    const component = await getScrollable(newPage);

    // check if start is displayed
    const first = component.getByText("0", { exact: true });
    await expect(first).toBeVisible();
    expect(await relativeTop(component, first)).toEqual(0);

    // scroll to the end
    await scrollToBottom(component);

    // check if the end is displayed
    await expect(component.getByText("999", { exact: true })).toBeVisible();
  });

  test("scroll restoration", async ({ page }) => {
    await page.goto(storyUrl("basics-vlist--scroll-restoration"));

    const component = await getScrollable(page);

    // check if start is displayed
    const initialItem = await findFirstVisibleItem(component);
    const initialText = "0";
    await expect(initialItem).toHaveText(initialText);

    // scroll to mid
    await scrollTo(component, 5000);
    await page.waitForTimeout(250);
    const mountedItem = await findFirstVisibleItem(component);
    await expect(mountedItem).not.toHaveText(initialText);
    const mountedItemText = (await mountedItem.textContent())!;
    const mountedItemTop = await relativeTop(component, mountedItem);

    // check if items are unmounted
    await page.getByRole("button", { name: "hide" }).click();

    await expect(component).not.toBeAttached();

    // check if scroll position is restored
    await page.getByRole("button", { name: "show" }).click();
    await page.waitForTimeout(250);
    const remountedComponent = await getScrollable(page);
    const remountedItem = await findFirstVisibleItem(remountedComponent);
    await expect(remountedItem).toHaveText(mountedItemText);
    expect(await relativeTop(remountedComponent, remountedItem)).toEqual(
      mountedItemTop
    );
  });
});

test.describe("check if it works when children change", () => {
  test("recovering from 0", async ({ page }) => {
    await page.goto(storyUrl("basics-vlist--increasing-items"));
    const component = await getScrollable(page);

    const updateButton = page.getByRole("button", { name: "update" });

    // delete all
    await page.getByRole("radio", { name: "decrease" }).click();
    for (let i = 0; i < 10; i++) {
      await updateButton.click();
    }
    await expect(getItems(component)).toHaveCount(0);

    // add
    await page.getByRole("radio", { name: "increase" }).click();
    await updateButton.click();
    {
      // check if an error didn't occur
      expect(
        (await page.innerText("body")).toLowerCase().includes("localhost")
      ).toBeFalsy();
    }
  });

  test("recovering when changed a lot after scrolling", async ({ page }) => {
    await page.goto(storyUrl("basics-vlist--increasing-items"));
    const component = await getScrollable(page);

    const input = page.getByRole("spinbutton");
    const updateButton = page.getByRole("button", { name: "update" });

    // add many
    await input.fill("1000");
    await updateButton.click();

    // scroll a lot
    await scrollToBottom(component);
    const topItem = await findFirstVisibleItem(component);
    await expect(topItem!).not.toHaveText("0");

    // delete many
    await page.getByRole("radio", { name: "decrease" }).click();
    await updateButton.click();

    // add many
    await page.getByRole("radio", { name: "increase" }).click();
    await updateButton.click();

    {
      // check if an error didn't occur
      expect(
        (await page.innerText("body")).toLowerCase().includes("localhost")
      ).toBeFalsy();
    }
  });
});

test.describe("check if scroll jump compensation works", () => {
  test("vertical start -> end", async ({ page }) => {
    await page.goto(storyUrl("basics-vlist--default"));
    const component = await getScrollable(page);

    // check if start is displayed
    await expect(component.getByText("0", { exact: true })).toBeVisible();

    // check if offset from start is always keeped
    await component.click();
    const min = 200;
    const initial = await getScrollTop(component);
    let prev = initial;
    const start = performance.now();
    while ((performance.now() - start) / 1000 < 8) {
      await page.keyboard.press("ArrowDown", { delay: 10 });
      const offset = await getScrollTop(component);
      expect(offset).toBeGreaterThanOrEqual(prev);
      prev = offset;
    }
    expect(prev).toBeGreaterThan(initial + min);
  });

  test("vertical end -> start", async ({ page }) => {
    await page.goto(storyUrl("basics-vlist--default"));
    const component = await getScrollable(page);

    // check if start is displayed
    await expect(component.getByText("0", { exact: true })).toBeVisible();

    // scroll to the end
    await scrollToBottom(component);

    // check if offset from end is always keeped
    await component.click();
    const min = 200;
    const initial = await getScrollBottom(component);
    let prev = initial;
    const start = performance.now();
    while ((performance.now() - start) / 1000 < 8) {
      await page.keyboard.press("ArrowUp", { delay: 10 });
      const offset = await getScrollBottom(component);
      expect(offset).toBeGreaterThanOrEqual(prev);
      prev = offset;
    }
    expect(prev).toBeGreaterThan(initial + min);
  });

  test("horizontal start -> end", async ({ page }) => {
    await page.goto(storyUrl("basics-vlist--horizontal"));
    const component = await getScrollable(page);

    // check if start is displayed
    await expect(
      component.getByText("Column 0", { exact: true })
    ).toBeVisible();

    // check if offset from start is always keeped
    await component.click();
    const min = 200;
    const initial = await getScrollLeft(component);
    let prev = initial;
    const start = performance.now();
    while ((performance.now() - start) / 1000 < 8) {
      await page.keyboard.press("ArrowRight", { delay: 10 });
      const offset = await getScrollLeft(component);
      expect(offset).toBeGreaterThanOrEqual(prev);
      prev = offset;
    }
    expect(prev).toBeGreaterThan(initial + min);
  });

  test("horizontal end -> start", async ({ page }) => {
    await page.goto(storyUrl("basics-vlist--horizontal"));
    const component = await getScrollable(page);

    // check if start is displayed
    await expect(
      component.getByText("Column 0", { exact: true })
    ).toBeVisible();

    // scroll to the end
    await scrollToRight(component);

    // check if offset from end is always keeped
    await component.click();
    const min = 200;
    const initial = await getScrollRight(component);
    let prev = initial;
    const start = performance.now();
    while ((performance.now() - start) / 1000 < 8) {
      await page.keyboard.press("ArrowLeft", { delay: 10 });
      const offset = await getScrollRight(component);
      expect(offset).toBeGreaterThanOrEqual(prev);
      prev = offset;
    }
    expect(prev).toBeGreaterThan(initial + min);
  });

  test("resize when its top is out of viewport", async ({ page }) => {
    await page.goto(storyUrl("advanced-collapse--collapse-and-scroll"));
    const [component, container] = await Promise.all([
      getScrollable(page),
      getVirtualizer(page),
    ]);

    expect(await getItems(container).count()).toBeGreaterThanOrEqual(3);

    const targetIndex = 1;
    const targetText =
      String(targetIndex) + "ResizeSmooth ScrollResize + Smooth Scroll";
    const marginTop = 100;

    const getTargetItem = () => {
      return getItems(container).filter({ hasText: targetText }).first();
    };

    // resize and check if jump compensation doesn't work
    // collapse -> expand
    for (let i = 0; i <= 1; i++) {
      await scrollTo(
        component,
        (await getTargetItem().evaluate((e) => (e as HTMLElement).offsetTop)) +
          marginTop
      );
      const initialItem = await findFirstVisibleItem(component);
      await expect(initialItem).toHaveText(targetText);
      const initialItemTop = await relativeTop(component, initialItem);
      expect(initialItemTop).toBeLessThan(0);

      await page.waitForTimeout(200);
      await getTargetItem()
        .locator("button")
        .first()
        .filter({ hasText: "Resize" })
        .click();

      await (await getTargetItem().elementHandle())!.waitForElementState(
        "stable"
      );

      const updatedItem = await findFirstVisibleItem(component);
      await expect(updatedItem).toHaveText(targetText);
      expect(await relativeTop(component, updatedItem)).toEqual(initialItemTop);
    }
  });

  test("resize at bottom", async ({ page, browserName }) => {
    await page.goto(storyUrl("advanced-collapse--two-stage-render"));
    const component = await getScrollable(page);
    await expect(component.getByText("Delayed Content").first()).toBeVisible();

    // should reach to the bottom within the specified number of tries
    for (let i = 0; i <= 1; i++) {
      // scroll to bottom
      await scrollToBottom(component);

      const prevBottom = await relativeBottom(
        component,
        await findLastVisibleItem(component)
      );

      // wait for resize completed
      await page.waitForTimeout(500);

      const bottom = await relativeBottom(
        component,
        await findLastVisibleItem(component)
      );

      // check if distance from the bottom isn't changed by resizes
      if (
        browserName === "firefox"
          ? Math.abs(bottom - prevBottom) <= 2
          : bottom === prevBottom
      ) {
        // succeeded
        return;
      }
    }

    throw new Error(`couldn't reach the bottom`);
  });

  test("resize with smooth scroll", async ({ page }) => {
    await page.goto(storyUrl("advanced-collapse--collapse-and-scroll"));
    const [component, container] = await Promise.all([
      getScrollable(page),
      getVirtualizer(page),
    ]);

    expect(await getItems(container).count()).toBeGreaterThanOrEqual(3);

    const targetIndex = 1;
    const targetText =
      String(targetIndex) + "ResizeSmooth ScrollResize + Smooth Scroll";

    const getTargetItem = () => {
      return getItems(container).filter({ hasText: targetText }).first();
    };

    const getResizeAndScrollButton = () => {
      return getTargetItem()
        .locator("button")
        .last()
        .filter({ hasText: "Resize + Smooth Scroll" });
    };

    // scroll from the upper side
    // collapse -> expand
    for (let i = 0; i <= 1; i++) {
      await scrollTo(component, 0);
      const initialItem = await findFirstVisibleItem(component);
      const initialItemTop = await relativeTop(component, initialItem);
      expect(initialItemTop).toEqual(0);
      await expect(initialItem).not.toHaveText(targetText);

      await page.waitForTimeout(200);
      const scrollListener = listenScrollCount(component, 1000);
      await getResizeAndScrollButton().click();
      const called = await scrollListener;
      expect(called).toBeGreaterThanOrEqual(2);
      const updatedItem = await findFirstVisibleItem(component);
      expect(await relativeTop(component, updatedItem)).toEqual(0);
      await expect(updatedItem).toHaveText(targetText);
    }

    // scroll from the lower side
    // collapse -> expand
    for (let i = 0; i <= 1; i++) {
      // collapse
      await scrollTo(
        component,
        await getTargetItem().evaluate(
          (e) => (e as HTMLElement).offsetTop + e.getBoundingClientRect().height
        )
      );
      const initialItem = await findFirstVisibleItem(component);
      const initialItemTop = await relativeTop(component, initialItem);
      expect(initialItemTop).toEqual(0);
      await expect(initialItem).not.toHaveText(targetText);

      await page.waitForTimeout(200);
      const scrollListener = listenScrollCount(component, 1000);
      await getResizeAndScrollButton().click();
      const called = await scrollListener;
      expect(called).toBeGreaterThanOrEqual(2);
      const updatedItem = await findFirstVisibleItem(component);
      expect(await relativeTop(component, updatedItem)).toEqual(0);
      await expect(updatedItem).toHaveText(targetText);
    }
  });

  test("stick to bottom", async ({ page }) => {
    await page.goto(storyUrl("advanced-chat--default"));
    const component = await getScrollable(page);
    // check if end is displayed
    const initialItem = await findLastVisibleItem(component);
    const initialItemBottom = await relativeBottom(component, initialItem);
    const initialItemText = (await initialItem.textContent())!;
    expectInRange(initialItemBottom, { min: 0, max: 1 });

    await clearTimer(page);

    const button = page.getByRole("button", { name: "submit" });
    const textarea = page.getByRole("textbox")!;

    // append small item
    await button.click();

    const smallItem = await findLastVisibleItem(component);
    await expect(smallItem).not.toHaveText(initialItemText);
    expectInRange(await relativeBottom(component, smallItem), {
      min: 0,
      max: 1,
    });
    const smallItemText = (await smallItem.textContent())!;
    const smallItemHeight = (await smallItem.boundingBox())!.height;

    // append large item
    await textarea.clear();
    await textarea.fill(
      "Hello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\n"
    );
    await button.click();
    await (await component.elementHandle())!.waitForElementState("stable");

    const largeItem = await findLastVisibleItem(component);
    await expect(largeItem).not.toHaveText(smallItemText);
    expectInRange(await relativeBottom(component, largeItem), {
      min: 0,
      max: 1,
    });
    expect((await largeItem.boundingBox())!.height).toBeGreaterThan(
      smallItemHeight * 10
    );
  });

  test("dynamic image", async ({ page, browserName }) => {
    await page.goto(storyUrl("advanced-feed--default"));
    const component = await getScrollable(page);

    // TODO firefox is bit unstable
    const nearlyZeroMax = browserName === "firefox" ? 2 : 1;

    // check if start is displayed
    expectInRange(
      await relativeTop(component, await findFirstVisibleItem(component)),
      {
        min: 0,
        max: nearlyZeroMax,
      }
    );

    // check if stable after image load
    await page.waitForTimeout(3000);
    expectInRange(
      await relativeTop(component, await findFirstVisibleItem(component)),
      {
        min: 0,
        max: nearlyZeroMax,
      }
    );

    // scroll to top
    await scrollTo(component, 0);

    // wait for prepending
    await component.evaluate((e) => {
      let timer: null | ReturnType<typeof setTimeout> = null;

      return new Promise<void>((resolve, reject) => {
        let prepended = false;

        if (e.scrollTop !== 0) {
          reject();
          return;
        }
        const cb = () => {
          if (e.scrollTop > 1000) {
            prepended = true;
          } else {
            if (!prepended) {
              return;
            }
          }

          if (timer !== null) {
            clearTimeout(timer);
          }
          timer = setTimeout(() => {
            e.removeEventListener("scroll", cb);
            resolve();
          }, 2000);
        };
        e.addEventListener("scroll", cb);
      });
    });

    // check if stable after prepending
    expectInRange(
      await relativeTop(component, await findFirstVisibleItem(component)),
      {
        min: 0,
        max: nearlyZeroMax,
      }
    );
  });
});

test.describe("check if scrollToIndex works", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(storyUrl("basics-vlist--scroll-to"));
  });

  test.describe("align start", () => {
    test("mid", async ({ page }) => {
      const component = await getScrollable(page);

      // check if start is displayed
      await expect(component.getByText("0", { exact: true })).toBeVisible();

      const button = page.getByRole("button", { name: "scroll to index" });
      const input = page.getByRole("spinbutton").first();

      await input.clear();
      await input.fill("700");
      await button.click();

      // Check if scrolled precisely
      const firstItem = component.getByText("700", { exact: true });
      await expect(firstItem).toBeVisible();
      expect(await relativeTop(component, firstItem)).toEqual(0);

      // Check if unnecessary items are not rendered
      await expect(
        component.getByText("650", { exact: true })
      ).not.toBeVisible();
      await expect(
        component.getByText("750", { exact: true })
      ).not.toBeVisible();
    });

    test("start", async ({ page }) => {
      const component = await getScrollable(page);

      // check if start is displayed
      await expect(component.getByText("0", { exact: true })).toBeVisible();

      const button = page.getByRole("button", { name: "scroll to index" });
      const input = page.getByRole("spinbutton").first();

      await input.clear();
      await input.fill("500");
      await button.click();

      await expect(component.getByText("500", { exact: true })).toBeVisible();

      await input.clear();
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
      const component = await getScrollable(page);

      // check if start is displayed
      await expect(component.getByText("0", { exact: true })).toBeVisible();

      const button = page.getByRole("button", { name: "scroll to index" });
      const input = page.getByRole("spinbutton").first();

      await input.clear();
      await input.fill("999");
      await button.click();

      // Check if scrolled precisely
      const lastItem = component.getByText("999", { exact: true });
      await expect(lastItem).toBeVisible();
      expectInRange(await relativeBottom(component, lastItem), {
        min: -0.9,
        max: 1,
      });

      // Check if unnecessary items are not rendered
      await expect(
        component.getByText("949", { exact: true })
      ).not.toBeVisible();
    });

    test("mid smooth", async ({ page, browserName }) => {
      const component = await getScrollable(page);

      // check if start is displayed
      await expect(component.getByText("0", { exact: true })).toBeVisible();

      await page.getByRole("checkbox", { name: "smooth" }).click();

      const button = page.getByRole("button", { name: "scroll to index" });
      const input = page.getByRole("spinbutton").first();

      const scrollListener = listenScrollCount(component);

      await input.clear();
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
      expectInRange(await relativeTop(component, firstItem), {
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
      const component = await getScrollable(page);

      // check if start is displayed
      await expect(component.getByText("0", { exact: true })).toBeVisible();

      const button = page.getByRole("button", { name: "scroll to index" });
      const input = page.getByRole("spinbutton").first();

      await input.clear();
      await input.fill("700");
      await button.click();

      // Check if scrolled precisely
      const lastItem = component.getByText("700", { exact: true });
      await expect(lastItem).toBeVisible();
      expectInRange(await relativeBottom(component, lastItem), {
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
      const component = await getScrollable(page);

      // check if start is displayed
      await expect(component.getByText("0", { exact: true })).toBeVisible();

      const button = page.getByRole("button", { name: "scroll to index" });
      const input = page.getByRole("spinbutton").first();

      await input.clear();
      await input.fill("500");
      await button.click();

      await expect(component.getByText("500", { exact: true })).toBeVisible();

      await input.clear();
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
      const component = await getScrollable(page);

      // check if start is displayed
      await expect(component.getByText("0", { exact: true })).toBeVisible();

      const button = page.getByRole("button", { name: "scroll to index" });
      const input = page.getByRole("spinbutton").first();

      await input.clear();
      await input.fill("999");
      await button.click();

      // Check if scrolled precisely
      const lastItem = component.getByText("999", { exact: true });
      await expect(lastItem).toBeVisible();
      expectInRange(await relativeBottom(component, lastItem), {
        min: -0.5,
        max: 1,
      });

      // Check if unnecessary items are not rendered
      await expect(
        component.getByText("949", { exact: true })
      ).not.toBeVisible();
    });

    test("mid smooth", async ({ page, browserName }) => {
      const component = await getScrollable(page);

      // check if start is displayed
      await expect(component.getByText("0", { exact: true })).toBeVisible();

      await page.getByRole("checkbox", { name: "smooth" }).click();

      const button = page.getByRole("button", { name: "scroll to index" });
      const input = page.getByRole("spinbutton").first();

      const scrollListener = listenScrollCount(component);

      await input.clear();
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
      expectInRange(await relativeBottom(component, lastItem), {
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

test.describe("check if scrollTo works", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(storyUrl("basics-vlist--scroll-to"));
  });

  test("down and up", async ({ page }) => {
    const component = await getScrollable(page);

    // check if start is displayed
    await expect(component.getByText("0", { exact: true })).toBeVisible();

    const button = page.getByRole("button", { name: "scroll to offset" });
    const input = page.getByRole("spinbutton").nth(1);

    // scroll down
    await input.clear();
    await input.fill("5000");
    await button.click();

    expect(
      // scrollTo may not scroll to exact position with dynamic sized items
      approxymate(await getScrollTop(component))
    ).toEqual(5000);

    // scroll up
    await input.clear();
    await input.fill("1000");
    await button.click();

    expect(
      // scrollTo may not scroll to exact position with dynamic sized items
      approxymate(await getScrollTop(component))
    ).toEqual(1000);
  });
});

test.describe("check if scrollBy works", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(storyUrl("basics-vlist--scroll-to"));
  });

  test("down and up", async ({ page }) => {
    const component = await getScrollable(page);

    // check if start is displayed
    await expect(component.getByText("0", { exact: true })).toBeVisible();

    const button = page.getByRole("button", {
      name: "scroll by offset",
    });
    const input = page.getByRole("spinbutton").nth(1);

    // scroll down
    await input.clear();
    await input.fill("1234");
    await button.click();

    expect(await getScrollTop(component)).toEqual(1234);

    // scroll up
    await input.clear();
    await input.fill("-234");
    await button.click();

    expect(await getScrollTop(component)).toEqual(1000);
  });
});

test.describe("check if item shift compensation works", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(storyUrl("basics-vlist--increasing-items"));
  });

  test("keep end at mid when add to/remove from end", async ({ page }) => {
    const component = await getScrollable(page);

    const updateButton = page.getByRole("button", { name: "update" });

    // fill list and move to mid
    for (let i = 0; i < 20; i++) {
      await updateButton.click();
    }
    await scrollBy(component, 400);
    await page.waitForTimeout(500);

    const topItem = await findFirstVisibleItem(component);
    await expect(topItem).not.toHaveText("0");
    const topItemTop = await relativeTop(component, topItem);
    expect((await topItem.textContent())!.length).toBeLessThanOrEqual(2);

    // add
    await page.getByRole("radio", { name: "increase" }).click();
    await updateButton.click();
    await page.waitForTimeout(100);
    // check if visible item is keeped
    expect(await relativeTop(component, topItem)).toEqual(topItemTop);

    // remove
    await page.getByRole("radio", { name: "decrease" }).click();
    await updateButton.click();
    await page.waitForTimeout(100);
    // check if visible item is keeped
    expect(await relativeTop(component, topItem)).toEqual(topItemTop);
  });

  test("keep start at mid when add to/remove from start", async ({ page }) => {
    const component = await getScrollable(page);

    const updateButton = page.getByRole("button", { name: "update" });

    // fill list and move to mid
    for (let i = 0; i < 20; i++) {
      await updateButton.click();
    }
    await scrollBy(component, 800);
    await page.waitForTimeout(500);

    const topItem = await findFirstVisibleItem(component);
    await expect(topItem).not.toHaveText("0");
    const topItemTop = await relativeTop(component, topItem);
    expect((await topItem.textContent())!.length).toBeLessThanOrEqual(2);

    // add
    await page.getByRole("checkbox", { name: "prepend" }).click();
    await page.getByRole("radio", { name: "increase" }).click();
    await updateButton.click();
    await page.waitForTimeout(100);
    // check if visible item is keeped
    expect(await relativeTop(component, topItem)).toEqual(topItemTop);

    // remove
    await page.getByRole("radio", { name: "decrease" }).click();
    await updateButton.click();
    await page.waitForTimeout(100);
    // check if visible item is keeped
    expect(await relativeTop(component, topItem)).toEqual(topItemTop);
  });

  test("prepending when total height is lower than viewport height", async ({
    page,
    browserName,
  }) => {
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
      const itemTop = await relativeTop(component, items.first());

      if (isScrollBarVisible) {
        // Check if sticked to bottom
        expectInRange(
          await relativeBottom(component, await findLastVisibleItem(component)),
          {
            min: browserName === "firefox" ? -0.45 : -0.1,
            max: 0.1,
          }
        );
        break;
      } else {
        // Check if top is always visible and on top
        expect(itemTop).toBe(0);
      }

      // remove
      await decreaseRadio.click();
      await updateButton.click();
    }

    expect(i).toBeGreaterThanOrEqual(8);
  });

  test("prepending when total height is lower than viewport height and reverse:true", async ({
    page,
    browserName,
  }) => {
    const [component, container] = await Promise.all([
      getScrollable(page),
      getVirtualizer(page),
    ]);

    await page.getByRole("checkbox", { name: "reverse" }).click();

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
    await page.goto(storyUrl("basics-vlist--increasing-items"));
    const [component, container] = await Promise.all([
      getScrollable(page),
      getVirtualizer(page),
    ]);

    await page.getByRole("checkbox", { name: "reverse" }).click();

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
        getItems(container).last()
      );

      // Check if bottom is always visible and on bottom
      expectInRange(itemBottom, {
        min: browserName === "firefox" ? -0.6 : -0.50001,
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

  test("check if prepending cancels imperative scroll", async ({ page }) => {
    await page.goto(storyUrl("advanced-chat--default"));
    await clearTimer(page);

    const component = await getScrollable(page);
    // check if end is displayed
    expectInRange(
      await relativeBottom(component, await findLastVisibleItem(component)),
      { min: 0, max: 1 }
    );

    const scrollListener = listenScrollCount(component);

    const button = page.getByRole("button", { name: "jump to top" });

    // scroll to top
    await button.click();

    // check if imperative scrolling doesn't cause infinite loop
    const scrollCount = await scrollListener;
    expect(scrollCount).toBeLessThanOrEqual(4);
  });
});

test.describe("RTL", () => {
  test("vertically scrollable", async ({ page }) => {
    await page.goto(storyUrl("basics-vlist--default"), {
      waitUntil: "domcontentloaded",
    });
    await setRTL(page);

    const component = await getScrollable(page);

    // check if start is displayed
    const first = component.getByText("0", { exact: true });
    await expect(first).toBeVisible();
    expect(await relativeTop(component, first)).toEqual(0);

    // scroll to the end
    await scrollToBottom(component);

    // check if the end is displayed
    await expect(component.getByText("999", { exact: true })).toBeVisible();
  });

  test("horizontally scrollable", async ({ page }) => {
    await page.goto(storyUrl("basics-vlist--horizontal"), {
      waitUntil: "domcontentloaded",
    });
    await setRTL(page);

    const component = await getScrollable(page);

    // check if start is displayed
    const first = component.getByText("Column 0", { exact: true });
    await expect(first).toBeVisible();
    expect(await relativeRight(component, first)).toEqual(0);

    // scroll to the end
    await scrollToLeft(component);

    // check if the end is displayed
    await expect(
      component.getByText("Column 999", { exact: true })
    ).toBeVisible();
  });
});

test.describe("SSR and hydration", () => {
  test("check if hydration works", async ({ page }) => {
    await page.goto(storyUrl("advanced-ssr--default"));

    const component = await getScrollable(page);

    const firstTop = await relativeTop(
      component,
      await findFirstVisibleItem(component)
    );
    const lastBottom = await relativeBottom(
      component,
      await findLastVisibleItem(component)
    );

    // check if items are aligned correctly before hydration
    const prevItems = getItems(component);
    const firstRect = (await prevItems.nth(0).boundingBox())!;
    await expect(firstRect.y + firstRect.height).toEqual(
      (await prevItems.nth(1).boundingBox())!.y
    );

    // check if SSR suceeded
    const items = getItems(component);
    const initialLength = await items.count();
    expect(initialLength).toBeGreaterThanOrEqual(30);
    await expect(items.first()).toHaveText("0");
    await expect(items.last()).toHaveText(String(initialLength - 1));
    // check if items have styles for SSR
    expect(await getStyleValue(items.first(), "position")).not.toBe("absolute");

    // should not change state with scroll before hydration
    await scrollTo(component, 1000);
    await expect(getItems(component)).toHaveCount(initialLength);
    await page.waitForTimeout(500);
    await scrollTo(component, 0);

    // hydrate
    await page.getByRole("button", { name: "hydrate" }).click();

    // check if hydration suceeded but state is not changed
    await expect(getItems(component)).toHaveCount(initialLength);
    expect(
      await relativeTop(component, await findFirstVisibleItem(component))
    ).toBe(firstTop);
    expect(
      await relativeBottom(component, await findLastVisibleItem(component))
    ).toBe(lastBottom);
    // check if items do not have styles for SSR
    expect(await getStyleValue(items.first(), "position")).toBe("absolute");

    // should change state with scroll after hydration
    await scrollTo(component, 1000);
    await page.waitForTimeout(500);
    await expect(getItems(component)).not.toHaveCount(initialLength);
  });

  test("check if hydration works (horizontal)", async ({ page }) => {
    await page.goto(storyUrl("advanced-ssr--horizontal"));

    const component = await getScrollable(page);

    const firstTop = await relativeTop(
      component,
      await findFirstVisibleItem(component)
    );
    const lastBottom = await relativeBottom(
      component,
      await findLastVisibleItem(component)
    );

    // check if items are aligned correctly before hydration
    const prevItems = getItems(component);
    const firstRect = (await prevItems.nth(0).boundingBox())!;
    await expect(firstRect.x + firstRect.width).toEqual(
      (await prevItems.nth(1).boundingBox())!.x
    );

    // check if SSR suceeded
    const items = getItems(component);
    const initialLength = await items.count();
    expect(initialLength).toBeGreaterThanOrEqual(30);
    await expect(items.first()).toHaveText("Column 0");
    await expect(items.last()).toHaveText(
      "Column " + String(initialLength - 1)
    );

    // check if items have styles for SSR
    expect(await getStyleValue(items.first(), "position")).not.toBe("absolute");

    // should not change state with scroll before hydration
    await scrollTo(component, 1000, "Left");
    await expect(getItems(component)).toHaveCount(initialLength);
    await page.waitForTimeout(500);
    await scrollTo(component, 0, "Left");

    // hydrate
    await page.getByRole("button", { name: "hydrate" }).click();

    // check if hydration suceeded but state is not changed
    await expect(getItems(component)).toHaveCount(initialLength);
    expect(
      await relativeTop(component, await findFirstVisibleItem(component))
    ).toBe(firstTop);
    expect(
      await relativeBottom(component, await findLastVisibleItem(component))
    ).toBe(lastBottom);
    // check if items do not have styles for SSR
    expect(await getStyleValue(items.first(), "position")).toBe("absolute");

    // should change state with scroll after hydration
    await scrollTo(component, 1000, "Left");
    await page.waitForTimeout(500);
    await expect(getItems(component)).not.toHaveCount(initialLength);
  });

  test("check if smooth scrolling works after hydration", async ({ page }) => {
    await page.goto(storyUrl("advanced-ssr--scroll-to"));

    const component = await getScrollable(page);

    // turn scroll to index with smooth on
    await page.getByRole("checkbox", { name: "scroll to index" }).check();
    await page.getByRole("checkbox", { name: "smooth" }).check();

    // set scroll index to 100
    await page.getByRole("spinbutton").fill("100");

    // hydrate
    await page.getByRole("button", { name: "hydrate" }).click();

    await page.waitForTimeout(1000);
    expect(await (await findFirstVisibleItem(component)).textContent()).toEqual(
      "100"
    );
  });
});

test.describe("emulated iOS WebKit", () => {
  const getWindowSize = (page: Page) => {
    return page.evaluate(
      () => [window.outerWidth, window.outerHeight] as const
    );
  };

  test.describe("check if scroll jump compensation works", () => {
    test("scroll with touch", async ({ page }) => {
      await page.goto(storyUrl("basics-vlist--default"));

      const component = await getScrollable(page);

      // check if first is displayed
      const last = component.getByText("0", { exact: true });
      await expect(last).toBeVisible();
      expect(await relativeTop(component, last)).toEqual(0);

      await component.tap();

      const [w, h] = await getWindowSize(page);
      const centerX = w / 2;
      const centerY = h / 2;

      let top: number = await getScrollTop(component);
      for (let i = 0; i < 5; i++) {
        await scrollWithTouch(component, {
          fromX: centerX,
          fromY: centerY + h / 3,
          toX: centerX,
          toY: centerY - h / 3,
        });

        // check if item position is preserved during flush
        // const nextTopBeforeFlush = await getScrollTop(component);
        const nextLastItemBeforeFlush = await findFirstVisibleItem(component);
        const nextLastItemBeforeFlushText =
          (await nextLastItemBeforeFlush.textContent())!;
        const nextLastItemBeforeFlushTop = await relativeTop(
          component,
          nextLastItemBeforeFlush
        );
        await page.waitForTimeout(500);
        const nextLastItem = await findFirstVisibleItem(component);
        await expect(nextLastItem).toHaveText(nextLastItemBeforeFlushText);
        expect(
          Math.abs(
            (await relativeTop(component, nextLastItem)) -
              nextLastItemBeforeFlushTop
          ) // FIXME: may not be 0 in Safari
        ).toBeLessThanOrEqual(1);

        const nextTop = await getScrollTop(component);
        expect(nextTop).toBeGreaterThan(top);
        // expect(nextTop).not.toBe(nextTopBeforeFlush);

        top = nextTop;
      }
    });

    // test("reverse scroll with touch", async ({ page }) => {
    //   await page.goto(storyUrl("basics-vlist--reverse"));

    //   const component = await getScrollable(page);

    //   // FIXME this offset is needed only in ci for unknown reason
    //   const opts = { y: 60 } as const;

    //   // check if last is displayed
    //   const last = await getLastItem(component, opts);
    //   expect(last.text).toEqual("999");
    //   expect(last.bottom).toBeLessThanOrEqual(1); // FIXME: may not be 0 in Safari

    //   await component.tap();

    //   const [w, h] = await getWindowSize(page);
    //   const centerX = w / 2;
    //   const centerY = h / 2;

    //   let top: number = await getScrollTop(component);
    //   for (let i = 0; i < 5; i++) {
    //     await scrollWithTouch(component, {
    //       fromX: centerX,
    //       fromY: centerY - h / 3,
    //       toX: centerX,
    //       toY: centerY + h / 3,
    //     });

    //     // check if item position is preserved during flush
    //     const [nextTopBeforeFlush, nextLastItemBeforeFlush] = await Promise.all(
    //       [getScrollTop(component), getLastItem(component, opts)]
    //     );
    //     await page.waitForTimeout(500);
    //     const [nextTop, nextLastItem] = await Promise.all([
    //       getScrollTop(component),
    //       getLastItem(component, opts),
    //     ]);

    //     expect(nextTop).toBeLessThan(top);
    //     expect(nextTop).not.toBe(nextTopBeforeFlush);
    //     expect(nextLastItem.text).toEqual(nextLastItemBeforeFlush.text);
    //     expectInRange(
    //       Math.abs(nextLastItem.bottom - nextLastItemBeforeFlush.bottom),
    //       { min: 0, max: 1 }
    //     );

    //     top = nextTop;
    //   }
    // });

    // test("reverse scroll with momentum scroll", async ({ page }) => {
    //   await page.goto(storyUrl("basics-vlist--reverse"));

    //   const component = await getScrollable(page);
    //   await component.waitForElementState("stable");

    //   // FIXME this offset is needed only in ci for unknown reason
    //   const opts = { y: 60 } as const;

    //   // check if last is displayed
    //   const last = await getLastItem(component, opts);
    //   expect(last.text).toEqual("999");
    //   expectInRange(last.bottom, { min: -0.9, max: 1 });

    //   await component.tap();

    //   const [w, h] = await getWindowSize(page);
    //   const centerX = w / 2;
    //   const centerY = h / 2;

    //   let top: number = await getScrollTop(component);
    //   for (let i = 0; i < 5; i++) {
    //     await scrollWithTouch(component, {
    //       fromX: centerX,
    //       fromY: centerY - h / 3,
    //       toX: centerX,
    //       toY: centerY + h / 3,
    //       momentumScroll: true,
    //     });

    //     // check if item position is preserved during flush
    //     const [nextTopBeforeFlush, nextLastItemBeforeFlush] = await Promise.all(
    //       [getScrollTop(component), getLastItem(component, opts)]
    //     );
    //     await page.waitForTimeout(500);
    //     const [nextTop, nextLastItem] = await Promise.all([
    //       getScrollTop(component),
    //       getLastItem(component, opts),
    //     ]);

    //     expect(nextTop).toBeLessThan(top);
    //     expect(nextTop).not.toBe(nextTopBeforeFlush);
    //     expect(nextLastItem.text).toEqual(nextLastItemBeforeFlush.text);
    //     expectInRange(
    //       Math.abs(nextLastItem.bottom - nextLastItemBeforeFlush.bottom),
    //       { min: 0, max: 1 }
    //     );

    //     top = nextTop;
    //   }
    // });

    // TODO display none
  });
});
