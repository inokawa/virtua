import { it, onTestFinished } from "vitest";
import { Component, type Type } from "@angular/core";
import { TestBed } from "@angular/core/testing";
import {
  VList,
  Virtualizer,
  WindowVirtualizer,
} from "../../src/angular/index.js";
import { expectVirtualized } from "./utils.js";

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

const render = (host: Type<unknown>) => {
  const fixture = TestBed.createComponent(host);
  onTestFinished(() => {
    fixture.destroy();
    document.scrollingElement!.scrollTop = 0;
    document.scrollingElement!.scrollLeft = 0;
  });
  fixture.autoDetectChanges();
  return fixture.nativeElement as HTMLElement;
};

it("VList", async () => {
  const container = render(VListHost);
  await expectVirtualized(container, "item-0", "item-999");
});

it("Virtualizer", async () => {
  const container = render(VirtualizerHost);
  await expectVirtualized(container, "item-0", "item-999");
});

it("WindowVirtualizer", async () => {
  const container = render(WindowVirtualizerHost);
  await expectVirtualized(
    container,
    "item-0",
    "item-999",
    () => document.scrollingElement!,
  );
});
