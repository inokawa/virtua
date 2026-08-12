import {
  memo,
  useMemo,
  useRef,
  type OctaneNode,
} from "octane";
import type { OctaneElement } from "octane/jsx-runtime";
import type { ItemResizeObserver } from "../core/index.js";
import { useIsomorphicLayoutEffect } from "./useIsomorphicLayoutEffect.js";
import { refKey } from "./utils.js";
import type { CSSProperties, CustomItemComponent } from "./types.js";

interface ListItemProps {
  _children: OctaneNode;
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
export const ListItem = /*#__PURE__*/ memo(
  ({
    _children: children,
    _resizer: resizer,
    _index: index,
    _offset: offset,
    _hide: hide,
    _as: Element,
    _isHorizontal: isHorizontal,
    _isSSR: isSSR,
  }: ListItemProps): OctaneElement => {
    const ref = useRef<HTMLDivElement | null>(null);

    // The index changes when elements are inserted into or removed from the start.
    useIsomorphicLayoutEffect(() => resizer(ref[refKey]!, index), [index]);

    const style = useMemo((): CSSProperties => {
      const style: CSSProperties = {
        contain: "layout style",
        position: hide && isSSR ? undefined : "absolute",
        [isHorizontal ? "height" : "width"]: "100%",
        [isHorizontal ? "top" : "left"]: 0,
        [isHorizontal ? "left" : "top"]: offset,
        visibility: !hide || isSSR ? undefined : "hidden",
      };
      if (isHorizontal) {
        style.display = "inline-flex";
      }
      return style;
    }, [offset, hide, isSSR, isHorizontal]);

    if (typeof Element === "string") {
      return (
        <Element ref={ref} style={style}>
          {children}
        </Element>
      );
    }
    return (
      <Element ref={ref} style={style} index={index}>
        {children}
      </Element>
    );
  },
);
