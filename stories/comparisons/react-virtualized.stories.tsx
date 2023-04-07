import React, { useMemo } from "react";
import { Meta, StoryObj } from "@storybook/react";
import AutoSizer from "react-virtualized/dist/es/AutoSizer";
import {
  CellMeasurer,
  CellMeasurerCache,
} from "react-virtualized/dist/es/CellMeasurer";
import RVList from "react-virtualized/dist/es/List";
import { List } from "../../src";
import { HeavyItem, ItemWithRenderCount, ScrollInput } from "./components";

const ROW_COUNT = 10000;

export default {
  component: RVList,
} as Meta;

const ReactVirtualizedList = ({
  Component,
}: {
  Component: typeof ItemWithRenderCount;
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
    <AutoSizer>
      {({ width, height }) => (
        <RVList
          deferredMeasurementCache={virtualizedCache}
          width={width}
          height={height}
          rowCount={ROW_COUNT}
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
  );
};

export const DynamicHeight: StoryObj = {
  render: () => {
    return (
      <div
        style={{ height: "100vh", display: "flex", flexDirection: "column" }}
      >
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div style={{ flex: 1 }}>virtua</div>
          <div style={{ flex: 1 }}>react-virtualized</div>
        </div>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <ScrollInput count={ROW_COUNT} />
        </div>
        <div style={{ display: "flex", flexDirection: "row", flex: 1, gap: 8 }}>
          <List style={{ flex: 1 }}>
            {Array.from({ length: ROW_COUNT }).map((_, i) => (
              <ItemWithRenderCount key={i} index={i} />
            ))}
          </List>
          <div style={{ flex: 1 }}>
            <ReactVirtualizedList Component={ItemWithRenderCount} />
          </div>
        </div>
      </div>
    );
  },
};

export const HeavyComponent: StoryObj = {
  render: () => {
    return (
      <div
        style={{ height: "100vh", display: "flex", flexDirection: "column" }}
      >
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div style={{ flex: 1 }}>virtua</div>
          <div style={{ flex: 1 }}>react-virtualized</div>
        </div>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <ScrollInput count={ROW_COUNT} />
        </div>
        <div style={{ display: "flex", flexDirection: "row", flex: 1, gap: 8 }}>
          <List style={{ flex: 1 }}>
            {Array.from({ length: ROW_COUNT }).map((_, i) => (
              <HeavyItem key={i} index={i} />
            ))}
          </List>
          <div style={{ flex: 1 }}>
            <ReactVirtualizedList Component={HeavyItem} />
          </div>
        </div>
      </div>
    );
  },
};
