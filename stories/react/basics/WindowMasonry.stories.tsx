import type { Meta, StoryObj } from "@storybook/react-vite";
import React, { useRef } from "react";
import { WindowMasonry, type WindowMasonryHandle } from "../../../src";

export default { component: WindowMasonry } as Meta;

const data = Array.from({ length: 1000 }, (_, i) => i);
const heights = [80, 180, 120, 220, 160, 100, 240];
const colors = ["#145ec1", "#b52f48", "#067d51", "#733ea4", "#a96506"];

export const Default: StoryObj = {
  render: () => {
    const ref = useRef<WindowMasonryHandle>(null);
    return (
      <div style={{ padding: 24 }}>
        <h1>Window scrolling masonry</h1>
        <p>The gallery shares the document scrollbar with this header.</p>
        <button onClick={() => ref.current?.scrollToIndex(500)}>
          Scroll to item 500
        </button>
        <WindowMasonry ref={ref} lanes={3} gap={8} data={data}>
          {(i) => (
            <div
              key={i}
              style={{
                height: heights[i % heights.length],
                background: colors[i % colors.length],
                color: "white",
                padding: 4,
              }}
            >
              {i}
            </div>
          )}
        </WindowMasonry>
      </div>
    );
  },
};
