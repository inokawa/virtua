import { Meta, StoryObj } from "@storybook/react";
import React, { useEffect, useRef, useState } from "react";
import { List, ListHandle } from "../../src";

export default {
  component: List,
} as Meta;

const Spinner = (props: { hidden: boolean }) => {
  return (
    <>
      <div
        style={{
          height: 100,
          display: props.hidden ? "none" : "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "white",
        }}
      >
        <span className="loader" />
      </div>
      <style>
        {`
      .loader {
        width: 48px;
        height: 48px;
        border-radius: 50%;
        position: relative;
        animation: rotate 1s linear infinite
      }
      .loader::before {
        content: "";
        box-sizing: border-box;
        position: absolute;
        inset: 0px;
        border-radius: 50%;
        border: 5px solid #ccc;
        animation: prixClipFix 2s linear infinite ;
      }
  
      @keyframes rotate {
        100%   {transform: rotate(360deg)}
      }
  
      @keyframes prixClipFix {
          0%   {clip-path:polygon(50% 50%,0 0,0 0,0 0,0 0,0 0)}
          25%  {clip-path:polygon(50% 50%,0 0,100% 0,100% 0,100% 0,100% 0)}
          50%  {clip-path:polygon(50% 50%,0 0,100% 0,100% 100%,100% 100%,100% 100%)}
          75%  {clip-path:polygon(50% 50%,0 0,100% 0,100% 100%,0 100%,0 100%)}
          100% {clip-path:polygon(50% 50%,0 0,100% 0,100% 100%,0 100%,0 0)}
      }`}
      </style>
    </>
  );
};

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

export const Default: StoryObj = {
  render: () => {
    return <List style={{ height: "100vh" }}>{createRows(1000)}</List>;
  },
};

const createColumns = (num: number) => {
  const heights = [20, 40, 80, 77];
  return Array.from({ length: num }).map((_, i) => {
    return (
      <div
        key={i}
        style={{
          width: heights[i % 4],
          borderRight: "solid 1px #ccc",
          background: "#fff",
        }}
      >
        {i}
      </div>
    );
  });
};

export const Horizontal: StoryObj = {
  render: () => {
    return (
      <List style={{ width: "100vw", height: 400 }} horizontal>
        {createColumns(1000)}
      </List>
    );
  },
};

export const Reverse: StoryObj = {
  render: () => {
    return (
      <List style={{ height: "100vh" }} reverse>
        {createRows(1000)}
      </List>
    );
  },
};

export const InfiniteScrolling: StoryObj = {
  render: () => {
    const ITEM_BATCH_COUNT = 50;
    const [count, setCount] = useState(ITEM_BATCH_COUNT);
    const [fetching, setFetching] = useState(false);
    return (
      <List
        style={{ height: "100vh" }}
        endThreshold={30}
        onEndReached={async () => {
          setFetching(true);
          await new Promise((r) => setTimeout(r, 1000));
          setCount((prev) => prev + ITEM_BATCH_COUNT);
          setFetching(false);
        }}
      >
        {createRows(count)}
        {/* Now hide spinner without unmounting because onEndReached is called twice due to item length change */}
        <Spinner hidden={!fetching} />
      </List>
    );
  },
};

export const Nested: StoryObj = {
  render: () => {
    return (
      <List style={{ width: 800, height: "100vh" }}>
        {Array.from({ length: 100 }).map((_, i) => (
          <List key={i} style={{ height: 200, border: "solid 1px gray" }}>
            {createRows(100)}
          </List>
        ))}
      </List>
    );
  },
};

export const ScrollTo: StoryObj = {
  render: () => {
    const ref = useRef<ListHandle>(null);
    return (
      <div>
        <div>
          <button
            onClick={() => {
              ref.current?.scrollTo(0);
            }}
          >
            scroll to 0
          </button>
          <button
            onClick={() => {
              ref.current?.scrollTo(250);
            }}
          >
            scroll to 250
          </button>
          <button
            onClick={() => {
              ref.current?.scrollTo(500);
            }}
          >
            scroll to 500
          </button>
          <button
            onClick={() => {
              ref.current?.scrollTo(750);
            }}
          >
            scroll to 750
          </button>
          <button
            onClick={() => {
              ref.current?.scrollTo(999);
            }}
          >
            scroll to 999
          </button>
        </div>
        <List ref={ref} style={{ height: "100vh" }}>
          {createRows(1000)}
        </List>
      </div>
    );
  },
};

export const WithState: StoryObj = {
  render: () => {
    const [actives, setActives] = useState<{ [key: number]: boolean }>({
      0: true,
      2: true,
      4: true,
    });
    return (
      <List style={{ height: "100vh" }}>
        {Array.from({ length: 1000 }).map((_, i) => {
          const active = !!actives[i];
          return (
            <div
              key={i}
              style={{
                height: active ? 160 : 80,
                borderBottom: "solid 1px #ccc",
                background: active ? "red" : "#fff",
                display: "flex",
                alignItems: "flex-start",
              }}
            >
              <input
                type="checkbox"
                checked={active}
                onChange={() => {
                  setActives((prev) => ({
                    ...prev,
                    [i]: !prev[i],
                  }));
                }}
              />
              {i}
            </div>
          );
        })}
      </List>
    );
  },
};

export const Zoom: StoryObj = {
  render: () => {
    return (
      <List style={{ height: "100vh" }}>
        {Array.from({ length: 1000 }).map((_, i) => {
          return (
            <div
              key={i}
              style={{
                height: 80,
                background: "#fff",
                borderBottom: "solid 1px #ccc",
                zoom: i % 4,
                transformOrigin: "center top",
              }}
            >
              {i}
            </div>
          );
        })}
      </List>
    );
  },
};

// TODO: nth-type-selector

export const IncreasingItems: StoryObj = {
  render: () => {
    const [row, setRows] = useState<number>(0);
    useEffect(() => {
      const timer = setInterval(() => {
        setRows((prev) => prev + 4);
      }, 500);
      return () => {
        clearInterval(timer);
      };
    });
    return <List style={{ height: "100vh" }}>{createRows(row)}</List>;
  },
};

export const IncreasingItemsReversed: StoryObj = {
  render: () => {
    const [row, setRows] = useState<number>(0);
    useEffect(() => {
      const timer = setInterval(() => {
        setRows((prev) => prev + 4);
      }, 500);
      return () => {
        clearInterval(timer);
      };
    });
    return <List style={{ height: "100vh" }}>{createRows(row).reverse()}</List>;
  },
};
