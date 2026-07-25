import { Component, signal, viewChild } from "@angular/core";
import { VList } from "../../../src/angular";

const sizes = [20, 40, 180, 77];
const createItem = (i: number) => ({ id: i, size: sizes[i % 4] + "px" });

type Data = ReturnType<typeof createItem>;

@Component({
  selector: "story-controls",
  imports: [VList],
  template: `
    <div style="height: 100%; display: flex; flex-direction: column;">
      <div>offset: {{ scrollOffset() }}</div>
      <div>scrolling: {{ scrolling() }}</div>
      <div>
        <input
          type="number"
          [value]="scrollTarget()"
          (input)="onScrollTargetInput($event)"
        />
        <button (click)="list().scrollToIndex(scrollTarget())">
          scrollToIndex
        </button>
      </div>
      <div>
        <button (click)="append()">append</button>
        <label>
          <input
            type="checkbox"
            [checked]="prepend()"
            (change)="prepend.set(!prepend())"
          />
          prepend
        </label>
        <button (click)="pop()">pop</button>
      </div>
      <virtua-vlist
        [data]="data()"
        [shift]="prepend()"
        [getKey]="getKey"
        (scroll)="onScroll($event)"
        (scrollEnd)="scrolling.set(false)"
      >
        <ng-template let-item>
          <div
            [style.height]="item.size"
            style="background: white; border-bottom: solid 1px #ccc;"
          >
            {{ item.id }}
          </div>
        </ng-template>
      </virtua-vlist>
    </div>
  `,
})
export class ControlsDemo {
  protected readonly list = viewChild.required<VList<Data>>(VList);

  protected readonly data = signal(
    Array.from({ length: 1000 }).map((_, i) => createItem(i)),
  );
  protected readonly scrollOffset = signal(0);
  protected readonly scrolling = signal(false);
  protected readonly scrollTarget = signal(567);
  protected readonly prepend = signal(false);

  protected readonly getKey = (d: Data) => d.id;

  protected onScrollTargetInput(e: Event): void {
    this.scrollTarget.set(Number((e.currentTarget as HTMLInputElement).value));
  }

  protected onScroll(offset: number): void {
    this.scrollOffset.set(offset);
    this.scrolling.set(true);
  }

  protected append(): void {
    const data = this.data();
    const items = Array.from({ length: 100 }).map((_, i) =>
      createItem(i + data.length),
    );
    this.data.set(this.prepend() ? [...items, ...data] : [...data, ...items]);
  }

  protected pop(): void {
    this.data.set(this.data().slice(0, -1));
  }
}
