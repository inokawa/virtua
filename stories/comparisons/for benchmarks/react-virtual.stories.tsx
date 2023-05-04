import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import {
  HeavyItem,
  DynamicItem,
  SimpleItem,
  ItemWithRenderCount,
} from "../components/common";
import { ReactVirtualList } from "../components/react-virtual";

export default {
  component: ReactVirtualList,
  decorators: [
    (Story) => (
      <div style={{ height: "100vh" }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta;

export const RenderCount: StoryObj = {
  render: () => {
    const ROW_COUNT = 10000;
    return (
      <ReactVirtualList count={ROW_COUNT} Component={ItemWithRenderCount} />
    );
  },
};

export const DynamicHeight: StoryObj = {
  render: () => {
    const ROW_COUNT = 10000;
    return <ReactVirtualList count={ROW_COUNT} Component={DynamicItem} />;
  },
};

export const HeavyComponent: StoryObj = {
  render: () => {
    const ROW_COUNT = 10000;
    return <ReactVirtualList count={ROW_COUNT} Component={HeavyItem} />;
  },
};

export const OneMillion: StoryObj = {
  render: () => {
    const ROW_COUNT = 1000000;
    return <ReactVirtualList count={ROW_COUNT} Component={SimpleItem} />;
  },
};
