import React from "react";
import useVirtual from "react-cool-virtual";
import { TestComponent } from "./common";

export const ReactCoolVirtualList = ({
  count,
  Component,
}: {
  count: number;
  Component: TestComponent;
}) => {
  const { outerRef, innerRef, items } = useVirtual({
    itemCount: count,
  });
  return (
    <div ref={outerRef} style={{ flex: 1, overflow: "auto" }}>
      <div ref={innerRef}>
        {items.map(({ index, measureRef }) => (
          <Component key={index} index={index} ref={measureRef} />
        ))}
      </div>
    </div>
  );
};
