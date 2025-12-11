import React, { useRef, useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  HeavyJsItem,
  DynamicItem,
  SimpleItem,
  TestComponent,
  ItemWithRenderCount,
  ListHandle,
  DynamicImageItem,
  HeavyDOMItem,
} from "./components/common";
import { ReactVirtualList } from "./components/react-virtual";
import { ReactVirtuosoList } from "./components/react-virtuoso";
import { ReactVirtualizedList } from "./components/react-virtualized";
import { ReactWindowList } from "./components/react-window";
import { VirtuaList } from "./components/virtua";

export default {
  component: DynamicItem,
  tags: ["comparison"],
} satisfies Meta;

const ScrollInput = ({ count }: { count: number }) => {
  return (
    <input
      type="range"
      defaultValue="0"
      min={0}
      max={count}
      style={{ width: "85%" }}
      onChange={(e) => {
        const scrollables = Array.from(
          document.querySelectorAll('*[style*="overflow"]')
        ).filter(
          (d) =>
            /(auto|scroll)/.test((d as HTMLElement).style.overflow) ||
            /(auto|scroll)/.test((d as HTMLElement).style.overflowY)
        );
        scrollables.forEach((el) => {
          el.scrollTop = (el.scrollHeight / count) * Number(e.target.value);
        });
      }}
    />
  );
};

type LibraryName =
  | "react-virtualized"
  | "react-window"
  | "react-virtuoso"
  | "react-virtual";

const getList = (name: LibraryName) => {
  switch (name) {
    case "react-virtualized":
      return ReactVirtualizedList;
    case "react-window":
      return ReactWindowList;
    case "react-virtuoso":
      return ReactVirtuosoList;
    case "react-virtual":
      return ReactVirtualList;
  }
};

const Frame = ({
  count,
  ItemComponent,
}: {
  count: number;
  ItemComponent: TestComponent;
}) => {
  const [name, setName] = useState<LibraryName>("react-virtualized");
  const leftRef = useRef<ListHandle>(null);
  const rightRef = useRef<ListHandle>(null);
  const ComparedList = getList(name);

  return (
    <div style={{ height: "100vh", display: "flex", flexDirection: "column" }}>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div style={{ flex: 1 }}>virtua</div>
        <div style={{ flex: 1 }}>
          <select
            value={name}
            onChange={(e) => setName(e.target.value as LibraryName)}
          >
            <option value="react-virtualized">react-virtualized</option>
            <option value="react-window">react-window</option>
            <option value="react-virtuoso">react-virtuoso</option>
            <option value="react-virtual">react-virtual</option>
          </select>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <label>
          scroll to index:
          <input
            defaultValue={100}
            type="number"
            min={0}
            max={count - 1}
            step={1}
          />
          <button
            onClick={(e) => {
              const index = Number(
                ((e.target as HTMLElement).previousSibling as HTMLInputElement)
                  .value
              );
              leftRef.current?.scrollToIndex(index);
              rightRef.current?.scrollToIndex(index);
            }}
          >
            scroll
          </button>
        </label>
      </div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <label style={{ width: "100%" }}>
          scroll position:
          <ScrollInput count={count} />
        </label>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flex: 1,
          gap: 8,
          overflow: "hidden",
        }}
      >
        <div style={{ width: "50%" }}>
          <VirtuaList
            handle={leftRef}
            count={count}
            Component={ItemComponent}
          />
        </div>
        <div style={{ width: "50%" }}>
          <ComparedList
            handle={rightRef}
            count={count}
            Component={ItemComponent}
          />
        </div>
      </div>
    </div>
  );
};

export const RenderCount: StoryObj = {
  render: () => {
    const ROW_COUNT = 10000;
    return <Frame count={ROW_COUNT} ItemComponent={ItemWithRenderCount} />;
  },
};

export const DynamicHeight: StoryObj = {
  render: () => {
    const ROW_COUNT = 10000;
    return <Frame count={ROW_COUNT} ItemComponent={DynamicItem} />;
  },
};

export const HeavyDOM: StoryObj = {
  render: () => {
    const ROW_COUNT = 10000;
    return <Frame count={ROW_COUNT} ItemComponent={HeavyDOMItem} />;
  },
};

export const HeavyJS: StoryObj = {
  render: () => {
    const ROW_COUNT = 10000;
    return <Frame count={ROW_COUNT} ItemComponent={HeavyJsItem} />;
  },
};

export const DynamicImage: StoryObj = {
  render: () => {
    const ROW_COUNT = 10000;
    return <Frame count={ROW_COUNT} ItemComponent={DynamicImageItem} />;
  },
};

export const OneMillion: StoryObj = {
  render: () => {
    const ROW_COUNT = 1000000;
    return <Frame count={ROW_COUNT} ItemComponent={SimpleItem} />;
  },
};
