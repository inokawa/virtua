import { Meta, StoryObj } from "@storybook/react";
import React, {
  createContext,
  forwardRef,
  useContext,
  useRef,
  useState,
} from "react";
import { CustomItemComponentProps, VList, VListHandle } from "../../../src";

export default {
  component: VList,
} as Meta;

const stickyItemHeight = 40;
const stickyIndexes = new Set([0, 100, 200, 300, 400, 500, 600, 700, 800, 900]);
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
  }
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
          item={StickyItem}
          keepMounted={[activeIndex]}
          onScroll={() => {
            if (!ref.current) return;
            const start = ref.current.startIndex;
            const activeStickyIndex = [...stickyIndexes]
              .reverse()
              .find((index) => start >= index)!;
            setActiveIndex(activeStickyIndex);
          }}
        >
          {Array.from({ length: 1000 }).map((_, i) => {
            const isSticky = stickyIndexes.has(i);
            return (
              <div
                key={i}
                style={{
                  height: isSticky ? stickyItemHeight : 80,
                  borderBottom: "solid 1px #ccc",
                  background: isSticky ? "#B8C1C8" : "#fff",
                  color: isSticky ? "#fff" : undefined,
                  paddingRight: 4,
                  paddingLeft: 4,
                }}
              >
                {i}
              </div>
            );
          })}
        </VList>
      </StickyIndexContext.Provider>
    );
  },
};
