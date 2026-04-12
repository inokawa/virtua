/** @jsxImportSource vue */
import {
  defineComponent,
  ref,
  type VNode,
  type PropType,
  type PublicProps,
} from "vue";
import {
  Virtualizer,
  VirtualizerProps,
  type VirtualizerHandle,
} from "./Virtualizer.js";

/**
 * Methods of {@link VList}.
 */
export interface VListHandle extends VirtualizerHandle {}

/**
 * Props of {@link VList}.
 */
export interface VListProps<T = unknown>
  extends
    PublicProps,
    Pick<
      VirtualizerProps<T>,
      | "data"
      | "bufferSize"
      | "itemSize"
      | "shift"
      | "horizontal"
      | "cache"
      | "ssrCount"
      | "itemProps"
      | "onScroll"
      | "onScrollEnd"
      | "keepMounted"
    > {}

interface VListInstance<T = unknown> extends VListHandle {
  $props: VListProps<T>;
  $slots: { default: (arg: { item: T; index: number }) => VNode[] };
}

/**
 * Virtualized list component. See {@link VListProps} and {@link VListHandle}.
 */
export const VList = /*#__PURE__*/ defineComponent({
  props: {
    data: { type: Array, required: true },
    bufferSize: Number,
    itemSize: Number,
    shift: Boolean,
    horizontal: Boolean,
    ssrCount: Number,
    itemProps: Function as PropType<VListProps["itemProps"]>,
    keepMounted: Array as PropType<VListProps["keepMounted"]>,
    cache: Object as PropType<VListProps["cache"]>,
  },
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
}) as unknown as {
  new <T = unknown>(props: VListProps<T>): VListInstance<T>;
};
