import { afterEach, describe, expect, it, onTestFinished } from "vitest";
import { server } from "vitest/browser";
import { createRef, useEffect, useState } from "react";
import { render } from "../spec/browser/react.js";
import { VGrid, type VGridHandle } from "./react/index.js";
import {
  cleanupScroll,
  expectGridGeometry,
  expectPosition,
  getVirtualizer,
} from "../spec/browser/index.js";

afterEach(cleanupScroll);

const ROWS = 1000;
const COLS = 500;
const ROW_HEIGHT = 40;
const COL_WIDTH = 100;
const VIEWPORT = 400;

const cell = (container: Element, text: string): HTMLElement =>
  [...container.querySelectorAll('[role="row"] > *')].find(
    (e) => e.textContent === text,
  ) as HTMLElement;

const relativeTop = (viewport: Element, e: Element) =>
  e.getBoundingClientRect().top - viewport.getBoundingClientRect().top;
const relativeLeft = (viewport: Element, e: Element) =>
  e.getBoundingClientRect().left - viewport.getBoundingClientRect().left;
const relativeRight = (viewport: Element, e: Element) =>
  viewport.getBoundingClientRect().right - e.getBoundingClientRect().right;

const setRTL = () => {
  const { documentElement } = document;
  documentElement.dir = "rtl";
  onTestFinished(() => {
    documentElement.dir = "";
  });
};

const scrollToEnd = (viewport: HTMLElement, isRTL?: boolean) => {
  viewport.scrollTop = viewport.scrollHeight;
  viewport.scrollLeft = isRTL ? -viewport.scrollWidth : viewport.scrollWidth;
};

const Grid = ({
  handle,
  pinned,
}: {
  handle?: React.Ref<VGridHandle>;
  pinned?: boolean;
}) => (
  <VGrid
    ref={handle}
    rows={ROWS}
    rowHeight={ROW_HEIGHT}
    cols={COLS}
    colWidth={COL_WIDTH}
    headerRows={pinned ? 1 : 0}
    footerRows={pinned ? 1 : 0}
    headerCols={pinned ? 2 : 0}
    footerCols={pinned ? 1 : 0}
    style={{ height: VIEWPORT, width: VIEWPORT }}
  >
    {(rowIndex, colIndex) => (
      <div style={{ background: "white" }}>
        {rowIndex} / {colIndex}
      </div>
    )}
  </VGrid>
);

it("scrollable in both axes (RTL)", async () => {
  setRTL();
  const ref = createRef<VGridHandle>();
  const root = render(<Grid handle={ref} />);
  const { viewport, container } = await getVirtualizer(root);

  await expect.poll(() => cell(container, "0 / 0")).toBeTruthy();
  expect(relativeTop(viewport, cell(container, "0 / 0"))).toBeCloseTo(0, 0);
  expect(relativeRight(viewport, cell(container, "0 / 0"))).toBeCloseTo(0, 0);

  scrollToEnd(viewport, true);
  await expect.poll(() => root.textContent).toContain("999 / 499");
  expect(ref.current!.horizontalScrollOffset).toBeGreaterThan(0);
  expect(viewport.scrollLeft).toBeLessThan(0);
});

it("auto sizes follow the content of the cells", async () => {
  const ref = createRef<VGridHandle>();
  const Auto = () => {
    const [tall, setTall] = useState(false);
    return (
      <>
        <button onClick={() => setTall(true)}>grow</button>
        <VGrid
          ref={ref}
          rows={ROWS}
          rowHeight="auto"
          cols={COLS}
          colWidth="auto"
          style={{ height: VIEWPORT, width: VIEWPORT }}
        >
          {(rowIndex, colIndex) => (
            <div
              style={{
                height:
                  rowIndex === 1 && colIndex === 1 ? (tall ? 90 : 60) : 30,
                width: rowIndex === 2 && colIndex === 1 ? 150 : 80,
                whiteSpace: "nowrap",
              }}
            >
              {rowIndex} / {colIndex}
            </div>
          )}
        </VGrid>
      </>
    );
  };
  const root = render(<Auto />);
  const { container } = await getVirtualizer(root);
  await expect.poll(() => cell(container, "0 / 0")).toBeTruthy();

  // a track is sized by its largest cell, and every cell is stretched to it
  await expect
    .poll(() => cell(container, "1 / 0").getBoundingClientRect().height)
    .toBeCloseTo(60, 0);
  expect(cell(container, "1 / 2").getBoundingClientRect().height).toBeCloseTo(
    60,
    0,
  );
  expect(cell(container, "0 / 0").getBoundingClientRect().height).toBeCloseTo(
    30,
    0,
  );
  expect(cell(container, "0 / 1").getBoundingClientRect().width).toBeCloseTo(
    150,
    0,
  );
  expect(cell(container, "0 / 2").getBoundingClientRect().width).toBeCloseTo(
    80,
    0,
  );
  expect(cell(container, "2 / 0").getBoundingClientRect().top).toBeCloseTo(
    cell(container, "1 / 0").getBoundingClientRect().bottom,
    0,
  );
  await expect
    .poll(() => [ref.current!.getRowSize(1), ref.current!.getColSize(1)])
    .toEqual([60, 150]);

  root.querySelector("button")!.click();
  await expect
    .poll(() => cell(container, "1 / 2").getBoundingClientRect().height)
    .toBeCloseTo(90, 0);
  await expect.poll(() => ref.current!.getRowSize(1)).toBe(90);
  expect(cell(container, "2 / 0").getBoundingClientRect().top).toBeCloseTo(
    cell(container, "1 / 0").getBoundingClientRect().bottom,
    0,
  );
});

it("spans cover their cells across the unrendered tracks", async () => {
  const rowItems = Array.from({ length: 200 }, (_, i) => ({
    height: i % 4 ? 40 : 60,
  }));
  const colItems = Array.from({ length: 100 }, (_, i) => ({
    width: i % 3 ? 100 : 150,
  }));
  const offsetOf = (sizes: number[], index: number) =>
    sizes.slice(0, index).reduce((acc, size) => acc + size, 0);
  const heights = rowItems.map((r) => r.height);
  const widths = colItems.map((c) => c.width);
  const spans = [
    { rowIndex: 0, colIndex: 0, colSpan: 3 },
    { rowIndex: 1, colIndex: 0, colSpan: 50 },
    { rowIndex: 3, colIndex: 2, rowSpan: 50 },
    { rowIndex: 45, colIndex: 45, rowSpan: 20, colSpan: 10 },
    { rowIndex: 45, colIndex: 55, rowSpan: 30 },
  ];
  const root = render(
    <VGrid
      rows={rowItems}
      rowHeight="height"
      cols={colItems}
      colWidth="width"
      headerRows={1}
      footerCols={1}
      spans={spans}
      keepMounted={[{ rowIndex: 150, colIndex: 80 }]}
      style={{ height: VIEWPORT, width: VIEWPORT }}
    >
      {(_row, _col, { rowIndex, colIndex }) => (
        <div style={{ background: "white" }}>
          {rowIndex} / {colIndex}
        </div>
      )}
    </VGrid>,
  );
  const { viewport } = await getVirtualizer(root);
  const rows = {
    count: heights.length,
    size: (i: number) => heights[i]!,
    pinned: { start: 1 },
  };
  const cols = {
    count: widths.length,
    size: (i: number) => widths[i]!,
    pinned: { end: 1 },
  };
  await expectGridGeometry(root, rows, cols, 0, spans);

  for (const [top, left] of [
    [offsetOf(heights, 60), offsetOf(widths, 50)],
    [viewport.scrollHeight, viewport.scrollWidth],
    [offsetOf(heights, 30), offsetOf(widths, 20)],
    [0, 0],
  ] as const) {
    viewport.scrollTop = top;
    viewport.scrollLeft = left;
    await expectGridGeometry(root, rows, cols, 0, spans);
  }
});

it("scrollToIndex keeps the cell out of the pinned blocks", async () => {
  const ref = createRef<VGridHandle>();
  const root = render(<Grid handle={ref} pinned />);
  const { viewport, container } = await getVirtualizer(root);
  await expect.poll(() => cell(container, "0 / 0")).toBeTruthy();

  ref.current!.scrollToIndex({ rowIndex: 500, colIndex: 100 });
  await expect.poll(() => cell(container, "500 / 100")).toBeTruthy();
  expect(relativeTop(viewport, cell(container, "500 / 100"))).toBeCloseTo(
    ROW_HEIGHT,
    0,
  );
  expect(relativeLeft(viewport, cell(container, "500 / 100"))).toBeCloseTo(
    COL_WIDTH * 2,
    0,
  );
  expect(root.textContent).not.toContain("400 / 100");
  expect(root.textContent).not.toContain("500 / 200");

  ref.current!.scrollToIndex({
    rowIndex: 600,
    colIndex: 200,
    rowAlign: "end",
    colAlign: "end",
  });
  await expect.poll(() => cell(container, "600 / 200")).toBeTruthy();
  expect(
    viewport.getBoundingClientRect().bottom -
      cell(container, "600 / 200").getBoundingClientRect().bottom,
  ).toBeCloseTo(ROW_HEIGHT, 0);
  expect(
    viewport.getBoundingClientRect().right -
      cell(container, "600 / 200").getBoundingClientRect().right,
  ).toBeCloseTo(COL_WIDTH, 0);

  ref.current!.scrollToIndex({
    rowIndex: 700,
    colIndex: 300,
    rowAlign: "center",
    colAlign: "center",
  });
  await expect.poll(() => cell(container, "700 / 300")).toBeTruthy();
  const c = cell(container, "700 / 300").getBoundingClientRect();
  const v = viewport.getBoundingClientRect();
  expect(
    Math.abs(c.top - v.top - ROW_HEIGHT - (v.bottom - ROW_HEIGHT - c.bottom)),
  ).toBeLessThan(1);
  expect(
    Math.abs(c.left - v.left - COL_WIDTH * 2 - (v.right - COL_WIDTH - c.right)),
  ).toBeLessThan(1);

  const before = [viewport.scrollTop, viewport.scrollLeft];
  ref.current!.scrollToIndex({
    rowIndex: 700,
    colIndex: 300,
    rowAlign: "nearest",
    colAlign: "nearest",
  });
  await new Promise((r) => setTimeout(r, 100));
  expect([viewport.scrollTop, viewport.scrollLeft]).toEqual(before);
  ref.current!.scrollToIndex({ rowIndex: 696, rowAlign: "nearest" });
  await expect
    .poll(() => relativeTop(viewport, cell(container, "696 / 300")))
    .toBeCloseTo(ROW_HEIGHT, 0);

  // the axes are aligned separately
  ref.current!.scrollToIndex({ rowIndex: 100, colIndex: 50, rowAlign: "end" });
  await expect
    .poll(
      () =>
        viewport.getBoundingClientRect().bottom -
        cell(container, "100 / 50").getBoundingClientRect().bottom,
    )
    .toBeCloseTo(ROW_HEIGHT, 0);
  expect(relativeLeft(viewport, cell(container, "100 / 50"))).toBeCloseTo(
    COL_WIDTH * 2,
    0,
  );
});

it("scrollToIndex aligns the cell next to the gap before the pinned blocks", async () => {
  const GAP = 10;
  const ref = createRef<VGridHandle>();
  const root = render(
    <VGrid
      ref={ref}
      rows={ROWS}
      rowHeight={ROW_HEIGHT}
      cols={COLS}
      colWidth={COL_WIDTH}
      gap={GAP}
      headerRows={1}
      footerRows={1}
      style={{ height: VIEWPORT, width: VIEWPORT }}
    >
      {(rowIndex, colIndex) => (
        <div style={{ background: "white" }}>
          {rowIndex} / {colIndex}
        </div>
      )}
    </VGrid>,
  );
  const { viewport, container } = await getVirtualizer(root);
  await expect.poll(() => cell(container, "0 / 0")).toBeTruthy();

  ref.current!.scrollToIndex({
    rowIndex: 500,
    colIndex: 100,
    rowAlign: "end",
    colAlign: "end",
  });
  await expect
    .poll(
      () =>
        viewport.getBoundingClientRect().bottom -
        cell(container, "500 / 100").getBoundingClientRect().bottom,
    )
    .toBeCloseTo(ROW_HEIGHT + GAP, 0);
  expect(
    viewport.getBoundingClientRect().right -
      cell(container, "500 / 100").getBoundingClientRect().right,
  ).toBeCloseTo(0, 0);
});

it("scrollToIndex on mount keeps the cell out of the pinned rows measured later", async () => {
  const ref = createRef<VGridHandle>();
  const Mount = () => {
    useEffect(() => {
      ref.current!.scrollToIndex({ rowIndex: 100 });
    }, []);
    return (
      <VGrid
        ref={ref}
        rows={ROWS}
        rowHeight="auto"
        cols={3}
        colWidth={COL_WIDTH}
        headerRows={1}
        style={{ height: VIEWPORT, width: VIEWPORT }}
      >
        {(rowIndex, colIndex) => (
          <div style={{ height: rowIndex ? ROW_HEIGHT : ROW_HEIGHT * 2 }}>
            {rowIndex} / {colIndex}
          </div>
        )}
      </VGrid>
    );
  };
  const root = render(<Mount />);
  const { viewport, container } = await getVirtualizer(root);

  await expect
    .poll(() => {
      const c = cell(container, "100 / 0");
      return c && relativeTop(viewport, c);
    })
    .toSatisfy((top) => top != null && Math.abs(top - ROW_HEIGHT * 2) < 2);
});

it("scrollTo and scrollBy move only the given axes", async () => {
  const ref = createRef<VGridHandle>();
  const root = render(<Grid handle={ref} />);
  const { viewport, container } = await getVirtualizer(root);
  await expect.poll(() => cell(container, "0 / 0")).toBeTruthy();

  ref.current!.scrollTo({ vertical: 400 });
  await expectPosition(() => viewport.scrollTop, 400);
  expect(viewport.scrollLeft).toBe(0);

  ref.current!.scrollBy({ horizontal: 200 });
  await expectPosition(() => viewport.scrollLeft, 200);
  await expectPosition(() => viewport.scrollTop, 400);
});

it("a scroll is notified only to the axes which moved", async () => {
  const verticals: number[] = [];
  const horizontals: number[] = [];
  const root = render(
    <VGrid
      rows={ROWS}
      rowHeight={ROW_HEIGHT}
      cols={COLS}
      colWidth={COL_WIDTH}
      style={{ height: VIEWPORT, width: VIEWPORT }}
      onVerticalScroll={(offset) => {
        verticals.push(offset);
      }}
      onHorizontalScroll={(offset) => {
        horizontals.push(offset);
      }}
    >
      {(rowIndex, colIndex) => (
        <div>
          {rowIndex} / {colIndex}
        </div>
      )}
    </VGrid>,
  );
  const { viewport, container } = await getVirtualizer(root);
  await expect.poll(() => cell(container, "0 / 0")).toBeTruthy();

  viewport.scrollTop = 400;
  await expect.poll(() => verticals.at(-1)).toBeCloseTo(400, 0);
  expect(horizontals).toEqual([]);

  viewport.scrollLeft = 200;
  await expect.poll(() => horizontals.at(-1)).toBeCloseTo(200, 0);
  expect(verticals.at(-1)).toBeCloseTo(400, 0);
});

it("the scroll end is notified once after both axes have ended", async () => {
  let scrollEnds = 0;
  let scrolledAt = 0;
  let endedAt = 0;
  let onHorizontal = () => {};
  const root = render(
    <VGrid
      rows={ROWS}
      rowHeight={ROW_HEIGHT}
      cols={COLS}
      colWidth={COL_WIDTH}
      style={{ height: VIEWPORT, width: VIEWPORT }}
      onVerticalScroll={() => {
        scrolledAt = performance.now();
      }}
      onHorizontalScroll={() => {
        scrolledAt = performance.now();
        onHorizontal();
      }}
      onScrollEnd={() => {
        scrollEnds++;
        endedAt = performance.now();
      }}
    >
      {(rowIndex, colIndex) => (
        <div>
          {rowIndex} / {colIndex}
        </div>
      )}
    </VGrid>,
  );
  const { viewport, container } = await getVirtualizer(root);
  await expect.poll(() => cell(container, "0 / 0")).toBeTruthy();

  // a busy main thread drops the scroll events, so a wheel keeps the columns scrolling
  onHorizontal = () => {
    onHorizontal = () => {};
    setTimeout(() => {
      viewport.dispatchEvent(new WheelEvent("wheel", { deltaX: 10 }));
    }, 75);
  };
  viewport.scrollLeft = 200;
  await expect.poll(() => scrollEnds, { timeout: 3000 }).toBe(1);
  expect(endedAt - scrolledAt).toBeGreaterThanOrEqual(250);

  viewport.scrollTop = 400;
  await expect.poll(() => scrollEnds, { timeout: 3000 }).toBe(2);
  await new Promise((resolve) => setTimeout(resolve, 500));
  expect(scrollEnds).toBe(2);
});

const WIDE = 300;

const Resizable = () => {
  const [widths, setWidths] = useState(() =>
    Array.from({ length: COLS }, (_, i) => ({ width: i ? COL_WIDTH : WIDE })),
  );
  return (
    <>
      <button
        onClick={() =>
          setWidths((prev) =>
            prev.map((c, i) => (i ? c : { width: COL_WIDTH })),
          )
        }
      >
        reset
      </button>
      <VGrid
        rows={ROWS}
        rowHeight={ROW_HEIGHT}
        cols={widths}
        colWidth="width"
        style={{ height: VIEWPORT, width: VIEWPORT }}
      >
        {(rowIndex, _, { colIndex }) => (
          <div style={{ background: "white" }}>
            {rowIndex} / {colIndex}
          </div>
        )}
      </VGrid>
    </>
  );
};

it("changing sizes keeps the visible position", async () => {
  const root = render(<Resizable />);
  const { viewport, container } = await getVirtualizer(root);
  await expect.poll(() => cell(container, "0 / 0")).toBeTruthy();

  // 300 + 100 * 6 = the 7th column sits exactly at the start of the viewport
  viewport.scrollLeft = WIDE + COL_WIDTH * 6;
  await expect.poll(() => cell(container, "1 / 7")).toBeTruthy();
  expect(relativeLeft(viewport, cell(container, "1 / 7"))).toBeCloseTo(0, 0);

  // the shrunk column is before the anchor
  root.querySelector("button")!.click();

  await expect
    .poll(() => relativeLeft(viewport, cell(container, "1 / 7")))
    .toBeCloseTo(0, 0);
});

it("cells follow the changed sizes", async () => {
  const Resized = () => {
    const [widths, setWidths] = useState(() =>
      Array.from({ length: COLS }, () => ({ width: COL_WIDTH })),
    );
    return (
      <>
        <button
          onClick={() =>
            setWidths((prev) =>
              prev.map((c, i) => (i % 2 ? { width: WIDE } : c)),
            )
          }
        >
          resize
        </button>
        <VGrid
          rows={ROWS}
          rowHeight={ROW_HEIGHT}
          cols={widths}
          colWidth="width"
          style={{ height: VIEWPORT, width: VIEWPORT }}
        >
          {(rowIndex, _, { colIndex }) => (
            <div style={{ background: "white" }}>
              {rowIndex} / {colIndex}
            </div>
          )}
        </VGrid>
      </>
    );
  };
  const root = render(<Resized />);
  const { viewport } = await getVirtualizer(root);
  const rows = { count: ROWS, size: () => ROW_HEIGHT };
  viewport.scrollTop = ROW_HEIGHT * 10;
  viewport.scrollLeft = COL_WIDTH * 10;
  await expectGridGeometry(root, rows, {
    count: COLS,
    size: () => COL_WIDTH,
  });

  root.querySelector("button")!.click();
  await expectGridGeometry(root, rows, {
    count: COLS,
    size: (i) => (i % 2 ? WIDE : COL_WIDTH),
  });
});

it("a grid has focusable rows", async () => {
  const root = render(<Grid />);
  const { container } = await getVirtualizer(root);
  await expect.poll(() => cell(container, "5 / 2")).toBeTruthy();

  const row = cell(container, "5 / 2").parentElement!;
  row.tabIndex = 0;
  row.focus();
  expect(document.activeElement).toBe(row);
  expect(row.getBoundingClientRect().height).toBeCloseTo(ROW_HEIGHT, 0);
});

it("keepMounted keeps the cell alive while it's scrolled away", async () => {
  const root = render(
    <VGrid
      rows={ROWS}
      rowHeight={ROW_HEIGHT}
      cols={COLS}
      colWidth={COL_WIDTH}
      keepMounted={[{ rowIndex: 5, colIndex: 2 }]}
      style={{ height: VIEWPORT, width: VIEWPORT }}
    >
      {(rowIndex, colIndex) =>
        rowIndex === 5 && colIndex === 2 ? (
          <input aria-label="edit" />
        ) : (
          <div>
            {rowIndex} / {colIndex}
          </div>
        )
      }
    </VGrid>,
  );
  const { viewport, container } = await getVirtualizer(root);
  await expect.poll(() => cell(container, "0 / 0")).toBeTruthy();
  const input = root.querySelector("input")!;
  // Firefox and WebKit scroll a focused element back into view when the DOM around it changes
  const focusable = server.browser === "chromium";
  if (focusable) {
    input.focus();
  }

  scrollToEnd(viewport);
  await expect.poll(() => root.textContent).toContain("999 / 499");
  expect(root.textContent).not.toContain("5 / 1");
  expect(root.querySelector("input")).toBe(input);
  if (focusable) {
    expect(document.activeElement).toBe(input);
  }

  viewport.scrollTop = 0;
  viewport.scrollLeft = 0;
  await expect.poll(() => cell(container, "5 / 1")).toBeTruthy();
  expect(root.querySelector("input")).toBe(input);
  expect(relativeTop(viewport, input)).toBeCloseTo(ROW_HEIGHT * 5, 0);
});

it("the header cells under the spans stay covered while the other spans render their columns", async () => {
  const spans = [
    { rowIndex: 0, colIndex: 0, rowSpan: 2 },
    { rowIndex: 2, colIndex: 0, colSpan: COLS },
  ];
  for (let c = 1; c < COLS; c += 4) {
    spans.push({ rowIndex: 0, colIndex: c, colSpan: Math.min(4, COLS - c) });
  }
  const root = render(
    <VGrid
      rows={ROWS}
      rowHeight={ROW_HEIGHT}
      cols={COLS}
      colWidth={COL_WIDTH}
      headerRows={2}
      spans={spans}
      style={{ height: VIEWPORT, width: VIEWPORT }}
    >
      {(rowIndex, colIndex) => (
        <div style={{ background: "white" }}>
          {rowIndex} / {colIndex}
        </div>
      )}
    </VGrid>,
  );
  const { viewport } = await getVirtualizer(root);
  const rows = { count: ROWS, size: () => ROW_HEIGHT, pinned: { start: 2 } };
  const cols = { count: COLS, size: () => COL_WIDTH };
  await expectGridGeometry(root, rows, cols, 0, spans);

  viewport.scrollTop = ROW_HEIGHT * 300;
  viewport.scrollLeft = COL_WIDTH * 300;
  await expectGridGeometry(root, rows, cols, 0, spans);
});

it("the section header is rendered with the cells scrolled away from it", async () => {
  const root = render(
    <VGrid
      rows={ROWS}
      rowHeight={ROW_HEIGHT}
      cols={COLS}
      colWidth={COL_WIDTH}
      sectionRows={[0]}
      style={{ height: VIEWPORT, width: VIEWPORT }}
    >
      {(rowIndex, colIndex) => (
        <div style={{ background: "white" }}>
          {rowIndex} / {colIndex}
        </div>
      )}
    </VGrid>,
  );
  const { viewport } = await getVirtualizer(root);
  viewport.scrollTop = ROW_HEIGHT * 500;
  viewport.scrollLeft = COL_WIDTH * 200;
  // the header row out of the pinned rows heads the section of all the rows
  await expectGridGeometry(
    root,
    { count: ROWS, size: () => ROW_HEIGHT, headers: [0] },
    { count: COLS, size: () => COL_WIDTH },
  );

  // the header is rendered out of the range, in the columns in the viewport
  expect(root.textContent).toContain("0 / 200");
});

it("cells follow the changed counts", async () => {
  const SMALL = [100, 50] as const;
  const spans = [{ rowIndex: 90, colIndex: 40, rowSpan: 5, colSpan: 5 }];
  const Counts = () => {
    const [[rowCount, colCount], setCounts] = useState<readonly number[]>([
      ROWS,
      COLS,
    ]);
    return (
      <>
        <button onClick={() => setCounts(SMALL)}>shrink</button>
        <button onClick={() => setCounts([ROWS, COLS])}>grow</button>
        <VGrid
          rows={rowCount!}
          rowHeight={ROW_HEIGHT}
          cols={colCount!}
          colWidth={COL_WIDTH}
          headerRows={1}
          footerRows={1}
          headerCols={1}
          footerCols={1}
          spans={spans}
          // out of the grid while it's shrunk
          keepMounted={[{ rowIndex: 900, colIndex: 400 }]}
          style={{ height: VIEWPORT, width: VIEWPORT }}
        >
          {(rowIndex, colIndex) => (
            <div style={{ background: "white" }}>
              {rowIndex} / {colIndex}
            </div>
          )}
        </VGrid>
      </>
    );
  };
  const root = render(<Counts />);
  const { viewport } = await getVirtualizer(root);
  const geometry = (rowCount: number, colCount: number) =>
    [
      { count: rowCount, size: () => ROW_HEIGHT, pinned: { start: 1, end: 1 } },
      { count: colCount, size: () => COL_WIDTH, pinned: { start: 1, end: 1 } },
      0,
      spans,
    ] as const;
  const [shrink, grow] = root.querySelectorAll("button");

  scrollToEnd(viewport);
  await expectGridGeometry(root, ...geometry(ROWS, COLS));

  shrink!.click();
  await expectGridGeometry(root, ...geometry(...SMALL));
  expect(viewport.scrollHeight).toBe(SMALL[0] * ROW_HEIGHT);
  scrollToEnd(viewport);
  await expectGridGeometry(root, ...geometry(...SMALL));

  grow!.click();
  await expectGridGeometry(root, ...geometry(ROWS, COLS));
  scrollToEnd(viewport);
  await expectGridGeometry(root, ...geometry(ROWS, COLS));
  await expect.poll(() => root.textContent).toContain("900 / 400");
});

it("auto sizes fit the cells without the gap and the spans", async () => {
  const GAP = 4;
  const height = (rowIndex: number) => 30 + (rowIndex % 3) * 10;
  const width = (colIndex: number) => 60 + (colIndex % 2) * 40;
  const SPANS = [
    { rowIndex: 1, colIndex: 1, rowSpan: 2, colSpan: 2 },
    { rowIndex: 4, colIndex: 0, rowSpan: 2 },
    { rowIndex: 7, colIndex: 0, colSpan: 2 },
  ];
  const root = render(
    <VGrid
      rows={ROWS}
      rowHeight="auto"
      cols={COLS}
      colWidth="auto"
      gap={GAP}
      spans={SPANS}
      style={{ height: VIEWPORT, width: VIEWPORT }}
    >
      {(rowIndex, colIndex) => {
        const span = SPANS.find(
          (s) => s.rowIndex === rowIndex && s.colIndex === colIndex,
        );
        // the spanning cells are larger than their tracks on the spanned axes
        return (
          <div
            style={{
              height: span && span.rowSpan ? 500 : height(rowIndex),
              width: span && span.colSpan ? 500 : width(colIndex),
              background: "white",
            }}
          >
            {rowIndex} / {colIndex}
          </div>
        );
      }}
    </VGrid>,
  );
  await expectGridGeometry(
    root,
    { count: ROWS, size: height },
    { count: COLS, size: width },
    GAP,
    SPANS,
  );
});
it("changing a uniform size keeps the visible position", async () => {
  const Uniform = () => {
    const [rowHeight, setRowHeight] = useState(ROW_HEIGHT);
    return (
      <>
        <button onClick={() => setRowHeight(ROW_HEIGHT * 2)}>grow</button>
        <VGrid
          rows={ROWS}
          rowHeight={rowHeight}
          cols={COLS}
          colWidth={COL_WIDTH}
          style={{ height: VIEWPORT, width: VIEWPORT }}
        >
          {(rowIndex, colIndex) => (
            <div style={{ background: "white" }}>
              {rowIndex} / {colIndex}
            </div>
          )}
        </VGrid>
      </>
    );
  };
  const root = render(<Uniform />);
  const { viewport, container } = await getVirtualizer(root);
  viewport.scrollTop = ROW_HEIGHT * 100;
  await expect.poll(() => cell(container, "100 / 0")).toBeTruthy();
  // Firefox snaps the offset to the device pixels, which can put it in the previous row
  const anchor = Math.floor(viewport.scrollTop / ROW_HEIGHT) + " / 0";
  const top = relativeTop(viewport, cell(container, anchor));

  root.querySelector("button")!.click();
  await expectGridGeometry(
    root,
    { count: ROWS, size: () => ROW_HEIGHT * 2 },
    { count: COLS, size: () => COL_WIDTH },
  );
  expect(relativeTop(viewport, cell(container, anchor))).toBeCloseTo(top, 0);
});

it("auto tracks rendered only with the spanning cells keep their sizes", async () => {
  const rowItems = Array.from({ length: ROWS }, (_, i) => ({
    height: i < 2 ? undefined : ROW_HEIGHT,
  }));
  const spans = [{ rowIndex: 0, colIndex: 0, rowSpan: 2, colSpan: 3 }];
  const root = render(
    <VGrid
      rows={rowItems}
      rowHeight="height"
      cols={3}
      colWidth={COL_WIDTH}
      spans={spans}
      style={{ height: VIEWPORT, width: VIEWPORT }}
    >
      {(_row, _col, { rowIndex, colIndex }) => (
        <div style={{ height: 10, background: "white" }}>
          {rowIndex} / {colIndex}
        </div>
      )}
    </VGrid>,
  );
  // the rows without a cell measuring them have the default size
  await expectGridGeometry(
    root,
    { count: ROWS, size: (i) => (i < 2 ? 40 : ROW_HEIGHT) },
    { count: 3, size: () => COL_WIDTH },
    0,
    spans,
  );
});

it("auto columns share the space left in the viewport", async () => {
  const columns = [
    { width: 60 },
    { width: "auto" },
    { width: "auto" },
    { width: 100 },
  ] as const;
  let setViewport: (width: number) => void;
  let setContent: (width: number) => void;
  const Fill = () => {
    const [viewport, _setViewport] = useState(600);
    const [content, _setContent] = useState(80);
    setViewport = _setViewport;
    setContent = _setContent;
    return (
      <VGrid
        rows={ROWS}
        rowHeight={ROW_HEIGHT}
        cols={columns}
        colWidth="width"
        headerRows={1}
        style={{ height: VIEWPORT, width: viewport }}
      >
        {(rowIndex, _, { colIndex }) => (
          <div
            style={{
              background: "white",
              width: colIndex === 1 || colIndex === 2 ? content : undefined,
              whiteSpace: "nowrap",
            }}
          >
            {rowIndex} / {colIndex}
          </div>
        )}
      </VGrid>
    );
  };
  const root = render(<Fill />);
  const { viewport, container } = await getVirtualizer(root);
  const width = (text: string) =>
    cell(container, text).getBoundingClientRect().width;

  // 60 + 80 + 80 + 100 = 320, so the auto columns share the rest of 600
  await expect.poll(() => width("1 / 1")).toBeCloseTo(220, 0);
  expect(width("1 / 2")).toBeCloseTo(220, 0);
  expect(width("1 / 0")).toBeCloseTo(60, 0);
  expect(viewport.scrollWidth).toBe(600);

  // the columns overflow the narrowed viewport at their content widths
  setViewport!(300);
  await expect.poll(() => width("1 / 1")).toBeCloseTo(80, 0);
  expect(viewport.scrollWidth).toBe(320);

  setViewport!(600);
  await expect.poll(() => width("1 / 1")).toBeCloseTo(220, 0);

  // the grown content overflows, and the shrunk content shares the space again
  setContent!(300);
  await expect.poll(() => width("1 / 1")).toBeCloseTo(300, 0);
  expect(viewport.scrollWidth).toBe(760);
  setContent!(80);
  await expect.poll(() => width("1 / 1")).toBeCloseTo(220, 0);
  expect(viewport.scrollWidth).toBe(600);
});

it("a row spanning the auto columns fills the viewport without the cells measuring them", async () => {
  const root = render(
    <VGrid
      rows={1}
      rowHeight={ROW_HEIGHT}
      cols={5}
      colWidth="auto"
      spans={[{ rowIndex: 0, colIndex: 0, colSpan: 5 }]}
      style={{ height: VIEWPORT, width: VIEWPORT }}
    >
      {() => <div style={{ background: "white" }}>empty</div>}
    </VGrid>,
  );
  const { viewport, container } = await getVirtualizer(root);
  await expect
    .poll(() => cell(container, "empty").getBoundingClientRect().width)
    .toBeCloseTo(viewport.clientWidth, 0);
});

for (const gap of [0, 8]) {
  it(`the section headers stick under the pinned rows and are pushed out at the ends of their sections (gap: ${gap})`, async () => {
    const SECTION_ROWS = 60;
    const SECTION_COLS = 6;
    // the section at 5 has no rows but its header, as a collapsed group
    const headers = [0, 5, 6, 20, 40];
    // the label in the pinned column, and the rest of the row merged
    const spans = headers.slice(1).map((rowIndex) => ({
      rowIndex,
      colIndex: 1,
      colSpan: SECTION_COLS - 1,
    }));
    const ref = createRef<VGridHandle>();
    const root = render(
      <VGrid
        ref={ref}
        rows={SECTION_ROWS}
        rowHeight={ROW_HEIGHT}
        cols={SECTION_COLS}
        colWidth={COL_WIDTH}
        gap={gap}
        headerRows={1}
        sectionRows={headers.slice(1)}
        footerRows={1}
        headerCols={1}
        spans={spans}
        style={{ height: VIEWPORT, width: VIEWPORT }}
      >
        {(rowIndex, colIndex) => (
          <div style={{ background: "white" }}>
            {rowIndex === 22 && colIndex === 2 ? (
              <button>
                {rowIndex} / {colIndex}
              </button>
            ) : (
              `${rowIndex} / ${colIndex}`
            )}
          </div>
        )}
      </VGrid>,
    );
    const { viewport, container } = await getVirtualizer(root);
    const rows = {
      count: SECTION_ROWS,
      size: () => ROW_HEIGHT,
      pinned: { start: 1, end: 1 },
      headers: headers.slice(1),
    };
    const cols = {
      count: SECTION_COLS,
      size: () => COL_WIDTH,
      pinned: { start: 1 },
    };
    const step = ROW_HEIGHT + gap;
    // the position of the first row after the pinned row, with the gap
    const stuckTop = ROW_HEIGHT + gap;
    await expectGridGeometry(root, rows, cols, gap, spans);

    // in the middle of a section, its header sticks under the pinned row and is painted over the cells scrolled under it
    viewport.scrollTop = step * 10;
    await expectGridGeometry(root, rows, cols, gap, spans);
    // the header of the empty section before it is scrolled away, which the geometry checks
    const header = cell(container, "6 / 1");
    expect(relativeTop(viewport, header)).toBeCloseTo(stuckTop, 0);
    await expect
      .poll(() => getComputedStyle(container).pointerEvents)
      .toBe("auto");
    const rect = header.getBoundingClientRect();
    expect(
      header.contains(
        document.elementFromPoint(
          rect.left + rect.width / 2,
          rect.top + rect.height / 2,
        ),
      ),
    ).toBe(true);
    // the header is not scrolled away when a control below it takes the focus
    viewport.scrollTop = step * 21;
    await expect.poll(() => root.querySelector("button")).toBeTruthy();
    root.querySelector("button")!.focus();
    await new Promise((r) => setTimeout(r, 50));
    expect(viewport.scrollTop).toBe(step * 21);
    await expectGridGeometry(root, rows, cols, gap, spans);

    // at the end of a section, its header is pushed out by the end of its section, and the next one is not stuck yet
    viewport.scrollTop = step * 20 - ROW_HEIGHT * 1.5;
    await expectGridGeometry(root, rows, cols, gap, spans);
    expect(relativeTop(viewport, cell(container, "6 / 1"))).toBeLessThan(
      stuckTop,
    );
    expect(relativeTop(viewport, cell(container, "20 / 1"))).toBeGreaterThan(
      stuckTop,
    );

    // the header of a section rendered for a scroll far below stays with its section
    scrollToEnd(viewport);
    await expectGridGeometry(root, rows, cols, gap, spans);
    expect(root.textContent).toContain("40 / 1");
    expect(root.textContent).not.toContain("20 / 1");
  });
}

describe("scrollToIndex with sections", () => {
  const GAP = 8;
  const mount = async () => {
    const ref = createRef<VGridHandle>();
    const root = render(
      <VGrid
        ref={ref}
        rows={60}
        rowHeight={ROW_HEIGHT}
        cols={3}
        colWidth={COL_WIDTH}
        gap={GAP}
        headerRows={1}
        // the section at 5 has no rows but its header
        sectionRows={[5, 6, 20, 40]}
        footerRows={1}
        style={{ height: VIEWPORT, width: VIEWPORT }}
      >
        {(rowIndex, colIndex) => (
          <div style={{ background: "white" }}>
            {rowIndex} / {colIndex}
          </div>
        )}
      </VGrid>,
    );
    const { viewport, container } = await getVirtualizer(root);
    await expect.poll(() => cell(container, "0 / 0")).toBeTruthy();
    // NaN until the row is rendered
    const top = (rowIndex: number) => {
      const c = cell(container, rowIndex + " / 0");
      return c ? relativeTop(viewport, c) : NaN;
    };
    const bottom = (rowIndex: number) => {
      const c = cell(container, rowIndex + " / 0");
      return c ? relativeTop(viewport, c) + c.offsetHeight : NaN;
    };
    // nearest reads the position which the scroll event gives
    const settle = () =>
      expect
        .poll(() => ref.current!.verticalScrollOffset)
        .toBe(viewport.scrollTop);
    return { handle: ref.current!, viewport, top, bottom, settle };
  };

  describe("align start", () => {
    it("a row is below the header of its section", async () => {
      const { handle, top, bottom } = await mount();
      handle.scrollToIndex({ rowIndex: 30 });
      await expectPosition(() => top(30) - bottom(20), GAP);
      // which sticks under the pinned row
      await expectPosition(() => top(20) - bottom(0), GAP);
    });

    it("a section header is where it sticks", async () => {
      const { handle, top, bottom } = await mount();
      handle.scrollToIndex({ rowIndex: 20 });
      await expectPosition(() => top(20) - bottom(0), GAP);
    });

    it("the header of a section without rows is below the pinned row", async () => {
      const { handle, top, bottom } = await mount();
      handle.scrollToIndex({ rowIndex: 5 });
      await expectPosition(() => top(5) - bottom(0), GAP);
    });
  });

  describe("align center", () => {
    it("a row is centered between the section header and the rows pinned to the end", async () => {
      const { handle, top, bottom } = await mount();
      handle.scrollToIndex({ rowIndex: 30, rowAlign: "center" });
      await expectPosition(
        () => top(30) - bottom(20) - (top(59) - bottom(30)),
        0,
      );
    });
  });

  describe("align end", () => {
    it("a row is above the rows pinned to the end", async () => {
      const { handle, top, bottom } = await mount();
      handle.scrollToIndex({ rowIndex: 30, rowAlign: "end" });
      await expectPosition(() => top(59) - bottom(30), GAP);
    });
  });

  describe("align nearest", () => {
    it("a visible row is not scrolled to", async () => {
      const { handle, viewport, top, bottom, settle } = await mount();
      handle.scrollToIndex({ rowIndex: 30 });
      await expectPosition(() => top(30) - bottom(20), GAP);
      await settle();
      const scrollTop = viewport.scrollTop;
      handle.scrollToIndex({ rowIndex: 33, rowAlign: "nearest" });
      await new Promise((r) => setTimeout(r, 100));
      expect(viewport.scrollTop).toBe(scrollTop);
    });

    it("a row under the section header is scrolled to the start", async () => {
      const { handle, viewport, top, bottom, settle } = await mount();
      handle.scrollToIndex({ rowIndex: 32 });
      await expectPosition(() => top(32) - bottom(20), GAP);
      await settle();
      handle.scrollToIndex({ rowIndex: 31, rowAlign: "nearest" });
      await expectPosition(() => top(31) - bottom(20), GAP);
      expect(viewport.scrollTop).toBeGreaterThan(0);
    });

    it("a row below the viewport is scrolled to the end", async () => {
      const { handle, top, bottom } = await mount();
      handle.scrollToIndex({ rowIndex: 45, rowAlign: "nearest" });
      await expectPosition(() => top(59) - bottom(45), GAP);
    });

    it("a section header is not scrolled to while it sticks", async () => {
      const { handle, viewport, top, bottom, settle } = await mount();
      handle.scrollToIndex({ rowIndex: 25 });
      await expectPosition(() => top(20) - bottom(0), GAP);
      await settle();
      const scrollTop = viewport.scrollTop;
      handle.scrollToIndex({ rowIndex: 20, rowAlign: "nearest" });
      await new Promise((r) => setTimeout(r, 100));
      expect(viewport.scrollTop).toBe(scrollTop);
    });

    it("a section header pushed out by the next section is scrolled to the start", async () => {
      const { handle, top, bottom, settle } = await mount();
      handle.scrollToIndex({ rowIndex: 45 });
      await expectPosition(() => top(45) - bottom(40), GAP);
      await settle();
      handle.scrollToIndex({ rowIndex: 20, rowAlign: "nearest" });
      await expectPosition(() => top(20) - bottom(0), GAP);
    });
  });
});

{
  const MATRIX_ROWS = 60;
  const MATRIX_COLS = 30;
  const rowSize = (rowIndex: number) => 30 + (rowIndex % 3) * 10;
  const colSize = (colIndex: number) => 80 + (colIndex % 2) * 40;
  type Pinned = { header?: number; footer?: number; sections?: number[] };
  const PINNED: { label: string; rows: Pinned; cols: Pinned }[] = [
    {
      label: "both",
      rows: { header: 2, footer: 1 },
      cols: { header: 1, footer: 1 },
    },
    { label: "start", rows: { header: 2 }, cols: { header: 1 } },
    { label: "end", rows: { footer: 1 }, cols: { footer: 1 } },
    {
      label: "both with sections",
      rows: { header: 2, sections: [9, 30], footer: 1 },
      cols: { header: 1, footer: 1 },
    },
  ];
  const isPinned = (pinned: Pinned | undefined, index: number, count: number) =>
    !!pinned &&
    (index < (pinned.header || 0) || index >= count - (pinned.footer || 0));
  // The spans must not cross the pinned tracks or the sections
  const spansOf = (rows: Pinned, cols: Pinned) => {
    const spans: {
      rowIndex: number;
      colIndex: number;
      rowSpan?: number;
      colSpan?: number;
    }[] = [
      // a label spanning the rows in the first column, and a merged area in the body
      { rowIndex: 4, colIndex: 0, rowSpan: 4 },
      { rowIndex: 10, colIndex: 3, rowSpan: 2, colSpan: 2 },
    ];
    if (isPinned(rows, 0, MATRIX_ROWS)) {
      // the corner over the header rows, and a group of the header columns
      spans.push(
        { rowIndex: 0, colIndex: 0, rowSpan: 2 },
        { rowIndex: 0, colIndex: 1, colSpan: 3 },
      );
    }
    if (isPinned(rows, MATRIX_ROWS - 1, MATRIX_ROWS)) {
      // a group in the summary row, over the columns pinned to the end too
      spans.push(
        { rowIndex: MATRIX_ROWS - 1, colIndex: 2, colSpan: 3 },
        { rowIndex: MATRIX_ROWS - 1, colIndex: MATRIX_COLS - 3, colSpan: 2 },
      );
    }
    if (isPinned(cols, MATRIX_COLS - 1, MATRIX_COLS)) {
      // a label spanning the rows in the column pinned to the end
      spans.push({ rowIndex: 20, colIndex: MATRIX_COLS - 1, rowSpan: 3 });
    }
    for (const rowIndex of rows.sections || []) {
      // the label in the first column, and a group of the columns after it
      spans.push({ rowIndex, colIndex: 1, colSpan: 3 });
    }
    return spans;
  };
  // the cells with a control, in each of the pinned and the other regions
  const CONTROLS = [
    [1, 2],
    [8, 2],
    [9, 0],
    [9, 4],
    [15, MATRIX_COLS - 1],
    [MATRIX_ROWS - 1, 0],
  ] as const;

  for (const { label, rows: pinnedRows, cols: pinnedCols } of PINNED) {
    for (const gap of [0, 8]) {
      for (const rtl of [false, true]) {
        for (const auto of [false, true]) {
          it(`the cells are laid out, painted and focused as declared (pinned: ${label}, gap: ${gap}, ${rtl ? "RTL" : "LTR"}, ${auto ? "auto" : "fixed"} sizes)`, async () => {
            if (rtl) {
              setRTL();
            }
            const spans = spansOf(pinnedRows, pinnedCols);
            const ref = createRef<VGridHandle>();
            const root = render(
              <VGrid
                ref={ref}
                rows={MATRIX_ROWS}
                rowHeight={auto ? "auto" : ROW_HEIGHT}
                cols={MATRIX_COLS}
                colWidth={auto ? "auto" : COL_WIDTH}
                gap={gap}
                headerRows={pinnedRows.header}
                sectionRows={pinnedRows.sections}
                footerRows={pinnedRows.footer}
                headerCols={pinnedCols.header}
                footerCols={pinnedCols.footer}
                spans={spans}
                style={{ height: VIEWPORT, width: VIEWPORT }}
              >
                {(rowIndex, colIndex) => {
                  const span = spans.find(
                    (s) => s.rowIndex === rowIndex && s.colIndex === colIndex,
                  );
                  const control = CONTROLS.some(
                    ([r, c]) => r === rowIndex && c === colIndex,
                  );
                  return (
                    // a cell is smaller than the tracks it spans and as large as the track it doesn't, so every track keeps its size while the other cells are out of the range
                    <div
                      style={{
                        background: "white",
                        height: auto
                          ? span && span.rowSpan
                            ? 20
                            : rowSize(rowIndex)
                          : undefined,
                        width: auto
                          ? span && span.colSpan
                            ? 40
                            : colSize(colIndex)
                          : undefined,
                      }}
                    >
                      {control ? (
                        <button>
                          {rowIndex} / {colIndex}
                        </button>
                      ) : (
                        `${rowIndex} / ${colIndex}`
                      )}
                    </div>
                  );
                }}
              </VGrid>,
            );
            const { viewport, container } = await getVirtualizer(root);
            const rows = {
              count: MATRIX_ROWS,
              size: auto ? rowSize : () => ROW_HEIGHT,
              pinned: { start: pinnedRows.header, end: pinnedRows.footer },
              headers: pinnedRows.sections,
            };
            const cols = {
              count: MATRIX_COLS,
              size: auto ? colSize : () => COL_WIDTH,
              pinned: { start: pinnedCols.header, end: pinnedCols.footer },
            };
            const total = (count: number, size: (i: number) => number) =>
              Array.from({ length: count }, (_, i) => size(i)).reduce(
                (a, b) => a + b,
                0,
              ) +
              gap * (count - 1);
            const scrollHeight = total(MATRIX_ROWS, rows.size);
            const scrollWidth = total(MATRIX_COLS, cols.size);

            // The paint order declared: the pinned rows over the section headers over the others, and in them the pinned cells over the spanning cells over the others.
            // https://drafts.csswg.org/css-grid-2/#z-order
            // the content box of the viewport, which the scrollbar is at the start of in RTL
            const contentBox = () => {
              const v = viewport.getBoundingClientRect();
              return {
                top: v.top + viewport.clientTop,
                left:
                  v.left +
                  viewport.clientLeft +
                  (rtl
                    ? viewport.offsetWidth -
                      viewport.clientWidth -
                      viewport.clientLeft * 2
                    : 0),
              };
            };
            const paintErrors = () => {
              const errors: string[] = [];
              const box = contentBox();
              const cells = [
                ...container.querySelectorAll('[role="row"] > *'),
              ].map((cell, order) => {
                const rowIndex =
                  Number(cell.parentElement!.getAttribute("aria-rowindex")) - 1;
                const colIndex = Number(cell.getAttribute("aria-colindex")) - 1;
                const rowSpan = Number(cell.getAttribute("aria-rowspan") || 1);
                return {
                  cell,
                  rect: cell.getBoundingClientRect(),
                  priority:
                    (isPinned(pinnedRows, rowIndex, MATRIX_ROWS)
                      ? 8
                      : (pinnedRows.sections || []).includes(rowIndex)
                        ? 4
                        : 0) +
                    (isPinned(pinnedCols, colIndex, MATRIX_COLS)
                      ? 2
                      : rowSpan > 1
                        ? 1
                        : 0),
                  order,
                };
              });
              // The pinned rows are sticky together, so the gaps between them are over the cells scrolled under them.
              const pinnedBands = [
                ...container.querySelectorAll('[role="row"]'),
              ]
                .filter((row) =>
                  isPinned(
                    pinnedRows,
                    Number(row.getAttribute("aria-rowindex")) - 1,
                    MATRIX_ROWS,
                  ),
                )
                .map((row) => row.getBoundingClientRect());
              for (const { cell, rect } of cells) {
                const x = rect.left + rect.width / 2;
                const y = rect.top + rect.height / 2;
                // the overlay scrollbars take the points near the edges
                const EDGE = 20;
                if (
                  x < box.left + EDGE ||
                  x > box.left + viewport.clientWidth - EDGE ||
                  y < box.top + EDGE ||
                  y > box.top + viewport.clientHeight - EDGE ||
                  pinnedBands.some(
                    (band) =>
                      band.top <= y &&
                      y < band.bottom &&
                      !cells.some(
                        (c) =>
                          c.priority >= 8 &&
                          c.rect.left <= x &&
                          x < c.rect.right &&
                          c.rect.top <= y &&
                          y < c.rect.bottom,
                      ),
                  )
                ) {
                  continue;
                }
                let expected: (typeof cells)[number] | undefined;
                for (const c of cells) {
                  // A point on the start edges is in the box, as the browser hits it
                  if (
                    c.rect.left <= x &&
                    x < c.rect.right &&
                    c.rect.top <= y &&
                    y < c.rect.bottom &&
                    (!expected ||
                      c.priority > expected.priority ||
                      (c.priority === expected.priority &&
                        c.order > expected.order))
                  ) {
                    expected = c;
                  }
                }
                const hit = document.elementFromPoint(x, y);
                if (!hit || !expected!.cell.contains(hit)) {
                  errors.push(
                    `${cell.textContent}: hit ${hit?.closest('[role="row"] > *')?.textContent} (${hit?.tagName} ${hit?.getAttribute("role")} at ${x - box.left},${y - box.top} in ${viewport.clientWidth}x${viewport.clientHeight}, cell ${rect.left - box.left},${rect.top - box.top} ${rect.width}x${rect.height}), expected ${expected!.cell.textContent}`,
                  );
                }
              }
              return errors;
            };

            const check = async () => {
              await expectGridGeometry(root, rows, cols, gap, spans);
              expect([viewport.scrollHeight, ...unmeasuredRows()]).toEqual([
                scrollHeight,
              ]);
              expect([viewport.scrollWidth, ...unmeasuredCols()]).toEqual([
                scrollWidth,
              ]);
              await expect
                .poll(() => getComputedStyle(container).pointerEvents)
                .toBe("auto");
              expect(paintErrors()).toEqual([]);
              // a visible control takes the focus without scrolling
              const box = contentBox();
              for (const button of root.querySelectorAll("button")) {
                const { left, top, width, height } =
                  button.getBoundingClientRect();
                const hit = document.elementFromPoint(
                  left + width / 2,
                  top + height / 2,
                );
                // a control clipped by the viewport is scrolled into view
                if (
                  !hit ||
                  !button.contains(hit) ||
                  left < box.left ||
                  left + width > box.left + viewport.clientWidth ||
                  top < box.top ||
                  top + height > box.top + viewport.clientHeight
                ) {
                  continue;
                }
                const [scrollTop, scrollLeft] = [
                  viewport.scrollTop,
                  viewport.scrollLeft,
                ];
                button.focus();
                await new Promise((r) => setTimeout(r, 50));
                expect(document.activeElement).toBe(button);
                expect(
                  Math.abs(viewport.scrollTop - scrollTop),
                ).toBeLessThanOrEqual(1);
                expect(
                  Math.abs(viewport.scrollLeft - scrollLeft),
                ).toBeLessThanOrEqual(1);
                // Firefox and WebKit scroll a focused element back into view when the DOM around it changes
                button.blur();
              }
            };

            const unmeasured = (
              count: number,
              size: (i: number) => number,
              get: (i: number) => number,
            ) =>
              Array.from({ length: count }, (_, i) => i)
                .filter((i) => get(i) !== size(i))
                .map((i) => `${i}:${get(i)}`);
            const unmeasuredRows = () =>
              unmeasured(MATRIX_ROWS, rows.size, ref.current!.getRowSize);
            const unmeasuredCols = () =>
              unmeasured(MATRIX_COLS, cols.size, ref.current!.getColSize);

            // The tracks out of the viewport are estimated, so every track is measured first, again if missed under load.
            for (
              let pass = 0;
              auto &&
              pass < 3 &&
              (!pass || unmeasuredRows().length || unmeasuredCols().length);
              pass++
            ) {
              // The track of the other axis is not waited for, as the pinned tracks shrink the range of both.
              const settle = async (selector: string) => {
                await expect
                  .poll(() => container.querySelector(selector))
                  .toBeTruthy();
                // the cells around it are measured after they are painted
                await new Promise((r) => setTimeout(r, 100));
              };
              const settleRow = (rowIndex: number) =>
                settle(`[role="row"][aria-rowindex="${rowIndex + 1}"]`);
              // by half the viewport, so that every track is rendered in a step
              for (
                let top = 0;
                top <= viewport.scrollHeight;
                top += VIEWPORT / 2
              ) {
                viewport.scrollTop = top;
                // a row in the middle of the viewport, which the pinned rows never cover
                await settleRow(
                  Math.min(
                    MATRIX_ROWS - 2,
                    ref.current!.findRowIndex(top + VIEWPORT / 2),
                  ),
                );
              }
              viewport.scrollTop = 0;
              for (
                let start = 0;
                start <= viewport.scrollWidth;
                start += VIEWPORT / 2
              ) {
                viewport.scrollLeft = rtl ? -start : start;
                await settle(
                  `[aria-colindex="${Math.min(MATRIX_COLS - 2, ref.current!.findColIndex(start + VIEWPORT / 2)) + 1}"]`,
                );
              }
              viewport.scrollTop = 0;
              viewport.scrollLeft = 0;
              await settleRow(0);
            }
            await check();
            for (const [top, start] of [
              [viewport.scrollHeight * 0.3, viewport.scrollWidth * 0.3],
              [viewport.scrollHeight, viewport.scrollWidth],
              [rows.size(0) * 1.5, cols.size(0) * 1.5],
            ] as const) {
              viewport.scrollTop = top;
              viewport.scrollLeft = rtl ? -start : start;
              await check();
            }
          });
        }
      }
    }
  }
}
