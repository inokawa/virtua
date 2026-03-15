import type { Meta, StoryObj } from "@storybook/react-vite";
import { VList } from "../../../src";
import React, { CSSProperties, useState } from "react";
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
    const [items, setItems] = useState(() =>
      Array.from({ length: 1000 }, (_, i) => i + 1),
    );

    return (
      <DragDropProvider
        onDragEnd={(event) => {
          setItems((items) => move(items, event));
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
