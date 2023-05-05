import { Meta, StoryObj } from "@storybook/react";
import React, { startTransition, useRef } from "react";
import { VList, VListHandle } from "../../src";

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
  component: VList,
} as Meta;

export const ScrollSync: StoryObj = {
  render: () => {
    const leftRef = useRef<VListHandle>(null);
    const rightRef = useRef<VListHandle>(null);
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          height: "100%",
        }}
      >
        <VList
          ref={leftRef}
          style={{ flex: 1 }}
          onScroll={(offset) => {
            startTransition(() => {
              rightRef.current?.scrollTo(offset);
            });
          }}
        >
          {createRows(1000)}
        </VList>
        <VList
          ref={rightRef}
          style={{ flex: 1 }}
          onScroll={(offset) => {
            startTransition(() => {
              leftRef.current?.scrollTo(offset);
            });
          }}
        >
          {createRows(1000)}
        </VList>
      </div>
    );
  },
};
