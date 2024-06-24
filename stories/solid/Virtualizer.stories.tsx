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
    return (
      <div style="height: 500px;overflow:auto;">
        <table>
          <thead>
            <tr>
              <For each={COLUMN_WIDTHS}>
                {(width, j) => (
                  <th style={{ width: `${width}px` }}>Header{j()}</th>
                )}
              </For>
            </tr>
          </thead>
          <Virtualizer
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
