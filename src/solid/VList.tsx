/**
 * @jsxImportSource solid-js
 */
import { type JSX, splitProps } from "solid-js";
import { type ViewportComponentAttributes } from "./types.js";
import {
  Virtualizer,
  type VirtualizerHandle,
  type VirtualizerProps,
} from "./Virtualizer.js";

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
      | "bufferSize"
      | "itemSize"
      | "shift"
      | "horizontal"
      | "cache"
      | "item"
      | "onScroll"
      | "onScrollEnd"
      | "keepMounted"
    >,
    ViewportComponentAttributes {}

/**
 * Virtualized list component. See {@link VListProps} and {@link VListHandle}.
 */
export const VList = <T,>(props: VListProps<T>): JSX.Element => {
  const [local, others] = splitProps(props, [
    "ref",
    "data",
    "children",
    "bufferSize",
    "itemSize",
    "shift",
    "horizontal",
    "keepMounted",
    "cache",
    "item",
    "onScroll",
    "onScrollEnd",
    "style",
  ]);

  return (
    <div
      {...others}
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
        bufferSize={local.bufferSize}
        itemSize={local.itemSize}
        shift={local.shift}
        horizontal={local.horizontal}
        keepMounted={local.keepMounted}
        cache={local.cache}
        item={local.item}
        onScroll={local.onScroll}
        onScrollEnd={local.onScrollEnd}
      >
        {local.children}
      </Virtualizer>
    </div>
  );
};
