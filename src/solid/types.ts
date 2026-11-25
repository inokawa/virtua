import type { ParentComponent, Ref } from "solid-js";
import type { JSX } from "@solidjs/web";

export type ViewportComponentAttributes = Omit<
  JSX.HTMLAttributes<HTMLDivElement>,
  "ref" | "children" | "style" | "onScroll" | "onScrollEnd" | "onResize"
> & { style?: JSX.CSSProperties };

export interface CustomContainerComponentProps {
  style: JSX.CSSProperties;
  children: JSX.Element;
  ref?: Ref<HTMLElement>;
}

export type CustomContainerComponent =
  ParentComponent<CustomContainerComponentProps>;

/**
 * Props of customized item component for {@link Virtualizer} or {@link WindowVirtualizer}.
 */
export interface CustomItemComponentProps {
  style: JSX.CSSProperties;
  index: number;
  children: JSX.Element;
  ref?: Ref<HTMLElement>;
}

export type CustomItemComponent = ParentComponent<CustomItemComponentProps>;
