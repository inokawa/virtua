import { Meta, StoryObj } from "@storybook/react";
import React, { useRef, useState, useEffect, useMemo } from "react";
import { WVList, type WVListHandle, type CacheSnapshot } from "../../src";
import { Spinner, delay } from "../common";

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
      <div style={{ padding: 200 }}>
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
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ background: "white", height: 60, marginBottom: 40 }}>
          header
        </div>
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
          <div style={{ flex: 3 }}>
            <WVList
              style={{
                margin: 10,
              }}
            >
              {Array.from({ length: 1000 }).map((_, i) => {
                return (
                  <div
                    key={i}
                    style={{
                      height: 200,
                      borderRadius: 8,
                      margin: 16,
                      background: "#fff",
                    }}
                  >
                    {i}
                  </div>
                );
              })}
            </WVList>
          </div>
          <div style={{ flex: 2, padding: 20, paddingTop: 300 }}>
            <div
              style={{
                top: 0,
                height: 400,
                position: "sticky",
                background: "white",
              }}
            ></div>
          </div>
        </div>
        <div style={{ background: "white", height: 60, marginTop: 40 }}>
          footer
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
      await delay(1000);
      setFetching(false);
    };

    const ITEM_BATCH_COUNT = 100;
    const [items, setItems] = useState(() => createRows(ITEM_BATCH_COUNT));
    const fetchedCountRef = useRef(-1);
    const count = items.length;

    return (
      <div style={{ padding: "200px 200px 0px 200px" }}>
        <WVList
          onRangeChange={async (_, end) => {
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
          {fetching && <Spinner />}
        </WVList>
      </div>
    );
  },
};

const RestorableList = ({ id }: { id: string }) => {
  const cacheKey = "window-list-cache-" + id;

  const ref = useRef<WVListHandle>(null);

  const [offset, cache] = useMemo(() => {
    const serialized = sessionStorage.getItem(cacheKey);
    if (!serialized) return [];
    return JSON.parse(serialized) as [number, CacheSnapshot];
  }, []);

  useEffect(() => {
    if (!ref.current) return;
    const handle = ref.current;

    window.scrollTo(0, offset ?? 0);

    let scrollY = 0;
    const onScroll = () => {
      scrollY = window.scrollY;
    };
    window.addEventListener("scroll", onScroll);
    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
      // Use stored window.scrollY because it may return 0 in useEffect cleanup
      sessionStorage.setItem(cacheKey, JSON.stringify([scrollY, handle.cache]));
    };
  }, []);

  return (
    <WVList ref={ref} cache={cache}>
      {createRows(1000)}
    </WVList>
  );
};

export const ScrollRestoration: StoryObj = {
  render: () => {
    const [show, setShow] = useState(true);
    const [selectedId, setSelectedId] = useState("1");

    return (
      <div style={{ position: "relative" }}>
        <div style={{ position: "fixed", top: 0, left: 0, zIndex: 10 }}>
          <button
            onClick={() => {
              setShow((prev) => !prev);
            }}
          >
            {show ? "hide" : "show"}
          </button>
          {["1", "2", "3"].map((id) => (
            <label key={id}>
              <input
                type="radio"
                checked={selectedId === id}
                onChange={() => {
                  setSelectedId(id);
                }}
              />
              {id}
            </label>
          ))}
        </div>
        {show && <RestorableList key={selectedId} id={selectedId} />}
      </div>
    );
  },
};
