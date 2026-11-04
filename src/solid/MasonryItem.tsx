/**
 * @jsxImportSource solid-js
 */
import { type JSX, createEffect, createMemo, onCleanup } from "solid-js";
import { type Driver } from "../core/index.js";

interface MasonryItemProps {
  _children: JSX.Element;
  _resizer: Driver["$observeItem"];
  _index: number;
  _offset: number;
  _crossOffset: string;
  _crossSize: string;
  _hide: boolean;
}

/**
 * @internal
 */
export const MasonryItem = (props: MasonryItemProps): JSX.Element => {
  let elementRef: HTMLDivElement | undefined;
  // The index may be changed if elements are inserted to or removed from the start of data
  createEffect(() => {
    if (!elementRef) return;
    onCleanup(props._resizer(elementRef, props._index));
  });

  const style = createMemo((): JSX.CSSProperties => ({
    contain: "layout style",
    position: "absolute",
    top: props._offset + "px",
    "inset-inline-start": props._crossOffset,
    width: props._crossSize,
    visibility: props._hide ? "hidden" : undefined,
  }));

  return (
    <div ref={elementRef} style={style()}>
      {props._children}
    </div>
  );
};
