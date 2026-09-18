import { it, expect, vi } from "vitest";
import { Component, input } from "@angular/core";
import { VGrid } from "./VGrid.js";
import { setupResizeJsDom } from "../../spec/jsdom/dom.js";
import { render } from "../../spec/jsdom/angular.js";

const ITEM_HEIGHT = 50;
const ITEM_WIDTH = 100;
const VIEWPORT_HEIGHT = ITEM_HEIGHT * 10;

setupResizeJsDom({
  itemSize: { width: ITEM_WIDTH, height: ITEM_HEIGHT },
  viewportSize: { width: ITEM_WIDTH, height: VIEWPORT_HEIGHT },
});

@Component({
  selector: "test-attrs-host",
  imports: [VGrid],
  template: `
    <virtua-vgrid
      id="id"
      class="class"
      tabindex="0"
      aria-label="test"
      style="background: red;"
      [rows]="100"
      [rowHeight]="40"
      [cols]="100"
      [colWidth]="100"
    >
      <ng-template let-cell="cell"
        ><div>{{ cell.rowIndex }} / {{ cell.colIndex }}</div></ng-template
      >
    </virtua-vgrid>
  `,
})
class AttrsHost {}

it("should pass attributes to element", async () => {
  const { container } = await render(AttrsHost);
  expect(container.innerHTML).toMatchSnapshot();
});

@Component({
  selector: "test-aria-count-host",
  imports: [VGrid],
  template: `
    <virtua-vgrid
      aria-rowcount="1000"
      aria-colcount="2000"
      [rows]="100"
      [rowHeight]="40"
      [cols]="100"
      [colWidth]="100"
    >
      <ng-template let-cell="cell"
        ><div>{{ cell.rowIndex }} / {{ cell.colIndex }}</div></ng-template
      >
    </virtua-vgrid>
  `,
})
class AriaCountHost {}

it("should override aria-rowcount and aria-colcount by attributes", async () => {
  const { container } = await render(AriaCountHost);
  const table = container.querySelector("virtua-vgrid")!;
  expect(table.getAttribute("aria-rowcount")).toBe("1000");
  expect(table.getAttribute("aria-colcount")).toBe("2000");
});

@Component({
  selector: "test-host",
  imports: [VGrid],
  template: `
    <virtua-vgrid
      aria-label="grid"
      [rows]="rows"
      [rowHeight]="40"
      [cols]="cols"
      [colWidth]="100"
      [headerRows]="1"
      [headerCols]="1"
      [spans]="spans"
      [ariaSort]="ariaSort"
    >
      <ng-template let-row="row" let-col="col" let-cell="cell"
        ><div>
          {{ row.id + col.id }} {{ cell.rowIndex }} / {{ cell.colIndex }}
        </div></ng-template
      >
    </virtua-vgrid>
  `,
})
class Host {
  readonly rows = [{ id: "a" }, { id: "b" }, { id: "c" }, { id: "d" }];
  readonly cols = [{ id: "w" }, { id: "x" }, { id: "y" }, { id: "z" }];
  readonly spans = [
    { rowIndex: 1, colIndex: 1, colSpan: 2 },
    { rowIndex: 2, colIndex: 0, rowSpan: 2 },
  ];
  readonly ariaSort = {
    rowIndex: 0,
    colIndex: 1,
    order: "ascending",
  } as const;
}

it("should render 4x4 cells", async () => {
  const { container } = await render(Host);
  expect(container.innerHTML).toMatchSnapshot();
});

let cellCount = 0;

@Component({
  selector: "test-cell",
  template: `{{ rowIndex() }} / {{ colIndex() }}`,
})
class CountedCell {
  readonly rowIndex = input.required<number>();
  readonly colIndex = input.required<number>();
  constructor() {
    cellCount++;
  }
}

@Component({
  selector: "test-counted-host",
  imports: [VGrid, CountedCell],
  template: `
    <virtua-vgrid [rows]="rows()" [rowHeight]="40" [cols]="4" [colWidth]="100">
      <ng-template let-cell="cell"
        ><test-cell [rowIndex]="cell.rowIndex" [colIndex]="cell.colIndex"
      /></ng-template>
    </virtua-vgrid>
  `,
})
class CountedHost {
  readonly rows = input.required<object[]>();
}

it("should not render the existing cells again when a row is added", async () => {
  cellCount = 0;
  const rows = [{}, {}, {}];
  const { fixture } = await render(CountedHost, { rows });
  expect(cellCount).toBe(12);

  fixture.componentRef.setInput("rows", [...rows, {}]);
  vi.runAllTicks();
  await new Promise((resolve) => setTimeout(resolve, 100));
  expect(cellCount).toBe(16);
});
