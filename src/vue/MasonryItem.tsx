/** @jsxImportSource vue */
import {
  ref,
  defineComponent,
  watch,
  type StyleValue,
  type VNode,
  computed,
  type Ref,
} from "vue";
import {
  type Driver,
  type MasonryLayout,
  type StateVersion,
  type VirtualStore,
} from "../core/index.js";

const toCrossValue = (fraction: number, px: number): string =>
  px ? `calc(${fraction * 100}% + ${px}px)` : fraction * 100 + "%";

interface MasonryItemProps {
  _stateVersion: Ref<StateVersion>;
  _store: VirtualStore;
  _layout: MasonryLayout;
  _slot: (arg: { item: unknown; index: number }) => VNode[];
  _item: unknown;
  _resizer: Driver["$observeItem"];
  _index: number;
}

/**
 * @internal
 */
export const MasonryItem = /*#__PURE__*/ defineComponent(
  (props: MasonryItemProps) => {
    const elementRef = ref<HTMLDivElement>();

    const offset = computed(
      () =>
        props._stateVersion.value && props._store.$getItemOffset(props._index),
    );
    const crossOffset = computed(() => {
      props._stateVersion.value;
      const lanes = props._layout.$getLanes();
      const lane = props._layout.$getItemLane(props._index);
      return toCrossValue(
        lane / lanes,
        (lane * props._layout.$getGap()) / lanes,
      );
    });
    const crossSize = computed(() => {
      props._stateVersion.value;
      const lanes = props._layout.$getLanes();
      const gap = props._layout.$getGap();
      // The lanes share the width left by the gaps between them
      return toCrossValue(1 / lanes, gap / lanes - gap);
    });
    const hide = computed(
      () =>
        props._stateVersion.value && props._layout.$isSizeEqual(props._index),
    );
    const children = computed(() =>
      props._slot({ item: props._item, index: props._index }),
    );

    // The index may be changed if elements are inserted to or removed from the start of data
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
      const style: StyleValue = {
        contain: "layout style",
        position: "absolute",
        top: offset.value + "px",
        insetInlineStart: crossOffset.value,
        width: crossSize.value,
        visibility: hide.value ? "hidden" : undefined,
      };

      return (
        <div ref={elementRef} style={style}>
          {children.value}
        </div>
      );
    };
  },
  {
    // Required to split props from attrs. Object form keeps the keys manglable.
    props: {
      _stateVersion: null,
      _store: null,
      _layout: null,
      _slot: null,
      _item: null,
      _resizer: null,
      _index: null,
    } satisfies Record<keyof MasonryItemProps, null>,
  },
);
