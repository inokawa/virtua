/** @jsxImportSource vue */
import {
  defineComponent,
  ComponentOptionsMixin,
  SlotsType,
  ComponentOptionsWithObjectProps,
  ComponentObjectPropsOptions,
  ref,
  VNode,
} from "vue";
import { Virtualizer, VirtualizerHandle } from "./Virtualizer";

interface VListHandle extends VirtualizerHandle {}

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
   * A prop for SSR. If set, the specified amount of items will be mounted in the initial rendering regardless of the container size until hydrated.
   */
  ssrCount: Number,
} satisfies ComponentObjectPropsOptions;

export const VList = /*#__PURE__*/ defineComponent({
  props: props,
  emits: ["scroll", "scrollEnd", "rangeChange"],
  setup(props, { emit, expose, slots }) {
    const horizontal = props.horizontal;

    const onScroll = (offset: number) => {
      emit("scroll", offset);
    };
    const onScrollEnd = () => {
      emit("scrollEnd");
    };
    const onRangeChange = (start: number, end: number) => {
      emit("rangeChange", start, end);
    };

    const handle = ref<InstanceType<typeof Virtualizer>>();

    expose({
      get scrollOffset() {
        return handle.value!.scrollOffset;
      },
      get scrollSize() {
        return handle.value!.scrollSize;
      },
      get viewportSize() {
        return handle.value!.viewportSize;
      },
      getItemOffset: (...args) => handle.value!.getItemOffset(...args),
      scrollToIndex: (...args) => handle.value!.scrollToIndex(...args),
      scrollTo: (...args) => handle.value!.scrollTo(...args),
      scrollBy: (...args) => handle.value!.scrollBy(...args),
    } satisfies VListHandle);

    return () => {
      return (
        <div
          style={{
            display: horizontal ? "inline-block" : "block",
            [horizontal ? "overflowX" : "overflowY"]: "auto",
            contain: "strict",
            width: "100%",
            height: "100%",
          }}
        >
          <Virtualizer
            ref={handle}
            data={props.data}
            overscan={props.overscan}
            itemSize={props.itemSize}
            shift={props.shift}
            ssrCount={props.ssrCount}
            horizontal={horizontal}
            onScroll={onScroll}
            onScrollEnd={onScrollEnd}
            onRangeChange={onRangeChange}
          >
            {slots}
          </Virtualizer>
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
  SlotsType<{ default: (arg: { item: any; index: number }) => VNode[] }>
>);
