<script lang="ts">
  import { VGrid } from "../../src/svelte/index.js";
  import type { GridCell } from "../../src/core/index.js";
  import type { SsrGridProps } from "../browser/index.js";

  let { ssrRowCount, ssrColCount }: SsrGridProps = $props();
</script>

<VGrid
  rows={1000}
  rowHeight={40}
  cols={1000}
  colWidth={100}
  {ssrRowCount}
  {ssrColCount}
  style="width: 400px; height: 400px;"
>
  {#snippet children(_row: number, _col: number, cell: GridCell)}
    <div>row-{cell.rowIndex}/col-{cell.colIndex}</div>
  {/snippet}
</VGrid>
