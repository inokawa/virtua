/**
 * @jsxImportSource solid-js
 */
import type { Meta, StoryObj } from "storybook-solidjs";
import { Virtualizer } from "../../src/solid";

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
              {COLUMN_WIDTHS.map((width, j) => (
                <th style={{ width: `${width}px` }}>Header{j}</th>
              ))}
            </tr>
          </thead>
          <Virtualizer
            data={createRows(10000)}
            as="tbody"
            item="tr"
            overscan={100}
          >
            {(_, i) => (
              <>
                {COLUMN_WIDTHS.map((width, j) => (
                  <td style={{ width: `${width}px` }}>
                    {i}, {j}
                  </td>
                ))}
              </>
            )}
          </Virtualizer>
        </table>
      </div>
    );
  },
};
