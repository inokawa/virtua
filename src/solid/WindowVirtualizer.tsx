/**
 * @jsxImportSource solid-js
 */
import {
  onMount,
  onCleanup,
  createEffect,
  createSignal,
  createMemo,
  JSX,
  on,
  createComputed,
  mergeProps,
  createRoot,
} from "solid-js";
import {
  SCROLL_IDLE,
  UPDATE_SCROLL_END_EVENT,
  UPDATE_VIRTUAL_STATE,
  getOverscanedRange,
  createVirtualStore,
  ACTION_ITEMS_LENGTH_CHANGE,
} from "../core/store";
import { createWindowResizer } from "../core/resizer";
import { createWindowScroller } from "../core/scroller";
import { ListItem } from "./ListItem";
import { RangedFor } from "./RangedFor";
import { isSameRange } from "./utils";
import { ItemsRange } from "../core/types";

// /**
//  * Methods of {@link WindowVirtualizer}.
//  */
// export interface WindowVirtualizerHandle {}

/**
 * Props of {@link WindowVirtualizer}.
 */
export interface WindowVirtualizerProps<T> {
  // /**
  //  * Get reference to {@link WindowVirtualizerHandle}.
  //  */
  // ref?: (handle?: WindowVirtualizerHandle) => void;
  /**
   * The data items rendered by this component.
   */
  data: T[];
  /**
   * The elements renderer function.
   */
  children: (data: T, index: number) => JSX.Element;
  /**
   * Number of items to render above/below the visible bounds of the list. Lower value will give better performance but you can increase to avoid showing blank items in fast scrolling.
   * @defaultValue 4
   */
  overscan?: number;
  /**
   * Item size hint for unmeasured items. It will help to reduce scroll jump when items are measured if used properly.
   *
   * - If not set, initial item sizes will be automatically estimated from measured sizes. This is recommended for most cases.
   * - If set, you can opt out estimation and use the value as initial item size.
   */
  itemSize?: number;
  /**
   * While true is set, scroll position will be maintained from the end not usual start when items are added to/removed from start. It's recommended to set false if you add to/remove from mid/end of the list because it can cause unexpected behavior. This prop is useful for reverse infinite scrolling.
   */
  shift?: boolean;
  /**
   * If true, rendered as a horizontally scrollable list. Otherwise rendered as a vertically scrollable list.
   */
  horizontal?: boolean;
  /**
   * Callback invoked when scrolling stops.
   */
  onScrollEnd?: () => void;
  /**
   * Callback invoked when visible items range changes.
   */
  onRangeChange?: (
    /**
     * The start index of viewable items.
     */
    startIndex: number,
    /**
     * The end index of viewable items.
     */
    endIndex: number,
  ) => void;
}

/**
 * {@link Virtualizer} controlled by the window scrolling. See {@link WindowVirtualizerProps} and {@link WindowVirtualizer}.
 */
export const WindowVirtualizer = <T,>(
  props: WindowVirtualizerProps<T>,
): JSX.Element => {
  let containerRef: HTMLDivElement | undefined;

  const mergedProps = mergeProps({ horizontal: false }, props);
  const store = createMemo(() =>
    createVirtualStore(
      mergedProps.data.length,
      mergedProps.itemSize ?? 40,
      undefined,
      undefined,
      !mergedProps.itemSize,
    ),
  );
  const resizer = createMemo(() =>
    createWindowResizer(store(), mergedProps.horizontal),
  );
  const scroller = createMemo(() =>
    createWindowScroller(store(), mergedProps.horizontal),
  );

  const [rerender, setRerender] = createSignal();
  createEffect(() => {
    setRerender(store()._getStateVersion());
  });

  const { unsubscribeStore, unsubscribeOnScrollEnd } = createRoot(() => {
    return {
      unsubscribeStore: store()._subscribe(UPDATE_VIRTUAL_STATE, () => {
        createEffect(() => {
          setRerender(store()._getStateVersion());
        });
      }),
      unsubscribeOnScrollEnd: store()._subscribe(
        UPDATE_SCROLL_END_EVENT,
        () => {
          createEffect(() => {
            mergedProps.onScrollEnd?.();
          });
        },
      ),
    };
  });

  const range = createMemo<ItemsRange>((prev) => {
    rerender();
    const next = store()._getRange();
    if (prev && isSameRange(prev, next)) {
      return prev;
    }
    return next;
  });
  const totalSize = createMemo(() => rerender() && store()._getTotalSize());

  const jumpCount = createMemo(() => rerender() && store()._getJumpCount());

  const overscanedRange = createMemo<ItemsRange>((prev) => {
    const overscan = props.overscan ?? 4;
    const [startIndex, endIndex] = range();
    const next = getOverscanedRange(
      startIndex,
      endIndex,
      overscan,
      store()._getScrollDirection(),
      props.data.length,
    );
    if (prev && isSameRange(prev, next)) {
      return prev;
    }
    return next;
  });

  onMount(() => {
    resizer()._observeRoot(containerRef!);
    scroller()._observe(containerRef!);

    onCleanup(() => {
      unsubscribeStore();
      unsubscribeOnScrollEnd();
      resizer()._dispose();
      scroller()._dispose();
    });
  });

  createComputed(
    on(
      () => props.data.length,
      (len) => {
        if (len !== store()._getItemsLength()) {
          store()._update(ACTION_ITEMS_LENGTH_CHANGE, [len, props.shift]);
        }
      },
    ),
  );

  createEffect(
    on(jumpCount, () => {
      scroller()._fixScrollJump();
    }),
  );

  createEffect(() => {
    const next = range();
    mergedProps.onRangeChange && mergedProps.onRangeChange(next[0], next[1]);
  });

  return (
    <div
      ref={containerRef}
      style={{
        // contain: "content",
        "overflow-anchor": "none", // opt out browser's scroll anchoring because it will conflict to scroll anchoring of virtualizer
        flex: "none", // flex style can break layout
        position: "relative",
        visibility: "hidden", // TODO replace with other optimization methods
        width: mergedProps.horizontal ? totalSize() + "px" : "100%",
        height: mergedProps.horizontal ? "100%" : totalSize() + "px",
        "pointer-events":
          store()._getScrollDirection() !== SCROLL_IDLE ? "none" : "auto",
      }}
    >
      <RangedFor
        _each={props.data}
        _range={overscanedRange()}
        _render={(data, index) => {
          const offset = createMemo(() => {
            rerender();
            return store()._getItemOffset(index);
          });
          const hide = createMemo(() => {
            rerender();
            return store()._isUnmeasuredItem(index);
          });

          return (
            <ListItem
              _index={index}
              _resizer={resizer()._observeItem}
              _offset={offset()}
              _hide={hide()}
              _children={mergedProps.children(data(), index)}
              _isHorizontal={mergedProps.horizontal}
            />
          );
        }}
      />
    </div>
  );
};
