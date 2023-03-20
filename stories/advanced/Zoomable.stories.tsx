import { Meta, StoryObj } from "@storybook/react";
import { List } from "../../src";
import React, { useState } from "react";

export default {
  component: List,
} as Meta;

export const Default: StoryObj = {
  name: "Zoomable",
  render: () => {
    const [zoom, setZoom] = useState(1);
    return (
      <div style={{ height: 600 }}>
        <div>
          <label style={{ width: "100%" }}>
            zoom x{zoom}
            <input
              type="range"
              value={zoom}
              min={1}
              max={10}
              step={0.01}
              style={{ width: "85%" }}
              onChange={(e) => {
                setZoom(Number(e.target.value));
              }}
            />
          </label>
        </div>
        <div style={{ overflow: "hidden" }}>
          <List style={{ height: "100vh" }}>
            {Array.from({ length: 1000 }).map((_, i) => {
              return (
                <div
                  key={i}
                  style={{
                    height: 40,
                    background: "#fff",
                    borderBottom: "solid 1px #ccc",
                    zoom: zoom,
                    transformOrigin: "center top",
                  }}
                >
                  {i}
                </div>
              );
            })}
          </List>
        </div>
      </div>
    );
  },
};
