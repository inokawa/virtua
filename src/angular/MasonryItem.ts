import {
  DestroyRef,
  Directive,
  ElementRef,
  afterRenderEffect,
  computed,
  inject,
  input,
  untracked,
} from "@angular/core";
import { type Driver } from "../core/index.js";

/**
 * @internal
 */
@Directive({
  selector: "div[virtuaMasonryItem]",
  host: {
    "[style]": "style()",
  },
})
export class MasonryItem {
  readonly index = input.required<number>();
  readonly offset = input.required<number>();
  readonly crossOffset = input.required<string>();
  readonly crossSize = input.required<string>();
  readonly hide = input.required<boolean>();
  readonly resizer = input.required<Driver["$observeItem"]>();

  /** @internal */
  protected style = computed(() => ({
    contain: "layout style",
    position: "absolute",
    top: this.offset() + "px",
    "inset-inline-start": this.crossOffset(),
    width: this.crossSize(),
    visibility: this.hide() ? "hidden" : undefined,
  }));

  constructor() {
    const element: HTMLElement = inject(ElementRef).nativeElement;

    // afterRenderEffect instead of effect, because ResizeObserver doesn't exist on the server.
    // The index may be changed if elements are inserted to or removed from the start of data.
    let cleanupResizer: (() => void) | undefined;
    afterRenderEffect({
      read: () => {
        const index = this.index();
        if (cleanupResizer) cleanupResizer();
        cleanupResizer = untracked(this.resizer)(element, index);
      },
    });

    inject(DestroyRef).onDestroy(() => {
      if (cleanupResizer) cleanupResizer();
    });
  }
}
