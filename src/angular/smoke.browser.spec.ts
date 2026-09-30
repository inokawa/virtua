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
import { VGrid } from "./VGrid.js";
import { range } from "../../spec/utils.js";

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
  readonly data = range(1000);
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
  readonly data = range(1000);
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
  readonly data = range(1000);
}

@Component({
  selector: "smoke-vgrid",
  imports: [VGrid],
  template: `
    <virtua-vgrid
      [rows]="1000"
      [rowHeight]="40"
      [cols]="1000"
      [colWidth]="100"
      style="height: 400px; width: 400px"
    >
      <ng-template let-rowIndex="row" let-colIndex="col"
        ><div>item-{{ rowIndex }}/item-{{ colIndex }}</div></ng-template
      >
    </virtua-vgrid>
  `,
})
class VGridHost {}

it("VList", async () => {
  const root = render(VListHost);
  await expectVirtualizedAndScrollable(root, "item-0", "item-999");
});

it("Virtualizer", async () => {
  const root = render(VirtualizerHost);
  await expectVirtualizedAndScrollable(root, "item-0", "item-999");
});

it("WindowVirtualizer", async () => {
  const root = render(WindowVirtualizerHost);
  await expectVirtualizedAndScrollable(root, "item-0", "item-999");
});

it("VGrid", async () => {
  const root = render(VGridHost);
  await expectVirtualizedAndScrollable(root, "item-0", "item-999");
});
