/**
 * @vitest-environment node
 */
import { it, describe, expect, vi } from "vitest";
import { Component, provideZonelessChangeDetection } from "@angular/core";
import { bootstrapApplication } from "@angular/platform-browser";
import {
  provideServerRendering,
  renderApplication,
} from "@angular/platform-server";
import { JSDOM } from "jsdom";
import { VList } from "./VList.js";

// renderApplication waits for the app to become stable, which is scheduled in a
// microtask. spec/setup.ts fakes queueMicrotask, so restore the real one here.
vi.useRealTimers();

const LIST_ID = "list-id";

const config = {
  ssrCount: 0,
  itemSize: 40,
  bufferSize: 160,
  horizontal: false,
};

@Component({
  selector: "test-host",
  imports: [VList],
  template: `
    <virtua-vlist
      id="list-id"
      [data]="data"
      [ssrCount]="config.ssrCount"
      [bufferSize]="config.bufferSize"
      [itemSize]="config.itemSize"
      [horizontal]="config.horizontal"
    >
      <ng-template let-item>
        <div>{{ item }}</div>
      </ng-template>
    </virtua-vlist>
  `,
})
class Host {
  protected readonly data = Array.from({ length: 1000 }).map((_, i) => i);
  protected readonly config = config;
}

const render = (opts: typeof config): Promise<string> => {
  Object.assign(config, opts);
  return renderApplication(
    (context) =>
      bootstrapApplication(
        Host,
        {
          providers: [
            provideZonelessChangeDetection(),
            provideServerRendering(),
          ],
        },
        context,
      ),
    { document: "<html><body><test-host></test-host></body></html>" },
  );
};

const countItems = (html: string): number =>
  new JSDOM(html).window.document.getElementById(LIST_ID)!.children[0]!
    .childElementCount;

describe("SSR", () => {
  it("should render nothing", async () => {
    const COUNT = 0;
    const ITEM_SIZE = 40;
    const html = await render({
      ssrCount: COUNT,
      itemSize: ITEM_SIZE,
      bufferSize: ITEM_SIZE * 4,
      horizontal: false,
    });
    expect(html).toMatchSnapshot();
    expect(countItems(html)).toEqual(COUNT);
  });

  it("should render items with ssrCount in vertical mode", async () => {
    const COUNT = 10;
    const ITEM_SIZE = 40;
    const html = await render({
      ssrCount: COUNT,
      itemSize: ITEM_SIZE,
      bufferSize: ITEM_SIZE * 4,
      horizontal: false,
    });
    expect(html).toMatchSnapshot();
    expect(countItems(html)).toEqual(COUNT);
  });

  it("should render items with ssrCount in horizontal mode", async () => {
    const COUNT = 5;
    const ITEM_SIZE = 40;
    const html = await render({
      ssrCount: COUNT,
      itemSize: ITEM_SIZE,
      bufferSize: ITEM_SIZE * 4,
      horizontal: true,
    });
    expect(html).toMatchSnapshot();
    expect(countItems(html)).toEqual(COUNT);
  });
});
