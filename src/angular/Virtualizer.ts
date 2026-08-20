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
  ACTION_START_OFFSET_CHANGE,
  type CacheSnapshot,
  type ScrollToIndexOpts,
  type StateVersion,
  UPDATE_SCROLL_END_EVENT,
  UPDATE_SCROLL_EVENT,
  UPDATE_VIRTUAL_STATE,
  createContainerDriver,
  type Driver,
  scrollTo,
  scrollBy,
  scrollToIndex,
  createVirtualStore,
  getScrollSize,
  sort,
} from "../core/index.js";
import { ListItem } from "./ListItem.js";
import {
  ITEM_TEMPLATE,
  defaultGetKey,
  type ItemContext,
  type ItemProps,
} from "./utils.js";

/**
 * Methods of {@link Virtualizer}.
 */
export interface VirtualizerHandle {
  /**
   * Get current {@link CacheSnapshot}.
   */
  readonly cache: CacheSnapshot;
  /**
   * Get current scrollTop, or scrollLeft if horizontal: true.
   */
  readonly scrollOffset: number;
  /**
   * Get current scrollHeight, or scrollWidth if horizontal: true.
   */
  readonly scrollSize: number;
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
 * Customizable list virtualizer for advanced usage. See {@link VirtualizerHandle}.
 *
 * The host element is the container of the items. Use the attribute selector to change its tag,
 * like `<ul virtuaVirtualizer [data]="data">`.
 */
@Component({
  selector: "virtua-virtualizer, [virtuaVirtualizer]",
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
        [attrs]="item.attrs"
        [horizontal]="horizontal()"
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
export class Virtualizer<T> implements OnInit, VirtualizerHandle {
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
   * Reference to the scrollable element. The default will get the direct parent element of virtualizer.
   */
  readonly scrollRef = input<HTMLElement>();
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
   * You can restore cache by passing a {@link CacheSnapshot} on mount. This is useful when you want to restore scroll position after navigation. The snapshot can be obtained from {@link VirtualizerHandle.cache}.
   *
   * **The length of items should be the same as when you take the snapshot, otherwise restoration may not work as expected.**
   */
  readonly cacheProp = input<CacheSnapshot>(undefined, { alias: "cache" });
  /**
   * The offset to the scrollable parent before virtualizer in pixels. If you put an element before virtualizer, you have to set its height to this prop.
   */
  readonly startMargin = input(0);

  /**
   * Emitted whenever scroll offset changes. The value is current scrollTop, or scrollLeft if horizontal: true.
   */
  readonly scroll = output<number>();
  /**
   * Emitted when scrolling stops.
   */
  readonly scrollEnd = output<void>();

  // not _ prefixed, because the mangler does not rename the property name kept
  // as a string in the partial compilation output
  /** @internal */
  private contentTemplate =
    contentChild<TemplateRef<ItemContext<T>>>(TemplateRef);
  /** @internal */
  private _hostTemplate = inject(ITEM_TEMPLATE, { optional: true });
  /** @internal */
  protected template = computed(
    () => (this._hostTemplate?.() ?? this.contentTemplate())!,
  );

  /** @internal */
  private _store!: ReturnType<typeof createVirtualStore>;
  /** @internal */
  protected driver!: Driver;
  /** @internal */
  private _element: HTMLElement = inject(ElementRef).nativeElement;
  /** @internal */
  private _appRef = inject(ApplicationRef);

  /** @internal */
  private _stateVersion = signal<StateVersion>(undefined!);

  /** @internal */
  private _indexes = computed(() => {
    this._stateVersion(); // the store is not a signal, so depend on its version
    // https://github.com/inokawa/virtua/pull/847
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
        if (i < len) {
          arr.push(i);
        }
      }
    }
    return arr;
  });

  /** @internal */
  protected items = computed(() => {
    this._stateVersion(); // the store is not a signal, so depend on its version
    const store = this._store;
    const data = this.data();
    const getKey = this.getKey();
    const itemProps = this.itemProps();
    const negative = this.driver.$isNegative();
    return this._indexes().map((index) => {
      const item = data[index]!;
      return {
        key: getKey(item, index),
        index,
        data: item,
        offset: store.$getItemOffset(index, negative),
        hide: store.$isUnmeasuredItem(index),
        attrs: itemProps?.({ item, index }),
      };
    });
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
    // $effect.pre equivalents: component effects run before this component's template refreshes
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
    effect(() => {
      const startMargin = this.startMargin();
      if (!this._store) return;
      if (startMargin !== this._store.$getStartSpacerSize()) {
        this._store.$update(ACTION_START_OFFSET_CHANGE, startMargin);
      }
    });

    // parent's ref may not exist on mount https://github.com/inokawa/virtua/issues/603 https://github.com/inokawa/virtua/issues/690
    afterNextRender({
      read: () => {
        this.driver.$observe(this._element, this.scrollRef());
      },
    });

    afterRenderEffect({
      read: () => {
        this._stateVersion();
        this.driver.$fixScrollJump();
      },
    });

    inject(DestroyRef).onDestroy(() => {
      this._store?.$dispose();
      this.driver?.$dispose();
    });
  }

  ngOnInit(): void {
    const itemSize = this.itemSize();
    const store = (this._store = createVirtualStore(
      this.data().length,
      itemSize,
      this.ssrCount(),
      this.cacheProp(),
      !itemSize,
    ));
    this.driver = createContainerDriver(store, this.horizontal());
    store.$subscribe(UPDATE_VIRTUAL_STATE, (sync) => {
      this._stateVersion.set(store.$getStateVersion());
      if (sync) {
        // The store requires the DOM to be updated synchronously, otherwise
        // imperative scroll may be clamped by the stale container size.
        this._appRef.tick();
      }
    });
    store.$subscribe(UPDATE_SCROLL_EVENT, () => {
      this.scroll.emit(store.$getScrollOffset());
    });
    store.$subscribe(UPDATE_SCROLL_END_EVENT, () => {
      this.scrollEnd.emit();
    });
    this._stateVersion.set(store.$getStateVersion());
  }

  get cache(): CacheSnapshot {
    return this._store.$getCacheSnapshot();
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
  scrollTo(offset: number): void {
    scrollTo(this.driver, offset);
  }
  scrollBy(offset: number): void {
    scrollBy(this.driver, this._store, offset);
  }
}
