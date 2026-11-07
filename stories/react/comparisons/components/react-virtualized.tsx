import React, { Ref, memo, useImperativeHandle, useMemo, useRef } from "react";
import { ListHandle, TestComponent } from "./common";
import {
  List,
  CellMeasurer,
  CellMeasurerCache,
  type ListImperativeAPI,
} from "react-virtualized";
import { AutoSizer } from "react-virtualized-auto-sizer";

export const ReactVirtualizedList = memo(
  ({
    count,
    Component,
    handle,
  }: {
    count: number;
    Component: TestComponent;
    handle?: Ref<ListHandle>;
  }) => {
    const ref = useRef<ListImperativeAPI>(null);
    const virtualizedCache = useMemo(
      () =>
        new CellMeasurerCache({
          fixedWidth: true,
          defaultHeight: 50,
        }),
      [],
    );
    useImperativeHandle(handle, () => ({
      scrollToIndex: (i) => {
        ref.current?.scrollToRow({ index: i });
      },
    }));

    return (
      <AutoSizer
        renderProp={({ width, height }) =>
          width !== undefined && height !== undefined ? (
            <List
              ref={ref}
              deferredMeasurementCache={virtualizedCache}
              width={width}
              height={height}
              rowCount={count}
              rowHeight={virtualizedCache.rowHeight}
              rowRenderer={({ index: i, key, style, parent }) => (
                <CellMeasurer
                  key={key}
                  cache={virtualizedCache}
                  columnIndex={0}
                  rowIndex={i}
                  parent={parent}
                >
                  {({ registerChild }) => (
                    <div ref={registerChild} style={style}>
                      <Component index={i} />
                    </div>
                  )}
                </CellMeasurer>
              )}
            />
          ) : null
        }
      />
    );
  },
);
