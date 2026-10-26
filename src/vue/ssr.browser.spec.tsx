import { afterEach, describe, expect, it } from "vitest";
import { commands } from "vitest/browser";
import { hydrate } from "../../spec/ssr/vue.js";
import type { CacheSnapshot } from "../core/index.js";
import { range } from "../../spec/utils.js";
import {
  cleanupScroll,
  expectGridHydrated,
  expectHydrated,
  expectMasonryHydrated,
  getVirtualizer,
  mountSsr,
} from "../../spec/browser/index.js";

afterEach(cleanupScroll);

describe("VList", () => {
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
    const html = await commands.ssrRender("list", {
      ssrCount: COUNT,
      itemSize: ITEM_SIZE,
    });
    expect(html).toMatchSnapshot();

    const root = mountSsr(html);
    const { container } = await getVirtualizer(root);
    expect(container.childElementCount).toEqual(COUNT);

    await expectHydrated(root, COUNT, () =>
      hydrate(root, "list", { ssrCount: COUNT, itemSize: ITEM_SIZE }),
    );
  });

  it("should render and hydrate items in horizontal mode", async () => {
    const COUNT = 10;
    const ITEM_SIZE = 100;
    const html = await commands.ssrRender("list", {
      ssrCount: COUNT,
      itemSize: ITEM_SIZE,
      horizontal: true,
    });
    expect(html).toMatchSnapshot();

    const root = mountSsr(html);
    const { container } = await getVirtualizer(root);
    expect(container.childElementCount).toEqual(COUNT);

    await expectHydrated(root, COUNT, () =>
      hydrate(root, "list", {
        ssrCount: COUNT,
        itemSize: ITEM_SIZE,
        horizontal: true,
      }),
    );
  });
});

describe("WindowVirtualizer", () => {
  it("should render and hydrate items in vertical mode", async () => {
    const COUNT = 10;
    const ITEM_SIZE = 100;
    const html = await commands.ssrRender("window", {
      ssrCount: COUNT,
      itemSize: ITEM_SIZE,
    });
    expect(html).toMatchSnapshot();

    const root = mountSsr(html);
    const { container } = await getVirtualizer(root);
    expect(container.childElementCount).toEqual(COUNT);

    await expectHydrated(root, COUNT, () =>
      hydrate(root, "window", { ssrCount: COUNT, itemSize: ITEM_SIZE }),
    );
  });

  it("should render and hydrate items in horizontal mode", async () => {
    const COUNT = 10;
    const ITEM_SIZE = 100;
    const html = await commands.ssrRender("window", {
      ssrCount: COUNT,
      itemSize: ITEM_SIZE,
      horizontal: true,
    });
    expect(html).toMatchSnapshot();

    const root = mountSsr(html);
    // The items take the height of the parent in horizontal mode, and a box without height does not make the document scrollable
    root.style.height = "200px";
    const { container } = await getVirtualizer(root);
    expect(container.childElementCount).toEqual(COUNT);

    await expectHydrated(root, COUNT, () =>
      hydrate(root, "window", {
        ssrCount: COUNT,
        itemSize: ITEM_SIZE,
        horizontal: true,
      }),
    );
  });
});

describe("VGrid", () => {
  it("should render nothing", async () => {
    const html = await commands.ssrRender("grid", {});
    expect(html).toMatchSnapshot();

    const root = mountSsr(html);
    const { container } = await getVirtualizer(root);
    expect(container.childElementCount).toEqual(0);
  });

  it("should render and hydrate items", async () => {
    // Fewer than the 400px viewport fits
    const ROW_COUNT = 8;
    const COL_COUNT = 6;
    const html = await commands.ssrRender("grid", {
      ssrRowCount: ROW_COUNT,
      ssrColCount: COL_COUNT,
    });
    expect(html).toMatchSnapshot();

    const root = mountSsr(html);
    const { container } = await getVirtualizer(root);
    expect(container.childElementCount).toEqual(ROW_COUNT);
    for (const row of container.children) {
      expect(row.childElementCount).toEqual(COL_COUNT);
    }

    await expectGridHydrated(root, ROW_COUNT, COL_COUNT, () =>
      hydrate(root, "grid", { ssrRowCount: ROW_COUNT, ssrColCount: COL_COUNT }),
    );
  });
});

describe("VMasonry", () => {
  it("should render nothing", async () => {
    const html = await commands.ssrRender("masonry", {});
    expect(html).toMatchSnapshot();

    const root = mountSsr(html);
    const { container } = await getVirtualizer(root);
    expect(container.childElementCount).toEqual(0);
  });

  it("should render and hydrate items with the cache", async () => {
    // 4 rows of the lanes, fewer than the 400px viewport fits
    const COUNT = 16;
    const ITEM_SIZE = 100;
    const LANES = 4;
    const CACHE: CacheSnapshot = [range(1000).map(() => ITEM_SIZE), ITEM_SIZE];
    const html = await commands.ssrRender("masonry", {
      ssrCount: COUNT,
      cache: CACHE,
    });
    expect(html).toMatchSnapshot();

    const root = mountSsr(html);
    const { container } = await getVirtualizer(root);
    expect(container.childElementCount).toEqual(COUNT);

    await expectMasonryHydrated(root, COUNT, LANES, () =>
      hydrate(root, "masonry", { ssrCount: COUNT, cache: CACHE }),
    );
  });
});
