import type { Meta, StoryObj } from "@storybook/react-vite";
import React, { CSSProperties, useMemo, useRef, useState } from "react";
import { VGrid, VGridHandle, VGridSpan } from "../../../src";
import { faker } from "@faker-js/faker";
import { Spinner, delay } from "../common";

export default {
  component: VGrid,
} as Meta;

const gridStyle: CSSProperties = {
  height: "100vh",
  boxSizing: "border-box",
  border: "solid 1px gray",
};

const cellStyle: CSSProperties = {
  background: "white",
  padding: 4,
  borderRight: "solid 1px gray",
  borderBottom: "solid 1px gray",
};

export const Default: StoryObj = {
  render: () => {
    return (
      <VGrid
        style={gridStyle}
        rows={1000}
        rowHeight={40}
        cols={500}
        colWidth={100}
      >
        {(rowIndex, colIndex) => (
          <div style={cellStyle}>
            {rowIndex} / {colIndex}
          </div>
        )}
      </VGrid>
    );
  },
};

export const Pinned: StoryObj = {
  render: () => {
    const ROWS = 1000;
    const COLS = 500;
    const PINNED_ROWS = { start: 1, end: 1 };
    const PINNED_COLS = { start: 2, end: 1 };
    return (
      <VGrid
        style={gridStyle}
        rows={ROWS}
        rowHeight={40}
        cols={COLS}
        colWidth={100}
        pinnedRows={PINNED_ROWS}
        pinnedCols={PINNED_COLS}
      >
        {(rowIndex, colIndex) => {
          const isPinnedRow =
            rowIndex < PINNED_ROWS.start || rowIndex >= ROWS - PINNED_ROWS.end;
          const isPinnedCol =
            colIndex < PINNED_COLS.start || colIndex >= COLS - PINNED_COLS.end;
          return (
            <div
              style={{
                ...cellStyle,
                background: isPinnedRow
                  ? "darkgray"
                  : isPinnedCol
                    ? "lightgray"
                    : "white",
                color: isPinnedRow ? "white" : undefined,
              }}
            >
              {rowIndex} / {colIndex}
            </div>
          );
        }}
      </VGrid>
    );
  },
};

export const Spans: StoryObj = {
  render: () => {
    const ROWS = 1000;
    const COLS = 500;
    const GROUP_COLS = 4;
    const GROUP_ROWS = 8;
    const spans = useMemo(() => {
      // corner over the two header rows
      const spans: VGridSpan[] = [{ rowIndex: 0, colIndex: 0, rowSpan: 2 }];
      // grouped header row
      for (let c = 1; c < COLS; c += GROUP_COLS) {
        spans.push({ rowIndex: 0, colIndex: c, colSpan: GROUP_COLS });
      }
      for (let r = 2; r < ROWS; r += GROUP_ROWS) {
        // row group label in the pinned column
        spans.push({ rowIndex: r, colIndex: 0, rowSpan: GROUP_ROWS });
        // some merged areas in the body
        for (let c = 1; c < COLS; c += GROUP_COLS * 2) {
          spans.push({ rowIndex: r, colIndex: c, rowSpan: 2, colSpan: 2 });
        }
      }
      return spans;
    }, []);

    return (
      <VGrid
        style={gridStyle}
        rows={ROWS}
        rowHeight={40}
        cols={COLS}
        colWidth={100}
        pinnedRows={2}
        pinnedCols={1}
        spans={spans}
      >
        {(rowIndex, colIndex) => {
          const isHeader = rowIndex < 2;
          const isLabel = colIndex === 0;
          return (
            <div
              style={{
                ...cellStyle,
                background: isHeader
                  ? "darkgray"
                  : isLabel
                    ? "lightgray"
                    : "white",
                color: isHeader ? "white" : undefined,
              }}
            >
              {isHeader && rowIndex === 0 && colIndex !== 0
                ? `group ${Math.floor((colIndex - 1) / GROUP_COLS)}`
                : isLabel && rowIndex >= 2
                  ? `rows ${rowIndex} - ${Math.min(rowIndex + GROUP_ROWS, ROWS) - 1}`
                  : `${rowIndex} / ${colIndex}`}
            </div>
          );
        }}
      </VGrid>
    );
  },
};

export const Gap: StoryObj = {
  render: () => {
    return (
      <VGrid
        style={{ ...gridStyle, background: "#ddd" }}
        rows={1000}
        rowHeight={40}
        cols={500}
        colWidth={100}
        gap={8}
      >
        {(rowIndex, colIndex) => (
          <div style={{ background: "white", padding: 4, borderRadius: 4 }}>
            {rowIndex} / {colIndex}
          </div>
        )}
      </VGrid>
    );
  },
};

export const Columns: StoryObj = {
  render: () => {
    // fixed widths and content-fit (auto) widths can be mixed
    const columns = [
      { key: "id", width: 60 },
      { key: "username", width: 200 },
      { key: "email", width: "auto" },
      { key: "company", width: "auto" },
      { key: "domain", width: 200 },
    ] as const;
    const rows = useMemo(
      () => [
        // the header row has no data
        null,
        ...Array.from({ length: 1000 }, (_, i) => ({
          id: i,
          username: faker.person.fullName(),
          email: faker.internet.email(),
          company: faker.company.name(),
          domain: faker.internet.domainName(),
        })),
      ],
      [],
    );
    return (
      <VGrid
        style={{ ...gridStyle, border: "solid 1px black" }}
        rows={rows}
        rowHeight={30}
        cols={columns}
        colWidth="width"
        pinnedRows={1}
      >
        {(row, column) => (
          <div
            style={{
              background: row === null ? "burlywood" : "white",
              padding: 4,
              borderRight: "solid 1px black",
              borderBottom: "solid 1px black",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
          >
            {row === null ? column.key : row[column.key]}
          </div>
        )}
      </VGrid>
    );
  },
};

export const AutoSize: StoryObj = {
  render: () => {
    return (
      <VGrid
        style={gridStyle}
        rows={1000}
        rowHeight="auto"
        cols={500}
        colWidth="auto"
      >
        {(rowIndex, colIndex) => (
          <div style={cellStyle}>
            <div>
              {rowIndex} / {colIndex}
            </div>
            {Array.from({ length: (rowIndex % 8) + 1 }, (_, i) => (
              <div key={i}>
                {Array.from(
                  { length: (colIndex % 4) + 1 },
                  () => "Hello world!",
                ).join(" ")}
              </div>
            ))}
          </div>
        )}
      </VGrid>
    );
  },
};

export const Resizable: StoryObj = {
  render: () => {
    const COLS = 100;
    const MIN_WIDTH = 40;
    const initialColumns = () =>
      Array.from({ length: COLS }, () => ({ width: 100 }));
    const [columns, setColumns] = useState(initialColumns);
    const drag = useRef<{ col: number; startX: number; startWidth: number }>(
      undefined,
    );

    return (
      <div
        style={{ height: "100vh", display: "flex", flexDirection: "column" }}
      >
        <button onClick={() => setColumns(initialColumns())}>
          reset widths
        </button>
        <VGrid
          style={{ flex: 1, boxSizing: "border-box", border: "solid 1px gray" }}
          rows={1000}
          rowHeight={40}
          cols={columns}
          colWidth="width"
          pinnedRows={1}
        >
          {(rowIndex, column, { colIndex }) => (
            <div
              style={{
                ...cellStyle,
                position: "relative",
                background: rowIndex === 0 ? "lightgray" : "white",
                overflow: "hidden",
                userSelect: rowIndex === 0 ? "none" : undefined,
              }}
            >
              {rowIndex} / {colIndex}
              {rowIndex === 0 && (
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    right: 0,
                    width: 8,
                    height: "100%",
                    cursor: "col-resize",
                    background: "rgba(0, 0, 0, 0.15)",
                  }}
                  onPointerDown={(e) => {
                    e.preventDefault();
                    e.currentTarget.setPointerCapture(e.pointerId);
                    drag.current = {
                      col: colIndex,
                      startX: e.clientX,
                      startWidth: column.width,
                    };
                  }}
                  onPointerMove={(e) => {
                    const d = drag.current;
                    if (!d) return;
                    const width = Math.max(
                      MIN_WIDTH,
                      d.startWidth + e.clientX - d.startX,
                    );
                    setColumns((prev) => {
                      const next = [...prev];
                      next[d.col] = { width };
                      return next;
                    });
                  }}
                  onPointerUp={() => {
                    drag.current = undefined;
                  }}
                />
              )}
            </div>
          )}
        </VGrid>
      </div>
    );
  },
};

export const ScrollTo: StoryObj = {
  render: () => {
    const LENGTH = 1000;
    const [rowIndex, setRowIndex] = useState(567);
    const [colIndex, setColIndex] = useState(567);
    const [vertical, setVertical] = useState(1000);
    const [horizontal, setHorizontal] = useState(1000);
    const ref = useRef<VGridHandle>(null);
    return (
      <div
        style={{ height: "100vh", display: "flex", flexDirection: "column" }}
      >
        <div>
          <label>
            col
            <input
              type="number"
              value={colIndex}
              onChange={(e) => setColIndex(Number(e.target.value))}
            />
          </label>
          <label>
            row
            <input
              type="number"
              value={rowIndex}
              onChange={(e) => setRowIndex(Number(e.target.value))}
            />
          </label>
          <button
            onClick={() => {
              ref.current?.scrollToIndex({ rowIndex, colIndex });
            }}
          >
            scroll to index
          </button>
          <button
            onClick={() => {
              setColIndex(Math.floor(LENGTH * Math.random()));
              setRowIndex(Math.floor(LENGTH * Math.random()));
            }}
          >
            randomize
          </button>
        </div>
        <div>
          <label>
            x
            <input
              type="number"
              value={horizontal}
              onChange={(e) => setHorizontal(Number(e.target.value))}
            />
          </label>
          <label>
            y
            <input
              type="number"
              value={vertical}
              onChange={(e) => setVertical(Number(e.target.value))}
            />
          </label>
          <button
            onClick={() => {
              ref.current?.scrollTo({ vertical, horizontal });
            }}
          >
            scroll to offset
          </button>
          <button
            onClick={() => {
              ref.current?.scrollBy({ vertical, horizontal });
            }}
          >
            scroll by offset
          </button>
        </div>
        <VGrid
          ref={ref}
          style={{ flex: 1, boxSizing: "border-box", border: "solid 1px gray" }}
          rows={LENGTH}
          rowHeight={80}
          cols={LENGTH}
          colWidth={160}
        >
          {(rowIndex, colIndex) => (
            <div style={cellStyle}>
              {rowIndex} / {colIndex}
            </div>
          )}
        </VGrid>
      </div>
    );
  },
};

export const InfiniteScrolling: StoryObj = {
  render: () => {
    const ROW_BATCH = 100;
    const COLS = 100;
    const ROW_HEIGHT = 40;

    const ref = useRef<VGridHandle>(null);
    const [fetching, setFetching] = useState(false);
    const [rowCount, setRowCount] = useState(ROW_BATCH);
    const fetchedCountRef = useRef(-1);

    return (
      <VGrid
        ref={ref}
        style={gridStyle}
        // the last row is the loading indicator
        rows={rowCount + (fetching ? 1 : 0)}
        rowHeight={ROW_HEIGHT}
        cols={COLS}
        colWidth={100}
        spans={
          fetching
            ? [{ rowIndex: rowCount, colIndex: 0, colSpan: COLS }]
            : undefined
        }
        onVerticalScroll={async (offset) => {
          const grid = ref.current;
          if (
            grid &&
            fetchedCountRef.current < rowCount &&
            grid.findRowIndex(offset + grid.viewportHeight) + 25 > rowCount
          ) {
            fetchedCountRef.current = rowCount;
            setFetching(true);
            await delay(1000);
            setFetching(false);
            setRowCount((prev) => prev + ROW_BATCH);
          }
        }}
      >
        {(rowIndex, colIndex) =>
          rowIndex >= rowCount ? (
            <Spinner
              height={ROW_HEIGHT}
              // the row is wider than the viewport, so keep the indicator in it
              style={{
                position: "sticky",
                insetInlineStart: 0,
                width: "100vw",
              }}
            />
          ) : (
            <div style={cellStyle}>
              {rowIndex} / {colIndex}
            </div>
          )
        }
      </VGrid>
    );
  },
};

export const MasterDetail: StoryObj = {
  render: () => {
    const ROWS = 200;
    const COLS = 100;
    const [expanded, setExpanded] = useState<ReadonlySet<number>>(new Set());
    const [displayRows, spans] = useMemo(() => {
      const displayRows: {
        index: number;
        isDetail?: boolean;
        height: number;
      }[] = [];
      const spans: VGridSpan[] = [];
      for (let i = 0; i < ROWS; i++) {
        displayRows.push({ index: i, height: 40 });
        if (expanded.has(i)) {
          spans.push({
            rowIndex: displayRows.length,
            colIndex: 0,
            colSpan: COLS,
          });
          displayRows.push({ index: i, isDetail: true, height: 100 });
        }
      }
      return [displayRows, spans] as const;
    }, [expanded]);

    return (
      <VGrid
        style={gridStyle}
        rows={displayRows}
        rowHeight="height"
        cols={COLS}
        colWidth={100}
        spans={spans}
      >
        {({ index, isDetail }, colIndex) => {
          if (isDetail) {
            return (
              <div style={{ background: "#eee", padding: 16 }}>
                Detail of row {index}
              </div>
            );
          }
          if (colIndex === 0) {
            const isExpanded = expanded.has(index);
            return (
              <div style={{ ...cellStyle, borderRight: undefined }}>
                <button
                  style={{
                    border: "none",
                    background: "none",
                    padding: 0,
                    font: "inherit",
                    cursor: "pointer",
                  }}
                  aria-expanded={isExpanded}
                  onClick={() => {
                    setExpanded((prev) => {
                      const next = new Set(prev);
                      if (!next.delete(index)) {
                        next.add(index);
                      }
                      return next;
                    });
                  }}
                >
                  {isExpanded ? "▼" : "▶"} {index}
                </button>
              </div>
            );
          }
          return (
            <div style={cellStyle}>
              {index} / {colIndex}
            </div>
          );
        }}
      </VGrid>
    );
  },
};
