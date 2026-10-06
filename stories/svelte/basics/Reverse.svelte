<script lang="ts">
  import { Virtualizer, type VirtualizerHandle } from "../../../src/svelte";
  import { onMount } from "svelte";

  const sizes = [20, 40, 80, 77];

  const data = Array.from({ length: 1000 }).map((_, i) => sizes[i % 4]!);

  let ref: VirtualizerHandle;

  onMount(() => {
    ref.scrollToIndex(999);
  });
</script>

<div
  style={`
  height: 100vh;
  overflow-y: auto;
  /* opt out browser's scroll anchoring on header/footer because it will conflict with scroll anchoring of virtualizer */
  overflow-anchor: none;
  /* flex style for spacer */
  display: flex;
  flex-direction: column;
`}
>
  <!-- spacer to align virtualizer to the bottom when all items are visible in the viewport -->
  <div style="flex-grow: 1;"></div>
  <Virtualizer bind:this={ref} {data} getKey={(_, i) => i}>
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
  </Virtualizer>
</div>
