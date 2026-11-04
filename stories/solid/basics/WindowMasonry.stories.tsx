/**
 * @jsxImportSource solid-js
 */
import type { Meta, StoryObj } from "storybook-solidjs-vite";
import { type JSX } from "solid-js";
import { WindowMasonry } from "../../../src/solid";

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

const data1000 = Array.from({ length: 1000 }).map((_, i) => i);

const itemStyle = (i: number): JSX.CSSProperties => {
  const hash = (i * 2654435761) % 7;
  return {
    height: heights[hash] + "px",
    border: "solid 1px #ccc",
    padding: "4px",
    background: colors[i % colors.length],
    color: "white",
    "text-shadow": "0 0 2px rgba(0, 0, 0, 0.6)",
  };
};

export const Default: StoryObj = {
  render: () => {
    return (
      <div style={{ padding: "200px 100px" }}>
        <WindowMasonry lanes={3} data={data1000}>
          {(i) => <div style={itemStyle(i)}>{i}</div>}
        </WindowMasonry>
      </div>
    );
  },
};
