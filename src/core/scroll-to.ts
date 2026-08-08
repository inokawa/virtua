import { type VirtualStore } from "./store.js";
import { type ScrollToIndexOpts } from "./types.js";
import { clamp, NULL } from "./utils.js";
import { type Driver, type GridDriver } from "./driver.js";

/**
 * @internal
 */
export const scrollTo = (driver: Driver, offset: number) => {
  driver.$scheduleScroll(() => offset);
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

  driver.$scheduleScroll(() => {
    return (
      offset +
      driver.$getBaseOffset() +
      store.$getItemOffset(index) +
      (align === "end"
        ? store.$getItemSize(index) -
          (store.$getViewportSize() - driver.$getScrollbarSize())
        : align === "center"
          ? (store.$getItemSize(index) -
              (store.$getViewportSize() - driver.$getScrollbarSize())) /
            2
          : 0)
    );
  }, smooth);
};

/**
 * @internal
 */
export const gridScrollTo = (
  driver: GridDriver,
  row?: number,
  col?: number,
) => {
  if (row != NULL) {
    driver.$scheduleScrollY(() => row);
  }
  if (col != NULL) {
    driver.$scheduleScrollX(() => col);
  }
};

/**
 * @internal
 */
export const gridScrollBy = (
  driver: GridDriver,
  rowStore: VirtualStore,
  colStore: VirtualStore,
  row?: number,
  col?: number,
) => {
  if (row != NULL) {
    const target = row + rowStore.$getScrollOffset();
    driver.$scheduleScrollY(() => target);
  }
  if (col != NULL) {
    const target = col + colStore.$getScrollOffset();
    driver.$scheduleScrollX(() => target);
  }
};

/**
 * @internal
 */
export const gridScrollToIndex = (
  driver: GridDriver,
  rowStore: VirtualStore,
  colStore: VirtualStore,
  row?: number,
  col?: number,
) => {
  if (row != NULL) {
    const index = clamp(row, 0, rowStore.$getItemsLength() - 1);
    driver.$scheduleScrollY(
      () => driver.$getBaseOffset(false) + rowStore.$getItemOffset(index),
    );
  }
  if (col != NULL) {
    const index = clamp(col, 0, colStore.$getItemsLength() - 1);
    driver.$scheduleScrollX(
      () => driver.$getBaseOffset(true) + colStore.$getItemOffset(index),
    );
  }
};
