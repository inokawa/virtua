import type { Meta, StoryObj } from "@storybook/react-vite";
import React, { useRef, useState } from "react";
import { VList } from "../../../src";

export default {
  component: VList,
} as Meta;

const items = Array.from({ length: 200 }, (_, index) => index + 1);

export const Default: StoryObj = {
  render: () => {
    const pageRef = useRef<HTMLDivElement>(null);
    const [result, setResult] = useState("Ready");

    const reproduce = () => {
      const runAttempt = (attempt: number) => {
        const page = pageRef.current;
        const scroller = page?.querySelector<HTMLElement>(".scroller");
        if (!page || !scroller) return;

        scroller.scrollTop = scroller.scrollHeight;
        setResult(`Starting attempt ${attempt}…`);

        requestAnimationFrame(() => {
          const initialOffset = scroller.scrollTop;
          let hidden = false;

          const onScroll = () => {
            if (hidden || scroller.scrollTop > initialOffset - 200) return;

            hidden = true;
            setTimeout(() => {
              page.style.display = "none";

              setTimeout(() => {
                page.style.removeProperty("display");

                setTimeout(() => {
                  const bounds = scroller.getBoundingClientRect();
                  const visibleRows = Array.from(
                    scroller.querySelectorAll("[data-row]"),
                  ).filter((row) => {
                    const rowBounds = row.getBoundingClientRect();
                    return (
                      rowBounds.bottom > bounds.top &&
                      rowBounds.top < bounds.bottom
                    );
                  }).length;

                  scroller.removeEventListener("scroll", onScroll);
                  if (visibleRows > 0 && attempt < 3) {
                    setTimeout(() => runAttempt(attempt + 1), 100);
                    return;
                  }

                  setResult(
                    visibleRows === 0
                      ? "Blank list reproduced"
                      : "Did not reproduce",
                  );
                }, 100);
              }, 1_000);
            });
          };

          scroller.addEventListener("scroll", onScroll);
          scroller.scrollTo({ top: 0, behavior: "smooth" });
        });
      };

      runAttempt(1);
    };

    return (
      <div style={{ padding: 16 }}>
        <button onClick={reproduce}>Reproduce</button>
        <output style={{ marginLeft: 12 }}>{result}</output>
        <div ref={pageRef} style={{ marginTop: 16 }}>
          <VList className="scroller" style={{ height: 400 }}>
            {items.map((item) => (
              <div
                data-row
                key={item}
                style={{
                  height: 64,
                  padding: 16,
                  borderBottom: "1px solid #ccc",
                  boxSizing: "border-box",
                }}
              >
                Row {item}
              </div>
            ))}
          </VList>
        </div>
      </div>
    );
  },
};
