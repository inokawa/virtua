import type { Meta, StoryObj } from "@storybook/react-vite";
import React, {
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
  useSyncExternalStore,
} from "react";
import {
  VMasonry,
  VMasonryHandle,
  CacheSnapshot,
  ScrollToIndexAlign,
} from "../../../src";
import { delay } from "../common";

export default {
  component: VMasonry,
} as Meta;

const heights = [80, 180, 120, 220, 160, 100, 240];
const colors = [
  "#145ec1",
  "#b52f48",
  "#067d51",
  "#733ea4",
  "#a96506",
  "#057176",
  "#413c9b",
];

const createData = (num: number, offset: number = 0): number[] => {
  return Array.from({ length: num }).map((_, i) => i + offset);
};

const data1000 = createData(1000);

const Photo = ({
  index,
  style,
}: {
  index: number;
  style: React.CSSProperties;
}) => (
  <div
    style={{
      border: "solid 1px #ccc",
      padding: 4,
      background: colors[index % colors.length],
      color: "white",
      textShadow: "0 0 2px rgba(0, 0, 0, 0.6)",
      ...style,
    }}
  >
    {index}
  </div>
);

const photoStyle = (i: number): React.CSSProperties => ({
  height: heights[(i * 2654435761) % 7],
});

const aspectRatios = ["1 / 1", "3 / 4", "4 / 3", "2 / 3", "3 / 2"];
const aspectRatioPhotoStyle = (i: number): React.CSSProperties => ({
  aspectRatio: aspectRatios[(i * 2654435761) % 5],
});

export const Default: StoryObj = {
  render: () => {
    return (
      <VMasonry style={{ height: "100vh" }} lanes={3} data={data1000}>
        {(i) => <Photo index={i} style={photoStyle(i)} />}
      </VMasonry>
    );
  },
};

// Lanes and gap can be changed without remount, and the item at the start of the viewport stays in place

export const LanesAndGap: StoryObj = {
  render: () => {
    const [lanes, setLanes] = useState(3);
    const [gap, setGap] = useState(16);
    return (
      <div
        style={{ height: "100vh", display: "flex", flexDirection: "column" }}
      >
        <div>
          <label>
            lanes
            <input
              type="number"
              value={lanes}
              min={1}
              style={{ marginLeft: 4 }}
              onChange={(e) => setLanes(Number(e.target.value))}
            />
          </label>
          <label style={{ marginLeft: 4 }}>
            gap
            <input
              type="number"
              value={gap}
              min={0}
              style={{ marginLeft: 4 }}
              onChange={(e) => setGap(Number(e.target.value))}
            />
          </label>
        </div>
        <VMasonry style={{ flex: 1 }} lanes={lanes} gap={gap} data={data1000}>
          {(i) => <Photo index={i} style={aspectRatioPhotoStyle(i)} />}
        </VMasonry>
      </div>
    );
  },
};

// Recipe: lanes for each breakpoint of the window, like the classes of Tailwind CSS. The media queries are read synchronously, so the lanes are right from the first render on the client.
const BREAKPOINTS = [
  ["(min-width: 1536px)", 6],
  ["(min-width: 1280px)", 5],
  ["(min-width: 1024px)", 4],
  ["(min-width: 768px)", 3],
] as const;
const getLanesByMediaQuery = (): number =>
  BREAKPOINTS.find(([query]) => window.matchMedia(query).matches)?.[1] ?? 2;
const subscribeMediaQueries = (onChange: () => void) => {
  const lists = BREAKPOINTS.map(([query]) => window.matchMedia(query));
  lists.forEach((list) => list.addEventListener("change", onChange));
  return () => {
    lists.forEach((list) => list.removeEventListener("change", onChange));
  };
};

export const Responsive: StoryObj = {
  render: () => {
    const lanes = useSyncExternalStore(
      subscribeMediaQueries,
      getLanesByMediaQuery,
    );
    return (
      <VMasonry
        style={{ height: "100vh" }}
        lanes={lanes}
        gap={8}
        data={data1000}
      >
        {(i) => <Photo index={i} style={aspectRatioPhotoStyle(i)} />}
      </VMasonry>
    );
  },
};

// Recipes of layouts made of masonry, by the sizes of the items
const ROW_LANES = 4;
const STAIR_LANES = 4;
const STAIR_STEP = 60;
const STAIR_HEIGHT = 180;
const layoutRecipes = {
  // Items with the same size, which are placed in order like a grid as ties are broken by the item order
  grid: {
    lanes: 4,
    style: (): React.CSSProperties => ({
      aspectRatio: "1 / 1",
    }),
  },
  // Items in a row have the height of the tallest one in the row, so the rows are aligned and the items are placed in order, like flex-wrap
  rows: {
    lanes: ROW_LANES,
    style: (i: number): React.CSSProperties => {
      const start = i - (i % ROW_LANES);
      let height = 0;
      for (let j = start; j < start + ROW_LANES; j++) {
        height = Math.max(height, heights[(j * 2654435761) % 7]!);
      }
      return { height };
    },
  },
  // Aspect ratios alternating by index parity
  woven: {
    lanes: 3,
    style: (i: number): React.CSSProperties => ({
      aspectRatio: i % 2 === 0 ? "3 / 4" : "4 / 3",
    }),
  },
  // Taller first items in each lane, as the first items are placed into the lanes in order and equal sizes keep the stagger afterwards
  staired: {
    lanes: STAIR_LANES,
    style: (i: number): React.CSSProperties => ({
      height: i < STAIR_LANES ? STAIR_HEIGHT + i * STAIR_STEP : STAIR_HEIGHT,
    }),
  },
} satisfies Record<
  string,
  { lanes: number; style: (i: number) => React.CSSProperties }
>;

export const Layouts: StoryObj = {
  render: () => {
    const [layout, setLayout] = useState<keyof typeof layoutRecipes>("grid");
    const { lanes, style } = layoutRecipes[layout];
    return (
      <div
        style={{ height: "100vh", display: "flex", flexDirection: "column" }}
      >
        <div>
          {(Object.keys(layoutRecipes) as (keyof typeof layoutRecipes)[]).map(
            (key) => (
              <label key={key} style={{ marginRight: 4 }}>
                <input
                  type="radio"
                  checked={layout === key}
                  onChange={() => setLayout(key)}
                />
                {key}
              </label>
            ),
          )}
        </div>
        <VMasonry
          // Remount, as the sizes measured in the other layout are not useful
          key={layout}
          style={{ flex: 1 }}
          lanes={lanes}
          gap={8}
          data={data1000}
        >
          {(i) => <Photo index={i} style={style(i)} />}
        </VMasonry>
      </div>
    );
  },
};

export const ScrollTo: StoryObj = {
  render: () => {
    const LENGTH = 1000;
    const [scrollIndex, setScrollIndex] = useState(567);
    const [scrollIndexAlign, setScrollToIndexAlign] =
      useState<ScrollToIndexAlign>("start");
    const [smooth, setSmooth] = useState(false);
    const ref = useRef<VMasonryHandle>(null);
    return (
      <div
        style={{ height: "100vh", display: "flex", flexDirection: "column" }}
      >
        <div>
          <input
            type="number"
            value={scrollIndex}
            onChange={(e) => {
              setScrollIndex(Number(e.target.value));
            }}
          />
          <button
            onClick={() => {
              ref.current?.scrollToIndex(scrollIndex, {
                align: scrollIndexAlign,
                smooth: smooth,
              });
            }}
          >
            scroll to index
          </button>
          <button
            onClick={() => {
              setScrollIndex(Math.round(LENGTH * Math.random()));
            }}
          >
            randomize
          </button>
          {(["start", "center", "end", "nearest"] as const).map((align) => (
            <label key={align} style={{ marginLeft: 4 }}>
              <input
                type="radio"
                checked={scrollIndexAlign === align}
                onChange={() => {
                  setScrollToIndexAlign(align);
                }}
              />
              {align}
            </label>
          ))}
          <label style={{ marginLeft: 4 }}>
            <input
              type="checkbox"
              checked={smooth}
              onChange={() => {
                setSmooth((prev) => !prev);
              }}
            />
            smooth
          </label>
        </div>
        <VMasonry ref={ref} style={{ flex: 1 }} lanes={4} data={data1000}>
          {(i) => <Photo index={i} style={photoStyle(i)} />}
        </VMasonry>
      </div>
    );
  },
};

export const InfiniteScrolling: StoryObj = {
  render: () => {
    const ITEM_BATCH_COUNT = 100;

    const ref = useRef<VMasonryHandle>(null);
    const [items, setItems] = useState(() => createData(ITEM_BATCH_COUNT));
    const [fetching, setFetching] = useState(false);

    return (
      <div style={{ height: "100vh", position: "relative" }}>
        <VMasonry
          ref={ref}
          style={{ height: "100%" }}
          lanes={3}
          data={items}
          aria-busy={fetching}
          onScroll={async () => {
            if (!ref.current || fetching) return;
            // fetch more when the end is closer than 2 viewports
            if (
              ref.current.scrollOffset + ref.current.viewportSize * 3 >
              ref.current.scrollSize
            ) {
              setFetching(true);
              await delay(1000);
              setItems((prev) => [
                ...prev,
                ...createData(ITEM_BATCH_COUNT, prev.length),
              ]);
              setFetching(false);
            }
          }}
        >
          {(i) => <Photo index={i} style={photoStyle(i)} />}
        </VMasonry>
        {fetching && (
          // The lanes end at different heights, so a small indicator floats over the bottom instead of a row after the items
          <div
            role="status"
            aria-label="Loading"
            style={{
              position: "absolute",
              bottom: 16,
              left: "50%",
              transform: "translateX(-50%)",
              display: "flex",
              padding: 8,
              borderRadius: "50%",
              background: "white",
              boxShadow: "0 1px 4px rgba(0, 0, 0, 0.3)",
            }}
          >
            <span className="masonry-loader" />
          </div>
        )}
        <style>{`
          .masonry-loader {
            width: 20px;
            height: 20px;
            border: 3px solid #ccc;
            border-top-color: #333;
            border-radius: 50%;
            animation: masonry-loader-rotate 0.8s linear infinite;
          }
          @keyframes masonry-loader-rotate {
            to { transform: rotate(360deg); }
          }
        `}</style>
      </div>
    );
  },
};

const restorationData = createData(1000);

const RestorableMasonry = ({ id }: { id: string }) => {
  const cacheKey = "masonry-cache-" + id;

  const ref = useRef<VMasonryHandle>(null);

  const [offset, cache] = useMemo(() => {
    const serialized = sessionStorage.getItem(cacheKey);
    if (!serialized) return [];
    try {
      return JSON.parse(serialized) as [number, CacheSnapshot];
    } catch (e) {
      return [];
    }
  }, []);

  useLayoutEffect(() => {
    if (!ref.current) return;
    const handle = ref.current;

    if (offset) {
      handle.scrollTo(offset);
    }

    return () => {
      sessionStorage.setItem(
        cacheKey,
        JSON.stringify([handle.scrollOffset, handle.cache]),
      );
    };
  }, []);

  return (
    <VMasonry
      ref={ref}
      cache={cache}
      style={{ height: "100vh" }}
      lanes={3}
      data={restorationData}
    >
      {(i) => <Photo index={i} style={photoStyle(i)} />}
    </VMasonry>
  );
};

export const ScrollRestoration: StoryObj = {
  render: () => {
    const [show, setShow] = useState(true);
    const [selectedId, setSelectedId] = useState("1");

    return (
      <div>
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
        {show && <RestorableMasonry key={selectedId} id={selectedId} />}
      </div>
    );
  },
};
