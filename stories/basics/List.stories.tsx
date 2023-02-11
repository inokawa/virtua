import { Meta, StoryObj } from "@storybook/react";
import React, { useEffect, useRef, useState } from "react";
import { List, ListHandle } from "../../src";

export default {
  component: List,
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

export const Default: StoryObj = {
  render: () => {
    return (
      <List style={{ height: `calc(100vh - 30px)` }}>{createRows(1000)}</List>
    );
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
      <List style={{ width: `calc(100vw - 30px)`, height: 400 }} horizontal>
        {createColumns(1000)}
      </List>
    );
  },
};

export const Reverse: StoryObj = {
  render: () => {
    return (
      <List style={{ height: `calc(100vh - 30px)` }} reverse>
        {createRows(1000)}
      </List>
    );
  },
};

export const Nested: StoryObj = {
  render: () => {
    return (
      <List style={{ width: 800, height: `calc(100vh - 30px)` }}>
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
        <List ref={ref} style={{ height: `calc(100vh - 30px)` }}>
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
      <List style={{ height: `calc(100vh - 30px)` }}>
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

export const WithPaddingAndMargin: StoryObj = {
  render: () => {
    return (
      <List
        style={{
          height: `calc(100vh - 30px)`,
          // width: 500,
          border: "solid 1px red",
          background: "lightgray",
        }}
      >
        {Array.from({ length: 1000 }).map((_, i) => {
          return (
            <div
              key={i}
              style={{
                height: 80,
                background: "#fff",
                margin: 10,
                padding: 10,
                borderRadius: 8,
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

export const Zoom: StoryObj = {
  render: () => {
    return (
      <List style={{ height: `calc(100vh - 30px)` }}>
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
    return (
      <List style={{ height: `calc(100vh - 30px)` }}>{createRows(row)}</List>
    );
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
    return (
      <List style={{ height: `calc(100vh - 30px)` }}>
        {createRows(row).reverse()}
      </List>
    );
  },
};
