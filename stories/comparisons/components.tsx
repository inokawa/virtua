import React from "react";

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
