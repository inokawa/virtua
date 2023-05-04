import React, { Ref, memo, useImperativeHandle, useRef } from "react";
import { useVirtual } from "@tanstack/react-virtual";
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
    const rowVirtualizer = useVirtual({
      size: count,
      parentRef,
    });
    useImperativeHandle(handle, () => ({
      scrollToIndex: rowVirtualizer.scrollToIndex,
    }));

    return (
      <div
        ref={parentRef}
        style={{ width: "100%", height: "100%", overflow: "auto" }}
      >
        <div
          style={{
            height: `${rowVirtualizer.totalSize}px`,
            width: "100%",
            position: "relative",
          }}
        >
          {rowVirtualizer.virtualItems.map((item) => (
            <div
              key={item.key}
              ref={item.measureRef}
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
