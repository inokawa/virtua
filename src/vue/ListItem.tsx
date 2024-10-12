/** @jsxImportSource vue */
import {
  ref,
  defineComponent,
  watch,
  StyleValue,
  PropType,
  VNode,
  NativeElements,
} from "vue";
import { ItemResizeObserver } from "../core/resizer";
import { isRTLDocument } from "../core/environment";

/**
 * @internal
 */
export const ListItem = /*#__PURE__*/ defineComponent({
  props: {
    _children: { type: Object as PropType<VNode>, required: true },
    _resizer: {
      type: Function as PropType<ItemResizeObserver>,
      required: true,
    },
    _index: { type: Number, required: true },
    _offset: { type: Number, required: true },
    _hide: { type: Boolean },
    _isHorizontal: { type: Boolean },
    _isSSR: { type: Boolean },
    _as: { type: String as PropType<keyof NativeElements>, required: true },
  },
  setup(props) {
    const elementRef = ref<HTMLDivElement>();

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
      const {
        _children: children,
        _offset: offset,
        _hide: hide,
        _isHorizontal: isHorizontal,
        _isSSR: isSSR,
        _as: Element,
      } = props;

      const style: StyleValue = {
        position: hide && isSSR ? undefined : "absolute",
        [isHorizontal ? "height" : "width"]: "100%",
        [isHorizontal ? "top" : "left"]: "0px",
        [isHorizontal ? (isRTLDocument() ? "right" : "left") : "top"]:
          offset + "px",
        visibility: !hide || isSSR ? "visible" : "hidden",
      };
      if (isHorizontal) {
        style.display = "flex";
      }

      return (
        <Element ref={elementRef} style={style}>
          {children}
        </Element>
      );
    };
  },
});
