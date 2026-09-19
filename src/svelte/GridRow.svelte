<script lang="ts" generics="R, C">
  import { type Snippet } from "svelte";
  import {
    getAxisItem,
    getAxisLength,
    type GridDriver,
    type GridRowState,
    type VGridAxis,
    type VGridCell,
    gridStyleToString,
  } from "../core/index.js";
  import GridCell from "./GridCell.svelte";

  interface Props {
    state: GridRowState;
    children: Snippet<[row: R, col: C, cell: Readonly<VGridCell>]>;
    row: R;
    cols: VGridAxis<C>;
    resizer: GridDriver["$observeItem"];
  }

  let { state, children, row, cols, resizer }: Props = $props();

  let style: string = $derived(gridStyleToString(state.$style));
</script>

<div role="row" aria-rowindex={state.$row + 1} {style}>
  {#each state.$cells as cell (cell.$col)}
    <!-- Guard for experimental.async: true, which runs the each block before $effect.pre -->
    <!-- https://github.com/inokawa/virtua/pull/847 -->
    {#if cell.$col < getAxisLength(cols)}
      <GridCell
        state={cell}
        {children}
        {row}
        col={getAxisItem(cols, cell.$col)}
        rowIndex={state.$row}
        {resizer}
      />
    {/if}
  {/each}
</div>
