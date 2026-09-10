import { afterEach, expect, it, onTestFinished } from "vitest";
import { commands } from "vitest/browser";
import { hydrate, unmount } from "svelte";
import VListHost from "../../spec/ssr/svelte.svelte";
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

  const container = mountSsr(html);
  expect((await getVirtualizer(container)).childElementCount).toEqual(COUNT);
});

it("should render and hydrate items in vertical mode", async () => {
  const COUNT = 10;
  const ITEM_SIZE = 100;
  const html = await commands.ssrRender({
    ssrCount: COUNT,
    itemSize: ITEM_SIZE,
  });
  expect(html).toMatchSnapshot();

  const container = mountSsr(html);
  expect((await getVirtualizer(container)).childElementCount).toEqual(COUNT);

  await expectHydrated(container, COUNT, () => {
    const app = hydrate(VListHost, {
      target: container,
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

  const container = mountSsr(html);
  expect((await getVirtualizer(container)).childElementCount).toEqual(COUNT);

  await expectHydrated(container, COUNT, () => {
    const app = hydrate(VListHost, {
      target: container,
      props: { ssrCount: COUNT, itemSize: ITEM_SIZE, horizontal: true },
    });
    onTestFinished(() => unmount(app));
  });
});
