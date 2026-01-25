import { type ReactElement, type Ref, forwardRef } from "react";
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
export interface VListProps<T = unknown>
  extends
    Pick<
      VirtualizerProps<T>,
      | "children"
      | "data"
      | "bufferSize"
      | "itemSize"
      | "shift"
      | "horizontal"
      | "cache"
      | "ssrCount"
      | "item"
      | "onScroll"
      | "onScrollEnd"
      | "keepMounted"
    >,
    ViewportComponentAttributes {}

/**
 * Virtualized list component. See {@link VListProps} and {@link VListHandle}.
 */
export const VList = forwardRef<VListHandle, VListProps>(
  (
    {
      children,
      data,
      bufferSize,
      itemSize,
      shift,
      horizontal,
      keepMounted,
      cache,
      ssrCount,
      item,
      onScroll,
      onScrollEnd,
      style,
      ...attrs
    },
    ref,
  ): ReactElement => {
    return (
      <div
        {...attrs}
        style={{
          display: horizontal ? "inline-block" : "block",
          [horizontal ? "overflowX" : "overflowY"]: "auto",
          contain: "strict",
          width: "100%",
          height: "100%",
          ...style,
        }}
      >
        <Virtualizer
          ref={ref}
          data={data}
          bufferSize={bufferSize}
          itemSize={itemSize}
          shift={shift}
          horizontal={horizontal}
          keepMounted={keepMounted}
          cache={cache}
          ssrCount={ssrCount}
          item={item}
          onScroll={onScroll}
          onScrollEnd={onScrollEnd}
        >
          {children}
        </Virtualizer>
      </div>
    );
  },
) as <T>(props: VListProps<T> & { ref?: Ref<VListHandle> }) => ReactElement;
