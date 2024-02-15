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
  UPDATE_SCROLL_END_EVENT,
  UPDATE_SIZE_STATE,
  getOverscanedRange,
  createVirtualStore,
  ACTION_ITEMS_LENGTH_CHANGE,
} from "../core/store";
import { createWindowResizer } from "../core/resizer";
import { createWindowScroller } from "../core/scroller";
import { ListItem } from "./ListItem";
import { getKey } from "./utils";

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
} satisfies ComponentObjectPropsOptions;

export const WindowVirtualizer = /*#__PURE__*/ defineComponent({
  props: props,
  emits: ["scrollEnd", "rangeChange"],
  setup(props, { emit, slots }) {
    const isHorizontal = props.horizontal;
    const containerRef = ref<HTMLDivElement>();
    const store = createVirtualStore(
      props.data.length,
      props.itemSize ?? 40,
      undefined,
      undefined,
      !props.itemSize
    );
    const resizer = createWindowResizer(store, isHorizontal);
    const scroller = createWindowScroller(store, isHorizontal);

    const rerender = ref(store._getStateVersion());
    const unsubscribeStore = store._subscribe(
      UPDATE_SCROLL_STATE + UPDATE_SIZE_STATE,
      () => {
        rerender.value = store._getStateVersion();
      }
    );

    const unsubscribeOnScrollEnd = store._subscribe(
      UPDATE_SCROLL_END_EVENT,
      () => {
        emit("scrollEnd");
      }
    );

    onMounted(() => {
      const el = containerRef.value;
      if (!el) return;
      resizer._observeRoot(el);
      scroller._observe(el);
    });
    onUnmounted(() => {
      unsubscribeStore();
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
            visibility: "hidden",
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
  void,
  {},
  {},
  {},
  ComponentOptionsMixin,
  ComponentOptionsMixin,
  {
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
