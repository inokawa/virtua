export type ViewportComponentAttributes = Pick<
  React.HTMLAttributes<HTMLElement>,
  "className" | "style" | "id" | "role" | "tabIndex" | "onKeyDown" | "onWheel"
> &
  React.AriaAttributes;

export type CustomContainerComponentProps<R extends React.ElementType = 'div'> = React.ComponentPropsWithRef<R>

export type CustomContainerComponent<R extends React.ElementType = 'div'> = React.FunctionComponent<CustomContainerComponentProps<R>>;

/**
 * Props of customized item component for {@link Virtualizer} or {@link WindowVirtualizer}.
 */
export type CustomItemComponentProps<R extends React.ElementType = 'div'> = React.ComponentPropsWithRef<R> & React.PropsWithChildren<{
  index: number;
}>;

export type CustomItemComponent<R extends React.ElementType = 'div'> = React.FunctionComponent<CustomItemComponentProps<R>>;
