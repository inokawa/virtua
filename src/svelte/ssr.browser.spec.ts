import { afterEach, expect, it, onTestFinished } from "vitest";
import { commands } from "vitest/browser";
import { hydrate, unmount } from "svelte";
import VListHost from "../../spec/ssr/svelte.svelte";
import VGridHost from "../../spec/ssr/svelte-grid.svelte";
import {
  cleanupScroll,
  expectGridHydrated,
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
    const app = hydrate(VListHost, {
      target: root,
      props: { ssrCount: COUNT, itemSize: ITEM_SIZE },
    });
    onTestFinished(() => unmount(app));
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
    const app = hydrate(VListHost, {
      target: root,
      props: { ssrCount: COUNT, itemSize: ITEM_SIZE, horizontal: true },
    });
    onTestFinished(() => unmount(app));
  });
});

it("should render no cells and hydrate a grid", async () => {
  const html = await commands.ssrRenderGrid();
  expect(html).toMatchSnapshot();

  const root = mountSsr(html);

  await expectGridHydrated(root, () => {
    const app = hydrate(VGridHost, { target: root });
    onTestFinished(() => unmount(app));
  });
});
