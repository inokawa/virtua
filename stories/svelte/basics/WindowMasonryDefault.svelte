<script lang="ts">
  import { WindowMasonry } from "../../../src/svelte";

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

<div style="padding: 100px 24px;">
  <h1>Masonry with window scrolling</h1>
  <p>The page scrolls through the masonry below.</p>
  <WindowMasonry lanes={3} gap={8} {data}>
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
  </WindowMasonry>
  <p>End of the masonry.</p>
</div>
