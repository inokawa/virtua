import type { Meta, StoryObj } from "@storybook/react-vite";
import { VGrid, VGridHandle } from "../../../src";
import React, {
  CSSProperties,
  useId,
  useLayoutEffect,
  useRef,
  useState,
} from "react";

export default {
  component: VGrid,
} as Meta;

const ROWS = 100000;
const COLS = 702; // A..ZZ
const HEADER_WIDTH = 48;
const CELL_WIDTH = 100;

// 0 -> A, 25 -> Z, 26 -> AA, ...
const colName = (index: number): string => {
  let name = "";
  let n = index + 1;
  while (n > 0) {
    const m = (n - 1) % 26;
    name = String.fromCharCode(65 + m) + name;
    n = ((n - 1 - m) / 26) | 0;
  }
  return name;
};

const genKey = (r: number, c: number) => r + "-" + c;

const address = (r: number, c: number) => colName(c) + (r + 1);

const cellStyle: CSSProperties = {
  boxSizing: "border-box",
  display: "flex",
  alignItems: "center",
  width: "100%",
  padding: "0 4px",
  margin: 0,
  border: "none",
  background: "#fff",
  borderBottom: "solid 1px #e2e3e3",
  borderRight: "solid 1px #e2e3e3",
  overflow: "hidden",
  whiteSpace: "nowrap",
  font: "inherit",
  fontSize: 13,
  color: "inherit",
  outline: "none",
};

const labelStyle: CSSProperties = {
  ...cellStyle,
  justifyContent: "center",
  background: "#f8f9fa",
  borderBottom: "solid 1px #c0c0c0",
  borderRight: "solid 1px #c0c0c0",
  color: "#333",
  userSelect: "none",
};

const highlightedLabelStyle: CSSProperties = {
  ...labelStyle,
  background: "#d3e3fd",
};

const visuallyHidden: CSSProperties = {
  position: "absolute",
  width: 1,
  height: 1,
  overflow: "hidden",
  clip: "rect(0 0 0 0)",
  whiteSpace: "nowrap",
};

type Position = readonly [row: number, col: number];

const MOVES: Record<string, Position> = {
  ArrowDown: [1, 0],
  ArrowUp: [-1, 0],
  ArrowRight: [0, 1],
  ArrowLeft: [0, -1],
};

export const Spreadsheet: StoryObj = {
  render: () => {
    const id = useId();
    const colHeaderId = (c: number) => `${id}-col-${c}`;
    const rowHeaderId = (r: number) => `${id}-row-${r}`;
    const cellId = (r: number, c: number) => `${id}-cell-${r}-${c}`;

    const ref = useRef<VGridHandle>(null);
    const activeRef = useRef<HTMLButtonElement>(null);
    const shouldFocus = useRef(false);
    const pointerFocus = useRef(false);
    const [cols, setCols] = useState(() => [
      { name: "", width: HEADER_WIDTH },
      ...Array.from({ length: COLS }, (_, i) => ({
        name: colName(i),
        width: CELL_WIDTH,
      })),
    ]);
    const [resizing, setResizing] = useState<number | null>(null);
    const drag = useRef<{ startX: number; startWidth: number } | null>(null);
    // sparse cell values keyed by "row-col" in data coordinates
    const [values, setValues] = useState<ReadonlyMap<string, string>>(
      () =>
        new Map(
          Array.from({ length: 20 }, (_, i): [string, string] => [
            genKey(i, (i * 7) % 10),
            "hello",
          ]),
        ),
    );
    const valueAt = (r: number, c: number) => values.get(genKey(r, c)) || "";
    const [active, setActive] = useState<Position>([0, 0]);
    const [anchor, setAnchor] = useState<Position>([0, 0]);
    const [editing, setEditing] = useState<{
      pos: Position;
      initial: string;
    } | null>(null);
    const selection = {
      top: Math.min(active[0], anchor[0]),
      bottom: Math.max(active[0], anchor[0]),
      left: Math.min(active[1], anchor[1]),
      right: Math.max(active[1], anchor[1]),
    };
    const isRange =
      selection.top !== selection.bottom || selection.left !== selection.right;

    useLayoutEffect(() => {
      if (!shouldFocus.current) return;
      shouldFocus.current = false;
      activeRef.current?.focus({ preventScroll: true });
    });

    const startEdit = (pos: Position, initial: string) => {
      setActive(pos);
      setAnchor(pos);
      setEditing({ pos, initial });
    };

    const endEdit = (value: string | null, refocus: boolean) => {
      if (!editing) return;
      if (value !== null) {
        setValues((prev) =>
          new Map(prev).set(genKey(editing.pos[0], editing.pos[1]), value),
        );
      }
      setEditing(null);
      shouldFocus.current = refocus;
    };

    const moveActive = (r: number, c: number, extend?: boolean) => {
      r = Math.max(0, Math.min(r, ROWS - 1));
      c = Math.max(0, Math.min(c, COLS - 1));
      setActive([r, c]);
      if (!extend) {
        setAnchor([r, c]);
      }
      shouldFocus.current = true;
      ref.current?.scrollToIndex({
        rowIndex: r + 1,
        colIndex: c + 1,
        rowAlign: "nearest",
        colAlign: "nearest",
      });
    };

    return (
      <div
        style={{ height: "100vh", display: "flex", flexDirection: "column" }}
      >
        <div
          style={{ padding: 4, display: "flex", gap: 16, alignItems: "center" }}
        >
          {/* the width is fixed not to move the help by the length of the address */}
          <span
            aria-hidden
            style={{
              flex: "none",
              width: "18ch",
              overflow: "hidden",
              whiteSpace: "nowrap",
              fontVariantNumeric: "tabular-nums",
            }}
          >
            {address(active[0], active[1])}
            {isRange && ":" + address(selection.bottom, selection.right)}
          </span>
          <span id={`${id}-help`} style={{ fontSize: 12, color: "#555" }}>
            Arrow keys: move, Shift + Arrow keys: select, Enter or F2: edit,
            Escape: cancel, Delete: clear
          </span>
          {/* a table can't expose the selection of cells */}
          <span role="status" style={visuallyHidden}>
            {isRange
              ? `${address(selection.top, selection.left)} to ${address(selection.bottom, selection.right)} selected`
              : ""}
          </span>
        </div>
        <div
          style={{ flex: 1, display: "flex", flexDirection: "column" }}
          onKeyDown={(e) => {
            if (editing) return;
            const [r, c] = active;
            const move = MOVES[e.key];
            if (move) {
              moveActive(r + move[0], c + move[1], e.shiftKey);
            } else if (e.key === "F2") {
              startEdit(active, valueAt(r, c));
            } else if (e.key === "Delete" || e.key === "Backspace") {
              setValues((prev) => {
                const next = new Map(prev);
                for (let i = selection.top; i <= selection.bottom; i++) {
                  for (let j = selection.left; j <= selection.right; j++) {
                    next.delete(genKey(i, j));
                  }
                }
                return next;
              });
            } else if (
              e.key.length === 1 &&
              e.key !== " " &&
              !e.ctrlKey &&
              !e.metaKey
            ) {
              startEdit(active, e.key);
            } else {
              return;
            }
            e.preventDefault();
          }}
        >
          <VGrid
            ref={ref}
            aria-label="Spreadsheet"
            aria-describedby={`${id}-help`}
            style={{ flex: 1, background: "#fff" }}
            rows={ROWS + 1}
            rowHeight={26}
            cols={cols}
            colWidth="width"
            headerRows={1}
            headerCols={1}
            // The headers naming the focused cell are kept with it, as the grid doesn't render the headers out of the viewport.
            keepMounted={[
              { rowIndex: active[0] + 1, colIndex: active[1] + 1 },
              { rowIndex: 0, colIndex: active[1] + 1 },
              { rowIndex: active[0] + 1, colIndex: 0 },
            ]}
          >
            {(rowIndex, col, { colIndex }) => {
              const r = rowIndex - 1;
              const c = colIndex - 1;
              if (rowIndex === 0 && colIndex === 0) {
                return (
                  <div style={labelStyle}>
                    <span style={visuallyHidden}>Row</span>
                  </div>
                );
              }
              if (rowIndex === 0) {
                return (
                  <div
                    id={colHeaderId(c)}
                    style={{
                      ...(c >= selection.left && c <= selection.right
                        ? highlightedLabelStyle
                        : labelStyle),
                      position: "relative",
                    }}
                  >
                    {col.name}
                    <div
                      aria-hidden
                      style={{
                        position: "absolute",
                        top: 0,
                        right: 0,
                        width: 6,
                        height: "100%",
                        cursor: "col-resize",
                        borderRight: `solid 1px ${resizing === colIndex ? "#1a73e8" : "transparent"}`,
                        boxSizing: "border-box",
                      }}
                      onPointerDown={(e) => {
                        e.preventDefault();
                        e.currentTarget.setPointerCapture(e.pointerId);
                        drag.current = {
                          startX: e.clientX,
                          startWidth: col.width,
                        };
                        setResizing(colIndex);
                      }}
                      onPointerMove={(e) => {
                        const d = drag.current;
                        if (!d) return;
                        const width = Math.max(
                          30,
                          d.startWidth + e.clientX - d.startX,
                        );
                        setCols((prev) => {
                          const next = [...prev];
                          next[colIndex] = { ...col, width };
                          return next;
                        });
                      }}
                      onPointerUp={() => {
                        drag.current = null;
                        setResizing(null);
                      }}
                    />
                  </div>
                );
              }
              if (colIndex === 0) {
                return (
                  <div
                    id={rowHeaderId(r)}
                    style={
                      r >= selection.top && r <= selection.bottom
                        ? highlightedLabelStyle
                        : labelStyle
                    }
                  >
                    {rowIndex}
                  </div>
                );
              }

              const isActive = r === active[0] && c === active[1];
              const inSelection =
                r >= selection.top &&
                r <= selection.bottom &&
                c >= selection.left &&
                c <= selection.right;

              if (editing && editing.pos[0] === r && editing.pos[1] === c) {
                return (
                  <input
                    autoFocus
                    aria-labelledby={`${colHeaderId(c)} ${rowHeaderId(r)}`}
                    defaultValue={editing.initial}
                    style={{
                      boxSizing: "border-box",
                      width: "100%",
                      height: "100%",
                      border: "solid 2px #1a73e8",
                      padding: "0 2px",
                      fontSize: 13,
                    }}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        // not to activate the button below, which takes the focus
                        e.preventDefault();
                        endEdit(e.currentTarget.value, true);
                        moveActive(r + 1, c);
                      } else if (e.key === "Escape") {
                        endEdit(null, true);
                      }
                      e.stopPropagation();
                    }}
                    onBlur={(e) => endEdit(e.currentTarget.value, false)}
                  />
                );
              }

              return (
                <button
                  ref={isActive ? activeRef : undefined}
                  id={cellId(r, c)}
                  aria-labelledby={`${colHeaderId(c)} ${rowHeaderId(r)} ${cellId(r, c)}`}
                  tabIndex={isActive ? 0 : -1}
                  style={{
                    ...cellStyle,
                    background: inSelection ? "#e8f0fe" : cellStyle.background,
                    boxShadow: isActive ? "inset 0 0 0 2px #1a73e8" : undefined,
                  }}
                  onFocus={() => {
                    // the focus may be moved by screen readers
                    if (pointerFocus.current) {
                      pointerFocus.current = false;
                    } else if (!isActive) {
                      setActive([r, c]);
                      setAnchor([r, c]);
                    }
                  }}
                  onMouseDown={(e) => {
                    pointerFocus.current = true;
                    setActive([r, c]);
                    if (!e.shiftKey) {
                      setAnchor([r, c]);
                    }
                  }}
                  onMouseEnter={(e) => {
                    if (e.buttons & 1) {
                      setActive([r, c]);
                    }
                  }}
                  onClick={(e) => {
                    // edit by the keyboard or screen readers, select by the pointer
                    if (e.detail === 0) {
                      startEdit([r, c], valueAt(r, c));
                    }
                  }}
                  onDoubleClick={() => {
                    startEdit([r, c], valueAt(r, c));
                  }}
                >
                  {valueAt(r, c)}
                </button>
              );
            }}
          </VGrid>
        </div>
      </div>
    );
  },
};
