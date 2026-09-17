<script lang="ts" generics="R, C">
  import { type Snippet } from "svelte";
  import {
    type GridCellState,
    type GridDriver,
    type VGridCell,
    gridStyleToString,
  } from "../core/index.js";

  interface Props {
    state: GridCellState;
    children: Snippet<[row: R, col: C, cell: Readonly<VGridCell>]>;
    row: R;
    col: C;
    rowIndex: number;
    resizer: GridDriver["$observeItem"];
  }

  let { state, children, row, col, rowIndex, resizer }: Props = $props();

  let elementRef: HTMLDivElement;

  // Derived, so that a new state with the same indexes is a no-op.
  let measureRowIndex = $derived(state.$measureRow);
  let measureColIndex = $derived(state.$measureCol);
  $effect(() => {
    if (measureRowIndex == null && measureColIndex == null) return;
    return resizer(elementRef, measureRowIndex, measureColIndex);
  });

  let style: string = $derived(gridStyleToString(state.$style));
</script>

<div
  bind:this={elementRef}
  role={state.$role}
  aria-colindex={state.$col + 1}
  aria-rowspan={state.$rowSpan}
  aria-colspan={state.$colSpan}
  aria-sort={state.$sort}
  {style}
>
  {@render children(row, col, { rowIndex, colIndex: state.$col })}
</div>
