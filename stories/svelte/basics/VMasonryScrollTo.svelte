<script lang="ts">
  import { VMasonry } from "../../../src/svelte";

  const LENGTH = 1000;
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
  const data = Array.from({ length: LENGTH }).map((_, i) => i);
  const aligns = ["start", "center", "end", "nearest"] as const;

  let ref: VMasonry<number> | undefined = $state();
  let scrollIndex = $state(567);
  let align: (typeof aligns)[number] = $state("start");
  let smooth = $state(false);
</script>

<div style="height: 100vh; display: flex; flex-direction: column;">
  <div>
    <input type="number" bind:value={scrollIndex} />
    <button
      onclick={() => {
        ref?.scrollToIndex(scrollIndex, { align, smooth });
      }}>scroll to index</button
    >
    <button
      onclick={() => {
        scrollIndex = Math.round(LENGTH * Math.random());
      }}>randomize</button
    >
    {#each aligns as a (a)}
      <label style="margin-left: 4px;">
        <input type="radio" bind:group={align} value={a} />
        {a}
      </label>
    {/each}
    <label style="margin-left: 4px;">
      <input type="checkbox" bind:checked={smooth} />
      smooth
    </label>
  </div>
  <VMasonry bind:this={ref} style="flex: 1;" lanes={4} {data}>
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
</div>
