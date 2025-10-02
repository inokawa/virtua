import React, { Ref, memo, useImperativeHandle, useRef } from "react";
import { useVirtualizer } from "@tanstack/react-virtual";
import { ListHandle, TestComponent } from "./common";

export const ReactVirtualList = memo(
  ({
    count,
    Component,
    handle,
  }: {
    count: number;
    Component: TestComponent;
    handle?: Ref<ListHandle>;
  }) => {
    const parentRef = useRef<HTMLDivElement>(null);
    const virtualizer = useVirtualizer({
      count,
      getScrollElement: () => parentRef.current,
      estimateSize: (i) => 50,
    });
    useImperativeHandle(handle, () => ({
      scrollToIndex: (i) => virtualizer.scrollToIndex(i, { align: "start" }),
    }));

    return (
      <div
        ref={parentRef}
        style={{ width: "100%", height: "100%", overflow: "auto" }}
      >
        <div
          style={{
            height: `${virtualizer.getTotalSize()}px`,
            width: "100%",
            position: "relative",
          }}
        >
          {virtualizer.getVirtualItems().map((item) => (
            <div
              key={item.key}
              data-index={item.index}
              ref={virtualizer.measureElement}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                transform: `translateY(${item.start}px)`,
              }}
            >
              <Component index={item.index} />
            </div>
          ))}
        </div>
      </div>
    );
  }
);
