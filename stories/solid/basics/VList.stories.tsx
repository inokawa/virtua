/**
 * @jsxImportSource solid-js
 */
import type { Meta, StoryObj } from "storybook-solidjs-vite";
import { VList, VListHandle } from "../../../src/solid";
import { createSignal } from "solid-js";

export default {
  component: VList,
} as Meta;

export const Default: StoryObj = {
  render: () => {
    const sizes = [20, 40, 80, 77];
    const data = Array.from({ length: 1000 }).map((_, i) => sizes[i % 4]);

    return (
      <VList data={data} style={{ height: "100vh" }}>
        {(d, i) => (
          <div
            style={{
              height: d + "px",
              "border-bottom": "solid 1px #ccc",
              background: "#fff",
            }}
          >
            {i()}
          </div>
        )}
      </VList>
    );
  },
};

export const Horizontal: StoryObj = {
  render: () => {
    const sizes = [40, 180, 77];
    const data = Array.from({ length: 1000 }).map((_, i) => sizes[i % 3]);

    return (
      <div style={{ padding: "10px" }}>
        <VList
          data={data}
          style={{ width: "100%", height: "200px" }}
          horizontal
        >
          {(d, i) => (
            <div
              style={{
                width: d + "px",
                "border-right": "solid 1px #ccc",
                background: "#fff",
              }}
            >
              {i()}
            </div>
          )}
        </VList>
      </div>
    );
  },
};

export const Controlls: StoryObj = {
  render: () => {
    const heights = [20, 40, 180, 77];
    const createItem = (i: number) => ({
      index: i,
      height: heights[i % 4],
    });

    const [data, setData] = createSignal(
      Array.from({ length: 1000 }).map((_, i) => createItem(i)),
    );

    const [scrollOffset, setScrollOffset] = createSignal(0);
    const [scrolling, setScrolling] = createSignal(false);
    const [scrollTarget, setScrollTarget] = createSignal(567);
    const [prepend, setPrepend] = createSignal(false);

    let handle: VListHandle | undefined;

    return (
      <div
        style={{ height: "100%", display: "flex", "flex-direction": "column" }}
      >
        <div>offset: {scrollOffset()}</div>
        <div>scrolling: {String(scrolling())}</div>
        <div>
          <input
            type="number"
            value={scrollTarget()}
            onInput={(e) => {
              setScrollTarget(Number((e.target as HTMLInputElement).value));
            }}
          />
          <button
            onClick={() => {
              handle?.scrollToIndex(scrollTarget());
            }}
          >
            scrollToIndex
          </button>
        </div>
        <div>
          <button
            onClick={() => {
              setData((prev) => {
                const items = Array.from({ length: 100 }).map((_, i) =>
                  createItem(i + prev.length),
                );
                return prepend() ? [...items, ...prev] : [...prev, ...items];
              });
            }}
          >
            append
          </button>
          <label>
            <input
              type="checkbox"
              checked={prepend()}
              onchange={() => {
                setPrepend((prev) => !prev);
              }}
            />
            prepend
          </label>
          <button
            onclick={() => {
              setData((prev) => {
                const items = [...prev];
                items.pop();
                return items;
              });
            }}
          >
            pop
          </button>
        </div>
        <VList
          ref={(h) => {
            handle = h;
          }}
          data={data()}
          shift={prepend()}
          style={{ height: "100vh" }}
          onScroll={(offset) => {
            setScrollOffset(offset);
            setScrolling(true);
          }}
          onScrollEnd={() => {
            setScrolling(false);
          }}
        >
          {(d) => (
            <div
              style={{
                height: d.height + "px",
                "border-bottom": "solid 1px #ccc",
                background: "#fff",
              }}
            >
              {d.index}
            </div>
          )}
        </VList>
      </div>
    );
  },
};
