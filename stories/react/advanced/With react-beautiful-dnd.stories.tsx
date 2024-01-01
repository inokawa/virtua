import { Meta, StoryObj } from "@storybook/react";
import {
  CustomItemComponentProps,
  CustomViewportComponentProps,
  VList,
} from "../../../src";
import React, {
  CSSProperties,
  createContext,
  forwardRef,
  useContext,
  useLayoutEffect,
  useMemo,
  useState,
} from "react";
import {
  DragDropContext,
  Droppable,
  Draggable,
  DraggableProvided,
  DroppableProvided,
} from "react-beautiful-dnd";
import { mergeRefs } from "react-merge-refs";

export default {
  component: VList,
} as Meta;

const ITEM_HEIGHT = 50;

const Item = ({
  id,
  isDragging,
  provided,
}: {
  id: string;
  isDragging: boolean;
  provided: DraggableProvided;
}) => {
  return (
    <div
      {...provided.draggableProps}
      {...provided.dragHandleProps}
      ref={provided.innerRef}
      style={{
        height: ITEM_HEIGHT,
        borderBottom: "solid 1px #ccc",
        background: isDragging ? "skyblue" : "#fff",
        ...provided.draggableProps.style,
      }}
    >
      {id}
    </div>
  );
};

const ScrollerRefContext = createContext<DroppableProvided["innerRef"]>(null!);

const ItemWithMinHeight = forwardRef<HTMLDivElement, CustomItemComponentProps>(
  ({ children, style }, ref) => {
    return (
      <div ref={ref} style={{ ...style, minHeight: ITEM_HEIGHT }}>
        {children}
      </div>
    );
  }
);

const Viewport = forwardRef<HTMLDivElement, CustomViewportComponentProps>(
  ({ children, attrs, width, height, scrolling }, ref) => {
    useLayoutEffect(() => {
      // Ignore ResizeObserver errors because ResizeObserver used in virtua can cause error on window
      // (https://github.com/inokawa/virtua#what-is-resizeobserver-loop-completed-with-undelivered-notifications-error)
      // and react-beautiful-dnd aborts dragging when it detects any errors on window.
      // (https://github.com/atlassian/react-beautiful-dnd/blob/master/docs/guides/setup-problem-detection-and-error-recovery.md#error-is-caught-by-window-error-listener)
      //
      // Set event listener here in this example because useLayoutEffect/componentDidMount will be called from children to parent usually.
      const onError = (e: ErrorEvent) => {
        if (e.message.includes("ResizeObserver")) {
          e.stopImmediatePropagation();
        }
      };
      window.addEventListener("error", onError);
      return () => {
        window.removeEventListener("error", onError);
      };
    }, []);

    const droppableRef = useContext(ScrollerRefContext);
    return (
      <div ref={mergeRefs([ref, droppableRef])} {...attrs}>
        <div
          style={useMemo((): CSSProperties => {
            return {
              contain: "content",
              position: "relative",
              visibility: "hidden",
              width: width ?? "100%",
              height: height ?? "100%",
              pointerEvents: scrolling ? "none" : "auto",
            };
          }, [width, height, scrolling])}
        >
          {children}
        </div>
      </div>
    );
  }
);

export const Default: StoryObj = {
  name: "With react-beautiful-dnd",
  render: () => {
    const [items, setItems] = useState(() =>
      Array.from({ length: 1000 }, (_, i) => String(i + 1))
    );

    return (
      <DragDropContext
        onDragEnd={({ source, destination }) => {
          if (!destination) {
            return;
          }
          if (source.index === destination.index) {
            return;
          }

          const startIndex = source.index;
          const endIndex = destination.index;

          setItems((items) => {
            const result = Array.from(items);
            const [removed] = result.splice(startIndex, 1);
            result.splice(endIndex, 0, removed);

            return result;
          });
        }}
      >
        <Droppable
          droppableId="droppable"
          mode="virtual"
          renderClone={(provided, snapshot, rubric) => (
            <Item
              id={items[rubric.source.index]}
              isDragging={snapshot.isDragging}
              provided={provided}
            />
          )}
        >
          {(provided) => (
            <ScrollerRefContext.Provider value={provided.innerRef}>
              <VList
                style={{ width: 400, height: 600 }}
                components={{ Root: Viewport, Item: ItemWithMinHeight }}
              >
                {items.map((id, i) => (
                  <Draggable key={id} draggableId={id} index={i}>
                    {(provided) => (
                      <Item id={id} isDragging={false} provided={provided} />
                    )}
                  </Draggable>
                ))}
              </VList>
            </ScrollerRefContext.Provider>
          )}
        </Droppable>
      </DragDropContext>
    );
  },
};
