import type { Meta, StoryObj } from "@storybook/react-vite";
import { VGrid, type VGridProps, type GridSpan } from "../../../src";
import React, { CSSProperties } from "react";
import { faker } from "@faker-js/faker";
import {
  columnFilteringFeature,
  columnOrderingFeature,
  columnResizingFeature,
  columnSizingFeature,
  createColumnHelper,
  createFilteredRowModel,
  createSortedRowModel,
  filterFn_includesString,
  flexRender,
  globalFilteringFeature,
  rowSortingFeature,
  sortFn_alphanumeric,
  sortFn_basic,
  sortFn_text,
  tableFeatures,
  useTable,
} from "@tanstack/react-table";

const features = tableFeatures({
  columnFilteringFeature,
  globalFilteringFeature,
  columnSizingFeature,
  columnResizingFeature,
  columnOrderingFeature,
  rowSortingFeature,
  filteredRowModel: createFilteredRowModel(),
  filterFns: {
    includesString: filterFn_includesString,
  },
  sortedRowModel: createSortedRowModel(),
  sortFns: {
    alphanumeric: sortFn_alphanumeric,
    basic: sortFn_basic,
    text: sortFn_text,
  },
});

export default {
  component: VGrid,
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

const data: Data[] = Array.from({ length: 1000 }, (_, i): Data => ({
  id: i,
  firstName: faker.person.firstName(),
  lastName: faker.person.lastName(),
  age: faker.number.int({ min: 18, max: 80 }),
  email: faker.internet.email(),
  city: faker.location.city(),
  status: faker.helpers.arrayElement(["relationship", "complicated", "single"]),
  progress: faker.number.int({ min: 0, max: 100 }),
  visits: faker.number.int({ min: 0, max: 1000 }),
}));

const STATUS_COLORS: Record<
  Data["status"],
  [color: string, background: string]
> = {
  relationship: ["#137333", "#e6f4ea"],
  complicated: ["#b06000", "#fef7e0"],
  single: ["#5f6368", "#f1f3f4"],
};

const visuallyHidden: CSSProperties = {
  position: "absolute",
  width: 1,
  height: 1,
  overflow: "hidden",
  clip: "rect(0 0 0 0)",
  whiteSpace: "nowrap",
};

const columnHelper = createColumnHelper<typeof features, Data>();

const columns = columnHelper.columns([
  columnHelper.accessor("id", { header: "ID", size: 60 }),
  columnHelper.group({
    header: "Name",
    columns: columnHelper.columns([
      columnHelper.accessor("firstName", { header: "First Name", size: 140 }),
      columnHelper.accessor("lastName", { header: "Last Name", size: 140 }),
    ]),
  }),
  columnHelper.group({
    header: "Profile",
    columns: columnHelper.columns([
      columnHelper.accessor("age", { header: "Age", size: 70 }),
      columnHelper.accessor("email", { header: "Email", size: 240 }),
      columnHelper.accessor("city", { header: "City", size: 160 }),
    ]),
  }),
  columnHelper.group({
    header: "Activity",
    columns: columnHelper.columns([
      columnHelper.accessor("status", {
        header: "Status",
        size: 130,
        cell: (info) => {
          const [color, background] = STATUS_COLORS[info.getValue()];
          return (
            <span
              style={{
                padding: "4px 10px",
                borderRadius: 12,
                fontSize: 12,
                fontWeight: 500,
                color,
                background,
              }}
            >
              {info.getValue()}
            </span>
          );
        },
      }),
      columnHelper.accessor("progress", {
        header: "Progress",
        size: 160,
        cell: (info) => (
          <div
            style={{
              flex: 1,
              height: 6,
              borderRadius: 3,
              overflow: "hidden",
              background: "#e8eaed",
            }}
          >
            <div
              style={{
                width: `${info.getValue()}%`,
                height: "100%",
                background: "#1a73e8",
              }}
            />
            {/* the bar has no text */}
            <span style={visuallyHidden}>{info.getValue()}%</span>
          </div>
        ),
      }),
      columnHelper.accessor("visits", { header: "Visits", size: 80 }),
    ]),
  }),
]);

const COLUMN_TYPE = "text/x-column-id";

const EMPTY_ROW = { isEmpty: true } as const;

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
const headerStyle: CSSProperties = {
  ...cellStyle,
  position: "relative",
  background: "#f8f9fa",
  color: "#5f6368",
  fontWeight: 500,
  userSelect: "none",
};
const sortButtonStyle: CSSProperties = {
  padding: 0,
  border: "none",
  background: "none",
  color: "inherit",
  font: "inherit",
  cursor: "pointer",
};
const searchStyle: CSSProperties = {
  boxSizing: "border-box",
  width: 240,
  height: 30,
  padding: "0 10px",
  border: "solid 1px #dadce0",
  borderRadius: 4,
  font: "inherit",
  color: "inherit",
};

export const Default: StoryObj = {
  name: "With tanstack-table",
  render: () => {
    const table = useTable({
      features,
      data,
      columns,
      globalFilterFn: "includesString",
      columnResizeMode: "onChange",
    });
    const headerGroups = table.getHeaderGroups();
    const leafHeaders = headerGroups[headerGroups.length - 1]!.headers;
    // the header rows hold their headers at the column indexes they span
    const spans: GridSpan[] = [];
    let ariaSort: VGridProps["ariaSort"];
    const headerRows = headerGroups.map((headerGroup, rowIndex) => {
      const headers: (typeof leafHeaders)[number][] = [];
      let colIndex = 0;
      for (const header of headerGroup.headers) {
        if (header.rowSpan > 0) {
          headers[colIndex] = header;
          const sorted = header.column.getIsSorted();
          if (sorted) {
            ariaSort = {
              rowIndex,
              colIndex,
              order: sorted === "asc" ? "ascending" : "descending",
            };
          }
          if (header.rowSpan > 1 || header.colSpan > 1) {
            spans.push({
              rowIndex,
              colIndex,
              rowSpan: header.rowSpan,
              colSpan: header.colSpan,
            });
          }
        }
        colIndex += header.colSpan;
      }
      return headers;
    });
    const dataRows = table.getRowModel().rows;
    if (!dataRows.length) {
      spans.push({
        rowIndex: headerRows.length,
        colIndex: 0,
        colSpan: leafHeaders.length,
      });
    }

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
        <div style={{ padding: 8 }}>
          <input
            type="search"
            aria-label="Search"
            placeholder="Search"
            value={(table.state.globalFilter as string) || ""}
            onChange={(e) => table.setGlobalFilter(e.target.value)}
            style={searchStyle}
          />
        </div>
        <VGrid
          aria-label="People"
          style={{
            flex: 1,
            boxSizing: "border-box",
            border: "solid 1px #e2e3e3",
          }}
          rows={[...headerRows, ...(dataRows.length ? dataRows : [EMPTY_ROW])]}
          rowHeight={36}
          cols={leafHeaders.map((header) => ({
            header,
            width: header.column.getSize(),
          }))}
          colWidth="width"
          headerRows={headerGroups.length}
          spans={spans}
          ariaSort={ariaSort}
        >
          {(row, { header: leaf }, { colIndex }) => {
            if ("isEmpty" in row) {
              return (
                <div
                  style={{
                    ...cellStyle,
                    overflow: "visible",
                    color: "#5f6368",
                  }}
                >
                  {/* the cell spans all the columns, so keep the message in the viewport */}
                  <span style={{ position: "sticky", insetInlineStart: 12 }}>
                    No results
                  </span>
                </div>
              );
            }
            if (!Array.isArray(row)) {
              const cell = row.getAllCellsByColumnId()[leaf.column.id]!;
              return (
                <div style={cellStyle}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </div>
              );
            }
            const header = row[colIndex]!;
            if (header.column.columns.length > 0) {
              return (
                <div style={{ ...headerStyle, justifyContent: "center" }}>
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext(),
                  )}
                </div>
              );
            }
            const column = leaf.column;
            const sorted = column.getIsSorted();
            return (
              <div
                style={headerStyle}
                onDragOver={(e) => e.preventDefault()}
                onDrop={(e) => {
                  e.preventDefault();
                  const from = e.dataTransfer.getData(COLUMN_TYPE);
                  if (!from || from === column.id) return;
                  const order = leafHeaders
                    .map((h) => h.column.id)
                    .filter((id) => id !== from);
                  order.splice(order.indexOf(column.id), 0, from);
                  table.setColumnOrder(order);
                }}
              >
                <span
                  draggable
                  style={{ flex: 1, cursor: "grab" }}
                  onDragStart={(e) => {
                    e.dataTransfer.setData(COLUMN_TYPE, column.id);
                  }}
                >
                  <button
                    type="button"
                    style={sortButtonStyle}
                    onClick={column.getToggleSortingHandler()}
                  >
                    {flexRender(column.columnDef.header, leaf.getContext())}
                    {sorted && (
                      <span aria-hidden style={{ marginLeft: 6, fontSize: 9 }}>
                        {sorted === "asc" ? "▲" : "▼"}
                      </span>
                    )}
                  </button>
                </span>
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    right: 0,
                    width: 4,
                    height: "100%",
                    cursor: "col-resize",
                    background: column.getIsResizing() ? "#1a73e8" : undefined,
                  }}
                  onMouseDown={leaf.getResizeHandler()}
                  onTouchStart={leaf.getResizeHandler()}
                />
              </div>
            );
          }}
        </VGrid>
      </div>
    );
  },
};
