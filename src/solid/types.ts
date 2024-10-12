import { JSX } from "solid-js";

export type ViewportComponentAttributes = Pick<
  JSX.HTMLAttributes<HTMLElement>,
  "class" | "id" | "role" | "tabIndex" | "onKeyDown" | "onWheel"
> &
  JSX.AriaAttributes & { style?: JSX.CSSProperties };
