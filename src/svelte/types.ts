import type { HTMLAttributes } from "svelte/elements";

export type ViewportComponentAttributes = Omit<
  HTMLAttributes<HTMLDivElement>,
  "children" | "onscroll" | "onscrollend"
>;
