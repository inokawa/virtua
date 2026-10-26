<script lang="ts">
  import { range } from "../utils.js";
  import { VMasonry } from "../../src/svelte/index.js";
  import type { SsrMasonryProps } from "../browser/index.js";

  let { ssrCount, cache }: SsrMasonryProps = $props();
</script>

<VMasonry
  data={range(1000)}
  lanes={4}
  itemSize={100}
  {ssrCount}
  {cache}
  style="width: 400px; height: 400px;"
>
  {#snippet children(item: number)}
    <div style="height: 100px;">item-{item}</div>
  {/snippet}
</VMasonry>
