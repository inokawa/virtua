import React, { useEffect, useMemo, useRef } from "react";
import { Meta, StoryObj } from "@storybook/react";
import AutoSizer from "react-virtualized/dist/es/AutoSizer";
import { VariableSizeList as RWList } from "react-window";
import { List } from "../../src";
import { ItemWithRenderCount, ScrollInput } from "./components";

const ROW_COUNT = 10000;

const RWRow = ({
  index: i,
  setHeight,
}: {
  index: number;
  setHeight: (index: number, height: number) => void;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (ref.current) {
      setHeight(i, ref.current.getBoundingClientRect().height);
    }
  }, []);
  return <ItemWithRenderCount ref={ref} index={i} />;
};

export default {
  component: RWList,
} as Meta;

export const DynamicHeight: StoryObj = {
  render: () => {
    const heightsCache = useMemo<number[]>(
      () => Array.from({ length: ROW_COUNT }).map(() => 50),
      []
    );
    const rwListRef = useRef<RWList>(null);
    const getHeight = (i: number) => heightsCache[i];
    const setHeight = (index: number, height: number) => {
      heightsCache[index] = height;
      rwListRef.current?.resetAfterIndex(index);
    };

    return (
      <div
        style={{ height: "100vh", display: "flex", flexDirection: "column" }}
      >
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div style={{ flex: 1 }}>virtua</div>
          <div style={{ flex: 1 }}>react-window</div>
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
            <AutoSizer>
              {({ width, height }) => (
                <RWList
                  ref={rwListRef}
                  width={width}
                  height={height}
                  itemCount={ROW_COUNT}
                  itemSize={getHeight}
                >
                  {({ index: i, style }) => (
                    <div style={style} key={i}>
                      <RWRow index={i} setHeight={setHeight} />
                    </div>
                  )}
                </RWList>
              )}
            </AutoSizer>
          </div>
        </div>
      </div>
    );
  },
};
