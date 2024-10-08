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
import { CustomItemComponent } from "./types";
import { NULL } from "../core/utils";

interface ListItemProps {
  _children: ReactNode;
  _resizer: ItemResizeObserver;
  _index: number;
  _offset: number;
  _hide: boolean;
  _as: "div" | CustomItemComponent;
  _isHorizontal: boolean;
  _isSSR: boolean | undefined;
}

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
    _as: Element,
    _isHorizontal: isHorizontal,
    _isSSR: isSSR,
  }: ListItemProps): ReactElement => {
    const ref = useRef<HTMLDivElement>(NULL);

    // The index may be changed if elements are inserted to or removed from the start of props.children
    useIsomorphicLayoutEffect(() => resizer(ref[refKey]!, index), [index]);

    const style = useMemo((): CSSProperties => {
      const style: CSSProperties = {
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
    }, [offset, hide, isSSR, isHorizontal]);

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
