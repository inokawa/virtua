import { Meta, StoryObj } from "@storybook/react";
import { VList, VListHandle } from "../../src";
import React, {
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

const Day = ({
  children,
  isToday,
}: {
  children?: ReactNode;
  isToday?: boolean;
}) => {
  return (
    <div
      style={{
        background: isToday ? "skyblue" : undefined,
        width: "calc(100% / 7)",
        height: 40,
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
    const [year, month, firstDayofMonth, lastDateofMonth, lastDayofMonth] =
      useMemo(() => {
        const d = getLastDateOfMonth(date);
        return [
          date.getFullYear(),
          date.getMonth(),
          getFirstDateOfMonth(date).getDay(),
          d.getDate(),
          d.getDay(),
        ] as const;
      }, [date]);

    const items: ReactElement[] = [];
    for (let i = firstDayofMonth; i > 0; i--) {
      items.push(<Day key={`prev_${i}`} />);
    }
    for (let i = 1; i <= lastDateofMonth; i++) {
      items.push(
        <Day
          key={i}
          isToday={
            curDate === i && curMonth === month && curYear === year
              ? true
              : false
          }
        >
          {i}
        </Day>
      );
    }
    for (let i = lastDayofMonth; i < 6; i++) {
      items.push(<Day key={`next_${i}`} />);
    }

    return (
      <div style={{ borderBottom: "solid 1px #ddd" }}>
        <div
          style={{
            position: "sticky",
            top: 0,
            borderBottom: "solid 1px #ddd",
            background: "white",
          }}
        >
          <div>{year}</div>
          <div>{months[month]}</div>
        </div>
        <div style={{ display: "flex", flexWrap: "wrap" }}>{items}</div>
      </div>
    );
  }
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
          d.getDate() === curDate
      );
      if (index === -1) return;
      ref.current?.scrollToIndex(index);
    };

    useLayoutEffect(() => {
      scrollToThisMonth();
    }, []);

    return (
      <div>
        <div style={{ marginBottom: 4 }}>
          <button style={{ marginLeft: 4 }} onClick={scrollToThisMonth}>
            today
          </button>
        </div>
        <div
          style={{
            width: "800px",
            height: "90vh",
            background: "#fff",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              borderBottom: "solid 1px #ddd",
            }}
          >
            {DAY_OF_WEEKS.map((d) => (
              <div style={{ flex: 1 }}>{d}</div>
            ))}
          </div>
          <VList ref={ref} style={{ flex: 1 }}>
            {items.map((d, i) => (
              <Month key={i} date={d} now={now} />
            ))}
          </VList>
        </div>
      </div>
    );
  },
};
