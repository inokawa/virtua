import {
  CSSProperties,
  ReactElement,
  ReactNode,
  forwardRef,
  useMemo,
} from "react";

export type ViewportComponentAttributes = Pick<
  React.HTMLAttributes<HTMLElement>,
  "className" | "style" | "id" | "role" | "tabIndex" | "onKeyDown"
> &
  React.AriaAttributes;

/**
 * Props of customized scrollable component.
 */
export interface CustomViewportComponentProps {
  /**
   * Renderable item elements.
   */
  children: ReactNode;
  /**
   * Attributes that should be passed to the scrollable element.
   */
  attrs: ViewportComponentAttributes;
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
}

export const Viewport = forwardRef<any, CustomViewportComponentProps>(
  ({ children, attrs, width, height, scrolling }, ref): ReactElement => {
    return (
      <div ref={ref} {...attrs}>
        <div
          style={useMemo((): CSSProperties => {
            return {
              contain: "content",
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

export type CustomViewportComponent = typeof Viewport;
