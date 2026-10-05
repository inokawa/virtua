/** @jsxImportSource vue */
import {
  ref,
  onMounted,
  defineComponent,
  onUnmounted,
  type VNode,
  watch,
  watchEffect,
  type PublicProps,
  type PropType,
  type StyleValue,
  type Ref,
  computed,
} from "vue";
import {
  UPDATE_SCROLL_EVENT,
  UPDATE_SCROLL_END_EVENT,
  UPDATE_VIRTUAL_STATE,
  createVirtualStore,
  getScrollSize,
  createContainerDriver,
  createMasonryLayout,
  ACTION_ITEMS_LENGTH_CHANGE,
  ACTION_RELAYOUT,
  scrollTo,
  scrollBy,
  scrollToIndex,
  sort,
  type Driver,
  type ItemsRange,
  type ScrollToIndexOpts,
  type CacheSnapshot,
  type MasonryLayout,
  type StateVersion,
  type VirtualStore,
} from "../core/index.js";
import { getKey, isSameRange } from "./utils.js";

const toCrossValue = (fraction: number, px: number): string =>
  px ? `calc(${fraction * 100}% + ${px}px)` : fraction * 100 + "%";

interface MasonryItemProps {
  _stateVersion: Ref<StateVersion>;
  _store: VirtualStore;
  _layout: MasonryLayout;
  _slot: (arg: { item: unknown; index: number }) => VNode[];
  _item: unknown;
  _resizer: Driver["$observeItem"];
  _index: number;
}

const MasonryItem = /*#__PURE__*/ defineComponent(
  (props: MasonryItemProps) => {
    const elementRef = ref<HTMLDivElement>();

    const offset = computed(
      () =>
        props._stateVersion.value && props._store.$getItemOffset(props._index),
    );
    const crossOffset = computed(() => {
      props._stateVersion.value;
      const lanes = props._layout.$getLanes();
      const lane = props._layout.$getItemLane(props._index);
      return toCrossValue(
        lane / lanes,
        (lane * props._layout.$getGap()) / lanes,
      );
    });
    const crossSize = computed(() => {
      props._stateVersion.value;
      const lanes = props._layout.$getLanes();
      const gap = props._layout.$getGap();
      // The lanes share the width left by the gaps between them
      return toCrossValue(1 / lanes, gap / lanes - gap);
    });
    const hide = computed(
      () =>
        props._stateVersion.value &&
        props._store.$isUnmeasuredItem(props._index),
    );
    const children = computed(() =>
      props._slot({ item: props._item, index: props._index }),
    );

    // The index may be changed if elements are inserted to or removed from the start of data
    watch(
      () => elementRef.value && props._index,
      (_, __, onCleanup) => {
        onCleanup(props._resizer(elementRef.value!, props._index));
      },
      {
        flush: "post",
      },
    );

    return () => {
      const style: StyleValue = {
        contain: "layout style",
        position: "absolute",
        top: offset.value + "px",
        insetInlineStart: crossOffset.value,
        width: crossSize.value,
        visibility: hide.value ? "hidden" : undefined,
      };

      return (
        <div ref={elementRef} style={style}>
          {children.value}
        </div>
      );
    };
  },
  {
    // Required to split props from attrs. Object form keeps the keys manglable.
    props: {
      _stateVersion: null,
      _store: null,
      _layout: null,
      _slot: null,
      _item: null,
      _resizer: null,
      _index: null,
    } satisfies Record<keyof MasonryItemProps, null>,
  },
);

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
 * Props of {@link VMasonry}.
 */
export interface VMasonryProps<T> extends PublicProps {
  /**
   * The data items rendered by this component.
   */
  data: T[];
  /**
   * The number of lanes (columns) which items are laid out into. Each item is placed into the shortest lane in order. It must be an integer and the minimum value is 1.
   */
  lanes: number;
  /**
   * The gap between the items and the lanes in pixels, which is not included in the sizes.
   * @defaultValue 0
   */
  gap?: number;
  /**
   * Item size hint for unmeasured items in pixels. It will help to reduce scroll jump when items are measured if used properly.
   *
   * - If not set, initial item sizes will be automatically estimated from measured sizes. This is recommended for most cases.
   * - If set, you can opt out estimation and use the value as initial item size.
   */
  itemSize?: number;
  /**
   * Extra item space in pixels to render before/after the viewport. The minimum value is 0. Lower value will give better performance but you can increase to avoid showing blank items in fast scrolling.
   * @defaultValue 200
   */
  bufferSize?: number;
  /**
   * List of indexes that should be always mounted, even when off screen.
   */
  keepMounted?: readonly number[];
  /**
   * You can restore cache by passing a {@link CacheSnapshot} on mount. This is useful when you want to restore scroll position after navigation. The snapshot can be obtained from {@link VMasonryHandle.cache}.
   *
   * **The length of items should be the same as when you take the snapshot, otherwise restoration may not work as expected.**
   */
  cache?: CacheSnapshot;
  /**
   * Callback invoked whenever scroll offset changes.
   * @param offset Current scrollTop.
   */
  onScroll?: (offset: number) => void;
  /**
   * Callback invoked when scrolling stops.
   */
  onScrollEnd?: () => void;
}

interface VMasonryInstance<T> extends VMasonryHandle {
  $props: VMasonryProps<T>;
  $slots: { default: (arg: { item: T; index: number }) => VNode[] };
}

/**
 * Virtualized masonry component. See {@link VMasonryProps} and {@link VMasonryHandle}.
 */
export const VMasonry = /*#__PURE__*/ defineComponent({
  props: {
    data: { type: Array, required: true },
    lanes: {
      type: Number,
      required: true,
    },
    gap: Number,
    itemSize: Number,
    bufferSize: Number,
    keepMounted: Array as PropType<VMasonryProps<unknown>["keepMounted"]>,
    cache: Object as PropType<VMasonryProps<unknown>["cache"]>,
  },
  emits: ["scroll", "scrollEnd"],
  setup(props, { emit, expose, slots }) {
    const containerRef = ref<HTMLDivElement>();
    const layout = createMasonryLayout(
      props.data.length,
      props.lanes,
      props.gap,
      props.itemSize,
      props.cache,
    );
    const store = createVirtualStore(layout);
    const driver = createContainerDriver(store, false);

    const stateVersion = ref(store.$getStateVersion());
    store.$subscribe(UPDATE_VIRTUAL_STATE, () => {
      stateVersion.value = store.$getStateVersion();
    });
    store.$subscribe(UPDATE_SCROLL_EVENT, () => {
      emit("scroll", store.$getScrollOffset());
    });
    store.$subscribe(UPDATE_SCROLL_END_EVENT, () => {
      emit("scrollEnd");
    });

    const range = computed<ItemsRange>((prev) => {
      stateVersion.value;
      const next = store.$getRange(props.bufferSize);
      if (prev && isSameRange(prev, next)) {
        return prev;
      }
      return next;
    });
    const isScrolling = computed(
      () => stateVersion.value && store.$isScrolling(),
    );
    const totalSize = computed(
      () => stateVersion.value && store.$getTotalSize(),
    );

    onMounted(() => {
      driver.$observe(containerRef.value!);
    });
    onUnmounted(() => {
      store.$dispose();
      driver.$dispose();
    });

    watchEffect(() => {
      if (props.data.length !== store.$getItemsLength()) {
        store.$update(ACTION_ITEMS_LENGTH_CHANGE, [props.data.length]);
      }
    });
    watchEffect(() => {
      layout.$setOptions(props.lanes, props.gap);
      store.$update(ACTION_RELAYOUT, undefined);
    });

    watch(
      [stateVersion],
      () => {
        driver.$effect();
      },
      { flush: "post" },
    );

    expose({
      get cache() {
        return layout.$snapshot();
      },
      get scrollOffset() {
        return store.$getScrollOffset();
      },
      get scrollSize() {
        return getScrollSize(store);
      },
      get viewportSize() {
        return store.$getViewportSize();
      },
      getItemOffset: store.$getItemOffset,
      getItemSize: store.$getItemSize,
      scrollToIndex: (index, opts) => scrollToIndex(driver, store, index, opts),
      scrollTo: (offset) => scrollTo(driver, offset),
      scrollBy: (offset) => scrollBy(driver, store, offset),
    } satisfies VMasonryHandle);

    return () => {
      const total = totalSize.value;

      const items: VNode[] = [];

      const renderItem = (i: number) => {
        const e = slots["default"]!({ item: props.data![i]!, index: i });
        return (
          <MasonryItem
            key={getKey(e, i)}
            _stateVersion={stateVersion}
            _store={store}
            _layout={layout}
            _slot={slots["default"]!}
            _item={props.data![i]!}
            _resizer={driver.$observeItem}
            _index={i}
          />
        );
      };

      if (props.keepMounted) {
        const len = props.data.length;
        const mounted = new Set(props.keepMounted);
        for (let [i, j] = range.value; i <= j; i++) {
          mounted.add(i);
        }
        sort([...mounted]).forEach((index) => {
          if (index < len) {
            items.push(renderItem(index));
          }
        });
      } else {
        for (let [i, j] = range.value; i <= j; i++) {
          items.push(renderItem(i));
        }
      }

      return (
        <div
          style={{
            display: "block",
            overflowY: "auto",
            contain: "strict",
            width: "100%",
            height: "100%",
          }}
        >
          <div
            ref={containerRef}
            style={{
              contain: "size style", // https://github.com/inokawa/virtua/pull/775 https://github.com/inokawa/virtua/issues/800
              overflowAnchor: "none", // opt out browser's scroll anchoring because it will conflict with scroll anchoring of virtualizer
              flex: "none", // flex style can break layout
              position: "relative",
              width: "100%",
              height: total + "px",
              pointerEvents: isScrolling.value ? "none" : undefined,
            }}
          >
            {items}
          </div>
        </div>
      );
    };
  },
}) as unknown as {
  new <T>(props: VMasonryProps<T>): VMasonryInstance<T>;
};
