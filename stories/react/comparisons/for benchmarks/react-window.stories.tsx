import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import {
  HeavyItem,
  DynamicItem,
  SimpleItem,
  ItemWithRenderCount,
  DynamicImageItem,
} from "../components/common";
import { ReactWindowList } from "../components/react-window";

export default {
  component: ReactWindowList,
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
      <ReactWindowList count={ROW_COUNT} Component={ItemWithRenderCount} />
    );
  },
};

export const DynamicHeight: StoryObj = {
  render: () => {
    const ROW_COUNT = 10000;
    return <ReactWindowList count={ROW_COUNT} Component={DynamicItem} />;
  },
};

export const HeavyComponent: StoryObj = {
  render: () => {
    const ROW_COUNT = 10000;
    return <ReactWindowList count={ROW_COUNT} Component={HeavyItem} />;
  },
};

export const DynamicImage: StoryObj = {
  render: () => {
    const ROW_COUNT = 10000;
    return <ReactWindowList count={ROW_COUNT} Component={DynamicImageItem} />;
  },
};

export const OneMillion: StoryObj = {
  render: () => {
    const ROW_COUNT = 1000000;
    return <ReactWindowList count={ROW_COUNT} Component={SimpleItem} />;
  },
};
