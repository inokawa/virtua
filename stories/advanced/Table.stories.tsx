import { Meta, StoryObj } from "@storybook/react";
import React, {
  CSSProperties,
  forwardRef,
  Fragment,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { List } from "../../src";
import { CustomWindowComponentProps } from "../../src/react/List";

export default {
  component: List,
} as Meta;

const COLUMN_WIDTHS = [100, 200, 300, 100, 200, 300, 100, 300, 400, 200];

const TableList = forwardRef<
  HTMLTableSectionElement,
  CustomWindowComponentProps
>(({ children, style, scrollSize }, ref) => {
  const [headerHeight, setHeaderHeight] = useState<number>(0);
  const headerRef = useRef<HTMLTableSectionElement>(null);
  useLayoutEffect(() => {
    if (!headerRef.current) return;
    setHeaderHeight(headerRef.current.getBoundingClientRect().height);
  }, []);

  const baseThStyle: CSSProperties = {
    color: "white",
    background: "darkgray",
  };
  return (
    <div style={style} ref={ref}>
      <table
        style={{
          height: scrollSize,
          tableLayout: "fixed",
          borderCollapse: "collapse",
          whiteSpace: "nowrap",
        }}
        border={1}
      >
        <thead
          ref={headerRef}
          style={{
            position: "sticky",
            top: 0,
            zIndex: 1,
            height: 20,
          }}
        >
          <tr style={{ width: "100%" }}>
            <th style={{ ...baseThStyle, minWidth: COLUMN_WIDTHS[0] }}>0</th>
            <th style={{ ...baseThStyle, minWidth: COLUMN_WIDTHS[1] }}>1</th>
            <th style={{ ...baseThStyle, minWidth: COLUMN_WIDTHS[2] }}>2</th>
            <th style={{ ...baseThStyle, minWidth: COLUMN_WIDTHS[3] }}>3</th>
            <th style={{ ...baseThStyle, minWidth: COLUMN_WIDTHS[4] }}>4</th>
            <th style={{ ...baseThStyle, minWidth: COLUMN_WIDTHS[5] }}>5</th>
            <th style={{ ...baseThStyle, minWidth: COLUMN_WIDTHS[6] }}>6</th>
            <th style={{ ...baseThStyle, minWidth: COLUMN_WIDTHS[7] }}>7</th>
            <th style={{ ...baseThStyle, minWidth: COLUMN_WIDTHS[8] }}>8</th>
            <th style={{ ...baseThStyle, minWidth: COLUMN_WIDTHS[9] }}>9</th>
          </tr>
        </thead>
        <tbody
          style={{
            height: scrollSize,
            marginTop: headerHeight,
            position: "absolute",
            top: 0,
            left: 0,
          }}
        >
          {children}
        </tbody>
      </table>
    </div>
  );
});

export const Table: StoryObj = {
  render: () => {
    return (
      <List
        style={{
          width: "100%",
          height: "75%",
          background: "#fff",
          overflow: "auto",
        }}
        element={TableList}
        itemElement="tr"
      >
        {Array.from({ length: 1000 }).map((_, i) => (
          <Fragment key={i}>
            {Array.from({ length: 10 }).map((_, j) => (
              <td
                key={j}
                style={{
                  minWidth: COLUMN_WIDTHS[j],
                }}
              >
                {i}, {j}
              </td>
            ))}
          </Fragment>
        ))}
      </List>
    );
  },
};
