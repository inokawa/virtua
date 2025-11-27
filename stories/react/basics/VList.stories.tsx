import { Meta, StoryObj } from "@storybook/react-vite";
import React, {
  forwardRef,
  startTransition,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import {
  VList,
  VListHandle,
  CacheSnapshot,
  ScrollToIndexAlign,
} from "../../../src";
import { Spinner, delay } from "../common";
import { renderToString } from "react-dom/server";
import { hydrateRoot } from "react-dom/client";

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
      <div style={{ padding: 10 }}>
        <VList style={{ width: "100%", height: 200 }} horizontal>
          {createColumns(1000)}
        </VList>
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
                margin: 20,
                padding: 20,
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

export const Gap: StoryObj = {
  render: () => {
    return (
      <VList gap={10} style={{ height: "100vh" }}>
        {createRows(1000)}
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
      <VList ref={ref} style={{ height: "100vh" }} reverse>
        {createRows(1000)}
      </VList>
    );
  },
};

export const Responsive: StoryObj = {
  render: () => {
    const itemClass = "item";
    return (
      <>
        <VList style={{ height: "100vh" }}>
          {Array.from({ length: 1000 }).map((_, i) => {
            return (
              <div
                key={i}
                className={itemClass}
                style={{
                  borderBottom: "solid 1px #ccc",
                  background: "#fff",
                }}
              >
                {i}
              </div>
            );
          })}
        </VList>
        <style>{`
          .${itemClass} {
            height: 40px;

            @media (max-width: 1024px) {
              height: 80px;
            }
            @media (max-width: 700px) {
              height: 160px;
            }
            @media (max-width: 400px) {
              height: 320px;
            }
          }
        `}</style>
      </>
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

export const RenderProp: StoryObj = {
  render: () => {
    const id = useRef(0);
    const heights = [20, 40, 80, 77];
    const createItem = () => {
      const i = id.current++;
      return {
        id: i,
        height: heights[i % 4],
      };
    };

    const [items, setItems] = useState(() => {
      return Array.from({ length: 1000 }).map(() => createItem());
    });

    return (
      <div
        style={{ height: "100vh", display: "flex", flexDirection: "column" }}
      >
        <div>
          <button
            onClick={() => {
              setItems((prev) => [
                ...prev,
                ...Array.from({ length: 500 }).map(() => createItem()),
              ]);
            }}
          >
            append more
          </button>
        </div>
        <VList style={{ flex: 1 }} data={items}>
          {(item, i) => {
            return (
              <div
                key={item.id}
                style={{
                  height: item.height,
                  borderBottom: "solid 1px #ccc",
                  background: "#fff",
                }}
              >
                {i}
              </div>
            );
          }}
        </VList>
      </div>
    );
  },
};

export const Keyboard: StoryObj = {
  render: () => {
    const ref = useRef<VListHandle>(null);
    const [selectedIndex, setSelectedIndex] = useState(-1);
    const items = Array.from({ length: 1000 }).map((_, i) => {
      return (
        <div
          key={i}
          style={{
            height: 60,
            borderBottom: "solid 1px #ccc",
            background: selectedIndex === i ? "skyblue" : "white",
            cursor: "pointer",
          }}
          onClick={() => {
            setSelectedIndex(i);
          }}
        >
          {i}
        </div>
      );
    });

    return (
      <VList
        ref={ref}
        style={{ height: 400, width: 400, margin: 10 }}
        tabIndex={0}
        onKeyDown={(e) => {
          if (!ref.current) return;

          switch (e.code) {
            case "ArrowUp":
              e.preventDefault();
              const prevIndex = Math.max(selectedIndex - 1, 0);
              setSelectedIndex(prevIndex);
              ref.current.scrollToIndex(prevIndex, { align: "nearest" });
              break;
            case "ArrowDown":
              e.preventDefault();
              const nextIndex = Math.min(selectedIndex + 1, items.length - 1);
              setSelectedIndex(nextIndex);
              ref.current.scrollToIndex(nextIndex, { align: "nearest" });
              break;
          }
        }}
      >
        {items}
      </VList>
    );
  },
};

const RestorableList = ({ id }: { id: string }) => {
  const cacheKey = "list-cache-" + id;

  const ref = useRef<VListHandle>(null);

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

const SkeletonItem = () => {
  return (
    <div
      style={{
        padding: 8,
        background: "#fff",
        borderBottom: "solid 1px #ccc",
      }}
    >
      <div style={{ height: 60, background: "#eee" }} />
    </div>
  );
};

export const Skeleton: StoryObj = {
  render: () => {
    const idRef = useRef(0);
    const createRows = (num: number) => {
      const heights = [20, 40, 80, 77];
      return Array.from({ length: num }).map((_, i) => {
        const id = idRef.current++;
        return (
          <div
            key={id}
            style={{
              height: heights[i % 4],
              borderBottom: "solid 1px #ccc",
              background: "#fff",
            }}
          >
            {id}
          </div>
        );
      });
    };

    const [fetching, setFetching] = useState(false);
    const fetchItems = async () => {
      setFetching(true);
      await delay(3000);
      setItems((prev) => [...prev, ...createRows(ITEM_BATCH_COUNT)]);
      setFetching(false);
    };

    const ITEM_BATCH_COUNT = 100;
    const [items, setItems] = useState(() => createRows(ITEM_BATCH_COUNT));

    return (
      <div
        style={{ display: "flex", flexDirection: "column", height: "100vh" }}
      >
        <div>
          <button
            onClick={() => {
              fetchItems();
            }}
          >
            load more
          </button>
        </div>
        <VList style={{ flex: 1 }}>
          {items}
          {fetching &&
            Array.from({ length: ITEM_BATCH_COUNT }).map((_, i) => (
              <SkeletonItem key={`skeleton_${i}`} />
            ))}
        </VList>
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

    const ref = useRef<VListHandle>(null);

    const ITEM_BATCH_COUNT = 100;
    const [items, setItems] = useState(() => createRows(ITEM_BATCH_COUNT));
    const fetchedCountRef = useRef(-1);
    const count = items.length;

    return (
      <VList
        ref={ref}
        style={{ flex: 1 }}
        onScroll={async () => {
          if (!ref.current) return;
          if (
            fetchedCountRef.current < count &&
            ref.current.findItemIndex(
              ref.current.scrollOffset + ref.current.viewportSize
            ) +
              50 >
              count
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
      </VList>
    );
  },
};

export const Statuses: StoryObj = {
  render: () => {
    const ref = useRef<VListHandle>(null);
    const items = useState(() => createRows(1000))[0];
    const [position, setPosition] = useState(0);
    const [scrolling, setScrolling] = useState(false);
    const [startIndex, setStartIndex] = useState(-1);
    const [endIndex, setEndIndex] = useState(-1);

    const [isAtTop, setIsAtTop] = useState(false);
    const [isAtBottom, setIsAtBottom] = useState(false);

    useEffect(() => {
      if (!ref.current) return;
      if (ref.current.scrollOffset === 0) {
        setIsAtTop(true);
      } else {
        setIsAtTop(false);
      }
      if (
        ref.current.scrollOffset -
          ref.current.scrollSize +
          ref.current.viewportSize >=
        // FIXME: The sum may not be 0 because of sub-pixel value when browser's window.devicePixelRatio has decimal value
        -1.5
      ) {
        setIsAtBottom(true);
      } else {
        setIsAtBottom(false);
      }
    }, [position]);

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
            index: ({startIndex}, {endIndex})
          </div>
          <div>at top: {isAtTop ? "true" : "false"}</div>
          <div>at bottom: {isAtBottom ? "true" : "false"}</div>
        </div>
        <VList
          ref={ref}
          style={{ flex: 1 }}
          onScroll={(offset) => {
            startTransition(() => {
              setPosition(offset);
              setScrolling(true);
              if (!ref.current) return;
              const startOffset = ref.current.scrollOffset;
              const endOffset = startOffset + ref.current.viewportSize;
              setStartIndex(ref.current.findItemIndex(startOffset));
              setEndIndex(ref.current.findItemIndex(endOffset));
            });
          }}
          onScrollEnd={() => {
            startTransition(() => {
              setScrolling(false);
            });
          }}
        >
          {items}
        </VList>
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
    const [reverse, setReverse] = useState(false);
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
      <div
        style={{ height: "100vh", display: "flex", flexDirection: "column" }}
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
          <label style={{ marginRight: 4 }}>
            <input
              type="checkbox"
              style={{ marginLeft: 4 }}
              checked={reverse}
              onChange={() => {
                setReverse((prev) => !prev);
              }}
            />
            reverse
          </label>
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
        <VList style={{ flex: 1 }} shift={prepend} reverse={reverse}>
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
        </VList>
      </div>
    );
  },
};

const SSRApp = () => {
  const COUNT = 1000;
  return <VList ssrCount={30}>{createRows(COUNT)}</VList>;
};

const SSRAppHorizontal = () => {
  const COUNT = 1000;
  return (
    <VList ssrCount={30} horizontal>
      {createColumns(COUNT)}
    </VList>
  );
};

const SSRAppScrollOnMount = () => {
  const ref = useRef<VListHandle>(null);
  useEffect(() => {
    if (!ref.current) return;

    ref.current.scrollToIndex(100, {
      smooth: true,
    });
  }, []);

  const COUNT = 10000;
  return (
    <VList ref={ref} ssrCount={30}>
      {createRows(COUNT)}
    </VList>
  );
};

export const SSR: StoryObj = {
  render: () => {
    const [hydrated, setHydrated] = useState(false);
    const [type, setType] = useState<"vertical" | "horizontal" | "smooth">(
      "vertical"
    );
    const ref = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
      if (!ref.current) return;
      const App =
        type === "smooth"
          ? SSRAppScrollOnMount
          : type === "horizontal"
          ? SSRAppHorizontal
          : SSRApp;

      if (!hydrated) {
        ref.current.innerHTML = renderToString(<App />);
      } else {
        hydrateRoot(ref.current, <App />);
      }
    }, [hydrated, type]);

    return (
      <div
        style={{ height: "100vh", display: "flex", flexDirection: "column" }}
      >
        <div>
          <div>
            <button
              disabled={hydrated}
              onClick={() => {
                setHydrated(true);
              }}
            >
              hydrate
            </button>
          </div>
          <div>
            <label>
              <input
                type="radio"
                checked={type === "vertical"}
                onChange={() => {
                  setType("vertical");
                }}
              />
              vertical
            </label>
            <label>
              <input
                type="radio"
                checked={type === "horizontal"}
                onChange={() => {
                  setType("horizontal");
                }}
              />
              horizontal
            </label>
            <label>
              <input
                type="radio"
                checked={type === "smooth"}
                onChange={() => {
                  setType("smooth");
                }}
              />
              smooth scroll on hydrate
            </label>
          </div>
        </div>
        <div ref={ref} style={{ flex: 1 }} />
      </div>
    );
  },
};
