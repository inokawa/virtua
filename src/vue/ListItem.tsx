/** @jsxImportSource vue */
import {
  ref,
  defineComponent,
  watch,
  StyleValue,
  PropType,
  VNode,
  NativeElements,
  computed,
  Ref,
} from "vue";
import {
  ItemResizeObserver,
  isRTLDocument,
  StateVersion,
  VirtualStore,
} from "../core";
import { ItemProps } from "./utils";

/**
 * @internal
 */
export const ListItem = /*#__PURE__*/ defineComponent({
  props: {
    _rerender: { type: Object as PropType<Ref<StateVersion>>, required: true },
    _store: { type: Object as PropType<VirtualStore>, required: true },
    _children: { type: Object as PropType<VNode>, required: true },
    _resizer: {
      type: Function as PropType<ItemResizeObserver>,
      required: true,
    },
    _index: { type: Number, required: true },
    _isHorizontal: { type: Boolean },
    _isSSR: { type: Boolean },
    _as: { type: String as PropType<keyof NativeElements>, required: true },
    _itemProps: Object as PropType<ReturnType<ItemProps>>,
  },
  setup(props) {
    const elementRef = ref<HTMLDivElement>();

    const offset = computed(
      () => props._rerender.value && props._store.$getItemOffset(props._index)
    );
    const hide = computed(
      () =>
        props._rerender.value && props._store.$isUnmeasuredItem(props._index)
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
      const {
        _children: children,
        _isHorizontal: isHorizontal,
        _isSSR: isSSR,
        _as: Element,
      } = props;
      const isHide = hide.value;

      const { style: styleProp, ...rest } = props._itemProps ?? {};

      const style: StyleValue = {
        position: isHide && isSSR ? undefined : "absolute",
        [isHorizontal ? "height" : "width"]: "100%",
        [isHorizontal ? "top" : "left"]: "0px",
        [isHorizontal ? (isRTLDocument() ? "right" : "left") : "top"]:
          offset.value + "px",
        visibility: !isHide || isSSR ? "visible" : "hidden",
        ...styleProp,
      };
      if (isHorizontal) {
        style.display = "flex";
      }

      return (
        <Element ref={elementRef} style={style} {...rest}>
          {children}
        </Element>
      );
    };
  },
});
