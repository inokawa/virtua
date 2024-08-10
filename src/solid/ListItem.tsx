/**
 * @jsxImportSource solid-js
 */
import { ItemResizeObserver } from "../core/resizer";
import { isRTLDocument } from "../core/environment";
import {
  Component,
  JSX,
  createEffect,
  createMemo,
  mergeProps,
  onCleanup,
  type ValidComponent,
} from "solid-js";
import { Dynamic } from "solid-js/web";

interface ListItemProps {
  _children: JSX.Element;
  _resizer: ItemResizeObserver;
  _index: number;
  _offset: number;
  _hide: boolean;
  _isHorizontal: boolean;
  _as?: ValidComponent;
}

/**
 * @internal
 */
export const ListItem: Component<ListItemProps> = (props) => {
  let elementRef: HTMLDivElement | undefined;
  const mergedProps = mergeProps({ _as: "div" }, props);

  // The index may be changed if elements are inserted to or removed from the start of mergedProps.children
  createEffect(() => {
    if (!elementRef) return;
    onCleanup(mergedProps._resizer(elementRef, mergedProps._index));
  });

  const style = createMemo(() => {
    const isHorizontal = mergedProps._isHorizontal;
    const style: JSX.CSSProperties = {
      margin: 0,
      padding: 0,
      position: "absolute",
      [isHorizontal ? "height" : "width"]: "100%",
      [isHorizontal ? "top" : "left"]: "0px",
      [isHorizontal ? (isRTLDocument() ? "right" : "left") : "top"]:
        mergedProps._offset + "px",
      visibility: mergedProps._hide ? "hidden" : "visible",
    };
    if (isHorizontal) {
      style.display = "flex";
    }
    return style;
  });

  return (
    <Dynamic component={mergedProps._as} ref={elementRef} style={style()}>
      {mergedProps._children}
    </Dynamic>
  );
};
