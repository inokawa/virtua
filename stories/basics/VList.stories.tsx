import { Meta, StoryObj } from "@storybook/react";
import React, {
  forwardRef,
  startTransition,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import {
  VList,
  VListHandle,
  CustomItemComponentProps,
  CustomWindowComponentProps,
  CacheSnapshot,
} from "../../src";
import { Spinner } from "./components";

export default {
  component: VList,
} as Meta;

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

export const Default: StoryObj = {
  render: () => {
    return <VList style={{ height: "100vh" }}>{createRows(1000)}</VList>;
  },
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

export const Horizontal: StoryObj = {
  render: () => {
    return (
      <div>
        <div style={{ padding: 10, direction: "ltr" }}>
          <div>ltr</div>
          <VList style={{ width: "100%", height: 200 }} horizontal>
            {createColumns(1000)}
          </VList>
        </div>
        <div style={{ padding: 10, direction: "rtl" }}>
          <div>rtl</div>
          <VList style={{ width: "100%", height: 200 }} horizontal mode="rtl">
            {createColumns(1000)}
          </VList>
        </div>
      </div>
    );
  },
};

export const PaddingAndMargin: StoryObj = {
  render: () => {
    return (
      <VList
        style={{
          width: 400,
          height: 400,
          padding: "80px 20px",
          background: "lightgray",
        }}
      >
        {Array.from({ length: 1000 }).map((_, i) => {
          return (
            <div
              key={i}
              style={{
                height: 100,
                borderRadius: 8,
                margin: 10,
                padding: 10,
                background: "white",
              }}
            >
              {i}
            </div>
          );
        })}
      </VList>
    );
  },
};

export const Reverse: StoryObj = {
  render: () => {
    const ref = useRef<VListHandle>(null);
    useEffect(() => {
      ref.current?.scrollToIndex(999);
    }, []);
    return (
      <VList ref={ref} style={{ height: "100vh" }} mode="reverse">
        {createRows(1000)}
      </VList>
    );
  },
};

export const Sticky: StoryObj = {
  render: () => {
    return (
      <VList style={{ height: "100vh" }}>
        {Array.from({ length: 100 }).map((_, i) => {
          return (
            <div
              key={i}
              style={{
                borderBottom: "solid 1px #ccc",
              }}
            >
              {Array.from({ length: 10 }).map((_, j) => {
                const isGroupTop = j === 0;
                return (
                  <div
                    key={j}
                    style={{
                      height: 60,
                      background: "#fff",
                      ...(isGroupTop && {
                        top: 0,
                        height: 30,
                        position: "sticky",
                        borderBottom: "solid 1px #ccc",
                      }),
                    }}
                  >
                    {isGroupTop ? i : `${i} - ${j}`}
                  </div>
                );
              })}
            </div>
          );
        })}
      </VList>
    );
  },
};

export const ScrollTo: StoryObj = {
  render: () => {
    const LENGTH = 1000;
    const [scrollIndex, setScrollIndex] = useState(567);
    const [scrollOffset, setScrollOffset] = useState(1000);
    const ref = useRef<VListHandle>(null);
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
              ref.current?.scrollToIndex(scrollIndex);
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
        </div>
        <div>
          <div>
            <input
              type="number"
              value={scrollOffset}
              onChange={(e) => {
                setScrollOffset(Number(e.target.value));
              }}
            />
            <button
              onClick={() => {
                ref.current?.scrollTo(scrollOffset);
              }}
            >
              scroll to offset
            </button>
            <button
              onClick={() => {
                ref.current?.scrollBy(scrollOffset);
              }}
            >
              scroll by offset
            </button>
          </div>
        </div>
        <VList ref={ref} style={{ flex: 1 }}>
          {createRows(LENGTH)}
        </VList>
      </div>
    );
  },
};

const RestorableList = ({ id }: { id: string }) => {
  const cacheKey = "list-cache-" + id;

  const ref = useRef<VListHandle>(null);

  const [offset, cache] = useMemo(() => {
    const serialized = sessionStorage.getItem(cacheKey);
    if (!serialized) return [];
    return JSON.parse(serialized) as [number, CacheSnapshot];
  }, []);

  useEffect(() => {
    if (!ref.current) return;
    const handle = ref.current;

    if (offset) {
      handle.scrollTo(offset);
    }

    return () => {
      sessionStorage.setItem(
        cacheKey,
        JSON.stringify([handle.scrollOffset, handle.cache])
      );
    };
  }, []);

  return (
    <VList ref={ref} cache={cache} style={{ height: "100vh" }}>
      {createRows(1000)}
    </VList>
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
        {show && <RestorableList key={selectedId} id={selectedId} />}
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
      <VList
        style={{ flex: 1 }}
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
      </VList>
    );
  },
};

export const Callbacks: StoryObj = {
  render: () => {
    const items = useState(() => createRows(1000))[0];
    const [position, setPosition] = useState(0);
    const [scrolling, setScrolling] = useState(false);
    const [range, setRange] = useState([-1, -1]);
    return (
      <div
        style={{ height: "100vh", display: "flex", flexDirection: "column" }}
      >
        <div
          style={{
            background: "white",
            borderBottom: "solid 1px #ccc",
          }}
        >
          <div>scrollTop: {position}</div>
          <div>scrolling: {scrolling ? "true" : "false"}</div>
          <div>
            index: ({range[0]}, {range[1]})
          </div>
        </div>
        <VList
          style={{ flex: 1 }}
          onScroll={(offset) => {
            startTransition(() => {
              setPosition(offset);
              setScrolling(true);
            });
          }}
          onScrollStop={() => {
            startTransition(() => {
              setScrolling(false);
            });
          }}
          onRangeChange={async ({ start, end }) => {
            startTransition(() => {
              setRange([start, end]);
            });
          }}
        >
          {items}
        </VList>
      </div>
    );
  },
};

export const WithState: StoryObj = {
  render: () => {
    const [actives, setActives] = useState<{ [key: number]: boolean }>({
      0: true,
      3: true,
      6: true,
      9: true,
      12: true,
    });
    return (
      <VList style={{ height: "100vh" }}>
        {Array.from({ length: 1000 }).map((_, i) => {
          const active = !!actives[i];
          return (
            <div
              key={i}
              style={{
                borderBottom: "solid 1px #ccc",
                background: active ? "lightpink" : "#fff",
                display: "flex",
                flexDirection: "row",
                transition: "0.5s ease",
              }}
            >
              <div>
                <button
                  style={{ height: "100%" }}
                  onClick={() => {
                    setActives((prev) => ({
                      ...prev,
                      [i]: !prev[i],
                    }));
                  }}
                >
                  {active ? "close" : "open"}
                </button>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flex: 1,
                  height: active ? 200 : 40,
                  transition: "0.5s ease",
                }}
              >
                {i}
              </div>
            </div>
          );
        })}
      </VList>
    );
  },
};

export const IncreasingItems: StoryObj = {
  render: () => {
    const BATCH_LENGTH = 4;
    const createRows = (num: number, offset: number) => {
      return Array.from({ length: num }).map((_, i) => {
        i += offset;
        return i;
      });
    };

    const [prepend, setPrepend] = useState(false);
    const [rows, setRows] = useState(() => createRows(BATCH_LENGTH, 0));
    useEffect(() => {
      const timer = setInterval(() => {
        setRows((prev) =>
          prepend
            ? [...createRows(BATCH_LENGTH, prev[0] - BATCH_LENGTH), ...prev]
            : [...prev, ...createRows(BATCH_LENGTH, prev[prev.length - 1]! + 1)]
        );
      }, 500);
      return () => {
        clearInterval(timer);
      };
    });

    const heights = [20, 40, 80, 77];

    return (
      <div
        style={{ height: "100vh", display: "flex", flexDirection: "column" }}
      >
        <div>
          <label style={{ marginRight: 4 }}>
            <input
              type="radio"
              style={{ marginLeft: 4 }}
              checked={!prepend}
              onChange={() => {
                setPrepend(false);
              }}
            />
            append
          </label>
          <label style={{ marginRight: 4 }}>
            <input
              type="radio"
              style={{ marginLeft: 4 }}
              checked={prepend}
              onChange={() => {
                setPrepend(true);
              }}
            />
            prepend
          </label>
        </div>
        <VList style={{ flex: 1 }}>
          {rows.map((d, i) => (
            <div
              key={d}
              style={{
                height: heights[i % 4],
                borderBottom: "solid 1px #ccc",
                background: "#fff",
              }}
            >
              {d}
            </div>
          ))}
        </VList>
      </div>
    );
  },
};

const UlList = forwardRef<HTMLDivElement, CustomWindowComponentProps>(
  ({ children, attrs, height }, ref) => {
    return (
      <div ref={ref} {...attrs}>
        <ul style={{ position: "relative", height, margin: 0 }}>{children}</ul>
      </div>
    );
  }
);
const Li = forwardRef<HTMLLIElement, CustomItemComponentProps>(
  ({ children, style }, ref) => {
    return (
      <li ref={ref} style={{ ...style, marginLeft: 30 }}>
        {children}
      </li>
    );
  }
);

export const Ul: StoryObj = {
  render: () => {
    return (
      <div
        style={{
          width: 400,
          height: 400,
          border: "solid 1px darkgray",
          borderRadius: 8,
          background: "lightgray",
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
        }}
      >
        <div style={{ padding: 4 }}>header</div>
        <VList
          style={{
            flex: 1,
            background: "#fff",
          }}
          element={UlList}
          itemElement={Li}
          overscan={20}
        >
          {Array.from({ length: 1000 }).map((_, i) => i)}
        </VList>
      </div>
    );
  },
};
