import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import {
  HeavyItem,
  ItemWithRenderCount,
  ScrollInput,
  SimpleItem,
} from "./components/common";
import { ReactCoolVirtualList } from "./components/react-cool-virtual";
import { VirtuaList } from "./components/virtua";

export default {
  component: ItemWithRenderCount,
} satisfies Meta;

export const DynamicHeight: StoryObj = {
  render: () => {
    const ROW_COUNT = 10000;
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
          <VirtuaList count={ROW_COUNT} Component={ItemWithRenderCount} />
          <ReactCoolVirtualList
            count={ROW_COUNT}
            Component={ItemWithRenderCount}
          />
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
          <VirtuaList count={ROW_COUNT} Component={HeavyItem} />
          <ReactCoolVirtualList count={ROW_COUNT} Component={HeavyItem} />
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
          <VirtuaList count={ROW_COUNT} Component={SimpleItem} />
          <ReactCoolVirtualList count={ROW_COUNT} Component={SimpleItem} />
        </div>
      </div>
    );
  },
};
