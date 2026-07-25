import { Component } from "@angular/core";
import { VList } from "../../../src/angular";

const sizes = [20, 40, 180, 77];

@Component({
  selector: "story-default",
  imports: [VList],
  template: `
    <virtua-vlist [data]="data" [getKey]="getKey" style="height: 100vh;">
      <ng-template let-item let-index="index">
        <div
          [style.height.px]="item"
          style="background: white; border-bottom: solid 1px #ccc;"
        >
          {{ index }}
        </div>
      </ng-template>
    </virtua-vlist>
  `,
})
export class DefaultDemo {
  protected readonly data = Array.from({ length: 1000 }).map(
    (_, i) => sizes[i % 4]!,
  );
  protected readonly getKey = (_: number, i: number) => i;
}
