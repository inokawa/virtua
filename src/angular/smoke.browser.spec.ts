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
import { VMasonry } from "./VMasonry.js";

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
  selector: "smoke-vlist-horizontal",
  imports: [VList],
  template: `
    <virtua-vlist
      [data]="data"
      [horizontal]="true"
      style="width: 400px; height: 200px"
    >
      <ng-template let-item
        ><div>item-{{ item }}</div></ng-template
      >
    </virtua-vlist>
  `,
})
class VListHorizontalHost {
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
  selector: "smoke-virtualizer-horizontal",
  imports: [Virtualizer],
  template: `
    <div style="width: 400px; height: 200px; overflow-x: auto">
      <div virtuaVirtualizer [data]="data" [horizontal]="true">
        <ng-template let-item
          ><div>item-{{ item }}</div></ng-template
        >
      </div>
    </div>
  `,
})
class VirtualizerHorizontalHost {
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
  selector: "smoke-window-virtualizer-horizontal",
  imports: [WindowVirtualizer],
  template: `
    <div style="display: inline-block; height: 200px">
      <virtua-window-virtualizer [data]="data" [horizontal]="true">
        <ng-template let-item
          ><div>item-{{ item }}</div></ng-template
        >
      </virtua-window-virtualizer>
    </div>
  `,
})
class WindowVirtualizerHorizontalHost {
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
        ><div>row-{{ rowIndex }}/col-{{ colIndex }}</div></ng-template
      >
    </virtua-vgrid>
  `,
})
class VGridHost {}

@Component({
  selector: "smoke-vmasonry",
  imports: [VMasonry],
  template: `
    <virtua-vmasonry [lanes]="2" [data]="data" style="height: 400px">
      <ng-template let-item
        ><div>item-{{ item }}</div></ng-template
      >
    </virtua-vmasonry>
  `,
})
class VMasonryHost {
  readonly data = range(1000);
}

it("VList", async () => {
  const root = render(VListHost);
  await expectVirtualizedAndScrollable(root, "item-0", "item-999");
});

it("VList (horizontal)", async () => {
  const root = render(VListHorizontalHost);
  await expectVirtualizedAndScrollable(root, "item-0", "item-999");
});

it("Virtualizer", async () => {
  const root = render(VirtualizerHost);
  await expectVirtualizedAndScrollable(root, "item-0", "item-999");
});

it("Virtualizer (horizontal)", async () => {
  const root = render(VirtualizerHorizontalHost);
  await expectVirtualizedAndScrollable(root, "item-0", "item-999");
});

it("WindowVirtualizer", async () => {
  const root = render(WindowVirtualizerHost);
  await expectVirtualizedAndScrollable(root, "item-0", "item-999");
});

it("WindowVirtualizer (horizontal)", async () => {
  const root = render(WindowVirtualizerHorizontalHost);
  await expectVirtualizedAndScrollable(root, "item-0", "item-999");
});

it("VGrid", async () => {
  const root = render(VGridHost);
  await expectVirtualizedAndScrollable(root, "row-0/col-0", "row-999/col-999");
});

it("VMasonry", async () => {
  const root = render(VMasonryHost);
  await expectVirtualizedAndScrollable(root, "item-0", "item-999");
});
