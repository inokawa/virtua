<script lang="ts">
  import { VMasonry } from "../../../src/svelte";

  const heights = [80, 180, 120, 220, 160, 100, 240];
  const colors = [
    "#145ec1",
    "#b52f48",
    "#067d51",
    "#733ea4",
    "#a96506",
    "#057176",
    "#413c9b",
  ];
  const data = Array.from({ length: 1000 }).map((_, i) => i);
</script>

<VMasonry style="height: 100vh;" lanes={3} {data}>
  {#snippet children(i)}
    {@const hash = (i * 2654435761) % 7}
    <div
      style="height: {heights[
        hash
      ]}px; border: solid 1px #ccc; padding: 4px; background: {colors[
        i % colors.length
      ]}; color: white; text-shadow: 0 0 2px rgba(0, 0, 0, 0.6);"
    >
      {i}
    </div>
  {/snippet}
</VMasonry>
