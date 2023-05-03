import React, { useMemo } from "react";
import { TestComponent } from "./common";
import List from "react-virtualized/dist/es/List";
import AutoSizer from "react-virtualized/dist/es/AutoSizer";
import {
  CellMeasurer,
  CellMeasurerCache,
} from "react-virtualized/dist/es/CellMeasurer";

export const ReactVirtualizedList = ({
  count,
  Component,
}: {
  count: number;
  Component: TestComponent;
}) => {
  const virtualizedCache = useMemo(
    () =>
      new CellMeasurerCache({
        fixedWidth: true,
        defaultHeight: 50,
      }),
    []
  );
  return (
    <div style={{ flex: 1 }}>
      <AutoSizer>
        {({ width, height }) => (
          <List
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
        )}
      </AutoSizer>
    </div>
  );
};
