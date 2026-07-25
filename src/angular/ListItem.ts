import {
  DestroyRef,
  Directive,
  ElementRef,
  afterRenderEffect,
  computed,
  effect,
  inject,
  input,
  untracked,
} from "@angular/core";
import { type ItemResizeObserver } from "../core/index.js";
import { type ItemProps } from "./utils.js";

/**
 * @internal
 */
@Directive({
  selector: "div[virtuaListItem]",
  host: {
    "[style]": "style()",
    "[class]": "attrs()?.class",
  },
})
export class ListItem {
  readonly index = input.required<number>();
  readonly offset = input.required<number>();
  readonly hide = input.required<boolean>();
  readonly horizontal = input.required<boolean>();
  readonly resizer = input.required<ItemResizeObserver>();
  readonly attrs = input<ReturnType<ItemProps>>();

  /** @internal */
  protected style = computed(() => {
    const horizontal = this.horizontal();
    const style: Record<string, string | undefined> = {
      contain: "layout style",
      position: "absolute",
      [horizontal ? "height" : "width"]: "100%",
      [horizontal ? "top" : "left"]: "0px",
      [horizontal ? "left" : "top"]: this.offset() + "px",
      visibility: this.hide() ? "hidden" : undefined,
      ...this.attrs()?.style,
    };
    if (horizontal) {
      style["display"] = "inline-flex";
    }
    return style;
  });

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

    // `style` and `class` are bound to the host above, the rest is set as attributes
    let prevKeys: string[] = [];
    effect(() => {
      const attrs = this.attrs();
      for (const key of prevKeys) {
        element.removeAttribute(key);
      }
      prevKeys = [];
      for (const key in attrs) {
        if (key === "style" || key === "class") continue;
        element.setAttribute(key, attrs[key]);
        prevKeys.push(key);
      }
    });

    inject(DestroyRef).onDestroy(() => {
      if (cleanupResizer) cleanupResizer();
    });
  }
}
