<script lang="ts">
  import { Virtualizer } from "../../src/svelte";

  const COLUMN_WIDTHS = [100, 200, 300, 100, 200, 300, 100, 300, 400, 200];

  const data = Array.from({ length: 1000 }).map((_, i) => i);

  const headerHeight = 40;

  let scrollRef: HTMLElement = $state();
</script>

<div bind:this={scrollRef} style={`height: 500px; overflow: auto;`}>
  <table>
    <thead>
      <tr style={`height: ${headerHeight}px`}>
        {#each COLUMN_WIDTHS as width, index}
          <th style={`width: ${width}px`}>Header{index}</th>
        {/each}
      </tr>
    </thead>
    <Virtualizer
      {data}
      getKey={(_, i) => i}
      {scrollRef}
      as="tbody"
      item="tr"
      startMargin={headerHeight}
    >
      {#snippet children(item)}
        {#each COLUMN_WIDTHS as width, index}
          <th style={`width: ${width}px`}>{item} {index}</th>
        {/each}
      {/snippet}
    </Virtualizer>
  </table>
</div>
