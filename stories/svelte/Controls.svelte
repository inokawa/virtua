<script lang="ts">
  import { VList } from "../../src/svelte";

  const sizes = [20, 40, 180, 77];
  const createItem = (i: number) => ({ id: i, size: sizes[i % 4] + "px" });

  let ref: VList<{ id: number; size: string }>;
  let data = Array.from({ length: 1000 }).map((_, i) => createItem(i));
  let scrollOffset = 0;
  let scrolling = false;
  let scrollTarget = 567;
</script>

<div style="height: 100%; display: flex; flex-direction: column;">
  <div>offset: {scrollOffset}</div>
  <div>scrolling: {scrolling}</div>
  <div>
    <input
      type="number"
      bind:value={scrollTarget}
      on:input={(e) => {
        scrollTarget = Number(e.target.value);
      }}
    />
    <button
      on:click={() => {
        ref.scrollToIndex(scrollTarget);
      }}>scrollToIndex</button
    >
  </div>
  <div>
    <button
      on:click={() => {
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
    let:item
    getKey={(d) => d.id}
    on:scroll={(event) => {
      scrollOffset = event.detail;
      scrolling = true;
    }}
    on:scrollEnd={() => {
      scrolling = false;
    }}
  >
    <div
      style={`
      height: ${item.size};
      background: white;
      border-bottom: solid 1px #ccc;
    `}
    >
      {item.id}
    </div>
  </VList>
</div>
