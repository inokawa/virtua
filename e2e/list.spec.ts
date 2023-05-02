import { test, expect, ElementHandle } from "@playwright/test";

const storyUrl = (id: string) =>
  `http://localhost:6006/iframe.html?id=${id}&viewMode=story`;

const scrollableSelector = '*[style*="overflow"]';

const approxymate = (v: number): number => Math.round(v / 100) * 100;

const clearInput = (input: ElementHandle<HTMLInputElement>) =>
  input.evaluate((element) => (element.value = ""));

const getFirstItem = (scrollable: ElementHandle<HTMLElement | SVGElement>) => {
  return scrollable.evaluate((s) => {
    const rect = s.getBoundingClientRect();
    const el = document.elementFromPoint(rect.left + 1, rect.top + 1)!;
    return {
      text: el.textContent!,
      top: el.getBoundingClientRect().top - rect.top,
    };
  });
};

const getLastItem = (scrollable: ElementHandle<HTMLElement | SVGElement>) => {
  return scrollable.evaluate((s) => {
    const rect = s.getBoundingClientRect();
    const el = document.elementFromPoint(rect.left + 1, rect.bottom - 1)!;
    return {
      text: el.textContent!,
      bottom: el.getBoundingClientRect().bottom - rect.bottom,
    };
  });
};
const getFirstItemRtl = (
  scrollable: ElementHandle<HTMLElement | SVGElement>
) => {
  return scrollable.evaluate((s) => {
    const rect = s.getBoundingClientRect();
    const el = document.elementFromPoint(rect.right - 1, rect.top + 1)!;
    return {
      text: el.textContent!,
      top: el.getBoundingClientRect().top - rect.top,
    };
  });
};

const scrollToBottom = async (
  scrollable: ElementHandle<HTMLElement | SVGElement>
) => {
  await scrollable.evaluate((e) => {
    e.scrollTop = e.scrollHeight;
  });
  await scrollable.waitForElementState("stable");
  // FIXME: scroll twice to reach definitely
  await scrollable.evaluate((e) => {
    e.scrollTop = e.scrollHeight;
  });
  await scrollable.waitForElementState("stable");
};
const scrollToRight = async (
  scrollable: ElementHandle<HTMLElement | SVGElement>
) => {
  await scrollable.evaluate((e) => {
    e.scrollLeft = e.scrollWidth;
  });
  await scrollable.waitForElementState("stable");
  // FIXME: scroll twice to reach definitely
  await scrollable.evaluate((e) => {
    e.scrollLeft = e.scrollWidth;
  });
  await scrollable.waitForElementState("stable");
};
const scrollToLeft = async (
  scrollable: ElementHandle<HTMLElement | SVGElement>
) => {
  await scrollable.evaluate((e) => {
    e.scrollLeft = -e.scrollWidth;
  });
  await scrollable.waitForElementState("stable");
  // FIXME: scroll twice to reach definitely
  await scrollable.evaluate((e) => {
    e.scrollLeft = -e.scrollWidth;
  });
  await scrollable.waitForElementState("stable");
};

test.describe("smoke", () => {
  test("vertically scrollable", async ({ page }) => {
    await page.goto(storyUrl("basics-list--default"));

    const scrollable = await page.waitForSelector(scrollableSelector);
    await scrollable.waitForElementState("stable");

    // check if start is displayed
    await expect((await getFirstItem(scrollable)).text).toEqual("0");

    // scroll to the end
    await scrollToBottom(scrollable);

    // check if the end is displayed
    await expect(await scrollable.innerText()).toContain("999");
  });

  test("horizontally scrollable", async ({ page }) => {
    await page.goto(storyUrl("basics-list--horizontal"));

    await page.waitForSelector(scrollableSelector);
    const scrollable = (await page.$$(scrollableSelector))[0]!;
    await scrollable.waitForElementState("stable");

    // check if start is displayed
    await expect((await getFirstItem(scrollable)).text).toEqual("Column 0");

    // scroll to the end
    await scrollToRight(scrollable);

    // check if the end is displayed
    await expect(await scrollable.innerText()).toContain("999");
  });

  test("horizontally scrollable in direction:rtl", async ({ page }) => {
    await page.goto(storyUrl("basics-list--horizontal"));

    await page.waitForSelector(scrollableSelector);
    const scrollable = (await page.$$(scrollableSelector))[2]!;
    await scrollable.waitForElementState("stable");

    // check if start is displayed
    await expect((await getFirstItemRtl(scrollable)).text).toEqual("Column 0");

    // scroll to the end
    await scrollToLeft(scrollable);

    // check if the end is displayed
    await expect(await scrollable.innerText()).toContain("999");
  });
});

test.describe("check if scroll jump compensation works", () => {
  test("vertical start -> end", async ({ page }) => {
    await page.goto(storyUrl("basics-list--default"));
    const scrollable = await page.waitForSelector(scrollableSelector);
    await scrollable.waitForElementState("stable");

    // check if start is displayed
    await expect((await getFirstItem(scrollable)).text).toEqual("0");

    // check if offset from start is always keeped
    await scrollable.click();
    const min = 200;
    const initial = await scrollable.evaluate((e) => e.scrollTop);
    let prev = initial;
    for (let i = 0; i < 500; i++) {
      await page.keyboard.press("ArrowDown", { delay: 10 });
      let offset = await scrollable.evaluate((e) => e.scrollTop);
      await expect(offset).toBeGreaterThanOrEqual(prev);
      prev = offset;
    }
    await expect(prev).toBeGreaterThan(initial + min);
  });

  test("vertical end -> start", async ({ page }) => {
    await page.goto(storyUrl("basics-list--default"));
    const scrollable = await page.waitForSelector(scrollableSelector);
    await scrollable.waitForElementState("stable");

    // check if start is displayed
    await expect((await getFirstItem(scrollable)).text).toEqual("0");

    // scroll to the end
    await scrollToBottom(scrollable);

    // check if offset from end is always keeped
    await scrollable.click();
    const min = 200;
    const initial = await scrollable.evaluate(
      (e) => e.scrollHeight - e.scrollTop
    );
    let prev = initial;
    for (let i = 0; i < 500; i++) {
      await page.keyboard.press("ArrowUp", { delay: 10 });
      let offset = await scrollable.evaluate(
        (e) => e.scrollHeight - e.scrollTop
      );
      await expect(offset).toBeGreaterThanOrEqual(prev);
      prev = offset;
    }
    await expect(prev).toBeGreaterThan(initial + min);
  });

  test("horizontal start -> end", async ({ page }) => {
    await page.goto(storyUrl("basics-list--horizontal"));
    const scrollable = await page.waitForSelector(scrollableSelector);
    await scrollable.waitForElementState("stable");

    // check if start is displayed
    await expect((await getFirstItem(scrollable)).text).toEqual("Column 0");

    // check if offset from start is always keeped
    await scrollable.click();
    const min = 200;
    const initial = await scrollable.evaluate((e) => e.scrollLeft);
    let prev = initial;
    for (let i = 0; i < 500; i++) {
      await page.keyboard.press("ArrowRight", { delay: 10 });
      let offset = await scrollable.evaluate((e) => e.scrollLeft);
      await expect(offset).toBeGreaterThanOrEqual(prev);
      prev = offset;
    }
    await expect(prev).toBeGreaterThan(initial + min);
  });

  test("horizontal end -> start", async ({ page }) => {
    await page.goto(storyUrl("basics-list--horizontal"));
    const scrollable = await page.waitForSelector(scrollableSelector);
    await scrollable.waitForElementState("stable");

    // check if start is displayed
    await expect((await getFirstItem(scrollable)).text).toEqual("Column 0");

    // scroll to the end
    await scrollToRight(scrollable);

    // check if offset from end is always keeped
    await scrollable.click();
    const min = 200;
    const initial = await scrollable.evaluate(
      (e) => e.scrollWidth - e.scrollLeft
    );
    let prev = initial;
    for (let i = 0; i < 500; i++) {
      await page.keyboard.press("ArrowLeft", { delay: 10 });
      let offset = await scrollable.evaluate(
        (e) => e.scrollWidth - e.scrollLeft
      );
      await expect(offset).toBeGreaterThanOrEqual(prev);
      prev = offset;
    }
    await expect(prev).toBeGreaterThan(initial + min);
  });
});

test.describe("check if scrollToIndex works", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(storyUrl("basics-list--scroll-to"));
  });

  test("mid", async ({ page }) => {
    const scrollable = await page.waitForSelector(scrollableSelector);

    // check if start is displayed
    await expect((await getFirstItem(scrollable)).text).toEqual("0");

    const button = (await page
      .getByRole("button", { name: "scroll to index" })
      .elementHandle())!;
    const input = await page.evaluateHandle(
      (el) => el!.previousSibling as HTMLInputElement,
      button
    );

    await clearInput(input);
    await input.type("700");
    await button.click();

    await scrollable.waitForElementState("stable");

    // Check if scrolled precisely
    const firstItem = await getFirstItem(scrollable);
    await expect(firstItem.text).toEqual("700");
    await expect(firstItem.top).toEqual(0);

    // Check if unnecessary items are not rendered
    await expect(await scrollable.innerText()).not.toContain("650");
    await expect(await scrollable.innerText()).not.toContain("750");
  });

  test("start", async ({ page }) => {
    const scrollable = await page.waitForSelector(scrollableSelector);

    // check if start is displayed
    await expect((await getFirstItem(scrollable)).text).toEqual("0");

    const button = (await page
      .getByRole("button", { name: "scroll to index" })
      .elementHandle())!;
    const input = await page.evaluateHandle(
      (el) => el!.previousSibling as HTMLInputElement,
      button
    );

    await clearInput(input);
    await input.type("500");
    await button.click();

    await scrollable.waitForElementState("stable");

    await expect(await scrollable.innerText()).toContain("500");

    await clearInput(input);
    await input.type("0");
    await button.click();

    // Check if scrolled precisely
    const firstItem = await getFirstItem(scrollable);
    await expect(firstItem.text).toEqual("0");
    await expect(firstItem.top).toEqual(0);

    // Check if unnecessary items are not rendered
    await expect(await scrollable.innerText()).not.toContain("50\n");
  });

  test("end", async ({ page }) => {
    const scrollable = await page.waitForSelector(scrollableSelector);

    // check if start is displayed
    await expect((await getFirstItem(scrollable)).text).toEqual("0");

    const button = (await page
      .getByRole("button", { name: "scroll to index" })
      .elementHandle())!;
    const input = await page.evaluateHandle(
      (el) => el!.previousSibling as HTMLInputElement,
      button
    );

    await clearInput(input);
    await input.type("999");
    await button.click();

    await scrollable.waitForElementState("stable");

    // Check if scrolled precisely
    const lastItem = await getLastItem(scrollable);
    await expect(lastItem.text).toEqual("999");
    await expect(lastItem.bottom).toEqual(0);

    // Check if unnecessary items are not rendered
    await expect(await scrollable.innerText()).not.toContain("949");
  });
});

test.describe("check if scrollTo works", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(storyUrl("basics-list--scroll-to"));
  });

  test("down and up", async ({ page }) => {
    const scrollable = await page.waitForSelector(scrollableSelector);

    // check if start is displayed
    await expect((await getFirstItem(scrollable)).text).toEqual("0");

    const button = (await page
      .getByRole("button", { name: "scroll to offset" })
      .elementHandle())!;
    const input = await page.evaluateHandle(
      (el) => el!.previousSibling as HTMLInputElement,
      button
    );

    // scroll down
    await clearInput(input);
    await input.type("5000");
    await button.click();

    await scrollable.waitForElementState("stable");

    await expect(
      // scrollTo may not scroll to exact position with dynamic sized items
      approxymate(await scrollable.evaluate((e) => e.scrollTop))
    ).toEqual(5000);

    // scroll up
    await clearInput(input);
    await input.type("1000");
    await button.click();

    await scrollable.waitForElementState("stable");

    await expect(
      // scrollTo may not scroll to exact position with dynamic sized items
      approxymate(await scrollable.evaluate((e) => e.scrollTop))
    ).toEqual(1000);
  });
});

test.describe("check if scrollBy works", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(storyUrl("basics-list--scroll-to"));
  });

  test("down and up", async ({ page }) => {
    const scrollable = await page.waitForSelector(scrollableSelector);

    // check if start is displayed
    await expect((await getFirstItem(scrollable)).text).toEqual("0");

    const button = (await page
      .getByRole("button", { name: "scroll by offset" })
      .elementHandle())!;
    const input = await page.evaluateHandle(
      (el) => el!.previousSibling!.previousSibling as HTMLInputElement,
      button
    );

    // scroll down
    await clearInput(input);
    await input.type("1234");
    await button.click();

    await scrollable.waitForElementState("stable");

    await expect(await scrollable.evaluate((e) => e.scrollTop)).toEqual(1234);

    // scroll up
    await clearInput(input);
    await input.type("-234");
    await button.click();

    await scrollable.waitForElementState("stable");

    await expect(await scrollable.evaluate((e) => e.scrollTop)).toEqual(1000);
  });
});
