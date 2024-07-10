import { Meta, StoryObj } from "@storybook/react";
import React, { useState } from "react";
import { VList } from "../../../src";
import NewWindow from "react-new-window";

export default {
  component: VList,
} as Meta;

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

const Content = () => {
  return <VList style={{ height: "100vh" }}>{createRows(1000)}</VList>;
};

export const Default: StoryObj = {
  name: "NewWindow",

  render: () => {
    const [isWindowOpened, setIsWindowOpened] = useState(false);
    return (
      <div>
        <button
          onClick={() => {
            setIsWindowOpened((prev) => !prev);
          }}
        >
          {isWindowOpened ? "close" : "open"} window
        </button>
        {isWindowOpened && (
          <NewWindow
            onUnload={() => {
              setIsWindowOpened(false);
            }}
          >
            <Content />
          </NewWindow>
        )}
      </div>
    );
  },
};
