/**
 * @jsxImportSource solid-js
 */
import { JSX } from "solid-js";
import { ViewportComponentAttributes } from "./types";
import {
  Virtualizer,
  VirtualizerHandle,
  VirtualizerProps,
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
      | "cache"
      | "onScroll"
      | "onScrollEnd"
    >,
    ViewportComponentAttributes {
  /**
   * If true, items are aligned to the end of the list when total size of items are smaller than viewport size. It's useful for chat like app.
   */
  reverse?: boolean;
}

/**
 * Virtualized list component. See {@link VListProps} and {@link VListHandle}.
 */
export const VList = <T,>(props: VListProps<T>): JSX.Element => {
  const {
    ref,
    data,
    children,
    overscan,
    itemSize,
    shift,
    horizontal,
    reverse,
    cache,
    onScroll,
    onScrollEnd,
    style,
    ...attrs
  } = props;

  let scrollRef!: HTMLDivElement;
  const shouldReverse = reverse && !horizontal;

  let element = (
      <Virtualizer
          ref={props.ref}
          scrollRef={shouldReverse ? scrollRef : undefined}
          data={props.data}
          overscan={props.overscan}
          itemSize={props.itemSize}
          shift={props.shift}
          horizontal={horizontal}
          cache={cache}
          onScroll={props.onScroll}
          onScrollEnd={props.onScrollEnd}
      >
          {props.children}
      </Virtualizer>
  );

  if (shouldReverse) {
    element = (
      <div
        style={{
          visibility: "hidden", // TODO replace with other optimization methods
          display: "flex",
          "flex-direction": "column",
          "justify-content": "flex-end",
          "min-height": "100%",
        }}
      >
        {element}
      </div>
    );
  }

  return (
    <div
      ref={scrollRef}
      {...attrs}
      style={{
        display: horizontal ? "inline-block" : "block",
        [horizontal ? "overflow-x" : "overflow-y"]: "auto",
        contain: "strict",
        width: "100%",
        height: "100%",
        ...props.style,
      }}
    >
      {element}
    </div>
 );
};
