import type { Meta, StoryObj } from "@storybook/react-vite";
import React, { ReactNode, useLayoutEffect, useState } from "react";
import { VList } from "../../../src";
import { createPortal } from "react-dom";

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

const NewWindow = ({
  children,
  onUnload,
}: {
  children: ReactNode;
  onUnload: () => void;
}) => {
  const [container, setContainer] = useState<Element | null>(null);
  useLayoutEffect(() => {
    const externalWindow = window.open(
      "",
      "",
      "width=400,height=400,left=200,top=200",
    );

    if (!externalWindow) return;

    const container = externalWindow.document.createElement("div");
    externalWindow.document.body.appendChild(container);
    externalWindow.addEventListener("unload", onUnload, { once: true });

    setContainer(container);

    return () => {
      externalWindow?.close();
    };
  }, []);

  return container ? createPortal(children, container) : null;
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
