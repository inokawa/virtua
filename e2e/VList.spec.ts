import { test, expect, ElementHandle } from "@playwright/test";
import {
  storyUrl,
  scrollableSelector,
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
} from "./utils";

test.describe("smoke", () => {
  test("vertically scrollable", async ({ page }) => {
    await page.goto(storyUrl("basics-vlist--default"));

    const component = await page.waitForSelector(scrollableSelector);
    await component.waitForElementState("stable");

    // check if start is displayed
    const first = await getFirstItem(component);
    await expect(first.text).toEqual("0");
    await expect(first.top).toEqual(0);

    // scroll to the end
    await scrollToBottom(component);

    // check if the end is displayed
    await expect(await component.innerText()).toContain("999");
  });

  test("horizontally scrollable", async ({ page }) => {
    await page.goto(storyUrl("basics-vlist--horizontal"));

    await page.waitForSelector(scrollableSelector);
    const component = (await page.$$(scrollableSelector))[0]!;
    await component.waitForElementState("stable");

    // check if start is displayed
    const first = await getFirstItem(component);
    await expect(first.text).toEqual("Column 0");
    await expect(first.left).toEqual(0);

    // scroll to the end
    await scrollToRight(component);

    // check if the end is displayed
    await expect(await component.innerText()).toContain("999");
  });

  test("reverse", async ({ page }) => {
    await page.goto(storyUrl("basics-vlist--reverse"));

    const component = await page.waitForSelector(scrollableSelector);
    await component.waitForElementState("stable");

    // check if last is displayed
    const last = await getLastItem(component);
    await expect(last.text).toEqual("999");
    await expect(last.bottom).toEqual(0);
  });

  test("display: none", async ({ page }) => {
    await page.goto(storyUrl("basics-vlist--default"));

    const component = await page.waitForSelector(scrollableSelector);
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

  test("sticky", async ({ page }) => {
    await page.goto(storyUrl("basics-vlist--sticky"));

    const component = await page.waitForSelector(scrollableSelector);
    await component.waitForElementState("stable");

    // check if start is displayed
    await expect((await getFirstItem(component)).text).toEqual("0");

    // check if sticky items are always on top
    await component.click();
    for (let i = 0; i < 3; i++) {
      await page.keyboard.press("PageDown", { delay: 500 });
      await expect(await getScrollTop(component)).not.toEqual(0);
      const text = (await getFirstItem(component)).text;
      await expect(text).not.toContain("-");
      await expect(Number(text)).not.toBeNaN();
    }
  });
});

test.describe("check if it works when children change", () => {
  test("recovering from 0", async ({ page }) => {
    await page.goto(storyUrl("basics-vlist--increasing-items"));
    const component = await page.waitForSelector(scrollableSelector);
    await component.waitForElementState("stable");

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
    const component = await page.waitForSelector(scrollableSelector);
    await component.waitForElementState("stable");

    const input = page.getByRole("spinbutton");
    const updateButton = page.getByRole("button", { name: "update" });

    // add many
    input.fill("1000");
    await updateButton.click();
    await component.waitForElementState("stable");

    // scroll a lot
    await scrollToBottom(component);
    await component.waitForElementState("stable");
    const topItem = await getFirstItem(component);
    expect(topItem.text).not.toEqual("0");

    // delete many
    await page.getByRole("radio", { name: "decrease" }).click();
    await updateButton.click();
    await component.waitForElementState("stable");

    // add many
    await page.getByRole("radio", { name: "increase" }).click();
    await updateButton.click();
    await component.waitForElementState("stable");

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
    const component = await page.waitForSelector(scrollableSelector);
    await component.waitForElementState("stable");

    // check if start is displayed
    await expect((await getFirstItem(component)).text).toEqual("0");

    // check if offset from start is always keeped
    await component.click();
    const min = 200;
    const initial = await getScrollTop(component);
    let prev = initial;
    for (let i = 0; i < 500; i++) {
      await page.keyboard.press("ArrowDown", { delay: 10 });
      const offset = await getScrollTop(component);
      await expect(offset).toBeGreaterThanOrEqual(prev);
      prev = offset;
    }
    await expect(prev).toBeGreaterThan(initial + min);
  });

  test("vertical end -> start", async ({ page }) => {
    await page.goto(storyUrl("basics-vlist--default"));
    const component = await page.waitForSelector(scrollableSelector);
    await component.waitForElementState("stable");

    // check if start is displayed
    await expect((await getFirstItem(component)).text).toEqual("0");

    // scroll to the end
    await scrollToBottom(component);

    // check if offset from end is always keeped
    await component.click();
    const min = 200;
    const initial = await getScrollBottom(component);
    let prev = initial;
    for (let i = 0; i < 500; i++) {
      await page.keyboard.press("ArrowUp", { delay: 10 });
      const offset = await getScrollBottom(component);
      await expect(offset).toBeGreaterThanOrEqual(prev);
      prev = offset;
    }
    await expect(prev).toBeGreaterThan(initial + min);
  });

  test("horizontal start -> end", async ({ page }) => {
    await page.goto(storyUrl("basics-vlist--horizontal"));
    const component = await page.waitForSelector(scrollableSelector);
    await component.waitForElementState("stable");

    // check if start is displayed
    await expect((await getFirstItem(component)).text).toEqual("Column 0");

    // check if offset from start is always keeped
    await component.click();
    const min = 200;
    const initial = await getScrollLeft(component);
    let prev = initial;
    for (let i = 0; i < 500; i++) {
      await page.keyboard.press("ArrowRight", { delay: 10 });
      const offset = await getScrollLeft(component);
      await expect(offset).toBeGreaterThanOrEqual(prev);
      prev = offset;
    }
    await expect(prev).toBeGreaterThan(initial + min);
  });

  test("horizontal end -> start", async ({ page }) => {
    await page.goto(storyUrl("basics-vlist--horizontal"));
    const component = await page.waitForSelector(scrollableSelector);
    await component.waitForElementState("stable");

    // check if start is displayed
    await expect((await getFirstItem(component)).text).toEqual("Column 0");

    // scroll to the end
    await scrollToRight(component);

    // check if offset from end is always keeped
    await component.click();
    const min = 200;
    const initial = await getScrollRight(component);
    let prev = initial;
    for (let i = 0; i < 500; i++) {
      await page.keyboard.press("ArrowLeft", { delay: 10 });
      const offset = await getScrollRight(component);
      await expect(offset).toBeGreaterThanOrEqual(prev);
      prev = offset;
    }
    await expect(prev).toBeGreaterThan(initial + min);
  });

  test("stick to bottom", async ({ page }) => {
    await page.goto(storyUrl("advanced-chat--default"));
    const component = await page.waitForSelector(scrollableSelector);
    await component.waitForElementState("stable");
    // check if end is displayed
    const initialItem = await getLastItem(component);
    expectInRange(initialItem.bottom, { min: 0, max: 1 });

    await page.evaluate(() => {
      // stop all timer
      for (let i = 1; i < 65536; i++) {
        clearTimeout(i);
      }
    });

    const button = (await page
      .getByRole("button", { name: "submit" })
      .elementHandle())!;
    const textarea = (await page.getByRole("textbox"))!;

    // append small item
    await button.click();
    await component.waitForElementState("stable");
    const smallItem = await getLastItem(component);
    await expect(smallItem.text).not.toEqual(initialItem.text);
    expectInRange(smallItem.bottom, { min: 0, max: 1 });

    // append large item
    await textarea.clear();
    await textarea.fill(
      "Hello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\nHello\n"
    );
    await button.click();
    await component.waitForElementState("stable");
    const largeItem = await getLastItem(component);
    await expect(largeItem.text).not.toEqual(smallItem.text);
    expectInRange(largeItem.bottom, { min: 0, max: 1 });
    await expect(largeItem.height).toBeGreaterThan(smallItem.height * 10);
  });

  test("dynamic image", async ({ page, browserName }) => {
    await page.goto(storyUrl("advanced-feed--default"));
    const component = await page.waitForSelector(scrollableSelector);
    await component.waitForElementState("stable");

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
    await component.evaluate((e) => (e.scrollTop = 0));

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

  const listenScrollCount = (
    component: ElementHandle<SVGElement | HTMLElement>
  ): Promise<number> => {
    return component.evaluate((c) => {
      let timer: null | ReturnType<typeof setTimeout> = null;
      let called = 0;

      return new Promise<number>((resolve) => {
        const cb = () => {
          called++;
          if (timer !== null) {
            clearTimeout(timer);
          }
          timer = setTimeout(() => {
            c.removeEventListener("scroll", cb);
            resolve(called);
          }, 2000);
        };
        c.addEventListener("scroll", cb);
      });
    });
  };

  test.describe("align start", () => {
    test("mid", async ({ page }) => {
      const component = await page.waitForSelector(scrollableSelector);
      await component.waitForElementState("stable");

      // check if start is displayed
      await expect((await getFirstItem(component)).text).toEqual("0");

      const button = (await page
        .getByRole("button", { name: "scroll to index" })
        .elementHandle())!;
      const input = await page.evaluateHandle(
        (el) => el!.previousSibling as HTMLInputElement,
        button
      );

      await clearInput(input);
      await input.fill("700");
      await button.click();

      await component.waitForElementState("stable");

      // Check if scrolled precisely
      const firstItem = await getFirstItem(component);
      await expect(firstItem.text).toEqual("700");
      await expect(firstItem.top).toEqual(0);

      // Check if unnecessary items are not rendered
      await expect(await component.innerText()).not.toContain("650");
      await expect(await component.innerText()).not.toContain("750");
    });

    test("start", async ({ page }) => {
      const component = await page.waitForSelector(scrollableSelector);
      await component.waitForElementState("stable");

      // check if start is displayed
      await expect((await getFirstItem(component)).text).toEqual("0");

      const button = (await page
        .getByRole("button", { name: "scroll to index" })
        .elementHandle())!;
      const input = await page.evaluateHandle(
        (el) => el!.previousSibling as HTMLInputElement,
        button
      );

      await clearInput(input);
      await input.fill("500");
      await button.click();

      await component.waitForElementState("stable");

      await expect(await component.innerText()).toContain("500");

      await clearInput(input);
      await input.fill("0");
      await button.click();

      await component.waitForElementState("stable");

      // Check if scrolled precisely
      const firstItem = await getFirstItem(component);
      await expect(firstItem.text).toEqual("0");
      await expect(firstItem.top).toEqual(0);

      // Check if unnecessary items are not rendered
      await expect(await component.innerText()).not.toContain("50\n");
    });

    test("end", async ({ page }) => {
      const component = await page.waitForSelector(scrollableSelector);
      await component.waitForElementState("stable");

      // check if start is displayed
      await expect((await getFirstItem(component)).text).toEqual("0");

      const button = (await page
        .getByRole("button", { name: "scroll to index" })
        .elementHandle())!;
      const input = await page.evaluateHandle(
        (el) => el!.previousSibling as HTMLInputElement,
        button
      );

      await clearInput(input);
      await input.fill("999");
      await button.click();

      await component.waitForElementState("stable");

      // Check if scrolled precisely
      const lastItem = await getLastItem(component);
      await expect(lastItem.text).toEqual("999");
      expectInRange(lastItem.bottom, { min: -0.9, max: 1 });

      // Check if unnecessary items are not rendered
      await expect(await component.innerText()).not.toContain("949");
    });

    test("mid smooth", async ({ page, browserName }) => {
      const component = await page.waitForSelector(scrollableSelector);
      await component.waitForElementState("stable");

      // check if start is displayed
      await expect((await getFirstItem(component)).text).toEqual("0");

      await page.getByRole("checkbox", { name: "smooth" }).click();

      const button = (await page
        .getByRole("button", { name: "scroll to index" })
        .elementHandle())!;
      const input = await page.evaluateHandle(
        (el) => el!.previousSibling as HTMLInputElement,
        button
      );

      const scrollListener = listenScrollCount(component);

      await clearInput(input);
      await input.fill("700");
      await button.click();

      await page.waitForTimeout(500);

      const called = await scrollListener;

      // Check if this is smooth scrolling
      await expect(called).toBeGreaterThanOrEqual(
        // TODO find better way to check in webkit
        browserName === "webkit" ? 2 : 10
      );

      // Check if scrolled precisely
      const firstItem = await getFirstItem(component);
      await expect(firstItem.text).toEqual("700");
      expectInRange(firstItem.top, { min: 0, max: 1 });

      // Check if unnecessary items are not rendered
      await expect(await component.innerText()).not.toContain("650");
      await expect(await component.innerText()).not.toContain("750");
    });
  });

  test.describe("align end", () => {
    test.beforeEach(async ({ page }) => {
      await page.getByRole("radio", { name: "end" }).click();
    });

    test("mid", async ({ page }) => {
      const component = await page.waitForSelector(scrollableSelector);
      await component.waitForElementState("stable");

      // check if start is displayed
      await expect((await getFirstItem(component)).text).toEqual("0");

      const button = (await page
        .getByRole("button", { name: "scroll to index" })
        .elementHandle())!;
      const input = await page.evaluateHandle(
        (el) => el!.previousSibling as HTMLInputElement,
        button
      );

      await clearInput(input);
      await input.fill("700");
      await button.click();

      await component.waitForElementState("stable");

      // Check if scrolled precisely
      const lastItem = await getLastItem(component);
      await expect(lastItem.text).toEqual("700");
      expectInRange(lastItem.bottom, { min: 0, max: 1 });

      // Check if unnecessary items are not rendered
      await expect(await component.innerText()).not.toContain("650");
      await expect(await component.innerText()).not.toContain("750");
    });

    test("start", async ({ page }) => {
      const component = await page.waitForSelector(scrollableSelector);
      await component.waitForElementState("stable");

      // check if start is displayed
      await expect((await getFirstItem(component)).text).toEqual("0");

      const button = (await page
        .getByRole("button", { name: "scroll to index" })
        .elementHandle())!;
      const input = await page.evaluateHandle(
        (el) => el!.previousSibling as HTMLInputElement,
        button
      );

      await clearInput(input);
      await input.fill("500");
      await button.click();

      await component.waitForElementState("stable");

      await expect(await component.innerText()).toContain("500");

      await clearInput(input);
      await input.fill("0");
      await button.click();

      await component.waitForElementState("stable");

      // Check if scrolled precisely
      const firstItem = await getFirstItem(component);
      await expect(firstItem.text).toEqual("0");
      await expect(firstItem.top).toEqual(0);

      // Check if unnecessary items are not rendered
      await expect(await component.innerText()).not.toContain("50\n");
    });

    test("end", async ({ page }) => {
      const component = await page.waitForSelector(scrollableSelector);
      await component.waitForElementState("stable");

      // check if start is displayed
      await expect((await getFirstItem(component)).text).toEqual("0");

      const button = (await page
        .getByRole("button", { name: "scroll to index" })
        .elementHandle())!;
      const input = await page.evaluateHandle(
        (el) => el!.previousSibling as HTMLInputElement,
        button
      );

      await clearInput(input);
      await input.fill("999");
      await button.click();

      await component.waitForElementState("stable");

      // Check if scrolled precisely
      const lastItem = await getLastItem(component);
      await expect(lastItem.text).toEqual("999");
      expectInRange(lastItem.bottom, { min: 0, max: 1 });

      // Check if unnecessary items are not rendered
      await expect(await component.innerText()).not.toContain("949");
    });

    test("mid smooth", async ({ page, browserName }) => {
      const component = await page.waitForSelector(scrollableSelector);
      await component.waitForElementState("stable");

      // check if start is displayed
      await expect((await getFirstItem(component)).text).toEqual("0");

      await page.getByRole("checkbox", { name: "smooth" }).click();

      const button = (await page
        .getByRole("button", { name: "scroll to index" })
        .elementHandle())!;
      const input = await page.evaluateHandle(
        (el) => el!.previousSibling as HTMLInputElement,
        button
      );

      const scrollListener = listenScrollCount(component);

      await clearInput(input);
      await input.fill("700");
      await button.click();

      await page.waitForTimeout(500);

      const called = await scrollListener;

      // Check if this is smooth scrolling
      await expect(called).toBeGreaterThanOrEqual(
        // TODO find better way to check in webkit
        browserName === "webkit" ? 2 : 10
      );

      // Check if scrolled precisely
      const lastItem = await getLastItem(component);
      await expect(lastItem.text).toEqual("700");
      expectInRange(lastItem.bottom, { min: 0, max: 1 });

      // Check if unnecessary items are not rendered
      await expect(await component.innerText()).not.toContain("650");
      await expect(await component.innerText()).not.toContain("750");
    });
  });
});

test.describe("check if scrollTo works", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(storyUrl("basics-vlist--scroll-to"));
  });

  test("down and up", async ({ page }) => {
    const component = await page.waitForSelector(scrollableSelector);
    await component.waitForElementState("stable");

    // check if start is displayed
    await expect((await getFirstItem(component)).text).toEqual("0");

    const button = (await page
      .getByRole("button", { name: "scroll to offset" })
      .elementHandle())!;
    const input = await page.evaluateHandle(
      (el) => el!.previousSibling as HTMLInputElement,
      button
    );

    // scroll down
    await clearInput(input);
    await input.fill("5000");
    await button.click();

    await component.waitForElementState("stable");

    await expect(
      // scrollTo may not scroll to exact position with dynamic sized items
      approxymate(await getScrollTop(component))
    ).toEqual(5000);

    // scroll up
    await clearInput(input);
    await input.fill("1000");
    await button.click();

    await component.waitForElementState("stable");

    await expect(
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
    const component = await page.waitForSelector(scrollableSelector);
    await component.waitForElementState("stable");

    // check if start is displayed
    await expect((await getFirstItem(component)).text).toEqual("0");

    const button = (await page
      .getByRole("button", { name: "scroll by offset" })
      .elementHandle())!;
    const input = await page.evaluateHandle(
      (el) => el!.previousSibling!.previousSibling as HTMLInputElement,
      button
    );

    // scroll down
    await clearInput(input);
    await input.fill("1234");
    await button.click();

    await component.waitForElementState("stable");

    await expect(await getScrollTop(component)).toEqual(1234);

    // scroll up
    await clearInput(input);
    await input.fill("-234");
    await button.click();

    await component.waitForElementState("stable");

    await expect(await getScrollTop(component)).toEqual(1000);
  });
});

test.describe("check if item shift compensation works", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(storyUrl("basics-vlist--increasing-items"));
  });

  test("keep end at mid when add to/remove from end", async ({ page }) => {
    const component = await page.waitForSelector(scrollableSelector);
    await component.waitForElementState("stable");

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
    const component = await page.waitForSelector(scrollableSelector);
    await component.waitForElementState("stable");

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
  }) => {
    await page.goto(storyUrl("basics-vlist--increasing-items"));
    const component = await page.waitForSelector(scrollableSelector);
    await component.waitForElementState("stable");

    await page.getByRole("checkbox", { name: "prepend" }).click();
    const decreaseRadio = await page.getByRole("radio", { name: "decrease" });
    const increaseRadio = await page.getByRole("radio", { name: "increase" });
    const valueInput = page.getByRole("spinbutton");
    const updateButton = page.getByRole("button", { name: "update" });

    const initialLength = await component.evaluate(
      (e) => e.childNodes[0].childNodes.length
    );
    expect(initialLength).toBeGreaterThan(1);

    let i = 0;
    while (true) {
      i++;
      await valueInput.clear();
      await valueInput.fill(String(i));

      // preprend
      await increaseRadio.click();
      await updateButton.click();
      await component.waitForElementState("stable");

      const [childrenCount, isScrollBarVisible, firstItemTop] =
        await component.evaluate((e) => {
          const children = e.childNodes[0].childNodes;
          return [
            children.length,
            e.scrollHeight > (e as HTMLElement).offsetHeight,
            (children[0] as HTMLElement).getBoundingClientRect().top -
              e.getBoundingClientRect().top,
          ];
        });

      // Check if top is always visible and on top
      expect(firstItemTop).toBe(0);
      // Check if all items are visible
      expect(childrenCount).toBe(i + initialLength);

      if (isScrollBarVisible) {
        break;
      }

      // remove
      await decreaseRadio.click();
      await updateButton.click();
    }

    expect(i).toBeGreaterThanOrEqual(8);
  });

  test("prepending when total height is lower than viewport height and reverse:true", async ({
    page,
  }) => {
    await page.goto(storyUrl("basics-vlist--increasing-items"));
    const component = await page.waitForSelector(scrollableSelector);
    await component.waitForElementState("stable");

    await page.getByRole("checkbox", { name: "reverse" }).click();

    await page.getByRole("checkbox", { name: "prepend" }).click();
    const decreaseRadio = await page.getByRole("radio", { name: "decrease" });
    const increaseRadio = await page.getByRole("radio", { name: "increase" });
    const valueInput = page.getByRole("spinbutton");
    const updateButton = page.getByRole("button", { name: "update" });

    const initialLength = await component.evaluate(
      (e) => e.childNodes[0].childNodes.length
    );
    expect(initialLength).toBeGreaterThan(1);

    let i = 0;
    while (true) {
      i++;
      await valueInput.clear();
      await valueInput.fill(String(i));

      // preprend
      await increaseRadio.click();
      await updateButton.click();
      await component.waitForElementState("stable");

      const [childrenCount, isScrollBarVisible, firstItemBottom] =
        await component.evaluate((e) => {
          const children = e.childNodes[0].childNodes;
          return [
            children.length,
            e.scrollHeight > (e as HTMLElement).offsetHeight,
            (
              children[children.length - 1] as HTMLElement
            ).getBoundingClientRect().bottom - e.getBoundingClientRect().bottom,
          ];
        });

      // Check if bottom is always visible and on bottom
      expectInRange(firstItemBottom, { min: -0.1, max: 0.1 });
      // Check if all items are visible
      expect(childrenCount).toBe(i + initialLength);

      if (isScrollBarVisible) {
        break;
      }

      // remove
      await decreaseRadio.click();
      await updateButton.click();
    }

    expect(i).toBeGreaterThanOrEqual(8);
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

    const component = await page.waitForSelector(scrollableSelector);
    await component.waitForElementState("stable");

    // check if start is displayed
    const first = await getFirstItem(component);
    await expect(first.text).toEqual("0");
    await expect(first.top).toEqual(0);

    // scroll to the end
    await scrollToBottom(component);

    // check if the end is displayed
    await expect(await component.innerText()).toContain("999");
  });

  test("horizontally scrollable", async ({ page }) => {
    await page.goto(storyUrl("basics-vlist--horizontal"), {
      waitUntil: "domcontentloaded",
    });
    await page.evaluate(() => {
      document.documentElement.dir = "rtl";
    });

    await page.waitForSelector(scrollableSelector);
    const component = (await page.$$(scrollableSelector))[0]!;
    await component.waitForElementState("stable");

    // check if start is displayed
    const first = await getFirstItemRtl(component);
    await expect(first.text).toEqual("Column 0");
    await expect(first.right).toEqual(0);

    // scroll to the end
    await scrollToLeft(component);

    // check if the end is displayed
    await expect(await component.innerText()).toContain("999");
  });
});

test("SSR and hydration", async ({ page }) => {
  await page.goto(storyUrl("advanced-ssr--default"));

  const component = await page.waitForSelector(scrollableSelector);
  await component.waitForElementState("stable");

  const first = await getFirstItem(component);
  const last = await getLastItem(component);

  // check if SSR suceeded
  const itemsSelector = '*[style*="top"]';
  const items = await component.$$(itemsSelector);
  const initialLength = items.length;
  await expect(initialLength).toBeGreaterThanOrEqual(30);
  await expect(await items[0].textContent()).toEqual("0");
  await expect(await items[items.length - 1].textContent()).toEqual(
    String(items.length - 1)
  );
  // check if items have styles for SSR
  await expect(await items[0].evaluate((e) => e.style.position)).not.toBe(
    "absolute"
  );

  // should not change state with scroll before hydration
  await component.evaluate((e) => e.scrollTo({ top: 1000 }));
  await expect(initialLength).toBe((await component.$$(itemsSelector)).length);
  await page.waitForTimeout(500);
  await component.evaluate((e) => e.scrollTo({ top: 0 }));

  // hydrate
  await page.getByRole("button", { name: "hydrate" }).click();

  // check if hydration suceeded but state is not changed
  const hydratedItems = await component.$$(itemsSelector);
  expect(hydratedItems.length).toBe(initialLength);
  await expect((await getFirstItem(component)).top).toBe(first.top);
  await expect((await getLastItem(component)).bottom).toBe(last.bottom);
  // check if items do not have styles for SSR
  await expect(await items[0].evaluate((e) => e.style.position)).toBe(
    "absolute"
  );

  // should change state with scroll after hydration
  await component.evaluate((e) => e.scrollTo({ top: 1000 }));
  await page.waitForTimeout(500);
  expect((await component.$$(itemsSelector)).length).not.toBe(initialLength);
});

test.describe("emulated iOS WebKit", () => {
  test.describe("check if scroll jump compensation works", () => {
    test("scroll with touch", async ({ page }) => {
      await page.goto(storyUrl("basics-vlist--default"));

      const component = await page.waitForSelector(scrollableSelector);
      await component.waitForElementState("stable");

      // check if first is displayed
      const last = await getFirstItem(component);
      await expect(last.text).toEqual("0");
      await expect(last.top).toEqual(0);

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

    test("reverse scroll with touch", async ({ page }) => {
      await page.goto(storyUrl("basics-vlist--reverse"));

      const component = await page.waitForSelector(scrollableSelector);
      await component.waitForElementState("stable");

      // FIXME this offset is needed only in ci for unknown reason
      const opts = { y: 60 } as const;

      // check if last is displayed
      const last = await getLastItem(component, opts);
      await expect(last.text).toEqual("999");
      await expect(last.bottom).toBeLessThanOrEqual(1); // FIXME: may not be 0 in Safari

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
          fromY: centerY - h / 3,
          toX: centerX,
          toY: centerY + h / 3,
        });

        // check if item position is preserved during flush
        const [nextTopBeforeFlush, nextLastItemBeforeFlush] = await Promise.all(
          [getScrollTop(component), getLastItem(component, opts)]
        );
        await page.waitForTimeout(500);
        const [nextTop, nextLastItem] = await Promise.all([
          getScrollTop(component),
          getLastItem(component, opts),
        ]);

        expect(nextTop).toBeLessThan(top);
        expect(nextTop).not.toBe(nextTopBeforeFlush);
        expect(nextLastItem.text).toEqual(nextLastItemBeforeFlush.text);
        expectInRange(
          Math.abs(nextLastItem.bottom - nextLastItemBeforeFlush.bottom),
          { min: 0, max: 1 }
        );

        top = nextTop;
      }
    });

    test("reverse scroll with momentum scroll", async ({ page }) => {
      await page.goto(storyUrl("basics-vlist--reverse"));

      const component = await page.waitForSelector(scrollableSelector);
      await component.waitForElementState("stable");

      // FIXME this offset is needed only in ci for unknown reason
      const opts = { y: 60 } as const;

      // check if last is displayed
      const last = await getLastItem(component, opts);
      await expect(last.text).toEqual("999");
      expectInRange(last.bottom, { min: -0.9, max: 1 });

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
          fromY: centerY - h / 3,
          toX: centerX,
          toY: centerY + h / 3,
          momentumScroll: true,
        });

        // check if item position is preserved during flush
        const [nextTopBeforeFlush, nextLastItemBeforeFlush] = await Promise.all(
          [getScrollTop(component), getLastItem(component, opts)]
        );
        await page.waitForTimeout(500);
        const [nextTop, nextLastItem] = await Promise.all([
          getScrollTop(component),
          getLastItem(component, opts),
        ]);

        expect(nextTop).toBeLessThan(top);
        expect(nextTop).not.toBe(nextTopBeforeFlush);
        expect(nextLastItem.text).toEqual(nextLastItemBeforeFlush.text);
        expectInRange(
          Math.abs(nextLastItem.bottom - nextLastItemBeforeFlush.bottom),
          { min: 0, max: 1 }
        );

        top = nextTop;
      }
    });

    // TODO display none
  });

  // test.describe("check if item shift compensation works", () => {
  //   test.beforeEach(async ({ page }) => {
  //     await page.goto(storyUrl("basics-vlist--increasing-items"));
  //   });

  //   test("end", async ({ page }) => {
  //     const component = await page.waitForSelector(scrollableSelector);
  //     await component.waitForElementState("stable");

  //     const updateButton = page.getByRole("button", { name: "update" });

  //     // fill list and move to mid
  //     for (let i = 0; i < 20; i++) {
  //       await updateButton.click();
  //     }
  //     await scrollBy(component, 400);
  //     await page.waitForTimeout(500);

  //     const topItem = await getFirstItem(component);
  //     expect(topItem.text).not.toEqual("0");
  //     expect(topItem.text.length).toBeLessThanOrEqual(2);

  //     // add
  //     await page.getByRole("radio", { name: "increase" }).click();
  //     await updateButton.click();
  //     await page.waitForTimeout(100);
  //     // check if visible item is keeped
  //     expect(topItem).toEqual(await getFirstItem(component));

  //     // remove
  //     await page.getByRole("radio", { name: "decrease" }).click();
  //     await updateButton.click();
  //     await page.waitForTimeout(100);
  //     // check if visible item is keeped
  //     expect(topItem).toEqual(await getFirstItem(component));
  //   });

  //   test("start", async ({ page }) => {
  //     const component = await page.waitForSelector(scrollableSelector);
  //     await component.waitForElementState("stable");

  //     const updateButton = page.getByRole("button", { name: "update" });

  //     // fill list and move to mid
  //     for (let i = 0; i < 20; i++) {
  //       await updateButton.click();
  //     }
  //     await scrollBy(component, 800);
  //     await page.waitForTimeout(500);

  //     const topItem = await getFirstItem(component);
  //     expect(topItem.text).not.toEqual("0");
  //     expect(topItem.text.length).toBeLessThanOrEqual(2);

  //     // add
  //     await page.getByRole("checkbox", { name: "prepend" }).click();
  //     await page.getByRole("radio", { name: "increase" }).click();
  //     await updateButton.click();
  //     await page.waitForTimeout(100);
  //     // check if visible item is keeped
  //     expect(topItem).toEqual(await getFirstItem(component));

  //     // remove
  //     await page.getByRole("radio", { name: "decrease" }).click();
  //     await updateButton.click();
  //     await page.waitForTimeout(100);
  //     // check if visible item is keeped
  //     expect(topItem).toEqual(await getFirstItem(component));
  //   });
  // });
});
