<script lang="ts">
  import { Virtualizer } from "../../../src/svelte";

  const sizes = [20, 40, 180, 77];

  const data = Array.from({ length: 1000 }).map((_, i) => sizes[i % 4]!);

  const outerPadding = 40;
  const innerPadding = 60;
  let scrollRef: HTMLElement = $state();
</script>

<div
  bind:this={scrollRef}
  style={`
  width: 100%;
  height: 100vh;
  overflow-y: auto;
  /* opt out browser's scroll anchoring on header/footer because it will conflict to scroll anchoring of virtualizer */
  overflow-anchor: none;
`}
>
  <div style="background-color: burlywood; padding: {outerPadding}px;">
    <div style="background-color: steelblue; padding: {innerPadding}px;">
      <Virtualizer
        {data}
        getKey={(_, i) => i}
        {scrollRef}
        startMargin={outerPadding + innerPadding}
      >
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
  </div>
</div>
