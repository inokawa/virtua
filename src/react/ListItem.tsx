import {
  memo,
  useRef,
  useMemo,
  CSSProperties,
  ReactElement,
  ReactNode,
} from "react";
import { useIsomorphicLayoutEffect } from "./useIsomorphicLayoutEffect";
import { ItemResizeObserver } from "../core/resizer";
import { refKey } from "./utils";
import { isRTLDocument } from "../core/environment";

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

type ListItemProps = {
  _children: ReactNode;
  _resizer: ItemResizeObserver;
  _index: number;
  _offset: number;
  _hide: boolean;
  _element: "div" | CustomItemComponent;
  _isHorizontal: boolean;
  _isSSR: boolean | undefined;
};

/**
 * @internal
 */
export const ListItem = memo(
  ({
    _children: children,
    _resizer: resizer,
    _index: index,
    _offset: offset,
    _hide: hide,
    _element: Element,
    _isHorizontal: isHorizontal,
    _isSSR: isSSR,
  }: ListItemProps): ReactElement => {
    const ref = useRef<HTMLDivElement>(null);

    // The index may be changed if elements are inserted to or removed from the start of props.children
    useIsomorphicLayoutEffect(() => resizer(ref[refKey]!, index), [index]);

    const style = useMemo((): CSSProperties => {
      const style: CSSProperties = {
        margin: 0,
        padding: 0,
        position: hide && isSSR ? undefined : "absolute",
        [isHorizontal ? "height" : "width"]: "100%",
        [isHorizontal ? "top" : "left"]: 0,
        [isHorizontal ? (isRTLDocument() ? "right" : "left") : "top"]: offset,
        visibility: !hide || isSSR ? "visible" : "hidden",
      };
      if (isHorizontal) {
        style.display = "flex";
      }
      return style;
    }, [offset, hide, isSSR]);

    if (typeof Element === "string") {
      return (
        <Element ref={ref} style={style}>
          {children}
        </Element>
      );
    } else {
      return (
        <Element ref={ref} style={style} index={index}>
          {children}
        </Element>
      );
    }
  }
);
