import { Meta, StoryObj } from "@storybook/react";
import React, { ReactElement, useState } from "react";
import { VList } from "../../../src";

export default {
  component: VList,
} as Meta;

export const Default: StoryObj = {
  name: "DynamicColumns",

  render: () => {
    const ITEM_LENGTH = 1000;
    const [columns, setColumns] = useState(3);
    return (
      <div
        style={{ display: "flex", flexDirection: "column", height: "100vh" }}
      >
        <div>
          <label>
            columns
            <input
              type="number"
              value={columns}
              min={1}
              max={100}
              step={1}
              style={{ marginLeft: 4 }}
              onChange={(e) => {
                setColumns(Number(e.target.value));
              }}
            />
          </label>
        </div>
        <VList style={{ flex: 1 }}>
          {Array.from({ length: ITEM_LENGTH })
            .map((_, i) => i)
            .reduce((acc, i) => {
              if (i % columns === 0) {
                acc.push([]);
              }
              const prev = acc[acc.length - 1];
              prev.push(i);

              return acc;
            }, [] as number[][])
            .map((arr, i) => {
              return (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    borderBottom: "solid 1px #ccc",
                    height: 100,
                  }}
                >
                  {arr.map((d) => (
                    <div
                      key={d}
                      style={{
                        flex: 1 / columns,
                        background: "#fff",
                        borderRight: "solid 1px #ccc",
                      }}
                    >
                      {d}
                    </div>
                  ))}
                </div>
              );
            })}
        </VList>
      </div>
    );
  },
};
