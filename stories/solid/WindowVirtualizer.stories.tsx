/**
 * @jsxImportSource solid-js
 */
import type { Meta, StoryObj } from "storybook-solidjs";
import { WindowVirtualizer } from "../../src/solid";

export default {
  component: WindowVirtualizer,
} as Meta;

export const Default: StoryObj = {
  render: () => {
    const sizes = [20, 40, 80, 77];
    const data = Array.from({ length: 1000 }).map((_, i) => sizes[i % 4]);

    return (
      <div style={{ padding: "200px 100px" }}>
        <div style={{ border: "solid 1px gray" }}>
          <WindowVirtualizer data={data}>
            {(d, i) => (
              <div
                style={{
                  height: d + "px",
                  "border-bottom": "solid 1px #ccc",
                  background: "#fff",
                }}
              >
                {i}
              </div>
            )}
          </WindowVirtualizer>
        </div>
      </div>
    );
  },
};
