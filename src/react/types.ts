import { CSSProperties, ReactNode } from "react";

export type ViewportComponentAttributes = Pick<
  React.HTMLAttributes<HTMLElement>,
  "className" | "style" | "id" | "role" | "tabIndex" | "onKeyDown" | "onWheel"
> &
  React.AriaAttributes;

export interface CustomContainerComponentProps {
  style: CSSProperties;
  children: ReactNode;
}

export type CustomContainerComponent = React.ForwardRefExoticComponent<
  React.PropsWithoutRef<CustomContainerComponentProps> &
    React.RefAttributes<any>
>;

/**
 * Props of customized item component for {@link Virtualizer} or {@link WindowVirtualizer}.
 */
export interface CustomItemComponentProps {
  style: CSSProperties;
  index: number;
  children: ReactNode;
}

export type CustomItemComponent = React.ForwardRefExoticComponent<
  React.PropsWithoutRef<CustomItemComponentProps> & React.RefAttributes<any>
>;
