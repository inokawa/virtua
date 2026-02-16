import type { Meta, StoryObj } from "@storybook/react-vite";
import React, {
  Fragment,
  forwardRef,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import {
  CustomContainerComponentProps,
  CustomItemComponentProps,
  Virtualizer,
  VirtualizerHandle,
} from "../../../src";
import { Spinner, delay } from "../common";

export default {
  component: Virtualizer,
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

export const HeaderAndFooter: StoryObj = {
  render: () => {
    const headerHeight = 400;
    return (
      <div
        style={{
          width: "100%",
          height: "100vh",
          overflowY: "auto",
          // opt out browser's scroll anchoring on header/footer because it will conflict to scroll anchoring of virtualizer
          overflowAnchor: "none",
        }}
      >
        <div style={{ backgroundColor: "burlywood", height: headerHeight }}>
          header
        </div>
        <Virtualizer startMargin={headerHeight}>{createRows(1000)}</Virtualizer>
        <div style={{ backgroundColor: "steelblue", height: 600 }}>footer</div>
      </div>
    );
  },
};

export const StickyHeaderAndFooter: StoryObj = {
  render: () => {
    const headerHeight = 40;
    return (
      <div
        style={{
          width: "100%",
          height: "100vh",
          overflowY: "auto",
          // opt out browser's scroll anchoring on header/footer because it will conflict to scroll anchoring of virtualizer
          overflowAnchor: "none",
        }}
      >
        <div
          style={{
            position: "sticky",
            backgroundColor: "burlywood",
            height: headerHeight,
            top: 0,
            zIndex: 1,
          }}
        >
          header
        </div>
        <Virtualizer startMargin={headerHeight}>{createRows(1000)}</Virtualizer>
        <div
          style={{
            position: "sticky",
            backgroundColor: "steelblue",
            height: 60,
            bottom: 0,
          }}
        >
          footer
        </div>
      </div>
    );
  },
};

export const Overflow: StoryObj = {
  render: () => {
    const spacerSize = 24;
    return (
      <div
        style={{
          boxSizing: "border-box",
          height: "100vh",
          overflowY: "auto",
          // opt out browser's scroll anchoring on header/footer because it will conflict to scroll anchoring of virtualizer
          overflowAnchor: "none",
          border: "solid 1px #eee",
          borderRadius: 8,
        }}
      >
        <div style={{ height: spacerSize }} />
        <Virtualizer startMargin={spacerSize}>
          {Array.from({ length: 1000 }).map((_, i) => {
            return (
              <div
                key={i}
                style={{
                  padding: "16px 20px",
                  borderBottom: "1px solid #eee",
                  position: "relative",
                  background: "white",
                  display: "flex",
                  alignItems: "center",
                  fontSize: 16,
                }}
              >
                {i}
                <div
                  style={{
                    position: "absolute",
                    top: -16,
                    right: 8,
                    background: "white",
                    border: "1px solid #ddd",
                    borderRadius: 8,
                    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
                    zIndex: 10,
                    display: "flex",
                    gap: 2,
                  }}
                >
                  {["😊", "💬", "✏️", "⋯"].map((t) => (
                    <button
                      style={{
                        padding: "4px 8px",
                        border: "none",
                        background: "white",
                        borderRadius: 6,
                        cursor: "pointer",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>
            );
          })}
        </Virtualizer>
      </div>
    );
  },
};

export const Nested: StoryObj = {
  render: () => {
    const scrollRef = useRef<HTMLDivElement>(null);
    const outerPadding = 40;
    const innerPadding = 60;
    return (
      <div
        ref={scrollRef}
        style={{
          width: "100%",
          height: "100vh",
          overflowY: "auto",
          // opt out browser's scroll anchoring on header/footer because it will conflict to scroll anchoring of virtualizer
          overflowAnchor: "none",
        }}
      >
        <div style={{ backgroundColor: "burlywood", padding: outerPadding }}>
          <div style={{ backgroundColor: "steelblue", padding: innerPadding }}>
            <Virtualizer
              scrollRef={
                // scrollRef is required when the scroll container is not the direct parent
                scrollRef
              }
              startMargin={outerPadding + innerPadding}
            >
              {createRows(1000)}
            </Virtualizer>
          </div>
        </div>
      </div>
    );
  },
};

export const Reverse: StoryObj = {
  render: () => {
    const ref = useRef<VirtualizerHandle>(null);
    useEffect(() => {
      ref.current?.scrollToIndex(999);
    }, []);
    return (
      <div
        style={{
          height: "100vh",
          overflowY: "auto",
          // opt out browser's scroll anchoring on header/footer because it will conflict to scroll anchoring of virtualizer
          overflowAnchor: "none",
          // flex style for spacer
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            // spacer to align virtualizer to the bottom when all items are visible in the viewport
            flexGrow: 1,
          }}
        />
        <Virtualizer ref={ref}>{createRows(1000)}</Virtualizer>
      </div>
    );
  },
};

// export const Inverted: StoryObj = {
//   render: () => {
//     return (
//       <div
//         style={{
//           height: "100vh",
//           overflowY: "auto",
//           // opt out browser's scroll anchoring on header/footer because it will conflict to scroll anchoring of virtualizer
//           overflowAnchor: "none",
//           // apply column-reverse to reverse scroll direction
//           display: "flex",
//           flexDirection: "column-reverse",
//         }}
//       >
//         <Virtualizer>{createRows(1000)}</Virtualizer>
//       </div>
//     );
//   },
// };

export const AlignBottom: StoryObj = {
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
              ],
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
        <div
          style={{
            flex: 1,
            overflowY: "auto",
            // opt out browser's scroll anchoring on header/footer because it will conflict to scroll anchoring of virtualizer
            overflowAnchor: "none",
            // flex style for spacer
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              // spacer to align virtualizer to the bottom when all items are visible in the viewport
              flexGrow: 1,
            }}
          />
          <Virtualizer shift={prepend}>
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
          </Virtualizer>
        </div>
      </div>
    );
  },
};

export const BiDirectionalInfiniteScrolling: StoryObj = {
  render: () => {
    const id = useRef(0);
    const createRows = (num: number) => {
      const heights = [20, 40, 80, 77];
      return Array.from({ length: num }).map(() => {
        const i = id.current++;
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

    const [shifting, setShifting] = useState(false);
    const [startFetching, setStartFetching] = useState(false);
    const [endFetching, setEndFetching] = useState(false);
    const fetchStart = async () => {
      setShifting(true);

      setStartFetching(true);
      await delay(1000);
      setItems((prev) => [...createRows(ITEM_BATCH_COUNT).reverse(), ...prev]);
      setStartFetching(false);
    };
    const fetchEnd = async () => {
      setShifting(false);

      setEndFetching(true);
      await delay(1000);
      setItems((prev) => [...prev, ...createRows(ITEM_BATCH_COUNT)]);
      setEndFetching(false);
    };

    const ref = useRef<VirtualizerHandle>(null);
    const ITEM_BATCH_COUNT = 100;
    const [items, setItems] = useState(() => createRows(ITEM_BATCH_COUNT * 2));
    const THRESHOLD = 50;
    const count = items.length;
    const startFetchedCountRef = useRef(-1);
    const endFetchedCountRef = useRef(-1);

    const ready = useRef(false);
    useEffect(() => {
      ref.current?.scrollToIndex(items.length / 2 + 1);
      ready.current = true;
    }, []);

    const spinnerHeight = 100;

    return (
      <div
        style={{
          height: "100vh",
          overflowY: "auto",
          // opt out browser's scroll anchoring on header/footer because it will conflict to scroll anchoring of virtualizer
          overflowAnchor: "none",
        }}
      >
        <Spinner
          height={spinnerHeight}
          style={startFetching ? undefined : { visibility: "hidden" }}
        />
        <Virtualizer
          ref={ref}
          shift={shifting ? true : false}
          startMargin={spinnerHeight}
          onScroll={async () => {
            if (!ready.current) return;
            if (!ref.current) return;

            const startOffset = ref.current.scrollOffset;
            const endOffset = startOffset + ref.current.viewportSize;
            if (
              endFetchedCountRef.current < count &&
              ref.current.findItemIndex(endOffset) + THRESHOLD > count
            ) {
              endFetchedCountRef.current = count;
              await fetchEnd();
            } else if (
              startFetchedCountRef.current < count &&
              ref.current.findItemIndex(startOffset) - THRESHOLD < 0
            ) {
              startFetchedCountRef.current = count;
              await fetchStart();
            }
          }}
        >
          {items}
        </Virtualizer>
        <Spinner
          height={spinnerHeight}
          style={endFetching ? undefined : { visibility: "hidden" }}
        />
      </div>
    );
  },
};

const Ul = forwardRef<HTMLUListElement, CustomContainerComponentProps>(
  ({ children, style }, ref) => {
    return (
      <ul ref={ref} style={{ ...style, margin: 0, overflow: "hidden" }}>
        {children}
      </ul>
    );
  },
);

const Li = forwardRef<HTMLLIElement, CustomItemComponentProps>(
  ({ children, style }, ref) => {
    return (
      <li ref={ref} style={{ ...style, marginLeft: 30 }}>
        {children}
      </li>
    );
  },
);

export const UlElement: StoryObj = {
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
        <div
          style={{
            overflowY: "auto",
            flex: 1,
            background: "#fff",
          }}
        >
          <Virtualizer as={Ul} item={Li}>
            {Array.from({ length: 1000 }).map((_, i) => i)}
          </Virtualizer>
        </div>
      </div>
    );
  },
};

const COLUMN_WIDTHS = [100, 200, 300, 100, 200, 300, 100, 300, 400, 200];

const TABLE_HEADER_HEIGHT = 30;

const Table = forwardRef<HTMLTableElement, CustomContainerComponentProps>(
  ({ children, style }, ref) => {
    return (
      <table
        ref={ref}
        style={{
          height: style?.height,
          position: "relative",
          tableLayout: "fixed",
          borderCollapse: "collapse",
          whiteSpace: "nowrap",
        }}
        border={1}
      >
        <thead
          style={{
            position: "sticky",
            top: 0,
            zIndex: 1,
            height: TABLE_HEADER_HEIGHT,
            minHeight: TABLE_HEADER_HEIGHT,
            maxHeight: TABLE_HEADER_HEIGHT,
          }}
        >
          <tr>
            {COLUMN_WIDTHS.map((width, i) => (
              <th
                key={i}
                style={{
                  color: "white",
                  background: "darkgray",
                  minWidth: width,
                }}
              >
                {i}
              </th>
            ))}
          </tr>
        </thead>
        <tbody
          style={{
            ...style,
            contain: undefined,
            position: "absolute",
            top: TABLE_HEADER_HEIGHT,
            left: 0,
          }}
        >
          {children}
        </tbody>
      </table>
    );
  },
);

export const TableElement: StoryObj = {
  render: () => {
    const data = useMemo(
      () => Array.from({ length: 1000 }).map((_, i) => i),
      [],
    );
    return (
      <div
        style={{
          width: "100%",
          height: "75%",
          overflow: "auto",
        }}
      >
        <Virtualizer
          data={data}
          as={Table}
          item="tr"
          startMargin={TABLE_HEADER_HEIGHT}
        >
          {(i) => (
            <Fragment key={i}>
              {COLUMN_WIDTHS.map((width, j) => (
                <td key={j} style={{ minWidth: width, background: "#fff" }}>
                  {i}, {j}
                </td>
              ))}
            </Fragment>
          )}
        </Virtualizer>
      </div>
    );
  },
};
