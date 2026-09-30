import type { Meta, StoryObj } from "@storybook/react-vite";
import { VList, VListHandle } from "../../../src";
import React, { useLayoutEffect, useRef, useState } from "react";
import { faker } from "@faker-js/faker";
import { range } from "../common";

export default {
  component: VList,
} as Meta;

const TITLES = faker.helpers.uniqueArray(faker.book.title, 12).map((title) => ({
  title,
  genre: faker.book.genre(),
  year: faker.number.int({ min: 1980, max: 2025 }),
}));

const POSTER_WIDTH = 160;
const GAP = 8;

const Poster = ({ index }: { index: number }) => {
  const { title, genre, year } = TITLES[index]!;
  const hue = (index * 360) / TITLES.length;
  return (
    <div
      style={{
        width: POSTER_WIDTH,
        aspectRatio: "2 / 3",
        borderRadius: 6,
        padding: 12,
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        color: "white",
        background: `linear-gradient(160deg, hsl(${hue} 70% 55%), hsl(${hue + 40} 60% 18%))`,
      }}
    >
      <div style={{ fontSize: 16, fontWeight: "bold", lineHeight: 1.2 }}>
        {title}
      </div>
      <div style={{ fontSize: 12, opacity: 0.8, marginTop: 4 }}>
        {genre} · {year}
      </div>
    </div>
  );
};

export const Default: StoryObj = {
  name: "Infinite Carousel",
  render: () => {
    const TOTAL_LENGTH = 200;
    const OFFSET_TO_BOUND = 100;
    const id = useRef(0);
    // position is the continuous place in the row, and the poster cycles through TITLES by it
    const createItems = (start: number, num: number) =>
      range(num, (i) => ({ id: id.current++, position: start + i }));

    const ref = useRef<VListHandle>(null);
    const [items, setItems] = useState(() =>
      createItems(-TOTAL_LENGTH / 2, TOTAL_LENGTH),
    );

    const prevScrollOffset = useRef(-1);
    const shouldPrepend = useRef(false);

    useLayoutEffect(() => {
      ref.current?.scrollToIndex(TOTAL_LENGTH / 2);
    }, []);

    return (
      <div
        style={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          background: "#2c2f36",
          fontFamily: "sans-serif",
        }}
      >
        <VList
          ref={ref}
          horizontal
          style={{ height: (POSTER_WIDTH * 3) / 2, scrollbarWidth: "none" }}
          shift={shouldPrepend.current}
          onScroll={(offset) => {
            shouldPrepend.current = offset - prevScrollOffset.current < 0;
            prevScrollOffset.current = offset;
            if (!ref.current) return;

            const currentShouldPrepend = shouldPrepend.current;
            if (offset < OFFSET_TO_BOUND) {
              setItems((prev) => [
                ...createItems(
                  prev[0]!.position - TOTAL_LENGTH / 4,
                  TOTAL_LENGTH / 4,
                ),
                ...prev,
              ]);
              setTimeout(() => {
                shouldPrepend.current = !currentShouldPrepend;
                setItems((prev) => [...prev.slice(0, (TOTAL_LENGTH * 3) / 4)]);
              }, 50);
            } else if (
              ref.current.scrollSize - ref.current.viewportSize - offset <
              OFFSET_TO_BOUND
            ) {
              setItems((prev) => [
                ...prev,
                ...createItems(
                  prev[prev.length - 1]!.position + 1,
                  TOTAL_LENGTH / 4,
                ),
              ]);
              setTimeout(() => {
                shouldPrepend.current = !currentShouldPrepend;
                setItems((prev) => [...prev.slice(TOTAL_LENGTH / 4)]);
              }, 50);
            }
          }}
        >
          {items.map((d) => (
            <div key={d.id} style={{ paddingRight: GAP }}>
              <Poster
                index={
                  ((d.position % TITLES.length) + TITLES.length) % TITLES.length
                }
              />
            </div>
          ))}
        </VList>
      </div>
    );
  },
};
