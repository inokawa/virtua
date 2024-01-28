/**
 * @jsxImportSource solid-js
 */
import { ItemResizeObserver } from "../core/resizer";
import { isRTLDocument } from "../core/environment";
import { Component, JSX, createEffect, createMemo, onCleanup } from "solid-js";

type ListItemProps = {
  _children: JSX.Element;
  _resizer: ItemResizeObserver;
  _index: number;
  _offset: number;
  _hide: boolean;
  _isHorizontal: boolean;
};

/**
 * @internal
 */
export const ListItem: Component<ListItemProps> = (props) => {
  let elementRef: HTMLDivElement | undefined;

  // The index may be changed if elements are inserted to or removed from the start of props.children
  createEffect(() => {
    if (!elementRef) return;
    onCleanup(props._resizer(elementRef, props._index));
  });

  const style = createMemo(() => {
    const isHorizontal = props._isHorizontal;
    const style: JSX.CSSProperties = {
      margin: 0,
      padding: 0,
      position: "absolute",
      [isHorizontal ? "height" : "width"]: "100%",
      [isHorizontal ? "top" : "left"]: "0px",
      [isHorizontal ? (isRTLDocument() ? "right" : "left") : "top"]:
        props._offset + "px",
      visibility: props._hide ? "hidden" : "visible",
    };
    if (isHorizontal) {
      style.display = "flex";
    }
    return style;
  });

  return (
    <div ref={elementRef} style={style()}>
      {props._children}
    </div>
  );
};
