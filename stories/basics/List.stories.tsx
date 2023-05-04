import { Meta, StoryObj } from "@storybook/react";
import React, { forwardRef, useEffect, useRef, useState } from "react";
import {
  List,
  ListHandle,
  CustomItemComponentProps,
  CustomWindowComponentProps,
} from "../../src";

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
    return <List style={{ height: "100vh" }}>{createRows(1000)}</List>;
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

export const Horizontal: StoryObj = {
  render: () => {
    return (
      <div>
        <div style={{ padding: 10, direction: "ltr" }}>
          <div>ltr</div>
          <List style={{ width: "100%", height: 200 }} horizontal>
            {createColumns(1000)}
          </List>
        </div>
        <div style={{ padding: 10, direction: "rtl" }}>
          <div>rtl</div>
          <List style={{ width: "100%", height: 200 }} horizontal rtl>
            {createColumns(1000)}
          </List>
        </div>
      </div>
    );
  },
};

export const PaddingAndMargin: StoryObj = {
  render: () => {
    return (
      <List
        style={{
          width: 400,
          height: 400,
          padding: "80px 20px",
          background: "lightgray",
        }}
      >
        {Array.from({ length: 1000 }).map((_, i) => {
          return (
            <div
              key={i}
              style={{
                height: 100,
                borderRadius: 8,
                margin: 10,
                padding: 10,
                background: "white",
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

export const Sticky: StoryObj = {
  render: () => {
    return (
      <List style={{ height: "100vh" }} itemSize={570}>
        {Array.from({ length: 100 }).map((_, i) => {
          return (
            <div
              key={i}
              style={{
                borderBottom: "solid 1px #ccc",
              }}
            >
              {Array.from({ length: 10 }).map((_, j) => {
                const isGroupTop = j === 0;
                return (
                  <div
                    key={j}
                    style={{
                      height: 60,
                      background: "#fff",
                      ...(isGroupTop && {
                        top: 0,
                        height: 30,
                        position: "sticky",
                        borderBottom: "solid 1px #ccc",
                      }),
                    }}
                  >
                    {isGroupTop ? i : `${i} - ${j}`}
                  </div>
                );
              })}
            </div>
          );
        })}
      </List>
    );
  },
};

export const ScrollTo: StoryObj = {
  render: () => {
    const LENGTH = 1000;
    const [scrollIndex, setScrollIndex] = useState(567);
    const [scrollOffset, setScrollOffset] = useState(1000);
    const ref = useRef<ListHandle>(null);
    return (
      <div
        style={{ height: "100vh", display: "flex", flexDirection: "column" }}
      >
        <div>
          <input
            type="number"
            value={scrollIndex}
            onChange={(e) => {
              setScrollIndex(Number(e.target.value));
            }}
          />
          <button
            onClick={() => {
              ref.current?.scrollToIndex(scrollIndex);
            }}
          >
            scroll to index
          </button>
          <button
            onClick={() => {
              setScrollIndex(Math.round(LENGTH * Math.random()));
            }}
          >
            randomize
          </button>
        </div>
        <div>
          <div>
            <input
              type="number"
              value={scrollOffset}
              onChange={(e) => {
                setScrollOffset(Number(e.target.value));
              }}
            />
            <button
              onClick={() => {
                ref.current?.scrollTo(scrollOffset);
              }}
            >
              scroll to offset
            </button>
            <button
              onClick={() => {
                ref.current?.scrollBy(scrollOffset);
              }}
            >
              scroll by offset
            </button>
          </div>
        </div>
        <List ref={ref} style={{ flex: 1 }}>
          {createRows(LENGTH)}
        </List>
      </div>
    );
  },
};

export const WithState: StoryObj = {
  render: () => {
    const [actives, setActives] = useState<{ [key: number]: boolean }>({
      0: true,
      3: true,
      6: true,
      9: true,
      12: true,
    });
    return (
      <List style={{ height: "100vh" }}>
        {Array.from({ length: 1000 }).map((_, i) => {
          const active = !!actives[i];
          return (
            <div
              key={i}
              style={{
                borderBottom: "solid 1px #ccc",
                background: active ? "lightpink" : "#fff",
                display: "flex",
                flexDirection: "row",
                transition: "0.5s ease",
              }}
            >
              <div>
                <button
                  style={{ height: "100%" }}
                  onClick={() => {
                    setActives((prev) => ({
                      ...prev,
                      [i]: !prev[i],
                    }));
                  }}
                >
                  {active ? "close" : "open"}
                </button>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flex: 1,
                  height: active ? 200 : 40,
                  transition: "0.5s ease",
                }}
              >
                {i}
              </div>
            </div>
          );
        })}
      </List>
    );
  },
};

export const IncreasingItems: StoryObj = {
  render: () => {
    const BATCH_LENGTH = 4;
    const createRows = (num: number, offset: number) => {
      return Array.from({ length: num }).map((_, i) => {
        i += offset;
        return i;
      });
    };

    const [prepend, setPrepend] = useState(false);
    const [rows, setRows] = useState(() => createRows(BATCH_LENGTH, 0));
    useEffect(() => {
      const timer = setInterval(() => {
        setRows((prev) =>
          prepend
            ? [...createRows(BATCH_LENGTH, prev[0] - BATCH_LENGTH), ...prev]
            : [...prev, ...createRows(BATCH_LENGTH, prev[prev.length - 1]! + 1)]
        );
      }, 500);
      return () => {
        clearInterval(timer);
      };
    });

    const heights = [20, 40, 80, 77];

    return (
      <div
        style={{ height: "100vh", display: "flex", flexDirection: "column" }}
      >
        <div>
          <label style={{ marginRight: 4 }}>
            <input
              type="radio"
              style={{ marginLeft: 4 }}
              checked={!prepend}
              onChange={() => {
                setPrepend(false);
              }}
            />
            append
          </label>
          <label style={{ marginRight: 4 }}>
            <input
              type="radio"
              style={{ marginLeft: 4 }}
              checked={prepend}
              onChange={() => {
                setPrepend(true);
              }}
            />
            prepend
          </label>
        </div>
        <List style={{ flex: 1 }}>
          {rows.map((d, i) => (
            <div
              key={d}
              style={{
                height: heights[i % 4],
                borderBottom: "solid 1px #ccc",
                background: "#fff",
              }}
            >
              {d}
            </div>
          ))}
        </List>
      </div>
    );
  },
};

const UlList = forwardRef<HTMLDivElement, CustomWindowComponentProps>(
  ({ children, attrs, scrollSize }, ref) => {
    return (
      <div ref={ref} {...attrs}>
        <ul style={{ position: "relative", height: scrollSize, margin: 0 }}>
          {children}
        </ul>
      </div>
    );
  }
);
const Li = forwardRef<HTMLLIElement, CustomItemComponentProps>(
  ({ children, style }, ref) => {
    return (
      <li ref={ref} style={{ ...style, marginLeft: 30 }}>
        {children}
      </li>
    );
  }
);

export const Ul: StoryObj = {
  render: () => {
    return (
      <div
        style={{
          width: 400,
          height: 400,
          border: "solid 1px darkgray",
          borderRadius: 8,
          background: "lightgray",
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
        }}
      >
        <div style={{ padding: 4 }}>header</div>
        <List
          style={{
            flex: 1,
            background: "#fff",
          }}
          element={UlList}
          itemElement={Li}
          overscan={20}
        >
          {Array.from({ length: 1000 }).map((_, i) => i)}
        </List>
      </div>
    );
  },
};
