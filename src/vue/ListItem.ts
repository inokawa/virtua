import { ref, h, defineComponent, watch } from "vue";
import { ItemResizeObserver } from "../core/resizer";
import { isRTLDocument } from "../core/environment";

/**
 * @internal
 */
export const ListItem = /*#__PURE__*/ defineComponent({
  props: {
    _children: { type: Object, required: true },
    _resizer: { type: Object, required: true },
    _index: { type: Number, required: true },
    _offset: { type: Number, required: true },
    _hide: { type: Boolean },
    _isHorizontal: { type: Boolean },
    _element: { type: String, required: true },
  },
  setup(props) {
    const elementRef = ref<HTMLDivElement>();

    // The index may be changed if elements are inserted to or removed from the start of props.children
    watch(
      () => elementRef.value && props._index,
      (_, __, onCleanup) => {
        const cleanupObserver = (props._resizer as ItemResizeObserver)(
          elementRef.value!,
          props._index
        );
        onCleanup(cleanupObserver);
      },
      {
        flush: "post",
      }
    );

    return () => {
      const {
        _children: children,
        _offset: offset,
        _hide: hide,
        _element: element,
        _isHorizontal: isHorizontal,
      } = props;

      const style: Record<string, number | string> = {
        margin: 0,
        padding: 0,
        position: "absolute",
        [isHorizontal ? "height" : "width"]: "100%",
        [isHorizontal ? "top" : "left"]: "0px",
        [isHorizontal ? (isRTLDocument() ? "right" : "left") : "top"]:
          offset + "px",
        visibility: hide ? "hidden" : "visible",
      };
      if (isHorizontal) {
        style["display"] = "flex";
      }

      return h(
        element,
        {
          ref: elementRef,
          style: style,
        },
        children
      );
    };
  },
});
