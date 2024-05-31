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
} from "vue";
import {
  SCROLL_IDLE,
  UPDATE_SCROLL_EVENT,
  UPDATE_SCROLL_END_EVENT,
  UPDATE_VIRTUAL_STATE,
  getOverscanedRange,
  createVirtualStore,
  ACTION_ITEMS_LENGTH_CHANGE,
  getScrollSize,
} from "../core/store";
import { createResizer } from "../core/resizer";
import { createScroller } from "../core/scroller";
import { ScrollToIndexOpts, StartOffsetType } from "../core/types";
import { ListItem } from "./ListItem";
import { getKey } from "./utils";
import { microtask } from "../core/utils";

export interface VirtualizerHandle {
  /**
   * Get current scrollTop or scrollLeft.
   */
  readonly scrollOffset: number;
  /**
   * Get current scrollHeight or scrollWidth.
   */
  readonly scrollSize: number;
  /**
   * Get current offsetHeight or offsetWidth.
   */
  readonly viewportSize: number;
  /**
   * Get item offset from start.
   * @param index index of item
   */
  getItemOffset(index: number): number;
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
  overscan: { type: Number, default: 4 },
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
   *
   * TODO
   */
  startOffset: [String, Number] as PropType<StartOffsetType>,
  /**
   * A prop for SSR. If set, the specified amount of items will be mounted in the initial rendering regardless of the container size until hydrated.
   */
  ssrCount: Number,
  /**
   * Reference to the scrollable element. The default will get the parent element of virtualizer.
   */
  scrollRef: Object as PropType<HTMLElement>,
} satisfies ComponentObjectPropsOptions;

export const Virtualizer = /*#__PURE__*/ defineComponent({
  props: props,
  emits: ["scroll", "scrollEnd", "rangeChange"],
  setup(props, { emit, expose, slots }) {
    let isSSR = !!props.ssrCount;

    const isHorizontal = props.horizontal;
    const containerRef = ref<HTMLDivElement>();
    const store = createVirtualStore(
      props.data.length,
      props.itemSize ?? 40,
      props.ssrCount,
      undefined,
      !props.itemSize
    );
    const resizer = createResizer(store, isHorizontal);
    const scroller = createScroller(store, isHorizontal, props.startOffset);

    const rerender = ref(store._getStateVersion());
    const unsubscribeStore = store._subscribe(UPDATE_VIRTUAL_STATE, () => {
      rerender.value = store._getStateVersion();
    });

    const unsubscribeOnScroll = store._subscribe(UPDATE_SCROLL_EVENT, () => {
      emit("scroll", store._getScrollOffset());
    });
    const unsubscribeOnScrollEnd = store._subscribe(
      UPDATE_SCROLL_END_EVENT,
      () => {
        emit("scrollEnd");
      }
    );

    onMounted(() => {
      isSSR = false;

      microtask(() => {
        const container = containerRef.value!;
        const assignScrollableElement = (e: HTMLElement) => {
          resizer._observeRoot(e);
          scroller._observe(e, container);
        };
        if (props.scrollRef) {
          // parent's ref doesn't exist when onMounted is called
          assignScrollableElement(props.scrollRef!);
        } else {
          assignScrollableElement(container.parentElement!);
        }
      });
    });
    onUnmounted(() => {
      unsubscribeStore();
      unsubscribeOnScroll();
      unsubscribeOnScrollEnd();
      resizer._dispose();
      scroller._dispose();
    });

    watch(
      () => props.data.length,
      (count) => {
        store._update(ACTION_ITEMS_LENGTH_CHANGE, [count, props.shift]);
      }
    );

    watch(
      [rerender, store._getJumpCount],
      ([, count], [, prevCount]) => {
        if (count === prevCount) return;

        scroller._fixScrollJump();
      },
      { flush: "post" }
    );

    watch(
      [rerender, store._getRange],
      ([, [start, end]], [, [prevStart, prevEnd]]) => {
        if (prevStart === start && prevEnd === end) return;

        emit("rangeChange", start, end);
      },
      { flush: "post" }
    );

    expose({
      get scrollOffset() {
        return store._getScrollOffset();
      },
      get scrollSize() {
        return getScrollSize(store);
      },
      get viewportSize() {
        return store._getViewportSize();
      },
      getItemOffset: store._getItemOffset,
      scrollToIndex: scroller._scrollToIndex,
      scrollTo: scroller._scrollTo,
      scrollBy: scroller._scrollBy,
    } satisfies VirtualizerHandle);

    return () => {
      rerender.value;

      const count = props.data.length;

      const [startIndex, endIndex] = store._getRange();
      const scrollDirection = store._getScrollDirection();
      const totalSize = store._getTotalSize();

      const items: VNode[] = [];
      for (
        let [i, j] = getOverscanedRange(
          startIndex,
          endIndex,
          props.overscan,
          scrollDirection,
          count
        );
        i <= j;
        i++
      ) {
        const e = slots.default(props.data![i]!)[0]! as VNode;
        items.push(
          <ListItem
            key={getKey(e, i)}
            _resizer={resizer._observeItem}
            _index={i}
            _offset={store._getItemOffset(i)}
            _hide={store._isUnmeasuredItem(i)}
            _children={e}
            _isHorizontal={isHorizontal}
            _isSSR={isSSR}
          />
        );
      }

      return (
        <div
          ref={containerRef}
          style={{
            // contain: "content",
            overflowAnchor: "none", // opt out browser's scroll anchoring because it will conflict to scroll anchoring of virtualizer
            flex: "none", // flex style can break layout
            position: "relative",
            visibility: "hidden", // TODO replace with other optimization methods
            width: isHorizontal ? totalSize + "px" : "100%",
            height: isHorizontal ? "100%" : totalSize + "px",
            pointerEvents: scrollDirection !== SCROLL_IDLE ? "none" : "auto",
          }}
        >
          {items}
        </div>
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
     * @param offset Current scrollTop or scrollLeft.
     */
    scroll: (offset: number) => void;
    /**
     * Callback invoked when scrolling stops.
     */
    scrollEnd: () => void;
    /**
     * Callback invoked when visible items range changes.
     */
    rangeChange: (
      /**
       * The start index of viewable items.
       */
      startIndex: number,
      /**
       * The end index of viewable items.
       */
      endIndex: number
    ) => void;
  },
  string,
  {},
  string,
  SlotsType<{ default: any }>
>);
