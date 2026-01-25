<script lang="ts">
  import { VList } from "../../../src/svelte";

  const data = Array.from({ length: 1000 }).map((_, i) => i);
</script>

<div style="height: 100%;">
  <p>This list is configured with <code>ssrCount: 20</code>.</p>
  <VList {data} style="height: 400px;" ssrCount={20} getKey={(i) => i}>
    {#snippet children(item)}
      <div style="height: 40px; border-bottom: 1px solid #ccc;">
        Item {item}
      </div>
    {/snippet}
  </VList>
</div>
