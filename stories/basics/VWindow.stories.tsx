import { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { VWindow } from "../../src";

const createRows = (num: number) => {
  const heights = [20, 40, 80, 77];
  return Array.from({ length: num }).map((_, i) => {
    return (
      <div
        key={i}
        style={{
          height: heights[i % 4],
          borderBottom: "solid 1px #ccc",
          background: "#fff",
        }}
      >
        {i}
      </div>
    );
  });
};

const createColumns = (num: number) => {
  return Array.from({ length: num }).map((_, i) => {
    return (
      <div
        key={i}
        style={{
          width: i % 3 === 0 ? 100 : 60,
          borderRight: "solid 1px #ccc",
          background: "#fff",
        }}
      >
        Column {i}
      </div>
    );
  });
};

export default {
  component: VWindow,
} as Meta;

export const Vertical: StoryObj = {
  render: () => {
    return (
      <div
        style={{
          padding: "200px 200px 800px 200px",
        }}
      >
        <VWindow
          style={{
            border: "solid 1px gray",
          }}
        >
          {createRows(1000)}
        </VWindow>
      </div>
    );
  },
};

export const Horizontal: StoryObj = {
  render: () => {
    return (
      <div
        style={{
          padding: 200,
        }}
      >
        <VWindow
          horizontal
          style={{
            height: 400,
            border: "solid 1px gray",
          }}
        >
          {createColumns(1000)}
        </VWindow>
      </div>
    );
  },
};
