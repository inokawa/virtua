<script lang="ts">
  import { VGrid } from "../../../src/svelte";
</script>

<VGrid
  rows={1000}
  rowHeight={40}
  cols={500}
  colWidth={100}
  style="height: 100vh; box-sizing: border-box; border: solid 1px gray;"
>
  {#snippet children(rowIndex, colIndex)}
    <div
      style="background: white; padding: 4px; border-right: solid 1px gray; border-bottom: solid 1px gray;"
    >
      {rowIndex} / {colIndex}
    </div>
  {/snippet}
</VGrid>
