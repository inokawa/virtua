import type { Meta, StoryObj } from "@storybook/react-vite";
import { VList } from "../../../src";
import React, { CSSProperties, useRef, useState } from "react";
import { range } from "../common";
import { DragDropProvider, DragOverlay } from "@dnd-kit/react";
import { useSortable } from "@dnd-kit/react/sortable";
import { move } from "@dnd-kit/helpers";

export default {
  component: VList,
} as Meta;

const itemStyle: CSSProperties = {
  height: 50,
  borderBottom: "solid 1px #ccc",
  background: "#fff",
};

const SortableItem = ({ id, index }: { id: number; index: number }) => {
  const { ref, isDragging } = useSortable({ id, index });

  return (
    <div
      ref={ref}
      style={{
        ...itemStyle,
        cursor: "grab",
        opacity: isDragging ? 0 : undefined,
      }}
    >
      {id}
    </div>
  );
};

export const Default: StoryObj = {
  name: "With dnd-kit",
  render: () => {
    const [items, setItems] = useState(() => range(1000, (i) => i + 1));
    const snapshot = useRef(items);

    return (
      <DragDropProvider
        onDragStart={() => {
          snapshot.current = structuredClone(items);
        }}
        onDragOver={(event) => {
          setItems((items) => move(items, event));
        }}
        onDragEnd={(event) => {
          if (event.canceled) {
            setItems(snapshot.current);
          }
        }}
      >
        <VList style={{ width: 400, height: 600 }}>
          {items.map((id, index) => (
            <SortableItem key={id} id={id} index={index} />
          ))}
        </VList>
        <DragOverlay>
          {(source) => <div style={itemStyle}>{source.id}</div>}
        </DragOverlay>
      </DragDropProvider>
    );
  },
};
