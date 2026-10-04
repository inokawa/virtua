import { Component, signal, viewChild } from "@angular/core";
import { VMasonry } from "../../../src/angular";

const LENGTH = 1000;
const ALIGNS = ["start", "center", "end", "nearest"] as const;

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
  selector: "story-vmasonry-scroll-to",
  imports: [VMasonry],
  template: `
    <div style="height: 100vh; display: flex; flex-direction: column;">
      <div>
        <input
          type="number"
          [value]="scrollIndex()"
          (input)="scrollIndex.set(toNumber($event))"
        />
        <button
          (click)="
            collection().scrollToIndex(scrollIndex(), {
              align: align(),
              smooth: smooth(),
            })
          "
        >
          scroll to index
        </button>
        <button (click)="randomize()">randomize</button>
        @for (a of aligns; track a) {
          <label style="margin-left: 4px;">
            <input
              type="radio"
              [checked]="align() === a"
              (change)="align.set(a)"
            />
            {{ a }}
          </label>
        }
        <label style="margin-left: 4px;">
          <input
            type="checkbox"
            [checked]="smooth()"
            (change)="smooth.set(!smooth())"
          />
          smooth
        </label>
      </div>
      <virtua-vmasonry [lanes]="4" [data]="data" style="flex: 1;">
        <ng-template let-item>
          <div [style]="itemStyle(item)">{{ item }}</div>
        </ng-template>
      </virtua-vmasonry>
    </div>
  `,
})
export class VMasonryScrollToDemo {
  protected readonly collection = viewChild.required(VMasonry);
  protected readonly data = Array.from({ length: LENGTH }, (_, i) => i);
  protected readonly aligns = ALIGNS;
  protected readonly scrollIndex = signal(567);
  protected readonly align = signal<(typeof ALIGNS)[number]>("start");
  protected readonly smooth = signal(false);

  protected toNumber(e: Event): number {
    return Number((e.currentTarget as HTMLInputElement).value);
  }

  protected randomize(): void {
    this.scrollIndex.set(Math.round(LENGTH * Math.random()));
  }

  protected itemStyle(i: number): string {
    const hash = (i * 2654435761) % 7;
    return `height: ${heights[hash]}px; border: solid 1px #ccc; padding: 4px; background: ${colors[i % colors.length]}; color: white; text-shadow: 0 0 2px rgba(0, 0, 0, 0.6);`;
  }
}
