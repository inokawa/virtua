import { Component } from "@angular/core";
import { VGrid } from "../../../src/angular";

const ROWS = 1000;
const COLS = 500;
const PINNED_ROWS = { start: 1, end: 1 };
const PINNED_COLS = { start: 2, end: 1 };

@Component({
  selector: "story-vgrid-pinned",
  imports: [VGrid],
  template: `
    <virtua-vgrid
      [rows]="rows"
      [rowHeight]="40"
      [cols]="cols"
      [colWidth]="100"
      [pinnedRows]="pinnedRows"
      [pinnedCols]="pinnedCols"
      style="height: 100vh; box-sizing: border-box; border: solid 1px gray;"
    >
      <ng-template let-rowIndex="row" let-colIndex="col">
        <div
          style="padding: 4px; border-right: solid 1px gray; border-bottom: solid 1px gray;"
          [style.background]="
            isPinnedRow(rowIndex)
              ? 'darkgray'
              : isPinnedCol(colIndex)
                ? 'lightgray'
                : 'white'
          "
          [style.color]="isPinnedRow(rowIndex) ? 'white' : null"
        >
          {{ rowIndex }} / {{ colIndex }}
        </div>
      </ng-template>
    </virtua-vgrid>
  `,
})
export class VGridPinnedDemo {
  protected readonly rows = ROWS;
  protected readonly cols = COLS;
  protected readonly pinnedRows = PINNED_ROWS;
  protected readonly pinnedCols = PINNED_COLS;
  protected isPinnedRow(rowIndex: number): boolean {
    return rowIndex < PINNED_ROWS.start || rowIndex >= ROWS - PINNED_ROWS.end;
  }
  protected isPinnedCol(colIndex: number): boolean {
    return colIndex < PINNED_COLS.start || colIndex >= COLS - PINNED_COLS.end;
  }
}
