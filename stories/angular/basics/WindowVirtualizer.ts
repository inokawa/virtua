import { Component } from "@angular/core";
import { WindowVirtualizer } from "../../../src/angular";

const sizes = [20, 40, 180, 77];

@Component({
  selector: "story-window-virtualizer",
  imports: [WindowVirtualizer],
  template: `
    <div style="padding: 200px 100px;">
      <div style="border: solid 1px gray;">
        <virtua-window-virtualizer [data]="data" [getKey]="getKey">
          <ng-template let-item let-index="index">
            <div
              [style.height.px]="item"
              style="background: white; border-bottom: solid 1px #ccc;"
            >
              {{ index }}
            </div>
          </ng-template>
        </virtua-window-virtualizer>
      </div>
    </div>
  `,
})
export class WindowVirtualizerDemo {
  protected readonly data = Array.from({ length: 1000 }).map(
    (_, i) => sizes[i % 4]!,
  );
  protected readonly getKey = (_: number, i: number) => i;
}
