import React, { Ref, memo, useImperativeHandle, useRef } from "react";
import { VList, VListHandle } from "virtua";
import { ListHandle, TestComponent } from "./common";

export const VirtuaList = memo(
  ({
    count,
    Component,
    handle,
  }: {
    count: number;
    Component: TestComponent;
    handle?: Ref<ListHandle>;
  }) => {
    const ref = useRef<VListHandle>(null);
    useImperativeHandle(handle, () => ({
      scrollToIndex: (i) => {
        ref.current?.scrollToIndex(i);
      },
    }));

    return (
      <VList ref={ref}>
        {Array.from({ length: count }).map((_, i) => (
          <Component key={i} index={i} />
        ))}
      </VList>
    );
  }
);
