/**
 * @jsxImportSource solid-js
 */
import { type JSX, splitProps } from "solid-js";
import type { ViewportComponentAttributes } from "./types";
import {
  Virtualizer,
  type VirtualizerHandle,
  type VirtualizerProps,
} from "./Virtualizer";

/**
 * Methods of {@link VList}.
 */
export interface VListHandle extends VirtualizerHandle {}

/**
 * Props of {@link VList}.
 */
export interface VListProps<T>
  extends Pick<
      VirtualizerProps<T>,
      | "ref"
      | "data"
      | "children"
      | "overscan"
      | "itemSize"
      | "shift"
      | "horizontal"
      | "onScroll"
      | "onScrollEnd"
      | "onRangeChange"
    >,
    ViewportComponentAttributes {}

/**
 * Virtualized list component. See {@link VListProps} and {@link VListHandle}.
 */
export const VList = <T,>(props: VListProps<T>): JSX.Element => {
  const [local, ...attrs] = splitProps(props, [
    "ref",
    "data",
    "children",
    "overscan",
    "itemSize",
    "shift",
    "horizontal",
    "onScroll",
    "onScrollEnd",
    "onRangeChange",
    "style",
  ]);

  return (
    <div
      {...attrs}
      style={{
        display: local.horizontal ? "inline-block" : "block",
        [local.horizontal ? "overflow-x" : "overflow-y"]: "auto",
        contain: "strict",
        width: "100%",
        height: "100%",
        ...local.style,
      }}
    >
      <Virtualizer
        ref={local.ref}
        data={local.data}
        overscan={local.overscan}
        itemSize={local.itemSize}
        shift={local.shift}
        horizontal={local.horizontal}
        onScroll={local.onScroll}
        onScrollEnd={local.onScrollEnd}
        onRangeChange={local.onRangeChange}
      >
        {local.children}
      </Virtualizer>
    </div>
  );
};
