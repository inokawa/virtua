<script module lang="ts">
  import { render as renderToString } from "svelte/server";
  import Self from "./svelte.svelte";
  import type { SsrProps } from "../browser/index.js";

  export const render = (props: SsrProps) =>
    renderToString(Self, { props }).body;
</script>

<script lang="ts">
  import { VList } from "../../src/svelte/index.js";

  let { ssrCount, itemSize, horizontal = false }: SsrProps = $props();
</script>

<VList
  data={Array.from({ length: 1000 }, (_, i) => i)}
  {ssrCount}
  {itemSize}
  {horizontal}
  style="width: 400px; height: 400px;"
>
  {#snippet children(item: number)}
    <div>item-{item}</div>
  {/snippet}
</VList>
