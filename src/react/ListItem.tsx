import {
  memo,
  useRef,
  useMemo,
  type CSSProperties,
  type ReactElement,
  type ReactNode,
} from "react";
import { useIsomorphicLayoutEffect } from "./useIsomorphicLayoutEffect.js";
import { type ItemResizeObserver } from "../core/index.js";
import { refKey } from "./utils.js";
import { type CustomItemComponent } from "./types.js";

interface ListItemProps {
  _children: ReactNode;
  _resizer: ItemResizeObserver;
  _index: number;
  _offset: number;
  _hide: boolean;
  _as: "div" | CustomItemComponent;
  _isHorizontal: boolean;
  _isNegative: boolean;
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
    _isNegative: isNegative,
    _isSSR: isSSR,
  }: ListItemProps): ReactElement => {
    const ref = useRef<HTMLDivElement>(null);

    // The index may be changed if elements are inserted to or removed from the start of props.children
    useIsomorphicLayoutEffect(() => resizer(ref[refKey]!, index), [index]);

    const style = useMemo((): CSSProperties => {
      const style: CSSProperties = {
        contain: "layout style",
        position: hide && isSSR ? undefined : "absolute",
        [isHorizontal ? "height" : "width"]: "100%",
        [isHorizontal ? "top" : "left"]: 0,
        [isHorizontal
          ? isNegative
            ? "right"
            : "left"
          : isNegative
          ? "bottom"
          : "top"]: offset,
        visibility: !hide || isSSR ? undefined : "hidden",
      };
      if (isHorizontal) {
        style.display = "inline-flex";
      }
      return style;
    }, [offset, hide, isSSR, isHorizontal, isNegative]);

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
