/** @jsxImportSource vue */
import {
  ref,
  defineComponent,
  watch,
  type StyleValue,
  type VNode,
  type NativeElements,
  computed,
  type Ref,
} from "vue";
import {
  type Driver,
  type StateVersion,
  type VirtualStore,
} from "../core/index.js";
import { type ItemProps } from "./utils.js";

interface ListItemProps {
  _stateVersion: Ref<StateVersion>;
  _store: VirtualStore;
  _slot: (arg: { item: unknown; index: number }) => VNode[];
  _item: unknown;
  _resizer: Driver["$observeItem"];
  _index: number;
  _isHorizontal: boolean;
  _isSSR: boolean;
  _as: keyof NativeElements;
  _itemProps?: ItemProps;
}

/**
 * @internal
 */
export const ListItem = /*#__PURE__*/ defineComponent(
  (props: ListItemProps) => {
    const elementRef = ref<HTMLDivElement>();

    const offset = computed(
      () =>
        props._stateVersion.value && props._store.$getItemOffset(props._index),
    );
    const hide = computed(
      () =>
        props._stateVersion.value &&
        props._store.$isUnmeasuredItem(props._index),
    );
    const children = computed(() =>
      props._slot({ item: props._item, index: props._index }),
    );

    // The index may be changed if elements are inserted to or removed from the start of props.children
    watch(
      () => elementRef.value && props._index,
      (_, __, onCleanup) => {
        onCleanup(props._resizer(elementRef.value!, props._index));
      },
      {
        flush: "post",
      },
    );

    return () => {
      const {
        _isHorizontal: isHorizontal,
        _isSSR: isSSR,
        _as: Element,
        _index: index,
        _item: item,
      } = props;
      const isHide = hide.value;

      const { style: styleProp, ...rest } =
        props._itemProps?.({ item, index }) || {};

      const style: StyleValue = {
        contain: "layout style",
        position: isHide && isSSR ? undefined : "absolute",
        [isHorizontal ? "height" : "width"]: "100%",
        [isHorizontal ? "top" : "left"]: "0px",
        [isHorizontal ? "insetInlineStart" : "top"]: offset.value + "px",
        visibility: !isHide || isSSR ? undefined : "hidden",
        ...styleProp,
      };
      if (isHorizontal) {
        style.display = "inline-flex";
      }

      return (
        <Element ref={elementRef} style={style} {...rest}>
          {children.value}
        </Element>
      );
    };
  },
  {
    // Required to split props from attrs. Object form keeps the keys manglable.
    props: {
      _stateVersion: null,
      _store: null,
      _slot: null,
      _item: null,
      _resizer: null,
      _index: null,
      _isHorizontal: null,
      _isSSR: null,
      _as: null,
      _itemProps: null,
    } satisfies Record<keyof ListItemProps, null>,
  },
);
