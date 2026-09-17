import { afterEach, expect, it, onTestFinished } from "vitest";
import { commands } from "vitest/browser";
import {
  type Provider,
  type Type,
  provideZonelessChangeDetection,
} from "@angular/core";
import {
  bootstrapApplication,
  provideClientHydration,
} from "@angular/platform-browser";
import {
  SSR_PROPS,
  SsrVGridHost,
  SsrVListHost,
} from "../../spec/ssr/angular.js";
import {
  cleanupScroll,
  expectGridHydrated,
  expectHydrated,
  getVirtualizer,
  mountSsr,
} from "../../spec/browser/index.js";
import type { SsrProps } from "../../spec/browser/index.js";

afterEach(cleanupScroll);

// angular verifies the marker comment it emitted against the document
const moveMarkerToHead = (root: Element) => {
  const marker = document.head.appendChild(root.firstChild!);
  onTestFinished(() => marker.remove());
};

const bootstrapHost = (host: Type<unknown>, providers: Provider[]) => {
  const app = bootstrapApplication(host, {
    providers: [
      provideZonelessChangeDetection(),
      provideClientHydration(),
      ...providers,
    ],
  });
  onTestFinished(async () => (await app).destroy());
};

const bootstrap = (props: SsrProps) =>
  bootstrapHost(SsrVListHost, [{ provide: SSR_PROPS, useValue: props }]);

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
  moveMarkerToHead(root);
  const { container } = await getVirtualizer(root);
  expect(container.childElementCount).toEqual(COUNT);

  await expectHydrated(root, COUNT, () =>
    bootstrap({ ssrCount: COUNT, itemSize: ITEM_SIZE }),
  );
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
  moveMarkerToHead(root);
  const { container } = await getVirtualizer(root);
  expect(container.childElementCount).toEqual(COUNT);

  await expectHydrated(root, COUNT, () =>
    bootstrap({ ssrCount: COUNT, itemSize: ITEM_SIZE, horizontal: true }),
  );
});

it("should render no cells and hydrate a grid", async () => {
  const html = await commands.ssrRenderGrid();
  expect(html).toMatchSnapshot();

  const root = mountSsr(html);
  moveMarkerToHead(root);

  await expectGridHydrated(root, () => bootstrapHost(SsrVGridHost, []));
});
