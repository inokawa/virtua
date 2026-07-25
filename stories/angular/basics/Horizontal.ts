import { Component } from "@angular/core";
import { VList } from "../../../src/angular";

const sizes = [40, 180, 77];
const createItem = (i: number) => ({ id: i, size: sizes[i % 4] + "px" });

type Data = ReturnType<typeof createItem>;

@Component({
  selector: "story-horizontal",
  imports: [VList],
  template: `
    <div style="padding: 10px;">
      <virtua-vlist
        [data]="data"
        [getKey]="getKey"
        [horizontal]="true"
        style="width: 100%; height: 200px;"
      >
        <ng-template let-item>
          <div
            [style.width]="item.size"
            style="background: white; border-right: solid 1px #ccc;"
          >
            {{ item.id }}
          </div>
        </ng-template>
      </virtua-vlist>
    </div>
  `,
})
export class HorizontalDemo {
  protected readonly data = Array.from({ length: 1000 }).map((_, i) =>
    createItem(i),
  );
  protected readonly getKey = (d: Data) => d.id;
}
