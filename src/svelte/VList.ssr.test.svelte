<script lang="ts">
  import VList from "./VList.svelte";

  interface Props {
    ssrCount: number;
    horizontal?: boolean;
    id?: string;
  }

  let { ssrCount, horizontal = false, id }: Props = $props();

  const data = Array.from({ length: 100 }).map((_, i) => i);
</script>

<VList {data} {id} {ssrCount} {horizontal} itemSize={40}>
  {#snippet children(item)}
    <div>
      {item}
    </div>
  {/snippet}
</VList>
