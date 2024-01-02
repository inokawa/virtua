import { Meta, StoryObj } from "@storybook/react";
import React, { useLayoutEffect, useRef, useState } from "react";
import { VList } from "../../../src";
import { hydrateRoot } from "react-dom/client";
import { renderToString } from "react-dom/server";

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

const App = () => {
  const COUNT = 1000;
  return <VList ssrCount={30}>{createRows(COUNT)}</VList>;
};

export const Default: StoryObj = {
  name: "SSR",
  render: () => {
    const [hydrated, setHydrated] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
      if (!ref.current) return;

      if (!hydrated) {
        ref.current.innerHTML = renderToString(<App />);
      } else {
        hydrateRoot(ref.current, <App />);
      }
    }, [hydrated]);

    return (
      <div
        style={{ height: "100vh", display: "flex", flexDirection: "column" }}
      >
        <div>
          <button
            disabled={hydrated}
            onClick={() => {
              setHydrated(true);
            }}
          >
            hydrate
          </button>
        </div>
        <div ref={ref} style={{ flex: 1 }} />
      </div>
    );
  },
};
