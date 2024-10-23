<script lang="ts" generics="T">
  import { type Snippet, onDestroy } from "svelte";
  import { isRTLDocument, type ItemResizeObserver } from "./core";
  import { styleToString } from "./utils";

  interface Props {
    children: Snippet<[{ item: T; index: number }]>;
    item: T;
    index: number;
    offset: number;
    hide: boolean;
    horizontal: boolean;
    resizer: ItemResizeObserver;
  }

  let { children, item, index, offset, hide, horizontal, resizer }: Props =
    $props();

  let elementRef: HTMLDivElement;

  let cleanupResizer: (() => void) | undefined;
  // The index may be changed if elements are inserted to or removed from the start of props.children
  let prevIndex: number | undefined;
  $effect(() => {
    if (prevIndex === index) return;
    if (cleanupResizer) cleanupResizer();
    cleanupResizer = resizer(elementRef, (prevIndex = index));
  });
  onDestroy(() => {
    if (cleanupResizer) cleanupResizer();
  });

  let style: string = $derived.by(() => {
    const _style: Record<string, string> = {
      position: "absolute",
      [horizontal ? "height" : "width"]: "100%",
      [horizontal ? "top" : "left"]: "0px",
      [horizontal ? (isRTLDocument() ? "right" : "left") : "top"]:
        offset + "px",
      visibility: hide ? "hidden" : "visible",
    };
    if (horizontal) {
      _style["display"] = "flex";
    }

    return styleToString(_style);
  });
</script>

<div bind:this={elementRef} {style}>
  {@render children({ item, index })}
</div>
