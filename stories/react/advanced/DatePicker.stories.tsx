import type { Meta, StoryObj } from "@storybook/react-vite";
import { VList, VListHandle } from "../../../src";
import React, {
  CSSProperties,
  ReactElement,
  ReactNode,
  memo,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";

export default {
  component: VList,
} as Meta;

const DAY_OF_WEEKS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const LINE = "#e2e3e3";
const weekStyle: CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(7, 1fr)",
  justifyItems: "center",
};
const buttonStyle: CSSProperties = {
  padding: "4px 12px",
  border: "solid 1px #dadce0",
  borderRadius: 4,
  background: "#fff",
  font: "inherit",
  cursor: "pointer",
};

const Day = ({
  children,
  isToday,
  isWeekend,
  column,
}: {
  children: ReactNode;
  isToday: boolean;
  isWeekend: boolean;
  column?: number;
}) => {
  return (
    <div
      style={{
        // The first day starts at its day of the week, and the rest follow
        gridColumnStart: column,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: 32,
        height: 32,
        margin: "4px 0",
        borderRadius: "50%",
        background: isToday ? "#1a73e8" : undefined,
        color: isToday ? "#fff" : isWeekend ? "#9aa0a6" : undefined,
        fontWeight: isToday ? 700 : undefined,
      }}
    >
      {children}
    </div>
  );
};

const getFirstDateOfNextMonth = (date: Date): Date => {
  const d = new Date(date);
  d.setDate(1);
  d.setMonth(d.getMonth() + 1);
  return d;
};
const getFirstDateOfPrevMonth = (date: Date): Date => {
  const d = new Date(date);
  d.setDate(1);
  d.setMonth(d.getMonth() - 1);
  return d;
};

const getFirstDateOfMonth = (date: Date): Date => {
  const d = new Date(date);
  d.setDate(1);
  return d;
};

const getLastDateOfMonth = (date: Date): Date => {
  const d = getFirstDateOfNextMonth(date);
  d.setDate(0);
  return d;
};

const Month = memo(
  ({
    date,
    now: [curYear, curMonth, curDate],
  }: {
    date: Date;
    now: readonly [number, number, number];
  }) => {
    const [year, month, firstDayofMonth, lastDateofMonth] = useMemo(() => {
      return [
        date.getFullYear(),
        date.getMonth(),
        getFirstDateOfMonth(date).getDay(),
        getLastDateOfMonth(date).getDate(),
      ] as const;
    }, [date]);

    const items: ReactElement[] = [];
    for (let i = 1; i <= lastDateofMonth; i++) {
      const day = (firstDayofMonth + i - 1) % 7;
      items.push(
        <Day
          key={i}
          isToday={curDate === i && curMonth === month && curYear === year}
          isWeekend={day === 0 || day === 6}
          column={i === 1 ? firstDayofMonth + 1 : undefined}
        >
          {i}
        </Day>,
      );
    }

    // The height depends on the number of the weeks in the month
    return (
      <div style={{ borderBottom: "solid 1px " + LINE }}>
        <div
          style={{
            position: "sticky",
            top: 0,
            padding: "8px 16px",
            background: "#fff",
            fontWeight: 500,
          }}
        >
          {months[month]} {year}
        </div>
        <div style={{ ...weekStyle, padding: "0 8px 8px" }}>{items}</div>
      </div>
    );
  },
);

export const Default: StoryObj = {
  name: "DatePicker",
  render: () => {
    const [now, items] = useState(() => {
      const now = new Date();
      const months = [now];

      Array.from({ length: 1000 }).forEach(() => {
        months.unshift(getFirstDateOfPrevMonth(months[0]));
      });
      Array.from({ length: 1000 }).forEach(() => {
        months.push(getFirstDateOfNextMonth(months[months.length - 1]));
      });

      return [
        [now.getFullYear(), now.getMonth(), now.getDate()],
        months,
      ] as const;
    })[0];

    const ref = useRef<VListHandle>(null);

    const scrollToThisMonth = () => {
      const [curYear, curMonth, curDate] = now;
      const index = items.findIndex(
        (d) =>
          d.getFullYear() === curYear &&
          d.getMonth() === curMonth &&
          d.getDate() === curDate,
      );
      if (index === -1) return;
      ref.current?.scrollToIndex(index);
    };

    useLayoutEffect(() => {
      scrollToThisMonth();
    }, []);

    return (
      <div
        style={{
          width: 360,
          height: "90vh",
          maxHeight: 560,
          display: "flex",
          flexDirection: "column",
          border: "solid 1px #dadce0",
          borderRadius: 8,
          overflow: "hidden",
          background: "#fff",
          fontFamily: "system-ui, sans-serif",
          fontSize: 14,
          color: "#3c4043",
        }}
      >
        <div style={{ padding: 8, borderBottom: "solid 1px #dadce0" }}>
          <button style={buttonStyle} onClick={scrollToThisMonth}>
            Today
          </button>
        </div>
        <div
          style={{
            ...weekStyle,
            padding: "6px 8px",
            borderBottom: "solid 1px " + LINE,
            background: "#f8f9fa",
            color: "#5f6368",
            fontSize: 12,
          }}
        >
          {DAY_OF_WEEKS.map((d) => (
            <div key={d}>{d}</div>
          ))}
        </div>
        <VList ref={ref} style={{ flex: 1 }}>
          {items.map((d, i) => (
            <Month key={i} date={d} now={now} />
          ))}
        </VList>
      </div>
    );
  },
};
