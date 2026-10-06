/**
 * @jsxImportSource solid-js
 */
import type { Meta, StoryObj } from "storybook-solidjs-vite";
import { onMount } from "solid-js";
import { Virtualizer, type VirtualizerHandle } from "../../../src/solid";

export default {
  component: Virtualizer,
} as Meta;

const sizes = [20, 40, 80, 77];

export const HeaderAndFooter: StoryObj = {
  render: () => {
    const data = Array.from({ length: 1000 }).map((_, i) => sizes[i % 4]!);
    const headerHeight = 400;
    return (
      <div
        style={{
          width: "100%",
          height: "100vh",
          "overflow-y": "auto",
          // opt out browser's scroll anchoring on header/footer because it will conflict with scroll anchoring of virtualizer
          "overflow-anchor": "none",
        }}
      >
        <div
          style={{
            "background-color": "burlywood",
            height: headerHeight + "px",
          }}
        >
          header
        </div>
        <Virtualizer data={data} startMargin={headerHeight}>
          {(item, index) => (
            <div
              style={{
                height: item + "px",
                background: "white",
                "border-bottom": "solid 1px #ccc",
              }}
            >
              {index()}
            </div>
          )}
        </Virtualizer>
        <div style={{ "background-color": "steelblue", height: "600px" }}>
          footer
        </div>
      </div>
    );
  },
};

export const Nested: StoryObj = {
  render: () => {
    const data = Array.from({ length: 1000 }).map((_, i) => sizes[i % 4]!);
    const outerPadding = 40;
    const innerPadding = 60;
    let scrollRef: HTMLDivElement | undefined;
    return (
      <div
        ref={scrollRef}
        style={{
          width: "100%",
          height: "100vh",
          "overflow-y": "auto",
          // opt out browser's scroll anchoring on header/footer because it will conflict with scroll anchoring of virtualizer
          "overflow-anchor": "none",
        }}
      >
        <div
          style={{
            "background-color": "burlywood",
            padding: outerPadding + "px",
          }}
        >
          <div
            style={{
              "background-color": "steelblue",
              padding: innerPadding + "px",
            }}
          >
            <Virtualizer
              data={data}
              scrollRef={scrollRef}
              startMargin={outerPadding + innerPadding}
            >
              {(item, index) => (
                <div
                  style={{
                    height: item + "px",
                    background: "white",
                    "border-bottom": "solid 1px #ccc",
                  }}
                >
                  {index()}
                </div>
              )}
            </Virtualizer>
          </div>
        </div>
      </div>
    );
  },
};

export const Reverse: StoryObj = {
  render: () => {
    const data = Array.from({ length: 1000 }).map((_, i) => sizes[i % 4]!);
    let ref: VirtualizerHandle | undefined;
    onMount(() => {
      ref?.scrollToIndex(999);
    });
    return (
      <div
        style={{
          height: "100vh",
          "overflow-y": "auto",
          // opt out browser's scroll anchoring on header/footer because it will conflict with scroll anchoring of virtualizer
          "overflow-anchor": "none",
          // flex style for spacer
          display: "flex",
          "flex-direction": "column",
        }}
      >
        <div
          style={{
            // spacer to align virtualizer to the bottom when all items are visible in the viewport
            "flex-grow": 1,
          }}
        />
        <Virtualizer ref={ref} data={data}>
          {(item, index) => (
            <div
              style={{
                height: item + "px",
                background: "white",
                "border-bottom": "solid 1px #ccc",
              }}
            >
              {index()}
            </div>
          )}
        </Virtualizer>
      </div>
    );
  },
};
