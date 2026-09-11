import { afterEach, expect, it, onTestFinished } from "vitest";
import { commands } from "vitest/browser";
import { hydrateRoot } from "react-dom/client";
import { List } from "../../spec/ssr/react.js";
import {
  cleanupScroll,
  expectHydrated,
  getVirtualizer,
  mountSsr,
} from "../../spec/browser/index.js";

afterEach(cleanupScroll);

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
  const { container } = await getVirtualizer(root);
  expect(container.childElementCount).toEqual(COUNT);

  await expectHydrated(root, COUNT, () => {
    const reactRoot = hydrateRoot(
      root,
      <List ssrCount={COUNT} itemSize={ITEM_SIZE} />,
    );
    onTestFinished(() => reactRoot.unmount());
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
  const { container } = await getVirtualizer(root);
  expect(container.childElementCount).toEqual(COUNT);

  await expectHydrated(root, COUNT, () => {
    const reactRoot = hydrateRoot(
      root,
      <List ssrCount={COUNT} itemSize={ITEM_SIZE} horizontal />,
    );
    onTestFinished(() => reactRoot.unmount());
  });
});
