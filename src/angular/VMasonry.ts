import {
  ApplicationRef,
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  Directive,
  ElementRef,
  type OnInit,
  TemplateRef,
  afterNextRender,
  afterRenderEffect,
  computed,
  contentChild,
  effect,
  inject,
  input,
  output,
  signal,
  untracked,
  viewChild,
} from "@angular/core";
import { NgTemplateOutlet } from "@angular/common";
import {
  type CacheSnapshot,
  type MasonryLayout,
  type Driver,
  type ScrollToIndexOpts,
  type StateVersion,
  type VirtualStore,
  UPDATE_SCROLL_END_EVENT,
  UPDATE_SIZE_EVENT,
  UPDATE_SCROLL_EVENT,
  UPDATE_VIRTUAL_STATE,
  createContainerDriver,
  createMasonryLayout,
  ACTION_ITEMS_LENGTH_CHANGE,
  relayout,
  createVirtualStore,
  getScrollSize,
  scrollBy,
  scrollTo,
  scrollToIndex,
  sort,
} from "../core/index.js";
import { defaultGetKey, type ItemContext } from "./utils.js";

const toCrossValue = (fraction: number, px: number): string =>
  px ? `calc(${fraction * 100}% + ${px}px)` : fraction * 100 + "%";

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

/**
 * Methods of {@link VMasonry}.
 */
export interface VMasonryHandle {
  /**
   * Get current {@link CacheSnapshot}.
   */
  readonly cache: CacheSnapshot;
  /**
   * Get current scrollTop.
   */
  readonly scrollOffset: number;
  /**
   * Get current scrollHeight.
   */
  readonly scrollSize: number;
  /**
   * Get current clientHeight.
   */
  readonly viewportSize: number;
  /**
   * Get item offset from start.
   * @param index index of item
   */
  getItemOffset(index: number): number;
  /**
   * Get item size.
   * @param index index of item
   */
  getItemSize(index: number): number;
  /**
   * Scroll to the item specified by index.
   * @param index index of item
   * @param opts options
   */
  scrollToIndex(index: number, opts?: ScrollToIndexOpts): void;
  /**
   * Scroll to the given offset.
   * @param offset offset from start
   */
  scrollTo(offset: number): void;
  /**
   * Scroll by the given offset.
   * @param offset offset from current position
   */
  scrollBy(offset: number): void;
}

/**
 * Virtualized masonry component. See {@link VMasonryHandle}.
 *
 * The host element is the scrollable viewport of the masonry.
 */
@Component({
  selector: "virtua-vmasonry",
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MasonryItem, NgTemplateOutlet],
  template: `
    <div #container [style]="containerStyle()">
      @for (item of items(); track item.key) {
        <div
          virtuaMasonryItem
          [index]="item.index"
          [offset]="item.offset"
          [crossOffset]="item.crossOffset"
          [crossSize]="item.crossSize"
          [hide]="item.hide"
          [resizer]="driver.$observeItem"
        >
          <ng-container
            [ngTemplateOutlet]="template()"
            [ngTemplateOutletContext]="{
              $implicit: item.data,
              index: item.index,
            }"
          />
        </div>
      }
    </div>
  `,
})
export class VMasonry<T> implements OnInit, VMasonryHandle {
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
   * The number of lanes (columns) which items are laid out into. Each item is placed into the shortest lane in order. It must be an integer and the minimum value is 1.
   */
  readonly lanes = input.required<number>();
  /**
   * The gap between the items and the lanes in pixels, which is not included in the sizes.
   * @defaultValue 0
   */
  readonly gap = input<number>();
  /**
   * Item size hint for unmeasured items in pixels. It will help to reduce scroll jump when items are measured if used properly.
   *
   * - If not set, initial item sizes will be automatically estimated from measured sizes. This is recommended for most cases.
   * - If set, you can opt out estimation and use the value as initial item size.
   */
  readonly itemSize = input<number>();
  /**
   * Extra item space in pixels to render before/after the viewport. The minimum value is 0. Lower value will give better performance but you can increase to avoid showing blank items in fast scrolling.
   * @defaultValue 200
   */
  readonly bufferSize = input<number>();
  /**
   * List of indexes that should be always mounted, even when off screen.
   */
  readonly keepMounted = input<readonly number[]>();
  /**
   * You can restore cache by passing a {@link CacheSnapshot} on mount. This is useful when you want to restore scroll position after navigation. The snapshot can be obtained from {@link VMasonryHandle.cache}.
   *
   * **The length of items should be the same as when you take the snapshot, otherwise restoration may not work as expected.**
   */
  readonly cacheProp = input<CacheSnapshot>(undefined, { alias: "cache" });

  /**
   * Emitted whenever scroll offset changes. The value is current scrollTop.
   */
  readonly scrolled = output<number>();
  /**
   * Emitted when scrolling stops.
   */
  readonly scrollEnded = output<void>();
  /**
   * Emitted when the size of the viewport or the items changes.
   */
  readonly resized = output<void>();

  /** @internal */
  protected template =
    contentChild.required<TemplateRef<ItemContext<T>>>(TemplateRef);
  // not _ prefixed, because the mangler does not rename the property name kept
  // as a string in the partial compilation output
  /** @internal */
  private container = viewChild.required<ElementRef<HTMLElement>>("container");

  /** @internal */
  private _store!: VirtualStore;
  /** @internal */
  private _layout!: MasonryLayout;
  /** @internal */
  protected driver!: Driver;
  /** @internal */
  private _element: HTMLElement = inject(ElementRef).nativeElement;
  /** @internal */
  private _appRef = inject(ApplicationRef);
  /** @internal */
  private _stateVersion = signal<StateVersion>(undefined!);

  private _indexes = computed(() => {
    this._stateVersion(); // the store is not a signal, so depend on its version
    const len = this.data().length;

    const [start, end] = this._store.$getRange(this.bufferSize());
    const keepMounted = this.keepMounted();
    const arr: number[] = [];
    if (keepMounted) {
      const mounted = new Set(keepMounted);
      for (let i = start; i <= end; i++) {
        mounted.add(i);
      }
      for (const index of sort([...mounted])) {
        if (index < len) {
          arr.push(index);
        }
      }
    } else {
      for (let i = start; i <= end; i++) {
        arr.push(i);
      }
    }
    return arr;
  });

  /** @internal */
  protected items = computed(() => {
    this._stateVersion(); // the store is not a signal, so depend on its version
    const store = this._store;
    const layout = this._layout;
    const data = this.data();
    const getKey = this.getKey();
    const gap = layout.$getGap();
    const lanes = layout.$getLanes();
    // The lanes share the width left by the gaps between them
    const crossSize = toCrossValue(1 / lanes, gap / lanes - gap);
    const items = [];
    for (const i of this._indexes()) {
      const item = data[i]!;
      const lane = layout.$getItemLane(i);
      items.push({
        key: getKey(item, i),
        index: i,
        data: item,
        offset: store.$getItemOffset(i),
        crossOffset: toCrossValue(lane / lanes, (lane * gap) / lanes),
        crossSize,
        hide: layout.$isSizeEqual(i),
      });
    }
    return items;
  });

  /** @internal */
  protected containerStyle = computed(() => {
    this._stateVersion(); // the store is not a signal, so depend on its version
    const totalSize = this._store.$getTotalSize();
    return {
      contain: "size style", // https://github.com/inokawa/virtua/pull/775 https://github.com/inokawa/virtua/issues/800
      "overflow-anchor": "none", // opt out browser's scroll anchoring because it will conflict with scroll anchoring of virtualizer
      flex: "none", // flex style can break layout
      position: "relative",
      width: "100%",
      height: totalSize + "px",
      "pointer-events": this._store.$isScrolling() ? "none" : undefined,
    };
  });

  constructor() {
    // $effect.pre equivalents: component effects run before this component's template refreshes
    effect(() => {
      const data = this.data();
      if (!this._store) return;
      untracked(() => {
        this._store.$update(ACTION_ITEMS_LENGTH_CHANGE, data.length);
      });
    });
    effect(() => {
      const lanes = this.lanes();
      const gap = this.gap();
      if (!this._store) return;
      untracked(() => {
        relayout(this._store, this._layout, lanes, gap);
      });
    });

    afterNextRender({
      read: () => {
        this.driver.$observe(this.container().nativeElement);
      },
    });

    afterRenderEffect({
      read: () => {
        this._stateVersion();
        this.driver.$effect();
      },
    });

    inject(DestroyRef).onDestroy(() => {
      this._store?.$dispose();
      this.driver?.$dispose();
    });
  }

  ngOnInit(): void {
    // Written once because it never changes. A host style binding can't be used
    // here, because it would win over the styles set by the user.
    const element = this._element;
    element.setAttribute(
      "style",
      "display:block;overflow-y:auto;contain:strict;width:100%;height:100%;" +
        (element.getAttribute("style") || ""),
    );

    const layout = (this._layout = createMasonryLayout(
      this.data().length,
      this.lanes(),
      this.gap(),
      this.itemSize(),
      this.cacheProp(),
    ));
    const store = (this._store = createVirtualStore(layout));
    this.driver = createContainerDriver(store, layout, false);
    store.$subscribe(UPDATE_VIRTUAL_STATE, (sync) => {
      this._stateVersion.set(store.$getStateVersion());
      if (sync) {
        // The store requires the DOM to be updated synchronously, otherwise
        // imperative scroll may be clamped by the stale container size.
        this._appRef.tick();
      }
    });
    store.$subscribe(UPDATE_SCROLL_EVENT, () => {
      this.scrolled.emit(store.$getScrollOffset());
    });
    store.$subscribe(UPDATE_SCROLL_END_EVENT, () => {
      this.scrollEnded.emit();
    });
    store.$subscribe(UPDATE_SIZE_EVENT, () => {
      this.resized.emit();
    });
    this._stateVersion.set(store.$getStateVersion());
  }

  get cache(): CacheSnapshot {
    return this._layout.$snapshot();
  }
  get scrollOffset(): number {
    return this._store.$getScrollOffset();
  }
  get scrollSize(): number {
    return getScrollSize(this._store);
  }
  get viewportSize(): number {
    return this._store.$getViewportSize();
  }
  getItemOffset(index: number): number {
    return this._store.$getItemOffset(index);
  }
  getItemSize(index: number): number {
    return this._layout.$getItemSize(index);
  }
  scrollToIndex(index: number, opts?: ScrollToIndexOpts): void {
    scrollToIndex(this.driver, this._store, this._layout, index, opts);
  }
  scrollTo(offset: number): void {
    scrollTo(this.driver, offset);
  }
  scrollBy(offset: number): void {
    scrollBy(this.driver, this._store, offset);
  }
}
