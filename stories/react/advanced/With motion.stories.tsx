import type { Meta, StoryObj } from "@storybook/react-vite";
import { Virtualizer } from "../../../src";
import React, { CSSProperties, useRef, useState } from "react";
import { motion } from "motion/react";
import { faker } from "@faker-js/faker";

export default {
  component: Virtualizer,
} as Meta;

type Song = {
  id: number;
  title: string;
  artist: string;
  duration: string;
};

const iconButtonStyle: CSSProperties = {
  width: 28,
  height: 28,
  border: "none",
  borderRadius: 6,
  background: "transparent",
  color: "#6b7280",
  cursor: "pointer",
};

const Item = ({
  song,
  animateIn,
  isStart,
  isEnd,
  onUp,
  onDown,
  onDelete,
  onAnimatedIn,
}: {
  song: Song;
  animateIn: boolean;
  isStart: boolean;
  isEnd: boolean;
  onUp: () => void;
  onDown: () => void;
  onDelete: () => void;
  onAnimatedIn: () => void;
}) => {
  const [removing, setRemoving] = useState(false);
  return (
    <motion.div
      // animates the move when the item is reordered or the items above are removed
      layout="position"
      // plays only for newly added items, not for items remounted by scrolling
      initial={animateIn ? { opacity: 0, x: -16 } : false}
      // fades out before removal. Collapsing the height to 0 instead would leave
      // a 0 size in the virtualizer's cache for the next item at that index.
      animate={removing ? { opacity: 0, x: 16 } : { opacity: 1, x: 0 }}
      transition={{ duration: 0.25 }}
      onAnimationComplete={() => {
        if (removing) {
          onDelete();
        } else if (animateIn) {
          onAnimatedIn();
        }
      }}
    >
      <div style={{ padding: "4px 8px" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            padding: "8px 8px 8px 12px",
            borderRadius: 8,
            background: "#fff",
            boxShadow: "0 1px 2px rgba(0, 0, 0, 0.08)",
          }}
        >
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontWeight: 500 }}>{song.title}</div>
            <div style={{ fontSize: 12, color: "#6b7280" }}>
              {song.artist} · {song.duration}
            </div>
          </div>
          <button
            style={iconButtonStyle}
            disabled={isStart}
            onClick={onUp}
            aria-label="Move up"
          >
            ↑
          </button>
          <button
            style={iconButtonStyle}
            disabled={isEnd}
            onClick={onDown}
            aria-label="Move down"
          >
            ↓
          </button>
          <button
            style={iconButtonStyle}
            disabled={removing}
            onClick={() => setRemoving(true)}
            aria-label="Remove"
          >
            ✕
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export const Default: StoryObj = {
  name: "With motion",
  render: () => {
    const id = useRef(0);
    const createItem = (): Song => ({
      id: ++id.current,
      title: faker.music.songName(),
      artist: faker.music.artist(),
      duration: `${faker.number.int({ min: 2, max: 5 })}:${String(faker.number.int({ min: 0, max: 59 })).padStart(2, "0")}`,
    });
    const [items, setItems] = useState(() =>
      Array.from({ length: 100 }).map(createItem),
    );
    const [addedIds] = useState(() => new Set<number>());

    const move = (from: number, to: number) => {
      setItems((prev) => {
        const next = [...prev];
        next.splice(to, 0, next.splice(from, 1)[0]!);
        return next;
      });
    };

    return (
      <div
        style={{
          height: "100vh",
          width: 400,
          display: "flex",
          flexDirection: "column",
          background: "#f3f4f6",
          fontFamily: "system-ui, sans-serif",
          fontSize: 14,
        }}
      >
        <motion.div layoutScroll style={{ overflowY: "auto", flex: 1 }}>
          <Virtualizer>
            {items.map((item, i) => (
              <Item
                key={item.id}
                song={item}
                animateIn={addedIds.has(item.id)}
                isStart={i === 0}
                isEnd={i === items.length - 1}
                onUp={() => move(i, i - 1)}
                onDown={() => move(i, i + 1)}
                onDelete={() => {
                  setItems((prev) => prev.filter((d) => d.id !== item.id));
                }}
                onAnimatedIn={() => {
                  addedIds.delete(item.id);
                }}
              />
            ))}
          </Virtualizer>
        </motion.div>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            padding: 8,
            borderTop: "solid 1px #e5e7eb",
            background: "#fff",
          }}
        >
          <button
            onClick={() => {
              const item = createItem();
              addedIds.add(item.id);
              setItems((prev) => [...prev, item]);
            }}
          >
            append
          </button>
        </div>
      </div>
    );
  },
};
