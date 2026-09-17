import { type VirtualStore } from "./store.js";
import { type ScrollToIndexAlign, type ScrollToIndexOpts } from "./types.js";
import { clamp, NULL } from "./utils.js";
import { type Driver, type GridDriver } from "./driver.js";
import {
  getPinnedStart,
  getTrailStart,
  type VGridPinned,
  type VGridScrollOffset,
  type VGridScrollToIndexOpts,
} from "./grid.js";

/**
 * @internal
 */
export const scrollTo = (driver: Driver, offset: number) => {
  driver.$scroll(() => offset);
};

/**
 * @internal
 */
export const scrollBy = (
  driver: Driver,
  store: VirtualStore,
  offset: number,
) => {
  scrollTo(driver, offset + store.$getScrollOffset());
};

/**
 * @internal
 */
export const scrollToIndex = (
  driver: Driver,
  store: VirtualStore,
  index: number,
  { align, smooth, offset = 0 }: ScrollToIndexOpts = {},
) => {
  index = clamp(index, 0, store.$getItemsLength() - 1);

  if (align === "nearest") {
    const itemOffset = store.$getItemOffset(index);
    const scrollOffset = store.$getScrollOffset();

    if (itemOffset < scrollOffset) {
      align = "start";
    } else if (
      itemOffset + store.$getItemSize(index) >
      scrollOffset + store.$getViewportSize()
    ) {
      align = "end";
    } else {
      // already completely visible
      return;
    }
  }

  driver.$scroll(() => {
    return (
      offset +
      driver.$getBaseOffset() +
      store.$getItemOffset(index) +
      (align === "end"
        ? store.$getItemSize(index) - store.$getViewportSize()
        : align === "center"
          ? (store.$getItemSize(index) - store.$getViewportSize()) / 2
          : 0)
    );
  }, smooth);
};

/**
 * @internal
 */
export const gridScrollTo = (
  driver: GridDriver,
  { vertical, horizontal }: VGridScrollOffset,
) => {
  if (vertical != NULL) {
    driver.$scroll(false, () => vertical);
  }
  if (horizontal != NULL) {
    driver.$scroll(true, () => horizontal);
  }
};

/**
 * @internal
 */
export const gridScrollBy = (
  driver: GridDriver,
  rowStore: VirtualStore,
  colStore: VirtualStore,
  { vertical, horizontal }: VGridScrollOffset,
) => {
  if (vertical != NULL) {
    const offset = vertical + rowStore.$getScrollOffset();
    driver.$scroll(false, () => offset);
  }
  if (horizontal != NULL) {
    const offset = horizontal + colStore.$getScrollOffset();
    driver.$scroll(true, () => offset);
  }
};

const scrollGridAxisToIndex = (
  driver: GridDriver,
  isHorizontal: boolean,
  store: VirtualStore,
  pinned: VGridPinned | undefined,
  index: number,
  align: ScrollToIndexAlign | undefined,
) => {
  const count = store.$getItemsLength();
  const pinnedStart = getPinnedStart(pinned, count);
  const trailStart = getTrailStart(pinned, count, pinnedStart);
  index = clamp(index, 0, count - 1);
  // Read when scrolling, as the pinned items may be measured after the call. The offsets from the first item exclude the jump deferred during scrolling.
  const getInsets = (): [start: number, end: number] => [
    store.$getItemOffset(pinnedStart) - store.$getItemOffset(0),
    store.$getItemOffset(count) - store.$getItemOffset(trailStart),
  ];

  if (align === "nearest") {
    if (index < pinnedStart || index >= trailStart) {
      // A pinned item is always visible
      return;
    }
    const [insetStart, insetEnd] = getInsets();
    const itemOffset = store.$getItemOffset(index);
    const scrollOffset = store.$getScrollOffset();
    if (itemOffset < scrollOffset + insetStart) {
      align = "start";
    } else if (
      itemOffset + store.$getItemSize(index) >
      scrollOffset + store.$getViewportSize() - insetEnd
    ) {
      align = "end";
    } else {
      return;
    }
  }

  driver.$scroll(isHorizontal, () => {
    const [insetStart, insetEnd] = getInsets();
    const rest = store.$getItemSize(index) - store.$getViewportSize();
    return (
      store.$getItemOffset(index) +
      (align === "end"
        ? rest + insetEnd
        : align === "center"
          ? (rest + insetEnd - insetStart) / 2
          : -insetStart)
    );
  });
};

/**
 * @internal
 */
export const gridScrollToIndex = (
  driver: GridDriver,
  rowStore: VirtualStore,
  colStore: VirtualStore,
  pinnedRows: VGridPinned | undefined,
  pinnedCols: VGridPinned | undefined,
  { rowIndex, colIndex, rowAlign, colAlign }: VGridScrollToIndexOpts,
) => {
  // TODO support smooth scroll, removed because scrolling both axes smoothly freezes their ranges and the page
  if (rowIndex != NULL) {
    scrollGridAxisToIndex(
      driver,
      false,
      rowStore,
      pinnedRows,
      rowIndex,
      rowAlign,
    );
  }
  if (colIndex != NULL) {
    scrollGridAxisToIndex(
      driver,
      true,
      colStore,
      pinnedCols,
      colIndex,
      colAlign,
    );
  }
};
