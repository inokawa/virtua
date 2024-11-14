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
} from "vue";
import {
  UPDATE_SCROLL_END_EVENT,
  UPDATE_VIRTUAL_STATE,
  createVirtualStore,
  ACTION_ITEMS_LENGTH_CHANGE,
  UPDATE_SCROLL_EVENT,
} from "../core/store";
import { createWindowResizer } from "../core/resizer";
import { createWindowScroller } from "../core/scroller";
import { ListItem } from "./ListItem";
import { getKey } from "./utils";

export interface WindowVirtualizerHandle {
  /**
   * Get the start index of visible range of items.
   */
  readonly startIndex: number;
  /**
   * Get the end index of visible range of items.
   */
  readonly endIndex: number;
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
   * Component or element type for container element.
   * @defaultValue "div"
   */
  as: { type: String as PropType<keyof NativeElements>, default: "div" },
  /**
   * Component or element type for item element.
   * @defaultValue "div"
   */
  item: { type: String as PropType<keyof NativeElements>, default: "div" },
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
      props.overscan,
      undefined,
      undefined,
      !props.itemSize
    );
    const resizer = createWindowResizer(store, isHorizontal);
    const scroller = createWindowScroller(store, isHorizontal);

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
      const el = containerRef.value;
      if (!el) return;
      resizer._observeRoot(el);
      scroller._observe(el);
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

    expose({
      get startIndex() {
        return store._getStartIndex();
      },
      get endIndex() {
        return store._getEndIndex();
      },
    } satisfies WindowVirtualizerHandle);

    return () => {
      rerender.value;

      const Element = props.as;
      const ItemElement = props.item;

      const [startIndex, endIndex] = store._getRange();
      const isScrolling = store._isScrolling();
      const totalSize = store._getTotalSize();

      const items: VNode[] = [];
      for (let i = startIndex, j = endIndex; i <= j; i++) {
        const e = slots.default({ item: props.data![i]!, index: i })[0]!;
        items.push(
          <ListItem
            key={getKey(e, i)}
            _resizer={resizer._observeItem}
            _index={i}
            _offset={store._getItemOffset(i)}
            _hide={store._isUnmeasuredItem(i)}
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
            // contain: "content",
            overflowAnchor: "none", // opt out browser's scroll anchoring because it will conflict to scroll anchoring of virtualizer
            flex: "none", // flex style can break layout
            position: "relative",
            visibility: "hidden", // TODO replace with other optimization methods
            width: isHorizontal ? totalSize + "px" : "100%",
            height: isHorizontal ? "100%" : totalSize + "px",
            pointerEvents: isScrolling ? "none" : undefined,
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
