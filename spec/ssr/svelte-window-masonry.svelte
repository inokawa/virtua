<script lang="ts">
  import { range } from "../utils.js";
  import { WindowMasonry } from "../../src/svelte/index.js";
  import type { SsrMasonryProps } from "../browser/index.js";

  let { ssrCount, cache }: SsrMasonryProps = $props();
</script>

<WindowMasonry
  data={range(1000)}
  lanes={4}
  itemSize={100}
  {ssrCount}
  {cache}
  style="width: 400px;"
>
  {#snippet children(item: number)}
    <div style="height: 100px;">item-{item}</div>
  {/snippet}
</WindowMasonry>
