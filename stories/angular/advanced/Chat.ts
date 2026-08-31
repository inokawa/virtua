import {
  Component,
  DestroyRef,
  afterRenderEffect,
  inject,
  signal,
  untracked,
  viewChild,
} from "@angular/core";
import { faker } from "@faker-js/faker";
import { Virtualizer } from "../../../src/angular";

type Data = {
  id: number;
  value: string;
  me?: boolean;
};

let id = 0;
const createItem = ({
  value = faker.lorem.paragraphs(1),
  me,
}: {
  value?: string;
  me?: boolean;
} = {}): Data => ({
  id: id++,
  value: value,
  me,
});

@Component({
  selector: "story-chat",
  imports: [Virtualizer],
  template: `
    <div
      style="width: 100vw; height: 100vh; display: flex; flex-direction: column;"
    >
      <div
        style="
          overflow-y: auto;
          flex: 1;
          /* opt out browser's scroll anchoring on header/footer because it will conflict to scroll anchoring of virtualizer */
          overflow-anchor: none;
          /* flex style for spacer */
          display: flex;
          flex-direction: column;
        "
      >
        <div
          style="
            /* spacer to align virtualizer to the bottom when all items are visible in the viewport */
            flex-grow: 1;
          "
        ></div>
        <div
          virtuaVirtualizer
          [data]="items()"
          [shift]="isPrepend()"
          [getKey]="getKey"
          (scroll)="onScroll($event)"
        >
          <ng-template let-item>
            @if (item.me === true) {
              <div
                style="border: solid 1px #ccc; background: lightyellow; padding: 10px; border-radius: 8px; white-space: pre-wrap; margin: 10px; margin-left: 160px;"
              >
                {{ item.value }}
              </div>
            } @else {
              <div
                style="border: solid 1px #ccc; background: #fff; padding: 10px; border-radius: 8px; white-space: pre-wrap; margin: 10px; margin-right: 160px;"
              >
                {{ item.value }}
              </div>
            }
          </ng-template>
        </div>
      </div>
      <form
        style="display: flex; flex-direction: column; margin: 10px;"
        (submit)="onSubmit($event)"
      >
        <textarea
          style="flex: 1;"
          rows="6"
          [value]="value()"
          (input)="onInput($event)"
          (keydown)="onKeyDown($event)"
        ></textarea>
        <div
          style="display: flex; flex-direction: row; gap: 8px; justify-content: flex-end;"
        >
          <button type="button" (click)="jumpToTop()">jump to top</button>
          <button type="submit" [disabled]="!value().length">submit</button>
        </div>
      </form>
    </div>
  `,
})
export class ChatDemo {
  private readonly ref = viewChild(Virtualizer);

  protected readonly items = signal(
    Array.from({ length: 100 }, () => createItem()),
  );
  protected readonly value = signal("Hello world!");
  protected readonly isPrepend = signal(false);
  private readonly shouldStickToBottom = signal(true);

  protected readonly getKey = (d: Data) => d.id;

  constructor() {
    // Reset isPrepend after each update
    afterRenderEffect(() => {
      this.items();
      untracked(() => this.isPrepend.set(false));
    });

    // Auto-scroll to bottom when items change, or when it gets stuck to the bottom
    // again while the items around the destination are still being measured
    afterRenderEffect(() => {
      const lastItemIndex = this.items().length - 1;
      const shouldStickToBottom = this.shouldStickToBottom();
      untracked(() => {
        if (shouldStickToBottom) {
          this.ref()?.scrollToIndex(lastItemIndex, { align: "end" });
        }
      });
    });

    // Auto-add items timer
    let timer: ReturnType<typeof setTimeout> | null = null;
    const setTimer = () => {
      timer = setTimeout(() => {
        this.items.set([...this.items(), createItem()]);
        setTimer();
      }, 5000);
    };
    setTimer();
    inject(DestroyRef).onDestroy(() => {
      if (timer) {
        clearTimeout(timer);
      }
    });
  }

  protected onScroll(offset: number): void {
    const ref = this.ref();
    if (!ref) return;

    this.shouldStickToBottom.set(
      offset - ref.scrollSize + ref.viewportSize >= -1.5,
    );

    if (offset < 100) {
      this.isPrepend.set(true);
      this.items.set([
        ...Array.from({ length: 100 }, () => createItem()),
        ...this.items(),
      ]);
    }
  }

  protected onInput(e: Event): void {
    this.value.set((e.currentTarget as HTMLTextAreaElement).value);
  }

  protected onSubmit(e: Event): void {
    e.preventDefault();
    e.stopPropagation();
    this.submit();
  }

  protected onKeyDown(e: KeyboardEvent): void {
    if (e.code === "Enter" && (e.ctrlKey || e.metaKey)) {
      this.submit();
      e.preventDefault();
    }
  }

  protected jumpToTop(): void {
    this.ref()?.scrollTo(0);
  }

  private submit(): void {
    if (!this.value().length) return;
    this.shouldStickToBottom.set(true);
    this.items.set([
      ...this.items(),
      createItem({ value: this.value(), me: true }),
    ]);
    this.value.set("");
  }
}
