import { afterEach, expect, it } from "vitest";
import { commands } from "vitest/browser";
import { hydrate } from "../../spec/ssr/svelte.js";
import {
  cleanupScroll,
  expectEmptyHydrated,
  expectHydrated,
  getVirtualizer,
  mountSsr,
} from "../../spec/browser/index.js";

afterEach(cleanupScroll);

it("should render nothing", async () => {
  const COUNT = 0;
  const ITEM_SIZE = 100;
  const html = await commands.ssrRender("list", {
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
  const props = { ssrCount: COUNT, itemSize: ITEM_SIZE };
  const html = await commands.ssrRender("list", props);
  expect(html).toMatchSnapshot();

  const root = mountSsr(html);
  const { container } = await getVirtualizer(root);
  expect(container.childElementCount).toEqual(COUNT);

  await expectHydrated(root, COUNT, () => hydrate(root, "list", props));
});

it("should render and hydrate items in horizontal mode", async () => {
  const COUNT = 10;
  const ITEM_SIZE = 100;
  const props = { ssrCount: COUNT, itemSize: ITEM_SIZE, horizontal: true };
  const html = await commands.ssrRender("list", props);
  expect(html).toMatchSnapshot();

  const root = mountSsr(html);
  const { container } = await getVirtualizer(root);
  expect(container.childElementCount).toEqual(COUNT);

  await expectHydrated(root, COUNT, () => hydrate(root, "list", props));
});

it("should render and hydrate items in a window in vertical mode", async () => {
  const COUNT = 10;
  const ITEM_SIZE = 100;
  const props = { ssrCount: COUNT, itemSize: ITEM_SIZE };
  const html = await commands.ssrRender("window", props);
  expect(html).toMatchSnapshot();

  const root = mountSsr(html);
  const { container } = await getVirtualizer(root);
  expect(container.childElementCount).toEqual(COUNT);

  await expectHydrated(root, COUNT, () => hydrate(root, "window", props));
});

it("should render and hydrate items in a window in horizontal mode", async () => {
  const COUNT = 10;
  const ITEM_SIZE = 100;
  const props = { ssrCount: COUNT, itemSize: ITEM_SIZE, horizontal: true };
  const html = await commands.ssrRender("window", props);
  expect(html).toMatchSnapshot();

  const root = mountSsr(html);
  // The items take the height of the parent in horizontal mode, and a box without height does not make the document scrollable
  root.style.height = "200px";
  const { container } = await getVirtualizer(root);
  expect(container.childElementCount).toEqual(COUNT);

  await expectHydrated(root, COUNT, () => hydrate(root, "window", props));
});

it("should render no cells and hydrate a grid", async () => {
  const html = await commands.ssrRender("grid");
  expect(html).toMatchSnapshot();

  const root = mountSsr(html);

  await expectEmptyHydrated(root, "row-0/col-0", "row-999/col-999", () =>
    hydrate(root, "grid"),
  );
});

it("should render no items and hydrate a masonry", async () => {
  const html = await commands.ssrRender("masonry");
  expect(html).toMatchSnapshot();

  const root = mountSsr(html);

  await expectEmptyHydrated(root, "item-0", "item-999", () =>
    hydrate(root, "masonry"),
  );
});
