import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import {
  HeavyItem,
  DynamicItem,
  SimpleItem,
  ItemWithRenderCount,
} from "../components/common";
import { VirtuaList } from "../components/virtua";

export default {
  component: VirtuaList,
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
    return <VirtuaList count={ROW_COUNT} Component={ItemWithRenderCount} />;
  },
};

export const DynamicHeight: StoryObj = {
  render: () => {
    const ROW_COUNT = 10000;
    return <VirtuaList count={ROW_COUNT} Component={DynamicItem} />;
  },
};

export const HeavyComponent: StoryObj = {
  render: () => {
    const ROW_COUNT = 10000;
    return <VirtuaList count={ROW_COUNT} Component={HeavyItem} />;
  },
};

export const OneMillion: StoryObj = {
  render: () => {
    const ROW_COUNT = 1000000;
    return <VirtuaList count={ROW_COUNT} Component={SimpleItem} />;
  },
};
