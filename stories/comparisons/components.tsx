import React, { forwardRef, useEffect, useRef } from "react";

export const ScrollInput = ({ count }: { count: number }) => {
  return (
    <label style={{ width: "100%" }}>
      scroll position:
      <input
        type="range"
        defaultValue="0"
        min={0}
        max={count}
        style={{ width: "85%" }}
        onChange={(e) => {
          const scrollables = Array.from(
            document.querySelectorAll('*[style*="overflow"]')
          ).filter(
            (d) =>
              /(auto|scroll)/.test((d as HTMLElement).style.overflow) ||
              /(auto|scroll)/.test((d as HTMLElement).style.overflowY)
          );
          scrollables.forEach((el) => {
            el.scrollTop = (el.scrollHeight / count) * Number(e.target.value);
          });
        }}
      />
    </label>
  );
};

const heights = [20, 40, 80, 77];
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
        height: heights[i % heights.length],
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
