import React, { useRef } from "react";
import { useVirtual } from "@tanstack/react-virtual";
import { TestComponent } from "./common";

export const ReactVirtualList = ({
  count,
  Component,
}: {
  count: number;
  Component: TestComponent;
}) => {
  const parentRef = useRef<HTMLDivElement>(null);
  const rowVirtualizer = useVirtual({
    size: count,
    parentRef,
  });
  return (
    <div ref={parentRef} style={{ flex: 1, overflow: "auto" }}>
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
};
