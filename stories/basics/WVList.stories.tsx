import { Meta, StoryObj } from "@storybook/react";
import React, { useRef, useState } from "react";
import { WVList } from "../../src";
import { Spinner } from "./components";

const createRows = (num: number) => {
  const heights = [20, 40, 80, 77];
  return Array.from({ length: num }).map((_, i) => {
    return (
      <div
        key={i}
        style={{
          height: heights[i % 4],
          borderBottom: "solid 1px #ccc",
          background: "#fff",
        }}
      >
        {i}
      </div>
    );
  });
};

const createColumns = (num: number) => {
  return Array.from({ length: num }).map((_, i) => {
    return (
      <div
        key={i}
        style={{
          width: i % 3 === 0 ? 100 : 60,
          borderRight: "solid 1px #ccc",
          background: "#fff",
        }}
      >
        Column {i}
      </div>
    );
  });
};

export default {
  component: WVList,
} as Meta;

export const Default: StoryObj = {
  render: () => {
    return (
      <div style={{ padding: "200px 200px 800px 200px" }}>
        <WVList
          style={{
            border: "solid 1px gray",
          }}
        >
          {createRows(1000)}
        </WVList>
      </div>
    );
  },
};

export const Horizontal: StoryObj = {
  render: () => {
    return (
      <div style={{ padding: 200 }}>
        <WVList
          horizontal
          style={{
            height: 400,
            border: "solid 1px gray",
          }}
        >
          {createColumns(1000)}
        </WVList>
      </div>
    );
  },
};

export const Complex: StoryObj = {
  render: () => {
    return (
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div style={{ flex: 1, display: "flex", paddingTop: 600 }}>
          <WVList
            style={{
              margin: 10,
            }}
          >
            {createRows(1000)}
          </WVList>
        </div>
        <div style={{ flex: 3, paddingBottom: 600 }}>
          <WVList
            style={{
              margin: 10,
            }}
          >
            {createRows(1000)}
          </WVList>
        </div>
      </div>
    );
  },
};

export const InfiniteScrolling: StoryObj = {
  render: () => {
    const createRows = (num: number, offset: number = 0) => {
      const heights = [20, 40, 80, 77];
      return Array.from({ length: num }).map((_, i) => {
        i += offset;
        return (
          <div
            key={i}
            style={{
              height: heights[i % 4],
              borderBottom: "solid 1px #ccc",
              background: "#fff",
            }}
          >
            {i}
          </div>
        );
      });
    };

    const [fetching, setFetching] = useState(false);
    const fetchItems = async () => {
      setFetching(true);
      await new Promise((r) => setTimeout(r, 1000));
      setFetching(false);
    };

    const ITEM_BATCH_COUNT = 100;
    const [items, setItems] = useState(() => createRows(ITEM_BATCH_COUNT));
    const fetchedCountRef = useRef(-1);

    return (
      <div style={{ padding: "200px 200px 0px 200px" }}>
        <WVList
          onRangeChange={async ({ end, count }) => {
            if (end + 50 > count && fetchedCountRef.current < count) {
              fetchedCountRef.current = count;
              await fetchItems();
              setItems((prev) => [
                ...prev,
                ...createRows(ITEM_BATCH_COUNT, prev.length),
              ]);
            }
          }}
        >
          {items}
          {/* Now hide spinner without unmounting because onRangeChange is called twice due to item length change */}
          <Spinner show={fetching} />
        </WVList>
      </div>
    );
  },
};
