import { Meta, StoryObj } from "@storybook/react";
import React, { startTransition, useRef } from "react";
import { List, ListHandle } from "../../src";

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

export default {
  component: List,
} as Meta;

export const ScrollSync: StoryObj = {
  render: () => {
    const leftRef = useRef<ListHandle>(null);
    const rightRef = useRef<ListHandle>(null);
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          height: "100%",
        }}
      >
        <List
          ref={leftRef}
          style={{ flex: 1 }}
          onScroll={(offset) => {
            startTransition(() => {
              rightRef.current?.scrollToOffset(offset);
            });
          }}
        >
          {createRows(1000)}
        </List>
        <List
          ref={rightRef}
          style={{ flex: 1 }}
          onScroll={(offset) => {
            startTransition(() => {
              leftRef.current?.scrollToOffset(offset);
            });
          }}
        >
          {createRows(1000)}
        </List>
      </div>
    );
  },
};
