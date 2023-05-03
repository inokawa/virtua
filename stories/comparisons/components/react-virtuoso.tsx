import React, { Ref, memo, useImperativeHandle, useMemo, useRef } from "react";
import { ListHandle, TestComponent } from "./common";
import { Virtuoso, VirtuosoHandle } from "react-virtuoso";

const listStyle = { flex: 1 };

export const ReactVirtuosoList = memo(
  ({
    count,
    Component,
    handle,
  }: {
    count: number;
    Component: TestComponent;
    handle?: Ref<ListHandle>;
  }) => {
    const ref = useRef<VirtuosoHandle>(null);
    useImperativeHandle(handle, () => ({
      scrollToIndex: (i) => {
        ref.current?.scrollToIndex(i);
      },
    }));

    return (
      <Virtuoso
        ref={ref}
        style={listStyle}
        totalCount={count}
        itemContent={useMemo(() => (i) => <Component key={i} index={i} />, [])}
      />
    );
  }
);
