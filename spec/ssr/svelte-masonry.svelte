<script lang="ts">
  import { range } from "../utils.js";
  import { VMasonry } from "../../src/svelte/index.js";
</script>

<VMasonry lanes={2} data={range(1000)} style="height: 400px;">
  {#snippet children(item: number)}
    <div>item-{item}</div>
  {/snippet}
</VMasonry>
