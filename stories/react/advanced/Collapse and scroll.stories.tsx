import { Meta, StoryObj } from "@storybook/react";
import { VList, VListHandle } from "../../../src";
import React, {
  CSSProperties,
  ReactNode,
  useMemo,
  useRef,
  useState,
} from "react";
import { range } from "../common";

export default {
  component: VList,
} as Meta;

const itemStyle: CSSProperties = {
  borderTop: "solid 1px #ccc",
  background: "#fff",
  padding: 32,
  paddingTop: 48,
  paddingBottom: 48,
  whiteSpace: "pre-wrap",
};

type Data = {
  id: number;
};

const Item = ({ content }: { content: ReactNode }) => {
  return <div style={itemStyle}>{content}</div>;
};

export const Default: StoryObj = {
  name: "Collapse and scroll",
  render: () => {
    const [itemCollapseState, setItemCollapseState] = useState<
      Record<string, boolean>
    >({});
    const id = useRef(0);
    const createItem = (): Data => {
      return {
        id: id.current++,
      };
    };
    const createItems = (num: number) => range(num, createItem);

    const ref = useRef<VListHandle>(null);
    const [items] = useState(() => createItems(30));
    const elements = useMemo(
      () =>
        items.map((d) => (
          <Item
            key={d.id}
            content={
              <Collapser
                id={d.id}
                isCollapsed={itemCollapseState[d.id]}
                resize={() => {
                  setItemCollapseState((state) => ({
                    ...state,
                    [d.id]: !state[d.id],
                  }));
                }}
                scroll={() => {
                  ref.current?.scrollToIndex(d.id, { smooth: true });
                }}
              />
            }
          />
        )),
      [items, itemCollapseState]
    );

    return (
      <VList ref={ref} style={{ flex: 1 }}>
        {elements}
      </VList>
    );
  },
};

const Collapser = ({
  id,
  isCollapsed,
  resize,
  scroll,
}: {
  id: number;
  isCollapsed: boolean;
  resize: () => void;
  scroll: () => void;
}) => {
  return (
    <div
      style={{
        transition: "height 250ms linear",
        height: isCollapsed ? 200 : 600,
        background: "#ccc",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "16px",
      }}
    >
      <div>{id}</div>
      <button onClick={resize}>Resize</button>
      <button onClick={scroll}>Smooth Scroll</button>
      <button
        onClick={() => {
          resize();
          scroll();
        }}
      >
        Resize + Smooth Scroll
      </button>
    </div>
  );
};
