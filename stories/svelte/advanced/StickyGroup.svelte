<script lang="ts">
  import { VList, type VListHandle } from "../../../src/svelte";

  const sizes = [20, 40, 180, 77];
  const stickyIndexes = [0, 100, 200, 300, 400, 500, 600, 700, 800, 900];
  const data = Array.from({ length: 1000 }).map((_, i) => sizes[i % 4]!);

  let ref: VListHandle;
  let activeIndex = $state(0);

  const itemProps = ({ index }: { index: number }) => {
    if (index % 100 !== 0) return undefined;
    return {
      style: {
        "z-index": "1",
        ...(activeIndex === index ? { position: "sticky", top: "0" } : {}),
      },
    };
  };

  const handleScroll = (offset: number) => {
    if (!ref) return;
    const start = ref.findItemIndex(offset);
    activeIndex = [...stickyIndexes].reverse().find((i) => start >= i)!;
  };
</script>

<VList
  bind:this={ref}
  {data}
  style="height: 100vh;"
  {itemProps}
  keepMounted={[activeIndex]}
  onscroll={handleScroll}
>
  {#snippet children(item, index)}
    <div
      style="
        height: {item}px;
        background: {index % 100 === 0 ? 'yellow' : 'white'};
        border-bottom: solid 1px #ccc;
      "
    >
      {index}
    </div>
  {/snippet}
</VList>
