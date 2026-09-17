import { Component, signal, viewChild } from "@angular/core";
import { VGrid } from "../../../src/angular";

const LENGTH = 1000;

@Component({
  selector: "story-vgrid-scroll-to",
  imports: [VGrid],
  template: `
    <div style="height: 100vh; display: flex; flex-direction: column;">
      <div>
        <label>
          col
          <input
            type="number"
            [value]="colIndex()"
            (input)="colIndex.set(toNumber($event))"
          />
        </label>
        <label>
          row
          <input
            type="number"
            [value]="rowIndex()"
            (input)="rowIndex.set(toNumber($event))"
          />
        </label>
        <button
          (click)="
            grid().scrollToIndex({
              rowIndex: rowIndex(),
              colIndex: colIndex(),
            })
          "
        >
          scroll to index
        </button>
        <button (click)="randomize()">randomize</button>
      </div>
      <div>
        <label>
          x
          <input
            type="number"
            [value]="horizontal()"
            (input)="horizontal.set(toNumber($event))"
          />
        </label>
        <label>
          y
          <input
            type="number"
            [value]="vertical()"
            (input)="vertical.set(toNumber($event))"
          />
        </label>
        <button
          (click)="
            grid().scrollTo({ vertical: vertical(), horizontal: horizontal() })
          "
        >
          scroll to offset
        </button>
        <button
          (click)="
            grid().scrollBy({ vertical: vertical(), horizontal: horizontal() })
          "
        >
          scroll by offset
        </button>
      </div>
      <virtua-vgrid
        [rows]="length"
        [rowHeight]="80"
        [cols]="length"
        [colWidth]="160"
        style="flex: 1; box-sizing: border-box; border: solid 1px gray;"
      >
        <ng-template let-rowIndex="row" let-colIndex="col">
          <div
            style="background: white; padding: 4px; border-right: solid 1px gray; border-bottom: solid 1px gray;"
          >
            {{ rowIndex }} / {{ colIndex }}
          </div>
        </ng-template>
      </virtua-vgrid>
    </div>
  `,
})
export class VGridScrollToDemo {
  protected readonly grid = viewChild.required(VGrid);
  protected readonly length = LENGTH;
  protected readonly rowIndex = signal(567);
  protected readonly colIndex = signal(567);
  protected readonly vertical = signal(1000);
  protected readonly horizontal = signal(1000);

  protected toNumber(e: Event): number {
    return Number((e.currentTarget as HTMLInputElement).value);
  }

  protected randomize(): void {
    this.colIndex.set(Math.floor(LENGTH * Math.random()));
    this.rowIndex.set(Math.floor(LENGTH * Math.random()));
  }
}
