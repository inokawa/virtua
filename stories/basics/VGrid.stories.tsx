import { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { VGrid } from "../../src";

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

export const Rtl: StoryObj = {
  render: () => {
    return (
      <VGrid
        style={{ height: "100vh", direction: "rtl" }}
        row={1000}
        col={500}
        rtl
      >
        {({ rowIndex, colIndex }) => (
          <div
            style={{
              border: "solid 1px gray",
              background: "white",
              padding: 4,
              width: 100,
            }}
          >
            {rowIndex} / {colIndex}
          </div>
        )}
      </VGrid>
    );
  },
};
