import { faker } from "@faker-js/faker";
import { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { List, RowComponentProps, useDynamicRowHeight } from "react-window";
import {
  DynamicItem,
  HeavyDOMItem,
  HeavyJsItem,
  ItemWithRenderCount,
  SimpleItem,
} from "./components/common";
import { ReactWindowList } from "./components/react-window";

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

export const HeavyDOM: StoryObj = {
  render: () => {
    const ROW_COUNT = 10000;
    return <ReactWindowList count={ROW_COUNT} Component={HeavyDOMItem} />;
  },
};

export const HeavyJS: StoryObj = {
  render: () => {
    const ROW_COUNT = 10000;
    return <ReactWindowList count={ROW_COUNT} Component={HeavyJsItem} />;
  },
};

const ROW_COUNT = 1000;
const urls = new Array(ROW_COUNT).fill(true).map(() => faker.image.url());

export const DynamicImage: StoryObj = {
  render: () => {
    function DynamicImageList({ urls }: { urls: string[] }) {
      const rowHeight = useDynamicRowHeight({
        defaultRowHeight: 35,
      });

      return (
        <List
          rowCount={urls.length}
          rowHeight={rowHeight}
          rowComponent={DynamicImageRow}
          rowProps={{ urls }}
        />
      );
    }

    function DynamicImageRow({
      index,
      style,
      urls,
    }: RowComponentProps<{ urls: string[] }>) {
      const url = urls[index];
      return (
        <div
          style={{
            borderBottom: "solid 1px #ccc",
            ...style,
          }}
        >
          <div>{index}</div>
          <img src={url} style={{ width: "100%" }} />
        </div>
      );
    }

    return <DynamicImageList urls={urls} />;
  },
};

export const OneMillion: StoryObj = {
  render: () => {
    const ROW_COUNT = 1000000;
    return <ReactWindowList count={ROW_COUNT} Component={SimpleItem} />;
  },
};
