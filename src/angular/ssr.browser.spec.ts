import { afterEach, expect, it, onTestFinished } from "vitest";
import { commands } from "vitest/browser";
import { provideZonelessChangeDetection } from "@angular/core";
import {
  bootstrapApplication,
  provideClientHydration,
} from "@angular/platform-browser";
import { SSR_PROPS, SsrVListHost } from "../../spec/ssr/angular.js";
import {
  cleanupScroll,
  expectHydrated,
  getVirtualizer,
  mountSsr,
} from "../../spec/browser/index.js";
import type { SsrProps } from "../../spec/browser/index.js";

afterEach(cleanupScroll);

// angular verifies the marker comment it emitted against the document
const moveMarkerToHead = (container: Element) => {
  const marker = document.head.appendChild(container.firstChild!);
  onTestFinished(() => marker.remove());
};

const bootstrap = (props: SsrProps) => {
  const app = bootstrapApplication(SsrVListHost, {
    providers: [
      provideZonelessChangeDetection(),
      provideClientHydration(),
      { provide: SSR_PROPS, useValue: props },
    ],
  });
  onTestFinished(async () => (await app).destroy());
};

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
  moveMarkerToHead(container);
  expect((await getVirtualizer(container)).childElementCount).toEqual(COUNT);

  await expectHydrated(container, COUNT, () =>
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

  const container = mountSsr(html);
  moveMarkerToHead(container);
  expect((await getVirtualizer(container)).childElementCount).toEqual(COUNT);

  await expectHydrated(container, COUNT, () =>
    bootstrap({ ssrCount: COUNT, itemSize: ITEM_SIZE, horizontal: true }),
  );
});
