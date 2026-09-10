import { afterEach, it } from "vitest";
import { render } from "../../spec/browser/angular.js";
import { Component } from "@angular/core";
import { VList } from "./VList.js";
import { Virtualizer } from "./Virtualizer.js";
import { WindowVirtualizer } from "./WindowVirtualizer.js";
import {
  cleanupScroll,
  expectVirtualizedAndScrollable,
} from "../../spec/browser/index.js";

afterEach(cleanupScroll);

@Component({
  selector: "smoke-vlist",
  imports: [VList],
  template: `
    <virtua-vlist [data]="data" style="height: 400px">
      <ng-template let-item
        ><div>item-{{ item }}</div></ng-template
      >
    </virtua-vlist>
  `,
})
class VListHost {
  readonly data = Array.from({ length: 1000 }, (_, i) => i);
}

@Component({
  selector: "smoke-virtualizer",
  imports: [Virtualizer],
  template: `
    <div style="height: 400px; overflow-y: auto">
      <div virtuaVirtualizer [data]="data">
        <ng-template let-item
          ><div>item-{{ item }}</div></ng-template
        >
      </div>
    </div>
  `,
})
class VirtualizerHost {
  readonly data = Array.from({ length: 1000 }, (_, i) => i);
}

@Component({
  selector: "smoke-window-virtualizer",
  imports: [WindowVirtualizer],
  template: `
    <virtua-window-virtualizer [data]="data">
      <ng-template let-item
        ><div>item-{{ item }}</div></ng-template
      >
    </virtua-window-virtualizer>
  `,
})
class WindowVirtualizerHost {
  readonly data = Array.from({ length: 1000 }, (_, i) => i);
}

it("VList", async () => {
  const container = render(VListHost);
  await expectVirtualizedAndScrollable(container, "item-0", "item-999");
});

it("Virtualizer", async () => {
  const container = render(VirtualizerHost);
  await expectVirtualizedAndScrollable(container, "item-0", "item-999");
});

it("WindowVirtualizer", async () => {
  const container = render(WindowVirtualizerHost);
  await expectVirtualizedAndScrollable(
    container,
    "item-0",
    "item-999",
    () => document.scrollingElement!,
  );
});
