import { Meta, StoryObj } from "@storybook/react-vite";
import { VList, VListHandle } from "../../../src";
import React, { useLayoutEffect, useRef, useState } from "react";
import { range } from "../common";

export default {
  component: VList,
} as Meta;

export const Default: StoryObj = {
  name: "Loop",
  render: () => {
    const TOTAL_LENGTH = 200;
    const OFFSET_TO_BOUND = 100;
    const id = useRef(0);
    const createItem = () => {
      return {
        id: id.current++,
      };
    };
    const createItems = (num: number) => range(num, createItem);

    const ref = useRef<VListHandle>(null);
    const [items, setItems] = useState(() => createItems(TOTAL_LENGTH));

    const prevScrollOffset = useRef(-1);
    const shouldPrepend = useRef(false);

    useLayoutEffect(() => {
      ref.current?.scrollToIndex(TOTAL_LENGTH / 2);
    }, []);

    return (
      <VList
        ref={ref}
        style={{ flex: 1 }}
        shift={shouldPrepend.current}
        onScroll={(offset) => {
          shouldPrepend.current = offset - prevScrollOffset.current < 0;
          prevScrollOffset.current = offset;
          if (!ref.current) return;
          if (offset < OFFSET_TO_BOUND) {
            const currentShouldPrepend = shouldPrepend.current;
            setItems((prev) => {
              return [...createItems(TOTAL_LENGTH / 4), ...prev];
            });
            setTimeout(() => {
              shouldPrepend.current = !currentShouldPrepend;
              setItems((prev) => {
                return [...prev.slice(0, (TOTAL_LENGTH * 3) / 4)];
              });
            });
          } else if (
            ref.current.scrollSize - ref.current.viewportSize - offset <
            OFFSET_TO_BOUND
          ) {
            const currentShouldPrepend = shouldPrepend.current;
            setItems((prev) => {
              return [...prev, ...createItems(TOTAL_LENGTH / 4)];
            });
            setTimeout(() => {
              shouldPrepend.current = !currentShouldPrepend;
              setItems((prev) => {
                return [...prev.slice(TOTAL_LENGTH / 4)];
              });
            });
          }
        }}
      >
        {items.map((d) => (
          <div
            key={d.id}
            style={{
              height: 100,
              backgroundColor:
                d.id % 100 === 0
                  ? "darkgray"
                  : d.id % 10 === 0
                  ? "smokegray"
                  : "white",
              borderBottom: "solid 1px #ccc",
            }}
          >
            {d.id}
          </div>
        ))}
      </VList>
    );
  },
};
