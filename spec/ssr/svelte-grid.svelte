<script lang="ts">
  import { VGrid } from "../../src/svelte/index.js";
  import type { GridCell } from "../../src/core/index.js";
</script>

<VGrid
  rows={1000}
  rowHeight={40}
  cols={1000}
  colWidth={100}
  style="width: 400px; height: 400px;"
>
  {#snippet children(_row: number, _col: number, cell: GridCell)}
    <div>row-{cell.rowIndex}/col-{cell.colIndex}</div>
  {/snippet}
</VGrid>
