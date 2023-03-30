import { Meta, StoryObj } from "@storybook/react";
import React, { forwardRef, useEffect, useRef, useState } from "react";
import { List, ListHandle, CustomComponentProps } from "../../src";

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
    const [dest, setDest] = useState(567);
    const ref = useRef<ListHandle>(null);
    return (
      <div>
        <div>
          <input
            type="number"
            value={dest}
            onChange={(e) => {
              setDest(Number(e.target.value));
            }}
          />
          <button
            onClick={() => {
              ref.current?.scrollToIndex(dest);
            }}
          >
            scroll
          </button>
          <button
            onClick={() => {
              setDest(Math.round(LENGTH * Math.random()));
            }}
          >
            randomize
          </button>
        </div>
        <List ref={ref} style={{ height: "100vh" }}>
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
      <div>
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
        <List style={{ height: "100vh" }}>
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

const UlList = forwardRef<HTMLUListElement, CustomComponentProps>(
  ({ children, style }, ref) => {
    return (
      <ul ref={ref} style={{ ...style, margin: 0 }}>
        {children}
      </ul>
    );
  }
);
const Li = forwardRef<HTMLLIElement, CustomComponentProps>(
  ({ children, style }, ref) => {
    return (
      <li ref={ref} style={{ ...style, marginLeft: 40 }}>
        {children}
      </li>
    );
  }
);

export const Ul: StoryObj = {
  render: () => {
    return (
      <List
        style={{
          width: 400,
          height: 400,
          background: "#fff",
        }}
        innerElement={UlList}
        itemElement={Li}
        overscan={20}
      >
        {Array.from({ length: 1000 }).map((_, i) => i)}
      </List>
    );
  },
};
