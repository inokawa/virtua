import type { Meta, StoryObj } from "@storybook/react-vite";
import { VGrid, VGridHandle, GridSpan } from "../../../src";
import React, { CSSProperties, useEffect, useRef } from "react";
import { faker } from "@faker-js/faker";

export default {
  component: VGrid,
} as Meta;

// The timeline is a grid of the people and the days: the events are the cells merged over their days,
// as the bars of a gantt chart. A week view of a calendar is the same grid transposed (the hours and the days).

const DAY_MS = 24 * 60 * 60 * 1000;
const TODAY = new Date();
TODAY.setHours(0, 0, 0, 0);
// three years around today
const FIRST_DAY = new Date(TODAY.getFullYear() - 1, 0, 1);
const DAYS = Math.round(
  (new Date(TODAY.getFullYear() + 2, 0, 1).getTime() - FIRST_DAY.getTime()) /
    DAY_MS,
);
const TODAY_COL =
  1 + Math.round((TODAY.getTime() - FIRST_DAY.getTime()) / DAY_MS);

type Person = { name: string };
type Event = { title: string; color: string };

const COLORS = ["#4285f4", "#0b8043", "#f4511e", "#8e24aa", "#f6bf26"];
const people: Person[] = Array.from({ length: 300 }, () => ({
  name: faker.person.fullName(),
}));
// the header rows have no person
const MONTHS_ROW = { header: "months" } as const;
const DAYS_ROW = { header: "days" } as const;
type Row = Person | typeof MONTHS_ROW | typeof DAYS_ROW;
const ROWS: Row[] = [MONTHS_ROW, DAYS_ROW, ...people];
const HEADER_ROWS = 2;

const NAME_COL = { name: true, width: 200 } as const;
const DAY_WIDTH = 48;
type Col = typeof NAME_COL | { date: Date; width: number };
const COLS: Col[] = [
  NAME_COL,
  ...Array.from({ length: DAYS }, (_, i) => ({
    date: new Date(FIRST_DAY.getTime() + i * DAY_MS),
    width: DAY_WIDTH,
  })),
];

// the events of each person don't overlap, so each is a merged cell
const events = new Map<number, Event>();
const eventSpans: GridSpan[] = [];
people.forEach((_, i) => {
  const rowIndex = i + HEADER_ROWS;
  for (
    let day = faker.number.int({ min: 0, max: 20 });
    day < DAYS;
    day += faker.number.int({ min: 2, max: 25 })
  ) {
    const length = Math.min(faker.number.int({ min: 1, max: 12 }), DAYS - day);
    events.set(rowIndex * (DAYS + 1) + day + 1, {
      title: faker.hacker.ingverb() + " " + faker.hacker.noun(),
      color: COLORS[faker.number.int({ min: 0, max: COLORS.length - 1 })]!,
    });
    eventSpans.push({ rowIndex, colIndex: day + 1, colSpan: length });
    day += length;
  }
});
const monthSpans: GridSpan[] = [];
for (let day = 0; day < DAYS;) {
  const date = new Date(FIRST_DAY.getTime() + day * DAY_MS);
  const length = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  monthSpans.push({ rowIndex: 0, colIndex: day + 1, colSpan: length });
  day += length;
}
const SPANS: GridSpan[] = [
  // the corner over the header rows
  { rowIndex: 0, colIndex: 0, rowSpan: HEADER_ROWS },
  ...monthSpans,
  ...eventSpans,
];

const isWeekend = (date: Date) => date.getDay() === 0 || date.getDay() === 6;
const isToday = (date: Date) => date.getTime() === TODAY.getTime();

const LINE = "#e2e3e3";
const cellStyle: CSSProperties = {
  boxSizing: "border-box",
  borderRight: "solid 1px " + LINE,
  borderBottom: "solid 1px " + LINE,
  whiteSpace: "nowrap",
};
const headerStyle: CSSProperties = {
  ...cellStyle,
  background: "#f8f9fa",
  color: "#5f6368",
  fontSize: 13,
  userSelect: "none",
};
const nameStyle: CSSProperties = {
  ...cellStyle,
  display: "flex",
  alignItems: "center",
  padding: "0 12px",
  background: "#fff",
  overflow: "hidden",
  textOverflow: "ellipsis",
};
// A label in a cell wider than the viewport sticks to the edge of the pinned column, and goes away with the end of the cell.
// The track of the label doesn't grow over the cell, so a long label is cut instead of widening the cell.
const labelTrackStyle: CSSProperties = {
  display: "grid",
  gridTemplateColumns: "minmax(0,1fr)",
};
const stickyLabelStyle: CSSProperties = {
  position: "sticky",
  insetInlineStart: NAME_COL.width,
  justifySelf: "start",
  alignSelf: "center",
  maxWidth: "100%",
  boxSizing: "border-box",
  padding: "0 8px",
  overflow: "clip",
  textOverflow: "ellipsis",
};
// the lines of the days merged under a bar
const dayLines = `repeating-linear-gradient(to right, transparent, transparent ${DAY_WIDTH - 1}px, ${LINE} ${DAY_WIDTH - 1}px, ${LINE} ${DAY_WIDTH}px)`;
// The days are shaded on the grid under the cells, so the shade goes on under the bars merged over the days.
// The weekends are a tile of a week from the first Saturday, and today is a stripe.
const daysOffset = NAME_COL.width + (TODAY_COL - 1) * DAY_WIDTH;
const saturdayOffset =
  NAME_COL.width - ((FIRST_DAY.getDay() + 1) % 7) * DAY_WIDTH;
const gridBackground = `linear-gradient(#e8f0fe, #e8f0fe) ${daysOffset}px 0 / ${DAY_WIDTH}px 100% no-repeat, linear-gradient(to right, #f8f9fa 0 ${DAY_WIDTH * 2}px, transparent ${DAY_WIDTH * 2}px) ${saturdayOffset}px 0 / ${DAY_WIDTH * 7}px 100% repeat-x, #fff`;
const buttonStyle: CSSProperties = {
  padding: "4px 12px",
  border: "solid 1px #dadce0",
  borderRadius: 4,
  background: "#fff",
  font: "inherit",
  cursor: "pointer",
};

export const Timeline: StoryObj = {
  render: () => {
    const ref = useRef<VGridHandle>(null);

    useEffect(() => {
      ref.current?.scrollToIndex({ colIndex: TODAY_COL });
    }, []);

    return (
      <div
        style={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div style={{ padding: 8, borderBottom: "solid 1px #dadce0" }}>
          <button
            style={buttonStyle}
            onClick={() => {
              ref.current!.scrollToIndex({ colIndex: TODAY_COL });
            }}
          >
            Today
          </button>
        </div>
        <VGrid
          ref={ref}
          aria-label="Schedule"
          style={{
            flex: 1,
            background: gridBackground,
            backgroundAttachment: "local",
          }}
          rows={ROWS}
          rowHeight={40}
          cols={COLS}
          colWidth="width"
          headerRows={HEADER_ROWS}
          headerCols={1}
          spans={SPANS}
        >
          {(row, col, { rowIndex, colIndex }) => {
            if (row === MONTHS_ROW) {
              if (!("date" in col)) {
                return <div style={headerStyle} />;
              }
              return (
                <div style={{ ...headerStyle, ...labelTrackStyle }}>
                  <div style={{ ...stickyLabelStyle, fontWeight: 500 }}>
                    {col.date.toLocaleString("en", {
                      month: "long",
                      year: "numeric",
                    })}
                  </div>
                </div>
              );
            }
            if (!("date" in col)) {
              return (
                <div style={nameStyle}>{"header" in row ? "" : row.name}</div>
              );
            }
            const today = isToday(col.date);
            if (row === DAYS_ROW) {
              return (
                <div
                  style={{
                    ...headerStyle,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    lineHeight: 1.2,
                    color: today
                      ? "#1a73e8"
                      : isWeekend(col.date)
                        ? "#9aa0a6"
                        : undefined,
                    fontWeight: today ? 700 : undefined,
                  }}
                >
                  <span>{col.date.getDate()}</span>
                  <span style={{ fontSize: 10 }}>
                    {col.date.toLocaleString("en", { weekday: "narrow" })}
                  </span>
                </div>
              );
            }
            const event = events.get(rowIndex * (DAYS + 1) + colIndex);
            return (
              <div
                style={{
                  ...cellStyle,
                  display: "grid",
                  background: event ? dayLines : undefined,
                }}
              >
                {event && (
                  <div
                    style={{
                      ...labelTrackStyle,
                      margin: "6px 2px",
                      borderRadius: 4,
                      background: event.color,
                      color: "#fff",
                      fontSize: 13,
                    }}
                  >
                    <div style={stickyLabelStyle}>{event.title}</div>
                  </div>
                )}
              </div>
            );
          }}
        </VGrid>
      </div>
    );
  },
};
