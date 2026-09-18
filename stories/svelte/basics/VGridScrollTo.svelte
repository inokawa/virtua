<script lang="ts">
  import { VGrid } from "../../../src/svelte";

  const LENGTH = 1000;
  let ref: VGrid | undefined = $state();
  let rowIndex = $state(567);
  let colIndex = $state(567);
  let vertical = $state(1000);
  let horizontal = $state(1000);
</script>

<div style="height: 100vh; display: flex; flex-direction: column;">
  <div>
    <label>
      col
      <input type="number" bind:value={colIndex} />
    </label>
    <label>
      row
      <input type="number" bind:value={rowIndex} />
    </label>
    <button
      onclick={() => {
        ref?.scrollToIndex({ rowIndex, colIndex });
      }}>scroll to index</button
    >
    <button
      onclick={() => {
        colIndex = Math.floor(LENGTH * Math.random());
        rowIndex = Math.floor(LENGTH * Math.random());
      }}>randomize</button
    >
  </div>
  <div>
    <label>
      x
      <input type="number" bind:value={horizontal} />
    </label>
    <label>
      y
      <input type="number" bind:value={vertical} />
    </label>
    <button
      onclick={() => {
        ref?.scrollTo({ vertical, horizontal });
      }}>scroll to offset</button
    >
    <button
      onclick={() => {
        ref?.scrollBy({ vertical, horizontal });
      }}>scroll by offset</button
    >
  </div>
  <VGrid
    bind:this={ref}
    rows={LENGTH}
    rowHeight={80}
    cols={LENGTH}
    colWidth={160}
    style="flex: 1; box-sizing: border-box; border: solid 1px gray; background: white;"
  >
    {#snippet children(r, c)}
      <div
        style="padding: 4px; border-right: solid 1px gray; border-bottom: solid 1px gray;"
      >
        {r} / {c}
      </div>
    {/snippet}
  </VGrid>
</div>
