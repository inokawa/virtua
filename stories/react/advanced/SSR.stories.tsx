import { Meta, StoryObj } from "@storybook/react";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { VList, type VListHandle } from "../../../src";
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

const App = ({
  scrollOnMount,
  scrollToIndex,
  smooth,
}: {
  scrollOnMount?: boolean;
  scrollToIndex?: number;
  smooth?: boolean;
}) => {
  const ref = useRef<VListHandle>(null);
  useEffect(() => {
    if (!ref.current || !scrollOnMount || !scrollToIndex) return;

    ref.current.scrollToIndex(scrollToIndex, {
      smooth: smooth,
    });
  }, []);

  const COUNT = 10000;
  return (
    <>
      <VList ref={ref} ssrCount={30}>
        {createRows(COUNT)}
      </VList>
    </>
  );
};

export const Default: StoryObj = {
  name: "SSR",
  render: () => {
    const [scrollOnMount, setScrollOnMount] = useState(false);
    const [scrollIndex, setScrollIndex] = useState(100);
    const [smooth, setSmooth] = useState(true);
    const [hydrated, setHydrated] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
      if (!ref.current) return;

      if (!hydrated) {
        ref.current.innerHTML = renderToString(<App />);
      } else {
        hydrateRoot(
          ref.current,
          <App
            scrollOnMount={scrollOnMount}
            scrollToIndex={scrollIndex}
            smooth={smooth}
          />
        );
      }
    }, [hydrated]);

    return (
      <div
        style={{ height: "100vh", display: "flex", flexDirection: "column" }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: 8,
          }}
        >
          <button
            disabled={hydrated}
            onClick={() => {
              setHydrated(true);
            }}
          >
            hydrate
          </button>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <label>On hydration:</label>
            <label>
              <input
                type="checkbox"
                checked={scrollOnMount}
                onChange={() => {
                  setScrollOnMount((prev) => !prev);
                }}
              />
              scroll to index
            </label>
            <input
              type="number"
              value={scrollIndex}
              onChange={(e) => {
                setScrollIndex(Number(e.target.value));
              }}
            />
            <label>
              <input
                type="checkbox"
                checked={smooth}
                onChange={() => {
                  setSmooth((prev) => !prev);
                }}
              />
              smooth
            </label>
          </div>
        </div>
        <div ref={ref} style={{ flex: 1 }} />
      </div>
    );
  },
};
