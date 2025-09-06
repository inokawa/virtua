import { test, expect } from "@playwright/test";
import {
  storyUrl,
  scrollToBottom,
  scrollToRight,
  getScrollable,
  relativeTop,
  relativeLeft,
} from "./utils";

test.describe("smoke", () => {
  test("vertically and horizontally scrollable", async ({ page }) => {
    await page.goto(storyUrl("basics-vgrid--default"));

    const component = await getScrollable(page);

    // check if start is displayed
    await expect(component.getByText("0 / 0", { exact: true })).toBeVisible();

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
  await expect(component.getByText("0 / 0", { exact: true })).toBeVisible();

  const button = page.getByRole("button", { name: "scroll to index" });
  const [colInput, rowInput] = await page.locator("input").all();

  await button.click();

  // Check if scrolled precisely
  const text = `${await colInput.inputValue()} / ${await rowInput.inputValue()}`;
  const firstItem = component.getByText(text, { exact: true });
  await expect(firstItem).toBeVisible();
  expect(await relativeTop(component, firstItem)).toEqual(0);
  expect(await relativeLeft(component, firstItem)).toEqual(0);

  // Check if unnecessary items are not rendered
  await expect(component.getByText("650", { exact: true })).not.toBeVisible();
  await expect(component.getByText("750", { exact: true })).not.toBeVisible();
});
