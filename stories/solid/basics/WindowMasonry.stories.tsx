/** @jsxImportSource solid-js */
import type { Meta, StoryObj } from "storybook-solidjs-vite";
import { WindowMasonry } from "../../../src/solid";

export default {
  component: WindowMasonry,
} as Meta;

const data = Array.from({ length: 1000 }, (_, i) => i);
const heights = [80, 180, 120, 220, 160, 100, 240];

export const Default: StoryObj = {
  render: () => (
    <>
      <header style={{ padding: "32px" }}>Window-scrolled masonry</header>
      <WindowMasonry lanes={3} gap={8} data={data}>
        {(i) => (
          <div
            style={{
              height: `${heights[(i * 2654435761) % 7]}px`,
              border: "1px solid #ccc",
              background: "#145ec1",
              color: "white",
              padding: "4px",
            }}
          >
            {i}
          </div>
        )}
      </WindowMasonry>
    </>
  ),
};
