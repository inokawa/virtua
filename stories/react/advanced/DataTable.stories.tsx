import type { Meta, StoryObj } from "@storybook/react-vite";
import { VGrid } from "../../../src";
import React, { CSSProperties, useId, useState } from "react";
import { faker } from "@faker-js/faker";

export default {
  component: VGrid,
} as Meta;

type Person = {
  id: number;
  name: string;
  email: string;
  city: string;
  age: number;
  salary: number;
  sales: number[];
};

const MONTHS = 36;
const people: Person[] = Array.from({ length: 10000 }, (_, i): Person => ({
  id: i,
  name: faker.person.fullName(),
  email: faker.internet.email(),
  city: faker.location.city(),
  age: faker.number.int({ min: 18, max: 80 }),
  salary: faker.number.int({ min: 30000, max: 200000 }),
  sales: Array.from({ length: MONTHS }, () =>
    faker.number.int({ min: 0, max: 50000 }),
  ),
}));

type Column = {
  name: string;
  width: number;
  get?: (p: Person) => number | string;
  format?: (v: number | string) => string;
  align?: "right";
  actions?: true;
};

const money = (v: number | string) => "$" + v.toLocaleString();
const COLUMNS: Column[] = [
  { name: "", width: 40 },
  { name: "ID", width: 60, get: (p) => p.id },
  { name: "Name", width: 180, get: (p) => p.name },
  { name: "Email", width: 240, get: (p) => p.email },
  { name: "City", width: 160, get: (p) => p.city },
  { name: "Age", width: 70, get: (p) => p.age, align: "right" },
  {
    name: "Salary",
    width: 110,
    get: (p) => p.salary,
    format: money,
    align: "right",
  },
  ...Array.from({ length: MONTHS }, (_, m): Column => {
    const date = new Date(2024, m);
    return {
      name: date.toLocaleString("en", { month: "short", year: "2-digit" }),
      width: 90,
      get: (p) => p.sales[m]!,
      format: money,
      align: "right",
    };
  }),
  { name: "Actions", width: 90, actions: true },
];

const AVERAGES = COLUMNS.map(({ get, format = String, align }) =>
  get && align === "right"
    ? "~" +
      format(
        Math.round(
          people.reduce((acc, p) => acc + (get(p) as number), 0) /
            people.length,
        ),
      )
    : "",
);

// the header row and the summary row have no person
const HEADER = { edge: "header" } as const;
const SUMMARY = { edge: "summary" } as const;
type Row = Person | typeof HEADER | typeof SUMMARY;
const ROWS: Row[] = [HEADER, ...people, SUMMARY];
const PINNED_COLS = 3;
// the names identify the rows
const NAME_COL = 2;

const cellStyle: CSSProperties = {
  display: "flex",
  alignItems: "center",
  boxSizing: "border-box",
  padding: "0 12px",
  background: "#fff",
  borderRight: "solid 1px #e2e3e3",
  borderBottom: "solid 1px #e2e3e3",
  overflow: "hidden",
  whiteSpace: "nowrap",
  textOverflow: "ellipsis",
};
const edgeStyle: CSSProperties = {
  ...cellStyle,
  background: "#f8f9fa",
  color: "#5f6368",
  fontWeight: 500,
  userSelect: "none",
};
const buttonStyle: CSSProperties = {
  padding: "4px 12px",
  border: "solid 1px #dadce0",
  borderRadius: 4,
  background: "#fff",
  font: "inherit",
  cursor: "pointer",
};

export const DataTable: StoryObj = {
  render: () => {
    const [selected, setSelected] = useState<ReadonlySet<number>>(new Set());

    const titleId = useId();

    return (
      <div
        style={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          font: "13px/1 system-ui, sans-serif",
          color: "#202124",
        }}
      >
        <h2 id={titleId} style={{ margin: 8, fontSize: 16 }}>
          People
        </h2>
        <VGrid
          aria-labelledby={titleId}
          style={{
            flex: 1,
            boxSizing: "border-box",
            border: "solid 1px #e2e3e3",
          }}
          rows={ROWS}
          rowHeight={36}
          cols={COLUMNS}
          colWidth="width"
          pinnedRows={{ start: 1, end: 1 }}
          pinnedCols={{ start: PINNED_COLS }}
          ariaRowHeader={[NAME_COL]}
        >
          {(row, column, { colIndex }) => {
            const isEdge = "edge" in row;
            const shadows: string[] = [];
            if (colIndex === PINNED_COLS - 1) {
              shadows.push("inset -1px 0 #dadce0");
            }
            if (isEdge && row.edge === "summary") {
              shadows.push("inset 0 1px #dadce0");
            }
            const style: CSSProperties = {
              ...(isEdge ? edgeStyle : cellStyle),
              justifyContent: column.align === "right" ? "flex-end" : undefined,
              fontVariantNumeric:
                column.align === "right" ? "tabular-nums" : undefined,
              boxShadow: shadows.join(", ") || undefined,
            };
            if (isEdge && row.edge === "header") {
              if (column.actions) {
                return <div style={style}>{column.name}</div>;
              }
              if (!column.get) {
                return (
                  <div
                    style={{ ...style, justifyContent: "center", padding: 0 }}
                  >
                    <input
                      type="checkbox"
                      aria-label="Select all"
                      checked={selected.size === people.length}
                      onChange={(e) => {
                        setSelected(
                          e.target.checked
                            ? new Set(people.map((p) => p.id))
                            : new Set(),
                        );
                      }}
                    />
                  </div>
                );
              }
              return <div style={style}>{column.name}</div>;
            }
            if (isEdge) {
              return (
                <div style={style}>
                  {column.name === "Name"
                    ? selected.size.toLocaleString() + " selected"
                    : AVERAGES[colIndex]}
                </div>
              );
            }
            const isSelected = selected.has(row.id);
            if (isSelected) {
              style.background = "#e8f0fe";
            }
            if (column.actions) {
              return (
                <div style={{ ...style, justifyContent: "center" }}>
                  <button
                    type="button"
                    aria-label={"Edit " + row.name}
                    style={buttonStyle}
                    onClick={() => alert("Edit " + row.name)}
                  >
                    Edit
                  </button>
                </div>
              );
            }
            if (!column.get) {
              return (
                <div style={{ ...style, justifyContent: "center", padding: 0 }}>
                  <input
                    type="checkbox"
                    aria-label={"Select " + row.name}
                    checked={isSelected}
                    onChange={() => {
                      setSelected((prev) => {
                        const next = new Set(prev);
                        if (!next.delete(row.id)) {
                          next.add(row.id);
                        }
                        return next;
                      });
                    }}
                  />
                </div>
              );
            }
            const value = column.get(row);
            return (
              <div style={style}>
                {column.format ? column.format(value) : value}
              </div>
            );
          }}
        </VGrid>
      </div>
    );
  },
};
