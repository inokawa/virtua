/**
 * @jsxImportSource solid-js
 */
import { type ItemResizeObserver } from "../core/index.js";
import {
  type Component,
  type JSX,
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
  props = mergeProps<[Partial<ListItemProps>, ListItemProps]>(
    { _as: "div" },
    props,
  );

  // The index may be changed if elements are inserted to or removed from the start of props.children
  createEffect(() => {
    if (!elementRef) return;
    onCleanup(props._resizer(elementRef, props._index));
  });

  const style = createMemo(() => {
    const isHorizontal = props._isHorizontal;
    const style: JSX.CSSProperties = {
      contain: "layout style",
      position: "absolute",
      [isHorizontal ? "height" : "width"]: "100%",
      [isHorizontal ? "top" : "left"]: "0px",
      [isHorizontal ? "left" : "top"]: props._offset + "px",
      visibility: props._hide ? "hidden" : undefined,
    };
    if (isHorizontal) {
      style.display = "inline-flex";
    }
    return style;
  });

  return (
    <Dynamic
      component={props._as}
      index={props._index}
      ref={elementRef}
      style={style()}
    >
      {props._children}
    </Dynamic>
  );
};
