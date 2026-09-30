import type { Meta, StoryObj } from "@storybook/react-vite";
import React, {
  createContext,
  forwardRef,
  useContext,
  useRef,
  useState,
} from "react";
import { CustomItemComponentProps, VList, VListHandle } from "../../../src";
import { faker } from "@faker-js/faker";

export default {
  component: VList,
} as Meta;

type Row =
  { type: "header"; letter: string } | { type: "contact"; name: string };

const rows: Row[] = [];
faker.helpers
  .multiple(() => `${faker.person.firstName()} ${faker.person.lastName()}`, {
    count: 1000,
  })
  .sort((a, b) => a.localeCompare(b))
  .forEach((name) => {
    const letter = name[0]!.toUpperCase();
    const prev = rows.findLast((r) => r.type === "header");
    if (!prev || prev.letter !== letter) {
      rows.push({ type: "header", letter });
    }
    rows.push({ type: "contact", name });
  });

const stickyItemHeight = 32;
const stickyIndexes = new Set(
  rows.flatMap((r, i) => (r.type === "header" ? [i] : [])),
);
const StickyIndexContext = createContext(-1);
const StickyItem = forwardRef<HTMLDivElement, CustomItemComponentProps>(
  ({ children, style, index }, ref) => {
    const activeIndex = useContext(StickyIndexContext);
    return (
      <div
        ref={ref}
        style={{
          ...style,
          ...(stickyIndexes.has(index) && {
            zIndex: 1,
          }),
          ...(activeIndex === index && {
            position: "sticky",
            top: 0,
          }),
        }}
      >
        {children}
      </div>
    );
  },
);

export const Default: StoryObj = {
  name: "Sticky Group",
  render: () => {
    const ref = useRef<VListHandle>(null);
    const [activeIndex, setActiveIndex] = useState(0);
    return (
      <StickyIndexContext.Provider value={activeIndex}>
        <VList
          ref={ref}
          style={{
            height: "100vh",
            fontFamily: "system-ui, sans-serif",
            fontSize: 14,
          }}
          item={StickyItem}
          keepMounted={[activeIndex]}
          onScroll={() => {
            if (!ref.current) return;
            const start = ref.current.findItemIndex(ref.current.scrollOffset);
            const activeStickyIndex = [...stickyIndexes]
              .reverse()
              .find((index) => start >= index)!;
            setActiveIndex(activeStickyIndex);
          }}
        >
          {rows.map((row, i) =>
            row.type === "header" ? (
              <div
                key={i}
                style={{
                  height: stickyItemHeight,
                  display: "flex",
                  alignItems: "center",
                  padding: "0 16px",
                  background: "#f3f4f6",
                  borderBottom: "solid 1px #e5e7eb",
                  color: "#6b7280",
                  fontSize: 13,
                  fontWeight: 600,
                }}
              >
                {row.letter}
              </div>
            ) : (
              <div
                key={i}
                style={{
                  height: 48,
                  display: "flex",
                  alignItems: "center",
                  padding: "0 16px",
                  borderBottom: "solid 1px #f0f0f0",
                  background: "#fff",
                }}
              >
                {row.name}
              </div>
            ),
          )}
        </VList>
      </StickyIndexContext.Provider>
    );
  },
};
