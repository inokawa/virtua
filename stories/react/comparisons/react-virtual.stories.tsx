import React from "react";
import { Meta, StoryObj } from "@storybook/react-vite";
import {
  HeavyJsItem,
  DynamicItem,
  SimpleItem,
  ItemWithRenderCount,
  DynamicImageItem,
  HeavyDOMItem,
} from "./components/common";
import { ReactVirtualList } from "./components/react-virtual";

export default {
  component: ReactVirtualList,
  decorators: [
    (Story) => (
      <div style={{ height: "100vh" }}>
        <Story />
      </div>
    ),
  ],
  tags: ["comparison"],
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

export const HeavyDOM: StoryObj = {
  render: () => {
    const ROW_COUNT = 10000;
    return <ReactVirtualList count={ROW_COUNT} Component={HeavyDOMItem} />;
  },
};

export const HeavyJS: StoryObj = {
  render: () => {
    const ROW_COUNT = 10000;
    return <ReactVirtualList count={ROW_COUNT} Component={HeavyJsItem} />;
  },
};

export const DynamicImage: StoryObj = {
  render: () => {
    const ROW_COUNT = 10000;
    return <ReactVirtualList count={ROW_COUNT} Component={DynamicImageItem} />;
  },
};

export const OneMillion: StoryObj = {
  render: () => {
    const ROW_COUNT = 1000000;
    return <ReactVirtualList count={ROW_COUNT} Component={SimpleItem} />;
  },
};
