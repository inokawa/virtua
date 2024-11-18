import { Meta, StoryObj } from "@storybook/react";
import React, {
  useRef,
  useState,
  useEffect,
  useMemo,
  useLayoutEffect,
} from "react";
import {
  WindowVirtualizer,
  type WindowVirtualizerHandle,
  type CacheSnapshot,
  ScrollToIndexAlign,
} from "../../../src";
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
  component: WindowVirtualizer,
} as Meta;

export const Default: StoryObj = {
  render: () => {
    return (
      <div style={{ padding: "200px 100px" }}>
        <div style={{ border: "solid 1px gray" }}>
          <WindowVirtualizer>{createRows(1000)}</WindowVirtualizer>
        </div>
      </div>
    );
  },
};

export const Horizontal: StoryObj = {
  render: () => {
    return (
      <div style={{ padding: "100px 200px" }}>
        <div
          style={{
            display: "inline-block",
            border: "solid 1px gray",
            height: 400,
          }}
        >
          <WindowVirtualizer horizontal>
            {createColumns(1000)}
          </WindowVirtualizer>
        </div>
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
          <div
            style={{ flex: 1, display: "flex", paddingTop: 600, margin: 10 }}
          >
            <WindowVirtualizer>{createRows(1000)}</WindowVirtualizer>
          </div>
          <div style={{ flex: 3, margin: 10 }}>
            <WindowVirtualizer>
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
            </WindowVirtualizer>
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

    const ref = useRef<WindowVirtualizerHandle>(null);

    return (
      <div style={{ padding: "200px 100px 0px 100px" }}>
        <WindowVirtualizer
          ref={ref}
          onScroll={async () => {
            if (!ref.current) return;
            if (
              fetchedCountRef.current < count &&
              ref.current.findEndIndex() + 50 > count
            ) {
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
        </WindowVirtualizer>
      </div>
    );
  },
};

const RestorableList = ({ id }: { id: string }) => {
  const cacheKey = "window-list-cache-" + id;

  const ref = useRef<WindowVirtualizerHandle>(null);

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
    <WindowVirtualizer ref={ref} cache={cache}>
      {createRows(1000)}
    </WindowVirtualizer>
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

export const IncreasingItems: StoryObj = {
  render: () => {
    const id = useRef(0);
    const createRows = (num: number, offset: number) => {
      return Array.from({ length: num }).map((_, i) => {
        i += offset;
        return { id: id.current++, index: i };
      });
    };

    const [auto, setAuto] = useState(false);
    const [amount, setAmount] = useState(4);
    const [prepend, setPrepend] = useState(false);
    const [increase, setIncrease] = useState(true);
    const [rows, setRows] = useState(() => createRows(amount, 0));
    const update = () => {
      if (increase) {
        setRows((prev) =>
          prepend
            ? [...createRows(amount, (prev[0]?.index ?? 0) - amount), ...prev]
            : [
                ...prev,
                ...createRows(amount, (prev[prev.length - 1]?.index ?? 0) + 1),
              ]
        );
      } else {
        if (prepend) {
          setRows((prev) => prev.slice(amount));
        } else {
          setRows((prev) => prev.slice(0, -amount));
        }
      }
    };
    useEffect(() => {
      if (!auto) return;
      const timer = setInterval(update, 500);
      return () => {
        clearInterval(timer);
      };
    }, [update, auto]);

    const heights = [20, 40, 80, 77];

    return (
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div
          style={{
            position: "fixed",
            width: "100%",
            top: 0,
            zIndex: 1,
            backdropFilter: "blur(1px)",
          }}
        >
          <div>
            <label style={{ marginRight: 4 }}>
              <input
                type="checkbox"
                style={{ marginLeft: 4 }}
                checked={prepend}
                onChange={() => {
                  setPrepend((prev) => !prev);
                }}
              />
              prepend
            </label>
            <label style={{ marginRight: 4 }}>
              <input
                type="radio"
                style={{ marginLeft: 4 }}
                checked={increase}
                onChange={() => {
                  setIncrease(true);
                }}
              />
              increase
            </label>
            <label style={{ marginRight: 4 }}>
              <input
                type="radio"
                style={{ marginLeft: 4 }}
                checked={!increase}
                onChange={() => {
                  setIncrease(false);
                }}
              />
              decrease
            </label>
            <input
              style={{ marginLeft: 4 }}
              value={amount}
              type="number"
              min={1}
              max={10000}
              step={1}
              onChange={(e) => {
                setAmount(Number(e.target.value));
              }}
            />
          </div>

          <div>
            <label style={{ marginRight: 16 }}>
              <input
                type="checkbox"
                style={{ marginLeft: 4 }}
                checked={auto}
                onChange={() => {
                  setAuto((prev) => !prev);
                }}
              />
              auto
            </label>
            <button
              onClick={() => {
                update();
              }}
            >
              update
            </button>
          </div>
        </div>
        <div style={{ flex: 1 }}>
          <WindowVirtualizer shift={prepend}>
            {rows.map((d) => (
              <div
                key={d.id}
                style={{
                  height: heights[Math.abs(d.index) % 4],
                  borderBottom: "solid 1px #ccc",
                  background: "#fff",
                }}
              >
                {d.index}
              </div>
            ))}
          </WindowVirtualizer>
        </div>
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
    const ref = useRef<WindowVirtualizerHandle>(null);
    
    return (<>
      <div style={{ position: "fixed", top: 30, left: 150, zIndex: 1, padding: 10, border: "1px solid #ccc", backgroundColor: "white" }}>
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
        <label style={{ marginLeft: 4 }}>
          <input
            type="radio"
            style={{ marginLeft: 4 }}
            checked={scrollIndexAlign === "start"}
            onChange={() => {
              setScrollToIndexAlign("start");
            }}
          />
          start
        </label>
        <label style={{ marginLeft: 4 }}>
          <input
            type="radio"
            style={{ marginLeft: 4 }}
            checked={scrollIndexAlign === "center"}
            onChange={() => {
              setScrollToIndexAlign("center");
            }}
          />
          center
        </label>
        <label style={{ marginLeft: 4 }}>
          <input
            type="radio"
            style={{ marginLeft: 4 }}
            checked={scrollIndexAlign === "end"}
            onChange={() => {
              setScrollToIndexAlign("end");
            }}
          />
          end
        </label>

        <label style={{ marginLeft: 4 }}>
          <input
            type="checkbox"
            style={{ marginLeft: 4 }}
            checked={smooth}
            onChange={() => {
              setSmooth((prev) => !prev);
            }}
          />
          smooth
        </label>
      </div>
      <WindowVirtualizer ref={ref} >
        {createRows(LENGTH)}
      </WindowVirtualizer>
    </>
    );
  }
}