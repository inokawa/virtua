<script lang="ts" generics="R, C">
  import { type Snippet } from "svelte";
  import {
    getAxisItem,
    getAxisLength,
    type GridDriver,
    type GridRowGroupState,
    type GridAxis,
    type GridCell,
    gridStyleToString,
  } from "../core/index.js";
  import GridRow from "./GridRow.svelte";

  interface Props {
    state: GridRowGroupState;
    children: Snippet<[row: R, col: C, cell: Readonly<GridCell>]>;
    rows: GridAxis<R>;
    cols: GridAxis<C>;
    resizer: GridDriver["$observeItem"];
  }

  let { state, children, rows, cols, resizer }: Props = $props();

  let style: string = $derived(gridStyleToString(state.$style));
</script>

<!-- https://www.w3.org/TR/wai-aria-1.2/#rowgroup -->
<div role="rowgroup" {style}>
  {#each state.$rows as row (row.$row)}
    <!-- Guard for experimental.async: true, which runs the each block before $effect.pre -->
    <!-- https://github.com/inokawa/virtua/pull/847 -->
    {#if row.$row < getAxisLength(rows)}
      <GridRow
        state={row}
        {children}
        row={getAxisItem(rows, row.$row)}
        {cols}
        {resizer}
      />
    {/if}
  {/each}
</div>
