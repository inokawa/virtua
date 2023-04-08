import React, { useMemo } from "react";
import { Meta, StoryObj } from "@storybook/react";
import AutoSizer from "react-virtualized/dist/es/AutoSizer";
import {
  CellMeasurer,
  CellMeasurerCache,
} from "react-virtualized/dist/es/CellMeasurer";
import RVList from "react-virtualized/dist/es/List";
import { List } from "../../src";
import {
  HeavyItem,
  ItemWithRenderCount,
  ScrollInput,
  SimpleItem,
} from "./components";

export default {
  component: RVList,
} as Meta;

const ReactVirtualizedList = ({
  count,
  Component,
}: {
  count: number;
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
  );
};

export const DynamicHeight: StoryObj = {
  render: () => {
    const ROW_COUNT = 10000;
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
            <ReactVirtualizedList
              count={ROW_COUNT}
              Component={ItemWithRenderCount}
            />
          </div>
        </div>
      </div>
    );
  },
};

export const HeavyComponent: StoryObj = {
  render: () => {
    const ROW_COUNT = 10000;
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
            <ReactVirtualizedList count={ROW_COUNT} Component={HeavyItem} />
          </div>
        </div>
      </div>
    );
  },
};

export const OneMillion: StoryObj = {
  render: () => {
    const ROW_COUNT = 1000000;
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
              <SimpleItem key={i} index={i} />
            ))}
          </List>
          <div style={{ flex: 1 }}>
            <ReactVirtualizedList count={ROW_COUNT} Component={SimpleItem} />
          </div>
        </div>
      </div>
    );
  },
};
