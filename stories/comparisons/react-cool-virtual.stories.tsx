import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import useVirtual from "react-cool-virtual";
import { List } from "../../src";
import { HeavyItem, ItemWithRenderCount, ScrollInput } from "./components";

const ROW_COUNT = 10000;

export default {
  component: useVirtual,
};

const RVList = ({ Component }: { Component: typeof ItemWithRenderCount }) => {
  const { outerRef, innerRef, items } = useVirtual({
    itemCount: ROW_COUNT,
  });
  return (
    <div ref={outerRef} style={{ flex: 1, overflow: "auto" }}>
      <div ref={innerRef}>
        {items.map(({ index, measureRef }) => (
          <Component key={index} index={index} ref={measureRef} />
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
          <div style={{ flex: 1 }}>react-cool-virtual</div>
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
              <ItemWithRenderCount key={i} index={i} />
            ))}
          </List>
          <RVList Component={ItemWithRenderCount} />
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
          <div style={{ flex: 1 }}>react-cool-virtual</div>
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
              <HeavyItem key={i} index={i} />
            ))}
          </List>
          <RVList Component={HeavyItem} />
        </div>
      </div>
    );
  },
};
