/**
 * @jsxImportSource solid-js
 */
import { afterEach, expect, it, onTestFinished } from "vitest";
import { commands } from "vitest/browser";
import { hydrate } from "solid-js/web";
import { List } from "../../spec/ssr/solid.jsx";
import {
  cleanupScroll,
  expectHydrated,
  getVirtualizer,
  mountSsr,
} from "../../spec/browser/index.js";

afterEach(cleanupScroll);

// solid needs its hydration script, which is inert when set with innerHTML
const runHydrationScript = (root: Element) => {
  new Function(root.querySelector("script")!.textContent!)();
};

it("should render nothing", async () => {
  const COUNT = 0;
  const ITEM_SIZE = 100;
  const html = await commands.ssrRender({
    ssrCount: COUNT,
    itemSize: ITEM_SIZE,
  });
  expect(html).toMatchSnapshot();

  const root = mountSsr(html);
  const { container } = await getVirtualizer(root);
  expect(container.childElementCount).toEqual(COUNT);
});

it("should render and hydrate items in vertical mode", async () => {
  const COUNT = 10;
  const ITEM_SIZE = 100;
  const html = await commands.ssrRender({
    ssrCount: COUNT,
    itemSize: ITEM_SIZE,
  });
  expect(html).toMatchSnapshot();

  const root = mountSsr(html);
  runHydrationScript(root);
  const { container } = await getVirtualizer(root);
  expect(container.childElementCount).toEqual(COUNT);

  await expectHydrated(root, COUNT, () => {
    const dispose = hydrate(
      () => <List ssrCount={COUNT} itemSize={ITEM_SIZE} />,
      root,
    );
    onTestFinished(dispose);
  });
});

it("should render and hydrate items in horizontal mode", async () => {
  const COUNT = 10;
  const ITEM_SIZE = 100;
  const html = await commands.ssrRender({
    ssrCount: COUNT,
    itemSize: ITEM_SIZE,
    horizontal: true,
  });
  expect(html).toMatchSnapshot();

  const root = mountSsr(html);
  runHydrationScript(root);
  const { container } = await getVirtualizer(root);
  expect(container.childElementCount).toEqual(COUNT);

  await expectHydrated(root, COUNT, () => {
    const dispose = hydrate(
      () => <List ssrCount={COUNT} itemSize={ITEM_SIZE} horizontal />,
      root,
    );
    onTestFinished(dispose);
  });
});
