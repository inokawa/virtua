import { Meta, StoryObj } from "@storybook/react";
import React, { useLayoutEffect, useMemo, useRef } from "react";
import { VList, VListHandle } from "../../src";

export default {
  component: VList,
} as Meta;

const Row = ({ i }: { i: number }) => {
  return (
    <div
      style={{
        background: i % 2 === 0 ? "darkgray" : "white",
        color: i % 2 === 0 ? "white" : "darkgray",
        borderBottom: "solid 1px #ccc",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
        height: 200,
        fontSize: 64,
        fontWeight: "bold",
      }}
    >
      {i}
    </div>
  );
};

export const Loop: StoryObj = {
  render: () => {
    const ref = useRef<VListHandle>(null);

    const ITEM_LENGTH = 10;
    const items = useMemo(() => Array.from({ length: ITEM_LENGTH }), []);

    useLayoutEffect(() => {
      ref.current?.scrollToIndex(ITEM_LENGTH);
    }, []);

    return (
      <div
        style={{ height: "100vh", display: "flex", flexDirection: "column" }}
      >
        <VList
          ref={ref}
          style={{ flex: 1 }}
          initialItemSize={200}
          onScroll={(offset) => {
            if (!ref.current) return;

            const MARGIN = 100;
            if (offset < 0 + MARGIN) {
              ref.current.scrollTo(ref.current.scrollSize / 2 + offset);
            } else if (
              offset >
              ref.current.scrollSize - ref.current.viewportSize - MARGIN
            ) {
              ref.current.scrollTo(offset - ref.current.scrollSize / 2);
            }
          }}
        >
          {items.map((d, i) => (
            <Row key={i} i={i} />
          ))}
          {items.map((d, i) => (
            <Row key={i + "-2"} i={i} />
          ))}
        </VList>
      </div>
    );
  },
};
