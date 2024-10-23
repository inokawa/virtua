<script lang="ts">
  import { VList } from "../../src/svelte";

  const sizes = [20, 40, 180, 77];
  const createItem = (i: number) => ({ id: i, size: sizes[i % 4] + "px" });

  let ref: VList<{ id: number; size: string }> = $state();
  let data = $state(Array.from({ length: 1000 }).map((_, i) => createItem(i)));
  let scrollOffset = $state(0);
  let scrolling = $state(false);
  let scrollTarget = $state(567);
</script>

<div style="height: 100%; display: flex; flex-direction: column;">
  <div>offset: {scrollOffset}</div>
  <div>scrolling: {scrolling}</div>
  <div>
    <input
      type="number"
      bind:value={scrollTarget}
      oninput={(e) => {
        scrollTarget = Number(e.currentTarget.value);
      }}
    />
    <button
      onclick={() => {
        ref.scrollToIndex(scrollTarget);
      }}>scrollToIndex</button
    >
  </div>
  <div>
    <button
      onclick={() => {
        data = [
          ...data,
          ...Array.from({ length: 100 }).map((_, i) =>
            createItem(i + data.length)
          ),
        ];
      }}>append</button
    >
  </div>
  <VList
    bind:this={ref}
    {data}
    getKey={(d) => d.id}
    onscroll={(offset) => {
      scrollOffset = offset;
      scrolling = true;
    }}
    onscrollend={() => {
      scrolling = false;
    }}
  >
    {#snippet children({ item })}
      <div
        style={`
          height: ${item.size};
          background: white;
          border-bottom: solid 1px #ccc;
        `}
      >
        {item.id}
      </div>
    {/snippet}
  </VList>
</div>
