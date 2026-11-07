import React, { Ref, memo, useImperativeHandle, useMemo, useRef } from "react";
import { ListHandle, TestComponent } from "./common";
import {
  ListImperativeAPI,
  List as RWList,
  RowComponentProps,
  useDynamicRowHeight,
} from "react-window";

type Context = {
  Component: TestComponent;
};

const Item = ({
  ariaAttributes,
  index: i,
  style,
  Component,
}: RowComponentProps<Context>) => {
  return (
    <div {...ariaAttributes} style={style}>
      <Component index={i} />
    </div>
  );
};

export const ReactWindowList = memo(
  ({
    count,
    Component,
    handle,
  }: {
    count: number;
    Component: TestComponent;
    handle?: Ref<ListHandle>;
  }) => {
    const rowHeight = useDynamicRowHeight({ defaultRowHeight: 50 });
    const ref = useRef<ListImperativeAPI>(null);

    useImperativeHandle(handle, () => ({
      scrollToIndex: (i) => {
        ref.current?.scrollToRow({ index: i, align: "start" });
      },
    }));

    return (
      <RWList
        listRef={ref}
        rowCount={count}
        rowHeight={rowHeight}
        rowComponent={Item}
        rowProps={useMemo(() => ({ Component }), [Component])}
      />
    );
  },
);
