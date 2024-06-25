/**
 * @jsxImportSource solid-js
 */
import type { Meta, StoryObj } from "storybook-solidjs";
import { Virtualizer } from "../../src/solid";
import { For } from "solid-js";

export default {
  component: Virtualizer,
} as Meta;

const createRows = (num: number) => {
  return Array.from({ length: num }).map((_, i) => i);
};

const COLUMN_WIDTHS = [100, 200, 300, 100, 200, 300, 100, 300, 400, 200];

export const TableElement: StoryObj = {
  render: () => {
    const headerHeight = 40;
    let scrollRef: HTMLDivElement | undefined;
    return (
      <div style="height: 500px;overflow:auto;" ref={scrollRef}>
        <table>
          <thead>
            <tr style={{ height: headerHeight + "px" }}>
              <For each={COLUMN_WIDTHS}>
                {(width, j) => (
                  <th style={{ width: `${width}px` }}>Header{j()}</th>
                )}
              </For>
            </tr>
          </thead>
          <Virtualizer
            scrollRef={scrollRef}
            startMargin={headerHeight}
            data={createRows(10000)}
            as="tbody"
            item="tr"
            overscan={5}
          >
            {(_, i) => (
              <For each={COLUMN_WIDTHS}>
                {(width, j) => (
                  <td style={{ width: `${width}px` }}>
                    {i}, {j()}
                  </td>
                )}
              </For>
            )}
          </Virtualizer>
        </table>
      </div>
    );
  },
};

export const DivTable: StoryObj = {
  render: () => {
    return (
      <div style="max-height: 400px; overflow: auto;">
        <div
          style={{
            display: "grid",
            position: "sticky",
            top: 0,
            "background-color": "white",
            "z-index": 1,
            width: "fit-content",
            "grid-template-columns": `repeat(${COLUMN_WIDTHS.length}, 1fr)`,
          }}
        >
          {COLUMN_WIDTHS.map((_, j) => (
            <div style={{ width: `${COLUMN_WIDTHS[j]}px`, padding: "10px" }}>
              Header{j}
            </div>
          ))}
        </div>
        <Virtualizer
          data={createRows(10000)}
          item={(props) => {
            return (
              <div
                {...props}
                style={{
                  display: "grid",
                  "grid-template-columns": `repeat(${COLUMN_WIDTHS.length}, 1fr)`,
                  "border-bottom": "1px solid black",
                  ...props.style,
                  width: "fit-content",
                }}
              >
                {props.children}
              </div>
            );
          }}
          overscan={5}
        >
          {(_, i) => (
            <>
              {COLUMN_WIDTHS.map((_, j) => (
                <div
                  style={{ width: `${COLUMN_WIDTHS[j]}px`, padding: "10px" }}
                >
                  {i}, {j}
                </div>
              ))}
            </>
          )}
        </Virtualizer>
      </div>
    );
  },
};
