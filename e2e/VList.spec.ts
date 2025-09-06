import { test, expect } from "@playwright/test";
import {
  storyUrl,
  getFirstItem,
  getLastItem,
  scrollToBottom,
  scrollToRight,
  clearInput,
  approxymate,
  scrollBy,
  getScrollTop,
  getScrollLeft,
  getScrollBottom,
  getScrollRight,
  expectInRange,
  scrollWithTouch,
  getFirstItemRtl,
  scrollToLeft,
  getVirtualizer,
  getScrollable,
  clearTimer,
  scrollTo,
  listenScrollCount,
} from "./utils";

test.describe("smoke", () => {
  test("vertically scrollable", async ({ page }) => {
    await page.goto(storyUrl("basics-vlist--default"));

    const component = await getScrollable(page);

    // check if start is displayed
    const first = await getFirstItem(component);
    expect(first.text).toEqual("0");
    expect(first.top).toEqual(0);

    // scroll to the end
    await scrollToBottom(component);

    // check if the end is displayed
    await expect(component.getByText("999", { exact: true })).toBeVisible();
  });

  test("horizontally scrollable", async ({ page }) => {
    await page.goto(storyUrl("basics-vlist--horizontal"));

    const component = await getScrollable(page);

    // check if start is displayed
    const first = await getFirstItem(component);
    expect(first.text).toEqual("Column 0");
    expect(first.left).toEqual(0);

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
    const last = await getLastItem(component);
    expect(last.text).toEqual("999");
    expect(last.bottom).toEqual(0);
  });

  test("display: none", async ({ page }) => {
    await page.goto(storyUrl("basics-vlist--default"));

    const component = await getScrollable(page);

    const initialTotalHeight = await component.evaluate(
      (s) => getComputedStyle(s.childNodes[0] as HTMLElement).height
    );

    await component.evaluate((s) => (s.style.display = "none"));

    const changedTotalHeight = await component.evaluate(
      (s) => getComputedStyle(s.childNodes[0] as HTMLElement).height
    );

    expect(initialTotalHeight).toBeTruthy();
    expect(initialTotalHeight).toEqual(changedTotalHeight);
  });

  test("new window", async ({ page, context }) => {
    await page.goto(storyUrl("advanced-newwindow--default"));

    // open new window
    const newPagePromise = context.waitForEvent("page");
    await page.getByRole("button", { name: "open window" }).click();
    const newPage = await newPagePromise;

    const component = await getScrollable(newPage);

    // check if start is displayed
    const first = await getFirstItem(component);
    expect(first.text).toEqual("0");
    expect(first.top).toEqual(0);

    // scroll to the end
    await scrollToBottom(component);

    // check if the end is displayed
    await expect(component.getByText("999", { exact: true })).toBeVisible();
  });

  test("scroll restoration", async ({ page }) => {
    await page.goto(storyUrl("basics-vlist--scroll-restoration"));

    const component = await getScrollable(page);

    // check if start is displayed
    const initialItem = await getFirstItem(component);
    expect(initialItem.text).toEqual("0");

    // scroll to mid
    await scrollTo(component, 5000);
    await page.waitForTimeout(250);
    const mountedItem = await getFirstItem(component);
    expect(mountedItem.text).not.toEqual(initialItem.text);

    // check if items are unmounted
    await page.getByRole("button", { name: "hide" }).click();

    expect(component).not.toBeAttached();

    // check if scroll position is restored
    await page.getByRole("button", { name: "show" }).click();
    await page.waitForTimeout(250);
    const remountedComponent = await getScrollable(page);
    const remountedItem = await getFirstItem(remountedComponent);
    expect(remountedItem.text).toEqual(mountedItem.text);
    expect(remountedItem.top).toEqual(mountedItem.top);
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
    const topItem = await getFirstItem(component);
    expect(topItem.text).not.toEqual("0");

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
    input.fill("1000");
    await updateButton.click();

    // scroll a lot
    await scrollToBottom(component);
    const topItem = await getFirstItem(component);
    expect(topItem.text).not.toEqual("0");

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
    expect((await getFirstItem(component)).text).toEqual("0");

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
    expect((await getFirstItem(component)).text).toEqual("0");

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
    expect((await getFirstItem(component)).text).toEqual("Column 0");

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
    expect((await getFirstItem(component)).text).toEqual("Column 0");

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

    expect(
      await container.evaluate((e) => e.children.length)
    ).toBeGreaterThanOrEqual(3);

    const targetIndex = 1;
    const marginTop = 100;

    const getTargetItem = () => {
      return container.evaluateHandle((e, i) => {
        return Array.from(e.children).find((c) =>
          c.textContent!.startsWith(String(i) + "Resize")
        )!;
      }, targetIndex);
    };

    const getResizeButton = async () => {
      const target = await getTargetItem();
      const button = await target.evaluateHandle((e) => {
        const buttons = e.querySelectorAll("button");
        return buttons[0];
      });
      expect(await button.textContent()).toBe("Resize");
      return button;
    };

    const getTargetTop = async () => {
      const target = await getTargetItem();
      return target.evaluate((e) => {
        return (e as HTMLElement).offsetTop;
      });
    };

    // resize and check if jump compensation doesn't work
    // collapse -> expand
    for (let i = 0; i <= 1; i++) {
      await scrollTo(component, (await getTargetTop()) + marginTop);
      const initialItem = await getFirstItem(component);
      expect(initialItem.top).toBeLessThan(0);
      expect(initialItem.text).toContain(String(targetIndex));

      await page.waitForTimeout(200);
      await (await getResizeButton()).click();
      await (await getTargetItem()).waitForElementState("stable");
      const updatedItem = await getFirstItem(component);
      expect(updatedItem.top).toEqual(initialItem.top);
      expect(updatedItem.text).toContain(String(targetIndex));
    }
  });

  test("resize at bottom", async ({ page, browserName }) => {
    await page.goto(storyUrl("advanced-collapse--two-stage-render"));
    const component = await getScrollable(page);
    await page.waitForTimeout(500);

    // should reach to the bottom within the specified number of tries
    for (let i = 0; i <= 1; i++) {
      // scroll to bottom
      await scrollToBottom(component);

      const prevBottomItem = getLastItem(component);

      // wait for resize completed
      await page.waitForTimeout(500);

      const bottomItem = getLastItem(component);

      // check if distance from the bottom isn't changed by resizes
      const prevBottom = (await prevBottomItem).bottom;
      const bottom = (await bottomItem).bottom;
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

    expect(
      await container.evaluate((e) => e.children.length)
    ).toBeGreaterThanOrEqual(3);

    const targetIndex = 1;

    const getTargetItem = () => {
      return container.evaluateHandle((e, i) => {
        return Array.from(e.children).find((c) =>
          c.textContent!.startsWith(String(i) + "Resize")
        )!;
      }, targetIndex);
    };

    const getResizeAndScrollButton = async () => {
      const target = await getTargetItem();
      const button = await target.evaluateHandle((e) => {
        const buttons = e.querySelectorAll("button");
        return buttons[buttons.length - 1];
      });
      expect(await button.textContent()).toBe("Resize + Smooth Scroll");
      return button;
    };

    const getTargetBottom = async () => {
      const target = await getTargetItem();
      return target.evaluate((e) => {
        return (e as HTMLElement).offsetTop + e.getBoundingClientRect().height;
      });
    };

    // scroll from the upper side
    // collapse -> expand
    for (let i = 0; i <= 1; i++) {
      await scrollTo(component, 0);
      const initialItem = await getFirstItem(component);
      expect(initialItem.top).toEqual(0);
      expect(initialItem.text).not.toContain(String(targetIndex));

      await page.waitForTimeout(200);
      const scrollListener = listenScrollCount(component, 1000);
      await (await getResizeAndScrollButton()).click();
      const called = await scrollListener;
      expect(called).toBeGreaterThanOrEqual(2);
      const updatedItem = await getFirstItem(component);
      expect(updatedItem.top).toEqual(0);
      expect(updatedItem.text).toContain(String(targetIndex));
    }

    // scroll from the lower side
    // collapse -> expand
    for (let i = 0; i <= 1; i++) {
      // collapse
      await scrollTo(component, await getTargetBottom());
      const initialItem = await getFirstItem(component);
      expect(initialItem.top).toEqual(0);
      expect(initialItem.text).not.toContain(String(targetIndex));

      await page.waitForTimeout(200);
      const scrollListener = listenScrollCount(component, 1000);
      await (await getResizeAndScrollButton()).click();
      const called = await scrollListener;
      expect(called).toBeGreaterThanOrEqual(2);
      const updatedItem = await getFirstItem(component);
      expect(updatedItem.top).toEqual(0);
      expect(updatedItem.text).toContain(String(targetIndex));
    }
  });

  test("stick to bottom", async ({ page }) => {
    await page.goto(storyUrl("advanced-chat--default"));
    const component = await getScrollable(page);
    // check if end is displayed
    const initialItem = await getLastItem(component);
    expectInRange(initialItem.bottom, { min: 0, max: 1 });

    await clearTimer(page);

    const button = page.getByRole("button", { name: "submit" });
    const textarea = page.getByRole("textbox")!;

    // append small item
    await button.click();
    await (await component.elementHandle())!.waitForElementState("stable");

    const smallItem = await getLastItem(component);
    expect(smallItem.text).not.toEqual(initialItem.text);
    expectInRange(smallItem.bottom, { min: 0, max: 1 });

    // append large item
    await textarea.clear();
    await textarea.fill(
      "Hello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\n"
    );
    await button.click();
    await (await component.elementHandle())!.waitForElementState("stable");
    const largeItem = await getLastItem(component);
    expect(largeItem.text).not.toEqual(smallItem.text);
    expectInRange(largeItem.bottom, { min: 0, max: 1 });
    expect(largeItem.height).toBeGreaterThan(smallItem.height * 10);
  });

  test("dynamic image", async ({ page, browserName }) => {
    await page.goto(storyUrl("advanced-feed--default"));
    const component = await getScrollable(page);

    // TODO firefox is bit unstable
    const nearlyZeroMax = browserName === "firefox" ? 2 : 1;

    // check if start is displayed
    expectInRange((await getFirstItem(component)).top, {
      min: 0,
      max: nearlyZeroMax,
    });

    // check if stable after image load
    await page.waitForTimeout(3000);
    expectInRange((await getFirstItem(component)).top, {
      min: 0,
      max: nearlyZeroMax,
    });

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
    expectInRange((await getFirstItem(component)).top, {
      min: 0,
      max: nearlyZeroMax,
    });
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
      expect((await getFirstItem(component)).text).toEqual("0");

      const button = page.getByRole("button", { name: "scroll to index" });
      const input = await button.evaluateHandle(
        (el) => el.previousSibling as HTMLInputElement
      );

      await clearInput(input);
      await input.fill("700");
      await button.click();

      await (await component.elementHandle())!.waitForElementState("stable");

      // Check if scrolled precisely
      const firstItem = await getFirstItem(component);
      expect(firstItem.text).toEqual("700");
      expect(firstItem.top).toEqual(0);

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
      expect((await getFirstItem(component)).text).toEqual("0");

      const button = page.getByRole("button", { name: "scroll to index" });
      const input = await button.evaluateHandle(
        (el) => el.previousSibling as HTMLInputElement
      );

      await clearInput(input);
      await input.fill("500");
      await button.click();

      await (await component.elementHandle())!.waitForElementState("stable");

      await expect(component.getByText("500", { exact: true })).toBeVisible();

      await clearInput(input);
      await input.fill("0");
      await button.click();

      await (await component.elementHandle())!.waitForElementState("stable");

      // Check if scrolled precisely
      const firstItem = await getFirstItem(component);
      expect(firstItem.text).toEqual("0");
      expect(firstItem.top).toEqual(0);

      // Check if unnecessary items are not rendered
      await expect(
        component.getByText("50\n", { exact: true })
      ).not.toBeVisible();
    });

    test("end", async ({ page }) => {
      const component = await getScrollable(page);

      // check if start is displayed
      expect((await getFirstItem(component)).text).toEqual("0");

      const button = page.getByRole("button", { name: "scroll to index" });
      const input = await button.evaluateHandle(
        (el) => el.previousSibling as HTMLInputElement
      );

      await clearInput(input);
      await input.fill("999");
      await button.click();

      await (await component.elementHandle())!.waitForElementState("stable");

      // Check if scrolled precisely
      const lastItem = await getLastItem(component);
      expect(lastItem.text).toEqual("999");
      expectInRange(lastItem.bottom, { min: -0.9, max: 1 });

      // Check if unnecessary items are not rendered
      await expect(
        component.getByText("949", { exact: true })
      ).not.toBeVisible();
    });

    test("mid smooth", async ({ page, browserName }) => {
      const component = await getScrollable(page);

      // check if start is displayed
      expect((await getFirstItem(component)).text).toEqual("0");

      await page.getByRole("checkbox", { name: "smooth" }).click();

      const button = page.getByRole("button", { name: "scroll to index" });
      const input = await button.evaluateHandle(
        (el) => el.previousSibling as HTMLInputElement
      );

      const scrollListener = listenScrollCount(component);

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
      const firstItem = await getFirstItem(component);
      expect(firstItem.text).toEqual("700");
      expectInRange(firstItem.top, { min: 0, max: 1 });

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
      expect((await getFirstItem(component)).text).toEqual("0");

      const button = page.getByRole("button", { name: "scroll to index" });
      const input = await button.evaluateHandle(
        (el) => el.previousSibling as HTMLInputElement
      );

      await clearInput(input);
      await input.fill("700");
      await button.click();

      await (await component.elementHandle())!.waitForElementState("stable");

      // Check if scrolled precisely
      const lastItem = await getLastItem(component);
      expect(lastItem.text).toEqual("700");
      expectInRange(lastItem.bottom, { min: 0, max: 1 });

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
      expect((await getFirstItem(component)).text).toEqual("0");

      const button = page.getByRole("button", { name: "scroll to index" });
      const input = await button.evaluateHandle(
        (el) => el.previousSibling as HTMLInputElement
      );

      await clearInput(input);
      await input.fill("500");
      await button.click();

      await (await component.elementHandle())!.waitForElementState("stable");

      await expect(component.getByText("500", { exact: true })).toBeVisible();

      await clearInput(input);
      await input.fill("0");
      await button.click();

      await (await component.elementHandle())!.waitForElementState("stable");

      // Check if scrolled precisely
      const firstItem = await getFirstItem(component);
      expect(firstItem.text).toEqual("0");
      expect(firstItem.top).toEqual(0);

      // Check if unnecessary items are not rendered
      await expect(
        component.getByText("50\n", { exact: true })
      ).not.toBeVisible();
    });

    test("end", async ({ page }) => {
      const component = await getScrollable(page);

      // check if start is displayed
      expect((await getFirstItem(component)).text).toEqual("0");

      const button = page.getByRole("button", { name: "scroll to index" });
      const input = await button.evaluateHandle(
        (el) => el.previousSibling as HTMLInputElement
      );

      await clearInput(input);
      await input.fill("999");
      await button.click();

      await (await component.elementHandle())!.waitForElementState("stable");

      // Check if scrolled precisely
      const lastItem = await getLastItem(component);
      expect(lastItem.text).toEqual("999");
      expectInRange(lastItem.bottom, { min: -0.5, max: 1 });

      // Check if unnecessary items are not rendered
      await expect(
        component.getByText("949", { exact: true })
      ).not.toBeVisible();
    });

    test("mid smooth", async ({ page, browserName }) => {
      const component = await getScrollable(page);

      // check if start is displayed
      expect((await getFirstItem(component)).text).toEqual("0");

      await page.getByRole("checkbox", { name: "smooth" }).click();

      const button = page.getByRole("button", { name: "scroll to index" });
      const input = await button.evaluateHandle(
        (el) => el.previousSibling as HTMLInputElement
      );

      const scrollListener = listenScrollCount(component);

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
      const lastItem = await getLastItem(component);
      expect(lastItem.text).toEqual("700");
      expectInRange(lastItem.bottom, { min: 0, max: 1 });

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
    expect((await getFirstItem(component)).text).toEqual("0");

    const button = page.getByRole("button", { name: "scroll to offset" });
    const input = await button.evaluateHandle(
      (el) => el.previousSibling as HTMLInputElement
    );

    // scroll down
    await clearInput(input);
    await input.fill("5000");
    await button.click();

    await (await component.elementHandle())!.waitForElementState("stable");

    expect(
      // scrollTo may not scroll to exact position with dynamic sized items
      approxymate(await getScrollTop(component))
    ).toEqual(5000);

    // scroll up
    await clearInput(input);
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
    expect((await getFirstItem(component)).text).toEqual("0");

    const button = page.getByRole("button", {
      name: "scroll by offset",
    });
    const input = await button.evaluateHandle(
      (el) => el.previousSibling!.previousSibling as HTMLInputElement
    );

    // scroll down
    await clearInput(input);
    await input.fill("1234");
    await button.click();

    expect(await getScrollTop(component)).toEqual(1234);

    // scroll up
    await clearInput(input);
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

    const topItem = await getFirstItem(component);
    expect(topItem.text).not.toEqual("0");
    expect(topItem.text.length).toBeLessThanOrEqual(2);

    // add
    await page.getByRole("radio", { name: "increase" }).click();
    await updateButton.click();
    await page.waitForTimeout(100);
    // check if visible item is keeped
    expect(topItem).toEqual(await getFirstItem(component));

    // remove
    await page.getByRole("radio", { name: "decrease" }).click();
    await updateButton.click();
    await page.waitForTimeout(100);
    // check if visible item is keeped
    expect(topItem).toEqual(await getFirstItem(component));
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

    const topItem = await getFirstItem(component);
    expect(topItem.text).not.toEqual("0");
    expect(topItem.text.length).toBeLessThanOrEqual(2);

    // add
    await page.getByRole("checkbox", { name: "prepend" }).click();
    await page.getByRole("radio", { name: "increase" }).click();
    await updateButton.click();
    await page.waitForTimeout(100);
    // check if visible item is keeped
    expect(topItem).toEqual(await getFirstItem(component));

    // remove
    await page.getByRole("radio", { name: "decrease" }).click();
    await updateButton.click();
    await page.waitForTimeout(100);
    // check if visible item is keeped
    expect(topItem).toEqual(await getFirstItem(component));
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

    const initialLength = await container.evaluate((e) => e.childNodes.length);
    expect(initialLength).toBeGreaterThan(1);

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
      const [isScrollBarVisible, scrollableRectTop] = await component.evaluate(
        (e) => {
          return [
            e.scrollHeight > (e as HTMLElement).offsetHeight,
            e.getBoundingClientRect().top,
          ];
        }
      );
      const itemTop = firstItemRectTop - scrollableRectTop;

      // Check if all items are visible
      expect(childrenCount).toBe(i + initialLength);

      if (isScrollBarVisible) {
        // Check if sticked to bottom
        expectInRange((await getLastItem(component)).bottom, {
          min: browserName === "firefox" ? -0.45 : -0.1,
          max: 0.1,
        });
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

    const initialLength = await container.evaluate((e) => e.childNodes.length);
    expect(initialLength).toBeGreaterThan(1);

    let i = 0;
    while (true) {
      i++;
      await valueInput.clear();
      await valueInput.fill(String(i));

      // preprend
      await increaseRadio.click();
      await updateButton.click();
      await (await component.elementHandle())!.waitForElementState("stable");

      const [childrenCount, lastItemRectBottom] = await container.evaluate(
        (e) => {
          const children = e.childNodes;
          return [
            children.length,
            (
              children[children.length - 1] as HTMLElement
            ).getBoundingClientRect().bottom,
          ];
        }
      );
      const [isScrollBarVisible, scrollableRectBottom] =
        await component.evaluate((e) => {
          return [
            e.scrollHeight > (e as HTMLElement).offsetHeight,
            e.getBoundingClientRect().bottom,
          ];
        });
      const itemBottom = lastItemRectBottom - scrollableRectBottom;

      // Check if all items are visible
      expect(childrenCount).toBe(i + initialLength);

      if (isScrollBarVisible) {
        // Check if sticked to bottom
        expectInRange(itemBottom, {
          min: browserName === "firefox" ? -0.45 : -0.1,
          max: 0.1,
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

      const lastItemRectBottom = await container.evaluate((e) => {
        const children = e.childNodes;
        return (
          children[children.length - 1] as HTMLElement
        ).getBoundingClientRect().bottom;
      });
      const [isScrollBarVisible, scrollableRectBottom] =
        await component.evaluate((e) => {
          return [
            e.scrollHeight > (e as HTMLElement).offsetHeight,
            e.getBoundingClientRect().bottom,
          ];
        });
      const itemBottom = lastItemRectBottom - scrollableRectBottom;

      // Check if bottom is always visible and on bottom
      expectInRange(itemBottom, {
        min: -0.5,
        max: browserName === "firefox" ? 0.6 : 0.50001,
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
    const component = await getScrollable(page);
    // check if end is displayed
    const initialItem = await getLastItem(component);
    expectInRange(initialItem.bottom, { min: 0, max: 1 });

    await clearTimer(page);

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
    await page.evaluate(() => {
      document.documentElement.dir = "rtl";
    });

    const component = await getScrollable(page);

    // check if start is displayed
    const first = await getFirstItem(component);
    expect(first.text).toEqual("0");
    expect(first.top).toEqual(0);

    // scroll to the end
    await scrollToBottom(component);

    // check if the end is displayed
    await expect(component.getByText("999", { exact: true })).toBeVisible();
  });

  test("horizontally scrollable", async ({ page }) => {
    await page.goto(storyUrl("basics-vlist--horizontal"), {
      waitUntil: "domcontentloaded",
    });
    await page.evaluate(() => {
      document.documentElement.dir = "rtl";
    });

    const component = await getScrollable(page);

    // check if start is displayed
    const first = await getFirstItemRtl(component);
    expect(first.text).toEqual("Column 0");
    expect(first.right).toEqual(0);

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

    const first = await getFirstItem(component);
    const last = await getLastItem(component);

    // check if SSR suceeded
    const itemsSelector = '*[style*="top"]';
    const items = component.locator(itemsSelector);
    const initialLength = await items.count();
    expect(initialLength).toBeGreaterThanOrEqual(30);
    await expect(items.first()).toHaveText("0");
    await expect(items.last()).toHaveText(String(initialLength - 1));
    // check if items have styles for SSR
    expect(await items.first().evaluate((e) => e.style.position)).not.toBe(
      "absolute"
    );

    // should not change state with scroll before hydration
    await component.evaluate((e) => e.scrollTo({ top: 1000 }));
    await expect(component.locator(itemsSelector)).toHaveCount(initialLength);
    await page.waitForTimeout(500);
    await component.evaluate((e) => e.scrollTo({ top: 0 }));

    // hydrate
    await page.getByRole("button", { name: "hydrate" }).click();

    // check if hydration suceeded but state is not changed
    await expect(component.locator(itemsSelector)).toHaveCount(initialLength);
    expect((await getFirstItem(component)).top).toBe(first.top);
    expect((await getLastItem(component)).bottom).toBe(last.bottom);
    // check if items do not have styles for SSR
    expect(await items.first().evaluate((e) => e.style.position)).toBe(
      "absolute"
    );

    // should change state with scroll after hydration
    await component.evaluate((e) => e.scrollTo({ top: 1000 }));
    await page.waitForTimeout(500);
    await expect(component.locator(itemsSelector)).not.toHaveCount(
      initialLength
    );
  });

  test("check if smooth scrolling works after hydration", async ({ page }) => {
    await page.goto(storyUrl("advanced-ssr--scroll-to"));

    const component = await getScrollable(page);

    // turn scroll to index with smooth on
    await page.getByRole("checkbox", { name: "scroll to index" }).check();
    await page.getByRole("checkbox", { name: "smooth" }).check();

    // set scroll index to 100
    await page.locator("input[type=number]").fill("100");

    // hydrate
    await page.getByRole("button", { name: "hydrate" }).click();

    await page.waitForTimeout(1000);
    expect((await getFirstItem(component)).text).toEqual("100");
  });
});

test.describe("emulated iOS WebKit", () => {
  test.describe("check if scroll jump compensation works", () => {
    test("scroll with touch", async ({ page }) => {
      await page.goto(storyUrl("basics-vlist--default"));

      const component = await getScrollable(page);

      // check if first is displayed
      const last = await getFirstItem(component);
      expect(last.text).toEqual("0");
      expect(last.top).toEqual(0);

      await component.tap();

      const [w, h] = await page.evaluate(() => [
        window.outerWidth,
        window.outerHeight,
      ]);
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
        const [/*nextTopBeforeFlush,*/ nextLastItemBeforeFlush] =
          await Promise.all([
            // getScrollTop(component),
            getFirstItem(component),
          ]);
        await page.waitForTimeout(500);
        const [nextTop, nextLastItem] = await Promise.all([
          getScrollTop(component),
          getFirstItem(component),
        ]);

        expect(nextTop).toBeGreaterThan(top);
        // expect(nextTop).not.toBe(nextTopBeforeFlush);
        expect(nextLastItem.text).toEqual(nextLastItemBeforeFlush.text);
        expect(
          Math.abs(nextLastItem.top - nextLastItemBeforeFlush.top) // FIXME: may not be 0 in Safari
        ).toBeLessThanOrEqual(1);

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

    //   const [w, h] = await page.evaluate(() => [
    //     window.outerWidth,
    //     window.outerHeight,
    //   ]);
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

    //   const [w, h] = await page.evaluate(() => [
    //     window.outerWidth,
    //     window.outerHeight,
    //   ]);
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
