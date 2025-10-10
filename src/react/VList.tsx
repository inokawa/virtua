import { ReactElement, Ref, forwardRef, useRef } from "react";
import { ViewportComponentAttributes } from "./types.js";
import {
  Virtualizer,
  VirtualizerHandle,
  VirtualizerProps,
} from "./Virtualizer.js";

/**
 * Methods of {@link VList}.
 */
export interface VListHandle extends VirtualizerHandle {}

/**
 * Props of {@link VList}.
 */
export interface VListProps<T = undefined>
  extends Pick<
      VirtualizerProps<T>,
      | "children"
      | "data"
      | "overscan"
      | "itemSize"
      | "shift"
      | "horizontal"
      | "cache"
      | "ssrCount"
      | "item"
      | "onScroll"
      | "onScrollEnd"
      | "keepMounted"
      | "enableRenderCache"
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
export const VList = forwardRef<VListHandle, VListProps<unknown>>(
  (
    {
      children,
      data,
      overscan,
      itemSize,
      shift,
      horizontal,
      keepMounted,
      reverse,
      cache,
      ssrCount,
      item,
      onScroll,
      onScrollEnd,
      style,
      enableRenderCache,
      ...attrs
    },
    ref
  ): ReactElement => {
    const scrollRef = useRef<HTMLDivElement>(null);
    const shouldReverse = reverse && !horizontal;

    let element = (
      <Virtualizer
        ref={ref}
        scrollRef={shouldReverse ? scrollRef : undefined}
        data={data}
        overscan={overscan}
        itemSize={itemSize}
        shift={shift}
        horizontal={horizontal}
        keepMounted={keepMounted}
        cache={cache}
        ssrCount={ssrCount}
        item={item}
        onScroll={onScroll}
        onScrollEnd={onScrollEnd}
        enableRenderCache={enableRenderCache}
      >
        {children}
      </Virtualizer>
    );

    if (shouldReverse) {
      element = (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            minHeight: "100%",
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
          [horizontal ? "overflowX" : "overflowY"]: "auto",
          contain: "strict",
          width: "100%",
          height: "100%",
          ...style,
        }}
      >
        {element}
      </div>
    );
  }
) as <T>(props: VListProps<T> & { ref?: Ref<VListHandle> }) => ReactElement;
