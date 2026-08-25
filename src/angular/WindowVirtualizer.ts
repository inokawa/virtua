import {
  ApplicationRef,
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
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
} from "@angular/core";
import { NgTemplateOutlet } from "@angular/common";
import {
  ACTION_ITEMS_LENGTH_CHANGE,
  type CacheSnapshot,
  type ScrollToIndexOpts,
  type StateVersion,
  UPDATE_SCROLL_END_EVENT,
  UPDATE_SCROLL_EVENT,
  UPDATE_VIRTUAL_STATE,
  createVirtualStore,
  createListLayout,
  createWindowDriver,
  type Driver,
  scrollToIndex,
} from "../core/index.js";
import { ListItem } from "./ListItem.js";
import { defaultGetKey, type ItemContext } from "./utils.js";

/**
 * Methods of {@link WindowVirtualizer}.
 */
export interface WindowVirtualizerHandle {
  /**
   * Get current {@link CacheSnapshot}.
   */
  readonly cache: CacheSnapshot;
  /**
   * Get current scrollTop, or scrollLeft if horizontal: true.
   */
  readonly scrollOffset: number;
  /**
   * Get current offsetHeight, or offsetWidth if horizontal: true.
   */
  readonly viewportSize: number;
  /**
   * Find nearest item index from offset.
   * @param offset offset in pixels from the start of the scroll container
   */
  findItemIndex(offset: number): number;
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
}

/**
 * {@link Virtualizer} controlled by the window scrolling. See {@link WindowVirtualizerHandle}.
 *
 * The host element is the container of the items. Use the attribute selector to change its tag,
 * like `<ul virtuaWindowVirtualizer [data]="data">`.
 */
@Component({
  selector: "virtua-window-virtualizer, [virtuaWindowVirtualizer]",
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ListItem, NgTemplateOutlet],
  host: {
    "[style]": "containerStyle()",
  },
  template: `
    @for (item of items(); track item.key) {
      <div
        virtuaListItem
        [index]="item.index"
        [offset]="item.offset"
        [hide]="item.hide"
        [horizontal]="horizontal()"
        [isSSR]="isSSR()"
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
  `,
})
export class WindowVirtualizer<T> implements OnInit, WindowVirtualizerHandle {
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
   * You can restore cache by passing a {@link CacheSnapshot} on mount. This is useful when you want to restore scroll position after navigation. The snapshot can be obtained from {@link WindowVirtualizerHandle.cache}.
   *
   * **The length of items should be the same as when you take the snapshot, otherwise restoration may not work as expected.**
   */
  readonly cacheProp = input<CacheSnapshot>(undefined, { alias: "cache" });

  /**
   * Emitted whenever scroll offset changes.
   */
  // https://github.com/inokawa/virtua/discussions/580
  readonly scroll = output<void>();
  /**
   * Emitted when scrolling stops.
   */
  readonly scrollEnd = output<void>();

  /** @internal */
  protected template =
    contentChild.required<TemplateRef<ItemContext<T>>>(TemplateRef);

  /** @internal */
  private _store!: ReturnType<typeof createVirtualStore>;
  /** @internal */
  private _layout!: ReturnType<typeof createListLayout>;
  /** @internal */
  protected driver!: Driver;
  /** @internal */
  private _element: HTMLElement = inject(ElementRef).nativeElement;
  /** @internal */
  private _appRef = inject(ApplicationRef);

  /** @internal */
  private _stateVersion = signal<StateVersion>(undefined!);
  /** @internal */
  protected isSSR = signal(false);

  /** @internal */
  protected items = computed(() => {
    this._stateVersion(); // the store is not a signal, so depend on its version
    const store = this._store;
    const data = this.data();
    const getKey = this.getKey();
    const [start, end] = store.$getRange(this.bufferSize());
    // https://github.com/inokawa/virtua/pull/847
    const items = [];
    for (let index = start; index <= end && index < data.length; index++) {
      const item = data[index]!;
      items.push({
        key: getKey(item, index),
        index,
        data: item,
        offset: store.$getItemOffset(index),
        hide: store.$isUnmeasuredItem(index),
      });
    }
    return items;
  });

  /** @internal */
  protected containerStyle = computed(() => {
    this._stateVersion(); // the store is not a signal, so depend on its version
    const horizontal = this.horizontal();
    const totalSize = this._store.$getTotalSize();
    return {
      display: "block", // host of a custom element is inline by default
      contain: "size style", // https://github.com/inokawa/virtua/pull/775 https://github.com/inokawa/virtua/issues/800
      "overflow-anchor": "none", // opt out browser's scroll anchoring because it will conflict to scroll anchoring of virtualizer
      flex: "none", // flex style can break layout
      position: "relative",
      width: horizontal ? totalSize + "px" : "100%",
      height: horizontal ? "100%" : totalSize + "px",
      "pointer-events": this._store.$isScrolling() ? "none" : undefined,
    };
  });

  constructor() {
    effect(() => {
      const len = this.data().length;
      if (!this._store) return;
      if (len !== this._store.$getItemsLength()) {
        this._store.$update(ACTION_ITEMS_LENGTH_CHANGE, [
          len,
          untracked(this.shift),
        ]);
      }
    });

    afterNextRender({
      read: () => {
        this.isSSR.set(false);
        this.driver.$observe(this._element);
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
    const itemSize = this.itemSize();
    const ssrCount = this.ssrCount();
    this.isSSR.set(!!ssrCount);
    const layout = (this._layout = createListLayout(
      this.data().length,
      itemSize,
      this.cacheProp(),
    ));
    const store = (this._store = createVirtualStore(layout, ssrCount));
    this.driver = createWindowDriver(store, this.horizontal());
    store.$subscribe(UPDATE_VIRTUAL_STATE, (sync) => {
      this._stateVersion.set(store.$getStateVersion());
      if (sync) {
        // The store requires the DOM to be updated synchronously, otherwise
        // imperative scroll may be clamped by the stale container size.
        this._appRef.tick();
      }
    });
    store.$subscribe(UPDATE_SCROLL_EVENT, () => {
      this.scroll.emit();
    });
    store.$subscribe(UPDATE_SCROLL_END_EVENT, () => {
      this.scrollEnd.emit();
    });
    this._stateVersion.set(store.$getStateVersion());
  }

  get cache(): CacheSnapshot {
    return this._layout.$snapshot();
  }
  get scrollOffset(): number {
    return this._store.$getScrollOffset();
  }
  get viewportSize(): number {
    return this._store.$getViewportSize();
  }
  findItemIndex(offset: number): number {
    return this._store.$findItemIndex(offset);
  }
  getItemOffset(index: number): number {
    return this._store.$getItemOffset(index);
  }
  getItemSize(index: number): number {
    return this._store.$getItemSize(index);
  }
  scrollToIndex(index: number, opts?: ScrollToIndexOpts): void {
    scrollToIndex(this.driver, this._store, index, opts);
  }
}
