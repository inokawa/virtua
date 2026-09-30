import { Component, signal, viewChild } from "@angular/core";
import { faker } from "@faker-js/faker";
import { VList } from "../../../src/angular";

type Row =
  { type: "header"; letter: string } | { type: "contact"; name: string };

const rows: Row[] = [];
faker.helpers
  .multiple(() => `${faker.person.firstName()} ${faker.person.lastName()}`, {
    count: 1000,
  })
  .sort((a, b) => a.localeCompare(b))
  .forEach((name) => {
    const letter = name[0]!.toUpperCase();
    const prev = rows.findLast((r) => r.type === "header");
    if (!prev || prev.letter !== letter) {
      rows.push({ type: "header", letter });
    }
    rows.push({ type: "contact", name });
  });

const stickyItemHeight = 32;
const stickyIndexes = rows.flatMap((r, i) => (r.type === "header" ? [i] : []));

@Component({
  selector: "story-sticky-group",
  imports: [VList],
  template: `
    <virtua-vlist
      [data]="data"
      [getKey]="getKey"
      [itemProps]="itemProps"
      [keepMounted]="[activeIndex()]"
      (scrolled)="onScroll($event)"
      style="height: 100vh; font-family: system-ui, sans-serif; font-size: 14px;"
    >
      <ng-template let-item>
        @if (item.type === "header") {
          <div
            [style.height.px]="stickyItemHeight"
            style="display: flex; align-items: center; padding: 0 16px; background: #f3f4f6; border-bottom: solid 1px #e5e7eb; color: #6b7280; font-size: 13px; font-weight: 600;"
          >
            {{ item.letter }}
          </div>
        } @else {
          <div
            style="height: 48px; display: flex; align-items: center; padding: 0 16px; border-bottom: solid 1px #f0f0f0; background: #fff;"
          >
            {{ item.name }}
          </div>
        }
      </ng-template>
    </virtua-vlist>
  `,
})
export class StickyGroupDemo {
  protected readonly list = viewChild.required<VList<Row>>(VList);

  protected readonly data = rows;
  protected readonly stickyItemHeight = stickyItemHeight;
  protected readonly activeIndex = signal(0);

  protected readonly getKey = (_: Row, i: number) => i;

  protected readonly itemProps = ({ index }: { index: number }) => {
    if (rows[index]!.type !== "header") return undefined;
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
