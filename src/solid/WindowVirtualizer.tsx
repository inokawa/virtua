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
} from "solid-js";
import {
  SCROLL_IDLE,
  UPDATE_SCROLL_STATE,
  UPDATE_SCROLL_END_EVENT,
  UPDATE_SIZE_STATE,
  overscanStartIndex,
  overscanEndIndex,
  createVirtualStore,
  ACTION_ITEMS_LENGTH_CHANGE,
} from "../core/store";
import { createWindowResizer } from "../core/resizer";
import { createWindowScroller } from "../core/scroller";
import { ListItem } from "./ListItem";
import { RangedFor } from "./RangedFor";
import { exists } from "../core/utils";
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
    endIndex: number
  ) => void;
}

/**
 * {@link Virtualizer} controlled by the window scrolling. See {@link WindowVirtualizerProps} and {@link WindowVirtualizer}.
 */
export const WindowVirtualizer = <T,>(
  props: WindowVirtualizerProps<T>
): JSX.Element => {
  let containerRef: HTMLDivElement | undefined;

  const {
    // ref: _ref,
    data: _data,
    children: _children,
    overscan: _overscan,
    itemSize,
    shift: _shift,
    horizontal = false,
    onScrollEnd: _onScrollEnd,
    onRangeChange: _onRangeChange,
  } = props;

  const store = createVirtualStore(
    props.data.length,
    itemSize ?? 40,
    undefined,
    undefined,
    !itemSize
  );
  const resizer = createWindowResizer(store, horizontal);
  const scroller = createWindowScroller(store, horizontal);

  const [rerender, setRerender] = createSignal(store._getStateVersion());

  const unsubscribeStore = store._subscribe(
    UPDATE_SCROLL_STATE + UPDATE_SIZE_STATE,
    () => {
      setRerender(store._getStateVersion());
    }
  );

  const unsubscribeOnScrollEnd = store._subscribe(
    UPDATE_SCROLL_END_EVENT,
    () => {
      props.onScrollEnd?.();
    }
  );

  const range = createMemo<ItemsRange>((prev) => {
    rerender();
    const next = store._getRange();
    if (prev && isSameRange(prev, next)) {
      return prev;
    }
    return next;
  });
  const scrollDirection = createMemo(
    () => rerender() && store._getScrollDirection()
  );
  const totalSize = createMemo(() => rerender() && store._getTotalSize());

  const jumpCount = createMemo(() => rerender() && store._getJumpCount());

  const overscanedRange = createMemo<ItemsRange>((prev) => {
    const overscan = props.overscan ?? 4;
    const [startIndex, endIndex] = range();
    const next: ItemsRange = [
      overscanStartIndex(startIndex, overscan, scrollDirection()),
      overscanEndIndex(
        endIndex,
        overscan,
        scrollDirection(),
        props.data.length
      ),
    ];
    if (prev && isSameRange(prev, next)) {
      return prev;
    }
    return next;
  });

  onMount(() => {
    resizer._observeRoot(containerRef!);
    scroller._observe(containerRef!);

    onCleanup(() => {
      unsubscribeStore();
      unsubscribeOnScrollEnd();
      resizer._dispose();
      scroller._dispose();
    });
  });

  createComputed(
    on(
      () => props.data.length,
      (len, prevLen) => {
        if (exists(prevLen) && len !== prevLen) {
          store._update(ACTION_ITEMS_LENGTH_CHANGE, [len, props.shift]);
        }
      }
    )
  );

  createEffect(
    on(jumpCount, () => {
      scroller._fixScrollJump();
    })
  );

  createEffect(() => {
    const next = range();
    props.onRangeChange && props.onRangeChange(next[0], next[1]);
  });

  return (
    <div
      ref={containerRef}
      style={{
        // contain: "content",
        "overflow-anchor": "none", // opt out browser's scroll anchoring because it will conflict to scroll anchoring of virtualizer
        flex: "none", // flex style can break layout
        position: "relative",
        visibility: "hidden",
        width: horizontal ? totalSize() + "px" : "100%",
        height: horizontal ? "100%" : totalSize() + "px",
        "pointer-events": scrollDirection() !== SCROLL_IDLE ? "none" : "auto",
      }}
    >
      <RangedFor
        _each={props.data}
        _range={overscanedRange()}
        _render={(data, index) => {
          const offset = createMemo(() => {
            rerender();
            return store._getItemOffset(index);
          });
          const hide = createMemo(() => {
            rerender();
            return store._isUnmeasuredItem(index);
          });

          return (
            <ListItem
              _index={index}
              _resizer={resizer._observeItem}
              _offset={offset()}
              _hide={hide()}
              _children={props.children(data, index)}
              _isHorizontal={horizontal}
            />
          );
        }}
      />
    </div>
  );
};
