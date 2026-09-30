import type { JSX, ParentComponent } from "solid-js";

export type ViewportComponentAttributes = Omit<
  JSX.HTMLAttributes<HTMLDivElement>,
  "ref" | "children" | "style" | "onScroll" | "onScrollEnd"
> & { style?: JSX.CSSProperties };

export interface CustomContainerComponentProps {
  style: JSX.CSSProperties;
  children: JSX.Element;
  ref?: any | (() => any);
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
  ref?: any | (() => any);
}

export type CustomItemComponent = ParentComponent<CustomItemComponentProps>;
