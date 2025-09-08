import { Meta, StoryObj } from "@storybook/react-vite";
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

const App = () => {
  const COUNT = 1000;
  return <VList ssrCount={30}>{createRows(COUNT)}</VList>;
};

export const Default: StoryObj = {
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

const createColumns = (num: number) => {
  return Array.from({ length: num }).map((_, i) => {
    return (
      <div
        key={i}
        style={{
          width: i % 3 === 0 ? 100 : 60,
          borderRight: "solid 1px #ccc",
          background: "#fff",
        }}
      >
        Column {i}
      </div>
    );
  });
};

const AppHorizontal = () => {
  const COUNT = 1000;
  return (
    <VList ssrCount={30} horizontal>
      {createColumns(COUNT)}
    </VList>
  );
};

export const Horizontal: StoryObj = {
  render: () => {
    const [hydrated, setHydrated] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
      if (!ref.current) return;

      if (!hydrated) {
        ref.current.innerHTML = renderToString(<AppHorizontal />);
      } else {
        hydrateRoot(ref.current, <AppHorizontal />);
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

const AppScrollOnMount = ({
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

export const ScrollTo: StoryObj = {
  render: () => {
    const [scrollOnMount, setScrollOnMount] = useState(false);
    const [scrollIndex, setScrollIndex] = useState(100);
    const [smooth, setSmooth] = useState(true);
    const [hydrated, setHydrated] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
      if (!ref.current) return;

      if (!hydrated) {
        ref.current.innerHTML = renderToString(<AppScrollOnMount />);
      } else {
        hydrateRoot(
          ref.current,
          <AppScrollOnMount
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
