import { Component } from "@angular/core";
import { VMasonry } from "../../../src/angular";

const heights = [80, 180, 120, 220, 160, 100, 240];
const colors = [
  "#145ec1",
  "#b52f48",
  "#067d51",
  "#733ea4",
  "#a96506",
  "#057176",
  "#413c9b",
];

@Component({
  selector: "story-vmasonry-default",
  imports: [VMasonry],
  template: `
    <virtua-vmasonry [lanes]="3" [data]="data" style="height: 100vh;">
      <ng-template let-item>
        <div [style]="itemStyle(item)">{{ item }}</div>
      </ng-template>
    </virtua-vmasonry>
  `,
})
export class VMasonryDefaultDemo {
  protected readonly data = Array.from({ length: 1000 }, (_, i) => i);

  protected itemStyle(i: number): string {
    const hash = (i * 2654435761) % 7;
    return `height: ${heights[hash]}px; border: solid 1px #ccc; padding: 4px; background: ${colors[i % colors.length]}; color: white; text-shadow: 0 0 2px rgba(0, 0, 0, 0.6);`;
  }
}
