import { Component, afterNextRender, viewChild } from "@angular/core";
import { Virtualizer } from "../../../src/angular";

const sizes = [20, 40, 80, 77];

@Component({
  selector: "story-reverse",
  imports: [Virtualizer],
  template: `
    <!--
      overflow-anchor: opt out browser's scroll anchoring on header/footer because it will conflict with scroll anchoring of virtualizer
      display: flex style for spacer
    -->
    <div
      style="
        height: 100vh;
        overflow-y: auto;
        overflow-anchor: none;
        display: flex;
        flex-direction: column;
      "
    >
      <!-- spacer to align virtualizer to the bottom when all items are visible in the viewport -->
      <div style="flex-grow: 1;"></div>
      <div virtuaVirtualizer [data]="data" [getKey]="getKey">
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
  `,
})
export class ReverseDemo {
  private readonly ref = viewChild.required(Virtualizer);

  protected readonly data = Array.from({ length: 1000 }).map(
    (_, i) => sizes[i % 4]!,
  );
  protected readonly getKey = (_: number, i: number) => i;

  constructor() {
    afterNextRender(() => {
      this.ref().scrollToIndex(999);
    });
  }
}
