<script lang="ts">
  import { VList } from "../../src/svelte";

  const sizes = [20, 40, 180, 77];

  const data = Array.from({ length: 1000 }).map((_, i) => sizes[i % 4]!);
</script>

<VList {data} style="height: 100vh;" getKey={(_, i) => i}>
  {#snippet children(item, index)}
    <div
      style="
        height: {item}px;
        background: white;
        border-bottom: solid 1px #ccc;
      "
    >
      {index}
    </div>
  {/snippet}
</VList>
