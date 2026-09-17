import { Component } from "@angular/core";
import { VGrid } from "../../../src/angular";

@Component({
  selector: "story-vgrid-default",
  imports: [VGrid],
  template: `
    <virtua-vgrid
      [rows]="1000"
      [rowHeight]="40"
      [cols]="500"
      [colWidth]="100"
      style="height: 100vh; box-sizing: border-box; border: solid 1px gray;"
    >
      <ng-template let-rowIndex="row" let-colIndex="col">
        <div
          style="background: white; padding: 4px; border-right: solid 1px gray; border-bottom: solid 1px gray;"
        >
          {{ rowIndex }} / {{ colIndex }}
        </div>
      </ng-template>
    </virtua-vgrid>
  `,
})
export class VGridDefaultDemo {}
