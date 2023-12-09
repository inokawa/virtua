import React, { forwardRef, useEffect, useRef } from "react";
import { faker } from "@faker-js/faker";

export type ListHandle = { scrollToIndex: (index: number) => void };

export type TestComponent = typeof SimpleItem;

export const SimpleItem = forwardRef<HTMLDivElement, { index: number }>(
  ({ index: i }, ref) => {
    return (
      <div
        ref={ref}
        style={{
          height: 50,
          borderBottom: "solid 1px #ccc",
          background: "#fff",
        }}
      >
        {i}
      </div>
    );
  }
);

const heights = [20, 40, 80, 77, 32, 200];
export const DynamicItem = forwardRef<HTMLDivElement, { index: number }>(
  ({ index: i }, ref) => {
    return (
      <div
        ref={ref}
        style={{
          height: heights[i % heights.length],
          borderBottom: "solid 1px #ccc",
          background: "#fff",
        }}
      >
        {i}
      </div>
    );
  }
);

export const HeavyItem = forwardRef<HTMLDivElement, { index: number }>(
  ({ index: i }, ref) => {
    let count = 0;
    while (count <= 10000000) {
      count++;
    }
    return (
      <div
        ref={ref}
        style={{
          height: 50,
          borderBottom: "solid 1px #ccc",
          background: "#fff",
        }}
      >
        {i}
      </div>
    );
  }
);

export const ItemWithRenderCount = forwardRef<
  HTMLDivElement,
  { index: number }
>(({ index: i }, ref) => {
  const count = useRef(1);
  useEffect(() => {
    count.current += 1;
  });
  return (
    <div
      ref={ref}
      style={{
        height: 50,
        borderBottom: "solid 1px #ccc",
        background: "#fff",
        display: "flex",
        justifyContent: "stretch",
        padding: "4px 20px",
      }}
    >
      <div style={{ flex: 1 }}>{i}</div>
      <div>rendered: {count.current}</div>
    </div>
  );
});

export const DynamicImageItem = forwardRef<HTMLDivElement, { index: number }>(
  ({ index: i }, ref) => {
    faker.seed(i);

    return (
      <div
        ref={ref}
        style={{
          borderBottom: "solid 1px #ccc",
          background: "#fff",
          padding: 20,
        }}
      >
        <div>{i}</div>
        <div style={{ width: "100%" }}>
          <img src={faker.image.url()} style={{ width: "100%" }} />
        </div>
      </div>
    );
  }
);
