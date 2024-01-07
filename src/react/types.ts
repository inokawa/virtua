import { CSSProperties, ReactNode } from "react";

export type ViewportComponentAttributes = Pick<
  React.HTMLAttributes<HTMLElement>,
  "className" | "style" | "id" | "role" | "tabIndex" | "onKeyDown"
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
