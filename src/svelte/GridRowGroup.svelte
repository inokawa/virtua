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
    <!-- The each block runs before $effect.pre with experimental.async, so the store may still have the length before the update -->
    <!-- https://svelte.dev/docs/svelte/await-expressions#Breaking-changes -->
    <!-- https://github.com/inokawa/virtua/pull/847 -->
    <!-- https://github.com/inokawa/virtua/pull/1018 -->
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
