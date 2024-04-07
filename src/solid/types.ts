import { type JSX } from "solid-js";

export type ViewportComponentAttributes = Pick<
  JSX.HTMLAttributes<HTMLElement>,
  "class" | "id" | "role" | "tabIndex" | "onKeyDown"
> &
  JSX.AriaAttributes & { style?: JSX.CSSProperties };
