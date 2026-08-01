import type { Meta, StoryObj } from "@storybook/react-vite";
import { VList } from "../../../src";
import React, { CSSProperties, forwardRef, useRef, useState } from "react";
import type { UniqueIdentifier } from "@dnd-kit/abstract";
import { DragDropProvider, DragOverlay } from "@dnd-kit/react";
import { useSortable } from "@dnd-kit/react/sortable";
import { move } from "@dnd-kit/helpers";

export default {
  component: VList,
} as Meta;

const Item = forwardRef<
  HTMLDivElement,
  { id: UniqueIdentifier; style?: CSSProperties }
>(({ id, style, ...props }, ref) => {
  return (
    <div
      {...props}
      style={{
        height: 50,
        borderBottom: "solid 1px #ccc",
        background: "#fff",
        ...style,
      }}
      ref={ref}
    >
      {id}
    </div>
  );
});

const SortableItem = (props: { id: number; index: number }) => {
  const { ref, isDragSource } = useSortable({
    id: props.id,
    index: props.index,
  });

  const style: CSSProperties = {
    cursor: "grab",
    visibility: isDragSource ? "hidden" : undefined,
  };

  return <Item ref={ref} id={props.id} style={style} />;
};

export const Default: StoryObj = {
  name: "With dnd-kit",
  render: () => {
    const [items, setItems] = useState(() =>
      Array.from({ length: 1000 }, (_, i) => i + 1),
    );
    const itemsBeforeDrag = useRef(items);

    return (
      <DragDropProvider
        onDragStart={() => {
          itemsBeforeDrag.current = items;
        }}
        onDragOver={(event) => {
          // Reorder the items while dragging instead of on drag end. The
          // default optimistic sorting only moves the elements that are
          // currently rendered, which doesn't work in a virtualized list where
          // items outside of the viewport are unmounted.
          setItems((items) => move(items, event));
        }}
        onDragEnd={(event) => {
          if (event.canceled) {
            setItems(itemsBeforeDrag.current);
          }
        }}
      >
        <VList style={{ width: 400, height: 600 }}>
          {items.map((id, index) => (
            <SortableItem key={id} id={id} index={index} />
          ))}
        </VList>
        <DragOverlay
          // The drop animation would show the row twice while it plays: the
          // overlay flies in while the source row is already back in place.
          // Revealing the source only after the animation instead flashes an
          // empty row, because the overlay is hidden a frame before React
          // rerenders. Dropping instantly avoids both.
          dropAnimation={null}
        >
          {(source) => <Item id={source.id} />}
        </DragOverlay>
      </DragDropProvider>
    );
  },
};
