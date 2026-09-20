import { type VirtualStore } from "./store.js";
import { clamp, EMPTY, max, min, NULL } from "./utils.js";
import { type Driver, type GridDriver } from "./driver.js";
import { getSectionIndex, getSectionStarts } from "./grid.js";

/**
 * Alignment of item in the viewport.
 *
 * - `start`: Align the item to the start.
 * - `center`: Align the item to the center.
 * - `end`: Align the item to the end.
 * - `nearest`: If the item is already completely visible, don't scroll. Otherwise scroll until it becomes visible. That is similar behavior to [`nearest` option of scrollIntoView](https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView).
 */
export type ScrollToIndexAlign = "start" | "center" | "end" | "nearest";

export interface ScrollToIndexOpts {
  /**
   * Alignment of item in the viewport. See {@link ScrollToIndexAlign} for the values.
   * @defaultValue "start"
   */
  align?: ScrollToIndexAlign;
  /**
   * If true, scrolling animates smoothly with [`behavior: smooth` of scrollTo](https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollTo#behavior).
   *
   * **Using smooth scrolling over many items can kill performance benefit of virtual scroll. Do not overuse it.**
   */
  smooth?: boolean;
  /**
   * Additional offset from the scrolled position.
   * @defaultValue 0
   */
  offset?: number;
}

/**
 * The cell to scroll to and the options of the scroll. The axis whose index is omitted is not scrolled.
 */
export interface GridScrollToIndexOpts {
  /**
   * The row index of the cell.
   */
  rowIndex?: number;
  /**
   * The column index of the cell.
   */
  colIndex?: number;
  /**
   * Alignment of the cell in the viewport, excluding the rows sticking over it. See {@link ScrollToIndexAlign} for the values.
   * @defaultValue "start"
   */
  rowAlign?: ScrollToIndexAlign;
  /**
   * Alignment of the cell in the viewport, excluding the columns sticking over it. See {@link ScrollToIndexAlign} for the values.
   * @defaultValue "start"
   */
  colAlign?: ScrollToIndexAlign;
}

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
  vertical: number | undefined,
  horizontal: number | undefined,
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
  vertical: number | undefined,
  horizontal: number | undefined,
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
  store: VirtualStore,
  header: number,
  sections: readonly number[],
  footer: number,
  index: number,
  align: ScrollToIndexAlign | undefined,
  isHorizontal: boolean,
) => {
  const count = store.$getItemsLength();
  const pinnedStart = min(header, count);
  const trailStart = max(count - footer, pinnedStart);
  index = clamp(index, 0, count - 1);
  const starts = getSectionStarts(sections, pinnedStart, trailStart);
  const section = getSectionIndex(starts, index, trailStart);
  const sectionHeader = section < 0 ? -1 : starts[section]!;
  // Read when scrolling, as the pinned items may be measured after the call. The offsets from the first item exclude the jump deferred during scrolling.
  // The header of the section of the item sticks under the pinned items, so the item is below it unless it's the header itself.
  const getInsets = (): [start: number, end: number] => [
    store.$getItemOffset(pinnedStart) -
      store.$getItemOffset(0) +
      (sectionHeader < 0 || sectionHeader === index
        ? 0
        : store.$getItemOffset(sectionHeader + 1) -
          store.$getItemOffset(sectionHeader)),
    store.$getItemOffset(count) - store.$getItemOffset(trailStart),
  ];

  if (align === "nearest") {
    if (index < pinnedStart || index >= trailStart) {
      // A pinned item is always visible
      return;
    }
    const [insetStart, insetEnd] = getInsets();
    const scrollOffset = store.$getScrollOffset();
    const itemSize = store.$getItemSize(index);
    let itemOffset = store.$getItemOffset(index);
    if (sectionHeader === index) {
      // A section header is where it sticks, until the end of its section pushes it out
      const lastIndex =
        (section + 1 < starts.length ? starts[section + 1]! : trailStart) - 1;
      itemOffset = max(
        itemOffset,
        min(
          scrollOffset + insetStart,
          store.$getItemOffset(lastIndex) +
            store.$getItemSize(lastIndex) -
            itemSize,
        ),
      );
    }
    if (itemOffset < scrollOffset + insetStart) {
      align = "start";
    } else if (
      itemOffset + itemSize >
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
  headerRows = 0,
  sectionRows: readonly number[] = EMPTY,
  footerRows = 0,
  headerCols = 0,
  footerCols = 0,
  { rowIndex, colIndex, rowAlign, colAlign }: GridScrollToIndexOpts,
) => {
  // TODO support smooth scroll, removed because scrolling both axes smoothly freezes their ranges and the page
  if (rowIndex != NULL) {
    scrollGridAxisToIndex(
      driver,
      rowStore,
      headerRows,
      sectionRows,
      footerRows,
      rowIndex,
      rowAlign,
      false,
    );
  }
  if (colIndex != NULL) {
    scrollGridAxisToIndex(
      driver,
      colStore,
      headerCols,
      EMPTY,
      footerCols,
      colIndex,
      colAlign,
      true,
    );
  }
};
