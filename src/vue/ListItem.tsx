/** @jsxImportSource vue */
import {
  ref,
  defineComponent,
  watch,
  type StyleValue,
  type PropType,
  type VNode,
  type NativeElements,
  computed,
  type Ref,
} from "vue";
import {
  type ItemResizeObserver,
  type StateVersion,
  type VirtualStore,
} from "../core/index.js";
import { type ItemProps } from "./utils.js";

/**
 * @internal
 */
export const ListItem = /*#__PURE__*/ defineComponent({
  props: {
    _stateVersion: {
      type: Object as PropType<Ref<StateVersion>>,
      required: true,
    },
    _store: { type: Object as PropType<VirtualStore>, required: true },
    _children: { type: Object as PropType<VNode>, required: true },
    _resizer: {
      type: Function as PropType<ItemResizeObserver>,
      required: true,
    },
    _index: { type: Number, required: true },
    _isHorizontal: { type: Boolean },
    _isSSR: { type: Boolean },
    _isNegative: { type: Boolean },
    _as: { type: String as PropType<keyof NativeElements>, required: true },
    _itemProps: Object as PropType<ReturnType<ItemProps>>,
  },
  setup(props) {
    const elementRef = ref<HTMLDivElement>();

    const offset = computed(
      () =>
        props._stateVersion.value && props._store.$getItemOffset(props._index)
    );
    const hide = computed(
      () =>
        props._stateVersion.value &&
        props._store.$isUnmeasuredItem(props._index)
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
        _isNegative: isNegative,
        _isSSR: isSSR,
        _as: Element,
      } = props;
      const isHide = hide.value;

      const { style: styleProp, ...rest } = props._itemProps ?? {};

      const style: StyleValue = {
        contain: "layout style",
        position: isHide && isSSR ? undefined : "absolute",
        [isHorizontal ? "height" : "width"]: "100%",
        [isHorizontal ? "top" : "left"]: "0px",
        [isHorizontal
          ? isNegative
            ? "right"
            : "left"
          : isNegative
          ? "bottom"
          : "top"]: offset.value + "px",
        visibility: !isHide || isSSR ? undefined : "hidden",
        ...styleProp,
      };
      if (isHorizontal) {
        style.display = "inline-flex";
      }

      return (
        <Element ref={elementRef} style={style} {...rest}>
          {children}
        </Element>
      );
    };
  },
});
