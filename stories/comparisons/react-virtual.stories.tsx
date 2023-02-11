import React, { useRef } from "react";
import { Meta, StoryObj } from "@storybook/react";
import { useVirtual } from "react-virtual";
import { List } from "../../src";
import { ScrollInput } from "./components";

const ROW_COUNT = 1000;
const heights = [20, 40, 80, 77];
const Row = ({ index: i }: { index: number }) => {
  return (
    <div
      style={{
        height: heights[i % heights.length],
        borderBottom: "solid 1px #ccc",
        background: "#fff",
      }}
    >
      {i}
    </div>
  );
};

export default {
  component: useVirtual,
};

const RVList = () => {
  const parentRef = useRef<HTMLDivElement>(null);
  const rowVirtualizer = useVirtual({
    size: ROW_COUNT,
    parentRef,
  });
  return (
    <div ref={parentRef} style={{ flex: 1, overflow: "auto" }}>
      <div
        style={{
          height: `${rowVirtualizer.totalSize}px`,
          width: "100%",
          position: "relative",
        }}
      >
        {rowVirtualizer.virtualItems.map((item) => (
          <div
            key={item.key}
            ref={item.measureRef}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              transform: `translateY(${item.start}px)`,
            }}
          >
            <div
              style={{
                height: heights[item.index % heights.length],
                borderBottom: "solid 1px #ccc",
                background: "#fff",
              }}
            >
              {item.index}
            </div>
          </div>
        ))}
      </div>
    </div>
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
          <div style={{ flex: 1 }}>react-virtual</div>
        </div>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <ScrollInput count={ROW_COUNT} />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            flex: 1,
            gap: 8,
            overflow: "hidden",
          }}
        >
          <List style={{ flex: 1 }}>
            {Array.from({ length: ROW_COUNT }).map((_, i) => (
              <Row key={i} index={i} />
            ))}
          </List>
          <RVList />
        </div>
      </div>
    );
  },
};
