<script lang="ts">
  import { VList } from "../../src/svelte";

  const sizes = [40, 180, 77];
  const createItem = (i: number) => ({ id: i, size: sizes[i % 4] + "px" });

  const data = Array.from({ length: 1000 }).map((_, i) => createItem(i));
</script>

<div style="padding: 10px;">
  <VList
    {data}
    style={`width: 100%; height: 200px;`}
    getKey={(d) => d.id}
    horizontal
  >
    {#snippet children({ item })}
      <div
        style={`
          width: ${item.size};
          background: white;
          border-right: solid 1px #ccc;
        `}
      >
        {item.id}
      </div>
    {/snippet}
  </VList>
</div>
