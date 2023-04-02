import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Virtuoso } from "react-virtuoso";
import { List } from "../../src";
import { ItemWithRenderCount, ScrollInput } from "./components";

const ROW_COUNT = 10000;

export default {
  component: Virtuoso,
} as Meta;

const listStyle = { flex: 1 };

const rvRenderer = (i) => <ItemWithRenderCount key={i} index={i} />;

export const DynamicHeight: StoryObj = {
  render: () => {
    return (
      <div
        style={{ height: "100vh", display: "flex", flexDirection: "column" }}
      >
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div style={{ flex: 1 }}>virtua</div>
          <div style={{ flex: 1 }}>react-virtuoso</div>
        </div>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <ScrollInput count={ROW_COUNT} />
        </div>
        <div style={{ display: "flex", flexDirection: "row", flex: 1, gap: 8 }}>
          <List style={listStyle}>
            {Array.from({ length: ROW_COUNT }).map((_, i) => (
              <ItemWithRenderCount key={i} index={i} />
            ))}
          </List>
          <div style={{ flex: 1 }}>
            <Virtuoso
              style={listStyle}
              totalCount={ROW_COUNT}
              itemContent={rvRenderer}
            />
          </div>
        </div>
      </div>
    );
  },
};
