import type { OctaneNode } from "octane";
import type { Octane, OctaneElement } from "octane/jsx-runtime";

type HTMLElementAttributes = Octane.HTMLAttributes<HTMLElement>;
type AriaAttributeName = Extract<keyof HTMLElementAttributes, `aria-${string}`>;

export type ViewportComponentAttributes = Pick<
  HTMLElementAttributes,
  | "className"
  | "id"
  | "role"
  | "tabIndex"
  | "onKeyDown"
  | "onWheel"
  | AriaAttributeName
> & { style?: CSSProperties };

export type CSSProperties = Exclude<
  Octane.JSX.IntrinsicElements["div"]["style"],
  string | undefined
>;

export interface CustomContainerComponentProps {
  style: CSSProperties;
  children: OctaneNode;
  ref?: Octane.Ref<any>;
}

export type CustomContainerComponent = (
  props: CustomContainerComponentProps,
) => OctaneElement;

/**
 * Props of customized item component for {@link Virtualizer} or {@link WindowVirtualizer}.
 */
export interface CustomItemComponentProps {
  style: CSSProperties;
  index: number;
  children: OctaneNode;
  ref?: Octane.Ref<any>;
}

export type CustomItemComponent = (
  props: CustomItemComponentProps,
) => OctaneElement;
