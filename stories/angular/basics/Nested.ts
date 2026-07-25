import { Component } from "@angular/core";
import { Virtualizer } from "../../../src/angular";

const sizes = [20, 40, 180, 77];

@Component({
  selector: "story-nested",
  imports: [Virtualizer],
  template: `
    <div
      #scrollable
      style="
        width: 100%;
        height: 100vh;
        overflow-y: auto;
        /* opt out browser's scroll anchoring on header/footer because it will conflict to scroll anchoring of virtualizer */
        overflow-anchor: none;
      "
    >
      <div
        [style.padding.px]="outerPadding"
        style="background-color: burlywood;"
      >
        <div
          [style.padding.px]="innerPadding"
          style="background-color: steelblue;"
        >
          <div
            virtuaVirtualizer
            [data]="data"
            [getKey]="getKey"
            [scrollRef]="scrollable"
            [startMargin]="outerPadding + innerPadding"
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
        </div>
      </div>
    </div>
  `,
})
export class NestedDemo {
  protected readonly data = Array.from({ length: 1000 }).map(
    (_, i) => sizes[i % 4]!,
  );
  protected readonly getKey = (_: number, i: number) => i;
  protected readonly outerPadding = 40;
  protected readonly innerPadding = 60;
}
