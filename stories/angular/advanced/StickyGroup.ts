import { Component, signal, viewChild } from "@angular/core";
import { VList } from "../../../src/angular";

const sizes = [20, 40, 180, 77];
const stickyIndexes = [0, 100, 200, 300, 400, 500, 600, 700, 800, 900];

@Component({
  selector: "story-sticky-group",
  imports: [VList],
  template: `
    <virtua-vlist
      [data]="data"
      [getKey]="getKey"
      [itemProps]="itemProps"
      [keepMounted]="[activeIndex()]"
      (scroll)="onScroll($event)"
      style="height: 100vh;"
    >
      <ng-template let-item let-index="index">
        <div
          [style.height.px]="item"
          [style.background]="index % 100 === 0 ? 'yellow' : 'white'"
          style="border-bottom: solid 1px #ccc;"
        >
          {{ index }}
        </div>
      </ng-template>
    </virtua-vlist>
  `,
})
export class StickyGroupDemo {
  protected readonly list = viewChild.required<VList<number>>(VList);

  protected readonly data = Array.from({ length: 1000 }).map(
    (_, i) => sizes[i % 4]!,
  );
  protected readonly activeIndex = signal(0);

  protected readonly getKey = (_: number, i: number) => i;

  protected readonly itemProps = ({ index }: { index: number }) => {
    if (index % 100 !== 0) return undefined;
    return {
      style: {
        "z-index": "1",
        ...(this.activeIndex() === index
          ? { position: "sticky", top: "0" }
          : {}),
      },
    };
  };

  protected onScroll(offset: number): void {
    const start = this.list().findItemIndex(offset);
    this.activeIndex.set([...stickyIndexes].reverse().find((i) => start >= i)!);
  }
}
