import type { Meta, StoryObj } from "@storybook/react-vite";
import { CustomItemComponentProps, VList } from "../../../src";
import React, {
  createContext,
  forwardRef,
  useContext,
  useLayoutEffect,
  useState,
} from "react";

export default {
  component: VList,
} as Meta;

const ZoomContext = createContext(1);
const ListItem = forwardRef<HTMLDivElement, CustomItemComponentProps>(
  ({ children, style }, ref) => {
    const zoom = useContext(ZoomContext);
    const [height, setHeight] = useState<number | undefined>();
    useLayoutEffect(() => {
      if (Math.round(zoom * 10000) === 10000) {
        setHeight(undefined);
        return;
      }
      if (!ref || !("current" in ref) || !ref.current) return;
      const rect = ref.current.children[0].getBoundingClientRect();
      setHeight(rect.height);
    }, [ref, zoom]);

    return (
      <div ref={ref} style={{ ...style, height }}>
        {children}
      </div>
    );
  },
);

export const Default: StoryObj = {
  name: "Zoomable",
  render: () => {
    const [zoom, setZoom] = useState(1);
    return (
      <div style={{ height: 600 }}>
        <div>
          <label style={{ width: "100%" }}>
            zoom x{zoom}
            <input
              type="range"
              value={zoom}
              min={0.1}
              max={10}
              step={0.01}
              style={{ width: "85%" }}
              onChange={(e) => {
                setZoom(Number(e.target.value));
              }}
            />
          </label>
        </div>
        <div
          style={{
            overflow: "hidden",
            width: 500,
            height: 500,
          }}
        >
          <ZoomContext.Provider value={zoom}>
            <VList item={ListItem}>
              {Array.from({ length: 1000 }).map((_, i) => {
                return (
                  <div
                    key={i}
                    style={{
                      height: 40,
                      background: "#fff",
                      borderBottom: "solid 1px #ccc",
                      transform: `scale(${zoom})`,
                      transformOrigin: "left top",
                    }}
                  >
                    {i}
                  </div>
                );
              })}
            </VList>
          </ZoomContext.Provider>
        </div>
      </div>
    );
  },
};
