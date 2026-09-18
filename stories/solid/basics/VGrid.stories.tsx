/**
 * @jsxImportSource solid-js
 */
import type { Meta, StoryObj } from "storybook-solidjs-vite";
import { createSignal } from "solid-js";
import { faker } from "@faker-js/faker";
import { VGrid, type VGridHandle } from "../../../src/solid";

export default {
  component: VGrid,
} as Meta;

export const Default: StoryObj = {
  render: () => (
    <VGrid
      rows={1000}
      rowHeight={40}
      cols={500}
      colWidth={100}
      style={{
        height: "100vh",
        "box-sizing": "border-box",
        border: "solid 1px gray",
        background: "white",
      }}
    >
      {(rowIndex, colIndex) => (
        <div
          style={{
            padding: "4px",
            "border-right": "solid 1px gray",
            "border-bottom": "solid 1px gray",
          }}
        >
          {rowIndex} / {colIndex}
        </div>
      )}
    </VGrid>
  ),
};

export const Pinned: StoryObj = {
  render: () => {
    const ROWS = 1000;
    const COLS = 500;
    const PINNED_ROWS = { header: 1, footer: 1 };
    const PINNED_COLS = { header: 2, footer: 1 };
    return (
      <VGrid
        rows={ROWS}
        rowHeight={40}
        cols={COLS}
        colWidth={100}
        headerRows={PINNED_ROWS.header}
        footerRows={PINNED_ROWS.footer}
        headerCols={PINNED_COLS.header}
        footerCols={PINNED_COLS.footer}
        style={{
          height: "100vh",
          "box-sizing": "border-box",
          border: "solid 1px gray",
          background: "white",
        }}
      >
        {(rowIndex, colIndex) => {
          const isPinnedRow =
            rowIndex < PINNED_ROWS.header ||
            rowIndex >= ROWS - PINNED_ROWS.footer;
          const isPinnedCol =
            colIndex < PINNED_COLS.header ||
            colIndex >= COLS - PINNED_COLS.footer;
          return (
            <div
              style={{
                padding: "4px",
                "border-right": "solid 1px gray",
                "border-bottom": "solid 1px gray",
                background: isPinnedRow
                  ? "darkgray"
                  : isPinnedCol
                    ? "lightgray"
                    : undefined,
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
    const data = Array.from({ length: 1000 }).map((_, i) => ({
      id: i,
      username: faker.person.fullName(),
      email: faker.internet.email(),
      company: faker.company.name(),
      domain: faker.internet.domainName(),
    }));
    // the header row has no data
    const rows = [null, ...data];
    return (
      <VGrid
        rows={rows}
        rowHeight={30}
        cols={columns}
        colWidth="width"
        headerRows={1}
        style={{
          height: "100vh",
          "box-sizing": "border-box",
          border: "solid 1px black",
          background: "white",
        }}
      >
        {(row, column) => (
          <div
            style={{
              padding: "4px",
              "border-right": "solid 1px black",
              "border-bottom": "solid 1px black",
              overflow: "hidden",
              "text-overflow": "ellipsis",
              "white-space": "nowrap",
              background: row === null ? "burlywood" : undefined,
            }}
          >
            {row === null ? column.key : row[column.key]}
          </div>
        )}
      </VGrid>
    );
  },
};

export const ScrollTo: StoryObj = {
  render: () => {
    const LENGTH = 1000;
    const [rowIndex, setRowIndex] = createSignal(567);
    const [colIndex, setColIndex] = createSignal(567);
    const [vertical, setVertical] = createSignal(1000);
    const [horizontal, setHorizontal] = createSignal(1000);
    let handle: VGridHandle | undefined;
    return (
      <div
        style={{ height: "100vh", display: "flex", "flex-direction": "column" }}
      >
        <div>
          <label>
            col
            <input
              type="number"
              value={colIndex()}
              onInput={(e) => setColIndex(Number(e.currentTarget.value))}
            />
          </label>
          <label>
            row
            <input
              type="number"
              value={rowIndex()}
              onInput={(e) => setRowIndex(Number(e.currentTarget.value))}
            />
          </label>
          <button
            onClick={() => {
              handle?.scrollToIndex({
                rowIndex: rowIndex(),
                colIndex: colIndex(),
              });
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
              value={horizontal()}
              onInput={(e) => setHorizontal(Number(e.currentTarget.value))}
            />
          </label>
          <label>
            y
            <input
              type="number"
              value={vertical()}
              onInput={(e) => setVertical(Number(e.currentTarget.value))}
            />
          </label>
          <button
            onClick={() => {
              handle?.scrollTo({
                vertical: vertical(),
                horizontal: horizontal(),
              });
            }}
          >
            scroll to offset
          </button>
          <button
            onClick={() => {
              handle?.scrollBy({
                vertical: vertical(),
                horizontal: horizontal(),
              });
            }}
          >
            scroll by offset
          </button>
        </div>
        <VGrid
          ref={handle}
          rows={LENGTH}
          rowHeight={80}
          cols={LENGTH}
          colWidth={160}
          style={{
            flex: 1,
            "box-sizing": "border-box",
            border: "solid 1px gray",
            background: "white",
          }}
        >
          {(rowIndex, colIndex) => (
            <div
              style={{
                padding: "4px",
                "border-right": "solid 1px gray",
                "border-bottom": "solid 1px gray",
              }}
            >
              {rowIndex} / {colIndex}
            </div>
          )}
        </VGrid>
      </div>
    );
  },
};
