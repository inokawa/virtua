import { Meta, StoryObj } from "@storybook/react";
import React, {
  CSSProperties,
  forwardRef,
  Fragment,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { VList, CustomViewportComponentProps } from "../../../src";

export default {
  component: VList,
} as Meta;

const COLUMN_WIDTHS = [100, 200, 300, 100, 200, 300, 100, 300, 400, 200];

const TableList = forwardRef<
  HTMLTableSectionElement,
  CustomViewportComponentProps
>(({ children, height, attrs }, ref) => {
  const [headerHeight, setHeaderHeight] = useState<number>(0);
  const headerRef = useRef<HTMLTableSectionElement>(null);
  useLayoutEffect(() => {
    if (!headerRef.current) return;
    setHeaderHeight(headerRef.current.getBoundingClientRect().height);
  }, []);

  return (
    <div {...attrs} ref={ref}>
      <table
        style={{
          height,
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
            height,
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
      <VList
        style={{
          width: "100%",
          height: "75%",
          background: "#fff",
          overflow: "auto",
        }}
        components={{ Root: TableList, Item: "tr" }}
      >
        {Array.from({ length: 1000 }).map((_, i) => (
          <Fragment key={i}>
            {COLUMN_WIDTHS.map((width, j) => (
              <td key={j} style={{ minWidth: width }}>
                {i}, {j}
              </td>
            ))}
          </Fragment>
        ))}
      </VList>
    );
  },
};
