import {
  CSSProperties,
  ReactElement,
  ReactNode,
  forwardRef,
  useMemo,
} from "react";

export type WindowComponentAttributes = Pick<
  React.HTMLAttributes<HTMLElement>,
  "className" | "style" | "id" | "role" | "tabIndex"
> &
  React.AriaAttributes;

/**
 * Props of customized scrollable component.
 */
export interface CustomWindowComponentProps {
  /**
   * Renderable item elements.
   */
  children: ReactNode;
  /**
   * Total height of items. It's undefined if component is not vertically scrollable.
   */
  height: number | undefined;
  /**
   * Total width of items. It's undefined if component is not horizontally scrollable.
   */
  width: number | undefined;
  /**
   * Currently component is scrolling or not.
   */
  scrolling: boolean;
  /**
   * Attributes that should be passed to the scrollable element.
   */
  attrs: WindowComponentAttributes;
}

export const DefaultWindow = forwardRef<any, CustomWindowComponentProps>(
  ({ children, width, height, scrolling, attrs }, ref): ReactElement => {
    return (
      <div ref={ref} {...attrs}>
        <div
          style={useMemo((): CSSProperties => {
            return {
              position: "relative",
              visibility: "hidden",
              width: width ?? "100%",
              height: height ?? "100%",
              pointerEvents: scrolling ? "none" : "auto",
            };
          }, [width, height, scrolling])}
        >
          {children}
        </div>
      </div>
    );
  }
);

export type CustomWindowComponent = typeof DefaultWindow;
