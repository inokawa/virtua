/** @jsxImportSource vue */
import {
  ref,
  onMounted,
  defineComponent,
  onUnmounted,
  VNode,
  watch,
  ComponentOptionsMixin,
  SlotsType,
  ComponentOptionsWithObjectProps,
  ComponentObjectPropsOptions,
  PropType,
  NativeElements,
  computed,
} from "vue";
import {
  UPDATE_SCROLL_EVENT,
  UPDATE_SCROLL_END_EVENT,
  UPDATE_VIRTUAL_STATE,
  createVirtualStore,
  ACTION_ITEMS_LENGTH_CHANGE,
  getScrollSize,
  ACTION_START_OFFSET_CHANGE,
  createResizer,
  createScroller,
  ItemsRange,
  ScrollToIndexOpts,
  microtask,
  sort,
} from "../core/index.js";
import { ListItem } from "./ListItem.js";
import { getKey, isSameRange, ItemProps } from "./utils.js";

export interface VirtualizerHandle {
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
   * Find the start index of visible range of items.
   */
  findStartIndex: () => number;
  /**
   * Find the end index of visible range of items.
   */
  findEndIndex: () => number;
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

const props = {
  /**
   * The data items rendered by this component.
   */
  data: { type: Array, required: true },
  /**
   * Number of items to render above/below the visible bounds of the list. You can increase to avoid showing blank items in fast scrolling.
   * @defaultValue 4
   */
  overscan: Number,
  /**
   * Item size hint for unmeasured items. It will help to reduce scroll jump when items are measured if used properly.
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
   * If you put an element before virtualizer, you have to define its height with this prop.
   */
  startMargin: { type: Number, default: 0 },
  /**
   * A prop for SSR. If set, the specified amount of items will be mounted in the initial rendering regardless of the container size until hydrated.
   */
  ssrCount: Number,
  /**
   * Reference to the scrollable element. The default will get the direct parent element of virtualizer.
   */
  scrollRef: Object as PropType<HTMLElement>,
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
   * A function that provides properties/attributes for item element
   *
   * **This prop will be merged into `item` prop in the future**
   */
  itemProps: Function as PropType<ItemProps>,
  /**
   * List of indexes that should be always mounted, even when off screen.
   */
  keepMounted: Array as PropType<readonly number[]>,
} satisfies ComponentObjectPropsOptions;

export const Virtualizer = /*#__PURE__*/ defineComponent({
  props: props,
  emits: ["scroll", "scrollEnd"],
  setup(props, { emit, expose, slots }) {
    let isSSR = !!props.ssrCount;

    const isHorizontal = props.horizontal;
    const containerRef = ref<HTMLDivElement>();
    const store = createVirtualStore(
      props.data.length,
      props.itemSize,
      props.overscan,
      props.ssrCount,
      undefined,
      !props.itemSize
    );
    const resizer = createResizer(store, isHorizontal);
    const scroller = createScroller(store, isHorizontal);

    const stateVersion = ref(store.$getStateVersion());
    const unsubscribeStore = store.$subscribe(UPDATE_VIRTUAL_STATE, () => {
      stateVersion.value = store.$getStateVersion();
    });

    const unsubscribeOnScroll = store.$subscribe(UPDATE_SCROLL_EVENT, () => {
      emit("scroll", store.$getScrollOffset());
    });
    const unsubscribeOnScrollEnd = store.$subscribe(
      UPDATE_SCROLL_END_EVENT,
      () => {
        emit("scrollEnd");
      }
    );

    const range = computed<ItemsRange>((prev) => {
      stateVersion.value;
      const next = store.$getRange();
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
      isSSR = false;

      microtask(() => {
        const assignScrollableElement = (e: HTMLElement) => {
          resizer.$observeRoot(e);
          scroller.$observe(e);
        };
        if (props.scrollRef) {
          // parent's ref doesn't exist when onMounted is called
          assignScrollableElement(props.scrollRef!);
        } else {
          assignScrollableElement(containerRef.value!.parentElement!);
        }
      });
    });
    onUnmounted(() => {
      unsubscribeStore();
      unsubscribeOnScroll();
      unsubscribeOnScrollEnd();
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
      () => props.startMargin,
      (value) => {
        store.$update(ACTION_START_OFFSET_CHANGE, value);
      },
      { immediate: true }
    );

    watch(
      [stateVersion],
      () => {
        scroller.$fixScrollJump();
      },
      { flush: "post" }
    );

    expose({
      get scrollOffset() {
        return store.$getScrollOffset();
      },
      get scrollSize() {
        return getScrollSize(store);
      },
      get viewportSize() {
        return store.$getViewportSize();
      },
      findStartIndex: store.$findStartIndex,
      findEndIndex: store.$findEndIndex,
      getItemOffset: store.$getItemOffset,
      getItemSize: store.$getItemSize,
      scrollToIndex: scroller.$scrollToIndex,
      scrollTo: scroller.$scrollTo,
      scrollBy: scroller.$scrollBy,
    } satisfies VirtualizerHandle);

    return () => {
      const Element = props.as;
      const ItemElement = props.item;

      const [startIndex, endIndex] = range.value;
      const total = totalSize.value;

      const items: VNode[] = [];

      function getListItem(i: number) {
        const e = slots.default({ item: props.data![i]!, index: i })[0]!;
        return (
          <ListItem
            key={getKey(e, i)}
            _stateVersion={stateVersion}
            _store={store}
            _resizer={resizer.$observeItem}
            _index={i}
            _children={e}
            _isHorizontal={isHorizontal}
            _isSSR={isSSR}
            _as={ItemElement}
            _itemProps={props.itemProps?.({ item: props.data![i]!, index: i })}
          />
        );
      }

      if (props.keepMounted) {
        const mounted = new Set(props.keepMounted);
        for (let i = startIndex, j = endIndex; i <= j; i++) {
          mounted.add(i);
        }
        sort([...mounted]).forEach((index) => {
          items.push(getListItem(index));
        });
      } else {
        for (let i = startIndex, j = endIndex; i <= j; i++) {
          items.push(getListItem(i));
        }
      }

      return (
        <Element
          ref={containerRef}
          style={{
            contain: "strict",
            overflowAnchor: "none", // opt out browser's scroll anchoring because it will conflict to scroll anchoring of virtualizer
            overflow: "clip", // https://github.com/inokawa/virtua/pull/485 https://github.com/inokawa/virtua/issues/717
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
  VirtualizerHandle,
  {},
  {},
  {},
  ComponentOptionsMixin,
  ComponentOptionsMixin,
  {
    /**
     * Callback invoked whenever scroll offset changes.
     * @param offset Current scrollTop, or scrollLeft if horizontal: true.
     */
    scroll: (offset: number) => void;
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
