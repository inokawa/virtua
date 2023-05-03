import React, { Ref, memo, useImperativeHandle } from "react";
import useVirtual from "react-cool-virtual";
import { ListHandle, TestComponent } from "./common";

export const ReactCoolVirtualList = memo(
  ({
    count,
    Component,
    handle,
  }: {
    count: number;
    Component: TestComponent;
    handle?: Ref<ListHandle>;
  }) => {
    const { outerRef, innerRef, items, scrollToItem } = useVirtual({
      itemCount: count,
    });
    useImperativeHandle(handle, () => ({
      scrollToIndex: scrollToItem,
    }));

    return (
      <div ref={outerRef} style={{ flex: 1, overflow: "auto" }}>
        <div ref={innerRef}>
          {items.map(({ index, measureRef }) => (
            <Component key={index} index={index} ref={measureRef} />
          ))}
        </div>
      </div>
    );
  }
);
