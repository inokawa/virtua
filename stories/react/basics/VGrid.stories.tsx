import { Meta, StoryObj } from "@storybook/react";
import React, {forwardRef, useRef, useState} from "react";
import { experimental_VGrid as VGrid, VGridHandle } from "../../../src";
import {CustomCellComponent} from "../../../lib";

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
              border: "solid 1px gray",
              background: "white",
              padding: 4,
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
              border: "solid 1px gray",
              background: "white",
              padding: 4,
              width: ((colIndex % 2) + 1) * 100,
              height: ((rowIndex % 2) + 1) * 100,
            }}
          >
            {rowIndex} / {colIndex}
          </div>
        )}
      </VGrid>
    );
  },
};

export const FitToViewport: StoryObj = {
  render: () => {
    return (
      <VGrid style={{ height: "100vh" }} row={50} col={3}>
        {({ rowIndex, colIndex }) => (
          <div
            style={{
              border: "solid 1px gray",
              background: "white",
              padding: 4,
              width: '33vw',
            }}
          >
            {rowIndex} / {colIndex}
          </div>
        )}
      </VGrid>
    );
  },
};

const Item: CustomCellComponent = forwardRef(({style: {minWidth: _minWidthUnused, minHeight: _minHeightUnused, ...style}, ...props}, ref) => {
    return <div {...props} style={style} ref={ref} />
})

export const FitToViewportAdjusted: StoryObj = {
  render: () => {
    return (
      <VGrid
          style={{ height: "100vh" }}
          row={50}
          col={3}
          item={Item}
      >
        {({ rowIndex, colIndex }) => (
          <div
            style={{
              border: "solid 1px gray",
              background: "white",
              padding: 4,
              width: '33vw',
            }}
          >
            {rowIndex} / {colIndex}
          </div>
        )}
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
              border: "solid 1px gray",
              background: "white",
              padding: 4,
              width: ((colIndex % 2) + 1) * 100,
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
              border: "solid 1px gray",
              background: "white",
              padding: 4,
              height: ((rowIndex % 2) + 1) * 100,
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
                border: "solid 1px gray",
                background: "white",
                padding: 4,
                width: 160,
                height: 80,
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
