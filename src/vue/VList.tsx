/** @jsxImportSource vue */
import {
  defineComponent,
  type ComponentOptionsMixin,
  type SlotsType,
  type ComponentOptionsWithObjectProps,
  type ComponentObjectPropsOptions,
  ref,
  type VNode,
  type PropType,
} from "vue";
import { Virtualizer, type VirtualizerHandle } from "./Virtualizer.js";
import { type ItemProps } from "./utils.js";
import { type CacheSnapshot } from "../core/index.js";

interface VListHandle extends VirtualizerHandle {}

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
   * The spacing between items in pixels.
   * @defaultValue 0
   */
  gap: Number,
  /**
   * While true is set, scroll position will be maintained from the end not usual start when items are added to/removed from start. It's recommended to set false if you add to/remove from mid/end of the list because it can cause unexpected behavior. This prop is useful for reverse infinite scrolling.
   */
  shift: Boolean,
  /**
   * If true, rendered as a horizontally scrollable list. Otherwise rendered as a vertically scrollable list.
   */
  horizontal: Boolean,
  /**
   * A prop for SSR. If set, the specified amount of items will be mounted in the initial rendering regardless of the container size until hydrated. The minimum value is 0.
   */
  ssrCount: Number,
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
  /**
   * You can restore cache by passing a {@link CacheSnapshot} on mount. This is useful when you want to restore scroll position after navigation. The snapshot can be obtained from {@link VirtualizerHandle.cache}.
   *
   * **The length of items should be the same as when you take the snapshot, otherwise restoration may not work as expected.**
   */
  cache: Object as PropType<CacheSnapshot>,
} satisfies ComponentObjectPropsOptions;

export const VList = /*#__PURE__*/ defineComponent({
  props: props,
  emits: ["scroll", "scrollEnd"],
  setup(props, { emit, expose, slots }) {
    const horizontal = props.horizontal;

    const onScroll = (offset: number) => {
      emit("scroll", offset);
    };
    const onScrollEnd = () => {
      emit("scrollEnd");
    };

    const handle = ref<InstanceType<typeof Virtualizer>>();

    expose({
      get cache() {
        return handle.value!.cache;
      },
      get scrollOffset() {
        return handle.value!.scrollOffset;
      },
      get scrollSize() {
        return handle.value!.scrollSize;
      },
      get viewportSize() {
        return handle.value!.viewportSize;
      },
      findItemIndex: (...args) => handle.value!.findItemIndex(...args),
      getItemOffset: (...args) => handle.value!.getItemOffset(...args),
      getItemSize: (...args) => handle.value!.getItemSize(...args),
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
            bufferSize={props.bufferSize}
            itemSize={props.itemSize}
            gap={props.gap}
            itemProps={props.itemProps}
            shift={props.shift}
            ssrCount={props.ssrCount}
            horizontal={horizontal}
            keepMounted={props.keepMounted}
            cache={props.cache}
            onScroll={onScroll}
            onScrollEnd={onScrollEnd}
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
