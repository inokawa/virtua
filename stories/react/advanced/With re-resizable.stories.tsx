import { Meta, StoryObj } from "@storybook/react-vite";
import { VList } from "../../../src";
import React, { CSSProperties, useCallback, useState } from "react";
import { Enable, Resizable } from "re-resizable";

export default {
  component: VList,
} as Meta;

const itemStyle: CSSProperties = {
  height: 50,
  borderBottom: "solid 4px #ccc",
  background: "#fff",
};

const enable: Enable = {
  top: false,
  bottom: true,
  right: false,
  left: false,
  topRight: false,
  topLeft: false,
  bottomRight: false,
  bottomLeft: false,
};

const ResizableItem = ({
  id,
  height,
  onResize,
}: {
  id: number;
  height: number;
  onResize: (id: number, deltaHeight: number) => void;
}) => {
  return (
    <Resizable
      size={{ height, width: "100%" }}
      enable={enable}
      style={itemStyle}
      onResizeStop={(e, direction, ref, delta) => {
        onResize(id, delta.height);
      }}
    >
      {id}
    </Resizable>
  );
};

export const Default: StoryObj = {
  name: "With re-resizable",
  render: () => {
    const [heights, setHeights] = useState(() =>
      Array.from({ length: 1000 }, () => 50)
    );
    const onResize = useCallback((id: number, height: number) => {
      setHeights((p) => {
        const s = [...p];
        s[id] += height;
        return s;
      });
    }, []);
    return (
      <Resizable
        defaultSize={{ width: 400, height: 400 }}
        style={{ border: "solid 4px #ccc" }}
      >
        <VList style={{ width: "100%", height: "100%" }}>
          {Array.from({ length: 1000 }, (_, i) => (
            <ResizableItem
              key={i}
              id={i}
              height={heights[i]}
              onResize={onResize}
            />
          ))}
        </VList>
      </Resizable>
    );
  },
};
