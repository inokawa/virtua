import {
  memo,
  useRef,
  useMemo,
  CSSProperties,
  ReactElement,
  ReactNode,
} from "react";
import { useIsomorphicLayoutEffect } from "./useIsomorphicLayoutEffect";
import { ListResizer } from "../core/resizer";
import { refKey } from "./utils";
import { isRTLDocument } from "../core/environment";

/**
 * Props of customized item component for {@link VList}.
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
  _resizer: ListResizer;
  _index: number;
  _offset: number;
  _hide: boolean;
  _element: "div" | CustomItemComponent;
  _isHorizontal: boolean;
};

export const ListItem = memo(
  ({
    _children: children,
    _resizer: resizer,
    _index: index,
    _offset: offset,
    _hide: hide,
    _element: Element,
    _isHorizontal: isHorizontal,
  }: ListItemProps): ReactElement => {
    const ref = useRef<HTMLDivElement>(null);

    // The index may be changed if elements are inserted to or removed from the start of props.children
    useIsomorphicLayoutEffect(
      () => resizer._observeItem(ref[refKey]!, index),
      [index]
    );

    const style = useMemo((): CSSProperties => {
      const style: CSSProperties = {
        margin: 0,
        padding: 0,
        position: "absolute",
        [isHorizontal ? "height" : "width"]: "100%",
        [isHorizontal ? "top" : "left"]: 0,
        [isHorizontal ? (isRTLDocument() ? "right" : "left") : "top"]: offset,
        visibility: hide ? "hidden" : "visible",
      };
      if (isHorizontal) {
        style.display = "flex";
      }
      return style;
    }, [offset, hide]);

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
