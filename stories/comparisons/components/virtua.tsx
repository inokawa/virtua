import React, { Ref, memo, useImperativeHandle, useRef } from "react";
import { List, ListHandle as VListHandle } from "virtua";
import { ListHandle, TestComponent } from "./common";

const listStyle = { flex: 1 };

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
      <List ref={ref} style={listStyle}>
        {Array.from({ length: count }).map((_, i) => (
          <Component key={i} index={i} />
        ))}
      </List>
    );
  }
);
