<script lang="ts">
  import { range } from "../utils.js";
  import { WindowVirtualizer } from "../../src/svelte/index.js";
  import type { SsrProps } from "../browser/index.js";

  let { ssrCount, itemSize, horizontal = false }: SsrProps = $props();
</script>

<WindowVirtualizer data={range(1000)} {ssrCount} {itemSize} {horizontal}>
  {#snippet children(item: number)}
    <div>item-{item}</div>
  {/snippet}
</WindowVirtualizer>
