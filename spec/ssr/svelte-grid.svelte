<script lang="ts">
  import { VGrid } from "../../src/svelte/index.js";
  import type { VGridCell } from "../../src/core/index.js";
</script>

<VGrid
  rows={1000}
  rowHeight={40}
  cols={1000}
  colWidth={100}
  style="width: 400px; height: 400px;"
>
  {#snippet children(_row: number, _col: number, cell: VGridCell)}
    <div>item-{cell.rowIndex}/item-{cell.colIndex}</div>
  {/snippet}
</VGrid>
