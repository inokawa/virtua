import { Meta, StoryObj } from "@storybook/react";
import { List } from "../../src";
import React, { CSSProperties, forwardRef, useCallback, useState } from "react";
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragOverlay,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
  useSortable,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

export default {
  component: List,
} as Meta;

const Item = forwardRef<HTMLDivElement, { id: number; style?: CSSProperties }>(
  ({ id, style, ...props }, ref) => {
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
  }
);

const SortableItem = (props: { id: number }) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: props.id });

  const style: CSSProperties = {
    transform: CSS.Transform.toString(transform),
    transition,
    cursor: "grab",
    visibility: isDragging ? "hidden" : undefined,
  };

  return (
    <Item
      ref={setNodeRef}
      id={props.id}
      style={style}
      {...attributes}
      {...listeners}
    />
  );
};

export const Default: StoryObj = {
  name: "With dnd-kit",
  render: () => {
    const [items, setItems] = useState(() =>
      Array.from({ length: 1000 }, (_, i) => i + 1)
    );
    const [activeId, setActiveId] = useState<number | null>(null);
    const sensors = useSensors(
      useSensor(PointerSensor),
      useSensor(KeyboardSensor, {
        coordinateGetter: sortableKeyboardCoordinates,
      })
    );

    return (
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragStart={useCallback((event) => {
          setActiveId(event.active.id);
        }, [])}
        onDragEnd={useCallback((event) => {
          const { active, over } = event;

          if (active.id !== over.id) {
            setItems((items) => {
              const oldIndex = items.indexOf(active.id);
              const newIndex = items.indexOf(over.id);
              return arrayMove(items, oldIndex, newIndex);
            });
          }
          setActiveId(null);
        }, [])}
      >
        <SortableContext items={items} strategy={verticalListSortingStrategy}>
          <List style={{ width: 400, height: 600 }}>
            {items.map((id) => (
              <SortableItem key={id} id={id} />
            ))}
          </List>
        </SortableContext>
        <DragOverlay>
          {activeId != null ? <Item id={activeId} /> : null}
        </DragOverlay>
      </DndContext>
    );
  },
};
