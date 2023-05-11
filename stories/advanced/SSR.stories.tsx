import { Meta, StoryObj } from "@storybook/react";
import React, { useEffect, useRef } from "react";
import { VList } from "../../src";
import { hydrateRoot } from "react-dom/client";
import { renderToString } from "react-dom/server";

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

const App = () => {
  return <VList initialItemCount={20}>{createRows(1000)}</VList>;
};

export const SSR: StoryObj = {
  render: () => {
    const ref = useRef<HTMLDivElement>(null);
    useEffect(() => {
      if (!ref.current) return;
      const root = ref.current;

      root.innerHTML = renderToString(<App />);
      setTimeout(() => {
        hydrateRoot(root, <App />);
      }, 1000);
    }, []);
    return <div style={{ width: "100%", height: "100%" }} ref={ref} />;
  },
};
