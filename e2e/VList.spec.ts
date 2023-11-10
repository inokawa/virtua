import { test, expect } from "@playwright/test";
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

  // test("horizontally scrollable in direction:rtl", async ({ page }) => {
  //   await page.goto(storyUrl("basics-vlist--horizontal"));

  //   await page.waitForSelector(scrollableSelector);
  //   const component = (await page.$$(scrollableSelector))[1]!;
  //   await component.waitForElementState("stable");

  //   // check if start is displayed
  //   const first = await getFirstItemRtl(component);
  //   await expect(first.text).toEqual("Column 0");
  //   await expect(first.right).toEqual(0);

  //   // scroll to the end
  //   await scrollToLeft(component);

  //   // check if the end is displayed
  //   await expect(await component.innerText()).toContain("999");
  // });

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

  test("padding", async ({ page }) => {
    await page.goto(storyUrl("basics-vlist--padding-and-margin"));

    const component = await page.waitForSelector(scrollableSelector);
    await component.waitForElementState("stable");

    const [topPadding, bottomPadding] = await component.evaluate((e) => {
      const s = getComputedStyle(e);
      return [parseInt(s.paddingTop), parseInt(s.paddingBottom)];
    });
    await expect(topPadding).toBeGreaterThan(10);
    await expect(bottomPadding).toBeGreaterThan(10);

    const itemsSelector = '*[style*="top"]';

    // check if start is displayed
    const topItem = (await component.$$(itemsSelector))[0];
    await expect(await topItem.textContent()).toEqual("0");
    await expect(
      await (async () => {
        const rootRect = (await component.boundingBox())!;
        const itemRect = (await topItem.boundingBox())!;
        return itemRect.y - rootRect.y;
      })()
    ).toEqual(topPadding);

    // scroll to the end
    await scrollToBottom(component);

    // check if the end is displayed
    const items = await component.$$(itemsSelector);
    const bottomItem = items[items.length - 1];
    await expect(await bottomItem.textContent()).toEqual("999");
    await expect(
      await (async () => {
        const rootRect = (await component.boundingBox())!;
        const itemRect = (await bottomItem.boundingBox())!;
        return rootRect.y + rootRect.height - (itemRect.y + itemRect.height);
      })()
    ).toEqual(bottomPadding);
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
});

test.describe("check if scrollToIndex works", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(storyUrl("basics-vlist--scroll-to"));
  });

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
      await expect(lastItem.bottom).toBeLessThanOrEqual(1); // FIXME: may not be 0 in Safari

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

      const scrollListener = component.evaluate((c) => {
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
      await expect(firstItem.top).toBeLessThanOrEqual(1); // FIXME: may not be 0 in Safari

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
      await expect(lastItem.bottom).toBeLessThanOrEqual(1); // FIXME: may not be 0 in Safari

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
      await expect(lastItem.bottom).toBeLessThanOrEqual(1); // FIXME: may not be 0 in Safari

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

      const scrollListener = component.evaluate((c) => {
        let timer: ReturnType<typeof setTimeout> | null = null;
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
      await expect(lastItem.bottom).toBeLessThanOrEqual(1); // FIXME: may not be 0 in Safari

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

  test("end", async ({ page }) => {
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
    await page.getByRole("radio", { name: "append" }).click();
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

  test("start", async ({ page }) => {
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
    await page.getByRole("radio", { name: "prepend" }).click();
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
});
