<script lang="ts" generics="T">
  import { type Snippet } from "svelte";
  import { type Driver } from "../core/index.js";
  import { styleToString } from "./utils.js";

  interface Props {
    children: Snippet<[item: T, index: number]>;
    item: T;
    index: number;
    offset: number;
    crossOffset: string;
    crossSize: string;
    hide: boolean;
    resizer: Driver["$observeItem"];
  }

  let {
    children,
    item,
    index,
    offset,
    crossOffset,
    crossSize,
    hide,
    resizer,
  }: Props = $props();

  let elementRef: HTMLDivElement;

  // The index may be changed if elements are inserted to or removed from the start of data
  $effect(() => {
    return resizer(elementRef, index);
  });

  let style: string = $derived(
    styleToString({
      contain: "layout style",
      position: "absolute",
      top: offset + "px",
      "inset-inline-start": crossOffset,
      width: crossSize,
      visibility: hide ? "hidden" : undefined,
    }),
  );
</script>

<div bind:this={elementRef} {style}>
  {@render children(item, index)}
</div>
