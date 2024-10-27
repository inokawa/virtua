import {
  UPDATE_VIRTUAL_STATE,
  UPDATE_SCROLL_EVENT,
  UPDATE_SCROLL_END_EVENT,
  createVirtualStore,
  ACTION_ITEMS_LENGTH_CHANGE,
  getScrollSize as _getScrollSize,
  type StateVersion,
  getScrollSize,
  ACTION_START_OFFSET_CHANGE,
} from "../core/store";
import { createResizer } from "../core/resizer";
import { createScroller } from "../core/scroller";

export {
  SCROLL_IDLE,
  type StateVersion,
  getOverscanedRange,
} from "../core/store";
export { isRTLDocument } from "../core/environment";
export type { ItemResizeObserver } from "../core/resizer";

export const ON_MOUNT = 0;
export const ON_UN_MOUNT = 1;
export const GET_RANGE = 2;
export const GET_TOTAL_SIZE = 3;
export const GET_VIEWPORT_SIZE = 4;
export const GET_SCROLL_OFFSET = 5;
export const GET_SCROLL_DIRECTION = 6;
export const GET_JUMP_COUNT = 7;
export const GET_ITEM_OFFSET = 8;
export const IS_ITEM_HIDDEN = 9;
export const GET_ITEMS_LENGTH = 10;
export const GET_START_SPACER_SIZE = 11;
export const OBSERVE_ITEM_RESIZE = 12;
export const FIX_SCROLL_JUMP = 13;
export const CHANGE_ITEM_LENGTH = 14;
export const CHANGE_START_MARGIN = 15;
export const GET_SCROLL_SIZE = 16;
export const SCROLL_TO = 17;
export const SCROLL_BY = 18;
export const SCROLL_TO_INDEX = 19;

/**
 * This function is workaround for terser minification.
 * Svelte doesn't seem to have a good way to modify and print its AST.
 */
export const createVirtualizer = (
  count: number,
  itemSize: number | undefined,
  horizontal: boolean,
  onUpdate: (v: StateVersion) => void,
  onScroll: (offset: number) => void,
  onScrollEnd: () => void
) => {
  const store = createVirtualStore(
    count,
    itemSize ?? 40,
    undefined,
    undefined,
    !itemSize
  );
  const resizer = createResizer(store, horizontal);
  const scroller = createScroller(store, horizontal);
  const unsubscribeStore = store._subscribe(UPDATE_VIRTUAL_STATE, () => {
    onUpdate(store._getStateVersion());
  });

  const unsubscribeOnScroll = store._subscribe(UPDATE_SCROLL_EVENT, () => {
    onScroll(store._getScrollOffset());
  });
  const unsubscribeOnScrollEnd = store._subscribe(
    UPDATE_SCROLL_END_EVENT,
    () => {
      onScrollEnd();
    }
  );

  return {
    [ON_MOUNT]: (scrollable: HTMLElement) => {
      resizer._observeRoot(scrollable);
      scroller._observe(scrollable);
    },
    [ON_UN_MOUNT]: () => {
      unsubscribeStore();
      unsubscribeOnScroll();
      unsubscribeOnScrollEnd();
      resizer._dispose();
      scroller._dispose();
    },
    [GET_RANGE]: store._getRange,
    [GET_TOTAL_SIZE]: store._getTotalSize,
    [GET_VIEWPORT_SIZE]: store._getViewportSize,
    [GET_SCROLL_OFFSET]: store._getScrollOffset,
    [GET_SCROLL_DIRECTION]: store._getScrollDirection,
    [GET_JUMP_COUNT]: store._getJumpCount,
    [GET_ITEM_OFFSET]: store._getItemOffset,
    [IS_ITEM_HIDDEN]: store._isUnmeasuredItem,
    [GET_ITEMS_LENGTH]: store._getItemsLength,
    [GET_START_SPACER_SIZE]: store._getStartSpacerSize,
    [OBSERVE_ITEM_RESIZE]: resizer._observeItem,
    [FIX_SCROLL_JUMP]: scroller._fixScrollJump,
    [CHANGE_ITEM_LENGTH]: (len: number, shift?: boolean) => {
      store._update(ACTION_ITEMS_LENGTH_CHANGE, [len, shift]);
    },
    [CHANGE_START_MARGIN]: (value: number) => {
      store._update(ACTION_START_OFFSET_CHANGE, value);
    },
    [GET_SCROLL_SIZE]: () => getScrollSize(store),
    [SCROLL_TO]: scroller._scrollTo,
    [SCROLL_BY]: scroller._scrollBy,
    [SCROLL_TO_INDEX]: scroller._scrollToIndex,
  };
};
