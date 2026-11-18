/**
 * @jsxImportSource @solidjs/web
 */
import { omit } from "solid-js";
import { type JSX } from "@solidjs/web";
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
  extends
    Pick<
      VirtualizerProps<T>,
      | "ref"
      | "data"
      | "children"
      | "bufferSize"
      | "itemSize"
      | "ssrCount"
      | "shift"
      | "horizontal"
      | "cache"
      | "item"
      | "onScroll"
      | "onScrollEnd"
      | "onResize"
      | "keepMounted"
    >,
    ViewportComponentAttributes {}

/**
 * Virtualized list component. See {@link VListProps} and {@link VListHandle}.
 */
export const VList = <T,>(props: VListProps<T>): JSX.Element => {
  const others = omit(
    props,
    "ref",
    "data",
    "children",
    "bufferSize",
    "itemSize",
    "ssrCount",
    "shift",
    "horizontal",
    "keepMounted",
    "cache",
    "item",
    "onScroll",
    "onScrollEnd",
    "onResize",
    "style",
  );

  return (
    <div
      {...others}
      style={{
        display: "block",
        [props.horizontal ? "overflow-x" : "overflow-y"]: "auto",
        contain: "strict",
        width: "100%",
        height: "100%",
        ...props.style,
      }}
    >
      <Virtualizer
        ref={props.ref}
        data={props.data}
        bufferSize={props.bufferSize}
        itemSize={props.itemSize}
        ssrCount={props.ssrCount}
        shift={props.shift}
        horizontal={props.horizontal}
        keepMounted={props.keepMounted}
        cache={props.cache}
        item={props.item}
        onScroll={props.onScroll}
        onScrollEnd={props.onScrollEnd}
        onResize={props.onResize}
      >
        {props.children}
      </Virtualizer>
    </div>
  );
};
