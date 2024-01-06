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
} from "vue";
import {
  SCROLL_IDLE,
  UPDATE_SCROLL_STATE,
  UPDATE_SCROLL_EVENT,
  UPDATE_SCROLL_STOP_EVENT,
  UPDATE_SIZE_STATE,
  overscanEndIndex,
  overscanStartIndex,
  createVirtualStore,
  ACTION_ITEMS_LENGTH_CHANGE,
} from "../core/store";
import { createResizer } from "../core/resizer";
import { createScroller } from "../core/scroller";
import { ScrollToIndexOpts } from "../core/types";
import { ListItem } from "./ListItem";
import { exists } from "../core/utils";

interface VListHandle {
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
  initialItemSize: Number,
  /**
   * While true is set, scroll position will be maintained from the end not usual start when items are added to/removed from start. It's recommended to set false if you add to/remove from mid/end of the list because it can cause unexpected behavior. This prop is useful for reverse infinite scrolling.
   */
  shift: Boolean,
  /**
   * If true, rendered as a horizontally scrollable list. Otherwise rendered as a vertically scrollable list.
   */
  horizontal: Boolean,
} satisfies ComponentObjectPropsOptions;

export const VList = /*#__PURE__*/ defineComponent({
  props: props,
  emits: ["scroll", "scrollStop", "rangeChange"],
  setup(props, { emit, expose, slots }) {
    const isHorizontal = props.horizontal;
    const rootRef = ref<HTMLDivElement>();
    const store = createVirtualStore(
      props.data.length,
      props.initialItemSize ?? 40,
      undefined,
      undefined,
      !props.initialItemSize
    );
    const resizer = createResizer(store, isHorizontal);
    const scroller = createScroller(store, isHorizontal);

    const rerender = ref(store._getStateVersion());
    const unsubscribeStore = store._subscribe(
      UPDATE_SCROLL_STATE + UPDATE_SIZE_STATE,
      () => {
        rerender.value = store._getStateVersion();
      }
    );

    const unsubscribeOnScroll = store._subscribe(UPDATE_SCROLL_EVENT, () => {
      emit("scroll", store._getScrollOffset());
    });
    const unsubscribeOnScrollStop = store._subscribe(
      UPDATE_SCROLL_STOP_EVENT,
      () => {
        emit("scrollStop");
      }
    );

    let cleanupResizer: (() => void) | undefined;
    let cleanupScroller: (() => void) | undefined;
    onMounted(() => {
      const root = rootRef.value;
      if (!root) return;
      cleanupResizer = resizer._observeRoot(root);
      cleanupScroller = scroller._observe(root);
    });
    onUnmounted(() => {
      unsubscribeStore();
      unsubscribeOnScroll();
      unsubscribeOnScrollStop();
      if (cleanupResizer) cleanupResizer();
      if (cleanupScroller) cleanupScroller();
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

        const jump = store._flushJump();
        if (!jump) return;

        scroller._fixScrollJump(jump);
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
        return store._getScrollSize();
      },
      get viewportSize() {
        return store._getViewportSize();
      },
      scrollToIndex: scroller._scrollToIndex,
      scrollTo: scroller._scrollTo,
      scrollBy: scroller._scrollBy,
    } satisfies VListHandle);

    return () => {
      rerender.value;

      const count = props.data.length;

      const [startIndex, endIndex] = store._getRange();
      const scrollDirection = store._getScrollDirection();
      const scrollSize = store._getScrollSize();

      const overscanedStartIndex = overscanStartIndex(
        startIndex,
        props.overscan,
        scrollDirection
      );
      const overscanedEndIndex = overscanEndIndex(
        endIndex,
        props.overscan,
        scrollDirection,
        count
      );

      const items: VNode[] = [];
      for (let i = overscanedStartIndex; i <= overscanedEndIndex; i++) {
        const e = slots.default(props.data![i]!)[0]! as VNode;
        const key = e.key;
        items.push(
          <ListItem
            key={exists(key) ? key : "_" + i}
            _resizer={resizer._observeItem}
            _index={i}
            _offset={store._getItemOffset(i)}
            _hide={store._isUnmeasuredItem(i)}
            _element="div"
            _children={e}
            _isHorizontal={isHorizontal}
          />
        );
      }

      return (
        <div
          ref={rootRef}
          style={{
            display: isHorizontal ? "inline-block" : "block",
            [isHorizontal ? "overflowX" : "overflowY"]: "auto",
            overflowAnchor: "none",
            contain: "strict",
            width: "100%",
            height: "100%",
          }}
        >
          <div
            style={{
              contain: "content",
              position: "relative",
              visibility: "hidden",
              width: isHorizontal ? scrollSize + "px" : "100%",
              height: isHorizontal ? "100%" : scrollSize + "px",
              pointerEvents: scrollDirection !== SCROLL_IDLE ? "none" : "auto",
            }}
          >
            {items}
          </div>
        </div>
      );
    };
  },
} as ComponentOptionsWithObjectProps<
  typeof props,
  VListHandle,
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
    scrollStop: () => void;
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
