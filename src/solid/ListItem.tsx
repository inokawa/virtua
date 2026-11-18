/**
 * @jsxImportSource @solidjs/web
 */
import { type Component, createEffect, createMemo } from "solid-js";
import { dynamic, type JSX } from "@solidjs/web";
import { type Driver } from "../core/index.js";
import { type CustomItemComponent } from "./types.js";

interface ListItemProps {
  _children: JSX.Element;
  _resizer: Driver["$observeItem"];
  _index: number;
  _offset: number;
  _hide: boolean;
  _isHorizontal: boolean;
  _isSSR?: boolean;
  _as: keyof JSX.IntrinsicElements | CustomItemComponent;
}

/**
 * @internal
 */
export const ListItem: Component<ListItemProps> = (props) => {
  let elementRef!: HTMLDivElement;
  const Item = dynamic(() => props._as);

  // The index may be changed if elements are inserted to or removed from the start of props.children
  createEffect(
    () => props._index,
    (index) => props._resizer(elementRef, index),
  );

  const style = createMemo(() => {
    const isHorizontal = props._isHorizontal;
    const hide = props._hide;
    const isSSR = props._isSSR;
    const style: JSX.CSSProperties = {
      contain: "layout style",
      "overflow-anchor": "none", // https://drafts.csswg.org/css-scroll-anchoring/#candidate-examination
      position: hide && isSSR ? undefined : "absolute",
      [isHorizontal ? "height" : "width"]: "100%",
      [isHorizontal ? "top" : "left"]: "0px",
      [isHorizontal ? "inset-inline-start" : "top"]: props._offset + "px",
      visibility: !hide || isSSR ? undefined : "hidden",
    };
    if (isHorizontal) {
      style.display = "inline-flex";
    }
    return style;
  });

  return (
    <Item
      index={typeof props._as === "string" ? undefined : props._index}
      ref={elementRef}
      style={style()}
    >
      {props._children}
    </Item>
  );
};
