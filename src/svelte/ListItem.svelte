<script lang="ts">
  import { isRTLDocument, type ItemResizeObserver } from "./core";
  import { effect, styleToString } from "./utils";

  export let index: number;
  export let offset: number;
  export let hide: boolean;
  export let horizontal: boolean;
  export let resizer: ItemResizeObserver;

  let elementRef: HTMLDivElement;

  // The index may be changed if elements are inserted to or removed from the start of props.children
  let prevIndex: number | undefined;
  effect(() => {
    if (prevIndex === index) return;
    return resizer(elementRef, (prevIndex = index));
  });

  let style: string;
  $: {
    const _style: Record<string, string> = {
      margin: "0px",
      padding: "0px",
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

    style = styleToString(_style);
  }
</script>

<div bind:this={elementRef} {style}>
  <slot />
</div>
