import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  type OnInit,
  TemplateRef,
  contentChild,
  inject,
  input,
  output,
  viewChild,
} from "@angular/core";
import { type CacheSnapshot, type ScrollToIndexOpts } from "../core/index.js";
import { Virtualizer, type VirtualizerHandle } from "./Virtualizer.js";
import {
  ITEM_TEMPLATE,
  defaultGetKey,
  type ItemContext,
  type ItemProps,
} from "./utils.js";

/**
 * Methods of {@link VList}.
 */
export interface VListHandle extends VirtualizerHandle {}

/**
 * Virtualized list component. See {@link VListHandle}.
 *
 * The host element is the scrollable viewport of the list.
 */
@Component({
  selector: "virtua-vlist",
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Virtualizer],
  viewProviders: [
    { provide: ITEM_TEMPLATE, useFactory: () => inject(VList).template },
  ],
  template: `
    <div
      virtuaVirtualizer
      [data]="data()"
      [getKey]="getKey()"
      [itemProps]="itemProps()"
      [bufferSize]="bufferSize()"
      [itemSize]="itemSize()"
      [ssrCount]="ssrCount()"
      [shift]="shift()"
      [horizontal]="horizontal()"
      [keepMounted]="keepMounted()"
      [cache]="cacheProp()"
      (scroll)="scroll.emit($event)"
      (scrollEnd)="scrollEnd.emit()"
    ></div>
  `,
})
export class VList<T> implements OnInit, VListHandle {
  /**
   * The data items rendered by this component.
   */
  readonly data = input.required<readonly T[]>();
  /**
   * Function that returns the key of an item in the list. It's recommended to specify whenever possible for performance.
   * @default defaultGetKey (returns index of item)
   */
  readonly getKey =
    input<(data: T, index: number) => string | number>(defaultGetKey);
  /**
   * A function that provides properties/attributes for item element
   */
  readonly itemProps = input<ItemProps<T>>();
  /**
   * Extra item space in pixels to render before/after the viewport. The minimum value is 0. Lower value will give better performance but you can increase to avoid showing blank items in fast scrolling.
   * @defaultValue 200
   */
  readonly bufferSize = input<number>();
  /**
   * Item size hint for unmeasured items in pixels. It will help to reduce scroll jump when items are measured if used properly.
   *
   * - If not set, initial item sizes will be automatically estimated from measured sizes. This is recommended for most cases.
   * - If set, you can opt out estimation and use the value as initial item size.
   */
  readonly itemSize = input<number>();
  /**
   * A prop for SSR. If set, the specified amount of items will be mounted in the initial rendering regardless of the container size until hydrated. The minimum value is 0.
   */
  readonly ssrCount = input<number>();
  /**
   * While true is set, scroll position will be maintained from the end not usual start when items are added to/removed from start. It's recommended to set false if you add to/remove from mid/end of the list because it can cause unexpected behavior. This prop is useful for reverse infinite scrolling.
   */
  readonly shift = input(false);
  /**
   * If true, rendered as a horizontally scrollable list. Otherwise rendered as a vertically scrollable list.
   */
  readonly horizontal = input(false);
  /**
   * List of indexes that should be always mounted, even when off screen.
   */
  readonly keepMounted = input<readonly number[]>();
  /**
   * You can restore cache by passing a {@link CacheSnapshot} on mount. This is useful when you want to restore scroll position after navigation. The snapshot can be obtained from {@link VListHandle.cache}.
   *
   * **The length of items should be the same as when you take the snapshot, otherwise restoration may not work as expected.**
   */
  readonly cacheProp = input<CacheSnapshot>(undefined, { alias: "cache" });

  /**
   * Emitted whenever scroll offset changes. The value is current scrollTop, or scrollLeft if horizontal: true.
   */
  readonly scroll = output<number>();
  /**
   * Emitted when scrolling stops.
   */
  readonly scrollEnd = output<void>();

  /** @internal */
  readonly template =
    contentChild.required<TemplateRef<ItemContext<T>>>(TemplateRef);
  // not _ prefixed, because the mangler does not rename the property name kept
  // as a string in the partial compilation output
  /** @internal */
  private virtualizer = viewChild.required<Virtualizer<T>>(Virtualizer);
  /** @internal */
  private _element: HTMLElement = inject(ElementRef).nativeElement;

  ngOnInit(): void {
    // Written once because horizontal is fixed after init. A host style binding
    // can't be used here, because it would win over the styles set by the user.
    const horizontal = this.horizontal();
    const element = this._element;
    element.setAttribute(
      "style",
      `display:${horizontal ? "inline-block" : "block"};` +
        `${horizontal ? "overflow-x" : "overflow-y"}:auto;` +
        "contain:strict;width:100%;height:100%;" +
        (element.getAttribute("style") || ""),
    );
  }

  get cache(): CacheSnapshot {
    return this.virtualizer().cache;
  }
  get scrollOffset(): number {
    return this.virtualizer().scrollOffset;
  }
  get scrollSize(): number {
    return this.virtualizer().scrollSize;
  }
  get viewportSize(): number {
    return this.virtualizer().viewportSize;
  }
  findItemIndex(offset: number): number {
    return this.virtualizer().findItemIndex(offset);
  }
  getItemOffset(index: number): number {
    return this.virtualizer().getItemOffset(index);
  }
  getItemSize(index: number): number {
    return this.virtualizer().getItemSize(index);
  }
  scrollToIndex(index: number, opts?: ScrollToIndexOpts): void {
    this.virtualizer().scrollToIndex(index, opts);
  }
  scrollTo(offset: number): void {
    this.virtualizer().scrollTo(offset);
  }
  scrollBy(offset: number): void {
    this.virtualizer().scrollBy(offset);
  }
}
