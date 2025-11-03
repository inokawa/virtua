/** @jsxImportSource vue */
import {
  ref,
  onMounted,
  defineComponent,
  onUnmounted,
  type VNode,
  watch,
  type ComponentOptionsMixin,
  type SlotsType,
  type ComponentOptionsWithObjectProps,
  type ComponentObjectPropsOptions,
  type PropType,
  type NativeElements,
  computed,
} from "vue";
import {
  UPDATE_SCROLL_END_EVENT,
  UPDATE_VIRTUAL_STATE,
  createVirtualStore,
  ACTION_ITEMS_LENGTH_CHANGE,
  UPDATE_SCROLL_EVENT,
  createWindowResizer,
  createWindowScroller,
  type ItemsRange,
  type ScrollToIndexOpts,
  type CacheSnapshot,
} from "../core/index.js";
import { ListItem } from "./ListItem.js";
import { getKey, isSameRange } from "./utils.js";

export interface WindowVirtualizerHandle {
  /**
   * Get current {@link CacheSnapshot}.
   */
  readonly cache: CacheSnapshot;
  /**
   * Find the start index of visible range of items.
   */
  findStartIndex: () => number;
  /**
   * Find the end index of visible range of items.
   */
  findEndIndex: () => number;
  /**
   * Scroll to the item specified by index.
   * @param index index of item
   * @param opts options
   */
  scrollToIndex(index: number, opts?: ScrollToIndexOpts): void;
}

const props = {
  /**
   * The data items rendered by this component.
   */
  data: { type: Array, required: true },
  /**
   * Extra item space in pixels to render before/after the viewport. The minimum value is 0. Lower value will give better performance but you can increase to avoid showing blank items in fast scrolling.
   * @defaultValue 200
   */
  bufferSize: Number,
  /**
   * Item size hint for unmeasured items in pixels. It will help to reduce scroll jump when items are measured if used properly.
   *
   * - If not set, initial item sizes will be automatically estimated from measured sizes. This is recommended for most cases.
   * - If set, you can opt out estimation and use the value as initial item size.
   */
  itemSize: Number,
  /**
   * While true is set, scroll position will be maintained from the end not usual start when items are added to/removed from start. It's recommended to set false if you add to/remove from mid/end of the list because it can cause unexpected behavior. This prop is useful for reverse infinite scrolling.
   */
  shift: Boolean,
  /**
   * If true, rendered as a horizontally scrollable list. Otherwise rendered as a vertically scrollable list.
   */
  horizontal: Boolean,
  /**
   * Component or element type for container element.
   * @defaultValue "div"
   */
  as: { type: String as PropType<keyof NativeElements>, default: "div" },
  /**
   * Component or element type for item element.
   * @defaultValue "div"
   */
  item: { type: String as PropType<keyof NativeElements>, default: "div" },
  /**
   * You can restore cache by passing a {@link CacheSnapshot} on mount. This is useful when you want to restore scroll position after navigation. The snapshot can be obtained from {@link WindowVirtualizerHandle.cache}.
   *
   * **The length of items should be the same as when you take the snapshot, otherwise restoration may not work as expected.**
   */
  cache: Object as PropType<CacheSnapshot>,
} satisfies ComponentObjectPropsOptions;

export const WindowVirtualizer = /*#__PURE__*/ defineComponent({
  props,
  emits: ["scroll", "scrollEnd"],
  setup(props, { emit, slots, expose }) {
    const isHorizontal = props.horizontal;
    const containerRef = ref<HTMLDivElement>();
    const store = createVirtualStore(
      props.data.length,
      props.itemSize,
      undefined,
      props.cache,
      !props.itemSize
    );
    const resizer = createWindowResizer(store, isHorizontal);
    const scroller = createWindowScroller(store, isHorizontal);

    const stateVersion = ref(store.$getStateVersion());
    store.$subscribe(UPDATE_VIRTUAL_STATE, () => {
      stateVersion.value = store.$getStateVersion();
    });
    store.$subscribe(UPDATE_SCROLL_EVENT, () => {
      // https://github.com/inokawa/virtua/discussions/580
      emit("scroll");
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
      () => stateVersion.value && store.$isScrolling()
    );
    const totalSize = computed(
      () => stateVersion.value && store.$getTotalSize()
    );

    onMounted(() => {
      const el = containerRef.value;
      if (!el) return;
      resizer.$observeRoot(el);
      scroller.$observe(el);
    });
    onUnmounted(() => {
      store.$dispose();
      resizer.$dispose();
      scroller.$dispose();
    });

    watch(
      () => props.data.length,
      (count) => {
        store.$update(ACTION_ITEMS_LENGTH_CHANGE, [count, props.shift]);
      }
    );

    watch(
      [stateVersion],
      () => {
        scroller.$fixScrollJump();
      },
      { flush: "post" }
    );

    expose({
      get cache() {
        return store.$getCacheSnapshot();
      },
      findStartIndex: () =>
        store.$findItemIndex(
          store.$getStartSpacerSize() + store.$getScrollOffset()
        ),
      findEndIndex: () =>
        store.$findItemIndex(
          store.$getStartSpacerSize() +
            store.$getScrollOffset() +
            store.$getViewportSize()
        ),
      scrollToIndex: scroller.$scrollToIndex,
    } satisfies WindowVirtualizerHandle);

    return () => {
      const Element = props.as;
      const ItemElement = props.item;

      const total = totalSize.value;

      const items: VNode[] = [];
      for (let [i, j] = range.value; i <= j; i++) {
        const e = slots.default({ item: props.data![i]!, index: i })[0]!;
        items.push(
          <ListItem
            key={getKey(e, i)}
            _stateVersion={stateVersion}
            _store={store}
            _resizer={resizer.$observeItem}
            _index={i}
            _children={e}
            _isHorizontal={isHorizontal}
            _as={ItemElement}
          />
        );
      }

      return (
        <Element
          ref={containerRef}
          style={{
            contain: "size style", // https://github.com/inokawa/virtua/pull/775 https://github.com/inokawa/virtua/issues/800
            overflowAnchor: "none", // opt out browser's scroll anchoring because it will conflict to scroll anchoring of virtualizer
            flex: "none", // flex style can break layout
            position: "relative",
            width: isHorizontal ? total + "px" : "100%",
            height: isHorizontal ? "100%" : total + "px",
            pointerEvents: isScrolling.value ? "none" : undefined,
          }}
        >
          {items}
        </Element>
      );
    };
  },
} as ComponentOptionsWithObjectProps<
  typeof props,
  void,
  {},
  {},
  {},
  ComponentOptionsMixin,
  ComponentOptionsMixin,
  {
    /**
     * Callback invoked whenever scroll offset changes.
     */
    scroll: () => void;
    /**
     * Callback invoked when scrolling stops.
     */
    scrollEnd: () => void;
  },
  string,
  {},
  string,
  SlotsType<{ default: (arg: { item: any; index: number }) => VNode[] }>
>);
