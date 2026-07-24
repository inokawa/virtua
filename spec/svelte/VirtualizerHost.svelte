<script lang="ts" generics="T">
  import Virtualizer from "../../src/svelte/Virtualizer.svelte";
  import type { VirtualizerProps } from "../../src/svelte/Virtualizer.type.js";

  // Virtualizer observes its parent element as the scrollable container, so it
  // has to be rendered inside a scrollable element.
  let { children, ...rest }: VirtualizerProps<T> = $props();
</script>

<div style="overflow: auto;">
  <Virtualizer {...rest} {children} />
</div>
