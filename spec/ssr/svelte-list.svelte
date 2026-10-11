<script lang="ts">
  import { range } from "../utils.js";
  import { VList } from "../../src/svelte/index.js";
  import type { SsrProps } from "../browser/index.js";

  let { ssrCount, itemSize, horizontal = false }: SsrProps = $props();
</script>

<VList
  data={range(1000)}
  {ssrCount}
  {itemSize}
  {horizontal}
  style="width: 400px; height: 400px;"
>
  {#snippet children(item: number)}
    <div>item-{item}</div>
  {/snippet}
</VList>
