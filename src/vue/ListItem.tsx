/** @jsxImportSource vue */
import {
  ref,
  defineComponent,
  watch,
  StyleValue,
  PropType,
  VNode,
  Ref,
  computed,
} from "vue";
import { ItemResizeObserver } from "../core/resizer";
import { isRTLDocument } from "../core/environment";
import { StateVersion, VirtualStore } from "../core/store";

/**
 * @internal
 */
export const ListItem = /*#__PURE__*/ defineComponent({
  props: {
    _children: { type: Object as PropType<VNode>, required: true },
    _rerender: { type: Object as PropType<Ref<StateVersion>>, required: true },
    _store: { type: Object as PropType<VirtualStore>, required: true },
    _resizer: {
      type: Function as PropType<ItemResizeObserver>,
      required: true,
    },
    _index: { type: Number, required: true },
    _isHorizontal: { type: Boolean },
  },
  setup(props) {
    const { _store: store, _rerender: rerender } = props;
    const elementRef = ref<HTMLDivElement>();

    const offset = computed(
      () => rerender.value && store._getItemOffset(props._index)
    );
    const hide = computed(
      () => rerender.value && store._isUnmeasuredItem(props._index)
    );

    // The index may be changed if elements are inserted to or removed from the start of props.children
    watch(
      () => elementRef.value && props._index,
      (_, __, onCleanup) => {
        onCleanup(props._resizer(elementRef.value!, props._index));
      },
      {
        flush: "post",
      }
    );

    return () => {
      const { _children: children, _isHorizontal: isHorizontal } = props;

      const style: StyleValue = {
        margin: 0,
        padding: 0,
        position: "absolute",
        [isHorizontal ? "height" : "width"]: "100%",
        [isHorizontal ? "top" : "left"]: "0px",
        [isHorizontal ? (isRTLDocument() ? "right" : "left") : "top"]:
          offset.value + "px",
        visibility: hide.value ? "hidden" : "visible",
      };
      if (isHorizontal) {
        style.display = "flex";
      }

      return (
        <div ref={elementRef} style={style}>
          {children}
        </div>
      );
    };
  },
});
