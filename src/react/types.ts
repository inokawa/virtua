import type { ComponentType, CSSProperties, LegacyRef, ReactNode } from "react";

export type ViewportComponentAttributes = Omit<
  React.HTMLAttributes<HTMLDivElement>,
  "children" | "onScroll" | "onScrollEnd" | "onResize"
>;

export interface CustomContainerComponentProps {
  style: CSSProperties;
  children: ReactNode;
  /**
   * only available after React 19
   */
  ref?: LegacyRef<any>;
}

export type CustomContainerComponent =
  ComponentType<CustomContainerComponentProps>;

/**
 * Props of customized item component for {@link Virtualizer} or {@link WindowVirtualizer}.
 */
export interface CustomItemComponentProps {
  style: CSSProperties;
  index: number;
  children: ReactNode;
  /**
   * only available after React 19
   */
  ref?: LegacyRef<any>;
}

export type CustomItemComponent = ComponentType<CustomItemComponentProps>;
