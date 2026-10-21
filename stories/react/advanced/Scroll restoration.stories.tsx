import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState, useEffect } from "react";
import { WindowVirtualizer } from "../../../src";

export default {
  component: WindowVirtualizer,
} as Meta;

const ITEM_COUNT = 100;
const ITEM_HEIGHT = 80;

interface ItemData {
  id: number;
  title: string;
}

const items: ItemData[] = Array.from({ length: ITEM_COUNT }, (_, i) => ({
  id: i,
  title: `Item #${i} (${i * ITEM_HEIGHT}px - ${(i + 1) * ITEM_HEIGHT}px)`,
}));

export const Default: StoryObj = {
  name: "Browser Back / Route Scroll Restoration",
  render: () => {
    const [view, setView] = useState<"list" | "detail">("list");
    const [selectedItem, setSelectedItem] = useState<number | null>(null);
    const [scrollY, setScrollY] = useState(0);
    const [stats, setStats] = useState({
      count: 0,
      indices: "",
      inViewport: true,
    });

    // Track scroll
    useEffect(() => {
      const onScroll = () => setScrollY(window.scrollY);
      window.addEventListener("scroll", onScroll, { passive: true });
      return () => window.removeEventListener("scroll", onScroll);
    }, []);

    // Inspect rendered DOM nodes to detect blank viewport
    useEffect(() => {
      if (view !== "list") return;

      const check = () => {
        setScrollY(window.scrollY);
        const elements = Array.from(
          document.querySelectorAll<HTMLElement>("[data-item-index]"),
        );
        if (!elements.length) {
          setStats({ count: 0, indices: "none", inViewport: false });
          return;
        }

        const indices = elements.map((el) =>
          parseInt(el.getAttribute("data-item-index") || "0", 10),
        );
        const minIdx = Math.min(...indices);
        const maxIdx = Math.max(...indices);

        const inViewport = elements.some((el) => {
          const rect = el.getBoundingClientRect();
          return rect.bottom > 0 && rect.top < window.innerHeight;
        });

        setStats({
          count: elements.length,
          indices: `#${minIdx} .. #${maxIdx}`,
          inViewport,
        });
      };

      const timer = setInterval(check, 100);
      return () => clearInterval(timer);
    }, [view]);

    const navigateToDetail = (id: number) => {
      setSelectedItem(id);
      setView("detail");
      window.scrollTo(0, 0);
    };

    const navigateBackToList = () => {
      // 1. Simulate router restoring scroll to 1600px
      window.scrollTo(0, 1600);
      // 2. Component mounts back
      setView("list");
    };

    return (
      <div style={{ minHeight: "8200px", fontFamily: "sans-serif" }}>
        {/* Sticky Control Header */}
        <div
          style={{
            position: "sticky",
            top: 0,
            zIndex: 100,
            backgroundColor: "#fff",
            borderBottom: "2px solid #e2e8f0",
            padding: "12px 16px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
          }}
        >
          <div style={{ marginBottom: 8, fontSize: 13, color: "#475569" }}>
            <strong>Use Case:</strong> User scrolls down to Item #20 (~1600px)
            $\rightarrow$ Clicks item to open Detail $\rightarrow$ Clicks
            Browser Back. Router restores <code>window.scrollY = 1600px</code>.
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              flexWrap: "wrap",
            }}
          >
            <span
              style={{
                display: "inline-block",
                padding: "4px 8px",
                borderRadius: 4,
                fontWeight: "bold",
                fontSize: 12,
                backgroundColor: stats.inViewport ? "#dcfce7" : "#fee2e2",
                color: stats.inViewport ? "#15803d" : "#b91c1c",
              }}
            >
              {stats.inViewport
                ? "🟢 In Viewport (Rendered)"
                : "🔴 BUG: BLANK VIEWPORT!"}
            </span>

            <span style={{ fontSize: 13, color: "#64748b" }}>
              window.scrollY: <strong>{scrollY}px</strong> | Rendered:{" "}
              <strong>{stats.count}</strong> items ({stats.indices})
            </span>

            {view === "list" ? (
              <>
                <button
                  onClick={() => navigateToDetail(20)}
                  style={{
                    padding: "6px 12px",
                    cursor: "pointer",
                    backgroundColor: "#3b82f6",
                    color: "#fff",
                    border: "none",
                    borderRadius: 4,
                  }}
                >
                  Click Item #20 (Go to Detail)
                </button>
                <button
                  onClick={() => {
                    window.scrollTo(0, 1600);
                    setView("detail");
                    setTimeout(() => {
                      window.scrollTo(0, 1600);
                      setView("list");
                    }, 50);
                  }}
                  style={{
                    padding: "6px 12px",
                    cursor: "pointer",
                    backgroundColor: "#f59e0b",
                    color: "#fff",
                    border: "none",
                    borderRadius: 4,
                  }}
                >
                  ⚡ Remount at 1600px (Back Navigation)
                </button>
                <button
                  onClick={() => window.scrollBy(0, 1)}
                  style={{
                    padding: "6px 12px",
                    cursor: "pointer",
                    border: "1px solid #cbd5e1",
                    borderRadius: 4,
                  }}
                >
                  Scroll +1px
                </button>
              </>
            ) : (
              <button
                onClick={navigateBackToList}
                style={{
                  padding: "6px 12px",
                  cursor: "pointer",
                  backgroundColor: "#10b981",
                  color: "#fff",
                  border: "none",
                  borderRadius: 4,
                  fontWeight: "bold",
                }}
              >
                ← Back to List (Restores Scroll at 1600px)
              </button>
            )}
          </div>
        </div>

        {/* Content Area */}
        <div style={{ padding: 16 }}>
          {view === "detail" ? (
            <div style={{ padding: 24, textAlign: "center" }}>
              <h2>Item #{selectedItem} Detail Page</h2>
              <p style={{ color: "#64748b" }}>
                Window scroll is at 0px. Click "Back to List" above to test
                scroll restoration.
              </p>
            </div>
          ) : (
            <WindowVirtualizer data={items}>
              {(item) => (
                <div
                  key={item.id}
                  data-item-index={item.id}
                  onClick={() => navigateToDetail(item.id)}
                  style={{
                    height: ITEM_HEIGHT,
                    borderBottom: "1px solid #e2e8f0",
                    display: "flex",
                    alignItems: "center",
                    padding: "0 16px",
                    cursor: "pointer",
                    backgroundColor: item.id % 2 === 0 ? "#fff" : "#f8fafc",
                  }}
                >
                  {item.title}
                </div>
              )}
            </WindowVirtualizer>
          )}
        </div>
      </div>
    );
  },
};
