import type { Meta, StoryObj } from "@storybook/react-vite";
import React from "react";
import { WindowMasonry } from "../../../src";

export default {
  component: WindowMasonry,
} as Meta;

const heights = [80, 180, 120, 220, 160, 100, 240];
const colors = [
  "#145ec1",
  "#b52f48",
  "#067d51",
  "#733ea4",
  "#a96506",
  "#057176",
  "#413c9b",
];

const createData = (num: number, offset: number = 0): number[] => {
  return Array.from({ length: num }).map((_, i) => i + offset);
};

const data1000 = createData(1000);

const Photo = ({
  index,
  style,
}: {
  index: number;
  style: React.CSSProperties;
}) => (
  <div
    style={{
      border: "solid 1px #ccc",
      padding: 4,
      background: colors[index % colors.length],
      color: "white",
      textShadow: "0 0 2px rgba(0, 0, 0, 0.6)",
      ...style,
    }}
  >
    {index}
  </div>
);

const photoStyle = (i: number): React.CSSProperties => ({
  height: heights[(i * 2654435761) % 7],
});

export const Default: StoryObj = {
  render: () => {
    return (
      <div style={{ padding: "200px 100px" }}>
        <WindowMasonry lanes={3} data={data1000}>
          {(i) => <Photo index={i} style={photoStyle(i)} />}
        </WindowMasonry>
      </div>
    );
  },
};
