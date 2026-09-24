/**
 * @jsxImportSource solid-js
 */
import type { Meta, StoryObj } from "storybook-solidjs-vite";
import { createSignal, For, type JSX } from "solid-js";
import { VMasonry, type VMasonryHandle } from "../../../src/solid";

export default {
  component: VMasonry,
} as Meta;

const heights = [80, 180, 120, 220, 160, 100, 240];
const colors = [
  "#145ec1",
  "#b52f48",
  "#067d51",
  "#733ea4",
  "#a96506",
  "#057176",
  "#413c9b",
];

const data1000 = Array.from({ length: 1000 }).map((_, i) => i);

const itemStyle = (i: number): JSX.CSSProperties => {
  const hash = (i * 2654435761) % 7;
  return {
    height: heights[hash] + "px",
    border: "solid 1px #ccc",
    padding: "4px",
    background: colors[i % colors.length],
    color: "white",
    "text-shadow": "0 0 2px rgba(0, 0, 0, 0.6)",
  };
};

export const Default: StoryObj = {
  render: () => {
    return (
      <VMasonry style={{ height: "100vh" }} lanes={3} data={data1000}>
        {(i) => <div style={itemStyle(i)}>{i}</div>}
      </VMasonry>
    );
  },
};

export const ScrollTo: StoryObj = {
  render: () => {
    const LENGTH = 1000;
    const aligns = ["start", "center", "end", "nearest"] as const;
    const [scrollIndex, setScrollIndex] = createSignal(567);
    const [scrollIndexAlign, setScrollToIndexAlign] =
      createSignal<(typeof aligns)[number]>("start");
    const [smooth, setSmooth] = createSignal(false);
    let handle: VMasonryHandle | undefined;
    return (
      <div
        style={{ height: "100vh", display: "flex", "flex-direction": "column" }}
      >
        <div>
          <input
            type="number"
            value={scrollIndex()}
            onInput={(e) => setScrollIndex(Number(e.currentTarget.value))}
          />
          <button
            onClick={() => {
              handle?.scrollToIndex(scrollIndex(), {
                align: scrollIndexAlign(),
                smooth: smooth(),
              });
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
          <For each={aligns}>
            {(align) => (
              <label style={{ "margin-left": "4px" }}>
                <input
                  type="radio"
                  checked={scrollIndexAlign() === align}
                  onChange={() => {
                    setScrollToIndexAlign(align);
                  }}
                />
                {align}
              </label>
            )}
          </For>
          <label style={{ "margin-left": "4px" }}>
            <input
              type="checkbox"
              checked={smooth()}
              onChange={() => {
                setSmooth((prev) => !prev);
              }}
            />
            smooth
          </label>
        </div>
        <VMasonry ref={handle} style={{ flex: 1 }} lanes={4} data={data1000}>
          {(i) => <div style={itemStyle(i)}>{i}</div>}
        </VMasonry>
      </div>
    );
  },
};
