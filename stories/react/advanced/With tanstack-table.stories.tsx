import type { Meta, StoryObj } from "@storybook/react-vite";
import { VList } from "../../../src";
import React, { CSSProperties, useState } from "react";
import { faker } from "@faker-js/faker";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
  type Row as RowType,
  type SortingState,
} from "@tanstack/react-table";

export default {
  component: VList,
} as Meta;

type Data = {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
  email: string;
  city: string;
  status: "relationship" | "complicated" | "single";
  progress: number;
  visits: number;
};

const data: Data[] = Array.from(
  { length: 1000 },
  (_, i): Data => ({
    id: i,
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    age: faker.number.int({ min: 18, max: 80 }),
    email: faker.internet.email(),
    city: faker.location.city(),
    status: faker.helpers.arrayElement([
      "relationship",
      "complicated",
      "single",
    ]),
    progress: faker.number.int({ min: 0, max: 100 }),
    visits: faker.number.int({ min: 0, max: 1000 }),
  }),
);

const STATUS_COLORS: Record<Data["status"], string> = {
  relationship: "#3ba55d",
  complicated: "#d9822b",
  single: "#8c8c8c",
};

const columnHelper = createColumnHelper<Data>();

const columns = [
  columnHelper.accessor("id", { header: "ID", size: 60 }),
  columnHelper.accessor("firstName", { header: "First Name", size: 140 }),
  columnHelper.accessor("lastName", { header: "Last Name", size: 140 }),
  columnHelper.accessor("age", { header: "Age", size: 60 }),
  columnHelper.accessor("email", { header: "Email", size: 240 }),
  columnHelper.accessor("city", { header: "City", size: 160 }),
  columnHelper.accessor("status", {
    header: "Status",
    size: 130,
    cell: (info) => (
      <span
        style={{
          padding: "2px 8px",
          borderRadius: 10,
          fontSize: 12,
          color: "#fff",
          background: STATUS_COLORS[info.getValue()],
        }}
      >
        {info.getValue()}
      </span>
    ),
  }),
  columnHelper.accessor("progress", {
    header: "Progress",
    size: 160,
    cell: (info) => (
      <div style={{ width: "100%", height: 8, background: "#eee" }}>
        <div
          style={{
            width: `${info.getValue()}%`,
            height: "100%",
            background: "#4a90d9",
          }}
        />
      </div>
    ),
  }),
  columnHelper.accessor("visits", { header: "Visits", size: 80 }),
];

const rowStyle: CSSProperties = {
  display: "flex",
  flexDirection: "row",
  borderBottom: "solid 1px #ccc",
};

const cellStyle: CSSProperties = {
  display: "flex",
  alignItems: "center",
  flexShrink: 0,
  // to make the sum of cell widths equal to table.getTotalSize()
  boxSizing: "border-box",
  padding: "8px 12px",
  overflow: "hidden",
  whiteSpace: "nowrap",
  textOverflow: "ellipsis",
};

const headerCellStyle: CSSProperties = {
  ...cellStyle,
  position: "relative",
  color: "#fff",
  background: "darkgray",
  userSelect: "none",
};

const Row = ({ row }: { row: RowType<Data> }) => {
  return (
    <div style={rowStyle}>
      {row.getVisibleCells().map((cell) => (
        <div
          key={cell.id}
          style={{ ...cellStyle, width: cell.column.getSize() }}
        >
          {flexRender(cell.column.columnDef.cell, cell.getContext())}
        </div>
      ))}
    </div>
  );
};

export const Default: StoryObj = {
  name: "With tanstack-table",
  render: () => {
    const [sorting, setSorting] = useState<SortingState>([]);

    const table = useReactTable({
      data,
      columns,
      state: { sorting },
      onSortingChange: setSorting,
      columnResizeMode: "onChange",
      getCoreRowModel: getCoreRowModel(),
      getSortedRowModel: getSortedRowModel(),
    });

    return (
      <div
        style={{
          width: "100%",
          height: "90vh",
          overflowX: "auto",
          border: "solid 1px #ddd",
          background: "#fff",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {table.getHeaderGroups().map((headerGroup) => (
          <div
            key={headerGroup.id}
            style={{ ...rowStyle, width: table.getTotalSize() }}
          >
            {headerGroup.headers.map((header) => {
              const sorted = header.column.getIsSorted();
              return (
                <div
                  key={header.id}
                  style={{
                    ...headerCellStyle,
                    width: header.getSize(),
                    cursor: header.column.getCanSort() ? "pointer" : undefined,
                  }}
                  onClick={header.column.getToggleSortingHandler()}
                >
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext(),
                  )}
                  {sorted === "asc" ? " ▲" : sorted === "desc" ? " ▼" : ""}
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      right: 0,
                      width: 5,
                      height: "100%",
                      cursor: "col-resize",
                      background: header.column.getIsResizing()
                        ? "#4a90d9"
                        : "rgba(0, 0, 0, 0.2)",
                    }}
                    onClick={(e) => {
                      // avoid triggering sort
                      e.stopPropagation();
                    }}
                    onMouseDown={header.getResizeHandler()}
                    onTouchStart={header.getResizeHandler()}
                  />
                </div>
              );
            })}
          </div>
        ))}
        <VList style={{ flex: 1, width: table.getTotalSize() }}>
          {table.getRowModel().rows.map((row) => (
            <Row key={row.id} row={row} />
          ))}
        </VList>
      </div>
    );
  },
};
