import { Meta, StoryObj } from "@storybook/react-vite";
import React, { useRef, useState } from "react";
import { experimental_VGrid as VGrid, VGridHandle } from "../../../src";
import { faker } from "@faker-js/faker";

export default {
  component: VGrid,
} as Meta;

export const Default: StoryObj = {
  render: () => {
    return (
      <VGrid style={{ height: "100vh" }} row={1000} col={500}>
        {({ rowIndex, colIndex }) => (
          <div
            style={{
              background: "white",
              padding: 4,
              borderLeft: colIndex !== 0 ? "solid 1px gray" : undefined,
              borderTop: rowIndex !== 0 ? "solid 1px gray" : undefined,
            }}
          >
            {rowIndex} / {colIndex}
          </div>
        )}
      </VGrid>
    );
  },
};

export const Fixed: StoryObj = {
  render: () => {
    return (
      <VGrid style={{ height: "100vh" }} row={1000} col={500}>
        {({ rowIndex, colIndex }) => (
          <div
            style={{
              background: "white",
              padding: 4,
              width: ((colIndex % 2) + 1) * 100,
              height: ((rowIndex % 2) + 1) * 100,
              borderLeft: colIndex !== 0 ? "solid 1px gray" : undefined,
              borderTop: rowIndex !== 0 ? "solid 1px gray" : undefined,
            }}
          >
            {rowIndex} / {colIndex}
          </div>
        )}
      </VGrid>
    );
  },
};

export const Objects: StoryObj = {
  render: () => {
    const columns = ["id", "username", "email", "company", "domain"] as const;
    const data = Array.from({ length: 1000 }).map((_, i) => ({
      id: i,
      username: faker.person.fullName(),
      email: faker.internet.email(),
      company: faker.company.name(),
      domain: faker.internet.domainName(),
    }));
    return (
      <VGrid
        style={{ height: "100vh" }}
        row={data.length}
        col={columns.length}
        stickyRows={[0]}
      >
        {({ rowIndex, colIndex }) =>
          rowIndex === 0 ? (
            <div
              style={{
                position: "sticky",
                top: 0,
                left: 0,
                background: "lightgray",
                padding: 4,
                borderLeft: colIndex !== 0 ? "solid 1px black" : undefined,
                borderTop: rowIndex !== 0 ? "solid 1px black" : undefined,
              }}
            >
              {[columns[colIndex]]}
            </div>
          ) : (
            <div
              style={{
                background: "white",
                padding: 4,
                borderLeft: colIndex !== 0 ? "solid 1px black" : undefined,
                borderTop: rowIndex !== 0 ? "solid 1px black" : undefined,
              }}
            >
              {data[rowIndex][columns[colIndex]]}
            </div>
          )
        }
      </VGrid>
    );
  },
};

export const Sticky: StoryObj = {
  render: () => {
    const stickyRows = [0];
    const stickyCols = [0, 1];
    return (
      <VGrid
        style={{ height: "100vh" }}
        row={1000}
        col={500}
        stickyRows={stickyRows}
        stickyCols={stickyCols}
      >
        {({ rowIndex, colIndex }) => {
          const isStickyRow = stickyRows.includes(rowIndex);
          const isStickyCol = stickyCols.includes(colIndex);
          return (
            <div
              style={{
                border: "solid 1px gray",
                background: isStickyRow
                  ? "darkgray"
                  : isStickyCol
                  ? "lightgray"
                  : "white",
                color: isStickyRow ? "white" : undefined,
                padding: 4,
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

export const DynamicHeight: StoryObj = {
  render: () => {
    return (
      <VGrid style={{ height: "100vh" }} row={1000} col={500}>
        {({ rowIndex, colIndex }) => (
          <div
            style={{
              background: "white",
              padding: 4,
              width: ((colIndex % 2) + 1) * 100,
              borderLeft: colIndex !== 0 ? "solid 1px gray" : undefined,
              borderTop: rowIndex !== 0 ? "solid 1px gray" : undefined,
            }}
          >
            <div>
              {rowIndex} / {colIndex}
            </div>
            {Array.from({ length: (rowIndex % 8) + 1 }, () => (
              <div>Hello world!</div>
            ))}
          </div>
        )}
      </VGrid>
    );
  },
};

export const DynamicWidth: StoryObj = {
  render: () => {
    return (
      <VGrid style={{ height: "100vh" }} row={1000} col={500}>
        {({ rowIndex, colIndex }) => (
          <div
            style={{
              background: "white",
              padding: 4,
              height: ((rowIndex % 2) + 1) * 100,
              borderLeft: colIndex !== 0 ? "solid 1px gray" : undefined,
              borderTop: rowIndex !== 0 ? "solid 1px gray" : undefined,
            }}
          >
            <div>
              {rowIndex} / {colIndex}
            </div>
            <div>
              {Array.from({ length: (colIndex % 4) + 1 }, () => (
                <span>Hello world!</span>
              ))}
            </div>
          </div>
        )}
      </VGrid>
    );
  },
};

export const Resizeable: StoryObj = {
  render: () => {
    const SIZE = 80;
    const LENGTH = 100;
    const [widths, setWidths] = useState(() => new Map<number, number>());
    const [heights, setHeights] = useState(() => new Map<number, number>());
    const grid = useRef<VGridHandle>(null);

    function randomize() {
      const getSize = () =>
        Math.random() < 0.8 ? 40 + Math.round(200 * Math.random()) : SIZE;
      const newWidths = new Map<number, number>();
      const newHeights = new Map<number, number>();
      // skip index 0 to keep inputs stable
      for (let i = 1; i < LENGTH; i++) {
        newWidths.set(i, getSize());
        newHeights.set(i, getSize());
      }
      setWidths(newWidths);
      setHeights(newHeights);
    }

    return (
      <VGrid
        ref={grid}
        style={{ height: "100vh" }}
        row={LENGTH}
        col={LENGTH}
        cellHeight={SIZE}
        cellWidth={SIZE}
      >
        {({ rowIndex, colIndex }) => (
          <div
            style={{
              background: "white",
              padding: 4,
              width: widths.get(colIndex) ?? SIZE,
              height: heights.get(rowIndex) ?? SIZE,
              borderLeft: colIndex !== 0 ? "solid 1px gray" : undefined,
              borderTop: rowIndex !== 0 ? "solid 1px gray" : undefined,
            }}
          >
            <div>
              {rowIndex} / {colIndex}
            </div>

            {colIndex === 0 && rowIndex === 0 ? (
              // randomize all cols & rows
              <button onClick={randomize}>random</button>
            ) : rowIndex === 0 ? (
              // resize column
              <input
                type="number"
                step={5}
                value={widths.get(colIndex) ?? SIZE}
                style={{ width: 50 }}
                onChange={(e) => {
                  const w = e.target.valueAsNumber;
                  setWidths((map) => new Map(map).set(colIndex, w));
                }}
              />
            ) : colIndex === 0 ? (
              // resize row
              <input
                type="number"
                step={5}
                value={heights.get(rowIndex) ?? SIZE}
                style={{ width: 50 }}
                onChange={(e) => {
                  const h = e.target.valueAsNumber;
                  setHeights((map) => new Map(map).set(rowIndex, h));
                }}
              />
            ) : null}
          </div>
        )}
      </VGrid>
    );
  },
};

export const ScrollTo: StoryObj = {
  render: () => {
    const LENGTH = 1000;
    const [scrollIndex, setScrollIndex] = useState<[number, number]>([
      567, 567,
    ]);
    const [scrollOffset, setScrollOffset] = useState<[number, number]>([
      1000, 1000,
    ]);
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
              value={scrollIndex[0]}
              onChange={(e) => {
                setScrollIndex((prev) => [Number(e.target.value), prev[1]]);
              }}
            />
          </label>
          <label>
            row
            <input
              type="number"
              value={scrollIndex[1]}
              onChange={(e) => {
                setScrollIndex((prev) => [prev[0], Number(e.target.value)]);
              }}
            />
          </label>
          <button
            onClick={() => {
              ref.current?.scrollToIndex(scrollIndex[0], scrollIndex[1]);
            }}
          >
            scroll to index
          </button>
          <button
            onClick={() => {
              setScrollIndex([
                Math.round(LENGTH * Math.random()),
                Math.round(LENGTH * Math.random()),
              ]);
            }}
          >
            randomize
          </button>
        </div>
        <div>
          <div>
            <label>
              x
              <input
                type="number"
                value={scrollOffset[0]}
                onChange={(e) => {
                  setScrollOffset((prev) => [Number(e.target.value), prev[1]]);
                }}
              />
            </label>
            <label>
              y
              <input
                type="number"
                value={scrollOffset[1]}
                onChange={(e) => {
                  setScrollOffset((prev) => [prev[0], Number(e.target.value)]);
                }}
              />
            </label>
            <button
              onClick={() => {
                ref.current?.scrollTo(scrollOffset[0], scrollOffset[1]);
              }}
            >
              scroll to offset
            </button>
            <button
              onClick={() => {
                ref.current?.scrollBy(scrollOffset[0], scrollOffset[1]);
              }}
            >
              scroll by offset
            </button>
          </div>
        </div>
        <VGrid ref={ref} style={{ height: "100vh" }} row={LENGTH} col={LENGTH}>
          {({ rowIndex, colIndex }) => (
            <div
              style={{
                background: "white",
                padding: 4,
                width: 160,
                height: 80,
                borderLeft: colIndex !== 0 ? "solid 1px gray" : undefined,
                borderTop: rowIndex !== 0 ? "solid 1px gray" : undefined,
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

export const Few: StoryObj = {
  render: () => {
    return (
      <VGrid style={{ height: "100vh" }} row={3} col={3}>
        {({ rowIndex, colIndex }) => (
          <div
            style={{
              background: "white",
              padding: 4,
              borderLeft: colIndex !== 0 ? "solid 1px gray" : undefined,
              borderTop: rowIndex !== 0 ? "solid 1px gray" : undefined,
            }}
          >
            {rowIndex} / {colIndex}
          </div>
        )}
      </VGrid>
    );
  },
};
