<script lang="ts" generics="R = number, C = number">
  import { onMount, onDestroy } from "svelte";
  import {
    type StateVersion,
    UPDATE_SCROLL_END_EVENT,
    UPDATE_SCROLL_EVENT,
    UPDATE_VIRTUAL_STATE,
    createContainerGridDriver,
    createGridLayout,
    createGridPlan,
    createVirtualStore,
    getAxisItem,
    getAxisLength,
    getScrollSize,
    gridScrollBy,
    gridScrollTo,
    gridScrollToIndex,
    updateGridAxis,
  } from "../core/index.js";
  import { styleToString } from "./utils.js";
  import GridRow from "./GridRow.svelte";
  import GridRowGroup from "./GridRowGroup.svelte";
  import type { VGridHandle, VGridProps } from "./VGrid.type.js";

  interface Props extends VGridProps<R, C> {}

  let {
    children,
    rows,
    cols,
    rowHeight,
    colWidth,
    headerRows,
    sectionRows,
    footerRows,
    headerCols,
    footerCols,
    spans,
    keepMounted,
    bufferSize,
    gap = 0,
    ariaSort,
    onverticalscroll,
    onhorizontalscroll,
    onscrollend,
    ...rest
  }: Props = $props();

  const rowLayout = createGridLayout(rows, rowHeight, gap);
  const colLayout = createGridLayout(cols, colWidth, gap);
  const rowStore = createVirtualStore(rowLayout);
  const colStore = createVirtualStore(colLayout);
  const driver = createContainerGridDriver(rowStore, colStore);

  let containerRef: HTMLDivElement | undefined = $state();

  let stateVersion: StateVersion = $state(
    rowStore.$getStateVersion() + colStore.$getStateVersion(),
  );
  const rerender = () => {
    stateVersion = rowStore.$getStateVersion() + colStore.$getStateVersion();
  };
  rowStore.$subscribe(UPDATE_VIRTUAL_STATE, rerender);
  colStore.$subscribe(UPDATE_VIRTUAL_STATE, rerender);

  // Both stores observe both axes, so the end is notified once after both have ended.
  let scrolled = false;
  rowStore.$subscribe(UPDATE_SCROLL_EVENT, () => {
    scrolled = true;
    onverticalscroll && onverticalscroll(rowStore.$getScrollOffset());
  });
  colStore.$subscribe(UPDATE_SCROLL_EVENT, () => {
    scrolled = true;
    onhorizontalscroll && onhorizontalscroll(colStore.$getScrollOffset());
  });
  const notifyScrollEnd = () => {
    if (scrolled && !rowStore.$isScrolling() && !colStore.$isScrolling()) {
      scrolled = false;
      onscrollend && onscrollend();
    }
  };
  rowStore.$subscribe(UPDATE_SCROLL_END_EVENT, notifyScrollEnd);
  colStore.$subscribe(UPDATE_SCROLL_END_EVENT, notifyScrollEnd);

  // The sizes read from the items are tracked, so the items mutated in place are followed.
  $effect.pre(() => {
    updateGridAxis(rowStore, rowLayout, rows, rowHeight, true);
  });
  $effect.pre(() => {
    updateGridAxis(colStore, colLayout, cols, colWidth, true);
  });
  let rowCount = $derived(stateVersion && rowStore.$getItemsLength());
  let colCount = $derived(stateVersion && colStore.$getItemsLength());
  let plan = $derived.by(() => {
    stateVersion;
    return createGridPlan(
      rowLayout,
      colLayout,
      rowStore.$getRange(bufferSize),
      colStore.$getRange(bufferSize),
      headerRows,
      sectionRows,
      footerRows,
      headerCols,
      footerCols,
      spans,
      keepMounted,
      ariaSort,
    );
  });
  let isScrolling = $derived(
    stateVersion && (rowStore.$isScrolling() || colStore.$isScrolling()),
  );

  onMount(() => {
    driver.$observe(containerRef!);
  });
  onDestroy(() => {
    rowStore.$dispose();
    colStore.$dispose();
    driver.$dispose();
  });

  let prevStateVersion: StateVersion | undefined;
  $effect(() => {
    if (prevStateVersion === stateVersion) return;
    prevStateVersion = stateVersion;
    driver.$effect();
  });

  export const getVerticalScrollOffset: VGridHandle["getVerticalScrollOffset"] =
    rowStore.$getScrollOffset;
  export const getHorizontalScrollOffset: VGridHandle["getHorizontalScrollOffset"] =
    colStore.$getScrollOffset;
  export const getScrollHeight: VGridHandle["getScrollHeight"] = () =>
    getScrollSize(rowStore);
  export const getScrollWidth: VGridHandle["getScrollWidth"] = () =>
    getScrollSize(colStore);
  export const getViewportHeight: VGridHandle["getViewportHeight"] =
    rowStore.$getViewportSize;
  export const getViewportWidth: VGridHandle["getViewportWidth"] =
    colStore.$getViewportSize;
  export const findRowIndex: VGridHandle["findRowIndex"] =
    rowStore.$findItemIndex;
  export const findColIndex: VGridHandle["findColIndex"] =
    colStore.$findItemIndex;
  export const getRowOffset: VGridHandle["getRowOffset"] =
    rowStore.$getItemOffset;
  export const getColOffset: VGridHandle["getColOffset"] =
    colStore.$getItemOffset;
  export const getRowSize: VGridHandle["getRowSize"] = rowStore.$getItemSize;
  export const getColSize: VGridHandle["getColSize"] = colStore.$getItemSize;
  export const scrollToIndex: VGridHandle["scrollToIndex"] = (opts) =>
    gridScrollToIndex(
      driver,
      rowStore,
      colStore,
      headerRows,
      sectionRows,
      footerRows,
      headerCols,
      footerCols,
      opts,
    );
  export const scrollTo: VGridHandle["scrollTo"] = ({ vertical, horizontal }) =>
    gridScrollTo(driver, vertical, horizontal);
  export const scrollBy: VGridHandle["scrollBy"] = ({ vertical, horizontal }) =>
    gridScrollBy(driver, rowStore, colStore, vertical, horizontal);

  const viewportStyle = styleToString({
    overflow: "auto",
    contain: "strict",
    width: "100%",
    height: "100%",
  });
  let containerStyle = $derived.by(() => {
    const { $rowTemplate: rowTemplate, $colTemplate: colTemplate } = plan;
    // A jump deferred during scrolling shifts the tracks, as it shifts the items of the lists.
    const marginTop = rowStore.$getItemOffset(0);
    const marginInlineStart = colStore.$getItemOffset(0);
    return styleToString({
      // https://github.com/inokawa/virtua/pull/775 https://github.com/inokawa/virtua/issues/800
      contain: "size style",
      "overflow-anchor": "none", // opt out browser's scroll anchoring because it will conflict to scroll anchoring of virtualizer
      flex: "none", // flex style can break layout
      display: "grid",
      "grid-template-rows": rowTemplate,
      "grid-template-columns": colTemplate,
      gap: gap + "px",
      "margin-top": marginTop + "px",
      "margin-inline-start": marginInlineStart + "px",
      // The width is left to the viewport, so the auto columns fill it as the columns of a table.
      height: getScrollSize(rowStore) - marginTop + "px",
      "pointer-events": isScrolling ? "none" : undefined,
    });
  });
</script>

<!--
  @component
  Virtualized grid component for tabular data. See {@link VGridProps} and {@link VGridHandle}.
-->
<!-- https://www.w3.org/WAI/ARIA/apg/patterns/table/ -->
<!-- https://www.w3.org/TR/wai-aria-1.2/#table -->
<!-- https://www.w3.org/TR/wai-aria-1.2/#aria-rowcount -->
<div
  role="table"
  aria-rowcount={rowCount}
  aria-colcount={colCount}
  {...rest}
  style="{viewportStyle} {rest.style || ''}"
>
  <div bind:this={containerRef} style={containerStyle}>
    {#each plan.$groups as state ("$rows" in state ? state.$key : state.$row)}
      {#if "$rows" in state}
        <GridRowGroup
          {state}
          {children}
          {rows}
          {cols}
          resizer={driver.$observeItem}
        />
      {:else}
        <!-- Guard for experimental.async: true, which runs the each block before $effect.pre -->
        <!-- https://github.com/inokawa/virtua/pull/847 -->
        {#if state.$row < getAxisLength(rows)}
          <GridRow
            {state}
            {children}
            row={getAxisItem(rows, state.$row)}
            {cols}
            resizer={driver.$observeItem}
          />
        {/if}
      {/if}
    {/each}
  </div>
</div>
