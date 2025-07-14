import { Meta, StoryObj } from "@storybook/react-vite";
import { VList } from "../../../src";
import React, { useEffect, useRef, useState } from "react";
import {
  draggable,
  dropTargetForElements,
  monitorForElements,
} from "@atlaskit/pragmatic-drag-and-drop/element/adapter";
import { combine } from "@atlaskit/pragmatic-drag-and-drop/combine";
import { reorder } from "@atlaskit/pragmatic-drag-and-drop/reorder";
import { pointerOutsideOfPreview } from "@atlaskit/pragmatic-drag-and-drop/element/pointer-outside-of-preview";
import { setCustomNativeDragPreview } from "@atlaskit/pragmatic-drag-and-drop/element/set-custom-native-drag-preview";
import {
  attachClosestEdge,
  extractClosestEdge,
} from "@atlaskit/pragmatic-drag-and-drop-hitbox/closest-edge";
import type { Edge } from "@atlaskit/pragmatic-drag-and-drop-hitbox/types";
import { getReorderDestinationIndex } from "@atlaskit/pragmatic-drag-and-drop-hitbox/util/get-reorder-destination-index";
import { autoScrollForElements } from "@atlaskit/pragmatic-drag-and-drop-auto-scroll/element";
import { DropIndicator } from "@atlaskit/pragmatic-drag-and-drop-react-drop-indicator/box";
import { createPortal } from "react-dom";

export default {
  component: VList,
} as Meta;

type ItemState =
  | { type: "idle" }
  | { type: "preview"; container: HTMLElement }
  | { type: "dragging" }
  | { type: "is-over"; closestEdge: Edge | null };

const idleState: ItemState = { type: "idle" };
const draggingState: ItemState = { type: "dragging" };

const SortableItem = ({ id }: { id: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const dragHandleRef = useRef<HTMLDivElement>(null);

  const [state, setState] = useState<ItemState>(idleState);

  useEffect(() => {
    const element = ref.current!;
    const data = { id };

    return combine(
      draggable({
        element,
        dragHandle: dragHandleRef.current!,
        getInitialData: () => data,
        onGenerateDragPreview({ nativeSetDragImage }) {
          setCustomNativeDragPreview({
            nativeSetDragImage,
            getOffset: pointerOutsideOfPreview({
              x: "16px",
              y: "8px",
            }),
            render({ container }) {
              setState({ type: "preview", container });

              return () => setState(draggingState);
            },
          });
        },
        onDragStart() {
          setState(draggingState);
        },
        onDrop() {
          setState(idleState);
        },
      }),
      dropTargetForElements({
        element,
        canDrop({ source }) {
          return source.data.id !== id;
        },
        getIsSticky: () => true,
        getData({ input }) {
          return attachClosestEdge(data, {
            element,
            input,
            allowedEdges: ["top", "bottom"],
          });
        },
        onDrag({ self }) {
          const closestEdge = extractClosestEdge(self.data);

          setState((current) => {
            if (
              current.type === "is-over" &&
              current.closestEdge === closestEdge
            ) {
              return current;
            }
            return { type: "is-over", closestEdge };
          });
        },
        onDragLeave() {
          setState(idleState);
        },
        onDrop() {
          setState(idleState);
        },
      })
    );
  }, [id]);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        columnGap: 16,
        padding: "8px 16px",
        height: 40,
        borderBottom: "solid 1px #ccc",
        background: "#fff",
        opacity: state.type === "dragging" ? 0.4 : undefined,
        zIndex: state.type === "is-over" && state.closestEdge ? 1 : undefined,
        // disable pointer-events: none of virtualizer
        pointerEvents: "auto",
      }}
      ref={ref}
    >
      <div ref={dragHandleRef} style={{ cursor: "grab" }}>
        ⠿
      </div>
      <div>{id}</div>
      {state.type === "is-over" && state.closestEdge && (
        <DropIndicator edge={state.closestEdge} />
      )}
      {state.type === "preview" &&
        createPortal(
          <div style={{ padding: "8px 16px", background: "#fff" }}>{id}</div>,
          state.container
        )}
    </div>
  );
};

export const Default: StoryObj = {
  name: "With pragmatic-drag-and-drop",
  render: () => {
    const [items, setItems] = useState(() =>
      Array.from({ length: 1000 }, (_, i) => ({ id: i + 1 }))
    );

    useEffect(() => {
      // get scrollable element of VList
      const scrollContainer = document.getElementById("vlist")!;

      return combine(
        monitorForElements({
          onDrop({ location, source }) {
            const target = location.current.dropTargets[0];
            if (!target) {
              return;
            }

            const startIndex = items.findIndex(
              (item) => item.id === source.data.id
            );
            if (startIndex < 0) {
              return;
            }

            const indexOfTarget = items.findIndex(
              (item) => item.id === target.data.id
            );
            if (indexOfTarget < 0) {
              return;
            }

            const finishIndex = getReorderDestinationIndex({
              startIndex,
              closestEdgeOfTarget: extractClosestEdge(target.data),
              indexOfTarget,
              axis: "vertical",
            });

            if (finishIndex !== startIndex) {
              setItems((prev) => {
                return reorder({
                  list: prev,
                  startIndex,
                  finishIndex,
                });
              });
            }
          },
        }),
        autoScrollForElements({
          canScroll: () => true,
          element: scrollContainer,
        })
      );
    }, [items]);

    return (
      <VList id="vlist" style={{ width: 400, height: 600 }}>
        {items.map((item) => (
          <SortableItem key={item.id} id={item.id} />
        ))}
      </VList>
    );
  },
};
