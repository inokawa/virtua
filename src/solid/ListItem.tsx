/**
 * @jsxImportSource solid-js
 */
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
import { type Driver } from "../core/index.js";

interface ListItemProps {
  _children: JSX.Element;
  _resizer: Driver["$observeItem"];
  _index: number;
  _offset: number;
  _hide: boolean;
  _isHorizontal: boolean;
  _isSSR?: boolean;
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
    const hide = props._hide;
    const isSSR = props._isSSR;
    const style: JSX.CSSProperties = {
      contain: "layout style",
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
