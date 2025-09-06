import { test, expect } from "@playwright/test";
import {
  storyUrl,
  getFirstItem,
  scrollToBottom,
  scrollToRight,
  getScrollable,
} from "./utils";

test.describe("smoke", () => {
  test("vertically and horizontally scrollable", async ({ page }) => {
    await page.goto(storyUrl("basics-vgrid--default"));

    const component = await getScrollable(page);

    // check if start is displayed
    expect(
      (await getFirstItem(component)).text.startsWith("0 / 0")
    ).toBeTruthy();

    // scroll to the end
    await scrollToBottom(component);
    await scrollToRight(component);

    // check if the end is displayed
    await expect(
      component.getByText("999 / 499", { exact: true })
    ).toBeVisible();
  });
});

test("check if scrollToIndex works", async ({ page }) => {
  await page.goto(storyUrl("basics-vgrid--scroll-to"));

  const component = await getScrollable(page);

  // check if start is displayed
  expect((await getFirstItem(component)).text.startsWith("0 / 0")).toBeTruthy();

  const button = page.getByRole("button", { name: "scroll to index" });
  const [colInput, rowInput] = await page.locator("input").all();

  await button.click();

  await (await component.elementHandle())!.waitForElementState("stable");

  // Check if scrolled precisely
  const firstItem = await getFirstItem(component);
  expect(firstItem.text).toEqual(
    `${await colInput.evaluate(
      (e) => (e as HTMLInputElement).value
    )} / ${await rowInput.evaluate((e) => (e as HTMLInputElement).value)}`
  );
  expect(firstItem.top).toEqual(0);
  expect(firstItem.left).toEqual(0);

  // Check if unnecessary items are not rendered
  await expect(component.getByText("650", { exact: true })).not.toBeVisible();
  await expect(component.getByText("750", { exact: true })).not.toBeVisible();
});
