import { Component } from "@angular/core";
import { Virtualizer } from "../../../src/angular";

const sizes = [20, 40, 180, 77];

@Component({
  selector: "story-header-and-footer",
  imports: [Virtualizer],
  template: `
    <div
      style="
        width: 100%;
        height: 100vh;
        overflow-y: auto;
        /* opt out browser's scroll anchoring on header/footer because it will conflict to scroll anchoring of virtualizer */
        overflow-anchor: none;
      "
    >
      <div
        [style.height.px]="headerHeight"
        style="background-color: burlywood;"
      >
        header
      </div>
      <div
        virtuaVirtualizer
        [data]="data"
        [getKey]="getKey"
        [startMargin]="headerHeight"
      >
        <ng-template let-item let-index="index">
          <div
            [style.height.px]="item"
            style="background: white; border-bottom: solid 1px #ccc;"
          >
            {{ index }}
          </div>
        </ng-template>
      </div>
      <div style="background-color: steelblue; height: 600px;">footer</div>
    </div>
  `,
})
export class HeaderAndFooterDemo {
  protected readonly data = Array.from({ length: 1000 }).map(
    (_, i) => sizes[i % 4]!,
  );
  protected readonly getKey = (_: number, i: number) => i;
  protected readonly headerHeight = 400;
}
